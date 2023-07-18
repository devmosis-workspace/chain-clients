import { setPaginationParams } from "../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QuerySupersRequest, QuerySupersResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.supers = this.supers.bind(this);
  }
  /* Supers returns all Supers */
  async supers(params: QuerySupersRequest = {
    pagination: undefined
  }): Promise<QuerySupersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `irishub/guardian/supers`;
    return await this.req.get<QuerySupersResponseSDKType>(endpoint, options);
  }
}