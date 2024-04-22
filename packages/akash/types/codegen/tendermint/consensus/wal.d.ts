import { Message, MessageAmino, MessageSDKType } from "./types";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { EventDataRoundState, EventDataRoundStateAmino, EventDataRoundStateSDKType } from "../types/events";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
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
    peer_id?: string;
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
    height?: string;
    round?: number;
    step?: number;
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
    height?: string;
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
    msg?: WALMessage;
}
export interface TimedWALMessageProtoMsg {
    typeUrl: "/tendermint.consensus.TimedWALMessage";
    value: Uint8Array;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageAmino {
    time?: string;
    msg?: WALMessageAmino;
}
export interface TimedWALMessageAminoMsg {
    type: "/tendermint.consensus.TimedWALMessage";
    value: TimedWALMessageAmino;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageSDKType {
    time: TimestampSDKType;
    msg?: WALMessageSDKType;
}
export declare const MsgInfo: {
    typeUrl: string;
    encode(message: MsgInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInfo;
    fromPartial(object: Partial<MsgInfo>): MsgInfo;
    fromAmino(object: MsgInfoAmino): MsgInfo;
    toAmino(message: MsgInfo): MsgInfoAmino;
    fromAminoMsg(object: MsgInfoAminoMsg): MsgInfo;
    fromProtoMsg(message: MsgInfoProtoMsg): MsgInfo;
    toProto(message: MsgInfo): Uint8Array;
    toProtoMsg(message: MsgInfo): MsgInfoProtoMsg;
};
export declare const TimeoutInfo: {
    typeUrl: string;
    encode(message: TimeoutInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TimeoutInfo;
    fromPartial(object: Partial<TimeoutInfo>): TimeoutInfo;
    fromAmino(object: TimeoutInfoAmino): TimeoutInfo;
    toAmino(message: TimeoutInfo): TimeoutInfoAmino;
    fromAminoMsg(object: TimeoutInfoAminoMsg): TimeoutInfo;
    fromProtoMsg(message: TimeoutInfoProtoMsg): TimeoutInfo;
    toProto(message: TimeoutInfo): Uint8Array;
    toProtoMsg(message: TimeoutInfo): TimeoutInfoProtoMsg;
};
export declare const EndHeight: {
    typeUrl: string;
    encode(message: EndHeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EndHeight;
    fromPartial(object: Partial<EndHeight>): EndHeight;
    fromAmino(object: EndHeightAmino): EndHeight;
    toAmino(message: EndHeight): EndHeightAmino;
    fromAminoMsg(object: EndHeightAminoMsg): EndHeight;
    fromProtoMsg(message: EndHeightProtoMsg): EndHeight;
    toProto(message: EndHeight): Uint8Array;
    toProtoMsg(message: EndHeight): EndHeightProtoMsg;
};
export declare const WALMessage: {
    typeUrl: string;
    encode(message: WALMessage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WALMessage;
    fromPartial(object: Partial<WALMessage>): WALMessage;
    fromAmino(object: WALMessageAmino): WALMessage;
    toAmino(message: WALMessage): WALMessageAmino;
    fromAminoMsg(object: WALMessageAminoMsg): WALMessage;
    fromProtoMsg(message: WALMessageProtoMsg): WALMessage;
    toProto(message: WALMessage): Uint8Array;
    toProtoMsg(message: WALMessage): WALMessageProtoMsg;
};
export declare const TimedWALMessage: {
    typeUrl: string;
    encode(message: TimedWALMessage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TimedWALMessage;
    fromPartial(object: Partial<TimedWALMessage>): TimedWALMessage;
    fromAmino(object: TimedWALMessageAmino): TimedWALMessage;
    toAmino(message: TimedWALMessage): TimedWALMessageAmino;
    fromAminoMsg(object: TimedWALMessageAminoMsg): TimedWALMessage;
    fromProtoMsg(message: TimedWALMessageProtoMsg): TimedWALMessage;
    toProto(message: TimedWALMessage): Uint8Array;
    toProtoMsg(message: TimedWALMessage): TimedWALMessageProtoMsg;
};
