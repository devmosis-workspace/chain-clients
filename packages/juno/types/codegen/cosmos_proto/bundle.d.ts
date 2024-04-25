import * as _167 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _167.ScalarType;
    scalarTypeToJSON(object: _167.ScalarType): string;
    ScalarType: typeof _167.ScalarType;
    ScalarTypeSDKType: typeof _167.ScalarType;
    ScalarTypeAmino: typeof _167.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _167.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _167.InterfaceDescriptor;
        fromPartial(object: Partial<_167.InterfaceDescriptor>): _167.InterfaceDescriptor;
        fromAmino(object: _167.InterfaceDescriptorAmino): _167.InterfaceDescriptor;
        toAmino(message: _167.InterfaceDescriptor): _167.InterfaceDescriptorAmino;
        fromAminoMsg(object: _167.InterfaceDescriptorAminoMsg): _167.InterfaceDescriptor;
        fromProtoMsg(message: _167.InterfaceDescriptorProtoMsg): _167.InterfaceDescriptor;
        toProto(message: _167.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _167.InterfaceDescriptor): _167.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _167.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _167.ScalarDescriptor;
        fromPartial(object: Partial<_167.ScalarDescriptor>): _167.ScalarDescriptor;
        fromAmino(object: _167.ScalarDescriptorAmino): _167.ScalarDescriptor;
        toAmino(message: _167.ScalarDescriptor): _167.ScalarDescriptorAmino;
        fromAminoMsg(object: _167.ScalarDescriptorAminoMsg): _167.ScalarDescriptor;
        fromProtoMsg(message: _167.ScalarDescriptorProtoMsg): _167.ScalarDescriptor;
        toProto(message: _167.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _167.ScalarDescriptor): _167.ScalarDescriptorProtoMsg;
    };
};
