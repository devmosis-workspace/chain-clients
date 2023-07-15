import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
     * behalf of interchain account
     */
    minTimeoutDuration?: Duration;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    minTimeoutDuration?: DurationSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
