import { Long } from "../../../helpers";
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
export declare const TestObject: {
    encode(message: TestObject, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TestObject;
    fromPartial(object: Partial<TestObject>): TestObject;
};
export declare const TestTimeConstrainedObject: {
    encode(message: TestTimeConstrainedObject, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TestTimeConstrainedObject;
    fromPartial(object: Partial<TestTimeConstrainedObject>): TestTimeConstrainedObject;
};
