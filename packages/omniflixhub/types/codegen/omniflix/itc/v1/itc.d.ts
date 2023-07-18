import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum DistributionType {
    DISTRIBUTION_TYPE_INSTANT = 0,
    DISTRIBUTION_TYPE_STREAM = 1,
    UNRECOGNIZED = -1
}
export declare const DistributionTypeSDKType: typeof DistributionType;
export declare function distributionTypeFromJSON(object: any): DistributionType;
export declare function distributionTypeToJSON(object: DistributionType): string;
export declare enum InteractionType {
    INTERACTION_TYPE_BURN = 0,
    INTERACTION_TYPE_TRANSFER = 1,
    INTERACTION_TYPE_HOLD = 2,
    UNRECOGNIZED = -1
}
export declare const InteractionTypeSDKType: typeof InteractionType;
export declare function interactionTypeFromJSON(object: any): InteractionType;
export declare function interactionTypeToJSON(object: InteractionType): string;
export declare enum CampaignStatus {
    CAMPAIGN_STATUS_UNSPECIFIED = 0,
    CAMPAIGN_STATUS_INACTIVE = 1,
    CAMPAIGN_STATUS_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const CampaignStatusSDKType: typeof CampaignStatus;
export declare function campaignStatusFromJSON(object: any): CampaignStatus;
export declare function campaignStatusToJSON(object: CampaignStatus): string;
export declare enum ClaimType {
    CLAIM_TYPE_FT = 0,
    CLAIM_TYPE_NFT = 1,
    CLAIM_TYPE_FT_AND_NFT = 2,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
export interface Campaign {
    id: Long;
    name: string;
    description: string;
    startTime?: Timestamp;
    endTime?: Timestamp;
    creator: string;
    nftDenomId: string;
    maxAllowedClaims: Long;
    interaction: InteractionType;
    claimType: ClaimType;
    tokensPerClaim?: Coin;
    totalTokens?: Coin;
    availableTokens?: Coin;
    receivedNftIds: string[];
    nftMintDetails?: NFTDetails;
    distribution?: Distribution;
    mintCount: Long;
}
export interface CampaignSDKType {
    id: Long;
    name: string;
    description: string;
    start_time?: TimestampSDKType;
    end_time?: TimestampSDKType;
    creator: string;
    nft_denom_id: string;
    max_allowed_claims: Long;
    interaction: InteractionType;
    claim_type: ClaimType;
    tokens_per_claim?: CoinSDKType;
    total_tokens?: CoinSDKType;
    available_tokens?: CoinSDKType;
    received_nft_ids: string[];
    nft_mint_details?: NFTDetailsSDKType;
    distribution?: DistributionSDKType;
    mint_count: Long;
}
export interface Distribution {
    type: DistributionType;
    streamDuration?: Duration;
}
export interface DistributionSDKType {
    type: DistributionType;
    stream_duration?: DurationSDKType;
}
export interface NFTDetails {
    denomId: string;
    name: string;
    description: string;
    mediaUri: string;
    previewUri: string;
    royaltyShare: string;
    transferable: boolean;
    extensible: boolean;
    nsfw: boolean;
    data: string;
}
export interface NFTDetailsSDKType {
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
}
export interface Claim {
    campaignId: Long;
    address: string;
    nftId: string;
    interaction: InteractionType;
}
export interface ClaimSDKType {
    campaign_id: Long;
    address: string;
    nft_id: string;
    interaction: InteractionType;
}
export declare const Campaign: {
    encode(message: Campaign, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Campaign;
    fromPartial(object: Partial<Campaign>): Campaign;
};
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
};
export declare const NFTDetails: {
    encode(message: NFTDetails, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NFTDetails;
    fromPartial(object: Partial<NFTDetails>): NFTDetails;
};
export declare const Claim: {
    encode(message: Claim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
};
