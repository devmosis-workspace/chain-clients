import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
/** GPU stores resource units and cpu config attributes */
export interface GPU {
    units: ResourceValue;
    attributes: Attribute[];
}
export interface GPUProtoMsg {
    typeUrl: "/akash.base.v1beta3.GPU";
    value: Uint8Array;
}
/** GPU stores resource units and cpu config attributes */
export interface GPUAmino {
    units?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface GPUAminoMsg {
    type: "/akash.base.v1beta3.GPU";
    value: GPUAmino;
}
/** GPU stores resource units and cpu config attributes */
export interface GPUSDKType {
    units: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
export declare const GPU: {
    typeUrl: string;
    encode(message: GPU, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GPU;
    fromPartial(object: Partial<GPU>): GPU;
    fromAmino(object: GPUAmino): GPU;
    toAmino(message: GPU): GPUAmino;
    fromAminoMsg(object: GPUAminoMsg): GPU;
    fromProtoMsg(message: GPUProtoMsg): GPU;
    toProto(message: GPU): Uint8Array;
    toProtoMsg(message: GPU): GPUProtoMsg;
};
