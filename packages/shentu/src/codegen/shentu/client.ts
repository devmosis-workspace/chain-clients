import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as shentuAuthV1alpha1TxRegistry from "./auth/v1alpha1/tx.registry";
import * as shentuBankV1alpha1TxRegistry from "./bank/v1alpha1/tx.registry";
import * as shentuBountyV1TxRegistry from "./bounty/v1/tx.registry";
import * as shentuCertV1alpha1TxRegistry from "./cert/v1alpha1/tx.registry";
import * as shentuCvmV1alpha1TxRegistry from "./cvm/v1alpha1/tx.registry";
import * as shentuOracleV1alpha1TxRegistry from "./oracle/v1alpha1/tx.registry";
import * as shentuShieldV1alpha1TxRegistry from "./shield/v1alpha1/tx.registry";
import * as shentuAuthV1alpha1TxAmino from "./auth/v1alpha1/tx.amino";
import * as shentuBankV1alpha1TxAmino from "./bank/v1alpha1/tx.amino";
import * as shentuBountyV1TxAmino from "./bounty/v1/tx.amino";
import * as shentuCertV1alpha1TxAmino from "./cert/v1alpha1/tx.amino";
import * as shentuCvmV1alpha1TxAmino from "./cvm/v1alpha1/tx.amino";
import * as shentuOracleV1alpha1TxAmino from "./oracle/v1alpha1/tx.amino";
import * as shentuShieldV1alpha1TxAmino from "./shield/v1alpha1/tx.amino";
export const shentuAminoConverters = {
  ...shentuAuthV1alpha1TxAmino.AminoConverter,
  ...shentuBankV1alpha1TxAmino.AminoConverter,
  ...shentuBountyV1TxAmino.AminoConverter,
  ...shentuCertV1alpha1TxAmino.AminoConverter,
  ...shentuCvmV1alpha1TxAmino.AminoConverter,
  ...shentuOracleV1alpha1TxAmino.AminoConverter,
  ...shentuShieldV1alpha1TxAmino.AminoConverter
};
export const shentuProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...shentuAuthV1alpha1TxRegistry.registry, ...shentuBankV1alpha1TxRegistry.registry, ...shentuBountyV1TxRegistry.registry, ...shentuCertV1alpha1TxRegistry.registry, ...shentuCvmV1alpha1TxRegistry.registry, ...shentuOracleV1alpha1TxRegistry.registry, ...shentuShieldV1alpha1TxRegistry.registry];
export const getSigningShentuClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...shentuProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...shentuAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningShentuClient = async ({
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
  } = getSigningShentuClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};