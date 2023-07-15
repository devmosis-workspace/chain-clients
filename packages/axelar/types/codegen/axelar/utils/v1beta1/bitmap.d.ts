import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Bitmap {
    trueCountCache?: CircularBuffer;
}
export interface BitmapSDKType {
    true_count_cache?: CircularBufferSDKType;
}
export interface CircularBuffer {
    cumulativeValue: Long[];
    index: number;
    maxSize: number;
}
export interface CircularBufferSDKType {
    cumulative_value: Long[];
    index: number;
    max_size: number;
}
export declare const Bitmap: {
    encode(message: Bitmap, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Bitmap;
    fromPartial(object: Partial<Bitmap>): Bitmap;
};
export declare const CircularBuffer: {
    encode(message: CircularBuffer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CircularBuffer;
    fromPartial(object: Partial<CircularBuffer>): CircularBuffer;
};
