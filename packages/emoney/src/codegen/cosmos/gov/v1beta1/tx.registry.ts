import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgVote, MsgDeposit } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1beta1.MsgVote", MsgVote], ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value
      };
    }
  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    vote(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    }
  }
};