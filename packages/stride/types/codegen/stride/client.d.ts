import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const strideAminoConverters: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgLiquidStake) => import("./stakeibc/tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgLiquidStakeAmino) => import("./stakeibc/tx").MsgLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRedeemStake) => import("./stakeibc/tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRedeemStakeAmino) => import("./stakeibc/tx").MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRegisterHostZone) => import("./stakeibc/tx").MsgRegisterHostZoneAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRegisterHostZoneAmino) => import("./stakeibc/tx").MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgClaimUndelegatedTokens) => import("./stakeibc/tx").MsgClaimUndelegatedTokensAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgClaimUndelegatedTokensAmino) => import("./stakeibc/tx").MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRebalanceValidators) => import("./stakeibc/tx").MsgRebalanceValidatorsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRebalanceValidatorsAmino) => import("./stakeibc/tx").MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgAddValidators) => import("./stakeibc/tx").MsgAddValidatorsAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgAddValidatorsAmino) => import("./stakeibc/tx").MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgChangeValidatorWeight) => import("./stakeibc/tx").MsgChangeValidatorWeightAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgChangeValidatorWeightAmino) => import("./stakeibc/tx").MsgChangeValidatorWeight;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgDeleteValidator) => import("./stakeibc/tx").MsgDeleteValidatorAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgDeleteValidatorAmino) => import("./stakeibc/tx").MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgRestoreInterchainAccount) => import("./stakeibc/tx").MsgRestoreInterchainAccountAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgRestoreInterchainAccountAmino) => import("./stakeibc/tx").MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRateAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgUpdateValidatorSharesExchRateAmino) => import("./stakeibc/tx").MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: (message: import("./stakeibc/tx").MsgClearBalance) => import("./stakeibc/tx").MsgClearBalanceAmino;
        fromAmino: (object: import("./stakeibc/tx").MsgClearBalanceAmino) => import("./stakeibc/tx").MsgClearBalance;
    };
    "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: import("./interchainquery/v1/messages").MsgSubmitQueryResponse) => import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./interchainquery/v1/messages").MsgSubmitQueryResponseAmino) => import("./interchainquery/v1/messages").MsgSubmitQueryResponse;
    };
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgSetAirdropAllocations) => import("./claim/tx").MsgSetAirdropAllocationsAmino;
        fromAmino: (object: import("./claim/tx").MsgSetAirdropAllocationsAmino) => import("./claim/tx").MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgClaimFreeAmount) => import("./claim/tx").MsgClaimFreeAmountAmino;
        fromAmino: (object: import("./claim/tx").MsgClaimFreeAmountAmino) => import("./claim/tx").MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgCreateAirdrop) => import("./claim/tx").MsgCreateAirdropAmino;
        fromAmino: (object: import("./claim/tx").MsgCreateAirdropAmino) => import("./claim/tx").MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: (message: import("./claim/tx").MsgDeleteAirdrop) => import("./claim/tx").MsgDeleteAirdropAmino;
        fromAmino: (object: import("./claim/tx").MsgDeleteAirdropAmino) => import("./claim/tx").MsgDeleteAirdrop;
    };
};
export declare const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningStrideClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningStrideClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
