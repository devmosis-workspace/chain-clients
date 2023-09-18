import * as _114 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _114.ScalarType;
    scalarTypeToJSON(object: _114.ScalarType): string;
    ScalarType: typeof _114.ScalarType;
    ScalarTypeSDKType: typeof _114.ScalarType;
    ScalarTypeAmino: typeof _114.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _114.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _114.InterfaceDescriptor;
        fromPartial(object: Partial<_114.InterfaceDescriptor>): _114.InterfaceDescriptor;
        fromAmino(object: _114.InterfaceDescriptorAmino): _114.InterfaceDescriptor;
        toAmino(message: _114.InterfaceDescriptor): _114.InterfaceDescriptorAmino;
        fromAminoMsg(object: _114.InterfaceDescriptorAminoMsg): _114.InterfaceDescriptor;
        fromProtoMsg(message: _114.InterfaceDescriptorProtoMsg): _114.InterfaceDescriptor;
        toProto(message: _114.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _114.InterfaceDescriptor): _114.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _114.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _114.ScalarDescriptor;
        fromPartial(object: Partial<_114.ScalarDescriptor>): _114.ScalarDescriptor;
        fromAmino(object: _114.ScalarDescriptorAmino): _114.ScalarDescriptor;
        toAmino(message: _114.ScalarDescriptor): _114.ScalarDescriptorAmino;
        fromAminoMsg(object: _114.ScalarDescriptorAminoMsg): _114.ScalarDescriptor;
        fromProtoMsg(message: _114.ScalarDescriptorProtoMsg): _114.ScalarDescriptor;
        toProto(message: _114.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _114.ScalarDescriptor): _114.ScalarDescriptorProtoMsg;
    };
};
