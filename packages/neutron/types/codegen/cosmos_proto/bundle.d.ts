import * as _233 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _233.ScalarType;
    scalarTypeToJSON(object: _233.ScalarType): string;
    ScalarType: typeof _233.ScalarType;
    ScalarTypeSDKType: typeof _233.ScalarType;
    ScalarTypeAmino: typeof _233.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _233.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _233.InterfaceDescriptor;
        fromPartial(object: Partial<_233.InterfaceDescriptor>): _233.InterfaceDescriptor;
        fromAmino(object: _233.InterfaceDescriptorAmino): _233.InterfaceDescriptor;
        toAmino(message: _233.InterfaceDescriptor): _233.InterfaceDescriptorAmino;
        fromAminoMsg(object: _233.InterfaceDescriptorAminoMsg): _233.InterfaceDescriptor;
        fromProtoMsg(message: _233.InterfaceDescriptorProtoMsg): _233.InterfaceDescriptor;
        toProto(message: _233.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _233.InterfaceDescriptor): _233.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _233.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _233.ScalarDescriptor;
        fromPartial(object: Partial<_233.ScalarDescriptor>): _233.ScalarDescriptor;
        fromAmino(object: _233.ScalarDescriptorAmino): _233.ScalarDescriptor;
        toAmino(message: _233.ScalarDescriptor): _233.ScalarDescriptorAmino;
        fromAminoMsg(object: _233.ScalarDescriptorAminoMsg): _233.ScalarDescriptor;
        fromProtoMsg(message: _233.ScalarDescriptorProtoMsg): _233.ScalarDescriptor;
        toProto(message: _233.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _233.ScalarDescriptor): _233.ScalarDescriptorProtoMsg;
    };
};
