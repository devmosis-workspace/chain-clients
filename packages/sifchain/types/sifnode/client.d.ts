import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const sifnodeAminoConverters: {
    "/sifnode.tokenregistry.v1.MsgRegister": {
        aminoType: string;
        toAmino: (message: import("./tokenregistry/v1/tx").MsgRegister) => import("./tokenregistry/v1/tx").MsgRegisterAmino;
        fromAmino: (object: import("./tokenregistry/v1/tx").MsgRegisterAmino) => import("./tokenregistry/v1/tx").MsgRegister;
    };
    "/sifnode.tokenregistry.v1.MsgDeregister": {
        aminoType: string;
        toAmino: (message: import("./tokenregistry/v1/tx").MsgDeregister) => import("./tokenregistry/v1/tx").MsgDeregisterAmino;
        fromAmino: (object: import("./tokenregistry/v1/tx").MsgDeregisterAmino) => import("./tokenregistry/v1/tx").MsgDeregister;
    };
    "/sifnode.tokenregistry.v1.MsgSetRegistry": {
        aminoType: string;
        toAmino: (message: import("./tokenregistry/v1/tx").MsgSetRegistry) => import("./tokenregistry/v1/tx").MsgSetRegistryAmino;
        fromAmino: (object: import("./tokenregistry/v1/tx").MsgSetRegistryAmino) => import("./tokenregistry/v1/tx").MsgSetRegistry;
    };
    "/sifnode.margin.v1.MsgOpen": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgOpen) => import("./margin/v1/tx").MsgOpenAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgOpenAmino) => import("./margin/v1/tx").MsgOpen;
    };
    "/sifnode.margin.v1.MsgClose": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgClose) => import("./margin/v1/tx").MsgCloseAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgCloseAmino) => import("./margin/v1/tx").MsgClose;
    };
    "/sifnode.margin.v1.MsgForceClose": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgForceClose) => import("./margin/v1/tx").MsgForceCloseAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgForceCloseAmino) => import("./margin/v1/tx").MsgForceClose;
    };
    "/sifnode.margin.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgUpdateParams) => import("./margin/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgUpdateParamsAmino) => import("./margin/v1/tx").MsgUpdateParams;
    };
    "/sifnode.margin.v1.MsgUpdatePools": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgUpdatePools) => import("./margin/v1/tx").MsgUpdatePoolsAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgUpdatePoolsAmino) => import("./margin/v1/tx").MsgUpdatePools;
    };
    "/sifnode.margin.v1.MsgUpdateRowanCollateral": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgUpdateRowanCollateral) => import("./margin/v1/tx").MsgUpdateRowanCollateralAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgUpdateRowanCollateralAmino) => import("./margin/v1/tx").MsgUpdateRowanCollateral;
    };
    "/sifnode.margin.v1.MsgWhitelist": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgWhitelist) => import("./margin/v1/tx").MsgWhitelistAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgWhitelistAmino) => import("./margin/v1/tx").MsgWhitelist;
    };
    "/sifnode.margin.v1.MsgDewhitelist": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgDewhitelist) => import("./margin/v1/tx").MsgDewhitelistAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgDewhitelistAmino) => import("./margin/v1/tx").MsgDewhitelist;
    };
    "/sifnode.margin.v1.MsgAdminClose": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgAdminClose) => import("./margin/v1/tx").MsgAdminCloseAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgAdminCloseAmino) => import("./margin/v1/tx").MsgAdminClose;
    };
    "/sifnode.margin.v1.MsgAdminCloseAll": {
        aminoType: string;
        toAmino: (message: import("./margin/v1/tx").MsgAdminCloseAll) => import("./margin/v1/tx").MsgAdminCloseAllAmino;
        fromAmino: (object: import("./margin/v1/tx").MsgAdminCloseAllAmino) => import("./margin/v1/tx").MsgAdminCloseAll;
    };
    "/sifnode.ethbridge.v1.MsgLock": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgLock) => import("./ethbridge/v1/tx").MsgLockAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgLockAmino) => import("./ethbridge/v1/tx").MsgLock;
    };
    "/sifnode.ethbridge.v1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgBurn) => import("./ethbridge/v1/tx").MsgBurnAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgBurnAmino) => import("./ethbridge/v1/tx").MsgBurn;
    };
    "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgCreateEthBridgeClaim) => import("./ethbridge/v1/tx").MsgCreateEthBridgeClaimAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgCreateEthBridgeClaimAmino) => import("./ethbridge/v1/tx").MsgCreateEthBridgeClaim;
    };
    "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgUpdateWhiteListValidator) => import("./ethbridge/v1/tx").MsgUpdateWhiteListValidatorAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgUpdateWhiteListValidatorAmino) => import("./ethbridge/v1/tx").MsgUpdateWhiteListValidator;
    };
    "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgUpdateCethReceiverAccount) => import("./ethbridge/v1/tx").MsgUpdateCethReceiverAccountAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgUpdateCethReceiverAccountAmino) => import("./ethbridge/v1/tx").MsgUpdateCethReceiverAccount;
    };
    "/sifnode.ethbridge.v1.MsgRescueCeth": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgRescueCeth) => import("./ethbridge/v1/tx").MsgRescueCethAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgRescueCethAmino) => import("./ethbridge/v1/tx").MsgRescueCeth;
    };
    "/sifnode.ethbridge.v1.MsgSetBlacklist": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgSetBlacklist) => import("./ethbridge/v1/tx").MsgSetBlacklistAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgSetBlacklistAmino) => import("./ethbridge/v1/tx").MsgSetBlacklist;
    };
    "/sifnode.ethbridge.v1.MsgPause": {
        aminoType: string;
        toAmino: (message: import("./ethbridge/v1/tx").MsgPause) => import("./ethbridge/v1/tx").MsgPauseAmino;
        fromAmino: (object: import("./ethbridge/v1/tx").MsgPauseAmino) => import("./ethbridge/v1/tx").MsgPause;
    };
    "/sifnode.dispensation.v1.MsgCreateDistribution": {
        aminoType: string;
        toAmino: (message: import("./dispensation/v1/tx").MsgCreateDistribution) => import("./dispensation/v1/tx").MsgCreateDistributionAmino;
        fromAmino: (object: import("./dispensation/v1/tx").MsgCreateDistributionAmino) => import("./dispensation/v1/tx").MsgCreateDistribution;
    };
    "/sifnode.dispensation.v1.MsgCreateUserClaim": {
        aminoType: string;
        toAmino: (message: import("./dispensation/v1/tx").MsgCreateUserClaim) => import("./dispensation/v1/tx").MsgCreateUserClaimAmino;
        fromAmino: (object: import("./dispensation/v1/tx").MsgCreateUserClaimAmino) => import("./dispensation/v1/tx").MsgCreateUserClaim;
    };
    "/sifnode.dispensation.v1.MsgRunDistribution": {
        aminoType: string;
        toAmino: (message: import("./dispensation/v1/tx").MsgRunDistribution) => import("./dispensation/v1/tx").MsgRunDistributionAmino;
        fromAmino: (object: import("./dispensation/v1/tx").MsgRunDistributionAmino) => import("./dispensation/v1/tx").MsgRunDistribution;
    };
    "/sifnode.clp.v1.MsgRemoveLiquidity": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgRemoveLiquidity) => import("./clp/v1/tx").MsgRemoveLiquidityAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgRemoveLiquidityAmino) => import("./clp/v1/tx").MsgRemoveLiquidity;
    };
    "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgRemoveLiquidityUnits) => import("./clp/v1/tx").MsgRemoveLiquidityUnitsAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgRemoveLiquidityUnitsAmino) => import("./clp/v1/tx").MsgRemoveLiquidityUnits;
    };
    "/sifnode.clp.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgCreatePool) => import("./clp/v1/tx").MsgCreatePoolAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgCreatePoolAmino) => import("./clp/v1/tx").MsgCreatePool;
    };
    "/sifnode.clp.v1.MsgAddLiquidity": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgAddLiquidity) => import("./clp/v1/tx").MsgAddLiquidityAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgAddLiquidityAmino) => import("./clp/v1/tx").MsgAddLiquidity;
    };
    "/sifnode.clp.v1.MsgSwap": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgSwap) => import("./clp/v1/tx").MsgSwapAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgSwapAmino) => import("./clp/v1/tx").MsgSwap;
    };
    "/sifnode.clp.v1.MsgDecommissionPool": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgDecommissionPool) => import("./clp/v1/tx").MsgDecommissionPoolAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgDecommissionPoolAmino) => import("./clp/v1/tx").MsgDecommissionPool;
    };
    "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUnlockLiquidityRequest) => import("./clp/v1/tx").MsgUnlockLiquidityRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUnlockLiquidityRequestAmino) => import("./clp/v1/tx").MsgUnlockLiquidityRequest;
    };
    "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUpdateRewardsParamsRequest) => import("./clp/v1/tx").MsgUpdateRewardsParamsRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUpdateRewardsParamsRequestAmino) => import("./clp/v1/tx").MsgUpdateRewardsParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgAddRewardPeriodRequest) => import("./clp/v1/tx").MsgAddRewardPeriodRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgAddRewardPeriodRequestAmino) => import("./clp/v1/tx").MsgAddRewardPeriodRequest;
    };
    "/sifnode.clp.v1.MsgModifyPmtpRates": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgModifyPmtpRates) => import("./clp/v1/tx").MsgModifyPmtpRatesAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgModifyPmtpRatesAmino) => import("./clp/v1/tx").MsgModifyPmtpRates;
    };
    "/sifnode.clp.v1.MsgUpdatePmtpParams": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUpdatePmtpParams) => import("./clp/v1/tx").MsgUpdatePmtpParamsAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUpdatePmtpParamsAmino) => import("./clp/v1/tx").MsgUpdatePmtpParams;
    };
    "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUpdateStakingRewardParams) => import("./clp/v1/tx").MsgUpdateStakingRewardParamsAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUpdateStakingRewardParamsAmino) => import("./clp/v1/tx").MsgUpdateStakingRewardParams;
    };
    "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgSetSymmetryThreshold) => import("./clp/v1/tx").MsgSetSymmetryThresholdAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgSetSymmetryThresholdAmino) => import("./clp/v1/tx").MsgSetSymmetryThreshold;
    };
    "/sifnode.clp.v1.MsgCancelUnlock": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgCancelUnlock) => import("./clp/v1/tx").MsgCancelUnlockAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgCancelUnlockAmino) => import("./clp/v1/tx").MsgCancelUnlock;
    };
    "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUpdateLiquidityProtectionParams) => import("./clp/v1/tx").MsgUpdateLiquidityProtectionParamsAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUpdateLiquidityProtectionParamsAmino) => import("./clp/v1/tx").MsgUpdateLiquidityProtectionParams;
    };
    "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgModifyLiquidityProtectionRates) => import("./clp/v1/tx").MsgModifyLiquidityProtectionRatesAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgModifyLiquidityProtectionRatesAmino) => import("./clp/v1/tx").MsgModifyLiquidityProtectionRates;
    };
    "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgAddProviderDistributionPeriodRequest) => import("./clp/v1/tx").MsgAddProviderDistributionPeriodRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgAddProviderDistributionPeriodRequestAmino) => import("./clp/v1/tx").MsgAddProviderDistributionPeriodRequest;
    };
    "/sifnode.clp.v1.MsgUpdateSwapFeeParamsRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgUpdateSwapFeeParamsRequest) => import("./clp/v1/tx").MsgUpdateSwapFeeParamsRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgUpdateSwapFeeParamsRequestAmino) => import("./clp/v1/tx").MsgUpdateSwapFeeParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddLiquidityToRewardsBucketRequest": {
        aminoType: string;
        toAmino: (message: import("./clp/v1/tx").MsgAddLiquidityToRewardsBucketRequest) => import("./clp/v1/tx").MsgAddLiquidityToRewardsBucketRequestAmino;
        fromAmino: (object: import("./clp/v1/tx").MsgAddLiquidityToRewardsBucketRequestAmino) => import("./clp/v1/tx").MsgAddLiquidityToRewardsBucketRequest;
    };
    "/sifnode.admin.v1.MsgAddAccount": {
        aminoType: string;
        toAmino: (message: import("./admin/v1/tx").MsgAddAccount) => import("./admin/v1/tx").MsgAddAccountAmino;
        fromAmino: (object: import("./admin/v1/tx").MsgAddAccountAmino) => import("./admin/v1/tx").MsgAddAccount;
    };
    "/sifnode.admin.v1.MsgRemoveAccount": {
        aminoType: string;
        toAmino: (message: import("./admin/v1/tx").MsgRemoveAccount) => import("./admin/v1/tx").MsgRemoveAccountAmino;
        fromAmino: (object: import("./admin/v1/tx").MsgRemoveAccountAmino) => import("./admin/v1/tx").MsgRemoveAccount;
    };
    "/sifnode.admin.v1.MsgSetParams": {
        aminoType: string;
        toAmino: (message: import("./admin/v1/tx").MsgSetParams) => import("./admin/v1/tx").MsgSetParamsAmino;
        fromAmino: (object: import("./admin/v1/tx").MsgSetParamsAmino) => import("./admin/v1/tx").MsgSetParams;
    };
};
export declare const sifnodeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSifnodeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSifnodeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
