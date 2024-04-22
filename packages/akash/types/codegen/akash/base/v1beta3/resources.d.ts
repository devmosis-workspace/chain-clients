import { CPU, CPUAmino, CPUSDKType } from "./cpu";
import { Memory, MemoryAmino, MemorySDKType } from "./memory";
import { Storage, StorageAmino, StorageSDKType } from "./storage";
import { GPU, GPUAmino, GPUSDKType } from "./gpu";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryWriter } from "../../../binary";
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface Resources {
    id: number;
    cpu?: CPU;
    memory?: Memory;
    storage: Storage[];
    gpu?: GPU;
    endpoints: Endpoint[];
}
export interface ResourcesProtoMsg {
    typeUrl: "/akash.base.v1beta3.Resources";
    value: Uint8Array;
}
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourcesAmino {
    id?: number;
    cpu?: CPUAmino;
    memory?: MemoryAmino;
    storage?: StorageAmino[];
    gpu?: GPUAmino;
    endpoints?: EndpointAmino[];
}
export interface ResourcesAminoMsg {
    type: "/akash.base.v1beta3.Resources";
    value: ResourcesAmino;
}
/**
 * Resources describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourcesSDKType {
    id: number;
    cpu?: CPUSDKType;
    memory?: MemorySDKType;
    storage: StorageSDKType[];
    gpu?: GPUSDKType;
    endpoints: EndpointSDKType[];
}
export declare const Resources: {
    typeUrl: string;
    encode(message: Resources, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Resources;
    fromPartial(object: Partial<Resources>): Resources;
    fromAmino(object: ResourcesAmino): Resources;
    toAmino(message: Resources): ResourcesAmino;
    fromAminoMsg(object: ResourcesAminoMsg): Resources;
    fromProtoMsg(message: ResourcesProtoMsg): Resources;
    toProto(message: Resources): Uint8Array;
    toProtoMsg(message: Resources): ResourcesProtoMsg;
};
