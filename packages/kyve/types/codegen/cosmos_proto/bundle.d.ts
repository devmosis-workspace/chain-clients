import * as _148 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _148.ScalarType;
    scalarTypeToJSON(object: _148.ScalarType): string;
    ScalarType: typeof _148.ScalarType;
    ScalarTypeSDKType: typeof _148.ScalarType;
    ScalarTypeAmino: typeof _148.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _148.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _148.InterfaceDescriptor;
        fromPartial(object: Partial<_148.InterfaceDescriptor>): _148.InterfaceDescriptor;
        fromAmino(object: _148.InterfaceDescriptorAmino): _148.InterfaceDescriptor;
        toAmino(message: _148.InterfaceDescriptor): _148.InterfaceDescriptorAmino;
        fromAminoMsg(object: _148.InterfaceDescriptorAminoMsg): _148.InterfaceDescriptor;
        fromProtoMsg(message: _148.InterfaceDescriptorProtoMsg): _148.InterfaceDescriptor;
        toProto(message: _148.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _148.InterfaceDescriptor): _148.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _148.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _148.ScalarDescriptor;
        fromPartial(object: Partial<_148.ScalarDescriptor>): _148.ScalarDescriptor;
        fromAmino(object: _148.ScalarDescriptorAmino): _148.ScalarDescriptor;
        toAmino(message: _148.ScalarDescriptor): _148.ScalarDescriptorAmino;
        fromAminoMsg(object: _148.ScalarDescriptorAminoMsg): _148.ScalarDescriptor;
        fromProtoMsg(message: _148.ScalarDescriptorProtoMsg): _148.ScalarDescriptor;
        toProto(message: _148.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _148.ScalarDescriptor): _148.ScalarDescriptorProtoMsg;
    };
};
