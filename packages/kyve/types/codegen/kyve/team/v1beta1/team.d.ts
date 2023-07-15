import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Authority ... */
export interface Authority {
    /** total inflation rewards is the total amount of rewards the authority has received ever */
    totalRewards: Long;
    /** claimed is the amount of inflation rewards claimed by the authority */
    rewardsClaimed: Long;
}
/** Authority ... */
export interface AuthoritySDKType {
    total_rewards: Long;
    rewards_claimed: Long;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccount {
    /** id is a unique identify for each vesting account, tied to a single team member. */
    id: Long;
    /** total_allocation is the number of tokens reserved for this team member. */
    totalAllocation: Long;
    /** commencement is the unix timestamp of the member's official start date in seconds */
    commencement: Long;
    /**
     * clawback is a unix timestamp of a clawback in seconds. If timestamp is zero
     * it means that the account has not received a clawback
     */
    clawback: Long;
    /** unlocked_claimed is the amount of $KYVE already claimed by the account holder */
    unlockedClaimed: Long;
    /** the last time the unlocked amount was claimed */
    lastClaimedTime: Long;
    /** total rewards is the total amount of rewards the account has received ever */
    totalRewards: Long;
    /** rewards claimed is the amount inflation rewards claimed by account holder */
    rewardsClaimed: Long;
}
/** TeamVestingAccount ... */
export interface TeamVestingAccountSDKType {
    id: Long;
    total_allocation: Long;
    commencement: Long;
    clawback: Long;
    unlocked_claimed: Long;
    last_claimed_time: Long;
    total_rewards: Long;
    rewards_claimed: Long;
}
export declare const Authority: {
    encode(message: Authority, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Authority;
    fromPartial(object: Partial<Authority>): Authority;
};
export declare const TeamVestingAccount: {
    encode(message: TeamVestingAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TeamVestingAccount;
    fromPartial(object: Partial<TeamVestingAccount>): TeamVestingAccount;
};
