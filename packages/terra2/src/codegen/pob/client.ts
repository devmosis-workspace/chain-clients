import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as pobBuilderV1TxRegistry from "./builder/v1/tx.registry";
import * as pobBuilderV1TxAmino from "./builder/v1/tx.amino";
export const pobAminoConverters = {
  ...pobBuilderV1TxAmino.AminoConverter
};
export const pobProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...pobBuilderV1TxRegistry.registry];
export const getSigningPobClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...pobProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pobAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPobClient = async ({
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
  } = getSigningPobClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};