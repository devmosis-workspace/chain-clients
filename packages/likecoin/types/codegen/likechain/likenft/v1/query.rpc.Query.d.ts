import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryClassesByISCNRequest, QueryClassesByISCNResponse, QueryClassesByISCNIndexRequest, QueryClassesByISCNIndexResponse, QueryISCNByClassRequest, QueryISCNByClassResponse, QueryClassesByAccountRequest, QueryClassesByAccountResponse, QueryClassesByAccountIndexRequest, QueryClassesByAccountIndexResponse, QueryAccountByClassRequest, QueryAccountByClassResponse, QueryBlindBoxContentRequest, QueryBlindBoxContentResponse, QueryBlindBoxContentIndexRequest, QueryBlindBoxContentIndexResponse, QueryBlindBoxContentsRequest, QueryBlindBoxContentsResponse, QueryOfferRequest, QueryOfferResponse, QueryOfferIndexRequest, QueryOfferIndexResponse, QueryOffersByClassRequest, QueryOffersByClassResponse, QueryOffersByNFTRequest, QueryOffersByNFTResponse, QueryListingRequest, QueryListingResponse, QueryListingIndexRequest, QueryListingIndexResponse, QueryListingsByClassRequest, QueryListingsByClassResponse, QueryListingsByNFTRequest, QueryListingsByNFTResponse, QueryRoyaltyConfigRequest, QueryRoyaltyConfigResponse, QueryRoyaltyConfigIndexRequest, QueryRoyaltyConfigIndexResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a ClassesByISCN by index. */
    classesByISCN(request: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponse>;
    /** Queries a list of ClassesByISCN items. */
    classesByISCNIndex(request?: QueryClassesByISCNIndexRequest): Promise<QueryClassesByISCNIndexResponse>;
    /** Queries a list of ISCNByClass items. */
    iSCNByClass(request: QueryISCNByClassRequest): Promise<QueryISCNByClassResponse>;
    /** Queries a ClassesByAccount by index. */
    classesByAccount(request: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponse>;
    /** Queries a list of ClassesByAccount items. */
    classesByAccountIndex(request?: QueryClassesByAccountIndexRequest): Promise<QueryClassesByAccountIndexResponse>;
    /** Queries a list of AccountByClass items. */
    accountByClass(request: QueryAccountByClassRequest): Promise<QueryAccountByClassResponse>;
    /** Queries a BlindBoxContent by index. */
    blindBoxContent(request: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponse>;
    /** Queries a list of BlindBoxContent items. */
    blindBoxContentIndex(request?: QueryBlindBoxContentIndexRequest): Promise<QueryBlindBoxContentIndexResponse>;
    /** Queries a list of BlindBoxContents by class_id */
    blindBoxContents(request: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponse>;
    /** Queries a Offer by index. */
    offer(request: QueryOfferRequest): Promise<QueryOfferResponse>;
    /** Queries a list of Offer items. */
    offerIndex(request?: QueryOfferIndexRequest): Promise<QueryOfferIndexResponse>;
    /** Queries a list of OffersByClass items. */
    offersByClass(request: QueryOffersByClassRequest): Promise<QueryOffersByClassResponse>;
    /** Queries a list of OffersByNFT items. */
    offersByNFT(request: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponse>;
    /** Queries a Listing by index. */
    listing(request: QueryListingRequest): Promise<QueryListingResponse>;
    /** Queries a list of Listing items. */
    listingIndex(request?: QueryListingIndexRequest): Promise<QueryListingIndexResponse>;
    /** Queries a list of Listing items by class */
    listingsByClass(request: QueryListingsByClassRequest): Promise<QueryListingsByClassResponse>;
    /** Queries a list of Listing items by nft */
    listingsByNFT(request: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponse>;
    /** Queries a RoyaltyConfig by class */
    royaltyConfig(request: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponse>;
    /** Queries index of RoyaltyConfig of all classes */
    royaltyConfigIndex(request?: QueryRoyaltyConfigIndexRequest): Promise<QueryRoyaltyConfigIndexResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    classesByISCN(request: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponse>;
    classesByISCNIndex(request?: QueryClassesByISCNIndexRequest): Promise<QueryClassesByISCNIndexResponse>;
    iSCNByClass(request: QueryISCNByClassRequest): Promise<QueryISCNByClassResponse>;
    classesByAccount(request: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponse>;
    classesByAccountIndex(request?: QueryClassesByAccountIndexRequest): Promise<QueryClassesByAccountIndexResponse>;
    accountByClass(request: QueryAccountByClassRequest): Promise<QueryAccountByClassResponse>;
    blindBoxContent(request: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponse>;
    blindBoxContentIndex(request?: QueryBlindBoxContentIndexRequest): Promise<QueryBlindBoxContentIndexResponse>;
    blindBoxContents(request: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponse>;
    offer(request: QueryOfferRequest): Promise<QueryOfferResponse>;
    offerIndex(request?: QueryOfferIndexRequest): Promise<QueryOfferIndexResponse>;
    offersByClass(request: QueryOffersByClassRequest): Promise<QueryOffersByClassResponse>;
    offersByNFT(request: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponse>;
    listing(request: QueryListingRequest): Promise<QueryListingResponse>;
    listingIndex(request?: QueryListingIndexRequest): Promise<QueryListingIndexResponse>;
    listingsByClass(request: QueryListingsByClassRequest): Promise<QueryListingsByClassResponse>;
    listingsByNFT(request: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponse>;
    royaltyConfig(request: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponse>;
    royaltyConfigIndex(request?: QueryRoyaltyConfigIndexRequest): Promise<QueryRoyaltyConfigIndexResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    classesByISCN(request: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponse>;
    classesByISCNIndex(request?: QueryClassesByISCNIndexRequest): Promise<QueryClassesByISCNIndexResponse>;
    iSCNByClass(request: QueryISCNByClassRequest): Promise<QueryISCNByClassResponse>;
    classesByAccount(request: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponse>;
    classesByAccountIndex(request?: QueryClassesByAccountIndexRequest): Promise<QueryClassesByAccountIndexResponse>;
    accountByClass(request: QueryAccountByClassRequest): Promise<QueryAccountByClassResponse>;
    blindBoxContent(request: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponse>;
    blindBoxContentIndex(request?: QueryBlindBoxContentIndexRequest): Promise<QueryBlindBoxContentIndexResponse>;
    blindBoxContents(request: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponse>;
    offer(request: QueryOfferRequest): Promise<QueryOfferResponse>;
    offerIndex(request?: QueryOfferIndexRequest): Promise<QueryOfferIndexResponse>;
    offersByClass(request: QueryOffersByClassRequest): Promise<QueryOffersByClassResponse>;
    offersByNFT(request: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponse>;
    listing(request: QueryListingRequest): Promise<QueryListingResponse>;
    listingIndex(request?: QueryListingIndexRequest): Promise<QueryListingIndexResponse>;
    listingsByClass(request: QueryListingsByClassRequest): Promise<QueryListingsByClassResponse>;
    listingsByNFT(request: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponse>;
    royaltyConfig(request: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponse>;
    royaltyConfigIndex(request?: QueryRoyaltyConfigIndexRequest): Promise<QueryRoyaltyConfigIndexResponse>;
};
