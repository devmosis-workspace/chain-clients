import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as likechainIscnTxRegistry from "./iscn/tx.registry";
import * as likechainLikenftV1TxRegistry from "./likenft/v1/tx.registry";
import * as likechainIscnTxAmino from "./iscn/tx.amino";
import * as likechainLikenftV1TxAmino from "./likenft/v1/tx.amino";
export const likechainAminoConverters = {
  ...likechainIscnTxAmino.AminoConverter,
  ...likechainLikenftV1TxAmino.AminoConverter
};
export const likechainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...likechainIscnTxRegistry.registry, ...likechainLikenftV1TxRegistry.registry];
export const getSigningLikechainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...likechainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...likechainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLikechainClient = async ({
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
  } = getSigningLikechainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};