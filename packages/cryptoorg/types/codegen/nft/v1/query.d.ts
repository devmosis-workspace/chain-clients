import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Owner, OwnerAmino, OwnerSDKType, Collection, CollectionAmino, CollectionSDKType, Denom, DenomAmino, DenomSDKType, BaseNFT, BaseNFTAmino, BaseNFTSDKType } from "./nft";
import { BinaryWriter } from "../../binary";
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequest {
    denomId: string;
    owner: string;
}
export interface QuerySupplyRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QuerySupplyRequest";
    value: Uint8Array;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestAmino {
    denom_id: string;
    owner: string;
}
export interface QuerySupplyRequestAminoMsg {
    type: "/chainmain.nft.v1.QuerySupplyRequest";
    value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestSDKType {
    denom_id: string;
    owner: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QuerySupplyResponse";
    value: Uint8Array;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseAmino {
    amount: string;
}
export interface QuerySupplyResponseAminoMsg {
    type: "/chainmain.nft.v1.QuerySupplyResponse";
    value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
    amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    denomId: string;
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryOwnerRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryOwnerRequest";
    value: Uint8Array;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestAmino {
    denom_id: string;
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryOwnerRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryOwnerRequest";
    value: QueryOwnerRequestAmino;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
    denom_id: string;
    owner: string;
    pagination: PageRequestSDKType;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner: Owner;
    pagination: PageResponse;
}
export interface QueryOwnerResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryOwnerResponse";
    value: Uint8Array;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseAmino {
    owner?: OwnerAmino;
    pagination?: PageResponseAmino;
}
export interface QueryOwnerResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryOwnerResponse";
    value: QueryOwnerResponseAmino;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
    owner: OwnerSDKType;
    pagination: PageResponseSDKType;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequest {
    denomId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryCollectionRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryCollectionRequest";
    value: Uint8Array;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequestAmino {
    denom_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryCollectionRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryCollectionRequest";
    value: QueryCollectionRequestAmino;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequestSDKType {
    denom_id: string;
    pagination: PageRequestSDKType;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponse {
    collection: Collection;
    pagination: PageResponse;
}
export interface QueryCollectionResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryCollectionResponse";
    value: Uint8Array;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponseAmino {
    collection?: CollectionAmino;
    pagination?: PageResponseAmino;
}
export interface QueryCollectionResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryCollectionResponse";
    value: QueryCollectionResponseAmino;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponseSDKType {
    collection: CollectionSDKType;
    pagination: PageResponseSDKType;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
    denomId: string;
}
export interface QueryDenomRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomRequest";
    value: Uint8Array;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestAmino {
    denom_id: string;
}
export interface QueryDenomRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomRequest";
    value: QueryDenomRequestAmino;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestSDKType {
    denom_id: string;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
    denom: Denom;
}
export interface QueryDenomResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomResponse";
    value: Uint8Array;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseAmino {
    denom?: DenomAmino;
}
export interface QueryDenomResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomResponse";
    value: QueryDenomResponseAmino;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseSDKType {
    denom: DenomSDKType;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequest {
    denomName: string;
}
export interface QueryDenomByNameRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomByNameRequest";
    value: Uint8Array;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequestAmino {
    denom_name: string;
}
export interface QueryDenomByNameRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomByNameRequest";
    value: QueryDenomByNameRequestAmino;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequestSDKType {
    denom_name: string;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponse {
    denom: Denom;
}
export interface QueryDenomByNameResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomByNameResponse";
    value: Uint8Array;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponseAmino {
    denom?: DenomAmino;
}
export interface QueryDenomByNameResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomByNameResponse";
    value: QueryDenomByNameResponseAmino;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponseSDKType {
    denom: DenomSDKType;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDenomsRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomsRequest";
    value: Uint8Array;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomsRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomsRequest";
    value: QueryDenomsRequestAmino;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
    denoms: Denom[];
    pagination: PageResponse;
}
export interface QueryDenomsResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryDenomsResponse";
    value: Uint8Array;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseAmino {
    denoms: DenomAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDenomsResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryDenomsResponse";
    value: QueryDenomsResponseAmino;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseSDKType {
    denoms: DenomSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    denomId: string;
    tokenId: string;
}
export interface QueryNFTRequestProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryNFTRequest";
    value: Uint8Array;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestAmino {
    denom_id: string;
    token_id: string;
}
export interface QueryNFTRequestAminoMsg {
    type: "/chainmain.nft.v1.QueryNFTRequest";
    value: QueryNFTRequestAmino;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
    denom_id: string;
    token_id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft: BaseNFT;
}
export interface QueryNFTResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.QueryNFTResponse";
    value: Uint8Array;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseAmino {
    nft?: BaseNFTAmino;
}
export interface QueryNFTResponseAminoMsg {
    type: "/chainmain.nft.v1.QueryNFTResponse";
    value: QueryNFTResponseAmino;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
    nft: BaseNFTSDKType;
}
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
export declare const QueryOwnerRequest: {
    typeUrl: string;
    encode(message: QueryOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerRequest;
    fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest;
    fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest;
    toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino;
    fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest;
    fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest;
    toProto(message: QueryOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg;
};
export declare const QueryOwnerResponse: {
    typeUrl: string;
    encode(message: QueryOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOwnerResponse;
    fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse;
    fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse;
    toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino;
    fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse;
    fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse;
    toProto(message: QueryOwnerResponse): Uint8Array;
    toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg;
};
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
export declare const QueryDenomByNameRequest: {
    typeUrl: string;
    encode(message: QueryDenomByNameRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomByNameRequest;
    fromPartial(object: Partial<QueryDenomByNameRequest>): QueryDenomByNameRequest;
    fromAmino(object: QueryDenomByNameRequestAmino): QueryDenomByNameRequest;
    toAmino(message: QueryDenomByNameRequest): QueryDenomByNameRequestAmino;
    fromAminoMsg(object: QueryDenomByNameRequestAminoMsg): QueryDenomByNameRequest;
    fromProtoMsg(message: QueryDenomByNameRequestProtoMsg): QueryDenomByNameRequest;
    toProto(message: QueryDenomByNameRequest): Uint8Array;
    toProtoMsg(message: QueryDenomByNameRequest): QueryDenomByNameRequestProtoMsg;
};
export declare const QueryDenomByNameResponse: {
    typeUrl: string;
    encode(message: QueryDenomByNameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomByNameResponse;
    fromPartial(object: Partial<QueryDenomByNameResponse>): QueryDenomByNameResponse;
    fromAmino(object: QueryDenomByNameResponseAmino): QueryDenomByNameResponse;
    toAmino(message: QueryDenomByNameResponse): QueryDenomByNameResponseAmino;
    fromAminoMsg(object: QueryDenomByNameResponseAminoMsg): QueryDenomByNameResponse;
    fromProtoMsg(message: QueryDenomByNameResponseProtoMsg): QueryDenomByNameResponse;
    toProto(message: QueryDenomByNameResponse): Uint8Array;
    toProtoMsg(message: QueryDenomByNameResponse): QueryDenomByNameResponseProtoMsg;
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
export declare const QueryNFTRequest: {
    typeUrl: string;
    encode(message: QueryNFTRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNFTRequest;
    fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest;
    fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest;
    toAmino(message: QueryNFTRequest): QueryNFTRequestAmino;
    fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest;
    fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest;
    toProto(message: QueryNFTRequest): Uint8Array;
    toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg;
};
export declare const QueryNFTResponse: {
    typeUrl: string;
    encode(message: QueryNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryNFTResponse;
    fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse;
    fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse;
    toAmino(message: QueryNFTResponse): QueryNFTResponseAmino;
    fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse;
    fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse;
    toProto(message: QueryNFTResponse): Uint8Array;
    toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg;
};
