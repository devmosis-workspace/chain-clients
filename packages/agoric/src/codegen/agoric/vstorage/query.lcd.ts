import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDataRequest, QueryDataResponseSDKType, QueryChildrenRequest, QueryChildrenResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.data = this.data.bind(this);
    this.children = this.children.bind(this);
  }
  /* Return an arbitrary vstorage datum. */
  async data(params: QueryDataRequest): Promise<QueryDataResponseSDKType> {
    const endpoint = `agoric/vstorage/data/${params.path}`;
    return await this.req.get<QueryDataResponseSDKType>(endpoint);
  }
  /* Return the children of a given vstorage path. */
  async children(params: QueryChildrenRequest): Promise<QueryChildrenResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `agoric/vstorage/children/${params.path}`;
    return await this.req.get<QueryChildrenResponseSDKType>(endpoint, options);
  }
}