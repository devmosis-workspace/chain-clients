import { BinaryWriter } from "../../../binary";
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
    val: Uint8Array;
}
export interface ResourceValueProtoMsg {
    typeUrl: "/akash.base.v1beta2.ResourceValue";
    value: Uint8Array;
}
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValueAmino {
    val?: string;
}
export interface ResourceValueAminoMsg {
    type: "/akash.base.v1beta2.ResourceValue";
    value: ResourceValueAmino;
}
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValueSDKType {
    val: Uint8Array;
}
export declare const ResourceValue: {
    typeUrl: string;
    encode(message: ResourceValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ResourceValue;
    fromPartial(object: Partial<ResourceValue>): ResourceValue;
    fromAmino(object: ResourceValueAmino): ResourceValue;
    toAmino(message: ResourceValue): ResourceValueAmino;
    fromAminoMsg(object: ResourceValueAminoMsg): ResourceValue;
    fromProtoMsg(message: ResourceValueProtoMsg): ResourceValue;
    toProto(message: ResourceValue): Uint8Array;
    toProtoMsg(message: ResourceValue): ResourceValueProtoMsg;
};
