import { MsgCreateAtomicSwap, MsgClaimAtomicSwap, MsgRefundAtomicSwap } from "./tx";
export const AminoConverter = {
  "/kava.bep3.v1beta1.MsgCreateAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgCreateAtomicSwap",
    toAmino: MsgCreateAtomicSwap.toAmino,
    fromAmino: MsgCreateAtomicSwap.fromAmino
  },
  "/kava.bep3.v1beta1.MsgClaimAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgClaimAtomicSwap",
    toAmino: MsgClaimAtomicSwap.toAmino,
    fromAmino: MsgClaimAtomicSwap.fromAmino
  },
  "/kava.bep3.v1beta1.MsgRefundAtomicSwap": {
    aminoType: "/kava.bep3.v1beta1.MsgRefundAtomicSwap",
    toAmino: MsgRefundAtomicSwap.toAmino,
    fromAmino: MsgRefundAtomicSwap.fromAmino
  }
};