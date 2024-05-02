import { LCDClient } from "@cosmology/lcd";
import { QueryPoolRequest, QueryPoolResponseSDKType, QuerySponsorRequest, QuerySponsorResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType, QueryPoolPurchaseListsRequest, QueryPurchaseListsResponseSDKType, QueryPurchaseListsRequest, QueryPurchaseListRequest, QueryPurchaseListResponseSDKType, QueryPurchasesRequest, QueryPurchasesResponseSDKType, QueryProviderRequest, QueryProviderResponseSDKType, QueryProvidersRequest, QueryProvidersResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryClaimParamsRequest, QueryClaimParamsResponseSDKType, QueryDistrParamsRequest, QueryDistrParamsResponseSDKType, QueryShieldStatusRequest, QueryShieldStatusResponseSDKType, QueryShieldStakingRequest, QueryShieldStakingResponseSDKType, QueryShieldStakingRateRequest, QueryShieldStakingRateResponseSDKType, QueryReimbursementRequest, QueryReimbursementResponseSDKType, QueryReimbursementsRequest, QueryReimbursementsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    sponsor(params: QuerySponsorRequest): Promise<QuerySponsorResponseSDKType>;
    pools(_params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    poolPurchaseLists(params: QueryPoolPurchaseListsRequest): Promise<QueryPurchaseListsResponseSDKType>;
    purchaseLists(params: QueryPurchaseListsRequest): Promise<QueryPurchaseListsResponseSDKType>;
    purchaseList(params: QueryPurchaseListRequest): Promise<QueryPurchaseListResponseSDKType>;
    purchases(_params?: QueryPurchasesRequest): Promise<QueryPurchasesResponseSDKType>;
    provider(params: QueryProviderRequest): Promise<QueryProviderResponseSDKType>;
    providers(_params?: QueryProvidersRequest): Promise<QueryProvidersResponseSDKType>;
    poolParams(_params?: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
    claimParams(_params?: QueryClaimParamsRequest): Promise<QueryClaimParamsResponseSDKType>;
    distrParams(_params?: QueryDistrParamsRequest): Promise<QueryDistrParamsResponseSDKType>;
    shieldStatus(_params?: QueryShieldStatusRequest): Promise<QueryShieldStatusResponseSDKType>;
    shieldStaking(params: QueryShieldStakingRequest): Promise<QueryShieldStakingResponseSDKType>;
    shieldStakingRate(_params?: QueryShieldStakingRateRequest): Promise<QueryShieldStakingRateResponseSDKType>;
    reimbursement(params: QueryReimbursementRequest): Promise<QueryReimbursementResponseSDKType>;
    reimbursements(_params?: QueryReimbursementsRequest): Promise<QueryReimbursementsResponseSDKType>;
}
