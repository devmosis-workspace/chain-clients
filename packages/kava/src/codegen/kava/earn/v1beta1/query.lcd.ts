import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryVaultsRequest, QueryVaultsResponseSDKType, QueryVaultRequest, QueryVaultResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.vaults = this.vaults.bind(this);
    this.vault = this.vault.bind(this);
    this.deposits = this.deposits.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
  }
  /* Params queries all parameters of the earn module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/earn/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Vaults queries all vaults */
  async vaults(_params: QueryVaultsRequest = {}): Promise<QueryVaultsResponseSDKType> {
    const endpoint = `kava/earn/v1beta1/vaults`;
    return await this.req.get<QueryVaultsResponseSDKType>(endpoint);
  }
  /* Vault queries a single vault based on the vault denom */
  async vault(params: QueryVaultRequest): Promise<QueryVaultResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `kava/earn/v1beta1/vaults/${params.denom}`;
    return await this.req.get<QueryVaultResponseSDKType>(endpoint, options);
  }
  /* Deposits queries deposit details based on depositor address and vault */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.valueInStakedTokens !== "undefined") {
      options.params.value_in_staked_tokens = params.valueInStakedTokens;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/earn/v1beta1/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }
  /* TotalSupply returns the total sum of all coins currently locked into the earn module. */
  async totalSupply(_params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponseSDKType> {
    const endpoint = `kava/earn/v1beta1/total_supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint);
  }
}