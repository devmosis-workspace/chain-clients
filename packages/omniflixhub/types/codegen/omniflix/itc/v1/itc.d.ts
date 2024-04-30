import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export declare enum DistributionType {
    DISTRIBUTION_TYPE_INSTANT = 0,
    DISTRIBUTION_TYPE_STREAM = 1,
    UNRECOGNIZED = -1
}
export declare const DistributionTypeSDKType: typeof DistributionType;
export declare const DistributionTypeAmino: typeof DistributionType;
export declare function distributionTypeFromJSON(object: any): DistributionType;
export declare function distributionTypeToJSON(object: DistributionType): string;
export declare enum InteractionType {
    INTERACTION_TYPE_BURN = 0,
    INTERACTION_TYPE_TRANSFER = 1,
    INTERACTION_TYPE_HOLD = 2,
    UNRECOGNIZED = -1
}
export declare const InteractionTypeSDKType: typeof InteractionType;
export declare const InteractionTypeAmino: typeof InteractionType;
export declare function interactionTypeFromJSON(object: any): InteractionType;
export declare function interactionTypeToJSON(object: InteractionType): string;
export declare enum CampaignStatus {
    CAMPAIGN_STATUS_UNSPECIFIED = 0,
    CAMPAIGN_STATUS_INACTIVE = 1,
    CAMPAIGN_STATUS_ACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare const CampaignStatusSDKType: typeof CampaignStatus;
export declare const CampaignStatusAmino: typeof CampaignStatus;
export declare function campaignStatusFromJSON(object: any): CampaignStatus;
export declare function campaignStatusToJSON(object: CampaignStatus): string;
export declare enum ClaimType {
    CLAIM_TYPE_FT = 0,
    CLAIM_TYPE_NFT = 1,
    CLAIM_TYPE_FT_AND_NFT = 2,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
export interface Campaign {
    id: bigint;
    name: string;
    description: string;
    startTime: Timestamp;
    endTime: Timestamp;
    creator: string;
    nftDenomId: string;
    maxAllowedClaims: bigint;
    interaction: InteractionType;
    claimType: ClaimType;
    tokensPerClaim: Coin;
    totalTokens: Coin;
    availableTokens: Coin;
    receivedNftIds: string[];
    nftMintDetails?: NFTDetails;
    distribution?: Distribution;
    mintCount: bigint;
    claimCount: bigint;
}
export interface CampaignProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.Campaign";
    value: Uint8Array;
}
export interface CampaignAmino {
    id?: string;
    name?: string;
    description?: string;
    start_time?: string;
    end_time?: string;
    creator?: string;
    nft_denom_id?: string;
    max_allowed_claims?: string;
    interaction?: InteractionType;
    claim_type?: ClaimType;
    tokens_per_claim?: CoinAmino;
    total_tokens?: CoinAmino;
    available_tokens?: CoinAmino;
    received_nft_ids?: string[];
    nft_mint_details?: NFTDetailsAmino;
    distribution?: DistributionAmino;
    mint_count?: string;
    claim_count?: string;
}
export interface CampaignAminoMsg {
    type: "/OmniFlix.itc.v1.Campaign";
    value: CampaignAmino;
}
export interface CampaignSDKType {
    id: bigint;
    name: string;
    description: string;
    start_time: TimestampSDKType;
    end_time: TimestampSDKType;
    creator: string;
    nft_denom_id: string;
    max_allowed_claims: bigint;
    interaction: InteractionType;
    claim_type: ClaimType;
    tokens_per_claim: CoinSDKType;
    total_tokens: CoinSDKType;
    available_tokens: CoinSDKType;
    received_nft_ids: string[];
    nft_mint_details?: NFTDetailsSDKType;
    distribution?: DistributionSDKType;
    mint_count: bigint;
    claim_count: bigint;
}
export interface Distribution {
    type: DistributionType;
    streamDuration: Duration;
}
export interface DistributionProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.Distribution";
    value: Uint8Array;
}
export interface DistributionAmino {
    type?: DistributionType;
    stream_duration?: DurationAmino;
}
export interface DistributionAminoMsg {
    type: "/OmniFlix.itc.v1.Distribution";
    value: DistributionAmino;
}
export interface DistributionSDKType {
    type: DistributionType;
    stream_duration: DurationSDKType;
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
    uriHash: string;
}
export interface NFTDetailsProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.NFTDetails";
    value: Uint8Array;
}
export interface NFTDetailsAmino {
    denom_id?: string;
    name?: string;
    description?: string;
    media_uri?: string;
    preview_uri?: string;
    royalty_share?: string;
    transferable?: boolean;
    extensible?: boolean;
    nsfw?: boolean;
    data?: string;
    uri_hash?: string;
}
export interface NFTDetailsAminoMsg {
    type: "/OmniFlix.itc.v1.NFTDetails";
    value: NFTDetailsAmino;
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
    uri_hash: string;
}
export interface Claim {
    campaignId: bigint;
    address: string;
    nftId: string;
    interaction: InteractionType;
}
export interface ClaimProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.Claim";
    value: Uint8Array;
}
export interface ClaimAmino {
    campaign_id?: string;
    address?: string;
    nft_id?: string;
    interaction?: InteractionType;
}
export interface ClaimAminoMsg {
    type: "/OmniFlix.itc.v1.Claim";
    value: ClaimAmino;
}
export interface ClaimSDKType {
    campaign_id: bigint;
    address: string;
    nft_id: string;
    interaction: InteractionType;
}
export declare const Campaign: {
    typeUrl: string;
    encode(message: Campaign, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Campaign;
    fromPartial(object: Partial<Campaign>): Campaign;
    fromAmino(object: CampaignAmino): Campaign;
    toAmino(message: Campaign): CampaignAmino;
    fromAminoMsg(object: CampaignAminoMsg): Campaign;
    fromProtoMsg(message: CampaignProtoMsg): Campaign;
    toProto(message: Campaign): Uint8Array;
    toProtoMsg(message: Campaign): CampaignProtoMsg;
};
export declare const Distribution: {
    typeUrl: string;
    encode(message: Distribution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Distribution;
    fromPartial(object: Partial<Distribution>): Distribution;
    fromAmino(object: DistributionAmino): Distribution;
    toAmino(message: Distribution): DistributionAmino;
    fromAminoMsg(object: DistributionAminoMsg): Distribution;
    fromProtoMsg(message: DistributionProtoMsg): Distribution;
    toProto(message: Distribution): Uint8Array;
    toProtoMsg(message: Distribution): DistributionProtoMsg;
};
export declare const NFTDetails: {
    typeUrl: string;
    encode(message: NFTDetails, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NFTDetails;
    fromPartial(object: Partial<NFTDetails>): NFTDetails;
    fromAmino(object: NFTDetailsAmino): NFTDetails;
    toAmino(message: NFTDetails): NFTDetailsAmino;
    fromAminoMsg(object: NFTDetailsAminoMsg): NFTDetails;
    fromProtoMsg(message: NFTDetailsProtoMsg): NFTDetails;
    toProto(message: NFTDetails): Uint8Array;
    toProtoMsg(message: NFTDetails): NFTDetailsProtoMsg;
};
export declare const Claim: {
    typeUrl: string;
    encode(message: Claim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Claim;
    fromPartial(object: Partial<Claim>): Claim;
    fromAmino(object: ClaimAmino): Claim;
    toAmino(message: Claim): ClaimAmino;
    fromAminoMsg(object: ClaimAminoMsg): Claim;
    fromProtoMsg(message: ClaimProtoMsg): Claim;
    toProto(message: Claim): Uint8Array;
    toProtoMsg(message: Claim): ClaimProtoMsg;
};
