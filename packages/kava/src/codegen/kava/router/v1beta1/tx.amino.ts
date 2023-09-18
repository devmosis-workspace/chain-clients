import { MsgMintDeposit, MsgDelegateMintDeposit, MsgWithdrawBurn, MsgWithdrawBurnUndelegate } from "./tx";
export const AminoConverter = {
  "/kava.router.v1beta1.MsgMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgMintDeposit",
    toAmino: MsgMintDeposit.toAmino,
    fromAmino: MsgMintDeposit.fromAmino
  },
  "/kava.router.v1beta1.MsgDelegateMintDeposit": {
    aminoType: "/kava.router.v1beta1.MsgDelegateMintDeposit",
    toAmino: MsgDelegateMintDeposit.toAmino,
    fromAmino: MsgDelegateMintDeposit.fromAmino
  },
  "/kava.router.v1beta1.MsgWithdrawBurn": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurn",
    toAmino: MsgWithdrawBurn.toAmino,
    fromAmino: MsgWithdrawBurn.fromAmino
  },
  "/kava.router.v1beta1.MsgWithdrawBurnUndelegate": {
    aminoType: "/kava.router.v1beta1.MsgWithdrawBurnUndelegate",
    toAmino: MsgWithdrawBurnUndelegate.toAmino,
    fromAmino: MsgWithdrawBurnUndelegate.fromAmino
  }
};