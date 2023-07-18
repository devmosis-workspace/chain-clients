import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryTotalBurnedNeutronsAmountRequest, QueryTotalBurnedNeutronsAmountResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.totalBurnedNeutronsAmount = this.totalBurnedNeutronsAmount.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/feeburner/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* TotalBurnedNeutronsAmount queries total amount of burned neutron fees. */
  async totalBurnedNeutronsAmount(_params: QueryTotalBurnedNeutronsAmountRequest = {}): Promise<QueryTotalBurnedNeutronsAmountResponseSDKType> {
    const endpoint = `neutron/feeburner/total_burned_neutrons_amount`;
    return await this.req.get<QueryTotalBurnedNeutronsAmountResponseSDKType>(endpoint);
  }
}