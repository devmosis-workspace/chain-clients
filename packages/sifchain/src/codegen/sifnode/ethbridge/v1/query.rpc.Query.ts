import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEthProphecyRequest, QueryEthProphecyResponse, QueryBlacklistRequest, QueryBlacklistResponse, QueryPauseRequest, QueryPauseResponse } from "./query";
/** Query service for queries */
export interface Query {
  /** EthProphecy queries an EthProphecy */
  ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse>;
  getBlacklist(request?: QueryBlacklistRequest): Promise<QueryBlacklistResponse>;
  getPauseStatus(request?: QueryPauseRequest): Promise<QueryPauseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ethProphecy = this.ethProphecy.bind(this);
    this.getBlacklist = this.getBlacklist.bind(this);
    this.getPauseStatus = this.getPauseStatus.bind(this);
  }
  ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse> {
    const data = QueryEthProphecyRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Query", "EthProphecy", data);
    return promise.then(data => QueryEthProphecyResponse.decode(new BinaryReader(data)));
  }
  getBlacklist(request: QueryBlacklistRequest = {}): Promise<QueryBlacklistResponse> {
    const data = QueryBlacklistRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Query", "GetBlacklist", data);
    return promise.then(data => QueryBlacklistResponse.decode(new BinaryReader(data)));
  }
  getPauseStatus(request: QueryPauseRequest = {}): Promise<QueryPauseResponse> {
    const data = QueryPauseRequest.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Query", "GetPauseStatus", data);
    return promise.then(data => QueryPauseResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    ethProphecy(request: QueryEthProphecyRequest): Promise<QueryEthProphecyResponse> {
      return queryService.ethProphecy(request);
    },
    getBlacklist(request?: QueryBlacklistRequest): Promise<QueryBlacklistResponse> {
      return queryService.getBlacklist(request);
    },
    getPauseStatus(request?: QueryPauseRequest): Promise<QueryPauseResponse> {
      return queryService.getPauseStatus(request);
    }
  };
};