import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as umeeIncentiveV1TxRegistry from "./incentive/v1/tx.registry";
import * as umeeLeverageV1TxRegistry from "./leverage/v1/tx.registry";
import * as umeeMetokenV1TxRegistry from "./metoken/v1/tx.registry";
import * as umeeOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as umeeUgovV1TxRegistry from "./ugov/v1/tx.registry";
import * as umeeUibcV1TxRegistry from "./uibc/v1/tx.registry";
import * as umeeIncentiveV1TxAmino from "./incentive/v1/tx.amino";
import * as umeeLeverageV1TxAmino from "./leverage/v1/tx.amino";
import * as umeeMetokenV1TxAmino from "./metoken/v1/tx.amino";
import * as umeeOracleV1TxAmino from "./oracle/v1/tx.amino";
import * as umeeUgovV1TxAmino from "./ugov/v1/tx.amino";
import * as umeeUibcV1TxAmino from "./uibc/v1/tx.amino";
export const umeeAminoConverters = {
  ...umeeIncentiveV1TxAmino.AminoConverter,
  ...umeeLeverageV1TxAmino.AminoConverter,
  ...umeeMetokenV1TxAmino.AminoConverter,
  ...umeeOracleV1TxAmino.AminoConverter,
  ...umeeUgovV1TxAmino.AminoConverter,
  ...umeeUibcV1TxAmino.AminoConverter
};
export const umeeProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...umeeIncentiveV1TxRegistry.registry, ...umeeLeverageV1TxRegistry.registry, ...umeeMetokenV1TxRegistry.registry, ...umeeOracleV1TxRegistry.registry, ...umeeUgovV1TxRegistry.registry, ...umeeUibcV1TxRegistry.registry];
export const getSigningUmeeClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...umeeProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...umeeAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningUmeeClient = async ({
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
  } = getSigningUmeeClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};