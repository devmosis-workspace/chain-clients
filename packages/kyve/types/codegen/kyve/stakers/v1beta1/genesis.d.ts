import { Params, ParamsSDKType } from "./params";
import { Staker, StakerSDKType, Valaccount, ValaccountSDKType, CommissionChangeEntry, CommissionChangeEntrySDKType, QueueState, QueueStateSDKType, LeavePoolEntry, LeavePoolEntrySDKType } from "./stakers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** staker_list ... */
    stakerList: Staker[];
    /** valaccount_list ... */
    valaccountList: Valaccount[];
    /** commission_change_entries ... */
    commissionChangeEntries: CommissionChangeEntry[];
    /** queue_state_commission ... */
    queueStateCommission?: QueueState;
    /** leave_pool_entries ... */
    leavePoolEntries: LeavePoolEntry[];
    /** queue_state_leave ... */
    queueStateLeave?: QueueState;
}
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    staker_list: StakerSDKType[];
    valaccount_list: ValaccountSDKType[];
    commission_change_entries: CommissionChangeEntrySDKType[];
    queue_state_commission?: QueueStateSDKType;
    leave_pool_entries: LeavePoolEntrySDKType[];
    queue_state_leave?: QueueStateSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
