import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as chihuahuaFeeburnTxRegistry from "./feeburn/tx.registry";
import * as chihuahuaFeeburnTxAmino from "./feeburn/tx.amino";
export const chihuahuaAminoConverters = {
  ...chihuahuaFeeburnTxAmino.AminoConverter
};
export const chihuahuaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...chihuahuaFeeburnTxRegistry.registry];
export const getSigningChihuahuaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...chihuahuaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...chihuahuaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningChihuahuaClient = async ({
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
  } = getSigningChihuahuaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};