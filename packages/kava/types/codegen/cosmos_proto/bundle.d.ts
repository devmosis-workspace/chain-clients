import * as _171 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _171.ScalarType;
    scalarTypeToJSON(object: _171.ScalarType): string;
    ScalarType: typeof _171.ScalarType;
    ScalarTypeSDKType: typeof _171.ScalarType;
    ScalarTypeAmino: typeof _171.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _171.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _171.InterfaceDescriptor;
        fromPartial(object: Partial<_171.InterfaceDescriptor>): _171.InterfaceDescriptor;
        fromAmino(object: _171.InterfaceDescriptorAmino): _171.InterfaceDescriptor;
        toAmino(message: _171.InterfaceDescriptor): _171.InterfaceDescriptorAmino;
        fromAminoMsg(object: _171.InterfaceDescriptorAminoMsg): _171.InterfaceDescriptor;
        fromProtoMsg(message: _171.InterfaceDescriptorProtoMsg): _171.InterfaceDescriptor;
        toProto(message: _171.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _171.InterfaceDescriptor): _171.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _171.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _171.ScalarDescriptor;
        fromPartial(object: Partial<_171.ScalarDescriptor>): _171.ScalarDescriptor;
        fromAmino(object: _171.ScalarDescriptorAmino): _171.ScalarDescriptor;
        toAmino(message: _171.ScalarDescriptor): _171.ScalarDescriptorAmino;
        fromAminoMsg(object: _171.ScalarDescriptorAminoMsg): _171.ScalarDescriptor;
        fromProtoMsg(message: _171.ScalarDescriptorProtoMsg): _171.ScalarDescriptor;
        toProto(message: _171.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _171.ScalarDescriptor): _171.ScalarDescriptorProtoMsg;
    };
};
