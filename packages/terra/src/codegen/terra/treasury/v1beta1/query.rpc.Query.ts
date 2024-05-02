import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTaxRateRequest, QueryTaxRateResponse, QueryTaxCapRequest, QueryTaxCapResponse, QueryTaxCapsRequest, QueryTaxCapsResponse, QueryRewardWeightRequest, QueryRewardWeightResponse, QuerySeigniorageProceedsRequest, QuerySeigniorageProceedsResponse, QueryTaxProceedsRequest, QueryTaxProceedsResponse, QueryIndicatorsRequest, QueryIndicatorsResponse, QueryBurnTaxExemptionListRequest, QueryBurnTaxExemptionListResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TaxRate return the current tax rate */
  taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse>;
  /** TaxCap returns the tax cap of a denom */
  taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse>;
  /** TaxCaps returns the all tax caps */
  taxCaps(request?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponse>;
  /** RewardWeight return the current reward weight */
  rewardWeight(request?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponse>;
  /** SeigniorageProceeds return the current seigniorage proceeds */
  seigniorageProceeds(request?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponse>;
  /** TaxProceeds return the current tax proceeds */
  taxProceeds(request?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponse>;
  /** Indicators return the current trl informations */
  indicators(request?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponse>;
  /** BurnTaxExemptionList returns all registered burn tax exemption addresses */
  burnTaxExemptionList(request?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  taxRate(request: QueryTaxRateRequest = {}): Promise<QueryTaxRateResponse> {
    const data = QueryTaxRateRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "TaxRate", data);
    return promise.then(data => QueryTaxRateResponse.decode(new BinaryReader(data)));
  }
  taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse> {
    const data = QueryTaxCapRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "TaxCap", data);
    return promise.then(data => QueryTaxCapResponse.decode(new BinaryReader(data)));
  }
  taxCaps(request: QueryTaxCapsRequest = {}): Promise<QueryTaxCapsResponse> {
    const data = QueryTaxCapsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "TaxCaps", data);
    return promise.then(data => QueryTaxCapsResponse.decode(new BinaryReader(data)));
  }
  rewardWeight(request: QueryRewardWeightRequest = {}): Promise<QueryRewardWeightResponse> {
    const data = QueryRewardWeightRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "RewardWeight", data);
    return promise.then(data => QueryRewardWeightResponse.decode(new BinaryReader(data)));
  }
  seigniorageProceeds(request: QuerySeigniorageProceedsRequest = {}): Promise<QuerySeigniorageProceedsResponse> {
    const data = QuerySeigniorageProceedsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "SeigniorageProceeds", data);
    return promise.then(data => QuerySeigniorageProceedsResponse.decode(new BinaryReader(data)));
  }
  taxProceeds(request: QueryTaxProceedsRequest = {}): Promise<QueryTaxProceedsResponse> {
    const data = QueryTaxProceedsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "TaxProceeds", data);
    return promise.then(data => QueryTaxProceedsResponse.decode(new BinaryReader(data)));
  }
  indicators(request: QueryIndicatorsRequest = {}): Promise<QueryIndicatorsResponse> {
    const data = QueryIndicatorsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "Indicators", data);
    return promise.then(data => QueryIndicatorsResponse.decode(new BinaryReader(data)));
  }
  burnTaxExemptionList(request: QueryBurnTaxExemptionListRequest = {
    pagination: undefined
  }): Promise<QueryBurnTaxExemptionListResponse> {
    const data = QueryBurnTaxExemptionListRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "BurnTaxExemptionList", data);
    return promise.then(data => QueryBurnTaxExemptionListResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("terra.treasury.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    taxRate(request?: QueryTaxRateRequest): Promise<QueryTaxRateResponse> {
      return queryService.taxRate(request);
    },
    taxCap(request: QueryTaxCapRequest): Promise<QueryTaxCapResponse> {
      return queryService.taxCap(request);
    },
    taxCaps(request?: QueryTaxCapsRequest): Promise<QueryTaxCapsResponse> {
      return queryService.taxCaps(request);
    },
    rewardWeight(request?: QueryRewardWeightRequest): Promise<QueryRewardWeightResponse> {
      return queryService.rewardWeight(request);
    },
    seigniorageProceeds(request?: QuerySeigniorageProceedsRequest): Promise<QuerySeigniorageProceedsResponse> {
      return queryService.seigniorageProceeds(request);
    },
    taxProceeds(request?: QueryTaxProceedsRequest): Promise<QueryTaxProceedsResponse> {
      return queryService.taxProceeds(request);
    },
    indicators(request?: QueryIndicatorsRequest): Promise<QueryIndicatorsResponse> {
      return queryService.indicators(request);
    },
    burnTaxExemptionList(request?: QueryBurnTaxExemptionListRequest): Promise<QueryBurnTaxExemptionListResponse> {
      return queryService.burnTaxExemptionList(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};