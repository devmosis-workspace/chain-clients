import { BinaryWriter } from "../../../binary";
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccount {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: bigint;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: bigint;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement: bigint;
}
export interface EventCreateTeamVestingAccountProtoMsg {
    typeUrl: "/kyve.team.v1beta1.EventCreateTeamVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccountAmino {
    /** authority which initiated this action */
    authority?: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id?: string;
    /** total_allocation is the number of tokens reserved for this team member. */
    total_allocation?: string;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement?: string;
}
export interface EventCreateTeamVestingAccountAminoMsg {
    type: "/kyve.team.v1beta1.EventCreateTeamVestingAccount";
    value: EventCreateTeamVestingAccountAmino;
}
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccountSDKType {
    authority: string;
    id: bigint;
    total_allocation: bigint;
    commencement: bigint;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawback {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: bigint;
    /**
     * clawback is a unix timestamp of a clawback. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback: bigint;
    /** amount which got clawed back. */
    amount: bigint;
}
export interface EventClawbackProtoMsg {
    typeUrl: "/kyve.team.v1beta1.EventClawback";
    value: Uint8Array;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawbackAmino {
    /** authority which initiated this action */
    authority?: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id?: string;
    /**
     * clawback is a unix timestamp of a clawback. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback?: string;
    /** amount which got clawed back. */
    amount?: string;
}
export interface EventClawbackAminoMsg {
    type: "/kyve.team.v1beta1.EventClawback";
    value: EventClawbackAmino;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawbackSDKType {
    authority: string;
    id: bigint;
    clawback: bigint;
    amount: bigint;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlocked {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: bigint;
    /** amount is the number of tokens claimed from the unlocked amount. */
    amount: bigint;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
export interface EventClaimedUnlockedProtoMsg {
    typeUrl: "/kyve.team.v1beta1.EventClaimedUnlocked";
    value: Uint8Array;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlockedAmino {
    /** authority which initiated this action */
    authority?: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id?: string;
    /** amount is the number of tokens claimed from the unlocked amount. */
    amount?: string;
    /** recipient is the receiver address of the claim. */
    recipient?: string;
}
export interface EventClaimedUnlockedAminoMsg {
    type: "/kyve.team.v1beta1.EventClaimedUnlocked";
    value: EventClaimedUnlockedAmino;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlockedSDKType {
    authority: string;
    id: bigint;
    amount: bigint;
    recipient: string;
}
/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewards {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: bigint;
    /** amount is the amount of inflation rewards the authority should claim for the account holder */
    amount: bigint;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
export interface EventClaimInflationRewardsProtoMsg {
    typeUrl: "/kyve.team.v1beta1.EventClaimInflationRewards";
    value: Uint8Array;
}
/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewardsAmino {
    /** authority which initiated this action */
    authority?: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id?: string;
    /** amount is the amount of inflation rewards the authority should claim for the account holder */
    amount?: string;
    /** recipient is the receiver address of the claim. */
    recipient?: string;
}
export interface EventClaimInflationRewardsAminoMsg {
    type: "/kyve.team.v1beta1.EventClaimInflationRewards";
    value: EventClaimInflationRewardsAmino;
}
/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewardsSDKType {
    authority: string;
    id: bigint;
    amount: bigint;
    recipient: string;
}
/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewards {
    /** authority which initiated this action */
    authority: string;
    /** amount is the amount of inflation rewards the authority should claim for the account holder */
    amount: bigint;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
export interface EventClaimAuthorityRewardsProtoMsg {
    typeUrl: "/kyve.team.v1beta1.EventClaimAuthorityRewards";
    value: Uint8Array;
}
/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewardsAmino {
    /** authority which initiated this action */
    authority?: string;
    /** amount is the amount of inflation rewards the authority should claim for the account holder */
    amount?: string;
    /** recipient is the receiver address of the claim. */
    recipient?: string;
}
export interface EventClaimAuthorityRewardsAminoMsg {
    type: "/kyve.team.v1beta1.EventClaimAuthorityRewards";
    value: EventClaimAuthorityRewardsAmino;
}
/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewardsSDKType {
    authority: string;
    amount: bigint;
    recipient: string;
}
export declare const EventCreateTeamVestingAccount: {
    typeUrl: string;
    encode(message: EventCreateTeamVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateTeamVestingAccount;
    fromPartial(object: Partial<EventCreateTeamVestingAccount>): EventCreateTeamVestingAccount;
    fromAmino(object: EventCreateTeamVestingAccountAmino): EventCreateTeamVestingAccount;
    toAmino(message: EventCreateTeamVestingAccount): EventCreateTeamVestingAccountAmino;
    fromAminoMsg(object: EventCreateTeamVestingAccountAminoMsg): EventCreateTeamVestingAccount;
    fromProtoMsg(message: EventCreateTeamVestingAccountProtoMsg): EventCreateTeamVestingAccount;
    toProto(message: EventCreateTeamVestingAccount): Uint8Array;
    toProtoMsg(message: EventCreateTeamVestingAccount): EventCreateTeamVestingAccountProtoMsg;
};
export declare const EventClawback: {
    typeUrl: string;
    encode(message: EventClawback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClawback;
    fromPartial(object: Partial<EventClawback>): EventClawback;
    fromAmino(object: EventClawbackAmino): EventClawback;
    toAmino(message: EventClawback): EventClawbackAmino;
    fromAminoMsg(object: EventClawbackAminoMsg): EventClawback;
    fromProtoMsg(message: EventClawbackProtoMsg): EventClawback;
    toProto(message: EventClawback): Uint8Array;
    toProtoMsg(message: EventClawback): EventClawbackProtoMsg;
};
export declare const EventClaimedUnlocked: {
    typeUrl: string;
    encode(message: EventClaimedUnlocked, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaimedUnlocked;
    fromPartial(object: Partial<EventClaimedUnlocked>): EventClaimedUnlocked;
    fromAmino(object: EventClaimedUnlockedAmino): EventClaimedUnlocked;
    toAmino(message: EventClaimedUnlocked): EventClaimedUnlockedAmino;
    fromAminoMsg(object: EventClaimedUnlockedAminoMsg): EventClaimedUnlocked;
    fromProtoMsg(message: EventClaimedUnlockedProtoMsg): EventClaimedUnlocked;
    toProto(message: EventClaimedUnlocked): Uint8Array;
    toProtoMsg(message: EventClaimedUnlocked): EventClaimedUnlockedProtoMsg;
};
export declare const EventClaimInflationRewards: {
    typeUrl: string;
    encode(message: EventClaimInflationRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaimInflationRewards;
    fromPartial(object: Partial<EventClaimInflationRewards>): EventClaimInflationRewards;
    fromAmino(object: EventClaimInflationRewardsAmino): EventClaimInflationRewards;
    toAmino(message: EventClaimInflationRewards): EventClaimInflationRewardsAmino;
    fromAminoMsg(object: EventClaimInflationRewardsAminoMsg): EventClaimInflationRewards;
    fromProtoMsg(message: EventClaimInflationRewardsProtoMsg): EventClaimInflationRewards;
    toProto(message: EventClaimInflationRewards): Uint8Array;
    toProtoMsg(message: EventClaimInflationRewards): EventClaimInflationRewardsProtoMsg;
};
export declare const EventClaimAuthorityRewards: {
    typeUrl: string;
    encode(message: EventClaimAuthorityRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventClaimAuthorityRewards;
    fromPartial(object: Partial<EventClaimAuthorityRewards>): EventClaimAuthorityRewards;
    fromAmino(object: EventClaimAuthorityRewardsAmino): EventClaimAuthorityRewards;
    toAmino(message: EventClaimAuthorityRewards): EventClaimAuthorityRewardsAmino;
    fromAminoMsg(object: EventClaimAuthorityRewardsAminoMsg): EventClaimAuthorityRewards;
    fromProtoMsg(message: EventClaimAuthorityRewardsProtoMsg): EventClaimAuthorityRewards;
    toProto(message: EventClaimAuthorityRewards): Uint8Array;
    toProtoMsg(message: EventClaimAuthorityRewards): EventClaimAuthorityRewardsProtoMsg;
};
