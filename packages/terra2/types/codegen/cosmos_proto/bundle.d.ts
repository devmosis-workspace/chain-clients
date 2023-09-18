import * as _107 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _107.ScalarType;
    scalarTypeToJSON(object: _107.ScalarType): string;
    ScalarType: typeof _107.ScalarType;
    ScalarTypeSDKType: typeof _107.ScalarType;
    ScalarTypeAmino: typeof _107.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _107.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _107.InterfaceDescriptor;
        fromPartial(object: Partial<_107.InterfaceDescriptor>): _107.InterfaceDescriptor;
        fromAmino(object: _107.InterfaceDescriptorAmino): _107.InterfaceDescriptor;
        toAmino(message: _107.InterfaceDescriptor): _107.InterfaceDescriptorAmino;
        fromAminoMsg(object: _107.InterfaceDescriptorAminoMsg): _107.InterfaceDescriptor;
        fromProtoMsg(message: _107.InterfaceDescriptorProtoMsg): _107.InterfaceDescriptor;
        toProto(message: _107.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _107.InterfaceDescriptor): _107.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _107.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _107.ScalarDescriptor;
        fromPartial(object: Partial<_107.ScalarDescriptor>): _107.ScalarDescriptor;
        fromAmino(object: _107.ScalarDescriptorAmino): _107.ScalarDescriptor;
        toAmino(message: _107.ScalarDescriptor): _107.ScalarDescriptorAmino;
        fromAminoMsg(object: _107.ScalarDescriptorAminoMsg): _107.ScalarDescriptor;
        fromProtoMsg(message: _107.ScalarDescriptorProtoMsg): _107.ScalarDescriptor;
        toProto(message: _107.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _107.ScalarDescriptor): _107.ScalarDescriptorProtoMsg;
    };
};
