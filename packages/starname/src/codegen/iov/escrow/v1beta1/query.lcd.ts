import { LCDClient } from "@cosmology/lcd";
import { QueryEscrowRequest, QueryEscrowResponseSDKType, QueryEscrowsRequest, QueryEscrowsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.escrow = this.escrow.bind(this);
    this.escrows = this.escrows.bind(this);
  }
  /* Escrow queries the escrow by the specified id */
  async escrow(params: QueryEscrowRequest): Promise<QueryEscrowResponseSDKType> {
    const endpoint = `escrow/escrow/${params.id}`;
    return await this.req.get<QueryEscrowResponseSDKType>(endpoint);
  }
  /* Escrows queries escrows by the specified key-value pairs */
  async escrows(params: QueryEscrowsRequest): Promise<QueryEscrowsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.seller !== "undefined") {
      options.params.seller = params.seller;
    }
    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }
    if (typeof params?.objectKey !== "undefined") {
      options.params.object_key = params.objectKey;
    }
    if (typeof params?.paginationStart !== "undefined") {
      options.params.pagination_start = params.paginationStart;
    }
    if (typeof params?.paginationLength !== "undefined") {
      options.params.pagination_length = params.paginationLength;
    }
    const endpoint = `escrow/escrows`;
    return await this.req.get<QueryEscrowsResponseSDKType>(endpoint, options);
  }
}