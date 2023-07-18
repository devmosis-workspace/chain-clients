import { LCDClient } from "@osmonauts/lcd";
import { QueryBalanceRequest, QueryBalanceResponseSDKType, QueryBuybackTimeRequest, QueryBuybackTimeResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.buybackTime = this.buybackTime.bind(this);
  }
  /* Query for the current buyback balance */
  async balance(_params: QueryBalanceRequest = {}): Promise<QueryBalanceResponseSDKType> {
    const endpoint = `e-money/buyback/v1/balance`;
    return await this.req.get<QueryBalanceResponseSDKType>(endpoint);
  }
  /* Query for buyback time periods */
  async buybackTime(_params: QueryBuybackTimeRequest = {}): Promise<QueryBuybackTimeResponseSDKType> {
    const endpoint = `e-money/buyback/v1/time`;
    return await this.req.get<QueryBuybackTimeResponseSDKType>(endpoint);
  }
}