import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /**
     * default_redemption_notice_period_duration defines the default minimum
     * notice period duration that must pass after an underwriter sends a
     * redemption request before the underwriter can claim his tokens
     */
    defaultRedemptionNoticePeriodDuration?: Duration;
}
export interface ParamsSDKType {
    default_redemption_notice_period_duration?: DurationSDKType;
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
    redemptionNoticePeriodDuration?: Duration;
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
    expiry: Long;
}
export interface InsuranceFundSDKType {
    deposit_denom: string;
    insurance_pool_token_denom: string;
    redemption_notice_period_duration?: DurationSDKType;
    balance: string;
    total_share: string;
    market_id: string;
    market_ticker: string;
    oracle_base: string;
    oracle_quote: string;
    oracle_type: OracleType;
    expiry: Long;
}
export interface RedemptionSchedule {
    /** id of redemption schedule */
    id: Long;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** address of the redeemer */
    redeemer: string;
    /** the time after which the redemption can be claimed */
    claimableRedemptionTime?: Timestamp;
    /** the insurance_pool_token amount to redeem */
    redemptionAmount?: Coin;
}
export interface RedemptionScheduleSDKType {
    id: Long;
    marketId: string;
    redeemer: string;
    claimable_redemption_time?: TimestampSDKType;
    redemption_amount?: CoinSDKType;
}
export interface EventInsuranceFundUpdate {
    fund?: InsuranceFund;
}
export interface EventInsuranceFundUpdateSDKType {
    fund?: InsuranceFundSDKType;
}
export interface EventRequestRedemption {
    schedule?: RedemptionSchedule;
}
export interface EventRequestRedemptionSDKType {
    schedule?: RedemptionScheduleSDKType;
}
export interface EventWithdrawRedemption {
    /** redemption schedule triggered withdraw */
    schedule?: RedemptionSchedule;
    /** redeem coin amount in base_currency */
    redeemCoin?: Coin;
}
export interface EventWithdrawRedemptionSDKType {
    schedule?: RedemptionScheduleSDKType;
    redeem_coin?: CoinSDKType;
}
export interface EventUnderwrite {
    /** address of the underwriter */
    underwriter: string;
    /** marketId of insurance fund for the redemption */
    marketId: string;
    /** deposit coin amount */
    deposit?: Coin;
    /** share coin amount */
    shares?: Coin;
}
export interface EventUnderwriteSDKType {
    underwriter: string;
    marketId: string;
    deposit?: CoinSDKType;
    shares?: CoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const InsuranceFund: {
    encode(message: InsuranceFund, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InsuranceFund;
    fromPartial(object: Partial<InsuranceFund>): InsuranceFund;
};
export declare const RedemptionSchedule: {
    encode(message: RedemptionSchedule, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RedemptionSchedule;
    fromPartial(object: Partial<RedemptionSchedule>): RedemptionSchedule;
};
export declare const EventInsuranceFundUpdate: {
    encode(message: EventInsuranceFundUpdate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventInsuranceFundUpdate;
    fromPartial(object: Partial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate;
};
export declare const EventRequestRedemption: {
    encode(message: EventRequestRedemption, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRequestRedemption;
    fromPartial(object: Partial<EventRequestRedemption>): EventRequestRedemption;
};
export declare const EventWithdrawRedemption: {
    encode(message: EventWithdrawRedemption, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdrawRedemption;
    fromPartial(object: Partial<EventWithdrawRedemption>): EventWithdrawRedemption;
};
export declare const EventUnderwrite: {
    encode(message: EventUnderwrite, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUnderwrite;
    fromPartial(object: Partial<EventUnderwrite>): EventUnderwrite;
};
