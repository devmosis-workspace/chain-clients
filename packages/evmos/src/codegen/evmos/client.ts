import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as evmosClaimsV1TxRegistry from "./claims/v1/tx.registry";
import * as evmosErc20V1TxRegistry from "./erc20/v1/tx.registry";
import * as evmosIncentivesV1TxRegistry from "./incentives/v1/tx.registry";
import * as evmosInflationV1TxRegistry from "./inflation/v1/tx.registry";
import * as evmosRecoveryV1TxRegistry from "./recovery/v1/tx.registry";
import * as evmosRevenueV1TxRegistry from "./revenue/v1/tx.registry";
import * as evmosVestingV1TxRegistry from "./vesting/v1/tx.registry";
import * as evmosClaimsV1TxAmino from "./claims/v1/tx.amino";
import * as evmosErc20V1TxAmino from "./erc20/v1/tx.amino";
import * as evmosIncentivesV1TxAmino from "./incentives/v1/tx.amino";
import * as evmosInflationV1TxAmino from "./inflation/v1/tx.amino";
import * as evmosRecoveryV1TxAmino from "./recovery/v1/tx.amino";
import * as evmosRevenueV1TxAmino from "./revenue/v1/tx.amino";
import * as evmosVestingV1TxAmino from "./vesting/v1/tx.amino";
export const evmosAminoConverters = {
  ...evmosClaimsV1TxAmino.AminoConverter,
  ...evmosErc20V1TxAmino.AminoConverter,
  ...evmosIncentivesV1TxAmino.AminoConverter,
  ...evmosInflationV1TxAmino.AminoConverter,
  ...evmosRecoveryV1TxAmino.AminoConverter,
  ...evmosRevenueV1TxAmino.AminoConverter,
  ...evmosVestingV1TxAmino.AminoConverter
};
export const evmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...evmosClaimsV1TxRegistry.registry, ...evmosErc20V1TxRegistry.registry, ...evmosIncentivesV1TxRegistry.registry, ...evmosInflationV1TxRegistry.registry, ...evmosRecoveryV1TxRegistry.registry, ...evmosRevenueV1TxRegistry.registry, ...evmosVestingV1TxRegistry.registry];
export const getSigningEvmosClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...evmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...evmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEvmosClient = async ({
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
  } = getSigningEvmosClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};