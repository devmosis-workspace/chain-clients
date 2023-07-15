import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
    toAmino: ({
      from,
      to,
      recipientOtherChain,
      senderOtherChain,
      randomNumberHash,
      timestamp,
      amount,
      heightSpan
    }: MsgCreateAtomicSwap): MsgCreateAtomicSwapAminoType["value"] => {
      return {
        from,
        to,
        recipient_other_chain: recipientOtherChain,
        sender_other_chain: senderOtherChain,
        random_number_hash: randomNumberHash,
        timestamp: timestamp.toString(),
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        height_span: heightSpan.toString()
      };
    },
    fromAmino: ({
      from,
      to,
      recipient_other_chain,
      sender_other_chain,
      random_number_hash,
      timestamp,
      amount,
      height_span
    }: MsgCreateAtomicSwapAminoType["value"]): MsgCreateAtomicSwap => {
      return {
        from,
        to,
        recipientOtherChain: recipient_other_chain,
        senderOtherChain: sender_other_chain,
        randomNumberHash: random_number_hash,
        timestamp: Long.fromString(timestamp),
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        heightSpan: Long.fromString(height_span)
      };
    }
  },
  "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
    toAmino: ({
      from,
      swapId,
      randomNumber
    }: MsgClaimAtomicSwap): MsgClaimAtomicSwapAminoType["value"] => {
      return {
        from,
        swap_id: swapId,
        random_number: randomNumber
      };
    },
    fromAmino: ({
      from,
      swap_id,
      random_number
    }: MsgClaimAtomicSwapAminoType["value"]): MsgClaimAtomicSwap => {
      return {
        from,
        swapId: swap_id,
        randomNumber: random_number
      };
    }
  },
  "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
    toAmino: ({
      from,
      swapId
    }: MsgRefundAtomicSwap): MsgRefundAtomicSwapAminoType["value"] => {
      return {
        from,
        swap_id: swapId
      };
    },
    fromAmino: ({
      from,
      swap_id
    }: MsgRefundAtomicSwapAminoType["value"]): MsgRefundAtomicSwap => {
      return {
        from,
        swapId: swap_id
      };
    }
  }
};