import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlocked {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: bigint;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
  amount: bigint;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimUnlockedProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked";
  value: Uint8Array;
}
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlockedAmino {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the unlocked amount. */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimUnlockedAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimUnlocked";
  value: MsgClaimUnlockedAmino;
}
/** MsgClaimUnlockedTokens ... */
export interface MsgClaimUnlockedSDKType {
  authority: string;
  id: bigint;
  amount: bigint;
  recipient: string;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponse {}
export interface MsgClaimUnlockedResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimUnlockedResponse";
  value: Uint8Array;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseAmino {}
export interface MsgClaimUnlockedResponseAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimUnlockedResponse";
  value: MsgClaimUnlockedResponseAmino;
}
/** MsgClaimUnlockedResponse defines the Msg/ClaimUnlockedTokens response type. */
export interface MsgClaimUnlockedResponseSDKType {}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
  amount: bigint;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimAuthorityRewardsProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
  value: Uint8Array;
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewardsAmino {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the authority inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimAuthorityRewardsAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAuthorityRewards";
  value: MsgClaimAuthorityRewardsAmino;
}
/** MsgClaimAuthorityRewards ... */
export interface MsgClaimAuthorityRewardsSDKType {
  authority: string;
  amount: bigint;
  recipient: string;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponse {}
export interface MsgClaimAuthorityRewardsResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse";
  value: Uint8Array;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseAmino {}
export interface MsgClaimAuthorityRewardsResponseAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse";
  value: MsgClaimAuthorityRewardsResponseAmino;
}
/** MsgClaimAuthorityRewardsResponse defines the Msg/ClaimAuthorityRewards response type. */
export interface MsgClaimAuthorityRewardsResponseSDKType {}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewards {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: bigint;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
  amount: bigint;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimAccountRewardsProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards";
  value: Uint8Array;
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewardsAmino {
  /** authority is the foundation which is allowed to payout unlocked tokens */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** amount of $KYVE that will be paid to the recipient and marked as deducted from the inflation rewards */
  amount: string;
  /** recipient is the recipient address chosen by the team member. */
  recipient: string;
}
export interface MsgClaimAccountRewardsAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAccountRewards";
  value: MsgClaimAccountRewardsAmino;
}
/** MsgClaimAccountRewards ... */
export interface MsgClaimAccountRewardsSDKType {
  authority: string;
  id: bigint;
  amount: bigint;
  recipient: string;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponse {}
export interface MsgClaimAccountRewardsResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse";
  value: Uint8Array;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseAmino {}
export interface MsgClaimAccountRewardsResponseAminoMsg {
  type: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse";
  value: MsgClaimAccountRewardsResponseAmino;
}
/** MsgClaimAccountRewardsResponse defines the Msg/ClaimAccountRewards response type. */
export interface MsgClaimAccountRewardsResponseSDKType {}
/** MsgClawback ... */
export interface MsgClawback {
  /** authority is the foundation which is allowed to modify team accounts */
  authority: string;
  /** id is the unique identifier of the team member */
  id: bigint;
  /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
  clawback: bigint;
}
export interface MsgClawbackProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClawback";
  value: Uint8Array;
}
/** MsgClawback ... */
export interface MsgClawbackAmino {
  /** authority is the foundation which is allowed to modify team accounts */
  authority: string;
  /** id is the unique identifier of the team member */
  id: string;
  /** clawback is a unix timestamp (in seconds) of when the clawback should be applied */
  clawback: string;
}
export interface MsgClawbackAminoMsg {
  type: "/kyve.team.v1beta1.MsgClawback";
  value: MsgClawbackAmino;
}
/** MsgClawback ... */
export interface MsgClawbackSDKType {
  authority: string;
  id: bigint;
  clawback: bigint;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponse {}
export interface MsgClawbackResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgClawbackResponse";
  value: Uint8Array;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseAmino {}
export interface MsgClawbackResponseAminoMsg {
  type: "/kyve.team.v1beta1.MsgClawbackResponse";
  value: MsgClawbackResponseAmino;
}
/** MsgClawbackResponse defines the Msg/Clawback response type. */
export interface MsgClawbackResponseSDKType {}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccount {
  /** authority ... */
  authority: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  totalAllocation: bigint;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: bigint;
}
export interface MsgCreateTeamVestingAccountProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
  value: Uint8Array;
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccountAmino {
  /** authority ... */
  authority: string;
  /** total_allocation is the number of tokens reserved for this team member. */
  total_allocation: string;
  /** commencement is the unix timestamp of the member's official start date. */
  commencement: string;
}
export interface MsgCreateTeamVestingAccountAminoMsg {
  type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount";
  value: MsgCreateTeamVestingAccountAmino;
}
/** MsgCreateTeamVestingAccount ... */
export interface MsgCreateTeamVestingAccountSDKType {
  authority: string;
  total_allocation: bigint;
  commencement: bigint;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponse {}
export interface MsgCreateTeamVestingAccountResponseProtoMsg {
  typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse";
  value: Uint8Array;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseAmino {}
export interface MsgCreateTeamVestingAccountResponseAminoMsg {
  type: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse";
  value: MsgCreateTeamVestingAccountResponseAmino;
}
/** MsgCreateTeamVestingAccountResponse defines the Msg/CreateTeamVestingAccount response type. */
export interface MsgCreateTeamVestingAccountResponseSDKType {}
function createBaseMsgClaimUnlocked(): MsgClaimUnlocked {
  return {
    authority: "",
    id: BigInt(0),
    amount: BigInt(0),
    recipient: ""
  };
}
export const MsgClaimUnlocked = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
  encode(message: MsgClaimUnlocked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgClaimUnlocked {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimUnlocked>): MsgClaimUnlocked {
    const message = createBaseMsgClaimUnlocked();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgClaimUnlockedAmino): MsgClaimUnlocked {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: MsgClaimUnlocked): MsgClaimUnlockedAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnlockedAminoMsg): MsgClaimUnlocked {
    return MsgClaimUnlocked.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUnlockedProtoMsg): MsgClaimUnlocked {
    return MsgClaimUnlocked.decode(message.value);
  },
  toProto(message: MsgClaimUnlocked): Uint8Array {
    return MsgClaimUnlocked.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnlocked): MsgClaimUnlockedProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
      value: MsgClaimUnlocked.encode(message).finish()
    };
  }
};
function createBaseMsgClaimUnlockedResponse(): MsgClaimUnlockedResponse {
  return {};
}
export const MsgClaimUnlockedResponse = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimUnlockedResponse",
  encode(_: MsgClaimUnlockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimUnlockedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimUnlockedResponse>): MsgClaimUnlockedResponse {
    const message = createBaseMsgClaimUnlockedResponse();
    return message;
  },
  fromAmino(_: MsgClaimUnlockedResponseAmino): MsgClaimUnlockedResponse {
    return {};
  },
  toAmino(_: MsgClaimUnlockedResponse): MsgClaimUnlockedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimUnlockedResponseAminoMsg): MsgClaimUnlockedResponse {
    return MsgClaimUnlockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimUnlockedResponseProtoMsg): MsgClaimUnlockedResponse {
    return MsgClaimUnlockedResponse.decode(message.value);
  },
  toProto(message: MsgClaimUnlockedResponse): Uint8Array {
    return MsgClaimUnlockedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimUnlockedResponse): MsgClaimUnlockedResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimUnlockedResponse",
      value: MsgClaimUnlockedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAuthorityRewards(): MsgClaimAuthorityRewards {
  return {
    authority: "",
    amount: BigInt(0),
    recipient: ""
  };
}
export const MsgClaimAuthorityRewards = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
  encode(message: MsgClaimAuthorityRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgClaimAuthorityRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimAuthorityRewards>): MsgClaimAuthorityRewards {
    const message = createBaseMsgClaimAuthorityRewards();
    message.authority = object.authority ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAuthorityRewardsAmino): MsgClaimAuthorityRewards {
    return {
      authority: object.authority,
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: MsgClaimAuthorityRewards): MsgClaimAuthorityRewardsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAuthorityRewardsAminoMsg): MsgClaimAuthorityRewards {
    return MsgClaimAuthorityRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAuthorityRewardsProtoMsg): MsgClaimAuthorityRewards {
    return MsgClaimAuthorityRewards.decode(message.value);
  },
  toProto(message: MsgClaimAuthorityRewards): Uint8Array {
    return MsgClaimAuthorityRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAuthorityRewards): MsgClaimAuthorityRewardsProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
      value: MsgClaimAuthorityRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAuthorityRewardsResponse(): MsgClaimAuthorityRewardsResponse {
  return {};
}
export const MsgClaimAuthorityRewardsResponse = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse",
  encode(_: MsgClaimAuthorityRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimAuthorityRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAuthorityRewardsResponse>): MsgClaimAuthorityRewardsResponse {
    const message = createBaseMsgClaimAuthorityRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimAuthorityRewardsResponseAmino): MsgClaimAuthorityRewardsResponse {
    return {};
  },
  toAmino(_: MsgClaimAuthorityRewardsResponse): MsgClaimAuthorityRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimAuthorityRewardsResponseAminoMsg): MsgClaimAuthorityRewardsResponse {
    return MsgClaimAuthorityRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAuthorityRewardsResponseProtoMsg): MsgClaimAuthorityRewardsResponse {
    return MsgClaimAuthorityRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimAuthorityRewardsResponse): Uint8Array {
    return MsgClaimAuthorityRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAuthorityRewardsResponse): MsgClaimAuthorityRewardsResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewardsResponse",
      value: MsgClaimAuthorityRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAccountRewards(): MsgClaimAccountRewards {
  return {
    authority: "",
    id: BigInt(0),
    amount: BigInt(0),
    recipient: ""
  };
}
export const MsgClaimAccountRewards = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
  encode(message: MsgClaimAccountRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgClaimAccountRewards {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimAccountRewards>): MsgClaimAccountRewards {
    const message = createBaseMsgClaimAccountRewards();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAccountRewardsAmino): MsgClaimAccountRewards {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      amount: BigInt(object.amount),
      recipient: object.recipient
    };
  },
  toAmino(message: MsgClaimAccountRewards): MsgClaimAccountRewardsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAccountRewardsAminoMsg): MsgClaimAccountRewards {
    return MsgClaimAccountRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAccountRewardsProtoMsg): MsgClaimAccountRewards {
    return MsgClaimAccountRewards.decode(message.value);
  },
  toProto(message: MsgClaimAccountRewards): Uint8Array {
    return MsgClaimAccountRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAccountRewards): MsgClaimAccountRewardsProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
      value: MsgClaimAccountRewards.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAccountRewardsResponse(): MsgClaimAccountRewardsResponse {
  return {};
}
export const MsgClaimAccountRewardsResponse = {
  typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse",
  encode(_: MsgClaimAccountRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimAccountRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAccountRewardsResponse>): MsgClaimAccountRewardsResponse {
    const message = createBaseMsgClaimAccountRewardsResponse();
    return message;
  },
  fromAmino(_: MsgClaimAccountRewardsResponseAmino): MsgClaimAccountRewardsResponse {
    return {};
  },
  toAmino(_: MsgClaimAccountRewardsResponse): MsgClaimAccountRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimAccountRewardsResponseAminoMsg): MsgClaimAccountRewardsResponse {
    return MsgClaimAccountRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAccountRewardsResponseProtoMsg): MsgClaimAccountRewardsResponse {
    return MsgClaimAccountRewardsResponse.decode(message.value);
  },
  toProto(message: MsgClaimAccountRewardsResponse): Uint8Array {
    return MsgClaimAccountRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAccountRewardsResponse): MsgClaimAccountRewardsResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewardsResponse",
      value: MsgClaimAccountRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClawback(): MsgClawback {
  return {
    authority: "",
    id: BigInt(0),
    clawback: BigInt(0)
  };
}
export const MsgClawback = {
  typeUrl: "/kyve.team.v1beta1.MsgClawback",
  encode(message: MsgClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.clawback !== BigInt(0)) {
      writer.uint32(24).uint64(message.clawback);
    }
    return writer;
  },
  fromJSON(object: any): MsgClawback {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      clawback: isSet(object.clawback) ? BigInt(object.clawback.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgClawback>): MsgClawback {
    const message = createBaseMsgClawback();
    message.authority = object.authority ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.clawback = object.clawback !== undefined && object.clawback !== null ? BigInt(object.clawback.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClawbackAmino): MsgClawback {
    return {
      authority: object.authority,
      id: BigInt(object.id),
      clawback: BigInt(object.clawback)
    };
  },
  toAmino(message: MsgClawback): MsgClawbackAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.clawback = message.clawback ? message.clawback.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback {
    return MsgClawback.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback {
    return MsgClawback.decode(message.value);
  },
  toProto(message: MsgClawback): Uint8Array {
    return MsgClawback.encode(message).finish();
  },
  toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClawback",
      value: MsgClawback.encode(message).finish()
    };
  }
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  typeUrl: "/kyve.team.v1beta1.MsgClawbackResponse",
  encode(_: MsgClawbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClawbackResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClawbackResponse>): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
  fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse {
    return {};
  },
  toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse {
    return MsgClawbackResponse.decode(message.value);
  },
  toProto(message: MsgClawbackResponse): Uint8Array {
    return MsgClawbackResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgClawbackResponse",
      value: MsgClawbackResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTeamVestingAccount(): MsgCreateTeamVestingAccount {
  return {
    authority: "",
    totalAllocation: BigInt(0),
    commencement: BigInt(0)
  };
}
export const MsgCreateTeamVestingAccount = {
  typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
  encode(message: MsgCreateTeamVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.totalAllocation !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalAllocation);
    }
    if (message.commencement !== BigInt(0)) {
      writer.uint32(24).uint64(message.commencement);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTeamVestingAccount {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      totalAllocation: isSet(object.totalAllocation) ? BigInt(object.totalAllocation.toString()) : BigInt(0),
      commencement: isSet(object.commencement) ? BigInt(object.commencement.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateTeamVestingAccount>): MsgCreateTeamVestingAccount {
    const message = createBaseMsgCreateTeamVestingAccount();
    message.authority = object.authority ?? "";
    message.totalAllocation = object.totalAllocation !== undefined && object.totalAllocation !== null ? BigInt(object.totalAllocation.toString()) : BigInt(0);
    message.commencement = object.commencement !== undefined && object.commencement !== null ? BigInt(object.commencement.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateTeamVestingAccountAmino): MsgCreateTeamVestingAccount {
    return {
      authority: object.authority,
      totalAllocation: BigInt(object.total_allocation),
      commencement: BigInt(object.commencement)
    };
  },
  toAmino(message: MsgCreateTeamVestingAccount): MsgCreateTeamVestingAccountAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.total_allocation = message.totalAllocation ? message.totalAllocation.toString() : undefined;
    obj.commencement = message.commencement ? message.commencement.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTeamVestingAccountAminoMsg): MsgCreateTeamVestingAccount {
    return MsgCreateTeamVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTeamVestingAccountProtoMsg): MsgCreateTeamVestingAccount {
    return MsgCreateTeamVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateTeamVestingAccount): Uint8Array {
    return MsgCreateTeamVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTeamVestingAccount): MsgCreateTeamVestingAccountProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
      value: MsgCreateTeamVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTeamVestingAccountResponse(): MsgCreateTeamVestingAccountResponse {
  return {};
}
export const MsgCreateTeamVestingAccountResponse = {
  typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse",
  encode(_: MsgCreateTeamVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateTeamVestingAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateTeamVestingAccountResponse>): MsgCreateTeamVestingAccountResponse {
    const message = createBaseMsgCreateTeamVestingAccountResponse();
    return message;
  },
  fromAmino(_: MsgCreateTeamVestingAccountResponseAmino): MsgCreateTeamVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreateTeamVestingAccountResponse): MsgCreateTeamVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateTeamVestingAccountResponseAminoMsg): MsgCreateTeamVestingAccountResponse {
    return MsgCreateTeamVestingAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTeamVestingAccountResponseProtoMsg): MsgCreateTeamVestingAccountResponse {
    return MsgCreateTeamVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateTeamVestingAccountResponse): Uint8Array {
    return MsgCreateTeamVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTeamVestingAccountResponse): MsgCreateTeamVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccountResponse",
      value: MsgCreateTeamVestingAccountResponse.encode(message).finish()
    };
  }
};