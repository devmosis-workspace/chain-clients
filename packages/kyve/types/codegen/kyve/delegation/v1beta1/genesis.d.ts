import { Params, ParamsSDKType } from "./params";
import { Delegator, DelegatorSDKType, DelegationEntry, DelegationEntrySDKType, DelegationData, DelegationDataSDKType, DelegationSlash, DelegationSlashSDKType, UndelegationQueueEntry, UndelegationQueueEntrySDKType, QueueState, QueueStateSDKType, RedelegationCooldown, RedelegationCooldownSDKType } from "./delegation";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
