import * as _72 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _72.ScalarType;
    scalarTypeToJSON(object: _72.ScalarType): string;
    ScalarType: typeof _72.ScalarType;
    ScalarTypeSDKType: typeof _72.ScalarType;
    ScalarTypeAmino: typeof _72.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _72.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _72.InterfaceDescriptor;
        fromPartial(object: Partial<_72.InterfaceDescriptor>): _72.InterfaceDescriptor;
        fromAmino(object: _72.InterfaceDescriptorAmino): _72.InterfaceDescriptor;
        toAmino(message: _72.InterfaceDescriptor): _72.InterfaceDescriptorAmino;
        fromAminoMsg(object: _72.InterfaceDescriptorAminoMsg): _72.InterfaceDescriptor;
        fromProtoMsg(message: _72.InterfaceDescriptorProtoMsg): _72.InterfaceDescriptor;
        toProto(message: _72.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _72.InterfaceDescriptor): _72.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _72.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _72.ScalarDescriptor;
        fromPartial(object: Partial<_72.ScalarDescriptor>): _72.ScalarDescriptor;
        fromAmino(object: _72.ScalarDescriptorAmino): _72.ScalarDescriptor;
        toAmino(message: _72.ScalarDescriptor): _72.ScalarDescriptorAmino;
        fromAminoMsg(object: _72.ScalarDescriptorAminoMsg): _72.ScalarDescriptor;
        fromProtoMsg(message: _72.ScalarDescriptorProtoMsg): _72.ScalarDescriptor;
        toProto(message: _72.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _72.ScalarDescriptor): _72.ScalarDescriptorProtoMsg;
    };
};
