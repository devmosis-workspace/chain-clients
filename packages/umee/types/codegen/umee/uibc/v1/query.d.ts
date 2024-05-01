import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { DecCoinSymbol, DecCoinSymbolAmino, DecCoinSymbolSDKType } from "./uibc";
import { Params, ParamsAmino, ParamsSDKType } from "./quota";
import { BinaryWriter } from "../../../binary";
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpires {
}
export interface QueryQuotaExpiresProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryQuotaExpires";
    value: Uint8Array;
}
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpiresAmino {
}
export interface QueryQuotaExpiresAminoMsg {
    type: "/umee.uibc.v1.QueryQuotaExpires";
    value: QueryQuotaExpiresAmino;
}
/** QueryAllInflows defines request type for query the inflow quota of registered denoms. */
export interface QueryQuotaExpiresSDKType {
}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponse {
    endTime: Timestamp;
}
export interface QueryQuotaExpiresResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryQuotaExpiresResponse";
    value: Uint8Array;
}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponseAmino {
    end_time?: string;
}
export interface QueryQuotaExpiresResponseAminoMsg {
    type: "/umee.uibc.v1.QueryQuotaExpiresResponse";
    value: QueryQuotaExpiresResponseAmino;
}
/** QueryAllInflowsResponse defines response type of Query/AllInflows */
export interface QueryQuotaExpiresResponseSDKType {
    end_time: TimestampSDKType;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflows {
    denom: string;
}
export interface QueryInflowsProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryInflows";
    value: Uint8Array;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflowsAmino {
    denom?: string;
}
export interface QueryInflowsAminoMsg {
    type: "/umee.uibc.v1.QueryInflows";
    value: QueryInflowsAmino;
}
/** QueryInflows defines request type for query the inflow quota of denoms */
export interface QueryInflowsSDKType {
    denom: string;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponse {
    sum: string;
    inflows: DecCoinSymbol[];
}
export interface QueryInflowsResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryInflowsResponse";
    value: Uint8Array;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponseAmino {
    sum?: string;
    inflows?: DecCoinSymbolAmino[];
}
export interface QueryInflowsResponseAminoMsg {
    type: "/umee.uibc.v1.QueryInflowsResponse";
    value: QueryInflowsResponseAmino;
}
/** QueryInflowsResponse defines response type of Query/Inflows */
export interface QueryInflowsResponseSDKType {
    sum: string;
    inflows: DecCoinSymbolSDKType[];
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryParams";
    value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.uibc.v1.QueryParams";
    value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.uibc.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflows {
    denom: string;
}
export interface QueryOutflowsProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryOutflows";
    value: Uint8Array;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsAmino {
    denom?: string;
}
export interface QueryOutflowsAminoMsg {
    type: "/umee.uibc.v1.QueryOutflows";
    value: QueryOutflowsAmino;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryOutflowsSDKType {
    denom: string;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponse {
    amount: string;
}
export interface QueryOutflowsResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryOutflowsResponse";
    value: Uint8Array;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseAmino {
    amount?: string;
}
export interface QueryOutflowsResponseAminoMsg {
    type: "/umee.uibc.v1.QueryOutflowsResponse";
    value: QueryOutflowsResponseAmino;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryOutflowsResponseSDKType {
    amount: string;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflows {
}
export interface QueryAllOutflowsProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryAllOutflows";
    value: Uint8Array;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsAmino {
}
export interface QueryAllOutflowsAminoMsg {
    type: "/umee.uibc.v1.QueryAllOutflows";
    value: QueryAllOutflowsAmino;
}
/** QueryOutflow defines request type for query the quota of denoms */
export interface QueryAllOutflowsSDKType {
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponse {
    outflows: DecCoinSymbol[];
}
export interface QueryAllOutflowsResponseProtoMsg {
    typeUrl: "/umee.uibc.v1.QueryAllOutflowsResponse";
    value: Uint8Array;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseAmino {
    outflows?: DecCoinSymbolAmino[];
}
export interface QueryAllOutflowsResponseAminoMsg {
    type: "/umee.uibc.v1.QueryAllOutflowsResponse";
    value: QueryAllOutflowsResponseAmino;
}
/** QueryOutflowResponse defines response type of Query/Outflow */
export interface QueryAllOutflowsResponseSDKType {
    outflows: DecCoinSymbolSDKType[];
}
export declare const QueryQuotaExpires: {
    typeUrl: string;
    encode(_: QueryQuotaExpires, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryQuotaExpires;
    fromPartial(_: Partial<QueryQuotaExpires>): QueryQuotaExpires;
    fromAmino(_: QueryQuotaExpiresAmino): QueryQuotaExpires;
    toAmino(_: QueryQuotaExpires): QueryQuotaExpiresAmino;
    fromAminoMsg(object: QueryQuotaExpiresAminoMsg): QueryQuotaExpires;
    fromProtoMsg(message: QueryQuotaExpiresProtoMsg): QueryQuotaExpires;
    toProto(message: QueryQuotaExpires): Uint8Array;
    toProtoMsg(message: QueryQuotaExpires): QueryQuotaExpiresProtoMsg;
};
export declare const QueryQuotaExpiresResponse: {
    typeUrl: string;
    encode(message: QueryQuotaExpiresResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryQuotaExpiresResponse;
    fromPartial(object: Partial<QueryQuotaExpiresResponse>): QueryQuotaExpiresResponse;
    fromAmino(object: QueryQuotaExpiresResponseAmino): QueryQuotaExpiresResponse;
    toAmino(message: QueryQuotaExpiresResponse): QueryQuotaExpiresResponseAmino;
    fromAminoMsg(object: QueryQuotaExpiresResponseAminoMsg): QueryQuotaExpiresResponse;
    fromProtoMsg(message: QueryQuotaExpiresResponseProtoMsg): QueryQuotaExpiresResponse;
    toProto(message: QueryQuotaExpiresResponse): Uint8Array;
    toProtoMsg(message: QueryQuotaExpiresResponse): QueryQuotaExpiresResponseProtoMsg;
};
export declare const QueryInflows: {
    typeUrl: string;
    encode(message: QueryInflows, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflows;
    fromPartial(object: Partial<QueryInflows>): QueryInflows;
    fromAmino(object: QueryInflowsAmino): QueryInflows;
    toAmino(message: QueryInflows): QueryInflowsAmino;
    fromAminoMsg(object: QueryInflowsAminoMsg): QueryInflows;
    fromProtoMsg(message: QueryInflowsProtoMsg): QueryInflows;
    toProto(message: QueryInflows): Uint8Array;
    toProtoMsg(message: QueryInflows): QueryInflowsProtoMsg;
};
export declare const QueryInflowsResponse: {
    typeUrl: string;
    encode(message: QueryInflowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInflowsResponse;
    fromPartial(object: Partial<QueryInflowsResponse>): QueryInflowsResponse;
    fromAmino(object: QueryInflowsResponseAmino): QueryInflowsResponse;
    toAmino(message: QueryInflowsResponse): QueryInflowsResponseAmino;
    fromAminoMsg(object: QueryInflowsResponseAminoMsg): QueryInflowsResponse;
    fromProtoMsg(message: QueryInflowsResponseProtoMsg): QueryInflowsResponse;
    toProto(message: QueryInflowsResponse): Uint8Array;
    toProtoMsg(message: QueryInflowsResponse): QueryInflowsResponseProtoMsg;
};
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
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
export declare const QueryOutflows: {
    typeUrl: string;
    encode(message: QueryOutflows, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOutflows;
    fromPartial(object: Partial<QueryOutflows>): QueryOutflows;
    fromAmino(object: QueryOutflowsAmino): QueryOutflows;
    toAmino(message: QueryOutflows): QueryOutflowsAmino;
    fromAminoMsg(object: QueryOutflowsAminoMsg): QueryOutflows;
    fromProtoMsg(message: QueryOutflowsProtoMsg): QueryOutflows;
    toProto(message: QueryOutflows): Uint8Array;
    toProtoMsg(message: QueryOutflows): QueryOutflowsProtoMsg;
};
export declare const QueryOutflowsResponse: {
    typeUrl: string;
    encode(message: QueryOutflowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOutflowsResponse;
    fromPartial(object: Partial<QueryOutflowsResponse>): QueryOutflowsResponse;
    fromAmino(object: QueryOutflowsResponseAmino): QueryOutflowsResponse;
    toAmino(message: QueryOutflowsResponse): QueryOutflowsResponseAmino;
    fromAminoMsg(object: QueryOutflowsResponseAminoMsg): QueryOutflowsResponse;
    fromProtoMsg(message: QueryOutflowsResponseProtoMsg): QueryOutflowsResponse;
    toProto(message: QueryOutflowsResponse): Uint8Array;
    toProtoMsg(message: QueryOutflowsResponse): QueryOutflowsResponseProtoMsg;
};
export declare const QueryAllOutflows: {
    typeUrl: string;
    encode(_: QueryAllOutflows, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllOutflows;
    fromPartial(_: Partial<QueryAllOutflows>): QueryAllOutflows;
    fromAmino(_: QueryAllOutflowsAmino): QueryAllOutflows;
    toAmino(_: QueryAllOutflows): QueryAllOutflowsAmino;
    fromAminoMsg(object: QueryAllOutflowsAminoMsg): QueryAllOutflows;
    fromProtoMsg(message: QueryAllOutflowsProtoMsg): QueryAllOutflows;
    toProto(message: QueryAllOutflows): Uint8Array;
    toProtoMsg(message: QueryAllOutflows): QueryAllOutflowsProtoMsg;
};
export declare const QueryAllOutflowsResponse: {
    typeUrl: string;
    encode(message: QueryAllOutflowsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllOutflowsResponse;
    fromPartial(object: Partial<QueryAllOutflowsResponse>): QueryAllOutflowsResponse;
    fromAmino(object: QueryAllOutflowsResponseAmino): QueryAllOutflowsResponse;
    toAmino(message: QueryAllOutflowsResponse): QueryAllOutflowsResponseAmino;
    fromAminoMsg(object: QueryAllOutflowsResponseAminoMsg): QueryAllOutflowsResponse;
    fromProtoMsg(message: QueryAllOutflowsResponseProtoMsg): QueryAllOutflowsResponse;
    toProto(message: QueryAllOutflowsResponse): Uint8Array;
    toProtoMsg(message: QueryAllOutflowsResponse): QueryAllOutflowsResponseProtoMsg;
};
