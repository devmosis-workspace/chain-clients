import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryMinGasPrice, QueryMinGasPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** MinGasPrice returns minimum transaction fees. */
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
};
