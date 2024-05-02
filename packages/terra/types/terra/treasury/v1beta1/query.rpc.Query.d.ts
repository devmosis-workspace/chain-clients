import { Rpc } from "../../../helpers";
import { QueryTaxRateRequest, QueryTaxRateResponse, QueryTaxCapRequest, QueryTaxCapResponse, QueryTaxCapsRequest, QueryTaxCapsResponse, QueryRewardWeightRequest, QueryRewardWeightResponse, QuerySeigniorageProceedsRequest, QuerySeigniorageProceedsResponse, QueryTaxProceedsRequest, QueryTaxProceedsResponse, QueryIndicatorsRequest, QueryIndicatorsResponse, QueryBurnTaxExemptionListRequest, QueryBurnTaxExemptionListResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TaxRate return the current tax rate */
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    /** TaxCap returns the tax cap of a denom */
    taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse>;
    /** TaxCaps returns the all tax caps */
    taxCaps(request?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponse>;
    /** RewardWeight return the current reward weight */
    rewardWeight(request?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponse>;
    /** SeigniorageProceeds return the current seigniorage proceeds */
    seigniorageProceeds(request?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponse>;
    /** TaxProceeds return the current tax proceeds */
    taxProceeds(request?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponse>;
    /** Indicators return the current trl informations */
    indicators(request?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponse>;
    /** BurnTaxExemptionList returns all registered burn tax exemption addresses */
    burnTaxExemptionList(request?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse>;
    taxCaps(request?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponse>;
    rewardWeight(request?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponse>;
    seigniorageProceeds(request?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponse>;
    taxProceeds(request?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponse>;
    indicators(request?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponse>;
    burnTaxExemptionList(request?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
    taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse>;
    taxCaps(request?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponse>;
    rewardWeight(request?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponse>;
    seigniorageProceeds(request?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponse>;
    taxProceeds(request?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponse>;
    indicators(request?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponse>;
    burnTaxExemptionList(request?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
