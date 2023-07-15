import { Params, ParamsSDKType } from "./params";
import { Delegator, DelegatorSDKType, DelegationEntry, DelegationEntrySDKType, DelegationData, DelegationDataSDKType, DelegationSlash, DelegationSlashSDKType, UndelegationQueueEntry, UndelegationQueueEntrySDKType, QueueState, QueueStateSDKType, RedelegationCooldown, RedelegationCooldownSDKType } from "./delegation";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
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
  queueStateUndelegation?: QueueState;
  /** redelegation_cooldown_list ... */
  redelegationCooldownList: RedelegationCooldown[];
}
/** GenesisState defines the delegation module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  delegator_list: DelegatorSDKType[];
  delegation_entry_list: DelegationEntrySDKType[];
  delegation_data_list: DelegationDataSDKType[];
  delegation_slash_list: DelegationSlashSDKType[];
  undelegation_queue_entry_list: UndelegationQueueEntrySDKType[];
  queue_state_undelegation?: QueueStateSDKType;
  redelegation_cooldown_list: RedelegationCooldownSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    delegatorList: [],
    delegationEntryList: [],
    delegationDataList: [],
    delegationSlashList: [],
    undelegationQueueEntryList: [],
    queueStateUndelegation: undefined,
    redelegationCooldownList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};