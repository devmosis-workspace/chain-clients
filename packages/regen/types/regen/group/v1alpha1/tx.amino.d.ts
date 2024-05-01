import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupAccount, MsgUpdateGroupAccountAdmin, MsgUpdateGroupAccountDecisionPolicy, MsgUpdateGroupAccountMetadata, MsgCreateProposal, MsgVote, MsgExec } from "./tx";
export declare const AminoConverter: {
    "/regen.group.v1alpha1.MsgCreateGroup": {
        aminoType: string;
        toAmino: (message: MsgCreateGroup) => import("./tx").MsgCreateGroupAmino;
        fromAmino: (object: import("./tx").MsgCreateGroupAmino) => MsgCreateGroup;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupMembers) => import("./tx").MsgUpdateGroupMembersAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupMembersAmino) => MsgUpdateGroupMembers;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupAdmin) => import("./tx").MsgUpdateGroupAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupAdminAmino) => MsgUpdateGroupAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupMetadata) => import("./tx").MsgUpdateGroupMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupMetadataAmino) => MsgUpdateGroupMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateGroupAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateGroupAccount) => import("./tx").MsgCreateGroupAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateGroupAccountAmino) => MsgCreateGroupAccount;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupAccountAdmin) => import("./tx").MsgUpdateGroupAccountAdminAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupAccountAdminAmino) => MsgUpdateGroupAccountAdmin;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupAccountDecisionPolicy) => import("./tx").MsgUpdateGroupAccountDecisionPolicyAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupAccountDecisionPolicyAmino) => MsgUpdateGroupAccountDecisionPolicy;
    };
    "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
        aminoType: string;
        toAmino: (message: MsgUpdateGroupAccountMetadata) => import("./tx").MsgUpdateGroupAccountMetadataAmino;
        fromAmino: (object: import("./tx").MsgUpdateGroupAccountMetadataAmino) => MsgUpdateGroupAccountMetadata;
    };
    "/regen.group.v1alpha1.MsgCreateProposal": {
        aminoType: string;
        toAmino: (message: MsgCreateProposal) => import("./tx").MsgCreateProposalAmino;
        fromAmino: (object: import("./tx").MsgCreateProposalAmino) => MsgCreateProposal;
    };
    "/regen.group.v1alpha1.MsgVote": {
        aminoType: string;
        toAmino: (message: MsgVote) => import("./tx").MsgVoteAmino;
        fromAmino: (object: import("./tx").MsgVoteAmino) => MsgVote;
    };
    "/regen.group.v1alpha1.MsgExec": {
        aminoType: string;
        toAmino: (message: MsgExec) => import("./tx").MsgExecAmino;
        fromAmino: (object: import("./tx").MsgExecAmino) => MsgExec;
    };
};
