import * as _m0 from "protobufjs/minimal";
export interface Owner {
    address: string;
}
export interface OwnerSDKType {
    address: string;
}
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Owner;
    fromPartial(object: Partial<Owner>): Owner;
};
