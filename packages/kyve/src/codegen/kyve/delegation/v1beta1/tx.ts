import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgDelegate ... */
export interface MsgDelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: bigint;
}
export interface MsgDelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgDelegate";
  value: Uint8Array;
}
/** MsgDelegate ... */
export interface MsgDelegateAmino {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}
export interface MsgDelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgDelegate";
  value: MsgDelegateAmino;
}
/** MsgDelegate ... */
export interface MsgDelegateSDKType {
  creator: string;
  staker: string;
  amount: bigint;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {}
export interface MsgDelegateResponseProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgDelegateResponse";
  value: Uint8Array;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseAmino {}
export interface MsgDelegateResponseAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgDelegateResponse";
  value: MsgDelegateResponseAmino;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponseSDKType {}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
}
export interface MsgWithdrawRewardsProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
  value: Uint8Array;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsAmino {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
}
export interface MsgWithdrawRewardsAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgWithdrawRewards";
  value: MsgWithdrawRewardsAmino;
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewardsSDKType {
  creator: string;
  staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {}
export interface MsgWithdrawRewardsResponseProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse";
  value: Uint8Array;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseAmino {}
export interface MsgWithdrawRewardsResponseAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse";
  value: MsgWithdrawRewardsResponseAmino;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponseSDKType {}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: bigint;
}
export interface MsgUndelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate";
  value: Uint8Array;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateAmino {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}
export interface MsgUndelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUndelegate";
  value: MsgUndelegateAmino;
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegateSDKType {
  creator: string;
  staker: string;
  amount: bigint;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {}
export interface MsgUndelegateResponseProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgUndelegateResponse";
  value: Uint8Array;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseAmino {}
export interface MsgUndelegateResponseAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUndelegateResponse";
  value: MsgUndelegateResponseAmino;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponseSDKType {}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  fromStaker: string;
  /** staker ... */
  toStaker: string;
  /** amount ... */
  amount: bigint;
}
export interface MsgRedelegateProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate";
  value: Uint8Array;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateAmino {
  /** creator ... */
  creator: string;
  /** staker ... */
  from_staker: string;
  /** staker ... */
  to_staker: string;
  /** amount ... */
  amount: string;
}
export interface MsgRedelegateAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgRedelegate";
  value: MsgRedelegateAmino;
}
/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegateSDKType {
  creator: string;
  from_staker: string;
  to_staker: string;
  amount: bigint;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {}
export interface MsgRedelegateResponseProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgRedelegateResponse";
  value: Uint8Array;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseAmino {}
export interface MsgRedelegateResponseAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgRedelegateResponse";
  value: MsgRedelegateResponseAmino;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponseSDKType {}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgDelegate(): MsgDelegate {
  return {
    creator: "",
    staker: "",
    amount: BigInt(0)
  };
}
export const MsgDelegate = {
  typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
  encode(message: MsgDelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgDelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelegateAmino): MsgDelegate {
    return {
      creator: object.creator,
      staker: object.staker,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: MsgDelegate): MsgDelegateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateAminoMsg): MsgDelegate {
    return MsgDelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateProtoMsg): MsgDelegate {
    return MsgDelegate.decode(message.value);
  },
  toProto(message: MsgDelegate): Uint8Array {
    return MsgDelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegate): MsgDelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgDelegate",
      value: MsgDelegate.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}
export const MsgDelegateResponse = {
  typeUrl: "/kyve.delegation.v1beta1.MsgDelegateResponse",
  encode(_: MsgDelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
  fromAmino(_: MsgDelegateResponseAmino): MsgDelegateResponse {
    return {};
  },
  toAmino(_: MsgDelegateResponse): MsgDelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateResponseAminoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateResponseProtoMsg): MsgDelegateResponse {
    return MsgDelegateResponse.decode(message.value);
  },
  toProto(message: MsgDelegateResponse): Uint8Array {
    return MsgDelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateResponse): MsgDelegateResponseProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgDelegateResponse",
      value: MsgDelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    creator: "",
    staker: ""
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
  encode(message: MsgWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },
  fromJSON(object: any): MsgWithdrawRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : ""
    };
  },
  fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards {
    return {
      creator: object.creator,
      staker: object.staker
    };
  },
  toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards): Uint8Array {
    return MsgWithdrawRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
      value: MsgWithdrawRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {};
}
export const MsgWithdrawRewardsResponse = {
  typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse",
  encode(_: MsgWithdrawRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgWithdrawRewardsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse {
    return {};
  },
  toAmino(_: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardsResponse): Uint8Array {
    return MsgWithdrawRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgWithdrawRewardsResponse",
      value: MsgWithdrawRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    creator: "",
    staker: "",
    amount: BigInt(0)
  };
}
export const MsgUndelegate = {
  typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
  encode(message: MsgUndelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgUndelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUndelegateAmino): MsgUndelegate {
    return {
      creator: object.creator,
      staker: object.staker,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: MsgUndelegate): MsgUndelegateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.staker = message.staker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateAminoMsg): MsgUndelegate {
    return MsgUndelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateProtoMsg): MsgUndelegate {
    return MsgUndelegate.decode(message.value);
  },
  toProto(message: MsgUndelegate): Uint8Array {
    return MsgUndelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegate): MsgUndelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUndelegate",
      value: MsgUndelegate.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {};
}
export const MsgUndelegateResponse = {
  typeUrl: "/kyve.delegation.v1beta1.MsgUndelegateResponse",
  encode(_: MsgUndelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUndelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateResponseAmino): MsgUndelegateResponse {
    return {};
  },
  toAmino(_: MsgUndelegateResponse): MsgUndelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateResponseAminoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateResponseProtoMsg): MsgUndelegateResponse {
    return MsgUndelegateResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateResponse): Uint8Array {
    return MsgUndelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateResponse): MsgUndelegateResponseProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUndelegateResponse",
      value: MsgUndelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegate(): MsgRedelegate {
  return {
    creator: "",
    fromStaker: "",
    toStaker: "",
    amount: BigInt(0)
  };
}
export const MsgRedelegate = {
  typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
  encode(message: MsgRedelegate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromStaker !== "") {
      writer.uint32(18).string(message.fromStaker);
    }
    if (message.toStaker !== "") {
      writer.uint32(26).string(message.toStaker);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRedelegate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fromStaker: isSet(object.fromStaker) ? String(object.fromStaker) : "",
      toStaker: isSet(object.toStaker) ? String(object.toStaker) : "",
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRedelegate>): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    message.creator = object.creator ?? "";
    message.fromStaker = object.fromStaker ?? "";
    message.toStaker = object.toStaker ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRedelegateAmino): MsgRedelegate {
    return {
      creator: object.creator,
      fromStaker: object.from_staker,
      toStaker: object.to_staker,
      amount: BigInt(object.amount)
    };
  },
  toAmino(message: MsgRedelegate): MsgRedelegateAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.from_staker = message.fromStaker;
    obj.to_staker = message.toStaker;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateAminoMsg): MsgRedelegate {
    return MsgRedelegate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedelegateProtoMsg): MsgRedelegate {
    return MsgRedelegate.decode(message.value);
  },
  toProto(message: MsgRedelegate): Uint8Array {
    return MsgRedelegate.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegate): MsgRedelegateProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgRedelegate",
      value: MsgRedelegate.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegateResponse(): MsgRedelegateResponse {
  return {};
}
export const MsgRedelegateResponse = {
  typeUrl: "/kyve.delegation.v1beta1.MsgRedelegateResponse",
  encode(_: MsgRedelegateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRedelegateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRedelegateResponse>): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
    return message;
  },
  fromAmino(_: MsgRedelegateResponseAmino): MsgRedelegateResponse {
    return {};
  },
  toAmino(_: MsgRedelegateResponse): MsgRedelegateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateResponseAminoMsg): MsgRedelegateResponse {
    return MsgRedelegateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedelegateResponseProtoMsg): MsgRedelegateResponse {
    return MsgRedelegateResponse.decode(message.value);
  },
  toProto(message: MsgRedelegateResponse): Uint8Array {
    return MsgRedelegateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateResponse): MsgRedelegateResponseProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgRedelegateResponse",
      value: MsgRedelegateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      payload: object.payload
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};