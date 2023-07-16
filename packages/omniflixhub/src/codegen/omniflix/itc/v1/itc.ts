import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum DistributionType {
  DISTRIBUTION_TYPE_INSTANT = 0,
  DISTRIBUTION_TYPE_STREAM = 1,
  UNRECOGNIZED = -1,
}
export const DistributionTypeSDKType = DistributionType;
export function distributionTypeFromJSON(object: any): DistributionType {
  switch (object) {
    case 0:
    case "DISTRIBUTION_TYPE_INSTANT":
      return DistributionType.DISTRIBUTION_TYPE_INSTANT;
    case 1:
    case "DISTRIBUTION_TYPE_STREAM":
      return DistributionType.DISTRIBUTION_TYPE_STREAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DistributionType.UNRECOGNIZED;
  }
}
export function distributionTypeToJSON(object: DistributionType): string {
  switch (object) {
    case DistributionType.DISTRIBUTION_TYPE_INSTANT:
      return "DISTRIBUTION_TYPE_INSTANT";
    case DistributionType.DISTRIBUTION_TYPE_STREAM:
      return "DISTRIBUTION_TYPE_STREAM";
    case DistributionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum InteractionType {
  INTERACTION_TYPE_BURN = 0,
  INTERACTION_TYPE_TRANSFER = 1,
  INTERACTION_TYPE_HOLD = 2,
  UNRECOGNIZED = -1,
}
export const InteractionTypeSDKType = InteractionType;
export function interactionTypeFromJSON(object: any): InteractionType {
  switch (object) {
    case 0:
    case "INTERACTION_TYPE_BURN":
      return InteractionType.INTERACTION_TYPE_BURN;
    case 1:
    case "INTERACTION_TYPE_TRANSFER":
      return InteractionType.INTERACTION_TYPE_TRANSFER;
    case 2:
    case "INTERACTION_TYPE_HOLD":
      return InteractionType.INTERACTION_TYPE_HOLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InteractionType.UNRECOGNIZED;
  }
}
export function interactionTypeToJSON(object: InteractionType): string {
  switch (object) {
    case InteractionType.INTERACTION_TYPE_BURN:
      return "INTERACTION_TYPE_BURN";
    case InteractionType.INTERACTION_TYPE_TRANSFER:
      return "INTERACTION_TYPE_TRANSFER";
    case InteractionType.INTERACTION_TYPE_HOLD:
      return "INTERACTION_TYPE_HOLD";
    case InteractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CampaignStatus {
  CAMPAIGN_STATUS_UNSPECIFIED = 0,
  CAMPAIGN_STATUS_INACTIVE = 1,
  CAMPAIGN_STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const CampaignStatusSDKType = CampaignStatus;
export function campaignStatusFromJSON(object: any): CampaignStatus {
  switch (object) {
    case 0:
    case "CAMPAIGN_STATUS_UNSPECIFIED":
      return CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED;
    case 1:
    case "CAMPAIGN_STATUS_INACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_INACTIVE;
    case 2:
    case "CAMPAIGN_STATUS_ACTIVE":
      return CampaignStatus.CAMPAIGN_STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CampaignStatus.UNRECOGNIZED;
  }
}
export function campaignStatusToJSON(object: CampaignStatus): string {
  switch (object) {
    case CampaignStatus.CAMPAIGN_STATUS_UNSPECIFIED:
      return "CAMPAIGN_STATUS_UNSPECIFIED";
    case CampaignStatus.CAMPAIGN_STATUS_INACTIVE:
      return "CAMPAIGN_STATUS_INACTIVE";
    case CampaignStatus.CAMPAIGN_STATUS_ACTIVE:
      return "CAMPAIGN_STATUS_ACTIVE";
    case CampaignStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ClaimType {
  CLAIM_TYPE_FT = 0,
  CLAIM_TYPE_NFT = 1,
  CLAIM_TYPE_FT_AND_NFT = 2,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_FT":
      return ClaimType.CLAIM_TYPE_FT;
    case 1:
    case "CLAIM_TYPE_NFT":
      return ClaimType.CLAIM_TYPE_NFT;
    case 2:
    case "CLAIM_TYPE_FT_AND_NFT":
      return ClaimType.CLAIM_TYPE_FT_AND_NFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_FT:
      return "CLAIM_TYPE_FT";
    case ClaimType.CLAIM_TYPE_NFT:
      return "CLAIM_TYPE_NFT";
    case ClaimType.CLAIM_TYPE_FT_AND_NFT:
      return "CLAIM_TYPE_FT_AND_NFT";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseCampaign(): Campaign {
  return {
    id: Long.UZERO,
    name: "",
    description: "",
    startTime: undefined,
    endTime: undefined,
    creator: "",
    nftDenomId: "",
    maxAllowedClaims: Long.UZERO,
    interaction: 0,
    claimType: 0,
    tokensPerClaim: undefined,
    totalTokens: undefined,
    availableTokens: undefined,
    receivedNftIds: [],
    nftMintDetails: undefined,
    distribution: undefined,
    mintCount: Long.UZERO
  };
}
export const Campaign = {
  encode(message: Campaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(58).string(message.nftDenomId);
    }
    if (!message.maxAllowedClaims.isZero()) {
      writer.uint32(64).uint64(message.maxAllowedClaims);
    }
    if (message.interaction !== 0) {
      writer.uint32(72).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(80).int32(message.claimType);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(90).fork()).ldelim();
    }
    if (message.totalTokens !== undefined) {
      Coin.encode(message.totalTokens, writer.uint32(98).fork()).ldelim();
    }
    if (message.availableTokens !== undefined) {
      Coin.encode(message.availableTokens, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.receivedNftIds) {
      writer.uint32(114).string(v!);
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(122).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(130).fork()).ldelim();
    }
    if (!message.mintCount.isZero()) {
      writer.uint32(136).uint64(message.mintCount);
    }
    return writer;
  },
  fromJSON(object: any): Campaign {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
      nftDenomId: isSet(object.nftDenomId) ? String(object.nftDenomId) : "",
      maxAllowedClaims: isSet(object.maxAllowedClaims) ? Long.fromValue(object.maxAllowedClaims) : Long.UZERO,
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : 0,
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : 0,
      tokensPerClaim: isSet(object.tokensPerClaim) ? Coin.fromJSON(object.tokensPerClaim) : undefined,
      totalTokens: isSet(object.totalTokens) ? Coin.fromJSON(object.totalTokens) : undefined,
      availableTokens: isSet(object.availableTokens) ? Coin.fromJSON(object.availableTokens) : undefined,
      receivedNftIds: Array.isArray(object?.receivedNftIds) ? object.receivedNftIds.map((e: any) => String(e)) : [],
      nftMintDetails: isSet(object.nftMintDetails) ? NFTDetails.fromJSON(object.nftMintDetails) : undefined,
      distribution: isSet(object.distribution) ? Distribution.fromJSON(object.distribution) : undefined,
      mintCount: isSet(object.mintCount) ? Long.fromValue(object.mintCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Campaign>): Campaign {
    const message = createBaseCampaign();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.creator = object.creator ?? "";
    message.nftDenomId = object.nftDenomId ?? "";
    message.maxAllowedClaims = object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null ? Long.fromValue(object.maxAllowedClaims) : Long.UZERO;
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    message.tokensPerClaim = object.tokensPerClaim !== undefined && object.tokensPerClaim !== null ? Coin.fromPartial(object.tokensPerClaim) : undefined;
    message.totalTokens = object.totalTokens !== undefined && object.totalTokens !== null ? Coin.fromPartial(object.totalTokens) : undefined;
    message.availableTokens = object.availableTokens !== undefined && object.availableTokens !== null ? Coin.fromPartial(object.availableTokens) : undefined;
    message.receivedNftIds = object.receivedNftIds?.map(e => e) || [];
    message.nftMintDetails = object.nftMintDetails !== undefined && object.nftMintDetails !== null ? NFTDetails.fromPartial(object.nftMintDetails) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    message.mintCount = object.mintCount !== undefined && object.mintCount !== null ? Long.fromValue(object.mintCount) : Long.UZERO;
    return message;
  }
};
function createBaseDistribution(): Distribution {
  return {
    type: 0,
    streamDuration: undefined
  };
}
export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.streamDuration !== undefined) {
      Duration.encode(message.streamDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Distribution {
    return {
      type: isSet(object.type) ? distributionTypeFromJSON(object.type) : 0,
      streamDuration: isSet(object.streamDuration) ? Duration.fromJSON(object.streamDuration) : undefined
    };
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.type = object.type ?? 0;
    message.streamDuration = object.streamDuration !== undefined && object.streamDuration !== null ? Duration.fromPartial(object.streamDuration) : undefined;
    return message;
  }
};
function createBaseNFTDetails(): NFTDetails {
  return {
    denomId: "",
    name: "",
    description: "",
    mediaUri: "",
    previewUri: "",
    royaltyShare: "",
    transferable: false,
    extensible: false,
    nsfw: false,
    data: ""
  };
}
export const NFTDetails = {
  encode(message: NFTDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(34).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(50).string(message.royaltyShare);
    }
    if (message.transferable === true) {
      writer.uint32(56).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(64).bool(message.extensible);
    }
    if (message.nsfw === true) {
      writer.uint32(72).bool(message.nsfw);
    }
    if (message.data !== "") {
      writer.uint32(82).string(message.data);
    }
    return writer;
  },
  fromJSON(object: any): NFTDetails {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      mediaUri: isSet(object.mediaUri) ? String(object.mediaUri) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      royaltyShare: isSet(object.royaltyShare) ? String(object.royaltyShare) : "",
      transferable: isSet(object.transferable) ? Boolean(object.transferable) : false,
      extensible: isSet(object.extensible) ? Boolean(object.extensible) : false,
      nsfw: isSet(object.nsfw) ? Boolean(object.nsfw) : false,
      data: isSet(object.data) ? String(object.data) : ""
    };
  },
  fromPartial(object: Partial<NFTDetails>): NFTDetails {
    const message = createBaseNFTDetails();
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    message.royaltyShare = object.royaltyShare ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.nsfw = object.nsfw ?? false;
    message.data = object.data ?? "";
    return message;
  }
};
function createBaseClaim(): Claim {
  return {
    campaignId: Long.UZERO,
    address: "",
    nftId: "",
    interaction: 0
  };
}
export const Claim = {
  encode(message: Claim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.nftId !== "") {
      writer.uint32(26).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(32).int32(message.interaction);
    }
    return writer;
  },
  fromJSON(object: any): Claim {
    return {
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : 0
    };
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    message.address = object.address ?? "";
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    return message;
  }
};