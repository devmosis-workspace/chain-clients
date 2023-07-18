import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BitArray {
    bits: Long;
    elems: Long[];
}
export interface BitArraySDKType {
    bits: Long;
    elems: Long[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BitArray;
    fromPartial(object: Partial<BitArray>): BitArray;
};
