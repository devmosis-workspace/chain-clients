import { Action } from "./claim_record";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgInitialClaim {
    sender: string;
}
export interface MsgInitialClaimProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
    value: Uint8Array;
}
export interface MsgInitialClaimAmino {
    sender: string;
}
export interface MsgInitialClaimAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim";
    value: MsgInitialClaimAmino;
}
export interface MsgInitialClaimSDKType {
    sender: string;
}
export interface MsgInitialClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgInitialClaimResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse";
    value: Uint8Array;
}
export interface MsgInitialClaimResponseAmino {
    /** total initial claimable amount for the user */
    claimed_amount: CoinAmino[];
}
export interface MsgInitialClaimResponseAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaimResponse";
    value: MsgInitialClaimResponseAmino;
}
export interface MsgInitialClaimResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
    value: Uint8Array;
}
export interface MsgClaimForAmino {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor";
    value: MsgClaimForAmino;
}
export interface MsgClaimForSDKType {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgClaimForResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse";
    value: Uint8Array;
}
export interface MsgClaimForResponseAmino {
    address: string;
    /** total initial claimable amount for the user */
    claimed_amount: CoinAmino[];
}
export interface MsgClaimForResponseAminoMsg {
    type: "/publicawesome.stargaze.claim.v1beta1.MsgClaimForResponse";
    value: MsgClaimForResponseAmino;
}
export interface MsgClaimForResponseSDKType {
    address: string;
    claimed_amount: CoinSDKType[];
}
export declare const MsgInitialClaim: {
    typeUrl: string;
    encode(message: MsgInitialClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInitialClaim;
    fromPartial(object: Partial<MsgInitialClaim>): MsgInitialClaim;
    fromAmino(object: MsgInitialClaimAmino): MsgInitialClaim;
    toAmino(message: MsgInitialClaim): MsgInitialClaimAmino;
    fromAminoMsg(object: MsgInitialClaimAminoMsg): MsgInitialClaim;
    fromProtoMsg(message: MsgInitialClaimProtoMsg): MsgInitialClaim;
    toProto(message: MsgInitialClaim): Uint8Array;
    toProtoMsg(message: MsgInitialClaim): MsgInitialClaimProtoMsg;
};
export declare const MsgInitialClaimResponse: {
    typeUrl: string;
    encode(message: MsgInitialClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInitialClaimResponse;
    fromPartial(object: Partial<MsgInitialClaimResponse>): MsgInitialClaimResponse;
    fromAmino(object: MsgInitialClaimResponseAmino): MsgInitialClaimResponse;
    toAmino(message: MsgInitialClaimResponse): MsgInitialClaimResponseAmino;
    fromAminoMsg(object: MsgInitialClaimResponseAminoMsg): MsgInitialClaimResponse;
    fromProtoMsg(message: MsgInitialClaimResponseProtoMsg): MsgInitialClaimResponse;
    toProto(message: MsgInitialClaimResponse): Uint8Array;
    toProtoMsg(message: MsgInitialClaimResponse): MsgInitialClaimResponseProtoMsg;
};
export declare const MsgClaimFor: {
    typeUrl: string;
    encode(message: MsgClaimFor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimFor;
    fromPartial(object: Partial<MsgClaimFor>): MsgClaimFor;
    fromAmino(object: MsgClaimForAmino): MsgClaimFor;
    toAmino(message: MsgClaimFor): MsgClaimForAmino;
    fromAminoMsg(object: MsgClaimForAminoMsg): MsgClaimFor;
    fromProtoMsg(message: MsgClaimForProtoMsg): MsgClaimFor;
    toProto(message: MsgClaimFor): Uint8Array;
    toProtoMsg(message: MsgClaimFor): MsgClaimForProtoMsg;
};
export declare const MsgClaimForResponse: {
    typeUrl: string;
    encode(message: MsgClaimForResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimForResponse;
    fromPartial(object: Partial<MsgClaimForResponse>): MsgClaimForResponse;
    fromAmino(object: MsgClaimForResponseAmino): MsgClaimForResponse;
    toAmino(message: MsgClaimForResponse): MsgClaimForResponseAmino;
    fromAminoMsg(object: MsgClaimForResponseAminoMsg): MsgClaimForResponse;
    fromProtoMsg(message: MsgClaimForResponseProtoMsg): MsgClaimForResponse;
    toProto(message: MsgClaimForResponse): Uint8Array;
    toProtoMsg(message: MsgClaimForResponse): MsgClaimForResponseProtoMsg;
};
