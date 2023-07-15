import { voteTypeFromJSON } from "./genesis";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSubmitProposal, MsgVote } from "./tx";
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "/kava.committee.v1beta1.MsgSubmitProposal";
  value: {
    pub_proposal: {
      type_url: string;
      value: Uint8Array;
    };
    proposer: string;
    committee_id: string;
  };
}
export interface MsgVoteAminoType extends AminoMsg {
  type: "/kava.committee.v1beta1.MsgVote";
  value: {
    proposal_id: string;
    voter: string;
    vote_type: number;
  };
}
export const AminoConverter = {
  "/kava.committee.v1beta1.MsgSubmitProposal": {
    aminoType: "/kava.committee.v1beta1.MsgSubmitProposal",
    toAmino: ({
      pubProposal,
      proposer,
      committeeId
    }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        pub_proposal: {
          type_url: pubProposal.typeUrl,
          value: pubProposal.value
        },
        proposer,
        committee_id: committeeId.toString()
      };
    },
    fromAmino: ({
      pub_proposal,
      proposer,
      committee_id
    }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        pubProposal: {
          typeUrl: pub_proposal.type_url,
          value: pub_proposal.value
        },
        proposer,
        committeeId: Long.fromString(committee_id)
      };
    }
  },
  "/kava.committee.v1beta1.MsgVote": {
    aminoType: "/kava.committee.v1beta1.MsgVote",
    toAmino: ({
      proposalId,
      voter,
      voteType
    }: MsgVote): MsgVoteAminoType["value"] => {
      return {
        proposal_id: proposalId.toString(),
        voter,
        vote_type: voteType
      };
    },
    fromAmino: ({
      proposal_id,
      voter,
      vote_type
    }: MsgVoteAminoType["value"]): MsgVote => {
      return {
        proposalId: Long.fromString(proposal_id),
        voter,
        voteType: voteTypeFromJSON(vote_type)
      };
    }
  }
};