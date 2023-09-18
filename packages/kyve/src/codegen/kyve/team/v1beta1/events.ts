import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
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
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /**
   * clawback is a unix timestamp of a clawback. If timestamp is zero
   * it means that the account has not received a clawback
   */
  clawback: string;
  /** amount which got clawed back. */
  amount: string;
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
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the number of tokens claimed from the unlocked amount. */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
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
  authority: string;
  /** id is a unique identify for each vesting account, tied to a single team member. */
  id: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
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
  authority: string;
  /** amount is the amount of inflation rewards the authority should claim for the account holder */
  amount: string;
  /** recipient is the receiver address of the claim. */
  recipient: string;
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
function createBaseEventCreateTeamVestingAccount(): EventCreateTeamVestingAccount {
  return {
    authority: "",
    id: BigInt(0),
    totalAllocation: BigInt(0),
    commencement: BigInt(0)
  };
}
export const EventCreateTeamVestingAccount = {
  typeUrl: "/kyve.team.v1beta1.EventCreateTeamVestingAccount",
  encode(message: EventCreateTeamVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.totalAllocation !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalAllocation);
    }
    if (message.commencement !== BigInt(0)) {
      writer.uint32(32).uint64(message.commencement);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      totalAllocation: isSet(object.totalAllocation) ? BigInt(object.totalAllocation.toString()) : BigInt(0),
      commencement: isSet(object.commencement) ? BigInt(object.commencement.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCreateTeamVestingAccount>): EventCreateTeamVestingAccount {
    const message = createBaseEventCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? BigInt(object.totalAllocation.toString()) : BigInt(0);
    message.commencement = object.commencement !== undefined && object.commencement !== null ? BigInt(object.commencement.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateTeamVestingAccountAmino): EventCreateTeamVestingAccount {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      totalAllocation: BigInt(object.total_allocation),
      commencement: BigInt(object.commencement)
    };
  },
  toAmino(message: EventCreateTeamVestingAccount): EventCreateTeamVestingAccountAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.total_allocation = message.totalAllocation ? message.totalAllocation.toString() : undefined;
    obj.commencement = message.commencement ? message.commencement.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateTeamVestingAccountAminoMsg): EventCreateTeamVestingAccount {
    return EventCreateTeamVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateTeamVestingAccountProtoMsg): EventCreateTeamVestingAccount {
    return EventCreateTeamVestingAccount.decode(message.value);
  },
  toProto(message: EventCreateTeamVestingAccount): Uint8Array {
    return EventCreateTeamVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: EventCreateTeamVestingAccount): EventCreateTeamVestingAccountProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.EventCreateTeamVestingAccount",
      value: EventCreateTeamVestingAccount.encode(message).finish()
    };
  }
};
function createBaseEventClawback(): EventClawback {
  return {
    authority: "",
    id: BigInt(0),
    clawback: BigInt(0),
    amount: BigInt(0)
  };
}
export const EventClawback = {
  typeUrl: "/kyve.team.v1beta1.EventClawback",
  encode(message: EventClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.clawback !== BigInt(0)) {
      writer.uint32(24).uint64(message.clawback);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      clawback: isSet(object.clawback) ? BigInt(object.clawback.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventClawback>): EventClawback {
    const message = createBaseEventClawback();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.clawback = object.clawback !== undefined && object.clawback !== null ? BigInt(object.clawback.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventClawbackAmino): EventClawback {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      clawback: BigInt(object.clawback),
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: EventClawback): EventClawbackAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.clawback = message.clawback ? message.clawback.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventClawbackAminoMsg): EventClawback {
    return EventClawback.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClawbackProtoMsg): EventClawback {
    return EventClawback.decode(message.value);
  },
  toProto(message: EventClawback): Uint8Array {
    return EventClawback.encode(message).finish();
  },
  toProtoMsg(message: EventClawback): EventClawbackProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.EventClawback",
      value: EventClawback.encode(message).finish()
    };
  }
};
function createBaseEventClaimedUnlocked(): EventClaimedUnlocked {
  return {
    authority: "",
    id: BigInt(0),
    amount: BigInt(0),
    recipient: ""
  };
}
export const EventClaimedUnlocked = {
  typeUrl: "/kyve.team.v1beta1.EventClaimedUnlocked",
  encode(message: EventClaimedUnlocked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimedUnlocked {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimedUnlocked>): EventClaimedUnlocked {
    const message = createBaseEventClaimedUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: EventClaimedUnlockedAmino): EventClaimedUnlocked {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: EventClaimedUnlocked): EventClaimedUnlockedAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: EventClaimedUnlockedAminoMsg): EventClaimedUnlocked {
    return EventClaimedUnlocked.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimedUnlockedProtoMsg): EventClaimedUnlocked {
    return EventClaimedUnlocked.decode(message.value);
  },
  toProto(message: EventClaimedUnlocked): Uint8Array {
    return EventClaimedUnlocked.encode(message).finish();
  },
  toProtoMsg(message: EventClaimedUnlocked): EventClaimedUnlockedProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.EventClaimedUnlocked",
      value: EventClaimedUnlocked.encode(message).finish()
    };
  }
};
function createBaseEventClaimInflationRewards(): EventClaimInflationRewards {
  return {
    authority: "",
    id: BigInt(0),
    amount: BigInt(0),
    recipient: ""
  };
}
export const EventClaimInflationRewards = {
  typeUrl: "/kyve.team.v1beta1.EventClaimInflationRewards",
  encode(message: EventClaimInflationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimInflationRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimInflationRewards>): EventClaimInflationRewards {
    const message = createBaseEventClaimInflationRewards();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: EventClaimInflationRewardsAmino): EventClaimInflationRewards {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: EventClaimInflationRewards): EventClaimInflationRewardsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: EventClaimInflationRewardsAminoMsg): EventClaimInflationRewards {
    return EventClaimInflationRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimInflationRewardsProtoMsg): EventClaimInflationRewards {
    return EventClaimInflationRewards.decode(message.value);
  },
  toProto(message: EventClaimInflationRewards): Uint8Array {
    return EventClaimInflationRewards.encode(message).finish();
  },
  toProtoMsg(message: EventClaimInflationRewards): EventClaimInflationRewardsProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.EventClaimInflationRewards",
      value: EventClaimInflationRewards.encode(message).finish()
    };
  }
};
function createBaseEventClaimAuthorityRewards(): EventClaimAuthorityRewards {
  return {
    authority: "",
    amount: BigInt(0),
    recipient: ""
  };
}
export const EventClaimAuthorityRewards = {
  typeUrl: "/kyve.team.v1beta1.EventClaimAuthorityRewards",
  encode(message: EventClaimAuthorityRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): EventClaimAuthorityRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimAuthorityRewards>): EventClaimAuthorityRewards {
    const message = createBaseEventClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: EventClaimAuthorityRewardsAmino): EventClaimAuthorityRewards {
    return {
      authority: object.authority,
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: EventClaimAuthorityRewards): EventClaimAuthorityRewardsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: EventClaimAuthorityRewardsAminoMsg): EventClaimAuthorityRewards {
    return EventClaimAuthorityRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimAuthorityRewardsProtoMsg): EventClaimAuthorityRewards {
    return EventClaimAuthorityRewards.decode(message.value);
  },
  toProto(message: EventClaimAuthorityRewards): Uint8Array {
    return EventClaimAuthorityRewards.encode(message).finish();
  },
  toProtoMsg(message: EventClaimAuthorityRewards): EventClaimAuthorityRewardsProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.EventClaimAuthorityRewards",
      value: EventClaimAuthorityRewards.encode(message).finish()
    };
  }
};