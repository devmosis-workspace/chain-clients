import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface ValidatorExchangeRate {
    internalTokensToSharesRate: string;
    epochNumber: Long;
}
export interface ValidatorExchangeRateSDKType {
    internal_tokens_to_shares_rate: string;
    epoch_number: Long;
}
export interface Validator {
    name: string;
    address: string;
    delegationAmt: string;
    weight: Long;
    internalExchangeRate?: ValidatorExchangeRate;
}
export interface ValidatorSDKType {
    name: string;
    address: string;
    delegation_amt: string;
    weight: Long;
    internal_exchange_rate?: ValidatorExchangeRateSDKType;
}
export declare const ValidatorExchangeRate: {
    encode(message: ValidatorExchangeRate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorExchangeRate;
    fromPartial(object: Partial<ValidatorExchangeRate>): ValidatorExchangeRate;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Validator;
    fromPartial(object: Partial<Validator>): Validator;
};
