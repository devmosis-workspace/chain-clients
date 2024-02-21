import { PairID, PairIDAmino, PairIDSDKType } from "./pair_id";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface PoolMetadata {
  id: bigint;
  tick: bigint;
  fee: bigint;
  pairId?: PairID;
}
export interface PoolMetadataProtoMsg {
  typeUrl: "/neutron.dex.PoolMetadata";
  value: Uint8Array;
}
export interface PoolMetadataAmino {
  id?: string;
  tick?: string;
  fee?: string;
  pair_id?: PairIDAmino;
}
export interface PoolMetadataAminoMsg {
  type: "/neutron.dex.PoolMetadata";
  value: PoolMetadataAmino;
}
export interface PoolMetadataSDKType {
  id: bigint;
  tick: bigint;
  fee: bigint;
  pair_id?: PairIDSDKType;
}
function createBasePoolMetadata(): PoolMetadata {
  return {
    id: BigInt(0),
    tick: BigInt(0),
    fee: BigInt(0),
    pairId: undefined
  };
}
export const PoolMetadata = {
  typeUrl: "/neutron.dex.PoolMetadata",
  encode(message: PoolMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tick !== BigInt(0)) {
      writer.uint32(16).int64(message.tick);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolMetadata {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      tick: isSet(object.tick) ? BigInt(object.tick.toString()) : BigInt(0),
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0),
      pairId: isSet(object.pairId) ? PairID.fromJSON(object.pairId) : undefined
    };
  },
  fromPartial(object: Partial<PoolMetadata>): PoolMetadata {
    const message = createBasePoolMetadata();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.tick = object.tick !== undefined && object.tick !== null ? BigInt(object.tick.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    message.pairId = object.pairId !== undefined && object.pairId !== null ? PairID.fromPartial(object.pairId) : undefined;
    return message;
  },
  fromAmino(object: PoolMetadataAmino): PoolMetadata {
    const message = createBasePoolMetadata();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.tick !== undefined && object.tick !== null) {
      message.tick = BigInt(object.tick);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = PairID.fromAmino(object.pair_id);
    }
    return message;
  },
  toAmino(message: PoolMetadata): PoolMetadataAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.tick = message.tick ? message.tick.toString() : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    obj.pair_id = message.pairId ? PairID.toAmino(message.pairId) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolMetadataAminoMsg): PoolMetadata {
    return PoolMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolMetadataProtoMsg): PoolMetadata {
    return PoolMetadata.decode(message.value);
  },
  toProto(message: PoolMetadata): Uint8Array {
    return PoolMetadata.encode(message).finish();
  },
  toProtoMsg(message: PoolMetadata): PoolMetadataProtoMsg {
    return {
      typeUrl: "/neutron.dex.PoolMetadata",
      value: PoolMetadata.encode(message).finish()
    };
  }
};