import * as _m0 from "protobufjs/minimal";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequestSDKType {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimumGasPrice: string;
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponseSDKType {
    minimum_gas_price: string;
}
export declare const ConfigRequest: {
    encode(_: ConfigRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ConfigRequest;
    fromPartial(_: Partial<ConfigRequest>): ConfigRequest;
};
export declare const ConfigResponse: {
    encode(message: ConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfigResponse;
    fromPartial(object: Partial<ConfigResponse>): ConfigResponse;
};
