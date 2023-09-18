import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** TestObject defines a transferable object used for testing */
export interface TestObject {
  id: bigint;
  owner: Uint8Array;
  numAllowedTransfers: bigint;
}
export interface TestObjectProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.TestObject";
  value: Uint8Array;
}
/** TestObject defines a transferable object used for testing */
export interface TestObjectAmino {
  id: string;
  owner: Uint8Array;
  num_allowed_transfers: string;
}
export interface TestObjectAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.TestObject";
  value: TestObjectAmino;
}
/** TestObject defines a transferable object used for testing */
export interface TestObjectSDKType {
  id: bigint;
  owner: Uint8Array;
  num_allowed_transfers: bigint;
}
/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObject {
  id: bigint;
  owner: Uint8Array;
  expiration: bigint;
}
export interface TestTimeConstrainedObjectProtoMsg {
  typeUrl: "/starnamed.x.escrow.v1beta1.TestTimeConstrainedObject";
  value: Uint8Array;
}
/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObjectAmino {
  id: string;
  owner: Uint8Array;
  expiration: string;
}
export interface TestTimeConstrainedObjectAminoMsg {
  type: "/starnamed.x.escrow.v1beta1.TestTimeConstrainedObject";
  value: TestTimeConstrainedObjectAmino;
}
/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObjectSDKType {
  id: bigint;
  owner: Uint8Array;
  expiration: bigint;
}
function createBaseTestObject(): TestObject {
  return {
    id: BigInt(0),
    owner: new Uint8Array(),
    numAllowedTransfers: BigInt(0)
  };
}
export const TestObject = {
  typeUrl: "/starnamed.x.escrow.v1beta1.TestObject",
  encode(message: TestObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (message.numAllowedTransfers !== BigInt(0)) {
      writer.uint32(24).int64(message.numAllowedTransfers);
    }
    return writer;
  },
  fromJSON(object: any): TestObject {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      numAllowedTransfers: isSet(object.numAllowedTransfers) ? BigInt(object.numAllowedTransfers.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TestObject>): TestObject {
    const message = createBaseTestObject();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? new Uint8Array();
    message.numAllowedTransfers = object.numAllowedTransfers !== undefined && object.numAllowedTransfers !== null ? BigInt(object.numAllowedTransfers.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TestObjectAmino): TestObject {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      numAllowedTransfers: BigInt(object.num_allowed_transfers)
    };
  },
  toAmino(message: TestObject): TestObjectAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.num_allowed_transfers = message.numAllowedTransfers ? message.numAllowedTransfers.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TestObjectAminoMsg): TestObject {
    return TestObject.fromAmino(object.value);
  },
  fromProtoMsg(message: TestObjectProtoMsg): TestObject {
    return TestObject.decode(message.value);
  },
  toProto(message: TestObject): Uint8Array {
    return TestObject.encode(message).finish();
  },
  toProtoMsg(message: TestObject): TestObjectProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.TestObject",
      value: TestObject.encode(message).finish()
    };
  }
};
function createBaseTestTimeConstrainedObject(): TestTimeConstrainedObject {
  return {
    id: BigInt(0),
    owner: new Uint8Array(),
    expiration: BigInt(0)
  };
}
export const TestTimeConstrainedObject = {
  typeUrl: "/starnamed.x.escrow.v1beta1.TestTimeConstrainedObject",
  encode(message: TestTimeConstrainedObject, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (message.expiration !== BigInt(0)) {
      writer.uint32(24).uint64(message.expiration);
    }
    return writer;
  },
  fromJSON(object: any): TestTimeConstrainedObject {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      expiration: isSet(object.expiration) ? BigInt(object.expiration.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TestTimeConstrainedObject>): TestTimeConstrainedObject {
    const message = createBaseTestTimeConstrainedObject();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? new Uint8Array();
    message.expiration = object.expiration !== undefined && object.expiration !== null ? BigInt(object.expiration.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TestTimeConstrainedObjectAmino): TestTimeConstrainedObject {
    return {
      id: BigInt(object.id),
      owner: object.owner,
      expiration: BigInt(object.expiration)
    };
  },
  toAmino(message: TestTimeConstrainedObject): TestTimeConstrainedObjectAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.expiration = message.expiration ? message.expiration.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TestTimeConstrainedObjectAminoMsg): TestTimeConstrainedObject {
    return TestTimeConstrainedObject.fromAmino(object.value);
  },
  fromProtoMsg(message: TestTimeConstrainedObjectProtoMsg): TestTimeConstrainedObject {
    return TestTimeConstrainedObject.decode(message.value);
  },
  toProto(message: TestTimeConstrainedObject): Uint8Array {
    return TestTimeConstrainedObject.encode(message).finish();
  },
  toProtoMsg(message: TestTimeConstrainedObject): TestTimeConstrainedObjectProtoMsg {
    return {
      typeUrl: "/starnamed.x.escrow.v1beta1.TestTimeConstrainedObject",
      value: TestTimeConstrainedObject.encode(message).finish()
    };
  }
};