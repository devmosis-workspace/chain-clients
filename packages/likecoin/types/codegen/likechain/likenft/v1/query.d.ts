import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { Class, ClassSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN, ClassesByISCNSDKType } from "./classes_by_iscn";
import { QueryResponseRecord, QueryResponseRecordSDKType } from "../../iscn/query";
import { ClassesByAccount, ClassesByAccountSDKType } from "./classes_by_account";
import { BlindBoxContent, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferSDKType } from "./offer";
import { Listing, ListingSDKType } from "./listing";
import { RoyaltyConfig, RoyaltyConfigSDKType, RoyaltyConfigByClass, RoyaltyConfigByClassSDKType } from "./royalty_config";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryClassesByISCNRequest {
    iscnIdPrefix: string;
    pagination?: PageRequest;
}
export interface QueryClassesByISCNRequestSDKType {
    iscn_id_prefix: string;
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByISCNResponse {
    iscnIdPrefix: string;
    classes: Class[];
    pagination?: PageResponse;
}
export interface QueryClassesByISCNResponseSDKType {
    iscn_id_prefix: string;
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClassesByISCNIndexRequest {
    pagination?: PageRequest;
}
export interface QueryClassesByISCNIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByISCNIndexResponse {
    classesByIscns: ClassesByISCN[];
    pagination?: PageResponse;
}
export interface QueryClassesByISCNIndexResponseSDKType {
    classes_by_iscns: ClassesByISCNSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryISCNByClassRequest {
    classId: string;
}
export interface QueryISCNByClassRequestSDKType {
    class_id: string;
}
export interface QueryISCNByClassResponse {
    iscnIdPrefix: string;
    owner: string;
    latestVersion: Long;
    latestRecord?: QueryResponseRecord;
}
export interface QueryISCNByClassResponseSDKType {
    iscn_id_prefix: string;
    owner: string;
    latest_version: Long;
    latest_record?: QueryResponseRecordSDKType;
}
export interface QueryClassesByAccountRequest {
    account: string;
    pagination?: PageRequest;
}
export interface QueryClassesByAccountRequestSDKType {
    account: string;
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByAccountResponse {
    account: string;
    classes: Class[];
    pagination?: PageResponse;
}
export interface QueryClassesByAccountResponseSDKType {
    account: string;
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClassesByAccountIndexRequest {
    pagination?: PageRequest;
}
export interface QueryClassesByAccountIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByAccountIndexResponse {
    classesByAccounts: ClassesByAccount[];
    pagination?: PageResponse;
}
export interface QueryClassesByAccountIndexResponseSDKType {
    classes_by_accounts: ClassesByAccountSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAccountByClassRequest {
    classId: string;
}
export interface QueryAccountByClassRequestSDKType {
    class_id: string;
}
export interface QueryAccountByClassResponse {
    address: string;
}
export interface QueryAccountByClassResponseSDKType {
    address: string;
}
export interface QueryBlindBoxContentRequest {
    classId: string;
    id: string;
}
export interface QueryBlindBoxContentRequestSDKType {
    class_id: string;
    id: string;
}
export interface QueryBlindBoxContentResponse {
    blindBoxContent?: BlindBoxContent;
}
export interface QueryBlindBoxContentResponseSDKType {
    blind_box_content?: BlindBoxContentSDKType;
}
export interface QueryBlindBoxContentIndexRequest {
    pagination?: PageRequest;
}
export interface QueryBlindBoxContentIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentIndexResponse {
    blindBoxContents: BlindBoxContent[];
    pagination?: PageResponse;
}
export interface QueryBlindBoxContentIndexResponseSDKType {
    blind_box_contents: BlindBoxContentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryBlindBoxContentsRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryBlindBoxContentsRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentsResponse {
    blindBoxContents: BlindBoxContent[];
    pagination?: PageResponse;
}
export interface QueryBlindBoxContentsResponseSDKType {
    blind_box_contents: BlindBoxContentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryOfferRequest {
    classId: string;
    nftId: string;
    buyer: string;
}
export interface QueryOfferRequestSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface QueryOfferResponse {
    offer?: Offer;
}
export interface QueryOfferResponseSDKType {
    offer?: OfferSDKType;
}
export interface QueryOfferIndexRequest {
    pagination?: PageRequest;
}
export interface QueryOfferIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryOfferIndexResponse {
    offers: Offer[];
    pagination?: PageResponse;
}
export interface QueryOfferIndexResponseSDKType {
    offers: OfferSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryOffersByClassRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryOffersByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryOffersByClassResponse {
    offers: Offer[];
    pagination?: PageResponse;
}
export interface QueryOffersByClassResponseSDKType {
    offers: OfferSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryOffersByNFTRequest {
    classId: string;
    nftId: string;
    pagination?: PageRequest;
}
export interface QueryOffersByNFTRequestSDKType {
    class_id: string;
    nft_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryOffersByNFTResponse {
    offers: Offer[];
    pagination?: PageResponse;
}
export interface QueryOffersByNFTResponseSDKType {
    offers: OfferSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryListingRequest {
    classId: string;
    nftId: string;
    seller: string;
}
export interface QueryListingRequestSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface QueryListingResponse {
    listing?: Listing;
}
export interface QueryListingResponseSDKType {
    listing?: ListingSDKType;
}
export interface QueryListingIndexRequest {
    pagination?: PageRequest;
}
export interface QueryListingIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryListingIndexResponse {
    listings: Listing[];
    pagination?: PageResponse;
}
export interface QueryListingIndexResponseSDKType {
    listings: ListingSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryListingsByClassRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryListingsByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryListingsByClassResponse {
    listings: Listing[];
    pagination?: PageResponse;
}
export interface QueryListingsByClassResponseSDKType {
    listings: ListingSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryListingsByNFTRequest {
    classId: string;
    nftId: string;
    pagination?: PageRequest;
}
export interface QueryListingsByNFTRequestSDKType {
    class_id: string;
    nft_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryListingsByNFTResponse {
    listings: Listing[];
    pagination?: PageResponse;
}
export interface QueryListingsByNFTResponseSDKType {
    listings: ListingSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRoyaltyConfigRequest {
    classId: string;
}
export interface QueryRoyaltyConfigRequestSDKType {
    class_id: string;
}
export interface QueryRoyaltyConfigResponse {
    royaltyConfig?: RoyaltyConfig;
}
export interface QueryRoyaltyConfigResponseSDKType {
    royalty_config?: RoyaltyConfigSDKType;
}
export interface QueryRoyaltyConfigIndexRequest {
    pagination?: PageRequest;
}
export interface QueryRoyaltyConfigIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryRoyaltyConfigIndexResponse {
    royaltyConfigByClass: RoyaltyConfigByClass[];
    pagination?: PageResponse;
}
export interface QueryRoyaltyConfigIndexResponseSDKType {
    royalty_config_by_class: RoyaltyConfigByClassSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryClassesByISCNRequest: {
    encode(message: QueryClassesByISCNRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByISCNRequest;
    fromPartial(object: Partial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest;
};
export declare const QueryClassesByISCNResponse: {
    encode(message: QueryClassesByISCNResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByISCNResponse;
    fromPartial(object: Partial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse;
};
export declare const QueryClassesByISCNIndexRequest: {
    encode(message: QueryClassesByISCNIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByISCNIndexRequest;
    fromPartial(object: Partial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest;
};
export declare const QueryClassesByISCNIndexResponse: {
    encode(message: QueryClassesByISCNIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByISCNIndexResponse;
    fromPartial(object: Partial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse;
};
export declare const QueryISCNByClassRequest: {
    encode(message: QueryISCNByClassRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryISCNByClassRequest;
    fromPartial(object: Partial<QueryISCNByClassRequest>): QueryISCNByClassRequest;
};
export declare const QueryISCNByClassResponse: {
    encode(message: QueryISCNByClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryISCNByClassResponse;
    fromPartial(object: Partial<QueryISCNByClassResponse>): QueryISCNByClassResponse;
};
export declare const QueryClassesByAccountRequest: {
    encode(message: QueryClassesByAccountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByAccountRequest;
    fromPartial(object: Partial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest;
};
export declare const QueryClassesByAccountResponse: {
    encode(message: QueryClassesByAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByAccountResponse;
    fromPartial(object: Partial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse;
};
export declare const QueryClassesByAccountIndexRequest: {
    encode(message: QueryClassesByAccountIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByAccountIndexRequest;
    fromPartial(object: Partial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest;
};
export declare const QueryClassesByAccountIndexResponse: {
    encode(message: QueryClassesByAccountIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryClassesByAccountIndexResponse;
    fromPartial(object: Partial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse;
};
export declare const QueryAccountByClassRequest: {
    encode(message: QueryAccountByClassRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountByClassRequest;
    fromPartial(object: Partial<QueryAccountByClassRequest>): QueryAccountByClassRequest;
};
export declare const QueryAccountByClassResponse: {
    encode(message: QueryAccountByClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountByClassResponse;
    fromPartial(object: Partial<QueryAccountByClassResponse>): QueryAccountByClassResponse;
};
export declare const QueryBlindBoxContentRequest: {
    encode(message: QueryBlindBoxContentRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentRequest;
    fromPartial(object: Partial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest;
};
export declare const QueryBlindBoxContentResponse: {
    encode(message: QueryBlindBoxContentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentResponse;
    fromPartial(object: Partial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse;
};
export declare const QueryBlindBoxContentIndexRequest: {
    encode(message: QueryBlindBoxContentIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentIndexRequest;
    fromPartial(object: Partial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest;
};
export declare const QueryBlindBoxContentIndexResponse: {
    encode(message: QueryBlindBoxContentIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentIndexResponse;
    fromPartial(object: Partial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse;
};
export declare const QueryBlindBoxContentsRequest: {
    encode(message: QueryBlindBoxContentsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentsRequest;
    fromPartial(object: Partial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest;
};
export declare const QueryBlindBoxContentsResponse: {
    encode(message: QueryBlindBoxContentsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBlindBoxContentsResponse;
    fromPartial(object: Partial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse;
};
export declare const QueryOfferRequest: {
    encode(message: QueryOfferRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOfferRequest;
    fromPartial(object: Partial<QueryOfferRequest>): QueryOfferRequest;
};
export declare const QueryOfferResponse: {
    encode(message: QueryOfferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOfferResponse;
    fromPartial(object: Partial<QueryOfferResponse>): QueryOfferResponse;
};
export declare const QueryOfferIndexRequest: {
    encode(message: QueryOfferIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOfferIndexRequest;
    fromPartial(object: Partial<QueryOfferIndexRequest>): QueryOfferIndexRequest;
};
export declare const QueryOfferIndexResponse: {
    encode(message: QueryOfferIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOfferIndexResponse;
    fromPartial(object: Partial<QueryOfferIndexResponse>): QueryOfferIndexResponse;
};
export declare const QueryOffersByClassRequest: {
    encode(message: QueryOffersByClassRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOffersByClassRequest;
    fromPartial(object: Partial<QueryOffersByClassRequest>): QueryOffersByClassRequest;
};
export declare const QueryOffersByClassResponse: {
    encode(message: QueryOffersByClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOffersByClassResponse;
    fromPartial(object: Partial<QueryOffersByClassResponse>): QueryOffersByClassResponse;
};
export declare const QueryOffersByNFTRequest: {
    encode(message: QueryOffersByNFTRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOffersByNFTRequest;
    fromPartial(object: Partial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest;
};
export declare const QueryOffersByNFTResponse: {
    encode(message: QueryOffersByNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOffersByNFTResponse;
    fromPartial(object: Partial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse;
};
export declare const QueryListingRequest: {
    encode(message: QueryListingRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingRequest;
    fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest;
};
export declare const QueryListingResponse: {
    encode(message: QueryListingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingResponse;
    fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse;
};
export declare const QueryListingIndexRequest: {
    encode(message: QueryListingIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingIndexRequest;
    fromPartial(object: Partial<QueryListingIndexRequest>): QueryListingIndexRequest;
};
export declare const QueryListingIndexResponse: {
    encode(message: QueryListingIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingIndexResponse;
    fromPartial(object: Partial<QueryListingIndexResponse>): QueryListingIndexResponse;
};
export declare const QueryListingsByClassRequest: {
    encode(message: QueryListingsByClassRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingsByClassRequest;
    fromPartial(object: Partial<QueryListingsByClassRequest>): QueryListingsByClassRequest;
};
export declare const QueryListingsByClassResponse: {
    encode(message: QueryListingsByClassResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingsByClassResponse;
    fromPartial(object: Partial<QueryListingsByClassResponse>): QueryListingsByClassResponse;
};
export declare const QueryListingsByNFTRequest: {
    encode(message: QueryListingsByNFTRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingsByNFTRequest;
    fromPartial(object: Partial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest;
};
export declare const QueryListingsByNFTResponse: {
    encode(message: QueryListingsByNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListingsByNFTResponse;
    fromPartial(object: Partial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse;
};
export declare const QueryRoyaltyConfigRequest: {
    encode(message: QueryRoyaltyConfigRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRoyaltyConfigRequest;
    fromPartial(object: Partial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest;
};
export declare const QueryRoyaltyConfigResponse: {
    encode(message: QueryRoyaltyConfigResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRoyaltyConfigResponse;
    fromPartial(object: Partial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse;
};
export declare const QueryRoyaltyConfigIndexRequest: {
    encode(message: QueryRoyaltyConfigIndexRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRoyaltyConfigIndexRequest;
    fromPartial(object: Partial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest;
};
export declare const QueryRoyaltyConfigIndexResponse: {
    encode(message: QueryRoyaltyConfigIndexResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryRoyaltyConfigIndexResponse;
    fromPartial(object: Partial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse;
};
