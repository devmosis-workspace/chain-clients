import * as _181 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _181.ScalarType;
    scalarTypeToJSON(object: _181.ScalarType): string;
    ScalarType: typeof _181.ScalarType;
    ScalarTypeSDKType: typeof _181.ScalarType;
    InterfaceDescriptor: {
        encode(message: _181.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _181.InterfaceDescriptor;
        fromPartial(object: Partial<_181.InterfaceDescriptor>): _181.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _181.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _181.ScalarDescriptor;
        fromPartial(object: Partial<_181.ScalarDescriptor>): _181.ScalarDescriptor;
    };
};
