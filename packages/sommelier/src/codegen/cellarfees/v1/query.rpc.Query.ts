import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryLastRewardSupplyPeakRequest, QueryLastRewardSupplyPeakResponse, QueryFeeAccrualCountersRequest, QueryFeeAccrualCountersResponse, QueryAPYRequest, QueryAPYResponse } from "./query";
export interface Query {
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  queryModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  queryLastRewardSupplyPeak(request?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponse>;
  queryFeeAccrualCounters(request?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponse>;
  queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryParams = this.queryParams.bind(this);
    this.queryModuleAccounts = this.queryModuleAccounts.bind(this);
    this.queryLastRewardSupplyPeak = this.queryLastRewardSupplyPeak.bind(this);
    this.queryFeeAccrualCounters = this.queryFeeAccrualCounters.bind(this);
    this.queryAPY = this.queryAPY.bind(this);
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cellarfees.v1.Query", "QueryParams", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryModuleAccounts(request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cellarfees.v1.Query", "QueryModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
  }
  queryLastRewardSupplyPeak(request: QueryLastRewardSupplyPeakRequest = {}): Promise<QueryLastRewardSupplyPeakResponse> {
    const data = QueryLastRewardSupplyPeakRequest.encode(request).finish();
    const promise = this.rpc.request("cellarfees.v1.Query", "QueryLastRewardSupplyPeak", data);
    return promise.then(data => QueryLastRewardSupplyPeakResponse.decode(new BinaryReader(data)));
  }
  queryFeeAccrualCounters(request: QueryFeeAccrualCountersRequest = {}): Promise<QueryFeeAccrualCountersResponse> {
    const data = QueryFeeAccrualCountersRequest.encode(request).finish();
    const promise = this.rpc.request("cellarfees.v1.Query", "QueryFeeAccrualCounters", data);
    return promise.then(data => QueryFeeAccrualCountersResponse.decode(new BinaryReader(data)));
  }
  queryAPY(request: QueryAPYRequest = {}): Promise<QueryAPYResponse> {
    const data = QueryAPYRequest.encode(request).finish();
    const promise = this.rpc.request("cellarfees.v1.Query", "QueryAPY", data);
    return promise.then(data => QueryAPYResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
      return queryService.queryModuleAccounts(request);
    },
    queryLastRewardSupplyPeak(request?: QueryLastRewardSupplyPeakRequest): Promise<QueryLastRewardSupplyPeakResponse> {
      return queryService.queryLastRewardSupplyPeak(request);
    },
    queryFeeAccrualCounters(request?: QueryFeeAccrualCountersRequest): Promise<QueryFeeAccrualCountersResponse> {
      return queryService.queryFeeAccrualCounters(request);
    },
    queryAPY(request?: QueryAPYRequest): Promise<QueryAPYResponse> {
      return queryService.queryAPY(request);
    }
  };
};