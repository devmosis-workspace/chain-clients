import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCellarIDsRequest, QueryCellarIDsResponse, QueryScheduledCorksRequest, QueryScheduledCorksResponse, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponse, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponse, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponse, QueryCorkResultRequest, QueryCorkResultResponse, QueryCorkResultsRequest, QueryCorkResultsResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
  /** QueryParams queries the allocation module parameters. */
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QueryCellarIDs returns all cellars and current tick ranges */
  queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
  /** QueryScheduledCorks returns all scheduled corks */
  queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
  /** QueryScheduledBlockHeights returns all scheduled block heights */
  queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
  /** QueryScheduledCorks returns all scheduled corks at a block height */
  queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
  /** QueryScheduledCorks returns all scheduled corks with the specified ID */
  queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse>;
  queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse>;
  queryCorkResults(request?: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryCellarIDs = this.queryCellarIDs.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
    this.queryScheduledCorksByID = this.queryScheduledCorksByID.bind(this);
    this.queryCorkResult = this.queryCorkResult.bind(this);
    this.queryCorkResults = this.queryCorkResults.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryCellarIDs(request: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponse> {
    const data = QueryCellarIDsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryCellarIDs", data);
    return promise.then(data => QueryCellarIDsResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorks(request: QueryScheduledCorksRequest = {}): Promise<QueryScheduledCorksResponse> {
    const data = QueryScheduledCorksRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryScheduledCorks", data);
    return promise.then(data => QueryScheduledCorksResponse.decode(new BinaryReader(data)));
  }
  queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest = {}): Promise<QueryScheduledBlockHeightsResponse> {
    const data = QueryScheduledBlockHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryScheduledBlockHeights", data);
    return promise.then(data => QueryScheduledBlockHeightsResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse> {
    const data = QueryScheduledCorksByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryScheduledCorksByBlockHeight", data);
    return promise.then(data => QueryScheduledCorksByBlockHeightResponse.decode(new BinaryReader(data)));
  }
  queryScheduledCorksByID(request: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponse> {
    const data = QueryScheduledCorksByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryScheduledCorksByID", data);
    return promise.then(data => QueryScheduledCorksByIDResponse.decode(new BinaryReader(data)));
  }
  queryCorkResult(request: QueryCorkResultRequest): Promise<QueryCorkResultResponse> {
    const data = QueryCorkResultRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryCorkResult", data);
    return promise.then(data => QueryCorkResultResponse.decode(new BinaryReader(data)));
  }
  queryCorkResults(request: QueryCorkResultsRequest = {}): Promise<QueryCorkResultsResponse> {
    const data = QueryCorkResultsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Query", "QueryCorkResults", data);
    return promise.then(data => QueryCorkResultsResponse.decode(new BinaryReader(data)));
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
    queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse> {
      return queryService.queryScheduledCorks(request);
    },
    queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse> {
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
    queryCorkResults(request?: QueryCorkResultsRequest): Promise<QueryCorkResultsResponse> {
      return queryService.queryCorkResults(request);
    }
  };
};