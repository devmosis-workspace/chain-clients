import { Fee, FeeSDKType } from "./fee";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    minFee?: Fee;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    min_fee?: FeeSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
