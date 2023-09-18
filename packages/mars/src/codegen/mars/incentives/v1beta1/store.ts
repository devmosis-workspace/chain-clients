import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** Schedule defines the parameters of an incentives releasing schedule */
export interface Schedule {
  /** Id is the identifier of this incentives schedule */
  id: bigint;
  /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
  startTime: Timestamp;
  /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
  endTime: Timestamp;
  /**
   * TotalAmount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule
   */
  totalAmount: Coin[];
  /**
   * ReleasedAmount is the amount of coins that have already been released to
   * the stakers as part of this incentives schedule
   */
  releasedAmount: Coin[];
}
export interface ScheduleProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.Schedule";
  value: Uint8Array;
}
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleAmino {
  /** Id is the identifier of this incentives schedule */
  id: string;
  /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
  start_time?: TimestampAmino;
  /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
  end_time?: TimestampAmino;
  /**
   * TotalAmount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule
   */
  total_amount: CoinAmino[];
  /**
   * ReleasedAmount is the amount of coins that have already been released to
   * the stakers as part of this incentives schedule
   */
  released_amount: CoinAmino[];
}
export interface ScheduleAminoMsg {
  type: "/mars.incentives.v1beta1.Schedule";
  value: ScheduleAmino;
}
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleSDKType {
  id: bigint;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
  total_amount: CoinSDKType[];
  released_amount: CoinSDKType[];
}
function createBaseSchedule(): Schedule {
  return {
    id: BigInt(0),
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    totalAmount: [],
    releasedAmount: []
  };
}
export const Schedule = {
  typeUrl: "/mars.incentives.v1beta1.Schedule",
  encode(message: Schedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalAmount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.releasedAmount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Schedule {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      totalAmount: Array.isArray(object?.totalAmount) ? object.totalAmount.map((e: any) => Coin.fromJSON(e)) : [],
      releasedAmount: Array.isArray(object?.releasedAmount) ? object.releasedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.totalAmount = object.totalAmount?.map(e => Coin.fromPartial(e)) || [];
    message.releasedAmount = object.releasedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ScheduleAmino): Schedule {
    return {
      id: BigInt(object.id),
      startTime: object.start_time,
      endTime: object.end_time,
      totalAmount: Array.isArray(object?.total_amount) ? object.total_amount.map((e: any) => Coin.fromAmino(e)) : [],
      releasedAmount: Array.isArray(object?.released_amount) ? object.released_amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Schedule): ScheduleAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.start_time = message.startTime;
    obj.end_time = message.endTime;
    if (message.totalAmount) {
      obj.total_amount = message.totalAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_amount = [];
    }
    if (message.releasedAmount) {
      obj.released_amount = message.releasedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.released_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: ScheduleAminoMsg): Schedule {
    return Schedule.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduleProtoMsg): Schedule {
    return Schedule.decode(message.value);
  },
  toProto(message: Schedule): Uint8Array {
    return Schedule.encode(message).finish();
  },
  toProtoMsg(message: Schedule): ScheduleProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.Schedule",
      value: Schedule.encode(message).finish()
    };
  }
};