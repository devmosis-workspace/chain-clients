import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Delegator, DelegatorAmino, DelegatorSDKType, DelegationEntry, DelegationEntryAmino, DelegationEntrySDKType, DelegationData, DelegationDataAmino, DelegationDataSDKType, DelegationSlash, DelegationSlashAmino, DelegationSlashSDKType, UndelegationQueueEntry, UndelegationQueueEntryAmino, UndelegationQueueEntrySDKType, QueueState, QueueStateAmino, QueueStateSDKType, RedelegationCooldown, RedelegationCooldownAmino, RedelegationCooldownSDKType } from "./delegation";
import { BinaryWriter } from "../../../binary";
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
    delegator_list?: DelegatorAmino[];
    /** delegation_entry_list ... */
    delegation_entry_list?: DelegationEntryAmino[];
    /** delegation_data_list ... */
    delegation_data_list?: DelegationDataAmino[];
    /** delegation_slash_list ... */
    delegation_slash_list?: DelegationSlashAmino[];
    /** undelegation_queue_entry_list ... */
    undelegation_queue_entry_list?: UndelegationQueueEntryAmino[];
    /** queue_state_undelegation ... */
    queue_state_undelegation?: QueueStateAmino;
    /** redelegation_cooldown_list ... */
    redelegation_cooldown_list?: RedelegationCooldownAmino[];
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
