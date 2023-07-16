import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Schedule defines the parameters of an incentives releasing schedule */
export interface Schedule {
  /** Id is the identifier of this incentives schedule */
  id: Long;
  /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */
  startTime?: Timestamp;
  /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */
  endTime?: Timestamp;
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
/** Schedule defines the parameters of an incentives releasing schedule */
export interface ScheduleSDKType {
  id: Long;
  start_time?: TimestampSDKType;
  end_time?: TimestampSDKType;
  total_amount: CoinSDKType[];
  released_amount: CoinSDKType[];
}
function createBaseSchedule(): Schedule {
  return {
    id: Long.UZERO,
    startTime: undefined,
    endTime: undefined,
    totalAmount: [],
    releasedAmount: []
  };
}
export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      totalAmount: Array.isArray(object?.totalAmount) ? object.totalAmount.map((e: any) => Coin.fromJSON(e)) : [],
      releasedAmount: Array.isArray(object?.releasedAmount) ? object.releasedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.totalAmount = object.totalAmount?.map(e => Coin.fromPartial(e)) || [];
    message.releasedAmount = object.releasedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};