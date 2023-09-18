import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDeployedCosmosCoinContractsRequest, QueryDeployedCosmosCoinContractsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.deployedCosmosCoinContracts = this.deployedCosmosCoinContracts.bind(this);
  }
  /* Params queries all parameters of the evmutil module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/evmutil/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DeployedCosmosCoinContracts queries a list cosmos coin denom and their deployed erc20 address */
  async deployedCosmosCoinContracts(params: QueryDeployedCosmosCoinContractsRequest): Promise<QueryDeployedCosmosCoinContractsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.cosmosDenoms !== "undefined") {
      options.params.cosmos_denoms = params.cosmosDenoms;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/evmutil/v1beta1/deployed_cosmos_coin_contracts`;
    return await this.req.get<QueryDeployedCosmosCoinContractsResponseSDKType>(endpoint, options);
  }
}