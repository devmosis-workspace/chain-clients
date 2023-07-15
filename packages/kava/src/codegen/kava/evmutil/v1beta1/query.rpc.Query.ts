import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDeployedCosmosCoinContractsRequest, QueryDeployedCosmosCoinContractsResponse } from "./query";
/** Query defines the gRPC querier service for evmutil module */
export interface Query {
  /** Params queries all parameters of the evmutil module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DeployedCosmosCoinContracts queries a list cosmos coin denom and their deployed erc20 address */
  deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.deployedCosmosCoinContracts = this.deployedCosmosCoinContracts.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse> {
    const data = QueryDeployedCosmosCoinContractsRequest.encode(request).finish();
    const promise = this.rpc.request("kava.evmutil.v1beta1.Query", "DeployedCosmosCoinContracts", data);
    return promise.then(data => QueryDeployedCosmosCoinContractsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    deployedCosmosCoinContracts(request: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponse> {
      return queryService.deployedCosmosCoinContracts(request);
    }
  };
};