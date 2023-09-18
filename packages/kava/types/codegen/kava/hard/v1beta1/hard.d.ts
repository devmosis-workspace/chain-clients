import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the hard module. */
export interface Params {
    moneyMarkets: MoneyMarket[];
    minimumBorrowUsdValue: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kava.hard.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the hard module. */
export interface ParamsAmino {
    money_markets: MoneyMarketAmino[];
    minimum_borrow_usd_value: string;
}
export interface ParamsAminoMsg {
    type: "/kava.hard.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the hard module. */
export interface ParamsSDKType {
    money_markets: MoneyMarketSDKType[];
    minimum_borrow_usd_value: string;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarket {
    denom: string;
    borrowLimit: BorrowLimit;
    spotMarketId: string;
    conversionFactor: string;
    interestRateModel: InterestRateModel;
    reserveFactor: string;
    keeperRewardPercentage: string;
}
export interface MoneyMarketProtoMsg {
    typeUrl: "/kava.hard.v1beta1.MoneyMarket";
    value: Uint8Array;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarketAmino {
    denom: string;
    borrow_limit?: BorrowLimitAmino;
    spot_market_id: string;
    conversion_factor: string;
    interest_rate_model?: InterestRateModelAmino;
    reserve_factor: string;
    keeper_reward_percentage: string;
}
export interface MoneyMarketAminoMsg {
    type: "/kava.hard.v1beta1.MoneyMarket";
    value: MoneyMarketAmino;
}
/** MoneyMarket is a money market for an individual asset. */
export interface MoneyMarketSDKType {
    denom: string;
    borrow_limit: BorrowLimitSDKType;
    spot_market_id: string;
    conversion_factor: string;
    interest_rate_model: InterestRateModelSDKType;
    reserve_factor: string;
    keeper_reward_percentage: string;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimit {
    hasMaxLimit: boolean;
    maximumLimit: string;
    loanToValue: string;
}
export interface BorrowLimitProtoMsg {
    typeUrl: "/kava.hard.v1beta1.BorrowLimit";
    value: Uint8Array;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimitAmino {
    has_max_limit: boolean;
    maximum_limit: string;
    loan_to_value: string;
}
export interface BorrowLimitAminoMsg {
    type: "/kava.hard.v1beta1.BorrowLimit";
    value: BorrowLimitAmino;
}
/** BorrowLimit enforces restrictions on a money market. */
export interface BorrowLimitSDKType {
    has_max_limit: boolean;
    maximum_limit: string;
    loan_to_value: string;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModel {
    baseRateApy: string;
    baseMultiplier: string;
    kink: string;
    jumpMultiplier: string;
}
export interface InterestRateModelProtoMsg {
    typeUrl: "/kava.hard.v1beta1.InterestRateModel";
    value: Uint8Array;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModelAmino {
    base_rate_apy: string;
    base_multiplier: string;
    kink: string;
    jump_multiplier: string;
}
export interface InterestRateModelAminoMsg {
    type: "/kava.hard.v1beta1.InterestRateModel";
    value: InterestRateModelAmino;
}
/** InterestRateModel contains information about an asset's interest rate. */
export interface InterestRateModelSDKType {
    base_rate_apy: string;
    base_multiplier: string;
    kink: string;
    jump_multiplier: string;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface Deposit {
    depositor: string;
    amount: Coin[];
    index: SupplyInterestFactor[];
}
export interface DepositProtoMsg {
    typeUrl: "/kava.hard.v1beta1.Deposit";
    value: Uint8Array;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface DepositAmino {
    depositor: string;
    amount: CoinAmino[];
    index: SupplyInterestFactorAmino[];
}
export interface DepositAminoMsg {
    type: "/kava.hard.v1beta1.Deposit";
    value: DepositAmino;
}
/** Deposit defines an amount of coins deposited into a hard module account. */
export interface DepositSDKType {
    depositor: string;
    amount: CoinSDKType[];
    index: SupplyInterestFactorSDKType[];
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface Borrow {
    borrower: string;
    amount: Coin[];
    index: BorrowInterestFactor[];
}
export interface BorrowProtoMsg {
    typeUrl: "/kava.hard.v1beta1.Borrow";
    value: Uint8Array;
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface BorrowAmino {
    borrower: string;
    amount: CoinAmino[];
    index: BorrowInterestFactorAmino[];
}
export interface BorrowAminoMsg {
    type: "/kava.hard.v1beta1.Borrow";
    value: BorrowAmino;
}
/** Borrow defines an amount of coins borrowed from a hard module account. */
export interface BorrowSDKType {
    borrower: string;
    amount: CoinSDKType[];
    index: BorrowInterestFactorSDKType[];
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactor {
    denom: string;
    value: string;
}
export interface SupplyInterestFactorProtoMsg {
    typeUrl: "/kava.hard.v1beta1.SupplyInterestFactor";
    value: Uint8Array;
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactorAmino {
    denom: string;
    value: string;
}
export interface SupplyInterestFactorAminoMsg {
    type: "/kava.hard.v1beta1.SupplyInterestFactor";
    value: SupplyInterestFactorAmino;
}
/** SupplyInterestFactor defines an individual borrow interest factor. */
export interface SupplyInterestFactorSDKType {
    denom: string;
    value: string;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactor {
    denom: string;
    value: string;
}
export interface BorrowInterestFactorProtoMsg {
    typeUrl: "/kava.hard.v1beta1.BorrowInterestFactor";
    value: Uint8Array;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactorAmino {
    denom: string;
    value: string;
}
export interface BorrowInterestFactorAminoMsg {
    type: "/kava.hard.v1beta1.BorrowInterestFactor";
    value: BorrowInterestFactorAmino;
}
/** BorrowInterestFactor defines an individual borrow interest factor. */
export interface BorrowInterestFactorSDKType {
    denom: string;
    value: string;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProto {
    coins: Coin[];
}
export interface CoinsProtoProtoMsg {
    typeUrl: "/kava.hard.v1beta1.CoinsProto";
    value: Uint8Array;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProtoAmino {
    coins: CoinAmino[];
}
export interface CoinsProtoAminoMsg {
    type: "/kava.hard.v1beta1.CoinsProto";
    value: CoinsProtoAmino;
}
/** CoinsProto defines a Protobuf wrapper around a Coins slice */
export interface CoinsProtoSDKType {
    coins: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const MoneyMarket: {
    typeUrl: string;
    encode(message: MoneyMarket, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MoneyMarket;
    fromPartial(object: Partial<MoneyMarket>): MoneyMarket;
    fromAmino(object: MoneyMarketAmino): MoneyMarket;
    toAmino(message: MoneyMarket): MoneyMarketAmino;
    fromAminoMsg(object: MoneyMarketAminoMsg): MoneyMarket;
    fromProtoMsg(message: MoneyMarketProtoMsg): MoneyMarket;
    toProto(message: MoneyMarket): Uint8Array;
    toProtoMsg(message: MoneyMarket): MoneyMarketProtoMsg;
};
export declare const BorrowLimit: {
    typeUrl: string;
    encode(message: BorrowLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BorrowLimit;
    fromPartial(object: Partial<BorrowLimit>): BorrowLimit;
    fromAmino(object: BorrowLimitAmino): BorrowLimit;
    toAmino(message: BorrowLimit): BorrowLimitAmino;
    fromAminoMsg(object: BorrowLimitAminoMsg): BorrowLimit;
    fromProtoMsg(message: BorrowLimitProtoMsg): BorrowLimit;
    toProto(message: BorrowLimit): Uint8Array;
    toProtoMsg(message: BorrowLimit): BorrowLimitProtoMsg;
};
export declare const InterestRateModel: {
    typeUrl: string;
    encode(message: InterestRateModel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InterestRateModel;
    fromPartial(object: Partial<InterestRateModel>): InterestRateModel;
    fromAmino(object: InterestRateModelAmino): InterestRateModel;
    toAmino(message: InterestRateModel): InterestRateModelAmino;
    fromAminoMsg(object: InterestRateModelAminoMsg): InterestRateModel;
    fromProtoMsg(message: InterestRateModelProtoMsg): InterestRateModel;
    toProto(message: InterestRateModel): Uint8Array;
    toProtoMsg(message: InterestRateModel): InterestRateModelProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    encode(message: Deposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
export declare const Borrow: {
    typeUrl: string;
    encode(message: Borrow, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Borrow;
    fromPartial(object: Partial<Borrow>): Borrow;
    fromAmino(object: BorrowAmino): Borrow;
    toAmino(message: Borrow): BorrowAmino;
    fromAminoMsg(object: BorrowAminoMsg): Borrow;
    fromProtoMsg(message: BorrowProtoMsg): Borrow;
    toProto(message: Borrow): Uint8Array;
    toProtoMsg(message: Borrow): BorrowProtoMsg;
};
export declare const SupplyInterestFactor: {
    typeUrl: string;
    encode(message: SupplyInterestFactor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SupplyInterestFactor;
    fromPartial(object: Partial<SupplyInterestFactor>): SupplyInterestFactor;
    fromAmino(object: SupplyInterestFactorAmino): SupplyInterestFactor;
    toAmino(message: SupplyInterestFactor): SupplyInterestFactorAmino;
    fromAminoMsg(object: SupplyInterestFactorAminoMsg): SupplyInterestFactor;
    fromProtoMsg(message: SupplyInterestFactorProtoMsg): SupplyInterestFactor;
    toProto(message: SupplyInterestFactor): Uint8Array;
    toProtoMsg(message: SupplyInterestFactor): SupplyInterestFactorProtoMsg;
};
export declare const BorrowInterestFactor: {
    typeUrl: string;
    encode(message: BorrowInterestFactor, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BorrowInterestFactor;
    fromPartial(object: Partial<BorrowInterestFactor>): BorrowInterestFactor;
    fromAmino(object: BorrowInterestFactorAmino): BorrowInterestFactor;
    toAmino(message: BorrowInterestFactor): BorrowInterestFactorAmino;
    fromAminoMsg(object: BorrowInterestFactorAminoMsg): BorrowInterestFactor;
    fromProtoMsg(message: BorrowInterestFactorProtoMsg): BorrowInterestFactor;
    toProto(message: BorrowInterestFactor): Uint8Array;
    toProtoMsg(message: BorrowInterestFactor): BorrowInterestFactorProtoMsg;
};
export declare const CoinsProto: {
    typeUrl: string;
    encode(message: CoinsProto, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoinsProto;
    fromPartial(object: Partial<CoinsProto>): CoinsProto;
    fromAmino(object: CoinsProtoAmino): CoinsProto;
    toAmino(message: CoinsProto): CoinsProtoAmino;
    fromAminoMsg(object: CoinsProtoAminoMsg): CoinsProto;
    fromProtoMsg(message: CoinsProtoProtoMsg): CoinsProto;
    toProto(message: CoinsProto): Uint8Array;
    toProtoMsg(message: CoinsProto): CoinsProtoProtoMsg;
};
