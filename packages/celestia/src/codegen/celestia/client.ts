import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as celestiaBlobV1TxRegistry from "./blob/v1/tx.registry";
import * as celestiaQgbV1TxRegistry from "./qgb/v1/tx.registry";
import * as celestiaBlobV1TxAmino from "./blob/v1/tx.amino";
import * as celestiaQgbV1TxAmino from "./qgb/v1/tx.amino";
export const celestiaAminoConverters = {
  ...celestiaBlobV1TxAmino.AminoConverter,
  ...celestiaQgbV1TxAmino.AminoConverter
};
export const celestiaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...celestiaBlobV1TxRegistry.registry, ...celestiaQgbV1TxRegistry.registry];
export const getSigningCelestiaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...celestiaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...celestiaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCelestiaClient = async ({
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
  } = getSigningCelestiaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};