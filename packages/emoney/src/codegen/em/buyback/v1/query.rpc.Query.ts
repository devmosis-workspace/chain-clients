import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryBuybackTimeRequest, QueryBuybackTimeResponse } from "./query";
export interface Query {
  /** Query for the current buyback balance */
  balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Query for buyback time periods */
  buybackTime(request?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.buybackTime = this.buybackTime.bind(this);
  }
  balance(request: QueryBalanceRequest = {}): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("em.buyback.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  }
  buybackTime(request: QueryBuybackTimeRequest = {}): Promise<QueryBuybackTimeResponse> {
    const data = QueryBuybackTimeRequest.encode(request).finish();
    const promise = this.rpc.request("em.buyback.v1.Query", "BuybackTime", data);
    return promise.then(data => QueryBuybackTimeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    buybackTime(request?: QueryBuybackTimeRequest): Promise<QueryBuybackTimeResponse> {
      return queryService.buybackTime(request);
    }
  };
};