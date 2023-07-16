import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /** Security address that can remove schedules */
    securityAddress: string;
    /** Limit of schedules executed in one block */
    limit: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    security_address: string;
    limit: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
