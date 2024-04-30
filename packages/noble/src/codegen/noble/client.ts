import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as nobleForwardingV1TxRegistry from "./forwarding/v1/tx.registry";
import * as tokenfactoryTxRegistry from "../tokenfactory/tx.registry";
import * as nobleForwardingV1TxAmino from "./forwarding/v1/tx.amino";
import * as tokenfactoryTxAmino from "../tokenfactory/tx.amino";
export const nobleAminoConverters = {
  ...nobleForwardingV1TxAmino.AminoConverter,
  ...tokenfactoryTxAmino.AminoConverter
};
export const nobleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...nobleForwardingV1TxRegistry.registry, ...tokenfactoryTxRegistry.registry];
export const getSigningNobleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...nobleProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...nobleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningNobleClient = async ({
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
  } = getSigningNobleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};