import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    /** Params represent the genesis parameters for the module */
    minProxyBalance: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    min_proxy_balance: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
