import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: Long[];
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    ids: Long[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IDSet;
    fromPartial(object: Partial<IDSet>): IDSet;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchFees;
    fromPartial(object: Partial<BatchFees>): BatchFees;
};
