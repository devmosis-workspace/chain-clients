import * as _103 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _103.ScalarType;
    scalarTypeToJSON(object: _103.ScalarType): string;
    ScalarType: typeof _103.ScalarType;
    ScalarTypeSDKType: typeof _103.ScalarType;
    ScalarTypeAmino: typeof _103.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _103.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _103.InterfaceDescriptor;
        fromPartial(object: Partial<_103.InterfaceDescriptor>): _103.InterfaceDescriptor;
        fromAmino(object: _103.InterfaceDescriptorAmino): _103.InterfaceDescriptor;
        toAmino(message: _103.InterfaceDescriptor): _103.InterfaceDescriptorAmino;
        fromAminoMsg(object: _103.InterfaceDescriptorAminoMsg): _103.InterfaceDescriptor;
        fromProtoMsg(message: _103.InterfaceDescriptorProtoMsg): _103.InterfaceDescriptor;
        toProto(message: _103.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _103.InterfaceDescriptor): _103.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _103.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _103.ScalarDescriptor;
        fromPartial(object: Partial<_103.ScalarDescriptor>): _103.ScalarDescriptor;
        fromAmino(object: _103.ScalarDescriptorAmino): _103.ScalarDescriptor;
        toAmino(message: _103.ScalarDescriptor): _103.ScalarDescriptorAmino;
        fromAminoMsg(object: _103.ScalarDescriptorAminoMsg): _103.ScalarDescriptor;
        fromProtoMsg(message: _103.ScalarDescriptorProtoMsg): _103.ScalarDescriptor;
        toProto(message: _103.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _103.ScalarDescriptor): _103.ScalarDescriptorProtoMsg;
    };
};
