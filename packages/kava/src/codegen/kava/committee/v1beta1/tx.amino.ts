import { MsgSubmitProposal, MsgVote } from "./tx";
export const AminoConverter = {
  "/kava.committee.v1beta1.MsgSubmitProposal": {
    aminoType: "/kava.committee.v1beta1.MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino
  },
  "/kava.committee.v1beta1.MsgVote": {
    aminoType: "/kava.committee.v1beta1.MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  }
};