import { LCDClient } from "@cosmology/lcd";
import { QueryTaxRateRequest, QueryTaxRateResponseSDKType, QueryTaxCapRequest, QueryTaxCapResponseSDKType, QueryTaxCapsRequest, QueryTaxCapsResponseSDKType, QueryRewardWeightRequest, QueryRewardWeightResponseSDKType, QuerySeigniorageProceedsRequest, QuerySeigniorageProceedsResponseSDKType, QueryTaxProceedsRequest, QueryTaxProceedsResponseSDKType, QueryIndicatorsRequest, QueryIndicatorsResponseSDKType, QueryBurnTaxExemptionListRequest, QueryBurnTaxExemptionListResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    taxRate(_params?: QueryTaxRateRequest): Promise<QueryTaxRateResponseSDKType>;
    taxCap(params: QueryTaxCapRequest): Promise<QueryTaxCapResponseSDKType>;
    taxCaps(_params?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponseSDKType>;
    rewardWeight(_params?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponseSDKType>;
    seigniorageProceeds(_params?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponseSDKType>;
    taxProceeds(_params?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponseSDKType>;
    indicators(_params?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponseSDKType>;
    burnTaxExemptionList(params?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
