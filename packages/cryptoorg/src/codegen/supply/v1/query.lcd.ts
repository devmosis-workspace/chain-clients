import { LCDClient } from "@osmonauts/lcd";
import { SupplyRequest, SupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.totalSupply = this.totalSupply.bind(this);
    this.liquidSupply = this.liquidSupply.bind(this);
  }
  /* TotalSupply queries the total supply of all coins. */
  async totalSupply(_params: SupplyRequest = {}): Promise<SupplyResponseSDKType> {
    const endpoint = `chainmain/supply/v1/total`;
    return await this.req.get<SupplyResponseSDKType>(endpoint);
  }
  /* LiquidSupply queries the liquid supply of all coins. */
  async liquidSupply(_params: SupplyRequest = {}): Promise<SupplyResponseSDKType> {
    const endpoint = `chainmain/supply/v1/liquid`;
    return await this.req.get<SupplyResponseSDKType>(endpoint);
  }
}