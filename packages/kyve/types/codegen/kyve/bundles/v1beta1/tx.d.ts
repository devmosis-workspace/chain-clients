import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** VoteType ... */
export declare enum VoteType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_VALID - VOTE_TYPE_VALID ... */
    VOTE_TYPE_VALID = 1,
    /** VOTE_TYPE_INVALID - VOTE_TYPE_INVALID ... */
    VOTE_TYPE_INVALID = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
export declare const VoteTypeSDKType: typeof VoteType;
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposal {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    poolId: Long;
    /** storage_id ... */
    storageId: string;
    /** data_size ... */
    dataSize: Long;
    /** data_hash ... */
    dataHash: string;
    /** from_index ... */
    fromIndex: Long;
    /** bundle_size ... */
    bundleSize: Long;
    /** from_key */
    fromKey: string;
    /** to_key ... */
    toKey: string;
    /** bundle_summary ... */
    bundleSummary: string;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalSDKType {
    creator: string;
    staker: string;
    pool_id: Long;
    storage_id: string;
    data_size: Long;
    data_hash: string;
    from_index: Long;
    bundle_size: Long;
    from_key: string;
    to_key: string;
    bundle_summary: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponseSDKType {
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposal {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    poolId: Long;
    /** storage_id ... */
    storageId: string;
    /** vote ... */
    vote: VoteType;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalSDKType {
    creator: string;
    staker: string;
    pool_id: Long;
    storage_id: string;
    vote: VoteType;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponse {
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponseSDKType {
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    poolId: Long;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleSDKType {
    creator: string;
    staker: string;
    pool_id: Long;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponseSDKType {
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRole {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    poolId: Long;
    /** from_index ... */
    fromIndex: Long;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleSDKType {
    creator: string;
    staker: string;
    pool_id: Long;
    from_index: Long;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponse {
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponseSDKType {
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/bundles parameters to update. */
    payload: string;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgSubmitBundleProposal: {
    encode(message: MsgSubmitBundleProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitBundleProposal;
    fromPartial(object: Partial<MsgSubmitBundleProposal>): MsgSubmitBundleProposal;
};
export declare const MsgSubmitBundleProposalResponse: {
    encode(_: MsgSubmitBundleProposalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitBundleProposalResponse;
    fromPartial(_: Partial<MsgSubmitBundleProposalResponse>): MsgSubmitBundleProposalResponse;
};
export declare const MsgVoteBundleProposal: {
    encode(message: MsgVoteBundleProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgVoteBundleProposal;
    fromPartial(object: Partial<MsgVoteBundleProposal>): MsgVoteBundleProposal;
};
export declare const MsgVoteBundleProposalResponse: {
    encode(_: MsgVoteBundleProposalResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgVoteBundleProposalResponse;
    fromPartial(_: Partial<MsgVoteBundleProposalResponse>): MsgVoteBundleProposalResponse;
};
export declare const MsgClaimUploaderRole: {
    encode(message: MsgClaimUploaderRole, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimUploaderRole;
    fromPartial(object: Partial<MsgClaimUploaderRole>): MsgClaimUploaderRole;
};
export declare const MsgClaimUploaderRoleResponse: {
    encode(_: MsgClaimUploaderRoleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimUploaderRoleResponse;
    fromPartial(_: Partial<MsgClaimUploaderRoleResponse>): MsgClaimUploaderRoleResponse;
};
export declare const MsgSkipUploaderRole: {
    encode(message: MsgSkipUploaderRole, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSkipUploaderRole;
    fromPartial(object: Partial<MsgSkipUploaderRole>): MsgSkipUploaderRole;
};
export declare const MsgSkipUploaderRoleResponse: {
    encode(_: MsgSkipUploaderRoleResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSkipUploaderRoleResponse;
    fromPartial(_: Partial<MsgSkipUploaderRoleResponse>): MsgSkipUploaderRoleResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
