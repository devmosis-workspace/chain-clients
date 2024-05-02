import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryPoolRequest, QueryPoolResponse, QuerySponsorRequest, QuerySponsorResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPoolPurchaseListsRequest, QueryPurchaseListsResponse, QueryPurchaseListsRequest, QueryPurchaseListRequest, QueryPurchaseListResponse, QueryPurchasesRequest, QueryPurchasesResponse, QueryProviderRequest, QueryProviderResponse, QueryProvidersRequest, QueryProvidersResponse, QueryPoolParamsRequest, QueryPoolParamsResponse, QueryClaimParamsRequest, QueryClaimParamsResponse, QueryDistrParamsRequest, QueryDistrParamsResponse, QueryShieldStatusRequest, QueryShieldStatusResponse, QueryShieldStakingRequest, QueryShieldStakingResponse, QueryShieldStakingRateRequest, QueryShieldStakingRateResponse, QueryReimbursementRequest, QueryReimbursementResponse, QueryReimbursementsRequest, QueryReimbursementsResponse } from "./query";
/** Query defines the gRPC querier service for shield module */
export interface Query {
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  sponsor(request: QuerySponsorRequest): Promise<QuerySponsorResponse>;
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  poolPurchaseLists(request: QueryPoolPurchaseListsRequest): Promise<QueryPurchaseListsResponse>;
  purchaseLists(request: QueryPurchaseListsRequest): Promise<QueryPurchaseListsResponse>;
  purchaseList(request: QueryPurchaseListRequest): Promise<QueryPurchaseListResponse>;
  purchases(request?: QueryPurchasesRequest): Promise<QueryPurchasesResponse>;
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
  providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  poolParams(request?: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  claimParams(request?: QueryClaimParamsRequest): Promise<QueryClaimParamsResponse>;
  distrParams(request?: QueryDistrParamsRequest): Promise<QueryDistrParamsResponse>;
  shieldStatus(request?: QueryShieldStatusRequest): Promise<QueryShieldStatusResponse>;
  shieldStaking(request: QueryShieldStakingRequest): Promise<QueryShieldStakingResponse>;
  shieldStakingRate(request?: QueryShieldStakingRateRequest): Promise<QueryShieldStakingRateResponse>;
  reimbursement(request: QueryReimbursementRequest): Promise<QueryReimbursementResponse>;
  reimbursements(request?: QueryReimbursementsRequest): Promise<QueryReimbursementsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pool = this.pool.bind(this);
    this.sponsor = this.sponsor.bind(this);
    this.pools = this.pools.bind(this);
    this.poolPurchaseLists = this.poolPurchaseLists.bind(this);
    this.purchaseLists = this.purchaseLists.bind(this);
    this.purchaseList = this.purchaseList.bind(this);
    this.purchases = this.purchases.bind(this);
    this.provider = this.provider.bind(this);
    this.providers = this.providers.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.claimParams = this.claimParams.bind(this);
    this.distrParams = this.distrParams.bind(this);
    this.shieldStatus = this.shieldStatus.bind(this);
    this.shieldStaking = this.shieldStaking.bind(this);
    this.shieldStakingRate = this.shieldStakingRate.bind(this);
    this.reimbursement = this.reimbursement.bind(this);
    this.reimbursements = this.reimbursements.bind(this);
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  sponsor(request: QuerySponsorRequest): Promise<QuerySponsorResponse> {
    const data = QuerySponsorRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Sponsor", data);
    return promise.then(data => QuerySponsorResponse.decode(new BinaryReader(data)));
  }
  pools(request: QueryPoolsRequest = {}): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new BinaryReader(data)));
  }
  poolPurchaseLists(request: QueryPoolPurchaseListsRequest): Promise<QueryPurchaseListsResponse> {
    const data = QueryPoolPurchaseListsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "PoolPurchaseLists", data);
    return promise.then(data => QueryPurchaseListsResponse.decode(new BinaryReader(data)));
  }
  purchaseLists(request: QueryPurchaseListsRequest): Promise<QueryPurchaseListsResponse> {
    const data = QueryPurchaseListsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "PurchaseLists", data);
    return promise.then(data => QueryPurchaseListsResponse.decode(new BinaryReader(data)));
  }
  purchaseList(request: QueryPurchaseListRequest): Promise<QueryPurchaseListResponse> {
    const data = QueryPurchaseListRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "PurchaseList", data);
    return promise.then(data => QueryPurchaseListResponse.decode(new BinaryReader(data)));
  }
  purchases(request: QueryPurchasesRequest = {}): Promise<QueryPurchasesResponse> {
    const data = QueryPurchasesRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Purchases", data);
    return promise.then(data => QueryPurchasesResponse.decode(new BinaryReader(data)));
  }
  provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Provider", data);
    return promise.then(data => QueryProviderResponse.decode(new BinaryReader(data)));
  }
  providers(request: QueryProvidersRequest = {}): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Providers", data);
    return promise.then(data => QueryProvidersResponse.decode(new BinaryReader(data)));
  }
  poolParams(request: QueryPoolParamsRequest = {}): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "PoolParams", data);
    return promise.then(data => QueryPoolParamsResponse.decode(new BinaryReader(data)));
  }
  claimParams(request: QueryClaimParamsRequest = {}): Promise<QueryClaimParamsResponse> {
    const data = QueryClaimParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "ClaimParams", data);
    return promise.then(data => QueryClaimParamsResponse.decode(new BinaryReader(data)));
  }
  distrParams(request: QueryDistrParamsRequest = {}): Promise<QueryDistrParamsResponse> {
    const data = QueryDistrParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "DistrParams", data);
    return promise.then(data => QueryDistrParamsResponse.decode(new BinaryReader(data)));
  }
  shieldStatus(request: QueryShieldStatusRequest = {}): Promise<QueryShieldStatusResponse> {
    const data = QueryShieldStatusRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "ShieldStatus", data);
    return promise.then(data => QueryShieldStatusResponse.decode(new BinaryReader(data)));
  }
  shieldStaking(request: QueryShieldStakingRequest): Promise<QueryShieldStakingResponse> {
    const data = QueryShieldStakingRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "ShieldStaking", data);
    return promise.then(data => QueryShieldStakingResponse.decode(new BinaryReader(data)));
  }
  shieldStakingRate(request: QueryShieldStakingRateRequest = {}): Promise<QueryShieldStakingRateResponse> {
    const data = QueryShieldStakingRateRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "ShieldStakingRate", data);
    return promise.then(data => QueryShieldStakingRateResponse.decode(new BinaryReader(data)));
  }
  reimbursement(request: QueryReimbursementRequest): Promise<QueryReimbursementResponse> {
    const data = QueryReimbursementRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Reimbursement", data);
    return promise.then(data => QueryReimbursementResponse.decode(new BinaryReader(data)));
  }
  reimbursements(request: QueryReimbursementsRequest = {}): Promise<QueryReimbursementsResponse> {
    const data = QueryReimbursementsRequest.encode(request).finish();
    const promise = this.rpc.request("shentu.shield.v1alpha1.Query", "Reimbursements", data);
    return promise.then(data => QueryReimbursementsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    sponsor(request: QuerySponsorRequest): Promise<QuerySponsorResponse> {
      return queryService.sponsor(request);
    },
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    poolPurchaseLists(request: QueryPoolPurchaseListsRequest): Promise<QueryPurchaseListsResponse> {
      return queryService.poolPurchaseLists(request);
    },
    purchaseLists(request: QueryPurchaseListsRequest): Promise<QueryPurchaseListsResponse> {
      return queryService.purchaseLists(request);
    },
    purchaseList(request: QueryPurchaseListRequest): Promise<QueryPurchaseListResponse> {
      return queryService.purchaseList(request);
    },
    purchases(request?: QueryPurchasesRequest): Promise<QueryPurchasesResponse> {
      return queryService.purchases(request);
    },
    provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
      return queryService.provider(request);
    },
    providers(request?: QueryProvidersRequest): Promise<QueryProvidersResponse> {
      return queryService.providers(request);
    },
    poolParams(request?: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
      return queryService.poolParams(request);
    },
    claimParams(request?: QueryClaimParamsRequest): Promise<QueryClaimParamsResponse> {
      return queryService.claimParams(request);
    },
    distrParams(request?: QueryDistrParamsRequest): Promise<QueryDistrParamsResponse> {
      return queryService.distrParams(request);
    },
    shieldStatus(request?: QueryShieldStatusRequest): Promise<QueryShieldStatusResponse> {
      return queryService.shieldStatus(request);
    },
    shieldStaking(request: QueryShieldStakingRequest): Promise<QueryShieldStakingResponse> {
      return queryService.shieldStaking(request);
    },
    shieldStakingRate(request?: QueryShieldStakingRateRequest): Promise<QueryShieldStakingRateResponse> {
      return queryService.shieldStakingRate(request);
    },
    reimbursement(request: QueryReimbursementRequest): Promise<QueryReimbursementResponse> {
      return queryService.reimbursement(request);
    },
    reimbursements(request?: QueryReimbursementsRequest): Promise<QueryReimbursementsResponse> {
      return queryService.reimbursements(request);
    }
  };
};