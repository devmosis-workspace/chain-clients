import * as _77 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _77.ScalarType;
    scalarTypeToJSON(object: _77.ScalarType): string;
    ScalarType: typeof _77.ScalarType;
    ScalarTypeSDKType: typeof _77.ScalarType;
    ScalarTypeAmino: typeof _77.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _77.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _77.InterfaceDescriptor;
        fromPartial(object: Partial<_77.InterfaceDescriptor>): _77.InterfaceDescriptor;
        fromAmino(object: _77.InterfaceDescriptorAmino): _77.InterfaceDescriptor;
        toAmino(message: _77.InterfaceDescriptor): _77.InterfaceDescriptorAmino;
        fromAminoMsg(object: _77.InterfaceDescriptorAminoMsg): _77.InterfaceDescriptor;
        fromProtoMsg(message: _77.InterfaceDescriptorProtoMsg): _77.InterfaceDescriptor;
        toProto(message: _77.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _77.InterfaceDescriptor): _77.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _77.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _77.ScalarDescriptor;
        fromPartial(object: Partial<_77.ScalarDescriptor>): _77.ScalarDescriptor;
        fromAmino(object: _77.ScalarDescriptorAmino): _77.ScalarDescriptor;
        toAmino(message: _77.ScalarDescriptor): _77.ScalarDescriptorAmino;
        fromAminoMsg(object: _77.ScalarDescriptorAminoMsg): _77.ScalarDescriptor;
        fromProtoMsg(message: _77.ScalarDescriptorProtoMsg): _77.ScalarDescriptor;
        toProto(message: _77.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _77.ScalarDescriptor): _77.ScalarDescriptorProtoMsg;
    };
};
