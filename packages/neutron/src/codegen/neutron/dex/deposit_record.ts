import { PairID, PairIDAmino, PairIDSDKType } from "./pair_id";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface DepositRecord {
  pairId?: PairID;
  sharesOwned: string;
  centerTickIndex: bigint;
  lowerTickIndex: bigint;
  upperTickIndex: bigint;
  fee: bigint;
}
export interface DepositRecordProtoMsg {
  typeUrl: "/neutron.dex.DepositRecord";
  value: Uint8Array;
}
export interface DepositRecordAmino {
  pair_id?: PairIDAmino;
  shares_owned?: string;
  center_tick_index?: string;
  lower_tick_index?: string;
  upper_tick_index?: string;
  fee?: string;
}
export interface DepositRecordAminoMsg {
  type: "/neutron.dex.DepositRecord";
  value: DepositRecordAmino;
}
export interface DepositRecordSDKType {
  pair_id?: PairIDSDKType;
  shares_owned: string;
  center_tick_index: bigint;
  lower_tick_index: bigint;
  upper_tick_index: bigint;
  fee: bigint;
}
function createBaseDepositRecord(): DepositRecord {
  return {
    pairId: undefined,
    sharesOwned: "",
    centerTickIndex: BigInt(0),
    lowerTickIndex: BigInt(0),
    upperTickIndex: BigInt(0),
    fee: BigInt(0)
  };
}
export const DepositRecord = {
  typeUrl: "/neutron.dex.DepositRecord",
  encode(message: DepositRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOwned !== "") {
      writer.uint32(18).string(message.sharesOwned);
    }
    if (message.centerTickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.centerTickIndex);
    }
    if (message.lowerTickIndex !== BigInt(0)) {
      writer.uint32(32).int64(message.lowerTickIndex);
    }
    if (message.upperTickIndex !== BigInt(0)) {
      writer.uint32(40).int64(message.upperTickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(48).uint64(message.fee);
    }
    return writer;
  },
  fromJSON(object: any): DepositRecord {
    return {
      pairId: isSet(object.pairId) ? PairID.fromJSON(object.pairId) : undefined,
      sharesOwned: isSet(object.sharesOwned) ? String(object.sharesOwned) : "",
      centerTickIndex: isSet(object.centerTickIndex) ? BigInt(object.centerTickIndex.toString()) : BigInt(0),
      lowerTickIndex: isSet(object.lowerTickIndex) ? BigInt(object.lowerTickIndex.toString()) : BigInt(0),
      upperTickIndex: isSet(object.upperTickIndex) ? BigInt(object.upperTickIndex.toString()) : BigInt(0),
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.pairId = object.pairId !== undefined && object.pairId !== null ? PairID.fromPartial(object.pairId) : undefined;
    message.sharesOwned = object.sharesOwned ?? "";
    message.centerTickIndex = object.centerTickIndex !== undefined && object.centerTickIndex !== null ? BigInt(object.centerTickIndex.toString()) : BigInt(0);
    message.lowerTickIndex = object.lowerTickIndex !== undefined && object.lowerTickIndex !== null ? BigInt(object.lowerTickIndex.toString()) : BigInt(0);
    message.upperTickIndex = object.upperTickIndex !== undefined && object.upperTickIndex !== null ? BigInt(object.upperTickIndex.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DepositRecordAmino): DepositRecord {
    const message = createBaseDepositRecord();
    if (object.pair_id !== undefined && object.pair_id !== null) {
      message.pairId = PairID.fromAmino(object.pair_id);
    }
    if (object.shares_owned !== undefined && object.shares_owned !== null) {
      message.sharesOwned = object.shares_owned;
    }
    if (object.center_tick_index !== undefined && object.center_tick_index !== null) {
      message.centerTickIndex = BigInt(object.center_tick_index);
    }
    if (object.lower_tick_index !== undefined && object.lower_tick_index !== null) {
      message.lowerTickIndex = BigInt(object.lower_tick_index);
    }
    if (object.upper_tick_index !== undefined && object.upper_tick_index !== null) {
      message.upperTickIndex = BigInt(object.upper_tick_index);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    return message;
  },
  toAmino(message: DepositRecord): DepositRecordAmino {
    const obj: any = {};
    obj.pair_id = message.pairId ? PairID.toAmino(message.pairId) : undefined;
    obj.shares_owned = message.sharesOwned;
    obj.center_tick_index = message.centerTickIndex ? message.centerTickIndex.toString() : undefined;
    obj.lower_tick_index = message.lowerTickIndex ? message.lowerTickIndex.toString() : undefined;
    obj.upper_tick_index = message.upperTickIndex ? message.upperTickIndex.toString() : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositRecordAminoMsg): DepositRecord {
    return DepositRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositRecordProtoMsg): DepositRecord {
    return DepositRecord.decode(message.value);
  },
  toProto(message: DepositRecord): Uint8Array {
    return DepositRecord.encode(message).finish();
  },
  toProtoMsg(message: DepositRecord): DepositRecordProtoMsg {
    return {
      typeUrl: "/neutron.dex.DepositRecord",
      value: DepositRecord.encode(message).finish()
    };
  }
};