import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySubmittedCorksRequest, QuerySubmittedCorksResponse, QueryCommitPeriodRequest, QueryCommitPeriodResponse, QueryCellarIDsRequest, QueryCellarIDsResponse, QueryScheduledCorksRequest, QueryScheduledCorksResponse, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponse, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponse } from "./query";
/** Query defines the gRPC query service for the cork module. */
export interface Query {
  /** QueryParams queries the allocation module parameters. */
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** QuerySubmittedCorks queries the submitted corks awaiting vote */
  querySubmittedCorks(request?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponse>;
  /** QueryCommitPeriod queries the heights for the current voting period (current, start and end) */
  queryCommitPeriod(request?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponse>;
  /** QueryCellarIDs returns all cellars and current tick ranges */
  queryCellarIDs(request?: QueryCellarIDsRequest): Promise<QueryCellarIDsResponse>;
  /** QueryScheduledCorks returns all scheduled corks */
  queryScheduledCorks(request?: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponse>;
  /** QueryScheduledBlockHeights returns all scheduled block heights */
  queryScheduledBlockHeights(request?: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponse>;
  /** QueryScheduledCorks returns all scheduled corks at a block height */
  queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.querySubmittedCorks = this.querySubmittedCorks.bind(this);
    this.queryCommitPeriod = this.queryCommitPeriod.bind(this);
    this.queryCellarIDs = this.queryCellarIDs.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  querySubmittedCorks(request: QuerySubmittedCorksRequest = {}): Promise<QuerySubmittedCorksResponse> {
    const data = QuerySubmittedCorksRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QuerySubmittedCorks", data);
    return promise.then(data => QuerySubmittedCorksResponse.decode(new _m0.Reader(data)));
  }
  queryCommitPeriod(request: QueryCommitPeriodRequest = {}): Promise<QueryCommitPeriodResponse> {
    const data = QueryCommitPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryCommitPeriod", data);
    return promise.then(data => QueryCommitPeriodResponse.decode(new _m0.Reader(data)));
  }
  queryCellarIDs(request: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponse> {
    const data = QueryCellarIDsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryCellarIDs", data);
    return promise.then(data => QueryCellarIDsResponse.decode(new _m0.Reader(data)));
  }
  queryScheduledCorks(request: QueryScheduledCorksRequest = {}): Promise<QueryScheduledCorksResponse> {
    const data = QueryScheduledCorksRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryScheduledCorks", data);
    return promise.then(data => QueryScheduledCorksResponse.decode(new _m0.Reader(data)));
  }
  queryScheduledBlockHeights(request: QueryScheduledBlockHeightsRequest = {}): Promise<QueryScheduledBlockHeightsResponse> {
    const data = QueryScheduledBlockHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryScheduledBlockHeights", data);
    return promise.then(data => QueryScheduledBlockHeightsResponse.decode(new _m0.Reader(data)));
  }
  queryScheduledCorksByBlockHeight(request: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponse> {
    const data = QueryScheduledCorksByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Query", "QueryScheduledCorksByBlockHeight", data);
    return promise.then(data => QueryScheduledCorksByBlockHeightResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    querySubmittedCorks(request?: QuerySubmittedCorksRequest): Promise<QuerySubmittedCorksResponse> {
      return queryService.querySubmittedCorks(request);
    },
    queryCommitPeriod(request?: QueryCommitPeriodRequest): Promise<QueryCommitPeriodResponse> {
      return queryService.queryCommitPeriod(request);
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
    }
  };
};