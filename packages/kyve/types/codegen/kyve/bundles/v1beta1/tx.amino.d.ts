import { MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
        aminoType: string;
        toAmino: (message: MsgSubmitBundleProposal) => import("./tx").MsgSubmitBundleProposalAmino;
        fromAmino: (object: import("./tx").MsgSubmitBundleProposalAmino) => MsgSubmitBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
        aminoType: string;
        toAmino: (message: MsgVoteBundleProposal) => import("./tx").MsgVoteBundleProposalAmino;
        fromAmino: (object: import("./tx").MsgVoteBundleProposalAmino) => MsgVoteBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
        aminoType: string;
        toAmino: (message: MsgClaimUploaderRole) => import("./tx").MsgClaimUploaderRoleAmino;
        fromAmino: (object: import("./tx").MsgClaimUploaderRoleAmino) => MsgClaimUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
        aminoType: string;
        toAmino: (message: MsgSkipUploaderRole) => import("./tx").MsgSkipUploaderRoleAmino;
        fromAmino: (object: import("./tx").MsgSkipUploaderRoleAmino) => MsgSkipUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
