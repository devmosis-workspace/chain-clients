import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const kyveAminoConverters: {
    "/kyve.team.v1beta1.MsgClaimUnlocked": {
        aminoType: string;
        toAmino: (message: import("./team/v1beta1/tx").MsgClaimUnlocked) => import("./team/v1beta1/tx").MsgClaimUnlockedAmino;
        fromAmino: (object: import("./team/v1beta1/tx").MsgClaimUnlockedAmino) => import("./team/v1beta1/tx").MsgClaimUnlocked;
    };
    "/kyve.team.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: (message: import("./team/v1beta1/tx").MsgClawback) => import("./team/v1beta1/tx").MsgClawbackAmino;
        fromAmino: (object: import("./team/v1beta1/tx").MsgClawbackAmino) => import("./team/v1beta1/tx").MsgClawback;
    };
    "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
        aminoType: string;
        toAmino: (message: import("./team/v1beta1/tx").MsgCreateTeamVestingAccount) => import("./team/v1beta1/tx").MsgCreateTeamVestingAccountAmino;
        fromAmino: (object: import("./team/v1beta1/tx").MsgCreateTeamVestingAccountAmino) => import("./team/v1beta1/tx").MsgCreateTeamVestingAccount;
    };
    "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
        aminoType: string;
        toAmino: (message: import("./team/v1beta1/tx").MsgClaimAuthorityRewards) => import("./team/v1beta1/tx").MsgClaimAuthorityRewardsAmino;
        fromAmino: (object: import("./team/v1beta1/tx").MsgClaimAuthorityRewardsAmino) => import("./team/v1beta1/tx").MsgClaimAuthorityRewards;
    };
    "/kyve.team.v1beta1.MsgClaimAccountRewards": {
        aminoType: string;
        toAmino: (message: import("./team/v1beta1/tx").MsgClaimAccountRewards) => import("./team/v1beta1/tx").MsgClaimAccountRewardsAmino;
        fromAmino: (object: import("./team/v1beta1/tx").MsgClaimAccountRewardsAmino) => import("./team/v1beta1/tx").MsgClaimAccountRewards;
    };
    "/kyve.stakers.v1beta1.MsgCreateStaker": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgCreateStaker) => import("./stakers/v1beta1/tx").MsgCreateStakerAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgCreateStakerAmino) => import("./stakers/v1beta1/tx").MsgCreateStaker;
    };
    "/kyve.stakers.v1beta1.MsgUpdateMetadata": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgUpdateMetadata) => import("./stakers/v1beta1/tx").MsgUpdateMetadataAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgUpdateMetadataAmino) => import("./stakers/v1beta1/tx").MsgUpdateMetadata;
    };
    "/kyve.stakers.v1beta1.MsgUpdateCommission": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgUpdateCommission) => import("./stakers/v1beta1/tx").MsgUpdateCommissionAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgUpdateCommissionAmino) => import("./stakers/v1beta1/tx").MsgUpdateCommission;
    };
    "/kyve.stakers.v1beta1.MsgClaimCommissionRewards": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgClaimCommissionRewards) => import("./stakers/v1beta1/tx").MsgClaimCommissionRewardsAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgClaimCommissionRewardsAmino) => import("./stakers/v1beta1/tx").MsgClaimCommissionRewards;
    };
    "/kyve.stakers.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgJoinPool) => import("./stakers/v1beta1/tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgJoinPoolAmino) => import("./stakers/v1beta1/tx").MsgJoinPool;
    };
    "/kyve.stakers.v1beta1.MsgLeavePool": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgLeavePool) => import("./stakers/v1beta1/tx").MsgLeavePoolAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgLeavePoolAmino) => import("./stakers/v1beta1/tx").MsgLeavePool;
    };
    "/kyve.stakers.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./stakers/v1beta1/tx").MsgUpdateParams) => import("./stakers/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./stakers/v1beta1/tx").MsgUpdateParamsAmino) => import("./stakers/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.pool.v1beta1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgCreatePool) => import("./pool/v1beta1/tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgCreatePoolAmino) => import("./pool/v1beta1/tx").MsgCreatePool;
    };
    "/kyve.pool.v1beta1.MsgUpdatePool": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgUpdatePool) => import("./pool/v1beta1/tx").MsgUpdatePoolAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgUpdatePoolAmino) => import("./pool/v1beta1/tx").MsgUpdatePool;
    };
    "/kyve.pool.v1beta1.MsgDisablePool": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgDisablePool) => import("./pool/v1beta1/tx").MsgDisablePoolAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgDisablePoolAmino) => import("./pool/v1beta1/tx").MsgDisablePool;
    };
    "/kyve.pool.v1beta1.MsgEnablePool": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgEnablePool) => import("./pool/v1beta1/tx").MsgEnablePoolAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgEnablePoolAmino) => import("./pool/v1beta1/tx").MsgEnablePool;
    };
    "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgrade) => import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgradeAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgradeAmino) => import("./pool/v1beta1/tx").MsgScheduleRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgCancelRuntimeUpgrade) => import("./pool/v1beta1/tx").MsgCancelRuntimeUpgradeAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgCancelRuntimeUpgradeAmino) => import("./pool/v1beta1/tx").MsgCancelRuntimeUpgrade;
    };
    "/kyve.pool.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./pool/v1beta1/tx").MsgUpdateParams) => import("./pool/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./pool/v1beta1/tx").MsgUpdateParamsAmino) => import("./pool/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.global.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./global/v1beta1/tx").MsgUpdateParams) => import("./global/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./global/v1beta1/tx").MsgUpdateParamsAmino) => import("./global/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.funders.v1beta1.MsgCreateFunder": {
        aminoType: string;
        toAmino: (message: import("./funders/v1beta1/tx").MsgCreateFunder) => import("./funders/v1beta1/tx").MsgCreateFunderAmino;
        fromAmino: (object: import("./funders/v1beta1/tx").MsgCreateFunderAmino) => import("./funders/v1beta1/tx").MsgCreateFunder;
    };
    "/kyve.funders.v1beta1.MsgUpdateFunder": {
        aminoType: string;
        toAmino: (message: import("./funders/v1beta1/tx").MsgUpdateFunder) => import("./funders/v1beta1/tx").MsgUpdateFunderAmino;
        fromAmino: (object: import("./funders/v1beta1/tx").MsgUpdateFunderAmino) => import("./funders/v1beta1/tx").MsgUpdateFunder;
    };
    "/kyve.funders.v1beta1.MsgFundPool": {
        aminoType: string;
        toAmino: (message: import("./funders/v1beta1/tx").MsgFundPool) => import("./funders/v1beta1/tx").MsgFundPoolAmino;
        fromAmino: (object: import("./funders/v1beta1/tx").MsgFundPoolAmino) => import("./funders/v1beta1/tx").MsgFundPool;
    };
    "/kyve.funders.v1beta1.MsgDefundPool": {
        aminoType: string;
        toAmino: (message: import("./funders/v1beta1/tx").MsgDefundPool) => import("./funders/v1beta1/tx").MsgDefundPoolAmino;
        fromAmino: (object: import("./funders/v1beta1/tx").MsgDefundPoolAmino) => import("./funders/v1beta1/tx").MsgDefundPool;
    };
    "/kyve.funders.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./funders/v1beta1/tx").MsgUpdateParams) => import("./funders/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./funders/v1beta1/tx").MsgUpdateParamsAmino) => import("./funders/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.delegation.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: (message: import("./delegation/v1beta1/tx").MsgDelegate) => import("./delegation/v1beta1/tx").MsgDelegateAmino;
        fromAmino: (object: import("./delegation/v1beta1/tx").MsgDelegateAmino) => import("./delegation/v1beta1/tx").MsgDelegate;
    };
    "/kyve.delegation.v1beta1.MsgWithdrawRewards": {
        aminoType: string;
        toAmino: (message: import("./delegation/v1beta1/tx").MsgWithdrawRewards) => import("./delegation/v1beta1/tx").MsgWithdrawRewardsAmino;
        fromAmino: (object: import("./delegation/v1beta1/tx").MsgWithdrawRewardsAmino) => import("./delegation/v1beta1/tx").MsgWithdrawRewards;
    };
    "/kyve.delegation.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: (message: import("./delegation/v1beta1/tx").MsgUndelegate) => import("./delegation/v1beta1/tx").MsgUndelegateAmino;
        fromAmino: (object: import("./delegation/v1beta1/tx").MsgUndelegateAmino) => import("./delegation/v1beta1/tx").MsgUndelegate;
    };
    "/kyve.delegation.v1beta1.MsgRedelegate": {
        aminoType: string;
        toAmino: (message: import("./delegation/v1beta1/tx").MsgRedelegate) => import("./delegation/v1beta1/tx").MsgRedelegateAmino;
        fromAmino: (object: import("./delegation/v1beta1/tx").MsgRedelegateAmino) => import("./delegation/v1beta1/tx").MsgRedelegate;
    };
    "/kyve.delegation.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./delegation/v1beta1/tx").MsgUpdateParams) => import("./delegation/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./delegation/v1beta1/tx").MsgUpdateParamsAmino) => import("./delegation/v1beta1/tx").MsgUpdateParams;
    };
    "/kyve.bundles.v1beta1.MsgSubmitBundleProposal": {
        aminoType: string;
        toAmino: (message: import("./bundles/v1beta1/tx").MsgSubmitBundleProposal) => import("./bundles/v1beta1/tx").MsgSubmitBundleProposalAmino;
        fromAmino: (object: import("./bundles/v1beta1/tx").MsgSubmitBundleProposalAmino) => import("./bundles/v1beta1/tx").MsgSubmitBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgVoteBundleProposal": {
        aminoType: string;
        toAmino: (message: import("./bundles/v1beta1/tx").MsgVoteBundleProposal) => import("./bundles/v1beta1/tx").MsgVoteBundleProposalAmino;
        fromAmino: (object: import("./bundles/v1beta1/tx").MsgVoteBundleProposalAmino) => import("./bundles/v1beta1/tx").MsgVoteBundleProposal;
    };
    "/kyve.bundles.v1beta1.MsgClaimUploaderRole": {
        aminoType: string;
        toAmino: (message: import("./bundles/v1beta1/tx").MsgClaimUploaderRole) => import("./bundles/v1beta1/tx").MsgClaimUploaderRoleAmino;
        fromAmino: (object: import("./bundles/v1beta1/tx").MsgClaimUploaderRoleAmino) => import("./bundles/v1beta1/tx").MsgClaimUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgSkipUploaderRole": {
        aminoType: string;
        toAmino: (message: import("./bundles/v1beta1/tx").MsgSkipUploaderRole) => import("./bundles/v1beta1/tx").MsgSkipUploaderRoleAmino;
        fromAmino: (object: import("./bundles/v1beta1/tx").MsgSkipUploaderRoleAmino) => import("./bundles/v1beta1/tx").MsgSkipUploaderRole;
    };
    "/kyve.bundles.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./bundles/v1beta1/tx").MsgUpdateParams) => import("./bundles/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./bundles/v1beta1/tx").MsgUpdateParamsAmino) => import("./bundles/v1beta1/tx").MsgUpdateParams;
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
