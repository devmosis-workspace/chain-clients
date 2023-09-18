import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitBundleProposal = this.submitBundleProposal.bind(this);
    this.voteBundleProposal = this.voteBundleProposal.bind(this);
    this.claimUploaderRole = this.claimUploaderRole.bind(this);
    this.skipUploaderRole = this.skipUploaderRole.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  submitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse> {
    const data = MsgSubmitBundleProposal.encode(request).finish();
    const promise = this.rpc.request("kyve.bundles.v1beta1.Msg", "SubmitBundleProposal", data);
    return promise.then(data => MsgSubmitBundleProposalResponse.decode(new BinaryReader(data)));
  }
  voteBundleProposal(request: MsgVoteBundleProposal): Promise<MsgVoteBundleProposalResponse> {
    const data = MsgVoteBundleProposal.encode(request).finish();
    const promise = this.rpc.request("kyve.bundles.v1beta1.Msg", "VoteBundleProposal", data);
    return promise.then(data => MsgVoteBundleProposalResponse.decode(new BinaryReader(data)));
  }
  claimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse> {
    const data = MsgClaimUploaderRole.encode(request).finish();
    const promise = this.rpc.request("kyve.bundles.v1beta1.Msg", "ClaimUploaderRole", data);
    return promise.then(data => MsgClaimUploaderRoleResponse.decode(new BinaryReader(data)));
  }
  skipUploaderRole(request: MsgSkipUploaderRole): Promise<MsgSkipUploaderRoleResponse> {
    const data = MsgSkipUploaderRole.encode(request).finish();
    const promise = this.rpc.request("kyve.bundles.v1beta1.Msg", "SkipUploaderRole", data);
    return promise.then(data => MsgSkipUploaderRoleResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("kyve.bundles.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}