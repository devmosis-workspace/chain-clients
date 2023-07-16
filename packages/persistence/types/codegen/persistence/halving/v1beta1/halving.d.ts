import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the halving module. */
export interface Params {
    /** periodic height at which inflation decreases */
    blockHeight: Long;
}
/** Params holds parameters for the halving module. */
export interface ParamsSDKType {
    blockHeight: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
