import { DelayedMessage, DelayedMessageSDKType } from "./delayed_message";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the delaymsg module's genesis state. */
export interface GenesisState {
  /** delayed_messages is a list of delayed messages. */
  delayedMessages: DelayedMessage[];
  /** next_delayed_message_id is the id to be assigned to next delayed message. */
  nextDelayedMessageId: number;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.delaymsg.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the delaymsg module's genesis state. */
export interface GenesisStateSDKType {
  delayed_messages: DelayedMessageSDKType[];
  next_delayed_message_id: number;
}
function createBaseGenesisState(): GenesisState {
  return {
    delayedMessages: [],
    nextDelayedMessageId: 0
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.delaymsg.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delayedMessages) {
      DelayedMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextDelayedMessageId !== 0) {
      writer.uint32(16).uint32(message.nextDelayedMessageId);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      delayedMessages: Array.isArray(object?.delayedMessages) ? object.delayedMessages.map((e: any) => DelayedMessage.fromJSON(e)) : [],
      nextDelayedMessageId: isSet(object.nextDelayedMessageId) ? Number(object.nextDelayedMessageId) : 0
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.delayedMessages = object.delayedMessages?.map(e => DelayedMessage.fromPartial(e)) || [];
    message.nextDelayedMessageId = object.nextDelayedMessageId ?? 0;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.delayedMessages = object.delayed_messages?.map(e => DelayedMessage.fromAmino(e)) || [];
    if (object.next_delayed_message_id !== undefined && object.next_delayed_message_id !== null) {
      message.nextDelayedMessageId = object.next_delayed_message_id;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.delayedMessages) {
      obj.delayed_messages = message.delayedMessages.map(e => e ? DelayedMessage.toAmino(e) : undefined);
    } else {
      obj.delayed_messages = [];
    }
    obj.next_delayed_message_id = message.nextDelayedMessageId;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/dydxprotocol.delaymsg.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};