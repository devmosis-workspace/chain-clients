import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** DelayedMessage is a message that is delayed until a certain block height. */
export interface DelayedMessage {
  /** The ID of the delayed message. */
  id: number;
  /** The message to be executed. */
  msg: Any;
  /** The block height at which the message should be executed. */
  blockHeight: number;
}
export interface DelayedMessageProtoMsg {
  typeUrl: "/dydxprotocol.delaymsg.DelayedMessage";
  value: Uint8Array;
}
/** DelayedMessage is a message that is delayed until a certain block height. */
export interface DelayedMessageAmino {
  /** The ID of the delayed message. */
  id: number;
  /** The message to be executed. */
  msg?: AnyAmino;
  /** The block height at which the message should be executed. */
  block_height: number;
}
export interface DelayedMessageAminoMsg {
  type: "/dydxprotocol.delaymsg.DelayedMessage";
  value: DelayedMessageAmino;
}
/** DelayedMessage is a message that is delayed until a certain block height. */
export interface DelayedMessageSDKType {
  id: number;
  msg: AnySDKType;
  block_height: number;
}
function createBaseDelayedMessage(): DelayedMessage {
  return {
    id: 0,
    msg: Any.fromPartial({}),
    blockHeight: 0
  };
}
export const DelayedMessage = {
  typeUrl: "/dydxprotocol.delaymsg.DelayedMessage",
  encode(message: DelayedMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).uint32(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): DelayedMessage {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      msg: isSet(object.msg) ? Any.fromJSON(object.msg) : undefined,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0
    };
  },
  fromPartial(object: Partial<DelayedMessage>): DelayedMessage {
    const message = createBaseDelayedMessage();
    message.id = object.id ?? 0;
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    message.blockHeight = object.blockHeight ?? 0;
    return message;
  },
  fromAmino(object: DelayedMessageAmino): DelayedMessage {
    return {
      id: object.id,
      msg: object?.msg ? Any.fromAmino(object.msg) : undefined,
      blockHeight: object.block_height
    };
  },
  toAmino(message: DelayedMessage): DelayedMessageAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.msg = message.msg ? Any.toAmino(message.msg) : undefined;
    obj.block_height = message.blockHeight;
    return obj;
  },
  fromAminoMsg(object: DelayedMessageAminoMsg): DelayedMessage {
    return DelayedMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: DelayedMessageProtoMsg): DelayedMessage {
    return DelayedMessage.decode(message.value);
  },
  toProto(message: DelayedMessage): Uint8Array {
    return DelayedMessage.encode(message).finish();
  },
  toProtoMsg(message: DelayedMessage): DelayedMessageProtoMsg {
    return {
      typeUrl: "/dydxprotocol.delaymsg.DelayedMessage",
      value: DelayedMessage.encode(message).finish()
    };
  }
};