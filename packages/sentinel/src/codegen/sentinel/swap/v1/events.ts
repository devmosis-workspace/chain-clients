import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface EventSwap {
  txHash: Uint8Array;
  receiver: string;
}
export interface EventSwapProtoMsg {
  typeUrl: "/sentinel.swap.v1.EventSwap";
  value: Uint8Array;
}
export interface EventSwapAmino {
  tx_hash?: string;
  receiver?: string;
}
export interface EventSwapAminoMsg {
  type: "/sentinel.swap.v1.EventSwap";
  value: EventSwapAmino;
}
export interface EventSwapSDKType {
  tx_hash: Uint8Array;
  receiver: string;
}
function createBaseEventSwap(): EventSwap {
  return {
    txHash: new Uint8Array(),
    receiver: ""
  };
}
export const EventSwap = {
  typeUrl: "/sentinel.swap.v1.EventSwap",
  encode(message: EventSwap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): EventSwap {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.txHash = object.txHash ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: EventSwapAmino): EventSwap {
    const message = createBaseEventSwap();
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: EventSwap): EventSwapAmino {
    const obj: any = {};
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: EventSwapAminoMsg): EventSwap {
    return EventSwap.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSwapProtoMsg): EventSwap {
    return EventSwap.decode(message.value);
  },
  toProto(message: EventSwap): Uint8Array {
    return EventSwap.encode(message).finish();
  },
  toProtoMsg(message: EventSwap): EventSwapProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.EventSwap",
      value: EventSwap.encode(message).finish()
    };
  }
};