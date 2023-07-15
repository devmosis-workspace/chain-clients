import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  peggyId: string;
  contractSourceHash: string;
  bridgeEthereumAddress: string;
  bridgeChainId: Long;
  signedValsetsWindow: Long;
  signedBatchesWindow: Long;
  signedClaimsWindow: Long;
  targetBatchTimeout: Long;
  averageBlockTime: Long;
  averageEthereumBlockTime: Long;
  slashFractionValset: Uint8Array;
  slashFractionBatch: Uint8Array;
  slashFractionClaim: Uint8Array;
  slashFractionConflictingClaim: Uint8Array;
  unbondSlashingValsetsWindow: Long;
  slashFractionBadEthSignature: Uint8Array;
  cosmosCoinDenom: string;
  cosmosCoinErc20Contract: string;
  claimSlashingEnabled: boolean;
  bridgeContractStartHeight: Long;
  valsetReward?: Coin;
}
export interface ParamsSDKType {
  peggy_id: string;
  contract_source_hash: string;
  bridge_ethereum_address: string;
  bridge_chain_id: Long;
  signed_valsets_window: Long;
  signed_batches_window: Long;
  signed_claims_window: Long;
  target_batch_timeout: Long;
  average_block_time: Long;
  average_ethereum_block_time: Long;
  slash_fraction_valset: Uint8Array;
  slash_fraction_batch: Uint8Array;
  slash_fraction_claim: Uint8Array;
  slash_fraction_conflicting_claim: Uint8Array;
  unbond_slashing_valsets_window: Long;
  slash_fraction_bad_eth_signature: Uint8Array;
  cosmos_coin_denom: string;
  cosmos_coin_erc20_contract: string;
  claim_slashing_enabled: boolean;
  bridge_contract_start_height: Long;
  valset_reward?: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    peggyId: "",
    contractSourceHash: "",
    bridgeEthereumAddress: "",
    bridgeChainId: Long.UZERO,
    signedValsetsWindow: Long.UZERO,
    signedBatchesWindow: Long.UZERO,
    signedClaimsWindow: Long.UZERO,
    targetBatchTimeout: Long.UZERO,
    averageBlockTime: Long.UZERO,
    averageEthereumBlockTime: Long.UZERO,
    slashFractionValset: new Uint8Array(),
    slashFractionBatch: new Uint8Array(),
    slashFractionClaim: new Uint8Array(),
    slashFractionConflictingClaim: new Uint8Array(),
    unbondSlashingValsetsWindow: Long.UZERO,
    slashFractionBadEthSignature: new Uint8Array(),
    cosmosCoinDenom: "",
    cosmosCoinErc20Contract: "",
    claimSlashingEnabled: false,
    bridgeContractStartHeight: Long.UZERO,
    valsetReward: undefined
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peggyId !== "") {
      writer.uint32(10).string(message.peggyId);
    }
    if (message.contractSourceHash !== "") {
      writer.uint32(18).string(message.contractSourceHash);
    }
    if (message.bridgeEthereumAddress !== "") {
      writer.uint32(26).string(message.bridgeEthereumAddress);
    }
    if (!message.bridgeChainId.isZero()) {
      writer.uint32(32).uint64(message.bridgeChainId);
    }
    if (!message.signedValsetsWindow.isZero()) {
      writer.uint32(40).uint64(message.signedValsetsWindow);
    }
    if (!message.signedBatchesWindow.isZero()) {
      writer.uint32(48).uint64(message.signedBatchesWindow);
    }
    if (!message.signedClaimsWindow.isZero()) {
      writer.uint32(56).uint64(message.signedClaimsWindow);
    }
    if (!message.targetBatchTimeout.isZero()) {
      writer.uint32(64).uint64(message.targetBatchTimeout);
    }
    if (!message.averageBlockTime.isZero()) {
      writer.uint32(72).uint64(message.averageBlockTime);
    }
    if (!message.averageEthereumBlockTime.isZero()) {
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
    if (!message.unbondSlashingValsetsWindow.isZero()) {
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
    if (!message.bridgeContractStartHeight.isZero()) {
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
      bridgeChainId: isSet(object.bridgeChainId) ? Long.fromValue(object.bridgeChainId) : Long.UZERO,
      signedValsetsWindow: isSet(object.signedValsetsWindow) ? Long.fromValue(object.signedValsetsWindow) : Long.UZERO,
      signedBatchesWindow: isSet(object.signedBatchesWindow) ? Long.fromValue(object.signedBatchesWindow) : Long.UZERO,
      signedClaimsWindow: isSet(object.signedClaimsWindow) ? Long.fromValue(object.signedClaimsWindow) : Long.UZERO,
      targetBatchTimeout: isSet(object.targetBatchTimeout) ? Long.fromValue(object.targetBatchTimeout) : Long.UZERO,
      averageBlockTime: isSet(object.averageBlockTime) ? Long.fromValue(object.averageBlockTime) : Long.UZERO,
      averageEthereumBlockTime: isSet(object.averageEthereumBlockTime) ? Long.fromValue(object.averageEthereumBlockTime) : Long.UZERO,
      slashFractionValset: isSet(object.slashFractionValset) ? bytesFromBase64(object.slashFractionValset) : new Uint8Array(),
      slashFractionBatch: isSet(object.slashFractionBatch) ? bytesFromBase64(object.slashFractionBatch) : new Uint8Array(),
      slashFractionClaim: isSet(object.slashFractionClaim) ? bytesFromBase64(object.slashFractionClaim) : new Uint8Array(),
      slashFractionConflictingClaim: isSet(object.slashFractionConflictingClaim) ? bytesFromBase64(object.slashFractionConflictingClaim) : new Uint8Array(),
      unbondSlashingValsetsWindow: isSet(object.unbondSlashingValsetsWindow) ? Long.fromValue(object.unbondSlashingValsetsWindow) : Long.UZERO,
      slashFractionBadEthSignature: isSet(object.slashFractionBadEthSignature) ? bytesFromBase64(object.slashFractionBadEthSignature) : new Uint8Array(),
      cosmosCoinDenom: isSet(object.cosmosCoinDenom) ? String(object.cosmosCoinDenom) : "",
      cosmosCoinErc20Contract: isSet(object.cosmosCoinErc20Contract) ? String(object.cosmosCoinErc20Contract) : "",
      claimSlashingEnabled: isSet(object.claimSlashingEnabled) ? Boolean(object.claimSlashingEnabled) : false,
      bridgeContractStartHeight: isSet(object.bridgeContractStartHeight) ? Long.fromValue(object.bridgeContractStartHeight) : Long.UZERO,
      valsetReward: isSet(object.valsetReward) ? Coin.fromJSON(object.valsetReward) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.peggyId = object.peggyId ?? "";
    message.contractSourceHash = object.contractSourceHash ?? "";
    message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
    message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
    message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? Long.fromValue(object.signedValsetsWindow) : Long.UZERO;
    message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? Long.fromValue(object.signedBatchesWindow) : Long.UZERO;
    message.signedClaimsWindow = object.signedClaimsWindow !== undefined && object.signedClaimsWindow !== null ? Long.fromValue(object.signedClaimsWindow) : Long.UZERO;
    message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? Long.fromValue(object.targetBatchTimeout) : Long.UZERO;
    message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? Long.fromValue(object.averageBlockTime) : Long.UZERO;
    message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? Long.fromValue(object.averageEthereumBlockTime) : Long.UZERO;
    message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
    message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
    message.slashFractionClaim = object.slashFractionClaim ?? new Uint8Array();
    message.slashFractionConflictingClaim = object.slashFractionConflictingClaim ?? new Uint8Array();
    message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? Long.fromValue(object.unbondSlashingValsetsWindow) : Long.UZERO;
    message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
    message.cosmosCoinDenom = object.cosmosCoinDenom ?? "";
    message.cosmosCoinErc20Contract = object.cosmosCoinErc20Contract ?? "";
    message.claimSlashingEnabled = object.claimSlashingEnabled ?? false;
    message.bridgeContractStartHeight = object.bridgeContractStartHeight !== undefined && object.bridgeContractStartHeight !== null ? Long.fromValue(object.bridgeContractStartHeight) : Long.UZERO;
    message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
    return message;
  }
};