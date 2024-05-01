import { Rpc } from "../helpers";
import { MsgClaim, MsgClaimResponse, MsgCreateReward, MsgCreateRewardResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    createReward(request: MsgCreateReward): Promise<MsgCreateRewardResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/rewards module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    createReward(request: MsgCreateReward): Promise<MsgCreateRewardResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
