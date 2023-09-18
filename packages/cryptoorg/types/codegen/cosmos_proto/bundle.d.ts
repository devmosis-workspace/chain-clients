import * as _124 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _124.ScalarType;
    scalarTypeToJSON(object: _124.ScalarType): string;
    ScalarType: typeof _124.ScalarType;
    ScalarTypeSDKType: typeof _124.ScalarType;
    ScalarTypeAmino: typeof _124.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _124.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _124.InterfaceDescriptor;
        fromPartial(object: Partial<_124.InterfaceDescriptor>): _124.InterfaceDescriptor;
        fromAmino(object: _124.InterfaceDescriptorAmino): _124.InterfaceDescriptor;
        toAmino(message: _124.InterfaceDescriptor): _124.InterfaceDescriptorAmino;
        fromAminoMsg(object: _124.InterfaceDescriptorAminoMsg): _124.InterfaceDescriptor;
        fromProtoMsg(message: _124.InterfaceDescriptorProtoMsg): _124.InterfaceDescriptor;
        toProto(message: _124.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _124.InterfaceDescriptor): _124.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _124.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _124.ScalarDescriptor;
        fromPartial(object: Partial<_124.ScalarDescriptor>): _124.ScalarDescriptor;
        fromAmino(object: _124.ScalarDescriptorAmino): _124.ScalarDescriptor;
        toAmino(message: _124.ScalarDescriptor): _124.ScalarDescriptorAmino;
        fromAminoMsg(object: _124.ScalarDescriptorAminoMsg): _124.ScalarDescriptor;
        fromProtoMsg(message: _124.ScalarDescriptorProtoMsg): _124.ScalarDescriptor;
        toProto(message: _124.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _124.ScalarDescriptor): _124.ScalarDescriptorProtoMsg;
    };
};
