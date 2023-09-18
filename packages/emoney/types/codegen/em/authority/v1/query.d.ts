import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanAmino, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryWriter } from "../../../binary";
export interface QueryGasPricesRequest {
}
export interface QueryGasPricesRequestProtoMsg {
    typeUrl: "/em.authority.v1.QueryGasPricesRequest";
    value: Uint8Array;
}
export interface QueryGasPricesRequestAmino {
}
export interface QueryGasPricesRequestAminoMsg {
    type: "/em.authority.v1.QueryGasPricesRequest";
    value: QueryGasPricesRequestAmino;
}
export interface QueryGasPricesRequestSDKType {
}
export interface QueryGasPricesResponse {
    minGasPrices: DecCoin[];
}
export interface QueryGasPricesResponseProtoMsg {
    typeUrl: "/em.authority.v1.QueryGasPricesResponse";
    value: Uint8Array;
}
export interface QueryGasPricesResponseAmino {
    min_gas_prices: DecCoinAmino[];
}
export interface QueryGasPricesResponseAminoMsg {
    type: "/em.authority.v1.QueryGasPricesResponse";
    value: QueryGasPricesResponseAmino;
}
export interface QueryGasPricesResponseSDKType {
    min_gas_prices: DecCoinSDKType[];
}
export interface QueryUpgradePlanRequest {
}
export interface QueryUpgradePlanRequestProtoMsg {
    typeUrl: "/em.authority.v1.QueryUpgradePlanRequest";
    value: Uint8Array;
}
export interface QueryUpgradePlanRequestAmino {
}
export interface QueryUpgradePlanRequestAminoMsg {
    type: "/em.authority.v1.QueryUpgradePlanRequest";
    value: QueryUpgradePlanRequestAmino;
}
export interface QueryUpgradePlanRequestSDKType {
}
export interface QueryUpgradePlanResponse {
    plan: Plan;
}
export interface QueryUpgradePlanResponseProtoMsg {
    typeUrl: "/em.authority.v1.QueryUpgradePlanResponse";
    value: Uint8Array;
}
export interface QueryUpgradePlanResponseAmino {
    plan?: PlanAmino;
}
export interface QueryUpgradePlanResponseAminoMsg {
    type: "/em.authority.v1.QueryUpgradePlanResponse";
    value: QueryUpgradePlanResponseAmino;
}
export interface QueryUpgradePlanResponseSDKType {
    plan: PlanSDKType;
}
export declare const QueryGasPricesRequest: {
    typeUrl: string;
    encode(_: QueryGasPricesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGasPricesRequest;
    fromPartial(_: Partial<QueryGasPricesRequest>): QueryGasPricesRequest;
    fromAmino(_: QueryGasPricesRequestAmino): QueryGasPricesRequest;
    toAmino(_: QueryGasPricesRequest): QueryGasPricesRequestAmino;
    fromAminoMsg(object: QueryGasPricesRequestAminoMsg): QueryGasPricesRequest;
    fromProtoMsg(message: QueryGasPricesRequestProtoMsg): QueryGasPricesRequest;
    toProto(message: QueryGasPricesRequest): Uint8Array;
    toProtoMsg(message: QueryGasPricesRequest): QueryGasPricesRequestProtoMsg;
};
export declare const QueryGasPricesResponse: {
    typeUrl: string;
    encode(message: QueryGasPricesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGasPricesResponse;
    fromPartial(object: Partial<QueryGasPricesResponse>): QueryGasPricesResponse;
    fromAmino(object: QueryGasPricesResponseAmino): QueryGasPricesResponse;
    toAmino(message: QueryGasPricesResponse): QueryGasPricesResponseAmino;
    fromAminoMsg(object: QueryGasPricesResponseAminoMsg): QueryGasPricesResponse;
    fromProtoMsg(message: QueryGasPricesResponseProtoMsg): QueryGasPricesResponse;
    toProto(message: QueryGasPricesResponse): Uint8Array;
    toProtoMsg(message: QueryGasPricesResponse): QueryGasPricesResponseProtoMsg;
};
export declare const QueryUpgradePlanRequest: {
    typeUrl: string;
    encode(_: QueryUpgradePlanRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryUpgradePlanRequest;
    fromPartial(_: Partial<QueryUpgradePlanRequest>): QueryUpgradePlanRequest;
    fromAmino(_: QueryUpgradePlanRequestAmino): QueryUpgradePlanRequest;
    toAmino(_: QueryUpgradePlanRequest): QueryUpgradePlanRequestAmino;
    fromAminoMsg(object: QueryUpgradePlanRequestAminoMsg): QueryUpgradePlanRequest;
    fromProtoMsg(message: QueryUpgradePlanRequestProtoMsg): QueryUpgradePlanRequest;
    toProto(message: QueryUpgradePlanRequest): Uint8Array;
    toProtoMsg(message: QueryUpgradePlanRequest): QueryUpgradePlanRequestProtoMsg;
};
export declare const QueryUpgradePlanResponse: {
    typeUrl: string;
    encode(message: QueryUpgradePlanResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUpgradePlanResponse;
    fromPartial(object: Partial<QueryUpgradePlanResponse>): QueryUpgradePlanResponse;
    fromAmino(object: QueryUpgradePlanResponseAmino): QueryUpgradePlanResponse;
    toAmino(message: QueryUpgradePlanResponse): QueryUpgradePlanResponseAmino;
    fromAminoMsg(object: QueryUpgradePlanResponseAminoMsg): QueryUpgradePlanResponse;
    fromProtoMsg(message: QueryUpgradePlanResponseProtoMsg): QueryUpgradePlanResponse;
    toProto(message: QueryUpgradePlanResponse): Uint8Array;
    toProtoMsg(message: QueryUpgradePlanResponse): QueryUpgradePlanResponseProtoMsg;
};
