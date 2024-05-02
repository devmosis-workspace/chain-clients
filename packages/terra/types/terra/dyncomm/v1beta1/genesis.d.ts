import { Params, ParamsAmino, ParamsSDKType } from "./dyncomm";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    validatorCommissionRates: ValidatorCommissionRate[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    validator_commission_rates?: ValidatorCommissionRateAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/terra.dyncomm.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the dyncomm module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    validator_commission_rates: ValidatorCommissionRateSDKType[];
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRate {
    validatorAddress: string;
    minCommissionRate: string;
    targetCommissionRate: string;
}
export interface ValidatorCommissionRateProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.ValidatorCommissionRate";
    value: Uint8Array;
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRateAmino {
    validator_address?: string;
    min_commission_rate?: string;
    target_commission_rate?: string;
}
export interface ValidatorCommissionRateAminoMsg {
    type: "/terra.dyncomm.v1beta1.ValidatorCommissionRate";
    value: ValidatorCommissionRateAmino;
}
/**
 * MinDynCommission defines a validator - min commission rate
 * pair to be enforced by the blockchain
 */
export interface ValidatorCommissionRateSDKType {
    validator_address: string;
    min_commission_rate: string;
    target_commission_rate: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const ValidatorCommissionRate: {
    typeUrl: string;
    encode(message: ValidatorCommissionRate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorCommissionRate;
    fromPartial(object: Partial<ValidatorCommissionRate>): ValidatorCommissionRate;
    fromAmino(object: ValidatorCommissionRateAmino): ValidatorCommissionRate;
    toAmino(message: ValidatorCommissionRate): ValidatorCommissionRateAmino;
    fromAminoMsg(object: ValidatorCommissionRateAminoMsg): ValidatorCommissionRate;
    fromProtoMsg(message: ValidatorCommissionRateProtoMsg): ValidatorCommissionRate;
    toProto(message: ValidatorCommissionRate): Uint8Array;
    toProtoMsg(message: ValidatorCommissionRate): ValidatorCommissionRateProtoMsg;
};
