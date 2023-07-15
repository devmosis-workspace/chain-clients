import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as axelarPermissionV1beta1ServiceRegistry from "./permission/v1beta1/service.registry";
import * as axelarPermissionV1beta1ServiceAmino from "./permission/v1beta1/service.amino";
export const axelarAminoConverters = {
  ...axelarPermissionV1beta1ServiceAmino.AminoConverter
};
export const axelarProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...axelarPermissionV1beta1ServiceRegistry.registry];
export const getSigningAxelarClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...axelarProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...axelarAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAxelarClient = async ({
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
  } = getSigningAxelarClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};