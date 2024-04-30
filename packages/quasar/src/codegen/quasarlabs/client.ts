import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as qvestingTxRegistry from "../qvesting/tx.registry";
import * as tokenfactoryV1beta1TxRegistry from "../tokenfactory/v1beta1/tx.registry";
import * as qvestingTxAmino from "../qvesting/tx.amino";
import * as tokenfactoryV1beta1TxAmino from "../tokenfactory/v1beta1/tx.amino";
export const quasarlabsAminoConverters = {
  ...qvestingTxAmino.AminoConverter,
  ...tokenfactoryV1beta1TxAmino.AminoConverter
};
export const quasarlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...qvestingTxRegistry.registry, ...tokenfactoryV1beta1TxRegistry.registry];
export const getSigningQuasarlabsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...quasarlabsProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...quasarlabsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningQuasarlabsClient = async ({
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
  } = getSigningQuasarlabsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};