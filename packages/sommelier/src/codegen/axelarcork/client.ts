import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as axelarcorkV1TxRegistry from "./v1/tx.registry";
import * as axelarcorkV1TxAmino from "./v1/tx.amino";
export const axelarcorkAminoConverters = {
  ...axelarcorkV1TxAmino.AminoConverter
};
export const axelarcorkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...axelarcorkV1TxRegistry.registry];
export const getSigningAxelarcorkClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...axelarcorkProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...axelarcorkAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAxelarcorkClient = async ({
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
  } = getSigningAxelarcorkClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};