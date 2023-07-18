import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateAtomicSwap, MsgClaimAtomicSwap, MsgRefundAtomicSwap } from "./tx";
export interface MsgCreateAtomicSwapAminoType extends AminoMsg {
    type: "/kava.bep3.v1beta1.MsgCreateAtomicSwap";
    value: {
        from: string;
        to: string;
        recipient_other_chain: string;
        sender_other_chain: string;
        random_number_hash: string;
        timestamp: string;
        amount: {
            denom: string;
            amount: string;
        }[];
        height_span: string;
    };
}
export interface MsgClaimAtomicSwapAminoType extends AminoMsg {
    type: "/kava.bep3.v1beta1.MsgClaimAtomicSwap";
    value: {
        from: string;
        swap_id: string;
        random_number: string;
    };
}
export interface MsgRefundAtomicSwapAminoType extends AminoMsg {
    type: "/kava.bep3.v1beta1.MsgRefundAtomicSwap";
    value: {
        from: string;
        swap_id: string;
    };
}
export declare const AminoConverter: {
    "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, to, recipientOtherChain, senderOtherChain, randomNumberHash, timestamp, amount, heightSpan }: MsgCreateAtomicSwap) => MsgCreateAtomicSwapAminoType["value"];
        fromAmino: ({ from, to, recipient_other_chain, sender_other_chain, random_number_hash, timestamp, amount, height_span }: MsgCreateAtomicSwapAminoType["value"]) => MsgCreateAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, swapId, randomNumber }: MsgClaimAtomicSwap) => MsgClaimAtomicSwapAminoType["value"];
        fromAmino: ({ from, swap_id, random_number }: MsgClaimAtomicSwapAminoType["value"]) => MsgClaimAtomicSwap;
    };
    "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
        aminoType: string;
        toAmino: ({ from, swapId }: MsgRefundAtomicSwap) => MsgRefundAtomicSwapAminoType["value"];
        fromAmino: ({ from, swap_id }: MsgRefundAtomicSwapAminoType["value"]) => MsgRefundAtomicSwap;
    };
};
