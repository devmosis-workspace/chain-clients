import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface IBCTransferSent {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: Coin;
  sequence: bigint;
  portId: string;
  channelId: string;
  recipient: string;
}
export interface IBCTransferSentProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent";
  value: Uint8Array;
}
export interface IBCTransferSentAmino {
  id: string;
  /** @deprecated */
  receipient: string;
  asset?: CoinAmino;
  sequence: string;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface IBCTransferSentAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCTransferSent";
  value: IBCTransferSentAmino;
}
export interface IBCTransferSentSDKType {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: CoinSDKType;
  sequence: bigint;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface IBCTransferCompleted {
  id: bigint;
  sequence: bigint;
  portId: string;
  channelId: string;
}
export interface IBCTransferCompletedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted";
  value: Uint8Array;
}
export interface IBCTransferCompletedAmino {
  id: string;
  sequence: string;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferCompletedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCTransferCompleted";
  value: IBCTransferCompletedAmino;
}
export interface IBCTransferCompletedSDKType {
  id: bigint;
  sequence: bigint;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferFailed {
  id: bigint;
  sequence: bigint;
  portId: string;
  channelId: string;
}
export interface IBCTransferFailedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed";
  value: Uint8Array;
}
export interface IBCTransferFailedAmino {
  id: string;
  sequence: string;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferFailedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCTransferFailed";
  value: IBCTransferFailedAmino;
}
export interface IBCTransferFailedSDKType {
  id: bigint;
  sequence: bigint;
  port_id: string;
  channel_id: string;
}
export interface IBCTransferRetried {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: Coin;
  sequence: bigint;
  portId: string;
  channelId: string;
  recipient: string;
}
export interface IBCTransferRetriedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried";
  value: Uint8Array;
}
export interface IBCTransferRetriedAmino {
  id: string;
  /** @deprecated */
  receipient: string;
  asset?: CoinAmino;
  sequence: string;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface IBCTransferRetriedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.IBCTransferRetried";
  value: IBCTransferRetriedAmino;
}
export interface IBCTransferRetriedSDKType {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: CoinSDKType;
  sequence: bigint;
  port_id: string;
  channel_id: string;
  recipient: string;
}
export interface AxelarTransferCompleted {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: Coin;
  recipient: string;
}
export interface AxelarTransferCompletedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted";
  value: Uint8Array;
}
export interface AxelarTransferCompletedAmino {
  id: string;
  /** @deprecated */
  receipient: string;
  asset?: CoinAmino;
  recipient: string;
}
export interface AxelarTransferCompletedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted";
  value: AxelarTransferCompletedAmino;
}
export interface AxelarTransferCompletedSDKType {
  id: bigint;
  /** @deprecated */
  receipient: string;
  asset: CoinSDKType;
  recipient: string;
}
export interface FeeCollected {
  collector: Uint8Array;
  fee: Coin;
}
export interface FeeCollectedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected";
  value: Uint8Array;
}
export interface FeeCollectedAmino {
  collector: Uint8Array;
  fee?: CoinAmino;
}
export interface FeeCollectedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.FeeCollected";
  value: FeeCollectedAmino;
}
export interface FeeCollectedSDKType {
  collector: Uint8Array;
  fee: CoinSDKType;
}
export interface FeePaid {
  messageId: string;
  recipient: Uint8Array;
  fee: Coin;
  refundRecipient: string;
  /** registered asset name in nexus */
  asset: string;
}
export interface FeePaidProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.FeePaid";
  value: Uint8Array;
}
export interface FeePaidAmino {
  message_id: string;
  recipient: Uint8Array;
  fee?: CoinAmino;
  refund_recipient: string;
  /** registered asset name in nexus */
  asset: string;
}
export interface FeePaidAminoMsg {
  type: "/axelar.axelarnet.v1beta1.FeePaid";
  value: FeePaidAmino;
}
export interface FeePaidSDKType {
  message_id: string;
  recipient: Uint8Array;
  fee: CoinSDKType;
  refund_recipient: string;
  asset: string;
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
export interface ContractCallSubmittedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted";
  value: Uint8Array;
}
export interface ContractCallSubmittedAmino {
  message_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  contract_address: string;
  payload: Uint8Array;
  payload_hash: Uint8Array;
}
export interface ContractCallSubmittedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ContractCallSubmitted";
  value: ContractCallSubmittedAmino;
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
  asset: Coin;
}
export interface ContractCallWithTokenSubmittedProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
  value: Uint8Array;
}
export interface ContractCallWithTokenSubmittedAmino {
  message_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  contract_address: string;
  payload: Uint8Array;
  payload_hash: Uint8Array;
  asset?: CoinAmino;
}
export interface ContractCallWithTokenSubmittedAminoMsg {
  type: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
  value: ContractCallWithTokenSubmittedAmino;
}
export interface ContractCallWithTokenSubmittedSDKType {
  message_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  contract_address: string;
  payload: Uint8Array;
  payload_hash: Uint8Array;
  asset: CoinSDKType;
}
export interface TokenSent {
  transferId: bigint;
  sender: string;
  sourceChain: string;
  destinationChain: string;
  destinationAddress: string;
  asset: Coin;
}
export interface TokenSentProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.TokenSent";
  value: Uint8Array;
}
export interface TokenSentAmino {
  transfer_id: string;
  sender: string;
  source_chain: string;
  destination_chain: string;
  destination_address: string;
  asset?: CoinAmino;
}
export interface TokenSentAminoMsg {
  type: "/axelar.axelarnet.v1beta1.TokenSent";
  value: TokenSentAmino;
}
export interface TokenSentSDKType {
  transfer_id: bigint;
  sender: string;
  source_chain: string;
  destination_chain: string;
  destination_address: string;
  asset: CoinSDKType;
}
function createBaseIBCTransferSent(): IBCTransferSent {
  return {
    id: BigInt(0),
    receipient: "",
    asset: Coin.fromPartial({}),
    sequence: BigInt(0),
    portId: "",
    channelId: "",
    recipient: ""
  };
}
export const IBCTransferSent = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent",
  encode(message: IBCTransferSent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferSent>): IBCTransferSent {
    const message = createBaseIBCTransferSent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: IBCTransferSentAmino): IBCTransferSent {
    return {
      id: BigInt(object.id),
      receipient: object.receipient,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      sequence: BigInt(object.sequence),
      portId: object.port_id,
      channelId: object.channel_id,
      recipient: object.recipient
    };
  },
  toAmino(message: IBCTransferSent): IBCTransferSentAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.receipient = message.receipient;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: IBCTransferSentAminoMsg): IBCTransferSent {
    return IBCTransferSent.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCTransferSentProtoMsg): IBCTransferSent {
    return IBCTransferSent.decode(message.value);
  },
  toProto(message: IBCTransferSent): Uint8Array {
    return IBCTransferSent.encode(message).finish();
  },
  toProtoMsg(message: IBCTransferSent): IBCTransferSentProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent",
      value: IBCTransferSent.encode(message).finish()
    };
  }
};
function createBaseIBCTransferCompleted(): IBCTransferCompleted {
  return {
    id: BigInt(0),
    sequence: BigInt(0),
    portId: "",
    channelId: ""
  };
}
export const IBCTransferCompleted = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted",
  encode(message: IBCTransferCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sequence !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferCompleted>): IBCTransferCompleted {
    const message = createBaseIBCTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: IBCTransferCompletedAmino): IBCTransferCompleted {
    return {
      id: BigInt(object.id),
      sequence: BigInt(object.sequence),
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: IBCTransferCompleted): IBCTransferCompletedAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: IBCTransferCompletedAminoMsg): IBCTransferCompleted {
    return IBCTransferCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCTransferCompletedProtoMsg): IBCTransferCompleted {
    return IBCTransferCompleted.decode(message.value);
  },
  toProto(message: IBCTransferCompleted): Uint8Array {
    return IBCTransferCompleted.encode(message).finish();
  },
  toProtoMsg(message: IBCTransferCompleted): IBCTransferCompletedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted",
      value: IBCTransferCompleted.encode(message).finish()
    };
  }
};
function createBaseIBCTransferFailed(): IBCTransferFailed {
  return {
    id: BigInt(0),
    sequence: BigInt(0),
    portId: "",
    channelId: ""
  };
}
export const IBCTransferFailed = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed",
  encode(message: IBCTransferFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sequence !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferFailed>): IBCTransferFailed {
    const message = createBaseIBCTransferFailed();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: IBCTransferFailedAmino): IBCTransferFailed {
    return {
      id: BigInt(object.id),
      sequence: BigInt(object.sequence),
      portId: object.port_id,
      channelId: object.channel_id
    };
  },
  toAmino(message: IBCTransferFailed): IBCTransferFailedAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAminoMsg(object: IBCTransferFailedAminoMsg): IBCTransferFailed {
    return IBCTransferFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCTransferFailedProtoMsg): IBCTransferFailed {
    return IBCTransferFailed.decode(message.value);
  },
  toProto(message: IBCTransferFailed): Uint8Array {
    return IBCTransferFailed.encode(message).finish();
  },
  toProtoMsg(message: IBCTransferFailed): IBCTransferFailedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed",
      value: IBCTransferFailed.encode(message).finish()
    };
  }
};
function createBaseIBCTransferRetried(): IBCTransferRetried {
  return {
    id: BigInt(0),
    receipient: "",
    asset: Coin.fromPartial({}),
    sequence: BigInt(0),
    portId: "",
    channelId: "",
    recipient: ""
  };
}
export const IBCTransferRetried = {
  typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried",
  encode(message: IBCTransferRetried, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.receipient !== "") {
      writer.uint32(18).string(message.receipient);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<IBCTransferRetried>): IBCTransferRetried {
    const message = createBaseIBCTransferRetried();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: IBCTransferRetriedAmino): IBCTransferRetried {
    return {
      id: BigInt(object.id),
      receipient: object.receipient,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      sequence: BigInt(object.sequence),
      portId: object.port_id,
      channelId: object.channel_id,
      recipient: object.recipient
    };
  },
  toAmino(message: IBCTransferRetried): IBCTransferRetriedAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.receipient = message.receipient;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: IBCTransferRetriedAminoMsg): IBCTransferRetried {
    return IBCTransferRetried.fromAmino(object.value);
  },
  fromProtoMsg(message: IBCTransferRetriedProtoMsg): IBCTransferRetried {
    return IBCTransferRetried.decode(message.value);
  },
  toProto(message: IBCTransferRetried): Uint8Array {
    return IBCTransferRetried.encode(message).finish();
  },
  toProtoMsg(message: IBCTransferRetried): IBCTransferRetriedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried",
      value: IBCTransferRetried.encode(message).finish()
    };
  }
};
function createBaseAxelarTransferCompleted(): AxelarTransferCompleted {
  return {
    id: BigInt(0),
    receipient: "",
    asset: Coin.fromPartial({}),
    recipient: ""
  };
}
export const AxelarTransferCompleted = {
  typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted",
  encode(message: AxelarTransferCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      receipient: isSet(object.receipient) ? String(object.receipient) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<AxelarTransferCompleted>): AxelarTransferCompleted {
    const message = createBaseAxelarTransferCompleted();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.receipient = object.receipient ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: AxelarTransferCompletedAmino): AxelarTransferCompleted {
    return {
      id: BigInt(object.id),
      receipient: object.receipient,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined,
      recipient: object.recipient
    };
  },
  toAmino(message: AxelarTransferCompleted): AxelarTransferCompletedAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.receipient = message.receipient;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    obj.recipient = message.recipient;
    return obj;
  },
  fromAminoMsg(object: AxelarTransferCompletedAminoMsg): AxelarTransferCompleted {
    return AxelarTransferCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: AxelarTransferCompletedProtoMsg): AxelarTransferCompleted {
    return AxelarTransferCompleted.decode(message.value);
  },
  toProto(message: AxelarTransferCompleted): Uint8Array {
    return AxelarTransferCompleted.encode(message).finish();
  },
  toProtoMsg(message: AxelarTransferCompleted): AxelarTransferCompletedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted",
      value: AxelarTransferCompleted.encode(message).finish()
    };
  }
};
function createBaseFeeCollected(): FeeCollected {
  return {
    collector: new Uint8Array(),
    fee: Coin.fromPartial({})
  };
}
export const FeeCollected = {
  typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected",
  encode(message: FeeCollected, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: FeeCollectedAmino): FeeCollected {
    return {
      collector: object.collector,
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined
    };
  },
  toAmino(message: FeeCollected): FeeCollectedAmino {
    const obj: any = {};
    obj.collector = message.collector;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeCollectedAminoMsg): FeeCollected {
    return FeeCollected.fromAmino(object.value);
  },
  fromProtoMsg(message: FeeCollectedProtoMsg): FeeCollected {
    return FeeCollected.decode(message.value);
  },
  toProto(message: FeeCollected): Uint8Array {
    return FeeCollected.encode(message).finish();
  },
  toProtoMsg(message: FeeCollected): FeeCollectedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected",
      value: FeeCollected.encode(message).finish()
    };
  }
};
function createBaseFeePaid(): FeePaid {
  return {
    messageId: "",
    recipient: new Uint8Array(),
    fee: Coin.fromPartial({}),
    refundRecipient: "",
    asset: ""
  };
}
export const FeePaid = {
  typeUrl: "/axelar.axelarnet.v1beta1.FeePaid",
  encode(message: FeePaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.refundRecipient !== "") {
      writer.uint32(34).string(message.refundRecipient);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): FeePaid {
    return {
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(),
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      refundRecipient: isSet(object.refundRecipient) ? String(object.refundRecipient) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<FeePaid>): FeePaid {
    const message = createBaseFeePaid();
    message.messageId = object.messageId ?? "";
    message.recipient = object.recipient ?? new Uint8Array();
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.refundRecipient = object.refundRecipient ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: FeePaidAmino): FeePaid {
    return {
      messageId: object.message_id,
      recipient: object.recipient,
      fee: object?.fee ? Coin.fromAmino(object.fee) : undefined,
      refundRecipient: object.refund_recipient,
      asset: object.asset
    };
  },
  toAmino(message: FeePaid): FeePaidAmino {
    const obj: any = {};
    obj.message_id = message.messageId;
    obj.recipient = message.recipient;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    obj.refund_recipient = message.refundRecipient;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: FeePaidAminoMsg): FeePaid {
    return FeePaid.fromAmino(object.value);
  },
  fromProtoMsg(message: FeePaidProtoMsg): FeePaid {
    return FeePaid.decode(message.value);
  },
  toProto(message: FeePaid): Uint8Array {
    return FeePaid.encode(message).finish();
  },
  toProtoMsg(message: FeePaid): FeePaidProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.FeePaid",
      value: FeePaid.encode(message).finish()
    };
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
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted",
  encode(message: ContractCallSubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ContractCallSubmittedAmino): ContractCallSubmitted {
    return {
      messageId: object.message_id,
      sender: object.sender,
      sourceChain: object.source_chain,
      destinationChain: object.destination_chain,
      contractAddress: object.contract_address,
      payload: object.payload,
      payloadHash: object.payload_hash
    };
  },
  toAmino(message: ContractCallSubmitted): ContractCallSubmittedAmino {
    const obj: any = {};
    obj.message_id = message.messageId;
    obj.sender = message.sender;
    obj.source_chain = message.sourceChain;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload = message.payload;
    obj.payload_hash = message.payloadHash;
    return obj;
  },
  fromAminoMsg(object: ContractCallSubmittedAminoMsg): ContractCallSubmitted {
    return ContractCallSubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallSubmittedProtoMsg): ContractCallSubmitted {
    return ContractCallSubmitted.decode(message.value);
  },
  toProto(message: ContractCallSubmitted): Uint8Array {
    return ContractCallSubmitted.encode(message).finish();
  },
  toProtoMsg(message: ContractCallSubmitted): ContractCallSubmittedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted",
      value: ContractCallSubmitted.encode(message).finish()
    };
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
    asset: Coin.fromPartial({})
  };
}
export const ContractCallWithTokenSubmitted = {
  typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted",
  encode(message: ContractCallWithTokenSubmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ContractCallWithTokenSubmittedAmino): ContractCallWithTokenSubmitted {
    return {
      messageId: object.message_id,
      sender: object.sender,
      sourceChain: object.source_chain,
      destinationChain: object.destination_chain,
      contractAddress: object.contract_address,
      payload: object.payload,
      payloadHash: object.payload_hash,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: ContractCallWithTokenSubmitted): ContractCallWithTokenSubmittedAmino {
    const obj: any = {};
    obj.message_id = message.messageId;
    obj.sender = message.sender;
    obj.source_chain = message.sourceChain;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload = message.payload;
    obj.payload_hash = message.payloadHash;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractCallWithTokenSubmittedAminoMsg): ContractCallWithTokenSubmitted {
    return ContractCallWithTokenSubmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallWithTokenSubmittedProtoMsg): ContractCallWithTokenSubmitted {
    return ContractCallWithTokenSubmitted.decode(message.value);
  },
  toProto(message: ContractCallWithTokenSubmitted): Uint8Array {
    return ContractCallWithTokenSubmitted.encode(message).finish();
  },
  toProtoMsg(message: ContractCallWithTokenSubmitted): ContractCallWithTokenSubmittedProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted",
      value: ContractCallWithTokenSubmitted.encode(message).finish()
    };
  }
};
function createBaseTokenSent(): TokenSent {
  return {
    transferId: BigInt(0),
    sender: "",
    sourceChain: "",
    destinationChain: "",
    destinationAddress: "",
    asset: Coin.fromPartial({})
  };
}
export const TokenSent = {
  typeUrl: "/axelar.axelarnet.v1beta1.TokenSent",
  encode(message: TokenSent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transferId !== BigInt(0)) {
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
      transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
      sender: isSet(object.sender) ? String(object.sender) : "",
      sourceChain: isSet(object.sourceChain) ? String(object.sourceChain) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<TokenSent>): TokenSent {
    const message = createBaseTokenSent();
    message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.sourceChain = object.sourceChain ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: TokenSentAmino): TokenSent {
    return {
      transferId: BigInt(object.transfer_id),
      sender: object.sender,
      sourceChain: object.source_chain,
      destinationChain: object.destination_chain,
      destinationAddress: object.destination_address,
      asset: object?.asset ? Coin.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: TokenSent): TokenSentAmino {
    const obj: any = {};
    obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
    obj.sender = message.sender;
    obj.source_chain = message.sourceChain;
    obj.destination_chain = message.destinationChain;
    obj.destination_address = message.destinationAddress;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenSentAminoMsg): TokenSent {
    return TokenSent.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenSentProtoMsg): TokenSent {
    return TokenSent.decode(message.value);
  },
  toProto(message: TokenSent): Uint8Array {
    return TokenSent.encode(message).finish();
  },
  toProtoMsg(message: TokenSent): TokenSentProtoMsg {
    return {
      typeUrl: "/axelar.axelarnet.v1beta1.TokenSent",
      value: TokenSent.encode(message).finish()
    };
  }
};