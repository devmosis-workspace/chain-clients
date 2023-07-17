import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    /** The double value. */
    value: number;
}
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueSDKType {
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    /** The float value. */
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueSDKType {
    value: number;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    /** The int64 value. */
    value: Long;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
    value: Long;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    /** The uint64 value. */
    value: Long;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
    value: Long;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    /** The int32 value. */
    value: number;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueSDKType {
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    /** The uint32 value. */
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueSDKType {
    value: number;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    /** The bool value. */
    value: boolean;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueSDKType {
    value: boolean;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    /** The string value. */
    value: string;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueSDKType {
    value: string;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    /** The bytes value. */
    value: Uint8Array;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueSDKType {
    value: Uint8Array;
}
export declare const DoubleValue: {
    encode(message: DoubleValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DoubleValue;
    fromPartial(object: Partial<DoubleValue>): DoubleValue;
};
export declare const FloatValue: {
    encode(message: FloatValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FloatValue;
    fromPartial(object: Partial<FloatValue>): FloatValue;
};
export declare const Int64Value: {
    encode(message: Int64Value, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Int64Value;
    fromPartial(object: Partial<Int64Value>): Int64Value;
};
export declare const UInt64Value: {
    encode(message: UInt64Value, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UInt64Value;
    fromPartial(object: Partial<UInt64Value>): UInt64Value;
};
export declare const Int32Value: {
    encode(message: Int32Value, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Int32Value;
    fromPartial(object: Partial<Int32Value>): Int32Value;
};
export declare const UInt32Value: {
    encode(message: UInt32Value, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UInt32Value;
    fromPartial(object: Partial<UInt32Value>): UInt32Value;
};
export declare const BoolValue: {
    encode(message: BoolValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BoolValue;
    fromPartial(object: Partial<BoolValue>): BoolValue;
};
export declare const StringValue: {
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StringValue;
    fromPartial(object: Partial<StringValue>): StringValue;
};
export declare const BytesValue: {
    encode(message: BytesValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BytesValue;
    fromPartial(object: Partial<BytesValue>): BytesValue;
};
