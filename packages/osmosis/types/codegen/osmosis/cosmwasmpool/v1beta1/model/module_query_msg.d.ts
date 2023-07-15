import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenIn {
    /** token_in is the token to be sent to the pool. */
    tokenIn?: Coin;
    /** token_out_denom is the token denom to be received from the pool. */
    tokenOutDenom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
/** ===================== CalcOutAmtGivenIn */
export interface CalcOutAmtGivenInSDKType {
    token_in?: CoinSDKType;
    token_out_denom: string;
    swap_fee: string;
}
export interface CalcOutAmtGivenInRequest {
    /**
     * calc_out_amt_given_in is the structure containing all the request
     * information for this query.
     */
    calcOutAmtGivenIn?: CalcOutAmtGivenIn;
}
export interface CalcOutAmtGivenInRequestSDKType {
    calc_out_amt_given_in?: CalcOutAmtGivenInSDKType;
}
export interface CalcOutAmtGivenInResponse {
    /** token_out is the token out computed from this swap estimate call. */
    tokenOut?: Coin;
}
export interface CalcOutAmtGivenInResponseSDKType {
    token_out?: CoinSDKType;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOut {
    /** token_out is the token out to be receoved from the pool. */
    tokenOut?: Coin;
    /** token_in_denom is the token denom to be sentt to the pool. */
    tokenInDenom: string;
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
/** ===================== CalcInAmtGivenOut */
export interface CalcInAmtGivenOutSDKType {
    token_out?: CoinSDKType;
    token_in_denom: string;
    swap_fee: string;
}
export interface CalcInAmtGivenOutRequest {
    /**
     * calc_in_amt_given_out is the structure containing all the request
     * information for this query.
     */
    calcInAmtGivenOut?: CalcInAmtGivenOut;
}
export interface CalcInAmtGivenOutRequestSDKType {
    calc_in_amt_given_out?: CalcInAmtGivenOutSDKType;
}
export interface CalcInAmtGivenOutResponse {
    /** token_in is the token in computed from this swap estimate call. */
    tokenIn?: Coin;
}
export interface CalcInAmtGivenOutResponseSDKType {
    token_in?: CoinSDKType;
}
export declare const CalcOutAmtGivenIn: {
    encode(message: CalcOutAmtGivenIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcOutAmtGivenIn;
    fromPartial(object: Partial<CalcOutAmtGivenIn>): CalcOutAmtGivenIn;
};
export declare const CalcOutAmtGivenInRequest: {
    encode(message: CalcOutAmtGivenInRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcOutAmtGivenInRequest;
    fromPartial(object: Partial<CalcOutAmtGivenInRequest>): CalcOutAmtGivenInRequest;
};
export declare const CalcOutAmtGivenInResponse: {
    encode(message: CalcOutAmtGivenInResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcOutAmtGivenInResponse;
    fromPartial(object: Partial<CalcOutAmtGivenInResponse>): CalcOutAmtGivenInResponse;
};
export declare const CalcInAmtGivenOut: {
    encode(message: CalcInAmtGivenOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcInAmtGivenOut;
    fromPartial(object: Partial<CalcInAmtGivenOut>): CalcInAmtGivenOut;
};
export declare const CalcInAmtGivenOutRequest: {
    encode(message: CalcInAmtGivenOutRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcInAmtGivenOutRequest;
    fromPartial(object: Partial<CalcInAmtGivenOutRequest>): CalcInAmtGivenOutRequest;
};
export declare const CalcInAmtGivenOutResponse: {
    encode(message: CalcInAmtGivenOutResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CalcInAmtGivenOutResponse;
    fromPartial(object: Partial<CalcInAmtGivenOutResponse>): CalcInAmtGivenOutResponse;
};
