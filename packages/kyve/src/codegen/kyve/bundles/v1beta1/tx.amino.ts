import { MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
    aminoType: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
    toAmino: MsgSubmitBundleProposal.toAmino,
    fromAmino: MsgSubmitBundleProposal.fromAmino
  },
  "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
    aminoType: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
    toAmino: MsgVoteBundleProposal.toAmino,
    fromAmino: MsgVoteBundleProposal.fromAmino
  },
  "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
    aminoType: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
    toAmino: MsgClaimUploaderRole.toAmino,
    fromAmino: MsgClaimUploaderRole.fromAmino
  },
  "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
    aminoType: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
    toAmino: MsgSkipUploaderRole.toAmino,
    fromAmino: MsgSkipUploaderRole.fromAmino
  },
  "/kyve.bundles.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.bundles.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};