import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  classesByISCN(request: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponse> {
    const data = QueryClassesByISCNRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ClassesByISCN", data);
    return promise.then(data => QueryClassesByISCNResponse.decode(new _m0.Reader(data)));
  }
  classesByISCNIndex(request: QueryClassesByISCNIndexRequest = {
    pagination: undefined
  }): Promise<QueryClassesByISCNIndexResponse> {
    const data = QueryClassesByISCNIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ClassesByISCNIndex", data);
    return promise.then(data => QueryClassesByISCNIndexResponse.decode(new _m0.Reader(data)));
  }
  iSCNByClass(request: QueryISCNByClassRequest): Promise<QueryISCNByClassResponse> {
    const data = QueryISCNByClassRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ISCNByClass", data);
    return promise.then(data => QueryISCNByClassResponse.decode(new _m0.Reader(data)));
  }
  classesByAccount(request: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponse> {
    const data = QueryClassesByAccountRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ClassesByAccount", data);
    return promise.then(data => QueryClassesByAccountResponse.decode(new _m0.Reader(data)));
  }
  classesByAccountIndex(request: QueryClassesByAccountIndexRequest = {
    pagination: undefined
  }): Promise<QueryClassesByAccountIndexResponse> {
    const data = QueryClassesByAccountIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ClassesByAccountIndex", data);
    return promise.then(data => QueryClassesByAccountIndexResponse.decode(new _m0.Reader(data)));
  }
  accountByClass(request: QueryAccountByClassRequest): Promise<QueryAccountByClassResponse> {
    const data = QueryAccountByClassRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "AccountByClass", data);
    return promise.then(data => QueryAccountByClassResponse.decode(new _m0.Reader(data)));
  }
  blindBoxContent(request: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponse> {
    const data = QueryBlindBoxContentRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "BlindBoxContent", data);
    return promise.then(data => QueryBlindBoxContentResponse.decode(new _m0.Reader(data)));
  }
  blindBoxContentIndex(request: QueryBlindBoxContentIndexRequest = {
    pagination: undefined
  }): Promise<QueryBlindBoxContentIndexResponse> {
    const data = QueryBlindBoxContentIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "BlindBoxContentIndex", data);
    return promise.then(data => QueryBlindBoxContentIndexResponse.decode(new _m0.Reader(data)));
  }
  blindBoxContents(request: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponse> {
    const data = QueryBlindBoxContentsRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "BlindBoxContents", data);
    return promise.then(data => QueryBlindBoxContentsResponse.decode(new _m0.Reader(data)));
  }
  offer(request: QueryOfferRequest): Promise<QueryOfferResponse> {
    const data = QueryOfferRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "Offer", data);
    return promise.then(data => QueryOfferResponse.decode(new _m0.Reader(data)));
  }
  offerIndex(request: QueryOfferIndexRequest = {
    pagination: undefined
  }): Promise<QueryOfferIndexResponse> {
    const data = QueryOfferIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "OfferIndex", data);
    return promise.then(data => QueryOfferIndexResponse.decode(new _m0.Reader(data)));
  }
  offersByClass(request: QueryOffersByClassRequest): Promise<QueryOffersByClassResponse> {
    const data = QueryOffersByClassRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "OffersByClass", data);
    return promise.then(data => QueryOffersByClassResponse.decode(new _m0.Reader(data)));
  }
  offersByNFT(request: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponse> {
    const data = QueryOffersByNFTRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "OffersByNFT", data);
    return promise.then(data => QueryOffersByNFTResponse.decode(new _m0.Reader(data)));
  }
  listing(request: QueryListingRequest): Promise<QueryListingResponse> {
    const data = QueryListingRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "Listing", data);
    return promise.then(data => QueryListingResponse.decode(new _m0.Reader(data)));
  }
  listingIndex(request: QueryListingIndexRequest = {
    pagination: undefined
  }): Promise<QueryListingIndexResponse> {
    const data = QueryListingIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ListingIndex", data);
    return promise.then(data => QueryListingIndexResponse.decode(new _m0.Reader(data)));
  }
  listingsByClass(request: QueryListingsByClassRequest): Promise<QueryListingsByClassResponse> {
    const data = QueryListingsByClassRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ListingsByClass", data);
    return promise.then(data => QueryListingsByClassResponse.decode(new _m0.Reader(data)));
  }
  listingsByNFT(request: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponse> {
    const data = QueryListingsByNFTRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "ListingsByNFT", data);
    return promise.then(data => QueryListingsByNFTResponse.decode(new _m0.Reader(data)));
  }
  royaltyConfig(request: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponse> {
    const data = QueryRoyaltyConfigRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "RoyaltyConfig", data);
    return promise.then(data => QueryRoyaltyConfigResponse.decode(new _m0.Reader(data)));
  }
  royaltyConfigIndex(request: QueryRoyaltyConfigIndexRequest = {
    pagination: undefined
  }): Promise<QueryRoyaltyConfigIndexResponse> {
    const data = QueryRoyaltyConfigIndexRequest.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Query", "RoyaltyConfigIndex", data);
    return promise.then(data => QueryRoyaltyConfigIndexResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    classesByISCN(request: QueryClassesByISCNRequest): Promise<QueryClassesByISCNResponse> {
      return queryService.classesByISCN(request);
    },
    classesByISCNIndex(request?: QueryClassesByISCNIndexRequest): Promise<QueryClassesByISCNIndexResponse> {
      return queryService.classesByISCNIndex(request);
    },
    iSCNByClass(request: QueryISCNByClassRequest): Promise<QueryISCNByClassResponse> {
      return queryService.iSCNByClass(request);
    },
    classesByAccount(request: QueryClassesByAccountRequest): Promise<QueryClassesByAccountResponse> {
      return queryService.classesByAccount(request);
    },
    classesByAccountIndex(request?: QueryClassesByAccountIndexRequest): Promise<QueryClassesByAccountIndexResponse> {
      return queryService.classesByAccountIndex(request);
    },
    accountByClass(request: QueryAccountByClassRequest): Promise<QueryAccountByClassResponse> {
      return queryService.accountByClass(request);
    },
    blindBoxContent(request: QueryBlindBoxContentRequest): Promise<QueryBlindBoxContentResponse> {
      return queryService.blindBoxContent(request);
    },
    blindBoxContentIndex(request?: QueryBlindBoxContentIndexRequest): Promise<QueryBlindBoxContentIndexResponse> {
      return queryService.blindBoxContentIndex(request);
    },
    blindBoxContents(request: QueryBlindBoxContentsRequest): Promise<QueryBlindBoxContentsResponse> {
      return queryService.blindBoxContents(request);
    },
    offer(request: QueryOfferRequest): Promise<QueryOfferResponse> {
      return queryService.offer(request);
    },
    offerIndex(request?: QueryOfferIndexRequest): Promise<QueryOfferIndexResponse> {
      return queryService.offerIndex(request);
    },
    offersByClass(request: QueryOffersByClassRequest): Promise<QueryOffersByClassResponse> {
      return queryService.offersByClass(request);
    },
    offersByNFT(request: QueryOffersByNFTRequest): Promise<QueryOffersByNFTResponse> {
      return queryService.offersByNFT(request);
    },
    listing(request: QueryListingRequest): Promise<QueryListingResponse> {
      return queryService.listing(request);
    },
    listingIndex(request?: QueryListingIndexRequest): Promise<QueryListingIndexResponse> {
      return queryService.listingIndex(request);
    },
    listingsByClass(request: QueryListingsByClassRequest): Promise<QueryListingsByClassResponse> {
      return queryService.listingsByClass(request);
    },
    listingsByNFT(request: QueryListingsByNFTRequest): Promise<QueryListingsByNFTResponse> {
      return queryService.listingsByNFT(request);
    },
    royaltyConfig(request: QueryRoyaltyConfigRequest): Promise<QueryRoyaltyConfigResponse> {
      return queryService.royaltyConfig(request);
    },
    royaltyConfigIndex(request?: QueryRoyaltyConfigIndexRequest): Promise<QueryRoyaltyConfigIndexResponse> {
      return queryService.royaltyConfigIndex(request);
    }
  };
};