import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFailuresRequest, QueryFailuresResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Failure by address. */
  addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
  /** Queries a list of Failure items. */
  failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.addressFailures = this.addressFailures.bind(this);
    this.failures = this.failures.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.contractmanager.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse> {
    const data = QueryFailuresRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.contractmanager.Query", "AddressFailures", data);
    return promise.then(data => QueryFailuresResponse.decode(new _m0.Reader(data)));
  }
  failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse> {
    const data = QueryFailuresRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.contractmanager.Query", "Failures", data);
    return promise.then(data => QueryFailuresResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse> {
      return queryService.addressFailures(request);
    },
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse> {
      return queryService.failures(request);
    }
  };
};