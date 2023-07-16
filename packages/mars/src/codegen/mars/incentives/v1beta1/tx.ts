import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateSchedule {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /** StartTime is the timestamp at which this incentives schedule shall begin. */
  startTime?: Timestamp;
  /** EndTime is the timestamp at which this incentives schedule shall finish. */
  endTime?: Timestamp;
  /**
   * Amount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule.
   */
  amount: Coin[];
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleSDKType {
  authority: string;
  start_time?: TimestampSDKType;
  end_time?: TimestampSDKType;
  amount: CoinSDKType[];
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponse {}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponseSDKType {}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedules {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /**
   * Ids is the array of identifiers of the incentives schedules which are to be
   * terminated.
   */
  ids: Long[];
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedulesSDKType {
  authority: string;
  ids: Long[];
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponse {
  /**
   * RefundedAmount is the unreleased incentives that were refunded to the
   * community pool.
   */
  refundedAmount: Coin[];
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponseSDKType {
  refunded_amount: CoinSDKType[];
}
function createBaseMsgCreateSchedule(): MsgCreateSchedule {
  return {
    authority: "",
    startTime: undefined,
    endTime: undefined,
    amount: []
  };
}
export const MsgCreateSchedule = {
  encode(message: MsgCreateSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSchedule {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateSchedule>): MsgCreateSchedule {
    const message = createBaseMsgCreateSchedule();
    message.authority = object.authority ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgCreateScheduleResponse(): MsgCreateScheduleResponse {
  return {};
}
export const MsgCreateScheduleResponse = {
  encode(_: MsgCreateScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateScheduleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateScheduleResponse>): MsgCreateScheduleResponse {
    const message = createBaseMsgCreateScheduleResponse();
    return message;
  }
};
function createBaseMsgTerminateSchedules(): MsgTerminateSchedules {
  return {
    authority: "",
    ids: []
  };
}
export const MsgTerminateSchedules = {
  encode(message: MsgTerminateSchedules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgTerminateSchedules {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<MsgTerminateSchedules>): MsgTerminateSchedules {
    const message = createBaseMsgTerminateSchedules();
    message.authority = object.authority ?? "";
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgTerminateSchedulesResponse(): MsgTerminateSchedulesResponse {
  return {
    refundedAmount: []
  };
}
export const MsgTerminateSchedulesResponse = {
  encode(message: MsgTerminateSchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.refundedAmount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgTerminateSchedulesResponse {
    return {
      refundedAmount: Array.isArray(object?.refundedAmount) ? object.refundedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgTerminateSchedulesResponse>): MsgTerminateSchedulesResponse {
    const message = createBaseMsgTerminateSchedulesResponse();
    message.refundedAmount = object.refundedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};