import { Rpc } from "../../../helpers";
import { MsgLockedSend, MsgLockedSendResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * LockedSend defines a method for sending coins and locking them from one
     * account to another account.
     */
    lockedSend(request: MsgLockedSend): Promise<MsgLockedSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    lockedSend(request: MsgLockedSend): Promise<MsgLockedSendResponse>;
}
