import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, RankedParticle, RankedParticleAmino, RankedParticleSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryRankRequest {
    particle: string;
}
export interface QueryRankRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryRankRequest";
    value: Uint8Array;
}
export interface QueryRankRequestAmino {
    particle?: string;
}
export interface QueryRankRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryRankRequest";
    value: QueryRankRequestAmino;
}
export interface QueryRankRequestSDKType {
    particle: string;
}
export interface QueryRankResponse {
    rank: bigint;
}
export interface QueryRankResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryRankResponse";
    value: Uint8Array;
}
export interface QueryRankResponseAmino {
    rank?: string;
}
export interface QueryRankResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryRankResponse";
    value: QueryRankResponseAmino;
}
export interface QueryRankResponseSDKType {
    rank: bigint;
}
export interface QuerySearchRequest {
    particle: string;
    pagination?: PageRequest;
}
export interface QuerySearchRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QuerySearchRequest";
    value: Uint8Array;
}
export interface QuerySearchRequestAmino {
    particle?: string;
    pagination?: PageRequestAmino;
}
export interface QuerySearchRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QuerySearchRequest";
    value: QuerySearchRequestAmino;
}
export interface QuerySearchRequestSDKType {
    particle: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySearchResponse {
    result: RankedParticle[];
    pagination?: PageResponse;
}
export interface QuerySearchResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QuerySearchResponse";
    value: Uint8Array;
}
export interface QuerySearchResponseAmino {
    result?: RankedParticleAmino[];
    pagination?: PageResponseAmino;
}
export interface QuerySearchResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QuerySearchResponse";
    value: QuerySearchResponseAmino;
}
export interface QuerySearchResponseSDKType {
    result: RankedParticleSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryTopRequest {
}
export interface QueryTopRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryTopRequest";
    value: Uint8Array;
}
export interface QueryTopRequestAmino {
}
export interface QueryTopRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryTopRequest";
    value: QueryTopRequestAmino;
}
export interface QueryTopRequestSDKType {
}
export interface QueryIsLinkExistRequest {
    from: string;
    to: string;
    address: string;
}
export interface QueryIsLinkExistRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryIsLinkExistRequest";
    value: Uint8Array;
}
export interface QueryIsLinkExistRequestAmino {
    from?: string;
    to?: string;
    address?: string;
}
export interface QueryIsLinkExistRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryIsLinkExistRequest";
    value: QueryIsLinkExistRequestAmino;
}
export interface QueryIsLinkExistRequestSDKType {
    from: string;
    to: string;
    address: string;
}
export interface QueryIsAnyLinkExistRequest {
    from: string;
    to: string;
}
export interface QueryIsAnyLinkExistRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryIsAnyLinkExistRequest";
    value: Uint8Array;
}
export interface QueryIsAnyLinkExistRequestAmino {
    from?: string;
    to?: string;
}
export interface QueryIsAnyLinkExistRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryIsAnyLinkExistRequest";
    value: QueryIsAnyLinkExistRequestAmino;
}
export interface QueryIsAnyLinkExistRequestSDKType {
    from: string;
    to: string;
}
export interface QueryLinkExistResponse {
    exist: boolean;
}
export interface QueryLinkExistResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryLinkExistResponse";
    value: Uint8Array;
}
export interface QueryLinkExistResponseAmino {
    exist?: boolean;
}
export interface QueryLinkExistResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryLinkExistResponse";
    value: QueryLinkExistResponseAmino;
}
export interface QueryLinkExistResponseSDKType {
    exist: boolean;
}
export interface QueryNegentropyPartilceRequest {
    particle: string;
}
export interface QueryNegentropyPartilceRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryNegentropyPartilceRequest";
    value: Uint8Array;
}
export interface QueryNegentropyPartilceRequestAmino {
    particle?: string;
}
export interface QueryNegentropyPartilceRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryNegentropyPartilceRequest";
    value: QueryNegentropyPartilceRequestAmino;
}
export interface QueryNegentropyPartilceRequestSDKType {
    particle: string;
}
export interface QueryNegentropyParticleResponse {
    entropy: bigint;
}
export interface QueryNegentropyParticleResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryNegentropyParticleResponse";
    value: Uint8Array;
}
export interface QueryNegentropyParticleResponseAmino {
    entropy?: string;
}
export interface QueryNegentropyParticleResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryNegentropyParticleResponse";
    value: QueryNegentropyParticleResponseAmino;
}
export interface QueryNegentropyParticleResponseSDKType {
    entropy: bigint;
}
export interface QueryNegentropyRequest {
}
export interface QueryNegentropyRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryNegentropyRequest";
    value: Uint8Array;
}
export interface QueryNegentropyRequestAmino {
}
export interface QueryNegentropyRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryNegentropyRequest";
    value: QueryNegentropyRequestAmino;
}
export interface QueryNegentropyRequestSDKType {
}
export interface QueryNegentropyResponse {
    negentropy: bigint;
}
export interface QueryNegentropyResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryNegentropyResponse";
    value: Uint8Array;
}
export interface QueryNegentropyResponseAmino {
    negentropy?: string;
}
export interface QueryNegentropyResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryNegentropyResponse";
    value: QueryNegentropyResponseAmino;
}
export interface QueryNegentropyResponseSDKType {
    negentropy: bigint;
}
export interface QueryKarmaRequest {
    neuron: string;
}
export interface QueryKarmaRequestProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryKarmaRequest";
    value: Uint8Array;
}
export interface QueryKarmaRequestAmino {
    neuron?: string;
}
export interface QueryKarmaRequestAminoMsg {
    type: "/cyber.rank.v1beta1.QueryKarmaRequest";
    value: QueryKarmaRequestAmino;
}
export interface QueryKarmaRequestSDKType {
    neuron: string;
}
export interface QueryKarmaResponse {
    karma: bigint;
}
export interface QueryKarmaResponseProtoMsg {
    typeUrl: "/cyber.rank.v1beta1.QueryKarmaResponse";
    value: Uint8Array;
}
export interface QueryKarmaResponseAmino {
    karma?: string;
}
export interface QueryKarmaResponseAminoMsg {
    type: "/cyber.rank.v1beta1.QueryKarmaResponse";
    value: QueryKarmaResponseAmino;
}
export interface QueryKarmaResponseSDKType {
    karma: bigint;
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
export declare const QueryRankRequest: {
    typeUrl: string;
    encode(message: QueryRankRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRankRequest;
    fromPartial(object: Partial<QueryRankRequest>): QueryRankRequest;
    fromAmino(object: QueryRankRequestAmino): QueryRankRequest;
    toAmino(message: QueryRankRequest): QueryRankRequestAmino;
    fromAminoMsg(object: QueryRankRequestAminoMsg): QueryRankRequest;
    fromProtoMsg(message: QueryRankRequestProtoMsg): QueryRankRequest;
    toProto(message: QueryRankRequest): Uint8Array;
    toProtoMsg(message: QueryRankRequest): QueryRankRequestProtoMsg;
};
export declare const QueryRankResponse: {
    typeUrl: string;
    encode(message: QueryRankResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRankResponse;
    fromPartial(object: Partial<QueryRankResponse>): QueryRankResponse;
    fromAmino(object: QueryRankResponseAmino): QueryRankResponse;
    toAmino(message: QueryRankResponse): QueryRankResponseAmino;
    fromAminoMsg(object: QueryRankResponseAminoMsg): QueryRankResponse;
    fromProtoMsg(message: QueryRankResponseProtoMsg): QueryRankResponse;
    toProto(message: QueryRankResponse): Uint8Array;
    toProtoMsg(message: QueryRankResponse): QueryRankResponseProtoMsg;
};
export declare const QuerySearchRequest: {
    typeUrl: string;
    encode(message: QuerySearchRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySearchRequest;
    fromPartial(object: Partial<QuerySearchRequest>): QuerySearchRequest;
    fromAmino(object: QuerySearchRequestAmino): QuerySearchRequest;
    toAmino(message: QuerySearchRequest): QuerySearchRequestAmino;
    fromAminoMsg(object: QuerySearchRequestAminoMsg): QuerySearchRequest;
    fromProtoMsg(message: QuerySearchRequestProtoMsg): QuerySearchRequest;
    toProto(message: QuerySearchRequest): Uint8Array;
    toProtoMsg(message: QuerySearchRequest): QuerySearchRequestProtoMsg;
};
export declare const QuerySearchResponse: {
    typeUrl: string;
    encode(message: QuerySearchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySearchResponse;
    fromPartial(object: Partial<QuerySearchResponse>): QuerySearchResponse;
    fromAmino(object: QuerySearchResponseAmino): QuerySearchResponse;
    toAmino(message: QuerySearchResponse): QuerySearchResponseAmino;
    fromAminoMsg(object: QuerySearchResponseAminoMsg): QuerySearchResponse;
    fromProtoMsg(message: QuerySearchResponseProtoMsg): QuerySearchResponse;
    toProto(message: QuerySearchResponse): Uint8Array;
    toProtoMsg(message: QuerySearchResponse): QuerySearchResponseProtoMsg;
};
export declare const QueryTopRequest: {
    typeUrl: string;
    encode(_: QueryTopRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryTopRequest;
    fromPartial(_: Partial<QueryTopRequest>): QueryTopRequest;
    fromAmino(_: QueryTopRequestAmino): QueryTopRequest;
    toAmino(_: QueryTopRequest): QueryTopRequestAmino;
    fromAminoMsg(object: QueryTopRequestAminoMsg): QueryTopRequest;
    fromProtoMsg(message: QueryTopRequestProtoMsg): QueryTopRequest;
    toProto(message: QueryTopRequest): Uint8Array;
    toProtoMsg(message: QueryTopRequest): QueryTopRequestProtoMsg;
};
export declare const QueryIsLinkExistRequest: {
    typeUrl: string;
    encode(message: QueryIsLinkExistRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIsLinkExistRequest;
    fromPartial(object: Partial<QueryIsLinkExistRequest>): QueryIsLinkExistRequest;
    fromAmino(object: QueryIsLinkExistRequestAmino): QueryIsLinkExistRequest;
    toAmino(message: QueryIsLinkExistRequest): QueryIsLinkExistRequestAmino;
    fromAminoMsg(object: QueryIsLinkExistRequestAminoMsg): QueryIsLinkExistRequest;
    fromProtoMsg(message: QueryIsLinkExistRequestProtoMsg): QueryIsLinkExistRequest;
    toProto(message: QueryIsLinkExistRequest): Uint8Array;
    toProtoMsg(message: QueryIsLinkExistRequest): QueryIsLinkExistRequestProtoMsg;
};
export declare const QueryIsAnyLinkExistRequest: {
    typeUrl: string;
    encode(message: QueryIsAnyLinkExistRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIsAnyLinkExistRequest;
    fromPartial(object: Partial<QueryIsAnyLinkExistRequest>): QueryIsAnyLinkExistRequest;
    fromAmino(object: QueryIsAnyLinkExistRequestAmino): QueryIsAnyLinkExistRequest;
    toAmino(message: QueryIsAnyLinkExistRequest): QueryIsAnyLinkExistRequestAmino;
    fromAminoMsg(object: QueryIsAnyLinkExistRequestAminoMsg): QueryIsAnyLinkExistRequest;
    fromProtoMsg(message: QueryIsAnyLinkExistRequestProtoMsg): QueryIsAnyLinkExistRequest;
    toProto(message: QueryIsAnyLinkExistRequest): Uint8Array;
    toProtoMsg(message: QueryIsAnyLinkExistRequest): QueryIsAnyLinkExistRequestProtoMsg;
};
export declare const QueryLinkExistResponse: {
    typeUrl: string;
    encode(message: QueryLinkExistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLinkExistResponse;
    fromPartial(object: Partial<QueryLinkExistResponse>): QueryLinkExistResponse;
    fromAmino(object: QueryLinkExistResponseAmino): QueryLinkExistResponse;
    toAmino(message: QueryLinkExistResponse): QueryLinkExistResponseAmino;
    fromAminoMsg(object: QueryLinkExistResponseAminoMsg): QueryLinkExistResponse;
    fromProtoMsg(message: QueryLinkExistResponseProtoMsg): QueryLinkExistResponse;
    toProto(message: QueryLinkExistResponse): Uint8Array;
    toProtoMsg(message: QueryLinkExistResponse): QueryLinkExistResponseProtoMsg;
};
export declare const QueryNegentropyPartilceRequest: {
    typeUrl: string;
    encode(message: QueryNegentropyPartilceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNegentropyPartilceRequest;
    fromPartial(object: Partial<QueryNegentropyPartilceRequest>): QueryNegentropyPartilceRequest;
    fromAmino(object: QueryNegentropyPartilceRequestAmino): QueryNegentropyPartilceRequest;
    toAmino(message: QueryNegentropyPartilceRequest): QueryNegentropyPartilceRequestAmino;
    fromAminoMsg(object: QueryNegentropyPartilceRequestAminoMsg): QueryNegentropyPartilceRequest;
    fromProtoMsg(message: QueryNegentropyPartilceRequestProtoMsg): QueryNegentropyPartilceRequest;
    toProto(message: QueryNegentropyPartilceRequest): Uint8Array;
    toProtoMsg(message: QueryNegentropyPartilceRequest): QueryNegentropyPartilceRequestProtoMsg;
};
export declare const QueryNegentropyParticleResponse: {
    typeUrl: string;
    encode(message: QueryNegentropyParticleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNegentropyParticleResponse;
    fromPartial(object: Partial<QueryNegentropyParticleResponse>): QueryNegentropyParticleResponse;
    fromAmino(object: QueryNegentropyParticleResponseAmino): QueryNegentropyParticleResponse;
    toAmino(message: QueryNegentropyParticleResponse): QueryNegentropyParticleResponseAmino;
    fromAminoMsg(object: QueryNegentropyParticleResponseAminoMsg): QueryNegentropyParticleResponse;
    fromProtoMsg(message: QueryNegentropyParticleResponseProtoMsg): QueryNegentropyParticleResponse;
    toProto(message: QueryNegentropyParticleResponse): Uint8Array;
    toProtoMsg(message: QueryNegentropyParticleResponse): QueryNegentropyParticleResponseProtoMsg;
};
export declare const QueryNegentropyRequest: {
    typeUrl: string;
    encode(_: QueryNegentropyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryNegentropyRequest;
    fromPartial(_: Partial<QueryNegentropyRequest>): QueryNegentropyRequest;
    fromAmino(_: QueryNegentropyRequestAmino): QueryNegentropyRequest;
    toAmino(_: QueryNegentropyRequest): QueryNegentropyRequestAmino;
    fromAminoMsg(object: QueryNegentropyRequestAminoMsg): QueryNegentropyRequest;
    fromProtoMsg(message: QueryNegentropyRequestProtoMsg): QueryNegentropyRequest;
    toProto(message: QueryNegentropyRequest): Uint8Array;
    toProtoMsg(message: QueryNegentropyRequest): QueryNegentropyRequestProtoMsg;
};
export declare const QueryNegentropyResponse: {
    typeUrl: string;
    encode(message: QueryNegentropyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNegentropyResponse;
    fromPartial(object: Partial<QueryNegentropyResponse>): QueryNegentropyResponse;
    fromAmino(object: QueryNegentropyResponseAmino): QueryNegentropyResponse;
    toAmino(message: QueryNegentropyResponse): QueryNegentropyResponseAmino;
    fromAminoMsg(object: QueryNegentropyResponseAminoMsg): QueryNegentropyResponse;
    fromProtoMsg(message: QueryNegentropyResponseProtoMsg): QueryNegentropyResponse;
    toProto(message: QueryNegentropyResponse): Uint8Array;
    toProtoMsg(message: QueryNegentropyResponse): QueryNegentropyResponseProtoMsg;
};
export declare const QueryKarmaRequest: {
    typeUrl: string;
    encode(message: QueryKarmaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryKarmaRequest;
    fromPartial(object: Partial<QueryKarmaRequest>): QueryKarmaRequest;
    fromAmino(object: QueryKarmaRequestAmino): QueryKarmaRequest;
    toAmino(message: QueryKarmaRequest): QueryKarmaRequestAmino;
    fromAminoMsg(object: QueryKarmaRequestAminoMsg): QueryKarmaRequest;
    fromProtoMsg(message: QueryKarmaRequestProtoMsg): QueryKarmaRequest;
    toProto(message: QueryKarmaRequest): Uint8Array;
    toProtoMsg(message: QueryKarmaRequest): QueryKarmaRequestProtoMsg;
};
export declare const QueryKarmaResponse: {
    typeUrl: string;
    encode(message: QueryKarmaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryKarmaResponse;
    fromPartial(object: Partial<QueryKarmaResponse>): QueryKarmaResponse;
    fromAmino(object: QueryKarmaResponseAmino): QueryKarmaResponse;
    toAmino(message: QueryKarmaResponse): QueryKarmaResponseAmino;
    fromAminoMsg(object: QueryKarmaResponseAminoMsg): QueryKarmaResponse;
    fromProtoMsg(message: QueryKarmaResponseProtoMsg): QueryKarmaResponse;
    toProto(message: QueryKarmaResponse): Uint8Array;
    toProtoMsg(message: QueryKarmaResponse): QueryKarmaResponseProtoMsg;
};
