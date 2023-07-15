import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { voteTypeFromJSON, MsgSubmitBundleProposal, MsgVoteBundleProposal, MsgClaimUploaderRole, MsgSkipUploaderRole, MsgUpdateParams } from "./tx";
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
export const AminoConverter = {
  "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
    aminoType: "/kyve.bundles.v1beta1.MsgSubmitBundleProposal",
    toAmino: ({
      creator,
      staker,
      poolId,
      storageId,
      dataSize,
      dataHash,
      fromIndex,
      bundleSize,
      fromKey,
      toKey,
      bundleSummary
    }: MsgSubmitBundleProposal): MsgSubmitBundleProposalAminoType["value"] => {
      return {
        creator,
        staker,
        pool_id: poolId.toString(),
        storage_id: storageId,
        data_size: dataSize.toString(),
        data_hash: dataHash,
        from_index: fromIndex.toString(),
        bundle_size: bundleSize.toString(),
        from_key: fromKey,
        to_key: toKey,
        bundle_summary: bundleSummary
      };
    },
    fromAmino: ({
      creator,
      staker,
      pool_id,
      storage_id,
      data_size,
      data_hash,
      from_index,
      bundle_size,
      from_key,
      to_key,
      bundle_summary
    }: MsgSubmitBundleProposalAminoType["value"]): MsgSubmitBundleProposal => {
      return {
        creator,
        staker,
        poolId: Long.fromString(pool_id),
        storageId: storage_id,
        dataSize: Long.fromString(data_size),
        dataHash: data_hash,
        fromIndex: Long.fromString(from_index),
        bundleSize: Long.fromString(bundle_size),
        fromKey: from_key,
        toKey: to_key,
        bundleSummary: bundle_summary
      };
    }
  },
  "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
    aminoType: "/kyve.bundles.v1beta1.MsgVoteBundleProposal",
    toAmino: ({
      creator,
      staker,
      poolId,
      storageId,
      vote
    }: MsgVoteBundleProposal): MsgVoteBundleProposalAminoType["value"] => {
      return {
        creator,
        staker,
        pool_id: poolId.toString(),
        storage_id: storageId,
        vote
      };
    },
    fromAmino: ({
      creator,
      staker,
      pool_id,
      storage_id,
      vote
    }: MsgVoteBundleProposalAminoType["value"]): MsgVoteBundleProposal => {
      return {
        creator,
        staker,
        poolId: Long.fromString(pool_id),
        storageId: storage_id,
        vote: voteTypeFromJSON(vote)
      };
    }
  },
  "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
    aminoType: "/kyve.bundles.v1beta1.MsgClaimUploaderRole",
    toAmino: ({
      creator,
      staker,
      poolId
    }: MsgClaimUploaderRole): MsgClaimUploaderRoleAminoType["value"] => {
      return {
        creator,
        staker,
        pool_id: poolId.toString()
      };
    },
    fromAmino: ({
      creator,
      staker,
      pool_id
    }: MsgClaimUploaderRoleAminoType["value"]): MsgClaimUploaderRole => {
      return {
        creator,
        staker,
        poolId: Long.fromString(pool_id)
      };
    }
  },
  "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
    aminoType: "/kyve.bundles.v1beta1.MsgSkipUploaderRole",
    toAmino: ({
      creator,
      staker,
      poolId,
      fromIndex
    }: MsgSkipUploaderRole): MsgSkipUploaderRoleAminoType["value"] => {
      return {
        creator,
        staker,
        pool_id: poolId.toString(),
        from_index: fromIndex.toString()
      };
    },
    fromAmino: ({
      creator,
      staker,
      pool_id,
      from_index
    }: MsgSkipUploaderRoleAminoType["value"]): MsgSkipUploaderRole => {
      return {
        creator,
        staker,
        poolId: Long.fromString(pool_id),
        fromIndex: Long.fromString(from_index)
      };
    }
  },
  "/kyve.bundles.v1beta1.MsgUpdateParams": {
    aminoType: "/kyve.bundles.v1beta1.MsgUpdateParams",
    toAmino: ({
      authority,
      payload
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        payload
      };
    },
    fromAmino: ({
      authority,
      payload
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        payload
      };
    }
  }
};