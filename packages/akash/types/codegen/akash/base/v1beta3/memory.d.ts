import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity: ResourceValue;
    attributes: Attribute[];
}
export interface MemoryProtoMsg {
    typeUrl: "/akash.base.v1beta3.Memory";
    value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
    type: "/akash.base.v1beta3.Memory";
    value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
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
