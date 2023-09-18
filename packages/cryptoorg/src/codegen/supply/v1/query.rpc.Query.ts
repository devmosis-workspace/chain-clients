import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { SupplyRequest, SupplyResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalSupply queries the total supply of all coins. */
  totalSupply(request?: SupplyRequest): Promise<SupplyResponse>;
  /** LiquidSupply queries the liquid supply of all coins. */
  liquidSupply(request?: SupplyRequest): Promise<SupplyResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.totalSupply = this.totalSupply.bind(this);
    this.liquidSupply = this.liquidSupply.bind(this);
  }
  totalSupply(request: SupplyRequest = {}): Promise<SupplyResponse> {
    const data = SupplyRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.supply.v1.Query", "TotalSupply", data);
    return promise.then(data => SupplyResponse.decode(new BinaryReader(data)));
  }
  liquidSupply(request: SupplyRequest = {}): Promise<SupplyResponse> {
    const data = SupplyRequest.encode(request).finish();
    const promise = this.rpc.request("chainmain.supply.v1.Query", "LiquidSupply", data);
    return promise.then(data => SupplyResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    totalSupply(request?: SupplyRequest): Promise<SupplyResponse> {
      return queryService.totalSupply(request);
    },
    liquidSupply(request?: SupplyRequest): Promise<SupplyResponse> {
      return queryService.liquidSupply(request);
    }
  };
};