import { CPU, CPUSDKType, Memory, MemorySDKType, Storage, StorageSDKType } from "./resource";
import { Endpoint, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu?: CPU;
    memory?: Memory;
    storage: Storage[];
    endpoints: Endpoint[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
    cpu?: CPUSDKType;
    memory?: MemorySDKType;
    storage: StorageSDKType[];
    endpoints: EndpointSDKType[];
}
export declare const ResourceUnits: {
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResourceUnits;
    fromPartial(object: Partial<ResourceUnits>): ResourceUnits;
};
