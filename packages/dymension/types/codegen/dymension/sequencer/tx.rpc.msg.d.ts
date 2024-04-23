import { Rpc } from "../../helpers";
import { MsgCreateSequencer, MsgCreateSequencerResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createSequencer(request: MsgCreateSequencer): Promise<MsgCreateSequencerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createSequencer(request: MsgCreateSequencer): Promise<MsgCreateSequencerResponse>;
}
