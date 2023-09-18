import { MsgCreateIscnRecord, MsgUpdateIscnRecord, MsgChangeIscnRecordOwnership } from "./tx";
export const AminoConverter = {
  "/likechain.iscn.MsgCreateIscnRecord": {
    aminoType: "/likechain.iscn.MsgCreateIscnRecord",
    toAmino: MsgCreateIscnRecord.toAmino,
    fromAmino: MsgCreateIscnRecord.fromAmino
  },
  "/likechain.iscn.MsgUpdateIscnRecord": {
    aminoType: "/likechain.iscn.MsgUpdateIscnRecord",
    toAmino: MsgUpdateIscnRecord.toAmino,
    fromAmino: MsgUpdateIscnRecord.fromAmino
  },
  "/likechain.iscn.MsgChangeIscnRecordOwnership": {
    aminoType: "/likechain.iscn.MsgChangeIscnRecordOwnership",
    toAmino: MsgChangeIscnRecordOwnership.toAmino,
    fromAmino: MsgChangeIscnRecordOwnership.fromAmino
  }
};