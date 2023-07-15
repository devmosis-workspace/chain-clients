import * as _153 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _153.ScalarType;
    scalarTypeToJSON(object: _153.ScalarType): string;
    ScalarType: typeof _153.ScalarType;
    ScalarTypeSDKType: typeof _153.ScalarType;
    InterfaceDescriptor: {
        encode(message: _153.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _153.InterfaceDescriptor;
        fromPartial(object: Partial<_153.InterfaceDescriptor>): _153.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _153.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _153.ScalarDescriptor;
        fromPartial(object: Partial<_153.ScalarDescriptor>): _153.ScalarDescriptor;
    };
};
