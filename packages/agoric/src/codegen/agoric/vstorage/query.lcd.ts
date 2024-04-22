import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDataRequest, QueryDataResponseSDKType, QueryCapDataRequest, QueryCapDataResponseSDKType, QueryChildrenRequest, QueryChildrenResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.data = this.data.bind(this);
    this.capData = this.capData.bind(this);
    this.children = this.children.bind(this);
  }
  /* Return the raw string value of an arbitrary vstorage datum. */
  async data(params: QueryDataRequest): Promise<QueryDataResponseSDKType> {
    const endpoint = `agoric/vstorage/data/${params.path}`;
    return await this.req.get<QueryDataResponseSDKType>(endpoint);
  }
  /* Return a formatted representation of a vstorage datum that must be
   a valid StreamCell with CapData values, or standalone CapData. */
  async capData(params: QueryCapDataRequest): Promise<QueryCapDataResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.mediaType !== "undefined") {
      options.params.media_type = params.mediaType;
    }
    if (typeof params?.itemFormat !== "undefined") {
      options.params.item_format = params.itemFormat;
    }
    if (typeof params?.remotableValueFormat !== "undefined") {
      options.params.remotable_value_format = params.remotableValueFormat;
    }
    const endpoint = `agoric/vstorage/capdata/${params.path}`;
    return await this.req.get<QueryCapDataResponseSDKType>(endpoint, options);
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