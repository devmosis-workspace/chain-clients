import * as _m0 from "protobufjs/minimal";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestSDKType {
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
    /** interface_names is an array of all the registered interfaces. */
    interfaceNames: string[];
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseSDKType {
    interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
    /** interface_name defines the interface to query the implementations for. */
    interfaceName: string;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestSDKType {
    interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
    implementationMessageNames: string[];
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseSDKType {
    implementation_message_names: string[];
}
export declare const ListAllInterfacesRequest: {
    encode(_: ListAllInterfacesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ListAllInterfacesRequest;
    fromPartial(_: Partial<ListAllInterfacesRequest>): ListAllInterfacesRequest;
};
export declare const ListAllInterfacesResponse: {
    encode(message: ListAllInterfacesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListAllInterfacesResponse;
    fromPartial(object: Partial<ListAllInterfacesResponse>): ListAllInterfacesResponse;
};
export declare const ListImplementationsRequest: {
    encode(message: ListImplementationsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListImplementationsRequest;
    fromPartial(object: Partial<ListImplementationsRequest>): ListImplementationsRequest;
};
export declare const ListImplementationsResponse: {
    encode(message: ListImplementationsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListImplementationsResponse;
    fromPartial(object: Partial<ListImplementationsResponse>): ListImplementationsResponse;
};
