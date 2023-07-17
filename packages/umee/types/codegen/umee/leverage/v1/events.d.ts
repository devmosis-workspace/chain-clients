import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** EventSupply is emitted on Msg/Supply */
export interface EventSupply {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** Liquidity provided to the module. */
    asset?: Coin;
    /** uToken received by the supplier in exchange for the provided liquidity. */
    utoken?: Coin;
}
/** EventSupply is emitted on Msg/Supply */
export interface EventSupplySDKType {
    supplier: string;
    asset?: CoinSDKType;
    utoken?: CoinSDKType;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdraw {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** uToken sent to the module in exchange for the underlying asset. */
    utoken?: Coin;
    /** Liquidity received by the supplier. */
    asset?: Coin;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdrawSDKType {
    supplier: string;
    utoken?: CoinSDKType;
    asset?: CoinSDKType;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterize {
    /** Borrower bech32 address. */
    borrower: string;
    /** uToken provided as a collateral. */
    utoken?: Coin;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterizeSDKType {
    borrower: string;
    utoken?: CoinSDKType;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterize {
    /** Borrower bech32 address. */
    borrower: string;
    /** utoken removed from collateral. */
    utoken?: Coin;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterizeSDKType {
    borrower: string;
    utoken?: CoinSDKType;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrow {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset borrowed. */
    asset?: Coin;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrowSDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepay {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset repaid */
    repaid?: Coin;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepaySDKType {
    borrower: string;
    repaid?: CoinSDKType;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidate {
    /** Liquidator bech32 address. */
    liquidator: string;
    /** Borrower bech32 address. */
    borrower: string;
    /** Assets liquidated from the borrower */
    liquidated?: Coin;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidateSDKType {
    liquidator: string;
    borrower: string;
    liquidated?: CoinSDKType;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrual {
    blockHeight: Long;
    /** Unix timestamp (in seconds) */
    timestamp: Long;
    totalInterest: Coin[];
    reserved: Coin[];
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrualSDKType {
    block_height: Long;
    timestamp: Long;
    total_interest: CoinSDKType[];
    reserved: CoinSDKType[];
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebt {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset repaid */
    asset?: Coin;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebtSDKType {
    borrower: string;
    asset?: CoinSDKType;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhausted {
    /** Borrower bech32 address. */
    borrower: string;
    /** Outstanding bad debt */
    outstandingDebt?: Coin;
    /** Module balance remaining */
    moduleBalance?: Coin;
    /** Reserves remaining */
    reserves?: Coin;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhaustedSDKType {
    borrower: string;
    outstanding_debt?: CoinSDKType;
    module_balance?: CoinSDKType;
    reserves?: CoinSDKType;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracle {
    /** Assets sent to oracle module */
    assets: Coin[];
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracleSDKType {
    assets: CoinSDKType[];
}
export declare const EventSupply: {
    encode(message: EventSupply, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSupply;
    fromPartial(object: Partial<EventSupply>): EventSupply;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdraw;
    fromPartial(object: Partial<EventWithdraw>): EventWithdraw;
};
export declare const EventCollaterize: {
    encode(message: EventCollaterize, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCollaterize;
    fromPartial(object: Partial<EventCollaterize>): EventCollaterize;
};
export declare const EventDecollaterize: {
    encode(message: EventDecollaterize, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDecollaterize;
    fromPartial(object: Partial<EventDecollaterize>): EventDecollaterize;
};
export declare const EventBorrow: {
    encode(message: EventBorrow, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBorrow;
    fromPartial(object: Partial<EventBorrow>): EventBorrow;
};
export declare const EventRepay: {
    encode(message: EventRepay, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRepay;
    fromPartial(object: Partial<EventRepay>): EventRepay;
};
export declare const EventLiquidate: {
    encode(message: EventLiquidate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventLiquidate;
    fromPartial(object: Partial<EventLiquidate>): EventLiquidate;
};
export declare const EventInterestAccrual: {
    encode(message: EventInterestAccrual, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventInterestAccrual;
    fromPartial(object: Partial<EventInterestAccrual>): EventInterestAccrual;
};
export declare const EventRepayBadDebt: {
    encode(message: EventRepayBadDebt, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRepayBadDebt;
    fromPartial(object: Partial<EventRepayBadDebt>): EventRepayBadDebt;
};
export declare const EventReservesExhausted: {
    encode(message: EventReservesExhausted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventReservesExhausted;
    fromPartial(object: Partial<EventReservesExhausted>): EventReservesExhausted;
};
export declare const EventFundOracle: {
    encode(message: EventFundOracle, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventFundOracle;
    fromPartial(object: Partial<EventFundOracle>): EventFundOracle;
};
