import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { CrossChainAddress, CrossChainAddressSDKType } from "../exported/v1beta1/types";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface FeeDeducted {
  transferId: Long;
  recipientChain: string;
  recipientAddress: string;
  amount?: Coin;
  fee?: Coin;
}
export interface FeeDeductedSDKType {
  transfer_id: Long;
  recipient_chain: string;
  recipient_address: string;
  amount?: CoinSDKType;
  fee?: CoinSDKType;
}
export interface InsufficientFee {
  transferId: Long;
  recipientChain: string;
  recipientAddress: string;
  amount?: Coin;
  fee?: Coin;
}
export interface InsufficientFeeSDKType {
  transfer_id: Long;
  recipient_chain: string;
  recipient_address: string;
  amount?: CoinSDKType;
  fee?: CoinSDKType;
}
export interface RateLimitUpdated {
  chain: string;
  limit?: Coin;
  window?: Duration;
}
export interface RateLimitUpdatedSDKType {
  chain: string;
  limit?: CoinSDKType;
  window?: DurationSDKType;
}
export interface MessageReceived {
  id: string;
  payloadHash: Uint8Array;
  sender?: CrossChainAddress;
  recipient?: CrossChainAddress;
}
export interface MessageReceivedSDKType {
  id: string;
  payload_hash: Uint8Array;
  sender?: CrossChainAddressSDKType;
  recipient?: CrossChainAddressSDKType;
}
export interface MessageProcessing {
  id: string;
}
export interface MessageProcessingSDKType {
  id: string;
}
export interface MessageExecuted {
  id: string;
}
export interface MessageExecutedSDKType {
  id: string;
}
export interface MessageFailed {
  id: string;
}
export interface MessageFailedSDKType {
  id: string;
}
function createBaseFeeDeducted(): FeeDeducted {
  return {
    transferId: Long.UZERO,
    recipientChain: "",
    recipientAddress: "",
    amount: undefined,
    fee: undefined
  };
}
export const FeeDeducted = {
  encode(message: FeeDeducted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }
    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeDeducted {
    return {
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<FeeDeducted>): FeeDeducted {
    const message = createBaseFeeDeducted();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseInsufficientFee(): InsufficientFee {
  return {
    transferId: Long.UZERO,
    recipientChain: "",
    recipientAddress: "",
    amount: undefined,
    fee: undefined
  };
}
export const InsufficientFee = {
  encode(message: InsufficientFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }
    if (message.recipientChain !== "") {
      writer.uint32(18).string(message.recipientChain);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): InsufficientFee {
    return {
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<InsufficientFee>): InsufficientFee {
    const message = createBaseInsufficientFee();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseRateLimitUpdated(): RateLimitUpdated {
  return {
    chain: "",
    limit: undefined,
    window: undefined
  };
}
export const RateLimitUpdated = {
  encode(message: RateLimitUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.limit !== undefined) {
      Coin.encode(message.limit, writer.uint32(18).fork()).ldelim();
    }
    if (message.window !== undefined) {
      Duration.encode(message.window, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RateLimitUpdated {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      limit: isSet(object.limit) ? Coin.fromJSON(object.limit) : undefined,
      window: isSet(object.window) ? Duration.fromJSON(object.window) : undefined
    };
  },
  fromPartial(object: Partial<RateLimitUpdated>): RateLimitUpdated {
    const message = createBaseRateLimitUpdated();
    message.chain = object.chain ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Coin.fromPartial(object.limit) : undefined;
    message.window = object.window !== undefined && object.window !== null ? Duration.fromPartial(object.window) : undefined;
    return message;
  }
};
function createBaseMessageReceived(): MessageReceived {
  return {
    id: "",
    payloadHash: new Uint8Array(),
    sender: undefined,
    recipient: undefined
  };
}
export const MessageReceived = {
  encode(message: MessageReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(18).bytes(message.payloadHash);
    }
    if (message.sender !== undefined) {
      CrossChainAddress.encode(message.sender, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(message.recipient, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MessageReceived {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      sender: isSet(object.sender) ? CrossChainAddress.fromJSON(object.sender) : undefined,
      recipient: isSet(object.recipient) ? CrossChainAddress.fromJSON(object.recipient) : undefined
    };
  },
  fromPartial(object: Partial<MessageReceived>): MessageReceived {
    const message = createBaseMessageReceived();
    message.id = object.id ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.sender = object.sender !== undefined && object.sender !== null ? CrossChainAddress.fromPartial(object.sender) : undefined;
    message.recipient = object.recipient !== undefined && object.recipient !== null ? CrossChainAddress.fromPartial(object.recipient) : undefined;
    return message;
  }
};
function createBaseMessageProcessing(): MessageProcessing {
  return {
    id: ""
  };
}
export const MessageProcessing = {
  encode(message: MessageProcessing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MessageProcessing {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MessageProcessing>): MessageProcessing {
    const message = createBaseMessageProcessing();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseMessageExecuted(): MessageExecuted {
  return {
    id: ""
  };
}
export const MessageExecuted = {
  encode(message: MessageExecuted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MessageExecuted {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MessageExecuted>): MessageExecuted {
    const message = createBaseMessageExecuted();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseMessageFailed(): MessageFailed {
  return {
    id: ""
  };
}
export const MessageFailed = {
  encode(message: MessageFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MessageFailed {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MessageFailed>): MessageFailed {
    const message = createBaseMessageFailed();
    message.id = object.id ?? "";
    return message;
  }
};