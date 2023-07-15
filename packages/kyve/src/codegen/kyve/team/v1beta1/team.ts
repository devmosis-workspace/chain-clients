import { Long, isSet } from "../../../helpers";
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
function createBaseAuthority(): Authority {
  return {
    totalRewards: Long.UZERO,
    rewardsClaimed: Long.UZERO
  };
}
export const Authority = {
  encode(message: Authority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.totalRewards.isZero()) {
      writer.uint32(8).uint64(message.totalRewards);
    }
    if (!message.rewardsClaimed.isZero()) {
      writer.uint32(16).uint64(message.rewardsClaimed);
    }
    return writer;
  },
  fromJSON(object: any): Authority {
    return {
      totalRewards: isSet(object.totalRewards) ? Long.fromValue(object.totalRewards) : Long.UZERO,
      rewardsClaimed: isSet(object.rewardsClaimed) ? Long.fromValue(object.rewardsClaimed) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Authority>): Authority {
    const message = createBaseAuthority();
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? Long.fromValue(object.totalRewards) : Long.UZERO;
    message.rewardsClaimed = object.rewardsClaimed !== undefined && object.rewardsClaimed !== null ? Long.fromValue(object.rewardsClaimed) : Long.UZERO;
    return message;
  }
};
function createBaseTeamVestingAccount(): TeamVestingAccount {
  return {
    id: Long.UZERO,
    totalAllocation: Long.UZERO,
    commencement: Long.UZERO,
    clawback: Long.UZERO,
    unlockedClaimed: Long.UZERO,
    lastClaimedTime: Long.UZERO,
    totalRewards: Long.UZERO,
    rewardsClaimed: Long.UZERO
  };
}
export const TeamVestingAccount = {
  encode(message: TeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.totalAllocation.isZero()) {
      writer.uint32(16).uint64(message.totalAllocation);
    }
    if (!message.commencement.isZero()) {
      writer.uint32(24).uint64(message.commencement);
    }
    if (!message.clawback.isZero()) {
      writer.uint32(32).uint64(message.clawback);
    }
    if (!message.unlockedClaimed.isZero()) {
      writer.uint32(40).uint64(message.unlockedClaimed);
    }
    if (!message.lastClaimedTime.isZero()) {
      writer.uint32(48).uint64(message.lastClaimedTime);
    }
    if (!message.totalRewards.isZero()) {
      writer.uint32(56).uint64(message.totalRewards);
    }
    if (!message.rewardsClaimed.isZero()) {
      writer.uint32(64).uint64(message.rewardsClaimed);
    }
    return writer;
  },
  fromJSON(object: any): TeamVestingAccount {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      totalAllocation: isSet(object.totalAllocation) ? Long.fromValue(object.totalAllocation) : Long.UZERO,
      commencement: isSet(object.commencement) ? Long.fromValue(object.commencement) : Long.UZERO,
      clawback: isSet(object.clawback) ? Long.fromValue(object.clawback) : Long.UZERO,
      unlockedClaimed: isSet(object.unlockedClaimed) ? Long.fromValue(object.unlockedClaimed) : Long.UZERO,
      lastClaimedTime: isSet(object.lastClaimedTime) ? Long.fromValue(object.lastClaimedTime) : Long.UZERO,
      totalRewards: isSet(object.totalRewards) ? Long.fromValue(object.totalRewards) : Long.UZERO,
      rewardsClaimed: isSet(object.rewardsClaimed) ? Long.fromValue(object.rewardsClaimed) : Long.UZERO
    };
  },
  fromPartial(object: Partial<TeamVestingAccount>): TeamVestingAccount {
    const message = createBaseTeamVestingAccount();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? Long.fromValue(object.totalAllocation) : Long.UZERO;
    message.commencement = object.commencement !== undefined && object.commencement !== null ? Long.fromValue(object.commencement) : Long.UZERO;
    message.clawback = object.clawback !== undefined && object.clawback !== null ? Long.fromValue(object.clawback) : Long.UZERO;
    message.unlockedClaimed = object.unlockedClaimed !== undefined && object.unlockedClaimed !== null ? Long.fromValue(object.unlockedClaimed) : Long.UZERO;
    message.lastClaimedTime = object.lastClaimedTime !== undefined && object.lastClaimedTime !== null ? Long.fromValue(object.lastClaimedTime) : Long.UZERO;
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? Long.fromValue(object.totalRewards) : Long.UZERO;
    message.rewardsClaimed = object.rewardsClaimed !== undefined && object.rewardsClaimed !== null ? Long.fromValue(object.rewardsClaimed) : Long.UZERO;
    return message;
  }
};