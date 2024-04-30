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
import { isSet } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/likechain.likenft.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/likechain.likenft.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/likechain.likenft.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/likechain.likenft.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByISCNRequest(): QueryClassesByISCNRequest {
  return {
    iscnIdPrefix: "",
    pagination: undefined
  };
}
export const QueryClassesByISCNRequest = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByISCNRequest",
  encode(message: QueryClassesByISCNRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNRequest {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNRequest>): QueryClassesByISCNRequest {
    const message = createBaseQueryClassesByISCNRequest();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByISCNRequestAmino): QueryClassesByISCNRequest {
    const message = createBaseQueryClassesByISCNRequest();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByISCNRequest): QueryClassesByISCNRequestAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByISCNRequestAminoMsg): QueryClassesByISCNRequest {
    return QueryClassesByISCNRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByISCNRequestProtoMsg): QueryClassesByISCNRequest {
    return QueryClassesByISCNRequest.decode(message.value);
  },
  toProto(message: QueryClassesByISCNRequest): Uint8Array {
    return QueryClassesByISCNRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByISCNRequest): QueryClassesByISCNRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByISCNRequest",
      value: QueryClassesByISCNRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByISCNResponse(): QueryClassesByISCNResponse {
  return {
    iscnIdPrefix: "",
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesByISCNResponse = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByISCNResponse",
  encode(message: QueryClassesByISCNResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNResponse>): QueryClassesByISCNResponse {
    const message = createBaseQueryClassesByISCNResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByISCNResponseAmino): QueryClassesByISCNResponse {
    const message = createBaseQueryClassesByISCNResponse();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByISCNResponse): QueryClassesByISCNResponseAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByISCNResponseAminoMsg): QueryClassesByISCNResponse {
    return QueryClassesByISCNResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByISCNResponseProtoMsg): QueryClassesByISCNResponse {
    return QueryClassesByISCNResponse.decode(message.value);
  },
  toProto(message: QueryClassesByISCNResponse): Uint8Array {
    return QueryClassesByISCNResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByISCNResponse): QueryClassesByISCNResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByISCNResponse",
      value: QueryClassesByISCNResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByISCNIndexRequest(): QueryClassesByISCNIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesByISCNIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexRequest",
  encode(message: QueryClassesByISCNIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNIndexRequest>): QueryClassesByISCNIndexRequest {
    const message = createBaseQueryClassesByISCNIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByISCNIndexRequestAmino): QueryClassesByISCNIndexRequest {
    const message = createBaseQueryClassesByISCNIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByISCNIndexRequest): QueryClassesByISCNIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByISCNIndexRequestAminoMsg): QueryClassesByISCNIndexRequest {
    return QueryClassesByISCNIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByISCNIndexRequestProtoMsg): QueryClassesByISCNIndexRequest {
    return QueryClassesByISCNIndexRequest.decode(message.value);
  },
  toProto(message: QueryClassesByISCNIndexRequest): Uint8Array {
    return QueryClassesByISCNIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByISCNIndexRequest): QueryClassesByISCNIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexRequest",
      value: QueryClassesByISCNIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByISCNIndexResponse(): QueryClassesByISCNIndexResponse {
  return {
    classesByIscns: [],
    pagination: undefined
  };
}
export const QueryClassesByISCNIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexResponse",
  encode(message: QueryClassesByISCNIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classesByIscns) {
      ClassesByISCN.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByISCNIndexResponse {
    return {
      classesByIscns: Array.isArray(object?.classesByIscns) ? object.classesByIscns.map((e: any) => ClassesByISCN.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByISCNIndexResponse>): QueryClassesByISCNIndexResponse {
    const message = createBaseQueryClassesByISCNIndexResponse();
    message.classesByIscns = object.classesByIscns?.map(e => ClassesByISCN.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByISCNIndexResponseAmino): QueryClassesByISCNIndexResponse {
    const message = createBaseQueryClassesByISCNIndexResponse();
    message.classesByIscns = object.classes_by_iscns?.map(e => ClassesByISCN.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByISCNIndexResponse): QueryClassesByISCNIndexResponseAmino {
    const obj: any = {};
    if (message.classesByIscns) {
      obj.classes_by_iscns = message.classesByIscns.map(e => e ? ClassesByISCN.toAmino(e) : undefined);
    } else {
      obj.classes_by_iscns = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByISCNIndexResponseAminoMsg): QueryClassesByISCNIndexResponse {
    return QueryClassesByISCNIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByISCNIndexResponseProtoMsg): QueryClassesByISCNIndexResponse {
    return QueryClassesByISCNIndexResponse.decode(message.value);
  },
  toProto(message: QueryClassesByISCNIndexResponse): Uint8Array {
    return QueryClassesByISCNIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByISCNIndexResponse): QueryClassesByISCNIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByISCNIndexResponse",
      value: QueryClassesByISCNIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryISCNByClassRequest(): QueryISCNByClassRequest {
  return {
    classId: ""
  };
}
export const QueryISCNByClassRequest = {
  typeUrl: "/likechain.likenft.v1.QueryISCNByClassRequest",
  encode(message: QueryISCNByClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryISCNByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryISCNByClassRequest>): QueryISCNByClassRequest {
    const message = createBaseQueryISCNByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryISCNByClassRequestAmino): QueryISCNByClassRequest {
    const message = createBaseQueryISCNByClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryISCNByClassRequest): QueryISCNByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryISCNByClassRequestAminoMsg): QueryISCNByClassRequest {
    return QueryISCNByClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryISCNByClassRequestProtoMsg): QueryISCNByClassRequest {
    return QueryISCNByClassRequest.decode(message.value);
  },
  toProto(message: QueryISCNByClassRequest): Uint8Array {
    return QueryISCNByClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryISCNByClassRequest): QueryISCNByClassRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryISCNByClassRequest",
      value: QueryISCNByClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryISCNByClassResponse(): QueryISCNByClassResponse {
  return {
    iscnIdPrefix: "",
    owner: "",
    latestVersion: BigInt(0),
    latestRecord: QueryResponseRecord.fromPartial({})
  };
}
export const QueryISCNByClassResponse = {
  typeUrl: "/likechain.likenft.v1.QueryISCNByClassResponse",
  encode(message: QueryISCNByClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iscnIdPrefix !== "") {
      writer.uint32(10).string(message.iscnIdPrefix);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.latestVersion !== BigInt(0)) {
      writer.uint32(24).uint64(message.latestVersion);
    }
    if (message.latestRecord !== undefined) {
      QueryResponseRecord.encode(message.latestRecord, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryISCNByClassResponse {
    return {
      iscnIdPrefix: isSet(object.iscnIdPrefix) ? String(object.iscnIdPrefix) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      latestVersion: isSet(object.latestVersion) ? BigInt(object.latestVersion.toString()) : BigInt(0),
      latestRecord: isSet(object.latestRecord) ? QueryResponseRecord.fromJSON(object.latestRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryISCNByClassResponse>): QueryISCNByClassResponse {
    const message = createBaseQueryISCNByClassResponse();
    message.iscnIdPrefix = object.iscnIdPrefix ?? "";
    message.owner = object.owner ?? "";
    message.latestVersion = object.latestVersion !== undefined && object.latestVersion !== null ? BigInt(object.latestVersion.toString()) : BigInt(0);
    message.latestRecord = object.latestRecord !== undefined && object.latestRecord !== null ? QueryResponseRecord.fromPartial(object.latestRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryISCNByClassResponseAmino): QueryISCNByClassResponse {
    const message = createBaseQueryISCNByClassResponse();
    if (object.iscn_id_prefix !== undefined && object.iscn_id_prefix !== null) {
      message.iscnIdPrefix = object.iscn_id_prefix;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.latest_version !== undefined && object.latest_version !== null) {
      message.latestVersion = BigInt(object.latest_version);
    }
    if (object.latest_record !== undefined && object.latest_record !== null) {
      message.latestRecord = QueryResponseRecord.fromAmino(object.latest_record);
    }
    return message;
  },
  toAmino(message: QueryISCNByClassResponse): QueryISCNByClassResponseAmino {
    const obj: any = {};
    obj.iscn_id_prefix = message.iscnIdPrefix;
    obj.owner = message.owner;
    obj.latest_version = message.latestVersion ? message.latestVersion.toString() : undefined;
    obj.latest_record = message.latestRecord ? QueryResponseRecord.toAmino(message.latestRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryISCNByClassResponseAminoMsg): QueryISCNByClassResponse {
    return QueryISCNByClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryISCNByClassResponseProtoMsg): QueryISCNByClassResponse {
    return QueryISCNByClassResponse.decode(message.value);
  },
  toProto(message: QueryISCNByClassResponse): Uint8Array {
    return QueryISCNByClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryISCNByClassResponse): QueryISCNByClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryISCNByClassResponse",
      value: QueryISCNByClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAccountRequest(): QueryClassesByAccountRequest {
  return {
    account: "",
    pagination: undefined
  };
}
export const QueryClassesByAccountRequest = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByAccountRequest",
  encode(message: QueryClassesByAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountRequest {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountRequest>): QueryClassesByAccountRequest {
    const message = createBaseQueryClassesByAccountRequest();
    message.account = object.account ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByAccountRequestAmino): QueryClassesByAccountRequest {
    const message = createBaseQueryClassesByAccountRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAccountRequest): QueryClassesByAccountRequestAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAccountRequestAminoMsg): QueryClassesByAccountRequest {
    return QueryClassesByAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAccountRequestProtoMsg): QueryClassesByAccountRequest {
    return QueryClassesByAccountRequest.decode(message.value);
  },
  toProto(message: QueryClassesByAccountRequest): Uint8Array {
    return QueryClassesByAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAccountRequest): QueryClassesByAccountRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByAccountRequest",
      value: QueryClassesByAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAccountResponse(): QueryClassesByAccountResponse {
  return {
    account: "",
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesByAccountResponse = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByAccountResponse",
  encode(message: QueryClassesByAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountResponse>): QueryClassesByAccountResponse {
    const message = createBaseQueryClassesByAccountResponse();
    message.account = object.account ?? "";
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByAccountResponseAmino): QueryClassesByAccountResponse {
    const message = createBaseQueryClassesByAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAccountResponse): QueryClassesByAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account;
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAccountResponseAminoMsg): QueryClassesByAccountResponse {
    return QueryClassesByAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAccountResponseProtoMsg): QueryClassesByAccountResponse {
    return QueryClassesByAccountResponse.decode(message.value);
  },
  toProto(message: QueryClassesByAccountResponse): Uint8Array {
    return QueryClassesByAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAccountResponse): QueryClassesByAccountResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByAccountResponse",
      value: QueryClassesByAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAccountIndexRequest(): QueryClassesByAccountIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesByAccountIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexRequest",
  encode(message: QueryClassesByAccountIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountIndexRequest>): QueryClassesByAccountIndexRequest {
    const message = createBaseQueryClassesByAccountIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByAccountIndexRequestAmino): QueryClassesByAccountIndexRequest {
    const message = createBaseQueryClassesByAccountIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAccountIndexRequest): QueryClassesByAccountIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAccountIndexRequestAminoMsg): QueryClassesByAccountIndexRequest {
    return QueryClassesByAccountIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAccountIndexRequestProtoMsg): QueryClassesByAccountIndexRequest {
    return QueryClassesByAccountIndexRequest.decode(message.value);
  },
  toProto(message: QueryClassesByAccountIndexRequest): Uint8Array {
    return QueryClassesByAccountIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAccountIndexRequest): QueryClassesByAccountIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexRequest",
      value: QueryClassesByAccountIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClassesByAccountIndexResponse(): QueryClassesByAccountIndexResponse {
  return {
    classesByAccounts: [],
    pagination: undefined
  };
}
export const QueryClassesByAccountIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexResponse",
  encode(message: QueryClassesByAccountIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classesByAccounts) {
      ClassesByAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClassesByAccountIndexResponse {
    return {
      classesByAccounts: Array.isArray(object?.classesByAccounts) ? object.classesByAccounts.map((e: any) => ClassesByAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClassesByAccountIndexResponse>): QueryClassesByAccountIndexResponse {
    const message = createBaseQueryClassesByAccountIndexResponse();
    message.classesByAccounts = object.classesByAccounts?.map(e => ClassesByAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesByAccountIndexResponseAmino): QueryClassesByAccountIndexResponse {
    const message = createBaseQueryClassesByAccountIndexResponse();
    message.classesByAccounts = object.classes_by_accounts?.map(e => ClassesByAccount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesByAccountIndexResponse): QueryClassesByAccountIndexResponseAmino {
    const obj: any = {};
    if (message.classesByAccounts) {
      obj.classes_by_accounts = message.classesByAccounts.map(e => e ? ClassesByAccount.toAmino(e) : undefined);
    } else {
      obj.classes_by_accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesByAccountIndexResponseAminoMsg): QueryClassesByAccountIndexResponse {
    return QueryClassesByAccountIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClassesByAccountIndexResponseProtoMsg): QueryClassesByAccountIndexResponse {
    return QueryClassesByAccountIndexResponse.decode(message.value);
  },
  toProto(message: QueryClassesByAccountIndexResponse): Uint8Array {
    return QueryClassesByAccountIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesByAccountIndexResponse): QueryClassesByAccountIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryClassesByAccountIndexResponse",
      value: QueryClassesByAccountIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountByClassRequest(): QueryAccountByClassRequest {
  return {
    classId: ""
  };
}
export const QueryAccountByClassRequest = {
  typeUrl: "/likechain.likenft.v1.QueryAccountByClassRequest",
  encode(message: QueryAccountByClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountByClassRequest>): QueryAccountByClassRequest {
    const message = createBaseQueryAccountByClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryAccountByClassRequestAmino): QueryAccountByClassRequest {
    const message = createBaseQueryAccountByClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryAccountByClassRequest): QueryAccountByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryAccountByClassRequestAminoMsg): QueryAccountByClassRequest {
    return QueryAccountByClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountByClassRequestProtoMsg): QueryAccountByClassRequest {
    return QueryAccountByClassRequest.decode(message.value);
  },
  toProto(message: QueryAccountByClassRequest): Uint8Array {
    return QueryAccountByClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountByClassRequest): QueryAccountByClassRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryAccountByClassRequest",
      value: QueryAccountByClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountByClassResponse(): QueryAccountByClassResponse {
  return {
    address: ""
  };
}
export const QueryAccountByClassResponse = {
  typeUrl: "/likechain.likenft.v1.QueryAccountByClassResponse",
  encode(message: QueryAccountByClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountByClassResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountByClassResponse>): QueryAccountByClassResponse {
    const message = createBaseQueryAccountByClassResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountByClassResponseAmino): QueryAccountByClassResponse {
    const message = createBaseQueryAccountByClassResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountByClassResponse): QueryAccountByClassResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountByClassResponseAminoMsg): QueryAccountByClassResponse {
    return QueryAccountByClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountByClassResponseProtoMsg): QueryAccountByClassResponse {
    return QueryAccountByClassResponse.decode(message.value);
  },
  toProto(message: QueryAccountByClassResponse): Uint8Array {
    return QueryAccountByClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountByClassResponse): QueryAccountByClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryAccountByClassResponse",
      value: QueryAccountByClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentRequest(): QueryBlindBoxContentRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryBlindBoxContentRequest = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentRequest",
  encode(message: QueryBlindBoxContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentRequest>): QueryBlindBoxContentRequest {
    const message = createBaseQueryBlindBoxContentRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryBlindBoxContentRequestAmino): QueryBlindBoxContentRequest {
    const message = createBaseQueryBlindBoxContentRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentRequest): QueryBlindBoxContentRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentRequestAminoMsg): QueryBlindBoxContentRequest {
    return QueryBlindBoxContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentRequestProtoMsg): QueryBlindBoxContentRequest {
    return QueryBlindBoxContentRequest.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentRequest): Uint8Array {
    return QueryBlindBoxContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentRequest): QueryBlindBoxContentRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentRequest",
      value: QueryBlindBoxContentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentResponse(): QueryBlindBoxContentResponse {
  return {
    blindBoxContent: BlindBoxContent.fromPartial({})
  };
}
export const QueryBlindBoxContentResponse = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentResponse",
  encode(message: QueryBlindBoxContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blindBoxContent !== undefined) {
      BlindBoxContent.encode(message.blindBoxContent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentResponse {
    return {
      blindBoxContent: isSet(object.blindBoxContent) ? BlindBoxContent.fromJSON(object.blindBoxContent) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentResponse>): QueryBlindBoxContentResponse {
    const message = createBaseQueryBlindBoxContentResponse();
    message.blindBoxContent = object.blindBoxContent !== undefined && object.blindBoxContent !== null ? BlindBoxContent.fromPartial(object.blindBoxContent) : undefined;
    return message;
  },
  fromAmino(object: QueryBlindBoxContentResponseAmino): QueryBlindBoxContentResponse {
    const message = createBaseQueryBlindBoxContentResponse();
    if (object.blind_box_content !== undefined && object.blind_box_content !== null) {
      message.blindBoxContent = BlindBoxContent.fromAmino(object.blind_box_content);
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentResponse): QueryBlindBoxContentResponseAmino {
    const obj: any = {};
    obj.blind_box_content = message.blindBoxContent ? BlindBoxContent.toAmino(message.blindBoxContent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentResponseAminoMsg): QueryBlindBoxContentResponse {
    return QueryBlindBoxContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentResponseProtoMsg): QueryBlindBoxContentResponse {
    return QueryBlindBoxContentResponse.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentResponse): Uint8Array {
    return QueryBlindBoxContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentResponse): QueryBlindBoxContentResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentResponse",
      value: QueryBlindBoxContentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentIndexRequest(): QueryBlindBoxContentIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryBlindBoxContentIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexRequest",
  encode(message: QueryBlindBoxContentIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentIndexRequest>): QueryBlindBoxContentIndexRequest {
    const message = createBaseQueryBlindBoxContentIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBlindBoxContentIndexRequestAmino): QueryBlindBoxContentIndexRequest {
    const message = createBaseQueryBlindBoxContentIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentIndexRequest): QueryBlindBoxContentIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentIndexRequestAminoMsg): QueryBlindBoxContentIndexRequest {
    return QueryBlindBoxContentIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentIndexRequestProtoMsg): QueryBlindBoxContentIndexRequest {
    return QueryBlindBoxContentIndexRequest.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentIndexRequest): Uint8Array {
    return QueryBlindBoxContentIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentIndexRequest): QueryBlindBoxContentIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexRequest",
      value: QueryBlindBoxContentIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentIndexResponse(): QueryBlindBoxContentIndexResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}
export const QueryBlindBoxContentIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexResponse",
  encode(message: QueryBlindBoxContentIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentIndexResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentIndexResponse>): QueryBlindBoxContentIndexResponse {
    const message = createBaseQueryBlindBoxContentIndexResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBlindBoxContentIndexResponseAmino): QueryBlindBoxContentIndexResponse {
    const message = createBaseQueryBlindBoxContentIndexResponse();
    message.blindBoxContents = object.blind_box_contents?.map(e => BlindBoxContent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentIndexResponse): QueryBlindBoxContentIndexResponseAmino {
    const obj: any = {};
    if (message.blindBoxContents) {
      obj.blind_box_contents = message.blindBoxContents.map(e => e ? BlindBoxContent.toAmino(e) : undefined);
    } else {
      obj.blind_box_contents = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentIndexResponseAminoMsg): QueryBlindBoxContentIndexResponse {
    return QueryBlindBoxContentIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentIndexResponseProtoMsg): QueryBlindBoxContentIndexResponse {
    return QueryBlindBoxContentIndexResponse.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentIndexResponse): Uint8Array {
    return QueryBlindBoxContentIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentIndexResponse): QueryBlindBoxContentIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentIndexResponse",
      value: QueryBlindBoxContentIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentsRequest(): QueryBlindBoxContentsRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryBlindBoxContentsRequest = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsRequest",
  encode(message: QueryBlindBoxContentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentsRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentsRequest>): QueryBlindBoxContentsRequest {
    const message = createBaseQueryBlindBoxContentsRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBlindBoxContentsRequestAmino): QueryBlindBoxContentsRequest {
    const message = createBaseQueryBlindBoxContentsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentsRequest): QueryBlindBoxContentsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentsRequestAminoMsg): QueryBlindBoxContentsRequest {
    return QueryBlindBoxContentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentsRequestProtoMsg): QueryBlindBoxContentsRequest {
    return QueryBlindBoxContentsRequest.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentsRequest): Uint8Array {
    return QueryBlindBoxContentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentsRequest): QueryBlindBoxContentsRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsRequest",
      value: QueryBlindBoxContentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlindBoxContentsResponse(): QueryBlindBoxContentsResponse {
  return {
    blindBoxContents: [],
    pagination: undefined
  };
}
export const QueryBlindBoxContentsResponse = {
  typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsResponse",
  encode(message: QueryBlindBoxContentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blindBoxContents) {
      BlindBoxContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBlindBoxContentsResponse {
    return {
      blindBoxContents: Array.isArray(object?.blindBoxContents) ? object.blindBoxContents.map((e: any) => BlindBoxContent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBlindBoxContentsResponse>): QueryBlindBoxContentsResponse {
    const message = createBaseQueryBlindBoxContentsResponse();
    message.blindBoxContents = object.blindBoxContents?.map(e => BlindBoxContent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBlindBoxContentsResponseAmino): QueryBlindBoxContentsResponse {
    const message = createBaseQueryBlindBoxContentsResponse();
    message.blindBoxContents = object.blind_box_contents?.map(e => BlindBoxContent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBlindBoxContentsResponse): QueryBlindBoxContentsResponseAmino {
    const obj: any = {};
    if (message.blindBoxContents) {
      obj.blind_box_contents = message.blindBoxContents.map(e => e ? BlindBoxContent.toAmino(e) : undefined);
    } else {
      obj.blind_box_contents = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlindBoxContentsResponseAminoMsg): QueryBlindBoxContentsResponse {
    return QueryBlindBoxContentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlindBoxContentsResponseProtoMsg): QueryBlindBoxContentsResponse {
    return QueryBlindBoxContentsResponse.decode(message.value);
  },
  toProto(message: QueryBlindBoxContentsResponse): Uint8Array {
    return QueryBlindBoxContentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlindBoxContentsResponse): QueryBlindBoxContentsResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryBlindBoxContentsResponse",
      value: QueryBlindBoxContentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOfferRequest(): QueryOfferRequest {
  return {
    classId: "",
    nftId: "",
    buyer: ""
  };
}
export const QueryOfferRequest = {
  typeUrl: "/likechain.likenft.v1.QueryOfferRequest",
  encode(message: QueryOfferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : ""
    };
  },
  fromPartial(object: Partial<QueryOfferRequest>): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
  fromAmino(object: QueryOfferRequestAmino): QueryOfferRequest {
    const message = createBaseQueryOfferRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    return message;
  },
  toAmino(message: QueryOfferRequest): QueryOfferRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    return obj;
  },
  fromAminoMsg(object: QueryOfferRequestAminoMsg): QueryOfferRequest {
    return QueryOfferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferRequestProtoMsg): QueryOfferRequest {
    return QueryOfferRequest.decode(message.value);
  },
  toProto(message: QueryOfferRequest): Uint8Array {
    return QueryOfferRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferRequest): QueryOfferRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOfferRequest",
      value: QueryOfferRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOfferResponse(): QueryOfferResponse {
  return {
    offer: Offer.fromPartial({})
  };
}
export const QueryOfferResponse = {
  typeUrl: "/likechain.likenft.v1.QueryOfferResponse",
  encode(message: QueryOfferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.offer !== undefined) {
      Offer.encode(message.offer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferResponse {
    return {
      offer: isSet(object.offer) ? Offer.fromJSON(object.offer) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferResponse>): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    message.offer = object.offer !== undefined && object.offer !== null ? Offer.fromPartial(object.offer) : undefined;
    return message;
  },
  fromAmino(object: QueryOfferResponseAmino): QueryOfferResponse {
    const message = createBaseQueryOfferResponse();
    if (object.offer !== undefined && object.offer !== null) {
      message.offer = Offer.fromAmino(object.offer);
    }
    return message;
  },
  toAmino(message: QueryOfferResponse): QueryOfferResponseAmino {
    const obj: any = {};
    obj.offer = message.offer ? Offer.toAmino(message.offer) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOfferResponseAminoMsg): QueryOfferResponse {
    return QueryOfferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferResponseProtoMsg): QueryOfferResponse {
    return QueryOfferResponse.decode(message.value);
  },
  toProto(message: QueryOfferResponse): Uint8Array {
    return QueryOfferResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferResponse): QueryOfferResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOfferResponse",
      value: QueryOfferResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOfferIndexRequest(): QueryOfferIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryOfferIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryOfferIndexRequest",
  encode(message: QueryOfferIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferIndexRequest>): QueryOfferIndexRequest {
    const message = createBaseQueryOfferIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOfferIndexRequestAmino): QueryOfferIndexRequest {
    const message = createBaseQueryOfferIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOfferIndexRequest): QueryOfferIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOfferIndexRequestAminoMsg): QueryOfferIndexRequest {
    return QueryOfferIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferIndexRequestProtoMsg): QueryOfferIndexRequest {
    return QueryOfferIndexRequest.decode(message.value);
  },
  toProto(message: QueryOfferIndexRequest): Uint8Array {
    return QueryOfferIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferIndexRequest): QueryOfferIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOfferIndexRequest",
      value: QueryOfferIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOfferIndexResponse(): QueryOfferIndexResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOfferIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryOfferIndexResponse",
  encode(message: QueryOfferIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOfferIndexResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOfferIndexResponse>): QueryOfferIndexResponse {
    const message = createBaseQueryOfferIndexResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOfferIndexResponseAmino): QueryOfferIndexResponse {
    const message = createBaseQueryOfferIndexResponse();
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOfferIndexResponse): QueryOfferIndexResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOfferIndexResponseAminoMsg): QueryOfferIndexResponse {
    return QueryOfferIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOfferIndexResponseProtoMsg): QueryOfferIndexResponse {
    return QueryOfferIndexResponse.decode(message.value);
  },
  toProto(message: QueryOfferIndexResponse): Uint8Array {
    return QueryOfferIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOfferIndexResponse): QueryOfferIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOfferIndexResponse",
      value: QueryOfferIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByClassRequest(): QueryOffersByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryOffersByClassRequest = {
  typeUrl: "/likechain.likenft.v1.QueryOffersByClassRequest",
  encode(message: QueryOffersByClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByClassRequest>): QueryOffersByClassRequest {
    const message = createBaseQueryOffersByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByClassRequestAmino): QueryOffersByClassRequest {
    const message = createBaseQueryOffersByClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByClassRequest): QueryOffersByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByClassRequestAminoMsg): QueryOffersByClassRequest {
    return QueryOffersByClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByClassRequestProtoMsg): QueryOffersByClassRequest {
    return QueryOffersByClassRequest.decode(message.value);
  },
  toProto(message: QueryOffersByClassRequest): Uint8Array {
    return QueryOffersByClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByClassRequest): QueryOffersByClassRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOffersByClassRequest",
      value: QueryOffersByClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByClassResponse(): QueryOffersByClassResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOffersByClassResponse = {
  typeUrl: "/likechain.likenft.v1.QueryOffersByClassResponse",
  encode(message: QueryOffersByClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByClassResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByClassResponse>): QueryOffersByClassResponse {
    const message = createBaseQueryOffersByClassResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByClassResponseAmino): QueryOffersByClassResponse {
    const message = createBaseQueryOffersByClassResponse();
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByClassResponse): QueryOffersByClassResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByClassResponseAminoMsg): QueryOffersByClassResponse {
    return QueryOffersByClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByClassResponseProtoMsg): QueryOffersByClassResponse {
    return QueryOffersByClassResponse.decode(message.value);
  },
  toProto(message: QueryOffersByClassResponse): Uint8Array {
    return QueryOffersByClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByClassResponse): QueryOffersByClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOffersByClassResponse",
      value: QueryOffersByClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByNFTRequest(): QueryOffersByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}
export const QueryOffersByNFTRequest = {
  typeUrl: "/likechain.likenft.v1.QueryOffersByNFTRequest",
  encode(message: QueryOffersByNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByNFTRequest>): QueryOffersByNFTRequest {
    const message = createBaseQueryOffersByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByNFTRequestAmino): QueryOffersByNFTRequest {
    const message = createBaseQueryOffersByNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByNFTRequest): QueryOffersByNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByNFTRequestAminoMsg): QueryOffersByNFTRequest {
    return QueryOffersByNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByNFTRequestProtoMsg): QueryOffersByNFTRequest {
    return QueryOffersByNFTRequest.decode(message.value);
  },
  toProto(message: QueryOffersByNFTRequest): Uint8Array {
    return QueryOffersByNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByNFTRequest): QueryOffersByNFTRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOffersByNFTRequest",
      value: QueryOffersByNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOffersByNFTResponse(): QueryOffersByNFTResponse {
  return {
    offers: [],
    pagination: undefined
  };
}
export const QueryOffersByNFTResponse = {
  typeUrl: "/likechain.likenft.v1.QueryOffersByNFTResponse",
  encode(message: QueryOffersByNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.offers) {
      Offer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOffersByNFTResponse {
    return {
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Offer.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryOffersByNFTResponse>): QueryOffersByNFTResponse {
    const message = createBaseQueryOffersByNFTResponse();
    message.offers = object.offers?.map(e => Offer.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOffersByNFTResponseAmino): QueryOffersByNFTResponse {
    const message = createBaseQueryOffersByNFTResponse();
    message.offers = object.offers?.map(e => Offer.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOffersByNFTResponse): QueryOffersByNFTResponseAmino {
    const obj: any = {};
    if (message.offers) {
      obj.offers = message.offers.map(e => e ? Offer.toAmino(e) : undefined);
    } else {
      obj.offers = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOffersByNFTResponseAminoMsg): QueryOffersByNFTResponse {
    return QueryOffersByNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOffersByNFTResponseProtoMsg): QueryOffersByNFTResponse {
    return QueryOffersByNFTResponse.decode(message.value);
  },
  toProto(message: QueryOffersByNFTResponse): Uint8Array {
    return QueryOffersByNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOffersByNFTResponse): QueryOffersByNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryOffersByNFTResponse",
      value: QueryOffersByNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingRequest(): QueryListingRequest {
  return {
    classId: "",
    nftId: "",
    seller: ""
  };
}
export const QueryListingRequest = {
  typeUrl: "/likechain.likenft.v1.QueryListingRequest",
  encode(message: QueryListingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    return writer;
  },
  fromJSON(object: any): QueryListingRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : ""
    };
  },
  fromPartial(object: Partial<QueryListingRequest>): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    return message;
  },
  fromAmino(object: QueryListingRequestAmino): QueryListingRequest {
    const message = createBaseQueryListingRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    }
    return message;
  },
  toAmino(message: QueryListingRequest): QueryListingRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    return obj;
  },
  fromAminoMsg(object: QueryListingRequestAminoMsg): QueryListingRequest {
    return QueryListingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingRequestProtoMsg): QueryListingRequest {
    return QueryListingRequest.decode(message.value);
  },
  toProto(message: QueryListingRequest): Uint8Array {
    return QueryListingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingRequest): QueryListingRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingRequest",
      value: QueryListingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingResponse(): QueryListingResponse {
  return {
    listing: Listing.fromPartial({})
  };
}
export const QueryListingResponse = {
  typeUrl: "/likechain.likenft.v1.QueryListingResponse",
  encode(message: QueryListingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingResponse {
    return {
      listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingResponse>): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
    return message;
  },
  fromAmino(object: QueryListingResponseAmino): QueryListingResponse {
    const message = createBaseQueryListingResponse();
    if (object.listing !== undefined && object.listing !== null) {
      message.listing = Listing.fromAmino(object.listing);
    }
    return message;
  },
  toAmino(message: QueryListingResponse): QueryListingResponseAmino {
    const obj: any = {};
    obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingResponseAminoMsg): QueryListingResponse {
    return QueryListingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingResponseProtoMsg): QueryListingResponse {
    return QueryListingResponse.decode(message.value);
  },
  toProto(message: QueryListingResponse): Uint8Array {
    return QueryListingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingResponse): QueryListingResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingResponse",
      value: QueryListingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingIndexRequest(): QueryListingIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryListingIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryListingIndexRequest",
  encode(message: QueryListingIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingIndexRequest>): QueryListingIndexRequest {
    const message = createBaseQueryListingIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingIndexRequestAmino): QueryListingIndexRequest {
    const message = createBaseQueryListingIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingIndexRequest): QueryListingIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingIndexRequestAminoMsg): QueryListingIndexRequest {
    return QueryListingIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingIndexRequestProtoMsg): QueryListingIndexRequest {
    return QueryListingIndexRequest.decode(message.value);
  },
  toProto(message: QueryListingIndexRequest): Uint8Array {
    return QueryListingIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingIndexRequest): QueryListingIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingIndexRequest",
      value: QueryListingIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingIndexResponse(): QueryListingIndexResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryListingIndexResponse",
  encode(message: QueryListingIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingIndexResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingIndexResponse>): QueryListingIndexResponse {
    const message = createBaseQueryListingIndexResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingIndexResponseAmino): QueryListingIndexResponse {
    const message = createBaseQueryListingIndexResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingIndexResponse): QueryListingIndexResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingIndexResponseAminoMsg): QueryListingIndexResponse {
    return QueryListingIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingIndexResponseProtoMsg): QueryListingIndexResponse {
    return QueryListingIndexResponse.decode(message.value);
  },
  toProto(message: QueryListingIndexResponse): Uint8Array {
    return QueryListingIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingIndexResponse): QueryListingIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingIndexResponse",
      value: QueryListingIndexResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByClassRequest(): QueryListingsByClassRequest {
  return {
    classId: "",
    pagination: undefined
  };
}
export const QueryListingsByClassRequest = {
  typeUrl: "/likechain.likenft.v1.QueryListingsByClassRequest",
  encode(message: QueryListingsByClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByClassRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByClassRequest>): QueryListingsByClassRequest {
    const message = createBaseQueryListingsByClassRequest();
    message.classId = object.classId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByClassRequestAmino): QueryListingsByClassRequest {
    const message = createBaseQueryListingsByClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByClassRequest): QueryListingsByClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByClassRequestAminoMsg): QueryListingsByClassRequest {
    return QueryListingsByClassRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByClassRequestProtoMsg): QueryListingsByClassRequest {
    return QueryListingsByClassRequest.decode(message.value);
  },
  toProto(message: QueryListingsByClassRequest): Uint8Array {
    return QueryListingsByClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByClassRequest): QueryListingsByClassRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingsByClassRequest",
      value: QueryListingsByClassRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByClassResponse(): QueryListingsByClassResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByClassResponse = {
  typeUrl: "/likechain.likenft.v1.QueryListingsByClassResponse",
  encode(message: QueryListingsByClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByClassResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByClassResponse>): QueryListingsByClassResponse {
    const message = createBaseQueryListingsByClassResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByClassResponseAmino): QueryListingsByClassResponse {
    const message = createBaseQueryListingsByClassResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByClassResponse): QueryListingsByClassResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByClassResponseAminoMsg): QueryListingsByClassResponse {
    return QueryListingsByClassResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByClassResponseProtoMsg): QueryListingsByClassResponse {
    return QueryListingsByClassResponse.decode(message.value);
  },
  toProto(message: QueryListingsByClassResponse): Uint8Array {
    return QueryListingsByClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByClassResponse): QueryListingsByClassResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingsByClassResponse",
      value: QueryListingsByClassResponse.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByNFTRequest(): QueryListingsByNFTRequest {
  return {
    classId: "",
    nftId: "",
    pagination: undefined
  };
}
export const QueryListingsByNFTRequest = {
  typeUrl: "/likechain.likenft.v1.QueryListingsByNFTRequest",
  encode(message: QueryListingsByNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByNFTRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByNFTRequest>): QueryListingsByNFTRequest {
    const message = createBaseQueryListingsByNFTRequest();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByNFTRequestAmino): QueryListingsByNFTRequest {
    const message = createBaseQueryListingsByNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByNFTRequest): QueryListingsByNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByNFTRequestAminoMsg): QueryListingsByNFTRequest {
    return QueryListingsByNFTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByNFTRequestProtoMsg): QueryListingsByNFTRequest {
    return QueryListingsByNFTRequest.decode(message.value);
  },
  toProto(message: QueryListingsByNFTRequest): Uint8Array {
    return QueryListingsByNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByNFTRequest): QueryListingsByNFTRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingsByNFTRequest",
      value: QueryListingsByNFTRequest.encode(message).finish()
    };
  }
};
function createBaseQueryListingsByNFTResponse(): QueryListingsByNFTResponse {
  return {
    listings: [],
    pagination: undefined
  };
}
export const QueryListingsByNFTResponse = {
  typeUrl: "/likechain.likenft.v1.QueryListingsByNFTResponse",
  encode(message: QueryListingsByNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.listings) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListingsByNFTResponse {
    return {
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryListingsByNFTResponse>): QueryListingsByNFTResponse {
    const message = createBaseQueryListingsByNFTResponse();
    message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListingsByNFTResponseAmino): QueryListingsByNFTResponse {
    const message = createBaseQueryListingsByNFTResponse();
    message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListingsByNFTResponse): QueryListingsByNFTResponseAmino {
    const obj: any = {};
    if (message.listings) {
      obj.listings = message.listings.map(e => e ? Listing.toAmino(e) : undefined);
    } else {
      obj.listings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListingsByNFTResponseAminoMsg): QueryListingsByNFTResponse {
    return QueryListingsByNFTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListingsByNFTResponseProtoMsg): QueryListingsByNFTResponse {
    return QueryListingsByNFTResponse.decode(message.value);
  },
  toProto(message: QueryListingsByNFTResponse): Uint8Array {
    return QueryListingsByNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListingsByNFTResponse): QueryListingsByNFTResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryListingsByNFTResponse",
      value: QueryListingsByNFTResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRoyaltyConfigRequest(): QueryRoyaltyConfigRequest {
  return {
    classId: ""
  };
}
export const QueryRoyaltyConfigRequest = {
  typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigRequest",
  encode(message: QueryRoyaltyConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigRequest {
    return {
      classId: isSet(object.classId) ? String(object.classId) : ""
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigRequest>): QueryRoyaltyConfigRequest {
    const message = createBaseQueryRoyaltyConfigRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryRoyaltyConfigRequestAmino): QueryRoyaltyConfigRequest {
    const message = createBaseQueryRoyaltyConfigRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryRoyaltyConfigRequest): QueryRoyaltyConfigRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryRoyaltyConfigRequestAminoMsg): QueryRoyaltyConfigRequest {
    return QueryRoyaltyConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoyaltyConfigRequestProtoMsg): QueryRoyaltyConfigRequest {
    return QueryRoyaltyConfigRequest.decode(message.value);
  },
  toProto(message: QueryRoyaltyConfigRequest): Uint8Array {
    return QueryRoyaltyConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoyaltyConfigRequest): QueryRoyaltyConfigRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigRequest",
      value: QueryRoyaltyConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRoyaltyConfigResponse(): QueryRoyaltyConfigResponse {
  return {
    royaltyConfig: RoyaltyConfig.fromPartial({})
  };
}
export const QueryRoyaltyConfigResponse = {
  typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigResponse",
  encode(message: QueryRoyaltyConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.royaltyConfig !== undefined) {
      RoyaltyConfig.encode(message.royaltyConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigResponse {
    return {
      royaltyConfig: isSet(object.royaltyConfig) ? RoyaltyConfig.fromJSON(object.royaltyConfig) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigResponse>): QueryRoyaltyConfigResponse {
    const message = createBaseQueryRoyaltyConfigResponse();
    message.royaltyConfig = object.royaltyConfig !== undefined && object.royaltyConfig !== null ? RoyaltyConfig.fromPartial(object.royaltyConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryRoyaltyConfigResponseAmino): QueryRoyaltyConfigResponse {
    const message = createBaseQueryRoyaltyConfigResponse();
    if (object.royalty_config !== undefined && object.royalty_config !== null) {
      message.royaltyConfig = RoyaltyConfig.fromAmino(object.royalty_config);
    }
    return message;
  },
  toAmino(message: QueryRoyaltyConfigResponse): QueryRoyaltyConfigResponseAmino {
    const obj: any = {};
    obj.royalty_config = message.royaltyConfig ? RoyaltyConfig.toAmino(message.royaltyConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRoyaltyConfigResponseAminoMsg): QueryRoyaltyConfigResponse {
    return QueryRoyaltyConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoyaltyConfigResponseProtoMsg): QueryRoyaltyConfigResponse {
    return QueryRoyaltyConfigResponse.decode(message.value);
  },
  toProto(message: QueryRoyaltyConfigResponse): Uint8Array {
    return QueryRoyaltyConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoyaltyConfigResponse): QueryRoyaltyConfigResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigResponse",
      value: QueryRoyaltyConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRoyaltyConfigIndexRequest(): QueryRoyaltyConfigIndexRequest {
  return {
    pagination: undefined
  };
}
export const QueryRoyaltyConfigIndexRequest = {
  typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexRequest",
  encode(message: QueryRoyaltyConfigIndexRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigIndexRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigIndexRequest>): QueryRoyaltyConfigIndexRequest {
    const message = createBaseQueryRoyaltyConfigIndexRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRoyaltyConfigIndexRequestAmino): QueryRoyaltyConfigIndexRequest {
    const message = createBaseQueryRoyaltyConfigIndexRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRoyaltyConfigIndexRequest): QueryRoyaltyConfigIndexRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRoyaltyConfigIndexRequestAminoMsg): QueryRoyaltyConfigIndexRequest {
    return QueryRoyaltyConfigIndexRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoyaltyConfigIndexRequestProtoMsg): QueryRoyaltyConfigIndexRequest {
    return QueryRoyaltyConfigIndexRequest.decode(message.value);
  },
  toProto(message: QueryRoyaltyConfigIndexRequest): Uint8Array {
    return QueryRoyaltyConfigIndexRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoyaltyConfigIndexRequest): QueryRoyaltyConfigIndexRequestProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexRequest",
      value: QueryRoyaltyConfigIndexRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRoyaltyConfigIndexResponse(): QueryRoyaltyConfigIndexResponse {
  return {
    royaltyConfigByClass: [],
    pagination: undefined
  };
}
export const QueryRoyaltyConfigIndexResponse = {
  typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexResponse",
  encode(message: QueryRoyaltyConfigIndexResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.royaltyConfigByClass) {
      RoyaltyConfigByClass.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRoyaltyConfigIndexResponse {
    return {
      royaltyConfigByClass: Array.isArray(object?.royaltyConfigByClass) ? object.royaltyConfigByClass.map((e: any) => RoyaltyConfigByClass.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRoyaltyConfigIndexResponse>): QueryRoyaltyConfigIndexResponse {
    const message = createBaseQueryRoyaltyConfigIndexResponse();
    message.royaltyConfigByClass = object.royaltyConfigByClass?.map(e => RoyaltyConfigByClass.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRoyaltyConfigIndexResponseAmino): QueryRoyaltyConfigIndexResponse {
    const message = createBaseQueryRoyaltyConfigIndexResponse();
    message.royaltyConfigByClass = object.royalty_config_by_class?.map(e => RoyaltyConfigByClass.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRoyaltyConfigIndexResponse): QueryRoyaltyConfigIndexResponseAmino {
    const obj: any = {};
    if (message.royaltyConfigByClass) {
      obj.royalty_config_by_class = message.royaltyConfigByClass.map(e => e ? RoyaltyConfigByClass.toAmino(e) : undefined);
    } else {
      obj.royalty_config_by_class = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRoyaltyConfigIndexResponseAminoMsg): QueryRoyaltyConfigIndexResponse {
    return QueryRoyaltyConfigIndexResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoyaltyConfigIndexResponseProtoMsg): QueryRoyaltyConfigIndexResponse {
    return QueryRoyaltyConfigIndexResponse.decode(message.value);
  },
  toProto(message: QueryRoyaltyConfigIndexResponse): Uint8Array {
    return QueryRoyaltyConfigIndexResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoyaltyConfigIndexResponse): QueryRoyaltyConfigIndexResponseProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.QueryRoyaltyConfigIndexResponse",
      value: QueryRoyaltyConfigIndexResponse.encode(message).finish()
    };
  }
};