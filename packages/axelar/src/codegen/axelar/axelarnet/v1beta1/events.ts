import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IBCTransferSent {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
  recipient: string;
}
export interface IBCTransferSentSDKType {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: CoinSDKType;
  sequence: Long;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface IBCTransferCompleted {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface IBCTransferCompletedSDKType {
  id: Long;
  sequence: Long;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferFailed {
  id: Long;
  sequence: Long;
  portId: string;
  channelId: string;
}
export interface IBCTransferFailedSDKType {
  id: Long;
  sequence: Long;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferRetried {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  sequence: Long;
  portId: string;
  channelId: string;
  recipient: string;
}
export interface IBCTransferRetriedSDKType {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: CoinSDKType;
  sequence: Long;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface AxelarTransferCompleted {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: Coin;
  recipient: string;
}
export interface AxelarTransferCompletedSDKType {
  id: Long;
  /** @deprecated */
  receipient: string;
  asset?: CoinSDKType;
  recipient: string;
}
export interface FeeCollected {
  collector: Uint8Array;
  fee?: Coin;
}
export interface FeeCollectedSDKType {
  collector: Uint8Array;
  fee?: CoinSDKType;
}
export interface FeePaid {
  messageId: string;
  recipient: Uint8Array;
  fee?: Coin;
}
export interface FeePaidSDKType {
  message_id: string;
  recipient: Uint8Array;
  fee?: CoinSDKType;
}
export interface ContractCallSubmitted {
  messageId: string;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  contractAddress: string;
  payload: Uint8Array;
  payloadHash: Uint8Array;
}
export interface ContractCallSubmittedSDKType {
  message_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  contract_address: string;
  payload: Uint8Array;
  payload_hash: Uint8Array;
}
export interface ContractCallWithTokenSubmitted {
  messageId: string;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  contractAddress: string;
  payload: Uint8Array;
  payloadHash: Uint8Array;
  asset?: Coin;
}
export interface ContractCallWithTokenSubmittedSDKType {
  message_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  contract_address: string;
  payload: Uint8Array;
  payload_hash: Uint8Array;
  asset?: CoinSDKType;
}
export interface TokenSent {
  transferId: Long;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  destinationAddress: string;
  asset?: Coin;
}
export interface TokenSentSDKType {
  transfer_id: Long;
  sender: string;
  source_chain: string;
  destination_chain: string;
  destination_address: string;
  asset?: CoinSDKType;
}
function createBaseIBCTransferSent(): IBCTransferSent {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: "",
    recipient: ""
  };
}
export const IBCTransferSent = {
  encode(message: IBCTransferSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): IBCTransferSent {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferSent>): IBCTransferSent {
    const message = createBaseIBCTransferSent();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseIBCTransferCompleted(): IBCTransferCompleted {
  return {
    id: Long.UZERO,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}
export const IBCTransferCompleted = {
  encode(message: IBCTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): IBCTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferCompleted>): IBCTransferCompleted {
    const message = createBaseIBCTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }
};
function createBaseIBCTransferFailed(): IBCTransferFailed {
  return {
    id: Long.UZERO,
    sequence: Long.UZERO,
    portId: "",
    channelId: ""
  };
}
export const IBCTransferFailed = {
  encode(message: IBCTransferFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): IBCTransferFailed {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferFailed>): IBCTransferFailed {
    const message = createBaseIBCTransferFailed();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }
};
function createBaseIBCTransferRetried(): IBCTransferRetried {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    sequence: Long.UZERO,
    portId: "",
    channelId: "",
    recipient: ""
  };
}
export const IBCTransferRetried = {
  encode(message: IBCTransferRetried, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    if (message.portId !== "") {
      writer.uint32(42).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(50).string(message.channelId);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): IBCTransferRetried {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferRetried>): IBCTransferRetried {
    const message = createBaseIBCTransferRetried();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseAxelarTransferCompleted(): AxelarTransferCompleted {
  return {
    id: Long.UZERO,
    receipient: "",
    asset: undefined,
    recipient: ""
  };
}
export const AxelarTransferCompleted = {
  encode(message: AxelarTransferCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): AxelarTransferCompleted {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<AxelarTransferCompleted>): AxelarTransferCompleted {
    const message = createBaseAxelarTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  }
};
function createBaseFeeCollected(): FeeCollected {
  return {
    collector: new Uint8Array(),
    fee: undefined
  };
}
export const FeeCollected = {
  encode(message: FeeCollected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collector.length !== 0) {
      writer.uint32(10).bytes(message.collector);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeeCollected {
    return {
      collector: isSet(object.collector) ? bytesFromBase64(object.collector) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<FeeCollected>): FeeCollected {
    const message = createBaseFeeCollected();
    message.collector = object.collector ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseFeePaid(): FeePaid {
  return {
    messageId: "",
    recipient: new Uint8Array(),
    fee: undefined
  };
}
export const FeePaid = {
  encode(message: FeePaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeePaid {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<FeePaid>): FeePaid {
    const message = createBaseFeePaid();
    message.messageId = object.messageId ?? "";
    message.recipient = object.recipient ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseContractCallSubmitted(): ContractCallSubmitted {
  return {
    messageId: "",
    sender: "",
    sourceChain: "",
    destinationChain: "",
    contractAddress: "",
    payload: new Uint8Array(),
    payloadHash: new Uint8Array()
  };
}
export const ContractCallSubmitted = {
  encode(message: ContractCallSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    return writer;
  },
  fromJSON(object: any): ContractCallSubmitted {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractCallSubmitted>): ContractCallSubmitted {
    const message = createBaseContractCallSubmitted();
    message.messageId = object.messageId ?? "";
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    return message;
  }
};
function createBaseContractCallWithTokenSubmitted(): ContractCallWithTokenSubmitted {
  return {
    messageId: "",
    sender: "",
    sourceChain: "",
    destinationChain: "",
    contractAddress: "",
    payload: new Uint8Array(),
    payloadHash: new Uint8Array(),
    asset: undefined
  };
}
export const ContractCallWithTokenSubmitted = {
  encode(message: ContractCallWithTokenSubmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.payload.length !== 0) {
      writer.uint32(50).bytes(message.payload);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractCallWithTokenSubmitted {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<ContractCallWithTokenSubmitted>): ContractCallWithTokenSubmitted {
    const message = createBaseContractCallWithTokenSubmitted();
    message.messageId = object.messageId ?? "";
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseTokenSent(): TokenSent {
  return {
    transferId: Long.UZERO,
    sender: "",
    sourceChain: "",
    destinationChain: "",
    destinationAddress: "",
    asset: undefined
  };
}
export const TokenSent = {
  encode(message: TokenSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transferId.isZero()) {
      writer.uint32(8).uint64(message.transferId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.sourceChain !== "") {
      writer.uint32(26).string(message.sourceChain);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(42).string(message.destinationAddress);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TokenSent {
    return {
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<TokenSent>): TokenSent {
    const message = createBaseTokenSent();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};