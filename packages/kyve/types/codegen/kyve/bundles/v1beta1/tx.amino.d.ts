import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
export interface MsgSubmitBundleProposalAminoType extends AminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal";
    value: {
        creator: string;
        staker: string;
        pool_id: string;
        storage_id: string;
        data_size: string;
        data_hash: string;
        from_index: string;
        bundle_size: string;
        from_key: string;
        to_key: string;
        bundle_summary: string;
    };
}
export interface MsgVoteBundleProposalAminoType extends AminoMsg {
    type: "/kyve.bundles.v1beta1.MsgVoteBundleProposal";
    value: {
        creator: string;
        staker: string;
        pool_id: string;
        storage_id: string;
        vote: number;
    };
}
export interface MsgClaimUploaderRoleAminoType extends AminoMsg {
    type: "/kyve.bundles.v1beta1.MsgClaimUploaderRole";
    value: {
        creator: string;
        staker: string;
        pool_id: string;
    };
}
export interface MsgSkipUploaderRoleAminoType extends AminoMsg {
    type: "/kyve.bundles.v1beta1.MsgSkipUploaderRole";
    value: {
        creator: string;
        staker: string;
        pool_id: string;
        from_index: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "/kyve.bundles.v1beta1.MsgUpdateParams";
    value: {
        authority: string;
        payload: string;
    };
}
export declare const AminoConverter: {
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, storageId, dataSize, dataHash, fromIndex, bundleSize, fromKey, toKey, bundleSummary }: MsgSubmitBundleProposal) => MsgSubmitBundleProposalAminoType["value"];
        fromAmino: ({ creator, staker, pool_id, storage_id, data_size, data_hash, from_index, bundle_size, from_key, to_key, bundle_summary }: MsgSubmitBundleProposalAminoType["value"]) => MsgSubmitBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, storageId, vote }: MsgVoteBundleProposal) => MsgVoteBundleProposalAminoType["value"];
        fromAmino: ({ creator, staker, pool_id, storage_id, vote }: MsgVoteBundleProposalAminoType["value"]) => MsgVoteBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId }: MsgClaimUploaderRole) => MsgClaimUploaderRoleAminoType["value"];
        fromAmino: ({ creator, staker, pool_id }: MsgClaimUploaderRoleAminoType["value"]) => MsgClaimUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, fromIndex }: MsgSkipUploaderRole) => MsgSkipUploaderRoleAminoType["value"];
        fromAmino: ({ creator, staker, pool_id, from_index }: MsgSkipUploaderRoleAminoType["value"]) => MsgSkipUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, payload }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
