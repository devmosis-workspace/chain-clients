import { Rpc } from "../../../helpers";
import { MsgSubmitBundleProposal, MsgSubmitBundleProposalResponse, MsgVoteBundleProposal, MsgVoteBundleProposalResponse, MsgClaimUploaderRole, MsgClaimUploaderRoleResponse, MsgSkipUploaderRole, MsgSkipUploaderRoleResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** SubmitBundleProposal ... */
    submitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    /** VoteBundleProposal ... */
    voteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse>;
    /** ClaimUploaderRole ... */
    claimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    /** SkipUploaderRole ... */
    skipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/bundles module
     * parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    voteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse>;
    claimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    skipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
