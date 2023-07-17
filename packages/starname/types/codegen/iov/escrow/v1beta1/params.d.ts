import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters of the escrow module */
export interface Params {
    /** Params defines the parameters of the escrow module */
    moduleEnabled: boolean;
}
/** Params defines the parameters of the escrow module */
export interface ParamsSDKType {
    module_enabled: boolean;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
