import * as _94 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _94.ScalarType;
    scalarTypeToJSON(object: _94.ScalarType): string;
    ScalarType: typeof _94.ScalarType;
    ScalarTypeSDKType: typeof _94.ScalarType;
    InterfaceDescriptor: {
        encode(message: _94.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _94.InterfaceDescriptor;
        fromPartial(object: Partial<_94.InterfaceDescriptor>): _94.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _94.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _94.ScalarDescriptor;
        fromPartial(object: Partial<_94.ScalarDescriptor>): _94.ScalarDescriptor;
    };
};
