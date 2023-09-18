import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgBid, MsgBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the auction Msg service. */
export interface Msg {
  /** Bid defines a method for placing a bid for an auction */
  bid(request: MsgBid): Promise<MsgBidResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.bid = this.bid.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  bid(request: MsgBid): Promise<MsgBidResponse> {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Msg", "Bid", data);
    return promise.then(data => MsgBidResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}