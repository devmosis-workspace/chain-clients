import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupAccount, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountMetadata, MsgCreateProposal, MsgVote, MsgExec } from "./tx";
export const AminoConverter = {
  "/regen.group.v1alpha1.MsgCreateGroup": {
    aminoType: "/regen.group.v1alpha1.MsgCreateGroup",
    toAmino: MsgCreateGroup.toAmino,
    fromAmino: MsgCreateGroup.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
    toAmino: MsgUpdateGroupMembers.toAmino,
    fromAmino: MsgUpdateGroupMembers.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
    toAmino: MsgUpdateGroupAdmin.toAmino,
    fromAmino: MsgUpdateGroupAdmin.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
    toAmino: MsgUpdateGroupMetadata.toAmino,
    fromAmino: MsgUpdateGroupMetadata.fromAmino
  },
  "/regen.group.v1alpha1.MsgCreateGroupAccount": {
    aminoType: "/regen.group.v1alpha1.MsgCreateGroupAccount",
    toAmino: MsgCreateGroupAccount.toAmino,
    fromAmino: MsgCreateGroupAccount.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
    toAmino: MsgUpdateGroupAccountAdmin.toAmino,
    fromAmino: MsgUpdateGroupAccountAdmin.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
    toAmino: MsgUpdateGroupAccountDecisionPolicy.toAmino,
    fromAmino: MsgUpdateGroupAccountDecisionPolicy.fromAmino
  },
  "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
    aminoType: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
    toAmino: MsgUpdateGroupAccountMetadata.toAmino,
    fromAmino: MsgUpdateGroupAccountMetadata.fromAmino
  },
  "/regen.group.v1alpha1.MsgCreateProposal": {
    aminoType: "/regen.group.v1alpha1.MsgCreateProposal",
    toAmino: MsgCreateProposal.toAmino,
    fromAmino: MsgCreateProposal.fromAmino
  },
  "/regen.group.v1alpha1.MsgVote": {
    aminoType: "/regen.group.v1alpha1.MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino
  },
  "/regen.group.v1alpha1.MsgExec": {
    aminoType: "/regen.group.v1alpha1.MsgExec",
    toAmino: MsgExec.toAmino,
    fromAmino: MsgExec.fromAmino
  }
};