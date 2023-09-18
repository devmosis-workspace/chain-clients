import { InteractionType, ClaimType, NFTDetails, NFTDetailsAmino, NFTDetailsSDKType, Distribution, DistributionAmino, DistributionSDKType } from "./itc";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface MsgCreateCampaign {
    name: string;
    description: string;
    interaction: InteractionType;
    claimType: ClaimType;
    nftDenomId: string;
    tokensPerClaim: Coin;
    maxAllowedClaims: bigint;
    deposit: Coin;
    nftMintDetails: NFTDetails;
    startTime: Timestamp;
    duration: Duration;
    distribution: Distribution;
    creator: string;
    creationFee: Coin;
}
export interface MsgCreateCampaignProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign";
    value: Uint8Array;
}
export interface MsgCreateCampaignAmino {
    name: string;
    description: string;
    interaction: InteractionType;
    claim_type: ClaimType;
    nft_denom_id: string;
    tokens_per_claim?: CoinAmino;
    max_allowed_claims: string;
    deposit?: CoinAmino;
    nft_mint_details?: NFTDetailsAmino;
    start_time?: TimestampAmino;
    duration?: DurationAmino;
    distribution?: DistributionAmino;
    creator: string;
    creation_fee?: CoinAmino;
}
export interface MsgCreateCampaignAminoMsg {
    type: "/OmniFlix.itc.v1.MsgCreateCampaign";
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
    nft_mint_details: NFTDetailsSDKType;
    start_time: TimestampSDKType;
    duration: DurationSDKType;
    distribution: DistributionSDKType;
    creator: string;
    creation_fee: CoinSDKType;
}
export interface MsgCreateCampaignResponse {
}
export interface MsgCreateCampaignResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
    value: Uint8Array;
}
export interface MsgCreateCampaignResponseAmino {
}
export interface MsgCreateCampaignResponseAminoMsg {
    type: "/OmniFlix.itc.v1.MsgCreateCampaignResponse";
    value: MsgCreateCampaignResponseAmino;
}
export interface MsgCreateCampaignResponseSDKType {
}
export interface MsgCancelCampaign {
    campaignId: bigint;
    creator: string;
}
export interface MsgCancelCampaignProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign";
    value: Uint8Array;
}
export interface MsgCancelCampaignAmino {
    campaign_id: string;
    creator: string;
}
export interface MsgCancelCampaignAminoMsg {
    type: "/OmniFlix.itc.v1.MsgCancelCampaign";
    value: MsgCancelCampaignAmino;
}
export interface MsgCancelCampaignSDKType {
    campaign_id: bigint;
    creator: string;
}
export interface MsgCancelCampaignResponse {
}
export interface MsgCancelCampaignResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
    value: Uint8Array;
}
export interface MsgCancelCampaignResponseAmino {
}
export interface MsgCancelCampaignResponseAminoMsg {
    type: "/OmniFlix.itc.v1.MsgCancelCampaignResponse";
    value: MsgCancelCampaignResponseAmino;
}
export interface MsgCancelCampaignResponseSDKType {
}
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
    campaign_id: string;
    nft_id: string;
    interaction: InteractionType;
    claimer: string;
}
export interface MsgClaimAminoMsg {
    type: "/OmniFlix.itc.v1.MsgClaim";
    value: MsgClaimAmino;
}
export interface MsgClaimSDKType {
    campaign_id: bigint;
    nft_id: string;
    interaction: InteractionType;
    claimer: string;
}
export interface MsgClaimResponse {
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse";
    value: Uint8Array;
}
export interface MsgClaimResponseAmino {
}
export interface MsgClaimResponseAminoMsg {
    type: "/OmniFlix.itc.v1.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
}
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
    campaign_id: string;
    amount?: CoinAmino;
    depositor: string;
}
export interface MsgDepositCampaignAminoMsg {
    type: "/OmniFlix.itc.v1.MsgDepositCampaign";
    value: MsgDepositCampaignAmino;
}
export interface MsgDepositCampaignSDKType {
    campaign_id: bigint;
    amount: CoinSDKType;
    depositor: string;
}
export interface MsgDepositCampaignResponse {
}
export interface MsgDepositCampaignResponseProtoMsg {
    typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
    value: Uint8Array;
}
export interface MsgDepositCampaignResponseAmino {
}
export interface MsgDepositCampaignResponseAminoMsg {
    type: "/OmniFlix.itc.v1.MsgDepositCampaignResponse";
    value: MsgDepositCampaignResponseAmino;
}
export interface MsgDepositCampaignResponseSDKType {
}
export declare const MsgCreateCampaign: {
    typeUrl: string;
    encode(message: MsgCreateCampaign, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateCampaign;
    fromPartial(object: Partial<MsgCreateCampaign>): MsgCreateCampaign;
    fromAmino(object: MsgCreateCampaignAmino): MsgCreateCampaign;
    toAmino(message: MsgCreateCampaign): MsgCreateCampaignAmino;
    fromAminoMsg(object: MsgCreateCampaignAminoMsg): MsgCreateCampaign;
    fromProtoMsg(message: MsgCreateCampaignProtoMsg): MsgCreateCampaign;
    toProto(message: MsgCreateCampaign): Uint8Array;
    toProtoMsg(message: MsgCreateCampaign): MsgCreateCampaignProtoMsg;
};
export declare const MsgCreateCampaignResponse: {
    typeUrl: string;
    encode(_: MsgCreateCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateCampaignResponse;
    fromPartial(_: Partial<MsgCreateCampaignResponse>): MsgCreateCampaignResponse;
    fromAmino(_: MsgCreateCampaignResponseAmino): MsgCreateCampaignResponse;
    toAmino(_: MsgCreateCampaignResponse): MsgCreateCampaignResponseAmino;
    fromAminoMsg(object: MsgCreateCampaignResponseAminoMsg): MsgCreateCampaignResponse;
    fromProtoMsg(message: MsgCreateCampaignResponseProtoMsg): MsgCreateCampaignResponse;
    toProto(message: MsgCreateCampaignResponse): Uint8Array;
    toProtoMsg(message: MsgCreateCampaignResponse): MsgCreateCampaignResponseProtoMsg;
};
export declare const MsgCancelCampaign: {
    typeUrl: string;
    encode(message: MsgCancelCampaign, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelCampaign;
    fromPartial(object: Partial<MsgCancelCampaign>): MsgCancelCampaign;
    fromAmino(object: MsgCancelCampaignAmino): MsgCancelCampaign;
    toAmino(message: MsgCancelCampaign): MsgCancelCampaignAmino;
    fromAminoMsg(object: MsgCancelCampaignAminoMsg): MsgCancelCampaign;
    fromProtoMsg(message: MsgCancelCampaignProtoMsg): MsgCancelCampaign;
    toProto(message: MsgCancelCampaign): Uint8Array;
    toProtoMsg(message: MsgCancelCampaign): MsgCancelCampaignProtoMsg;
};
export declare const MsgCancelCampaignResponse: {
    typeUrl: string;
    encode(_: MsgCancelCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelCampaignResponse;
    fromPartial(_: Partial<MsgCancelCampaignResponse>): MsgCancelCampaignResponse;
    fromAmino(_: MsgCancelCampaignResponseAmino): MsgCancelCampaignResponse;
    toAmino(_: MsgCancelCampaignResponse): MsgCancelCampaignResponseAmino;
    fromAminoMsg(object: MsgCancelCampaignResponseAminoMsg): MsgCancelCampaignResponse;
    fromProtoMsg(message: MsgCancelCampaignResponseProtoMsg): MsgCancelCampaignResponse;
    toProto(message: MsgCancelCampaignResponse): Uint8Array;
    toProtoMsg(message: MsgCancelCampaignResponse): MsgCancelCampaignResponseProtoMsg;
};
export declare const MsgClaim: {
    typeUrl: string;
    encode(message: MsgClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
    fromAmino(object: MsgClaimAmino): MsgClaim;
    toAmino(message: MsgClaim): MsgClaimAmino;
    fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim;
    fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim;
    toProto(message: MsgClaim): Uint8Array;
    toProtoMsg(message: MsgClaim): MsgClaimProtoMsg;
};
export declare const MsgClaimResponse: {
    typeUrl: string;
    encode(_: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimResponse;
    fromPartial(_: Partial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(_: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(_: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
export declare const MsgDepositCampaign: {
    typeUrl: string;
    encode(message: MsgDepositCampaign, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositCampaign;
    fromPartial(object: Partial<MsgDepositCampaign>): MsgDepositCampaign;
    fromAmino(object: MsgDepositCampaignAmino): MsgDepositCampaign;
    toAmino(message: MsgDepositCampaign): MsgDepositCampaignAmino;
    fromAminoMsg(object: MsgDepositCampaignAminoMsg): MsgDepositCampaign;
    fromProtoMsg(message: MsgDepositCampaignProtoMsg): MsgDepositCampaign;
    toProto(message: MsgDepositCampaign): Uint8Array;
    toProtoMsg(message: MsgDepositCampaign): MsgDepositCampaignProtoMsg;
};
export declare const MsgDepositCampaignResponse: {
    typeUrl: string;
    encode(_: MsgDepositCampaignResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositCampaignResponse;
    fromPartial(_: Partial<MsgDepositCampaignResponse>): MsgDepositCampaignResponse;
    fromAmino(_: MsgDepositCampaignResponseAmino): MsgDepositCampaignResponse;
    toAmino(_: MsgDepositCampaignResponse): MsgDepositCampaignResponseAmino;
    fromAminoMsg(object: MsgDepositCampaignResponseAminoMsg): MsgDepositCampaignResponse;
    fromProtoMsg(message: MsgDepositCampaignResponseProtoMsg): MsgDepositCampaignResponse;
    toProto(message: MsgDepositCampaignResponse): Uint8Array;
    toProtoMsg(message: MsgDepositCampaignResponse): MsgDepositCampaignResponseProtoMsg;
};
