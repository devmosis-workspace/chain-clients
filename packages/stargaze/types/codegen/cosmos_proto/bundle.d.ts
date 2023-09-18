import * as _94 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _94.ScalarType;
    scalarTypeToJSON(object: _94.ScalarType): string;
    ScalarType: typeof _94.ScalarType;
    ScalarTypeSDKType: typeof _94.ScalarType;
    ScalarTypeAmino: typeof _94.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _94.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _94.InterfaceDescriptor;
        fromPartial(object: Partial<_94.InterfaceDescriptor>): _94.InterfaceDescriptor;
        fromAmino(object: _94.InterfaceDescriptorAmino): _94.InterfaceDescriptor;
        toAmino(message: _94.InterfaceDescriptor): _94.InterfaceDescriptorAmino;
        fromAminoMsg(object: _94.InterfaceDescriptorAminoMsg): _94.InterfaceDescriptor;
        fromProtoMsg(message: _94.InterfaceDescriptorProtoMsg): _94.InterfaceDescriptor;
        toProto(message: _94.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _94.InterfaceDescriptor): _94.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _94.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _94.ScalarDescriptor;
        fromPartial(object: Partial<_94.ScalarDescriptor>): _94.ScalarDescriptor;
        fromAmino(object: _94.ScalarDescriptorAmino): _94.ScalarDescriptor;
        toAmino(message: _94.ScalarDescriptor): _94.ScalarDescriptorAmino;
        fromAminoMsg(object: _94.ScalarDescriptorAminoMsg): _94.ScalarDescriptor;
        fromProtoMsg(message: _94.ScalarDescriptorProtoMsg): _94.ScalarDescriptor;
        toProto(message: _94.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _94.ScalarDescriptor): _94.ScalarDescriptorProtoMsg;
    };
};
