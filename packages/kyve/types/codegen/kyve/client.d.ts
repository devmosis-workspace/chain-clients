import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const kyveAminoConverters: {
    "/kyve.team.v1beta1.MsgClaimUnlocked": {
        aminoType: string;
        toAmino: ({ authority, id, amount, recipient }: import("./team/v1beta1/tx").MsgClaimUnlocked) => {
            authority: string;
            id: string;
            amount: string;
            recipient: string;
        };
        fromAmino: ({ authority, id, amount, recipient }: {
            authority: string;
            id: string;
            amount: string;
            recipient: string;
        }) => import("./team/v1beta1/tx").MsgClaimUnlocked;
    };
    "/kyve.team.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: ({ authority, id, clawback }: import("./team/v1beta1/tx").MsgClawback) => {
            authority: string;
            id: string;
            clawback: string;
        };
        fromAmino: ({ authority, id, clawback }: {
            authority: string;
            id: string;
            clawback: string;
        }) => import("./team/v1beta1/tx").MsgClawback;
    };
    "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
        aminoType: string;
        toAmino: ({ authority, totalAllocation, commencement }: import("./team/v1beta1/tx").MsgCreateTeamVestingAccount) => {
            authority: string;
            total_allocation: string;
            commencement: string;
        };
        fromAmino: ({ authority, total_allocation, commencement }: {
            authority: string;
            total_allocation: string;
            commencement: string;
        }) => import("./team/v1beta1/tx").MsgCreateTeamVestingAccount;
    };
    "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
        aminoType: string;
        toAmino: ({ authority, amount, recipient }: import("./team/v1beta1/tx").MsgClaimAuthorityRewards) => {
            authority: string;
            amount: string;
            recipient: string;
        };
        fromAmino: ({ authority, amount, recipient }: {
            authority: string;
            amount: string;
            recipient: string;
        }) => import("./team/v1beta1/tx").MsgClaimAuthorityRewards;
    };
    "/kyve.team.v1beta1.MsgClaimAccountRewards": {
        aminoType: string;
        toAmino: ({ authority, id, amount, recipient }: import("./team/v1beta1/tx").MsgClaimAccountRewards) => {
            authority: string;
            id: string;
            amount: string;
            recipient: string;
        };
        fromAmino: ({ authority, id, amount, recipient }: {
            authority: string;
            id: string;
            amount: string;
            recipient: string;
        }) => import("./team/v1beta1/tx").MsgClaimAccountRewards;
    };
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
        aminoType: string;
        toAmino: ({ creator, amount, commission }: import("./stakers/v1beta1/tx").MsgCreateStaker) => {
            creator: string;
            amount: string;
            commission: string;
        };
        fromAmino: ({ creator, amount, commission }: {
            creator: string;
            amount: string;
            commission: string;
        }) => import("./stakers/v1beta1/tx").MsgCreateStaker;
    };
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
        aminoType: string;
        toAmino: ({ creator, moniker, website, identity, securityContact, details }: import("./stakers/v1beta1/tx").MsgUpdateMetadata) => {
            creator: string;
            moniker: string;
            website: string;
            identity: string;
            security_contact: string;
            details: string;
        };
        fromAmino: ({ creator, moniker, website, identity, security_contact, details }: {
            creator: string;
            moniker: string;
            website: string;
            identity: string;
            security_contact: string;
            details: string;
        }) => import("./stakers/v1beta1/tx").MsgUpdateMetadata;
    };
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
        aminoType: string;
        toAmino: ({ creator, commission }: import("./stakers/v1beta1/tx").MsgUpdateCommission) => {
            creator: string;
            commission: string;
        };
        fromAmino: ({ creator, commission }: {
            creator: string;
            commission: string;
        }) => import("./stakers/v1beta1/tx").MsgUpdateCommission;
    };
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
        aminoType: string;
        toAmino: ({ creator, amount }: import("./stakers/v1beta1/tx").MsgClaimCommissionRewards) => {
            creator: string;
            amount: string;
        };
        fromAmino: ({ creator, amount }: {
            creator: string;
            amount: string;
        }) => import("./stakers/v1beta1/tx").MsgClaimCommissionRewards;
    };
    "/kyve.stakers.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: ({ creator, poolId, valaddress, amount }: import("./stakers/v1beta1/tx").MsgJoinPool) => {
            creator: string;
            pool_id: string;
            valaddress: string;
            amount: string;
        };
        fromAmino: ({ creator, pool_id, valaddress, amount }: {
            creator: string;
            pool_id: string;
            valaddress: string;
            amount: string;
        }) => import("./stakers/v1beta1/tx").MsgJoinPool;
    };
    "/kyve.stakers.v1beta1.MsgLeavePool": {
        aminoType: string;
        toAmino: ({ creator, poolId }: import("./stakers/v1beta1/tx").MsgLeavePool) => {
            creator: string;
            pool_id: string;
        };
        fromAmino: ({ creator, pool_id }: {
            creator: string;
            pool_id: string;
        }) => import("./stakers/v1beta1/tx").MsgLeavePool;
    };
    "/kyve.stakers.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: import("./stakers/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            payload: string;
        };
        fromAmino: ({ authority, payload }: {
            authority: string;
            payload: string;
        }) => import("./stakers/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.pool.v1beta1.MsgFundPool": {
        aminoType: string;
        toAmino: ({ creator, id, amount }: import("./pool/v1beta1/tx").MsgFundPool) => {
            creator: string;
            id: string;
            amount: string;
        };
        fromAmino: ({ creator, id, amount }: {
            creator: string;
            id: string;
            amount: string;
        }) => import("./pool/v1beta1/tx").MsgFundPool;
    };
    "/kyve.pool.v1beta1.MsgDefundPool": {
        aminoType: string;
        toAmino: ({ creator, id, amount }: import("./pool/v1beta1/tx").MsgDefundPool) => {
            creator: string;
            id: string;
            amount: string;
        };
        fromAmino: ({ creator, id, amount }: {
            creator: string;
            id: string;
            amount: string;
        }) => import("./pool/v1beta1/tx").MsgDefundPool;
    };
    "/kyve.pool.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ authority, name, runtime, logo, config, startKey, uploadInterval, operatingCost, minDelegation, maxBundleSize, version, binaries, storageProviderId, compressionId }: import("./pool/v1beta1/tx").MsgCreatePool) => {
            authority: string;
            name: string;
            runtime: string;
            logo: string;
            config: string;
            start_key: string;
            upload_interval: string;
            operating_cost: string;
            min_delegation: string;
            max_bundle_size: string;
            version: string;
            binaries: string;
            storage_provider_id: number;
            compression_id: number;
        };
        fromAmino: ({ authority, name, runtime, logo, config, start_key, upload_interval, operating_cost, min_delegation, max_bundle_size, version, binaries, storage_provider_id, compression_id }: {
            authority: string;
            name: string;
            runtime: string;
            logo: string;
            config: string;
            start_key: string;
            upload_interval: string;
            operating_cost: string;
            min_delegation: string;
            max_bundle_size: string;
            version: string;
            binaries: string;
            storage_provider_id: number;
            compression_id: number;
        }) => import("./pool/v1beta1/tx").MsgCreatePool;
    };
    "/kyve.pool.v1beta1.MsgUpdatePool": {
        aminoType: string;
        toAmino: ({ authority, id, payload }: import("./pool/v1beta1/tx").MsgUpdatePool) => {
            authority: string;
            id: string;
            payload: string;
        };
        fromAmino: ({ authority, id, payload }: {
            authority: string;
            id: string;
            payload: string;
        }) => import("./pool/v1beta1/tx").MsgUpdatePool;
    };
    "/kyve.pool.v1beta1.MsgDisablePool": {
        aminoType: string;
        toAmino: ({ authority, id }: import("./pool/v1beta1/tx").MsgDisablePool) => {
            authority: string;
            id: string;
        };
        fromAmino: ({ authority, id }: {
            authority: string;
            id: string;
        }) => import("./pool/v1beta1/tx").MsgDisablePool;
    };
    "/kyve.pool.v1beta1.MsgEnablePool": {
        aminoType: string;
        toAmino: ({ authority, id }: import("./pool/v1beta1/tx").MsgEnablePool) => {
            authority: string;
            id: string;
        };
        fromAmino: ({ authority, id }: {
            authority: string;
            id: string;
        }) => import("./pool/v1beta1/tx").MsgEnablePool;
    };
    "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
        aminoType: string;
        toAmino: ({ authority, runtime, version, scheduledAt, duration, binaries }: import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgrade) => {
            authority: string;
            runtime: string;
            version: string;
            scheduled_at: string;
            duration: string;
            binaries: string;
        };
        fromAmino: ({ authority, runtime, version, scheduled_at, duration, binaries }: {
            authority: string;
            runtime: string;
            version: string;
            scheduled_at: string;
            duration: string;
            binaries: string;
        }) => import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
        aminoType: string;
        toAmino: ({ authority, runtime }: import("./pool/v1beta1/tx").MsgCancelRuntimeUpgrade) => {
            authority: string;
            runtime: string;
        };
        fromAmino: ({ authority, runtime }: {
            authority: string;
            runtime: string;
        }) => import("./pool/v1beta1/tx").MsgCancelRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: import("./pool/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            payload: string;
        };
        fromAmino: ({ authority, payload }: {
            authority: string;
            payload: string;
        }) => import("./pool/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.global.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: import("./global/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            payload: string;
        };
        fromAmino: ({ authority, payload }: {
            authority: string;
            payload: string;
        }) => import("./global/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.delegation.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ creator, staker, amount }: import("./delegation/v1beta1/tx").MsgDelegate) => {
            creator: string;
            staker: string;
            amount: string;
        };
        fromAmino: ({ creator, staker, amount }: {
            creator: string;
            staker: string;
            amount: string;
        }) => import("./delegation/v1beta1/tx").MsgDelegate;
    };
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: ({ creator, staker }: import("./delegation/v1beta1/tx").MsgWithdrawRewards) => {
            creator: string;
            staker: string;
        };
        fromAmino: ({ creator, staker }: {
            creator: string;
            staker: string;
        }) => import("./delegation/v1beta1/tx").MsgWithdrawRewards;
    };
    "/kyve.delegation.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ creator, staker, amount }: import("./delegation/v1beta1/tx").MsgUndelegate) => {
            creator: string;
            staker: string;
            amount: string;
        };
        fromAmino: ({ creator, staker, amount }: {
            creator: string;
            staker: string;
            amount: string;
        }) => import("./delegation/v1beta1/tx").MsgUndelegate;
    };
    "/kyve.delegation.v1beta1.MsgRedelegate": {
        aminoType: string;
        toAmino: ({ creator, fromStaker, toStaker, amount }: import("./delegation/v1beta1/tx").MsgRedelegate) => {
            creator: string;
            from_staker: string;
            to_staker: string;
            amount: string;
        };
        fromAmino: ({ creator, from_staker, to_staker, amount }: {
            creator: string;
            from_staker: string;
            to_staker: string;
            amount: string;
        }) => import("./delegation/v1beta1/tx").MsgRedelegate;
    };
    "/kyve.delegation.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: import("./delegation/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            payload: string;
        };
        fromAmino: ({ authority, payload }: {
            authority: string;
            payload: string;
        }) => import("./delegation/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, storageId, dataSize, dataHash, fromIndex, bundleSize, fromKey, toKey, bundleSummary }: import("./bundles/v1beta1/tx").MsgSubmitBundleProposal) => {
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
        fromAmino: ({ creator, staker, pool_id, storage_id, data_size, data_hash, from_index, bundle_size, from_key, to_key, bundle_summary }: {
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
        }) => import("./bundles/v1beta1/tx").MsgSubmitBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, storageId, vote }: import("./bundles/v1beta1/tx").MsgVoteBundleProposal) => {
            creator: string;
            staker: string;
            pool_id: string;
            storage_id: string;
            vote: number;
        };
        fromAmino: ({ creator, staker, pool_id, storage_id, vote }: {
            creator: string;
            staker: string;
            pool_id: string;
            storage_id: string;
            vote: number;
        }) => import("./bundles/v1beta1/tx").MsgVoteBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId }: import("./bundles/v1beta1/tx").MsgClaimUploaderRole) => {
            creator: string;
            staker: string;
            pool_id: string;
        };
        fromAmino: ({ creator, staker, pool_id }: {
            creator: string;
            staker: string;
            pool_id: string;
        }) => import("./bundles/v1beta1/tx").MsgClaimUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
        aminoType: string;
        toAmino: ({ creator, staker, poolId, fromIndex }: import("./bundles/v1beta1/tx").MsgSkipUploaderRole) => {
            creator: string;
            staker: string;
            pool_id: string;
            from_index: string;
        };
        fromAmino: ({ creator, staker, pool_id, from_index }: {
            creator: string;
            staker: string;
            pool_id: string;
            from_index: string;
        }) => import("./bundles/v1beta1/tx").MsgSkipUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, payload }: import("./bundles/v1beta1/tx").MsgUpdateParams) => {
            authority: string;
            payload: string;
        };
        fromAmino: ({ authority, payload }: {
            authority: string;
            payload: string;
        }) => import("./bundles/v1beta1/tx").MsgUpdateParams;
    };
};
export declare const kyveProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningKyveClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningKyveClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
