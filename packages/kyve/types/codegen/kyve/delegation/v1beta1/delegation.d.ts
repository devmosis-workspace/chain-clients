import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** SlashType ... */
export declare enum SlashType {
    /** SLASH_TYPE_UNSPECIFIED - SLASH_TYPE_UNSPECIFIED ... */
    SLASH_TYPE_UNSPECIFIED = 0,
    /** SLASH_TYPE_TIMEOUT - SLASH_TYPE_TIMEOUT ... */
    SLASH_TYPE_TIMEOUT = 1,
    /** SLASH_TYPE_VOTE - SLASH_TYPE_VOTE ... */
    SLASH_TYPE_VOTE = 2,
    /** SLASH_TYPE_UPLOAD - SLASH_TYPE_UPLOAD ... */
    SLASH_TYPE_UPLOAD = 3,
    UNRECOGNIZED = -1
}
export declare const SlashTypeSDKType: typeof SlashType;
export declare function slashTypeFromJSON(object: any): SlashType;
export declare function slashTypeToJSON(object: SlashType): string;
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface Delegator {
    /** staker corresponds to a KYVE-staker on the protocol-side */
    staker: string;
    /**
     * delegator the user who delegate to the staker.
     * If staker and delegator are the same we call it: self-delegation
     */
    delegator: string;
    /** k_index is an internal index for the f1-distribution algorithm */
    kIndex: Long;
    /**
     * initial_amount of stake the user had when it delegated.
     * slashes can cause that the actual stake is lower.
     */
    initialAmount: Long;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorSDKType {
    staker: string;
    delegator: string;
    k_index: Long;
    initial_amount: Long;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
    /** staker on protocol level */
    staker: string;
    /** k_index is the of the period this entry ends */
    kIndex: Long;
    /** value is the quotient of collected rewards and total stake according to F1-distribution */
    value: string;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntrySDKType {
    staker: string;
    k_index: Long;
    value: string;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
    /** Every staker has one DelegationData */
    staker: string;
    /** current_rewards ... */
    currentRewards: Long;
    /** total_delegation ... */
    totalDelegation: Long;
    /** latest_index_k ... */
    latestIndexK: Long;
    /** delegator_count the amount of different addresses delegating to the staker */
    delegatorCount: Long;
    /** latest_index_was_undelegation helps indicates when an entry can be deleted */
    latestIndexWasUndelegation: boolean;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataSDKType {
    staker: string;
    current_rewards: Long;
    total_delegation: Long;
    latest_index_k: Long;
    delegator_count: Long;
    latest_index_was_undelegation: boolean;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlash {
    /** staker who got slashed */
    staker: string;
    /** k_index for f1-algorithm */
    kIndex: Long;
    /** fraction that got slashed */
    fraction: string;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashSDKType {
    staker: string;
    k_index: Long;
    fraction: string;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
    /** index ... */
    index: Long;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** amount ... */
    amount: Long;
    /** creation_time ... */
    creationTime: Long;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntrySDKType {
    index: Long;
    staker: string;
    delegator: string;
    amount: Long;
    creation_time: Long;
}
/** QueueState ... */
export interface QueueState {
    /** low_index ... */
    lowIndex: Long;
    /** high_index ... */
    highIndex: Long;
}
/** QueueState ... */
export interface QueueStateSDKType {
    low_index: Long;
    high_index: Long;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldown {
    /** low_index ... */
    address: string;
    /** high_index ... */
    creationDate: Long;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownSDKType {
    address: string;
    creation_date: Long;
}
export declare const Delegator: {
    encode(message: Delegator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Delegator;
    fromPartial(object: Partial<Delegator>): Delegator;
};
export declare const DelegationEntry: {
    encode(message: DelegationEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegationEntry;
    fromPartial(object: Partial<DelegationEntry>): DelegationEntry;
};
export declare const DelegationData: {
    encode(message: DelegationData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegationData;
    fromPartial(object: Partial<DelegationData>): DelegationData;
};
export declare const DelegationSlash: {
    encode(message: DelegationSlash, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DelegationSlash;
    fromPartial(object: Partial<DelegationSlash>): DelegationSlash;
};
export declare const UndelegationQueueEntry: {
    encode(message: UndelegationQueueEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UndelegationQueueEntry;
    fromPartial(object: Partial<UndelegationQueueEntry>): UndelegationQueueEntry;
};
export declare const QueueState: {
    encode(message: QueueState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueueState;
    fromPartial(object: Partial<QueueState>): QueueState;
};
export declare const RedelegationCooldown: {
    encode(message: RedelegationCooldown, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RedelegationCooldown;
    fromPartial(object: Partial<RedelegationCooldown>): RedelegationCooldown;
};
