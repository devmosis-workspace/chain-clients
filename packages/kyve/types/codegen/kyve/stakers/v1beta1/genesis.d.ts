import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Staker, StakerAmino, StakerSDKType, Valaccount, ValaccountAmino, ValaccountSDKType, CommissionChangeEntry, CommissionChangeEntryAmino, CommissionChangeEntrySDKType, QueueState, QueueStateAmino, QueueStateSDKType, LeavePoolEntry, LeavePoolEntryAmino, LeavePoolEntrySDKType } from "./stakers";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    /** staker_list ... */
    stakerList: Staker[];
    /** valaccount_list ... */
    valaccountList: Valaccount[];
    /** commission_change_entries ... */
    commissionChangeEntries: CommissionChangeEntry[];
    /** queue_state_commission ... */
    queueStateCommission: QueueState;
    /** leave_pool_entries ... */
    leavePoolEntries: LeavePoolEntry[];
    /** queue_state_leave ... */
    queueStateLeave: QueueState;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    /** staker_list ... */
    staker_list?: StakerAmino[];
    /** valaccount_list ... */
    valaccount_list?: ValaccountAmino[];
    /** commission_change_entries ... */
    commission_change_entries?: CommissionChangeEntryAmino[];
    /** queue_state_commission ... */
    queue_state_commission?: QueueStateAmino;
    /** leave_pool_entries ... */
    leave_pool_entries?: LeavePoolEntryAmino[];
    /** queue_state_leave ... */
    queue_state_leave?: QueueStateAmino;
}
export interface GenesisStateAminoMsg {
    type: "/kyve.stakers.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the stakers module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    staker_list: StakerSDKType[];
    valaccount_list: ValaccountSDKType[];
    commission_change_entries: CommissionChangeEntrySDKType[];
    queue_state_commission: QueueStateSDKType;
    leave_pool_entries: LeavePoolEntrySDKType[];
    queue_state_leave: QueueStateSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
