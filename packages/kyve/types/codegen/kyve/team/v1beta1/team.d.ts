import { BinaryWriter } from "../../../binary";
/** Authority ... */
export interface Authority {
    /** total inflation rewards is the total amount of rewards the authority has received ever */
    totalRewards: bigint;
    /** claimed is the amount of inflation rewards claimed by the authority */
    rewardsClaimed: bigint;
}
export interface AuthorityProtoMsg {
    typeUrl: "/kyve.team.v1beta1.Authority";
    value: Uint8Array;
}
/** Authority ... */
export interface AuthorityAmino {
    /** total inflation rewards is the total amount of rewards the authority has received ever */
    total_rewards: string;
    /** claimed is the amount of inflation rewards claimed by the authority */
    rewards_claimed: string;
}
export interface AuthorityAminoMsg {
    type: "/kyve.team.v1beta1.Authority";
    value: AuthorityAmino;
}
/** Authority ... */
export interface AuthoritySDKType {
    total_rewards: bigint;
    rewards_claimed: bigint;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccount {
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: bigint;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: bigint;
    /** commencement is the unix timestamp of the member's official start date in seconds */
    commencement: bigint;
    /**
     * clawback is a unix timestamp of a clawback in seconds. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback: bigint;
    /** unlocked_claimed is the amount of $KYVE already claimed by the account holder */
    unlockedClaimed: bigint;
    /** the last time the unlocked amount was claimed */
    lastClaimedTime: bigint;
    /** total rewards is the total amount of rewards the account has received ever */
    totalRewards: bigint;
    /** rewards claimed is the amount inflation rewards claimed by account holder */
    rewardsClaimed: bigint;
}
export interface TeamVestingAccountProtoMsg {
    typeUrl: "/kyve.team.v1beta1.TeamVestingAccount";
    value: Uint8Array;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccountAmino {
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: string;
    /** total_allocation is the number of tokens reserved for this team member. */
    total_allocation: string;
    /** commencement is the unix timestamp of the member's official start date in seconds */
    commencement: string;
    /**
     * clawback is a unix timestamp of a clawback in seconds. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback: string;
    /** unlocked_claimed is the amount of $KYVE already claimed by the account holder */
    unlocked_claimed: string;
    /** the last time the unlocked amount was claimed */
    last_claimed_time: string;
    /** total rewards is the total amount of rewards the account has received ever */
    total_rewards: string;
    /** rewards claimed is the amount inflation rewards claimed by account holder */
    rewards_claimed: string;
}
export interface TeamVestingAccountAminoMsg {
    type: "/kyve.team.v1beta1.TeamVestingAccount";
    value: TeamVestingAccountAmino;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccountSDKType {
    id: bigint;
    total_allocation: bigint;
    commencement: bigint;
    clawback: bigint;
    unlocked_claimed: bigint;
    last_claimed_time: bigint;
    total_rewards: bigint;
    rewards_claimed: bigint;
}
export declare const Authority: {
    typeUrl: string;
    encode(message: Authority, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Authority;
    fromPartial(object: Partial<Authority>): Authority;
    fromAmino(object: AuthorityAmino): Authority;
    toAmino(message: Authority): AuthorityAmino;
    fromAminoMsg(object: AuthorityAminoMsg): Authority;
    fromProtoMsg(message: AuthorityProtoMsg): Authority;
    toProto(message: Authority): Uint8Array;
    toProtoMsg(message: Authority): AuthorityProtoMsg;
};
export declare const TeamVestingAccount: {
    typeUrl: string;
    encode(message: TeamVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TeamVestingAccount;
    fromPartial(object: Partial<TeamVestingAccount>): TeamVestingAccount;
    fromAmino(object: TeamVestingAccountAmino): TeamVestingAccount;
    toAmino(message: TeamVestingAccount): TeamVestingAccountAmino;
    fromAminoMsg(object: TeamVestingAccountAminoMsg): TeamVestingAccount;
    fromProtoMsg(message: TeamVestingAccountProtoMsg): TeamVestingAccount;
    toProto(message: TeamVestingAccount): Uint8Array;
    toProtoMsg(message: TeamVestingAccount): TeamVestingAccountProtoMsg;
};
