import { MsgCreateIssuer, MsgDestroyIssuer, MsgSetGasPrices, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetParameters } from "./tx";
export const AminoConverter = {
  "/em.authority.v1.MsgCreateIssuer": {
    aminoType: "/em.authority.v1.MsgCreateIssuer",
    toAmino: MsgCreateIssuer.toAmino,
    fromAmino: MsgCreateIssuer.fromAmino
  },
  "/em.authority.v1.MsgDestroyIssuer": {
    aminoType: "/em.authority.v1.MsgDestroyIssuer",
    toAmino: MsgDestroyIssuer.toAmino,
    fromAmino: MsgDestroyIssuer.fromAmino
  },
  "/em.authority.v1.MsgSetGasPrices": {
    aminoType: "/em.authority.v1.MsgSetGasPrices",
    toAmino: MsgSetGasPrices.toAmino,
    fromAmino: MsgSetGasPrices.fromAmino
  },
  "/em.authority.v1.MsgReplaceAuthority": {
    aminoType: "/em.authority.v1.MsgReplaceAuthority",
    toAmino: MsgReplaceAuthority.toAmino,
    fromAmino: MsgReplaceAuthority.fromAmino
  },
  "/em.authority.v1.MsgScheduleUpgrade": {
    aminoType: "/em.authority.v1.MsgScheduleUpgrade",
    toAmino: MsgScheduleUpgrade.toAmino,
    fromAmino: MsgScheduleUpgrade.fromAmino
  },
  "/em.authority.v1.MsgSetParameters": {
    aminoType: "/em.authority.v1.MsgSetParameters",
    toAmino: MsgSetParameters.toAmino,
    fromAmino: MsgSetParameters.fromAmino
  }
};