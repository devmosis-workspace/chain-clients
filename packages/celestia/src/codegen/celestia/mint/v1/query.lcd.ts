import { LCDClient } from "@cosmology/lcd";
import { QueryInflationRateRequest, QueryInflationRateResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponseSDKType, QueryGenesisTimeRequest, QueryGenesisTimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.inflationRate = this.inflationRate.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
    this.genesisTime = this.genesisTime.bind(this);
  }
  /* InflationRate returns the current inflation rate. */
  async inflationRate(_params: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/inflation_rate`;
    return await this.req.get<QueryInflationRateResponseSDKType>(endpoint);
  }
  /* AnnualProvisions returns the current annual provisions. */
  async annualProvisions(_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponseSDKType>(endpoint);
  }
  /* GenesisTime returns the genesis time. */
  async genesisTime(_params: QueryGenesisTimeRequest = {}): Promise<QueryGenesisTimeResponseSDKType> {
    const endpoint = `cosmos/mint/v1beta1/genesis_time`;
    return await this.req.get<QueryGenesisTimeResponseSDKType>(endpoint);
  }
}