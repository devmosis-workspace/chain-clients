import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    keygenThreshold?: Threshold;
    signingThreshold?: Threshold;
    keygenTimeout: Long;
    keygenGracePeriod: Long;
    signingTimeout: Long;
    signingGracePeriod: Long;
    activeEpochCount: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    keygen_threshold?: ThresholdSDKType;
    signing_threshold?: ThresholdSDKType;
    keygen_timeout: Long;
    keygen_grace_period: Long;
    signing_timeout: Long;
    signing_grace_period: Long;
    active_epoch_count: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
