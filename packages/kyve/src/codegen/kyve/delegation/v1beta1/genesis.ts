import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Delegator, DelegatorAmino, DelegatorSDKType, DelegationEntry, DelegationEntryAmino, DelegationEntrySDKType, DelegationData, DelegationDataAmino, DelegationDataSDKType, DelegationSlash, DelegationSlashAmino, DelegationSlashSDKType, UndelegationQueueEntry, UndelegationQueueEntryAmino, UndelegationQueueEntrySDKType, QueueState, QueueStateAmino, QueueStateSDKType, RedelegationCooldown, RedelegationCooldownAmino, RedelegationCooldownSDKType } from "./delegation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  /** delegator_list ... */
  delegatorList: Delegator[];
  /** delegation_entry_list ... */
  delegationEntryList: DelegationEntry[];
  /** delegation_data_list ... */
  delegationDataList: DelegationData[];
  /** delegation_slash_list ... */
  delegationSlashList: DelegationSlash[];
  /** undelegation_queue_entry_list ... */
  undelegationQueueEntryList: UndelegationQueueEntry[];
  /** queue_state_undelegation ... */
  queueStateUndelegation: QueueState;
  /** redelegation_cooldown_list ... */
  redelegationCooldownList: RedelegationCooldown[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  /** delegator_list ... */
  delegator_list: DelegatorAmino[];
  /** delegation_entry_list ... */
  delegation_entry_list: DelegationEntryAmino[];
  /** delegation_data_list ... */
  delegation_data_list: DelegationDataAmino[];
  /** delegation_slash_list ... */
  delegation_slash_list: DelegationSlashAmino[];
  /** undelegation_queue_entry_list ... */
  undelegation_queue_entry_list: UndelegationQueueEntryAmino[];
  /** queue_state_undelegation ... */
  queue_state_undelegation?: QueueStateAmino;
  /** redelegation_cooldown_list ... */
  redelegation_cooldown_list: RedelegationCooldownAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/kyve.delegation.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  delegator_list: DelegatorSDKType[];
  delegation_entry_list: DelegationEntrySDKType[];
  delegation_data_list: DelegationDataSDKType[];
  delegation_slash_list: DelegationSlashSDKType[];
  undelegation_queue_entry_list: UndelegationQueueEntrySDKType[];
  queue_state_undelegation: QueueStateSDKType;
  redelegation_cooldown_list: RedelegationCooldownSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    delegatorList: [],
    delegationEntryList: [],
    delegationDataList: [],
    delegationSlashList: [],
    undelegationQueueEntryList: [],
    queueStateUndelegation: QueueState.fromPartial({}),
    redelegationCooldownList: []
  };
}
export const GenesisState = {
  typeUrl: "/kyve.delegation.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegatorList) {
      Delegator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegationEntryList) {
      DelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegationDataList) {
      DelegationData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegationSlashList) {
      DelegationSlash.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.undelegationQueueEntryList) {
      UndelegationQueueEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.queueStateUndelegation !== undefined) {
      QueueState.encode(message.queueStateUndelegation, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.redelegationCooldownList) {
      RedelegationCooldown.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      delegatorList: Array.isArray(object?.delegatorList) ? object.delegatorList.map((e: any) => Delegator.fromJSON(e)) : [],
      delegationEntryList: Array.isArray(object?.delegationEntryList) ? object.delegationEntryList.map((e: any) => DelegationEntry.fromJSON(e)) : [],
      delegationDataList: Array.isArray(object?.delegationDataList) ? object.delegationDataList.map((e: any) => DelegationData.fromJSON(e)) : [],
      delegationSlashList: Array.isArray(object?.delegationSlashList) ? object.delegationSlashList.map((e: any) => DelegationSlash.fromJSON(e)) : [],
      undelegationQueueEntryList: Array.isArray(object?.undelegationQueueEntryList) ? object.undelegationQueueEntryList.map((e: any) => UndelegationQueueEntry.fromJSON(e)) : [],
      queueStateUndelegation: isSet(object.queueStateUndelegation) ? QueueState.fromJSON(object.queueStateUndelegation) : undefined,
      redelegationCooldownList: Array.isArray(object?.redelegationCooldownList) ? object.redelegationCooldownList.map((e: any) => RedelegationCooldown.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.delegatorList = object.delegatorList?.map(e => Delegator.fromPartial(e)) || [];
    message.delegationEntryList = object.delegationEntryList?.map(e => DelegationEntry.fromPartial(e)) || [];
    message.delegationDataList = object.delegationDataList?.map(e => DelegationData.fromPartial(e)) || [];
    message.delegationSlashList = object.delegationSlashList?.map(e => DelegationSlash.fromPartial(e)) || [];
    message.undelegationQueueEntryList = object.undelegationQueueEntryList?.map(e => UndelegationQueueEntry.fromPartial(e)) || [];
    message.queueStateUndelegation = object.queueStateUndelegation !== undefined && object.queueStateUndelegation !== null ? QueueState.fromPartial(object.queueStateUndelegation) : undefined;
    message.redelegationCooldownList = object.redelegationCooldownList?.map(e => RedelegationCooldown.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      delegatorList: Array.isArray(object?.delegator_list) ? object.delegator_list.map((e: any) => Delegator.fromAmino(e)) : [],
      delegationEntryList: Array.isArray(object?.delegation_entry_list) ? object.delegation_entry_list.map((e: any) => DelegationEntry.fromAmino(e)) : [],
      delegationDataList: Array.isArray(object?.delegation_data_list) ? object.delegation_data_list.map((e: any) => DelegationData.fromAmino(e)) : [],
      delegationSlashList: Array.isArray(object?.delegation_slash_list) ? object.delegation_slash_list.map((e: any) => DelegationSlash.fromAmino(e)) : [],
      undelegationQueueEntryList: Array.isArray(object?.undelegation_queue_entry_list) ? object.undelegation_queue_entry_list.map((e: any) => UndelegationQueueEntry.fromAmino(e)) : [],
      queueStateUndelegation: object?.queue_state_undelegation ? QueueState.fromAmino(object.queue_state_undelegation) : undefined,
      redelegationCooldownList: Array.isArray(object?.redelegation_cooldown_list) ? object.redelegation_cooldown_list.map((e: any) => RedelegationCooldown.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.delegatorList) {
      obj.delegator_list = message.delegatorList.map(e => e ? Delegator.toAmino(e) : undefined);
    } else {
      obj.delegator_list = [];
    }
    if (message.delegationEntryList) {
      obj.delegation_entry_list = message.delegationEntryList.map(e => e ? DelegationEntry.toAmino(e) : undefined);
    } else {
      obj.delegation_entry_list = [];
    }
    if (message.delegationDataList) {
      obj.delegation_data_list = message.delegationDataList.map(e => e ? DelegationData.toAmino(e) : undefined);
    } else {
      obj.delegation_data_list = [];
    }
    if (message.delegationSlashList) {
      obj.delegation_slash_list = message.delegationSlashList.map(e => e ? DelegationSlash.toAmino(e) : undefined);
    } else {
      obj.delegation_slash_list = [];
    }
    if (message.undelegationQueueEntryList) {
      obj.undelegation_queue_entry_list = message.undelegationQueueEntryList.map(e => e ? UndelegationQueueEntry.toAmino(e) : undefined);
    } else {
      obj.undelegation_queue_entry_list = [];
    }
    obj.queue_state_undelegation = message.queueStateUndelegation ? QueueState.toAmino(message.queueStateUndelegation) : undefined;
    if (message.redelegationCooldownList) {
      obj.redelegation_cooldown_list = message.redelegationCooldownList.map(e => e ? RedelegationCooldown.toAmino(e) : undefined);
    } else {
      obj.redelegation_cooldown_list = [];
    }
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
      typeUrl: "/kyve.delegation.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};