import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the bundles module parameters. */
export interface Params {
    /** upload_timeout ... */
    uploadTimeout: Long;
    /** storage_cost ... */
    storageCost: string;
    /** network_fee ... */
    networkFee: string;
    /** max_points ... */
    maxPoints: Long;
}
/** Params defines the bundles module parameters. */
export interface ParamsSDKType {
    upload_timeout: Long;
    storage_cost: string;
    network_fee: string;
    max_points: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
