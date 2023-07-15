import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryTotalBalanceRequest, QueryTotalBalanceResponse } from "./query";
/** Query defines the gRPC querier service for x/community. */
export interface Query {
  /** Balance queries the balance of all coins of x/community module. */
  balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * TotalBalance queries the balance of all coins, including x/distribution,
   * x/community, and supplied balances.
   */
  totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.totalBalance = this.totalBalance.bind(this);
  }
  balance(request: QueryBalanceRequest = {}): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }
  totalBalance(request: QueryTotalBalanceRequest = {}): Promise<QueryTotalBalanceResponse> {
    const data = QueryTotalBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Query", "TotalBalance", data);
    return promise.then(data => QueryTotalBalanceResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    totalBalance(request?: QueryTotalBalanceRequest): Promise<QueryTotalBalanceResponse> {
      return queryService.totalBalance(request);
    }
  };
};