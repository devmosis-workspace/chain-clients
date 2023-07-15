import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method.
 */
export interface InflationRateRequest {
}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method.
 */
export interface InflationRateRequestSDKType {
}
export interface InflationRateResponse {
    inflationRate: Uint8Array;
}
export interface InflationRateResponseSDKType {
    inflation_rate: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const InflationRateRequest: {
    encode(_: InflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): InflationRateRequest;
    fromPartial(_: Partial<InflationRateRequest>): InflationRateRequest;
};
export declare const InflationRateResponse: {
    encode(message: InflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InflationRateResponse;
    fromPartial(object: Partial<InflationRateResponse>): InflationRateResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
};
