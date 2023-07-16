import * as _m0 from "protobufjs/minimal";
export interface Blacklister {
    address: string;
}
export interface BlacklisterSDKType {
    address: string;
}
export declare const Blacklister: {
    encode(message: Blacklister, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Blacklister;
    fromPartial(object: Partial<Blacklister>): Blacklister;
};
