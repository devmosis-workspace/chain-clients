import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEgressRequest, QueryEgressResponseSDKType, QueryMailboxRequest, QueryMailboxResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.egress = this.egress.bind(this);
    this.mailbox = this.mailbox.bind(this);
  }
  /* Params queries params of the swingset module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `agoric/swingset/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Egress queries a provisioned egress. */
  async egress(params: QueryEgressRequest): Promise<QueryEgressResponseSDKType> {
    const endpoint = `agoric/swingset/egress/${params.peer}`;
    return await this.req.get<QueryEgressResponseSDKType>(endpoint);
  }
  /* Return the contents of a peer's outbound mailbox. */
  async mailbox(params: QueryMailboxRequest): Promise<QueryMailboxResponseSDKType> {
    const endpoint = `agoric/swingset/mailbox/${params.peer}`;
    return await this.req.get<QueryMailboxResponseSDKType>(endpoint);
  }
}