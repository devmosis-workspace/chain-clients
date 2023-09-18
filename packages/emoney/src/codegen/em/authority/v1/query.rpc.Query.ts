import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGasPricesRequest, QueryGasPricesResponse, QueryUpgradePlanRequest, QueryUpgradePlanResponse } from "./query";
export interface Query {
  gasPrices(request?: QueryGasPricesRequest): Promise<QueryGasPricesResponse>;
  upgradePlan(request?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.gasPrices = this.gasPrices.bind(this);
    this.upgradePlan = this.upgradePlan.bind(this);
  }
  gasPrices(request: QueryGasPricesRequest = {}): Promise<QueryGasPricesResponse> {
    const data = QueryGasPricesRequest.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Query", "GasPrices", data);
    return promise.then(data => QueryGasPricesResponse.decode(new BinaryReader(data)));
  }
  upgradePlan(request: QueryUpgradePlanRequest = {}): Promise<QueryUpgradePlanResponse> {
    const data = QueryUpgradePlanRequest.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Query", "UpgradePlan", data);
    return promise.then(data => QueryUpgradePlanResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    gasPrices(request?: QueryGasPricesRequest): Promise<QueryGasPricesResponse> {
      return queryService.gasPrices(request);
    },
    upgradePlan(request?: QueryUpgradePlanRequest): Promise<QueryUpgradePlanResponse> {
      return queryService.upgradePlan(request);
    }
  };
};