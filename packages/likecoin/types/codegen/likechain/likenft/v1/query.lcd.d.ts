import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryClassesByISCNRequest, QueryClassesByISCNResponseSDKType, QueryClassesByISCNIndexRequest, QueryClassesByISCNIndexResponseSDKType, QueryISCNByClassRequest, QueryISCNByClassResponseSDKType, QueryClassesByAccountRequest, QueryClassesByAccountResponseSDKType, QueryClassesByAccountIndexRequest, QueryClassesByAccountIndexResponseSDKType, QueryAccountByClassRequest, QueryAccountByClassResponseSDKType, QueryBlindBoxContentRequest, QueryBlindBoxContentResponseSDKType, QueryBlindBoxContentIndexRequest, QueryBlindBoxContentIndexResponseSDKType, QueryBlindBoxContentsRequest, QueryBlindBoxContentsResponseSDKType, QueryOfferRequest, QueryOfferResponseSDKType, QueryOfferIndexRequest, QueryOfferIndexResponseSDKType, QueryOffersByClassRequest, QueryOffersByClassResponseSDKType, QueryOffersByNFTRequest, QueryOffersByNFTResponseSDKType, QueryListingRequest, QueryListingResponseSDKType, QueryListingIndexRequest, QueryListingIndexResponseSDKType, QueryListingsByClassRequest, QueryListingsByClassResponseSDKType, QueryListingsByNFTRequest, QueryListingsByNFTResponseSDKType, QueryRoyaltyConfigRequest, QueryRoyaltyConfigResponseSDKType, QueryRoyaltyConfigIndexRequest, QueryRoyaltyConfigIndexResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    classesByISCN(params: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponseSDKType>;
    classesByISCNIndex(params?: QueryClassesByISCNIndexRequest): Promise<QueryClassesByISCNIndexResponseSDKType>;
    iSCNByClass(params: QueryISCNByClassRequest): Promise<QueryISCNByClassResponseSDKType>;
    classesByAccount(params: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponseSDKType>;
    classesByAccountIndex(params?: QueryClassesByAccountIndexRequest): Promise<QueryClassesByAccountIndexResponseSDKType>;
    accountByClass(params: QueryAccountByClassRequest): Promise<QueryAccountByClassResponseSDKType>;
    blindBoxContent(params: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponseSDKType>;
    blindBoxContentIndex(params?: QueryBlindBoxContentIndexRequest): Promise<QueryBlindBoxContentIndexResponseSDKType>;
    blindBoxContents(params: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponseSDKType>;
    offer(params: QueryOfferRequest): Promise<QueryOfferResponseSDKType>;
    offerIndex(params?: QueryOfferIndexRequest): Promise<QueryOfferIndexResponseSDKType>;
    offersByClass(params: QueryOffersByClassRequest): Promise<QueryOffersByClassResponseSDKType>;
    offersByNFT(params: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponseSDKType>;
    listing(params: QueryListingRequest): Promise<QueryListingResponseSDKType>;
    listingIndex(params?: QueryListingIndexRequest): Promise<QueryListingIndexResponseSDKType>;
    listingsByClass(params: QueryListingsByClassRequest): Promise<QueryListingsByClassResponseSDKType>;
    listingsByNFT(params: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponseSDKType>;
    royaltyConfig(params: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponseSDKType>;
    royaltyConfigIndex(params?: QueryRoyaltyConfigIndexRequest): Promise<QueryRoyaltyConfigIndexResponseSDKType>;
}
