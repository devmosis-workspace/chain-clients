import * as _148 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _148.ScalarType;
    scalarTypeToJSON(object: _148.ScalarType): string;
    ScalarType: typeof _148.ScalarType;
    ScalarTypeSDKType: typeof _148.ScalarType;
    InterfaceDescriptor: {
        encode(message: _148.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _148.InterfaceDescriptor;
        fromPartial(object: Partial<_148.InterfaceDescriptor>): _148.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _148.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _148.ScalarDescriptor;
        fromPartial(object: Partial<_148.ScalarDescriptor>): _148.ScalarDescriptor;
    };
};
