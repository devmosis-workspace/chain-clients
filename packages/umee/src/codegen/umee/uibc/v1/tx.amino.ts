import { MsgGovUpdateQuota, MsgGovSetIBCStatus, MsgGovToggleICS20Hooks } from "./tx";
export const AminoConverter = {
  "/umee.uibc.v1.MsgGovUpdateQuota": {
    aminoType: "/umee.uibc.v1.MsgGovUpdateQuota",
    toAmino: MsgGovUpdateQuota.toAmino,
    fromAmino: MsgGovUpdateQuota.fromAmino
  },
  "/umee.uibc.v1.MsgGovSetIBCStatus": {
    aminoType: "/umee.uibc.v1.MsgGovSetIBCStatus",
    toAmino: MsgGovSetIBCStatus.toAmino,
    fromAmino: MsgGovSetIBCStatus.fromAmino
  },
  "/umee.uibc.v1.MsgGovToggleICS20Hooks": {
    aminoType: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
    toAmino: MsgGovToggleICS20Hooks.toAmino,
    fromAmino: MsgGovToggleICS20Hooks.fromAmino
  }
};