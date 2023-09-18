import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as interchainqueriesTxRegistry from "../interchainqueries/tx.registry";
import * as interchaintxsV1TxRegistry from "../interchaintxs/v1/tx.registry";
import * as transferV1TxRegistry from "../transfer/v1/tx.registry";
import * as interchainqueriesTxAmino from "../interchainqueries/tx.amino";
import * as interchaintxsV1TxAmino from "../interchaintxs/v1/tx.amino";
import * as transferV1TxAmino from "../transfer/v1/tx.amino";
export const neutronAminoConverters = {
  ...interchainqueriesTxAmino.AminoConverter,
  ...interchaintxsV1TxAmino.AminoConverter,
  ...transferV1TxAmino.AminoConverter
};
export const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...interchainqueriesTxRegistry.registry, ...interchaintxsV1TxRegistry.registry, ...transferV1TxRegistry.registry];
export const getSigningNeutronClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...neutronProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...neutronAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningNeutronClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningNeutronClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};