import { Rpc } from "../../../helpers";
import { MsgSwap, MsgSwapResponse, MsgSwapSend, MsgSwapSendResponse } from "./tx";
/** Msg defines the market Msg service. */
export interface Msg {
    /**
     * Swap defines a method for swapping coin from one denom to another
     * denom.
     */
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    /**
     * SwapSend defines a method for swapping and sending coin from a account to other
     * account.
     */
    swapSend(request: MsgSwapSend): Promise<MsgSwapSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    swapSend(request: MsgSwapSend): Promise<MsgSwapSendResponse>;
}
