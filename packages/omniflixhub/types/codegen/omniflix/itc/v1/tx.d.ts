import { InteractionType, ClaimType, NFTDetails, NFTDetailsSDKType, Distribution, DistributionSDKType } from "./itc";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreateCampaign {
    name: string;
    description: string;
    interaction: InteractionType;
    claimType: ClaimType;
    nftDenomId: string;
    tokensPerClaim?: Coin;
    maxAllowedClaims: Long;
    deposit?: Coin;
    nftMintDetails?: NFTDetails;
    startTime?: Timestamp;
    duration?: Duration;
    distribution?: Distribution;
    creator: string;
    creationFee?: Coin;
}
export interface MsgCreateCampaignSDKType {
    name: string;
    description: string;
    interaction: InteractionType;
    claim_type: ClaimType;
    nft_denom_id: string;
    tokens_per_claim?: CoinSDKType;
    max_allowed_claims: Long;
    deposit?: CoinSDKType;
    nft_mint_details?: NFTDetailsSDKType;
    start_time?: TimestampSDKType;
    duration?: DurationSDKType;
    distribution?: DistributionSDKType;
    creator: string;
    creation_fee?: CoinSDKType;
}
export interface MsgCreateCampaignResponse {
}
export interface MsgCreateCampaignResponseSDKType {
}
export interface MsgCancelCampaign {
    campaignId: Long;
    creator: string;
}
export interface MsgCancelCampaignSDKType {
    campaign_id: Long;
    creator: string;
}
export interface MsgCancelCampaignResponse {
}
export interface MsgCancelCampaignResponseSDKType {
}
export interface MsgClaim {
    campaignId: Long;
    nftId: string;
    interaction: InteractionType;
    claimer: string;
}
export interface MsgClaimSDKType {
    campaign_id: Long;
    nft_id: string;
    interaction: InteractionType;
    claimer: string;
}
export interface MsgClaimResponse {
}
export interface MsgClaimResponseSDKType {
}
export interface MsgDepositCampaign {
    campaignId: Long;
    amount?: Coin;
    depositor: string;
}
export interface MsgDepositCampaignSDKType {
    campaign_id: Long;
    amount?: CoinSDKType;
    depositor: string;
}
export interface MsgDepositCampaignResponse {
}
export interface MsgDepositCampaignResponseSDKType {
}
export declare const MsgCreateCampaign: {
    encode(message: MsgCreateCampaign, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateCampaign;
    fromPartial(object: Partial<MsgCreateCampaign>): MsgCreateCampaign;
};
export declare const MsgCreateCampaignResponse: {
    encode(_: MsgCreateCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateCampaignResponse;
    fromPartial(_: Partial<MsgCreateCampaignResponse>): MsgCreateCampaignResponse;
};
export declare const MsgCancelCampaign: {
    encode(message: MsgCancelCampaign, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCancelCampaign;
    fromPartial(object: Partial<MsgCancelCampaign>): MsgCancelCampaign;
};
export declare const MsgCancelCampaignResponse: {
    encode(_: MsgCancelCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCancelCampaignResponse;
    fromPartial(_: Partial<MsgCancelCampaignResponse>): MsgCancelCampaignResponse;
};
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(_: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimResponse;
    fromPartial(_: Partial<MsgClaimResponse>): MsgClaimResponse;
};
export declare const MsgDepositCampaign: {
    encode(message: MsgDepositCampaign, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDepositCampaign;
    fromPartial(object: Partial<MsgDepositCampaign>): MsgDepositCampaign;
};
export declare const MsgDepositCampaignResponse: {
    encode(_: MsgDepositCampaignResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDepositCampaignResponse;
    fromPartial(_: Partial<MsgDepositCampaignResponse>): MsgDepositCampaignResponse;
};
