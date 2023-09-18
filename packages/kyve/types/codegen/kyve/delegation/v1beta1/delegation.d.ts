import { BinaryWriter } from "../../../binary";
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
export declare const SlashTypeAmino: typeof SlashType;
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
    kIndex: bigint;
    /**
     * initial_amount of stake the user had when it delegated.
     * slashes can cause that the actual stake is lower.
     */
    initialAmount: bigint;
}
export interface DelegatorProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.Delegator";
    value: Uint8Array;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorAmino {
    /** staker corresponds to a KYVE-staker on the protocol-side */
    staker: string;
    /**
     * delegator the user who delegate to the staker.
     * If staker and delegator are the same we call it: self-delegation
     */
    delegator: string;
    /** k_index is an internal index for the f1-distribution algorithm */
    k_index: string;
    /**
     * initial_amount of stake the user had when it delegated.
     * slashes can cause that the actual stake is lower.
     */
    initial_amount: string;
}
export interface DelegatorAminoMsg {
    type: "/kyve.delegation.v1beta1.Delegator";
    value: DelegatorAmino;
}
/**
 * Delegator stores the information that one address has delegated to another address
 * It stores important information for the F1-Fee distribution algorithm
 */
export interface DelegatorSDKType {
    staker: string;
    delegator: string;
    k_index: bigint;
    initial_amount: bigint;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntry {
    /** staker on protocol level */
    staker: string;
    /** k_index is the of the period this entry ends */
    kIndex: bigint;
    /** value is the quotient of collected rewards and total stake according to F1-distribution */
    value: string;
}
export interface DelegationEntryProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.DelegationEntry";
    value: Uint8Array;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntryAmino {
    /** staker on protocol level */
    staker: string;
    /** k_index is the of the period this entry ends */
    k_index: string;
    /** value is the quotient of collected rewards and total stake according to F1-distribution */
    value: string;
}
export interface DelegationEntryAminoMsg {
    type: "/kyve.delegation.v1beta1.DelegationEntry";
    value: DelegationEntryAmino;
}
/**
 * DelegationEntry represents an entry according to the F1-Fee-Distribution algorithm.
 * Take a look at x/delegation/keeper/logic_f1distribution.go for more details
 */
export interface DelegationEntrySDKType {
    staker: string;
    k_index: bigint;
    value: string;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationData {
    /** Every staker has one DelegationData */
    staker: string;
    /** current_rewards ... */
    currentRewards: bigint;
    /** total_delegation ... */
    totalDelegation: bigint;
    /** latest_index_k ... */
    latestIndexK: bigint;
    /** delegator_count the amount of different addresses delegating to the staker */
    delegatorCount: bigint;
    /** latest_index_was_undelegation helps indicates when an entry can be deleted */
    latestIndexWasUndelegation: boolean;
}
export interface DelegationDataProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.DelegationData";
    value: Uint8Array;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataAmino {
    /** Every staker has one DelegationData */
    staker: string;
    /** current_rewards ... */
    current_rewards: string;
    /** total_delegation ... */
    total_delegation: string;
    /** latest_index_k ... */
    latest_index_k: string;
    /** delegator_count the amount of different addresses delegating to the staker */
    delegator_count: string;
    /** latest_index_was_undelegation helps indicates when an entry can be deleted */
    latest_index_was_undelegation: boolean;
}
export interface DelegationDataAminoMsg {
    type: "/kyve.delegation.v1beta1.DelegationData";
    value: DelegationDataAmino;
}
/** DelegationPoolData stores general delegation information for every staker */
export interface DelegationDataSDKType {
    staker: string;
    current_rewards: bigint;
    total_delegation: bigint;
    latest_index_k: bigint;
    delegator_count: bigint;
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
    kIndex: bigint;
    /** fraction that got slashed */
    fraction: string;
}
export interface DelegationSlashProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.DelegationSlash";
    value: Uint8Array;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashAmino {
    /** staker who got slashed */
    staker: string;
    /** k_index for f1-algorithm */
    k_index: string;
    /** fraction that got slashed */
    fraction: string;
}
export interface DelegationSlashAminoMsg {
    type: "/kyve.delegation.v1beta1.DelegationSlash";
    value: DelegationSlashAmino;
}
/**
 * DelegationSlash represents an f1-slash
 * these entries needs to be iterated to obtain the current amount of the actual stake
 * Every staker can have n slash-entries
 */
export interface DelegationSlashSDKType {
    staker: string;
    k_index: bigint;
    fraction: string;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntry {
    /** index ... */
    index: bigint;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** amount ... */
    amount: bigint;
    /** creation_time ... */
    creationTime: bigint;
}
export interface UndelegationQueueEntryProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.UndelegationQueueEntry";
    value: Uint8Array;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntryAmino {
    /** index ... */
    index: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** amount ... */
    amount: string;
    /** creation_time ... */
    creation_time: string;
}
export interface UndelegationQueueEntryAminoMsg {
    type: "/kyve.delegation.v1beta1.UndelegationQueueEntry";
    value: UndelegationQueueEntryAmino;
}
/** UndelegationQueueEntry ... */
export interface UndelegationQueueEntrySDKType {
    index: bigint;
    staker: string;
    delegator: string;
    amount: bigint;
    creation_time: bigint;
}
/** QueueState ... */
export interface QueueState {
    /** low_index ... */
    lowIndex: bigint;
    /** high_index ... */
    highIndex: bigint;
}
export interface QueueStateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.QueueState";
    value: Uint8Array;
}
/** QueueState ... */
export interface QueueStateAmino {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
export interface QueueStateAminoMsg {
    type: "/kyve.delegation.v1beta1.QueueState";
    value: QueueStateAmino;
}
/** QueueState ... */
export interface QueueStateSDKType {
    low_index: bigint;
    high_index: bigint;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldown {
    /** low_index ... */
    address: string;
    /** high_index ... */
    creationDate: bigint;
}
export interface RedelegationCooldownProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.RedelegationCooldown";
    value: Uint8Array;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownAmino {
    /** low_index ... */
    address: string;
    /** high_index ... */
    creation_date: string;
}
export interface RedelegationCooldownAminoMsg {
    type: "/kyve.delegation.v1beta1.RedelegationCooldown";
    value: RedelegationCooldownAmino;
}
/** RedelegationCooldown ... */
export interface RedelegationCooldownSDKType {
    address: string;
    creation_date: bigint;
}
export declare const Delegator: {
    typeUrl: string;
    encode(message: Delegator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Delegator;
    fromPartial(object: Partial<Delegator>): Delegator;
    fromAmino(object: DelegatorAmino): Delegator;
    toAmino(message: Delegator): DelegatorAmino;
    fromAminoMsg(object: DelegatorAminoMsg): Delegator;
    fromProtoMsg(message: DelegatorProtoMsg): Delegator;
    toProto(message: Delegator): Uint8Array;
    toProtoMsg(message: Delegator): DelegatorProtoMsg;
};
export declare const DelegationEntry: {
    typeUrl: string;
    encode(message: DelegationEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegationEntry;
    fromPartial(object: Partial<DelegationEntry>): DelegationEntry;
    fromAmino(object: DelegationEntryAmino): DelegationEntry;
    toAmino(message: DelegationEntry): DelegationEntryAmino;
    fromAminoMsg(object: DelegationEntryAminoMsg): DelegationEntry;
    fromProtoMsg(message: DelegationEntryProtoMsg): DelegationEntry;
    toProto(message: DelegationEntry): Uint8Array;
    toProtoMsg(message: DelegationEntry): DelegationEntryProtoMsg;
};
export declare const DelegationData: {
    typeUrl: string;
    encode(message: DelegationData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegationData;
    fromPartial(object: Partial<DelegationData>): DelegationData;
    fromAmino(object: DelegationDataAmino): DelegationData;
    toAmino(message: DelegationData): DelegationDataAmino;
    fromAminoMsg(object: DelegationDataAminoMsg): DelegationData;
    fromProtoMsg(message: DelegationDataProtoMsg): DelegationData;
    toProto(message: DelegationData): Uint8Array;
    toProtoMsg(message: DelegationData): DelegationDataProtoMsg;
};
export declare const DelegationSlash: {
    typeUrl: string;
    encode(message: DelegationSlash, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegationSlash;
    fromPartial(object: Partial<DelegationSlash>): DelegationSlash;
    fromAmino(object: DelegationSlashAmino): DelegationSlash;
    toAmino(message: DelegationSlash): DelegationSlashAmino;
    fromAminoMsg(object: DelegationSlashAminoMsg): DelegationSlash;
    fromProtoMsg(message: DelegationSlashProtoMsg): DelegationSlash;
    toProto(message: DelegationSlash): Uint8Array;
    toProtoMsg(message: DelegationSlash): DelegationSlashProtoMsg;
};
export declare const UndelegationQueueEntry: {
    typeUrl: string;
    encode(message: UndelegationQueueEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UndelegationQueueEntry;
    fromPartial(object: Partial<UndelegationQueueEntry>): UndelegationQueueEntry;
    fromAmino(object: UndelegationQueueEntryAmino): UndelegationQueueEntry;
    toAmino(message: UndelegationQueueEntry): UndelegationQueueEntryAmino;
    fromAminoMsg(object: UndelegationQueueEntryAminoMsg): UndelegationQueueEntry;
    fromProtoMsg(message: UndelegationQueueEntryProtoMsg): UndelegationQueueEntry;
    toProto(message: UndelegationQueueEntry): Uint8Array;
    toProtoMsg(message: UndelegationQueueEntry): UndelegationQueueEntryProtoMsg;
};
export declare const QueueState: {
    typeUrl: string;
    encode(message: QueueState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueueState;
    fromPartial(object: Partial<QueueState>): QueueState;
    fromAmino(object: QueueStateAmino): QueueState;
    toAmino(message: QueueState): QueueStateAmino;
    fromAminoMsg(object: QueueStateAminoMsg): QueueState;
    fromProtoMsg(message: QueueStateProtoMsg): QueueState;
    toProto(message: QueueState): Uint8Array;
    toProtoMsg(message: QueueState): QueueStateProtoMsg;
};
export declare const RedelegationCooldown: {
    typeUrl: string;
    encode(message: RedelegationCooldown, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RedelegationCooldown;
    fromPartial(object: Partial<RedelegationCooldown>): RedelegationCooldown;
    fromAmino(object: RedelegationCooldownAmino): RedelegationCooldown;
    toAmino(message: RedelegationCooldown): RedelegationCooldownAmino;
    fromAminoMsg(object: RedelegationCooldownAminoMsg): RedelegationCooldown;
    fromProtoMsg(message: RedelegationCooldownProtoMsg): RedelegationCooldown;
    toProto(message: RedelegationCooldown): Uint8Array;
    toProtoMsg(message: RedelegationCooldown): RedelegationCooldownProtoMsg;
};
