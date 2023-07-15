import * as _m0 from "protobufjs/minimal";
/** This describes how the endpoint is implemented when the lease is deployed */
export declare enum Endpoint_Kind {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    SHARED_HTTP = 0,
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    RANDOM_PORT = 1,
    UNRECOGNIZED = -1
}
export declare const Endpoint_KindSDKType: typeof Endpoint_Kind;
export declare function endpoint_KindFromJSON(object: any): Endpoint_Kind;
export declare function endpoint_KindToJSON(object: Endpoint_Kind): string;
/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
    kind: Endpoint_Kind;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointSDKType {
    kind: Endpoint_Kind;
}
export declare const Endpoint: {
    encode(message: Endpoint, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Endpoint;
    fromPartial(object: Partial<Endpoint>): Endpoint;
};
