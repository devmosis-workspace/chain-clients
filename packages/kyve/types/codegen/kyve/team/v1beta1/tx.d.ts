import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlocked {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: Long;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
    amount: Long;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlockedSDKType {
    authority: string;
    id: Long;
    amount: Long;
    recipient: string;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponse {
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseSDKType {
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewards {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
    amount: Long;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewardsSDKType {
    authority: string;
    amount: Long;
    recipient: string;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponse {
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseSDKType {
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewards {
    /** authority is the foundation which is allowed to payout unlocked tokens */
    authority: string;
    /** id is the unique identifier of the team member */
    id: Long;
    /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
    amount: Long;
    /** recipient is the recipient address chosen by the team member. */
    recipient: string;
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewardsSDKType {
    authority: string;
    id: Long;
    amount: Long;
    recipient: string;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponse {
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseSDKType {
}
/** MsgClawback ... */
export interface MsgClawback {
    /** authority is the foundation which is allowed to modify team accounts */
    authority: string;
    /** id is the unique identifier of the team member */
    id: Long;
    /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
    clawback: Long;
}
/** MsgClawback ... */
export interface MsgClawbackSDKType {
    authority: string;
    id: Long;
    clawback: Long;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponse {
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseSDKType {
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccount {
    /** authority ... */
    authority: string;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: Long;
    /** commencement is the unix timestamp of the member's official start date. */
    commencement: Long;
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccountSDKType {
    authority: string;
    total_allocation: Long;
    commencement: Long;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponse {
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseSDKType {
}
export declare const MsgClaimUnlocked: {
    encode(message: MsgClaimUnlocked, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimUnlocked;
    fromPartial(object: Partial<MsgClaimUnlocked>): MsgClaimUnlocked;
};
export declare const MsgClaimUnlockedResponse: {
    encode(_: MsgClaimUnlockedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimUnlockedResponse;
    fromPartial(_: Partial<MsgClaimUnlockedResponse>): MsgClaimUnlockedResponse;
};
export declare const MsgClaimAuthorityRewards: {
    encode(message: MsgClaimAuthorityRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimAuthorityRewards;
    fromPartial(object: Partial<MsgClaimAuthorityRewards>): MsgClaimAuthorityRewards;
};
export declare const MsgClaimAuthorityRewardsResponse: {
    encode(_: MsgClaimAuthorityRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimAuthorityRewardsResponse;
    fromPartial(_: Partial<MsgClaimAuthorityRewardsResponse>): MsgClaimAuthorityRewardsResponse;
};
export declare const MsgClaimAccountRewards: {
    encode(message: MsgClaimAccountRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimAccountRewards;
    fromPartial(object: Partial<MsgClaimAccountRewards>): MsgClaimAccountRewards;
};
export declare const MsgClaimAccountRewardsResponse: {
    encode(_: MsgClaimAccountRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimAccountRewardsResponse;
    fromPartial(_: Partial<MsgClaimAccountRewardsResponse>): MsgClaimAccountRewardsResponse;
};
export declare const MsgClawback: {
    encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClawback;
    fromPartial(object: Partial<MsgClawback>): MsgClawback;
};
export declare const MsgClawbackResponse: {
    encode(_: MsgClawbackResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClawbackResponse;
    fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse;
};
export declare const MsgCreateTeamVestingAccount: {
    encode(message: MsgCreateTeamVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateTeamVestingAccount;
    fromPartial(object: Partial<MsgCreateTeamVestingAccount>): MsgCreateTeamVestingAccount;
};
export declare const MsgCreateTeamVestingAccountResponse: {
    encode(_: MsgCreateTeamVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateTeamVestingAccountResponse;
    fromPartial(_: Partial<MsgCreateTeamVestingAccountResponse>): MsgCreateTeamVestingAccountResponse;
};
