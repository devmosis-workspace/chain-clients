import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCollectionRequest, QueryCollectionResponseSDKType, QueryIBCCollectionRequest, QueryDenomRequest, QueryDenomResponseSDKType, QueryIBCDenomRequest, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryONFTRequest, QueryONFTResponseSDKType, QueryIBCDenomONFTRequest, QueryOwnerONFTsRequest, QueryOwnerONFTsResponseSDKType, QueryOwnerIBCDenomONFTsRequest, QuerySupplyRequest, QuerySupplyResponseSDKType, QueryIBCDenomSupplyRequest, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.collection = this.collection.bind(this);
    this.iBCCollection = this.iBCCollection.bind(this);
    this.denom = this.denom.bind(this);
    this.iBCDenom = this.iBCDenom.bind(this);
    this.denoms = this.denoms.bind(this);
    this.oNFT = this.oNFT.bind(this);
    this.iBCDenomONFT = this.iBCDenomONFT.bind(this);
    this.ownerONFTs = this.ownerONFTs.bind(this);
    this.ownerIBCDenomONFTs = this.ownerIBCDenomONFTs.bind(this);
    this.supply = this.supply.bind(this);
    this.iBCDenomSupply = this.iBCDenomSupply.bind(this);
    this.params = this.params.bind(this);
  }
  /* Collection */
  async collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/onft/v1beta1/collections/${params.denomId}`;
    return await this.req.get<QueryCollectionResponseSDKType>(endpoint, options);
  }
  /* IBCCollection */
  async iBCCollection(params: QueryIBCCollectionRequest): Promise<QueryCollectionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/onft/v1beta1/collections/ibc/${params.hash}`;
    return await this.req.get<QueryCollectionResponseSDKType>(endpoint, options);
  }
  /* Denom */
  async denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType> {
    const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint);
  }
  /* IBCDenom */
  async iBCDenom(params: QueryIBCDenomRequest): Promise<QueryDenomResponseSDKType> {
    const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint);
  }
  /* Denoms */
  async denoms(params: QueryDenomsRequest): Promise<QueryDenomsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `omniflix/onft/v1beta1/denoms`;
    return await this.req.get<QueryDenomsResponseSDKType>(endpoint, options);
  }
  /* ONFT */
  async oNFT(params: QueryONFTRequest): Promise<QueryONFTResponseSDKType> {
    const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}/onfts/${params.id}`;
    return await this.req.get<QueryONFTResponseSDKType>(endpoint);
  }
  /* IBCDenomONFT */
  async iBCDenomONFT(params: QueryIBCDenomONFTRequest): Promise<QueryONFTResponseSDKType> {
    const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}/onfts/${params.id}`;
    return await this.req.get<QueryONFTResponseSDKType>(endpoint);
  }
  /* OwnerONFTs */
  async ownerONFTs(params: QueryOwnerONFTsRequest): Promise<QueryOwnerONFTsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/onft/v1beta1/onfts/${params.denomId}/${params.owner}`;
    return await this.req.get<QueryOwnerONFTsResponseSDKType>(endpoint, options);
  }
  /* OwnerIBCDenomONFTs */
  async ownerIBCDenomONFTs(params: QueryOwnerIBCDenomONFTsRequest): Promise<QueryOwnerONFTsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `omniflix/onft/v1beta1/onfts/ibc/${params.hash}/${params.owner}`;
    return await this.req.get<QueryOwnerONFTsResponseSDKType>(endpoint, options);
  }
  /* Supply */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint, options);
  }
  /* IBCDenomSupply */
  async iBCDenomSupply(params: QueryIBCDenomSupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint, options);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `omniflix/onft/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}