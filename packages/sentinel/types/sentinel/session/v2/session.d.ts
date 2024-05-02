import { Bandwidth, BandwidthAmino, BandwidthSDKType } from "../../types/v1/bandwidth";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface Session {
    id: bigint;
    subscriptionId: bigint;
    nodeAddress: string;
    address: string;
    bandwidth: Bandwidth;
    duration: Duration;
    inactiveAt: Timestamp;
    status: Status;
    statusAt: Timestamp;
}
export interface SessionProtoMsg {
    typeUrl: "/sentinel.session.v2.Session";
    value: Uint8Array;
}
export interface SessionAmino {
    id?: string;
    subscription_id?: string;
    node_address?: string;
    address?: string;
    bandwidth?: BandwidthAmino;
    duration?: DurationAmino;
    inactive_at?: string;
    status?: Status;
    status_at?: string;
}
export interface SessionAminoMsg {
    type: "/sentinel.session.v2.Session";
    value: SessionAmino;
}
export interface SessionSDKType {
    id: bigint;
    subscription_id: bigint;
    node_address: string;
    address: string;
    bandwidth: BandwidthSDKType;
    duration: DurationSDKType;
    inactive_at: TimestampSDKType;
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
