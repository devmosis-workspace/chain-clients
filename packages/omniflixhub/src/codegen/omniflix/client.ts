import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as omniflixItcV1TxRegistry from "../omniflix/itc/v1/tx.registry";
import * as omniflixMarketplaceV1beta1TxRegistry from "../omniflix/marketplace/v1beta1/tx.registry";
import * as omniflixItcV1TxAmino from "../omniflix/itc/v1/tx.amino";
import * as omniflixMarketplaceV1beta1TxAmino from "../omniflix/marketplace/v1beta1/tx.amino";
export const omniFlixAminoConverters = {
  ...omniflixItcV1TxAmino.AminoConverter,
  ...omniflixMarketplaceV1beta1TxAmino.AminoConverter
};
export const omniFlixProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...omniflixItcV1TxRegistry.registry, ...omniflixMarketplaceV1beta1TxRegistry.registry];
export const getSigningOmniFlixClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...omniFlixProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...omniFlixAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningOmniFlixClient = async ({
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
  } = getSigningOmniFlixClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};