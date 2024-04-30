import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export enum DistributionType {
  DISTRIBUTION_TYPE_INSTANT = 0,
  DISTRIBUTION_TYPE_STREAM = 1,
  UNRECOGNIZED = -1,
}
export const DistributionTypeSDKType = DistributionType;
export const DistributionTypeAmino = DistributionType;
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
export const InteractionTypeAmino = InteractionType;
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
export const CampaignStatusAmino = CampaignStatus;
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
export const ClaimTypeAmino = ClaimType;
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
function createBaseCampaign(): Campaign {
  return {
    id: BigInt(0),
    name: "",
    description: "",
    startTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    creator: "",
    nftDenomId: "",
    maxAllowedClaims: BigInt(0),
    interaction: 0,
    claimType: 0,
    tokensPerClaim: Coin.fromPartial({}),
    totalTokens: Coin.fromPartial({}),
    availableTokens: Coin.fromPartial({}),
    receivedNftIds: [],
    nftMintDetails: undefined,
    distribution: undefined,
    mintCount: BigInt(0),
    claimCount: BigInt(0)
  };
}
export const Campaign = {
  typeUrl: "/OmniFlix.itc.v1.Campaign",
  encode(message: Campaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
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
    if (message.maxAllowedClaims !== BigInt(0)) {
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
    if (message.mintCount !== BigInt(0)) {
      writer.uint32(136).uint64(message.mintCount);
    }
    if (message.claimCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.claimCount);
    }
    return writer;
  },
  fromJSON(object: any): Campaign {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
      nftDenomId: isSet(object.nftDenomId) ? String(object.nftDenomId) : "",
      maxAllowedClaims: isSet(object.maxAllowedClaims) ? BigInt(object.maxAllowedClaims.toString()) : BigInt(0),
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : -1,
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : -1,
      tokensPerClaim: isSet(object.tokensPerClaim) ? Coin.fromJSON(object.tokensPerClaim) : undefined,
      totalTokens: isSet(object.totalTokens) ? Coin.fromJSON(object.totalTokens) : undefined,
      availableTokens: isSet(object.availableTokens) ? Coin.fromJSON(object.availableTokens) : undefined,
      receivedNftIds: Array.isArray(object?.receivedNftIds) ? object.receivedNftIds.map((e: any) => String(e)) : [],
      nftMintDetails: isSet(object.nftMintDetails) ? NFTDetails.fromJSON(object.nftMintDetails) : undefined,
      distribution: isSet(object.distribution) ? Distribution.fromJSON(object.distribution) : undefined,
      mintCount: isSet(object.mintCount) ? BigInt(object.mintCount.toString()) : BigInt(0),
      claimCount: isSet(object.claimCount) ? BigInt(object.claimCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Campaign>): Campaign {
    const message = createBaseCampaign();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.creator = object.creator ?? "";
    message.nftDenomId = object.nftDenomId ?? "";
    message.maxAllowedClaims = object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null ? BigInt(object.maxAllowedClaims.toString()) : BigInt(0);
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    message.tokensPerClaim = object.tokensPerClaim !== undefined && object.tokensPerClaim !== null ? Coin.fromPartial(object.tokensPerClaim) : undefined;
    message.totalTokens = object.totalTokens !== undefined && object.totalTokens !== null ? Coin.fromPartial(object.totalTokens) : undefined;
    message.availableTokens = object.availableTokens !== undefined && object.availableTokens !== null ? Coin.fromPartial(object.availableTokens) : undefined;
    message.receivedNftIds = object.receivedNftIds?.map(e => e) || [];
    message.nftMintDetails = object.nftMintDetails !== undefined && object.nftMintDetails !== null ? NFTDetails.fromPartial(object.nftMintDetails) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    message.mintCount = object.mintCount !== undefined && object.mintCount !== null ? BigInt(object.mintCount.toString()) : BigInt(0);
    message.claimCount = object.claimCount !== undefined && object.claimCount !== null ? BigInt(object.claimCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CampaignAmino): Campaign {
    const message = createBaseCampaign();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = Timestamp.fromAmino(object.end_time);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.nft_denom_id !== undefined && object.nft_denom_id !== null) {
      message.nftDenomId = object.nft_denom_id;
    }
    if (object.max_allowed_claims !== undefined && object.max_allowed_claims !== null) {
      message.maxAllowedClaims = BigInt(object.max_allowed_claims);
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = interactionTypeFromJSON(object.interaction);
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = claimTypeFromJSON(object.claim_type);
    }
    if (object.tokens_per_claim !== undefined && object.tokens_per_claim !== null) {
      message.tokensPerClaim = Coin.fromAmino(object.tokens_per_claim);
    }
    if (object.total_tokens !== undefined && object.total_tokens !== null) {
      message.totalTokens = Coin.fromAmino(object.total_tokens);
    }
    if (object.available_tokens !== undefined && object.available_tokens !== null) {
      message.availableTokens = Coin.fromAmino(object.available_tokens);
    }
    message.receivedNftIds = object.received_nft_ids?.map(e => e) || [];
    if (object.nft_mint_details !== undefined && object.nft_mint_details !== null) {
      message.nftMintDetails = NFTDetails.fromAmino(object.nft_mint_details);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.mint_count !== undefined && object.mint_count !== null) {
      message.mintCount = BigInt(object.mint_count);
    }
    if (object.claim_count !== undefined && object.claim_count !== null) {
      message.claimCount = BigInt(object.claim_count);
    }
    return message;
  },
  toAmino(message: Campaign): CampaignAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.description = message.description;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.creator = message.creator;
    obj.nft_denom_id = message.nftDenomId;
    obj.max_allowed_claims = message.maxAllowedClaims ? message.maxAllowedClaims.toString() : undefined;
    obj.interaction = message.interaction;
    obj.claim_type = message.claimType;
    obj.tokens_per_claim = message.tokensPerClaim ? Coin.toAmino(message.tokensPerClaim) : undefined;
    obj.total_tokens = message.totalTokens ? Coin.toAmino(message.totalTokens) : undefined;
    obj.available_tokens = message.availableTokens ? Coin.toAmino(message.availableTokens) : undefined;
    if (message.receivedNftIds) {
      obj.received_nft_ids = message.receivedNftIds.map(e => e);
    } else {
      obj.received_nft_ids = [];
    }
    obj.nft_mint_details = message.nftMintDetails ? NFTDetails.toAmino(message.nftMintDetails) : undefined;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.mint_count = message.mintCount ? message.mintCount.toString() : undefined;
    obj.claim_count = message.claimCount ? message.claimCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CampaignAminoMsg): Campaign {
    return Campaign.fromAmino(object.value);
  },
  fromProtoMsg(message: CampaignProtoMsg): Campaign {
    return Campaign.decode(message.value);
  },
  toProto(message: Campaign): Uint8Array {
    return Campaign.encode(message).finish();
  },
  toProtoMsg(message: Campaign): CampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Campaign",
      value: Campaign.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    type: 0,
    streamDuration: Duration.fromPartial({})
  };
}
export const Distribution = {
  typeUrl: "/OmniFlix.itc.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      type: isSet(object.type) ? distributionTypeFromJSON(object.type) : -1,
      streamDuration: isSet(object.streamDuration) ? Duration.fromJSON(object.streamDuration) : undefined
    };
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.type = object.type ?? 0;
    message.streamDuration = object.streamDuration !== undefined && object.streamDuration !== null ? Duration.fromPartial(object.streamDuration) : undefined;
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.type !== undefined && object.type !== null) {
      message.type = distributionTypeFromJSON(object.type);
    }
    if (object.stream_duration !== undefined && object.stream_duration !== null) {
      message.streamDuration = Duration.fromAmino(object.stream_duration);
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.stream_duration = message.streamDuration ? Duration.toAmino(message.streamDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Distribution",
      value: Distribution.encode(message).finish()
    };
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
    data: "",
    uriHash: ""
  };
}
export const NFTDetails = {
  typeUrl: "/OmniFlix.itc.v1.NFTDetails",
  encode(message: NFTDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      writer.uint32(50).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
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
    if (message.uriHash !== "") {
      writer.uint32(90).string(message.uriHash);
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
      data: isSet(object.data) ? String(object.data) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : ""
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
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: NFTDetailsAmino): NFTDetails {
    const message = createBaseNFTDetails();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.media_uri !== undefined && object.media_uri !== null) {
      message.mediaUri = object.media_uri;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.royalty_share !== undefined && object.royalty_share !== null) {
      message.royaltyShare = object.royalty_share;
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.extensible !== undefined && object.extensible !== null) {
      message.extensible = object.extensible;
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: NFTDetails): NFTDetailsAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    obj.name = message.name;
    obj.description = message.description;
    obj.media_uri = message.mediaUri;
    obj.preview_uri = message.previewUri;
    obj.royalty_share = message.royaltyShare;
    obj.transferable = message.transferable;
    obj.extensible = message.extensible;
    obj.nsfw = message.nsfw;
    obj.data = message.data;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: NFTDetailsAminoMsg): NFTDetails {
    return NFTDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTDetailsProtoMsg): NFTDetails {
    return NFTDetails.decode(message.value);
  },
  toProto(message: NFTDetails): Uint8Array {
    return NFTDetails.encode(message).finish();
  },
  toProtoMsg(message: NFTDetails): NFTDetailsProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.NFTDetails",
      value: NFTDetails.encode(message).finish()
    };
  }
};
function createBaseClaim(): Claim {
  return {
    campaignId: BigInt(0),
    address: "",
    nftId: "",
    interaction: 0
  };
}
export const Claim = {
  typeUrl: "/OmniFlix.itc.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
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
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : -1
    };
  },
  fromPartial(object: Partial<Claim>): Claim {
    const message = createBaseClaim();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    return message;
  },
  fromAmino(object: ClaimAmino): Claim {
    const message = createBaseClaim();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = interactionTypeFromJSON(object.interaction);
    }
    return message;
  },
  toAmino(message: Claim): ClaimAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    obj.address = message.address;
    obj.nft_id = message.nftId;
    obj.interaction = message.interaction;
    return obj;
  },
  fromAminoMsg(object: ClaimAminoMsg): Claim {
    return Claim.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};