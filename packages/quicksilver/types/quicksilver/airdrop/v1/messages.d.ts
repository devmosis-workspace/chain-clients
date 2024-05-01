import { Proof, ProofAmino, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface MsgClaim {
    chainId: string;
    action: bigint;
    address: string;
    proofs: Proof[];
}
export interface MsgClaimProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.MsgClaim";
    value: Uint8Array;
}
export interface MsgClaimAmino {
    chain_id?: string;
    action?: string;
    address?: string;
    proofs?: ProofAmino[];
}
export interface MsgClaimAminoMsg {
    type: "/quicksilver.airdrop.v1.MsgClaim";
    value: MsgClaimAmino;
}
export interface MsgClaimSDKType {
    chain_id: string;
    action: bigint;
    address: string;
    proofs: ProofSDKType[];
}
export interface MsgClaimResponse {
    amount: bigint;
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse";
    value: Uint8Array;
}
export interface MsgClaimResponseAmino {
    amount?: string;
}
export interface MsgClaimResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
    amount: bigint;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpend {
    authority: string;
    toAddress: string;
    amount: Coin[];
    title: string;
    description: string;
}
export interface MsgIncentivePoolSpendProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
    value: Uint8Array;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendAmino {
    authority?: string;
    to_address?: string;
    amount?: CoinAmino[];
    title?: string;
    description?: string;
}
export interface MsgIncentivePoolSpendAminoMsg {
    type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
    value: MsgIncentivePoolSpendAmino;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendSDKType {
    authority: string;
    to_address: string;
    amount: CoinSDKType[];
    title: string;
    description: string;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponse {
}
export interface MsgIncentivePoolSpendResponseProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
    value: Uint8Array;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseAmino {
}
export interface MsgIncentivePoolSpendResponseAminoMsg {
    type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
    value: MsgIncentivePoolSpendResponseAmino;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseSDKType {
}
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
    encode(message: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimResponse;
    fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(message: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
export declare const MsgIncentivePoolSpend: {
    typeUrl: string;
    encode(message: MsgIncentivePoolSpend, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIncentivePoolSpend;
    fromPartial(object: Partial<MsgIncentivePoolSpend>): MsgIncentivePoolSpend;
    fromAmino(object: MsgIncentivePoolSpendAmino): MsgIncentivePoolSpend;
    toAmino(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendAmino;
    fromAminoMsg(object: MsgIncentivePoolSpendAminoMsg): MsgIncentivePoolSpend;
    fromProtoMsg(message: MsgIncentivePoolSpendProtoMsg): MsgIncentivePoolSpend;
    toProto(message: MsgIncentivePoolSpend): Uint8Array;
    toProtoMsg(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendProtoMsg;
};
export declare const MsgIncentivePoolSpendResponse: {
    typeUrl: string;
    encode(_: MsgIncentivePoolSpendResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIncentivePoolSpendResponse;
    fromPartial(_: Partial<MsgIncentivePoolSpendResponse>): MsgIncentivePoolSpendResponse;
    fromAmino(_: MsgIncentivePoolSpendResponseAmino): MsgIncentivePoolSpendResponse;
    toAmino(_: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseAmino;
    fromAminoMsg(object: MsgIncentivePoolSpendResponseAminoMsg): MsgIncentivePoolSpendResponse;
    fromProtoMsg(message: MsgIncentivePoolSpendResponseProtoMsg): MsgIncentivePoolSpendResponse;
    toProto(message: MsgIncentivePoolSpendResponse): Uint8Array;
    toProtoMsg(message: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseProtoMsg;
};
