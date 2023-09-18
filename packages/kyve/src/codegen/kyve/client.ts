import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as kyveBundlesV1beta1TxRegistry from "./bundles/v1beta1/tx.registry";
import * as kyveDelegationV1beta1TxRegistry from "./delegation/v1beta1/tx.registry";
import * as kyveGlobalV1beta1TxRegistry from "./global/v1beta1/tx.registry";
import * as kyvePoolV1beta1TxRegistry from "./pool/v1beta1/tx.registry";
import * as kyveStakersV1beta1TxRegistry from "./stakers/v1beta1/tx.registry";
import * as kyveTeamV1beta1TxRegistry from "./team/v1beta1/tx.registry";
import * as kyveBundlesV1beta1TxAmino from "./bundles/v1beta1/tx.amino";
import * as kyveDelegationV1beta1TxAmino from "./delegation/v1beta1/tx.amino";
import * as kyveGlobalV1beta1TxAmino from "./global/v1beta1/tx.amino";
import * as kyvePoolV1beta1TxAmino from "./pool/v1beta1/tx.amino";
import * as kyveStakersV1beta1TxAmino from "./stakers/v1beta1/tx.amino";
import * as kyveTeamV1beta1TxAmino from "./team/v1beta1/tx.amino";
export const kyveAminoConverters = {
  ...kyveBundlesV1beta1TxAmino.AminoConverter,
  ...kyveDelegationV1beta1TxAmino.AminoConverter,
  ...kyveGlobalV1beta1TxAmino.AminoConverter,
  ...kyvePoolV1beta1TxAmino.AminoConverter,
  ...kyveStakersV1beta1TxAmino.AminoConverter,
  ...kyveTeamV1beta1TxAmino.AminoConverter
};
export const kyveProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...kyveBundlesV1beta1TxRegistry.registry, ...kyveDelegationV1beta1TxRegistry.registry, ...kyveGlobalV1beta1TxRegistry.registry, ...kyvePoolV1beta1TxRegistry.registry, ...kyveStakersV1beta1TxRegistry.registry, ...kyveTeamV1beta1TxRegistry.registry];
export const getSigningKyveClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...kyveProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...kyveAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningKyveClient = async ({
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
  } = getSigningKyveClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};