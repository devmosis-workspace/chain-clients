import { BinaryWriter } from "../../../binary";
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
export declare const VoteTypeAmino: typeof VoteType;
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposal {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    poolId: bigint;
    /** storage_id ... */
    storageId: string;
    /** data_size ... */
    dataSize: bigint;
    /** data_hash ... */
    dataHash: string;
    /** from_index ... */
    fromIndex: bigint;
    /** bundle_size ... */
    bundleSize: bigint;
    /** from_key */
    fromKey: string;
    /** to_key ... */
    toKey: string;
    /** bundle_summary ... */
    bundleSummary: string;
}
export interface MsgSubmitBundleProposalProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal";
    value: Uint8Array;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** storage_id ... */
    storage_id: string;
    /** data_size ... */
    data_size: string;
    /** data_hash ... */
    data_hash: string;
    /** from_index ... */
    from_index: string;
    /** bundle_size ... */
    bundle_size: string;
    /** from_key */
    from_key: string;
    /** to_key ... */
    to_key: string;
    /** bundle_summary ... */
    bundle_summary: string;
}
export interface MsgSubmitBundleProposalAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal";
    value: MsgSubmitBundleProposalAmino;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposalSDKType {
    creator: string;
    staker: string;
    pool_id: bigint;
    storage_id: string;
    data_size: bigint;
    data_hash: string;
    from_index: bigint;
    bundle_size: bigint;
    from_key: string;
    to_key: string;
    bundle_summary: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {
}
export interface MsgSubmitBundleProposalResponseProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponseAmino {
}
export interface MsgSubmitBundleProposalResponseAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSubmitBundleProposalResponse";
    value: MsgSubmitBundleProposalResponseAmino;
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
    poolId: bigint;
    /** storage_id ... */
    storageId: string;
    /** vote ... */
    vote: VoteType;
}
export interface MsgVoteBundleProposalProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposal";
    value: Uint8Array;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    pool_id: string;
    /** storage_id ... */
    storage_id: string;
    /** vote ... */
    vote: VoteType;
}
export interface MsgVoteBundleProposalAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgVoteBundleProposal";
    value: MsgVoteBundleProposalAmino;
}
/** MsgVoteBundleProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteBundleProposalSDKType {
    creator: string;
    staker: string;
    pool_id: bigint;
    storage_id: string;
    vote: VoteType;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponse {
}
export interface MsgVoteBundleProposalResponseProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse";
    value: Uint8Array;
}
/** MsgVoteBundleProposalResponse defines the Msg/VoteBundleProposal response type. */
export interface MsgVoteBundleProposalResponseAmino {
}
export interface MsgVoteBundleProposalResponseAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgVoteBundleProposalResponse";
    value: MsgVoteBundleProposalResponseAmino;
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
    poolId: bigint;
}
export interface MsgClaimUploaderRoleProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRole";
    value: Uint8Array;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** id ... */
    pool_id: string;
}
export interface MsgClaimUploaderRoleAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgClaimUploaderRole";
    value: MsgClaimUploaderRoleAmino;
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRoleSDKType {
    creator: string;
    staker: string;
    pool_id: bigint;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {
}
export interface MsgClaimUploaderRoleResponseProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse";
    value: Uint8Array;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponseAmino {
}
export interface MsgClaimUploaderRoleResponseAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgClaimUploaderRoleResponse";
    value: MsgClaimUploaderRoleResponseAmino;
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
    poolId: bigint;
    /** from_index ... */
    fromIndex: bigint;
}
export interface MsgSkipUploaderRoleProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRole";
    value: Uint8Array;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleAmino {
    /** creator ... */
    creator: string;
    /** staker ... */
    staker: string;
    /** pool_id ... */
    pool_id: string;
    /** from_index ... */
    from_index: string;
}
export interface MsgSkipUploaderRoleAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSkipUploaderRole";
    value: MsgSkipUploaderRoleAmino;
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSkipUploaderRoleSDKType {
    creator: string;
    staker: string;
    pool_id: bigint;
    from_index: bigint;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponse {
}
export interface MsgSkipUploaderRoleResponseProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse";
    value: Uint8Array;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSkipUploaderRoleResponseAmino {
}
export interface MsgSkipUploaderRoleResponseAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSkipUploaderRoleResponse";
    value: MsgSkipUploaderRoleResponseAmino;
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
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /** payload defines the x/bundles parameters to update. */
    payload: string;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/kyve.bundles.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgSubmitBundleProposal: {
    typeUrl: string;
    encode(message: MsgSubmitBundleProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitBundleProposal;
    fromPartial(object: Partial<MsgSubmitBundleProposal>): MsgSubmitBundleProposal;
    fromAmino(object: MsgSubmitBundleProposalAmino): MsgSubmitBundleProposal;
    toAmino(message: MsgSubmitBundleProposal): MsgSubmitBundleProposalAmino;
    fromAminoMsg(object: MsgSubmitBundleProposalAminoMsg): MsgSubmitBundleProposal;
    fromProtoMsg(message: MsgSubmitBundleProposalProtoMsg): MsgSubmitBundleProposal;
    toProto(message: MsgSubmitBundleProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitBundleProposal): MsgSubmitBundleProposalProtoMsg;
};
export declare const MsgSubmitBundleProposalResponse: {
    typeUrl: string;
    encode(_: MsgSubmitBundleProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitBundleProposalResponse;
    fromPartial(_: Partial<MsgSubmitBundleProposalResponse>): MsgSubmitBundleProposalResponse;
    fromAmino(_: MsgSubmitBundleProposalResponseAmino): MsgSubmitBundleProposalResponse;
    toAmino(_: MsgSubmitBundleProposalResponse): MsgSubmitBundleProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitBundleProposalResponseAminoMsg): MsgSubmitBundleProposalResponse;
    fromProtoMsg(message: MsgSubmitBundleProposalResponseProtoMsg): MsgSubmitBundleProposalResponse;
    toProto(message: MsgSubmitBundleProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitBundleProposalResponse): MsgSubmitBundleProposalResponseProtoMsg;
};
export declare const MsgVoteBundleProposal: {
    typeUrl: string;
    encode(message: MsgVoteBundleProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgVoteBundleProposal;
    fromPartial(object: Partial<MsgVoteBundleProposal>): MsgVoteBundleProposal;
    fromAmino(object: MsgVoteBundleProposalAmino): MsgVoteBundleProposal;
    toAmino(message: MsgVoteBundleProposal): MsgVoteBundleProposalAmino;
    fromAminoMsg(object: MsgVoteBundleProposalAminoMsg): MsgVoteBundleProposal;
    fromProtoMsg(message: MsgVoteBundleProposalProtoMsg): MsgVoteBundleProposal;
    toProto(message: MsgVoteBundleProposal): Uint8Array;
    toProtoMsg(message: MsgVoteBundleProposal): MsgVoteBundleProposalProtoMsg;
};
export declare const MsgVoteBundleProposalResponse: {
    typeUrl: string;
    encode(_: MsgVoteBundleProposalResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgVoteBundleProposalResponse;
    fromPartial(_: Partial<MsgVoteBundleProposalResponse>): MsgVoteBundleProposalResponse;
    fromAmino(_: MsgVoteBundleProposalResponseAmino): MsgVoteBundleProposalResponse;
    toAmino(_: MsgVoteBundleProposalResponse): MsgVoteBundleProposalResponseAmino;
    fromAminoMsg(object: MsgVoteBundleProposalResponseAminoMsg): MsgVoteBundleProposalResponse;
    fromProtoMsg(message: MsgVoteBundleProposalResponseProtoMsg): MsgVoteBundleProposalResponse;
    toProto(message: MsgVoteBundleProposalResponse): Uint8Array;
    toProtoMsg(message: MsgVoteBundleProposalResponse): MsgVoteBundleProposalResponseProtoMsg;
};
export declare const MsgClaimUploaderRole: {
    typeUrl: string;
    encode(message: MsgClaimUploaderRole, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimUploaderRole;
    fromPartial(object: Partial<MsgClaimUploaderRole>): MsgClaimUploaderRole;
    fromAmino(object: MsgClaimUploaderRoleAmino): MsgClaimUploaderRole;
    toAmino(message: MsgClaimUploaderRole): MsgClaimUploaderRoleAmino;
    fromAminoMsg(object: MsgClaimUploaderRoleAminoMsg): MsgClaimUploaderRole;
    fromProtoMsg(message: MsgClaimUploaderRoleProtoMsg): MsgClaimUploaderRole;
    toProto(message: MsgClaimUploaderRole): Uint8Array;
    toProtoMsg(message: MsgClaimUploaderRole): MsgClaimUploaderRoleProtoMsg;
};
export declare const MsgClaimUploaderRoleResponse: {
    typeUrl: string;
    encode(_: MsgClaimUploaderRoleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimUploaderRoleResponse;
    fromPartial(_: Partial<MsgClaimUploaderRoleResponse>): MsgClaimUploaderRoleResponse;
    fromAmino(_: MsgClaimUploaderRoleResponseAmino): MsgClaimUploaderRoleResponse;
    toAmino(_: MsgClaimUploaderRoleResponse): MsgClaimUploaderRoleResponseAmino;
    fromAminoMsg(object: MsgClaimUploaderRoleResponseAminoMsg): MsgClaimUploaderRoleResponse;
    fromProtoMsg(message: MsgClaimUploaderRoleResponseProtoMsg): MsgClaimUploaderRoleResponse;
    toProto(message: MsgClaimUploaderRoleResponse): Uint8Array;
    toProtoMsg(message: MsgClaimUploaderRoleResponse): MsgClaimUploaderRoleResponseProtoMsg;
};
export declare const MsgSkipUploaderRole: {
    typeUrl: string;
    encode(message: MsgSkipUploaderRole, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSkipUploaderRole;
    fromPartial(object: Partial<MsgSkipUploaderRole>): MsgSkipUploaderRole;
    fromAmino(object: MsgSkipUploaderRoleAmino): MsgSkipUploaderRole;
    toAmino(message: MsgSkipUploaderRole): MsgSkipUploaderRoleAmino;
    fromAminoMsg(object: MsgSkipUploaderRoleAminoMsg): MsgSkipUploaderRole;
    fromProtoMsg(message: MsgSkipUploaderRoleProtoMsg): MsgSkipUploaderRole;
    toProto(message: MsgSkipUploaderRole): Uint8Array;
    toProtoMsg(message: MsgSkipUploaderRole): MsgSkipUploaderRoleProtoMsg;
};
export declare const MsgSkipUploaderRoleResponse: {
    typeUrl: string;
    encode(_: MsgSkipUploaderRoleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSkipUploaderRoleResponse;
    fromPartial(_: Partial<MsgSkipUploaderRoleResponse>): MsgSkipUploaderRoleResponse;
    fromAmino(_: MsgSkipUploaderRoleResponseAmino): MsgSkipUploaderRoleResponse;
    toAmino(_: MsgSkipUploaderRoleResponse): MsgSkipUploaderRoleResponseAmino;
    fromAminoMsg(object: MsgSkipUploaderRoleResponseAminoMsg): MsgSkipUploaderRoleResponse;
    fromProtoMsg(message: MsgSkipUploaderRoleResponseProtoMsg): MsgSkipUploaderRoleResponse;
    toProto(message: MsgSkipUploaderRoleResponse): Uint8Array;
    toProtoMsg(message: MsgSkipUploaderRoleResponse): MsgSkipUploaderRoleResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
