import { Rpc } from "../../helpers";
import { MsgScheduleCorkRequest, MsgScheduleCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
    scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
