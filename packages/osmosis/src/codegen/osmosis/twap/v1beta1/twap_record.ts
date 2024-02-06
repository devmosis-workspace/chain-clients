import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  poolId: bigint;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: bigint;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time: Timestamp;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0LastSpotPrice: string;
  p1LastSpotPrice: string;
  p0ArithmeticTwapAccumulator: string;
  p1ArithmeticTwapAccumulator: string;
  geometricTwapAccumulator: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime: Timestamp;
}
export interface TwapRecordProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.TwapRecord";
  value: Uint8Array;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordAmino {
  pool_id?: string;
  /** Lexicographically smaller denom of the pair */
  asset0_denom?: string;
  /** Lexicographically larger denom of the pair */
  asset1_denom?: string;
  /** height this record corresponds to, for debugging purposes */
  height?: string;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time?: string;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0_last_spot_price?: string;
  p1_last_spot_price?: string;
  p0_arithmetic_twap_accumulator?: string;
  p1_arithmetic_twap_accumulator?: string;
  geometric_twap_accumulator?: string;
  /**
   * This field contains the time in which the last spot price error occurred.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  last_error_time?: string;
}
export interface TwapRecordAminoMsg {
  type: "osmosis/twap/twap-record";
  value: TwapRecordAmino;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
  pool_id: bigint;
  asset0_denom: string;
  asset1_denom: string;
  height: bigint;
  time: TimestampSDKType;
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  last_error_time: TimestampSDKType;
}
function createBaseTwapRecord(): TwapRecord {
  return {
    poolId: BigInt(0),
    asset0Denom: "",
    asset1Denom: "",
    height: BigInt(0),
    time: Timestamp.fromPartial({}),
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: Timestamp.fromPartial({})
  };
}
export const TwapRecord = {
  typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
  encode(message: TwapRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.p0LastSpotPrice, 18).atomics);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.p1LastSpotPrice, 18).atomics);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.p0ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.p1ArithmeticTwapAccumulator, 18).atomics);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.geometricTwapAccumulator, 18).atomics);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(message.lastErrorTime, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TwapRecord {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      asset0Denom: isSet(object.asset0Denom) ? String(object.asset0Denom) : "",
      asset1Denom: isSet(object.asset1Denom) ? String(object.asset1Denom) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      p0LastSpotPrice: isSet(object.p0LastSpotPrice) ? String(object.p0LastSpotPrice) : "",
      p1LastSpotPrice: isSet(object.p1LastSpotPrice) ? String(object.p1LastSpotPrice) : "",
      p0ArithmeticTwapAccumulator: isSet(object.p0ArithmeticTwapAccumulator) ? String(object.p0ArithmeticTwapAccumulator) : "",
      p1ArithmeticTwapAccumulator: isSet(object.p1ArithmeticTwapAccumulator) ? String(object.p1ArithmeticTwapAccumulator) : "",
      geometricTwapAccumulator: isSet(object.geometricTwapAccumulator) ? String(object.geometricTwapAccumulator) : "",
      lastErrorTime: isSet(object.lastErrorTime) ? fromJsonTimestamp(object.lastErrorTime) : undefined
    };
  },
  fromPartial(object: Partial<TwapRecord>): TwapRecord {
    const message = createBaseTwapRecord();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
    message.lastErrorTime = object.lastErrorTime !== undefined && object.lastErrorTime !== null ? Timestamp.fromPartial(object.lastErrorTime) : undefined;
    return message;
  },
  fromAmino(object: TwapRecordAmino): TwapRecord {
    const message = createBaseTwapRecord();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.asset0_denom !== undefined && object.asset0_denom !== null) {
      message.asset0Denom = object.asset0_denom;
    }
    if (object.asset1_denom !== undefined && object.asset1_denom !== null) {
      message.asset1Denom = object.asset1_denom;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.p0_last_spot_price !== undefined && object.p0_last_spot_price !== null) {
      message.p0LastSpotPrice = object.p0_last_spot_price;
    }
    if (object.p1_last_spot_price !== undefined && object.p1_last_spot_price !== null) {
      message.p1LastSpotPrice = object.p1_last_spot_price;
    }
    if (object.p0_arithmetic_twap_accumulator !== undefined && object.p0_arithmetic_twap_accumulator !== null) {
      message.p0ArithmeticTwapAccumulator = object.p0_arithmetic_twap_accumulator;
    }
    if (object.p1_arithmetic_twap_accumulator !== undefined && object.p1_arithmetic_twap_accumulator !== null) {
      message.p1ArithmeticTwapAccumulator = object.p1_arithmetic_twap_accumulator;
    }
    if (object.geometric_twap_accumulator !== undefined && object.geometric_twap_accumulator !== null) {
      message.geometricTwapAccumulator = object.geometric_twap_accumulator;
    }
    if (object.last_error_time !== undefined && object.last_error_time !== null) {
      message.lastErrorTime = Timestamp.fromAmino(object.last_error_time);
    }
    return message;
  },
  toAmino(message: TwapRecord): TwapRecordAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.asset0_denom = message.asset0Denom;
    obj.asset1_denom = message.asset1Denom;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.p0_last_spot_price = message.p0LastSpotPrice;
    obj.p1_last_spot_price = message.p1LastSpotPrice;
    obj.p0_arithmetic_twap_accumulator = message.p0ArithmeticTwapAccumulator;
    obj.p1_arithmetic_twap_accumulator = message.p1ArithmeticTwapAccumulator;
    obj.geometric_twap_accumulator = message.geometricTwapAccumulator;
    obj.last_error_time = message.lastErrorTime ? Timestamp.toAmino(message.lastErrorTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: TwapRecordAminoMsg): TwapRecord {
    return TwapRecord.fromAmino(object.value);
  },
  toAminoMsg(message: TwapRecord): TwapRecordAminoMsg {
    return {
      type: "osmosis/twap/twap-record",
      value: TwapRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: TwapRecordProtoMsg): TwapRecord {
    return TwapRecord.decode(message.value);
  },
  toProto(message: TwapRecord): Uint8Array {
    return TwapRecord.encode(message).finish();
  },
  toProtoMsg(message: TwapRecord): TwapRecordProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
      value: TwapRecord.encode(message).finish()
    };
  }
};