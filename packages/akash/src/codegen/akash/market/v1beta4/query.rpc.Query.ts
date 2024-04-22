import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order queries order details */
  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** Bids queries bids with filters */
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  /** Bid queries bid details */
  bid(request: QueryBidRequest): Promise<QueryBidResponse>;
  /** Leases queries leases with filters */
  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  /** Lease queries lease details */
  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }
  orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Orders", data);
    return promise.then(data => QueryOrdersResponse.decode(new BinaryReader(data)));
  }
  order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new BinaryReader(data)));
  }
  bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Bids", data);
    return promise.then(data => QueryBidsResponse.decode(new BinaryReader(data)));
  }
  bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Bid", data);
    return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
  }
  leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Leases", data);
    return promise.then(data => QueryLeasesResponse.decode(new BinaryReader(data)));
  }
  lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta4.Query", "Lease", data);
    return promise.then(data => QueryLeaseResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
      return queryService.orders(request);
    },
    order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
      return queryService.order(request);
    },
    bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
      return queryService.bids(request);
    },
    bid(request: QueryBidRequest): Promise<QueryBidResponse> {
      return queryService.bid(request);
    },
    leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
      return queryService.leases(request);
    },
    lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
      return queryService.lease(request);
    }
  };
};