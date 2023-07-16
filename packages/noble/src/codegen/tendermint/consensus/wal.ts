import { Message, MessageSDKType } from "./types";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { EventDataRoundState, EventDataRoundStateSDKType } from "../types/events";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg?: Message;
  peerId: string;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoSDKType {
  msg?: MessageSDKType;
  peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration?: Duration;
  height: Long;
  round: number;
  step: number;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoSDKType {
  duration?: DurationSDKType;
  height: Long;
  round: number;
  step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: Long;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightSDKType {
  height: Long;
}
export interface WALMessage {
  eventDataRoundState?: EventDataRoundState;
  msgInfo?: MsgInfo;
  timeoutInfo?: TimeoutInfo;
  endHeight?: EndHeight;
}
export interface WALMessageSDKType {
  event_data_round_state?: EventDataRoundStateSDKType;
  msg_info?: MsgInfoSDKType;
  timeout_info?: TimeoutInfoSDKType;
  end_height?: EndHeightSDKType;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time?: Timestamp;
  msg?: WALMessage;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageSDKType {
  time?: TimestampSDKType;
  msg?: WALMessageSDKType;
}
function createBaseMsgInfo(): MsgInfo {
  return {
    msg: undefined,
    peerId: ""
  };
}
export const MsgInfo = {
  encode(message: MsgInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  fromJSON(object: any): MsgInfo {
    return {
      msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
      peerId: isSet(object.peerId) ? String(object.peerId) : ""
    };
  },
  fromPartial(object: Partial<MsgInfo>): MsgInfo {
    const message = createBaseMsgInfo();
    message.msg = object.msg !== undefined && object.msg !== null ? Message.fromPartial(object.msg) : undefined;
    message.peerId = object.peerId ?? "";
    return message;
  }
};
function createBaseTimeoutInfo(): TimeoutInfo {
  return {
    duration: undefined,
    height: Long.ZERO,
    round: 0,
    step: 0
  };
}
export const TimeoutInfo = {
  encode(message: TimeoutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }
    return writer;
  },
  fromJSON(object: any): TimeoutInfo {
    return {
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0
    };
  },
  fromPartial(object: Partial<TimeoutInfo>): TimeoutInfo {
    const message = createBaseTimeoutInfo();
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    return message;
  }
};
function createBaseEndHeight(): EndHeight {
  return {
    height: Long.ZERO
  };
}
export const EndHeight = {
  encode(message: EndHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): EndHeight {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<EndHeight>): EndHeight {
    const message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseWALMessage(): WALMessage {
  return {
    eventDataRoundState: undefined,
    msgInfo: undefined,
    timeoutInfo: undefined,
    endHeight: undefined
  };
}
export const WALMessage = {
  encode(message: WALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventDataRoundState !== undefined) {
      EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
    }
    if (message.msgInfo !== undefined) {
      MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeoutInfo !== undefined) {
      TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.endHeight !== undefined) {
      EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): WALMessage {
    return {
      eventDataRoundState: isSet(object.eventDataRoundState) ? EventDataRoundState.fromJSON(object.eventDataRoundState) : undefined,
      msgInfo: isSet(object.msgInfo) ? MsgInfo.fromJSON(object.msgInfo) : undefined,
      timeoutInfo: isSet(object.timeoutInfo) ? TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
      endHeight: isSet(object.endHeight) ? EndHeight.fromJSON(object.endHeight) : undefined
    };
  },
  fromPartial(object: Partial<WALMessage>): WALMessage {
    const message = createBaseWALMessage();
    message.eventDataRoundState = object.eventDataRoundState !== undefined && object.eventDataRoundState !== null ? EventDataRoundState.fromPartial(object.eventDataRoundState) : undefined;
    message.msgInfo = object.msgInfo !== undefined && object.msgInfo !== null ? MsgInfo.fromPartial(object.msgInfo) : undefined;
    message.timeoutInfo = object.timeoutInfo !== undefined && object.timeoutInfo !== null ? TimeoutInfo.fromPartial(object.timeoutInfo) : undefined;
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? EndHeight.fromPartial(object.endHeight) : undefined;
    return message;
  }
};
function createBaseTimedWALMessage(): TimedWALMessage {
  return {
    time: undefined,
    msg: undefined
  };
}
export const TimedWALMessage = {
  encode(message: TimedWALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TimedWALMessage {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined
    };
  },
  fromPartial(object: Partial<TimedWALMessage>): TimedWALMessage {
    const message = createBaseTimedWALMessage();
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  }
};