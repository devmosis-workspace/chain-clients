import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
  from: string;
  to: string;
  recipientOtherChain: string;
  senderOtherChain: string;
  randomNumberHash: string;
  timestamp: bigint;
  amount: Coin[];
  heightSpan: bigint;
}
export interface MsgCreateAtomicSwapProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap";
  value: Uint8Array;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapAmino {
  from: string;
  to: string;
  recipient_other_chain: string;
  sender_other_chain: string;
  random_number_hash: string;
  timestamp: string;
  amount: CoinAmino[];
  height_span: string;
}
export interface MsgCreateAtomicSwapAminoMsg {
  type: "/kava.bep3.v1beta1.MsgCreateAtomicSwap";
  value: MsgCreateAtomicSwapAmino;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapSDKType {
  from: string;
  to: string;
  recipient_other_chain: string;
  sender_other_chain: string;
  random_number_hash: string;
  timestamp: bigint;
  amount: CoinSDKType[];
  height_span: bigint;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {}
export interface MsgCreateAtomicSwapResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse";
  value: Uint8Array;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseAmino {}
export interface MsgCreateAtomicSwapResponseAminoMsg {
  type: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse";
  value: MsgCreateAtomicSwapResponseAmino;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseSDKType {}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
  from: string;
  swapId: string;
  randomNumber: string;
}
export interface MsgClaimAtomicSwapProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap";
  value: Uint8Array;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapAmino {
  from: string;
  swap_id: string;
  random_number: string;
}
export interface MsgClaimAtomicSwapAminoMsg {
  type: "/kava.bep3.v1beta1.MsgClaimAtomicSwap";
  value: MsgClaimAtomicSwapAmino;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapSDKType {
  from: string;
  swap_id: string;
  random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {}
export interface MsgClaimAtomicSwapResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse";
  value: Uint8Array;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseAmino {}
export interface MsgClaimAtomicSwapResponseAminoMsg {
  type: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse";
  value: MsgClaimAtomicSwapResponseAmino;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseSDKType {}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
  from: string;
  swapId: string;
}
export interface MsgRefundAtomicSwapProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap";
  value: Uint8Array;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapAmino {
  from: string;
  swap_id: string;
}
export interface MsgRefundAtomicSwapAminoMsg {
  type: "/kava.bep3.v1beta1.MsgRefundAtomicSwap";
  value: MsgRefundAtomicSwapAmino;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapSDKType {
  from: string;
  swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {}
export interface MsgRefundAtomicSwapResponseProtoMsg {
  typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse";
  value: Uint8Array;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseAmino {}
export interface MsgRefundAtomicSwapResponseAminoMsg {
  type: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse";
  value: MsgRefundAtomicSwapResponseAmino;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseSDKType {}
function createBaseMsgCreateAtomicSwap(): MsgCreateAtomicSwap {
  return {
    from: "",
    to: "",
    recipientOtherChain: "",
    senderOtherChain: "",
    randomNumberHash: "",
    timestamp: BigInt(0),
    amount: [],
    heightSpan: BigInt(0)
  };
}
export const MsgCreateAtomicSwap = {
  typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
  encode(message: MsgCreateAtomicSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.recipientOtherChain !== "") {
      writer.uint32(26).string(message.recipientOtherChain);
    }
    if (message.senderOtherChain !== "") {
      writer.uint32(34).string(message.senderOtherChain);
    }
    if (message.randomNumberHash !== "") {
      writer.uint32(42).string(message.randomNumberHash);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(48).int64(message.timestamp);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.heightSpan !== BigInt(0)) {
      writer.uint32(64).uint64(message.heightSpan);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      recipientOtherChain: isSet(object.recipientOtherChain) ? String(object.recipientOtherChain) : "",
      senderOtherChain: isSet(object.senderOtherChain) ? String(object.senderOtherChain) : "",
      randomNumberHash: isSet(object.randomNumberHash) ? String(object.randomNumberHash) : "",
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      heightSpan: isSet(object.heightSpan) ? BigInt(object.heightSpan.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap {
    const message = createBaseMsgCreateAtomicSwap();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.heightSpan = object.heightSpan !== undefined && object.heightSpan !== null ? BigInt(object.heightSpan.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateAtomicSwapAmino): MsgCreateAtomicSwap {
    return {
      from: object.from,
      to: object.to,
      recipientOtherChain: object.recipient_other_chain,
      senderOtherChain: object.sender_other_chain,
      randomNumberHash: object.random_number_hash,
      timestamp: BigInt(object.timestamp),
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      heightSpan: BigInt(object.height_span)
    };
  },
  toAmino(message: MsgCreateAtomicSwap): MsgCreateAtomicSwapAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    obj.recipient_other_chain = message.recipientOtherChain;
    obj.sender_other_chain = message.senderOtherChain;
    obj.random_number_hash = message.randomNumberHash;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.height_span = message.heightSpan ? message.heightSpan.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAtomicSwapAminoMsg): MsgCreateAtomicSwap {
    return MsgCreateAtomicSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAtomicSwapProtoMsg): MsgCreateAtomicSwap {
    return MsgCreateAtomicSwap.decode(message.value);
  },
  toProto(message: MsgCreateAtomicSwap): Uint8Array {
    return MsgCreateAtomicSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAtomicSwap): MsgCreateAtomicSwapProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
      value: MsgCreateAtomicSwap.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAtomicSwapResponse(): MsgCreateAtomicSwapResponse {
  return {};
}
export const MsgCreateAtomicSwapResponse = {
  typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse",
  encode(_: MsgCreateAtomicSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse {
    const message = createBaseMsgCreateAtomicSwapResponse();
    return message;
  },
  fromAmino(_: MsgCreateAtomicSwapResponseAmino): MsgCreateAtomicSwapResponse {
    return {};
  },
  toAmino(_: MsgCreateAtomicSwapResponse): MsgCreateAtomicSwapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAtomicSwapResponseAminoMsg): MsgCreateAtomicSwapResponse {
    return MsgCreateAtomicSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAtomicSwapResponseProtoMsg): MsgCreateAtomicSwapResponse {
    return MsgCreateAtomicSwapResponse.decode(message.value);
  },
  toProto(message: MsgCreateAtomicSwapResponse): Uint8Array {
    return MsgCreateAtomicSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAtomicSwapResponse): MsgCreateAtomicSwapResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgCreateAtomicSwapResponse",
      value: MsgCreateAtomicSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAtomicSwap(): MsgClaimAtomicSwap {
  return {
    from: "",
    swapId: "",
    randomNumber: ""
  };
}
export const MsgClaimAtomicSwap = {
  typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
  encode(message: MsgClaimAtomicSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }
    if (message.randomNumber !== "") {
      writer.uint32(26).string(message.randomNumber);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      swapId: isSet(object.swapId) ? String(object.swapId) : "",
      randomNumber: isSet(object.randomNumber) ? String(object.randomNumber) : ""
    };
  },
  fromPartial(object: Partial<MsgClaimAtomicSwap>): MsgClaimAtomicSwap {
    const message = createBaseMsgClaimAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    message.randomNumber = object.randomNumber ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAtomicSwapAmino): MsgClaimAtomicSwap {
    return {
      from: object.from,
      swapId: object.swap_id,
      randomNumber: object.random_number
    };
  },
  toAmino(message: MsgClaimAtomicSwap): MsgClaimAtomicSwapAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.swap_id = message.swapId;
    obj.random_number = message.randomNumber;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAtomicSwapAminoMsg): MsgClaimAtomicSwap {
    return MsgClaimAtomicSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAtomicSwapProtoMsg): MsgClaimAtomicSwap {
    return MsgClaimAtomicSwap.decode(message.value);
  },
  toProto(message: MsgClaimAtomicSwap): Uint8Array {
    return MsgClaimAtomicSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAtomicSwap): MsgClaimAtomicSwapProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
      value: MsgClaimAtomicSwap.encode(message).finish()
    };
  }
};
function createBaseMsgClaimAtomicSwapResponse(): MsgClaimAtomicSwapResponse {
  return {};
}
export const MsgClaimAtomicSwapResponse = {
  typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse",
  encode(_: MsgClaimAtomicSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse {
    const message = createBaseMsgClaimAtomicSwapResponse();
    return message;
  },
  fromAmino(_: MsgClaimAtomicSwapResponseAmino): MsgClaimAtomicSwapResponse {
    return {};
  },
  toAmino(_: MsgClaimAtomicSwapResponse): MsgClaimAtomicSwapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimAtomicSwapResponseAminoMsg): MsgClaimAtomicSwapResponse {
    return MsgClaimAtomicSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAtomicSwapResponseProtoMsg): MsgClaimAtomicSwapResponse {
    return MsgClaimAtomicSwapResponse.decode(message.value);
  },
  toProto(message: MsgClaimAtomicSwapResponse): Uint8Array {
    return MsgClaimAtomicSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAtomicSwapResponse): MsgClaimAtomicSwapResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgClaimAtomicSwapResponse",
      value: MsgClaimAtomicSwapResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRefundAtomicSwap(): MsgRefundAtomicSwap {
  return {
    from: "",
    swapId: ""
  };
}
export const MsgRefundAtomicSwap = {
  typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
  encode(message: MsgRefundAtomicSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.swapId !== "") {
      writer.uint32(18).string(message.swapId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRefundAtomicSwap {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      swapId: isSet(object.swapId) ? String(object.swapId) : ""
    };
  },
  fromPartial(object: Partial<MsgRefundAtomicSwap>): MsgRefundAtomicSwap {
    const message = createBaseMsgRefundAtomicSwap();
    message.from = object.from ?? "";
    message.swapId = object.swapId ?? "";
    return message;
  },
  fromAmino(object: MsgRefundAtomicSwapAmino): MsgRefundAtomicSwap {
    return {
      from: object.from,
      swapId: object.swap_id
    };
  },
  toAmino(message: MsgRefundAtomicSwap): MsgRefundAtomicSwapAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.swap_id = message.swapId;
    return obj;
  },
  fromAminoMsg(object: MsgRefundAtomicSwapAminoMsg): MsgRefundAtomicSwap {
    return MsgRefundAtomicSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefundAtomicSwapProtoMsg): MsgRefundAtomicSwap {
    return MsgRefundAtomicSwap.decode(message.value);
  },
  toProto(message: MsgRefundAtomicSwap): Uint8Array {
    return MsgRefundAtomicSwap.encode(message).finish();
  },
  toProtoMsg(message: MsgRefundAtomicSwap): MsgRefundAtomicSwapProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
      value: MsgRefundAtomicSwap.encode(message).finish()
    };
  }
};
function createBaseMsgRefundAtomicSwapResponse(): MsgRefundAtomicSwapResponse {
  return {};
}
export const MsgRefundAtomicSwapResponse = {
  typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse",
  encode(_: MsgRefundAtomicSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRefundAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse {
    const message = createBaseMsgRefundAtomicSwapResponse();
    return message;
  },
  fromAmino(_: MsgRefundAtomicSwapResponseAmino): MsgRefundAtomicSwapResponse {
    return {};
  },
  toAmino(_: MsgRefundAtomicSwapResponse): MsgRefundAtomicSwapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRefundAtomicSwapResponseAminoMsg): MsgRefundAtomicSwapResponse {
    return MsgRefundAtomicSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRefundAtomicSwapResponseProtoMsg): MsgRefundAtomicSwapResponse {
    return MsgRefundAtomicSwapResponse.decode(message.value);
  },
  toProto(message: MsgRefundAtomicSwapResponse): Uint8Array {
    return MsgRefundAtomicSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRefundAtomicSwapResponse): MsgRefundAtomicSwapResponseProtoMsg {
    return {
      typeUrl: "/kava.bep3.v1beta1.MsgRefundAtomicSwapResponse",
      value: MsgRefundAtomicSwapResponse.encode(message).finish()
    };
  }
};