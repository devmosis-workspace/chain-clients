import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccount {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: Long;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: Long;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement: Long;
}
/**
 * MsgCreateTeamVestingAccount is an event emitted when a new team vesting account gets created.
 * emitted_by: MsgCreateTeamVestingAccount
 */
export interface EventCreateTeamVestingAccountSDKType {
    authority: string;
    id: Long;
    total_allocation: Long;
    commencement: Long;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawback {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: Long;
    /**
     * clawback is a unix timestamp of a clawback. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback: Long;
    /** amount which got clawed back. */
    amount: Long;
}
/**
 * EventClawback is an event emitted when the authority claws back tokens from a team vesting account.
 * emitted_by: MsgClawback
 */
export interface EventClawbackSDKType {
    authority: string;
    id: Long;
    clawback: Long;
    amount: Long;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlocked {
    /** authority which initiated this action */
    authority: string;
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: Long;
    /** amount is the number of tokens claimed from the unlocked amount. */
    amount: Long;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
/**
 * EventClaimedUnlocked is an event emitted when the authority claims unlocked $KYVE for a recipient.
 * emitted_by: MsgClaimUnlocked
 */
export interface EventClaimedUnlockedSDKType {
    authority: string;
    id: Long;
    amount: Long;
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
    id: Long;
    /** amount is the amount of inflation rewards the authority should claim for the account holder */
    amount: Long;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
/**
 * EventClaimInflationRewards is an event emitted when the authority claims inflation rewards for a recipient.
 * emitted_by: MsgClaimInflationRewards
 */
export interface EventClaimInflationRewardsSDKType {
    authority: string;
    id: Long;
    amount: Long;
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
    amount: Long;
    /** recipient is the receiver address of the claim. */
    recipient: string;
}
/**
 * EventClaimAuthorityRewards is an event emitted when the authority claims its inflation rewards for a recipient.
 * emitted_by: MsgClaimAuthorityRewards
 */
export interface EventClaimAuthorityRewardsSDKType {
    authority: string;
    amount: Long;
    recipient: string;
}
export declare const EventCreateTeamVestingAccount: {
    encode(message: EventCreateTeamVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateTeamVestingAccount;
    fromPartial(object: Partial<EventCreateTeamVestingAccount>): EventCreateTeamVestingAccount;
};
export declare const EventClawback: {
    encode(message: EventClawback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClawback;
    fromPartial(object: Partial<EventClawback>): EventClawback;
};
export declare const EventClaimedUnlocked: {
    encode(message: EventClaimedUnlocked, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaimedUnlocked;
    fromPartial(object: Partial<EventClaimedUnlocked>): EventClaimedUnlocked;
};
export declare const EventClaimInflationRewards: {
    encode(message: EventClaimInflationRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaimInflationRewards;
    fromPartial(object: Partial<EventClaimInflationRewards>): EventClaimInflationRewards;
};
export declare const EventClaimAuthorityRewards: {
    encode(message: EventClaimAuthorityRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventClaimAuthorityRewards;
    fromPartial(object: Partial<EventClaimAuthorityRewards>): EventClaimAuthorityRewards;
};
