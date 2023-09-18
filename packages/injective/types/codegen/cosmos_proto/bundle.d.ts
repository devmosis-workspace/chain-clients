import * as _189 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _189.ScalarType;
    scalarTypeToJSON(object: _189.ScalarType): string;
    ScalarType: typeof _189.ScalarType;
    ScalarTypeSDKType: typeof _189.ScalarType;
    ScalarTypeAmino: typeof _189.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _189.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _189.InterfaceDescriptor;
        fromPartial(object: Partial<_189.InterfaceDescriptor>): _189.InterfaceDescriptor;
        fromAmino(object: _189.InterfaceDescriptorAmino): _189.InterfaceDescriptor;
        toAmino(message: _189.InterfaceDescriptor): _189.InterfaceDescriptorAmino;
        fromAminoMsg(object: _189.InterfaceDescriptorAminoMsg): _189.InterfaceDescriptor;
        fromProtoMsg(message: _189.InterfaceDescriptorProtoMsg): _189.InterfaceDescriptor;
        toProto(message: _189.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _189.InterfaceDescriptor): _189.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _189.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _189.ScalarDescriptor;
        fromPartial(object: Partial<_189.ScalarDescriptor>): _189.ScalarDescriptor;
        fromAmino(object: _189.ScalarDescriptorAmino): _189.ScalarDescriptor;
        toAmino(message: _189.ScalarDescriptor): _189.ScalarDescriptorAmino;
        fromAminoMsg(object: _189.ScalarDescriptorAminoMsg): _189.ScalarDescriptor;
        fromProtoMsg(message: _189.ScalarDescriptorProtoMsg): _189.ScalarDescriptor;
        toProto(message: _189.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _189.ScalarDescriptor): _189.ScalarDescriptorProtoMsg;
    };
};
