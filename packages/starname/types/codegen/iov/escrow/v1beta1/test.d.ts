import { BinaryWriter } from "../../../binary";
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
export declare const TestObject: {
    typeUrl: string;
    encode(message: TestObject, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TestObject;
    fromPartial(object: Partial<TestObject>): TestObject;
    fromAmino(object: TestObjectAmino): TestObject;
    toAmino(message: TestObject): TestObjectAmino;
    fromAminoMsg(object: TestObjectAminoMsg): TestObject;
    fromProtoMsg(message: TestObjectProtoMsg): TestObject;
    toProto(message: TestObject): Uint8Array;
    toProtoMsg(message: TestObject): TestObjectProtoMsg;
};
export declare const TestTimeConstrainedObject: {
    typeUrl: string;
    encode(message: TestTimeConstrainedObject, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TestTimeConstrainedObject;
    fromPartial(object: Partial<TestTimeConstrainedObject>): TestTimeConstrainedObject;
    fromAmino(object: TestTimeConstrainedObjectAmino): TestTimeConstrainedObject;
    toAmino(message: TestTimeConstrainedObject): TestTimeConstrainedObjectAmino;
    fromAminoMsg(object: TestTimeConstrainedObjectAminoMsg): TestTimeConstrainedObject;
    fromProtoMsg(message: TestTimeConstrainedObjectProtoMsg): TestTimeConstrainedObject;
    toProto(message: TestTimeConstrainedObject): Uint8Array;
    toProtoMsg(message: TestTimeConstrainedObject): TestTimeConstrainedObjectProtoMsg;
};
