import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Inflation {
    max: string;
    min: string;
    rateChange: string;
    timestamp: Timestamp;
}
export interface InflationProtoMsg {
    typeUrl: "/sentinel.mint.v1.Inflation";
    value: Uint8Array;
}
export interface InflationAmino {
    max?: string;
    min?: string;
    rate_change?: string;
    timestamp?: string;
}
export interface InflationAminoMsg {
    type: "/sentinel.mint.v1.Inflation";
    value: InflationAmino;
}
export interface InflationSDKType {
    max: string;
    min: string;
    rate_change: string;
    timestamp: TimestampSDKType;
}
export declare const Inflation: {
    typeUrl: string;
    encode(message: Inflation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Inflation;
    fromPartial(object: Partial<Inflation>): Inflation;
    fromAmino(object: InflationAmino): Inflation;
    toAmino(message: Inflation): InflationAmino;
    fromAminoMsg(object: InflationAminoMsg): Inflation;
    fromProtoMsg(message: InflationProtoMsg): Inflation;
    toProto(message: Inflation): Uint8Array;
    toProtoMsg(message: Inflation): InflationProtoMsg;
};
