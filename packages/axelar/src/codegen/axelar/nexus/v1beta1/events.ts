import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { CrossChainAddress, CrossChainAddressAmino, CrossChainAddressSDKType, WasmMessage, WasmMessageAmino, WasmMessageSDKType } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface FeeDeducted {
  transferId: bigint;
  recipientChain: string;
  recipientAddress: string;
  amount: Coin;
  fee: Coin;
}
export interface FeeDeductedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.FeeDeducted";
  value: Uint8Array;
}
export interface FeeDeductedAmino {
  transfer_id?: string;
  recipient_chain?: string;
  recipient_address?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface FeeDeductedAminoMsg {
  type: "/axelar.nexus.v1beta1.FeeDeducted";
  value: FeeDeductedAmino;
}
export interface FeeDeductedSDKType {
  transfer_id: bigint;
  recipient_chain: string;
  recipient_address: string;
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface InsufficientFee {
  transferId: bigint;
  recipientChain: string;
  recipientAddress: string;
  amount: Coin;
  fee: Coin;
}
export interface InsufficientFeeProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.InsufficientFee";
  value: Uint8Array;
}
export interface InsufficientFeeAmino {
  transfer_id?: string;
  recipient_chain?: string;
  recipient_address?: string;
  amount?: CoinAmino;
  fee?: CoinAmino;
}
export interface InsufficientFeeAminoMsg {
  type: "/axelar.nexus.v1beta1.InsufficientFee";
  value: InsufficientFeeAmino;
}
export interface InsufficientFeeSDKType {
  transfer_id: bigint;
  recipient_chain: string;
  recipient_address: string;
  amount: CoinSDKType;
  fee: CoinSDKType;
}
export interface RateLimitUpdated {
  chain: string;
  limit: Coin;
  window: Duration;
}
export interface RateLimitUpdatedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated";
  value: Uint8Array;
}
export interface RateLimitUpdatedAmino {
  chain?: string;
  limit?: CoinAmino;
  window?: DurationAmino;
}
export interface RateLimitUpdatedAminoMsg {
  type: "/axelar.nexus.v1beta1.RateLimitUpdated";
  value: RateLimitUpdatedAmino;
}
export interface RateLimitUpdatedSDKType {
  chain: string;
  limit: CoinSDKType;
  window: DurationSDKType;
}
export interface MessageReceived {
  id: string;
  payloadHash: Uint8Array;
  sender: CrossChainAddress;
  recipient: CrossChainAddress;
}
export interface MessageReceivedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageReceived";
  value: Uint8Array;
}
export interface MessageReceivedAmino {
  id?: string;
  payload_hash?: string;
  sender?: CrossChainAddressAmino;
  recipient?: CrossChainAddressAmino;
}
export interface MessageReceivedAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageReceived";
  value: MessageReceivedAmino;
}
export interface MessageReceivedSDKType {
  id: string;
  payload_hash: Uint8Array;
  sender: CrossChainAddressSDKType;
  recipient: CrossChainAddressSDKType;
}
export interface MessageProcessing {
  id: string;
}
export interface MessageProcessingProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageProcessing";
  value: Uint8Array;
}
export interface MessageProcessingAmino {
  id?: string;
}
export interface MessageProcessingAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageProcessing";
  value: MessageProcessingAmino;
}
export interface MessageProcessingSDKType {
  id: string;
}
export interface MessageExecuted {
  id: string;
}
export interface MessageExecutedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageExecuted";
  value: Uint8Array;
}
export interface MessageExecutedAmino {
  id?: string;
}
export interface MessageExecutedAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageExecuted";
  value: MessageExecutedAmino;
}
export interface MessageExecutedSDKType {
  id: string;
}
export interface MessageFailed {
  id: string;
}
export interface MessageFailedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.MessageFailed";
  value: Uint8Array;
}
export interface MessageFailedAmino {
  id?: string;
}
export interface MessageFailedAminoMsg {
  type: "/axelar.nexus.v1beta1.MessageFailed";
  value: MessageFailedAmino;
}
export interface MessageFailedSDKType {
  id: string;
}
export interface WasmMessageRouted {
  message: WasmMessage;
}
export interface WasmMessageRoutedProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted";
  value: Uint8Array;
}
export interface WasmMessageRoutedAmino {
  message?: WasmMessageAmino;
}
export interface WasmMessageRoutedAminoMsg {
  type: "/axelar.nexus.v1beta1.WasmMessageRouted";
  value: WasmMessageRoutedAmino;
}
export interface WasmMessageRoutedSDKType {
  message: WasmMessageSDKType;
}
function createBaseFeeDeducted(): FeeDeducted {
  return {
    transferId: BigInt(0),
    recipientChain: "",
    recipientAddress: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const FeeDeducted = {
  typeUrl: "/axelar.nexus.v1beta1.FeeDeducted",
  encode(message: FeeDeducted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferId !== BigInt(0)) {
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
      transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<FeeDeducted>): FeeDeducted {
    const message = createBaseFeeDeducted();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: FeeDeductedAmino): FeeDeducted {
    const message = createBaseFeeDeducted();
    if (object.transfer_id !== undefined && object.transfer_id !== null) {
      message.transferId = BigInt(object.transfer_id);
    }
    if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
      message.recipientChain = object.recipient_chain;
    }
    if (object.recipient_address !== undefined && object.recipient_address !== null) {
      message.recipientAddress = object.recipient_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: FeeDeducted): FeeDeductedAmino {
    const obj: any = {};
    obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
    obj.recipient_chain = message.recipientChain;
    obj.recipient_address = message.recipientAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeDeductedAminoMsg): FeeDeducted {
    return FeeDeducted.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeDeductedProtoMsg): FeeDeducted {
    return FeeDeducted.decode(message.value);
  },
  toProto(message: FeeDeducted): Uint8Array {
    return FeeDeducted.encode(message).finish();
  },
  toProtoMsg(message: FeeDeducted): FeeDeductedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.FeeDeducted",
      value: FeeDeducted.encode(message).finish()
    };
  }
};
function createBaseInsufficientFee(): InsufficientFee {
  return {
    transferId: BigInt(0),
    recipientChain: "",
    recipientAddress: "",
    amount: Coin.fromPartial({}),
    fee: Coin.fromPartial({})
  };
}
export const InsufficientFee = {
  typeUrl: "/axelar.nexus.v1beta1.InsufficientFee",
  encode(message: InsufficientFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferId !== BigInt(0)) {
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
      transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<InsufficientFee>): InsufficientFee {
    const message = createBaseInsufficientFee();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
    message.recipientChain = object.recipientChain ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: InsufficientFeeAmino): InsufficientFee {
    const message = createBaseInsufficientFee();
    if (object.transfer_id !== undefined && object.transfer_id !== null) {
      message.transferId = BigInt(object.transfer_id);
    }
    if (object.recipient_chain !== undefined && object.recipient_chain !== null) {
      message.recipientChain = object.recipient_chain;
    }
    if (object.recipient_address !== undefined && object.recipient_address !== null) {
      message.recipientAddress = object.recipient_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: InsufficientFee): InsufficientFeeAmino {
    const obj: any = {};
    obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
    obj.recipient_chain = message.recipientChain;
    obj.recipient_address = message.recipientAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: InsufficientFeeAminoMsg): InsufficientFee {
    return InsufficientFee.fromAmino(object.value);
  },
  fromProtoMsg(message: InsufficientFeeProtoMsg): InsufficientFee {
    return InsufficientFee.decode(message.value);
  },
  toProto(message: InsufficientFee): Uint8Array {
    return InsufficientFee.encode(message).finish();
  },
  toProtoMsg(message: InsufficientFee): InsufficientFeeProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.InsufficientFee",
      value: InsufficientFee.encode(message).finish()
    };
  }
};
function createBaseRateLimitUpdated(): RateLimitUpdated {
  return {
    chain: "",
    limit: Coin.fromPartial({}),
    window: Duration.fromPartial({})
  };
}
export const RateLimitUpdated = {
  typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated",
  encode(message: RateLimitUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RateLimitUpdatedAmino): RateLimitUpdated {
    const message = createBaseRateLimitUpdated();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Coin.fromAmino(object.limit);
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = Duration.fromAmino(object.window);
    }
    return message;
  },
  toAmino(message: RateLimitUpdated): RateLimitUpdatedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.limit = message.limit ? Coin.toAmino(message.limit) : undefined;
    obj.window = message.window ? Duration.toAmino(message.window) : undefined;
    return obj;
  },
  fromAminoMsg(object: RateLimitUpdatedAminoMsg): RateLimitUpdated {
    return RateLimitUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: RateLimitUpdatedProtoMsg): RateLimitUpdated {
    return RateLimitUpdated.decode(message.value);
  },
  toProto(message: RateLimitUpdated): Uint8Array {
    return RateLimitUpdated.encode(message).finish();
  },
  toProtoMsg(message: RateLimitUpdated): RateLimitUpdatedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated",
      value: RateLimitUpdated.encode(message).finish()
    };
  }
};
function createBaseMessageReceived(): MessageReceived {
  return {
    id: "",
    payloadHash: new Uint8Array(),
    sender: CrossChainAddress.fromPartial({}),
    recipient: CrossChainAddress.fromPartial({})
  };
}
export const MessageReceived = {
  typeUrl: "/axelar.nexus.v1beta1.MessageReceived",
  encode(message: MessageReceived, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageReceivedAmino): MessageReceived {
    const message = createBaseMessageReceived();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = CrossChainAddress.fromAmino(object.sender);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = CrossChainAddress.fromAmino(object.recipient);
    }
    return message;
  },
  toAmino(message: MessageReceived): MessageReceivedAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    obj.sender = message.sender ? CrossChainAddress.toAmino(message.sender) : undefined;
    obj.recipient = message.recipient ? CrossChainAddress.toAmino(message.recipient) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageReceivedAminoMsg): MessageReceived {
    return MessageReceived.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageReceivedProtoMsg): MessageReceived {
    return MessageReceived.decode(message.value);
  },
  toProto(message: MessageReceived): Uint8Array {
    return MessageReceived.encode(message).finish();
  },
  toProtoMsg(message: MessageReceived): MessageReceivedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageReceived",
      value: MessageReceived.encode(message).finish()
    };
  }
};
function createBaseMessageProcessing(): MessageProcessing {
  return {
    id: ""
  };
}
export const MessageProcessing = {
  typeUrl: "/axelar.nexus.v1beta1.MessageProcessing",
  encode(message: MessageProcessing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageProcessingAmino): MessageProcessing {
    const message = createBaseMessageProcessing();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MessageProcessing): MessageProcessingAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MessageProcessingAminoMsg): MessageProcessing {
    return MessageProcessing.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProcessingProtoMsg): MessageProcessing {
    return MessageProcessing.decode(message.value);
  },
  toProto(message: MessageProcessing): Uint8Array {
    return MessageProcessing.encode(message).finish();
  },
  toProtoMsg(message: MessageProcessing): MessageProcessingProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageProcessing",
      value: MessageProcessing.encode(message).finish()
    };
  }
};
function createBaseMessageExecuted(): MessageExecuted {
  return {
    id: ""
  };
}
export const MessageExecuted = {
  typeUrl: "/axelar.nexus.v1beta1.MessageExecuted",
  encode(message: MessageExecuted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageExecutedAmino): MessageExecuted {
    const message = createBaseMessageExecuted();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MessageExecuted): MessageExecutedAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MessageExecutedAminoMsg): MessageExecuted {
    return MessageExecuted.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageExecutedProtoMsg): MessageExecuted {
    return MessageExecuted.decode(message.value);
  },
  toProto(message: MessageExecuted): Uint8Array {
    return MessageExecuted.encode(message).finish();
  },
  toProtoMsg(message: MessageExecuted): MessageExecutedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageExecuted",
      value: MessageExecuted.encode(message).finish()
    };
  }
};
function createBaseMessageFailed(): MessageFailed {
  return {
    id: ""
  };
}
export const MessageFailed = {
  typeUrl: "/axelar.nexus.v1beta1.MessageFailed",
  encode(message: MessageFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MessageFailedAmino): MessageFailed {
    const message = createBaseMessageFailed();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MessageFailed): MessageFailedAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MessageFailedAminoMsg): MessageFailed {
    return MessageFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageFailedProtoMsg): MessageFailed {
    return MessageFailed.decode(message.value);
  },
  toProto(message: MessageFailed): Uint8Array {
    return MessageFailed.encode(message).finish();
  },
  toProtoMsg(message: MessageFailed): MessageFailedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.MessageFailed",
      value: MessageFailed.encode(message).finish()
    };
  }
};
function createBaseWasmMessageRouted(): WasmMessageRouted {
  return {
    message: WasmMessage.fromPartial({})
  };
}
export const WasmMessageRouted = {
  typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted",
  encode(message: WasmMessageRouted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== undefined) {
      WasmMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): WasmMessageRouted {
    return {
      message: isSet(object.message) ? WasmMessage.fromJSON(object.message) : undefined
    };
  },
  fromPartial(object: Partial<WasmMessageRouted>): WasmMessageRouted {
    const message = createBaseWasmMessageRouted();
    message.message = object.message !== undefined && object.message !== null ? WasmMessage.fromPartial(object.message) : undefined;
    return message;
  },
  fromAmino(object: WasmMessageRoutedAmino): WasmMessageRouted {
    const message = createBaseWasmMessageRouted();
    if (object.message !== undefined && object.message !== null) {
      message.message = WasmMessage.fromAmino(object.message);
    }
    return message;
  },
  toAmino(message: WasmMessageRouted): WasmMessageRoutedAmino {
    const obj: any = {};
    obj.message = message.message ? WasmMessage.toAmino(message.message) : undefined;
    return obj;
  },
  fromAminoMsg(object: WasmMessageRoutedAminoMsg): WasmMessageRouted {
    return WasmMessageRouted.fromAmino(object.value);
  },
  fromProtoMsg(message: WasmMessageRoutedProtoMsg): WasmMessageRouted {
    return WasmMessageRouted.decode(message.value);
  },
  toProto(message: WasmMessageRouted): Uint8Array {
    return WasmMessageRouted.encode(message).finish();
  },
  toProtoMsg(message: WasmMessageRouted): WasmMessageRoutedProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted",
      value: WasmMessageRouted.encode(message).finish()
    };
  }
};