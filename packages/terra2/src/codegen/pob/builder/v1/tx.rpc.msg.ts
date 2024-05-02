import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAuctionBid, MsgAuctionBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the x/builder Msg service. */
export interface Msg {
  /** AuctionBid defines a method for sending bids to the x/builder module. */
  auctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/builder
   * module parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.auctionBid = this.auctionBid.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  auctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse> {
    const data = MsgAuctionBid.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "AuctionBid", data);
    return promise.then(data => MsgAuctionBidResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("pob.builder.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}