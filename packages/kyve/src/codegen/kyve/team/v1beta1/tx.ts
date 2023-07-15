import { Long, isSet } from "../../../helpers";
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
export interface MsgClaimUnlockedResponse {}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseSDKType {}
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
export interface MsgClaimAuthorityRewardsResponse {}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseSDKType {}
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
export interface MsgClaimAccountRewardsResponse {}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseSDKType {}
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
export interface MsgClawbackResponse {}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseSDKType {}
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
export interface MsgCreateTeamVestingAccountResponse {}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseSDKType {}
function createBaseMsgClaimUnlocked(): MsgClaimUnlocked {
  return {
    authority: "",
    id: Long.UZERO,
    amount: Long.UZERO,
    recipient: ""
  };
}
export const MsgClaimUnlocked = {
  encode(message: MsgClaimUnlocked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(object: any): MsgClaimUnlocked {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUnlocked>): MsgClaimUnlocked {
    const message = createBaseMsgClaimUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseMsgClaimUnlockedResponse(): MsgClaimUnlockedResponse {
  return {};
}
export const MsgClaimUnlockedResponse = {
  encode(_: MsgClaimUnlockedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimUnlockedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUnlockedResponse>): MsgClaimUnlockedResponse {
    const message = createBaseMsgClaimUnlockedResponse();
    return message;
  }
};
function createBaseMsgClaimAuthorityRewards(): MsgClaimAuthorityRewards {
  return {
    authority: "",
    amount: Long.UZERO,
    recipient: ""
  };
}
export const MsgClaimAuthorityRewards = {
  encode(message: MsgClaimAuthorityRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(object: any): MsgClaimAuthorityRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimAuthorityRewards>): MsgClaimAuthorityRewards {
    const message = createBaseMsgClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseMsgClaimAuthorityRewardsResponse(): MsgClaimAuthorityRewardsResponse {
  return {};
}
export const MsgClaimAuthorityRewardsResponse = {
  encode(_: MsgClaimAuthorityRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimAuthorityRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAuthorityRewardsResponse>): MsgClaimAuthorityRewardsResponse {
    const message = createBaseMsgClaimAuthorityRewardsResponse();
    return message;
  }
};
function createBaseMsgClaimAccountRewards(): MsgClaimAccountRewards {
  return {
    authority: "",
    id: Long.UZERO,
    amount: Long.UZERO,
    recipient: ""
  };
}
export const MsgClaimAccountRewards = {
  encode(message: MsgClaimAccountRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(object: any): MsgClaimAccountRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimAccountRewards>): MsgClaimAccountRewards {
    const message = createBaseMsgClaimAccountRewards();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseMsgClaimAccountRewardsResponse(): MsgClaimAccountRewardsResponse {
  return {};
}
export const MsgClaimAccountRewardsResponse = {
  encode(_: MsgClaimAccountRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimAccountRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAccountRewardsResponse>): MsgClaimAccountRewardsResponse {
    const message = createBaseMsgClaimAccountRewardsResponse();
    return message;
  }
};
function createBaseMsgClawback(): MsgClawback {
  return {
    authority: "",
    id: Long.UZERO,
    clawback: Long.UZERO
  };
}
export const MsgClawback = {
  encode(message: MsgClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.clawback.isZero()) {
      writer.uint32(24).uint64(message.clawback);
    }
    return writer;
  },
  fromJSON(object: any): MsgClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      clawback: isSet(object.clawback) ? Long.fromValue(object.clawback) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgClawback>): MsgClawback {
    const message = createBaseMsgClawback();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.clawback = object.clawback !== undefined && object.clawback !== null ? Long.fromValue(object.clawback) : Long.UZERO;
    return message;
  }
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  encode(_: MsgClawbackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  }
};
function createBaseMsgCreateTeamVestingAccount(): MsgCreateTeamVestingAccount {
  return {
    authority: "",
    totalAllocation: Long.UZERO,
    commencement: Long.UZERO
  };
}
export const MsgCreateTeamVestingAccount = {
  encode(message: MsgCreateTeamVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (!message.totalAllocation.isZero()) {
      writer.uint32(16).uint64(message.totalAllocation);
    }
    if (!message.commencement.isZero()) {
      writer.uint32(24).uint64(message.commencement);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      totalAllocation: isSet(object.totalAllocation) ? Long.fromValue(object.totalAllocation) : Long.UZERO,
      commencement: isSet(object.commencement) ? Long.fromValue(object.commencement) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateTeamVestingAccount>): MsgCreateTeamVestingAccount {
    const message = createBaseMsgCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? Long.fromValue(object.totalAllocation) : Long.UZERO;
    message.commencement = object.commencement !== undefined && object.commencement !== null ? Long.fromValue(object.commencement) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateTeamVestingAccountResponse(): MsgCreateTeamVestingAccountResponse {
  return {};
}
export const MsgCreateTeamVestingAccountResponse = {
  encode(_: MsgCreateTeamVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateTeamVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateTeamVestingAccountResponse>): MsgCreateTeamVestingAccountResponse {
    const message = createBaseMsgCreateTeamVestingAccountResponse();
    return message;
  }
};