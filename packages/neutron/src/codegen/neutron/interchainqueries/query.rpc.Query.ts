import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponse, QueryRegisteredQueryRequest, QueryRegisteredQueryResponse, QueryRegisteredQueryResultRequest, QueryRegisteredQueryResultResponse, QueryLastRemoteHeight, QueryLastRemoteHeightResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
  registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
  queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
  lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.registeredQueries = this.registeredQueries.bind(this);
    this.registeredQuery = this.registeredQuery.bind(this);
    this.queryResult = this.queryResult.bind(this);
    this.lastRemoteHeight = this.lastRemoteHeight.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse> {
    const data = QueryRegisteredQueriesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQueries", data);
    return promise.then(data => QueryRegisteredQueriesResponse.decode(new BinaryReader(data)));
  }
  registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse> {
    const data = QueryRegisteredQueryRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQuery", data);
    return promise.then(data => QueryRegisteredQueryResponse.decode(new BinaryReader(data)));
  }
  queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse> {
    const data = QueryRegisteredQueryResultRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "QueryResult", data);
    return promise.then(data => QueryRegisteredQueryResultResponse.decode(new BinaryReader(data)));
  }
  lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse> {
    const data = QueryLastRemoteHeight.encode(request).finish();
    const promise = this.rpc.request("neutron.interchainqueries.Query", "LastRemoteHeight", data);
    return promise.then(data => QueryLastRemoteHeightResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse> {
      return queryService.registeredQueries(request);
    },
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse> {
      return queryService.registeredQuery(request);
    },
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse> {
      return queryService.queryResult(request);
    },
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse> {
      return queryService.lastRemoteHeight(request);
    }
  };
};