import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
  }
  /* Params returns the total set of minting parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DenomAuthorityMetadata */
  async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/factory/${params.creator}/${params.subdenom}/authority_metadata`;
    return await this.req.get<QueryDenomAuthorityMetadataResponseSDKType>(endpoint);
  }
  /* DenomsFromCreator */
  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  }
}