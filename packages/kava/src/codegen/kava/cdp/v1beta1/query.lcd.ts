import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAccountsRequest, QueryAccountsResponseSDKType, QueryTotalPrincipalRequest, QueryTotalPrincipalResponseSDKType, QueryTotalCollateralRequest, QueryTotalCollateralResponseSDKType, QueryCdpsRequest, QueryCdpsResponseSDKType, QueryCdpRequest, QueryCdpResponseSDKType, QueryDepositsRequest, QueryDepositsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.accounts = this.accounts.bind(this);
    this.totalPrincipal = this.totalPrincipal.bind(this);
    this.totalCollateral = this.totalCollateral.bind(this);
    this.cdps = this.cdps.bind(this);
    this.cdp = this.cdp.bind(this);
    this.deposits = this.deposits.bind(this);
  }
  /* Params queries all parameters of the cdp module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `kava/cdp/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Accounts queries the CDP module accounts. */
  async accounts(_params: QueryAccountsRequest = {}): Promise<QueryAccountsResponseSDKType> {
    const endpoint = `kava/cdp/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint);
  }
  /* TotalPrincipal queries the total principal of a given collateral type. */
  async totalPrincipal(params: QueryTotalPrincipalRequest): Promise<QueryTotalPrincipalResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.collateralType !== "undefined") {
      options.params.collateral_type = params.collateralType;
    }
    const endpoint = `kava/cdp/v1beta1/totalPrincipal`;
    return await this.req.get<QueryTotalPrincipalResponseSDKType>(endpoint, options);
  }
  /* TotalCollateral queries the total collateral of a given collateral type. */
  async totalCollateral(params: QueryTotalCollateralRequest): Promise<QueryTotalCollateralResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.collateralType !== "undefined") {
      options.params.collateral_type = params.collateralType;
    }
    const endpoint = `kava/cdp/v1beta1/totalCollateral`;
    return await this.req.get<QueryTotalCollateralResponseSDKType>(endpoint, options);
  }
  /* Cdps queries all active CDPs. */
  async cdps(params: QueryCdpsRequest): Promise<QueryCdpsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.collateralType !== "undefined") {
      options.params.collateral_type = params.collateralType;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    if (typeof params?.ratio !== "undefined") {
      options.params.ratio = params.ratio;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `kava/cdp/v1beta1/cdps`;
    return await this.req.get<QueryCdpsResponseSDKType>(endpoint, options);
  }
  /* Cdp queries a CDP with the input owner address and collateral type. */
  async cdp(params: QueryCdpRequest): Promise<QueryCdpResponseSDKType> {
    const endpoint = `kava/cdp/v1beta1/cdps/${params.owner}/${params.collateralType}`;
    return await this.req.get<QueryCdpResponseSDKType>(endpoint);
  }
  /* Deposits queries deposits associated with the CDP owned by an address for a collateral type. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const endpoint = `kava/cdp/v1beta1/cdps/deposits/${params.owner}/${params.collateralType}`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint);
  }
}