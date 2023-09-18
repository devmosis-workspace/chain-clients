import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** EventSupply is emitted on Msg/Supply */
export interface EventSupply {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** Liquidity provided to the module. */
    asset: Coin;
    /** uToken received by the supplier in exchange for the provided liquidity. */
    utoken: Coin;
}
export interface EventSupplyProtoMsg {
    typeUrl: "/umee.leverage.v1.EventSupply";
    value: Uint8Array;
}
/** EventSupply is emitted on Msg/Supply */
export interface EventSupplyAmino {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** Liquidity provided to the module. */
    asset?: CoinAmino;
    /** uToken received by the supplier in exchange for the provided liquidity. */
    utoken?: CoinAmino;
}
export interface EventSupplyAminoMsg {
    type: "/umee.leverage.v1.EventSupply";
    value: EventSupplyAmino;
}
/** EventSupply is emitted on Msg/Supply */
export interface EventSupplySDKType {
    supplier: string;
    asset: CoinSDKType;
    utoken: CoinSDKType;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdraw {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** uToken sent to the module in exchange for the underlying asset. */
    utoken: Coin;
    /** Liquidity received by the supplier. */
    asset: Coin;
}
export interface EventWithdrawProtoMsg {
    typeUrl: "/umee.leverage.v1.EventWithdraw";
    value: Uint8Array;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdrawAmino {
    /** Liquidity supplier bech32 address. */
    supplier: string;
    /** uToken sent to the module in exchange for the underlying asset. */
    utoken?: CoinAmino;
    /** Liquidity received by the supplier. */
    asset?: CoinAmino;
}
export interface EventWithdrawAminoMsg {
    type: "/umee.leverage.v1.EventWithdraw";
    value: EventWithdrawAmino;
}
/** EventWithdraw is emitted on Msg/Withdraw */
export interface EventWithdrawSDKType {
    supplier: string;
    utoken: CoinSDKType;
    asset: CoinSDKType;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterize {
    /** Borrower bech32 address. */
    borrower: string;
    /** uToken provided as a collateral. */
    utoken: Coin;
}
export interface EventCollaterizeProtoMsg {
    typeUrl: "/umee.leverage.v1.EventCollaterize";
    value: Uint8Array;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterizeAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** uToken provided as a collateral. */
    utoken?: CoinAmino;
}
export interface EventCollaterizeAminoMsg {
    type: "/umee.leverage.v1.EventCollaterize";
    value: EventCollaterizeAmino;
}
/** EventCollaterize is emitted on Msg/Collaterize */
export interface EventCollaterizeSDKType {
    borrower: string;
    utoken: CoinSDKType;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterize {
    /** Borrower bech32 address. */
    borrower: string;
    /** utoken removed from collateral. */
    utoken: Coin;
}
export interface EventDecollaterizeProtoMsg {
    typeUrl: "/umee.leverage.v1.EventDecollaterize";
    value: Uint8Array;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterizeAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** utoken removed from collateral. */
    utoken?: CoinAmino;
}
export interface EventDecollaterizeAminoMsg {
    type: "/umee.leverage.v1.EventDecollaterize";
    value: EventDecollaterizeAmino;
}
/** EventDecollaterize is emitted on Msg/Decollateralize */
export interface EventDecollaterizeSDKType {
    borrower: string;
    utoken: CoinSDKType;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrow {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset borrowed. */
    asset: Coin;
}
export interface EventBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.EventBorrow";
    value: Uint8Array;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrowAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset borrowed. */
    asset?: CoinAmino;
}
export interface EventBorrowAminoMsg {
    type: "/umee.leverage.v1.EventBorrow";
    value: EventBorrowAmino;
}
/** EventBorrow is emitted on Msg/Borrow */
export interface EventBorrowSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepay {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset repaid */
    repaid: Coin;
}
export interface EventRepayProtoMsg {
    typeUrl: "/umee.leverage.v1.EventRepay";
    value: Uint8Array;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepayAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset repaid */
    repaid?: CoinAmino;
}
export interface EventRepayAminoMsg {
    type: "/umee.leverage.v1.EventRepay";
    value: EventRepayAmino;
}
/** EventRepay is emitted on Msg/Repay */
export interface EventRepaySDKType {
    borrower: string;
    repaid: CoinSDKType;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidate {
    /** Liquidator bech32 address. */
    liquidator: string;
    /** Borrower bech32 address. */
    borrower: string;
    /** Assets liquidated from the borrower */
    liquidated: Coin;
}
export interface EventLiquidateProtoMsg {
    typeUrl: "/umee.leverage.v1.EventLiquidate";
    value: Uint8Array;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidateAmino {
    /** Liquidator bech32 address. */
    liquidator: string;
    /** Borrower bech32 address. */
    borrower: string;
    /** Assets liquidated from the borrower */
    liquidated?: CoinAmino;
}
export interface EventLiquidateAminoMsg {
    type: "/umee.leverage.v1.EventLiquidate";
    value: EventLiquidateAmino;
}
/** EventLiquidate is emitted on Msg/Liquidate */
export interface EventLiquidateSDKType {
    liquidator: string;
    borrower: string;
    liquidated: CoinSDKType;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrual {
    blockHeight: bigint;
    /** Unix timestamp (in seconds) */
    timestamp: bigint;
    totalInterest: Coin[];
    reserved: Coin[];
}
export interface EventInterestAccrualProtoMsg {
    typeUrl: "/umee.leverage.v1.EventInterestAccrual";
    value: Uint8Array;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrualAmino {
    block_height: string;
    /** Unix timestamp (in seconds) */
    timestamp: string;
    total_interest: CoinAmino[];
    reserved: CoinAmino[];
}
export interface EventInterestAccrualAminoMsg {
    type: "/umee.leverage.v1.EventInterestAccrual";
    value: EventInterestAccrualAmino;
}
/** EventInterestAccrual is emitted when interest accrues in EndBlock */
export interface EventInterestAccrualSDKType {
    block_height: bigint;
    timestamp: bigint;
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
    asset: Coin;
}
export interface EventRepayBadDebtProtoMsg {
    typeUrl: "/umee.leverage.v1.EventRepayBadDebt";
    value: Uint8Array;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebtAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** Asset repaid */
    asset?: CoinAmino;
}
export interface EventRepayBadDebtAminoMsg {
    type: "/umee.leverage.v1.EventRepayBadDebt";
    value: EventRepayBadDebtAmino;
}
/**
 * EventRepayBadDebt is emitted when bad debt is detected and repayed
 * (potentially partially)
 */
export interface EventRepayBadDebtSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhausted {
    /** Borrower bech32 address. */
    borrower: string;
    /** Outstanding bad debt */
    outstandingDebt: Coin;
    /** Module balance remaining */
    moduleBalance: Coin;
    /** Reserves remaining */
    reserves: Coin;
}
export interface EventReservesExhaustedProtoMsg {
    typeUrl: "/umee.leverage.v1.EventReservesExhausted";
    value: Uint8Array;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhaustedAmino {
    /** Borrower bech32 address. */
    borrower: string;
    /** Outstanding bad debt */
    outstanding_debt?: CoinAmino;
    /** Module balance remaining */
    module_balance?: CoinAmino;
    /** Reserves remaining */
    reserves?: CoinAmino;
}
export interface EventReservesExhaustedAminoMsg {
    type: "/umee.leverage.v1.EventReservesExhausted";
    value: EventReservesExhaustedAmino;
}
/**
 * EventReservesExhausted is emitted when the module reserves are exhausted
 * by paying off bad debts.
 */
export interface EventReservesExhaustedSDKType {
    borrower: string;
    outstanding_debt: CoinSDKType;
    module_balance: CoinSDKType;
    reserves: CoinSDKType;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracle {
    /** Assets sent to oracle module */
    assets: Coin[];
}
export interface EventFundOracleProtoMsg {
    typeUrl: "/umee.leverage.v1.EventFundOracle";
    value: Uint8Array;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracleAmino {
    /** Assets sent to oracle module */
    assets: CoinAmino[];
}
export interface EventFundOracleAminoMsg {
    type: "/umee.leverage.v1.EventFundOracle";
    value: EventFundOracleAmino;
}
/** EventFundOracle is emitted when sending rewards to oracle module */
export interface EventFundOracleSDKType {
    assets: CoinSDKType[];
}
export declare const EventSupply: {
    typeUrl: string;
    encode(message: EventSupply, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSupply;
    fromPartial(object: Partial<EventSupply>): EventSupply;
    fromAmino(object: EventSupplyAmino): EventSupply;
    toAmino(message: EventSupply): EventSupplyAmino;
    fromAminoMsg(object: EventSupplyAminoMsg): EventSupply;
    fromProtoMsg(message: EventSupplyProtoMsg): EventSupply;
    toProto(message: EventSupply): Uint8Array;
    toProtoMsg(message: EventSupply): EventSupplyProtoMsg;
};
export declare const EventWithdraw: {
    typeUrl: string;
    encode(message: EventWithdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdraw;
    fromPartial(object: Partial<EventWithdraw>): EventWithdraw;
    fromAmino(object: EventWithdrawAmino): EventWithdraw;
    toAmino(message: EventWithdraw): EventWithdrawAmino;
    fromAminoMsg(object: EventWithdrawAminoMsg): EventWithdraw;
    fromProtoMsg(message: EventWithdrawProtoMsg): EventWithdraw;
    toProto(message: EventWithdraw): Uint8Array;
    toProtoMsg(message: EventWithdraw): EventWithdrawProtoMsg;
};
export declare const EventCollaterize: {
    typeUrl: string;
    encode(message: EventCollaterize, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCollaterize;
    fromPartial(object: Partial<EventCollaterize>): EventCollaterize;
    fromAmino(object: EventCollaterizeAmino): EventCollaterize;
    toAmino(message: EventCollaterize): EventCollaterizeAmino;
    fromAminoMsg(object: EventCollaterizeAminoMsg): EventCollaterize;
    fromProtoMsg(message: EventCollaterizeProtoMsg): EventCollaterize;
    toProto(message: EventCollaterize): Uint8Array;
    toProtoMsg(message: EventCollaterize): EventCollaterizeProtoMsg;
};
export declare const EventDecollaterize: {
    typeUrl: string;
    encode(message: EventDecollaterize, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDecollaterize;
    fromPartial(object: Partial<EventDecollaterize>): EventDecollaterize;
    fromAmino(object: EventDecollaterizeAmino): EventDecollaterize;
    toAmino(message: EventDecollaterize): EventDecollaterizeAmino;
    fromAminoMsg(object: EventDecollaterizeAminoMsg): EventDecollaterize;
    fromProtoMsg(message: EventDecollaterizeProtoMsg): EventDecollaterize;
    toProto(message: EventDecollaterize): Uint8Array;
    toProtoMsg(message: EventDecollaterize): EventDecollaterizeProtoMsg;
};
export declare const EventBorrow: {
    typeUrl: string;
    encode(message: EventBorrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBorrow;
    fromPartial(object: Partial<EventBorrow>): EventBorrow;
    fromAmino(object: EventBorrowAmino): EventBorrow;
    toAmino(message: EventBorrow): EventBorrowAmino;
    fromAminoMsg(object: EventBorrowAminoMsg): EventBorrow;
    fromProtoMsg(message: EventBorrowProtoMsg): EventBorrow;
    toProto(message: EventBorrow): Uint8Array;
    toProtoMsg(message: EventBorrow): EventBorrowProtoMsg;
};
export declare const EventRepay: {
    typeUrl: string;
    encode(message: EventRepay, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRepay;
    fromPartial(object: Partial<EventRepay>): EventRepay;
    fromAmino(object: EventRepayAmino): EventRepay;
    toAmino(message: EventRepay): EventRepayAmino;
    fromAminoMsg(object: EventRepayAminoMsg): EventRepay;
    fromProtoMsg(message: EventRepayProtoMsg): EventRepay;
    toProto(message: EventRepay): Uint8Array;
    toProtoMsg(message: EventRepay): EventRepayProtoMsg;
};
export declare const EventLiquidate: {
    typeUrl: string;
    encode(message: EventLiquidate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventLiquidate;
    fromPartial(object: Partial<EventLiquidate>): EventLiquidate;
    fromAmino(object: EventLiquidateAmino): EventLiquidate;
    toAmino(message: EventLiquidate): EventLiquidateAmino;
    fromAminoMsg(object: EventLiquidateAminoMsg): EventLiquidate;
    fromProtoMsg(message: EventLiquidateProtoMsg): EventLiquidate;
    toProto(message: EventLiquidate): Uint8Array;
    toProtoMsg(message: EventLiquidate): EventLiquidateProtoMsg;
};
export declare const EventInterestAccrual: {
    typeUrl: string;
    encode(message: EventInterestAccrual, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventInterestAccrual;
    fromPartial(object: Partial<EventInterestAccrual>): EventInterestAccrual;
    fromAmino(object: EventInterestAccrualAmino): EventInterestAccrual;
    toAmino(message: EventInterestAccrual): EventInterestAccrualAmino;
    fromAminoMsg(object: EventInterestAccrualAminoMsg): EventInterestAccrual;
    fromProtoMsg(message: EventInterestAccrualProtoMsg): EventInterestAccrual;
    toProto(message: EventInterestAccrual): Uint8Array;
    toProtoMsg(message: EventInterestAccrual): EventInterestAccrualProtoMsg;
};
export declare const EventRepayBadDebt: {
    typeUrl: string;
    encode(message: EventRepayBadDebt, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRepayBadDebt;
    fromPartial(object: Partial<EventRepayBadDebt>): EventRepayBadDebt;
    fromAmino(object: EventRepayBadDebtAmino): EventRepayBadDebt;
    toAmino(message: EventRepayBadDebt): EventRepayBadDebtAmino;
    fromAminoMsg(object: EventRepayBadDebtAminoMsg): EventRepayBadDebt;
    fromProtoMsg(message: EventRepayBadDebtProtoMsg): EventRepayBadDebt;
    toProto(message: EventRepayBadDebt): Uint8Array;
    toProtoMsg(message: EventRepayBadDebt): EventRepayBadDebtProtoMsg;
};
export declare const EventReservesExhausted: {
    typeUrl: string;
    encode(message: EventReservesExhausted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventReservesExhausted;
    fromPartial(object: Partial<EventReservesExhausted>): EventReservesExhausted;
    fromAmino(object: EventReservesExhaustedAmino): EventReservesExhausted;
    toAmino(message: EventReservesExhausted): EventReservesExhaustedAmino;
    fromAminoMsg(object: EventReservesExhaustedAminoMsg): EventReservesExhausted;
    fromProtoMsg(message: EventReservesExhaustedProtoMsg): EventReservesExhausted;
    toProto(message: EventReservesExhausted): Uint8Array;
    toProtoMsg(message: EventReservesExhausted): EventReservesExhaustedProtoMsg;
};
export declare const EventFundOracle: {
    typeUrl: string;
    encode(message: EventFundOracle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventFundOracle;
    fromPartial(object: Partial<EventFundOracle>): EventFundOracle;
    fromAmino(object: EventFundOracleAmino): EventFundOracle;
    toAmino(message: EventFundOracle): EventFundOracleAmino;
    fromAminoMsg(object: EventFundOracleAminoMsg): EventFundOracle;
    fromProtoMsg(message: EventFundOracleProtoMsg): EventFundOracle;
    toProto(message: EventFundOracle): Uint8Array;
    toProtoMsg(message: EventFundOracle): EventFundOracleProtoMsg;
};
