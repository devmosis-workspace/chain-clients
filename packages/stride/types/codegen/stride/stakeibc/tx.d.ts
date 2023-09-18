import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { ICAAccountType } from "./ica_account";
import { BinaryWriter } from "../../binary";
export interface MsgLiquidStake {
    creator: string;
    amount: string;
    hostDenom: string;
}
export interface MsgLiquidStakeProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLiquidStake";
    value: Uint8Array;
}
export interface MsgLiquidStakeAmino {
    creator: string;
    amount: string;
    host_denom: string;
}
export interface MsgLiquidStakeAminoMsg {
    type: "/stride.stakeibc.MsgLiquidStake";
    value: MsgLiquidStakeAmino;
}
export interface MsgLiquidStakeSDKType {
    creator: string;
    amount: string;
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
}
export interface MsgLiquidStakeResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgLiquidStakeResponse";
    value: Uint8Array;
}
export interface MsgLiquidStakeResponseAmino {
}
export interface MsgLiquidStakeResponseAminoMsg {
    type: "/stride.stakeibc.MsgLiquidStakeResponse";
    value: MsgLiquidStakeResponseAmino;
}
export interface MsgLiquidStakeResponseSDKType {
}
export interface MsgClearBalance {
    creator: string;
    chainId: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClearBalance";
    value: Uint8Array;
}
export interface MsgClearBalanceAmino {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceAminoMsg {
    type: "/stride.stakeibc.MsgClearBalance";
    value: MsgClearBalanceAmino;
}
export interface MsgClearBalanceSDKType {
    creator: string;
    chain_id: string;
    amount: string;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgClearBalanceResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClearBalanceResponse";
    value: Uint8Array;
}
export interface MsgClearBalanceResponseAmino {
}
export interface MsgClearBalanceResponseAminoMsg {
    type: "/stride.stakeibc.MsgClearBalanceResponse";
    value: MsgClearBalanceResponseAmino;
}
export interface MsgClearBalanceResponseSDKType {
}
export interface MsgRedeemStake {
    creator: string;
    amount: string;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRedeemStake";
    value: Uint8Array;
}
export interface MsgRedeemStakeAmino {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
}
export interface MsgRedeemStakeAminoMsg {
    type: "/stride.stakeibc.MsgRedeemStake";
    value: MsgRedeemStakeAmino;
}
export interface MsgRedeemStakeSDKType {
    creator: string;
    amount: string;
    host_zone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
}
export interface MsgRedeemStakeResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRedeemStakeResponse";
    value: Uint8Array;
}
export interface MsgRedeemStakeResponseAmino {
}
export interface MsgRedeemStakeResponseAminoMsg {
    type: "/stride.stakeibc.MsgRedeemStakeResponse";
    value: MsgRedeemStakeResponseAmino;
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
    unbondingFrequency: bigint;
    minRedemptionRate: string;
    maxRedemptionRate: string;
}
export interface MsgRegisterHostZoneProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRegisterHostZone";
    value: Uint8Array;
}
/** next: 15 */
export interface MsgRegisterHostZoneAmino {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: string;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export interface MsgRegisterHostZoneAminoMsg {
    type: "/stride.stakeibc.MsgRegisterHostZone";
    value: MsgRegisterHostZoneAmino;
}
/** next: 15 */
export interface MsgRegisterHostZoneSDKType {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: bigint;
    min_redemption_rate: string;
    max_redemption_rate: string;
}
export interface MsgRegisterHostZoneResponse {
}
export interface MsgRegisterHostZoneResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRegisterHostZoneResponse";
    value: Uint8Array;
}
export interface MsgRegisterHostZoneResponseAmino {
}
export interface MsgRegisterHostZoneResponseAminoMsg {
    type: "/stride.stakeibc.MsgRegisterHostZoneResponse";
    value: MsgRegisterHostZoneResponseAmino;
}
export interface MsgRegisterHostZoneResponseSDKType {
}
export interface MsgClaimUndelegatedTokens {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    hostZoneId: string;
    epoch: bigint;
    sender: string;
}
export interface MsgClaimUndelegatedTokensProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokens";
    value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensAmino {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    host_zone_id: string;
    epoch: string;
    sender: string;
}
export interface MsgClaimUndelegatedTokensAminoMsg {
    type: "/stride.stakeibc.MsgClaimUndelegatedTokens";
    value: MsgClaimUndelegatedTokensAmino;
}
export interface MsgClaimUndelegatedTokensSDKType {
    creator: string;
    host_zone_id: string;
    epoch: bigint;
    sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgClaimUndelegatedTokensResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
    value: Uint8Array;
}
export interface MsgClaimUndelegatedTokensResponseAmino {
}
export interface MsgClaimUndelegatedTokensResponseAminoMsg {
    type: "/stride.stakeibc.MsgClaimUndelegatedTokensResponse";
    value: MsgClaimUndelegatedTokensResponseAmino;
}
export interface MsgClaimUndelegatedTokensResponseSDKType {
}
export interface MsgRebalanceValidators {
    creator: string;
    hostZone: string;
    numRebalance: bigint;
}
export interface MsgRebalanceValidatorsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRebalanceValidators";
    value: Uint8Array;
}
export interface MsgRebalanceValidatorsAmino {
    creator: string;
    host_zone: string;
    num_rebalance: string;
}
export interface MsgRebalanceValidatorsAminoMsg {
    type: "/stride.stakeibc.MsgRebalanceValidators";
    value: MsgRebalanceValidatorsAmino;
}
export interface MsgRebalanceValidatorsSDKType {
    creator: string;
    host_zone: string;
    num_rebalance: bigint;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgRebalanceValidatorsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
    value: Uint8Array;
}
export interface MsgRebalanceValidatorsResponseAmino {
}
export interface MsgRebalanceValidatorsResponseAminoMsg {
    type: "/stride.stakeibc.MsgRebalanceValidatorsResponse";
    value: MsgRebalanceValidatorsResponseAmino;
}
export interface MsgRebalanceValidatorsResponseSDKType {
}
export interface MsgAddValidators {
    creator: string;
    hostZone: string;
    validators: Validator[];
}
export interface MsgAddValidatorsProtoMsg {
    typeUrl: "/stride.stakeibc.MsgAddValidators";
    value: Uint8Array;
}
export interface MsgAddValidatorsAmino {
    creator: string;
    host_zone: string;
    validators: ValidatorAmino[];
}
export interface MsgAddValidatorsAminoMsg {
    type: "/stride.stakeibc.MsgAddValidators";
    value: MsgAddValidatorsAmino;
}
export interface MsgAddValidatorsSDKType {
    creator: string;
    host_zone: string;
    validators: ValidatorSDKType[];
}
export interface MsgAddValidatorsResponse {
}
export interface MsgAddValidatorsResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgAddValidatorsResponse";
    value: Uint8Array;
}
export interface MsgAddValidatorsResponseAmino {
}
export interface MsgAddValidatorsResponseAminoMsg {
    type: "/stride.stakeibc.MsgAddValidatorsResponse";
    value: MsgAddValidatorsResponseAmino;
}
export interface MsgAddValidatorsResponseSDKType {
}
export interface MsgChangeValidatorWeight {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: bigint;
}
export interface MsgChangeValidatorWeightProtoMsg {
    typeUrl: "/stride.stakeibc.MsgChangeValidatorWeight";
    value: Uint8Array;
}
export interface MsgChangeValidatorWeightAmino {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: string;
}
export interface MsgChangeValidatorWeightAminoMsg {
    type: "/stride.stakeibc.MsgChangeValidatorWeight";
    value: MsgChangeValidatorWeightAmino;
}
export interface MsgChangeValidatorWeightSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
    weight: bigint;
}
export interface MsgChangeValidatorWeightResponse {
}
export interface MsgChangeValidatorWeightResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgChangeValidatorWeightResponse";
    value: Uint8Array;
}
export interface MsgChangeValidatorWeightResponseAmino {
}
export interface MsgChangeValidatorWeightResponseAminoMsg {
    type: "/stride.stakeibc.MsgChangeValidatorWeightResponse";
    value: MsgChangeValidatorWeightResponseAmino;
}
export interface MsgChangeValidatorWeightResponseSDKType {
}
export interface MsgDeleteValidator {
    creator: string;
    hostZone: string;
    valAddr: string;
}
export interface MsgDeleteValidatorProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteValidator";
    value: Uint8Array;
}
export interface MsgDeleteValidatorAmino {
    creator: string;
    host_zone: string;
    val_addr: string;
}
export interface MsgDeleteValidatorAminoMsg {
    type: "/stride.stakeibc.MsgDeleteValidator";
    value: MsgDeleteValidatorAmino;
}
export interface MsgDeleteValidatorSDKType {
    creator: string;
    host_zone: string;
    val_addr: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgDeleteValidatorResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgDeleteValidatorResponse";
    value: Uint8Array;
}
export interface MsgDeleteValidatorResponseAmino {
}
export interface MsgDeleteValidatorResponseAminoMsg {
    type: "/stride.stakeibc.MsgDeleteValidatorResponse";
    value: MsgDeleteValidatorResponseAmino;
}
export interface MsgDeleteValidatorResponseSDKType {
}
export interface MsgRestoreInterchainAccount {
    creator: string;
    chainId: string;
    accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccount";
    value: Uint8Array;
}
export interface MsgRestoreInterchainAccountAmino {
    creator: string;
    chain_id: string;
    account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountAminoMsg {
    type: "/stride.stakeibc.MsgRestoreInterchainAccount";
    value: MsgRestoreInterchainAccountAmino;
}
export interface MsgRestoreInterchainAccountSDKType {
    creator: string;
    chain_id: string;
    account_type: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgRestoreInterchainAccountResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
    value: Uint8Array;
}
export interface MsgRestoreInterchainAccountResponseAmino {
}
export interface MsgRestoreInterchainAccountResponseAminoMsg {
    type: "/stride.stakeibc.MsgRestoreInterchainAccountResponse";
    value: MsgRestoreInterchainAccountResponseAmino;
}
export interface MsgRestoreInterchainAccountResponseSDKType {
}
export interface MsgUpdateValidatorSharesExchRate {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
    value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateAmino {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateAminoMsg {
    type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRate";
    value: MsgUpdateValidatorSharesExchRateAmino;
}
export interface MsgUpdateValidatorSharesExchRateSDKType {
    creator: string;
    chain_id: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export interface MsgUpdateValidatorSharesExchRateResponseProtoMsg {
    typeUrl: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
    value: Uint8Array;
}
export interface MsgUpdateValidatorSharesExchRateResponseAmino {
}
export interface MsgUpdateValidatorSharesExchRateResponseAminoMsg {
    type: "/stride.stakeibc.MsgUpdateValidatorSharesExchRateResponse";
    value: MsgUpdateValidatorSharesExchRateResponseAmino;
}
export interface MsgUpdateValidatorSharesExchRateResponseSDKType {
}
export declare const MsgLiquidStake: {
    typeUrl: string;
    encode(message: MsgLiquidStake, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLiquidStake;
    fromPartial(object: Partial<MsgLiquidStake>): MsgLiquidStake;
    fromAmino(object: MsgLiquidStakeAmino): MsgLiquidStake;
    toAmino(message: MsgLiquidStake): MsgLiquidStakeAmino;
    fromAminoMsg(object: MsgLiquidStakeAminoMsg): MsgLiquidStake;
    fromProtoMsg(message: MsgLiquidStakeProtoMsg): MsgLiquidStake;
    toProto(message: MsgLiquidStake): Uint8Array;
    toProtoMsg(message: MsgLiquidStake): MsgLiquidStakeProtoMsg;
};
export declare const MsgLiquidStakeResponse: {
    typeUrl: string;
    encode(_: MsgLiquidStakeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLiquidStakeResponse;
    fromPartial(_: Partial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
    fromAmino(_: MsgLiquidStakeResponseAmino): MsgLiquidStakeResponse;
    toAmino(_: MsgLiquidStakeResponse): MsgLiquidStakeResponseAmino;
    fromAminoMsg(object: MsgLiquidStakeResponseAminoMsg): MsgLiquidStakeResponse;
    fromProtoMsg(message: MsgLiquidStakeResponseProtoMsg): MsgLiquidStakeResponse;
    toProto(message: MsgLiquidStakeResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidStakeResponse): MsgLiquidStakeResponseProtoMsg;
};
export declare const MsgClearBalance: {
    typeUrl: string;
    encode(message: MsgClearBalance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClearBalance;
    fromPartial(object: Partial<MsgClearBalance>): MsgClearBalance;
    fromAmino(object: MsgClearBalanceAmino): MsgClearBalance;
    toAmino(message: MsgClearBalance): MsgClearBalanceAmino;
    fromAminoMsg(object: MsgClearBalanceAminoMsg): MsgClearBalance;
    fromProtoMsg(message: MsgClearBalanceProtoMsg): MsgClearBalance;
    toProto(message: MsgClearBalance): Uint8Array;
    toProtoMsg(message: MsgClearBalance): MsgClearBalanceProtoMsg;
};
export declare const MsgClearBalanceResponse: {
    typeUrl: string;
    encode(_: MsgClearBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClearBalanceResponse;
    fromPartial(_: Partial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
    fromAmino(_: MsgClearBalanceResponseAmino): MsgClearBalanceResponse;
    toAmino(_: MsgClearBalanceResponse): MsgClearBalanceResponseAmino;
    fromAminoMsg(object: MsgClearBalanceResponseAminoMsg): MsgClearBalanceResponse;
    fromProtoMsg(message: MsgClearBalanceResponseProtoMsg): MsgClearBalanceResponse;
    toProto(message: MsgClearBalanceResponse): Uint8Array;
    toProtoMsg(message: MsgClearBalanceResponse): MsgClearBalanceResponseProtoMsg;
};
export declare const MsgRedeemStake: {
    typeUrl: string;
    encode(message: MsgRedeemStake, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRedeemStake;
    fromPartial(object: Partial<MsgRedeemStake>): MsgRedeemStake;
    fromAmino(object: MsgRedeemStakeAmino): MsgRedeemStake;
    toAmino(message: MsgRedeemStake): MsgRedeemStakeAmino;
    fromAminoMsg(object: MsgRedeemStakeAminoMsg): MsgRedeemStake;
    fromProtoMsg(message: MsgRedeemStakeProtoMsg): MsgRedeemStake;
    toProto(message: MsgRedeemStake): Uint8Array;
    toProtoMsg(message: MsgRedeemStake): MsgRedeemStakeProtoMsg;
};
export declare const MsgRedeemStakeResponse: {
    typeUrl: string;
    encode(_: MsgRedeemStakeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRedeemStakeResponse;
    fromPartial(_: Partial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
    fromAmino(_: MsgRedeemStakeResponseAmino): MsgRedeemStakeResponse;
    toAmino(_: MsgRedeemStakeResponse): MsgRedeemStakeResponseAmino;
    fromAminoMsg(object: MsgRedeemStakeResponseAminoMsg): MsgRedeemStakeResponse;
    fromProtoMsg(message: MsgRedeemStakeResponseProtoMsg): MsgRedeemStakeResponse;
    toProto(message: MsgRedeemStakeResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemStakeResponse): MsgRedeemStakeResponseProtoMsg;
};
export declare const MsgRegisterHostZone: {
    typeUrl: string;
    encode(message: MsgRegisterHostZone, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterHostZone;
    fromPartial(object: Partial<MsgRegisterHostZone>): MsgRegisterHostZone;
    fromAmino(object: MsgRegisterHostZoneAmino): MsgRegisterHostZone;
    toAmino(message: MsgRegisterHostZone): MsgRegisterHostZoneAmino;
    fromAminoMsg(object: MsgRegisterHostZoneAminoMsg): MsgRegisterHostZone;
    fromProtoMsg(message: MsgRegisterHostZoneProtoMsg): MsgRegisterHostZone;
    toProto(message: MsgRegisterHostZone): Uint8Array;
    toProtoMsg(message: MsgRegisterHostZone): MsgRegisterHostZoneProtoMsg;
};
export declare const MsgRegisterHostZoneResponse: {
    typeUrl: string;
    encode(_: MsgRegisterHostZoneResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterHostZoneResponse;
    fromPartial(_: Partial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
    fromAmino(_: MsgRegisterHostZoneResponseAmino): MsgRegisterHostZoneResponse;
    toAmino(_: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseAmino;
    fromAminoMsg(object: MsgRegisterHostZoneResponseAminoMsg): MsgRegisterHostZoneResponse;
    fromProtoMsg(message: MsgRegisterHostZoneResponseProtoMsg): MsgRegisterHostZoneResponse;
    toProto(message: MsgRegisterHostZoneResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterHostZoneResponse): MsgRegisterHostZoneResponseProtoMsg;
};
export declare const MsgClaimUndelegatedTokens: {
    typeUrl: string;
    encode(message: MsgClaimUndelegatedTokens, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimUndelegatedTokens;
    fromPartial(object: Partial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
    fromAmino(object: MsgClaimUndelegatedTokensAmino): MsgClaimUndelegatedTokens;
    toAmino(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensAmino;
    fromAminoMsg(object: MsgClaimUndelegatedTokensAminoMsg): MsgClaimUndelegatedTokens;
    fromProtoMsg(message: MsgClaimUndelegatedTokensProtoMsg): MsgClaimUndelegatedTokens;
    toProto(message: MsgClaimUndelegatedTokens): Uint8Array;
    toProtoMsg(message: MsgClaimUndelegatedTokens): MsgClaimUndelegatedTokensProtoMsg;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    typeUrl: string;
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimUndelegatedTokensResponse;
    fromPartial(_: Partial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
    fromAmino(_: MsgClaimUndelegatedTokensResponseAmino): MsgClaimUndelegatedTokensResponse;
    toAmino(_: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseAmino;
    fromAminoMsg(object: MsgClaimUndelegatedTokensResponseAminoMsg): MsgClaimUndelegatedTokensResponse;
    fromProtoMsg(message: MsgClaimUndelegatedTokensResponseProtoMsg): MsgClaimUndelegatedTokensResponse;
    toProto(message: MsgClaimUndelegatedTokensResponse): Uint8Array;
    toProtoMsg(message: MsgClaimUndelegatedTokensResponse): MsgClaimUndelegatedTokensResponseProtoMsg;
};
export declare const MsgRebalanceValidators: {
    typeUrl: string;
    encode(message: MsgRebalanceValidators, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRebalanceValidators;
    fromPartial(object: Partial<MsgRebalanceValidators>): MsgRebalanceValidators;
    fromAmino(object: MsgRebalanceValidatorsAmino): MsgRebalanceValidators;
    toAmino(message: MsgRebalanceValidators): MsgRebalanceValidatorsAmino;
    fromAminoMsg(object: MsgRebalanceValidatorsAminoMsg): MsgRebalanceValidators;
    fromProtoMsg(message: MsgRebalanceValidatorsProtoMsg): MsgRebalanceValidators;
    toProto(message: MsgRebalanceValidators): Uint8Array;
    toProtoMsg(message: MsgRebalanceValidators): MsgRebalanceValidatorsProtoMsg;
};
export declare const MsgRebalanceValidatorsResponse: {
    typeUrl: string;
    encode(_: MsgRebalanceValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRebalanceValidatorsResponse;
    fromPartial(_: Partial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
    fromAmino(_: MsgRebalanceValidatorsResponseAmino): MsgRebalanceValidatorsResponse;
    toAmino(_: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseAmino;
    fromAminoMsg(object: MsgRebalanceValidatorsResponseAminoMsg): MsgRebalanceValidatorsResponse;
    fromProtoMsg(message: MsgRebalanceValidatorsResponseProtoMsg): MsgRebalanceValidatorsResponse;
    toProto(message: MsgRebalanceValidatorsResponse): Uint8Array;
    toProtoMsg(message: MsgRebalanceValidatorsResponse): MsgRebalanceValidatorsResponseProtoMsg;
};
export declare const MsgAddValidators: {
    typeUrl: string;
    encode(message: MsgAddValidators, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddValidators;
    fromPartial(object: Partial<MsgAddValidators>): MsgAddValidators;
    fromAmino(object: MsgAddValidatorsAmino): MsgAddValidators;
    toAmino(message: MsgAddValidators): MsgAddValidatorsAmino;
    fromAminoMsg(object: MsgAddValidatorsAminoMsg): MsgAddValidators;
    fromProtoMsg(message: MsgAddValidatorsProtoMsg): MsgAddValidators;
    toProto(message: MsgAddValidators): Uint8Array;
    toProtoMsg(message: MsgAddValidators): MsgAddValidatorsProtoMsg;
};
export declare const MsgAddValidatorsResponse: {
    typeUrl: string;
    encode(_: MsgAddValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddValidatorsResponse;
    fromPartial(_: Partial<MsgAddValidatorsResponse>): MsgAddValidatorsResponse;
    fromAmino(_: MsgAddValidatorsResponseAmino): MsgAddValidatorsResponse;
    toAmino(_: MsgAddValidatorsResponse): MsgAddValidatorsResponseAmino;
    fromAminoMsg(object: MsgAddValidatorsResponseAminoMsg): MsgAddValidatorsResponse;
    fromProtoMsg(message: MsgAddValidatorsResponseProtoMsg): MsgAddValidatorsResponse;
    toProto(message: MsgAddValidatorsResponse): Uint8Array;
    toProtoMsg(message: MsgAddValidatorsResponse): MsgAddValidatorsResponseProtoMsg;
};
export declare const MsgChangeValidatorWeight: {
    typeUrl: string;
    encode(message: MsgChangeValidatorWeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeValidatorWeight;
    fromPartial(object: Partial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight;
    fromAmino(object: MsgChangeValidatorWeightAmino): MsgChangeValidatorWeight;
    toAmino(message: MsgChangeValidatorWeight): MsgChangeValidatorWeightAmino;
    fromAminoMsg(object: MsgChangeValidatorWeightAminoMsg): MsgChangeValidatorWeight;
    fromProtoMsg(message: MsgChangeValidatorWeightProtoMsg): MsgChangeValidatorWeight;
    toProto(message: MsgChangeValidatorWeight): Uint8Array;
    toProtoMsg(message: MsgChangeValidatorWeight): MsgChangeValidatorWeightProtoMsg;
};
export declare const MsgChangeValidatorWeightResponse: {
    typeUrl: string;
    encode(_: MsgChangeValidatorWeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeValidatorWeightResponse;
    fromPartial(_: Partial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse;
    fromAmino(_: MsgChangeValidatorWeightResponseAmino): MsgChangeValidatorWeightResponse;
    toAmino(_: MsgChangeValidatorWeightResponse): MsgChangeValidatorWeightResponseAmino;
    fromAminoMsg(object: MsgChangeValidatorWeightResponseAminoMsg): MsgChangeValidatorWeightResponse;
    fromProtoMsg(message: MsgChangeValidatorWeightResponseProtoMsg): MsgChangeValidatorWeightResponse;
    toProto(message: MsgChangeValidatorWeightResponse): Uint8Array;
    toProtoMsg(message: MsgChangeValidatorWeightResponse): MsgChangeValidatorWeightResponseProtoMsg;
};
export declare const MsgDeleteValidator: {
    typeUrl: string;
    encode(message: MsgDeleteValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteValidator;
    fromPartial(object: Partial<MsgDeleteValidator>): MsgDeleteValidator;
    fromAmino(object: MsgDeleteValidatorAmino): MsgDeleteValidator;
    toAmino(message: MsgDeleteValidator): MsgDeleteValidatorAmino;
    fromAminoMsg(object: MsgDeleteValidatorAminoMsg): MsgDeleteValidator;
    fromProtoMsg(message: MsgDeleteValidatorProtoMsg): MsgDeleteValidator;
    toProto(message: MsgDeleteValidator): Uint8Array;
    toProtoMsg(message: MsgDeleteValidator): MsgDeleteValidatorProtoMsg;
};
export declare const MsgDeleteValidatorResponse: {
    typeUrl: string;
    encode(_: MsgDeleteValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteValidatorResponse;
    fromPartial(_: Partial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
    fromAmino(_: MsgDeleteValidatorResponseAmino): MsgDeleteValidatorResponse;
    toAmino(_: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseAmino;
    fromAminoMsg(object: MsgDeleteValidatorResponseAminoMsg): MsgDeleteValidatorResponse;
    fromProtoMsg(message: MsgDeleteValidatorResponseProtoMsg): MsgDeleteValidatorResponse;
    toProto(message: MsgDeleteValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteValidatorResponse): MsgDeleteValidatorResponseProtoMsg;
};
export declare const MsgRestoreInterchainAccount: {
    typeUrl: string;
    encode(message: MsgRestoreInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRestoreInterchainAccount;
    fromPartial(object: Partial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
    fromAmino(object: MsgRestoreInterchainAccountAmino): MsgRestoreInterchainAccount;
    toAmino(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountAminoMsg): MsgRestoreInterchainAccount;
    fromProtoMsg(message: MsgRestoreInterchainAccountProtoMsg): MsgRestoreInterchainAccount;
    toProto(message: MsgRestoreInterchainAccount): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccount): MsgRestoreInterchainAccountProtoMsg;
};
export declare const MsgRestoreInterchainAccountResponse: {
    typeUrl: string;
    encode(_: MsgRestoreInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRestoreInterchainAccountResponse;
    fromPartial(_: Partial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
    fromAmino(_: MsgRestoreInterchainAccountResponseAmino): MsgRestoreInterchainAccountResponse;
    toAmino(_: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseAmino;
    fromAminoMsg(object: MsgRestoreInterchainAccountResponseAminoMsg): MsgRestoreInterchainAccountResponse;
    fromProtoMsg(message: MsgRestoreInterchainAccountResponseProtoMsg): MsgRestoreInterchainAccountResponse;
    toProto(message: MsgRestoreInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRestoreInterchainAccountResponse): MsgRestoreInterchainAccountResponseProtoMsg;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    typeUrl: string;
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateValidatorSharesExchRate;
    fromPartial(object: Partial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
    fromAmino(object: MsgUpdateValidatorSharesExchRateAmino): MsgUpdateValidatorSharesExchRate;
    toAmino(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateAmino;
    fromAminoMsg(object: MsgUpdateValidatorSharesExchRateAminoMsg): MsgUpdateValidatorSharesExchRate;
    fromProtoMsg(message: MsgUpdateValidatorSharesExchRateProtoMsg): MsgUpdateValidatorSharesExchRate;
    toProto(message: MsgUpdateValidatorSharesExchRate): Uint8Array;
    toProtoMsg(message: MsgUpdateValidatorSharesExchRate): MsgUpdateValidatorSharesExchRateProtoMsg;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    typeUrl: string;
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse;
    fromPartial(_: Partial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
    fromAmino(_: MsgUpdateValidatorSharesExchRateResponseAmino): MsgUpdateValidatorSharesExchRateResponse;
    toAmino(_: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseAmino;
    fromAminoMsg(object: MsgUpdateValidatorSharesExchRateResponseAminoMsg): MsgUpdateValidatorSharesExchRateResponse;
    fromProtoMsg(message: MsgUpdateValidatorSharesExchRateResponseProtoMsg): MsgUpdateValidatorSharesExchRateResponse;
    toProto(message: MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateValidatorSharesExchRateResponse): MsgUpdateValidatorSharesExchRateResponseProtoMsg;
};
