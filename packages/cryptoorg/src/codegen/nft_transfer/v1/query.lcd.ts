import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryClassTraceRequest, QueryClassTraceResponseSDKType, QueryClassTracesRequest, QueryClassTracesResponseSDKType, QueryClassHashRequest, QueryClassHashResponseSDKType, QueryEscrowAddressRequest, QueryEscrowAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.classTrace = this.classTrace.bind(this);
    this.classTraces = this.classTraces.bind(this);
    this.classHash = this.classHash.bind(this);
    this.escrowAddress = this.escrowAddress.bind(this);
  }
  /* ClassTrace queries a class trace information. */
  async classTrace(params: QueryClassTraceRequest): Promise<QueryClassTraceResponseSDKType> {
    const endpoint = `ibc/apps/nft_transfer/v1/class_traces/${params.hash}`;
    return await this.req.get<QueryClassTraceResponseSDKType>(endpoint);
  }
  /* ClassTraces queries all class traces. */
  async classTraces(params: QueryClassTracesRequest = {
    pagination: undefined
  }): Promise<QueryClassTracesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/apps/nft_transfer/v1/class_traces`;
    return await this.req.get<QueryClassTracesResponseSDKType>(endpoint, options);
  }
  /* ClassHash queries a class hash information. */
  async classHash(params: QueryClassHashRequest): Promise<QueryClassHashResponseSDKType> {
    const endpoint = `ibc/apps/nft_transfer/v1/class_hashes/${params.trace}`;
    return await this.req.get<QueryClassHashResponseSDKType>(endpoint);
  }
  /* EscrowAddress returns the escrow address for a particular port and channel id. */
  async escrowAddress(params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponseSDKType> {
    const endpoint = `ibc/apps/nft_transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`;
    return await this.req.get<QueryEscrowAddressResponseSDKType>(endpoint);
  }
}