import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface InflationAsset {
    denom: string;
    inflation: string;
    accum: string;
}
export interface InflationAssetProtoMsg {
    typeUrl: "/em.inflation.v1.InflationAsset";
    value: Uint8Array;
}
export interface InflationAssetAmino {
    denom: string;
    inflation: string;
    accum: string;
}
export interface InflationAssetAminoMsg {
    type: "/em.inflation.v1.InflationAsset";
    value: InflationAssetAmino;
}
export interface InflationAssetSDKType {
    denom: string;
    inflation: string;
    accum: string;
}
export interface InflationState {
    lastApplied: Timestamp;
    lastAppliedHeight: string;
    assets: InflationAsset[];
}
export interface InflationStateProtoMsg {
    typeUrl: "/em.inflation.v1.InflationState";
    value: Uint8Array;
}
export interface InflationStateAmino {
    last_applied?: TimestampAmino;
    last_applied_height: string;
    assets: InflationAssetAmino[];
}
export interface InflationStateAminoMsg {
    type: "/em.inflation.v1.InflationState";
    value: InflationStateAmino;
}
export interface InflationStateSDKType {
    last_applied: TimestampSDKType;
    last_applied_height: string;
    assets: InflationAssetSDKType[];
}
export declare const InflationAsset: {
    typeUrl: string;
    encode(message: InflationAsset, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationAsset;
    fromPartial(object: Partial<InflationAsset>): InflationAsset;
    fromAmino(object: InflationAssetAmino): InflationAsset;
    toAmino(message: InflationAsset): InflationAssetAmino;
    fromAminoMsg(object: InflationAssetAminoMsg): InflationAsset;
    fromProtoMsg(message: InflationAssetProtoMsg): InflationAsset;
    toProto(message: InflationAsset): Uint8Array;
    toProtoMsg(message: InflationAsset): InflationAssetProtoMsg;
};
export declare const InflationState: {
    typeUrl: string;
    encode(message: InflationState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationState;
    fromPartial(object: Partial<InflationState>): InflationState;
    fromAmino(object: InflationStateAmino): InflationState;
    toAmino(message: InflationState): InflationStateAmino;
    fromAminoMsg(object: InflationStateAminoMsg): InflationState;
    fromProtoMsg(message: InflationStateProtoMsg): InflationState;
    toProto(message: InflationState): Uint8Array;
    toProtoMsg(message: InflationState): InflationStateProtoMsg;
};
