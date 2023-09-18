import { MsgRegisterRevenue, MsgUpdateRevenue, MsgCancelRevenue, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/evmos.revenue.v1.MsgRegisterRevenue": {
    aminoType: "/evmos.revenue.v1.MsgRegisterRevenue",
    toAmino: MsgRegisterRevenue.toAmino,
    fromAmino: MsgRegisterRevenue.fromAmino
  },
  "/evmos.revenue.v1.MsgUpdateRevenue": {
    aminoType: "/evmos.revenue.v1.MsgUpdateRevenue",
    toAmino: MsgUpdateRevenue.toAmino,
    fromAmino: MsgUpdateRevenue.fromAmino
  },
  "/evmos.revenue.v1.MsgCancelRevenue": {
    aminoType: "/evmos.revenue.v1.MsgCancelRevenue",
    toAmino: MsgCancelRevenue.toAmino,
    fromAmino: MsgCancelRevenue.fromAmino
  },
  "/evmos.revenue.v1.MsgUpdateParams": {
    aminoType: "/evmos.revenue.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};