import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/OmniFlix.itc.v1.MsgCreateCampaign": {
        aminoType: string;
        toAmino: (message: MsgCreateCampaign) => import("./tx").MsgCreateCampaignAmino;
        fromAmino: (object: import("./tx").MsgCreateCampaignAmino) => MsgCreateCampaign;
    };
    "/OmniFlix.itc.v1.MsgCancelCampaign": {
        aminoType: string;
        toAmino: (message: MsgCancelCampaign) => import("./tx").MsgCancelCampaignAmino;
        fromAmino: (object: import("./tx").MsgCancelCampaignAmino) => MsgCancelCampaign;
    };
    "/OmniFlix.itc.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: MsgClaim) => import("./tx").MsgClaimAmino;
        fromAmino: (object: import("./tx").MsgClaimAmino) => MsgClaim;
    };
    "/OmniFlix.itc.v1.MsgDepositCampaign": {
        aminoType: string;
        toAmino: (message: MsgDepositCampaign) => import("./tx").MsgDepositCampaignAmino;
        fromAmino: (object: import("./tx").MsgDepositCampaignAmino) => MsgDepositCampaign;
    };
    "/OmniFlix.itc.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
