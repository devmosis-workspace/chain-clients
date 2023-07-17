import { Asset, AssetSDKType } from "./types";
import { RewardPeriod, RewardPeriodSDKType, ProviderDistributionPeriod, ProviderDistributionPeriodSDKType, SwapFeeTokenParams, SwapFeeTokenParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgUpdateStakingRewardParams {
  signer: string;
  minter: string;
  params: string;
}
export interface MsgUpdateStakingRewardParamsSDKType {
  signer: string;
  minter: string;
  params: string;
}
export interface MsgUpdateStakingRewardParamsResponse {}
export interface MsgUpdateStakingRewardParamsResponseSDKType {}
export interface MsgRemoveLiquidity {
  signer: string;
  externalAsset?: Asset;
  wBasisPoints: string;
  asymmetry: string;
}
export interface MsgRemoveLiquiditySDKType {
  signer: string;
  external_asset?: AssetSDKType;
  w_basis_points: string;
  asymmetry: string;
}
export interface MsgRemoveLiquidityResponse {}
export interface MsgRemoveLiquidityResponseSDKType {}
export interface MsgRemoveLiquidityUnits {
  signer: string;
  externalAsset?: Asset;
  withdrawUnits: string;
}
export interface MsgRemoveLiquidityUnitsSDKType {
  signer: string;
  external_asset?: AssetSDKType;
  withdraw_units: string;
}
export interface MsgRemoveLiquidityUnitsResponse {}
export interface MsgRemoveLiquidityUnitsResponseSDKType {}
export interface MsgCreatePool {
  signer: string;
  externalAsset?: Asset;
  nativeAssetAmount: string;
  externalAssetAmount: string;
}
export interface MsgCreatePoolSDKType {
  signer: string;
  external_asset?: AssetSDKType;
  native_asset_amount: string;
  external_asset_amount: string;
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgAddLiquidity {
  signer: string;
  externalAsset?: Asset;
  nativeAssetAmount: string;
  externalAssetAmount: string;
}
export interface MsgAddLiquiditySDKType {
  signer: string;
  external_asset?: AssetSDKType;
  native_asset_amount: string;
  external_asset_amount: string;
}
export interface MsgAddLiquidityResponse {}
export interface MsgAddLiquidityResponseSDKType {}
export interface MsgModifyPmtpRates {
  signer: string;
  blockRate: string;
  runningRate: string;
  endPolicy: boolean;
}
export interface MsgModifyPmtpRatesSDKType {
  signer: string;
  block_rate: string;
  running_rate: string;
  end_policy: boolean;
}
export interface MsgModifyPmtpRatesResponse {}
export interface MsgModifyPmtpRatesResponseSDKType {}
export interface MsgUpdatePmtpParams {
  signer: string;
  pmtpPeriodGovernanceRate: string;
  pmtpPeriodEpochLength: Long;
  pmtpPeriodStartBlock: Long;
  pmtpPeriodEndBlock: Long;
}
export interface MsgUpdatePmtpParamsSDKType {
  signer: string;
  pmtp_period_governance_rate: string;
  pmtp_period_epoch_length: Long;
  pmtp_period_start_block: Long;
  pmtp_period_end_block: Long;
}
export interface MsgUpdatePmtpParamsResponse {}
export interface MsgUpdatePmtpParamsResponseSDKType {}
export interface MsgSwap {
  signer: string;
  sentAsset?: Asset;
  receivedAsset?: Asset;
  sentAmount: string;
  minReceivingAmount: string;
}
export interface MsgSwapSDKType {
  signer: string;
  sent_asset?: AssetSDKType;
  received_asset?: AssetSDKType;
  sent_amount: string;
  min_receiving_amount: string;
}
export interface MsgSwapResponse {}
export interface MsgSwapResponseSDKType {}
export interface MsgDecommissionPool {
  signer: string;
  symbol: string;
}
export interface MsgDecommissionPoolSDKType {
  signer: string;
  symbol: string;
}
export interface MsgDecommissionPoolResponse {}
export interface MsgDecommissionPoolResponseSDKType {}
export interface MsgUnlockLiquidityRequest {
  signer: string;
  externalAsset?: Asset;
  units: string;
}
export interface MsgUnlockLiquidityRequestSDKType {
  signer: string;
  external_asset?: AssetSDKType;
  units: string;
}
export interface MsgUnlockLiquidityResponse {}
export interface MsgUnlockLiquidityResponseSDKType {}
export interface MsgUpdateRewardsParamsRequest {
  signer: string;
  /** in blocks */
  liquidityRemovalLockPeriod: Long;
  /** in blocks */
  liquidityRemovalCancelPeriod: Long;
}
export interface MsgUpdateRewardsParamsRequestSDKType {
  signer: string;
  liquidity_removal_lock_period: Long;
  liquidity_removal_cancel_period: Long;
}
export interface MsgUpdateRewardsParamsResponse {}
export interface MsgUpdateRewardsParamsResponseSDKType {}
export interface MsgAddRewardPeriodRequest {
  signer: string;
  rewardPeriods: RewardPeriod[];
}
export interface MsgAddRewardPeriodRequestSDKType {
  signer: string;
  reward_periods: RewardPeriodSDKType[];
}
export interface MsgAddRewardPeriodResponse {}
export interface MsgAddRewardPeriodResponseSDKType {}
export interface MsgSetSymmetryThreshold {
  signer: string;
  threshold: string;
  ratio: string;
}
export interface MsgSetSymmetryThresholdSDKType {
  signer: string;
  threshold: string;
  ratio: string;
}
export interface MsgSetSymmetryThresholdResponse {}
export interface MsgSetSymmetryThresholdResponseSDKType {}
export interface MsgCancelUnlock {
  signer: string;
  externalAsset?: Asset;
  units: string;
}
export interface MsgCancelUnlockSDKType {
  signer: string;
  external_asset?: AssetSDKType;
  units: string;
}
export interface MsgCancelUnlockResponse {}
export interface MsgCancelUnlockResponseSDKType {}
export interface RemovalRequest {
  id: Long;
  value: string;
  msg?: MsgRemoveLiquidity;
}
export interface RemovalRequestSDKType {
  id: Long;
  value: string;
  msg?: MsgRemoveLiquiditySDKType;
}
export interface MsgModifyLiquidityProtectionRates {
  signer: string;
  currentRowanLiquidityThreshold: string;
}
export interface MsgModifyLiquidityProtectionRatesSDKType {
  signer: string;
  current_rowan_liquidity_threshold: string;
}
export interface MsgModifyLiquidityProtectionRatesResponse {}
export interface MsgModifyLiquidityProtectionRatesResponseSDKType {}
export interface MsgUpdateLiquidityProtectionParams {
  signer: string;
  maxRowanLiquidityThreshold: string;
  maxRowanLiquidityThresholdAsset: string;
  epochLength: Long;
  isActive: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsSDKType {
  signer: string;
  max_rowan_liquidity_threshold: string;
  max_rowan_liquidity_threshold_asset: string;
  epoch_length: Long;
  is_active: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsResponse {}
export interface MsgUpdateLiquidityProtectionParamsResponseSDKType {}
export interface MsgAddProviderDistributionPeriodRequest {
  signer: string;
  distributionPeriods: ProviderDistributionPeriod[];
}
export interface MsgAddProviderDistributionPeriodRequestSDKType {
  signer: string;
  distribution_periods: ProviderDistributionPeriodSDKType[];
}
export interface MsgAddProviderDistributionPeriodResponse {}
export interface MsgAddProviderDistributionPeriodResponseSDKType {}
export interface MsgUpdateSwapFeeParamsRequest {
  signer: string;
  defaultSwapFeeRate: string;
  tokenParams: SwapFeeTokenParams[];
}
export interface MsgUpdateSwapFeeParamsRequestSDKType {
  signer: string;
  default_swap_fee_rate: string;
  token_params: SwapFeeTokenParamsSDKType[];
}
export interface MsgUpdateSwapFeeParamsResponse {}
export interface MsgUpdateSwapFeeParamsResponseSDKType {}
function createBaseMsgUpdateStakingRewardParams(): MsgUpdateStakingRewardParams {
  return {
    signer: "",
    minter: "",
    params: ""
  };
}
export const MsgUpdateStakingRewardParams = {
  encode(message: MsgUpdateStakingRewardParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }
    if (message.params !== "") {
      writer.uint32(26).string(message.params);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateStakingRewardParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      minter: isSet(object.minter) ? String(object.minter) : "",
      params: isSet(object.params) ? String(object.params) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams {
    const message = createBaseMsgUpdateStakingRewardParams();
    message.signer = object.signer ?? "";
    message.minter = object.minter ?? "";
    message.params = object.params ?? "";
    return message;
  }
};
function createBaseMsgUpdateStakingRewardParamsResponse(): MsgUpdateStakingRewardParamsResponse {
  return {};
}
export const MsgUpdateStakingRewardParamsResponse = {
  encode(_: MsgUpdateStakingRewardParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateStakingRewardParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse {
    const message = createBaseMsgUpdateStakingRewardParamsResponse();
    return message;
  }
};
function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    wBasisPoints: "",
    asymmetry: ""
  };
}
export const MsgRemoveLiquidity = {
  encode(message: MsgRemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.wBasisPoints !== "") {
      writer.uint32(26).string(message.wBasisPoints);
    }
    if (message.asymmetry !== "") {
      writer.uint32(34).string(message.asymmetry);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      wBasisPoints: isSet(object.wBasisPoints) ? String(object.wBasisPoints) : "",
      asymmetry: isSet(object.asymmetry) ? String(object.asymmetry) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.wBasisPoints = object.wBasisPoints ?? "";
    message.asymmetry = object.asymmetry ?? "";
    return message;
  }
};
function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {};
}
export const MsgRemoveLiquidityResponse = {
  encode(_: MsgRemoveLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  }
};
function createBaseMsgRemoveLiquidityUnits(): MsgRemoveLiquidityUnits {
  return {
    signer: "",
    externalAsset: undefined,
    withdrawUnits: ""
  };
}
export const MsgRemoveLiquidityUnits = {
  encode(message: MsgRemoveLiquidityUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawUnits !== "") {
      writer.uint32(26).string(message.withdrawUnits);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveLiquidityUnits {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      withdrawUnits: isSet(object.withdrawUnits) ? String(object.withdrawUnits) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits {
    const message = createBaseMsgRemoveLiquidityUnits();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.withdrawUnits = object.withdrawUnits ?? "";
    return message;
  }
};
function createBaseMsgRemoveLiquidityUnitsResponse(): MsgRemoveLiquidityUnitsResponse {
  return {};
}
export const MsgRemoveLiquidityUnitsResponse = {
  encode(_: MsgRemoveLiquidityUnitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRemoveLiquidityUnitsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse {
    const message = createBaseMsgRemoveLiquidityUnitsResponse();
    return message;
  }
};
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}
export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }
};
function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}
export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }
    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  }
};
function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}
export const MsgAddLiquidityResponse = {
  encode(_: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  }
};
function createBaseMsgModifyPmtpRates(): MsgModifyPmtpRates {
  return {
    signer: "",
    blockRate: "",
    runningRate: "",
    endPolicy: false
  };
}
export const MsgModifyPmtpRates = {
  encode(message: MsgModifyPmtpRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.blockRate !== "") {
      writer.uint32(18).string(message.blockRate);
    }
    if (message.runningRate !== "") {
      writer.uint32(26).string(message.runningRate);
    }
    if (message.endPolicy === true) {
      writer.uint32(32).bool(message.endPolicy);
    }
    return writer;
  },
  fromJSON(object: any): MsgModifyPmtpRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      blockRate: isSet(object.blockRate) ? String(object.blockRate) : "",
      runningRate: isSet(object.runningRate) ? String(object.runningRate) : "",
      endPolicy: isSet(object.endPolicy) ? Boolean(object.endPolicy) : false
    };
  },
  fromPartial(object: Partial<MsgModifyPmtpRates>): MsgModifyPmtpRates {
    const message = createBaseMsgModifyPmtpRates();
    message.signer = object.signer ?? "";
    message.blockRate = object.blockRate ?? "";
    message.runningRate = object.runningRate ?? "";
    message.endPolicy = object.endPolicy ?? false;
    return message;
  }
};
function createBaseMsgModifyPmtpRatesResponse(): MsgModifyPmtpRatesResponse {
  return {};
}
export const MsgModifyPmtpRatesResponse = {
  encode(_: MsgModifyPmtpRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgModifyPmtpRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse {
    const message = createBaseMsgModifyPmtpRatesResponse();
    return message;
  }
};
function createBaseMsgUpdatePmtpParams(): MsgUpdatePmtpParams {
  return {
    signer: "",
    pmtpPeriodGovernanceRate: "",
    pmtpPeriodEpochLength: Long.ZERO,
    pmtpPeriodStartBlock: Long.ZERO,
    pmtpPeriodEndBlock: Long.ZERO
  };
}
export const MsgUpdatePmtpParams = {
  encode(message: MsgUpdatePmtpParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.pmtpPeriodGovernanceRate !== "") {
      writer.uint32(18).string(message.pmtpPeriodGovernanceRate);
    }
    if (!message.pmtpPeriodEpochLength.isZero()) {
      writer.uint32(24).int64(message.pmtpPeriodEpochLength);
    }
    if (!message.pmtpPeriodStartBlock.isZero()) {
      writer.uint32(32).int64(message.pmtpPeriodStartBlock);
    }
    if (!message.pmtpPeriodEndBlock.isZero()) {
      writer.uint32(40).int64(message.pmtpPeriodEndBlock);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePmtpParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate) ? String(object.pmtpPeriodGovernanceRate) : "",
      pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength) ? Long.fromValue(object.pmtpPeriodEpochLength) : Long.ZERO,
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? Long.fromValue(object.pmtpPeriodStartBlock) : Long.ZERO,
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? Long.fromValue(object.pmtpPeriodEndBlock) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams {
    const message = createBaseMsgUpdatePmtpParams();
    message.signer = object.signer ?? "";
    message.pmtpPeriodGovernanceRate = object.pmtpPeriodGovernanceRate ?? "";
    message.pmtpPeriodEpochLength = object.pmtpPeriodEpochLength !== undefined && object.pmtpPeriodEpochLength !== null ? Long.fromValue(object.pmtpPeriodEpochLength) : Long.ZERO;
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock !== undefined && object.pmtpPeriodStartBlock !== null ? Long.fromValue(object.pmtpPeriodStartBlock) : Long.ZERO;
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock !== undefined && object.pmtpPeriodEndBlock !== null ? Long.fromValue(object.pmtpPeriodEndBlock) : Long.ZERO;
    return message;
  }
};
function createBaseMsgUpdatePmtpParamsResponse(): MsgUpdatePmtpParamsResponse {
  return {};
}
export const MsgUpdatePmtpParamsResponse = {
  encode(_: MsgUpdatePmtpParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePmtpParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse {
    const message = createBaseMsgUpdatePmtpParamsResponse();
    return message;
  }
};
function createBaseMsgSwap(): MsgSwap {
  return {
    signer: "",
    sentAsset: undefined,
    receivedAsset: undefined,
    sentAmount: "",
    minReceivingAmount: ""
  };
}
export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.sentAsset !== undefined) {
      Asset.encode(message.sentAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.receivedAsset !== undefined) {
      Asset.encode(message.receivedAsset, writer.uint32(26).fork()).ldelim();
    }
    if (message.sentAmount !== "") {
      writer.uint32(34).string(message.sentAmount);
    }
    if (message.minReceivingAmount !== "") {
      writer.uint32(42).string(message.minReceivingAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgSwap {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      sentAsset: isSet(object.sentAsset) ? Asset.fromJSON(object.sentAsset) : undefined,
      receivedAsset: isSet(object.receivedAsset) ? Asset.fromJSON(object.receivedAsset) : undefined,
      sentAmount: isSet(object.sentAmount) ? String(object.sentAmount) : "",
      minReceivingAmount: isSet(object.minReceivingAmount) ? String(object.minReceivingAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.signer = object.signer ?? "";
    message.sentAsset = object.sentAsset !== undefined && object.sentAsset !== null ? Asset.fromPartial(object.sentAsset) : undefined;
    message.receivedAsset = object.receivedAsset !== undefined && object.receivedAsset !== null ? Asset.fromPartial(object.receivedAsset) : undefined;
    message.sentAmount = object.sentAmount ?? "";
    message.minReceivingAmount = object.minReceivingAmount ?? "";
    return message;
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}
export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }
};
function createBaseMsgDecommissionPool(): MsgDecommissionPool {
  return {
    signer: "",
    symbol: ""
  };
}
export const MsgDecommissionPool = {
  encode(message: MsgDecommissionPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  fromJSON(object: any): MsgDecommissionPool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },
  fromPartial(object: Partial<MsgDecommissionPool>): MsgDecommissionPool {
    const message = createBaseMsgDecommissionPool();
    message.signer = object.signer ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }
};
function createBaseMsgDecommissionPoolResponse(): MsgDecommissionPoolResponse {
  return {};
}
export const MsgDecommissionPoolResponse = {
  encode(_: MsgDecommissionPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDecommissionPoolResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse {
    const message = createBaseMsgDecommissionPoolResponse();
    return message;
  }
};
function createBaseMsgUnlockLiquidityRequest(): MsgUnlockLiquidityRequest {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}
export const MsgUnlockLiquidityRequest = {
  encode(message: MsgUnlockLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlockLiquidityRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest {
    const message = createBaseMsgUnlockLiquidityRequest();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  }
};
function createBaseMsgUnlockLiquidityResponse(): MsgUnlockLiquidityResponse {
  return {};
}
export const MsgUnlockLiquidityResponse = {
  encode(_: MsgUnlockLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUnlockLiquidityResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse {
    const message = createBaseMsgUnlockLiquidityResponse();
    return message;
  }
};
function createBaseMsgUpdateRewardsParamsRequest(): MsgUpdateRewardsParamsRequest {
  return {
    signer: "",
    liquidityRemovalLockPeriod: Long.UZERO,
    liquidityRemovalCancelPeriod: Long.UZERO
  };
}
export const MsgUpdateRewardsParamsRequest = {
  encode(message: MsgUpdateRewardsParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (!message.liquidityRemovalLockPeriod.isZero()) {
      writer.uint32(16).uint64(message.liquidityRemovalLockPeriod);
    }
    if (!message.liquidityRemovalCancelPeriod.isZero()) {
      writer.uint32(24).uint64(message.liquidityRemovalCancelPeriod);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRewardsParamsRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod) ? Long.fromValue(object.liquidityRemovalLockPeriod) : Long.UZERO,
      liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod) ? Long.fromValue(object.liquidityRemovalCancelPeriod) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest {
    const message = createBaseMsgUpdateRewardsParamsRequest();
    message.signer = object.signer ?? "";
    message.liquidityRemovalLockPeriod = object.liquidityRemovalLockPeriod !== undefined && object.liquidityRemovalLockPeriod !== null ? Long.fromValue(object.liquidityRemovalLockPeriod) : Long.UZERO;
    message.liquidityRemovalCancelPeriod = object.liquidityRemovalCancelPeriod !== undefined && object.liquidityRemovalCancelPeriod !== null ? Long.fromValue(object.liquidityRemovalCancelPeriod) : Long.UZERO;
    return message;
  }
};
function createBaseMsgUpdateRewardsParamsResponse(): MsgUpdateRewardsParamsResponse {
  return {};
}
export const MsgUpdateRewardsParamsResponse = {
  encode(_: MsgUpdateRewardsParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRewardsParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse {
    const message = createBaseMsgUpdateRewardsParamsResponse();
    return message;
  }
};
function createBaseMsgAddRewardPeriodRequest(): MsgAddRewardPeriodRequest {
  return {
    signer: "",
    rewardPeriods: []
  };
}
export const MsgAddRewardPeriodRequest = {
  encode(message: MsgAddRewardPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.rewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddRewardPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      rewardPeriods: Array.isArray(object?.rewardPeriods) ? object.rewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest {
    const message = createBaseMsgAddRewardPeriodRequest();
    message.signer = object.signer ?? "";
    message.rewardPeriods = object.rewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgAddRewardPeriodResponse(): MsgAddRewardPeriodResponse {
  return {};
}
export const MsgAddRewardPeriodResponse = {
  encode(_: MsgAddRewardPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddRewardPeriodResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse {
    const message = createBaseMsgAddRewardPeriodResponse();
    return message;
  }
};
function createBaseMsgSetSymmetryThreshold(): MsgSetSymmetryThreshold {
  return {
    signer: "",
    threshold: "",
    ratio: ""
  };
}
export const MsgSetSymmetryThreshold = {
  encode(message: MsgSetSymmetryThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.ratio !== "") {
      writer.uint32(26).string(message.ratio);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetSymmetryThreshold {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      ratio: isSet(object.ratio) ? String(object.ratio) : ""
    };
  },
  fromPartial(object: Partial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold {
    const message = createBaseMsgSetSymmetryThreshold();
    message.signer = object.signer ?? "";
    message.threshold = object.threshold ?? "";
    message.ratio = object.ratio ?? "";
    return message;
  }
};
function createBaseMsgSetSymmetryThresholdResponse(): MsgSetSymmetryThresholdResponse {
  return {};
}
export const MsgSetSymmetryThresholdResponse = {
  encode(_: MsgSetSymmetryThresholdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetSymmetryThresholdResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse {
    const message = createBaseMsgSetSymmetryThresholdResponse();
    return message;
  }
};
function createBaseMsgCancelUnlock(): MsgCancelUnlock {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}
export const MsgCancelUnlock = {
  encode(message: MsgCancelUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }
    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelUnlock {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelUnlock>): MsgCancelUnlock {
    const message = createBaseMsgCancelUnlock();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  }
};
function createBaseMsgCancelUnlockResponse(): MsgCancelUnlockResponse {
  return {};
}
export const MsgCancelUnlockResponse = {
  encode(_: MsgCancelUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelUnlockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse {
    const message = createBaseMsgCancelUnlockResponse();
    return message;
  }
};
function createBaseRemovalRequest(): RemovalRequest {
  return {
    id: Long.ZERO,
    value: "",
    msg: undefined
  };
}
export const RemovalRequest = {
  encode(message: RemovalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.msg !== undefined) {
      MsgRemoveLiquidity.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RemovalRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      value: isSet(object.value) ? String(object.value) : "",
      msg: isSet(object.msg) ? MsgRemoveLiquidity.fromJSON(object.msg) : undefined
    };
  },
  fromPartial(object: Partial<RemovalRequest>): RemovalRequest {
    const message = createBaseRemovalRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.value = object.value ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? MsgRemoveLiquidity.fromPartial(object.msg) : undefined;
    return message;
  }
};
function createBaseMsgModifyLiquidityProtectionRates(): MsgModifyLiquidityProtectionRates {
  return {
    signer: "",
    currentRowanLiquidityThreshold: ""
  };
}
export const MsgModifyLiquidityProtectionRates = {
  encode(message: MsgModifyLiquidityProtectionRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.currentRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.currentRowanLiquidityThreshold);
    }
    return writer;
  },
  fromJSON(object: any): MsgModifyLiquidityProtectionRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      currentRowanLiquidityThreshold: isSet(object.currentRowanLiquidityThreshold) ? String(object.currentRowanLiquidityThreshold) : ""
    };
  },
  fromPartial(object: Partial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates {
    const message = createBaseMsgModifyLiquidityProtectionRates();
    message.signer = object.signer ?? "";
    message.currentRowanLiquidityThreshold = object.currentRowanLiquidityThreshold ?? "";
    return message;
  }
};
function createBaseMsgModifyLiquidityProtectionRatesResponse(): MsgModifyLiquidityProtectionRatesResponse {
  return {};
}
export const MsgModifyLiquidityProtectionRatesResponse = {
  encode(_: MsgModifyLiquidityProtectionRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse {
    const message = createBaseMsgModifyLiquidityProtectionRatesResponse();
    return message;
  }
};
function createBaseMsgUpdateLiquidityProtectionParams(): MsgUpdateLiquidityProtectionParams {
  return {
    signer: "",
    maxRowanLiquidityThreshold: "",
    maxRowanLiquidityThresholdAsset: "",
    epochLength: Long.UZERO,
    isActive: false
  };
}
export const MsgUpdateLiquidityProtectionParams = {
  encode(message: MsgUpdateLiquidityProtectionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.maxRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.maxRowanLiquidityThreshold);
    }
    if (message.maxRowanLiquidityThresholdAsset !== "") {
      writer.uint32(34).string(message.maxRowanLiquidityThresholdAsset);
    }
    if (!message.epochLength.isZero()) {
      writer.uint32(24).uint64(message.epochLength);
    }
    if (message.isActive === true) {
      writer.uint32(40).bool(message.isActive);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateLiquidityProtectionParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      maxRowanLiquidityThreshold: isSet(object.maxRowanLiquidityThreshold) ? String(object.maxRowanLiquidityThreshold) : "",
      maxRowanLiquidityThresholdAsset: isSet(object.maxRowanLiquidityThresholdAsset) ? String(object.maxRowanLiquidityThresholdAsset) : "",
      epochLength: isSet(object.epochLength) ? Long.fromValue(object.epochLength) : Long.UZERO,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams {
    const message = createBaseMsgUpdateLiquidityProtectionParams();
    message.signer = object.signer ?? "";
    message.maxRowanLiquidityThreshold = object.maxRowanLiquidityThreshold ?? "";
    message.maxRowanLiquidityThresholdAsset = object.maxRowanLiquidityThresholdAsset ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? Long.fromValue(object.epochLength) : Long.UZERO;
    message.isActive = object.isActive ?? false;
    return message;
  }
};
function createBaseMsgUpdateLiquidityProtectionParamsResponse(): MsgUpdateLiquidityProtectionParamsResponse {
  return {};
}
export const MsgUpdateLiquidityProtectionParamsResponse = {
  encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProtectionParamsResponse();
    return message;
  }
};
function createBaseMsgAddProviderDistributionPeriodRequest(): MsgAddProviderDistributionPeriodRequest {
  return {
    signer: "",
    distributionPeriods: []
  };
}
export const MsgAddProviderDistributionPeriodRequest = {
  encode(message: MsgAddProviderDistributionPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.distributionPeriods) {
      ProviderDistributionPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgAddProviderDistributionPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      distributionPeriods: Array.isArray(object?.distributionPeriods) ? object.distributionPeriods.map((e: any) => ProviderDistributionPeriod.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest {
    const message = createBaseMsgAddProviderDistributionPeriodRequest();
    message.signer = object.signer ?? "";
    message.distributionPeriods = object.distributionPeriods?.map(e => ProviderDistributionPeriod.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgAddProviderDistributionPeriodResponse(): MsgAddProviderDistributionPeriodResponse {
  return {};
}
export const MsgAddProviderDistributionPeriodResponse = {
  encode(_: MsgAddProviderDistributionPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAddProviderDistributionPeriodResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse {
    const message = createBaseMsgAddProviderDistributionPeriodResponse();
    return message;
  }
};
function createBaseMsgUpdateSwapFeeParamsRequest(): MsgUpdateSwapFeeParamsRequest {
  return {
    signer: "",
    defaultSwapFeeRate: "",
    tokenParams: []
  };
}
export const MsgUpdateSwapFeeParamsRequest = {
  encode(message: MsgUpdateSwapFeeParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.defaultSwapFeeRate !== "") {
      writer.uint32(18).string(message.defaultSwapFeeRate);
    }
    for (const v of message.tokenParams) {
      SwapFeeTokenParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateSwapFeeParamsRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      defaultSwapFeeRate: isSet(object.defaultSwapFeeRate) ? String(object.defaultSwapFeeRate) : "",
      tokenParams: Array.isArray(object?.tokenParams) ? object.tokenParams.map((e: any) => SwapFeeTokenParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdateSwapFeeParamsRequest>): MsgUpdateSwapFeeParamsRequest {
    const message = createBaseMsgUpdateSwapFeeParamsRequest();
    message.signer = object.signer ?? "";
    message.defaultSwapFeeRate = object.defaultSwapFeeRate ?? "";
    message.tokenParams = object.tokenParams?.map(e => SwapFeeTokenParams.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgUpdateSwapFeeParamsResponse(): MsgUpdateSwapFeeParamsResponse {
  return {};
}
export const MsgUpdateSwapFeeParamsResponse = {
  encode(_: MsgUpdateSwapFeeParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateSwapFeeParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateSwapFeeParamsResponse>): MsgUpdateSwapFeeParamsResponse {
    const message = createBaseMsgUpdateSwapFeeParamsResponse();
    return message;
  }
};