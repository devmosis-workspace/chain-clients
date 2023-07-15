import * as _146 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _146.ScalarType;
    scalarTypeToJSON(object: _146.ScalarType): string;
    ScalarType: typeof _146.ScalarType;
    ScalarTypeSDKType: typeof _146.ScalarType;
    InterfaceDescriptor: {
        encode(message: _146.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _146.InterfaceDescriptor;
        fromPartial(object: Partial<_146.InterfaceDescriptor>): _146.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _146.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _146.ScalarDescriptor;
        fromPartial(object: Partial<_146.ScalarDescriptor>): _146.ScalarDescriptor;
    };
};
