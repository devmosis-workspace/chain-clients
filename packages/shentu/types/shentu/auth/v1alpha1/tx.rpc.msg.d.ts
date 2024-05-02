import { Rpc } from "../../../helpers";
import { MsgUnlock, MsgUnlockResponse } from "./tx";
/** Msg defines the auth Msg service. */
export interface Msg {
    /**
     * Unlock defines a method for unlocking coins from a manual vesting
     * account.
     */
    unlock(request: MsgUnlock): Promise<MsgUnlockResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    unlock(request: MsgUnlock): Promise<MsgUnlockResponse>;
}
