import { DecProto, DecProtoAmino, DecProtoSDKType } from "../../../cosmos/base/v1beta1/coin";
import { NeuronBandwidth, NeuronBandwidthAmino, NeuronBandwidthSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryLoadRequest {
}
export interface QueryLoadRequestProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadRequest";
    value: Uint8Array;
}
export interface QueryLoadRequestAmino {
}
export interface QueryLoadRequestAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryLoadRequest";
    value: QueryLoadRequestAmino;
}
export interface QueryLoadRequestSDKType {
}
export interface QueryLoadResponse {
    load: DecProto;
}
export interface QueryLoadResponseProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadResponse";
    value: Uint8Array;
}
export interface QueryLoadResponseAmino {
    load?: DecProtoAmino;
}
export interface QueryLoadResponseAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryLoadResponse";
    value: QueryLoadResponseAmino;
}
export interface QueryLoadResponseSDKType {
    load: DecProtoSDKType;
}
export interface QueryPriceRequest {
}
export interface QueryPriceRequestProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceRequest";
    value: Uint8Array;
}
export interface QueryPriceRequestAmino {
}
export interface QueryPriceRequestAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryPriceRequest";
    value: QueryPriceRequestAmino;
}
export interface QueryPriceRequestSDKType {
}
export interface QueryPriceResponse {
    price: DecProto;
}
export interface QueryPriceResponseProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceResponse";
    value: Uint8Array;
}
export interface QueryPriceResponseAmino {
    price?: DecProtoAmino;
}
export interface QueryPriceResponseAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryPriceResponse";
    value: QueryPriceResponseAmino;
}
export interface QueryPriceResponseSDKType {
    price: DecProtoSDKType;
}
export interface QueryTotalBandwidthRequest {
}
export interface QueryTotalBandwidthRequestProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest";
    value: Uint8Array;
}
export interface QueryTotalBandwidthRequestAmino {
}
export interface QueryTotalBandwidthRequestAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest";
    value: QueryTotalBandwidthRequestAmino;
}
export interface QueryTotalBandwidthRequestSDKType {
}
export interface QueryTotalBandwidthResponse {
    totalBandwidth: bigint;
}
export interface QueryTotalBandwidthResponseProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse";
    value: Uint8Array;
}
export interface QueryTotalBandwidthResponseAmino {
    total_bandwidth?: string;
}
export interface QueryTotalBandwidthResponseAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse";
    value: QueryTotalBandwidthResponseAmino;
}
export interface QueryTotalBandwidthResponseSDKType {
    total_bandwidth: bigint;
}
export interface QueryNeuronBandwidthRequest {
    neuron: string;
}
export interface QueryNeuronBandwidthRequestProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest";
    value: Uint8Array;
}
export interface QueryNeuronBandwidthRequestAmino {
    neuron?: string;
}
export interface QueryNeuronBandwidthRequestAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest";
    value: QueryNeuronBandwidthRequestAmino;
}
export interface QueryNeuronBandwidthRequestSDKType {
    neuron: string;
}
export interface QueryNeuronBandwidthResponse {
    neuronBandwidth: NeuronBandwidth;
}
export interface QueryNeuronBandwidthResponseProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse";
    value: Uint8Array;
}
export interface QueryNeuronBandwidthResponseAmino {
    neuron_bandwidth?: NeuronBandwidthAmino;
}
export interface QueryNeuronBandwidthResponseAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse";
    value: QueryNeuronBandwidthResponseAmino;
}
export interface QueryNeuronBandwidthResponseSDKType {
    neuron_bandwidth: NeuronBandwidthSDKType;
}
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cyber.bandwidth.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryLoadRequest: {
    typeUrl: string;
    encode(_: QueryLoadRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLoadRequest;
    fromPartial(_: Partial<QueryLoadRequest>): QueryLoadRequest;
    fromAmino(_: QueryLoadRequestAmino): QueryLoadRequest;
    toAmino(_: QueryLoadRequest): QueryLoadRequestAmino;
    fromAminoMsg(object: QueryLoadRequestAminoMsg): QueryLoadRequest;
    fromProtoMsg(message: QueryLoadRequestProtoMsg): QueryLoadRequest;
    toProto(message: QueryLoadRequest): Uint8Array;
    toProtoMsg(message: QueryLoadRequest): QueryLoadRequestProtoMsg;
};
export declare const QueryLoadResponse: {
    typeUrl: string;
    encode(message: QueryLoadResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLoadResponse;
    fromPartial(object: Partial<QueryLoadResponse>): QueryLoadResponse;
    fromAmino(object: QueryLoadResponseAmino): QueryLoadResponse;
    toAmino(message: QueryLoadResponse): QueryLoadResponseAmino;
    fromAminoMsg(object: QueryLoadResponseAminoMsg): QueryLoadResponse;
    fromProtoMsg(message: QueryLoadResponseProtoMsg): QueryLoadResponse;
    toProto(message: QueryLoadResponse): Uint8Array;
    toProtoMsg(message: QueryLoadResponse): QueryLoadResponseProtoMsg;
};
export declare const QueryPriceRequest: {
    typeUrl: string;
    encode(_: QueryPriceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPriceRequest;
    fromPartial(_: Partial<QueryPriceRequest>): QueryPriceRequest;
    fromAmino(_: QueryPriceRequestAmino): QueryPriceRequest;
    toAmino(_: QueryPriceRequest): QueryPriceRequestAmino;
    fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest;
    fromProtoMsg(message: QueryPriceRequestProtoMsg): QueryPriceRequest;
    toProto(message: QueryPriceRequest): Uint8Array;
    toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg;
};
export declare const QueryPriceResponse: {
    typeUrl: string;
    encode(message: QueryPriceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPriceResponse;
    fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse;
    fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse;
    toAmino(message: QueryPriceResponse): QueryPriceResponseAmino;
    fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse;
    fromProtoMsg(message: QueryPriceResponseProtoMsg): QueryPriceResponse;
    toProto(message: QueryPriceResponse): Uint8Array;
    toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg;
};
export declare const QueryTotalBandwidthRequest: {
    typeUrl: string;
    encode(_: QueryTotalBandwidthRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTotalBandwidthRequest;
    fromPartial(_: Partial<QueryTotalBandwidthRequest>): QueryTotalBandwidthRequest;
    fromAmino(_: QueryTotalBandwidthRequestAmino): QueryTotalBandwidthRequest;
    toAmino(_: QueryTotalBandwidthRequest): QueryTotalBandwidthRequestAmino;
    fromAminoMsg(object: QueryTotalBandwidthRequestAminoMsg): QueryTotalBandwidthRequest;
    fromProtoMsg(message: QueryTotalBandwidthRequestProtoMsg): QueryTotalBandwidthRequest;
    toProto(message: QueryTotalBandwidthRequest): Uint8Array;
    toProtoMsg(message: QueryTotalBandwidthRequest): QueryTotalBandwidthRequestProtoMsg;
};
export declare const QueryTotalBandwidthResponse: {
    typeUrl: string;
    encode(message: QueryTotalBandwidthResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBandwidthResponse;
    fromPartial(object: Partial<QueryTotalBandwidthResponse>): QueryTotalBandwidthResponse;
    fromAmino(object: QueryTotalBandwidthResponseAmino): QueryTotalBandwidthResponse;
    toAmino(message: QueryTotalBandwidthResponse): QueryTotalBandwidthResponseAmino;
    fromAminoMsg(object: QueryTotalBandwidthResponseAminoMsg): QueryTotalBandwidthResponse;
    fromProtoMsg(message: QueryTotalBandwidthResponseProtoMsg): QueryTotalBandwidthResponse;
    toProto(message: QueryTotalBandwidthResponse): Uint8Array;
    toProtoMsg(message: QueryTotalBandwidthResponse): QueryTotalBandwidthResponseProtoMsg;
};
export declare const QueryNeuronBandwidthRequest: {
    typeUrl: string;
    encode(message: QueryNeuronBandwidthRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNeuronBandwidthRequest;
    fromPartial(object: Partial<QueryNeuronBandwidthRequest>): QueryNeuronBandwidthRequest;
    fromAmino(object: QueryNeuronBandwidthRequestAmino): QueryNeuronBandwidthRequest;
    toAmino(message: QueryNeuronBandwidthRequest): QueryNeuronBandwidthRequestAmino;
    fromAminoMsg(object: QueryNeuronBandwidthRequestAminoMsg): QueryNeuronBandwidthRequest;
    fromProtoMsg(message: QueryNeuronBandwidthRequestProtoMsg): QueryNeuronBandwidthRequest;
    toProto(message: QueryNeuronBandwidthRequest): Uint8Array;
    toProtoMsg(message: QueryNeuronBandwidthRequest): QueryNeuronBandwidthRequestProtoMsg;
};
export declare const QueryNeuronBandwidthResponse: {
    typeUrl: string;
    encode(message: QueryNeuronBandwidthResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNeuronBandwidthResponse;
    fromPartial(object: Partial<QueryNeuronBandwidthResponse>): QueryNeuronBandwidthResponse;
    fromAmino(object: QueryNeuronBandwidthResponseAmino): QueryNeuronBandwidthResponse;
    toAmino(message: QueryNeuronBandwidthResponse): QueryNeuronBandwidthResponseAmino;
    fromAminoMsg(object: QueryNeuronBandwidthResponseAminoMsg): QueryNeuronBandwidthResponse;
    fromProtoMsg(message: QueryNeuronBandwidthResponseProtoMsg): QueryNeuronBandwidthResponse;
    toProto(message: QueryNeuronBandwidthResponse): Uint8Array;
    toProtoMsg(message: QueryNeuronBandwidthResponse): QueryNeuronBandwidthResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
