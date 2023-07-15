import { ResourceValue, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
    units?: ResourceValue;
    attributes: Attribute[];
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
    units?: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
    quantity?: ResourceValue;
    attributes: Attribute[];
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
    quantity?: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
    quantity?: ResourceValue;
    attributes: Attribute[];
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
    quantity?: ResourceValueSDKType;
    attributes: AttributeSDKType[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
    cpu?: CPU;
    memory?: Memory;
    storage?: Storage;
    endpoints: Endpoint[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
    cpu?: CPUSDKType;
    memory?: MemorySDKType;
    storage?: StorageSDKType;
    endpoints: EndpointSDKType[];
}
export declare const CPU: {
    encode(message: CPU, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CPU;
    fromPartial(object: Partial<CPU>): CPU;
};
export declare const Memory: {
    encode(message: Memory, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Memory;
    fromPartial(object: Partial<Memory>): Memory;
};
export declare const Storage: {
    encode(message: Storage, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Storage;
    fromPartial(object: Partial<Storage>): Storage;
};
export declare const ResourceUnits: {
    encode(message: ResourceUnits, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ResourceUnits;
    fromPartial(object: Partial<ResourceUnits>): ResourceUnits;
};
