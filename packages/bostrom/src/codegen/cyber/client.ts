import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cyberDmnV1beta1TxRegistry from "./dmn/v1beta1/tx.registry";
import * as cyberGraphV1beta1TxRegistry from "./graph/v1beta1/tx.registry";
import * as cyberGridV1beta1TxRegistry from "./grid/v1beta1/tx.registry";
import * as cyberResourcesV1beta1TxRegistry from "./resources/v1beta1/tx.registry";
import * as cyberDmnV1beta1TxAmino from "./dmn/v1beta1/tx.amino";
import * as cyberGraphV1beta1TxAmino from "./graph/v1beta1/tx.amino";
import * as cyberGridV1beta1TxAmino from "./grid/v1beta1/tx.amino";
import * as cyberResourcesV1beta1TxAmino from "./resources/v1beta1/tx.amino";
export const cyberAminoConverters = {
  ...cyberDmnV1beta1TxAmino.AminoConverter,
  ...cyberGraphV1beta1TxAmino.AminoConverter,
  ...cyberGridV1beta1TxAmino.AminoConverter,
  ...cyberResourcesV1beta1TxAmino.AminoConverter
};
export const cyberProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...cyberDmnV1beta1TxRegistry.registry, ...cyberGraphV1beta1TxRegistry.registry, ...cyberGridV1beta1TxRegistry.registry, ...cyberResourcesV1beta1TxRegistry.registry];
export const getSigningCyberClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...cyberProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...cyberAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCyberClient = async ({
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
  } = getSigningCyberClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};