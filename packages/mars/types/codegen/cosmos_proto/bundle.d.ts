import * as _114 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _114.ScalarType;
    scalarTypeToJSON(object: _114.ScalarType): string;
    ScalarType: typeof _114.ScalarType;
    ScalarTypeSDKType: typeof _114.ScalarType;
    InterfaceDescriptor: {
        encode(message: _114.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _114.InterfaceDescriptor;
        fromPartial(object: Partial<_114.InterfaceDescriptor>): _114.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _114.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _114.ScalarDescriptor;
        fromPartial(object: Partial<_114.ScalarDescriptor>): _114.ScalarDescriptor;
    };
};
