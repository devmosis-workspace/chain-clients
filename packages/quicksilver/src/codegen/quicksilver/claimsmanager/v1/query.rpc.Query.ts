import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClaimsRequest, QueryClaimsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Claims returns all zone claims from the current epoch. */
  claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
  /** LastEpochClaims returns all zone claims from the last epoch. */
  lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
  /** UserClaims returns all zone claims for a given address from the current epoch. */
  userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
  /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
  userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claims = this.claims.bind(this);
    this.lastEpochClaims = this.lastEpochClaims.bind(this);
    this.userClaims = this.userClaims.bind(this);
    this.userLastEpochClaims = this.userLastEpochClaims.bind(this);
  }
  claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.claimsmanager.v1.Query", "Claims", data);
    return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
  lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.claimsmanager.v1.Query", "LastEpochClaims", data);
    return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
  userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.claimsmanager.v1.Query", "UserClaims", data);
    return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
  userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
    const data = QueryClaimsRequest.encode(request).finish();
    const promise = this.rpc.request("quicksilver.claimsmanager.v1.Query", "UserLastEpochClaims", data);
    return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    claims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
      return queryService.claims(request);
    },
    lastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
      return queryService.lastEpochClaims(request);
    },
    userClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
      return queryService.userClaims(request);
    },
    userLastEpochClaims(request: QueryClaimsRequest): Promise<QueryClaimsResponse> {
      return queryService.userLastEpochClaims(request);
    }
  };
};