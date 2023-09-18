import { DenomPairTakerFee, DenomPairTakerFeeAmino, DenomPairTakerFeeSDKType } from "./tx";
import { BinaryWriter } from "../../../binary";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposal {
    title: string;
    description: string;
    denomPairTakerFee: DenomPairTakerFee[];
}
export interface DenomPairTakerFeeProposalProtoMsg {
    typeUrl: "/osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal";
    value: Uint8Array;
}
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposalAmino {
    title: string;
    description: string;
    denom_pair_taker_fee: DenomPairTakerFeeAmino[];
}
export interface DenomPairTakerFeeProposalAminoMsg {
    type: "osmosis/poolmanager/denom-pair-taker-fee-proposal";
    value: DenomPairTakerFeeProposalAmino;
}
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 */
export interface DenomPairTakerFeeProposalSDKType {
    title: string;
    description: string;
    denom_pair_taker_fee: DenomPairTakerFeeSDKType[];
}
export declare const DenomPairTakerFeeProposal: {
    typeUrl: string;
    encode(message: DenomPairTakerFeeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomPairTakerFeeProposal;
    fromPartial(object: Partial<DenomPairTakerFeeProposal>): DenomPairTakerFeeProposal;
    fromAmino(object: DenomPairTakerFeeProposalAmino): DenomPairTakerFeeProposal;
    toAmino(message: DenomPairTakerFeeProposal): DenomPairTakerFeeProposalAmino;
    fromAminoMsg(object: DenomPairTakerFeeProposalAminoMsg): DenomPairTakerFeeProposal;
    toAminoMsg(message: DenomPairTakerFeeProposal): DenomPairTakerFeeProposalAminoMsg;
    fromProtoMsg(message: DenomPairTakerFeeProposalProtoMsg): DenomPairTakerFeeProposal;
    toProto(message: DenomPairTakerFeeProposal): Uint8Array;
    toProtoMsg(message: DenomPairTakerFeeProposal): DenomPairTakerFeeProposalProtoMsg;
};
