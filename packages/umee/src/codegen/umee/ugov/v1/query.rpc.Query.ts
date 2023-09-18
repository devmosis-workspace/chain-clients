import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryMinGasPrice, QueryMinGasPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** MinGasPrice returns minimum transaction fees. */
  minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.minGasPrice = this.minGasPrice.bind(this);
  }
  minGasPrice(request: QueryMinGasPrice = {}): Promise<QueryMinGasPriceResponse> {
    const data = QueryMinGasPrice.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Query", "MinGasPrice", data);
    return promise.then(data => QueryMinGasPriceResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse> {
      return queryService.minGasPrice(request);
    }
  };
};