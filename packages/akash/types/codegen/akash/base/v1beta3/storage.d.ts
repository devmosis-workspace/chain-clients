import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    name: string;
    quantity: ResourceValue;
    attributes: Attribute[];
}
export interface StorageProtoMsg {
    typeUrl: "/akash.base.v1beta3.Storage";
    value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
    name?: string;
    quantity?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
    type: "/akash.base.v1beta3.Storage";
    value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
    name: string;
    quantity: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
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
