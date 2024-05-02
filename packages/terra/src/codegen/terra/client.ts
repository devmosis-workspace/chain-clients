import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as terraMarketV1beta1TxRegistry from "./market/v1beta1/tx.registry";
import * as terraOracleV1beta1TxRegistry from "./oracle/v1beta1/tx.registry";
import * as terraWasmV1beta1TxRegistry from "./wasm/v1beta1/tx.registry";
import * as terraMarketV1beta1TxAmino from "./market/v1beta1/tx.amino";
import * as terraOracleV1beta1TxAmino from "./oracle/v1beta1/tx.amino";
import * as terraWasmV1beta1TxAmino from "./wasm/v1beta1/tx.amino";
export const terraAminoConverters = {
  ...terraMarketV1beta1TxAmino.AminoConverter,
  ...terraOracleV1beta1TxAmino.AminoConverter,
  ...terraWasmV1beta1TxAmino.AminoConverter
};
export const terraProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...terraMarketV1beta1TxRegistry.registry, ...terraOracleV1beta1TxRegistry.registry, ...terraWasmV1beta1TxRegistry.registry];
export const getSigningTerraClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...terraProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...terraAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningTerraClient = async ({
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
  } = getSigningTerraClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};