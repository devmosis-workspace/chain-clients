import { ProposedTokenPrice, ProposedTokenPriceAmino, ProposedTokenPriceSDKType } from "./auction";
import { BinaryWriter } from "../../binary";
export interface SetTokenPricesProposal {
    title: string;
    description: string;
    tokenPrices: ProposedTokenPrice[];
}
export interface SetTokenPricesProposalProtoMsg {
    typeUrl: "/auction.v1.SetTokenPricesProposal";
    value: Uint8Array;
}
export interface SetTokenPricesProposalAmino {
    title?: string;
    description?: string;
    token_prices?: ProposedTokenPriceAmino[];
}
export interface SetTokenPricesProposalAminoMsg {
    type: "/auction.v1.SetTokenPricesProposal";
    value: SetTokenPricesProposalAmino;
}
export interface SetTokenPricesProposalSDKType {
    title: string;
    description: string;
    token_prices: ProposedTokenPriceSDKType[];
}
export interface SetTokenPricesProposalWithDeposit {
    title: string;
    description: string;
    tokenPrices: ProposedTokenPrice[];
    deposit: string;
}
export interface SetTokenPricesProposalWithDepositProtoMsg {
    typeUrl: "/auction.v1.SetTokenPricesProposalWithDeposit";
    value: Uint8Array;
}
export interface SetTokenPricesProposalWithDepositAmino {
    title?: string;
    description?: string;
    token_prices?: ProposedTokenPriceAmino[];
    deposit?: string;
}
export interface SetTokenPricesProposalWithDepositAminoMsg {
    type: "/auction.v1.SetTokenPricesProposalWithDeposit";
    value: SetTokenPricesProposalWithDepositAmino;
}
export interface SetTokenPricesProposalWithDepositSDKType {
    title: string;
    description: string;
    token_prices: ProposedTokenPriceSDKType[];
    deposit: string;
}
export declare const SetTokenPricesProposal: {
    typeUrl: string;
    encode(message: SetTokenPricesProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetTokenPricesProposal;
    fromPartial(object: Partial<SetTokenPricesProposal>): SetTokenPricesProposal;
    fromAmino(object: SetTokenPricesProposalAmino): SetTokenPricesProposal;
    toAmino(message: SetTokenPricesProposal): SetTokenPricesProposalAmino;
    fromAminoMsg(object: SetTokenPricesProposalAminoMsg): SetTokenPricesProposal;
    fromProtoMsg(message: SetTokenPricesProposalProtoMsg): SetTokenPricesProposal;
    toProto(message: SetTokenPricesProposal): Uint8Array;
    toProtoMsg(message: SetTokenPricesProposal): SetTokenPricesProposalProtoMsg;
};
export declare const SetTokenPricesProposalWithDeposit: {
    typeUrl: string;
    encode(message: SetTokenPricesProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetTokenPricesProposalWithDeposit;
    fromPartial(object: Partial<SetTokenPricesProposalWithDeposit>): SetTokenPricesProposalWithDeposit;
    fromAmino(object: SetTokenPricesProposalWithDepositAmino): SetTokenPricesProposalWithDeposit;
    toAmino(message: SetTokenPricesProposalWithDeposit): SetTokenPricesProposalWithDepositAmino;
    fromAminoMsg(object: SetTokenPricesProposalWithDepositAminoMsg): SetTokenPricesProposalWithDeposit;
    fromProtoMsg(message: SetTokenPricesProposalWithDepositProtoMsg): SetTokenPricesProposalWithDeposit;
    toProto(message: SetTokenPricesProposalWithDeposit): Uint8Array;
    toProtoMsg(message: SetTokenPricesProposalWithDeposit): SetTokenPricesProposalWithDepositProtoMsg;
};
