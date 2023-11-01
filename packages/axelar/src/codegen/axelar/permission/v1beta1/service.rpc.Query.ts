import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponse, ParamsRequest, ParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** GovernanceKey returns the multisig governance key */
  governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
  params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.governanceKey = this.governanceKey.bind(this);
    this.params = this.params.bind(this);
  }
  governanceKey(request: QueryGovernanceKeyRequest = {}): Promise<QueryGovernanceKeyResponse> {
    const data = QueryGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Query", "GovernanceKey", data);
    return promise.then(data => QueryGovernanceKeyResponse.decode(new BinaryReader(data)));
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse> {
      return queryService.governanceKey(request);
    },
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    }
  };
};