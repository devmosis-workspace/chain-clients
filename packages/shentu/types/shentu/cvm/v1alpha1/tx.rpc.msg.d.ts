import { Rpc } from "../../../helpers";
import { MsgCall, MsgCallResponse, MsgDeploy, MsgDeployResponse } from "./tx";
export interface Msg {
    call(request: MsgCall): Promise<MsgCallResponse>;
    deploy(request: MsgDeploy): Promise<MsgDeployResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    call(request: MsgCall): Promise<MsgCallResponse>;
    deploy(request: MsgDeploy): Promise<MsgDeployResponse>;
}
