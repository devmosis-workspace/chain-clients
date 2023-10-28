import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInflationRateRequest, QueryInflationRateResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryGenesisTimeRequest, QueryGenesisTimeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** InflationRate returns the current inflation rate. */
  inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
  /** AnnualProvisions returns the current annual provisions. */
  annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
  /** GenesisTime returns the genesis time. */
  genesisTime(request?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.inflationRate = this.inflationRate.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.genesisTime = this.genesisTime.bind(this);
  }
  inflationRate(request: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponse> {
    const data = QueryInflationRateRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.mint.v1.Query", "InflationRate", data);
    return promise.then(data => QueryInflationRateResponse.decode(new BinaryReader(data)));
  }
  annualProvisions(request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.mint.v1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
  }
  genesisTime(request: QueryGenesisTimeRequest = {}): Promise<QueryGenesisTimeResponse> {
    const data = QueryGenesisTimeRequest.encode(request).finish();
    const promise = this.rpc.request("celestia.mint.v1.Query", "GenesisTime", data);
    return promise.then(data => QueryGenesisTimeResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse> {
      return queryService.inflationRate(request);
    },
    annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.annualProvisions(request);
    },
    genesisTime(request?: QueryGenesisTimeRequest): Promise<QueryGenesisTimeResponse> {
      return queryService.genesisTime(request);
    }
  };
};