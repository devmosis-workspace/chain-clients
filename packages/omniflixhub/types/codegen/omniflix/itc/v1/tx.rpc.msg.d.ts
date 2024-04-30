import { Rpc } from "../../../helpers";
import { MsgCreateCampaign, MsgCreateCampaignResponse, MsgCancelCampaign, MsgCancelCampaignResponse, MsgClaim, MsgClaimResponse, MsgDepositCampaign, MsgDepositCampaignResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
    createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/itc module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
