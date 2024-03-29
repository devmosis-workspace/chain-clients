import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * BridgeEventInfo stores information about the most recently processed bridge
 * event.
 */
export interface BridgeEventInfo {
  /**
   * The next event id (the last processed id plus one) of the logs from the
   * Ethereum contract.
   */
  nextId: number;
  /** The Ethereum block height of the most recently processed bridge event. */
  ethBlockHeight: bigint;
}
export interface BridgeEventInfoProtoMsg {
  typeUrl: "/dydxprotocol.bridge.BridgeEventInfo";
  value: Uint8Array;
}
/**
 * BridgeEventInfo stores information about the most recently processed bridge
 * event.
 */
export interface BridgeEventInfoSDKType {
  next_id: number;
  eth_block_height: bigint;
}
function createBaseBridgeEventInfo(): BridgeEventInfo {
  return {
    nextId: 0,
    ethBlockHeight: BigInt(0)
  };
}
export const BridgeEventInfo = {
  typeUrl: "/dydxprotocol.bridge.BridgeEventInfo",
  encode(message: BridgeEventInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextId !== 0) {
      writer.uint32(8).uint32(message.nextId);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    return writer;
  },
  fromJSON(object: any): BridgeEventInfo {
    return {
      nextId: isSet(object.nextId) ? Number(object.nextId) : 0,
      ethBlockHeight: isSet(object.ethBlockHeight) ? BigInt(object.ethBlockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<BridgeEventInfo>): BridgeEventInfo {
    const message = createBaseBridgeEventInfo();
    message.nextId = object.nextId ?? 0;
    message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BridgeEventInfoAmino): BridgeEventInfo {
    const message = createBaseBridgeEventInfo();
    if (object.next_id !== undefined && object.next_id !== null) {
      message.nextId = object.next_id;
    }
    if (object.eth_block_height !== undefined && object.eth_block_height !== null) {
      message.ethBlockHeight = BigInt(object.eth_block_height);
    }
    return message;
  },
  toAmino(message: BridgeEventInfo): BridgeEventInfoAmino {
    const obj: any = {};
    obj.next_id = message.nextId;
    obj.eth_block_height = message.ethBlockHeight ? message.ethBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BridgeEventInfoAminoMsg): BridgeEventInfo {
    return BridgeEventInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: BridgeEventInfoProtoMsg): BridgeEventInfo {
    return BridgeEventInfo.decode(message.value);
  },
  toProto(message: BridgeEventInfo): Uint8Array {
    return BridgeEventInfo.encode(message).finish();
  },
  toProtoMsg(message: BridgeEventInfo): BridgeEventInfoProtoMsg {
    return {
      typeUrl: "/dydxprotocol.bridge.BridgeEventInfo",
      value: BridgeEventInfo.encode(message).finish()
    };
  }
};