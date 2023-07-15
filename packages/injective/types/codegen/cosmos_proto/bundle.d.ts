import * as _189 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _189.ScalarType;
    scalarTypeToJSON(object: _189.ScalarType): string;
    ScalarType: typeof _189.ScalarType;
    ScalarTypeSDKType: typeof _189.ScalarType;
    InterfaceDescriptor: {
        encode(message: _189.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _189.InterfaceDescriptor;
        fromPartial(object: Partial<_189.InterfaceDescriptor>): _189.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _189.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        fromJSON(object: any): _189.ScalarDescriptor;
        fromPartial(object: Partial<_189.ScalarDescriptor>): _189.ScalarDescriptor;
    };
};
