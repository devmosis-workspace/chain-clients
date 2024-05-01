import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const umeeAminoConverters: {
    "/umee.uibc.v1.MsgGovUpdateQuota": {
        aminoType: string;
        toAmino: (message: import("./uibc/v1/tx").MsgGovUpdateQuota) => import("./uibc/v1/tx").MsgGovUpdateQuotaAmino;
        fromAmino: (object: import("./uibc/v1/tx").MsgGovUpdateQuotaAmino) => import("./uibc/v1/tx").MsgGovUpdateQuota;
    };
    "/umee.uibc.v1.MsgGovSetIBCStatus": {
        aminoType: string;
        toAmino: (message: import("./uibc/v1/tx").MsgGovSetIBCStatus) => import("./uibc/v1/tx").MsgGovSetIBCStatusAmino;
        fromAmino: (object: import("./uibc/v1/tx").MsgGovSetIBCStatusAmino) => import("./uibc/v1/tx").MsgGovSetIBCStatus;
    };
    "/umee.uibc.v1.MsgGovToggleICS20Hooks": {
        aminoType: string;
        toAmino: (message: import("./uibc/v1/tx").MsgGovToggleICS20Hooks) => import("./uibc/v1/tx").MsgGovToggleICS20HooksAmino;
        fromAmino: (object: import("./uibc/v1/tx").MsgGovToggleICS20HooksAmino) => import("./uibc/v1/tx").MsgGovToggleICS20Hooks;
    };
    "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
        aminoType: string;
        toAmino: (message: import("./ugov/v1/tx").MsgGovUpdateMinGasPrice) => import("./ugov/v1/tx").MsgGovUpdateMinGasPriceAmino;
        fromAmino: (object: import("./ugov/v1/tx").MsgGovUpdateMinGasPriceAmino) => import("./ugov/v1/tx").MsgGovUpdateMinGasPrice;
    };
    "/umee.ugov.v1.MsgGovSetEmergencyGroup": {
        aminoType: string;
        toAmino: (message: import("./ugov/v1/tx").MsgGovSetEmergencyGroup) => import("./ugov/v1/tx").MsgGovSetEmergencyGroupAmino;
        fromAmino: (object: import("./ugov/v1/tx").MsgGovSetEmergencyGroupAmino) => import("./ugov/v1/tx").MsgGovSetEmergencyGroup;
    };
    "/umee.ugov.v1.MsgGovUpdateInflationParams": {
        aminoType: string;
        toAmino: (message: import("./ugov/v1/tx").MsgGovUpdateInflationParams) => import("./ugov/v1/tx").MsgGovUpdateInflationParamsAmino;
        fromAmino: (object: import("./ugov/v1/tx").MsgGovUpdateInflationParamsAmino) => import("./ugov/v1/tx").MsgGovUpdateInflationParams;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote) => import("./oracle/v1/tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgAggregateExchangeRatePrevoteAmino) => import("./oracle/v1/tx").MsgAggregateExchangeRatePrevote;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgAggregateExchangeRateVote) => import("./oracle/v1/tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgAggregateExchangeRateVoteAmino) => import("./oracle/v1/tx").MsgAggregateExchangeRateVote;
    };
    "/umee.oracle.v1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1/tx").MsgDelegateFeedConsent) => import("./oracle/v1/tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./oracle/v1/tx").MsgDelegateFeedConsentAmino) => import("./oracle/v1/tx").MsgDelegateFeedConsent;
    };
    "/umee.metoken.v1.MsgSwap": {
        aminoType: string;
        toAmino: (message: import("./metoken/v1/tx").MsgSwap) => import("./metoken/v1/tx").MsgSwapAmino;
        fromAmino: (object: import("./metoken/v1/tx").MsgSwapAmino) => import("./metoken/v1/tx").MsgSwap;
    };
    "/umee.metoken.v1.MsgRedeem": {
        aminoType: string;
        toAmino: (message: import("./metoken/v1/tx").MsgRedeem) => import("./metoken/v1/tx").MsgRedeemAmino;
        fromAmino: (object: import("./metoken/v1/tx").MsgRedeemAmino) => import("./metoken/v1/tx").MsgRedeem;
    };
    "/umee.metoken.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: import("./metoken/v1/tx").MsgGovSetParams) => import("./metoken/v1/tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./metoken/v1/tx").MsgGovSetParamsAmino) => import("./metoken/v1/tx").MsgGovSetParams;
    };
    "/umee.metoken.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: (message: import("./metoken/v1/tx").MsgGovUpdateRegistry) => import("./metoken/v1/tx").MsgGovUpdateRegistryAmino;
        fromAmino: (object: import("./metoken/v1/tx").MsgGovUpdateRegistryAmino) => import("./metoken/v1/tx").MsgGovUpdateRegistry;
    };
    "/umee.leverage.v1.MsgSupply": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgSupply) => import("./leverage/v1/tx").MsgSupplyAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgSupplyAmino) => import("./leverage/v1/tx").MsgSupply;
    };
    "/umee.leverage.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgWithdraw) => import("./leverage/v1/tx").MsgWithdrawAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgWithdrawAmino) => import("./leverage/v1/tx").MsgWithdraw;
    };
    "/umee.leverage.v1.MsgMaxWithdraw": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgMaxWithdraw) => import("./leverage/v1/tx").MsgMaxWithdrawAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgMaxWithdrawAmino) => import("./leverage/v1/tx").MsgMaxWithdraw;
    };
    "/umee.leverage.v1.MsgCollateralize": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgCollateralize) => import("./leverage/v1/tx").MsgCollateralizeAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgCollateralizeAmino) => import("./leverage/v1/tx").MsgCollateralize;
    };
    "/umee.leverage.v1.MsgDecollateralize": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgDecollateralize) => import("./leverage/v1/tx").MsgDecollateralizeAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgDecollateralizeAmino) => import("./leverage/v1/tx").MsgDecollateralize;
    };
    "/umee.leverage.v1.MsgBorrow": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgBorrow) => import("./leverage/v1/tx").MsgBorrowAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgBorrowAmino) => import("./leverage/v1/tx").MsgBorrow;
    };
    "/umee.leverage.v1.MsgMaxBorrow": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgMaxBorrow) => import("./leverage/v1/tx").MsgMaxBorrowAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgMaxBorrowAmino) => import("./leverage/v1/tx").MsgMaxBorrow;
    };
    "/umee.leverage.v1.MsgRepay": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgRepay) => import("./leverage/v1/tx").MsgRepayAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgRepayAmino) => import("./leverage/v1/tx").MsgRepay;
    };
    "/umee.leverage.v1.MsgLiquidate": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgLiquidate) => import("./leverage/v1/tx").MsgLiquidateAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgLiquidateAmino) => import("./leverage/v1/tx").MsgLiquidate;
    };
    "/umee.leverage.v1.MsgLeveragedLiquidate": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgLeveragedLiquidate) => import("./leverage/v1/tx").MsgLeveragedLiquidateAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgLeveragedLiquidateAmino) => import("./leverage/v1/tx").MsgLeveragedLiquidate;
    };
    "/umee.leverage.v1.MsgSupplyCollateral": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgSupplyCollateral) => import("./leverage/v1/tx").MsgSupplyCollateralAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgSupplyCollateralAmino) => import("./leverage/v1/tx").MsgSupplyCollateral;
    };
    "/umee.leverage.v1.MsgGovUpdateRegistry": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgGovUpdateRegistry) => import("./leverage/v1/tx").MsgGovUpdateRegistryAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgGovUpdateRegistryAmino) => import("./leverage/v1/tx").MsgGovUpdateRegistry;
    };
    "/umee.leverage.v1.MsgGovUpdateSpecialAssets": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgGovUpdateSpecialAssets) => import("./leverage/v1/tx").MsgGovUpdateSpecialAssetsAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgGovUpdateSpecialAssetsAmino) => import("./leverage/v1/tx").MsgGovUpdateSpecialAssets;
    };
    "/umee.leverage.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: import("./leverage/v1/tx").MsgGovSetParams) => import("./leverage/v1/tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./leverage/v1/tx").MsgGovSetParamsAmino) => import("./leverage/v1/tx").MsgGovSetParams;
    };
    "/umee.incentive.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgClaim) => import("./incentive/v1/tx").MsgClaimAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgClaimAmino) => import("./incentive/v1/tx").MsgClaim;
    };
    "/umee.incentive.v1.MsgBond": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgBond) => import("./incentive/v1/tx").MsgBondAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgBondAmino) => import("./incentive/v1/tx").MsgBond;
    };
    "/umee.incentive.v1.MsgBeginUnbonding": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgBeginUnbonding) => import("./incentive/v1/tx").MsgBeginUnbondingAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgBeginUnbondingAmino) => import("./incentive/v1/tx").MsgBeginUnbonding;
    };
    "/umee.incentive.v1.MsgEmergencyUnbond": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgEmergencyUnbond) => import("./incentive/v1/tx").MsgEmergencyUnbondAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgEmergencyUnbondAmino) => import("./incentive/v1/tx").MsgEmergencyUnbond;
    };
    "/umee.incentive.v1.MsgSponsor": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgSponsor) => import("./incentive/v1/tx").MsgSponsorAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgSponsorAmino) => import("./incentive/v1/tx").MsgSponsor;
    };
    "/umee.incentive.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgGovSetParams) => import("./incentive/v1/tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgGovSetParamsAmino) => import("./incentive/v1/tx").MsgGovSetParams;
    };
    "/umee.incentive.v1.MsgGovCreatePrograms": {
        aminoType: string;
        toAmino: (message: import("./incentive/v1/tx").MsgGovCreatePrograms) => import("./incentive/v1/tx").MsgGovCreateProgramsAmino;
        fromAmino: (object: import("./incentive/v1/tx").MsgGovCreateProgramsAmino) => import("./incentive/v1/tx").MsgGovCreatePrograms;
    };
};
export declare const umeeProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningUmeeClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningUmeeClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
