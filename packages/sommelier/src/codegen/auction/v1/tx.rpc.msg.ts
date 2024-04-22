import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSubmitBidRequest, MsgSubmitBidResponse } from "./tx";
export interface Msg {
  submitBid(request: MsgSubmitBidRequest): Promise<MsgSubmitBidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitBid = this.submitBid.bind(this);
  }
  submitBid(request: MsgSubmitBidRequest): Promise<MsgSubmitBidResponse> {
    const data = MsgSubmitBidRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Msg", "SubmitBid", data);
    return promise.then(data => MsgSubmitBidResponse.decode(new BinaryReader(data)));
  }
}