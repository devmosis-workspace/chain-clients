import { AminoMsg } from "@cosmjs/amino";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidators, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export interface MsgLiquidStakeAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgLiquidStake";
    value: {
        creator: string;
        amount: string;
        host_denom: string;
    };
}
export interface MsgRedeemStakeAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgRedeemStake";
    value: {
        creator: string;
        amount: string;
        host_zone: string;
        receiver: string;
    };
}
export interface MsgRegisterHostZoneAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgRegisterHostZone";
    value: {
        connection_id: string;
        bech32prefix: string;
        host_denom: string;
        ibc_denom: string;
        creator: string;
        transfer_channel_id: string;
        unbonding_frequency: string;
        min_redemption_rate: string;
        max_redemption_rate: string;
    };
}
export interface MsgClaimUndelegatedTokensAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
    value: {
        creator: string;
        host_zone_id: string;
        epoch: string;
        sender: string;
    };
}
export interface MsgRebalanceValidatorsAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgRebalanceValidators";
    value: {
        creator: string;
        host_zone: string;
        num_rebalance: string;
    };
}
export interface MsgAddValidatorsAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgAddValidators";
    value: {
        creator: string;
        host_zone: string;
        validators: {
            name: string;
            address: string;
            delegation_amt: string;
            weight: string;
            internal_exchange_rate: {
                internal_tokens_to_shares_rate: string;
                epoch_number: string;
            };
        }[];
    };
}
export interface MsgChangeValidatorWeightAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgChangeValidatorWeight";
    value: {
        creator: string;
        host_zone: string;
        val_addr: string;
        weight: string;
    };
}
export interface MsgDeleteValidatorAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgDeleteValidator";
    value: {
        creator: string;
        host_zone: string;
        val_addr: string;
    };
}
export interface MsgRestoreInterchainAccountAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgRestoreInterchainAccount";
    value: {
        creator: string;
        chain_id: string;
        account_type: number;
    };
}
export interface MsgUpdateValidatorSharesExchRateAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
    value: {
        creator: string;
        chain_id: string;
        valoper: string;
    };
}
export interface MsgClearBalanceAminoType extends AminoMsg {
    type: "/stride.stakeibc.MsgClearBalance";
    value: {
        creator: string;
        chain_id: string;
        amount: string;
        channel: string;
    };
}
export declare const AminoConverter: {
    "/stride.stakeibc.MsgLiquidStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostDenom }: MsgLiquidStake) => MsgLiquidStakeAminoType["value"];
        fromAmino: ({ creator, amount, host_denom }: MsgLiquidStakeAminoType["value"]) => MsgLiquidStake;
    };
    "/stride.stakeibc.MsgRedeemStake": {
        aminoType: string;
        toAmino: ({ creator, amount, hostZone, receiver }: MsgRedeemStake) => MsgRedeemStakeAminoType["value"];
        fromAmino: ({ creator, amount, host_zone, receiver }: MsgRedeemStakeAminoType["value"]) => MsgRedeemStake;
    };
    "/stride.stakeibc.MsgRegisterHostZone": {
        aminoType: string;
        toAmino: ({ connectionId, bech32prefix, hostDenom, ibcDenom, creator, transferChannelId, unbondingFrequency, minRedemptionRate, maxRedemptionRate }: MsgRegisterHostZone) => MsgRegisterHostZoneAminoType["value"];
        fromAmino: ({ connection_id, bech32prefix, host_denom, ibc_denom, creator, transfer_channel_id, unbonding_frequency, min_redemption_rate, max_redemption_rate }: MsgRegisterHostZoneAminoType["value"]) => MsgRegisterHostZone;
    };
    "/stride.stakeibc.MsgClaimUndelegatedTokens": {
        aminoType: string;
        toAmino: ({ creator, hostZoneId, epoch, sender }: MsgClaimUndelegatedTokens) => MsgClaimUndelegatedTokensAminoType["value"];
        fromAmino: ({ creator, host_zone_id, epoch, sender }: MsgClaimUndelegatedTokensAminoType["value"]) => MsgClaimUndelegatedTokens;
    };
    "/stride.stakeibc.MsgRebalanceValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, numRebalance }: MsgRebalanceValidators) => MsgRebalanceValidatorsAminoType["value"];
        fromAmino: ({ creator, host_zone, num_rebalance }: MsgRebalanceValidatorsAminoType["value"]) => MsgRebalanceValidators;
    };
    "/stride.stakeibc.MsgAddValidators": {
        aminoType: string;
        toAmino: ({ creator, hostZone, validators }: MsgAddValidators) => MsgAddValidatorsAminoType["value"];
        fromAmino: ({ creator, host_zone, validators }: MsgAddValidatorsAminoType["value"]) => MsgAddValidators;
    };
    "/stride.stakeibc.MsgChangeValidatorWeight": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr, weight }: MsgChangeValidatorWeight) => MsgChangeValidatorWeightAminoType["value"];
        fromAmino: ({ creator, host_zone, val_addr, weight }: MsgChangeValidatorWeightAminoType["value"]) => MsgChangeValidatorWeight;
    };
    "/stride.stakeibc.MsgDeleteValidator": {
        aminoType: string;
        toAmino: ({ creator, hostZone, valAddr }: MsgDeleteValidator) => MsgDeleteValidatorAminoType["value"];
        fromAmino: ({ creator, host_zone, val_addr }: MsgDeleteValidatorAminoType["value"]) => MsgDeleteValidator;
    };
    "/stride.stakeibc.MsgRestoreInterchainAccount": {
        aminoType: string;
        toAmino: ({ creator, chainId, accountType }: MsgRestoreInterchainAccount) => MsgRestoreInterchainAccountAminoType["value"];
        fromAmino: ({ creator, chain_id, account_type }: MsgRestoreInterchainAccountAminoType["value"]) => MsgRestoreInterchainAccount;
    };
    "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
        aminoType: string;
        toAmino: ({ creator, chainId, valoper }: MsgUpdateValidatorSharesExchRate) => MsgUpdateValidatorSharesExchRateAminoType["value"];
        fromAmino: ({ creator, chain_id, valoper }: MsgUpdateValidatorSharesExchRateAminoType["value"]) => MsgUpdateValidatorSharesExchRate;
    };
    "/stride.stakeibc.MsgClearBalance": {
        aminoType: string;
        toAmino: ({ creator, chainId, amount, channel }: MsgClearBalance) => MsgClearBalanceAminoType["value"];
        fromAmino: ({ creator, chain_id, amount, channel }: MsgClearBalanceAminoType["value"]) => MsgClearBalance;
    };
};
