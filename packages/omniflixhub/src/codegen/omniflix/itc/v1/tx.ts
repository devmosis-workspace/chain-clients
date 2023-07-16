import { InteractionType, ClaimType, NFTDetails, NFTDetailsSDKType, Distribution, DistributionSDKType, interactionTypeFromJSON, claimTypeFromJSON } from "./itc";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
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
export interface MsgCreateCampaignResponse {}
export interface MsgCreateCampaignResponseSDKType {}
export interface MsgCancelCampaign {
  campaignId: Long;
  creator: string;
}
export interface MsgCancelCampaignSDKType {
  campaign_id: Long;
  creator: string;
}
export interface MsgCancelCampaignResponse {}
export interface MsgCancelCampaignResponseSDKType {}
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
export interface MsgClaimResponse {}
export interface MsgClaimResponseSDKType {}
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
export interface MsgDepositCampaignResponse {}
export interface MsgDepositCampaignResponseSDKType {}
function createBaseMsgCreateCampaign(): MsgCreateCampaign {
  return {
    name: "",
    description: "",
    interaction: 0,
    claimType: 0,
    nftDenomId: "",
    tokensPerClaim: undefined,
    maxAllowedClaims: Long.UZERO,
    deposit: undefined,
    nftMintDetails: undefined,
    startTime: undefined,
    duration: undefined,
    distribution: undefined,
    creator: "",
    creationFee: undefined
  };
}
export const MsgCreateCampaign = {
  encode(message: MsgCreateCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (!message.maxAllowedClaims.isZero()) {
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
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : 0,
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : 0,
      nftDenomId: isSet(object.nftDenomId) ? String(object.nftDenomId) : "",
      tokensPerClaim: isSet(object.tokensPerClaim) ? Coin.fromJSON(object.tokensPerClaim) : undefined,
      maxAllowedClaims: isSet(object.maxAllowedClaims) ? Long.fromValue(object.maxAllowedClaims) : Long.UZERO,
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
    message.maxAllowedClaims = object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null ? Long.fromValue(object.maxAllowedClaims) : Long.UZERO;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.nftMintDetails = object.nftMintDetails !== undefined && object.nftMintDetails !== null ? NFTDetails.fromPartial(object.nftMintDetails) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
    message.creator = object.creator ?? "";
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  }
};
function createBaseMsgCreateCampaignResponse(): MsgCreateCampaignResponse {
  return {};
}
export const MsgCreateCampaignResponse = {
  encode(_: MsgCreateCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateCampaignResponse>): MsgCreateCampaignResponse {
    const message = createBaseMsgCreateCampaignResponse();
    return message;
  }
};
function createBaseMsgCancelCampaign(): MsgCancelCampaign {
  return {
    campaignId: Long.UZERO,
    creator: ""
  };
}
export const MsgCancelCampaign = {
  encode(message: MsgCancelCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
      writer.uint32(8).uint64(message.campaignId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelCampaign {
    return {
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelCampaign>): MsgCancelCampaign {
    const message = createBaseMsgCancelCampaign();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    message.creator = object.creator ?? "";
    return message;
  }
};
function createBaseMsgCancelCampaignResponse(): MsgCancelCampaignResponse {
  return {};
}
export const MsgCancelCampaignResponse = {
  encode(_: MsgCancelCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCancelCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelCampaignResponse>): MsgCancelCampaignResponse {
    const message = createBaseMsgCancelCampaignResponse();
    return message;
  }
};
function createBaseMsgClaim(): MsgClaim {
  return {
    campaignId: Long.UZERO,
    nftId: "",
    interaction: 0,
    claimer: ""
  };
}
export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
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
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO,
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      interaction: isSet(object.interaction) ? interactionTypeFromJSON(object.interaction) : 0,
      claimer: isSet(object.claimer) ? String(object.claimer) : ""
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    message.nftId = object.nftId ?? "";
    message.interaction = object.interaction ?? 0;
    message.claimer = object.claimer ?? "";
    return message;
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
export const MsgClaimResponse = {
  encode(_: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  }
};
function createBaseMsgDepositCampaign(): MsgDepositCampaign {
  return {
    campaignId: Long.UZERO,
    amount: undefined,
    depositor: ""
  };
}
export const MsgDepositCampaign = {
  encode(message: MsgDepositCampaign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.campaignId.isZero()) {
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
      campaignId: isSet(object.campaignId) ? Long.fromValue(object.campaignId) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  fromPartial(object: Partial<MsgDepositCampaign>): MsgDepositCampaign {
    const message = createBaseMsgDepositCampaign();
    message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? Long.fromValue(object.campaignId) : Long.UZERO;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  }
};
function createBaseMsgDepositCampaignResponse(): MsgDepositCampaignResponse {
  return {};
}
export const MsgDepositCampaignResponse = {
  encode(_: MsgDepositCampaignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDepositCampaignResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositCampaignResponse>): MsgDepositCampaignResponse {
    const message = createBaseMsgDepositCampaignResponse();
    return message;
  }
};