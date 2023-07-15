import * as _m0 from "protobufjs/minimal";
export interface Params {
    forceUnlockAllowedAddresses: string[];
}
export interface ParamsSDKType {
    force_unlock_allowed_addresses: string[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
