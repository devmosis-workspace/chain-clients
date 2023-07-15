import * as _77 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _77.ScalarType;
    scalarTypeToJSON(object: _77.ScalarType): string;
    ScalarType: typeof _77.ScalarType;
    ScalarTypeSDKType: typeof _77.ScalarType;
    InterfaceDescriptor: {
        encode(message: _77.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _77.InterfaceDescriptor;
        fromPartial(object: Partial<_77.InterfaceDescriptor>): _77.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _77.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _77.ScalarDescriptor;
        fromPartial(object: Partial<_77.ScalarDescriptor>): _77.ScalarDescriptor;
    };
};
