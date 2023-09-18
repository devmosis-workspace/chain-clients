import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QuerySupplyRequest, QuerySupplyResponseSDKType, QueryOwnerRequest, QueryOwnerResponseSDKType, QueryCollectionRequest, QueryCollectionResponseSDKType, QueryDenomRequest, QueryDenomResponseSDKType, QueryDenomByNameRequest, QueryDenomByNameResponseSDKType, QueryDenomsRequest, QueryDenomsResponseSDKType, QueryNFTRequest, QueryNFTResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.supply = this.supply.bind(this);
    this.owner = this.owner.bind(this);
    this.collection = this.collection.bind(this);
    this.denom = this.denom.bind(this);
    this.denomByName = this.denomByName.bind(this);
    this.denoms = this.denoms.bind(this);
    this.nFT = this.nFT.bind(this);
  }
  /* Supply queries the total supply of a given denom or owner */
  async supply(params: QuerySupplyRequest): Promise<QuerySupplyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    const endpoint = `chainmain/nft/collections/${params.denomId}/supply`;
    return await this.req.get<QuerySupplyResponseSDKType>(endpoint, options);
  }
  /* Owner queries the NFTs of the specified owner */
  async owner(params: QueryOwnerRequest): Promise<QueryOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.denomId !== "undefined") {
      options.params.denom_id = params.denomId;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `chainmain/nft/nfts`;
    return await this.req.get<QueryOwnerResponseSDKType>(endpoint, options);
  }
  /* Collection queries the NFTs of the specified denom */
  async collection(params: QueryCollectionRequest): Promise<QueryCollectionResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `chainmain/nft/collections/${params.denomId}`;
    return await this.req.get<QueryCollectionResponseSDKType>(endpoint, options);
  }
  /* Denom queries the definition of a given denom */
  async denom(params: QueryDenomRequest): Promise<QueryDenomResponseSDKType> {
    const endpoint = `chainmain/nft/denoms/${params.denomId}`;
    return await this.req.get<QueryDenomResponseSDKType>(endpoint);
  }
  /* DenomByName queries the definition of a given denom by name */
  async denomByName(params: QueryDenomByNameRequest): Promise<QueryDenomByNameResponseSDKType> {
    const endpoint = `chainmain/nft/denoms/name/${params.denomName}`;
    return await this.req.get<QueryDenomByNameResponseSDKType>(endpoint);
  }
  /* Denoms queries all the denoms */
  async denoms(params: QueryDenomsRequest = {
    pagination: undefined
  }): Promise<QueryDenomsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `chainmain/nft/denoms`;
    return await this.req.get<QueryDenomsResponseSDKType>(endpoint, options);
  }
  /* NFT queries the NFT for the given denom and token ID */
  async nFT(params: QueryNFTRequest): Promise<QueryNFTResponseSDKType> {
    const endpoint = `chainmain/nft/nfts/${params.denomId}/${params.tokenId}`;
    return await this.req.get<QueryNFTResponseSDKType>(endpoint);
  }
}