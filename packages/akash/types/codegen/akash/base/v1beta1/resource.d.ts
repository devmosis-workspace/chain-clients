import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import { BinaryWriter } from "../../../binary";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units: ResourceValue;
    attributes: Attribute[];
}
export interface CPUProtoMsg {
    typeUrl: "/akash.base.v1beta1.CPU";
    value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
    units?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
    type: "/akash.base.v1beta1.CPU";
    value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
    units: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity: ResourceValue;
    attributes: Attribute[];
}
export interface MemoryProtoMsg {
    typeUrl: "/akash.base.v1beta1.Memory";
    value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
    type: "/akash.base.v1beta1.Memory";
    value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    quantity: ResourceValue;
    attributes: Attribute[];
}
export interface StorageProtoMsg {
    typeUrl: "/akash.base.v1beta1.Storage";
    value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
    type: "/akash.base.v1beta1.Storage";
    value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu?: CPU;
    memory?: Memory;
    storage?: Storage;
    endpoints: Endpoint[];
}
export interface ResourceUnitsProtoMsg {
    typeUrl: "/akash.base.v1beta1.ResourceUnits";
    value: Uint8Array;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
    cpu?: CPUAmino;
    memory?: MemoryAmino;
    storage?: StorageAmino;
    endpoints?: EndpointAmino[];
}
export interface ResourceUnitsAminoMsg {
    type: "/akash.base.v1beta1.ResourceUnits";
    value: ResourceUnitsAmino;
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
    cpu?: CPUSDKType;
    memory?: MemorySDKType;
    storage?: StorageSDKType;
    endpoints: EndpointSDKType[];
}
export declare const CPU: {
    typeUrl: string;
    encode(message: CPU, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CPU;
    fromPartial(object: Partial<CPU>): CPU;
    fromAmino(object: CPUAmino): CPU;
    toAmino(message: CPU): CPUAmino;
    fromAminoMsg(object: CPUAminoMsg): CPU;
    fromProtoMsg(message: CPUProtoMsg): CPU;
    toProto(message: CPU): Uint8Array;
    toProtoMsg(message: CPU): CPUProtoMsg;
};
export declare const Memory: {
    typeUrl: string;
    encode(message: Memory, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Memory;
    fromPartial(object: Partial<Memory>): Memory;
    fromAmino(object: MemoryAmino): Memory;
    toAmino(message: Memory): MemoryAmino;
    fromAminoMsg(object: MemoryAminoMsg): Memory;
    fromProtoMsg(message: MemoryProtoMsg): Memory;
    toProto(message: Memory): Uint8Array;
    toProtoMsg(message: Memory): MemoryProtoMsg;
};
export declare const Storage: {
    typeUrl: string;
    encode(message: Storage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Storage;
    fromPartial(object: Partial<Storage>): Storage;
    fromAmino(object: StorageAmino): Storage;
    toAmino(message: Storage): StorageAmino;
    fromAminoMsg(object: StorageAminoMsg): Storage;
    fromProtoMsg(message: StorageProtoMsg): Storage;
    toProto(message: Storage): Uint8Array;
    toProtoMsg(message: Storage): StorageProtoMsg;
};
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
