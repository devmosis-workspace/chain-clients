import * as _130 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _130.ScalarType;
    scalarTypeToJSON(object: _130.ScalarType): string;
    ScalarType: typeof _130.ScalarType;
    ScalarTypeSDKType: typeof _130.ScalarType;
    InterfaceDescriptor: {
        encode(message: _130.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _130.InterfaceDescriptor;
        fromPartial(object: Partial<_130.InterfaceDescriptor>): _130.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _130.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _130.ScalarDescriptor;
        fromPartial(object: Partial<_130.ScalarDescriptor>): _130.ScalarDescriptor;
    };
};
