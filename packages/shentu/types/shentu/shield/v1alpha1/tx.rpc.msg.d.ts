import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
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
