import { LCDClient } from "@cosmology/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesResponseSDKType, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfResponseSDKType, QueryTotalSupplyWithoutOffsetRequest, QueryTotalSupplyWithoutOffsetResponseSDKType, QuerySupplyOfWithoutOffsetRequest, QuerySupplyOfWithoutOffsetResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersResponseSDKType, QuerySendEnabledRequest, QuerySendEnabledResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    balance(params: QueryBalanceRequest): Promise<QueryBalanceResponseSDKType>;
    allBalances(params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponseSDKType>;
    spendableBalances(params: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponseSDKType>;
    spendableBalanceByDenom(params: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponseSDKType>;
    totalSupply(params?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponseSDKType>;
    supplyOf(params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponseSDKType>;
    totalSupplyWithoutOffset(params?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponseSDKType>;
    supplyOfWithoutOffset(params: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType>;
    denomsMetadata(params?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponseSDKType>;
    denomOwners(params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponseSDKType>;
    sendEnabled(params: QuerySendEnabledRequest): Promise<QuerySendEnabledResponseSDKType>;
}
