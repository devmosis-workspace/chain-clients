import * as _107 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _107.ScalarType;
    scalarTypeToJSON(object: _107.ScalarType): string;
    ScalarType: typeof _107.ScalarType;
    ScalarTypeSDKType: typeof _107.ScalarType;
    InterfaceDescriptor: {
        encode(message: _107.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _107.InterfaceDescriptor;
        fromPartial(object: Partial<_107.InterfaceDescriptor>): _107.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _107.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _107.ScalarDescriptor;
        fromPartial(object: Partial<_107.ScalarDescriptor>): _107.ScalarDescriptor;
    };
};
