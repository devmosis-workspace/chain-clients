import * as _m0 from "protobufjs/minimal";
export interface RegisterProxyRequest {
    sender: Uint8Array;
    proxyAddr: Uint8Array;
}
export interface RegisterProxyRequestSDKType {
    sender: Uint8Array;
    proxy_addr: Uint8Array;
}
export interface RegisterProxyResponse {
}
export interface RegisterProxyResponseSDKType {
}
export interface DeactivateProxyRequest {
    sender: Uint8Array;
}
export interface DeactivateProxyRequestSDKType {
    sender: Uint8Array;
}
export interface DeactivateProxyResponse {
}
export interface DeactivateProxyResponseSDKType {
}
export declare const RegisterProxyRequest: {
    encode(message: RegisterProxyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterProxyRequest;
    fromPartial(object: Partial<RegisterProxyRequest>): RegisterProxyRequest;
};
export declare const RegisterProxyResponse: {
    encode(_: RegisterProxyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterProxyResponse;
    fromPartial(_: Partial<RegisterProxyResponse>): RegisterProxyResponse;
};
export declare const DeactivateProxyRequest: {
    encode(message: DeactivateProxyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DeactivateProxyRequest;
    fromPartial(object: Partial<DeactivateProxyRequest>): DeactivateProxyRequest;
};
export declare const DeactivateProxyResponse: {
    encode(_: DeactivateProxyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): DeactivateProxyResponse;
    fromPartial(_: Partial<DeactivateProxyResponse>): DeactivateProxyResponse;
};
