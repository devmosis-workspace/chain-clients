import * as _205 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _205.ScalarType;
    scalarTypeToJSON(object: _205.ScalarType): string;
    ScalarType: typeof _205.ScalarType;
    ScalarTypeSDKType: typeof _205.ScalarType;
    ScalarTypeAmino: typeof _205.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _205.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _205.InterfaceDescriptor;
        fromPartial(object: Partial<_205.InterfaceDescriptor>): _205.InterfaceDescriptor;
        fromAmino(object: _205.InterfaceDescriptorAmino): _205.InterfaceDescriptor;
        toAmino(message: _205.InterfaceDescriptor): _205.InterfaceDescriptorAmino;
        fromAminoMsg(object: _205.InterfaceDescriptorAminoMsg): _205.InterfaceDescriptor;
        fromProtoMsg(message: _205.InterfaceDescriptorProtoMsg): _205.InterfaceDescriptor;
        toProto(message: _205.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _205.InterfaceDescriptor): _205.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _205.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _205.ScalarDescriptor;
        fromPartial(object: Partial<_205.ScalarDescriptor>): _205.ScalarDescriptor;
        fromAmino(object: _205.ScalarDescriptorAmino): _205.ScalarDescriptor;
        toAmino(message: _205.ScalarDescriptor): _205.ScalarDescriptorAmino;
        fromAminoMsg(object: _205.ScalarDescriptorAminoMsg): _205.ScalarDescriptor;
        fromProtoMsg(message: _205.ScalarDescriptorProtoMsg): _205.ScalarDescriptor;
        toProto(message: _205.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _205.ScalarDescriptor): _205.ScalarDescriptorProtoMsg;
    };
};
