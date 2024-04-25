import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposal {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
}
export interface CommunityPoolMultiSpendProposalProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal";
    value: Uint8Array;
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposalAmino {
    title?: string;
    description?: string;
    recipient_list?: MultiSpendRecipientAmino[];
}
export interface CommunityPoolMultiSpendProposalAminoMsg {
    type: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposal";
    value: CommunityPoolMultiSpendProposalAmino;
}
/**
 * CommunityPoolMultiSpendProposal spends from the community pool by sending to one or more
 * addresses
 */
export interface CommunityPoolMultiSpendProposalSDKType {
    title: string;
    description: string;
    recipient_list: MultiSpendRecipientSDKType[];
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSON {
    title: string;
    description: string;
    recipientList: MultiSpendRecipient[];
    deposit: Coin[];
}
export interface CommunityPoolMultiSpendProposalJSONProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON";
    value: Uint8Array;
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSONAmino {
    title?: string;
    description?: string;
    recipient_list?: MultiSpendRecipientAmino[];
    deposit?: CoinAmino[];
}
export interface CommunityPoolMultiSpendProposalJSONAminoMsg {
    type: "/kava.kavadist.v1beta1.CommunityPoolMultiSpendProposalJSON";
    value: CommunityPoolMultiSpendProposalJSONAmino;
}
/** CommunityPoolMultiSpendProposalJSON defines a CommunityPoolMultiSpendProposal with a deposit */
export interface CommunityPoolMultiSpendProposalJSONSDKType {
    title: string;
    description: string;
    recipient_list: MultiSpendRecipientSDKType[];
    deposit: CoinSDKType[];
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipient {
    address: string;
    amount: Coin[];
}
export interface MultiSpendRecipientProtoMsg {
    typeUrl: "/kava.kavadist.v1beta1.MultiSpendRecipient";
    value: Uint8Array;
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipientAmino {
    address?: string;
    amount?: CoinAmino[];
}
export interface MultiSpendRecipientAminoMsg {
    type: "/kava.kavadist.v1beta1.MultiSpendRecipient";
    value: MultiSpendRecipientAmino;
}
/** MultiSpendRecipient defines a recipient and the amount of coins they are receiving */
export interface MultiSpendRecipientSDKType {
    address: string;
    amount: CoinSDKType[];
}
export declare const CommunityPoolMultiSpendProposal: {
    typeUrl: string;
    encode(message: CommunityPoolMultiSpendProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolMultiSpendProposal;
    fromPartial(object: Partial<CommunityPoolMultiSpendProposal>): CommunityPoolMultiSpendProposal;
    fromAmino(object: CommunityPoolMultiSpendProposalAmino): CommunityPoolMultiSpendProposal;
    toAmino(message: CommunityPoolMultiSpendProposal): CommunityPoolMultiSpendProposalAmino;
    fromAminoMsg(object: CommunityPoolMultiSpendProposalAminoMsg): CommunityPoolMultiSpendProposal;
    fromProtoMsg(message: CommunityPoolMultiSpendProposalProtoMsg): CommunityPoolMultiSpendProposal;
    toProto(message: CommunityPoolMultiSpendProposal): Uint8Array;
    toProtoMsg(message: CommunityPoolMultiSpendProposal): CommunityPoolMultiSpendProposalProtoMsg;
};
export declare const CommunityPoolMultiSpendProposalJSON: {
    typeUrl: string;
    encode(message: CommunityPoolMultiSpendProposalJSON, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommunityPoolMultiSpendProposalJSON;
    fromPartial(object: Partial<CommunityPoolMultiSpendProposalJSON>): CommunityPoolMultiSpendProposalJSON;
    fromAmino(object: CommunityPoolMultiSpendProposalJSONAmino): CommunityPoolMultiSpendProposalJSON;
    toAmino(message: CommunityPoolMultiSpendProposalJSON): CommunityPoolMultiSpendProposalJSONAmino;
    fromAminoMsg(object: CommunityPoolMultiSpendProposalJSONAminoMsg): CommunityPoolMultiSpendProposalJSON;
    fromProtoMsg(message: CommunityPoolMultiSpendProposalJSONProtoMsg): CommunityPoolMultiSpendProposalJSON;
    toProto(message: CommunityPoolMultiSpendProposalJSON): Uint8Array;
    toProtoMsg(message: CommunityPoolMultiSpendProposalJSON): CommunityPoolMultiSpendProposalJSONProtoMsg;
};
export declare const MultiSpendRecipient: {
    typeUrl: string;
    encode(message: MultiSpendRecipient, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MultiSpendRecipient;
    fromPartial(object: Partial<MultiSpendRecipient>): MultiSpendRecipient;
    fromAmino(object: MultiSpendRecipientAmino): MultiSpendRecipient;
    toAmino(message: MultiSpendRecipient): MultiSpendRecipientAmino;
    fromAminoMsg(object: MultiSpendRecipientAminoMsg): MultiSpendRecipient;
    fromProtoMsg(message: MultiSpendRecipientProtoMsg): MultiSpendRecipient;
    toProto(message: MultiSpendRecipient): Uint8Array;
    toProtoMsg(message: MultiSpendRecipient): MultiSpendRecipientProtoMsg;
};
