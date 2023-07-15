import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Threshold {
    /**
     * split threshold into Numerator and denominator to avoid floating point
     * errors down the line
     */
    numerator: Long;
    denominator: Long;
}
export interface ThresholdSDKType {
    numerator: Long;
    denominator: Long;
}
export declare const Threshold: {
    encode(message: Threshold, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Threshold;
    fromPartial(object: Partial<Threshold>): Threshold;
};
