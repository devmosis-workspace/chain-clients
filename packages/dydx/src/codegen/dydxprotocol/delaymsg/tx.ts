import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgDelayMessage is a request type for the DelayMessage method. */
export interface MsgDelayMessage {
  authority: string;
  /** The message to be delayed. */
  msg: Any;
  /** The number of blocks to delay the message for. */
  delayBlocks: number;
}
export interface MsgDelayMessageProtoMsg {
  typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessage";
  value: Uint8Array;
}
/** MsgDelayMessage is a request type for the DelayMessage method. */
export interface MsgDelayMessageAmino {
  authority: string;
  /** The message to be delayed. */
  msg?: AnyAmino;
  /** The number of blocks to delay the message for. */
  delay_blocks: number;
}
export interface MsgDelayMessageAminoMsg {
  type: "/dydxprotocol.delaymsg.MsgDelayMessage";
  value: MsgDelayMessageAmino;
}
/** MsgDelayMessage is a request type for the DelayMessage method. */
export interface MsgDelayMessageSDKType {
  authority: string;
  msg: AnySDKType;
  delay_blocks: number;
}
/** MsgDelayMessageResponse is a response type for the DelayMessage method. */
export interface MsgDelayMessageResponse {
  /** The id of the created delayed message. */
  id: bigint;
}
export interface MsgDelayMessageResponseProtoMsg {
  typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessageResponse";
  value: Uint8Array;
}
/** MsgDelayMessageResponse is a response type for the DelayMessage method. */
export interface MsgDelayMessageResponseAmino {
  /** The id of the created delayed message. */
  id: string;
}
export interface MsgDelayMessageResponseAminoMsg {
  type: "/dydxprotocol.delaymsg.MsgDelayMessageResponse";
  value: MsgDelayMessageResponseAmino;
}
/** MsgDelayMessageResponse is a response type for the DelayMessage method. */
export interface MsgDelayMessageResponseSDKType {
  id: bigint;
}
function createBaseMsgDelayMessage(): MsgDelayMessage {
  return {
    authority: "",
    msg: Any.fromPartial({}),
    delayBlocks: 0
  };
}
export const MsgDelayMessage = {
  typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessage",
  encode(message: MsgDelayMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    if (message.delayBlocks !== 0) {
      writer.uint32(24).uint32(message.delayBlocks);
    }
    return writer;
  },
  fromJSON(object: any): MsgDelayMessage {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msg: isSet(object.msg) ? Any.fromJSON(object.msg) : undefined,
      delayBlocks: isSet(object.delayBlocks) ? Number(object.delayBlocks) : 0
    };
  },
  fromPartial(object: Partial<MsgDelayMessage>): MsgDelayMessage {
    const message = createBaseMsgDelayMessage();
    message.authority = object.authority ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    message.delayBlocks = object.delayBlocks ?? 0;
    return message;
  },
  fromAmino(object: MsgDelayMessageAmino): MsgDelayMessage {
    return {
      authority: object.authority,
      msg: object?.msg ? Any.fromAmino(object.msg) : undefined,
      delayBlocks: object.delay_blocks
    };
  },
  toAmino(message: MsgDelayMessage): MsgDelayMessageAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.msg = message.msg ? Any.toAmino(message.msg) : undefined;
    obj.delay_blocks = message.delayBlocks;
    return obj;
  },
  fromAminoMsg(object: MsgDelayMessageAminoMsg): MsgDelayMessage {
    return MsgDelayMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelayMessageProtoMsg): MsgDelayMessage {
    return MsgDelayMessage.decode(message.value);
  },
  toProto(message: MsgDelayMessage): Uint8Array {
    return MsgDelayMessage.encode(message).finish();
  },
  toProtoMsg(message: MsgDelayMessage): MsgDelayMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessage",
      value: MsgDelayMessage.encode(message).finish()
    };
  }
};
function createBaseMsgDelayMessageResponse(): MsgDelayMessageResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgDelayMessageResponse = {
  typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessageResponse",
  encode(message: MsgDelayMessageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDelayMessageResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDelayMessageResponse>): MsgDelayMessageResponse {
    const message = createBaseMsgDelayMessageResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDelayMessageResponseAmino): MsgDelayMessageResponse {
    return {
      id: BigInt(object.id)
    };
  },
  toAmino(message: MsgDelayMessageResponse): MsgDelayMessageResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelayMessageResponseAminoMsg): MsgDelayMessageResponse {
    return MsgDelayMessageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelayMessageResponseProtoMsg): MsgDelayMessageResponse {
    return MsgDelayMessageResponse.decode(message.value);
  },
  toProto(message: MsgDelayMessageResponse): Uint8Array {
    return MsgDelayMessageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelayMessageResponse): MsgDelayMessageResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.delaymsg.MsgDelayMessageResponse",
      value: MsgDelayMessageResponse.encode(message).finish()
    };
  }
};