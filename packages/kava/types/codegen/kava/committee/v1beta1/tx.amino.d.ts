import { MsgSubmitProposal, MsgVote } from "./tx";
export declare const AminoConverter: {
    "/kava.committee.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: (message: MsgSubmitProposal) => import("./tx").MsgSubmitProposalAmino;
        fromAmino: (object: import("./tx").MsgSubmitProposalAmino) => MsgSubmitProposal;
    };
    "/kava.committee.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: (message: MsgVote) => import("./tx").MsgVoteAmino;
        fromAmino: (object: import("./tx").MsgVoteAmino) => MsgVote;
    };
};
