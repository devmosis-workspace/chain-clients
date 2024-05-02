import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryTaxRateRequest, QueryTaxRateResponseSDKType, QueryTaxCapRequest, QueryTaxCapResponseSDKType, QueryTaxCapsRequest, QueryTaxCapsResponseSDKType, QueryRewardWeightRequest, QueryRewardWeightResponseSDKType, QuerySeigniorageProceedsRequest, QuerySeigniorageProceedsResponseSDKType, QueryTaxProceedsRequest, QueryTaxProceedsResponseSDKType, QueryIndicatorsRequest, QueryIndicatorsResponseSDKType, QueryBurnTaxExemptionListRequest, QueryBurnTaxExemptionListResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.taxRate = this.taxRate.bind(this);
    this.taxCap = this.taxCap.bind(this);
    this.taxCaps = this.taxCaps.bind(this);
    this.rewardWeight = this.rewardWeight.bind(this);
    this.seigniorageProceeds = this.seigniorageProceeds.bind(this);
    this.taxProceeds = this.taxProceeds.bind(this);
    this.indicators = this.indicators.bind(this);
    this.burnTaxExemptionList = this.burnTaxExemptionList.bind(this);
    this.params = this.params.bind(this);
  }
  /* TaxRate return the current tax rate */
  async taxRate(_params: QueryTaxRateRequest = {}): Promise<QueryTaxRateResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/tax_rate`;
    return await this.req.get<QueryTaxRateResponseSDKType>(endpoint);
  }
  /* TaxCap returns the tax cap of a denom */
  async taxCap(params: QueryTaxCapRequest): Promise<QueryTaxCapResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/tax_caps/${params.denom}`;
    return await this.req.get<QueryTaxCapResponseSDKType>(endpoint);
  }
  /* TaxCaps returns the all tax caps */
  async taxCaps(_params: QueryTaxCapsRequest = {}): Promise<QueryTaxCapsResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/tax_caps`;
    return await this.req.get<QueryTaxCapsResponseSDKType>(endpoint);
  }
  /* RewardWeight return the current reward weight */
  async rewardWeight(_params: QueryRewardWeightRequest = {}): Promise<QueryRewardWeightResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/reward_weight`;
    return await this.req.get<QueryRewardWeightResponseSDKType>(endpoint);
  }
  /* SeigniorageProceeds return the current seigniorage proceeds */
  async seigniorageProceeds(_params: QuerySeigniorageProceedsRequest = {}): Promise<QuerySeigniorageProceedsResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/seigniorage_proceeds`;
    return await this.req.get<QuerySeigniorageProceedsResponseSDKType>(endpoint);
  }
  /* TaxProceeds return the current tax proceeds */
  async taxProceeds(_params: QueryTaxProceedsRequest = {}): Promise<QueryTaxProceedsResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/tax_proceeds`;
    return await this.req.get<QueryTaxProceedsResponseSDKType>(endpoint);
  }
  /* Indicators return the current trl informations */
  async indicators(_params: QueryIndicatorsRequest = {}): Promise<QueryIndicatorsResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/indicators`;
    return await this.req.get<QueryIndicatorsResponseSDKType>(endpoint);
  }
  /* BurnTaxExemptionList returns all registered burn tax exemption addresses */
  async burnTaxExemptionList(params: QueryBurnTaxExemptionListRequest = {
    pagination: undefined
  }): Promise<QueryBurnTaxExemptionListResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `terra/treasury/v1beta1/burn_tax_exemption_list`;
    return await this.req.get<QueryBurnTaxExemptionListResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `terra/treasury/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}