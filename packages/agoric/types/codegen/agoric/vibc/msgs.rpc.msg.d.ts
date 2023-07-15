import { Rpc } from "../../helpers";
import { MsgSendPacket, MsgSendPacketResponse } from "./msgs";
/** The module transactions. */
export interface Msg {
    /** Force sending an arbitrary packet on a channel. */
    sendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    sendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse>;
}
