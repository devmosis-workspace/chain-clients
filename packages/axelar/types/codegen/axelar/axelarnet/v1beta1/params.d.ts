import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    /** IBC packet route timeout window */
    routeTimeoutWindow: Long;
    transferLimit: Long;
    endBlockerLimit: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    route_timeout_window: Long;
    transfer_limit: Long;
    end_blocker_limit: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
