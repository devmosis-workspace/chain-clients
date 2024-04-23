import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetRollappRequest, QueryGetRollappResponse, QueryGetRollappByEIP155Request, QueryAllRollappRequest, QueryAllRollappResponse, QueryGetLatestStateIndexRequest, QueryGetLatestStateIndexResponse, QueryGetStateInfoRequest, QueryGetStateInfoResponse, QueryAllStateInfoRequest, QueryAllStateInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Rollapp by index. */
    rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse>;
    /** Queries a Rollapp by index. */
    rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse>;
    /** Queries a list of Rollapp items. */
    rollappAll(request?: QueryAllRollappRequest): Promise<QueryAllRollappResponse>;
    /** Queries a LatestStateIndex by rollapp-id. */
    latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse>;
    /** Queries a StateInfo by index. */
    stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse>;
    /** Queries a list of StateInfo items. */
    stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse>;
    rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse>;
    rollappAll(request?: QueryAllRollappRequest): Promise<QueryAllRollappResponse>;
    latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse>;
    stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse>;
    stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse>;
    rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse>;
    rollappAll(request?: QueryAllRollappRequest): Promise<QueryAllRollappResponse>;
    latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse>;
    stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse>;
    stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse>;
};
