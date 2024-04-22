import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pubsubV1TxRegistry from "./v1/tx.registry";
import * as pubsubV1TxAmino from "./v1/tx.amino";
export const pubsubAminoConverters = {
  ...pubsubV1TxAmino.AminoConverter
};
export const pubsubProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...pubsubV1TxRegistry.registry];
export const getSigningPubsubClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...pubsubProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pubsubAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPubsubClient = async ({
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
  } = getSigningPubsubClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};