import { Rpc } from "../../../helpers";
import { MsgCreateCampaign, MsgCreateCampaignResponse, MsgCancelCampaign, MsgCancelCampaignResponse, MsgClaim, MsgClaimResponse, MsgDepositCampaign, MsgDepositCampaignResponse } from "./tx";
export interface Msg {
    createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
    cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
    depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
}
