import * as _195 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _195.ScalarType;
    scalarTypeToJSON(object: _195.ScalarType): string;
    ScalarType: typeof _195.ScalarType;
    ScalarTypeSDKType: typeof _195.ScalarType;
    ScalarTypeAmino: typeof _195.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _195.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _195.InterfaceDescriptor;
        fromPartial(object: Partial<_195.InterfaceDescriptor>): _195.InterfaceDescriptor;
        fromAmino(object: _195.InterfaceDescriptorAmino): _195.InterfaceDescriptor;
        toAmino(message: _195.InterfaceDescriptor): _195.InterfaceDescriptorAmino;
        fromAminoMsg(object: _195.InterfaceDescriptorAminoMsg): _195.InterfaceDescriptor;
        fromProtoMsg(message: _195.InterfaceDescriptorProtoMsg): _195.InterfaceDescriptor;
        toProto(message: _195.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _195.InterfaceDescriptor): _195.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _195.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _195.ScalarDescriptor;
        fromPartial(object: Partial<_195.ScalarDescriptor>): _195.ScalarDescriptor;
        fromAmino(object: _195.ScalarDescriptorAmino): _195.ScalarDescriptor;
        toAmino(message: _195.ScalarDescriptor): _195.ScalarDescriptorAmino;
        fromAminoMsg(object: _195.ScalarDescriptorAminoMsg): _195.ScalarDescriptor;
        fromProtoMsg(message: _195.ScalarDescriptorProtoMsg): _195.ScalarDescriptor;
        toProto(message: _195.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _195.ScalarDescriptor): _195.ScalarDescriptorProtoMsg;
    };
};
