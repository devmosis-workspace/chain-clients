import { interactionTypeFromJSON, claimTypeFromJSON, distributionTypeFromJSON } from "./itc";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/OmniFlix.itc.v1.MsgCreateCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgCreateCampaign",
    toAmino: ({
      name,
      description,
      interaction,
      claimType,
      nftDenomId,
      tokensPerClaim,
      maxAllowedClaims,
      deposit,
      nftMintDetails,
      startTime,
      duration,
      distribution,
      creator,
      creationFee
    }: MsgCreateCampaign): MsgCreateCampaignAminoType["value"] => {
      return {
        name,
        description,
        interaction,
        claim_type: claimType,
        nft_denom_id: nftDenomId,
        tokens_per_claim: {
          denom: tokensPerClaim.denom,
          amount: Long.fromValue(tokensPerClaim.amount).toString()
        },
        max_allowed_claims: maxAllowedClaims.toString(),
        deposit: {
          denom: deposit.denom,
          amount: Long.fromValue(deposit.amount).toString()
        },
        nft_mint_details: {
          denom_id: nftMintDetails.denomId,
          name: nftMintDetails.name,
          description: nftMintDetails.description,
          media_uri: nftMintDetails.mediaUri,
          preview_uri: nftMintDetails.previewUri,
          royalty_share: nftMintDetails.royaltyShare,
          transferable: nftMintDetails.transferable,
          extensible: nftMintDetails.extensible,
          nsfw: nftMintDetails.nsfw,
          data: nftMintDetails.data
        },
        start_time: startTime,
        duration: (duration * 1_000_000_000).toString(),
        distribution: {
          type: distribution.type,
          stream_duration: (distribution.streamDuration * 1_000_000_000).toString()
        },
        creator,
        creation_fee: {
          denom: creationFee.denom,
          amount: Long.fromValue(creationFee.amount).toString()
        }
      };
    },
    fromAmino: ({
      name,
      description,
      interaction,
      claim_type,
      nft_denom_id,
      tokens_per_claim,
      max_allowed_claims,
      deposit,
      nft_mint_details,
      start_time,
      duration,
      distribution,
      creator,
      creation_fee
    }: MsgCreateCampaignAminoType["value"]): MsgCreateCampaign => {
      return {
        name,
        description,
        interaction: interactionTypeFromJSON(interaction),
        claimType: claimTypeFromJSON(claim_type),
        nftDenomId: nft_denom_id,
        tokensPerClaim: {
          denom: tokens_per_claim.denom,
          amount: tokens_per_claim.amount
        },
        maxAllowedClaims: Long.fromString(max_allowed_claims),
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        },
        nftMintDetails: {
          denomId: nft_mint_details.denom_id,
          name: nft_mint_details.name,
          description: nft_mint_details.description,
          mediaUri: nft_mint_details.media_uri,
          previewUri: nft_mint_details.preview_uri,
          royaltyShare: nft_mint_details.royalty_share,
          transferable: nft_mint_details.transferable,
          extensible: nft_mint_details.extensible,
          nsfw: nft_mint_details.nsfw,
          data: nft_mint_details.data
        },
        startTime: start_time,
        duration: {
          seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1_000_000_000)),
          nanos: parseInt(duration) % 1_000_000_000
        },
        distribution: {
          type: distributionTypeFromJSON(distribution.type),
          streamDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(distribution.stream_duration) / 1_000_000_000)),
            nanos: parseInt(distribution.stream_duration) % 1_000_000_000
          }
        },
        creator,
        creationFee: {
          denom: creation_fee.denom,
          amount: creation_fee.amount
        }
      };
    }
  },
  "/OmniFlix.itc.v1.MsgCancelCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgCancelCampaign",
    toAmino: ({
      campaignId,
      creator
    }: MsgCancelCampaign): MsgCancelCampaignAminoType["value"] => {
      return {
        campaign_id: campaignId.toString(),
        creator
      };
    },
    fromAmino: ({
      campaign_id,
      creator
    }: MsgCancelCampaignAminoType["value"]): MsgCancelCampaign => {
      return {
        campaignId: Long.fromString(campaign_id),
        creator
      };
    }
  },
  "/OmniFlix.itc.v1.MsgClaim": {
    aminoType: "/OmniFlix.itc.v1.MsgClaim",
    toAmino: ({
      campaignId,
      nftId,
      interaction,
      claimer
    }: MsgClaim): MsgClaimAminoType["value"] => {
      return {
        campaign_id: campaignId.toString(),
        nft_id: nftId,
        interaction,
        claimer
      };
    },
    fromAmino: ({
      campaign_id,
      nft_id,
      interaction,
      claimer
    }: MsgClaimAminoType["value"]): MsgClaim => {
      return {
        campaignId: Long.fromString(campaign_id),
        nftId: nft_id,
        interaction: interactionTypeFromJSON(interaction),
        claimer
      };
    }
  },
  "/OmniFlix.itc.v1.MsgDepositCampaign": {
    aminoType: "/OmniFlix.itc.v1.MsgDepositCampaign",
    toAmino: ({
      campaignId,
      amount,
      depositor
    }: MsgDepositCampaign): MsgDepositCampaignAminoType["value"] => {
      return {
        campaign_id: campaignId.toString(),
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        depositor
      };
    },
    fromAmino: ({
      campaign_id,
      amount,
      depositor
    }: MsgDepositCampaignAminoType["value"]): MsgDepositCampaign => {
      return {
        campaignId: Long.fromString(campaign_id),
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        depositor
      };
    }
  }
};