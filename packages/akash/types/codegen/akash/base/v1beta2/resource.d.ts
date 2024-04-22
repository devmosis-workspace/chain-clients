import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units: ResourceValue;
    attributes: Attribute[];
}
export interface CPUProtoMsg {
    typeUrl: "/akash.base.v1beta2.CPU";
    value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
    units?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
    type: "/akash.base.v1beta2.CPU";
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
    typeUrl: "/akash.base.v1beta2.Memory";
    value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
    type: "/akash.base.v1beta2.Memory";
    value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    name: string;
    quantity: ResourceValue;
    attributes: Attribute[];
}
export interface StorageProtoMsg {
    typeUrl: "/akash.base.v1beta2.Storage";
    value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
    name?: string;
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
    type: "/akash.base.v1beta2.Storage";
    value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
    name: string;
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
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
