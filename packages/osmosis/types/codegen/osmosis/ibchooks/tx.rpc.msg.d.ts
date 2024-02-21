import { Rpc } from "../../helpers";
import { MsgEmitIBCAck, MsgEmitIBCAckResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * EmitIBCAck checks the sender can emit the ack and writes the IBC
     * acknowledgement
     */
    emitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    emitIBCAck(request: MsgEmitIBCAck): Promise<MsgEmitIBCAckResponse>;
}
