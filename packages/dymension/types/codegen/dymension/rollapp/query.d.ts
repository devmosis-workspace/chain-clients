import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType, StateInfo, StateInfoAmino, StateInfoSDKType, StateInfoSummary, StateInfoSummaryAmino, StateInfoSummarySDKType } from "./state_info";
import { Rollapp, RollappAmino, RollappSDKType, RollappSummary, RollappSummaryAmino, RollappSummarySDKType } from "./rollapp";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetRollappRequest {
    rollappId: string;
}
export interface QueryGetRollappRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest";
    value: Uint8Array;
}
export interface QueryGetRollappRequestAmino {
    rollappId?: string;
}
export interface QueryGetRollappRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetRollappRequest";
    value: QueryGetRollappRequestAmino;
}
export interface QueryGetRollappRequestSDKType {
    rollappId: string;
}
export interface QueryGetRollappByEIP155Request {
    eip155: bigint;
}
export interface QueryGetRollappByEIP155RequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request";
    value: Uint8Array;
}
export interface QueryGetRollappByEIP155RequestAmino {
    eip155?: string;
}
export interface QueryGetRollappByEIP155RequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetRollappByEIP155Request";
    value: QueryGetRollappByEIP155RequestAmino;
}
export interface QueryGetRollappByEIP155RequestSDKType {
    eip155: bigint;
}
export interface QueryGetLatestStateIndexRequest {
    rollappId: string;
    finalized: boolean;
}
export interface QueryGetLatestStateIndexRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest";
    value: Uint8Array;
}
export interface QueryGetLatestStateIndexRequestAmino {
    rollappId?: string;
    finalized?: boolean;
}
export interface QueryGetLatestStateIndexRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexRequest";
    value: QueryGetLatestStateIndexRequestAmino;
}
export interface QueryGetLatestStateIndexRequestSDKType {
    rollappId: string;
    finalized: boolean;
}
export interface QueryGetLatestStateIndexResponse {
    stateIndex: StateInfoIndex;
}
export interface QueryGetLatestStateIndexResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse";
    value: Uint8Array;
}
export interface QueryGetLatestStateIndexResponseAmino {
    stateIndex?: StateInfoIndexAmino;
}
export interface QueryGetLatestStateIndexResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetLatestStateIndexResponse";
    value: QueryGetLatestStateIndexResponseAmino;
}
export interface QueryGetLatestStateIndexResponseSDKType {
    stateIndex: StateInfoIndexSDKType;
}
export interface QueryGetRollappResponse {
    rollapp: Rollapp;
    /** Defines the index of the last rollapp UpdateState. */
    latestStateIndex?: StateInfoIndex;
    /** Defines the index of the last rollapp UpdateState that was finalized. */
    latestFinalizedStateIndex?: StateInfoIndex;
}
export interface QueryGetRollappResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse";
    value: Uint8Array;
}
export interface QueryGetRollappResponseAmino {
    rollapp?: RollappAmino;
    /** Defines the index of the last rollapp UpdateState. */
    latestStateIndex?: StateInfoIndexAmino;
    /** Defines the index of the last rollapp UpdateState that was finalized. */
    latestFinalizedStateIndex?: StateInfoIndexAmino;
}
export interface QueryGetRollappResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetRollappResponse";
    value: QueryGetRollappResponseAmino;
}
export interface QueryGetRollappResponseSDKType {
    rollapp: RollappSDKType;
    latestStateIndex?: StateInfoIndexSDKType;
    latestFinalizedStateIndex?: StateInfoIndexSDKType;
}
export interface QueryAllRollappRequest {
    pagination?: PageRequest;
}
export interface QueryAllRollappRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest";
    value: Uint8Array;
}
export interface QueryAllRollappRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllRollappRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryAllRollappRequest";
    value: QueryAllRollappRequestAmino;
}
export interface QueryAllRollappRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllRollappResponse {
    rollapp: RollappSummary[];
    pagination?: PageResponse;
}
export interface QueryAllRollappResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse";
    value: Uint8Array;
}
export interface QueryAllRollappResponseAmino {
    rollapp?: RollappSummaryAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRollappResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryAllRollappResponse";
    value: QueryAllRollappResponseAmino;
}
export interface QueryAllRollappResponseSDKType {
    rollapp: RollappSummarySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetStateInfoRequest {
    rollappId: string;
    index: bigint;
    height: bigint;
    finalized: boolean;
}
export interface QueryGetStateInfoRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest";
    value: Uint8Array;
}
export interface QueryGetStateInfoRequestAmino {
    rollappId?: string;
    index?: string;
    height?: string;
    finalized?: boolean;
}
export interface QueryGetStateInfoRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoRequest";
    value: QueryGetStateInfoRequestAmino;
}
export interface QueryGetStateInfoRequestSDKType {
    rollappId: string;
    index: bigint;
    height: bigint;
    finalized: boolean;
}
export interface QueryGetStateInfoResponse {
    stateInfo: StateInfo;
}
export interface QueryGetStateInfoResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse";
    value: Uint8Array;
}
export interface QueryGetStateInfoResponseAmino {
    stateInfo?: StateInfoAmino;
}
export interface QueryGetStateInfoResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryGetStateInfoResponse";
    value: QueryGetStateInfoResponseAmino;
}
export interface QueryGetStateInfoResponseSDKType {
    stateInfo: StateInfoSDKType;
}
export interface QueryAllStateInfoRequest {
    rollappId: string;
    pagination?: PageRequest;
}
export interface QueryAllStateInfoRequestProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest";
    value: Uint8Array;
}
export interface QueryAllStateInfoRequestAmino {
    rollappId?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllStateInfoRequestAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoRequest";
    value: QueryAllStateInfoRequestAmino;
}
export interface QueryAllStateInfoRequestSDKType {
    rollappId: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllStateInfoResponse {
    stateInfo: StateInfoSummary[];
    pagination?: PageResponse;
}
export interface QueryAllStateInfoResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse";
    value: Uint8Array;
}
export interface QueryAllStateInfoResponseAmino {
    stateInfo?: StateInfoSummaryAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllStateInfoResponseAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.QueryAllStateInfoResponse";
    value: QueryAllStateInfoResponseAmino;
}
export interface QueryAllStateInfoResponseSDKType {
    stateInfo: StateInfoSummarySDKType[];
    pagination?: PageResponseSDKType;
}
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
export declare const QueryGetRollappRequest: {
    typeUrl: string;
    encode(message: QueryGetRollappRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRollappRequest;
    fromPartial(object: Partial<QueryGetRollappRequest>): QueryGetRollappRequest;
    fromAmino(object: QueryGetRollappRequestAmino): QueryGetRollappRequest;
    toAmino(message: QueryGetRollappRequest): QueryGetRollappRequestAmino;
    fromAminoMsg(object: QueryGetRollappRequestAminoMsg): QueryGetRollappRequest;
    fromProtoMsg(message: QueryGetRollappRequestProtoMsg): QueryGetRollappRequest;
    toProto(message: QueryGetRollappRequest): Uint8Array;
    toProtoMsg(message: QueryGetRollappRequest): QueryGetRollappRequestProtoMsg;
};
export declare const QueryGetRollappByEIP155Request: {
    typeUrl: string;
    encode(message: QueryGetRollappByEIP155Request, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRollappByEIP155Request;
    fromPartial(object: Partial<QueryGetRollappByEIP155Request>): QueryGetRollappByEIP155Request;
    fromAmino(object: QueryGetRollappByEIP155RequestAmino): QueryGetRollappByEIP155Request;
    toAmino(message: QueryGetRollappByEIP155Request): QueryGetRollappByEIP155RequestAmino;
    fromAminoMsg(object: QueryGetRollappByEIP155RequestAminoMsg): QueryGetRollappByEIP155Request;
    fromProtoMsg(message: QueryGetRollappByEIP155RequestProtoMsg): QueryGetRollappByEIP155Request;
    toProto(message: QueryGetRollappByEIP155Request): Uint8Array;
    toProtoMsg(message: QueryGetRollappByEIP155Request): QueryGetRollappByEIP155RequestProtoMsg;
};
export declare const QueryGetLatestStateIndexRequest: {
    typeUrl: string;
    encode(message: QueryGetLatestStateIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLatestStateIndexRequest;
    fromPartial(object: Partial<QueryGetLatestStateIndexRequest>): QueryGetLatestStateIndexRequest;
    fromAmino(object: QueryGetLatestStateIndexRequestAmino): QueryGetLatestStateIndexRequest;
    toAmino(message: QueryGetLatestStateIndexRequest): QueryGetLatestStateIndexRequestAmino;
    fromAminoMsg(object: QueryGetLatestStateIndexRequestAminoMsg): QueryGetLatestStateIndexRequest;
    fromProtoMsg(message: QueryGetLatestStateIndexRequestProtoMsg): QueryGetLatestStateIndexRequest;
    toProto(message: QueryGetLatestStateIndexRequest): Uint8Array;
    toProtoMsg(message: QueryGetLatestStateIndexRequest): QueryGetLatestStateIndexRequestProtoMsg;
};
export declare const QueryGetLatestStateIndexResponse: {
    typeUrl: string;
    encode(message: QueryGetLatestStateIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLatestStateIndexResponse;
    fromPartial(object: Partial<QueryGetLatestStateIndexResponse>): QueryGetLatestStateIndexResponse;
    fromAmino(object: QueryGetLatestStateIndexResponseAmino): QueryGetLatestStateIndexResponse;
    toAmino(message: QueryGetLatestStateIndexResponse): QueryGetLatestStateIndexResponseAmino;
    fromAminoMsg(object: QueryGetLatestStateIndexResponseAminoMsg): QueryGetLatestStateIndexResponse;
    fromProtoMsg(message: QueryGetLatestStateIndexResponseProtoMsg): QueryGetLatestStateIndexResponse;
    toProto(message: QueryGetLatestStateIndexResponse): Uint8Array;
    toProtoMsg(message: QueryGetLatestStateIndexResponse): QueryGetLatestStateIndexResponseProtoMsg;
};
export declare const QueryGetRollappResponse: {
    typeUrl: string;
    encode(message: QueryGetRollappResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRollappResponse;
    fromPartial(object: Partial<QueryGetRollappResponse>): QueryGetRollappResponse;
    fromAmino(object: QueryGetRollappResponseAmino): QueryGetRollappResponse;
    toAmino(message: QueryGetRollappResponse): QueryGetRollappResponseAmino;
    fromAminoMsg(object: QueryGetRollappResponseAminoMsg): QueryGetRollappResponse;
    fromProtoMsg(message: QueryGetRollappResponseProtoMsg): QueryGetRollappResponse;
    toProto(message: QueryGetRollappResponse): Uint8Array;
    toProtoMsg(message: QueryGetRollappResponse): QueryGetRollappResponseProtoMsg;
};
export declare const QueryAllRollappRequest: {
    typeUrl: string;
    encode(message: QueryAllRollappRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRollappRequest;
    fromPartial(object: Partial<QueryAllRollappRequest>): QueryAllRollappRequest;
    fromAmino(object: QueryAllRollappRequestAmino): QueryAllRollappRequest;
    toAmino(message: QueryAllRollappRequest): QueryAllRollappRequestAmino;
    fromAminoMsg(object: QueryAllRollappRequestAminoMsg): QueryAllRollappRequest;
    fromProtoMsg(message: QueryAllRollappRequestProtoMsg): QueryAllRollappRequest;
    toProto(message: QueryAllRollappRequest): Uint8Array;
    toProtoMsg(message: QueryAllRollappRequest): QueryAllRollappRequestProtoMsg;
};
export declare const QueryAllRollappResponse: {
    typeUrl: string;
    encode(message: QueryAllRollappResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRollappResponse;
    fromPartial(object: Partial<QueryAllRollappResponse>): QueryAllRollappResponse;
    fromAmino(object: QueryAllRollappResponseAmino): QueryAllRollappResponse;
    toAmino(message: QueryAllRollappResponse): QueryAllRollappResponseAmino;
    fromAminoMsg(object: QueryAllRollappResponseAminoMsg): QueryAllRollappResponse;
    fromProtoMsg(message: QueryAllRollappResponseProtoMsg): QueryAllRollappResponse;
    toProto(message: QueryAllRollappResponse): Uint8Array;
    toProtoMsg(message: QueryAllRollappResponse): QueryAllRollappResponseProtoMsg;
};
export declare const QueryGetStateInfoRequest: {
    typeUrl: string;
    encode(message: QueryGetStateInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetStateInfoRequest;
    fromPartial(object: Partial<QueryGetStateInfoRequest>): QueryGetStateInfoRequest;
    fromAmino(object: QueryGetStateInfoRequestAmino): QueryGetStateInfoRequest;
    toAmino(message: QueryGetStateInfoRequest): QueryGetStateInfoRequestAmino;
    fromAminoMsg(object: QueryGetStateInfoRequestAminoMsg): QueryGetStateInfoRequest;
    fromProtoMsg(message: QueryGetStateInfoRequestProtoMsg): QueryGetStateInfoRequest;
    toProto(message: QueryGetStateInfoRequest): Uint8Array;
    toProtoMsg(message: QueryGetStateInfoRequest): QueryGetStateInfoRequestProtoMsg;
};
export declare const QueryGetStateInfoResponse: {
    typeUrl: string;
    encode(message: QueryGetStateInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetStateInfoResponse;
    fromPartial(object: Partial<QueryGetStateInfoResponse>): QueryGetStateInfoResponse;
    fromAmino(object: QueryGetStateInfoResponseAmino): QueryGetStateInfoResponse;
    toAmino(message: QueryGetStateInfoResponse): QueryGetStateInfoResponseAmino;
    fromAminoMsg(object: QueryGetStateInfoResponseAminoMsg): QueryGetStateInfoResponse;
    fromProtoMsg(message: QueryGetStateInfoResponseProtoMsg): QueryGetStateInfoResponse;
    toProto(message: QueryGetStateInfoResponse): Uint8Array;
    toProtoMsg(message: QueryGetStateInfoResponse): QueryGetStateInfoResponseProtoMsg;
};
export declare const QueryAllStateInfoRequest: {
    typeUrl: string;
    encode(message: QueryAllStateInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllStateInfoRequest;
    fromPartial(object: Partial<QueryAllStateInfoRequest>): QueryAllStateInfoRequest;
    fromAmino(object: QueryAllStateInfoRequestAmino): QueryAllStateInfoRequest;
    toAmino(message: QueryAllStateInfoRequest): QueryAllStateInfoRequestAmino;
    fromAminoMsg(object: QueryAllStateInfoRequestAminoMsg): QueryAllStateInfoRequest;
    fromProtoMsg(message: QueryAllStateInfoRequestProtoMsg): QueryAllStateInfoRequest;
    toProto(message: QueryAllStateInfoRequest): Uint8Array;
    toProtoMsg(message: QueryAllStateInfoRequest): QueryAllStateInfoRequestProtoMsg;
};
export declare const QueryAllStateInfoResponse: {
    typeUrl: string;
    encode(message: QueryAllStateInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllStateInfoResponse;
    fromPartial(object: Partial<QueryAllStateInfoResponse>): QueryAllStateInfoResponse;
    fromAmino(object: QueryAllStateInfoResponseAmino): QueryAllStateInfoResponse;
    toAmino(message: QueryAllStateInfoResponse): QueryAllStateInfoResponseAmino;
    fromAminoMsg(object: QueryAllStateInfoResponseAminoMsg): QueryAllStateInfoResponse;
    fromProtoMsg(message: QueryAllStateInfoResponseProtoMsg): QueryAllStateInfoResponse;
    toProto(message: QueryAllStateInfoResponse): Uint8Array;
    toProtoMsg(message: QueryAllStateInfoResponse): QueryAllStateInfoResponseProtoMsg;
};
