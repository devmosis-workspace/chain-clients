import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.bundles.v1beta1.MsgSubmitBundleProposal", MsgSubmitBundleProposal], ["/kyve.bundles.v1beta1.MsgVoteBundleProposal", MsgVoteBundleProposal], ["/kyve.bundles.v1beta1.MsgClaimUploaderRole", MsgClaimUploaderRole], ["/kyve.bundles.v1beta1.MsgSkipUploaderRole", MsgSkipUploaderRole], ["/kyve.bundles.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitBundleProposal(value: MsgSubmitBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
        value: MsgSubmitBundleProposal.encode(value).finish()
      };
    },
    voteBundleProposal(value: MsgVoteBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
        value: MsgVoteBundleProposal.encode(value).finish()
      };
    },
    claimUploaderRole(value: MsgClaimUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
        value: MsgClaimUploaderRole.encode(value).finish()
      };
    },
    skipUploaderRole(value: MsgSkipUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
        value: MsgSkipUploaderRole.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitBundleProposal(value: MsgSubmitBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
        value
      };
    },
    voteBundleProposal(value: MsgVoteBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
        value
      };
    },
    claimUploaderRole(value: MsgClaimUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
        value
      };
    },
    skipUploaderRole(value: MsgSkipUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    submitBundleProposal(value: any) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
        value: MsgSubmitBundleProposal.fromJSON(value)
      };
    },
    voteBundleProposal(value: any) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
        value: MsgVoteBundleProposal.fromJSON(value)
      };
    },
    claimUploaderRole(value: any) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
        value: MsgClaimUploaderRole.fromJSON(value)
      };
    },
    skipUploaderRole(value: any) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
        value: MsgSkipUploaderRole.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitBundleProposal(value: MsgSubmitBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
        value: MsgSubmitBundleProposal.fromPartial(value)
      };
    },
    voteBundleProposal(value: MsgVoteBundleProposal) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
        value: MsgVoteBundleProposal.fromPartial(value)
      };
    },
    claimUploaderRole(value: MsgClaimUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
        value: MsgClaimUploaderRole.fromPartial(value)
      };
    },
    skipUploaderRole(value: MsgSkipUploaderRole) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
        value: MsgSkipUploaderRole.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};