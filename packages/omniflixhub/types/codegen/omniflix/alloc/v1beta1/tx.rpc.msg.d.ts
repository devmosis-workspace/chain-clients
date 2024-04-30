import { Rpc } from "../../../helpers";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/alloc module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
