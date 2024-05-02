import { LCDClient } from "@cosmology/lcd";
import { QueryPoolRequest, QueryPoolResponseSDKType, QuerySponsorRequest, QuerySponsorResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryPoolPurchaseListsRequest, QueryPurchaseListsResponseSDKType, QueryPurchaseListsRequest, QueryPurchaseListRequest, QueryPurchaseListResponseSDKType, QueryPurchasesRequest, QueryPurchasesResponseSDKType, QueryProviderRequest, QueryProviderResponseSDKType, QueryProvidersRequest, QueryProvidersResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryClaimParamsRequest, QueryClaimParamsResponseSDKType, QueryDistrParamsRequest, QueryDistrParamsResponseSDKType, QueryShieldStatusRequest, QueryShieldStatusResponseSDKType, QueryShieldStakingRequest, QueryShieldStakingResponseSDKType, QueryShieldStakingRateRequest, QueryShieldStakingRateResponseSDKType, QueryReimbursementRequest, QueryReimbursementResponseSDKType, QueryReimbursementsRequest, QueryReimbursementsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Pool */
  async pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/pool/${params.poolId}`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  }
  /* Sponsor */
  async sponsor(params: QuerySponsorRequest): Promise<QuerySponsorResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/sponsor/${params.sponsor}`;
    return await this.req.get<QuerySponsorResponseSDKType>(endpoint);
  }
  /* Pools */
  async pools(_params: QueryPoolsRequest = {}): Promise<QueryPoolsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint);
  }
  /* PoolPurchaseLists */
  async poolPurchaseLists(params: QueryPoolPurchaseListsRequest): Promise<QueryPurchaseListsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/pool_purchase_lists/${params.poolId}`;
    return await this.req.get<QueryPurchaseListsResponseSDKType>(endpoint);
  }
  /* PurchaseLists */
  async purchaseLists(params: QueryPurchaseListsRequest): Promise<QueryPurchaseListsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/purchase_lists/${params.purchaser}`;
    return await this.req.get<QueryPurchaseListsResponseSDKType>(endpoint);
  }
  /* PurchaseList */
  async purchaseList(params: QueryPurchaseListRequest): Promise<QueryPurchaseListResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/purchase_list/${params.poolId}/${params.purchaser}`;
    return await this.req.get<QueryPurchaseListResponseSDKType>(endpoint);
  }
  /* Purchases */
  async purchases(_params: QueryPurchasesRequest = {}): Promise<QueryPurchasesResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/purchases`;
    return await this.req.get<QueryPurchasesResponseSDKType>(endpoint);
  }
  /* Provider */
  async provider(params: QueryProviderRequest): Promise<QueryProviderResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/provider/${params.address}`;
    return await this.req.get<QueryProviderResponseSDKType>(endpoint);
  }
  /* Providers */
  async providers(_params: QueryProvidersRequest = {}): Promise<QueryProvidersResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/providers`;
    return await this.req.get<QueryProvidersResponseSDKType>(endpoint);
  }
  /* PoolParams */
  async poolParams(_params: QueryPoolParamsRequest = {}): Promise<QueryPoolParamsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/pool_params`;
    return await this.req.get<QueryPoolParamsResponseSDKType>(endpoint);
  }
  /* ClaimParams */
  async claimParams(_params: QueryClaimParamsRequest = {}): Promise<QueryClaimParamsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/claim_params`;
    return await this.req.get<QueryClaimParamsResponseSDKType>(endpoint);
  }
  /* DistrParams */
  async distrParams(_params: QueryDistrParamsRequest = {}): Promise<QueryDistrParamsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/distr_params`;
    return await this.req.get<QueryDistrParamsResponseSDKType>(endpoint);
  }
  /* ShieldStatus */
  async shieldStatus(_params: QueryShieldStatusRequest = {}): Promise<QueryShieldStatusResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/status`;
    return await this.req.get<QueryShieldStatusResponseSDKType>(endpoint);
  }
  /* ShieldStaking */
  async shieldStaking(params: QueryShieldStakingRequest): Promise<QueryShieldStakingResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/shield_staking/${params.poolId}/${params.purchaser}`;
    return await this.req.get<QueryShieldStakingResponseSDKType>(endpoint);
  }
  /* ShieldStakingRate */
  async shieldStakingRate(_params: QueryShieldStakingRateRequest = {}): Promise<QueryShieldStakingRateResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/shield_staking_rate`;
    return await this.req.get<QueryShieldStakingRateResponseSDKType>(endpoint);
  }
  /* Reimbursement */
  async reimbursement(params: QueryReimbursementRequest): Promise<QueryReimbursementResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/proposal/${params.proposalId}/reimbursement`;
    return await this.req.get<QueryReimbursementResponseSDKType>(endpoint);
  }
  /* Reimbursements */
  async reimbursements(_params: QueryReimbursementsRequest = {}): Promise<QueryReimbursementsResponseSDKType> {
    const endpoint = `shentu/shield/v1alpha1/reimbursements`;
    return await this.req.get<QueryReimbursementsResponseSDKType>(endpoint);
  }
}