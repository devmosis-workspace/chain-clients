import * as _185 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _185.ScalarType;
    scalarTypeToJSON(object: _185.ScalarType): string;
    ScalarType: typeof _185.ScalarType;
    ScalarTypeSDKType: typeof _185.ScalarType;
    ScalarTypeAmino: typeof _185.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _185.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _185.InterfaceDescriptor;
        fromPartial(object: Partial<_185.InterfaceDescriptor>): _185.InterfaceDescriptor;
        fromAmino(object: _185.InterfaceDescriptorAmino): _185.InterfaceDescriptor;
        toAmino(message: _185.InterfaceDescriptor): _185.InterfaceDescriptorAmino;
        fromAminoMsg(object: _185.InterfaceDescriptorAminoMsg): _185.InterfaceDescriptor;
        fromProtoMsg(message: _185.InterfaceDescriptorProtoMsg): _185.InterfaceDescriptor;
        toProto(message: _185.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _185.InterfaceDescriptor): _185.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _185.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _185.ScalarDescriptor;
        fromPartial(object: Partial<_185.ScalarDescriptor>): _185.ScalarDescriptor;
        fromAmino(object: _185.ScalarDescriptorAmino): _185.ScalarDescriptor;
        toAmino(message: _185.ScalarDescriptor): _185.ScalarDescriptorAmino;
        fromAminoMsg(object: _185.ScalarDescriptorAminoMsg): _185.ScalarDescriptor;
        fromProtoMsg(message: _185.ScalarDescriptorProtoMsg): _185.ScalarDescriptor;
        toProto(message: _185.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _185.ScalarDescriptor): _185.ScalarDescriptorProtoMsg;
    };
};
