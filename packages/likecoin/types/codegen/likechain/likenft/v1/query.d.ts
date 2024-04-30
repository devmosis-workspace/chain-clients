import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Class, ClassAmino, ClassSDKType } from "../../../cosmos/nft/v1beta1/nft";
import { ClassesByISCN, ClassesByISCNAmino, ClassesByISCNSDKType } from "./classes_by_iscn";
import { QueryResponseRecord, QueryResponseRecordAmino, QueryResponseRecordSDKType } from "../../iscn/query";
import { ClassesByAccount, ClassesByAccountAmino, ClassesByAccountSDKType } from "./classes_by_account";
import { BlindBoxContent, BlindBoxContentAmino, BlindBoxContentSDKType } from "./blind_box_content";
import { Offer, OfferAmino, OfferSDKType } from "./offer";
import { Listing, ListingAmino, ListingSDKType } from "./listing";
import { RoyaltyConfig, RoyaltyConfigAmino, RoyaltyConfigSDKType, RoyaltyConfigByClass, RoyaltyConfigByClassAmino, RoyaltyConfigByClassSDKType } from "./royalty_config";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryParamsRequest";
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
    typeUrl: "/likechain.likenft.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryClassesByISCNRequest {
    iscnIdPrefix: string;
    pagination?: PageRequest;
}
export interface QueryClassesByISCNRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByISCNRequest";
    value: Uint8Array;
}
export interface QueryClassesByISCNRequestAmino {
    iscn_id_prefix?: string;
    pagination?: PageRequestAmino;
}
export interface QueryClassesByISCNRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByISCNRequest";
    value: QueryClassesByISCNRequestAmino;
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
export interface QueryClassesByISCNResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByISCNResponse";
    value: Uint8Array;
}
export interface QueryClassesByISCNResponseAmino {
    iscn_id_prefix?: string;
    classes?: ClassAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClassesByISCNResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByISCNResponse";
    value: QueryClassesByISCNResponseAmino;
}
export interface QueryClassesByISCNResponseSDKType {
    iscn_id_prefix: string;
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClassesByISCNIndexRequest {
    pagination?: PageRequest;
}
export interface QueryClassesByISCNIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexRequest";
    value: Uint8Array;
}
export interface QueryClassesByISCNIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryClassesByISCNIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByISCNIndexRequest";
    value: QueryClassesByISCNIndexRequestAmino;
}
export interface QueryClassesByISCNIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByISCNIndexResponse {
    classesByIscns: ClassesByISCN[];
    pagination?: PageResponse;
}
export interface QueryClassesByISCNIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexResponse";
    value: Uint8Array;
}
export interface QueryClassesByISCNIndexResponseAmino {
    classes_by_iscns?: ClassesByISCNAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClassesByISCNIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByISCNIndexResponse";
    value: QueryClassesByISCNIndexResponseAmino;
}
export interface QueryClassesByISCNIndexResponseSDKType {
    classes_by_iscns: ClassesByISCNSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryISCNByClassRequest {
    classId: string;
}
export interface QueryISCNByClassRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryISCNByClassRequest";
    value: Uint8Array;
}
export interface QueryISCNByClassRequestAmino {
    class_id?: string;
}
export interface QueryISCNByClassRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryISCNByClassRequest";
    value: QueryISCNByClassRequestAmino;
}
export interface QueryISCNByClassRequestSDKType {
    class_id: string;
}
export interface QueryISCNByClassResponse {
    iscnIdPrefix: string;
    owner: string;
    latestVersion: bigint;
    latestRecord: QueryResponseRecord;
}
export interface QueryISCNByClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryISCNByClassResponse";
    value: Uint8Array;
}
export interface QueryISCNByClassResponseAmino {
    iscn_id_prefix?: string;
    owner?: string;
    latest_version?: string;
    latest_record?: QueryResponseRecordAmino;
}
export interface QueryISCNByClassResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryISCNByClassResponse";
    value: QueryISCNByClassResponseAmino;
}
export interface QueryISCNByClassResponseSDKType {
    iscn_id_prefix: string;
    owner: string;
    latest_version: bigint;
    latest_record: QueryResponseRecordSDKType;
}
export interface QueryClassesByAccountRequest {
    account: string;
    pagination?: PageRequest;
}
export interface QueryClassesByAccountRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByAccountRequest";
    value: Uint8Array;
}
export interface QueryClassesByAccountRequestAmino {
    account?: string;
    pagination?: PageRequestAmino;
}
export interface QueryClassesByAccountRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByAccountRequest";
    value: QueryClassesByAccountRequestAmino;
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
export interface QueryClassesByAccountResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByAccountResponse";
    value: Uint8Array;
}
export interface QueryClassesByAccountResponseAmino {
    account?: string;
    classes?: ClassAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClassesByAccountResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByAccountResponse";
    value: QueryClassesByAccountResponseAmino;
}
export interface QueryClassesByAccountResponseSDKType {
    account: string;
    classes: ClassSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryClassesByAccountIndexRequest {
    pagination?: PageRequest;
}
export interface QueryClassesByAccountIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexRequest";
    value: Uint8Array;
}
export interface QueryClassesByAccountIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryClassesByAccountIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByAccountIndexRequest";
    value: QueryClassesByAccountIndexRequestAmino;
}
export interface QueryClassesByAccountIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryClassesByAccountIndexResponse {
    classesByAccounts: ClassesByAccount[];
    pagination?: PageResponse;
}
export interface QueryClassesByAccountIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexResponse";
    value: Uint8Array;
}
export interface QueryClassesByAccountIndexResponseAmino {
    classes_by_accounts?: ClassesByAccountAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryClassesByAccountIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryClassesByAccountIndexResponse";
    value: QueryClassesByAccountIndexResponseAmino;
}
export interface QueryClassesByAccountIndexResponseSDKType {
    classes_by_accounts: ClassesByAccountSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAccountByClassRequest {
    classId: string;
}
export interface QueryAccountByClassRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryAccountByClassRequest";
    value: Uint8Array;
}
export interface QueryAccountByClassRequestAmino {
    class_id?: string;
}
export interface QueryAccountByClassRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryAccountByClassRequest";
    value: QueryAccountByClassRequestAmino;
}
export interface QueryAccountByClassRequestSDKType {
    class_id: string;
}
export interface QueryAccountByClassResponse {
    address: string;
}
export interface QueryAccountByClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryAccountByClassResponse";
    value: Uint8Array;
}
export interface QueryAccountByClassResponseAmino {
    address?: string;
}
export interface QueryAccountByClassResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryAccountByClassResponse";
    value: QueryAccountByClassResponseAmino;
}
export interface QueryAccountByClassResponseSDKType {
    address: string;
}
export interface QueryBlindBoxContentRequest {
    classId: string;
    id: string;
}
export interface QueryBlindBoxContentRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentRequest";
    value: Uint8Array;
}
export interface QueryBlindBoxContentRequestAmino {
    class_id?: string;
    id?: string;
}
export interface QueryBlindBoxContentRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentRequest";
    value: QueryBlindBoxContentRequestAmino;
}
export interface QueryBlindBoxContentRequestSDKType {
    class_id: string;
    id: string;
}
export interface QueryBlindBoxContentResponse {
    blindBoxContent: BlindBoxContent;
}
export interface QueryBlindBoxContentResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentResponse";
    value: Uint8Array;
}
export interface QueryBlindBoxContentResponseAmino {
    blind_box_content?: BlindBoxContentAmino;
}
export interface QueryBlindBoxContentResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentResponse";
    value: QueryBlindBoxContentResponseAmino;
}
export interface QueryBlindBoxContentResponseSDKType {
    blind_box_content: BlindBoxContentSDKType;
}
export interface QueryBlindBoxContentIndexRequest {
    pagination?: PageRequest;
}
export interface QueryBlindBoxContentIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexRequest";
    value: Uint8Array;
}
export interface QueryBlindBoxContentIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryBlindBoxContentIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentIndexRequest";
    value: QueryBlindBoxContentIndexRequestAmino;
}
export interface QueryBlindBoxContentIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentIndexResponse {
    blindBoxContents: BlindBoxContent[];
    pagination?: PageResponse;
}
export interface QueryBlindBoxContentIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexResponse";
    value: Uint8Array;
}
export interface QueryBlindBoxContentIndexResponseAmino {
    blind_box_contents?: BlindBoxContentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBlindBoxContentIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentIndexResponse";
    value: QueryBlindBoxContentIndexResponseAmino;
}
export interface QueryBlindBoxContentIndexResponseSDKType {
    blind_box_contents: BlindBoxContentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryBlindBoxContentsRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryBlindBoxContentsRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsRequest";
    value: Uint8Array;
}
export interface QueryBlindBoxContentsRequestAmino {
    class_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryBlindBoxContentsRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentsRequest";
    value: QueryBlindBoxContentsRequestAmino;
}
export interface QueryBlindBoxContentsRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryBlindBoxContentsResponse {
    blindBoxContents: BlindBoxContent[];
    pagination?: PageResponse;
}
export interface QueryBlindBoxContentsResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsResponse";
    value: Uint8Array;
}
export interface QueryBlindBoxContentsResponseAmino {
    blind_box_contents?: BlindBoxContentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBlindBoxContentsResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryBlindBoxContentsResponse";
    value: QueryBlindBoxContentsResponseAmino;
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
export interface QueryOfferRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOfferRequest";
    value: Uint8Array;
}
export interface QueryOfferRequestAmino {
    class_id?: string;
    nft_id?: string;
    buyer?: string;
}
export interface QueryOfferRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryOfferRequest";
    value: QueryOfferRequestAmino;
}
export interface QueryOfferRequestSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
}
export interface QueryOfferResponse {
    offer: Offer;
}
export interface QueryOfferResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOfferResponse";
    value: Uint8Array;
}
export interface QueryOfferResponseAmino {
    offer?: OfferAmino;
}
export interface QueryOfferResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryOfferResponse";
    value: QueryOfferResponseAmino;
}
export interface QueryOfferResponseSDKType {
    offer: OfferSDKType;
}
export interface QueryOfferIndexRequest {
    pagination?: PageRequest;
}
export interface QueryOfferIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOfferIndexRequest";
    value: Uint8Array;
}
export interface QueryOfferIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryOfferIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryOfferIndexRequest";
    value: QueryOfferIndexRequestAmino;
}
export interface QueryOfferIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryOfferIndexResponse {
    offers: Offer[];
    pagination?: PageResponse;
}
export interface QueryOfferIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOfferIndexResponse";
    value: Uint8Array;
}
export interface QueryOfferIndexResponseAmino {
    offers?: OfferAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOfferIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryOfferIndexResponse";
    value: QueryOfferIndexResponseAmino;
}
export interface QueryOfferIndexResponseSDKType {
    offers: OfferSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryOffersByClassRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryOffersByClassRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOffersByClassRequest";
    value: Uint8Array;
}
export interface QueryOffersByClassRequestAmino {
    class_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryOffersByClassRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryOffersByClassRequest";
    value: QueryOffersByClassRequestAmino;
}
export interface QueryOffersByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryOffersByClassResponse {
    offers: Offer[];
    pagination?: PageResponse;
}
export interface QueryOffersByClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOffersByClassResponse";
    value: Uint8Array;
}
export interface QueryOffersByClassResponseAmino {
    offers?: OfferAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOffersByClassResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryOffersByClassResponse";
    value: QueryOffersByClassResponseAmino;
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
export interface QueryOffersByNFTRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOffersByNFTRequest";
    value: Uint8Array;
}
export interface QueryOffersByNFTRequestAmino {
    class_id?: string;
    nft_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryOffersByNFTRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryOffersByNFTRequest";
    value: QueryOffersByNFTRequestAmino;
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
export interface QueryOffersByNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryOffersByNFTResponse";
    value: Uint8Array;
}
export interface QueryOffersByNFTResponseAmino {
    offers?: OfferAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOffersByNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryOffersByNFTResponse";
    value: QueryOffersByNFTResponseAmino;
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
export interface QueryListingRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingRequest";
    value: Uint8Array;
}
export interface QueryListingRequestAmino {
    class_id?: string;
    nft_id?: string;
    seller?: string;
}
export interface QueryListingRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryListingRequest";
    value: QueryListingRequestAmino;
}
export interface QueryListingRequestSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
}
export interface QueryListingResponse {
    listing: Listing;
}
export interface QueryListingResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingResponse";
    value: Uint8Array;
}
export interface QueryListingResponseAmino {
    listing?: ListingAmino;
}
export interface QueryListingResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryListingResponse";
    value: QueryListingResponseAmino;
}
export interface QueryListingResponseSDKType {
    listing: ListingSDKType;
}
export interface QueryListingIndexRequest {
    pagination?: PageRequest;
}
export interface QueryListingIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingIndexRequest";
    value: Uint8Array;
}
export interface QueryListingIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryListingIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryListingIndexRequest";
    value: QueryListingIndexRequestAmino;
}
export interface QueryListingIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryListingIndexResponse {
    listings: Listing[];
    pagination?: PageResponse;
}
export interface QueryListingIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingIndexResponse";
    value: Uint8Array;
}
export interface QueryListingIndexResponseAmino {
    listings?: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryListingIndexResponse";
    value: QueryListingIndexResponseAmino;
}
export interface QueryListingIndexResponseSDKType {
    listings: ListingSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryListingsByClassRequest {
    classId: string;
    pagination?: PageRequest;
}
export interface QueryListingsByClassRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingsByClassRequest";
    value: Uint8Array;
}
export interface QueryListingsByClassRequestAmino {
    class_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryListingsByClassRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryListingsByClassRequest";
    value: QueryListingsByClassRequestAmino;
}
export interface QueryListingsByClassRequestSDKType {
    class_id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryListingsByClassResponse {
    listings: Listing[];
    pagination?: PageResponse;
}
export interface QueryListingsByClassResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingsByClassResponse";
    value: Uint8Array;
}
export interface QueryListingsByClassResponseAmino {
    listings?: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingsByClassResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryListingsByClassResponse";
    value: QueryListingsByClassResponseAmino;
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
export interface QueryListingsByNFTRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingsByNFTRequest";
    value: Uint8Array;
}
export interface QueryListingsByNFTRequestAmino {
    class_id?: string;
    nft_id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryListingsByNFTRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryListingsByNFTRequest";
    value: QueryListingsByNFTRequestAmino;
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
export interface QueryListingsByNFTResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryListingsByNFTResponse";
    value: Uint8Array;
}
export interface QueryListingsByNFTResponseAmino {
    listings?: ListingAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryListingsByNFTResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryListingsByNFTResponse";
    value: QueryListingsByNFTResponseAmino;
}
export interface QueryListingsByNFTResponseSDKType {
    listings: ListingSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryRoyaltyConfigRequest {
    classId: string;
}
export interface QueryRoyaltyConfigRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigRequest";
    value: Uint8Array;
}
export interface QueryRoyaltyConfigRequestAmino {
    class_id?: string;
}
export interface QueryRoyaltyConfigRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryRoyaltyConfigRequest";
    value: QueryRoyaltyConfigRequestAmino;
}
export interface QueryRoyaltyConfigRequestSDKType {
    class_id: string;
}
export interface QueryRoyaltyConfigResponse {
    royaltyConfig: RoyaltyConfig;
}
export interface QueryRoyaltyConfigResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigResponse";
    value: Uint8Array;
}
export interface QueryRoyaltyConfigResponseAmino {
    royalty_config?: RoyaltyConfigAmino;
}
export interface QueryRoyaltyConfigResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryRoyaltyConfigResponse";
    value: QueryRoyaltyConfigResponseAmino;
}
export interface QueryRoyaltyConfigResponseSDKType {
    royalty_config: RoyaltyConfigSDKType;
}
export interface QueryRoyaltyConfigIndexRequest {
    pagination?: PageRequest;
}
export interface QueryRoyaltyConfigIndexRequestProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexRequest";
    value: Uint8Array;
}
export interface QueryRoyaltyConfigIndexRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryRoyaltyConfigIndexRequestAminoMsg {
    type: "/likechain.likenft.v1.QueryRoyaltyConfigIndexRequest";
    value: QueryRoyaltyConfigIndexRequestAmino;
}
export interface QueryRoyaltyConfigIndexRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryRoyaltyConfigIndexResponse {
    royaltyConfigByClass: RoyaltyConfigByClass[];
    pagination?: PageResponse;
}
export interface QueryRoyaltyConfigIndexResponseProtoMsg {
    typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexResponse";
    value: Uint8Array;
}
export interface QueryRoyaltyConfigIndexResponseAmino {
    royalty_config_by_class?: RoyaltyConfigByClassAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryRoyaltyConfigIndexResponseAminoMsg {
    type: "/likechain.likenft.v1.QueryRoyaltyConfigIndexResponse";
    value: QueryRoyaltyConfigIndexResponseAmino;
}
export interface QueryRoyaltyConfigIndexResponseSDKType {
    royalty_config_by_class: RoyaltyConfigByClassSDKType[];
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
export declare const QueryClassesByISCNRequest: {
    typeUrl: string;
    encode(message: QueryClassesByISCNRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByISCNRequest;
    fromPartial(object: Partial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest;
    fromAmino(object: QueryClassesByISCNRequestAmino): QueryClassesByISCNRequest;
    toAmino(message: QueryClassesByISCNRequest): QueryClassesByISCNRequestAmino;
    fromAminoMsg(object: QueryClassesByISCNRequestAminoMsg): QueryClassesByISCNRequest;
    fromProtoMsg(message: QueryClassesByISCNRequestProtoMsg): QueryClassesByISCNRequest;
    toProto(message: QueryClassesByISCNRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByISCNRequest): QueryClassesByISCNRequestProtoMsg;
};
export declare const QueryClassesByISCNResponse: {
    typeUrl: string;
    encode(message: QueryClassesByISCNResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByISCNResponse;
    fromPartial(object: Partial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse;
    fromAmino(object: QueryClassesByISCNResponseAmino): QueryClassesByISCNResponse;
    toAmino(message: QueryClassesByISCNResponse): QueryClassesByISCNResponseAmino;
    fromAminoMsg(object: QueryClassesByISCNResponseAminoMsg): QueryClassesByISCNResponse;
    fromProtoMsg(message: QueryClassesByISCNResponseProtoMsg): QueryClassesByISCNResponse;
    toProto(message: QueryClassesByISCNResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByISCNResponse): QueryClassesByISCNResponseProtoMsg;
};
export declare const QueryClassesByISCNIndexRequest: {
    typeUrl: string;
    encode(message: QueryClassesByISCNIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByISCNIndexRequest;
    fromPartial(object: Partial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest;
    fromAmino(object: QueryClassesByISCNIndexRequestAmino): QueryClassesByISCNIndexRequest;
    toAmino(message: QueryClassesByISCNIndexRequest): QueryClassesByISCNIndexRequestAmino;
    fromAminoMsg(object: QueryClassesByISCNIndexRequestAminoMsg): QueryClassesByISCNIndexRequest;
    fromProtoMsg(message: QueryClassesByISCNIndexRequestProtoMsg): QueryClassesByISCNIndexRequest;
    toProto(message: QueryClassesByISCNIndexRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByISCNIndexRequest): QueryClassesByISCNIndexRequestProtoMsg;
};
export declare const QueryClassesByISCNIndexResponse: {
    typeUrl: string;
    encode(message: QueryClassesByISCNIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByISCNIndexResponse;
    fromPartial(object: Partial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse;
    fromAmino(object: QueryClassesByISCNIndexResponseAmino): QueryClassesByISCNIndexResponse;
    toAmino(message: QueryClassesByISCNIndexResponse): QueryClassesByISCNIndexResponseAmino;
    fromAminoMsg(object: QueryClassesByISCNIndexResponseAminoMsg): QueryClassesByISCNIndexResponse;
    fromProtoMsg(message: QueryClassesByISCNIndexResponseProtoMsg): QueryClassesByISCNIndexResponse;
    toProto(message: QueryClassesByISCNIndexResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByISCNIndexResponse): QueryClassesByISCNIndexResponseProtoMsg;
};
export declare const QueryISCNByClassRequest: {
    typeUrl: string;
    encode(message: QueryISCNByClassRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryISCNByClassRequest;
    fromPartial(object: Partial<QueryISCNByClassRequest>): QueryISCNByClassRequest;
    fromAmino(object: QueryISCNByClassRequestAmino): QueryISCNByClassRequest;
    toAmino(message: QueryISCNByClassRequest): QueryISCNByClassRequestAmino;
    fromAminoMsg(object: QueryISCNByClassRequestAminoMsg): QueryISCNByClassRequest;
    fromProtoMsg(message: QueryISCNByClassRequestProtoMsg): QueryISCNByClassRequest;
    toProto(message: QueryISCNByClassRequest): Uint8Array;
    toProtoMsg(message: QueryISCNByClassRequest): QueryISCNByClassRequestProtoMsg;
};
export declare const QueryISCNByClassResponse: {
    typeUrl: string;
    encode(message: QueryISCNByClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryISCNByClassResponse;
    fromPartial(object: Partial<QueryISCNByClassResponse>): QueryISCNByClassResponse;
    fromAmino(object: QueryISCNByClassResponseAmino): QueryISCNByClassResponse;
    toAmino(message: QueryISCNByClassResponse): QueryISCNByClassResponseAmino;
    fromAminoMsg(object: QueryISCNByClassResponseAminoMsg): QueryISCNByClassResponse;
    fromProtoMsg(message: QueryISCNByClassResponseProtoMsg): QueryISCNByClassResponse;
    toProto(message: QueryISCNByClassResponse): Uint8Array;
    toProtoMsg(message: QueryISCNByClassResponse): QueryISCNByClassResponseProtoMsg;
};
export declare const QueryClassesByAccountRequest: {
    typeUrl: string;
    encode(message: QueryClassesByAccountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByAccountRequest;
    fromPartial(object: Partial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest;
    fromAmino(object: QueryClassesByAccountRequestAmino): QueryClassesByAccountRequest;
    toAmino(message: QueryClassesByAccountRequest): QueryClassesByAccountRequestAmino;
    fromAminoMsg(object: QueryClassesByAccountRequestAminoMsg): QueryClassesByAccountRequest;
    fromProtoMsg(message: QueryClassesByAccountRequestProtoMsg): QueryClassesByAccountRequest;
    toProto(message: QueryClassesByAccountRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByAccountRequest): QueryClassesByAccountRequestProtoMsg;
};
export declare const QueryClassesByAccountResponse: {
    typeUrl: string;
    encode(message: QueryClassesByAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByAccountResponse;
    fromPartial(object: Partial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse;
    fromAmino(object: QueryClassesByAccountResponseAmino): QueryClassesByAccountResponse;
    toAmino(message: QueryClassesByAccountResponse): QueryClassesByAccountResponseAmino;
    fromAminoMsg(object: QueryClassesByAccountResponseAminoMsg): QueryClassesByAccountResponse;
    fromProtoMsg(message: QueryClassesByAccountResponseProtoMsg): QueryClassesByAccountResponse;
    toProto(message: QueryClassesByAccountResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByAccountResponse): QueryClassesByAccountResponseProtoMsg;
};
export declare const QueryClassesByAccountIndexRequest: {
    typeUrl: string;
    encode(message: QueryClassesByAccountIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByAccountIndexRequest;
    fromPartial(object: Partial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest;
    fromAmino(object: QueryClassesByAccountIndexRequestAmino): QueryClassesByAccountIndexRequest;
    toAmino(message: QueryClassesByAccountIndexRequest): QueryClassesByAccountIndexRequestAmino;
    fromAminoMsg(object: QueryClassesByAccountIndexRequestAminoMsg): QueryClassesByAccountIndexRequest;
    fromProtoMsg(message: QueryClassesByAccountIndexRequestProtoMsg): QueryClassesByAccountIndexRequest;
    toProto(message: QueryClassesByAccountIndexRequest): Uint8Array;
    toProtoMsg(message: QueryClassesByAccountIndexRequest): QueryClassesByAccountIndexRequestProtoMsg;
};
export declare const QueryClassesByAccountIndexResponse: {
    typeUrl: string;
    encode(message: QueryClassesByAccountIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryClassesByAccountIndexResponse;
    fromPartial(object: Partial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse;
    fromAmino(object: QueryClassesByAccountIndexResponseAmino): QueryClassesByAccountIndexResponse;
    toAmino(message: QueryClassesByAccountIndexResponse): QueryClassesByAccountIndexResponseAmino;
    fromAminoMsg(object: QueryClassesByAccountIndexResponseAminoMsg): QueryClassesByAccountIndexResponse;
    fromProtoMsg(message: QueryClassesByAccountIndexResponseProtoMsg): QueryClassesByAccountIndexResponse;
    toProto(message: QueryClassesByAccountIndexResponse): Uint8Array;
    toProtoMsg(message: QueryClassesByAccountIndexResponse): QueryClassesByAccountIndexResponseProtoMsg;
};
export declare const QueryAccountByClassRequest: {
    typeUrl: string;
    encode(message: QueryAccountByClassRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountByClassRequest;
    fromPartial(object: Partial<QueryAccountByClassRequest>): QueryAccountByClassRequest;
    fromAmino(object: QueryAccountByClassRequestAmino): QueryAccountByClassRequest;
    toAmino(message: QueryAccountByClassRequest): QueryAccountByClassRequestAmino;
    fromAminoMsg(object: QueryAccountByClassRequestAminoMsg): QueryAccountByClassRequest;
    fromProtoMsg(message: QueryAccountByClassRequestProtoMsg): QueryAccountByClassRequest;
    toProto(message: QueryAccountByClassRequest): Uint8Array;
    toProtoMsg(message: QueryAccountByClassRequest): QueryAccountByClassRequestProtoMsg;
};
export declare const QueryAccountByClassResponse: {
    typeUrl: string;
    encode(message: QueryAccountByClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountByClassResponse;
    fromPartial(object: Partial<QueryAccountByClassResponse>): QueryAccountByClassResponse;
    fromAmino(object: QueryAccountByClassResponseAmino): QueryAccountByClassResponse;
    toAmino(message: QueryAccountByClassResponse): QueryAccountByClassResponseAmino;
    fromAminoMsg(object: QueryAccountByClassResponseAminoMsg): QueryAccountByClassResponse;
    fromProtoMsg(message: QueryAccountByClassResponseProtoMsg): QueryAccountByClassResponse;
    toProto(message: QueryAccountByClassResponse): Uint8Array;
    toProtoMsg(message: QueryAccountByClassResponse): QueryAccountByClassResponseProtoMsg;
};
export declare const QueryBlindBoxContentRequest: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentRequest;
    fromPartial(object: Partial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest;
    fromAmino(object: QueryBlindBoxContentRequestAmino): QueryBlindBoxContentRequest;
    toAmino(message: QueryBlindBoxContentRequest): QueryBlindBoxContentRequestAmino;
    fromAminoMsg(object: QueryBlindBoxContentRequestAminoMsg): QueryBlindBoxContentRequest;
    fromProtoMsg(message: QueryBlindBoxContentRequestProtoMsg): QueryBlindBoxContentRequest;
    toProto(message: QueryBlindBoxContentRequest): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentRequest): QueryBlindBoxContentRequestProtoMsg;
};
export declare const QueryBlindBoxContentResponse: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentResponse;
    fromPartial(object: Partial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse;
    fromAmino(object: QueryBlindBoxContentResponseAmino): QueryBlindBoxContentResponse;
    toAmino(message: QueryBlindBoxContentResponse): QueryBlindBoxContentResponseAmino;
    fromAminoMsg(object: QueryBlindBoxContentResponseAminoMsg): QueryBlindBoxContentResponse;
    fromProtoMsg(message: QueryBlindBoxContentResponseProtoMsg): QueryBlindBoxContentResponse;
    toProto(message: QueryBlindBoxContentResponse): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentResponse): QueryBlindBoxContentResponseProtoMsg;
};
export declare const QueryBlindBoxContentIndexRequest: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentIndexRequest;
    fromPartial(object: Partial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest;
    fromAmino(object: QueryBlindBoxContentIndexRequestAmino): QueryBlindBoxContentIndexRequest;
    toAmino(message: QueryBlindBoxContentIndexRequest): QueryBlindBoxContentIndexRequestAmino;
    fromAminoMsg(object: QueryBlindBoxContentIndexRequestAminoMsg): QueryBlindBoxContentIndexRequest;
    fromProtoMsg(message: QueryBlindBoxContentIndexRequestProtoMsg): QueryBlindBoxContentIndexRequest;
    toProto(message: QueryBlindBoxContentIndexRequest): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentIndexRequest): QueryBlindBoxContentIndexRequestProtoMsg;
};
export declare const QueryBlindBoxContentIndexResponse: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentIndexResponse;
    fromPartial(object: Partial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse;
    fromAmino(object: QueryBlindBoxContentIndexResponseAmino): QueryBlindBoxContentIndexResponse;
    toAmino(message: QueryBlindBoxContentIndexResponse): QueryBlindBoxContentIndexResponseAmino;
    fromAminoMsg(object: QueryBlindBoxContentIndexResponseAminoMsg): QueryBlindBoxContentIndexResponse;
    fromProtoMsg(message: QueryBlindBoxContentIndexResponseProtoMsg): QueryBlindBoxContentIndexResponse;
    toProto(message: QueryBlindBoxContentIndexResponse): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentIndexResponse): QueryBlindBoxContentIndexResponseProtoMsg;
};
export declare const QueryBlindBoxContentsRequest: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentsRequest;
    fromPartial(object: Partial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest;
    fromAmino(object: QueryBlindBoxContentsRequestAmino): QueryBlindBoxContentsRequest;
    toAmino(message: QueryBlindBoxContentsRequest): QueryBlindBoxContentsRequestAmino;
    fromAminoMsg(object: QueryBlindBoxContentsRequestAminoMsg): QueryBlindBoxContentsRequest;
    fromProtoMsg(message: QueryBlindBoxContentsRequestProtoMsg): QueryBlindBoxContentsRequest;
    toProto(message: QueryBlindBoxContentsRequest): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentsRequest): QueryBlindBoxContentsRequestProtoMsg;
};
export declare const QueryBlindBoxContentsResponse: {
    typeUrl: string;
    encode(message: QueryBlindBoxContentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBlindBoxContentsResponse;
    fromPartial(object: Partial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse;
    fromAmino(object: QueryBlindBoxContentsResponseAmino): QueryBlindBoxContentsResponse;
    toAmino(message: QueryBlindBoxContentsResponse): QueryBlindBoxContentsResponseAmino;
    fromAminoMsg(object: QueryBlindBoxContentsResponseAminoMsg): QueryBlindBoxContentsResponse;
    fromProtoMsg(message: QueryBlindBoxContentsResponseProtoMsg): QueryBlindBoxContentsResponse;
    toProto(message: QueryBlindBoxContentsResponse): Uint8Array;
    toProtoMsg(message: QueryBlindBoxContentsResponse): QueryBlindBoxContentsResponseProtoMsg;
};
export declare const QueryOfferRequest: {
    typeUrl: string;
    encode(message: QueryOfferRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOfferRequest;
    fromPartial(object: Partial<QueryOfferRequest>): QueryOfferRequest;
    fromAmino(object: QueryOfferRequestAmino): QueryOfferRequest;
    toAmino(message: QueryOfferRequest): QueryOfferRequestAmino;
    fromAminoMsg(object: QueryOfferRequestAminoMsg): QueryOfferRequest;
    fromProtoMsg(message: QueryOfferRequestProtoMsg): QueryOfferRequest;
    toProto(message: QueryOfferRequest): Uint8Array;
    toProtoMsg(message: QueryOfferRequest): QueryOfferRequestProtoMsg;
};
export declare const QueryOfferResponse: {
    typeUrl: string;
    encode(message: QueryOfferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOfferResponse;
    fromPartial(object: Partial<QueryOfferResponse>): QueryOfferResponse;
    fromAmino(object: QueryOfferResponseAmino): QueryOfferResponse;
    toAmino(message: QueryOfferResponse): QueryOfferResponseAmino;
    fromAminoMsg(object: QueryOfferResponseAminoMsg): QueryOfferResponse;
    fromProtoMsg(message: QueryOfferResponseProtoMsg): QueryOfferResponse;
    toProto(message: QueryOfferResponse): Uint8Array;
    toProtoMsg(message: QueryOfferResponse): QueryOfferResponseProtoMsg;
};
export declare const QueryOfferIndexRequest: {
    typeUrl: string;
    encode(message: QueryOfferIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOfferIndexRequest;
    fromPartial(object: Partial<QueryOfferIndexRequest>): QueryOfferIndexRequest;
    fromAmino(object: QueryOfferIndexRequestAmino): QueryOfferIndexRequest;
    toAmino(message: QueryOfferIndexRequest): QueryOfferIndexRequestAmino;
    fromAminoMsg(object: QueryOfferIndexRequestAminoMsg): QueryOfferIndexRequest;
    fromProtoMsg(message: QueryOfferIndexRequestProtoMsg): QueryOfferIndexRequest;
    toProto(message: QueryOfferIndexRequest): Uint8Array;
    toProtoMsg(message: QueryOfferIndexRequest): QueryOfferIndexRequestProtoMsg;
};
export declare const QueryOfferIndexResponse: {
    typeUrl: string;
    encode(message: QueryOfferIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOfferIndexResponse;
    fromPartial(object: Partial<QueryOfferIndexResponse>): QueryOfferIndexResponse;
    fromAmino(object: QueryOfferIndexResponseAmino): QueryOfferIndexResponse;
    toAmino(message: QueryOfferIndexResponse): QueryOfferIndexResponseAmino;
    fromAminoMsg(object: QueryOfferIndexResponseAminoMsg): QueryOfferIndexResponse;
    fromProtoMsg(message: QueryOfferIndexResponseProtoMsg): QueryOfferIndexResponse;
    toProto(message: QueryOfferIndexResponse): Uint8Array;
    toProtoMsg(message: QueryOfferIndexResponse): QueryOfferIndexResponseProtoMsg;
};
export declare const QueryOffersByClassRequest: {
    typeUrl: string;
    encode(message: QueryOffersByClassRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOffersByClassRequest;
    fromPartial(object: Partial<QueryOffersByClassRequest>): QueryOffersByClassRequest;
    fromAmino(object: QueryOffersByClassRequestAmino): QueryOffersByClassRequest;
    toAmino(message: QueryOffersByClassRequest): QueryOffersByClassRequestAmino;
    fromAminoMsg(object: QueryOffersByClassRequestAminoMsg): QueryOffersByClassRequest;
    fromProtoMsg(message: QueryOffersByClassRequestProtoMsg): QueryOffersByClassRequest;
    toProto(message: QueryOffersByClassRequest): Uint8Array;
    toProtoMsg(message: QueryOffersByClassRequest): QueryOffersByClassRequestProtoMsg;
};
export declare const QueryOffersByClassResponse: {
    typeUrl: string;
    encode(message: QueryOffersByClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOffersByClassResponse;
    fromPartial(object: Partial<QueryOffersByClassResponse>): QueryOffersByClassResponse;
    fromAmino(object: QueryOffersByClassResponseAmino): QueryOffersByClassResponse;
    toAmino(message: QueryOffersByClassResponse): QueryOffersByClassResponseAmino;
    fromAminoMsg(object: QueryOffersByClassResponseAminoMsg): QueryOffersByClassResponse;
    fromProtoMsg(message: QueryOffersByClassResponseProtoMsg): QueryOffersByClassResponse;
    toProto(message: QueryOffersByClassResponse): Uint8Array;
    toProtoMsg(message: QueryOffersByClassResponse): QueryOffersByClassResponseProtoMsg;
};
export declare const QueryOffersByNFTRequest: {
    typeUrl: string;
    encode(message: QueryOffersByNFTRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOffersByNFTRequest;
    fromPartial(object: Partial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest;
    fromAmino(object: QueryOffersByNFTRequestAmino): QueryOffersByNFTRequest;
    toAmino(message: QueryOffersByNFTRequest): QueryOffersByNFTRequestAmino;
    fromAminoMsg(object: QueryOffersByNFTRequestAminoMsg): QueryOffersByNFTRequest;
    fromProtoMsg(message: QueryOffersByNFTRequestProtoMsg): QueryOffersByNFTRequest;
    toProto(message: QueryOffersByNFTRequest): Uint8Array;
    toProtoMsg(message: QueryOffersByNFTRequest): QueryOffersByNFTRequestProtoMsg;
};
export declare const QueryOffersByNFTResponse: {
    typeUrl: string;
    encode(message: QueryOffersByNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOffersByNFTResponse;
    fromPartial(object: Partial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse;
    fromAmino(object: QueryOffersByNFTResponseAmino): QueryOffersByNFTResponse;
    toAmino(message: QueryOffersByNFTResponse): QueryOffersByNFTResponseAmino;
    fromAminoMsg(object: QueryOffersByNFTResponseAminoMsg): QueryOffersByNFTResponse;
    fromProtoMsg(message: QueryOffersByNFTResponseProtoMsg): QueryOffersByNFTResponse;
    toProto(message: QueryOffersByNFTResponse): Uint8Array;
    toProtoMsg(message: QueryOffersByNFTResponse): QueryOffersByNFTResponseProtoMsg;
};
export declare const QueryListingRequest: {
    typeUrl: string;
    encode(message: QueryListingRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingRequest;
    fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest;
    fromAmino(object: QueryListingRequestAmino): QueryListingRequest;
    toAmino(message: QueryListingRequest): QueryListingRequestAmino;
    fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest;
    fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest;
    toProto(message: QueryListingRequest): Uint8Array;
    toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg;
};
export declare const QueryListingResponse: {
    typeUrl: string;
    encode(message: QueryListingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingResponse;
    fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse;
    fromAmino(object: QueryListingResponseAmino): QueryListingResponse;
    toAmino(message: QueryListingResponse): QueryListingResponseAmino;
    fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse;
    fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse;
    toProto(message: QueryListingResponse): Uint8Array;
    toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg;
};
export declare const QueryListingIndexRequest: {
    typeUrl: string;
    encode(message: QueryListingIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingIndexRequest;
    fromPartial(object: Partial<QueryListingIndexRequest>): QueryListingIndexRequest;
    fromAmino(object: QueryListingIndexRequestAmino): QueryListingIndexRequest;
    toAmino(message: QueryListingIndexRequest): QueryListingIndexRequestAmino;
    fromAminoMsg(object: QueryListingIndexRequestAminoMsg): QueryListingIndexRequest;
    fromProtoMsg(message: QueryListingIndexRequestProtoMsg): QueryListingIndexRequest;
    toProto(message: QueryListingIndexRequest): Uint8Array;
    toProtoMsg(message: QueryListingIndexRequest): QueryListingIndexRequestProtoMsg;
};
export declare const QueryListingIndexResponse: {
    typeUrl: string;
    encode(message: QueryListingIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingIndexResponse;
    fromPartial(object: Partial<QueryListingIndexResponse>): QueryListingIndexResponse;
    fromAmino(object: QueryListingIndexResponseAmino): QueryListingIndexResponse;
    toAmino(message: QueryListingIndexResponse): QueryListingIndexResponseAmino;
    fromAminoMsg(object: QueryListingIndexResponseAminoMsg): QueryListingIndexResponse;
    fromProtoMsg(message: QueryListingIndexResponseProtoMsg): QueryListingIndexResponse;
    toProto(message: QueryListingIndexResponse): Uint8Array;
    toProtoMsg(message: QueryListingIndexResponse): QueryListingIndexResponseProtoMsg;
};
export declare const QueryListingsByClassRequest: {
    typeUrl: string;
    encode(message: QueryListingsByClassRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByClassRequest;
    fromPartial(object: Partial<QueryListingsByClassRequest>): QueryListingsByClassRequest;
    fromAmino(object: QueryListingsByClassRequestAmino): QueryListingsByClassRequest;
    toAmino(message: QueryListingsByClassRequest): QueryListingsByClassRequestAmino;
    fromAminoMsg(object: QueryListingsByClassRequestAminoMsg): QueryListingsByClassRequest;
    fromProtoMsg(message: QueryListingsByClassRequestProtoMsg): QueryListingsByClassRequest;
    toProto(message: QueryListingsByClassRequest): Uint8Array;
    toProtoMsg(message: QueryListingsByClassRequest): QueryListingsByClassRequestProtoMsg;
};
export declare const QueryListingsByClassResponse: {
    typeUrl: string;
    encode(message: QueryListingsByClassResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByClassResponse;
    fromPartial(object: Partial<QueryListingsByClassResponse>): QueryListingsByClassResponse;
    fromAmino(object: QueryListingsByClassResponseAmino): QueryListingsByClassResponse;
    toAmino(message: QueryListingsByClassResponse): QueryListingsByClassResponseAmino;
    fromAminoMsg(object: QueryListingsByClassResponseAminoMsg): QueryListingsByClassResponse;
    fromProtoMsg(message: QueryListingsByClassResponseProtoMsg): QueryListingsByClassResponse;
    toProto(message: QueryListingsByClassResponse): Uint8Array;
    toProtoMsg(message: QueryListingsByClassResponse): QueryListingsByClassResponseProtoMsg;
};
export declare const QueryListingsByNFTRequest: {
    typeUrl: string;
    encode(message: QueryListingsByNFTRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByNFTRequest;
    fromPartial(object: Partial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest;
    fromAmino(object: QueryListingsByNFTRequestAmino): QueryListingsByNFTRequest;
    toAmino(message: QueryListingsByNFTRequest): QueryListingsByNFTRequestAmino;
    fromAminoMsg(object: QueryListingsByNFTRequestAminoMsg): QueryListingsByNFTRequest;
    fromProtoMsg(message: QueryListingsByNFTRequestProtoMsg): QueryListingsByNFTRequest;
    toProto(message: QueryListingsByNFTRequest): Uint8Array;
    toProtoMsg(message: QueryListingsByNFTRequest): QueryListingsByNFTRequestProtoMsg;
};
export declare const QueryListingsByNFTResponse: {
    typeUrl: string;
    encode(message: QueryListingsByNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListingsByNFTResponse;
    fromPartial(object: Partial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse;
    fromAmino(object: QueryListingsByNFTResponseAmino): QueryListingsByNFTResponse;
    toAmino(message: QueryListingsByNFTResponse): QueryListingsByNFTResponseAmino;
    fromAminoMsg(object: QueryListingsByNFTResponseAminoMsg): QueryListingsByNFTResponse;
    fromProtoMsg(message: QueryListingsByNFTResponseProtoMsg): QueryListingsByNFTResponse;
    toProto(message: QueryListingsByNFTResponse): Uint8Array;
    toProtoMsg(message: QueryListingsByNFTResponse): QueryListingsByNFTResponseProtoMsg;
};
export declare const QueryRoyaltyConfigRequest: {
    typeUrl: string;
    encode(message: QueryRoyaltyConfigRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoyaltyConfigRequest;
    fromPartial(object: Partial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest;
    fromAmino(object: QueryRoyaltyConfigRequestAmino): QueryRoyaltyConfigRequest;
    toAmino(message: QueryRoyaltyConfigRequest): QueryRoyaltyConfigRequestAmino;
    fromAminoMsg(object: QueryRoyaltyConfigRequestAminoMsg): QueryRoyaltyConfigRequest;
    fromProtoMsg(message: QueryRoyaltyConfigRequestProtoMsg): QueryRoyaltyConfigRequest;
    toProto(message: QueryRoyaltyConfigRequest): Uint8Array;
    toProtoMsg(message: QueryRoyaltyConfigRequest): QueryRoyaltyConfigRequestProtoMsg;
};
export declare const QueryRoyaltyConfigResponse: {
    typeUrl: string;
    encode(message: QueryRoyaltyConfigResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoyaltyConfigResponse;
    fromPartial(object: Partial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse;
    fromAmino(object: QueryRoyaltyConfigResponseAmino): QueryRoyaltyConfigResponse;
    toAmino(message: QueryRoyaltyConfigResponse): QueryRoyaltyConfigResponseAmino;
    fromAminoMsg(object: QueryRoyaltyConfigResponseAminoMsg): QueryRoyaltyConfigResponse;
    fromProtoMsg(message: QueryRoyaltyConfigResponseProtoMsg): QueryRoyaltyConfigResponse;
    toProto(message: QueryRoyaltyConfigResponse): Uint8Array;
    toProtoMsg(message: QueryRoyaltyConfigResponse): QueryRoyaltyConfigResponseProtoMsg;
};
export declare const QueryRoyaltyConfigIndexRequest: {
    typeUrl: string;
    encode(message: QueryRoyaltyConfigIndexRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoyaltyConfigIndexRequest;
    fromPartial(object: Partial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest;
    fromAmino(object: QueryRoyaltyConfigIndexRequestAmino): QueryRoyaltyConfigIndexRequest;
    toAmino(message: QueryRoyaltyConfigIndexRequest): QueryRoyaltyConfigIndexRequestAmino;
    fromAminoMsg(object: QueryRoyaltyConfigIndexRequestAminoMsg): QueryRoyaltyConfigIndexRequest;
    fromProtoMsg(message: QueryRoyaltyConfigIndexRequestProtoMsg): QueryRoyaltyConfigIndexRequest;
    toProto(message: QueryRoyaltyConfigIndexRequest): Uint8Array;
    toProtoMsg(message: QueryRoyaltyConfigIndexRequest): QueryRoyaltyConfigIndexRequestProtoMsg;
};
export declare const QueryRoyaltyConfigIndexResponse: {
    typeUrl: string;
    encode(message: QueryRoyaltyConfigIndexResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRoyaltyConfigIndexResponse;
    fromPartial(object: Partial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse;
    fromAmino(object: QueryRoyaltyConfigIndexResponseAmino): QueryRoyaltyConfigIndexResponse;
    toAmino(message: QueryRoyaltyConfigIndexResponse): QueryRoyaltyConfigIndexResponseAmino;
    fromAminoMsg(object: QueryRoyaltyConfigIndexResponseAminoMsg): QueryRoyaltyConfigIndexResponse;
    fromProtoMsg(message: QueryRoyaltyConfigIndexResponseProtoMsg): QueryRoyaltyConfigIndexResponse;
    toProto(message: QueryRoyaltyConfigIndexResponse): Uint8Array;
    toProtoMsg(message: QueryRoyaltyConfigIndexResponse): QueryRoyaltyConfigIndexResponseProtoMsg;
};
