import { LCDClient } from "@cosmology/lcd";
import { QueryAddress, QueryAddressResponseSDKType, QueryStatsByChannel, QueryStatsByChannelResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.address = this.address.bind(this);
    this.statsByChannel = this.statsByChannel.bind(this);
  }
  /* Address */
  async address(params: QueryAddress): Promise<QueryAddressResponseSDKType> {
    const endpoint = `noble/forwarding/v1/address/${params.channel}/${params.recipient}`;
    return await this.req.get<QueryAddressResponseSDKType>(endpoint);
  }
  /* StatsByChannel */
  async statsByChannel(params: QueryStatsByChannel): Promise<QueryStatsByChannelResponseSDKType> {
    const endpoint = `noble/forwarding/v1/stats/${params.channel}`;
    return await this.req.get<QueryStatsByChannelResponseSDKType>(endpoint);
  }
}