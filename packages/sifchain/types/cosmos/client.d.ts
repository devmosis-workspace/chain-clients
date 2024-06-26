import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmosAminoConverters: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: import("./vesting/v1beta1/tx").MsgCreateVestingAccount) => import("./vesting/v1beta1/tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./vesting/v1beta1/tx").MsgCreateVestingAccountAmino) => import("./vesting/v1beta1/tx").MsgCreateVestingAccount;
    };
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
        aminoType: string;
        toAmino: (message: import("./staking/v1beta1/tx").MsgCreateValidator) => import("./staking/v1beta1/tx").MsgCreateValidatorAmino;
        fromAmino: (object: import("./staking/v1beta1/tx").MsgCreateValidatorAmino) => import("./staking/v1beta1/tx").MsgCreateValidator;
    };
    "/cosmos.staking.v1beta1.MsgEditValidator": {
        aminoType: string;
        toAmino: (message: import("./staking/v1beta1/tx").MsgEditValidator) => import("./staking/v1beta1/tx").MsgEditValidatorAmino;
        fromAmino: (object: import("./staking/v1beta1/tx").MsgEditValidatorAmino) => import("./staking/v1beta1/tx").MsgEditValidator;
    };
    "/cosmos.staking.v1beta1.MsgDelegate": {
        aminoType: string;
        toAmino: (message: import("./staking/v1beta1/tx").MsgDelegate) => import("./staking/v1beta1/tx").MsgDelegateAmino;
        fromAmino: (object: import("./staking/v1beta1/tx").MsgDelegateAmino) => import("./staking/v1beta1/tx").MsgDelegate;
    };
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
        aminoType: string;
        toAmino: (message: import("./staking/v1beta1/tx").MsgBeginRedelegate) => import("./staking/v1beta1/tx").MsgBeginRedelegateAmino;
        fromAmino: (object: import("./staking/v1beta1/tx").MsgBeginRedelegateAmino) => import("./staking/v1beta1/tx").MsgBeginRedelegate;
    };
    "/cosmos.staking.v1beta1.MsgUndelegate": {
        aminoType: string;
        toAmino: (message: import("./staking/v1beta1/tx").MsgUndelegate) => import("./staking/v1beta1/tx").MsgUndelegateAmino;
        fromAmino: (object: import("./staking/v1beta1/tx").MsgUndelegateAmino) => import("./staking/v1beta1/tx").MsgUndelegate;
    };
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: (message: import("./slashing/v1beta1/tx").MsgUnjail) => import("./slashing/v1beta1/tx").MsgUnjailAmino;
        fromAmino: (object: import("./slashing/v1beta1/tx").MsgUnjailAmino) => import("./slashing/v1beta1/tx").MsgUnjail;
    };
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: (message: import("./gov/v1beta1/tx").MsgSubmitProposal) => import("./gov/v1beta1/tx").MsgSubmitProposalAmino;
        fromAmino: (object: import("./gov/v1beta1/tx").MsgSubmitProposalAmino) => import("./gov/v1beta1/tx").MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: (message: import("./gov/v1beta1/tx").MsgVote) => import("./gov/v1beta1/tx").MsgVoteAmino;
        fromAmino: (object: import("./gov/v1beta1/tx").MsgVoteAmino) => import("./gov/v1beta1/tx").MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: (message: import("./gov/v1beta1/tx").MsgVoteWeighted) => import("./gov/v1beta1/tx").MsgVoteWeightedAmino;
        fromAmino: (object: import("./gov/v1beta1/tx").MsgVoteWeightedAmino) => import("./gov/v1beta1/tx").MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./gov/v1beta1/tx").MsgDeposit) => import("./gov/v1beta1/tx").MsgDepositAmino;
        fromAmino: (object: import("./gov/v1beta1/tx").MsgDepositAmino) => import("./gov/v1beta1/tx").MsgDeposit;
    };
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: string;
        toAmino: (message: import("./feegrant/v1beta1/tx").MsgGrantAllowance) => import("./feegrant/v1beta1/tx").MsgGrantAllowanceAmino;
        fromAmino: (object: import("./feegrant/v1beta1/tx").MsgGrantAllowanceAmino) => import("./feegrant/v1beta1/tx").MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: string;
        toAmino: (message: import("./feegrant/v1beta1/tx").MsgRevokeAllowance) => import("./feegrant/v1beta1/tx").MsgRevokeAllowanceAmino;
        fromAmino: (object: import("./feegrant/v1beta1/tx").MsgRevokeAllowanceAmino) => import("./feegrant/v1beta1/tx").MsgRevokeAllowance;
    };
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: string;
        toAmino: (message: import("./evidence/v1beta1/tx").MsgSubmitEvidence) => import("./evidence/v1beta1/tx").MsgSubmitEvidenceAmino;
        fromAmino: (object: import("./evidence/v1beta1/tx").MsgSubmitEvidenceAmino) => import("./evidence/v1beta1/tx").MsgSubmitEvidence;
    };
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: string;
        toAmino: (message: import("./distribution/v1beta1/tx").MsgSetWithdrawAddress) => import("./distribution/v1beta1/tx").MsgSetWithdrawAddressAmino;
        fromAmino: (object: import("./distribution/v1beta1/tx").MsgSetWithdrawAddressAmino) => import("./distribution/v1beta1/tx").MsgSetWithdrawAddress;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: string;
        toAmino: (message: import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward) => import("./distribution/v1beta1/tx").MsgWithdrawDelegatorRewardAmino;
        fromAmino: (object: import("./distribution/v1beta1/tx").MsgWithdrawDelegatorRewardAmino) => import("./distribution/v1beta1/tx").MsgWithdrawDelegatorReward;
    };
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: string;
        toAmino: (message: import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission) => import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommissionAmino;
        fromAmino: (object: import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommissionAmino) => import("./distribution/v1beta1/tx").MsgWithdrawValidatorCommission;
    };
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: (message: import("./distribution/v1beta1/tx").MsgFundCommunityPool) => import("./distribution/v1beta1/tx").MsgFundCommunityPoolAmino;
        fromAmino: (object: import("./distribution/v1beta1/tx").MsgFundCommunityPoolAmino) => import("./distribution/v1beta1/tx").MsgFundCommunityPool;
    };
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: (message: import("./crisis/v1beta1/tx").MsgVerifyInvariant) => import("./crisis/v1beta1/tx").MsgVerifyInvariantAmino;
        fromAmino: (object: import("./crisis/v1beta1/tx").MsgVerifyInvariantAmino) => import("./crisis/v1beta1/tx").MsgVerifyInvariant;
    };
    "/cosmos.bank.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: (message: import("./bank/v1beta1/tx").MsgSend) => import("./bank/v1beta1/tx").MsgSendAmino;
        fromAmino: (object: import("./bank/v1beta1/tx").MsgSendAmino) => import("./bank/v1beta1/tx").MsgSend;
    };
    "/cosmos.bank.v1beta1.MsgMultiSend": {
        aminoType: string;
        toAmino: (message: import("./bank/v1beta1/tx").MsgMultiSend) => import("./bank/v1beta1/tx").MsgMultiSendAmino;
        fromAmino: (object: import("./bank/v1beta1/tx").MsgMultiSendAmino) => import("./bank/v1beta1/tx").MsgMultiSend;
    };
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: string;
        toAmino: (message: import("./authz/v1beta1/tx").MsgGrant) => import("./authz/v1beta1/tx").MsgGrantAmino;
        fromAmino: (object: import("./authz/v1beta1/tx").MsgGrantAmino) => import("./authz/v1beta1/tx").MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: (message: import("./authz/v1beta1/tx").MsgExec) => import("./authz/v1beta1/tx").MsgExecAmino;
        fromAmino: (object: import("./authz/v1beta1/tx").MsgExecAmino) => import("./authz/v1beta1/tx").MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: string;
        toAmino: (message: import("./authz/v1beta1/tx").MsgRevoke) => import("./authz/v1beta1/tx").MsgRevokeAmino;
        fromAmino: (object: import("./authz/v1beta1/tx").MsgRevokeAmino) => import("./authz/v1beta1/tx").MsgRevoke;
    };
};
export declare const cosmosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmosClientOptions: () => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmosClient: ({ rpcEndpoint, signer }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
}) => Promise<any>;
