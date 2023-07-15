import * as _154 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _154.ScalarType;
    scalarTypeToJSON(object: _154.ScalarType): string;
    ScalarType: typeof _154.ScalarType;
    ScalarTypeSDKType: typeof _154.ScalarType;
    InterfaceDescriptor: {
        encode(message: _154.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _154.InterfaceDescriptor;
        fromPartial(object: Partial<_154.InterfaceDescriptor>): _154.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _154.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _154.ScalarDescriptor;
        fromPartial(object: Partial<_154.ScalarDescriptor>): _154.ScalarDescriptor;
    };
};
