import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** TestObject defines a transferable object used for testing */
export interface TestObject {
  id: Long;
  owner: Uint8Array;
  numAllowedTransfers: Long;
}
/** TestObject defines a transferable object used for testing */
export interface TestObjectSDKType {
  id: Long;
  owner: Uint8Array;
  num_allowed_transfers: Long;
}
/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObject {
  id: Long;
  owner: Uint8Array;
  expiration: Long;
}
/**
 * TestTimeConstrainedObject defines a transferable object with a time constrain
 * used for testing
 */
export interface TestTimeConstrainedObjectSDKType {
  id: Long;
  owner: Uint8Array;
  expiration: Long;
}
function createBaseTestObject(): TestObject {
  return {
    id: Long.UZERO,
    owner: new Uint8Array(),
    numAllowedTransfers: Long.ZERO
  };
}
export const TestObject = {
  encode(message: TestObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (!message.numAllowedTransfers.isZero()) {
      writer.uint32(24).int64(message.numAllowedTransfers);
    }
    return writer;
  },
  fromJSON(object: any): TestObject {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      numAllowedTransfers: isSet(object.numAllowedTransfers) ? Long.fromValue(object.numAllowedTransfers) : Long.ZERO
    };
  },
  fromPartial(object: Partial<TestObject>): TestObject {
    const message = createBaseTestObject();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? new Uint8Array();
    message.numAllowedTransfers = object.numAllowedTransfers !== undefined && object.numAllowedTransfers !== null ? Long.fromValue(object.numAllowedTransfers) : Long.ZERO;
    return message;
  }
};
function createBaseTestTimeConstrainedObject(): TestTimeConstrainedObject {
  return {
    id: Long.UZERO,
    owner: new Uint8Array(),
    expiration: Long.UZERO
  };
}
export const TestTimeConstrainedObject = {
  encode(message: TestTimeConstrainedObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner.length !== 0) {
      writer.uint32(18).bytes(message.owner);
    }
    if (!message.expiration.isZero()) {
      writer.uint32(24).uint64(message.expiration);
    }
    return writer;
  },
  fromJSON(object: any): TestTimeConstrainedObject {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(),
      expiration: isSet(object.expiration) ? Long.fromValue(object.expiration) : Long.UZERO
    };
  },
  fromPartial(object: Partial<TestTimeConstrainedObject>): TestTimeConstrainedObject {
    const message = createBaseTestTimeConstrainedObject();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? new Uint8Array();
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Long.fromValue(object.expiration) : Long.UZERO;
    return message;
  }
};