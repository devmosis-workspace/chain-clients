import { LCDClient } from "@cosmology/lcd";
import { QueryMinGasPrice, QueryMinGasPriceResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.minGasPrice = this.minGasPrice.bind(this);
  }
  /* MinGasPrice returns minimum transaction fees. */
  async minGasPrice(_params: QueryMinGasPrice = {}): Promise<QueryMinGasPriceResponseSDKType> {
    const endpoint = `umee/ugov/v1/min-gas-price`;
    return await this.req.get<QueryMinGasPriceResponseSDKType>(endpoint);
  }
}