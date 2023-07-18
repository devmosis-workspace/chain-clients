import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStateRequest, QueryStateResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
  }
  /* Params queries params of the vbank module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `agoric/vbank/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* State queries current state of the vbank module. */
  async state(_params: QueryStateRequest = {}): Promise<QueryStateResponseSDKType> {
    const endpoint = `agoric/vbank/state`;
    return await this.req.get<QueryStateResponseSDKType>(endpoint);
  }
}