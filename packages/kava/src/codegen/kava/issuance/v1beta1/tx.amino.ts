import { MsgIssueTokens, MsgRedeemTokens, MsgBlockAddress, MsgUnblockAddress, MsgSetPauseStatus } from "./tx";
export const AminoConverter = {
  "/kava.issuance.v1beta1.MsgIssueTokens": {
    aminoType: "/kava.issuance.v1beta1.MsgIssueTokens",
    toAmino: MsgIssueTokens.toAmino,
    fromAmino: MsgIssueTokens.fromAmino
  },
  "/kava.issuance.v1beta1.MsgRedeemTokens": {
    aminoType: "/kava.issuance.v1beta1.MsgRedeemTokens",
    toAmino: MsgRedeemTokens.toAmino,
    fromAmino: MsgRedeemTokens.fromAmino
  },
  "/kava.issuance.v1beta1.MsgBlockAddress": {
    aminoType: "/kava.issuance.v1beta1.MsgBlockAddress",
    toAmino: MsgBlockAddress.toAmino,
    fromAmino: MsgBlockAddress.fromAmino
  },
  "/kava.issuance.v1beta1.MsgUnblockAddress": {
    aminoType: "/kava.issuance.v1beta1.MsgUnblockAddress",
    toAmino: MsgUnblockAddress.toAmino,
    fromAmino: MsgUnblockAddress.fromAmino
  },
  "/kava.issuance.v1beta1.MsgSetPauseStatus": {
    aminoType: "/kava.issuance.v1beta1.MsgSetPauseStatus",
    toAmino: MsgSetPauseStatus.toAmino,
    fromAmino: MsgSetPauseStatus.fromAmino
  }
};