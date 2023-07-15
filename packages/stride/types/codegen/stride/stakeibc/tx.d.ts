import { Validator, ValidatorSDKType } from "./validator";
import { ICAAccountType } from "./ica_account";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgLiquidStake {
    creator: string;
    amount: string;
    hostDenom: string;
}
export interface MsgLiquidStakeSDKType {
    creator: string;
    amount: string;
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
}
export interface MsgLiquidStakeResponseSDKType {
}
export interface MsgClearBalance {
    creator: string;
    chainId: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceSDKType {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseSDKType {
}
export interface MsgRedeemStake {
    creator: string;
    amount: string;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeSDKType {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
}
export interface MsgRedeemStakeResponseSDKType {
}
/** next: 15 */
export interface MsgRegisterHostZone {
    connectionId: string;
    bech32prefix: string;
    hostDenom: string;
    ibcDenom: string;
    creator: string;
    transferChannelId: string;
    unbondingFrequency: Long;
    minRedemptionRate: string;
    maxRedemptionRate: string;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: Long;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export interface MsgRegisterHostZoneResponse {
}
export interface MsgRegisterHostZoneResponseSDKType {
}
export interface MsgClaimUndelegatedTokens {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    hostZoneId: string;
    epoch: Long;
    sender: string;
}
export interface MsgClaimUndelegatedTokensSDKType {
    creator: string;
    host_zone_id: string;
    epoch: Long;
    sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgClaimUndelegatedTokensResponseSDKType {
}
export interface MsgRebalanceValidators {
    creator: string;
    hostZone: string;
    numRebalance: Long;
}
export interface MsgRebalanceValidatorsSDKType {
    creator: string;
    host_zone: string;
    num_rebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
export interface MsgAddValidators {
    creator: string;
    hostZone: string;
    validators: Validator[];
}
export interface MsgAddValidatorsSDKType {
    creator: string;
    host_zone: string;
    validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {
}
export interface MsgAddValidatorsResponseSDKType {
}
export interface MsgChangeValidatorWeight {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightResponse {
}
export interface MsgChangeValidatorWeightResponseSDKType {
}
export interface MsgDeleteValidator {
    creator: string;
    hostZone: string;
    valAddr: string;
}
export interface MsgDeleteValidatorSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgDeleteValidatorResponseSDKType {
}
export interface MsgRestoreInterchainAccount {
    creator: string;
    chainId: string;
    accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountSDKType {
    creator: string;
    chain_id: string;
    account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgRestoreInterchainAccountResponseSDKType {
}
export interface MsgUpdateValidatorSharesExchRate {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {
}
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLiquidStake;
    fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(_: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLiquidStakeResponse;
    fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgClearBalance: {
    encode(message: MsgClearBalance, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClearBalance;
    fromPartial(object: Partial<MsgClearBalance>): MsgClearBalance;
};
export declare const MsgClearBalanceResponse: {
    encode(_: MsgClearBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClearBalanceResponse;
    fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
};
export declare const MsgRedeemStake: {
    encode(message: MsgRedeemStake, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRedeemStake;
    fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake;
};
export declare const MsgRedeemStakeResponse: {
    encode(_: MsgRedeemStakeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRedeemStakeResponse;
    fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
};
export declare const MsgRegisterHostZone: {
    encode(message: MsgRegisterHostZone, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterHostZone;
    fromPartial(object: Partial<MsgRegisterHostZone>): MsgRegisterHostZone;
};
export declare const MsgRegisterHostZoneResponse: {
    encode(_: MsgRegisterHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterHostZoneResponse;
    fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
};
export declare const MsgClaimUndelegatedTokens: {
    encode(message: MsgClaimUndelegatedTokens, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimUndelegatedTokens;
    fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimUndelegatedTokensResponse;
    fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
};
export declare const MsgRebalanceValidators: {
    encode(message: MsgRebalanceValidators, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRebalanceValidators;
    fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators;
};
export declare const MsgRebalanceValidatorsResponse: {
    encode(_: MsgRebalanceValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRebalanceValidatorsResponse;
    fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
};
export declare const MsgAddValidators: {
    encode(message: MsgAddValidators, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddValidators;
    fromPartial(object: Partial<MsgAddValidators>): MsgAddValidators;
};
export declare const MsgAddValidatorsResponse: {
    encode(_: MsgAddValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddValidatorsResponse;
    fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse;
};
export declare const MsgChangeValidatorWeight: {
    encode(message: MsgChangeValidatorWeight, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgChangeValidatorWeight;
    fromPartial(object: Partial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight;
};
export declare const MsgChangeValidatorWeightResponse: {
    encode(_: MsgChangeValidatorWeightResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgChangeValidatorWeightResponse;
    fromPartial(_: Partial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteValidator;
    fromPartial(object: Partial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteValidatorResponse;
    fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
export declare const MsgRestoreInterchainAccount: {
    encode(message: MsgRestoreInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRestoreInterchainAccount;
    fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
};
export declare const MsgRestoreInterchainAccountResponse: {
    encode(_: MsgRestoreInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRestoreInterchainAccountResponse;
    fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateValidatorSharesExchRate;
    fromPartial(object: Partial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse;
    fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
};
