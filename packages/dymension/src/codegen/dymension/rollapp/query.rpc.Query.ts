import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetRollappRequest, QueryGetRollappResponse, QueryGetRollappByEIP155Request, QueryAllRollappRequest, QueryAllRollappResponse, QueryGetLatestStateIndexRequest, QueryGetLatestStateIndexResponse, QueryGetStateInfoRequest, QueryGetStateInfoResponse, QueryAllStateInfoRequest, QueryAllStateInfoResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Rollapp by index. */
  rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse>;
  /** Queries a Rollapp by index. */
  rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse>;
  /** Queries a list of Rollapp items. */
  rollappAll(request?: QueryAllRollappRequest): Promise<QueryAllRollappResponse>;
  /** Queries a LatestStateIndex by rollapp-id. */
  latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse>;
  /** Queries a StateInfo by index. */
  stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse>;
  /** Queries a list of StateInfo items. */
  stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.rollapp = this.rollapp.bind(this);
    this.rollappByEIP155 = this.rollappByEIP155.bind(this);
    this.rollappAll = this.rollappAll.bind(this);
    this.latestStateIndex = this.latestStateIndex.bind(this);
    this.stateInfo = this.stateInfo.bind(this);
    this.stateInfoAll = this.stateInfoAll.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse> {
    const data = QueryGetRollappRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "Rollapp", data);
    return promise.then(data => QueryGetRollappResponse.decode(new BinaryReader(data)));
  }
  rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse> {
    const data = QueryGetRollappByEIP155Request.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "RollappByEIP155", data);
    return promise.then(data => QueryGetRollappResponse.decode(new BinaryReader(data)));
  }
  rollappAll(request: QueryAllRollappRequest = {
    pagination: undefined
  }): Promise<QueryAllRollappResponse> {
    const data = QueryAllRollappRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "RollappAll", data);
    return promise.then(data => QueryAllRollappResponse.decode(new BinaryReader(data)));
  }
  latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse> {
    const data = QueryGetLatestStateIndexRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "LatestStateIndex", data);
    return promise.then(data => QueryGetLatestStateIndexResponse.decode(new BinaryReader(data)));
  }
  stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse> {
    const data = QueryGetStateInfoRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "StateInfo", data);
    return promise.then(data => QueryGetStateInfoResponse.decode(new BinaryReader(data)));
  }
  stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse> {
    const data = QueryAllStateInfoRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Query", "StateInfoAll", data);
    return promise.then(data => QueryAllStateInfoResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    rollapp(request: QueryGetRollappRequest): Promise<QueryGetRollappResponse> {
      return queryService.rollapp(request);
    },
    rollappByEIP155(request: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponse> {
      return queryService.rollappByEIP155(request);
    },
    rollappAll(request?: QueryAllRollappRequest): Promise<QueryAllRollappResponse> {
      return queryService.rollappAll(request);
    },
    latestStateIndex(request: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponse> {
      return queryService.latestStateIndex(request);
    },
    stateInfo(request: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponse> {
      return queryService.stateInfo(request);
    },
    stateInfoAll(request: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponse> {
      return queryService.stateInfoAll(request);
    }
  };
};