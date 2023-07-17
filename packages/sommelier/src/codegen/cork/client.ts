import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as corkV1TxRegistry from "./v1/tx.registry";
import * as corkV1TxAmino from "./v1/tx.amino";
export const corkAminoConverters = {
  ...corkV1TxAmino.AminoConverter
};
export const corkProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...corkV1TxRegistry.registry];
export const getSigningCorkClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...corkProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...corkAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCorkClient = async ({
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
  } = getSigningCorkClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};