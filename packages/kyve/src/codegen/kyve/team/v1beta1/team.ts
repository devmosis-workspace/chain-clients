import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
function createBaseAuthority(): Authority {
  return {
    totalRewards: BigInt(0),
    rewardsClaimed: BigInt(0)
  };
}
export const Authority = {
  typeUrl: "/kyve.team.v1beta1.Authority",
  encode(message: Authority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalRewards !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalRewards);
    }
    if (message.rewardsClaimed !== BigInt(0)) {
      writer.uint32(16).uint64(message.rewardsClaimed);
    }
    return writer;
  },
  fromJSON(object: any): Authority {
    return {
      totalRewards: isSet(object.totalRewards) ? BigInt(object.totalRewards.toString()) : BigInt(0),
      rewardsClaimed: isSet(object.rewardsClaimed) ? BigInt(object.rewardsClaimed.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Authority>): Authority {
    const message = createBaseAuthority();
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? BigInt(object.totalRewards.toString()) : BigInt(0);
    message.rewardsClaimed = object.rewardsClaimed !== undefined && object.rewardsClaimed !== null ? BigInt(object.rewardsClaimed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AuthorityAmino): Authority {
    return {
      totalRewards: BigInt(object.total_rewards),
      rewardsClaimed: BigInt(object.rewards_claimed)
    };
  },
  toAmino(message: Authority): AuthorityAmino {
    const obj: any = {};
    obj.total_rewards = message.totalRewards ? message.totalRewards.toString() : undefined;
    obj.rewards_claimed = message.rewardsClaimed ? message.rewardsClaimed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthorityAminoMsg): Authority {
    return Authority.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorityProtoMsg): Authority {
    return Authority.decode(message.value);
  },
  toProto(message: Authority): Uint8Array {
    return Authority.encode(message).finish();
  },
  toProtoMsg(message: Authority): AuthorityProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.Authority",
      value: Authority.encode(message).finish()
    };
  }
};
function createBaseTeamVestingAccount(): TeamVestingAccount {
  return {
    id: BigInt(0),
    totalAllocation: BigInt(0),
    commencement: BigInt(0),
    clawback: BigInt(0),
    unlockedClaimed: BigInt(0),
    lastClaimedTime: BigInt(0),
    totalRewards: BigInt(0),
    rewardsClaimed: BigInt(0)
  };
}
export const TeamVestingAccount = {
  typeUrl: "/kyve.team.v1beta1.TeamVestingAccount",
  encode(message: TeamVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.totalAllocation !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalAllocation);
    }
    if (message.commencement !== BigInt(0)) {
      writer.uint32(24).uint64(message.commencement);
    }
    if (message.clawback !== BigInt(0)) {
      writer.uint32(32).uint64(message.clawback);
    }
    if (message.unlockedClaimed !== BigInt(0)) {
      writer.uint32(40).uint64(message.unlockedClaimed);
    }
    if (message.lastClaimedTime !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastClaimedTime);
    }
    if (message.totalRewards !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalRewards);
    }
    if (message.rewardsClaimed !== BigInt(0)) {
      writer.uint32(64).uint64(message.rewardsClaimed);
    }
    return writer;
  },
  fromJSON(object: any): TeamVestingAccount {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      totalAllocation: isSet(object.totalAllocation) ? BigInt(object.totalAllocation.toString()) : BigInt(0),
      commencement: isSet(object.commencement) ? BigInt(object.commencement.toString()) : BigInt(0),
      clawback: isSet(object.clawback) ? BigInt(object.clawback.toString()) : BigInt(0),
      unlockedClaimed: isSet(object.unlockedClaimed) ? BigInt(object.unlockedClaimed.toString()) : BigInt(0),
      lastClaimedTime: isSet(object.lastClaimedTime) ? BigInt(object.lastClaimedTime.toString()) : BigInt(0),
      totalRewards: isSet(object.totalRewards) ? BigInt(object.totalRewards.toString()) : BigInt(0),
      rewardsClaimed: isSet(object.rewardsClaimed) ? BigInt(object.rewardsClaimed.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TeamVestingAccount>): TeamVestingAccount {
    const message = createBaseTeamVestingAccount();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? BigInt(object.totalAllocation.toString()) : BigInt(0);
    message.commencement = object.commencement !== undefined && object.commencement !== null ? BigInt(object.commencement.toString()) : BigInt(0);
    message.clawback = object.clawback !== undefined && object.clawback !== null ? BigInt(object.clawback.toString()) : BigInt(0);
    message.unlockedClaimed = object.unlockedClaimed !== undefined && object.unlockedClaimed !== null ? BigInt(object.unlockedClaimed.toString()) : BigInt(0);
    message.lastClaimedTime = object.lastClaimedTime !== undefined && object.lastClaimedTime !== null ? BigInt(object.lastClaimedTime.toString()) : BigInt(0);
    message.totalRewards = object.totalRewards !== undefined && object.totalRewards !== null ? BigInt(object.totalRewards.toString()) : BigInt(0);
    message.rewardsClaimed = object.rewardsClaimed !== undefined && object.rewardsClaimed !== null ? BigInt(object.rewardsClaimed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TeamVestingAccountAmino): TeamVestingAccount {
    return {
      id: BigInt(object.id),
      totalAllocation: BigInt(object.total_allocation),
      commencement: BigInt(object.commencement),
      clawback: BigInt(object.clawback),
      unlockedClaimed: BigInt(object.unlocked_claimed),
      lastClaimedTime: BigInt(object.last_claimed_time),
      totalRewards: BigInt(object.total_rewards),
      rewardsClaimed: BigInt(object.rewards_claimed)
    };
  },
  toAmino(message: TeamVestingAccount): TeamVestingAccountAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.total_allocation = message.totalAllocation ? message.totalAllocation.toString() : undefined;
    obj.commencement = message.commencement ? message.commencement.toString() : undefined;
    obj.clawback = message.clawback ? message.clawback.toString() : undefined;
    obj.unlocked_claimed = message.unlockedClaimed ? message.unlockedClaimed.toString() : undefined;
    obj.last_claimed_time = message.lastClaimedTime ? message.lastClaimedTime.toString() : undefined;
    obj.total_rewards = message.totalRewards ? message.totalRewards.toString() : undefined;
    obj.rewards_claimed = message.rewardsClaimed ? message.rewardsClaimed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TeamVestingAccountAminoMsg): TeamVestingAccount {
    return TeamVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: TeamVestingAccountProtoMsg): TeamVestingAccount {
    return TeamVestingAccount.decode(message.value);
  },
  toProto(message: TeamVestingAccount): Uint8Array {
    return TeamVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: TeamVestingAccount): TeamVestingAccountProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.TeamVestingAccount",
      value: TeamVestingAccount.encode(message).finish()
    };
  }
};