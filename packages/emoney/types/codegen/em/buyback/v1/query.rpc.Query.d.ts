import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryBuybackTimeRequest, QueryBuybackTimeResponse } from "./query";
export interface Query {
    /** Query for the current buyback balance */
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** Query for buyback time periods */
    buybackTime(request?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    buybackTime(request?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    buybackTime(request?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponse>;
};
