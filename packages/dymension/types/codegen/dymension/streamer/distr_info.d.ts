import { BinaryWriter } from "../../binary";
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.DistrInfo";
    value: Uint8Array;
}
export interface DistrInfoAmino {
    total_weight?: string;
    records?: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
    type: "/dymensionxyz.dymension.streamer.DistrInfo";
    value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
    total_weight: string;
    records: DistrRecordSDKType[];
}
export interface DistrRecord {
    gaugeId: bigint;
    weight: string;
}
export interface DistrRecordProtoMsg {
    typeUrl: "/dymensionxyz.dymension.streamer.DistrRecord";
    value: Uint8Array;
}
export interface DistrRecordAmino {
    gauge_id?: string;
    weight?: string;
}
export interface DistrRecordAminoMsg {
    type: "/dymensionxyz.dymension.streamer.DistrRecord";
    value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
    gauge_id: bigint;
    weight: string;
}
export declare const DistrInfo: {
    typeUrl: string;
    encode(message: DistrInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistrInfo;
    fromPartial(object: Partial<DistrInfo>): DistrInfo;
    fromAmino(object: DistrInfoAmino): DistrInfo;
    toAmino(message: DistrInfo): DistrInfoAmino;
    fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo;
    fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo;
    toProto(message: DistrInfo): Uint8Array;
    toProtoMsg(message: DistrInfo): DistrInfoProtoMsg;
};
export declare const DistrRecord: {
    typeUrl: string;
    encode(message: DistrRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistrRecord;
    fromPartial(object: Partial<DistrRecord>): DistrRecord;
    fromAmino(object: DistrRecordAmino): DistrRecord;
    toAmino(message: DistrRecord): DistrRecordAmino;
    fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord;
    fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord;
    toProto(message: DistrRecord): Uint8Array;
    toProtoMsg(message: DistrRecord): DistrRecordProtoMsg;
};
