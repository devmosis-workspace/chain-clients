import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign } from "./tx";
export interface MsgCreateCampaignAminoType extends AminoMsg {
    type: "/OmniFlix.itc.v1.MsgCreateCampaign";
    value: {
        name: string;
        description: string;
        interaction: number;
        claim_type: number;
        nft_denom_id: string;
        tokens_per_claim: {
            denom: string;
            amount: string;
        };
        max_allowed_claims: string;
        deposit: {
            denom: string;
            amount: string;
        };
        nft_mint_details: {
            denom_id: string;
            name: string;
            description: string;
            media_uri: string;
            preview_uri: string;
            royalty_share: string;
            transferable: boolean;
            extensible: boolean;
            nsfw: boolean;
            data: string;
        };
        start_time: {
            seconds: string;
            nanos: number;
        };
        duration: {
            seconds: string;
            nanos: number;
        };
        distribution: {
            type: number;
            stream_duration: {
                seconds: string;
                nanos: number;
            };
        };
        creator: string;
        creation_fee: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgCancelCampaignAminoType extends AminoMsg {
    type: "/OmniFlix.itc.v1.MsgCancelCampaign";
    value: {
        campaign_id: string;
        creator: string;
    };
}
export interface MsgClaimAminoType extends AminoMsg {
    type: "/OmniFlix.itc.v1.MsgClaim";
    value: {
        campaign_id: string;
        nft_id: string;
        interaction: number;
        claimer: string;
    };
}
export interface MsgDepositCampaignAminoType extends AminoMsg {
    type: "/OmniFlix.itc.v1.MsgDepositCampaign";
    value: {
        campaign_id: string;
        amount: {
            denom: string;
            amount: string;
        };
        depositor: string;
    };
}
export declare const AminoConverter: {
    "/OmniFlix.itc.v1.MsgCreateCampaign": {
        aminoType: string;
        toAmino: ({ name, description, interaction, claimType, nftDenomId, tokensPerClaim, maxAllowedClaims, deposit, nftMintDetails, startTime, duration, distribution, creator, creationFee }: MsgCreateCampaign) => MsgCreateCampaignAminoType["value"];
        fromAmino: ({ name, description, interaction, claim_type, nft_denom_id, tokens_per_claim, max_allowed_claims, deposit, nft_mint_details, start_time, duration, distribution, creator, creation_fee }: MsgCreateCampaignAminoType["value"]) => MsgCreateCampaign;
    };
    "/OmniFlix.itc.v1.MsgCancelCampaign": {
        aminoType: string;
        toAmino: ({ campaignId, creator }: MsgCancelCampaign) => MsgCancelCampaignAminoType["value"];
        fromAmino: ({ campaign_id, creator }: MsgCancelCampaignAminoType["value"]) => MsgCancelCampaign;
    };
    "/OmniFlix.itc.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ campaignId, nftId, interaction, claimer }: MsgClaim) => MsgClaimAminoType["value"];
        fromAmino: ({ campaign_id, nft_id, interaction, claimer }: MsgClaimAminoType["value"]) => MsgClaim;
    };
    "/OmniFlix.itc.v1.MsgDepositCampaign": {
        aminoType: string;
        toAmino: ({ campaignId, amount, depositor }: MsgDepositCampaign) => MsgDepositCampaignAminoType["value"];
        fromAmino: ({ campaign_id, amount, depositor }: MsgDepositCampaignAminoType["value"]) => MsgDepositCampaign;
    };
};
