import { Rpc } from "../../../helpers";
import { MsgDelegate, MsgDelegateResponse, MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgUndelegate, MsgUndelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** Delegate ... */
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    /** Withdraw ... */
    withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
    /** Undelegate ... */
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    /** Redelegate ... */
    redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/delegation module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
