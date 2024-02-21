import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgSetValidatorSetPreference) => import("./valsetpref/v1beta1/tx").MsgSetValidatorSetPreferenceAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgSetValidatorSetPreferenceAmino) => import("./valsetpref/v1beta1/tx").MsgSetValidatorSetPreference;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgDelegateToValidatorSet) => import("./valsetpref/v1beta1/tx").MsgDelegateToValidatorSetAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgDelegateToValidatorSetAmino) => import("./valsetpref/v1beta1/tx").MsgDelegateToValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgUndelegateFromValidatorSet) => import("./valsetpref/v1beta1/tx").MsgUndelegateFromValidatorSetAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgUndelegateFromValidatorSetAmino) => import("./valsetpref/v1beta1/tx").MsgUndelegateFromValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgUndelegateFromRebalancedValidatorSet) => import("./valsetpref/v1beta1/tx").MsgUndelegateFromRebalancedValidatorSetAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgUndelegateFromRebalancedValidatorSetAmino) => import("./valsetpref/v1beta1/tx").MsgUndelegateFromRebalancedValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgRedelegateValidatorSet) => import("./valsetpref/v1beta1/tx").MsgRedelegateValidatorSetAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgRedelegateValidatorSetAmino) => import("./valsetpref/v1beta1/tx").MsgRedelegateValidatorSet;
    };
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgWithdrawDelegationRewards) => import("./valsetpref/v1beta1/tx").MsgWithdrawDelegationRewardsAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgWithdrawDelegationRewardsAmino) => import("./valsetpref/v1beta1/tx").MsgWithdrawDelegationRewards;
    };
    "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens": {
        aminoType: string;
        toAmino: (message: import("./valsetpref/v1beta1/tx").MsgDelegateBondedTokens) => import("./valsetpref/v1beta1/tx").MsgDelegateBondedTokensAmino;
        fromAmino: (object: import("./valsetpref/v1beta1/tx").MsgDelegateBondedTokensAmino) => import("./valsetpref/v1beta1/tx").MsgDelegateBondedTokens;
    };
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgMint) => import("./tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgMintAmino) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgBurn) => import("./tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgBurnAmino) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHook) => import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHookAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHookAmino) => import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHook;
    };
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgForceTransfer) => import("./tokenfactory/v1beta1/tx").MsgForceTransferAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgForceTransferAmino) => import("./tokenfactory/v1beta1/tx").MsgForceTransfer;
    };
    "/osmosis.superfluid.MsgSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidDelegate) => import("./superfluid/tx").MsgSuperfluidDelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidDelegateAmino) => import("./superfluid/tx").MsgSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidUndelegate) => import("./superfluid/tx").MsgSuperfluidUndelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidUndelegateAmino) => import("./superfluid/tx").MsgSuperfluidUndelegate;
    };
    "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidUnbondLock) => import("./superfluid/tx").MsgSuperfluidUnbondLockAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidUnbondLockAmino) => import("./superfluid/tx").MsgSuperfluidUnbondLock;
    };
    "/osmosis.superfluid.MsgSuperfluidUndelegateAndUnbondLock": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgSuperfluidUndelegateAndUnbondLock) => import("./superfluid/tx").MsgSuperfluidUndelegateAndUnbondLockAmino;
        fromAmino: (object: import("./superfluid/tx").MsgSuperfluidUndelegateAndUnbondLockAmino) => import("./superfluid/tx").MsgSuperfluidUndelegateAndUnbondLock;
    };
    "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgLockAndSuperfluidDelegate) => import("./superfluid/tx").MsgLockAndSuperfluidDelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgLockAndSuperfluidDelegateAmino) => import("./superfluid/tx").MsgLockAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgCreateFullRangePositionAndSuperfluidDelegate": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgCreateFullRangePositionAndSuperfluidDelegate) => import("./superfluid/tx").MsgCreateFullRangePositionAndSuperfluidDelegateAmino;
        fromAmino: (object: import("./superfluid/tx").MsgCreateFullRangePositionAndSuperfluidDelegateAmino) => import("./superfluid/tx").MsgCreateFullRangePositionAndSuperfluidDelegate;
    };
    "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgUnPoolWhitelistedPool) => import("./superfluid/tx").MsgUnPoolWhitelistedPoolAmino;
        fromAmino: (object: import("./superfluid/tx").MsgUnPoolWhitelistedPoolAmino) => import("./superfluid/tx").MsgUnPoolWhitelistedPool;
    };
    "/osmosis.superfluid.MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition) => import("./superfluid/tx").MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino;
        fromAmino: (object: import("./superfluid/tx").MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionAmino) => import("./superfluid/tx").MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    };
    "/osmosis.superfluid.MsgAddToConcentratedLiquiditySuperfluidPosition": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgAddToConcentratedLiquiditySuperfluidPosition) => import("./superfluid/tx").MsgAddToConcentratedLiquiditySuperfluidPositionAmino;
        fromAmino: (object: import("./superfluid/tx").MsgAddToConcentratedLiquiditySuperfluidPositionAmino) => import("./superfluid/tx").MsgAddToConcentratedLiquiditySuperfluidPosition;
    };
    "/osmosis.superfluid.MsgUnbondConvertAndStake": {
        aminoType: string;
        toAmino: (message: import("./superfluid/tx").MsgUnbondConvertAndStake) => import("./superfluid/tx").MsgUnbondConvertAndStakeAmino;
        fromAmino: (object: import("./superfluid/tx").MsgUnbondConvertAndStakeAmino) => import("./superfluid/tx").MsgUnbondConvertAndStake;
    };
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetHotRoutes) => import("./protorev/v1beta1/tx").MsgSetHotRoutesAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetHotRoutesAmino) => import("./protorev/v1beta1/tx").MsgSetHotRoutes;
    };
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetDeveloperAccount) => import("./protorev/v1beta1/tx").MsgSetDeveloperAccountAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetDeveloperAccountAmino) => import("./protorev/v1beta1/tx").MsgSetDeveloperAccount;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerTx) => import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerTxAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerTxAmino) => import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerTx;
    };
    "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerBlock) => import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerBlockAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerBlockAmino) => import("./protorev/v1beta1/tx").MsgSetMaxPoolPointsPerBlock;
    };
    "/osmosis.protorev.v1beta1.MsgSetInfoByPoolType": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetInfoByPoolType) => import("./protorev/v1beta1/tx").MsgSetInfoByPoolTypeAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetInfoByPoolTypeAmino) => import("./protorev/v1beta1/tx").MsgSetInfoByPoolType;
    };
    "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
        aminoType: string;
        toAmino: (message: import("./protorev/v1beta1/tx").MsgSetBaseDenoms) => import("./protorev/v1beta1/tx").MsgSetBaseDenomsAmino;
        fromAmino: (object: import("./protorev/v1beta1/tx").MsgSetBaseDenomsAmino) => import("./protorev/v1beta1/tx").MsgSetBaseDenoms;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountIn) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountInAmino) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOut) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOutAmino) => import("./poolmanager/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountIn) => import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountInAmino;
        fromAmino: (object: import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountInAmino) => import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountIn;
    };
    "/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountOut) => import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountOutAmino;
        fromAmino: (object: import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountOutAmino) => import("./poolmanager/v1beta1/tx").MsgSplitRouteSwapExactAmountOut;
    };
    "/osmosis.poolmanager.v1beta1.MsgSetDenomPairTakerFee": {
        aminoType: string;
        toAmino: (message: import("./poolmanager/v1beta1/tx").MsgSetDenomPairTakerFee) => import("./poolmanager/v1beta1/tx").MsgSetDenomPairTakerFeeAmino;
        fromAmino: (object: import("./poolmanager/v1beta1/tx").MsgSetDenomPairTakerFeeAmino) => import("./poolmanager/v1beta1/tx").MsgSetDenomPairTakerFee;
    };
    "/osmosis.lockup.MsgLockTokens": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgLockTokens) => import("./lockup/tx").MsgLockTokensAmino;
        fromAmino: (object: import("./lockup/tx").MsgLockTokensAmino) => import("./lockup/tx").MsgLockTokens;
    };
    "/osmosis.lockup.MsgBeginUnlockingAll": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlockingAll) => import("./lockup/tx").MsgBeginUnlockingAllAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAllAmino) => import("./lockup/tx").MsgBeginUnlockingAll;
    };
    "/osmosis.lockup.MsgBeginUnlocking": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgBeginUnlocking) => import("./lockup/tx").MsgBeginUnlockingAmino;
        fromAmino: (object: import("./lockup/tx").MsgBeginUnlockingAmino) => import("./lockup/tx").MsgBeginUnlocking;
    };
    "/osmosis.lockup.MsgExtendLockup": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgExtendLockup) => import("./lockup/tx").MsgExtendLockupAmino;
        fromAmino: (object: import("./lockup/tx").MsgExtendLockupAmino) => import("./lockup/tx").MsgExtendLockup;
    };
    "/osmosis.lockup.MsgForceUnlock": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgForceUnlock) => import("./lockup/tx").MsgForceUnlockAmino;
        fromAmino: (object: import("./lockup/tx").MsgForceUnlockAmino) => import("./lockup/tx").MsgForceUnlock;
    };
    "/osmosis.lockup.MsgSetRewardReceiverAddress": {
        aminoType: string;
        toAmino: (message: import("./lockup/tx").MsgSetRewardReceiverAddress) => import("./lockup/tx").MsgSetRewardReceiverAddressAmino;
        fromAmino: (object: import("./lockup/tx").MsgSetRewardReceiverAddressAmino) => import("./lockup/tx").MsgSetRewardReceiverAddress;
    };
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: string;
        toAmino: (message: import("./incentives/tx").MsgCreateGauge) => import("./incentives/tx").MsgCreateGaugeAmino;
        fromAmino: (object: import("./incentives/tx").MsgCreateGaugeAmino) => import("./incentives/tx").MsgCreateGauge;
    };
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: string;
        toAmino: (message: import("./incentives/tx").MsgAddToGauge) => import("./incentives/tx").MsgAddToGaugeAmino;
        fromAmino: (object: import("./incentives/tx").MsgAddToGaugeAmino) => import("./incentives/tx").MsgAddToGauge;
    };
    "/osmosis.incentives.MsgCreateGroup": {
        aminoType: string;
        toAmino: (message: import("./incentives/tx").MsgCreateGroup) => import("./incentives/tx").MsgCreateGroupAmino;
        fromAmino: (object: import("./incentives/tx").MsgCreateGroupAmino) => import("./incentives/tx").MsgCreateGroup;
    };
    "/osmosis.ibchooks.MsgEmitIBCAck": {
        aminoType: string;
        toAmino: (message: import("./ibchooks/tx").MsgEmitIBCAck) => import("./ibchooks/tx").MsgEmitIBCAckAmino;
        fromAmino: (object: import("./ibchooks/tx").MsgEmitIBCAckAmino) => import("./ibchooks/tx").MsgEmitIBCAck;
    };
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinPool) => import("./gamm/v1beta1/tx").MsgJoinPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinPoolAmino) => import("./gamm/v1beta1/tx").MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitPool) => import("./gamm/v1beta1/tx").MsgExitPoolAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitPoolAmino) => import("./gamm/v1beta1/tx").MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino;
        fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgCreateStableswapPool) => import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgCreateStableswapPoolAmino;
        fromAmino: (object: import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgCreateStableswapPoolAmino) => import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgCreateStableswapPool;
    };
    "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
        aminoType: string;
        toAmino: (message: import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgStableSwapAdjustScalingFactors) => import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgStableSwapAdjustScalingFactorsAmino;
        fromAmino: (object: import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgStableSwapAdjustScalingFactorsAmino) => import("./gamm/poolmodels/stableswap/v1beta1/tx").MsgStableSwapAdjustScalingFactors;
    };
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: string;
        toAmino: (message: import("./gamm/poolmodels/balancer/v1beta1/tx").MsgCreateBalancerPool) => import("./gamm/poolmodels/balancer/v1beta1/tx").MsgCreateBalancerPoolAmino;
        fromAmino: (object: import("./gamm/poolmodels/balancer/v1beta1/tx").MsgCreateBalancerPoolAmino) => import("./gamm/poolmodels/balancer/v1beta1/tx").MsgCreateBalancerPool;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition) => import("./concentratedliquidity/v1beta1/tx").MsgCreatePositionAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCreatePositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCreatePosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition) => import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPositionAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgWithdrawPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition) => import("./concentratedliquidity/v1beta1/tx").MsgAddToPositionAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgAddToPositionAmino) => import("./concentratedliquidity/v1beta1/tx").MsgAddToPosition;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards) => import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewardsAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewardsAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCollectSpreadRewards;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives) => import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentivesAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentivesAmino) => import("./concentratedliquidity/v1beta1/tx").MsgCollectIncentives;
    };
    "/osmosis.concentratedliquidity.v1beta1.MsgTransferPositions": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions) => import("./concentratedliquidity/v1beta1/tx").MsgTransferPositionsAmino;
        fromAmino: (object: import("./concentratedliquidity/v1beta1/tx").MsgTransferPositionsAmino) => import("./concentratedliquidity/v1beta1/tx").MsgTransferPositions;
    };
    "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
        aminoType: string;
        toAmino: (message: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool) => import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPoolAmino;
        fromAmino: (object: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPoolAmino) => import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx").MsgCreateConcentratedPool;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
