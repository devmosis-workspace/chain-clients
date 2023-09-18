import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** GovernanceKey returns the multisig governance key */
  governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.governanceKey = this.governanceKey.bind(this);
  }
  governanceKey(request: QueryGovernanceKeyRequest = {}): Promise<QueryGovernanceKeyResponse> {
    const data = QueryGovernanceKeyRequest.encode(request).finish();
    const promise = this.rpc.request("axelar.permission.v1beta1.Query", "GovernanceKey", data);
    return promise.then(data => QueryGovernanceKeyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    governanceKey(request?: QueryGovernanceKeyRequest): Promise<QueryGovernanceKeyResponse> {
      return queryService.governanceKey(request);
    }
  };
};