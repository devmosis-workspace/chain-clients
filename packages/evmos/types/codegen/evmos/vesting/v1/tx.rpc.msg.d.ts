import { Rpc } from "../../../helpers";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgClawback, MsgClawbackResponse, MsgUpdateVestingFunder, MsgUpdateVestingFunderResponse, MsgConvertVestingAccount, MsgConvertVestingAccountResponse } from "./tx";
/** Msg defines the vesting Msg service. */
export interface Msg {
    /**
     * CreateClawbackVestingAccount creats a vesting account that is subject to
     * clawback and the configuration of vesting and lockup schedules.
     */
    createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    /**
     * UpdateVestingFunder updates the funder address of an existing
     * ClawbackVestingAccount.
     */
    updateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse>;
    /** ConvertVestingAccount converts a ClawbackVestingAccount to a Eth account */
    convertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
    clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
    updateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse>;
    convertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse>;
}
