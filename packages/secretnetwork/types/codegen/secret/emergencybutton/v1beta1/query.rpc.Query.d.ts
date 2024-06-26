import { Rpc } from "../../../helpers";
import { ParamsRequest, ParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the emergencybutton module's
     * parameters.
     */
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
};
