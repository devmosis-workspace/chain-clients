import { BinaryWriter } from "../../binary";
export interface ValidatorExchangeRate {
    internalTokensToSharesRate: string;
    epochNumber: bigint;
}
export interface ValidatorExchangeRateProtoMsg {
    typeUrl: "/stride.stakeibc.ValidatorExchangeRate";
    value: Uint8Array;
}
export interface ValidatorExchangeRateAmino {
    internal_tokens_to_shares_rate: string;
    epoch_number: string;
}
export interface ValidatorExchangeRateAminoMsg {
    type: "/stride.stakeibc.ValidatorExchangeRate";
    value: ValidatorExchangeRateAmino;
}
export interface ValidatorExchangeRateSDKType {
    internal_tokens_to_shares_rate: string;
    epoch_number: bigint;
}
export interface Validator {
    name: string;
    address: string;
    delegationAmt: string;
    weight: bigint;
    internalExchangeRate: ValidatorExchangeRate;
}
export interface ValidatorProtoMsg {
    typeUrl: "/stride.stakeibc.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    name: string;
    address: string;
    delegation_amt: string;
    weight: string;
    internal_exchange_rate?: ValidatorExchangeRateAmino;
}
export interface ValidatorAminoMsg {
    type: "/stride.stakeibc.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    name: string;
    address: string;
    delegation_amt: string;
    weight: bigint;
    internal_exchange_rate: ValidatorExchangeRateSDKType;
}
export declare const ValidatorExchangeRate: {
    typeUrl: string;
    encode(message: ValidatorExchangeRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorExchangeRate;
    fromPartial(object: Partial<ValidatorExchangeRate>): ValidatorExchangeRate;
    fromAmino(object: ValidatorExchangeRateAmino): ValidatorExchangeRate;
    toAmino(message: ValidatorExchangeRate): ValidatorExchangeRateAmino;
    fromAminoMsg(object: ValidatorExchangeRateAminoMsg): ValidatorExchangeRate;
    fromProtoMsg(message: ValidatorExchangeRateProtoMsg): ValidatorExchangeRate;
    toProto(message: ValidatorExchangeRate): Uint8Array;
    toProtoMsg(message: ValidatorExchangeRate): ValidatorExchangeRateProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
