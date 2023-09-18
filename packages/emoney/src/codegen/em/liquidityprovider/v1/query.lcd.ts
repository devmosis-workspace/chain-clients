import { LCDClient } from "@cosmology/lcd";
import { QueryListRequest, QueryListResponseSDKType, QueryMintableRequest, QueryMintableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.list = this.list.bind(this);
    this.mintable = this.mintable.bind(this);
  }
  /* List */
  async list(_params: QueryListRequest = {}): Promise<QueryListResponseSDKType> {
    const endpoint = `e-money/liquidityprovider/v1/list`;
    return await this.req.get<QueryListResponseSDKType>(endpoint);
  }
  /* Mintable */
  async mintable(params: QueryMintableRequest): Promise<QueryMintableResponseSDKType> {
    const endpoint = `e-money/liquidityprovider/v1/mintable/${params.address}`;
    return await this.req.get<QueryMintableResponseSDKType>(endpoint);
  }
}