import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryInterchainAccountAddressRequest, QueryInterchainAccountAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.interchainAccountAddress = this.interchainAccountAddress.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/interchaintxs/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* InterchainAccountAddress */
  async interchainAccountAddress(params: QueryInterchainAccountAddressRequest): Promise<QueryInterchainAccountAddressResponseSDKType> {
    const endpoint = `neutron/interchaintxs/${params.ownerAddress}/${params.interchainAccountId}/${params.connectionId}/interchain_account_address`;
    return await this.req.get<QueryInterchainAccountAddressResponseSDKType>(endpoint);
  }
}