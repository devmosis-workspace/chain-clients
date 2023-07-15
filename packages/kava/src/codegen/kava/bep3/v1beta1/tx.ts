import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwap {
  from: string;
  to: string;
  recipientOtherChain: string;
  senderOtherChain: string;
  randomNumberHash: string;
  timestamp: Long;
  amount: Coin[];
  heightSpan: Long;
}
/** MsgCreateAtomicSwap defines the Msg/CreateAtomicSwap request type. */
export interface MsgCreateAtomicSwapSDKType {
  from: string;
  to: string;
  recipient_other_chain: string;
  sender_other_chain: string;
  random_number_hash: string;
  timestamp: Long;
  amount: CoinSDKType[];
  height_span: Long;
}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponse {}
/** MsgCreateAtomicSwapResponse defines the Msg/CreateAtomicSwap response type. */
export interface MsgCreateAtomicSwapResponseSDKType {}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwap {
  from: string;
  swapId: string;
  randomNumber: string;
}
/** MsgClaimAtomicSwap defines the Msg/ClaimAtomicSwap request type. */
export interface MsgClaimAtomicSwapSDKType {
  from: string;
  swap_id: string;
  random_number: string;
}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponse {}
/** MsgClaimAtomicSwapResponse defines the Msg/ClaimAtomicSwap response type. */
export interface MsgClaimAtomicSwapResponseSDKType {}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwap {
  from: string;
  swapId: string;
}
/** MsgRefundAtomicSwap defines the Msg/RefundAtomicSwap request type. */
export interface MsgRefundAtomicSwapSDKType {
  from: string;
  swap_id: string;
}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponse {}
/** MsgRefundAtomicSwapResponse defines the Msg/RefundAtomicSwap response type. */
export interface MsgRefundAtomicSwapResponseSDKType {}
function createBaseMsgCreateAtomicSwap(): MsgCreateAtomicSwap {
  return {
    from: "",
    to: "",
    recipientOtherChain: "",
    senderOtherChain: "",
    randomNumberHash: "",
    timestamp: Long.ZERO,
    amount: [],
    heightSpan: Long.UZERO
  };
}
export const MsgCreateAtomicSwap = {
  encode(message: MsgCreateAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.timestamp.isZero()) {
      writer.uint32(48).int64(message.timestamp);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (!message.heightSpan.isZero()) {
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
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      heightSpan: isSet(object.heightSpan) ? Long.fromValue(object.heightSpan) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgCreateAtomicSwap>): MsgCreateAtomicSwap {
    const message = createBaseMsgCreateAtomicSwap();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.recipientOtherChain = object.recipientOtherChain ?? "";
    message.senderOtherChain = object.senderOtherChain ?? "";
    message.randomNumberHash = object.randomNumberHash ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.heightSpan = object.heightSpan !== undefined && object.heightSpan !== null ? Long.fromValue(object.heightSpan) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCreateAtomicSwapResponse(): MsgCreateAtomicSwapResponse {
  return {};
}
export const MsgCreateAtomicSwapResponse = {
  encode(_: MsgCreateAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateAtomicSwapResponse>): MsgCreateAtomicSwapResponse {
    const message = createBaseMsgCreateAtomicSwapResponse();
    return message;
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
  encode(message: MsgClaimAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgClaimAtomicSwapResponse(): MsgClaimAtomicSwapResponse {
  return {};
}
export const MsgClaimAtomicSwapResponse = {
  encode(_: MsgClaimAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimAtomicSwapResponse>): MsgClaimAtomicSwapResponse {
    const message = createBaseMsgClaimAtomicSwapResponse();
    return message;
  }
};
function createBaseMsgRefundAtomicSwap(): MsgRefundAtomicSwap {
  return {
    from: "",
    swapId: ""
  };
}
export const MsgRefundAtomicSwap = {
  encode(message: MsgRefundAtomicSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRefundAtomicSwapResponse(): MsgRefundAtomicSwapResponse {
  return {};
}
export const MsgRefundAtomicSwapResponse = {
  encode(_: MsgRefundAtomicSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRefundAtomicSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRefundAtomicSwapResponse>): MsgRefundAtomicSwapResponse {
    const message = createBaseMsgRefundAtomicSwapResponse();
    return message;
  }
};