import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Status } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Session {
    id: bigint;
    subscription: bigint;
    node: string;
    address: string;
    duration: Duration;
    bandwidth: Bandwidth;
    status: Status;
    statusAt: Timestamp;
}
export interface SessionProtoMsg {
    typeUrl: "/sentinel.session.v1.Session";
    value: Uint8Array;
}
export interface SessionAmino {
    id?: string;
    subscription?: string;
    node?: string;
    address?: string;
    duration?: DurationAmino;
    bandwidth?: BandwidthAmino;
    status?: Status;
    status_at?: string;
}
export interface SessionAminoMsg {
    type: "/sentinel.session.v1.Session";
    value: SessionAmino;
}
export interface SessionSDKType {
    id: bigint;
    subscription: bigint;
    node: string;
    address: string;
    duration: DurationSDKType;
    bandwidth: BandwidthSDKType;
    status: Status;
    status_at: TimestampSDKType;
}
export declare const Session: {
    typeUrl: string;
    encode(message: Session, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Session;
    fromPartial(object: Partial<Session>): Session;
    fromAmino(object: SessionAmino): Session;
    toAmino(message: Session): SessionAmino;
    fromAminoMsg(object: SessionAminoMsg): Session;
    fromProtoMsg(message: SessionProtoMsg): Session;
    toProto(message: Session): Uint8Array;
    toProtoMsg(message: Session): SessionProtoMsg;
};
