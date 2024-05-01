import { Rpc } from "../../../helpers";
import { MsgCyberlink, MsgCyberlinkResponse } from "./tx";
export interface Msg {
    cyberlink(request: MsgCyberlink): Promise<MsgCyberlinkResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    cyberlink(request: MsgCyberlink): Promise<MsgCyberlinkResponse>;
}
