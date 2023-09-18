import { LCDClient } from "@cosmology/lcd";
import { QueryGasPricesRequest, QueryGasPricesResponseSDKType, QueryUpgradePlanRequest, QueryUpgradePlanResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.gasPrices = this.gasPrices.bind(this);
    this.upgradePlan = this.upgradePlan.bind(this);
  }
  /* GasPrices */
  async gasPrices(_params: QueryGasPricesRequest = {}): Promise<QueryGasPricesResponseSDKType> {
    const endpoint = `e-money/authority/v1/gasprices`;
    return await this.req.get<QueryGasPricesResponseSDKType>(endpoint);
  }
  /* UpgradePlan */
  async upgradePlan(_params: QueryUpgradePlanRequest = {}): Promise<QueryUpgradePlanResponseSDKType> {
    const endpoint = `e-money/authority/v1/upgrade_plan`;
    return await this.req.get<QueryUpgradePlanResponseSDKType>(endpoint);
  }
}