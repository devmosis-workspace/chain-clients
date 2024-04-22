import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryCellarIDs = this.queryCellarIDs.bind(this);
    this.queryCellarIDsByChainID = this.queryCellarIDsByChainID.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
    this.queryScheduledCorksByID = this.queryScheduledCorksByID.bind(this);
    this.queryCorkResult = this.queryCorkResult.bind(this);
    this.queryCorkResults = this.queryCorkResults.bind(this);
    this.queryChainConfigurations = this.queryChainConfigurations.bind(this);
    this.queryAxelarContractCallNonces = this.queryAxelarContractCallNonces.bind(this);
    this.queryAxelarProxyUpgradeData = this.queryAxelarProxyUpgradeData.bind(this);
    this.queryWinningAxelarCork = this.queryWinningAxelarCork.bind(this);
    this.queryWinningAxelarCorks = this.queryWinningAxelarCorks.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryCellarIDs(request: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponse> {
    const data = QueryCellarIDsRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryCellarIDs", data);
    return promise.then(data => QueryCellarIDsResponse.decode(new BinaryReader(data)));
  }
  queryCellarIDsByChainID(request: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponse> {
    const data = QueryCellarIDsByChainIDRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryCellarIDsByChainID", data);
    return promise.then(data => QueryCellarIDsByChainIDResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorks(request: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse> {
    const data = QueryScheduledCorksRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryScheduledCorks", data);
    return promise.then(data => QueryScheduledCorksResponse.decode(new BinaryReader(data)));
  }
  queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse> {
    const data = QueryScheduledBlockHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryScheduledBlockHeights", data);
    return promise.then(data => QueryScheduledBlockHeightsResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse> {
    const data = QueryScheduledCorksByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryScheduledCorksByBlockHeight", data);
    return promise.then(data => QueryScheduledCorksByBlockHeightResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse> {
    const data = QueryScheduledCorksByIDRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryScheduledCorksByID", data);
    return promise.then(data => QueryScheduledCorksByIDResponse.decode(new BinaryReader(data)));
  }
  queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse> {
    const data = QueryCorkResultRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryCorkResult", data);
    return promise.then(data => QueryCorkResultResponse.decode(new BinaryReader(data)));
  }
  queryCorkResults(request: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse> {
    const data = QueryCorkResultsRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryCorkResults", data);
    return promise.then(data => QueryCorkResultsResponse.decode(new BinaryReader(data)));
  }
  queryChainConfigurations(request: QueryChainConfigurationsRequest = {}): Promise<QueryChainConfigurationsResponse> {
    const data = QueryChainConfigurationsRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryChainConfigurations", data);
    return promise.then(data => QueryChainConfigurationsResponse.decode(new BinaryReader(data)));
  }
  queryAxelarContractCallNonces(request: QueryAxelarContractCallNoncesRequest = {}): Promise<QueryAxelarContractCallNoncesResponse> {
    const data = QueryAxelarContractCallNoncesRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryAxelarContractCallNonces", data);
    return promise.then(data => QueryAxelarContractCallNoncesResponse.decode(new BinaryReader(data)));
  }
  queryAxelarProxyUpgradeData(request: QueryAxelarProxyUpgradeDataRequest = {}): Promise<QueryAxelarProxyUpgradeDataResponse> {
    const data = QueryAxelarProxyUpgradeDataRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryAxelarProxyUpgradeData", data);
    return promise.then(data => QueryAxelarProxyUpgradeDataResponse.decode(new BinaryReader(data)));
  }
  queryWinningAxelarCork(request: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponse> {
    const data = QueryWinningAxelarCorkRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryWinningAxelarCork", data);
    return promise.then(data => QueryWinningAxelarCorkResponse.decode(new BinaryReader(data)));
  }
  queryWinningAxelarCorks(request: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponse> {
    const data = QueryWinningAxelarCorksRequest.encode(request).finish();
    const promise = this.rpc.request("axelarcork.v1.Query", "QueryWinningAxelarCorks", data);
    return promise.then(data => QueryWinningAxelarCorksResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse> {
      return queryService.queryCellarIDs(request);
    },
    queryCellarIDsByChainID(request: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponse> {
      return queryService.queryCellarIDsByChainID(request);
    },
    queryScheduledCorks(request: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse> {
      return queryService.queryScheduledCorks(request);
    },
    queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse> {
      return queryService.queryScheduledBlockHeights(request);
    },
    queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse> {
      return queryService.queryScheduledCorksByBlockHeight(request);
    },
    queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse> {
      return queryService.queryScheduledCorksByID(request);
    },
    queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse> {
      return queryService.queryCorkResult(request);
    },
    queryCorkResults(request: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse> {
      return queryService.queryCorkResults(request);
    },
    queryChainConfigurations(request?: QueryChainConfigurationsRequest): Promise<QueryChainConfigurationsResponse> {
      return queryService.queryChainConfigurations(request);
    },
    queryAxelarContractCallNonces(request?: QueryAxelarContractCallNoncesRequest): Promise<QueryAxelarContractCallNoncesResponse> {
      return queryService.queryAxelarContractCallNonces(request);
    },
    queryAxelarProxyUpgradeData(request?: QueryAxelarProxyUpgradeDataRequest): Promise<QueryAxelarProxyUpgradeDataResponse> {
      return queryService.queryAxelarProxyUpgradeData(request);
    },
    queryWinningAxelarCork(request: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponse> {
      return queryService.queryWinningAxelarCork(request);
    },
    queryWinningAxelarCorks(request: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponse> {
      return queryService.queryWinningAxelarCorks(request);
    }
  };
};