import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgRemoveLiquidityUnits, MsgRemoveLiquidityUnitsResponse, MsgCreatePool, MsgCreatePoolResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgSwap, MsgSwapResponse, MsgDecommissionPool, MsgDecommissionPoolResponse, MsgUnlockLiquidityRequest, MsgUnlockLiquidityResponse, MsgUpdateRewardsParamsRequest, MsgUpdateRewardsParamsResponse, MsgAddRewardPeriodRequest, MsgAddRewardPeriodResponse, MsgModifyPmtpRates, MsgModifyPmtpRatesResponse, MsgUpdatePmtpParams, MsgUpdatePmtpParamsResponse, MsgUpdateStakingRewardParams, MsgUpdateStakingRewardParamsResponse, MsgSetSymmetryThreshold, MsgSetSymmetryThresholdResponse, MsgCancelUnlock, MsgCancelUnlockResponse, MsgUpdateLiquidityProtectionParams, MsgUpdateLiquidityProtectionParamsResponse, MsgModifyLiquidityProtectionRates, MsgModifyLiquidityProtectionRatesResponse, MsgAddProviderDistributionPeriodRequest, MsgAddProviderDistributionPeriodResponse, MsgUpdateSwapFeeParamsRequest, MsgUpdateSwapFeeParamsResponse, MsgAddLiquidityToRewardsBucketRequest, MsgAddLiquidityToRewardsBucketResponse } from "./tx";
export interface Msg {
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse>;
  removeLiquidityUnits(request: MsgRemoveLiquidityUnits): Promise<MsgRemoveLiquidityUnitsResponse>;
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse>;
  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  decommissionPool(request: MsgDecommissionPool): Promise<MsgDecommissionPoolResponse>;
  unlockLiquidity(request: MsgUnlockLiquidityRequest): Promise<MsgUnlockLiquidityResponse>;
  updateRewardsParams(request: MsgUpdateRewardsParamsRequest): Promise<MsgUpdateRewardsParamsResponse>;
  addRewardPeriod(request: MsgAddRewardPeriodRequest): Promise<MsgAddRewardPeriodResponse>;
  modifyPmtpRates(request: MsgModifyPmtpRates): Promise<MsgModifyPmtpRatesResponse>;
  updatePmtpParams(request: MsgUpdatePmtpParams): Promise<MsgUpdatePmtpParamsResponse>;
  updateStakingRewardParams(request: MsgUpdateStakingRewardParams): Promise<MsgUpdateStakingRewardParamsResponse>;
  setSymmetryThreshold(request: MsgSetSymmetryThreshold): Promise<MsgSetSymmetryThresholdResponse>;
  cancelUnlockLiquidity(request: MsgCancelUnlock): Promise<MsgCancelUnlockResponse>;
  updateLiquidityProtectionParams(request: MsgUpdateLiquidityProtectionParams): Promise<MsgUpdateLiquidityProtectionParamsResponse>;
  modifyLiquidityProtectionRates(request: MsgModifyLiquidityProtectionRates): Promise<MsgModifyLiquidityProtectionRatesResponse>;
  addProviderDistributionPeriod(request: MsgAddProviderDistributionPeriodRequest): Promise<MsgAddProviderDistributionPeriodResponse>;
  updateSwapFeeParams(request: MsgUpdateSwapFeeParamsRequest): Promise<MsgUpdateSwapFeeParamsResponse>;
  addLiquidityToRewardsBucket(request: MsgAddLiquidityToRewardsBucketRequest): Promise<MsgAddLiquidityToRewardsBucketResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.removeLiquidity = this.removeLiquidity.bind(this);
    this.removeLiquidityUnits = this.removeLiquidityUnits.bind(this);
    this.createPool = this.createPool.bind(this);
    this.addLiquidity = this.addLiquidity.bind(this);
    this.swap = this.swap.bind(this);
    this.decommissionPool = this.decommissionPool.bind(this);
    this.unlockLiquidity = this.unlockLiquidity.bind(this);
    this.updateRewardsParams = this.updateRewardsParams.bind(this);
    this.addRewardPeriod = this.addRewardPeriod.bind(this);
    this.modifyPmtpRates = this.modifyPmtpRates.bind(this);
    this.updatePmtpParams = this.updatePmtpParams.bind(this);
    this.updateStakingRewardParams = this.updateStakingRewardParams.bind(this);
    this.setSymmetryThreshold = this.setSymmetryThreshold.bind(this);
    this.cancelUnlockLiquidity = this.cancelUnlockLiquidity.bind(this);
    this.updateLiquidityProtectionParams = this.updateLiquidityProtectionParams.bind(this);
    this.modifyLiquidityProtectionRates = this.modifyLiquidityProtectionRates.bind(this);
    this.addProviderDistributionPeriod = this.addProviderDistributionPeriod.bind(this);
    this.updateSwapFeeParams = this.updateSwapFeeParams.bind(this);
    this.addLiquidityToRewardsBucket = this.addLiquidityToRewardsBucket.bind(this);
  }
  removeLiquidity(request: MsgRemoveLiquidity): Promise<MsgRemoveLiquidityResponse> {
    const data = MsgRemoveLiquidity.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "RemoveLiquidity", data);
    return promise.then(data => MsgRemoveLiquidityResponse.decode(new BinaryReader(data)));
  }
  removeLiquidityUnits(request: MsgRemoveLiquidityUnits): Promise<MsgRemoveLiquidityUnitsResponse> {
    const data = MsgRemoveLiquidityUnits.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "RemoveLiquidityUnits", data);
    return promise.then(data => MsgRemoveLiquidityUnitsResponse.decode(new BinaryReader(data)));
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
  }
  addLiquidity(request: MsgAddLiquidity): Promise<MsgAddLiquidityResponse> {
    const data = MsgAddLiquidity.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "AddLiquidity", data);
    return promise.then(data => MsgAddLiquidityResponse.decode(new BinaryReader(data)));
  }
  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new BinaryReader(data)));
  }
  decommissionPool(request: MsgDecommissionPool): Promise<MsgDecommissionPoolResponse> {
    const data = MsgDecommissionPool.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "DecommissionPool", data);
    return promise.then(data => MsgDecommissionPoolResponse.decode(new BinaryReader(data)));
  }
  unlockLiquidity(request: MsgUnlockLiquidityRequest): Promise<MsgUnlockLiquidityResponse> {
    const data = MsgUnlockLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UnlockLiquidity", data);
    return promise.then(data => MsgUnlockLiquidityResponse.decode(new BinaryReader(data)));
  }
  updateRewardsParams(request: MsgUpdateRewardsParamsRequest): Promise<MsgUpdateRewardsParamsResponse> {
    const data = MsgUpdateRewardsParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdateRewardsParams", data);
    return promise.then(data => MsgUpdateRewardsParamsResponse.decode(new BinaryReader(data)));
  }
  addRewardPeriod(request: MsgAddRewardPeriodRequest): Promise<MsgAddRewardPeriodResponse> {
    const data = MsgAddRewardPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "AddRewardPeriod", data);
    return promise.then(data => MsgAddRewardPeriodResponse.decode(new BinaryReader(data)));
  }
  modifyPmtpRates(request: MsgModifyPmtpRates): Promise<MsgModifyPmtpRatesResponse> {
    const data = MsgModifyPmtpRates.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "ModifyPmtpRates", data);
    return promise.then(data => MsgModifyPmtpRatesResponse.decode(new BinaryReader(data)));
  }
  updatePmtpParams(request: MsgUpdatePmtpParams): Promise<MsgUpdatePmtpParamsResponse> {
    const data = MsgUpdatePmtpParams.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdatePmtpParams", data);
    return promise.then(data => MsgUpdatePmtpParamsResponse.decode(new BinaryReader(data)));
  }
  updateStakingRewardParams(request: MsgUpdateStakingRewardParams): Promise<MsgUpdateStakingRewardParamsResponse> {
    const data = MsgUpdateStakingRewardParams.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdateStakingRewardParams", data);
    return promise.then(data => MsgUpdateStakingRewardParamsResponse.decode(new BinaryReader(data)));
  }
  setSymmetryThreshold(request: MsgSetSymmetryThreshold): Promise<MsgSetSymmetryThresholdResponse> {
    const data = MsgSetSymmetryThreshold.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "SetSymmetryThreshold", data);
    return promise.then(data => MsgSetSymmetryThresholdResponse.decode(new BinaryReader(data)));
  }
  cancelUnlockLiquidity(request: MsgCancelUnlock): Promise<MsgCancelUnlockResponse> {
    const data = MsgCancelUnlock.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "CancelUnlockLiquidity", data);
    return promise.then(data => MsgCancelUnlockResponse.decode(new BinaryReader(data)));
  }
  updateLiquidityProtectionParams(request: MsgUpdateLiquidityProtectionParams): Promise<MsgUpdateLiquidityProtectionParamsResponse> {
    const data = MsgUpdateLiquidityProtectionParams.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdateLiquidityProtectionParams", data);
    return promise.then(data => MsgUpdateLiquidityProtectionParamsResponse.decode(new BinaryReader(data)));
  }
  modifyLiquidityProtectionRates(request: MsgModifyLiquidityProtectionRates): Promise<MsgModifyLiquidityProtectionRatesResponse> {
    const data = MsgModifyLiquidityProtectionRates.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "ModifyLiquidityProtectionRates", data);
    return promise.then(data => MsgModifyLiquidityProtectionRatesResponse.decode(new BinaryReader(data)));
  }
  addProviderDistributionPeriod(request: MsgAddProviderDistributionPeriodRequest): Promise<MsgAddProviderDistributionPeriodResponse> {
    const data = MsgAddProviderDistributionPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "AddProviderDistributionPeriod", data);
    return promise.then(data => MsgAddProviderDistributionPeriodResponse.decode(new BinaryReader(data)));
  }
  updateSwapFeeParams(request: MsgUpdateSwapFeeParamsRequest): Promise<MsgUpdateSwapFeeParamsResponse> {
    const data = MsgUpdateSwapFeeParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "UpdateSwapFeeParams", data);
    return promise.then(data => MsgUpdateSwapFeeParamsResponse.decode(new BinaryReader(data)));
  }
  addLiquidityToRewardsBucket(request: MsgAddLiquidityToRewardsBucketRequest): Promise<MsgAddLiquidityToRewardsBucketResponse> {
    const data = MsgAddLiquidityToRewardsBucketRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.clp.v1.Msg", "AddLiquidityToRewardsBucket", data);
    return promise.then(data => MsgAddLiquidityToRewardsBucketResponse.decode(new BinaryReader(data)));
  }
}