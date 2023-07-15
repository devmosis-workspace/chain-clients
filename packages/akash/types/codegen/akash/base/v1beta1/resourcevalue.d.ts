import * as _m0 from "protobufjs/minimal";
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
    val: Uint8Array;
}
/** Unit stores cpu, memory and storage metrics */
export interface ResourceValueSDKType {
    val: Uint8Array;
}
export declare const ResourceValue: {
    encode(message: ResourceValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResourceValue;
    fromPartial(object: Partial<ResourceValue>): ResourceValue;
};
