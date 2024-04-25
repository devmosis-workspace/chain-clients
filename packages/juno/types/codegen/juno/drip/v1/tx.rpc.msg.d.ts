import { Rpc } from "../../../helpers";
import { MsgDistributeTokens, MsgDistributeTokensResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
    /** DistributeTokens distribute the sent tokens to all stakers in the next block */
    distributeTokens(request: MsgDistributeTokens): Promise<MsgDistributeTokensResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    distributeTokens(request: MsgDistributeTokens): Promise<MsgDistributeTokensResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
