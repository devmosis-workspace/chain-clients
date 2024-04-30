import { InteractionType, ClaimType, NFTDetails, NFTDetailsAmino, NFTDetailsSDKType, Distribution, DistributionAmino, DistributionSDKType, interactionTypeFromJSON, claimTypeFromJSON } from "./itc";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface MsgCreateCampaign {
  name: string;
  description: string;
  interaction: InteractionType;
  claimType: ClaimType;
  nftDenomId: string;
  tokensPerClaim: Coin;
  maxAllowedClaims: bigint;
  deposit: Coin;
  nftMintDetails?: NFTDetails;
  startTime: Timestamp;
  duration: Duration;
  distribution?: Distribution;
  creator: string;
  creationFee: Coin;
}
export interface MsgCreateCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign";
  value: Uint8Array;
}
export interface MsgCreateCampaignAmino {
  name?: string;
  description?: string;
  interaction?: InteractionType;
  claim_type?: ClaimType;
  nft_denom_id?: string;
  tokens_per_claim?: CoinAmino;
  max_allowed_claims?: string;
  deposit?: CoinAmino;
  nft_mint_details?: NFTDetailsAmino;
  start_time?: string;
  duration?: DurationAmino;
  distribution?: DistributionAmino;
  creator?: string;
  creation_fee?: CoinAmino;
}
export interface MsgCreateCampaignAminoMsg {
  type: "OmniFlix/itc/MsgCreateCampaign";
  value: MsgCreateCampaignAmino;
}
export interface MsgCreateCampaignSDKType {
  name: string;
  description: string;
  interaction: InteractionType;
  claim_type: ClaimType;
  nft_denom_id: string;
  tokens_per_claim: CoinSDKType;
  max_allowed_claims: bigint;
  deposit: CoinSDKType;
  nft_mint_details?: NFTDetailsSDKType;
  start_time: TimestampSDKType;
  duration: DurationSDKType;
  distribution?: DistributionSDKType;
  creator: string;
  creation_fee: CoinSDKType;
}
export interface MsgCreateCampaignResponse {}
export interface MsgCreateCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
  value: Uint8Array;
}
export interface MsgCreateCampaignResponseAmino {}
export interface MsgCreateCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
  value: MsgCreateCampaignResponseAmino;
}
export interface MsgCreateCampaignResponseSDKType {}
export interface MsgCancelCampaign {
  campaignId: bigint;
  creator: string;
}
export interface MsgCancelCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign";
  value: Uint8Array;
}
export interface MsgCancelCampaignAmino {
  campaign_id?: string;
  creator?: string;
}
export interface MsgCancelCampaignAminoMsg {
  type: "OmniFlix/itc/MsgCancelCampaign";
  value: MsgCancelCampaignAmino;
}
export interface MsgCancelCampaignSDKType {
  campaign_id: bigint;
  creator: string;
}
export interface MsgCancelCampaignResponse {}
export interface MsgCancelCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
  value: Uint8Array;
}
export interface MsgCancelCampaignResponseAmino {}
export interface MsgCancelCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
  value: MsgCancelCampaignResponseAmino;
}
export interface MsgCancelCampaignResponseSDKType {}
export interface MsgClaim {
  campaignId: bigint;
  nftId: string;
  interaction: InteractionType;
  claimer: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgClaim";
  value: Uint8Array;
}
export interface MsgClaimAmino {
  campaign_id?: string;
  nft_id?: string;
  interaction?: InteractionType;
  claimer?: string;
}
export interface MsgClaimAminoMsg {
  type: "OmniFlix/itc/MsgClaim";
  value: MsgClaimAmino;
}
export interface MsgClaimSDKType {
  campaign_id: bigint;
  nft_id: string;
  interaction: InteractionType;
  claimer: string;
}
export interface MsgClaimResponse {}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse";
  value: Uint8Array;
}
export interface MsgClaimResponseAmino {}
export interface MsgClaimResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {}
export interface MsgDepositCampaign {
  campaignId: bigint;
  amount: Coin;
  depositor: string;
}
export interface MsgDepositCampaignProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign";
  value: Uint8Array;
}
export interface MsgDepositCampaignAmino {
  campaign_id?: string;
  amount?: CoinAmino;
  depositor?: string;
}
export interface MsgDepositCampaignAminoMsg {
  type: "OmniFlix/itc/MsgDepositCampaign";
  value: MsgDepositCampaignAmino;
}
export interface MsgDepositCampaignSDKType {
  campaign_id: bigint;
  amount: CoinSDKType;
  depositor: string;
}
export interface MsgDepositCampaignResponse {}
export interface MsgDepositCampaignResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
  value: Uint8Array;
}
export interface MsgDepositCampaignResponseAmino {}
export interface MsgDepositCampaignResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
  value: MsgDepositCampaignResponseAmino;
}
export interface MsgDepositCampaignResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/itc parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/itc parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/OmniFlix.itc.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/OmniFlix.itc.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgCreateCampaign(): MsgCreateCampaign {
  return {
    name: "",
    description: "",
    interaction: 0,
    claimType: 0,
    nftDenomId: "",
    tokensPerClaim: Coin.fromPartial({}),
    maxAllowedClaims: BigInt(0),
    deposit: Coin.fromPartial({}),
    nftMintDetails: undefined,
    startTime: Timestamp.fromPartial({}),
    duration: Duration.fromPartial({}),
    distribution: undefined,
    creator: "",
    creationFee: Coin.fromPartial({})
  };
}
export const MsgCreateCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
  encode(message: MsgCreateCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimType !== 0) {
      writer.uint32(32).int32(message.claimType);
    }
    if (message.nftDenomId !== "") {
      writer.uint32(42).string(message.nftDenomId);
    }
    if (message.tokensPerClaim !== undefined) {
      Coin.encode(message.tokensPerClaim, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxAllowedClaims !== BigInt(0)) {
      writer.uint32(56).uint64(message.maxAllowedClaims);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
    }
    if (message.nftMintDetails !== undefined) {
      NFTDetails.encode(message.nftMintDetails, writer.uint32(74).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(82).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(90).fork()).ldelim();
    }
    if (message.distribution !== undefined) {
      Distribution.encode(message.distribution, writer.uint32(98).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(106).string(message.creator);
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCampaign {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : -1,
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : -1,
      nftDenomId: isSet(object.nftDenomId) ? String(object.nftDenomId) : "",
      tokensPerClaim: isSet(object.tokensPerClaim) ? Coin.fromJSON(object.tokensPerClaim) : undefined,
      maxAllowedClaims: isSet(object.maxAllowedClaims) ? BigInt(object.maxAllowedClaims.toString()) : BigInt(0),
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      nftMintDetails: isSet(object.nftMintDetails) ? NFTDetails.fromJSON(object.nftMintDetails) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      distribution: isSet(object.distribution) ? Distribution.fromJSON(object.distribution) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
      creationFee: isSet(object.creationFee) ? Coin.fromJSON(object.creationFee) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateCampaign>): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimType = object.claimType ?? 0;
    message.nftDenomId = object.nftDenomId ?? "";
    message.tokensPerClaim = object.tokensPerClaim !== undefined && object.tokensPerClaim !== null ? Coin.fromPartial(object.tokensPerClaim) : undefined;
    message.maxAllowedClaims = object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null ? BigInt(object.maxAllowedClaims.toString()) : BigInt(0);
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.nftMintDetails = object.nftMintDetails !== undefined && object.nftMintDetails !== null ? NFTDetails.fromPartial(object.nftMintDetails) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    message.creator = object.creator ?? "";
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateCampaignAmino): MsgCreateCampaign {
    const message = createBaseMsgCreateCampaign();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = interactionTypeFromJSON(object.interaction);
    }
    if (object.claim_type !== undefined && object.claim_type !== null) {
      message.claimType = claimTypeFromJSON(object.claim_type);
    }
    if (object.nft_denom_id !== undefined && object.nft_denom_id !== null) {
      message.nftDenomId = object.nft_denom_id;
    }
    if (object.tokens_per_claim !== undefined && object.tokens_per_claim !== null) {
      message.tokensPerClaim = Coin.fromAmino(object.tokens_per_claim);
    }
    if (object.max_allowed_claims !== undefined && object.max_allowed_claims !== null) {
      message.maxAllowedClaims = BigInt(object.max_allowed_claims);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.nft_mint_details !== undefined && object.nft_mint_details !== null) {
      message.nftMintDetails = NFTDetails.fromAmino(object.nft_mint_details);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    if (object.distribution !== undefined && object.distribution !== null) {
      message.distribution = Distribution.fromAmino(object.distribution);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      message.creationFee = Coin.fromAmino(object.creation_fee);
    }
    return message;
  },
  toAmino(message: MsgCreateCampaign): MsgCreateCampaignAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.interaction = message.interaction;
    obj.claim_type = message.claimType;
    obj.nft_denom_id = message.nftDenomId;
    obj.tokens_per_claim = message.tokensPerClaim ? Coin.toAmino(message.tokensPerClaim) : undefined;
    obj.max_allowed_claims = message.maxAllowedClaims ? message.maxAllowedClaims.toString() : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.nft_mint_details = message.nftMintDetails ? NFTDetails.toAmino(message.nftMintDetails) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
    obj.creator = message.creator;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCampaignAminoMsg): MsgCreateCampaign {
    return MsgCreateCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCampaign): MsgCreateCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgCreateCampaign",
      value: MsgCreateCampaign.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateCampaignProtoMsg): MsgCreateCampaign {
    return MsgCreateCampaign.decode(message.value);
  },
  toProto(message: MsgCreateCampaign): Uint8Array {
    return MsgCreateCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCampaign): MsgCreateCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
      value: MsgCreateCampaign.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCampaignResponse(): MsgCreateCampaignResponse {
  return {};
}
export const MsgCreateCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
  encode(_: MsgCreateCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateCampaignResponse>): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
  fromAmino(_: MsgCreateCampaignResponseAmino): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  },
  toAmino(_: MsgCreateCampaignResponse): MsgCreateCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCampaignResponseAminoMsg): MsgCreateCampaignResponse {
    return MsgCreateCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCampaignResponseProtoMsg): MsgCreateCampaignResponse {
    return MsgCreateCampaignResponse.decode(message.value);
  },
  toProto(message: MsgCreateCampaignResponse): Uint8Array {
    return MsgCreateCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCampaignResponse): MsgCreateCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
      value: MsgCreateCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCampaign(): MsgCancelCampaign {
  return {
    campaignId: BigInt(0),
    creator: ""
  };
}
export const MsgCancelCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
  encode(message: MsgCancelCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelCampaign {
    return {
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelCampaign>): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCancelCampaignAmino): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCancelCampaign): MsgCancelCampaignAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCancelCampaignAminoMsg): MsgCancelCampaign {
    return MsgCancelCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelCampaign): MsgCancelCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgCancelCampaign",
      value: MsgCancelCampaign.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelCampaignProtoMsg): MsgCancelCampaign {
    return MsgCancelCampaign.decode(message.value);
  },
  toProto(message: MsgCancelCampaign): Uint8Array {
    return MsgCancelCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCampaign): MsgCancelCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
      value: MsgCancelCampaign.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCampaignResponse(): MsgCancelCampaignResponse {
  return {};
}
export const MsgCancelCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
  encode(_: MsgCancelCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelCampaignResponse>): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  },
  fromAmino(_: MsgCancelCampaignResponseAmino): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  },
  toAmino(_: MsgCancelCampaignResponse): MsgCancelCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelCampaignResponseAminoMsg): MsgCancelCampaignResponse {
    return MsgCancelCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCampaignResponseProtoMsg): MsgCancelCampaignResponse {
    return MsgCancelCampaignResponse.decode(message.value);
  },
  toProto(message: MsgCancelCampaignResponse): Uint8Array {
    return MsgCancelCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCampaignResponse): MsgCancelCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
      value: MsgCancelCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseMsgClaim(): MsgClaim {
  return {
    campaignId: BigInt(0),
    nftId: "",
    interaction: 0,
    claimer: ""
  };
}
export const MsgClaim = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.interaction !== 0) {
      writer.uint32(24).int32(message.interaction);
    }
    if (message.claimer !== "") {
      writer.uint32(34).string(message.claimer);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaim {
    return {
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0),
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : -1,
      claimer: isSet(object.claimer) ? String(object.claimer) : ""
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimer = object.claimer ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.interaction !== undefined && object.interaction !== null) {
      message.interaction = interactionTypeFromJSON(object.interaction);
    }
    if (object.claimer !== undefined && object.claimer !== null) {
      message.claimer = object.claimer;
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    obj.nft_id = message.nftId;
    obj.interaction = message.interaction;
    obj.claimer = message.claimer;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaim): MsgClaimAminoMsg {
    return {
      type: "OmniFlix/itc/MsgClaim",
      value: MsgClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
  encode(_: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  fromAmino(_: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  toAmino(_: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDepositCampaign(): MsgDepositCampaign {
  return {
    campaignId: BigInt(0),
    amount: Coin.fromPartial({}),
    depositor: ""
  };
}
export const MsgDepositCampaign = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
  encode(message: MsgDepositCampaign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.campaignId !== BigInt(0)) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },
  fromJSON(object: any): MsgDepositCampaign {
    return {
      campaignId: isSet(object.campaignId) ? BigInt(object.campaignId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  fromPartial(object: Partial<MsgDepositCampaign>): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgDepositCampaignAmino): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    if (object.campaign_id !== undefined && object.campaign_id !== null) {
      message.campaignId = BigInt(object.campaign_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgDepositCampaign): MsgDepositCampaignAmino {
    const obj: any = {};
    obj.campaign_id = message.campaignId ? message.campaignId.toString() : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgDepositCampaignAminoMsg): MsgDepositCampaign {
    return MsgDepositCampaign.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositCampaign): MsgDepositCampaignAminoMsg {
    return {
      type: "OmniFlix/itc/MsgDepositCampaign",
      value: MsgDepositCampaign.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositCampaignProtoMsg): MsgDepositCampaign {
    return MsgDepositCampaign.decode(message.value);
  },
  toProto(message: MsgDepositCampaign): Uint8Array {
    return MsgDepositCampaign.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCampaign): MsgDepositCampaignProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
      value: MsgDepositCampaign.encode(message).finish()
    };
  }
};
function createBaseMsgDepositCampaignResponse(): MsgDepositCampaignResponse {
  return {};
}
export const MsgDepositCampaignResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
  encode(_: MsgDepositCampaignResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDepositCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositCampaignResponse>): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
    return message;
  },
  fromAmino(_: MsgDepositCampaignResponseAmino): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
    return message;
  },
  toAmino(_: MsgDepositCampaignResponse): MsgDepositCampaignResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositCampaignResponseAminoMsg): MsgDepositCampaignResponse {
    return MsgDepositCampaignResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositCampaignResponseProtoMsg): MsgDepositCampaignResponse {
    return MsgDepositCampaignResponse.decode(message.value);
  },
  toProto(message: MsgDepositCampaignResponse): Uint8Array {
    return MsgDepositCampaignResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositCampaignResponse): MsgDepositCampaignResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
      value: MsgDepositCampaignResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};