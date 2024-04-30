import { ClassConfig, ClassConfigAmino, ClassConfigSDKType, ClassParentType } from "./class_data";
import { BinaryWriter } from "../../../binary";
export interface ClassInput {
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uriHash: string;
    metadata: Uint8Array;
    config: ClassConfig;
}
export interface ClassInputProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassInput";
    value: Uint8Array;
}
export interface ClassInputAmino {
    name?: string;
    symbol?: string;
    description?: string;
    uri?: string;
    uri_hash?: string;
    metadata?: string;
    config?: ClassConfigAmino;
}
export interface ClassInputAminoMsg {
    type: "/likechain.likenft.v1.ClassInput";
    value: ClassInputAmino;
}
export interface ClassInputSDKType {
    name: string;
    symbol: string;
    description: string;
    uri: string;
    uri_hash: string;
    metadata: Uint8Array;
    config: ClassConfigSDKType;
}
export interface ClassParentInput {
    type: ClassParentType;
    iscnIdPrefix?: string;
}
export interface ClassParentInputProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassParentInput";
    value: Uint8Array;
}
export interface ClassParentInputAmino {
    type?: ClassParentType;
    iscn_id_prefix?: string;
}
export interface ClassParentInputAminoMsg {
    type: "/likechain.likenft.v1.ClassParentInput";
    value: ClassParentInputAmino;
}
export interface ClassParentInputSDKType {
    type: ClassParentType;
    iscn_id_prefix?: string;
}
export declare const ClassInput: {
    typeUrl: string;
    encode(message: ClassInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassInput;
    fromPartial(object: Partial<ClassInput>): ClassInput;
    fromAmino(object: ClassInputAmino): ClassInput;
    toAmino(message: ClassInput): ClassInputAmino;
    fromAminoMsg(object: ClassInputAminoMsg): ClassInput;
    fromProtoMsg(message: ClassInputProtoMsg): ClassInput;
    toProto(message: ClassInput): Uint8Array;
    toProtoMsg(message: ClassInput): ClassInputProtoMsg;
};
export declare const ClassParentInput: {
    typeUrl: string;
    encode(message: ClassParentInput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassParentInput;
    fromPartial(object: Partial<ClassParentInput>): ClassParentInput;
    fromAmino(object: ClassParentInputAmino): ClassParentInput;
    toAmino(message: ClassParentInput): ClassParentInputAmino;
    fromAminoMsg(object: ClassParentInputAminoMsg): ClassParentInput;
    fromProtoMsg(message: ClassParentInputProtoMsg): ClassParentInput;
    toProto(message: ClassParentInput): Uint8Array;
    toProtoMsg(message: ClassParentInput): ClassParentInputProtoMsg;
};
