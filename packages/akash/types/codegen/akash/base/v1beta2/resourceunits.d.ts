import { CPU, CPUAmino, CPUSDKType, Memory, MemoryAmino, MemorySDKType, Storage, StorageAmino, StorageSDKType } from "./resource";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryWriter } from "../../../binary";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu?: CPU;
    memory?: Memory;
    storage: Storage[];
    endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
    typeUrl: "/akash.base.v1beta2.ResourceUnits";
    value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
    cpu?: CPUAmino;
    memory?: MemoryAmino;
    storage: StorageAmino[];
    endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
    type: "/akash.base.v1beta2.ResourceUnits";
    value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
    cpu?: CPUSDKType;
    memory?: MemorySDKType;
    storage: StorageSDKType[];
    endpoints: EndpointSDKType[];
}
export declare const ResourceUnits: {
    typeUrl: string;
    encode(message: ResourceUnits, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ResourceUnits;
    fromPartial(object: Partial<ResourceUnits>): ResourceUnits;
    fromAmino(object: ResourceUnitsAmino): ResourceUnits;
    toAmino(message: ResourceUnits): ResourceUnitsAmino;
    fromAminoMsg(object: ResourceUnitsAminoMsg): ResourceUnits;
    fromProtoMsg(message: ResourceUnitsProtoMsg): ResourceUnits;
    toProto(message: ResourceUnits): Uint8Array;
    toProtoMsg(message: ResourceUnits): ResourceUnitsProtoMsg;
};
