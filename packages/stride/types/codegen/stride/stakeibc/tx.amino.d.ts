import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export declare const AminoConverter: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: (message: MsgLiquidStake) => import("./tx").MsgLiquidStakeAmino;
        fromAmino: (object: import("./tx").MsgLiquidStakeAmino) => MsgLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: (message: MsgRedeemStake) => import("./tx").MsgRedeemStakeAmino;
        fromAmino: (object: import("./tx").MsgRedeemStakeAmino) => MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: (message: MsgRegisterHostZone) => import("./tx").MsgRegisterHostZoneAmino;
        fromAmino: (object: import("./tx").MsgRegisterHostZoneAmino) => MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: (message: MsgClaimUndelegatedTokens) => import("./tx").MsgClaimUndelegatedTokensAmino;
        fromAmino: (object: import("./tx").MsgClaimUndelegatedTokensAmino) => MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: (message: MsgRebalanceValidators) => import("./tx").MsgRebalanceValidatorsAmino;
        fromAmino: (object: import("./tx").MsgRebalanceValidatorsAmino) => MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: (message: MsgAddValidators) => import("./tx").MsgAddValidatorsAmino;
        fromAmino: (object: import("./tx").MsgAddValidatorsAmino) => MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: (message: MsgChangeValidatorWeight) => import("./tx").MsgChangeValidatorWeightAmino;
        fromAmino: (object: import("./tx").MsgChangeValidatorWeightAmino) => MsgChangeValidatorWeight;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: (message: MsgDeleteValidator) => import("./tx").MsgDeleteValidatorAmino;
        fromAmino: (object: import("./tx").MsgDeleteValidatorAmino) => MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: (message: MsgRestoreInterchainAccount) => import("./tx").MsgRestoreInterchainAccountAmino;
        fromAmino: (object: import("./tx").MsgRestoreInterchainAccountAmino) => MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: (message: MsgUpdateValidatorSharesExchRate) => import("./tx").MsgUpdateValidatorSharesExchRateAmino;
        fromAmino: (object: import("./tx").MsgUpdateValidatorSharesExchRateAmino) => MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: (message: MsgClearBalance) => import("./tx").MsgClearBalanceAmino;
        fromAmino: (object: import("./tx").MsgClearBalanceAmino) => MsgClearBalance;
    };
};
