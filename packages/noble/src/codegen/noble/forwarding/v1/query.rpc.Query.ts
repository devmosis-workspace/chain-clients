import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAddress, QueryAddressResponse, QueryStatsByChannel, QueryStatsByChannelResponse } from "./query";
export interface Query {
  address(request: QueryAddress): Promise<QueryAddressResponse>;
  statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.address = this.address.bind(this);
    this.statsByChannel = this.statsByChannel.bind(this);
  }
  address(request: QueryAddress): Promise<QueryAddressResponse> {
    const data = QueryAddress.encode(request).finish();
    const promise = this.rpc.request("noble.forwarding.v1.Query", "Address", data);
    return promise.then(data => QueryAddressResponse.decode(new BinaryReader(data)));
  }
  statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse> {
    const data = QueryStatsByChannel.encode(request).finish();
    const promise = this.rpc.request("noble.forwarding.v1.Query", "StatsByChannel", data);
    return promise.then(data => QueryStatsByChannelResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    address(request: QueryAddress): Promise<QueryAddressResponse> {
      return queryService.address(request);
    },
    statsByChannel(request: QueryStatsByChannel): Promise<QueryStatsByChannelResponse> {
      return queryService.statsByChannel(request);
    }
  };
};