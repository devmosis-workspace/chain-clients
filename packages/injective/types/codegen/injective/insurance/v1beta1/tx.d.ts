import { OracleType } from "../../oracle/v1beta1/oracle";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./insurance";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFund {
    /** Creator of the insurance fund. */
    sender: string;
    /** Ticker for the derivative market. */
    ticker: string;
    /** Coin denom to use for the market quote denom */
    quoteDenom: string;
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
    /** Initial deposit of the insurance fund */
    initialDeposit?: Coin;
}
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFundSDKType {
    sender: string;
    ticker: string;
    quote_denom: string;
    oracle_base: string;
    oracle_quote: string;
    oracle_type: OracleType;
    expiry: Long;
    initial_deposit?: CoinSDKType;
}
export interface MsgCreateInsuranceFundResponse {
}
export interface MsgCreateInsuranceFundResponseSDKType {
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwrite {
    /** Address of the underwriter. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Amount of quote_denom to underwrite the insurance fund. */
    deposit?: Coin;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwriteSDKType {
    sender: string;
    market_id: string;
    deposit?: CoinSDKType;
}
export interface MsgUnderwriteResponse {
}
export interface MsgUnderwriteResponseSDKType {
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemption {
    /** Address of the underwriter requesting a redemption. */
    sender: string;
    /** MarketID of the insurance fund. */
    marketId: string;
    /** Insurance fund share token amount to be redeemed. */
    amount?: Coin;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemptionSDKType {
    sender: string;
    market_id: string;
    amount?: CoinSDKType;
}
export interface MsgRequestRedemptionResponse {
}
export interface MsgRequestRedemptionResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the insurance parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateInsuranceFund: {
    encode(message: MsgCreateInsuranceFund, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateInsuranceFund;
    fromPartial(object: Partial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund;
};
export declare const MsgCreateInsuranceFundResponse: {
    encode(_: MsgCreateInsuranceFundResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateInsuranceFundResponse;
    fromPartial(_: Partial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse;
};
export declare const MsgUnderwrite: {
    encode(message: MsgUnderwrite, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUnderwrite;
    fromPartial(object: Partial<MsgUnderwrite>): MsgUnderwrite;
};
export declare const MsgUnderwriteResponse: {
    encode(_: MsgUnderwriteResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUnderwriteResponse;
    fromPartial(_: Partial<MsgUnderwriteResponse>): MsgUnderwriteResponse;
};
export declare const MsgRequestRedemption: {
    encode(message: MsgRequestRedemption, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRequestRedemption;
    fromPartial(object: Partial<MsgRequestRedemption>): MsgRequestRedemption;
};
export declare const MsgRequestRedemptionResponse: {
    encode(_: MsgRequestRedemptionResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRequestRedemptionResponse;
    fromPartial(_: Partial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
