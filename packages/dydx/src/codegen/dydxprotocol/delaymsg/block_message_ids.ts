import { BinaryWriter } from "../../binary";
/**
 * BlockMessageIds stores the id of each message that should be processed at a
 * given block height.
 */
export interface BlockMessageIds {
  /**
   * ids stores a list of DelayedMessage ids that should be processed at a given
   * block height.
   */
  ids: number[];
}
export interface BlockMessageIdsProtoMsg {
  typeUrl: "/dydxprotocol.delaymsg.BlockMessageIds";
  value: Uint8Array;
}
/**
 * BlockMessageIds stores the id of each message that should be processed at a
 * given block height.
 */
export interface BlockMessageIdsSDKType {
  ids: number[];
}
function createBaseBlockMessageIds(): BlockMessageIds {
  return {
    ids: []
  };
}
export const BlockMessageIds = {
  typeUrl: "/dydxprotocol.delaymsg.BlockMessageIds",
  encode(message: BlockMessageIds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): BlockMessageIds {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: Partial<BlockMessageIds>): BlockMessageIds {
    const message = createBaseBlockMessageIds();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BlockMessageIdsAmino): BlockMessageIds {
    const message = createBaseBlockMessageIds();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BlockMessageIds): BlockMessageIdsAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: BlockMessageIdsAminoMsg): BlockMessageIds {
    return BlockMessageIds.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockMessageIdsProtoMsg): BlockMessageIds {
    return BlockMessageIds.decode(message.value);
  },
  toProto(message: BlockMessageIds): Uint8Array {
    return BlockMessageIds.encode(message).finish();
  },
  toProtoMsg(message: BlockMessageIds): BlockMessageIdsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.delaymsg.BlockMessageIds",
      value: BlockMessageIds.encode(message).finish()
    };
  }
};