import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryCellarIDsByChainIDRequest, QueryCellarIDsByChainIDResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponseSDKType, QueryCorkResultRequest, QueryCorkResultResponseSDKType, QueryCorkResultsRequest, QueryCorkResultsResponseSDKType, QueryChainConfigurationsRequest, QueryChainConfigurationsResponseSDKType, QueryAxelarContractCallNoncesRequest, QueryAxelarContractCallNoncesResponseSDKType, QueryAxelarProxyUpgradeDataRequest, QueryAxelarProxyUpgradeDataResponseSDKType, QueryWinningAxelarCorkRequest, QueryWinningAxelarCorkResponseSDKType, QueryWinningAxelarCorksRequest, QueryWinningAxelarCorksResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    queryParams(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    queryCellarIDs(_params?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponseSDKType>;
    queryCellarIDsByChainID(params: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponseSDKType>;
    queryScheduledCorks(params: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponseSDKType>;
    queryScheduledBlockHeights(params: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponseSDKType>;
    queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType>;
    queryScheduledCorksByID(params: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponseSDKType>;
    queryCorkResult(params: QueryCorkResultRequest): Promise<QueryCorkResultResponseSDKType>;
    queryCorkResults(params: QueryCorkResultsRequest): Promise<QueryCorkResultsResponseSDKType>;
    queryChainConfigurations(_params?: QueryChainConfigurationsRequest): Promise<QueryChainConfigurationsResponseSDKType>;
    queryAxelarContractCallNonces(_params?: QueryAxelarContractCallNoncesRequest): Promise<QueryAxelarContractCallNoncesResponseSDKType>;
    queryAxelarProxyUpgradeData(_params?: QueryAxelarProxyUpgradeDataRequest): Promise<QueryAxelarProxyUpgradeDataResponseSDKType>;
    queryWinningAxelarCork(params: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponseSDKType>;
    queryWinningAxelarCorks(params: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponseSDKType>;
}
