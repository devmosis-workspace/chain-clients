import * as _157 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _157.ScalarType;
    scalarTypeToJSON(object: _157.ScalarType): string;
    ScalarType: typeof _157.ScalarType;
    ScalarTypeSDKType: typeof _157.ScalarType;
    ScalarTypeAmino: typeof _157.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _157.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.InterfaceDescriptor;
        fromPartial(object: Partial<_157.InterfaceDescriptor>): _157.InterfaceDescriptor;
        fromAmino(object: _157.InterfaceDescriptorAmino): _157.InterfaceDescriptor;
        toAmino(message: _157.InterfaceDescriptor): _157.InterfaceDescriptorAmino;
        fromAminoMsg(object: _157.InterfaceDescriptorAminoMsg): _157.InterfaceDescriptor;
        fromProtoMsg(message: _157.InterfaceDescriptorProtoMsg): _157.InterfaceDescriptor;
        toProto(message: _157.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _157.InterfaceDescriptor): _157.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _157.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _157.ScalarDescriptor;
        fromPartial(object: Partial<_157.ScalarDescriptor>): _157.ScalarDescriptor;
        fromAmino(object: _157.ScalarDescriptorAmino): _157.ScalarDescriptor;
        toAmino(message: _157.ScalarDescriptor): _157.ScalarDescriptorAmino;
        fromAminoMsg(object: _157.ScalarDescriptorAminoMsg): _157.ScalarDescriptor;
        fromProtoMsg(message: _157.ScalarDescriptorProtoMsg): _157.ScalarDescriptor;
        toProto(message: _157.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _157.ScalarDescriptor): _157.ScalarDescriptorProtoMsg;
    };
};
