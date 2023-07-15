import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Owner, OwnerSDKType, Collection, CollectionSDKType, Denom, DenomSDKType, BaseNFT, BaseNFTSDKType } from "./nft";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequest {
    denomId: string;
    owner: string;
}
/** QuerySupplyRequest is the request type for the Query/HTLC RPC method */
export interface QuerySupplyRequestSDKType {
    denom_id: string;
    owner: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
    amount: Long;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
    amount: Long;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
    denomId: string;
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
    denom_id: string;
    owner: string;
    pagination?: PageRequestSDKType;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
    owner?: Owner;
    pagination?: PageResponse;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
    owner?: OwnerSDKType;
    pagination?: PageResponseSDKType;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequest {
    denomId: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryCollectionRequest is the request type for the Query/Collection RPC method */
export interface QueryCollectionRequestSDKType {
    denom_id: string;
    pagination?: PageRequestSDKType;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponse {
    collection?: Collection;
    pagination?: PageResponse;
}
/** QueryCollectionResponse is the response type for the Query/Collection RPC method */
export interface QueryCollectionResponseSDKType {
    collection?: CollectionSDKType;
    pagination?: PageResponseSDKType;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequest {
    denomId: string;
}
/** QueryDenomRequest is the request type for the Query/Denom RPC method */
export interface QueryDenomRequestSDKType {
    denom_id: string;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponse {
    denom?: Denom;
}
/** QueryDenomResponse is the response type for the Query/Denom RPC method */
export interface QueryDenomResponseSDKType {
    denom?: DenomSDKType;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequest {
    denomName: string;
}
/** QueryDenomByNameRequest is the request type for the Query/DenomByName RPC method */
export interface QueryDenomByNameRequestSDKType {
    denom_name: string;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponse {
    denom?: Denom;
}
/** QueryDenomByNameResponse is the response type for the Query/DenomByName RPC method */
export interface QueryDenomByNameResponseSDKType {
    denom?: DenomSDKType;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDenomsRequest is the request type for the Query/Denoms RPC method */
export interface QueryDenomsRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponse {
    denoms: Denom[];
    pagination?: PageResponse;
}
/** QueryDenomsResponse is the response type for the Query/Denoms RPC method */
export interface QueryDenomsResponseSDKType {
    denoms: DenomSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
    denomId: string;
    tokenId: string;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
    denom_id: string;
    token_id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
    nft?: BaseNFT;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
    nft?: BaseNFTSDKType;
}
export declare const QuerySupplyRequest: {
    encode(message: QuerySupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyRequest;
    fromPartial(object: Partial<QuerySupplyRequest>): QuerySupplyRequest;
};
export declare const QuerySupplyResponse: {
    encode(message: QuerySupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySupplyResponse;
    fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse;
};
export declare const QueryOwnerRequest: {
    encode(message: QueryOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerRequest;
    fromPartial(object: Partial<QueryOwnerRequest>): QueryOwnerRequest;
};
export declare const QueryOwnerResponse: {
    encode(message: QueryOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOwnerResponse;
    fromPartial(object: Partial<QueryOwnerResponse>): QueryOwnerResponse;
};
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCollectionRequest;
    fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCollectionResponse;
    fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse;
};
export declare const QueryDenomRequest: {
    encode(message: QueryDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomRequest;
    fromPartial(object: Partial<QueryDenomRequest>): QueryDenomRequest;
};
export declare const QueryDenomResponse: {
    encode(message: QueryDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomResponse;
    fromPartial(object: Partial<QueryDenomResponse>): QueryDenomResponse;
};
export declare const QueryDenomByNameRequest: {
    encode(message: QueryDenomByNameRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomByNameRequest;
    fromPartial(object: Partial<QueryDenomByNameRequest>): QueryDenomByNameRequest;
};
export declare const QueryDenomByNameResponse: {
    encode(message: QueryDenomByNameResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomByNameResponse;
    fromPartial(object: Partial<QueryDenomByNameResponse>): QueryDenomByNameResponse;
};
export declare const QueryDenomsRequest: {
    encode(message: QueryDenomsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsRequest;
    fromPartial(object: Partial<QueryDenomsRequest>): QueryDenomsRequest;
};
export declare const QueryDenomsResponse: {
    encode(message: QueryDenomsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomsResponse;
    fromPartial(object: Partial<QueryDenomsResponse>): QueryDenomsResponse;
};
export declare const QueryNFTRequest: {
    encode(message: QueryNFTRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryNFTRequest;
    fromPartial(object: Partial<QueryNFTRequest>): QueryNFTRequest;
};
export declare const QueryNFTResponse: {
    encode(message: QueryNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryNFTResponse;
    fromPartial(object: Partial<QueryNFTResponse>): QueryNFTResponse;
};
