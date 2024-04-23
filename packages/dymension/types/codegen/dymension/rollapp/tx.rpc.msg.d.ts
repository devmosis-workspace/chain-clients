import { Rpc } from "../../helpers";
import { MsgCreateRollapp, MsgCreateRollappResponse, MsgUpdateState, MsgUpdateStateResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createRollapp(request: MsgCreateRollapp): Promise<MsgCreateRollappResponse>;
    updateState(request: MsgUpdateState): Promise<MsgUpdateStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createRollapp(request: MsgCreateRollapp): Promise<MsgCreateRollappResponse>;
    updateState(request: MsgUpdateState): Promise<MsgUpdateStateResponse>;
}
