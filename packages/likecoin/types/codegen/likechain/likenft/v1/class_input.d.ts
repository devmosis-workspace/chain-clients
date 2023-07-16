import { ClassConfig, ClassConfigSDKType, ClassParentType } from "./class_data";
import * as _m0 from "protobufjs/minimal";
export interface ClassInput {
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
    config?: ClassConfig;
}
export interface ClassInputSDKType {
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uri_hash: string;
    metadata: Uint8Array;
    config?: ClassConfigSDKType;
}
export interface ClassParentInput {
    type: ClassParentType;
    iscnIdPrefix: string;
}
export interface ClassParentInputSDKType {
    type: ClassParentType;
    iscn_id_prefix: string;
}
export declare const ClassInput: {
    encode(message: ClassInput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassInput;
    fromPartial(object: Partial<ClassInput>): ClassInput;
};
export declare const ClassParentInput: {
    encode(message: ClassParentInput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassParentInput;
    fromPartial(object: Partial<ClassParentInput>): ClassParentInput;
};
