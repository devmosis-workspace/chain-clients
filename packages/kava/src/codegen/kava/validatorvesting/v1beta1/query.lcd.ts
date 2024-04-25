import { LCDClient } from "@cosmology/lcd";
import { QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyResponseSDKType, QueryCirculatingSupplyHARDRequest, QueryCirculatingSupplyHARDResponseSDKType, QueryCirculatingSupplyUSDXRequest, QueryCirculatingSupplyUSDXResponseSDKType, QueryCirculatingSupplySWPRequest, QueryCirculatingSupplySWPResponseSDKType, QueryTotalSupplyHARDRequest, QueryTotalSupplyHARDResponseSDKType, QueryTotalSupplyUSDXRequest, QueryTotalSupplyUSDXResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.circulatingSupplyHARD = this.circulatingSupplyHARD.bind(this);
    this.circulatingSupplyUSDX = this.circulatingSupplyUSDX.bind(this);
    this.circulatingSupplySWP = this.circulatingSupplySWP.bind(this);
    this.totalSupplyHARD = this.totalSupplyHARD.bind(this);
    this.totalSupplyUSDX = this.totalSupplyUSDX.bind(this);
  }
  /* CirculatingSupply returns the total amount of kava tokens in circulation */
  async circulatingSupply(_params: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/circulating_supply`;
    return await this.req.get<QueryCirculatingSupplyResponseSDKType>(endpoint);
  }
  /* TotalSupply returns the total amount of kava tokens */
  async totalSupply(_params: QueryTotalSupplyRequest = {}): Promise<QueryTotalSupplyResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/total_supply`;
    return await this.req.get<QueryTotalSupplyResponseSDKType>(endpoint);
  }
  /* CirculatingSupplyHARD returns the total amount of hard tokens in circulation */
  async circulatingSupplyHARD(_params: QueryCirculatingSupplyHARDRequest = {}): Promise<QueryCirculatingSupplyHARDResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/circulating_supply_hard`;
    return await this.req.get<QueryCirculatingSupplyHARDResponseSDKType>(endpoint);
  }
  /* CirculatingSupplyUSDX returns the total amount of usdx tokens in circulation */
  async circulatingSupplyUSDX(_params: QueryCirculatingSupplyUSDXRequest = {}): Promise<QueryCirculatingSupplyUSDXResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/circulating_supply_usdx`;
    return await this.req.get<QueryCirculatingSupplyUSDXResponseSDKType>(endpoint);
  }
  /* CirculatingSupplySWP returns the total amount of swp tokens in circulation */
  async circulatingSupplySWP(_params: QueryCirculatingSupplySWPRequest = {}): Promise<QueryCirculatingSupplySWPResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/circulating_supply_swp`;
    return await this.req.get<QueryCirculatingSupplySWPResponseSDKType>(endpoint);
  }
  /* TotalSupplyHARD returns the total amount of hard tokens */
  async totalSupplyHARD(_params: QueryTotalSupplyHARDRequest = {}): Promise<QueryTotalSupplyHARDResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/total_supply_hard`;
    return await this.req.get<QueryTotalSupplyHARDResponseSDKType>(endpoint);
  }
  /* TotalSupplyUSDX returns the total amount of usdx tokens */
  async totalSupplyUSDX(_params: QueryTotalSupplyUSDXRequest = {}): Promise<QueryTotalSupplyUSDXResponseSDKType> {
    const endpoint = `kava/validator-vesting/v1beta1/total_supply_usdx`;
    return await this.req.get<QueryTotalSupplyUSDXResponseSDKType>(endpoint);
  }
}