import * as _121 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _121.ScalarType;
    scalarTypeToJSON(object: _121.ScalarType): string;
    ScalarType: typeof _121.ScalarType;
    ScalarTypeSDKType: typeof _121.ScalarType;
    ScalarTypeAmino: typeof _121.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _121.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _121.InterfaceDescriptor;
        fromPartial(object: Partial<_121.InterfaceDescriptor>): _121.InterfaceDescriptor;
        fromAmino(object: _121.InterfaceDescriptorAmino): _121.InterfaceDescriptor;
        toAmino(message: _121.InterfaceDescriptor): _121.InterfaceDescriptorAmino;
        fromAminoMsg(object: _121.InterfaceDescriptorAminoMsg): _121.InterfaceDescriptor;
        fromProtoMsg(message: _121.InterfaceDescriptorProtoMsg): _121.InterfaceDescriptor;
        toProto(message: _121.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _121.InterfaceDescriptor): _121.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _121.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _121.ScalarDescriptor;
        fromPartial(object: Partial<_121.ScalarDescriptor>): _121.ScalarDescriptor;
        fromAmino(object: _121.ScalarDescriptorAmino): _121.ScalarDescriptor;
        toAmino(message: _121.ScalarDescriptor): _121.ScalarDescriptorAmino;
        fromAminoMsg(object: _121.ScalarDescriptorAminoMsg): _121.ScalarDescriptor;
        fromProtoMsg(message: _121.ScalarDescriptorProtoMsg): _121.ScalarDescriptor;
        toProto(message: _121.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _121.ScalarDescriptor): _121.ScalarDescriptorProtoMsg;
    };
};
