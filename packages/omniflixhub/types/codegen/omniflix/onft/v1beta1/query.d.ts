import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, CollectionAmino, CollectionSDKType, Denom, DenomAmino, DenomSDKType, ONFT, ONFTAmino, ONFTSDKType, Owner, OwnerAmino, OwnerSDKType } from "./onft";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
export interface QueryCollectionRequest {
    denomId: string;
    pagination?: PageRequest;
}
export interface QueryCollectionRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
    value: Uint8Array;
}
export interface QueryCollectionRequestAmino {
    denom_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryCollectionRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryCollectionRequest";
    value: QueryCollectionRequestAmino;
}
export interface QueryCollectionRequestSDKType {
    denom_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryCollectionResponse {
    collection?: Collection;
    pagination?: PageResponse;
}
export interface QueryCollectionResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
    value: Uint8Array;
}
export interface QueryCollectionResponseAmino {
    collection?: CollectionAmino;
    pagination?: PageResponseAmino;
}
export interface QueryCollectionResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryCollectionResponse";
    value: QueryCollectionResponseAmino;
}
export interface QueryCollectionResponseSDKType {
    collection?: CollectionSDKType;
    pagination?: PageResponseSDKType;
}
export interface QueryIBCCollectionRequest {
    hash: string;
    pagination?: PageRequest;
}
export interface QueryIBCCollectionRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest";
    value: Uint8Array;
}
export interface QueryIBCCollectionRequestAmino {
    hash?: string;
    pagination?: PageRequestAmino;
}
export interface QueryIBCCollectionRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryIBCCollectionRequest";
    value: QueryIBCCollectionRequestAmino;
}
export interface QueryIBCCollectionRequestSDKType {
    hash: string;
    pagination?: PageRequestSDKType;
}
export interface QueryDenomRequest {
    denomId: string;
}
export interface QueryDenomRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
    value: Uint8Array;
}
export interface QueryDenomRequestAmino {
    denom_id?: string;
}
export interface QueryDenomRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryDenomRequest";
    value: QueryDenomRequestAmino;
}
export interface QueryDenomRequestSDKType {
    denom_id: string;
}
export interface QueryDenomResponse {
    denom?: Denom;
}
export interface QueryDenomResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
    value: Uint8Array;
}
export interface QueryDenomResponseAmino {
    denom?: DenomAmino;
}
export interface QueryDenomResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryDenomResponse";
    value: QueryDenomResponseAmino;
}
export interface QueryDenomResponseSDKType {
    denom?: DenomSDKType;
}
export interface QueryIBCDenomRequest {
    hash: string;
}
export interface QueryIBCDenomRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest";
    value: Uint8Array;
}
export interface QueryIBCDenomRequestAmino {
    hash?: string;
}
export interface QueryIBCDenomRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryIBCDenomRequest";
    value: QueryIBCDenomRequestAmino;
}
export interface QueryIBCDenomRequestSDKType {
    hash: string;
}
export interface QueryDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    owner: string;
}
export interface QueryDenomsRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
    value: Uint8Array;
}
export interface QueryDenomsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    owner?: string;
}
export interface QueryDenomsRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryDenomsRequest";
    value: QueryDenomsRequestAmino;
}
export interface QueryDenomsRequestSDKType {
    pagination?: PageRequestSDKType;
    owner: string;
}
export interface QueryDenomsResponse {
    denoms: Denom[];
    pagination?: PageResponse;
}
export interface QueryDenomsResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
    value: Uint8Array;
}
export interface QueryDenomsResponseAmino {
    denoms?: DenomAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDenomsResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryDenomsResponse";
    value: QueryDenomsResponseAmino;
}
export interface QueryDenomsResponseSDKType {
    denoms: DenomSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryONFTRequest {
    denomId: string;
    id: string;
}
export interface QueryONFTRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
    value: Uint8Array;
}
export interface QueryONFTRequestAmino {
    denom_id?: string;
    id?: string;
}
export interface QueryONFTRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryONFTRequest";
    value: QueryONFTRequestAmino;
}
export interface QueryONFTRequestSDKType {
    denom_id: string;
    id: string;
}
export interface QueryONFTResponse {
    onft?: ONFT;
}
export interface QueryONFTResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
    value: Uint8Array;
}
export interface QueryONFTResponseAmino {
    onft?: ONFTAmino;
}
export interface QueryONFTResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryONFTResponse";
    value: QueryONFTResponseAmino;
}
export interface QueryONFTResponseSDKType {
    onft?: ONFTSDKType;
}
export interface QueryIBCDenomONFTRequest {
    hash: string;
    id: string;
}
export interface QueryIBCDenomONFTRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest";
    value: Uint8Array;
}
export interface QueryIBCDenomONFTRequestAmino {
    hash?: string;
    id?: string;
}
export interface QueryIBCDenomONFTRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryIBCDenomONFTRequest";
    value: QueryIBCDenomONFTRequestAmino;
}
export interface QueryIBCDenomONFTRequestSDKType {
    hash: string;
    id: string;
}
export interface QueryOwnerONFTsRequest {
    denomId: string;
    owner: string;
    pagination?: PageRequest;
}
export interface QueryOwnerONFTsRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
    value: Uint8Array;
}
export interface QueryOwnerONFTsRequestAmino {
    denom_id?: string;
    owner?: string;
    pagination?: PageRequestAmino;
}
export interface QueryOwnerONFTsRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsRequest";
    value: QueryOwnerONFTsRequestAmino;
}
export interface QueryOwnerONFTsRequestSDKType {
    denom_id: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
export interface QueryOwnerONFTsResponse {
    owner?: Owner;
    pagination?: PageResponse;
}
export interface QueryOwnerONFTsResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
    value: Uint8Array;
}
export interface QueryOwnerONFTsResponseAmino {
    owner?: OwnerAmino;
    pagination?: PageResponseAmino;
}
export interface QueryOwnerONFTsResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryOwnerONFTsResponse";
    value: QueryOwnerONFTsResponseAmino;
}
export interface QueryOwnerONFTsResponseSDKType {
    owner?: OwnerSDKType;
    pagination?: PageResponseSDKType;
}
export interface QueryOwnerIBCDenomONFTsRequest {
    hash: string;
    owner: string;
    pagination?: PageRequest;
}
export interface QueryOwnerIBCDenomONFTsRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest";
    value: Uint8Array;
}
export interface QueryOwnerIBCDenomONFTsRequestAmino {
    hash?: string;
    owner?: string;
    pagination?: PageRequestAmino;
}
export interface QueryOwnerIBCDenomONFTsRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryOwnerIBCDenomONFTsRequest";
    value: QueryOwnerIBCDenomONFTsRequestAmino;
}
export interface QueryOwnerIBCDenomONFTsRequestSDKType {
    hash: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
export interface QuerySupplyRequest {
    denomId: string;
    owner: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
    value: Uint8Array;
}
export interface QuerySupplyRequestAmino {
    denom_id?: string;
    owner?: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {
    denom_id: string;
    owner: string;
}
export interface QuerySupplyResponse {
    amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
    value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
    amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
    amount: bigint;
}
export interface QueryIBCDenomSupplyRequest {
    hash: string;
    owner: string;
}
export interface QueryIBCDenomSupplyRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest";
    value: Uint8Array;
}
export interface QueryIBCDenomSupplyRequestAmino {
    hash?: string;
    owner?: string;
}
export interface QueryIBCDenomSupplyRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryIBCDenomSupplyRequest";
    value: QueryIBCDenomSupplyRequestAmino;
}
export interface QueryIBCDenomSupplyRequestSDKType {
    hash: string;
    owner: string;
}
export interface OwnerONFTCollection {
    denom: Denom;
    onfts: ONFT[];
}
export interface OwnerONFTCollectionProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
    value: Uint8Array;
}
export interface OwnerONFTCollectionAmino {
    denom?: DenomAmino;
    onfts?: ONFTAmino[];
}
export interface OwnerONFTCollectionAminoMsg {
    type: "/OmniFlix.onft.v1beta1.OwnerONFTCollection";
    value: OwnerONFTCollectionAmino;
}
export interface OwnerONFTCollectionSDKType {
    denom: DenomSDKType;
    onfts: ONFTSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/OmniFlix.onft.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryCollectionRequest: {
    typeUrl: string;
    encode(message: QueryCollectionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCollectionRequest;
    fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest;
    fromAmino(object: QueryCollectionRequestAmino): QueryCollectionRequest;
    toAmino(message: QueryCollectionRequest): QueryCollectionRequestAmino;
    fromAminoMsg(object: QueryCollectionRequestAminoMsg): QueryCollectionRequest;
    fromProtoMsg(message: QueryCollectionRequestProtoMsg): QueryCollectionRequest;
    toProto(message: QueryCollectionRequest): Uint8Array;
    toProtoMsg(message: QueryCollectionRequest): QueryCollectionRequestProtoMsg;
};
export declare const QueryCollectionResponse: {
    typeUrl: string;
    encode(message: QueryCollectionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCollectionResponse;
    fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse;
    fromAmino(object: QueryCollectionResponseAmino): QueryCollectionResponse;
    toAmino(message: QueryCollectionResponse): QueryCollectionResponseAmino;
    fromAminoMsg(object: QueryCollectionResponseAminoMsg): QueryCollectionResponse;
    fromProtoMsg(message: QueryCollectionResponseProtoMsg): QueryCollectionResponse;
    toProto(message: QueryCollectionResponse): Uint8Array;
    toProtoMsg(message: QueryCollectionResponse): QueryCollectionResponseProtoMsg;
};
export declare const QueryIBCCollectionRequest: {
    typeUrl: string;
    encode(message: QueryIBCCollectionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIBCCollectionRequest;
    fromPartial(object: Partial<QueryIBCCollectionRequest>): QueryIBCCollectionRequest;
    fromAmino(object: QueryIBCCollectionRequestAmino): QueryIBCCollectionRequest;
    toAmino(message: QueryIBCCollectionRequest): QueryIBCCollectionRequestAmino;
    fromAminoMsg(object: QueryIBCCollectionRequestAminoMsg): QueryIBCCollectionRequest;
    fromProtoMsg(message: QueryIBCCollectionRequestProtoMsg): QueryIBCCollectionRequest;
    toProto(message: QueryIBCCollectionRequest): Uint8Array;
    toProtoMsg(message: QueryIBCCollectionRequest): QueryIBCCollectionRequestProtoMsg;
};
export declare const QueryDenomRequest: {
    typeUrl: string;
    encode(message: QueryDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomRequest;
    fromPartial(object: Partial<QueryDenomRequest>): QueryDenomRequest;
    fromAmino(object: QueryDenomRequestAmino): QueryDenomRequest;
    toAmino(message: QueryDenomRequest): QueryDenomRequestAmino;
    fromAminoMsg(object: QueryDenomRequestAminoMsg): QueryDenomRequest;
    fromProtoMsg(message: QueryDenomRequestProtoMsg): QueryDenomRequest;
    toProto(message: QueryDenomRequest): Uint8Array;
    toProtoMsg(message: QueryDenomRequest): QueryDenomRequestProtoMsg;
};
export declare const QueryDenomResponse: {
    typeUrl: string;
    encode(message: QueryDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomResponse;
    fromPartial(object: Partial<QueryDenomResponse>): QueryDenomResponse;
    fromAmino(object: QueryDenomResponseAmino): QueryDenomResponse;
    toAmino(message: QueryDenomResponse): QueryDenomResponseAmino;
    fromAminoMsg(object: QueryDenomResponseAminoMsg): QueryDenomResponse;
    fromProtoMsg(message: QueryDenomResponseProtoMsg): QueryDenomResponse;
    toProto(message: QueryDenomResponse): Uint8Array;
    toProtoMsg(message: QueryDenomResponse): QueryDenomResponseProtoMsg;
};
export declare const QueryIBCDenomRequest: {
    typeUrl: string;
    encode(message: QueryIBCDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIBCDenomRequest;
    fromPartial(object: Partial<QueryIBCDenomRequest>): QueryIBCDenomRequest;
    fromAmino(object: QueryIBCDenomRequestAmino): QueryIBCDenomRequest;
    toAmino(message: QueryIBCDenomRequest): QueryIBCDenomRequestAmino;
    fromAminoMsg(object: QueryIBCDenomRequestAminoMsg): QueryIBCDenomRequest;
    fromProtoMsg(message: QueryIBCDenomRequestProtoMsg): QueryIBCDenomRequest;
    toProto(message: QueryIBCDenomRequest): Uint8Array;
    toProtoMsg(message: QueryIBCDenomRequest): QueryIBCDenomRequestProtoMsg;
};
export declare const QueryDenomsRequest: {
    typeUrl: string;
    encode(message: QueryDenomsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomsRequest;
    fromPartial(object: Partial<QueryDenomsRequest>): QueryDenomsRequest;
    fromAmino(object: QueryDenomsRequestAmino): QueryDenomsRequest;
    toAmino(message: QueryDenomsRequest): QueryDenomsRequestAmino;
    fromAminoMsg(object: QueryDenomsRequestAminoMsg): QueryDenomsRequest;
    fromProtoMsg(message: QueryDenomsRequestProtoMsg): QueryDenomsRequest;
    toProto(message: QueryDenomsRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsRequest): QueryDenomsRequestProtoMsg;
};
export declare const QueryDenomsResponse: {
    typeUrl: string;
    encode(message: QueryDenomsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomsResponse;
    fromPartial(object: Partial<QueryDenomsResponse>): QueryDenomsResponse;
    fromAmino(object: QueryDenomsResponseAmino): QueryDenomsResponse;
    toAmino(message: QueryDenomsResponse): QueryDenomsResponseAmino;
    fromAminoMsg(object: QueryDenomsResponseAminoMsg): QueryDenomsResponse;
    fromProtoMsg(message: QueryDenomsResponseProtoMsg): QueryDenomsResponse;
    toProto(message: QueryDenomsResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsResponse): QueryDenomsResponseProtoMsg;
};
export declare const QueryONFTRequest: {
    typeUrl: string;
    encode(message: QueryONFTRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryONFTRequest;
    fromPartial(object: Partial<QueryONFTRequest>): QueryONFTRequest;
    fromAmino(object: QueryONFTRequestAmino): QueryONFTRequest;
    toAmino(message: QueryONFTRequest): QueryONFTRequestAmino;
    fromAminoMsg(object: QueryONFTRequestAminoMsg): QueryONFTRequest;
    fromProtoMsg(message: QueryONFTRequestProtoMsg): QueryONFTRequest;
    toProto(message: QueryONFTRequest): Uint8Array;
    toProtoMsg(message: QueryONFTRequest): QueryONFTRequestProtoMsg;
};
export declare const QueryONFTResponse: {
    typeUrl: string;
    encode(message: QueryONFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryONFTResponse;
    fromPartial(object: Partial<QueryONFTResponse>): QueryONFTResponse;
    fromAmino(object: QueryONFTResponseAmino): QueryONFTResponse;
    toAmino(message: QueryONFTResponse): QueryONFTResponseAmino;
    fromAminoMsg(object: QueryONFTResponseAminoMsg): QueryONFTResponse;
    fromProtoMsg(message: QueryONFTResponseProtoMsg): QueryONFTResponse;
    toProto(message: QueryONFTResponse): Uint8Array;
    toProtoMsg(message: QueryONFTResponse): QueryONFTResponseProtoMsg;
};
export declare const QueryIBCDenomONFTRequest: {
    typeUrl: string;
    encode(message: QueryIBCDenomONFTRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIBCDenomONFTRequest;
    fromPartial(object: Partial<QueryIBCDenomONFTRequest>): QueryIBCDenomONFTRequest;
    fromAmino(object: QueryIBCDenomONFTRequestAmino): QueryIBCDenomONFTRequest;
    toAmino(message: QueryIBCDenomONFTRequest): QueryIBCDenomONFTRequestAmino;
    fromAminoMsg(object: QueryIBCDenomONFTRequestAminoMsg): QueryIBCDenomONFTRequest;
    fromProtoMsg(message: QueryIBCDenomONFTRequestProtoMsg): QueryIBCDenomONFTRequest;
    toProto(message: QueryIBCDenomONFTRequest): Uint8Array;
    toProtoMsg(message: QueryIBCDenomONFTRequest): QueryIBCDenomONFTRequestProtoMsg;
};
export declare const QueryOwnerONFTsRequest: {
    typeUrl: string;
    encode(message: QueryOwnerONFTsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerONFTsRequest;
    fromPartial(object: Partial<QueryOwnerONFTsRequest>): QueryOwnerONFTsRequest;
    fromAmino(object: QueryOwnerONFTsRequestAmino): QueryOwnerONFTsRequest;
    toAmino(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestAmino;
    fromAminoMsg(object: QueryOwnerONFTsRequestAminoMsg): QueryOwnerONFTsRequest;
    fromProtoMsg(message: QueryOwnerONFTsRequestProtoMsg): QueryOwnerONFTsRequest;
    toProto(message: QueryOwnerONFTsRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerONFTsRequest): QueryOwnerONFTsRequestProtoMsg;
};
export declare const QueryOwnerONFTsResponse: {
    typeUrl: string;
    encode(message: QueryOwnerONFTsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerONFTsResponse;
    fromPartial(object: Partial<QueryOwnerONFTsResponse>): QueryOwnerONFTsResponse;
    fromAmino(object: QueryOwnerONFTsResponseAmino): QueryOwnerONFTsResponse;
    toAmino(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseAmino;
    fromAminoMsg(object: QueryOwnerONFTsResponseAminoMsg): QueryOwnerONFTsResponse;
    fromProtoMsg(message: QueryOwnerONFTsResponseProtoMsg): QueryOwnerONFTsResponse;
    toProto(message: QueryOwnerONFTsResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerONFTsResponse): QueryOwnerONFTsResponseProtoMsg;
};
export declare const QueryOwnerIBCDenomONFTsRequest: {
    typeUrl: string;
    encode(message: QueryOwnerIBCDenomONFTsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerIBCDenomONFTsRequest;
    fromPartial(object: Partial<QueryOwnerIBCDenomONFTsRequest>): QueryOwnerIBCDenomONFTsRequest;
    fromAmino(object: QueryOwnerIBCDenomONFTsRequestAmino): QueryOwnerIBCDenomONFTsRequest;
    toAmino(message: QueryOwnerIBCDenomONFTsRequest): QueryOwnerIBCDenomONFTsRequestAmino;
    fromAminoMsg(object: QueryOwnerIBCDenomONFTsRequestAminoMsg): QueryOwnerIBCDenomONFTsRequest;
    fromProtoMsg(message: QueryOwnerIBCDenomONFTsRequestProtoMsg): QueryOwnerIBCDenomONFTsRequest;
    toProto(message: QueryOwnerIBCDenomONFTsRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerIBCDenomONFTsRequest): QueryOwnerIBCDenomONFTsRequestProtoMsg;
};
export declare const QuerySupplyRequest: {
    typeUrl: string;
    encode(message: QuerySupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySupplyRequest;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
    fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest;
    toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino;
    fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest;
    fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest;
    toProto(message: QuerySupplyRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg;
};
export declare const QuerySupplyResponse: {
    typeUrl: string;
    encode(message: QuerySupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySupplyResponse;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
    fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse;
    toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino;
    fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse;
    fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse;
    toProto(message: QuerySupplyResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg;
};
export declare const QueryIBCDenomSupplyRequest: {
    typeUrl: string;
    encode(message: QueryIBCDenomSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIBCDenomSupplyRequest;
    fromPartial(object: Partial<QueryIBCDenomSupplyRequest>): QueryIBCDenomSupplyRequest;
    fromAmino(object: QueryIBCDenomSupplyRequestAmino): QueryIBCDenomSupplyRequest;
    toAmino(message: QueryIBCDenomSupplyRequest): QueryIBCDenomSupplyRequestAmino;
    fromAminoMsg(object: QueryIBCDenomSupplyRequestAminoMsg): QueryIBCDenomSupplyRequest;
    fromProtoMsg(message: QueryIBCDenomSupplyRequestProtoMsg): QueryIBCDenomSupplyRequest;
    toProto(message: QueryIBCDenomSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryIBCDenomSupplyRequest): QueryIBCDenomSupplyRequestProtoMsg;
};
export declare const OwnerONFTCollection: {
    typeUrl: string;
    encode(message: OwnerONFTCollection, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OwnerONFTCollection;
    fromPartial(object: Partial<OwnerONFTCollection>): OwnerONFTCollection;
    fromAmino(object: OwnerONFTCollectionAmino): OwnerONFTCollection;
    toAmino(message: OwnerONFTCollection): OwnerONFTCollectionAmino;
    fromAminoMsg(object: OwnerONFTCollectionAminoMsg): OwnerONFTCollection;
    fromProtoMsg(message: OwnerONFTCollectionProtoMsg): OwnerONFTCollection;
    toProto(message: OwnerONFTCollection): Uint8Array;
    toProtoMsg(message: OwnerONFTCollection): OwnerONFTCollectionProtoMsg;
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
