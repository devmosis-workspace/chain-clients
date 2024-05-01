import { ClaimType, Proof, ProofAmino, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import { BinaryWriter } from "../../../binary";
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaim {
    userAddress: string;
    zone: string;
    srcZone: string;
    claimType: ClaimType;
    proofs: Proof[];
}
export interface MsgSubmitClaimProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
    value: Uint8Array;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimAmino {
    user_address?: string;
    zone?: string;
    src_zone?: string;
    claim_type?: ClaimType;
    proofs?: ProofAmino[];
}
export interface MsgSubmitClaimAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
    value: MsgSubmitClaimAmino;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimSDKType {
    user_address: string;
    zone: string;
    src_zone: string;
    claim_type: ClaimType;
    proofs: ProofSDKType[];
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponse {
}
export interface MsgSubmitClaimResponseProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
    value: Uint8Array;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseAmino {
}
export interface MsgSubmitClaimResponseAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
    value: MsgSubmitClaimResponseAmino;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseSDKType {
}
export declare const MsgSubmitClaim: {
    typeUrl: string;
    encode(message: MsgSubmitClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitClaim;
    fromPartial(object: Partial<MsgSubmitClaim>): MsgSubmitClaim;
    fromAmino(object: MsgSubmitClaimAmino): MsgSubmitClaim;
    toAmino(message: MsgSubmitClaim): MsgSubmitClaimAmino;
    fromAminoMsg(object: MsgSubmitClaimAminoMsg): MsgSubmitClaim;
    fromProtoMsg(message: MsgSubmitClaimProtoMsg): MsgSubmitClaim;
    toProto(message: MsgSubmitClaim): Uint8Array;
    toProtoMsg(message: MsgSubmitClaim): MsgSubmitClaimProtoMsg;
};
export declare const MsgSubmitClaimResponse: {
    typeUrl: string;
    encode(_: MsgSubmitClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitClaimResponse;
    fromPartial(_: Partial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse;
    fromAmino(_: MsgSubmitClaimResponseAmino): MsgSubmitClaimResponse;
    toAmino(_: MsgSubmitClaimResponse): MsgSubmitClaimResponseAmino;
    fromAminoMsg(object: MsgSubmitClaimResponseAminoMsg): MsgSubmitClaimResponse;
    fromProtoMsg(message: MsgSubmitClaimResponseProtoMsg): MsgSubmitClaimResponse;
    toProto(message: MsgSubmitClaimResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitClaimResponse): MsgSubmitClaimResponseProtoMsg;
};
