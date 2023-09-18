import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as icaauthV1TxRegistry from "../icaauth/v1/tx.registry";
import * as nftTransferV1TxRegistry from "../nft_transfer/v1/tx.registry";
import * as nftV1TxRegistry from "../nft/v1/tx.registry";
import * as icaauthV1TxAmino from "../icaauth/v1/tx.amino";
import * as nftTransferV1TxAmino from "../nft_transfer/v1/tx.amino";
import * as nftV1TxAmino from "../nft/v1/tx.amino";
export const chainmainAminoConverters = {
  ...icaauthV1TxAmino.AminoConverter,
  ...nftTransferV1TxAmino.AminoConverter,
  ...nftV1TxAmino.AminoConverter
};
export const chainmainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...icaauthV1TxRegistry.registry, ...nftTransferV1TxRegistry.registry, ...nftV1TxRegistry.registry];
export const getSigningChainmainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...chainmainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...chainmainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningChainmainClient = async ({
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
  } = getSigningChainmainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};