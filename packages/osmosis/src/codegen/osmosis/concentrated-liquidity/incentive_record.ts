import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecord {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentiveId: bigint;
  poolId: bigint;
  /** incentive record body holds necessary */
  incentiveRecordBody: IncentiveRecordBody;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  minUptime: Duration;
}
export interface IncentiveRecordProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
  value: Uint8Array;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordAmino {
  /** incentive_id is the id uniquely identifying this incentive record. */
  incentive_id: string;
  pool_id: string;
  /** incentive record body holds necessary */
  incentive_record_body?: IncentiveRecordBodyAmino;
  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   */
  min_uptime?: DurationAmino;
}
export interface IncentiveRecordAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record";
  value: IncentiveRecordAmino;
}
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 */
export interface IncentiveRecordSDKType {
  incentive_id: bigint;
  pool_id: bigint;
  incentive_record_body: IncentiveRecordBodySDKType;
  min_uptime: DurationSDKType;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBody {
  /** remaining_coin is the total amount of incentives to be distributed */
  remainingCoin: DecCoin;
  /** emission_rate is the incentive emission rate per second */
  emissionRate: string;
  /** start_time is the time when the incentive starts distributing */
  startTime: Timestamp;
}
export interface IncentiveRecordBodyProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
  value: Uint8Array;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodyAmino {
  /** remaining_coin is the total amount of incentives to be distributed */
  remaining_coin?: DecCoinAmino;
  /** emission_rate is the incentive emission rate per second */
  emission_rate: string;
  /** start_time is the time when the incentive starts distributing */
  start_time?: TimestampAmino;
}
export interface IncentiveRecordBodyAminoMsg {
  type: "osmosis/concentratedliquidity/incentive-record-body";
  value: IncentiveRecordBodyAmino;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 */
export interface IncentiveRecordBodySDKType {
  remaining_coin: DecCoinSDKType;
  emission_rate: string;
  start_time: TimestampSDKType;
}
function createBaseIncentiveRecord(): IncentiveRecord {
  return {
    incentiveId: BigInt(0),
    poolId: BigInt(0),
    incentiveRecordBody: IncentiveRecordBody.fromPartial({}),
    minUptime: Duration.fromPartial({})
  };
}
export const IncentiveRecord = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
  encode(message: IncentiveRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveId !== BigInt(0)) {
      writer.uint32(8).uint64(message.incentiveId);
    }
    if (message.poolId !== BigInt(0)) {
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
      incentiveId: isSet(object.incentiveId) ? BigInt(object.incentiveId.toString()) : BigInt(0),
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      incentiveRecordBody: isSet(object.incentiveRecordBody) ? IncentiveRecordBody.fromJSON(object.incentiveRecordBody) : undefined,
      minUptime: isSet(object.minUptime) ? Duration.fromJSON(object.minUptime) : undefined
    };
  },
  fromPartial(object: Partial<IncentiveRecord>): IncentiveRecord {
    const message = createBaseIncentiveRecord();
    message.incentiveId = object.incentiveId !== undefined && object.incentiveId !== null ? BigInt(object.incentiveId.toString()) : BigInt(0);
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.incentiveRecordBody = object.incentiveRecordBody !== undefined && object.incentiveRecordBody !== null ? IncentiveRecordBody.fromPartial(object.incentiveRecordBody) : undefined;
    message.minUptime = object.minUptime !== undefined && object.minUptime !== null ? Duration.fromPartial(object.minUptime) : undefined;
    return message;
  },
  fromAmino(object: IncentiveRecordAmino): IncentiveRecord {
    return {
      incentiveId: BigInt(object.incentive_id),
      poolId: BigInt(object.pool_id),
      incentiveRecordBody: object?.incentive_record_body ? IncentiveRecordBody.fromAmino(object.incentive_record_body) : undefined,
      minUptime: object?.min_uptime ? Duration.fromAmino(object.min_uptime) : undefined
    };
  },
  toAmino(message: IncentiveRecord): IncentiveRecordAmino {
    const obj: any = {};
    obj.incentive_id = message.incentiveId ? message.incentiveId.toString() : undefined;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.incentive_record_body = message.incentiveRecordBody ? IncentiveRecordBody.toAmino(message.incentiveRecordBody) : undefined;
    obj.min_uptime = message.minUptime ? Duration.toAmino(message.minUptime) : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordAminoMsg): IncentiveRecord {
    return IncentiveRecord.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecord): IncentiveRecordAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record",
      value: IncentiveRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordProtoMsg): IncentiveRecord {
    return IncentiveRecord.decode(message.value);
  },
  toProto(message: IncentiveRecord): Uint8Array {
    return IncentiveRecord.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecord): IncentiveRecordProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecord",
      value: IncentiveRecord.encode(message).finish()
    };
  }
};
function createBaseIncentiveRecordBody(): IncentiveRecordBody {
  return {
    remainingCoin: DecCoin.fromPartial({}),
    emissionRate: "",
    startTime: Timestamp.fromPartial({})
  };
}
export const IncentiveRecordBody = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
  encode(message: IncentiveRecordBody, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remainingCoin !== undefined) {
      DecCoin.encode(message.remainingCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.emissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.emissionRate, 18).atomics);
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
  },
  fromAmino(object: IncentiveRecordBodyAmino): IncentiveRecordBody {
    return {
      remainingCoin: object?.remaining_coin ? DecCoin.fromAmino(object.remaining_coin) : undefined,
      emissionRate: object.emission_rate,
      startTime: object.start_time
    };
  },
  toAmino(message: IncentiveRecordBody): IncentiveRecordBodyAmino {
    const obj: any = {};
    obj.remaining_coin = message.remainingCoin ? DecCoin.toAmino(message.remainingCoin) : undefined;
    obj.emission_rate = message.emissionRate;
    obj.start_time = message.startTime;
    return obj;
  },
  fromAminoMsg(object: IncentiveRecordBodyAminoMsg): IncentiveRecordBody {
    return IncentiveRecordBody.fromAmino(object.value);
  },
  toAminoMsg(message: IncentiveRecordBody): IncentiveRecordBodyAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/incentive-record-body",
      value: IncentiveRecordBody.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentiveRecordBodyProtoMsg): IncentiveRecordBody {
    return IncentiveRecordBody.decode(message.value);
  },
  toProto(message: IncentiveRecordBody): Uint8Array {
    return IncentiveRecordBody.encode(message).finish();
  },
  toProtoMsg(message: IncentiveRecordBody): IncentiveRecordBodyProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody",
      value: IncentiveRecordBody.encode(message).finish()
    };
  }
};