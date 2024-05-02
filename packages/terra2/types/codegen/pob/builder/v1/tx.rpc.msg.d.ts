import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    auctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
