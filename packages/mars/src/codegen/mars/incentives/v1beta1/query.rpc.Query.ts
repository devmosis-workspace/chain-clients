import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryScheduleRequest, QueryScheduleResponse, QuerySchedulesRequest, QuerySchedulesResponse } from "./query";
/** Query defines the gRPC querier service for the incentives module */
export interface Query {
  /** Schedule queries an incentives schedule by identifier */
  schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse>;
  /** Schedules queries all incentives schedules */
  schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.schedule = this.schedule.bind(this);
    this.schedules = this.schedules.bind(this);
  }
  schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse> {
    const data = QueryScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("mars.incentives.v1beta1.Query", "Schedule", data);
    return promise.then(data => QueryScheduleResponse.decode(new _m0.Reader(data)));
  }
  schedules(request: QuerySchedulesRequest = {
    pagination: undefined
  }): Promise<QuerySchedulesResponse> {
    const data = QuerySchedulesRequest.encode(request).finish();
    const promise = this.rpc.request("mars.incentives.v1beta1.Query", "Schedules", data);
    return promise.then(data => QuerySchedulesResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    schedule(request: QueryScheduleRequest): Promise<QueryScheduleResponse> {
      return queryService.schedule(request);
    },
    schedules(request?: QuerySchedulesRequest): Promise<QuerySchedulesResponse> {
      return queryService.schedules(request);
    }
  };
};