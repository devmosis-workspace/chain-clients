import { BinaryWriter } from "../../binary";
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    /** The double value. */
    value: number;
}
export interface DoubleValueProtoMsg {
    typeUrl: "/google.protobuf.DoubleValue";
    value: Uint8Array;
}
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueAmino {
    /** The double value. */
    value: number;
}
export interface DoubleValueAminoMsg {
    type: "/google.protobuf.DoubleValue";
    value: DoubleValueAmino;
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
export interface FloatValueProtoMsg {
    typeUrl: "/google.protobuf.FloatValue";
    value: Uint8Array;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueAmino {
    /** The float value. */
    value: number;
}
export interface FloatValueAminoMsg {
    type: "/google.protobuf.FloatValue";
    value: FloatValueAmino;
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
    value: bigint;
}
export interface Int64ValueProtoMsg {
    typeUrl: "/google.protobuf.Int64Value";
    value: Uint8Array;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueAmino {
    /** The int64 value. */
    value: string;
}
export interface Int64ValueAminoMsg {
    type: "/google.protobuf.Int64Value";
    value: Int64ValueAmino;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
    value: bigint;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    /** The uint64 value. */
    value: bigint;
}
export interface UInt64ValueProtoMsg {
    typeUrl: "/google.protobuf.UInt64Value";
    value: Uint8Array;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueAmino {
    /** The uint64 value. */
    value: string;
}
export interface UInt64ValueAminoMsg {
    type: "/google.protobuf.UInt64Value";
    value: UInt64ValueAmino;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
    value: bigint;
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
export interface Int32ValueProtoMsg {
    typeUrl: "/google.protobuf.Int32Value";
    value: Uint8Array;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueAmino {
    /** The int32 value. */
    value: number;
}
export interface Int32ValueAminoMsg {
    type: "/google.protobuf.Int32Value";
    value: Int32ValueAmino;
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
export interface UInt32ValueProtoMsg {
    typeUrl: "/google.protobuf.UInt32Value";
    value: Uint8Array;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueAmino {
    /** The uint32 value. */
    value: number;
}
export interface UInt32ValueAminoMsg {
    type: "/google.protobuf.UInt32Value";
    value: UInt32ValueAmino;
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
export interface BoolValueProtoMsg {
    typeUrl: "/google.protobuf.BoolValue";
    value: Uint8Array;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueAmino {
    /** The bool value. */
    value: boolean;
}
export interface BoolValueAminoMsg {
    type: "/google.protobuf.BoolValue";
    value: BoolValueAmino;
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
export interface StringValueProtoMsg {
    typeUrl: "/google.protobuf.StringValue";
    value: Uint8Array;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueAmino {
    /** The string value. */
    value: string;
}
export interface StringValueAminoMsg {
    type: "/google.protobuf.StringValue";
    value: StringValueAmino;
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
export interface BytesValueProtoMsg {
    typeUrl: "/google.protobuf.BytesValue";
    value: Uint8Array;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueAmino {
    /** The bytes value. */
    value: Uint8Array;
}
export interface BytesValueAminoMsg {
    type: "/google.protobuf.BytesValue";
    value: BytesValueAmino;
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
    typeUrl: string;
    encode(message: DoubleValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DoubleValue;
    fromPartial(object: Partial<DoubleValue>): DoubleValue;
    fromAmino(object: DoubleValueAmino): DoubleValue;
    toAmino(message: DoubleValue): DoubleValueAmino;
    fromAminoMsg(object: DoubleValueAminoMsg): DoubleValue;
    fromProtoMsg(message: DoubleValueProtoMsg): DoubleValue;
    toProto(message: DoubleValue): Uint8Array;
    toProtoMsg(message: DoubleValue): DoubleValueProtoMsg;
};
export declare const FloatValue: {
    typeUrl: string;
    encode(message: FloatValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FloatValue;
    fromPartial(object: Partial<FloatValue>): FloatValue;
    fromAmino(object: FloatValueAmino): FloatValue;
    toAmino(message: FloatValue): FloatValueAmino;
    fromAminoMsg(object: FloatValueAminoMsg): FloatValue;
    fromProtoMsg(message: FloatValueProtoMsg): FloatValue;
    toProto(message: FloatValue): Uint8Array;
    toProtoMsg(message: FloatValue): FloatValueProtoMsg;
};
export declare const Int64Value: {
    typeUrl: string;
    encode(message: Int64Value, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Int64Value;
    fromPartial(object: Partial<Int64Value>): Int64Value;
    fromAmino(object: Int64ValueAmino): Int64Value;
    toAmino(message: Int64Value): Int64ValueAmino;
    fromAminoMsg(object: Int64ValueAminoMsg): Int64Value;
    fromProtoMsg(message: Int64ValueProtoMsg): Int64Value;
    toProto(message: Int64Value): Uint8Array;
    toProtoMsg(message: Int64Value): Int64ValueProtoMsg;
};
export declare const UInt64Value: {
    typeUrl: string;
    encode(message: UInt64Value, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UInt64Value;
    fromPartial(object: Partial<UInt64Value>): UInt64Value;
    fromAmino(object: UInt64ValueAmino): UInt64Value;
    toAmino(message: UInt64Value): UInt64ValueAmino;
    fromAminoMsg(object: UInt64ValueAminoMsg): UInt64Value;
    fromProtoMsg(message: UInt64ValueProtoMsg): UInt64Value;
    toProto(message: UInt64Value): Uint8Array;
    toProtoMsg(message: UInt64Value): UInt64ValueProtoMsg;
};
export declare const Int32Value: {
    typeUrl: string;
    encode(message: Int32Value, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Int32Value;
    fromPartial(object: Partial<Int32Value>): Int32Value;
    fromAmino(object: Int32ValueAmino): Int32Value;
    toAmino(message: Int32Value): Int32ValueAmino;
    fromAminoMsg(object: Int32ValueAminoMsg): Int32Value;
    fromProtoMsg(message: Int32ValueProtoMsg): Int32Value;
    toProto(message: Int32Value): Uint8Array;
    toProtoMsg(message: Int32Value): Int32ValueProtoMsg;
};
export declare const UInt32Value: {
    typeUrl: string;
    encode(message: UInt32Value, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UInt32Value;
    fromPartial(object: Partial<UInt32Value>): UInt32Value;
    fromAmino(object: UInt32ValueAmino): UInt32Value;
    toAmino(message: UInt32Value): UInt32ValueAmino;
    fromAminoMsg(object: UInt32ValueAminoMsg): UInt32Value;
    fromProtoMsg(message: UInt32ValueProtoMsg): UInt32Value;
    toProto(message: UInt32Value): Uint8Array;
    toProtoMsg(message: UInt32Value): UInt32ValueProtoMsg;
};
export declare const BoolValue: {
    typeUrl: string;
    encode(message: BoolValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BoolValue;
    fromPartial(object: Partial<BoolValue>): BoolValue;
    fromAmino(object: BoolValueAmino): BoolValue;
    toAmino(message: BoolValue): BoolValueAmino;
    fromAminoMsg(object: BoolValueAminoMsg): BoolValue;
    fromProtoMsg(message: BoolValueProtoMsg): BoolValue;
    toProto(message: BoolValue): Uint8Array;
    toProtoMsg(message: BoolValue): BoolValueProtoMsg;
};
export declare const StringValue: {
    typeUrl: string;
    encode(message: StringValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StringValue;
    fromPartial(object: Partial<StringValue>): StringValue;
    fromAmino(object: StringValueAmino): StringValue;
    toAmino(message: StringValue): StringValueAmino;
    fromAminoMsg(object: StringValueAminoMsg): StringValue;
    fromProtoMsg(message: StringValueProtoMsg): StringValue;
    toProto(message: StringValue): Uint8Array;
    toProtoMsg(message: StringValue): StringValueProtoMsg;
};
export declare const BytesValue: {
    typeUrl: string;
    encode(message: BytesValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BytesValue;
    fromPartial(object: Partial<BytesValue>): BytesValue;
    fromAmino(object: BytesValueAmino): BytesValue;
    toAmino(message: BytesValue): BytesValueAmino;
    fromAminoMsg(object: BytesValueAminoMsg): BytesValue;
    fromProtoMsg(message: BytesValueProtoMsg): BytesValue;
    toProto(message: BytesValue): Uint8Array;
    toProtoMsg(message: BytesValue): BytesValueProtoMsg;
};
