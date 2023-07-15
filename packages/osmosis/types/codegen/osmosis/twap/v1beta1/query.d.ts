import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ArithmeticTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
    endTime?: Timestamp;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface GeometricTwapRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
    endTime?: Timestamp;
}
export interface GeometricTwapRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
}
export interface GeometricTwapResponse {
    geometricTwap: string;
}
export interface GeometricTwapResponseSDKType {
    geometric_twap: string;
}
export interface GeometricTwapToNowRequest {
    poolId: Long;
    baseAsset: string;
    quoteAsset: string;
    startTime?: Timestamp;
}
export interface GeometricTwapToNowRequestSDKType {
    pool_id: Long;
    base_asset: string;
    quote_asset: string;
    start_time?: TimestampSDKType;
}
export interface GeometricTwapToNowResponse {
    geometricTwap: string;
}
export interface GeometricTwapToNowResponseSDKType {
    geometric_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params?: Params;
}
export interface ParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    encode(message: ArithmeticTwapRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ArithmeticTwapRequest;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
};
export declare const ArithmeticTwapResponse: {
    encode(message: ArithmeticTwapResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ArithmeticTwapResponse;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
};
export declare const ArithmeticTwapToNowRequest: {
    encode(message: ArithmeticTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ArithmeticTwapToNowRequest;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
};
export declare const ArithmeticTwapToNowResponse: {
    encode(message: ArithmeticTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ArithmeticTwapToNowResponse;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
};
export declare const GeometricTwapRequest: {
    encode(message: GeometricTwapRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GeometricTwapRequest;
    fromPartial(object: Partial<GeometricTwapRequest>): GeometricTwapRequest;
};
export declare const GeometricTwapResponse: {
    encode(message: GeometricTwapResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GeometricTwapResponse;
    fromPartial(object: Partial<GeometricTwapResponse>): GeometricTwapResponse;
};
export declare const GeometricTwapToNowRequest: {
    encode(message: GeometricTwapToNowRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GeometricTwapToNowRequest;
    fromPartial(object: Partial<GeometricTwapToNowRequest>): GeometricTwapToNowRequest;
};
export declare const GeometricTwapToNowResponse: {
    encode(message: GeometricTwapToNowResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GeometricTwapToNowResponse;
    fromPartial(object: Partial<GeometricTwapToNowResponse>): GeometricTwapToNowResponse;
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
