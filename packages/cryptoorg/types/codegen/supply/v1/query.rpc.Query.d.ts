import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { SupplyRequest, SupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** TotalSupply queries the total supply of all coins. */
    totalSupply(request?: SupplyRequest): Promise<SupplyResponse>;
    /** LiquidSupply queries the liquid supply of all coins. */
    liquidSupply(request?: SupplyRequest): Promise<SupplyResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    totalSupply(request?: SupplyRequest): Promise<SupplyResponse>;
    liquidSupply(request?: SupplyRequest): Promise<SupplyResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    totalSupply(request?: SupplyRequest): Promise<SupplyResponse>;
    liquidSupply(request?: SupplyRequest): Promise<SupplyResponse>;
};
