import * as _124 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _124.ScalarType;
    scalarTypeToJSON(object: _124.ScalarType): string;
    ScalarType: typeof _124.ScalarType;
    ScalarTypeSDKType: typeof _124.ScalarType;
    InterfaceDescriptor: {
        encode(message: _124.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _124.InterfaceDescriptor;
        fromPartial(object: Partial<_124.InterfaceDescriptor>): _124.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _124.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _124.ScalarDescriptor;
        fromPartial(object: Partial<_124.ScalarDescriptor>): _124.ScalarDescriptor;
    };
};
