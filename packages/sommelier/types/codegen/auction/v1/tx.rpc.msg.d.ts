import { Rpc } from "../../helpers";
import { MsgSubmitBidRequest, MsgSubmitBidResponse } from "./tx";
export interface Msg {
    submitBid(request: MsgSubmitBidRequest): Promise<MsgSubmitBidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitBid(request: MsgSubmitBidRequest): Promise<MsgSubmitBidResponse>;
}
