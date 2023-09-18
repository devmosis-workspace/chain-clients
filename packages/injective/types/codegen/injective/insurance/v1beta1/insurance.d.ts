import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Params {
    /**
     * default_redemption_notice_period_duration defines the default minimum
     * notice period duration that must pass after an underwriter sends a
     * redemption request before the underwriter can claim his tokens
     */
    defaultRedemptionNoticePeriodDuration: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * default_redemption_notice_period_duration defines the default minimum
     * notice period duration that must pass after an underwriter sends a
     * redemption request before the underwriter can claim his tokens
     */
    default_redemption_notice_period_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "/injective.insurance.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    default_redemption_notice_period_duration: DurationSDKType;
}
export interface InsuranceFund {
    /** deposit denomination for the given insurance fund */
    depositDenom: string;
    /** insurance fund pool token denomination for the given insurance fund */
    insurancePoolTokenDenom: string;
    /**
     * redemption_notice_period_duration defines the minimum notice period
     * duration that must pass after an underwriter sends a redemption request
     * before the underwriter can claim his tokens
     */
    redemptionNoticePeriodDuration: Duration;
    /** balance of fund */
    balance: string;
    /** total share tokens minted */
    totalShare: string;
    /** marketID of the derivative market */
    marketId: string;
    /** ticker of the derivative market */
    marketTicker: string;
    /**
     * Oracle base currency of the derivative market OR the oracle symbol for the
     * binary options market.
     */
    oracleBase: string;
    /**
     * Oracle quote currency of the derivative market OR the oracle provider for
     * the binary options market.
     */
    oracleQuote: string;
    /** Oracle type of the binary options or derivative market */
    oracleType: OracleType;
    /**
     * Expiration time of the derivative market. Should be -1 for perpetual or -2
     * for binary options markets.
     */
    expiry: bigint;
}
export interface InsuranceFundProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.InsuranceFund";
    value: Uint8Array;
}
export interface InsuranceFundAmino {
    /** deposit denomination for the given insurance fund */
    deposit_denom: string;
    /** insurance fund pool token denomination for the given insurance fund */
    insurance_pool_token_denom: string;
    /**
     * redemption_notice_period_duration defines the minimum notice period
     * duration that must pass after an underwriter sends a redemption request
     * before the underwriter can claim his tokens
     */
    redemption_notice_period_duration?: DurationAmino;
    /** balance of fund */
    balance: string;
    /** total share tokens minted */
    total_share: string;
    /** marketID of the derivative market */
    market_id: string;
    /** ticker of the derivative market */
    market_ticker: string;
    /**
     * Oracle base currency of the derivative market OR the oracle symbol for the
     * binary options market.
     */
    oracle_base: string;
    /**
     * Oracle quote currency of the derivative market OR the oracle provider for
     * the binary options market.
     */
    oracle_quote: string;
    /** Oracle type of the binary options or derivative market */
    oracle_type: OracleType;
    /**
     * Expiration time of the derivative market. Should be -1 for perpetual or -2
     * for binary options markets.
     */
    expiry: string;
}
export interface InsuranceFundAminoMsg {
    type: "/injective.insurance.v1beta1.InsuranceFund";
    value: InsuranceFundAmino;
}
export interface InsuranceFundSDKType {
    deposit_denom: string;
    insurance_pool_token_denom: string;
    redemption_notice_period_duration: DurationSDKType;
    balance: string;
    total_share: string;
    market_id: string;
    market_ticker: string;
    oracle_base: string;
    oracle_quote: string;
    oracle_type: OracleType;
    expiry: bigint;
}
export interface RedemptionSchedule {
    /** id of redemption schedule */
    id: bigint;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** address of the redeemer */
    redeemer: string;
    /** the time after which the redemption can be claimed */
    claimableRedemptionTime: Timestamp;
    /** the insurance_pool_token amount to redeem */
    redemptionAmount: Coin;
}
export interface RedemptionScheduleProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule";
    value: Uint8Array;
}
export interface RedemptionScheduleAmino {
    /** id of redemption schedule */
    id: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** address of the redeemer */
    redeemer: string;
    /** the time after which the redemption can be claimed */
    claimable_redemption_time?: TimestampAmino;
    /** the insurance_pool_token amount to redeem */
    redemption_amount?: CoinAmino;
}
export interface RedemptionScheduleAminoMsg {
    type: "/injective.insurance.v1beta1.RedemptionSchedule";
    value: RedemptionScheduleAmino;
}
export interface RedemptionScheduleSDKType {
    id: bigint;
    marketId: string;
    redeemer: string;
    claimable_redemption_time: TimestampSDKType;
    redemption_amount: CoinSDKType;
}
export interface EventInsuranceFundUpdate {
    fund: InsuranceFund;
}
export interface EventInsuranceFundUpdateProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
    value: Uint8Array;
}
export interface EventInsuranceFundUpdateAmino {
    fund?: InsuranceFundAmino;
}
export interface EventInsuranceFundUpdateAminoMsg {
    type: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
    value: EventInsuranceFundUpdateAmino;
}
export interface EventInsuranceFundUpdateSDKType {
    fund: InsuranceFundSDKType;
}
export interface EventRequestRedemption {
    schedule: RedemptionSchedule;
}
export interface EventRequestRedemptionProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption";
    value: Uint8Array;
}
export interface EventRequestRedemptionAmino {
    schedule?: RedemptionScheduleAmino;
}
export interface EventRequestRedemptionAminoMsg {
    type: "/injective.insurance.v1beta1.EventRequestRedemption";
    value: EventRequestRedemptionAmino;
}
export interface EventRequestRedemptionSDKType {
    schedule: RedemptionScheduleSDKType;
}
export interface EventWithdrawRedemption {
    /** redemption schedule triggered withdraw */
    schedule: RedemptionSchedule;
    /** redeem coin amount in base_currency */
    redeemCoin: Coin;
}
export interface EventWithdrawRedemptionProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption";
    value: Uint8Array;
}
export interface EventWithdrawRedemptionAmino {
    /** redemption schedule triggered withdraw */
    schedule?: RedemptionScheduleAmino;
    /** redeem coin amount in base_currency */
    redeem_coin?: CoinAmino;
}
export interface EventWithdrawRedemptionAminoMsg {
    type: "/injective.insurance.v1beta1.EventWithdrawRedemption";
    value: EventWithdrawRedemptionAmino;
}
export interface EventWithdrawRedemptionSDKType {
    schedule: RedemptionScheduleSDKType;
    redeem_coin: CoinSDKType;
}
export interface EventUnderwrite {
    /** address of the underwriter */
    underwriter: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** deposit coin amount */
    deposit: Coin;
    /** share coin amount */
    shares: Coin;
}
export interface EventUnderwriteProtoMsg {
    typeUrl: "/injective.insurance.v1beta1.EventUnderwrite";
    value: Uint8Array;
}
export interface EventUnderwriteAmino {
    /** address of the underwriter */
    underwriter: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** deposit coin amount */
    deposit?: CoinAmino;
    /** share coin amount */
    shares?: CoinAmino;
}
export interface EventUnderwriteAminoMsg {
    type: "/injective.insurance.v1beta1.EventUnderwrite";
    value: EventUnderwriteAmino;
}
export interface EventUnderwriteSDKType {
    underwriter: string;
    marketId: string;
    deposit: CoinSDKType;
    shares: CoinSDKType;
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
export declare const InsuranceFund: {
    typeUrl: string;
    encode(message: InsuranceFund, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InsuranceFund;
    fromPartial(object: Partial<InsuranceFund>): InsuranceFund;
    fromAmino(object: InsuranceFundAmino): InsuranceFund;
    toAmino(message: InsuranceFund): InsuranceFundAmino;
    fromAminoMsg(object: InsuranceFundAminoMsg): InsuranceFund;
    fromProtoMsg(message: InsuranceFundProtoMsg): InsuranceFund;
    toProto(message: InsuranceFund): Uint8Array;
    toProtoMsg(message: InsuranceFund): InsuranceFundProtoMsg;
};
export declare const RedemptionSchedule: {
    typeUrl: string;
    encode(message: RedemptionSchedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RedemptionSchedule;
    fromPartial(object: Partial<RedemptionSchedule>): RedemptionSchedule;
    fromAmino(object: RedemptionScheduleAmino): RedemptionSchedule;
    toAmino(message: RedemptionSchedule): RedemptionScheduleAmino;
    fromAminoMsg(object: RedemptionScheduleAminoMsg): RedemptionSchedule;
    fromProtoMsg(message: RedemptionScheduleProtoMsg): RedemptionSchedule;
    toProto(message: RedemptionSchedule): Uint8Array;
    toProtoMsg(message: RedemptionSchedule): RedemptionScheduleProtoMsg;
};
export declare const EventInsuranceFundUpdate: {
    typeUrl: string;
    encode(message: EventInsuranceFundUpdate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventInsuranceFundUpdate;
    fromPartial(object: Partial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate;
    fromAmino(object: EventInsuranceFundUpdateAmino): EventInsuranceFundUpdate;
    toAmino(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateAmino;
    fromAminoMsg(object: EventInsuranceFundUpdateAminoMsg): EventInsuranceFundUpdate;
    fromProtoMsg(message: EventInsuranceFundUpdateProtoMsg): EventInsuranceFundUpdate;
    toProto(message: EventInsuranceFundUpdate): Uint8Array;
    toProtoMsg(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateProtoMsg;
};
export declare const EventRequestRedemption: {
    typeUrl: string;
    encode(message: EventRequestRedemption, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRequestRedemption;
    fromPartial(object: Partial<EventRequestRedemption>): EventRequestRedemption;
    fromAmino(object: EventRequestRedemptionAmino): EventRequestRedemption;
    toAmino(message: EventRequestRedemption): EventRequestRedemptionAmino;
    fromAminoMsg(object: EventRequestRedemptionAminoMsg): EventRequestRedemption;
    fromProtoMsg(message: EventRequestRedemptionProtoMsg): EventRequestRedemption;
    toProto(message: EventRequestRedemption): Uint8Array;
    toProtoMsg(message: EventRequestRedemption): EventRequestRedemptionProtoMsg;
};
export declare const EventWithdrawRedemption: {
    typeUrl: string;
    encode(message: EventWithdrawRedemption, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdrawRedemption;
    fromPartial(object: Partial<EventWithdrawRedemption>): EventWithdrawRedemption;
    fromAmino(object: EventWithdrawRedemptionAmino): EventWithdrawRedemption;
    toAmino(message: EventWithdrawRedemption): EventWithdrawRedemptionAmino;
    fromAminoMsg(object: EventWithdrawRedemptionAminoMsg): EventWithdrawRedemption;
    fromProtoMsg(message: EventWithdrawRedemptionProtoMsg): EventWithdrawRedemption;
    toProto(message: EventWithdrawRedemption): Uint8Array;
    toProtoMsg(message: EventWithdrawRedemption): EventWithdrawRedemptionProtoMsg;
};
export declare const EventUnderwrite: {
    typeUrl: string;
    encode(message: EventUnderwrite, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUnderwrite;
    fromPartial(object: Partial<EventUnderwrite>): EventUnderwrite;
    fromAmino(object: EventUnderwriteAmino): EventUnderwrite;
    toAmino(message: EventUnderwrite): EventUnderwriteAmino;
    fromAminoMsg(object: EventUnderwriteAminoMsg): EventUnderwrite;
    fromProtoMsg(message: EventUnderwriteProtoMsg): EventUnderwrite;
    toProto(message: EventUnderwrite): Uint8Array;
    toProtoMsg(message: EventUnderwrite): EventUnderwriteProtoMsg;
};
