import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryIndexes, QueryIndexesResponse, QuerySwapFee, QuerySwapFeeResponse, QueryRedeemFee, QueryRedeemFeeResponse, QueryIndexBalances, QueryIndexBalancesResponse, QueryIndexPrices, QueryIndexPricesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the x/metoken module. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /** Indexes queries for a specific or all the registered indexes. */
  indexes(request: QueryIndexes): Promise<QueryIndexesResponse>;
  /** SwapFee computes fee that would be applied when executing MsgSwap. */
  swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse>;
  /** RedeemFee computes a fee that would be applied when executing MsgRedeem. */
  redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse>;
  /** IndexBalances queries for Index's balances of a specific or all the registered indexes. */
  indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse>;
  /**
   * IndexPrices queries for Index's price of a specific or all the registered indexes. It also includes the
   * underlying assets prices as well as swap and redeem rates.
   */
  indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.indexes = this.indexes.bind(this);
    this.swapFee = this.swapFee.bind(this);
    this.redeemFee = this.redeemFee.bind(this);
    this.indexBalances = this.indexBalances.bind(this);
    this.indexPrices = this.indexPrices.bind(this);
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  indexes(request: QueryIndexes): Promise<QueryIndexesResponse> {
    const data = QueryIndexes.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "Indexes", data);
    return promise.then(data => QueryIndexesResponse.decode(new BinaryReader(data)));
  }
  swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse> {
    const data = QuerySwapFee.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "SwapFee", data);
    return promise.then(data => QuerySwapFeeResponse.decode(new BinaryReader(data)));
  }
  redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse> {
    const data = QueryRedeemFee.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "RedeemFee", data);
    return promise.then(data => QueryRedeemFeeResponse.decode(new BinaryReader(data)));
  }
  indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse> {
    const data = QueryIndexBalances.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "IndexBalances", data);
    return promise.then(data => QueryIndexBalancesResponse.decode(new BinaryReader(data)));
  }
  indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse> {
    const data = QueryIndexPrices.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Query", "IndexPrices", data);
    return promise.then(data => QueryIndexPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    indexes(request: QueryIndexes): Promise<QueryIndexesResponse> {
      return queryService.indexes(request);
    },
    swapFee(request: QuerySwapFee): Promise<QuerySwapFeeResponse> {
      return queryService.swapFee(request);
    },
    redeemFee(request: QueryRedeemFee): Promise<QueryRedeemFeeResponse> {
      return queryService.redeemFee(request);
    },
    indexBalances(request: QueryIndexBalances): Promise<QueryIndexBalancesResponse> {
      return queryService.indexBalances(request);
    },
    indexPrices(request: QueryIndexPrices): Promise<QueryIndexPricesResponse> {
      return queryService.indexPrices(request);
    }
  };
};