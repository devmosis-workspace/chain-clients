import { Rpc } from "../../../helpers";
import { QueryEthProphecyRequest, QueryEthProphecyResponse, QueryBlacklistRequest, QueryBlacklistResponse, QueryPauseRequest, QueryPauseResponse } from "./query";
/** Query service for queries */
export interface Query {
    /** EthProphecy queries an EthProphecy */
    ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse>;
    getBlacklist(request?: QueryBlacklistRequest): Promise<QueryBlacklistResponse>;
    getPauseStatus(request?: QueryPauseRequest): Promise<QueryPauseResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse>;
    getBlacklist(request?: QueryBlacklistRequest): Promise<QueryBlacklistResponse>;
    getPauseStatus(request?: QueryPauseRequest): Promise<QueryPauseResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse>;
    getBlacklist(request?: QueryBlacklistRequest): Promise<QueryBlacklistResponse>;
    getPauseStatus(request?: QueryPauseRequest): Promise<QueryPauseResponse>;
};
