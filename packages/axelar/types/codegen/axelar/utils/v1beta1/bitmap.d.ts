import { BinaryWriter } from "../../../binary";
export interface Bitmap {
    trueCountCache?: CircularBuffer;
}
export interface BitmapProtoMsg {
    typeUrl: "/axelar.utils.v1beta1.Bitmap";
    value: Uint8Array;
}
export interface BitmapAmino {
    true_count_cache?: CircularBufferAmino;
}
export interface BitmapAminoMsg {
    type: "/axelar.utils.v1beta1.Bitmap";
    value: BitmapAmino;
}
export interface BitmapSDKType {
    true_count_cache?: CircularBufferSDKType;
}
export interface CircularBuffer {
    cumulativeValue: bigint[];
    index: number;
    maxSize: number;
}
export interface CircularBufferProtoMsg {
    typeUrl: "/axelar.utils.v1beta1.CircularBuffer";
    value: Uint8Array;
}
export interface CircularBufferAmino {
    cumulative_value?: string[];
    index?: number;
    max_size?: number;
}
export interface CircularBufferAminoMsg {
    type: "/axelar.utils.v1beta1.CircularBuffer";
    value: CircularBufferAmino;
}
export interface CircularBufferSDKType {
    cumulative_value: bigint[];
    index: number;
    max_size: number;
}
export declare const Bitmap: {
    typeUrl: string;
    encode(message: Bitmap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Bitmap;
    fromPartial(object: Partial<Bitmap>): Bitmap;
    fromAmino(object: BitmapAmino): Bitmap;
    toAmino(message: Bitmap): BitmapAmino;
    fromAminoMsg(object: BitmapAminoMsg): Bitmap;
    fromProtoMsg(message: BitmapProtoMsg): Bitmap;
    toProto(message: Bitmap): Uint8Array;
    toProtoMsg(message: Bitmap): BitmapProtoMsg;
};
export declare const CircularBuffer: {
    typeUrl: string;
    encode(message: CircularBuffer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CircularBuffer;
    fromPartial(object: Partial<CircularBuffer>): CircularBuffer;
    fromAmino(object: CircularBufferAmino): CircularBuffer;
    toAmino(message: CircularBuffer): CircularBufferAmino;
    fromAminoMsg(object: CircularBufferAminoMsg): CircularBuffer;
    fromProtoMsg(message: CircularBufferProtoMsg): CircularBuffer;
    toProto(message: CircularBuffer): Uint8Array;
    toProtoMsg(message: CircularBuffer): CircularBufferProtoMsg;
};
