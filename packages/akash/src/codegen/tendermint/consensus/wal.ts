import { Message, MessageAmino, MessageSDKType } from "./types";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { EventDataRoundState, EventDataRoundStateAmino, EventDataRoundStateSDKType } from "../types/events";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg: Message;
  peerId: string;
}
export interface MsgInfoProtoMsg {
  typeUrl: "/tendermint.consensus.MsgInfo";
  value: Uint8Array;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoAmino {
  msg?: MessageAmino;
  peer_id: string;
}
export interface MsgInfoAminoMsg {
  type: "/tendermint.consensus.MsgInfo";
  value: MsgInfoAmino;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoSDKType {
  msg: MessageSDKType;
  peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration: Duration;
  height: bigint;
  round: number;
  step: number;
}
export interface TimeoutInfoProtoMsg {
  typeUrl: "/tendermint.consensus.TimeoutInfo";
  value: Uint8Array;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoAmino {
  duration?: DurationAmino;
  height: string;
  round: number;
  step: number;
}
export interface TimeoutInfoAminoMsg {
  type: "/tendermint.consensus.TimeoutInfo";
  value: TimeoutInfoAmino;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoSDKType {
  duration: DurationSDKType;
  height: bigint;
  round: number;
  step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: bigint;
}
export interface EndHeightProtoMsg {
  typeUrl: "/tendermint.consensus.EndHeight";
  value: Uint8Array;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightAmino {
  height: string;
}
export interface EndHeightAminoMsg {
  type: "/tendermint.consensus.EndHeight";
  value: EndHeightAmino;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightSDKType {
  height: bigint;
}
export interface WALMessage {
  eventDataRoundState?: EventDataRoundState;
  msgInfo?: MsgInfo;
  timeoutInfo?: TimeoutInfo;
  endHeight?: EndHeight;
}
export interface WALMessageProtoMsg {
  typeUrl: "/tendermint.consensus.WALMessage";
  value: Uint8Array;
}
export interface WALMessageAmino {
  event_data_round_state?: EventDataRoundStateAmino;
  msg_info?: MsgInfoAmino;
  timeout_info?: TimeoutInfoAmino;
  end_height?: EndHeightAmino;
}
export interface WALMessageAminoMsg {
  type: "/tendermint.consensus.WALMessage";
  value: WALMessageAmino;
}
export interface WALMessageSDKType {
  event_data_round_state?: EventDataRoundStateSDKType;
  msg_info?: MsgInfoSDKType;
  timeout_info?: TimeoutInfoSDKType;
  end_height?: EndHeightSDKType;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time: Timestamp;
  msg: WALMessage;
}
export interface TimedWALMessageProtoMsg {
  typeUrl: "/tendermint.consensus.TimedWALMessage";
  value: Uint8Array;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageAmino {
  time?: TimestampAmino;
  msg?: WALMessageAmino;
}
export interface TimedWALMessageAminoMsg {
  type: "/tendermint.consensus.TimedWALMessage";
  value: TimedWALMessageAmino;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageSDKType {
  time: TimestampSDKType;
  msg: WALMessageSDKType;
}
function createBaseMsgInfo(): MsgInfo {
  return {
    msg: Message.fromPartial({}),
    peerId: ""
  };
}
export const MsgInfo = {
  typeUrl: "/tendermint.consensus.MsgInfo",
  encode(message: MsgInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgInfoAmino): MsgInfo {
    return {
      msg: object?.msg ? Message.fromAmino(object.msg) : undefined,
      peerId: object.peer_id
    };
  },
  toAmino(message: MsgInfo): MsgInfoAmino {
    const obj: any = {};
    obj.msg = message.msg ? Message.toAmino(message.msg) : undefined;
    obj.peer_id = message.peerId;
    return obj;
  },
  fromAminoMsg(object: MsgInfoAminoMsg): MsgInfo {
    return MsgInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInfoProtoMsg): MsgInfo {
    return MsgInfo.decode(message.value);
  },
  toProto(message: MsgInfo): Uint8Array {
    return MsgInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgInfo): MsgInfoProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.MsgInfo",
      value: MsgInfo.encode(message).finish()
    };
  }
};
function createBaseTimeoutInfo(): TimeoutInfo {
  return {
    duration: Duration.fromPartial({}),
    height: BigInt(0),
    round: 0,
    step: 0
  };
}
export const TimeoutInfo = {
  typeUrl: "/tendermint.consensus.TimeoutInfo",
  encode(message: TimeoutInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0
    };
  },
  fromPartial(object: Partial<TimeoutInfo>): TimeoutInfo {
    const message = createBaseTimeoutInfo();
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    return message;
  },
  fromAmino(object: TimeoutInfoAmino): TimeoutInfo {
    return {
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      height: BigInt(object.height),
      round: object.round,
      step: object.step
    };
  },
  toAmino(message: TimeoutInfo): TimeoutInfoAmino {
    const obj: any = {};
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.step = message.step;
    return obj;
  },
  fromAminoMsg(object: TimeoutInfoAminoMsg): TimeoutInfo {
    return TimeoutInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TimeoutInfoProtoMsg): TimeoutInfo {
    return TimeoutInfo.decode(message.value);
  },
  toProto(message: TimeoutInfo): Uint8Array {
    return TimeoutInfo.encode(message).finish();
  },
  toProtoMsg(message: TimeoutInfo): TimeoutInfoProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.TimeoutInfo",
      value: TimeoutInfo.encode(message).finish()
    };
  }
};
function createBaseEndHeight(): EndHeight {
  return {
    height: BigInt(0)
  };
}
export const EndHeight = {
  typeUrl: "/tendermint.consensus.EndHeight",
  encode(message: EndHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): EndHeight {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EndHeight>): EndHeight {
    const message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EndHeightAmino): EndHeight {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: EndHeight): EndHeightAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EndHeightAminoMsg): EndHeight {
    return EndHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: EndHeightProtoMsg): EndHeight {
    return EndHeight.decode(message.value);
  },
  toProto(message: EndHeight): Uint8Array {
    return EndHeight.encode(message).finish();
  },
  toProtoMsg(message: EndHeight): EndHeightProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.EndHeight",
      value: EndHeight.encode(message).finish()
    };
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
  typeUrl: "/tendermint.consensus.WALMessage",
  encode(message: WALMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: WALMessageAmino): WALMessage {
    return {
      eventDataRoundState: object?.event_data_round_state ? EventDataRoundState.fromAmino(object.event_data_round_state) : undefined,
      msgInfo: object?.msg_info ? MsgInfo.fromAmino(object.msg_info) : undefined,
      timeoutInfo: object?.timeout_info ? TimeoutInfo.fromAmino(object.timeout_info) : undefined,
      endHeight: object?.end_height ? EndHeight.fromAmino(object.end_height) : undefined
    };
  },
  toAmino(message: WALMessage): WALMessageAmino {
    const obj: any = {};
    obj.event_data_round_state = message.eventDataRoundState ? EventDataRoundState.toAmino(message.eventDataRoundState) : undefined;
    obj.msg_info = message.msgInfo ? MsgInfo.toAmino(message.msgInfo) : undefined;
    obj.timeout_info = message.timeoutInfo ? TimeoutInfo.toAmino(message.timeoutInfo) : undefined;
    obj.end_height = message.endHeight ? EndHeight.toAmino(message.endHeight) : undefined;
    return obj;
  },
  fromAminoMsg(object: WALMessageAminoMsg): WALMessage {
    return WALMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: WALMessageProtoMsg): WALMessage {
    return WALMessage.decode(message.value);
  },
  toProto(message: WALMessage): Uint8Array {
    return WALMessage.encode(message).finish();
  },
  toProtoMsg(message: WALMessage): WALMessageProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.WALMessage",
      value: WALMessage.encode(message).finish()
    };
  }
};
function createBaseTimedWALMessage(): TimedWALMessage {
  return {
    time: Timestamp.fromPartial({}),
    msg: WALMessage.fromPartial({})
  };
}
export const TimedWALMessage = {
  typeUrl: "/tendermint.consensus.TimedWALMessage",
  encode(message: TimedWALMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: TimedWALMessageAmino): TimedWALMessage {
    return {
      time: object.time,
      msg: object?.msg ? WALMessage.fromAmino(object.msg) : undefined
    };
  },
  toAmino(message: TimedWALMessage): TimedWALMessageAmino {
    const obj: any = {};
    obj.time = message.time;
    obj.msg = message.msg ? WALMessage.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: TimedWALMessageAminoMsg): TimedWALMessage {
    return TimedWALMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: TimedWALMessageProtoMsg): TimedWALMessage {
    return TimedWALMessage.decode(message.value);
  },
  toProto(message: TimedWALMessage): Uint8Array {
    return TimedWALMessage.encode(message).finish();
  },
  toProtoMsg(message: TimedWALMessage): TimedWALMessageProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.TimedWALMessage",
      value: TimedWALMessage.encode(message).finish()
    };
  }
};