import * as _m0 from "protobufjs/minimal";
export interface Blacklisted {
    addressBz: Uint8Array;
}
export interface BlacklistedSDKType {
    addressBz: Uint8Array;
}
export declare const Blacklisted: {
    encode(message: Blacklisted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Blacklisted;
    fromPartial(object: Partial<Blacklisted>): Blacklisted;
};
