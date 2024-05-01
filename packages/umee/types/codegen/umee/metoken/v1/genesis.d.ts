import { Params, ParamsAmino, ParamsSDKType, Index, IndexAmino, IndexSDKType } from "./metoken";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisState {
    params: Params;
    registry: Index[];
    balances: IndexBalances[];
    nextRebalancingTime: Timestamp;
    nextInterestClaimTime: Timestamp;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.metoken.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    registry?: IndexAmino[];
    balances?: IndexBalancesAmino[];
    next_rebalancing_time?: string;
    next_interest_claim_time?: string;
}
export interface GenesisStateAminoMsg {
    type: "/umee.metoken.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the x/metoken module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    registry: IndexSDKType[];
    balances: IndexBalancesSDKType[];
    next_rebalancing_time: TimestampSDKType;
    next_interest_claim_time: TimestampSDKType;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalances {
    metokenSupply: Coin;
    assetBalances: AssetBalance[];
}
export interface IndexBalancesProtoMsg {
    typeUrl: "/umee.metoken.v1.IndexBalances";
    value: Uint8Array;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalancesAmino {
    metoken_supply?: CoinAmino;
    asset_balances?: AssetBalanceAmino[];
}
export interface IndexBalancesAminoMsg {
    type: "/umee.metoken.v1.IndexBalances";
    value: IndexBalancesAmino;
}
/** IndexBalances is the state of an Index, containing its meToken supply and all underlying asset balances. */
export interface IndexBalancesSDKType {
    metoken_supply: CoinSDKType;
    asset_balances: AssetBalanceSDKType[];
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalance {
    denom: string;
    leveraged: string;
    reserved: string;
    fees: string;
    interest: string;
}
export interface AssetBalanceProtoMsg {
    typeUrl: "/umee.metoken.v1.AssetBalance";
    value: Uint8Array;
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalanceAmino {
    denom?: string;
    leveraged?: string;
    reserved?: string;
    fees?: string;
    interest?: string;
}
export interface AssetBalanceAminoMsg {
    type: "/umee.metoken.v1.AssetBalance";
    value: AssetBalanceAmino;
}
/** AssetBalance tracks how much of a single asset is held in leverage, reserves, fees and interest account. */
export interface AssetBalanceSDKType {
    denom: string;
    leveraged: string;
    reserved: string;
    fees: string;
    interest: string;
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
export declare const IndexBalances: {
    typeUrl: string;
    encode(message: IndexBalances, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IndexBalances;
    fromPartial(object: Partial<IndexBalances>): IndexBalances;
    fromAmino(object: IndexBalancesAmino): IndexBalances;
    toAmino(message: IndexBalances): IndexBalancesAmino;
    fromAminoMsg(object: IndexBalancesAminoMsg): IndexBalances;
    fromProtoMsg(message: IndexBalancesProtoMsg): IndexBalances;
    toProto(message: IndexBalances): Uint8Array;
    toProtoMsg(message: IndexBalances): IndexBalancesProtoMsg;
};
export declare const AssetBalance: {
    typeUrl: string;
    encode(message: AssetBalance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetBalance;
    fromPartial(object: Partial<AssetBalance>): AssetBalance;
    fromAmino(object: AssetBalanceAmino): AssetBalance;
    toAmino(message: AssetBalance): AssetBalanceAmino;
    fromAminoMsg(object: AssetBalanceAminoMsg): AssetBalance;
    fromProtoMsg(message: AssetBalanceProtoMsg): AssetBalance;
    toProto(message: AssetBalance): Uint8Array;
    toProtoMsg(message: AssetBalance): AssetBalanceProtoMsg;
};
