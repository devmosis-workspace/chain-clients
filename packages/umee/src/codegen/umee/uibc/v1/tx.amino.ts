import { MsgGovUpdateQuota, MsgGovSetIBCStatus } from "./tx";
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
  }
};