import { LCDClient } from "@osmonauts/lcd";
import { QueryIssuersRequest, QueryIssuersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.issuers = this.issuers.bind(this);
  }
  /* Issuers */
  async issuers(_params: QueryIssuersRequest = {}): Promise<QueryIssuersResponseSDKType> {
    const endpoint = `e-money/issuer/v1/issuers`;
    return await this.req.get<QueryIssuersResponseSDKType>(endpoint);
  }
}