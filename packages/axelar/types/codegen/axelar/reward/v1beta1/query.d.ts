import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequest {
    /**
     * InflationRateRequest represents a message that queries the Axelar specific
     * inflation RPC method. Ideally, this would use ValAddress as the validator
     * field type. However, this makes it awkward for REST-based calls, because it
     * would expect a byte array as part of the url. So, the bech32 encoded address
     * string is used for this request instead.
     */
    validator: string;
}
export interface InflationRateRequestProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.InflationRateRequest";
    value: Uint8Array;
}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequestAmino {
    /**
     * InflationRateRequest represents a message that queries the Axelar specific
     * inflation RPC method. Ideally, this would use ValAddress as the validator
     * field type. However, this makes it awkward for REST-based calls, because it
     * would expect a byte array as part of the url. So, the bech32 encoded address
     * string is used for this request instead.
     */
    validator?: string;
}
export interface InflationRateRequestAminoMsg {
    type: "/axelar.reward.v1beta1.InflationRateRequest";
    value: InflationRateRequestAmino;
}
/**
 * InflationRateRequest represents a message that queries the Axelar specific
 * inflation RPC method. Ideally, this would use ValAddress as the validator
 * field type. However, this makes it awkward for REST-based calls, because it
 * would expect a byte array as part of the url. So, the bech32 encoded address
 * string is used for this request instead.
 */
export interface InflationRateRequestSDKType {
    validator: string;
}
export interface InflationRateResponse {
    inflationRate: Uint8Array;
}
export interface InflationRateResponseProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.InflationRateResponse";
    value: Uint8Array;
}
export interface InflationRateResponseAmino {
    inflation_rate?: string;
}
export interface InflationRateResponseAminoMsg {
    type: "/axelar.reward.v1beta1.InflationRateResponse";
    value: InflationRateResponseAmino;
}
export interface InflationRateResponseSDKType {
    inflation_rate: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "/axelar.reward.v1beta1.ParamsRequest";
    value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "/axelar.reward.v1beta1.ParamsResponse";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const InflationRateRequest: {
    typeUrl: string;
    encode(message: InflationRateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationRateRequest;
    fromPartial(object: Partial<InflationRateRequest>): InflationRateRequest;
    fromAmino(object: InflationRateRequestAmino): InflationRateRequest;
    toAmino(message: InflationRateRequest): InflationRateRequestAmino;
    fromAminoMsg(object: InflationRateRequestAminoMsg): InflationRateRequest;
    fromProtoMsg(message: InflationRateRequestProtoMsg): InflationRateRequest;
    toProto(message: InflationRateRequest): Uint8Array;
    toProtoMsg(message: InflationRateRequest): InflationRateRequestProtoMsg;
};
export declare const InflationRateResponse: {
    typeUrl: string;
    encode(message: InflationRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InflationRateResponse;
    fromPartial(object: Partial<InflationRateResponse>): InflationRateResponse;
    fromAmino(object: InflationRateResponseAmino): InflationRateResponse;
    toAmino(message: InflationRateResponse): InflationRateResponseAmino;
    fromAminoMsg(object: InflationRateResponseAminoMsg): InflationRateResponse;
    fromProtoMsg(message: InflationRateResponseProtoMsg): InflationRateResponse;
    toProto(message: InflationRateResponse): Uint8Array;
    toProtoMsg(message: InflationRateResponse): InflationRateResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
