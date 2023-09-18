import * as _130 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _130.ScalarType;
    scalarTypeToJSON(object: _130.ScalarType): string;
    ScalarType: typeof _130.ScalarType;
    ScalarTypeSDKType: typeof _130.ScalarType;
    ScalarTypeAmino: typeof _130.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _130.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _130.InterfaceDescriptor;
        fromPartial(object: Partial<_130.InterfaceDescriptor>): _130.InterfaceDescriptor;
        fromAmino(object: _130.InterfaceDescriptorAmino): _130.InterfaceDescriptor;
        toAmino(message: _130.InterfaceDescriptor): _130.InterfaceDescriptorAmino;
        fromAminoMsg(object: _130.InterfaceDescriptorAminoMsg): _130.InterfaceDescriptor;
        fromProtoMsg(message: _130.InterfaceDescriptorProtoMsg): _130.InterfaceDescriptor;
        toProto(message: _130.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _130.InterfaceDescriptor): _130.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _130.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _130.ScalarDescriptor;
        fromPartial(object: Partial<_130.ScalarDescriptor>): _130.ScalarDescriptor;
        fromAmino(object: _130.ScalarDescriptorAmino): _130.ScalarDescriptor;
        toAmino(message: _130.ScalarDescriptor): _130.ScalarDescriptorAmino;
        fromAminoMsg(object: _130.ScalarDescriptorAminoMsg): _130.ScalarDescriptor;
        fromProtoMsg(message: _130.ScalarDescriptorProtoMsg): _130.ScalarDescriptor;
        toProto(message: _130.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _130.ScalarDescriptor): _130.ScalarDescriptorProtoMsg;
    };
};
