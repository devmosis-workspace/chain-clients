import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Staker, StakerAmino, StakerSDKType, Valaccount, ValaccountAmino, ValaccountSDKType, CommissionChangeEntry, CommissionChangeEntryAmino, CommissionChangeEntrySDKType, QueueState, QueueStateAmino, QueueStateSDKType, LeavePoolEntry, LeavePoolEntryAmino, LeavePoolEntrySDKType } from "./stakers";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    stakerList: [],
    valaccountList: [],
    commissionChangeEntries: [],
    queueStateCommission: QueueState.fromPartial({}),
    leavePoolEntries: [],
    queueStateLeave: QueueState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/kyve.stakers.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.stakerList = object.staker_list?.map(e => Staker.fromAmino(e)) || [];
    message.valaccountList = object.valaccount_list?.map(e => Valaccount.fromAmino(e)) || [];
    message.commissionChangeEntries = object.commission_change_entries?.map(e => CommissionChangeEntry.fromAmino(e)) || [];
    if (object.queue_state_commission !== undefined && object.queue_state_commission !== null) {
      message.queueStateCommission = QueueState.fromAmino(object.queue_state_commission);
    }
    message.leavePoolEntries = object.leave_pool_entries?.map(e => LeavePoolEntry.fromAmino(e)) || [];
    if (object.queue_state_leave !== undefined && object.queue_state_leave !== null) {
      message.queueStateLeave = QueueState.fromAmino(object.queue_state_leave);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.stakerList) {
      obj.staker_list = message.stakerList.map(e => e ? Staker.toAmino(e) : undefined);
    } else {
      obj.staker_list = [];
    }
    if (message.valaccountList) {
      obj.valaccount_list = message.valaccountList.map(e => e ? Valaccount.toAmino(e) : undefined);
    } else {
      obj.valaccount_list = [];
    }
    if (message.commissionChangeEntries) {
      obj.commission_change_entries = message.commissionChangeEntries.map(e => e ? CommissionChangeEntry.toAmino(e) : undefined);
    } else {
      obj.commission_change_entries = [];
    }
    obj.queue_state_commission = message.queueStateCommission ? QueueState.toAmino(message.queueStateCommission) : undefined;
    if (message.leavePoolEntries) {
      obj.leave_pool_entries = message.leavePoolEntries.map(e => e ? LeavePoolEntry.toAmino(e) : undefined);
    } else {
      obj.leave_pool_entries = [];
    }
    obj.queue_state_leave = message.queueStateLeave ? QueueState.toAmino(message.queueStateLeave) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kyve.stakers.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};