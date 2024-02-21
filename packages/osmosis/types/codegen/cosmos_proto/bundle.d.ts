import * as _240 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _240.ScalarType;
    scalarTypeToJSON(object: _240.ScalarType): string;
    ScalarType: typeof _240.ScalarType;
    ScalarTypeSDKType: typeof _240.ScalarType;
    ScalarTypeAmino: typeof _240.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _240.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _240.InterfaceDescriptor;
        fromPartial(object: Partial<_240.InterfaceDescriptor>): _240.InterfaceDescriptor;
        fromAmino(object: _240.InterfaceDescriptorAmino): _240.InterfaceDescriptor;
        toAmino(message: _240.InterfaceDescriptor): _240.InterfaceDescriptorAmino;
        fromAminoMsg(object: _240.InterfaceDescriptorAminoMsg): _240.InterfaceDescriptor;
        fromProtoMsg(message: _240.InterfaceDescriptorProtoMsg): _240.InterfaceDescriptor;
        toProto(message: _240.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _240.InterfaceDescriptor): _240.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _240.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _240.ScalarDescriptor;
        fromPartial(object: Partial<_240.ScalarDescriptor>): _240.ScalarDescriptor;
        fromAmino(object: _240.ScalarDescriptorAmino): _240.ScalarDescriptor;
        toAmino(message: _240.ScalarDescriptor): _240.ScalarDescriptorAmino;
        fromAminoMsg(object: _240.ScalarDescriptorAminoMsg): _240.ScalarDescriptor;
        fromProtoMsg(message: _240.ScalarDescriptorProtoMsg): _240.ScalarDescriptor;
        toProto(message: _240.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _240.ScalarDescriptor): _240.ScalarDescriptorProtoMsg;
    };
};
