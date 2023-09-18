import * as _154 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _154.ScalarType;
    scalarTypeToJSON(object: _154.ScalarType): string;
    ScalarType: typeof _154.ScalarType;
    ScalarTypeSDKType: typeof _154.ScalarType;
    ScalarTypeAmino: typeof _154.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _154.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _154.InterfaceDescriptor;
        fromPartial(object: Partial<_154.InterfaceDescriptor>): _154.InterfaceDescriptor;
        fromAmino(object: _154.InterfaceDescriptorAmino): _154.InterfaceDescriptor;
        toAmino(message: _154.InterfaceDescriptor): _154.InterfaceDescriptorAmino;
        fromAminoMsg(object: _154.InterfaceDescriptorAminoMsg): _154.InterfaceDescriptor;
        fromProtoMsg(message: _154.InterfaceDescriptorProtoMsg): _154.InterfaceDescriptor;
        toProto(message: _154.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _154.InterfaceDescriptor): _154.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _154.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _154.ScalarDescriptor;
        fromPartial(object: Partial<_154.ScalarDescriptor>): _154.ScalarDescriptor;
        fromAmino(object: _154.ScalarDescriptorAmino): _154.ScalarDescriptor;
        toAmino(message: _154.ScalarDescriptor): _154.ScalarDescriptorAmino;
        fromAminoMsg(object: _154.ScalarDescriptorAminoMsg): _154.ScalarDescriptor;
        fromProtoMsg(message: _154.ScalarDescriptorProtoMsg): _154.ScalarDescriptor;
        toProto(message: _154.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _154.ScalarDescriptor): _154.ScalarDescriptorProtoMsg;
    };
};
