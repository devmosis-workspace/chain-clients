import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInvestmintRequest, QueryInvestmintResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.investmint = this.investmint.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.resources.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse> {
    const data = QueryInvestmintRequest.encode(request).finish();
    const promise = this.rpc.request("cyber.resources.v1beta1.Query", "Investmint", data);
    return promise.then(data => QueryInvestmintResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    investmint(request: QueryInvestmintRequest): Promise<QueryInvestmintResponse> {
      return queryService.investmint(request);
    }
  };
};