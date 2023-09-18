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
export interface Empty {}
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
export interface EmptyAmino {}
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
export interface EmptySDKType {}
function createBaseEmpty(): Empty {
  return {};
}
export const Empty = {
  typeUrl: "/google.protobuf.Empty",
  encode(_: Empty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): Empty {
    return {};
  },
  fromPartial(_: Partial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
  fromAmino(_: EmptyAmino): Empty {
    return {};
  },
  toAmino(_: Empty): EmptyAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyAminoMsg): Empty {
    return Empty.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyProtoMsg): Empty {
    return Empty.decode(message.value);
  },
  toProto(message: Empty): Uint8Array {
    return Empty.encode(message).finish();
  },
  toProtoMsg(message: Empty): EmptyProtoMsg {
    return {
      typeUrl: "/google.protobuf.Empty",
      value: Empty.encode(message).finish()
    };
  }
};