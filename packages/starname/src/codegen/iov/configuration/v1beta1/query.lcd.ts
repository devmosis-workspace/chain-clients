import { LCDClient } from "@osmonauts/lcd";
import { QueryConfigRequest, QueryConfigResponseSDKType, QueryFeesRequest, QueryFeesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.config = this.config.bind(this);
    this.fees = this.fees.bind(this);
  }
  /* Config gets starname configuration. */
  async config(_params: QueryConfigRequest = {}): Promise<QueryConfigResponseSDKType> {
    const endpoint = `starname/v1beta1/configuration/params`;
    return await this.req.get<QueryConfigResponseSDKType>(endpoint);
  }
  /* Fees gets starname product fees. */
  async fees(_params: QueryFeesRequest = {}): Promise<QueryFeesResponseSDKType> {
    const endpoint = `starname/v1beta1/configuration/fees`;
    return await this.req.get<QueryFeesResponseSDKType>(endpoint);
  }
}