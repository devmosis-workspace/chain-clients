import { Rpc } from "../../../helpers";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgSetAutoRestake, MsgSetAutoRestakeResponse } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    /**
     * SetAutoRestake enables or disables automatic restaking for a delegator
     * validator pair
     */
    setAutoRestake(request: MsgSetAutoRestake): Promise<MsgSetAutoRestakeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    setAutoRestake(request: MsgSetAutoRestake): Promise<MsgSetAutoRestakeResponse>;
}
