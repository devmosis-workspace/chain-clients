import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGasPricesRequest, QueryGasPricesResponse, QueryUpgradePlanRequest, QueryUpgradePlanResponse } from "./query";
export interface Query {
    gasPrices(request?: QueryGasPricesRequest): Promise<QueryGasPricesResponse>;
    upgradePlan(request?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    gasPrices(request?: QueryGasPricesRequest): Promise<QueryGasPricesResponse>;
    upgradePlan(request?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    gasPrices(request?: QueryGasPricesRequest): Promise<QueryGasPricesResponse>;
    upgradePlan(request?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponse>;
};
