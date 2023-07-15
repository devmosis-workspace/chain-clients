import { Rpc } from "../../../helpers";
import { MsgBid, MsgBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the auction Msg service. */
export interface Msg {
    /** Bid defines a method for placing a bid for an auction */
    bid(request: MsgBid): Promise<MsgBidResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    bid(request: MsgBid): Promise<MsgBidResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
