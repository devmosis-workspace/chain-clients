import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposal {
    title: string;
    description: string;
    amount: Coin;
}
export interface CommunityPoolDepositProposalProtoMsg {
    typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposal";
    value: Uint8Array;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalAmino {
    title?: string;
    description?: string;
    amount?: CoinAmino;
}
export interface CommunityPoolDepositProposalAminoMsg {
    type: "/kava.earn.v1beta1.CommunityPoolDepositProposal";
    value: CommunityPoolDepositProposalAmino;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalSDKType {
    title: string;
    description: string;
    amount: CoinSDKType;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSON {
    title: string;
    description: string;
    amount: Coin;
    deposit: Coin[];
}
export interface CommunityPoolDepositProposalJSONProtoMsg {
    typeUrl: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON";
    value: Uint8Array;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONAmino {
    title?: string;
    description?: string;
    amount?: CoinAmino;
    deposit?: CoinAmino[];
}
export interface CommunityPoolDepositProposalJSONAminoMsg {
    type: "/kava.earn.v1beta1.CommunityPoolDepositProposalJSON";
    value: CommunityPoolDepositProposalJSONAmino;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONSDKType {
    title: string;
    description: string;
    amount: CoinSDKType;
    deposit: CoinSDKType[];
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposal {
    title: string;
    description: string;
    amount: Coin;
}
export interface CommunityPoolWithdrawProposalProtoMsg {
    typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal";
    value: Uint8Array;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalAmino {
    title?: string;
    description?: string;
    amount?: CoinAmino;
}
export interface CommunityPoolWithdrawProposalAminoMsg {
    type: "/kava.earn.v1beta1.CommunityPoolWithdrawProposal";
    value: CommunityPoolWithdrawProposalAmino;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalSDKType {
    title: string;
    description: string;
    amount: CoinSDKType;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSON {
    title: string;
    description: string;
    amount: Coin;
    deposit: Coin[];
}
export interface CommunityPoolWithdrawProposalJSONProtoMsg {
    typeUrl: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON";
    value: Uint8Array;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONAmino {
    title?: string;
    description?: string;
    amount?: CoinAmino;
    deposit?: CoinAmino[];
}
export interface CommunityPoolWithdrawProposalJSONAminoMsg {
    type: "/kava.earn.v1beta1.CommunityPoolWithdrawProposalJSON";
    value: CommunityPoolWithdrawProposalJSONAmino;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONSDKType {
    title: string;
    description: string;
    amount: CoinSDKType;
    deposit: CoinSDKType[];
}
export declare const CommunityPoolDepositProposal: {
    typeUrl: string;
    encode(message: CommunityPoolDepositProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolDepositProposal;
    fromPartial(object: Partial<CommunityPoolDepositProposal>): CommunityPoolDepositProposal;
    fromAmino(object: CommunityPoolDepositProposalAmino): CommunityPoolDepositProposal;
    toAmino(message: CommunityPoolDepositProposal): CommunityPoolDepositProposalAmino;
    fromAminoMsg(object: CommunityPoolDepositProposalAminoMsg): CommunityPoolDepositProposal;
    fromProtoMsg(message: CommunityPoolDepositProposalProtoMsg): CommunityPoolDepositProposal;
    toProto(message: CommunityPoolDepositProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolDepositProposal): CommunityPoolDepositProposalProtoMsg;
};
export declare const CommunityPoolDepositProposalJSON: {
    typeUrl: string;
    encode(message: CommunityPoolDepositProposalJSON, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolDepositProposalJSON;
    fromPartial(object: Partial<CommunityPoolDepositProposalJSON>): CommunityPoolDepositProposalJSON;
    fromAmino(object: CommunityPoolDepositProposalJSONAmino): CommunityPoolDepositProposalJSON;
    toAmino(message: CommunityPoolDepositProposalJSON): CommunityPoolDepositProposalJSONAmino;
    fromAminoMsg(object: CommunityPoolDepositProposalJSONAminoMsg): CommunityPoolDepositProposalJSON;
    fromProtoMsg(message: CommunityPoolDepositProposalJSONProtoMsg): CommunityPoolDepositProposalJSON;
    toProto(message: CommunityPoolDepositProposalJSON): Uint8Array;
    toProtoMsg(message: CommunityPoolDepositProposalJSON): CommunityPoolDepositProposalJSONProtoMsg;
};
export declare const CommunityPoolWithdrawProposal: {
    typeUrl: string;
    encode(message: CommunityPoolWithdrawProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolWithdrawProposal;
    fromPartial(object: Partial<CommunityPoolWithdrawProposal>): CommunityPoolWithdrawProposal;
    fromAmino(object: CommunityPoolWithdrawProposalAmino): CommunityPoolWithdrawProposal;
    toAmino(message: CommunityPoolWithdrawProposal): CommunityPoolWithdrawProposalAmino;
    fromAminoMsg(object: CommunityPoolWithdrawProposalAminoMsg): CommunityPoolWithdrawProposal;
    fromProtoMsg(message: CommunityPoolWithdrawProposalProtoMsg): CommunityPoolWithdrawProposal;
    toProto(message: CommunityPoolWithdrawProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolWithdrawProposal): CommunityPoolWithdrawProposalProtoMsg;
};
export declare const CommunityPoolWithdrawProposalJSON: {
    typeUrl: string;
    encode(message: CommunityPoolWithdrawProposalJSON, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolWithdrawProposalJSON;
    fromPartial(object: Partial<CommunityPoolWithdrawProposalJSON>): CommunityPoolWithdrawProposalJSON;
    fromAmino(object: CommunityPoolWithdrawProposalJSONAmino): CommunityPoolWithdrawProposalJSON;
    toAmino(message: CommunityPoolWithdrawProposalJSON): CommunityPoolWithdrawProposalJSONAmino;
    fromAminoMsg(object: CommunityPoolWithdrawProposalJSONAminoMsg): CommunityPoolWithdrawProposalJSON;
    fromProtoMsg(message: CommunityPoolWithdrawProposalJSONProtoMsg): CommunityPoolWithdrawProposalJSON;
    toProto(message: CommunityPoolWithdrawProposalJSON): Uint8Array;
    toProtoMsg(message: CommunityPoolWithdrawProposalJSON): CommunityPoolWithdrawProposalJSONProtoMsg;
};
