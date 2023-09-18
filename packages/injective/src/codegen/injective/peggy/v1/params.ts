import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface Params {
  peggyId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: bigint;
  signedValsetsWindow: bigint;
  signedBatchesWindow: bigint;
  signedClaimsWindow: bigint;
  targetBatchTimeout: bigint;
  averageBlockTime: bigint;
  averageEthereumBlockTime: bigint;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: bigint;
  slashFractionBadEthSignature: Uint8Array;
  cosmosCoinDenom: string;
  cosmosCoinErc20Contract: string;
  claimSlashingEnabled: boolean;
  bridgeContractStartHeight: bigint;
  valsetReward: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.peggy.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: string;
  signed_valsets_window: string;
  signed_batches_window: string;
  signed_claims_window: string;
  target_batch_timeout: string;
  average_block_time: string;
  average_ethereum_block_time: string;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_claim: Uint8Array;
  slash_fraction_conflicting_claim: Uint8Array;
  unbond_slashing_valsets_window: string;
  slash_fraction_bad_eth_signature: Uint8Array;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: string;
  valset_reward?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/injective.peggy.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: bigint;
  signed_valsets_window: bigint;
  signed_batches_window: bigint;
  signed_claims_window: bigint;
  target_batch_timeout: bigint;
  average_block_time: bigint;
  average_ethereum_block_time: bigint;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_claim: Uint8Array;
  slash_fraction_conflicting_claim: Uint8Array;
  unbond_slashing_valsets_window: bigint;
  slash_fraction_bad_eth_signature: Uint8Array;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: bigint;
  valset_reward: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    peggyId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: BigInt(0),
    signedValsetsWindow: BigInt(0),
    signedBatchesWindow: BigInt(0),
    signedClaimsWindow: BigInt(0),
    targetBatchTimeout: BigInt(0),
    averageBlockTime: BigInt(0),
    averageEthereumBlockTime: BigInt(0),
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: BigInt(0),
    slashFractionBadEthSignature: new Uint8Array(),
    cosmosCoinDenom: "",
    cosmosCoinErc20Contract: "",
    claimSlashingEnabled: false,
    bridgeContractStartHeight: BigInt(0),
    valsetReward: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/injective.peggy.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.peggyId !== "") {
      writer.uint32(10).string(message.peggyId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(26).string(message.bridgeEthereumAddress);
    }
    if (message.bridgeChainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.bridgeChainId);
    }
    if (message.signedValsetsWindow !== BigInt(0)) {
      writer.uint32(40).uint64(message.signedValsetsWindow);
    }
    if (message.signedBatchesWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.signedBatchesWindow);
    }
    if (message.signedClaimsWindow !== BigInt(0)) {
      writer.uint32(56).uint64(message.signedClaimsWindow);
    }
    if (message.targetBatchTimeout !== BigInt(0)) {
      writer.uint32(64).uint64(message.targetBatchTimeout);
    }
    if (message.averageBlockTime !== BigInt(0)) {
      writer.uint32(72).uint64(message.averageBlockTime);
    }
    if (message.averageEthereumBlockTime !== BigInt(0)) {
      writer.uint32(80).uint64(message.averageEthereumBlockTime);
    }
    if (message.slashFractionValset.length !== 0) {
      writer.uint32(90).bytes(message.slashFractionValset);
    }
    if (message.slashFractionBatch.length !== 0) {
      writer.uint32(98).bytes(message.slashFractionBatch);
    }
    if (message.slashFractionClaim.length !== 0) {
      writer.uint32(106).bytes(message.slashFractionClaim);
    }
    if (message.slashFractionConflictingClaim.length !== 0) {
      writer.uint32(114).bytes(message.slashFractionConflictingClaim);
    }
    if (message.unbondSlashingValsetsWindow !== BigInt(0)) {
      writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
    }
    if (message.slashFractionBadEthSignature.length !== 0) {
      writer.uint32(130).bytes(message.slashFractionBadEthSignature);
    }
    if (message.cosmosCoinDenom !== "") {
      writer.uint32(138).string(message.cosmosCoinDenom);
    }
    if (message.cosmosCoinErc20Contract !== "") {
      writer.uint32(146).string(message.cosmosCoinErc20Contract);
    }
    if (message.claimSlashingEnabled === true) {
      writer.uint32(152).bool(message.claimSlashingEnabled);
    }
    if (message.bridgeContractStartHeight !== BigInt(0)) {
      writer.uint32(160).uint64(message.bridgeContractStartHeight);
    }
    if (message.valsetReward !== undefined) {
      Coin.encode(message.valsetReward, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      peggyId: isSet(object.peggyId) ? String(object.peggyId) : "",
      contractSourceHash: isSet(object.contractSourceHash) ? String(object.contractSourceHash) : "",
      bridgeEthereumAddress: isSet(object.bridgeEthereumAddress) ? String(object.bridgeEthereumAddress) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? BigInt(object.bridgeChainId.toString()) : BigInt(0),
      signedValsetsWindow: isSet(object.signedValsetsWindow) ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0),
      signedBatchesWindow: isSet(object.signedBatchesWindow) ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0),
      signedClaimsWindow: isSet(object.signedClaimsWindow) ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0),
      targetBatchTimeout: isSet(object.targetBatchTimeout) ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0),
      averageBlockTime: isSet(object.averageBlockTime) ? BigInt(object.averageBlockTime.toString()) : BigInt(0),
      averageEthereumBlockTime: isSet(object.averageEthereumBlockTime) ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0),
      slashFractionValset: isSet(object.slashFractionValset) ? bytesFromBase64(object.slashFractionValset) : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch) ? bytesFromBase64(object.slashFractionBatch) : new Uint8Array(),
      slashFractionClaim: isSet(object.slashFractionClaim) ? bytesFromBase64(object.slashFractionClaim) : new Uint8Array(),
      slashFractionConflictingClaim: isSet(object.slashFractionConflictingClaim) ? bytesFromBase64(object.slashFractionConflictingClaim) : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow) ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0),
      slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature) ? bytesFromBase64(object.slashFractionBadEthSignature) : new Uint8Array(),
      cosmosCoinDenom: isSet(object.cosmosCoinDenom) ? String(object.cosmosCoinDenom) : "",
      cosmosCoinErc20Contract: isSet(object.cosmosCoinErc20Contract) ? String(object.cosmosCoinErc20Contract) : "",
      claimSlashingEnabled: isSet(object.claimSlashingEnabled) ? Boolean(object.claimSlashingEnabled) : false,
      bridgeContractStartHeight: isSet(object.bridgeContractStartHeight) ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0),
      valsetReward: isSet(object.valsetReward) ? Coin.fromJSON(object.valsetReward) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.peggyId = object.peggyId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? BigInt(object.bridgeChainId.toString()) : BigInt(0);
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? BigInt(object.signedValsetsWindow.toString()) : BigInt(0);
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? BigInt(object.signedBatchesWindow.toString()) : BigInt(0);
    message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? BigInt(object.signedClaimsWindow.toString()) : BigInt(0);
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? BigInt(object.targetBatchTimeout.toString()) : BigInt(0);
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? BigInt(object.averageBlockTime.toString()) : BigInt(0);
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? BigInt(object.averageEthereumBlockTime.toString()) : BigInt(0);
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? BigInt(object.unbondSlashingValsetsWindow.toString()) : BigInt(0);
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
    message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
    message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
    message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? BigInt(object.bridgeContractStartHeight.toString()) : BigInt(0);
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      peggyId: object.peggy_id,
      contractSourceHash: object.contract_source_hash,
      bridgeEthereumAddress: object.bridge_ethereum_address,
      bridgeChainId: BigInt(object.bridge_chain_id),
      signedValsetsWindow: BigInt(object.signed_valsets_window),
      signedBatchesWindow: BigInt(object.signed_batches_window),
      signedClaimsWindow: BigInt(object.signed_claims_window),
      targetBatchTimeout: BigInt(object.target_batch_timeout),
      averageBlockTime: BigInt(object.average_block_time),
      averageEthereumBlockTime: BigInt(object.average_ethereum_block_time),
      slashFractionValset: object.slash_fraction_valset,
      slashFractionBatch: object.slash_fraction_batch,
      slashFractionClaim: object.slash_fraction_claim,
      slashFractionConflictingClaim: object.slash_fraction_conflicting_claim,
      unbondSlashingValsetsWindow: BigInt(object.unbond_slashing_valsets_window),
      slashFractionBadEthSignature: object.slash_fraction_bad_eth_signature,
      cosmosCoinDenom: object.cosmos_coin_denom,
      cosmosCoinErc20Contract: object.cosmos_coin_erc20_contract,
      claimSlashingEnabled: object.claim_slashing_enabled,
      bridgeContractStartHeight: BigInt(object.bridge_contract_start_height),
      valsetReward: object?.valset_reward ? Coin.fromAmino(object.valset_reward) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.peggy_id = message.peggyId;
    obj.contract_source_hash = message.contractSourceHash;
    obj.bridge_ethereum_address = message.bridgeEthereumAddress;
    obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
    obj.signed_valsets_window = message.signedValsetsWindow ? message.signedValsetsWindow.toString() : undefined;
    obj.signed_batches_window = message.signedBatchesWindow ? message.signedBatchesWindow.toString() : undefined;
    obj.signed_claims_window = message.signedClaimsWindow ? message.signedClaimsWindow.toString() : undefined;
    obj.target_batch_timeout = message.targetBatchTimeout ? message.targetBatchTimeout.toString() : undefined;
    obj.average_block_time = message.averageBlockTime ? message.averageBlockTime.toString() : undefined;
    obj.average_ethereum_block_time = message.averageEthereumBlockTime ? message.averageEthereumBlockTime.toString() : undefined;
    obj.slash_fraction_valset = message.slashFractionValset;
    obj.slash_fraction_batch = message.slashFractionBatch;
    obj.slash_fraction_claim = message.slashFractionClaim;
    obj.slash_fraction_conflicting_claim = message.slashFractionConflictingClaim;
    obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow ? message.unbondSlashingValsetsWindow.toString() : undefined;
    obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature;
    obj.cosmos_coin_denom = message.cosmosCoinDenom;
    obj.cosmos_coin_erc20_contract = message.cosmosCoinErc20Contract;
    obj.claim_slashing_enabled = message.claimSlashingEnabled;
    obj.bridge_contract_start_height = message.bridgeContractStartHeight ? message.bridgeContractStartHeight.toString() : undefined;
    obj.valset_reward = message.valsetReward ? Coin.toAmino(message.valsetReward) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.peggy.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};