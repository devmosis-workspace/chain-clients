import * as _219 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _219.ScalarType;
    scalarTypeToJSON(object: _219.ScalarType): string;
    ScalarType: typeof _219.ScalarType;
    ScalarTypeSDKType: typeof _219.ScalarType;
    InterfaceDescriptor: {
        encode(message: _219.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _219.InterfaceDescriptor;
        fromPartial(object: Partial<_219.InterfaceDescriptor>): _219.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _219.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _219.ScalarDescriptor;
        fromPartial(object: Partial<_219.ScalarDescriptor>): _219.ScalarDescriptor;
    };
};
