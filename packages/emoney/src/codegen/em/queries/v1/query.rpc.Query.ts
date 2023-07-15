import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCirculatingRequest, QueryCirculatingResponse, QueryMissedBlocksRequest, QueryMissedBlocksResponse, QuerySpendableRequest, QuerySpendableResponse } from "./query";
export interface Query {
  circulating(request?: QueryCirculatingRequest): Promise<QueryCirculatingResponse>;
  missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse>;
  spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.circulating = this.circulating.bind(this);
    this.missedBlocks = this.missedBlocks.bind(this);
    this.spendable = this.spendable.bind(this);
  }
  circulating(request: QueryCirculatingRequest = {}): Promise<QueryCirculatingResponse> {
    const data = QueryCirculatingRequest.encode(request).finish();
    const promise = this.rpc.request("em.queries.v1.Query", "Circulating", data);
    return promise.then(data => QueryCirculatingResponse.decode(new _m0.Reader(data)));
  }
  missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse> {
    const data = QueryMissedBlocksRequest.encode(request).finish();
    const promise = this.rpc.request("em.queries.v1.Query", "MissedBlocks", data);
    return promise.then(data => QueryMissedBlocksResponse.decode(new _m0.Reader(data)));
  }
  spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse> {
    const data = QuerySpendableRequest.encode(request).finish();
    const promise = this.rpc.request("em.queries.v1.Query", "Spendable", data);
    return promise.then(data => QuerySpendableResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    circulating(request?: QueryCirculatingRequest): Promise<QueryCirculatingResponse> {
      return queryService.circulating(request);
    },
    missedBlocks(request: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponse> {
      return queryService.missedBlocks(request);
    },
    spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse> {
      return queryService.spendable(request);
    }
  };
};