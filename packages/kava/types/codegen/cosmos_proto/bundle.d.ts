import * as _171 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _171.ScalarType;
    scalarTypeToJSON(object: _171.ScalarType): string;
    ScalarType: typeof _171.ScalarType;
    ScalarTypeSDKType: typeof _171.ScalarType;
    InterfaceDescriptor: {
        encode(message: _171.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _171.InterfaceDescriptor;
        fromPartial(object: Partial<_171.InterfaceDescriptor>): _171.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _171.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _171.ScalarDescriptor;
        fromPartial(object: Partial<_171.ScalarDescriptor>): _171.ScalarDescriptor;
    };
};
