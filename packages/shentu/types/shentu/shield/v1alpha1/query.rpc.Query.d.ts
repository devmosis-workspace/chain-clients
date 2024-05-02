import { Rpc } from "../../../helpers";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
export declare const createRpcQueryExtension: (base: QueryClient) => {
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
};
