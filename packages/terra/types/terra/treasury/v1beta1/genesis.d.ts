import { Params, ParamsAmino, ParamsSDKType } from "./treasury";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params;
    taxRate: string;
    rewardWeight: string;
    taxCaps: TaxCap[];
    taxProceeds: Coin[];
    epochInitialIssuance: Coin[];
    epochStates: EpochState[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    tax_rate?: string;
    reward_weight?: string;
    tax_caps?: TaxCapAmino[];
    tax_proceeds?: CoinAmino[];
    epoch_initial_issuance?: CoinAmino[];
    epoch_states?: EpochStateAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/terra.treasury.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    tax_rate: string;
    reward_weight: string;
    tax_caps: TaxCapSDKType[];
    tax_proceeds: CoinSDKType[];
    epoch_initial_issuance: CoinSDKType[];
    epoch_states: EpochStateSDKType[];
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCap {
    denom: string;
    taxCap: string;
}
export interface TaxCapProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.TaxCap";
    value: Uint8Array;
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCapAmino {
    denom?: string;
    tax_cap?: string;
}
export interface TaxCapAminoMsg {
    type: "/terra.treasury.v1beta1.TaxCap";
    value: TaxCapAmino;
}
/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCapSDKType {
    denom: string;
    tax_cap: string;
}
/** EpochState is the record for each epoch state */
export interface EpochState {
    epoch: bigint;
    taxReward: string;
    seigniorageReward: string;
    totalStakedLuna: string;
}
export interface EpochStateProtoMsg {
    typeUrl: "/terra.treasury.v1beta1.EpochState";
    value: Uint8Array;
}
/** EpochState is the record for each epoch state */
export interface EpochStateAmino {
    epoch?: string;
    tax_reward?: string;
    seigniorage_reward?: string;
    total_staked_luna?: string;
}
export interface EpochStateAminoMsg {
    type: "/terra.treasury.v1beta1.EpochState";
    value: EpochStateAmino;
}
/** EpochState is the record for each epoch state */
export interface EpochStateSDKType {
    epoch: bigint;
    tax_reward: string;
    seigniorage_reward: string;
    total_staked_luna: string;
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
export declare const TaxCap: {
    typeUrl: string;
    encode(message: TaxCap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TaxCap;
    fromPartial(object: Partial<TaxCap>): TaxCap;
    fromAmino(object: TaxCapAmino): TaxCap;
    toAmino(message: TaxCap): TaxCapAmino;
    fromAminoMsg(object: TaxCapAminoMsg): TaxCap;
    fromProtoMsg(message: TaxCapProtoMsg): TaxCap;
    toProto(message: TaxCap): Uint8Array;
    toProtoMsg(message: TaxCap): TaxCapProtoMsg;
};
export declare const EpochState: {
    typeUrl: string;
    encode(message: EpochState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochState;
    fromPartial(object: Partial<EpochState>): EpochState;
    fromAmino(object: EpochStateAmino): EpochState;
    toAmino(message: EpochState): EpochStateAmino;
    fromAminoMsg(object: EpochStateAminoMsg): EpochState;
    fromProtoMsg(message: EpochStateProtoMsg): EpochState;
    toProto(message: EpochState): Uint8Array;
    toProtoMsg(message: EpochState): EpochStateProtoMsg;
};
