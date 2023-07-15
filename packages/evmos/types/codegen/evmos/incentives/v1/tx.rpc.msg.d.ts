import { Rpc } from "../../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the incentives Msg service. */
export interface Msg {
    /**
     * UpdateParams defined a governance operation for updating the x/incentives module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
