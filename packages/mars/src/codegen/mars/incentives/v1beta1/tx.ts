import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
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
  startTime: Timestamp;
  /** EndTime is the timestamp at which this incentives schedule shall finish. */
  endTime: Timestamp;
  /**
   * Amount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule.
   */
  amount: Coin[];
}
export interface MsgCreateScheduleProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule";
  value: Uint8Array;
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleAmino {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority?: string;
  /** StartTime is the timestamp at which this incentives schedule shall begin. */
  start_time?: string;
  /** EndTime is the timestamp at which this incentives schedule shall finish. */
  end_time?: string;
  /**
   * Amount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule.
   */
  amount?: CoinAmino[];
}
export interface MsgCreateScheduleAminoMsg {
  type: "/mars.incentives.v1beta1.MsgCreateSchedule";
  value: MsgCreateScheduleAmino;
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgCreateScheduleSDKType {
  authority: string;
  start_time: TimestampSDKType;
  end_time: TimestampSDKType;
  amount: CoinSDKType[];
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponse {}
export interface MsgCreateScheduleResponseProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.MsgCreateScheduleResponse";
  value: Uint8Array;
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */
export interface MsgCreateScheduleResponseAmino {}
export interface MsgCreateScheduleResponseAminoMsg {
  type: "/mars.incentives.v1beta1.MsgCreateScheduleResponse";
  value: MsgCreateScheduleResponseAmino;
}
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
  ids: bigint[];
}
export interface MsgTerminateSchedulesProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules";
  value: Uint8Array;
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgTerminateSchedulesAmino {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority?: string;
  /**
   * Ids is the array of identifiers of the incentives schedules which are to be
   * terminated.
   */
  ids?: string[];
}
export interface MsgTerminateSchedulesAminoMsg {
  type: "/mars.incentives.v1beta1.MsgTerminateSchedules";
  value: MsgTerminateSchedulesAmino;
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
  ids: bigint[];
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
export interface MsgTerminateSchedulesResponseProtoMsg {
  typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse";
  value: Uint8Array;
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */
export interface MsgTerminateSchedulesResponseAmino {
  /**
   * RefundedAmount is the unreleased incentives that were refunded to the
   * community pool.
   */
  refunded_amount?: CoinAmino[];
}
export interface MsgTerminateSchedulesResponseAminoMsg {
  type: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse";
  value: MsgTerminateSchedulesResponseAmino;
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
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    amount: []
  };
}
export const MsgCreateSchedule = {
  typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
  encode(message: MsgCreateSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgCreateScheduleAmino): MsgCreateSchedule {
    const message = createBaseMsgCreateSchedule();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateSchedule): MsgCreateScheduleAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateScheduleAminoMsg): MsgCreateSchedule {
    return MsgCreateSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateScheduleProtoMsg): MsgCreateSchedule {
    return MsgCreateSchedule.decode(message.value);
  },
  toProto(message: MsgCreateSchedule): Uint8Array {
    return MsgCreateSchedule.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSchedule): MsgCreateScheduleProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.MsgCreateSchedule",
      value: MsgCreateSchedule.encode(message).finish()
    };
  }
};
function createBaseMsgCreateScheduleResponse(): MsgCreateScheduleResponse {
  return {};
}
export const MsgCreateScheduleResponse = {
  typeUrl: "/mars.incentives.v1beta1.MsgCreateScheduleResponse",
  encode(_: MsgCreateScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateScheduleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateScheduleResponse>): MsgCreateScheduleResponse {
    const message = createBaseMsgCreateScheduleResponse();
    return message;
  },
  fromAmino(_: MsgCreateScheduleResponseAmino): MsgCreateScheduleResponse {
    const message = createBaseMsgCreateScheduleResponse();
    return message;
  },
  toAmino(_: MsgCreateScheduleResponse): MsgCreateScheduleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateScheduleResponseAminoMsg): MsgCreateScheduleResponse {
    return MsgCreateScheduleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateScheduleResponseProtoMsg): MsgCreateScheduleResponse {
    return MsgCreateScheduleResponse.decode(message.value);
  },
  toProto(message: MsgCreateScheduleResponse): Uint8Array {
    return MsgCreateScheduleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateScheduleResponse): MsgCreateScheduleResponseProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.MsgCreateScheduleResponse",
      value: MsgCreateScheduleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTerminateSchedules(): MsgTerminateSchedules {
  return {
    authority: "",
    ids: []
  };
}
export const MsgTerminateSchedules = {
  typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
  encode(message: MsgTerminateSchedules, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgTerminateSchedules>): MsgTerminateSchedules {
    const message = createBaseMsgTerminateSchedules();
    message.authority = object.authority ?? "";
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgTerminateSchedulesAmino): MsgTerminateSchedules {
    const message = createBaseMsgTerminateSchedules();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgTerminateSchedules): MsgTerminateSchedulesAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgTerminateSchedulesAminoMsg): MsgTerminateSchedules {
    return MsgTerminateSchedules.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTerminateSchedulesProtoMsg): MsgTerminateSchedules {
    return MsgTerminateSchedules.decode(message.value);
  },
  toProto(message: MsgTerminateSchedules): Uint8Array {
    return MsgTerminateSchedules.encode(message).finish();
  },
  toProtoMsg(message: MsgTerminateSchedules): MsgTerminateSchedulesProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedules",
      value: MsgTerminateSchedules.encode(message).finish()
    };
  }
};
function createBaseMsgTerminateSchedulesResponse(): MsgTerminateSchedulesResponse {
  return {
    refundedAmount: []
  };
}
export const MsgTerminateSchedulesResponse = {
  typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse",
  encode(message: MsgTerminateSchedulesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgTerminateSchedulesResponseAmino): MsgTerminateSchedulesResponse {
    const message = createBaseMsgTerminateSchedulesResponse();
    message.refundedAmount = object.refunded_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTerminateSchedulesResponse): MsgTerminateSchedulesResponseAmino {
    const obj: any = {};
    if (message.refundedAmount) {
      obj.refunded_amount = message.refundedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.refunded_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgTerminateSchedulesResponseAminoMsg): MsgTerminateSchedulesResponse {
    return MsgTerminateSchedulesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTerminateSchedulesResponseProtoMsg): MsgTerminateSchedulesResponse {
    return MsgTerminateSchedulesResponse.decode(message.value);
  },
  toProto(message: MsgTerminateSchedulesResponse): Uint8Array {
    return MsgTerminateSchedulesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTerminateSchedulesResponse): MsgTerminateSchedulesResponseProtoMsg {
    return {
      typeUrl: "/mars.incentives.v1beta1.MsgTerminateSchedulesResponse",
      value: MsgTerminateSchedulesResponse.encode(message).finish()
    };
  }
};