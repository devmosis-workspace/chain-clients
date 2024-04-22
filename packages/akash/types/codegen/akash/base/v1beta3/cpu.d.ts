import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryWriter } from "../../../binary";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units: ResourceValue;
    attributes: Attribute[];
}
export interface CPUProtoMsg {
    typeUrl: "/akash.base.v1beta3.CPU";
    value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
    units?: ResourceValueAmino;
    attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
    type: "/akash.base.v1beta3.CPU";
    value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
    units: ResourceValueSDKType;
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
