import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves insurance params */
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
    /** Retrieves individual insurance fund information from market id */
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    /** Retrieves all insurance funds */
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
    /**
     * Retrives the value of insurance fund share token at current price (not
     * pending redemption)
     */
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
    /** Retrieves pending redemptions' share token at current price */
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
    /** Retrieves the entire insurance module's state */
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
};
