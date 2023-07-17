import { Params, ParamsSDKType, Token, TokenSDKType } from "./leverage";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisState {
    params?: Params;
    registry: Token[];
    adjustedBorrows: AdjustedBorrow[];
    collateral: Collateral[];
    reserves: Coin[];
    lastInterestTime: Long;
    badDebts: BadDebt[];
    interestScalars: InterestScalar[];
    utokenSupply: Coin[];
}
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    registry: TokenSDKType[];
    adjusted_borrows: AdjustedBorrowSDKType[];
    collateral: CollateralSDKType[];
    reserves: CoinSDKType[];
    last_interest_time: Long;
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
    amount?: DecCoin;
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrowSDKType {
    address: string;
    amount?: DecCoinSDKType;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface Collateral {
    address: string;
    amount?: Coin;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface CollateralSDKType {
    address: string;
    amount?: CoinSDKType;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebt {
    address: string;
    denom: string;
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
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalarSDKType {
    denom: string;
    scalar: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const AdjustedBorrow: {
    encode(message: AdjustedBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AdjustedBorrow;
    fromPartial(object: Partial<AdjustedBorrow>): AdjustedBorrow;
};
export declare const Collateral: {
    encode(message: Collateral, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Collateral;
    fromPartial(object: Partial<Collateral>): Collateral;
};
export declare const BadDebt: {
    encode(message: BadDebt, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BadDebt;
    fromPartial(object: Partial<BadDebt>): BadDebt;
};
export declare const InterestScalar: {
    encode(message: InterestScalar, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InterestScalar;
    fromPartial(object: Partial<InterestScalar>): InterestScalar;
};
