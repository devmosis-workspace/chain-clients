import { Long, isSet } from "../../../helpers";
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
function createBaseEventCreateTeamVestingAccount(): EventCreateTeamVestingAccount {
  return {
    authority: "",
    id: Long.UZERO,
    totalAllocation: Long.UZERO,
    commencement: Long.UZERO
  };
}
export const EventCreateTeamVestingAccount = {
  encode(message: EventCreateTeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.totalAllocation.isZero()) {
      writer.uint32(24).uint64(message.totalAllocation);
    }
    if (!message.commencement.isZero()) {
      writer.uint32(32).uint64(message.commencement);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      totalAllocation: isSet(object.totalAllocation) ? Long.fromValue(object.totalAllocation) : Long.UZERO,
      commencement: isSet(object.commencement) ? Long.fromValue(object.commencement) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventCreateTeamVestingAccount>): EventCreateTeamVestingAccount {
    const message = createBaseEventCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? Long.fromValue(object.totalAllocation) : Long.UZERO;
    message.commencement = object.commencement !== undefined && object.commencement !== null ? Long.fromValue(object.commencement) : Long.UZERO;
    return message;
  }
};
function createBaseEventClawback(): EventClawback {
  return {
    authority: "",
    id: Long.UZERO,
    clawback: Long.UZERO,
    amount: Long.UZERO
  };
}
export const EventClawback = {
  encode(message: EventClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.clawback.isZero()) {
      writer.uint32(24).uint64(message.clawback);
    }
    if (!message.amount.isZero()) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      clawback: isSet(object.clawback) ? Long.fromValue(object.clawback) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventClawback>): EventClawback {
    const message = createBaseEventClawback();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.clawback = object.clawback !== undefined && object.clawback !== null ? Long.fromValue(object.clawback) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    return message;
  }
};
function createBaseEventClaimedUnlocked(): EventClaimedUnlocked {
  return {
    authority: "",
    id: Long.UZERO,
    amount: Long.UZERO,
    recipient: ""
  };
}
export const EventClaimedUnlocked = {
  encode(message: EventClaimedUnlocked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.amount.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimedUnlocked>): EventClaimedUnlocked {
    const message = createBaseEventClaimedUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseEventClaimInflationRewards(): EventClaimInflationRewards {
  return {
    authority: "",
    id: Long.UZERO,
    amount: Long.UZERO,
    recipient: ""
  };
}
export const EventClaimInflationRewards = {
  encode(message: EventClaimInflationRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.amount.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimInflationRewards>): EventClaimInflationRewards {
    const message = createBaseEventClaimInflationRewards();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseEventClaimAuthorityRewards(): EventClaimAuthorityRewards {
  return {
    authority: "",
    amount: Long.UZERO,
    recipient: ""
  };
}
export const EventClaimAuthorityRewards = {
  encode(message: EventClaimAuthorityRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.amount.isZero()) {
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
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<EventClaimAuthorityRewards>): EventClaimAuthorityRewards {
    const message = createBaseEventClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};