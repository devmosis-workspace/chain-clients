import * as _m0 from "protobufjs/minimal";
/** Data is the vstorage node data. */
export interface Data {
    value: string;
}
/** Data is the vstorage node data. */
export interface DataSDKType {
    value: string;
}
/**
 * Children are the immediate names (just one level deep) of subnodes leading to
 * more data from a given vstorage node.
 */
export interface Children {
    children: string[];
}
/**
 * Children are the immediate names (just one level deep) of subnodes leading to
 * more data from a given vstorage node.
 */
export interface ChildrenSDKType {
    children: string[];
}
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Data;
    fromPartial(object: Partial<Data>): Data;
};
export declare const Children: {
    encode(message: Children, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Children;
    fromPartial(object: Partial<Children>): Children;
};
