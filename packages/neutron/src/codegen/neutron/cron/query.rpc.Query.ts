import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetScheduleRequest, QueryGetScheduleResponse, QuerySchedulesRequest, QuerySchedulesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Schedule by name. */
  schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse>;
  /** Queries a list of Schedule items. */
  schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.schedule = this.schedule.bind(this);
    this.schedules = this.schedules.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse> {
    const data = QueryGetScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Schedule", data);
    return promise.then(data => QueryGetScheduleResponse.decode(new BinaryReader(data)));
  }
  schedules(request: QuerySchedulesRequest = {
    pagination: undefined
  }): Promise<QuerySchedulesResponse> {
    const data = QuerySchedulesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.cron.Query", "Schedules", data);
    return promise.then(data => QuerySchedulesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    schedule(request: QueryGetScheduleRequest): Promise<QueryGetScheduleResponse> {
      return queryService.schedule(request);
    },
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse> {
      return queryService.schedules(request);
    }
  };
};