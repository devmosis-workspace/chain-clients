import * as _72 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _72.ScalarType;
    scalarTypeToJSON(object: _72.ScalarType): string;
    ScalarType: typeof _72.ScalarType;
    ScalarTypeSDKType: typeof _72.ScalarType;
    InterfaceDescriptor: {
        encode(message: _72.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _72.InterfaceDescriptor;
        fromPartial(object: Partial<_72.InterfaceDescriptor>): _72.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _72.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _72.ScalarDescriptor;
        fromPartial(object: Partial<_72.ScalarDescriptor>): _72.ScalarDescriptor;
    };
};
