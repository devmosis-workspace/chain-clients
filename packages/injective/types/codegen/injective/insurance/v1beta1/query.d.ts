import { Params, ParamsAmino, ParamsSDKType, InsuranceFund, InsuranceFundAmino, InsuranceFundSDKType } from "./insurance";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequest {
}
export interface QueryInsuranceParamsRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
    value: Uint8Array;
}
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequestAmino {
}
export interface QueryInsuranceParamsRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceParamsRequest";
    value: QueryInsuranceParamsRequestAmino;
}
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 */
export interface QueryInsuranceParamsRequestSDKType {
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponse {
    params: Params;
}
export interface QueryInsuranceParamsResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
    value: Uint8Array;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryInsuranceParamsResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceParamsResponse";
    value: QueryInsuranceParamsResponseAmino;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 */
export interface QueryInsuranceParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequest {
    /** Market ID for the market */
    marketId: string;
}
export interface QueryInsuranceFundRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequestAmino {
    /** Market ID for the market */
    market_id: string;
}
export interface QueryInsuranceFundRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceFundRequest";
    value: QueryInsuranceFundRequestAmino;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundRequestSDKType {
    market_id: string;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponse {
    /**
     * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
     * RPC method.
     */
    fund: InsuranceFund;
}
export interface QueryInsuranceFundResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseAmino {
    /**
     * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
     * RPC method.
     */
    fund?: InsuranceFundAmino;
}
export interface QueryInsuranceFundResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceFundResponse";
    value: QueryInsuranceFundResponseAmino;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 */
export interface QueryInsuranceFundResponseSDKType {
    fund: InsuranceFundSDKType;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequest {
}
export interface QueryInsuranceFundsRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequestAmino {
}
export interface QueryInsuranceFundsRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceFundsRequest";
    value: QueryInsuranceFundsRequestAmino;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsRequestSDKType {
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponse {
    funds: InsuranceFund[];
}
export interface QueryInsuranceFundsResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
    value: Uint8Array;
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponseAmino {
    funds: InsuranceFundAmino[];
}
export interface QueryInsuranceFundsResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryInsuranceFundsResponse";
    value: QueryInsuranceFundsResponseAmino;
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 */
export interface QueryInsuranceFundsResponseSDKType {
    funds: InsuranceFundSDKType[];
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequest {
    marketId: string;
    address: string;
}
export interface QueryEstimatedRedemptionsRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
    value: Uint8Array;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequestAmino {
    marketId: string;
    address: string;
}
export interface QueryEstimatedRedemptionsRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
    value: QueryEstimatedRedemptionsRequestAmino;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsRequestSDKType {
    marketId: string;
    address: string;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponse {
    amount: Coin[];
}
export interface QueryEstimatedRedemptionsResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
    value: Uint8Array;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponseAmino {
    amount: CoinAmino[];
}
export interface QueryEstimatedRedemptionsResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
    value: QueryEstimatedRedemptionsResponseAmino;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 */
export interface QueryEstimatedRedemptionsResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequest {
    marketId: string;
    address: string;
}
export interface QueryPendingRedemptionsRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
    value: Uint8Array;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequestAmino {
    marketId: string;
    address: string;
}
export interface QueryPendingRedemptionsRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
    value: QueryPendingRedemptionsRequestAmino;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsRequestSDKType {
    marketId: string;
    address: string;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponse {
    amount: Coin[];
}
export interface QueryPendingRedemptionsResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
    value: Uint8Array;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponseAmino {
    amount: CoinAmino[];
}
export interface QueryPendingRedemptionsResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
    value: QueryPendingRedemptionsResponseAmino;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 */
export interface QueryPendingRedemptionsResponseSDKType {
    amount: CoinSDKType[];
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.insurance.v1beta1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponse {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/InsuranceModuleState RPC method.
     */
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.QueryModuleStateResponse";
    value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
    /**
     * QueryModuleStateResponse is the response type for the
     * Query/InsuranceModuleState RPC method.
     */
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.insurance.v1beta1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export declare const QueryInsuranceParamsRequest: {
    typeUrl: string;
    encode(_: QueryInsuranceParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInsuranceParamsRequest;
    fromPartial(_: Partial<QueryInsuranceParamsRequest>): QueryInsuranceParamsRequest;
    fromAmino(_: QueryInsuranceParamsRequestAmino): QueryInsuranceParamsRequest;
    toAmino(_: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestAmino;
    fromAminoMsg(object: QueryInsuranceParamsRequestAminoMsg): QueryInsuranceParamsRequest;
    fromProtoMsg(message: QueryInsuranceParamsRequestProtoMsg): QueryInsuranceParamsRequest;
    toProto(message: QueryInsuranceParamsRequest): Uint8Array;
    toProtoMsg(message: QueryInsuranceParamsRequest): QueryInsuranceParamsRequestProtoMsg;
};
export declare const QueryInsuranceParamsResponse: {
    typeUrl: string;
    encode(message: QueryInsuranceParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInsuranceParamsResponse;
    fromPartial(object: Partial<QueryInsuranceParamsResponse>): QueryInsuranceParamsResponse;
    fromAmino(object: QueryInsuranceParamsResponseAmino): QueryInsuranceParamsResponse;
    toAmino(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseAmino;
    fromAminoMsg(object: QueryInsuranceParamsResponseAminoMsg): QueryInsuranceParamsResponse;
    fromProtoMsg(message: QueryInsuranceParamsResponseProtoMsg): QueryInsuranceParamsResponse;
    toProto(message: QueryInsuranceParamsResponse): Uint8Array;
    toProtoMsg(message: QueryInsuranceParamsResponse): QueryInsuranceParamsResponseProtoMsg;
};
export declare const QueryInsuranceFundRequest: {
    typeUrl: string;
    encode(message: QueryInsuranceFundRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInsuranceFundRequest;
    fromPartial(object: Partial<QueryInsuranceFundRequest>): QueryInsuranceFundRequest;
    fromAmino(object: QueryInsuranceFundRequestAmino): QueryInsuranceFundRequest;
    toAmino(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestAmino;
    fromAminoMsg(object: QueryInsuranceFundRequestAminoMsg): QueryInsuranceFundRequest;
    fromProtoMsg(message: QueryInsuranceFundRequestProtoMsg): QueryInsuranceFundRequest;
    toProto(message: QueryInsuranceFundRequest): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundRequest): QueryInsuranceFundRequestProtoMsg;
};
export declare const QueryInsuranceFundResponse: {
    typeUrl: string;
    encode(message: QueryInsuranceFundResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInsuranceFundResponse;
    fromPartial(object: Partial<QueryInsuranceFundResponse>): QueryInsuranceFundResponse;
    fromAmino(object: QueryInsuranceFundResponseAmino): QueryInsuranceFundResponse;
    toAmino(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseAmino;
    fromAminoMsg(object: QueryInsuranceFundResponseAminoMsg): QueryInsuranceFundResponse;
    fromProtoMsg(message: QueryInsuranceFundResponseProtoMsg): QueryInsuranceFundResponse;
    toProto(message: QueryInsuranceFundResponse): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundResponse): QueryInsuranceFundResponseProtoMsg;
};
export declare const QueryInsuranceFundsRequest: {
    typeUrl: string;
    encode(_: QueryInsuranceFundsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryInsuranceFundsRequest;
    fromPartial(_: Partial<QueryInsuranceFundsRequest>): QueryInsuranceFundsRequest;
    fromAmino(_: QueryInsuranceFundsRequestAmino): QueryInsuranceFundsRequest;
    toAmino(_: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestAmino;
    fromAminoMsg(object: QueryInsuranceFundsRequestAminoMsg): QueryInsuranceFundsRequest;
    fromProtoMsg(message: QueryInsuranceFundsRequestProtoMsg): QueryInsuranceFundsRequest;
    toProto(message: QueryInsuranceFundsRequest): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundsRequest): QueryInsuranceFundsRequestProtoMsg;
};
export declare const QueryInsuranceFundsResponse: {
    typeUrl: string;
    encode(message: QueryInsuranceFundsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInsuranceFundsResponse;
    fromPartial(object: Partial<QueryInsuranceFundsResponse>): QueryInsuranceFundsResponse;
    fromAmino(object: QueryInsuranceFundsResponseAmino): QueryInsuranceFundsResponse;
    toAmino(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseAmino;
    fromAminoMsg(object: QueryInsuranceFundsResponseAminoMsg): QueryInsuranceFundsResponse;
    fromProtoMsg(message: QueryInsuranceFundsResponseProtoMsg): QueryInsuranceFundsResponse;
    toProto(message: QueryInsuranceFundsResponse): Uint8Array;
    toProtoMsg(message: QueryInsuranceFundsResponse): QueryInsuranceFundsResponseProtoMsg;
};
export declare const QueryEstimatedRedemptionsRequest: {
    typeUrl: string;
    encode(message: QueryEstimatedRedemptionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimatedRedemptionsRequest;
    fromPartial(object: Partial<QueryEstimatedRedemptionsRequest>): QueryEstimatedRedemptionsRequest;
    fromAmino(object: QueryEstimatedRedemptionsRequestAmino): QueryEstimatedRedemptionsRequest;
    toAmino(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestAmino;
    fromAminoMsg(object: QueryEstimatedRedemptionsRequestAminoMsg): QueryEstimatedRedemptionsRequest;
    fromProtoMsg(message: QueryEstimatedRedemptionsRequestProtoMsg): QueryEstimatedRedemptionsRequest;
    toProto(message: QueryEstimatedRedemptionsRequest): Uint8Array;
    toProtoMsg(message: QueryEstimatedRedemptionsRequest): QueryEstimatedRedemptionsRequestProtoMsg;
};
export declare const QueryEstimatedRedemptionsResponse: {
    typeUrl: string;
    encode(message: QueryEstimatedRedemptionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEstimatedRedemptionsResponse;
    fromPartial(object: Partial<QueryEstimatedRedemptionsResponse>): QueryEstimatedRedemptionsResponse;
    fromAmino(object: QueryEstimatedRedemptionsResponseAmino): QueryEstimatedRedemptionsResponse;
    toAmino(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseAmino;
    fromAminoMsg(object: QueryEstimatedRedemptionsResponseAminoMsg): QueryEstimatedRedemptionsResponse;
    fromProtoMsg(message: QueryEstimatedRedemptionsResponseProtoMsg): QueryEstimatedRedemptionsResponse;
    toProto(message: QueryEstimatedRedemptionsResponse): Uint8Array;
    toProtoMsg(message: QueryEstimatedRedemptionsResponse): QueryEstimatedRedemptionsResponseProtoMsg;
};
export declare const QueryPendingRedemptionsRequest: {
    typeUrl: string;
    encode(message: QueryPendingRedemptionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingRedemptionsRequest;
    fromPartial(object: Partial<QueryPendingRedemptionsRequest>): QueryPendingRedemptionsRequest;
    fromAmino(object: QueryPendingRedemptionsRequestAmino): QueryPendingRedemptionsRequest;
    toAmino(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestAmino;
    fromAminoMsg(object: QueryPendingRedemptionsRequestAminoMsg): QueryPendingRedemptionsRequest;
    fromProtoMsg(message: QueryPendingRedemptionsRequestProtoMsg): QueryPendingRedemptionsRequest;
    toProto(message: QueryPendingRedemptionsRequest): Uint8Array;
    toProtoMsg(message: QueryPendingRedemptionsRequest): QueryPendingRedemptionsRequestProtoMsg;
};
export declare const QueryPendingRedemptionsResponse: {
    typeUrl: string;
    encode(message: QueryPendingRedemptionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingRedemptionsResponse;
    fromPartial(object: Partial<QueryPendingRedemptionsResponse>): QueryPendingRedemptionsResponse;
    fromAmino(object: QueryPendingRedemptionsResponseAmino): QueryPendingRedemptionsResponse;
    toAmino(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseAmino;
    fromAminoMsg(object: QueryPendingRedemptionsResponseAminoMsg): QueryPendingRedemptionsResponse;
    fromProtoMsg(message: QueryPendingRedemptionsResponseProtoMsg): QueryPendingRedemptionsResponse;
    toProto(message: QueryPendingRedemptionsResponse): Uint8Array;
    toProtoMsg(message: QueryPendingRedemptionsResponse): QueryPendingRedemptionsResponseProtoMsg;
};
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
