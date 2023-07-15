import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
  poolId: Long;
  /** Lexicographically smaller denom of the pair */
  asset0Denom: string;
  /** Lexicographically larger denom of the pair */
  asset1Denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: Long;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time?: Timestamp;
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
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  lastErrorTime?: Timestamp;
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
  pool_id: Long;
  asset0_denom: string;
  asset1_denom: string;
  height: Long;
  time?: TimestampSDKType;
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  last_error_time?: TimestampSDKType;
}
function createBaseTwapRecord(): TwapRecord {
  return {
    poolId: Long.UZERO,
    asset0Denom: "",
    asset1Denom: "",
    height: Long.ZERO,
    time: undefined,
    p0LastSpotPrice: "",
    p1LastSpotPrice: "",
    p0ArithmeticTwapAccumulator: "",
    p1ArithmeticTwapAccumulator: "",
    geometricTwapAccumulator: "",
    lastErrorTime: undefined
  };
}
export const TwapRecord = {
  encode(message: TwapRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.asset0Denom !== "") {
      writer.uint32(18).string(message.asset0Denom);
    }
    if (message.asset1Denom !== "") {
      writer.uint32(26).string(message.asset1Denom);
    }
    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(42).fork()).ldelim();
    }
    if (message.p0LastSpotPrice !== "") {
      writer.uint32(50).string(message.p0LastSpotPrice);
    }
    if (message.p1LastSpotPrice !== "") {
      writer.uint32(58).string(message.p1LastSpotPrice);
    }
    if (message.p0ArithmeticTwapAccumulator !== "") {
      writer.uint32(66).string(message.p0ArithmeticTwapAccumulator);
    }
    if (message.p1ArithmeticTwapAccumulator !== "") {
      writer.uint32(74).string(message.p1ArithmeticTwapAccumulator);
    }
    if (message.geometricTwapAccumulator !== "") {
      writer.uint32(82).string(message.geometricTwapAccumulator);
    }
    if (message.lastErrorTime !== undefined) {
      Timestamp.encode(message.lastErrorTime, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TwapRecord {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      asset0Denom: isSet(object.asset0Denom) ? String(object.asset0Denom) : "",
      asset1Denom: isSet(object.asset1Denom) ? String(object.asset1Denom) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
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
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.asset0Denom = object.asset0Denom ?? "";
    message.asset1Denom = object.asset1Denom ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.p0LastSpotPrice = object.p0LastSpotPrice ?? "";
    message.p1LastSpotPrice = object.p1LastSpotPrice ?? "";
    message.p0ArithmeticTwapAccumulator = object.p0ArithmeticTwapAccumulator ?? "";
    message.p1ArithmeticTwapAccumulator = object.p1ArithmeticTwapAccumulator ?? "";
    message.geometricTwapAccumulator = object.geometricTwapAccumulator ?? "";
    message.lastErrorTime = object.lastErrorTime !== undefined && object.lastErrorTime !== null ? Timestamp.fromPartial(object.lastErrorTime) : undefined;
    return message;
  }
};