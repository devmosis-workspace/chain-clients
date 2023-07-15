import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    defaultVotingThreshold?: Threshold;
    endBlockerLimit: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    default_voting_threshold?: ThresholdSDKType;
    end_blocker_limit: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
