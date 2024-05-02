import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { PositionsRequest, PositionsResponseSDKType, PositionsForAddressRequest, PositionsForAddressResponseSDKType, PositionsByPoolRequest, PositionsByPoolResponseSDKType, ParamsRequest, ParamsResponseSDKType, StatusRequest, StatusResponseSDKType, WhitelistRequest, WhitelistResponseSDKType, IsWhitelistedRequest, IsWhitelistedResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.getPositions = this.getPositions.bind(this);
    this.getPositionsForAddress = this.getPositionsForAddress.bind(this);
    this.getPositionsByPool = this.getPositionsByPool.bind(this);
    this.getParams = this.getParams.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.getWhitelist = this.getWhitelist.bind(this);
    this.isWhitelisted = this.isWhitelisted.bind(this);
  }
  /* GetPositions */
  async getPositions(params: PositionsRequest = {
    pagination: undefined
  }): Promise<PositionsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/margin/v1/positions/${params.pagination.key}`;
    return await this.req.get<PositionsResponseSDKType>(endpoint, options);
  }
  /* GetPositionsForAddress */
  async getPositionsForAddress(params: PositionsForAddressRequest): Promise<PositionsForAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/margin/v1/mtps-for-address/${params.address}/${params.pagination.key}`;
    return await this.req.get<PositionsForAddressResponseSDKType>(endpoint, options);
  }
  /* GetPositionsByPool */
  async getPositionsByPool(params: PositionsByPoolRequest): Promise<PositionsByPoolResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/margin/v1/mtps-by-pool/${params.asset}/${params.pagination.key}`;
    return await this.req.get<PositionsByPoolResponseSDKType>(endpoint, options);
  }
  /* GetParams */
  async getParams(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `sifchain/margin/v1/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
  /* GetStatus */
  async getStatus(_params: StatusRequest = {}): Promise<StatusResponseSDKType> {
    const endpoint = `sifchain/margin/v1/status`;
    return await this.req.get<StatusResponseSDKType>(endpoint);
  }
  /* GetWhitelist */
  async getWhitelist(params: WhitelistRequest = {
    pagination: undefined
  }): Promise<WhitelistResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `sifchain/margin/v1/whitelist`;
    return await this.req.get<WhitelistResponseSDKType>(endpoint, options);
  }
  /* IsWhitelisted */
  async isWhitelisted(params: IsWhitelistedRequest): Promise<IsWhitelistedResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    const endpoint = `sifchain/margin/v1/is-whitelisted`;
    return await this.req.get<IsWhitelistedResponseSDKType>(endpoint, options);
  }
}