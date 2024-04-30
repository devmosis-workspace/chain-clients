import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as omniflixAllocV1beta1TxRegistry from "./alloc/v1beta1/tx.registry";
import * as omniflixGlobalfeeV1beta1TxRegistry from "./globalfee/v1beta1/tx.registry";
import * as omniflixItcV1TxRegistry from "./itc/v1/tx.registry";
import * as omniflixMarketplaceV1beta1TxRegistry from "./marketplace/v1beta1/tx.registry";
import * as omniflixOnftV1beta1TxRegistry from "./onft/v1beta1/tx.registry";
import * as omniflixAllocV1beta1TxAmino from "./alloc/v1beta1/tx.amino";
import * as omniflixGlobalfeeV1beta1TxAmino from "./globalfee/v1beta1/tx.amino";
import * as omniflixItcV1TxAmino from "./itc/v1/tx.amino";
import * as omniflixMarketplaceV1beta1TxAmino from "./marketplace/v1beta1/tx.amino";
import * as omniflixOnftV1beta1TxAmino from "./onft/v1beta1/tx.amino";
export const omniFlixAminoConverters = {
  ...omniflixAllocV1beta1TxAmino.AminoConverter,
  ...omniflixGlobalfeeV1beta1TxAmino.AminoConverter,
  ...omniflixItcV1TxAmino.AminoConverter,
  ...omniflixMarketplaceV1beta1TxAmino.AminoConverter,
  ...omniflixOnftV1beta1TxAmino.AminoConverter
};
export const omniFlixProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...omniflixAllocV1beta1TxRegistry.registry, ...omniflixGlobalfeeV1beta1TxRegistry.registry, ...omniflixItcV1TxRegistry.registry, ...omniflixMarketplaceV1beta1TxRegistry.registry, ...omniflixOnftV1beta1TxRegistry.registry];
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