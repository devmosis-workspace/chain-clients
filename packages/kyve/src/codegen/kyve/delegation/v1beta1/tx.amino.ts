import { MsgDelegate, MsgWithdrawRewards, MsgUndelegate, MsgRedelegate, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kyve.delegation.v1beta1.MsgDelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgDelegate",
    toAmino: MsgDelegate.toAmino,
    fromAmino: MsgDelegate.fromAmino
  },
  "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
    aminoType: "/kyve.delegation.v1beta1.MsgWithdrawRewards",
    toAmino: MsgWithdrawRewards.toAmino,
    fromAmino: MsgWithdrawRewards.fromAmino
  },
  "/kyve.delegation.v1beta1.MsgUndelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgUndelegate",
    toAmino: MsgUndelegate.toAmino,
    fromAmino: MsgUndelegate.fromAmino
  },
  "/kyve.delegation.v1beta1.MsgRedelegate": {
    aminoType: "/kyve.delegation.v1beta1.MsgRedelegate",
    toAmino: MsgRedelegate.toAmino,
    fromAmino: MsgRedelegate.fromAmino
  },
  "/kyve.delegation.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.delegation.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};