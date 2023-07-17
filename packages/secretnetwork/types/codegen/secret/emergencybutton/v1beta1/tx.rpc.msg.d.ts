import { Rpc } from "../../../helpers";
import { MsgToggleIbcSwitch, MsgToggleIbcSwitchResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** ToggleIbcSwitch defines a method for toggling the status of the emergencybutton. */
    toggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    toggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}
