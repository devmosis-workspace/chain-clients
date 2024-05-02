import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType, QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponseSDKType } from "./query";
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
    this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
  }
  /* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Given the denom, returns the authority metadata for the denom.
   This method can receive both the denom encoded to URL (for the LCD requests)
   and the denom not encoded:
   e.g. factory%2Fterra1v0eee20gjl68fuk0chyrkch2z7suw2mhg3wkxf%2Futoken931 */
  async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
    return await this.req.get<QueryDenomAuthorityMetadataResponseSDKType>(endpoint);
  }
  /* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  }
  /* BeforeSendHookAddress defines a gRPC query method for
   getting the address registered for the before send hook. */
  async beforeSendHookAddress(params: QueryBeforeSendHookAddressRequest): Promise<QueryBeforeSendHookAddressResponseSDKType> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/before_send_hook`;
    return await this.req.get<QueryBeforeSendHookAddressResponseSDKType>(endpoint);
  }
}