import * as _m0 from "protobufjs/minimal";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
    pairs: Pair[];
}
/** Pairs defines a repeated slice of Pair objects. */
export interface PairsSDKType {
    pairs: PairSDKType[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
    key: Uint8Array;
    value: Uint8Array;
}
/** Pair defines a key/value bytes tuple. */
export interface PairSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const Pairs: {
    encode(message: Pairs, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pairs;
    fromPartial(object: Partial<Pairs>): Pairs;
};
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Pair;
    fromPartial(object: Partial<Pair>): Pair;
};
