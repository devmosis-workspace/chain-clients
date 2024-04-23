import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetSequencerRequest, QueryGetSequencerResponse, QueryAllSequencerRequest, QueryAllSequencerResponse, QueryGetSequencersByRollappRequest, QueryGetSequencersByRollappResponse, QueryAllSequencersByRollappRequest, QueryAllSequencersByRollappResponse, QueryGetSchedulerRequest, QueryGetSchedulerResponse, QueryAllSchedulerRequest, QueryAllSchedulerResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Sequencer by index. */
  sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse>;
  /** Queries a list of Sequencer items. */
  sequencerAll(request?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponse>;
  /** Queries a SequencersByRollapp by index. */
  sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse>;
  /** Queries a list of SequencersByRollapp items. */
  sequencersByRollappAll(request?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponse>;
  /** Queries a Scheduler by index. */
  scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse>;
  /** Queries a list of Scheduler items. */
  schedulerAll(request?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.sequencer = this.sequencer.bind(this);
    this.sequencerAll = this.sequencerAll.bind(this);
    this.sequencersByRollapp = this.sequencersByRollapp.bind(this);
    this.sequencersByRollappAll = this.sequencersByRollappAll.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.schedulerAll = this.schedulerAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse> {
    const data = QueryGetSequencerRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "Sequencer", data);
    return promise.then(data => QueryGetSequencerResponse.decode(new BinaryReader(data)));
  }
  sequencerAll(request: QueryAllSequencerRequest = {
    pagination: undefined
  }): Promise<QueryAllSequencerResponse> {
    const data = QueryAllSequencerRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "SequencerAll", data);
    return promise.then(data => QueryAllSequencerResponse.decode(new BinaryReader(data)));
  }
  sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse> {
    const data = QueryGetSequencersByRollappRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "SequencersByRollapp", data);
    return promise.then(data => QueryGetSequencersByRollappResponse.decode(new BinaryReader(data)));
  }
  sequencersByRollappAll(request: QueryAllSequencersByRollappRequest = {
    pagination: undefined
  }): Promise<QueryAllSequencersByRollappResponse> {
    const data = QueryAllSequencersByRollappRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "SequencersByRollappAll", data);
    return promise.then(data => QueryAllSequencersByRollappResponse.decode(new BinaryReader(data)));
  }
  scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse> {
    const data = QueryGetSchedulerRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "Scheduler", data);
    return promise.then(data => QueryGetSchedulerResponse.decode(new BinaryReader(data)));
  }
  schedulerAll(request: QueryAllSchedulerRequest = {
    pagination: undefined
  }): Promise<QueryAllSchedulerResponse> {
    const data = QueryAllSchedulerRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Query", "SchedulerAll", data);
    return promise.then(data => QueryAllSchedulerResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    sequencer(request: QueryGetSequencerRequest): Promise<QueryGetSequencerResponse> {
      return queryService.sequencer(request);
    },
    sequencerAll(request?: QueryAllSequencerRequest): Promise<QueryAllSequencerResponse> {
      return queryService.sequencerAll(request);
    },
    sequencersByRollapp(request: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponse> {
      return queryService.sequencersByRollapp(request);
    },
    sequencersByRollappAll(request?: QueryAllSequencersByRollappRequest): Promise<QueryAllSequencersByRollappResponse> {
      return queryService.sequencersByRollappAll(request);
    },
    scheduler(request: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponse> {
      return queryService.scheduler(request);
    },
    schedulerAll(request?: QueryAllSchedulerRequest): Promise<QueryAllSchedulerResponse> {
      return queryService.schedulerAll(request);
    }
  };
};