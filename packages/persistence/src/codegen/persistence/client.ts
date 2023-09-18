import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as persistenceInterchainqueryV1beta1MessagesRegistry from "./interchainquery/v1beta1/messages.registry";
import * as persistenceInterchainqueryV1beta1MessagesAmino from "./interchainquery/v1beta1/messages.amino";
export const persistenceAminoConverters = {
  ...persistenceInterchainqueryV1beta1MessagesAmino.AminoConverter
};
export const persistenceProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...persistenceInterchainqueryV1beta1MessagesRegistry.registry];
export const getSigningPersistenceClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...persistenceProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...persistenceAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPersistenceClient = async ({
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
  } = getSigningPersistenceClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};