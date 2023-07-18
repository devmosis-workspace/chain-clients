import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, FeeInfoRequest, FeeInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.feeInfo = this.feeInfo.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron-org/neutron/feerefunder/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* FeeInfo */
  async feeInfo(params: FeeInfoRequest): Promise<FeeInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.channelId !== "undefined") {
      options.params.channel_id = params.channelId;
    }
    if (typeof params?.portId !== "undefined") {
      options.params.port_id = params.portId;
    }
    if (typeof params?.sequence !== "undefined") {
      options.params.sequence = params.sequence;
    }
    const endpoint = `neutron-org/neutron/feerefunder/info`;
    return await this.req.get<FeeInfoResponseSDKType>(endpoint, options);
  }
}