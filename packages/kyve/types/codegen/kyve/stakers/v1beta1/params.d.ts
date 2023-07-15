import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the stakers module parameters. */
export interface Params {
    /** commission_change_time ... */
    commissionChangeTime: Long;
    /** commission_change_time ... */
    leavePoolTime: Long;
}
/** Params defines the stakers module parameters. */
export interface ParamsSDKType {
    commission_change_time: Long;
    leave_pool_time: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
