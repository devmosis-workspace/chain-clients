import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisState {
    params: Params;
    registry: Token[];
    adjustedBorrows: AdjustedBorrow[];
    collateral: Collateral[];
    reserves: Coin[];
    lastInterestTime: bigint;
    badDebts: BadDebt[];
    interestScalars: InterestScalar[];
    utokenSupply: Coin[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/umee.leverage.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    registry: TokenAmino[];
    adjusted_borrows: AdjustedBorrowAmino[];
    collateral: CollateralAmino[];
    reserves: CoinAmino[];
    last_interest_time: string;
    bad_debts: BadDebtAmino[];
    interest_scalars: InterestScalarAmino[];
    utoken_supply: CoinAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/umee.leverage.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    registry: TokenSDKType[];
    adjusted_borrows: AdjustedBorrowSDKType[];
    collateral: CollateralSDKType[];
    reserves: CoinSDKType[];
    last_interest_time: bigint;
    bad_debts: BadDebtSDKType[];
    interest_scalars: InterestScalarSDKType[];
    utoken_supply: CoinSDKType[];
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrow {
    address: string;
    amount: DecCoin;
}
export interface AdjustedBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.AdjustedBorrow";
    value: Uint8Array;
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrowAmino {
    address: string;
    amount?: DecCoinAmino;
}
export interface AdjustedBorrowAminoMsg {
    type: "/umee.leverage.v1.AdjustedBorrow";
    value: AdjustedBorrowAmino;
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrowSDKType {
    address: string;
    amount: DecCoinSDKType;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface Collateral {
    address: string;
    amount: Coin;
}
export interface CollateralProtoMsg {
    typeUrl: "/umee.leverage.v1.Collateral";
    value: Uint8Array;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface CollateralAmino {
    address: string;
    amount?: CoinAmino;
}
export interface CollateralAminoMsg {
    type: "/umee.leverage.v1.Collateral";
    value: CollateralAmino;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface CollateralSDKType {
    address: string;
    amount: CoinSDKType;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebt {
    address: string;
    denom: string;
}
export interface BadDebtProtoMsg {
    typeUrl: "/umee.leverage.v1.BadDebt";
    value: Uint8Array;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebtAmino {
    address: string;
    denom: string;
}
export interface BadDebtAminoMsg {
    type: "/umee.leverage.v1.BadDebt";
    value: BadDebtAmino;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebtSDKType {
    address: string;
    denom: string;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalar {
    denom: string;
    scalar: string;
}
export interface InterestScalarProtoMsg {
    typeUrl: "/umee.leverage.v1.InterestScalar";
    value: Uint8Array;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalarAmino {
    denom: string;
    scalar: string;
}
export interface InterestScalarAminoMsg {
    type: "/umee.leverage.v1.InterestScalar";
    value: InterestScalarAmino;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalarSDKType {
    denom: string;
    scalar: string;
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
export declare const AdjustedBorrow: {
    typeUrl: string;
    encode(message: AdjustedBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AdjustedBorrow;
    fromPartial(object: Partial<AdjustedBorrow>): AdjustedBorrow;
    fromAmino(object: AdjustedBorrowAmino): AdjustedBorrow;
    toAmino(message: AdjustedBorrow): AdjustedBorrowAmino;
    fromAminoMsg(object: AdjustedBorrowAminoMsg): AdjustedBorrow;
    fromProtoMsg(message: AdjustedBorrowProtoMsg): AdjustedBorrow;
    toProto(message: AdjustedBorrow): Uint8Array;
    toProtoMsg(message: AdjustedBorrow): AdjustedBorrowProtoMsg;
};
export declare const Collateral: {
    typeUrl: string;
    encode(message: Collateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Collateral;
    fromPartial(object: Partial<Collateral>): Collateral;
    fromAmino(object: CollateralAmino): Collateral;
    toAmino(message: Collateral): CollateralAmino;
    fromAminoMsg(object: CollateralAminoMsg): Collateral;
    fromProtoMsg(message: CollateralProtoMsg): Collateral;
    toProto(message: Collateral): Uint8Array;
    toProtoMsg(message: Collateral): CollateralProtoMsg;
};
export declare const BadDebt: {
    typeUrl: string;
    encode(message: BadDebt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BadDebt;
    fromPartial(object: Partial<BadDebt>): BadDebt;
    fromAmino(object: BadDebtAmino): BadDebt;
    toAmino(message: BadDebt): BadDebtAmino;
    fromAminoMsg(object: BadDebtAminoMsg): BadDebt;
    fromProtoMsg(message: BadDebtProtoMsg): BadDebt;
    toProto(message: BadDebt): Uint8Array;
    toProtoMsg(message: BadDebt): BadDebtProtoMsg;
};
export declare const InterestScalar: {
    typeUrl: string;
    encode(message: InterestScalar, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InterestScalar;
    fromPartial(object: Partial<InterestScalar>): InterestScalar;
    fromAmino(object: InterestScalarAmino): InterestScalar;
    toAmino(message: InterestScalar): InterestScalarAmino;
    fromAminoMsg(object: InterestScalarAminoMsg): InterestScalar;
    fromProtoMsg(message: InterestScalarProtoMsg): InterestScalar;
    toProto(message: InterestScalar): Uint8Array;
    toProtoMsg(message: InterestScalar): InterestScalarProtoMsg;
};
