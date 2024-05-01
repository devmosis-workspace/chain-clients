import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemption {
  value: Coin;
  destinationAddress: string;
  fromAddress: string;
}
export interface MsgRequestRedemptionProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
  value: Uint8Array;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionAmino {
  value?: CoinAmino;
  destination_address?: string;
  from_address?: string;
}
export interface MsgRequestRedemptionAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
  value: MsgRequestRedemptionAmino;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionSDKType {
  value: CoinSDKType;
  destination_address: string;
  from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
  value: Uint8Array;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseAmino {}
export interface MsgRequestRedemptionResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
  value: MsgRequestRedemptionResponseAmino;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseSDKType {}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemption {
  chainId: string;
  hash: string;
  fromAddress: string;
}
export interface MsgCancelQueuedRedemptionProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption";
  value: Uint8Array;
}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemptionAmino {
  chain_id?: string;
  hash?: string;
  from_address?: string;
}
export interface MsgCancelQueuedRedemptionAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption";
  value: MsgCancelQueuedRedemptionAmino;
}
/** MsgCancelQueuedRedemption represents a message type to cancel . */
export interface MsgCancelQueuedRedemptionSDKType {
  chain_id: string;
  hash: string;
  from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponse {
  returned: Coin;
}
export interface MsgCancelQueuedRedemptionResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse";
  value: Uint8Array;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponseAmino {
  returned?: CoinAmino;
}
export interface MsgCancelQueuedRedemptionResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse";
  value: MsgCancelQueuedRedemptionResponseAmino;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgCancelQueuedRedemptionResponseSDKType {
  returned: CoinSDKType;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntent {
  chainId: string;
  intents: string;
  fromAddress: string;
}
export interface MsgSignalIntentProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
  value: Uint8Array;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentAmino {
  chain_id?: string;
  intents?: string;
  from_address?: string;
}
export interface MsgSignalIntentAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
  value: MsgSignalIntentAmino;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentSDKType {
  chain_id: string;
  intents: string;
  from_address: string;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponse {}
export interface MsgSignalIntentResponseProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
  value: Uint8Array;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseAmino {}
export interface MsgSignalIntentResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
  value: MsgSignalIntentResponseAmino;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseSDKType {}
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    value: Coin.fromPartial({}),
    destinationAddress: "",
    fromAddress: ""
  };
}
export const MsgRequestRedemption = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
  encode(message: MsgRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRequestRedemption {
    return {
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.destinationAddress = object.destinationAddress ?? "";
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    if (object.value !== undefined && object.value !== null) {
      message.value = Coin.fromAmino(object.value);
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    return message;
  },
  toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    obj.destination_address = message.destinationAddress;
    obj.from_address = message.fromAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.decode(message.value);
  },
  toProto(message: MsgRequestRedemption): Uint8Array {
    return MsgRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
      value: MsgRequestRedemption.encode(message).finish()
    };
  }
};
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
  encode(_: MsgRequestRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRequestRedemptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgRequestRedemptionResponse): Uint8Array {
    return MsgRequestRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
      value: MsgRequestRedemptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelQueuedRedemption(): MsgCancelQueuedRedemption {
  return {
    chainId: "",
    hash: "",
    fromAddress: ""
  };
}
export const MsgCancelQueuedRedemption = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
  encode(message: MsgCancelQueuedRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelQueuedRedemption {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelQueuedRedemption>): MsgCancelQueuedRedemption {
    const message = createBaseMsgCancelQueuedRedemption();
    message.chainId = object.chainId ?? "";
    message.hash = object.hash ?? "";
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCancelQueuedRedemptionAmino): MsgCancelQueuedRedemption {
    const message = createBaseMsgCancelQueuedRedemption();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    return message;
  },
  toAmino(message: MsgCancelQueuedRedemption): MsgCancelQueuedRedemptionAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.hash = message.hash;
    obj.from_address = message.fromAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelQueuedRedemptionAminoMsg): MsgCancelQueuedRedemption {
    return MsgCancelQueuedRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelQueuedRedemptionProtoMsg): MsgCancelQueuedRedemption {
    return MsgCancelQueuedRedemption.decode(message.value);
  },
  toProto(message: MsgCancelQueuedRedemption): Uint8Array {
    return MsgCancelQueuedRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelQueuedRedemption): MsgCancelQueuedRedemptionProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
      value: MsgCancelQueuedRedemption.encode(message).finish()
    };
  }
};
function createBaseMsgCancelQueuedRedemptionResponse(): MsgCancelQueuedRedemptionResponse {
  return {
    returned: Coin.fromPartial({})
  };
}
export const MsgCancelQueuedRedemptionResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse",
  encode(message: MsgCancelQueuedRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.returned !== undefined) {
      Coin.encode(message.returned, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelQueuedRedemptionResponse {
    return {
      returned: isSet(object.returned) ? Coin.fromJSON(object.returned) : undefined
    };
  },
  fromPartial(object: Partial<MsgCancelQueuedRedemptionResponse>): MsgCancelQueuedRedemptionResponse {
    const message = createBaseMsgCancelQueuedRedemptionResponse();
    message.returned = object.returned !== undefined && object.returned !== null ? Coin.fromPartial(object.returned) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelQueuedRedemptionResponseAmino): MsgCancelQueuedRedemptionResponse {
    const message = createBaseMsgCancelQueuedRedemptionResponse();
    if (object.returned !== undefined && object.returned !== null) {
      message.returned = Coin.fromAmino(object.returned);
    }
    return message;
  },
  toAmino(message: MsgCancelQueuedRedemptionResponse): MsgCancelQueuedRedemptionResponseAmino {
    const obj: any = {};
    obj.returned = message.returned ? Coin.toAmino(message.returned) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelQueuedRedemptionResponseAminoMsg): MsgCancelQueuedRedemptionResponse {
    return MsgCancelQueuedRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelQueuedRedemptionResponseProtoMsg): MsgCancelQueuedRedemptionResponse {
    return MsgCancelQueuedRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgCancelQueuedRedemptionResponse): Uint8Array {
    return MsgCancelQueuedRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelQueuedRedemptionResponse): MsgCancelQueuedRedemptionResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemptionResponse",
      value: MsgCancelQueuedRedemptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSignalIntent(): MsgSignalIntent {
  return {
    chainId: "",
    intents: "",
    fromAddress: ""
  };
}
export const MsgSignalIntent = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
  encode(message: MsgSignalIntent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.intents !== "") {
      writer.uint32(18).string(message.intents);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgSignalIntent {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      intents: isSet(object.intents) ? String(object.intents) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgSignalIntent>): MsgSignalIntent {
    const message = createBaseMsgSignalIntent();
    message.chainId = object.chainId ?? "";
    message.intents = object.intents ?? "";
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSignalIntentAmino): MsgSignalIntent {
    const message = createBaseMsgSignalIntent();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.intents !== undefined && object.intents !== null) {
      message.intents = object.intents;
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    return message;
  },
  toAmino(message: MsgSignalIntent): MsgSignalIntentAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.intents = message.intents;
    obj.from_address = message.fromAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSignalIntentAminoMsg): MsgSignalIntent {
    return MsgSignalIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignalIntentProtoMsg): MsgSignalIntent {
    return MsgSignalIntent.decode(message.value);
  },
  toProto(message: MsgSignalIntent): Uint8Array {
    return MsgSignalIntent.encode(message).finish();
  },
  toProtoMsg(message: MsgSignalIntent): MsgSignalIntentProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
      value: MsgSignalIntent.encode(message).finish()
    };
  }
};
function createBaseMsgSignalIntentResponse(): MsgSignalIntentResponse {
  return {};
}
export const MsgSignalIntentResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
  encode(_: MsgSignalIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSignalIntentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSignalIntentResponse>): MsgSignalIntentResponse {
    const message = createBaseMsgSignalIntentResponse();
    return message;
  },
  fromAmino(_: MsgSignalIntentResponseAmino): MsgSignalIntentResponse {
    const message = createBaseMsgSignalIntentResponse();
    return message;
  },
  toAmino(_: MsgSignalIntentResponse): MsgSignalIntentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignalIntentResponseAminoMsg): MsgSignalIntentResponse {
    return MsgSignalIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignalIntentResponseProtoMsg): MsgSignalIntentResponse {
    return MsgSignalIntentResponse.decode(message.value);
  },
  toProto(message: MsgSignalIntentResponse): Uint8Array {
    return MsgSignalIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignalIntentResponse): MsgSignalIntentResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
      value: MsgSignalIntentResponse.encode(message).finish()
    };
  }
};