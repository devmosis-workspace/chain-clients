import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreatePool, MsgCreatePoolResponse, MsgUpdatePool, MsgUpdatePoolResponse, MsgPausePool, MsgPausePoolResponse, MsgResumePool, MsgResumePoolResponse, MsgDepositCollateral, MsgDepositCollateralResponse, MsgWithdrawCollateral, MsgWithdrawCollateralResponse, MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgWithdrawForeignRewards, MsgWithdrawForeignRewardsResponse, MsgPurchaseShield, MsgPurchaseShieldResponse, MsgWithdrawReimbursement, MsgWithdrawReimbursementResponse, MsgUpdateSponsor, MsgUpdateSponsorResponse, MsgStakeForShield, MsgStakeForShieldResponse, MsgUnstakeFromShield, MsgUnstakeFromShieldResponse } from "./tx";
/** Msg defines the shield Msg service. */
export interface Msg {
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
  pausePool(request: MsgPausePool): Promise<MsgPausePoolResponse>;
  resumePool(request: MsgResumePool): Promise<MsgResumePoolResponse>;
  depositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse>;
  withdrawCollateral(request: MsgWithdrawCollateral): Promise<MsgWithdrawCollateralResponse>;
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
  withdrawForeignRewards(request: MsgWithdrawForeignRewards): Promise<MsgWithdrawForeignRewardsResponse>;
  purchaseShield(request: MsgPurchaseShield): Promise<MsgPurchaseShieldResponse>;
  withdrawReimbursement(request: MsgWithdrawReimbursement): Promise<MsgWithdrawReimbursementResponse>;
  updateSponsor(request: MsgUpdateSponsor): Promise<MsgUpdateSponsorResponse>;
  stakeForShield(request: MsgStakeForShield): Promise<MsgStakeForShieldResponse>;
  unstakeFromShield(request: MsgUnstakeFromShield): Promise<MsgUnstakeFromShieldResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createPool = this.createPool.bind(this);
    this.updatePool = this.updatePool.bind(this);
    this.pausePool = this.pausePool.bind(this);
    this.resumePool = this.resumePool.bind(this);
    this.depositCollateral = this.depositCollateral.bind(this);
    this.withdrawCollateral = this.withdrawCollateral.bind(this);
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.withdrawForeignRewards = this.withdrawForeignRewards.bind(this);
    this.purchaseShield = this.purchaseShield.bind(this);
    this.withdrawReimbursement = this.withdrawReimbursement.bind(this);
    this.updateSponsor = this.updateSponsor.bind(this);
    this.stakeForShield = this.stakeForShield.bind(this);
    this.unstakeFromShield = this.unstakeFromShield.bind(this);
  }
  createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "CreatePool", data);
    return promise.then(data => MsgCreatePoolResponse.decode(new BinaryReader(data)));
  }
  updatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "UpdatePool", data);
    return promise.then(data => MsgUpdatePoolResponse.decode(new BinaryReader(data)));
  }
  pausePool(request: MsgPausePool): Promise<MsgPausePoolResponse> {
    const data = MsgPausePool.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "PausePool", data);
    return promise.then(data => MsgPausePoolResponse.decode(new BinaryReader(data)));
  }
  resumePool(request: MsgResumePool): Promise<MsgResumePoolResponse> {
    const data = MsgResumePool.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "ResumePool", data);
    return promise.then(data => MsgResumePoolResponse.decode(new BinaryReader(data)));
  }
  depositCollateral(request: MsgDepositCollateral): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateral.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "DepositCollateral", data);
    return promise.then(data => MsgDepositCollateralResponse.decode(new BinaryReader(data)));
  }
  withdrawCollateral(request: MsgWithdrawCollateral): Promise<MsgWithdrawCollateralResponse> {
    const data = MsgWithdrawCollateral.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "WithdrawCollateral", data);
    return promise.then(data => MsgWithdrawCollateralResponse.decode(new BinaryReader(data)));
  }
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "WithdrawRewards", data);
    return promise.then(data => MsgWithdrawRewardsResponse.decode(new BinaryReader(data)));
  }
  withdrawForeignRewards(request: MsgWithdrawForeignRewards): Promise<MsgWithdrawForeignRewardsResponse> {
    const data = MsgWithdrawForeignRewards.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "WithdrawForeignRewards", data);
    return promise.then(data => MsgWithdrawForeignRewardsResponse.decode(new BinaryReader(data)));
  }
  purchaseShield(request: MsgPurchaseShield): Promise<MsgPurchaseShieldResponse> {
    const data = MsgPurchaseShield.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "PurchaseShield", data);
    return promise.then(data => MsgPurchaseShieldResponse.decode(new BinaryReader(data)));
  }
  withdrawReimbursement(request: MsgWithdrawReimbursement): Promise<MsgWithdrawReimbursementResponse> {
    const data = MsgWithdrawReimbursement.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "WithdrawReimbursement", data);
    return promise.then(data => MsgWithdrawReimbursementResponse.decode(new BinaryReader(data)));
  }
  updateSponsor(request: MsgUpdateSponsor): Promise<MsgUpdateSponsorResponse> {
    const data = MsgUpdateSponsor.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "UpdateSponsor", data);
    return promise.then(data => MsgUpdateSponsorResponse.decode(new BinaryReader(data)));
  }
  stakeForShield(request: MsgStakeForShield): Promise<MsgStakeForShieldResponse> {
    const data = MsgStakeForShield.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "StakeForShield", data);
    return promise.then(data => MsgStakeForShieldResponse.decode(new BinaryReader(data)));
  }
  unstakeFromShield(request: MsgUnstakeFromShield): Promise<MsgUnstakeFromShieldResponse> {
    const data = MsgUnstakeFromShield.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Msg", "UnstakeFromShield", data);
    return promise.then(data => MsgUnstakeFromShieldResponse.decode(new BinaryReader(data)));
  }
}