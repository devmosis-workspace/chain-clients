import { BinaryWriter } from "../../binary";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 */
export interface Empty {
}
export interface EmptyProtoMsg {
    typeUrl: "/google.protobuf.Empty";
    value: Uint8Array;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 */
export interface EmptyAmino {
}
export interface EmptyAminoMsg {
    type: "/google.protobuf.Empty";
    value: EmptyAmino;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 */
export interface EmptySDKType {
}
export declare const Empty: {
    typeUrl: string;
    encode(_: Empty, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): Empty;
    fromPartial(_: Partial<Empty>): Empty;
    fromAmino(_: EmptyAmino): Empty;
    toAmino(_: Empty): EmptyAmino;
    fromAminoMsg(object: EmptyAminoMsg): Empty;
    fromProtoMsg(message: EmptyProtoMsg): Empty;
    toProto(message: Empty): Uint8Array;
    toProtoMsg(message: Empty): EmptyProtoMsg;
};
