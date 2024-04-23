import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCellarIDsRequest, QueryCellarIDsResponse, QueryCellarIDsByChainIDRequest, QueryCellarIDsByChainIDResponse, QueryScheduledCorksRequest, QueryScheduledCorksResponse, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponse, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponse, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponse, QueryCorkResultRequest, QueryCorkResultResponse, QueryCorkResultsRequest, QueryCorkResultsResponse, QueryChainConfigurationsRequest, QueryChainConfigurationsResponse, QueryAxelarContractCallNoncesRequest, QueryAxelarContractCallNoncesResponse, QueryAxelarProxyUpgradeDataRequest, QueryAxelarProxyUpgradeDataResponse, QueryWinningAxelarCorkRequest, QueryWinningAxelarCorkResponse, QueryWinningAxelarCorksRequest, QueryWinningAxelarCorksResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
    /** QueryParams queries the axelar cork module parameters. */
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** QueryCellarIDs queries approved cellar ids of all supported chains */
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    /** QueryCellarIDsByChainID returns all cellars and current tick ranges */
    queryCellarIDsByChainID(request: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponse>;
    /** QueryScheduledCorks returns all scheduled corks */
    queryScheduledCorks(request: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    /** QueryScheduledBlockHeights returns all scheduled block heights */
    queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    /** QueryScheduledCorks returns all scheduled corks at a block height */
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
    /** QueryScheduledCorks returns all scheduled corks with the specified ID */
    queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse>;
    queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse>;
    queryCorkResults(request: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse>;
    queryChainConfigurations(request?: QueryChainConfigurationsRequest): Promise<QueryChainConfigurationsResponse>;
    queryAxelarContractCallNonces(request?: QueryAxelarContractCallNoncesRequest): Promise<QueryAxelarContractCallNoncesResponse>;
    queryAxelarProxyUpgradeData(request?: QueryAxelarProxyUpgradeDataRequest): Promise<QueryAxelarProxyUpgradeDataResponse>;
    queryWinningAxelarCork(request: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponse>;
    queryWinningAxelarCorks(request: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    queryCellarIDsByChainID(request: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponse>;
    queryScheduledCorks(request: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
    queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse>;
    queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse>;
    queryCorkResults(request: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse>;
    queryChainConfigurations(request?: QueryChainConfigurationsRequest): Promise<QueryChainConfigurationsResponse>;
    queryAxelarContractCallNonces(request?: QueryAxelarContractCallNoncesRequest): Promise<QueryAxelarContractCallNoncesResponse>;
    queryAxelarProxyUpgradeData(request?: QueryAxelarProxyUpgradeDataRequest): Promise<QueryAxelarProxyUpgradeDataResponse>;
    queryWinningAxelarCork(request: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponse>;
    queryWinningAxelarCorks(request: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
    queryCellarIDsByChainID(request: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponse>;
    queryScheduledCorks(request: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
    queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
    queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse>;
    queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse>;
    queryCorkResults(request: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse>;
    queryChainConfigurations(request?: QueryChainConfigurationsRequest): Promise<QueryChainConfigurationsResponse>;
    queryAxelarContractCallNonces(request?: QueryAxelarContractCallNoncesRequest): Promise<QueryAxelarContractCallNoncesResponse>;
    queryAxelarProxyUpgradeData(request?: QueryAxelarProxyUpgradeDataRequest): Promise<QueryAxelarProxyUpgradeDataResponse>;
    queryWinningAxelarCork(request: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponse>;
    queryWinningAxelarCorks(request: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponse>;
};
