import { LCDClient } from "@cosmology/lcd";
import { QueryMinGasPrice, QueryMinGasPriceResponseSDKType, QueryEmergencyGroup, QueryEmergencyGroupResponseSDKType, QueryInflationParams, QueryInflationParamsResponseSDKType, QueryInflationCycleEnd, QueryInflationCycleEndResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.minGasPrice = this.minGasPrice.bind(this);
    this.emergencyGroup = this.emergencyGroup.bind(this);
    this.inflationParams = this.inflationParams.bind(this);
    this.inflationCycleEnd = this.inflationCycleEnd.bind(this);
  }
  /* MinGasPrice returns minimum transaction fees. */
  async minGasPrice(_params: QueryMinGasPrice = {}): Promise<QueryMinGasPriceResponseSDKType> {
    const endpoint = `umee/ugov/v1/min_gas_price`;
    return await this.req.get<QueryMinGasPriceResponseSDKType>(endpoint);
  }
  /* EmergencyGroup returns emergency group address */
  async emergencyGroup(_params: QueryEmergencyGroup = {}): Promise<QueryEmergencyGroupResponseSDKType> {
    const endpoint = `umee/ugov/v1/emergency_group`;
    return await this.req.get<QueryEmergencyGroupResponseSDKType>(endpoint);
  }
  /* InflationParams returns params of inflation reduction rates */
  async inflationParams(_params: QueryInflationParams = {}): Promise<QueryInflationParamsResponseSDKType> {
    const endpoint = `umee/ugov/v1/inflation_params`;
    return await this.req.get<QueryInflationParamsResponseSDKType>(endpoint);
  }
  /* InflationCycleEnd returns inflation cycle end time */
  async inflationCycleEnd(_params: QueryInflationCycleEnd = {}): Promise<QueryInflationCycleEndResponseSDKType> {
    const endpoint = `umee/ugov/v1/inflation_cycle_end`;
    return await this.req.get<QueryInflationCycleEndResponseSDKType>(endpoint);
  }
}