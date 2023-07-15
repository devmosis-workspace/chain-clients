import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { DecCoin, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: Long;
  poolId: Long;
  /** incentive record body holds necessary */
  incentiveRecordBody?: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime?: Duration;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  incentive_id: Long;
  pool_id: Long;
  incentive_record_body?: IncentiveRecordBodySDKType;
  min_uptime?: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin?: DecCoin;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime?: Timestamp;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_coin?: DecCoinSDKType;
  emission_rate: string;
  start_time?: TimestampSDKType;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    incentiveId: Long.UZERO,
    poolId: Long.UZERO,
    incentiveRecordBody: undefined,
    minUptime: undefined
  };
}
export const IncentiveRecord = {
  encode(message: IncentiveRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.incentiveId.isZero()) {
      writer.uint32(8).uint64(message.incentiveId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.incentiveRecordBody !== undefined) {
      IncentiveRecordBody.encode(message.incentiveRecordBody, writer.uint32(34).fork()).ldelim();
    }
    if (message.minUptime !== undefined) {
      Duration.encode(message.minUptime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentiveRecord {
    return {
      incentiveId: isSet(object.incentiveId) ? Long.fromValue(object.incentiveId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      incentiveRecordBody: isSet(object.incentiveRecordBody) ? IncentiveRecordBody.fromJSON(object.incentiveRecordBody) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveRecord>): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    message.incentiveId = object.incentiveId !== undefined && object.incentiveId !== null ? Long.fromValue(object.incentiveId) : Long.UZERO;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.incentiveRecordBody = object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null ? IncentiveRecordBody.fromPartial(object.incentiveRecordBody) : undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  }
};
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingCoin: undefined,
    emissionRate: "",
    startTime: undefined
  };
}
export const IncentiveRecordBody = {
  encode(message: IncentiveRecordBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remainingCoin !== undefined) {
      DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(message.emissionRate);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IncentiveRecordBody {
    return {
      remainingCoin: isSet(object.remainingCoin) ? DecCoin.fromJSON(object.remainingCoin) : undefined,
      emissionRate: isSet(object.emissionRate) ? String(object.emissionRate) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveRecordBody>): IncentiveRecordBody {
    const message = createBaseIncentiveRecordBody();
    message.remainingCoin = object.remainingCoin !== undefined && object.remainingCoin !== null ? DecCoin.fromPartial(object.remainingCoin) : undefined;
    message.emissionRate = object.emissionRate ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    return message;
  }
};