import { Rpc } from "../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the feeburn module
     * parameters. The authority is defined in the keeper.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
