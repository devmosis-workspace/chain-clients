import { Rpc } from "../../helpers";
import { MsgSubmitCorkRequest, MsgSubmitCorkResponse, MsgScheduleCorkRequest, MsgScheduleCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
    submitCork(request: MsgSubmitCorkRequest): Promise<MsgSubmitCorkResponse>;
    scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitCork(request: MsgSubmitCorkRequest): Promise<MsgSubmitCorkResponse>;
    scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
