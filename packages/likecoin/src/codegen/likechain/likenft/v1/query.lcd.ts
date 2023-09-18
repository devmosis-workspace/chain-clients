import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryClassesByISCNRequest, QueryClassesByISCNResponseSDKType, QueryClassesByISCNIndexRequest, QueryClassesByISCNIndexResponseSDKType, QueryISCNByClassRequest, QueryISCNByClassResponseSDKType, QueryClassesByAccountRequest, QueryClassesByAccountResponseSDKType, QueryClassesByAccountIndexRequest, QueryClassesByAccountIndexResponseSDKType, QueryAccountByClassRequest, QueryAccountByClassResponseSDKType, QueryBlindBoxContentRequest, QueryBlindBoxContentResponseSDKType, QueryBlindBoxContentIndexRequest, QueryBlindBoxContentIndexResponseSDKType, QueryBlindBoxContentsRequest, QueryBlindBoxContentsResponseSDKType, QueryOfferRequest, QueryOfferResponseSDKType, QueryOfferIndexRequest, QueryOfferIndexResponseSDKType, QueryOffersByClassRequest, QueryOffersByClassResponseSDKType, QueryOffersByNFTRequest, QueryOffersByNFTResponseSDKType, QueryListingRequest, QueryListingResponseSDKType, QueryListingIndexRequest, QueryListingIndexResponseSDKType, QueryListingsByClassRequest, QueryListingsByClassResponseSDKType, QueryListingsByNFTRequest, QueryListingsByNFTResponseSDKType, QueryRoyaltyConfigRequest, QueryRoyaltyConfigResponseSDKType, QueryRoyaltyConfigIndexRequest, QueryRoyaltyConfigIndexResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.classesByISCN = this.classesByISCN.bind(this);
    this.classesByISCNIndex = this.classesByISCNIndex.bind(this);
    this.iSCNByClass = this.iSCNByClass.bind(this);
    this.classesByAccount = this.classesByAccount.bind(this);
    this.classesByAccountIndex = this.classesByAccountIndex.bind(this);
    this.accountByClass = this.accountByClass.bind(this);
    this.blindBoxContent = this.blindBoxContent.bind(this);
    this.blindBoxContentIndex = this.blindBoxContentIndex.bind(this);
    this.blindBoxContents = this.blindBoxContents.bind(this);
    this.offer = this.offer.bind(this);
    this.offerIndex = this.offerIndex.bind(this);
    this.offersByClass = this.offersByClass.bind(this);
    this.offersByNFT = this.offersByNFT.bind(this);
    this.listing = this.listing.bind(this);
    this.listingIndex = this.listingIndex.bind(this);
    this.listingsByClass = this.listingsByClass.bind(this);
    this.listingsByNFT = this.listingsByNFT.bind(this);
    this.royaltyConfig = this.royaltyConfig.bind(this);
    this.royaltyConfigIndex = this.royaltyConfigIndex.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `likechain/likenft/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a ClassesByISCN by index. */
  async classesByISCN(params: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/iscn_classes/${params.iscnIdPrefix}`;
    return await this.req.get<QueryClassesByISCNResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ClassesByISCN items. */
  async classesByISCNIndex(params: QueryClassesByISCNIndexRequest = {
    pagination: undefined
  }): Promise<QueryClassesByISCNIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/iscn_classes`;
    return await this.req.get<QueryClassesByISCNIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ISCNByClass items. */
  async iSCNByClass(params: QueryISCNByClassRequest): Promise<QueryISCNByClassResponseSDKType> {
    const endpoint = `likechain/likenft/v1/classes/${params.classId}/iscn`;
    return await this.req.get<QueryISCNByClassResponseSDKType>(endpoint);
  }
  /* Queries a ClassesByAccount by index. */
  async classesByAccount(params: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/account_classes/${params.account}`;
    return await this.req.get<QueryClassesByAccountResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ClassesByAccount items. */
  async classesByAccountIndex(params: QueryClassesByAccountIndexRequest = {
    pagination: undefined
  }): Promise<QueryClassesByAccountIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/account_classes`;
    return await this.req.get<QueryClassesByAccountIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a list of AccountByClass items. */
  async accountByClass(params: QueryAccountByClassRequest): Promise<QueryAccountByClassResponseSDKType> {
    const endpoint = `likechain/likenft/v1/classes/${params.classId}/account`;
    return await this.req.get<QueryAccountByClassResponseSDKType>(endpoint);
  }
  /* Queries a BlindBoxContent by index. */
  async blindBoxContent(params: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponseSDKType> {
    const endpoint = `likechain/likenft/v1/blind_box_contents/${params.classId}/${params.id}`;
    return await this.req.get<QueryBlindBoxContentResponseSDKType>(endpoint);
  }
  /* Queries a list of BlindBoxContent items. */
  async blindBoxContentIndex(params: QueryBlindBoxContentIndexRequest = {
    pagination: undefined
  }): Promise<QueryBlindBoxContentIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/blind_box_contents`;
    return await this.req.get<QueryBlindBoxContentIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a list of BlindBoxContents by class_id */
  async blindBoxContents(params: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/blind_box_contents/${params.classId}`;
    return await this.req.get<QueryBlindBoxContentsResponseSDKType>(endpoint, options);
  }
  /* Queries a Offer by index. */
  async offer(params: QueryOfferRequest): Promise<QueryOfferResponseSDKType> {
    const endpoint = `likechain/likenft/v1/offers/${params.classId}/${params.nftId}/${params.buyer}`;
    return await this.req.get<QueryOfferResponseSDKType>(endpoint);
  }
  /* Queries a list of Offer items. */
  async offerIndex(params: QueryOfferIndexRequest = {
    pagination: undefined
  }): Promise<QueryOfferIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/offers`;
    return await this.req.get<QueryOfferIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a list of OffersByClass items. */
  async offersByClass(params: QueryOffersByClassRequest): Promise<QueryOffersByClassResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/offers/${params.classId}`;
    return await this.req.get<QueryOffersByClassResponseSDKType>(endpoint, options);
  }
  /* Queries a list of OffersByNFT items. */
  async offersByNFT(params: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/offers/${params.classId}/${params.nftId}`;
    return await this.req.get<QueryOffersByNFTResponseSDKType>(endpoint, options);
  }
  /* Queries a Listing by index. */
  async listing(params: QueryListingRequest): Promise<QueryListingResponseSDKType> {
    const endpoint = `likechain/likenft/v1/listings/${params.classId}/${params.nftId}/${params.seller}`;
    return await this.req.get<QueryListingResponseSDKType>(endpoint);
  }
  /* Queries a list of Listing items. */
  async listingIndex(params: QueryListingIndexRequest = {
    pagination: undefined
  }): Promise<QueryListingIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/listings`;
    return await this.req.get<QueryListingIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Listing items by class */
  async listingsByClass(params: QueryListingsByClassRequest): Promise<QueryListingsByClassResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/listings/${params.classId}`;
    return await this.req.get<QueryListingsByClassResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Listing items by nft */
  async listingsByNFT(params: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/listings/${params.classId}/${params.nftId}`;
    return await this.req.get<QueryListingsByNFTResponseSDKType>(endpoint, options);
  }
  /* Queries a RoyaltyConfig by class */
  async royaltyConfig(params: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponseSDKType> {
    const endpoint = `likechain/likenft/v1/royalty_configs/${params.classId}`;
    return await this.req.get<QueryRoyaltyConfigResponseSDKType>(endpoint);
  }
  /* Queries index of RoyaltyConfig of all classes */
  async royaltyConfigIndex(params: QueryRoyaltyConfigIndexRequest = {
    pagination: undefined
  }): Promise<QueryRoyaltyConfigIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `likechain/likenft/v1/royalty_configs`;
    return await this.req.get<QueryRoyaltyConfigIndexResponseSDKType>(endpoint, options);
  }
}