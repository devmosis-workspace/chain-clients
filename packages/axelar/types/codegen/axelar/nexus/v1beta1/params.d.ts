import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    chainActivationThreshold?: Threshold;
    chainMaintainerMissingVoteThreshold?: Threshold;
    chainMaintainerIncorrectVoteThreshold?: Threshold;
    chainMaintainerCheckWindow: number;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    chain_activation_threshold?: ThresholdSDKType;
    chain_maintainer_missing_vote_threshold?: ThresholdSDKType;
    chain_maintainer_incorrect_vote_threshold?: ThresholdSDKType;
    chain_maintainer_check_window: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
