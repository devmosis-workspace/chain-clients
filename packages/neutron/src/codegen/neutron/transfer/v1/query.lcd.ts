import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomHashRequest, QueryDenomHashResponseSDKType } from "../../../ibc/applications/transfer/v1/query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */
  async denomTrace(params: ibc.applications.transfer.v1.QueryDenomTraceRequest): Promise<ibc.applications.transfer.v1.QueryDenomTraceResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.req.get<ibc.applications.transfer.v1.QueryDenomTraceResponseSDKType>(endpoint);
  }
  /* DenomTraces queries all denomination traces. */
  async denomTraces(params: ibc.applications.transfer.v1.QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<ibc.applications.transfer.v1.QueryDenomTracesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.req.get<ibc.applications.transfer.v1.QueryDenomTracesResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters of the ibc-transfer module. */
  async params(_params: ibc.applications.transfer.v1.QueryParamsRequest = {}): Promise<ibc.applications.transfer.v1.QueryParamsResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<ibc.applications.transfer.v1.QueryParamsResponseSDKType>(endpoint);
  }
  /* DenomHash queries a denomination hash information. */
  async denomHash(params: ibc.applications.transfer.v1.QueryDenomHashRequest): Promise<ibc.applications.transfer.v1.QueryDenomHashResponseSDKType> {
    const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
    return await this.req.get<ibc.applications.transfer.v1.QueryDenomHashResponseSDKType>(endpoint);
  }
}