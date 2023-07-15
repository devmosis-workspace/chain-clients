import { Params, ParamsSDKType } from "./params";
import { Staker, StakerSDKType, Valaccount, ValaccountSDKType, CommissionChangeEntry, CommissionChangeEntrySDKType, QueueState, QueueStateSDKType, LeavePoolEntry, LeavePoolEntrySDKType } from "./stakers";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    stakerList: [],
    valaccountList: [],
    commissionChangeEntries: [],
    queueStateCommission: undefined,
    leavePoolEntries: [],
    queueStateLeave: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stakerList) {
      Staker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.valaccountList) {
      Valaccount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.commissionChangeEntries) {
      CommissionChangeEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.queueStateCommission !== undefined) {
      QueueState.encode(message.queueStateCommission, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.leavePoolEntries) {
      LeavePoolEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.queueStateLeave !== undefined) {
      QueueState.encode(message.queueStateLeave, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      stakerList: Array.isArray(object?.stakerList) ? object.stakerList.map((e: any) => Staker.fromJSON(e)) : [],
      valaccountList: Array.isArray(object?.valaccountList) ? object.valaccountList.map((e: any) => Valaccount.fromJSON(e)) : [],
      commissionChangeEntries: Array.isArray(object?.commissionChangeEntries) ? object.commissionChangeEntries.map((e: any) => CommissionChangeEntry.fromJSON(e)) : [],
      queueStateCommission: isSet(object.queueStateCommission) ? QueueState.fromJSON(object.queueStateCommission) : undefined,
      leavePoolEntries: Array.isArray(object?.leavePoolEntries) ? object.leavePoolEntries.map((e: any) => LeavePoolEntry.fromJSON(e)) : [],
      queueStateLeave: isSet(object.queueStateLeave) ? QueueState.fromJSON(object.queueStateLeave) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.stakerList = object.stakerList?.map(e => Staker.fromPartial(e)) || [];
    message.valaccountList = object.valaccountList?.map(e => Valaccount.fromPartial(e)) || [];
    message.commissionChangeEntries = object.commissionChangeEntries?.map(e => CommissionChangeEntry.fromPartial(e)) || [];
    message.queueStateCommission = object.queueStateCommission !== undefined && object.queueStateCommission !== null ? QueueState.fromPartial(object.queueStateCommission) : undefined;
    message.leavePoolEntries = object.leavePoolEntries?.map(e => LeavePoolEntry.fromPartial(e)) || [];
    message.queueStateLeave = object.queueStateLeave !== undefined && object.queueStateLeave !== null ? QueueState.fromPartial(object.queueStateLeave) : undefined;
    return message;
  }
};