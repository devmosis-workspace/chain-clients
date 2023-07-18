import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest } from "./query";
import { ParamsSDKType } from "./genesis";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<ParamsSDKType> {
    const endpoint = `noble/globalfee/v1beta1/params`;
    return await this.req.get<ParamsSDKType>(endpoint);
  }
}