import { Rpc } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgFundFairburnPool, MsgFundFairburnPoolResponse } from "./tx";
/** Msg defines the alloc Msg service. */
export interface Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    /**
     * FundFairburnPool defines a method to allow an account to directly
     * fund the fee collector module account.
     */
    fundFairburnPool(request: MsgFundFairburnPool): Promise<MsgFundFairburnPoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
    fundFairburnPool(request: MsgFundFairburnPool): Promise<MsgFundFairburnPoolResponse>;
}
