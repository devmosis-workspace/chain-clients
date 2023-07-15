import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /** Boolean whether the protorev module is enabled. */
    enabled: boolean;
    /** The admin account (settings manager) of the protorev module. */
    admin: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    enabled: boolean;
    admin: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
