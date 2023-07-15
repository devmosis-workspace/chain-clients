import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsg {
    /** get_swap_fee is the query strcuture to get swap fee. */
    getSwapFee?: EmptyStruct;
}
/** ===================== GetSwapFeeQueryMsg */
export interface GetSwapFeeQueryMsgSDKType {
    get_swap_fee?: EmptyStructSDKType;
}
export interface GetSwapFeeQueryMsgResponse {
    /** swap_fee is the swap fee for this swap estimate. */
    swapFee: string;
}
export interface GetSwapFeeQueryMsgResponseSDKType {
    swap_fee: string;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPrice {
    /** quote_asset_denom is the quote asset of the spot query. */
    quoteAssetDenom: string;
    /** base_asset_denom is the base asset of the spot query. */
    baseAssetDenom: string;
}
/** ===================== SpotPriceQueryMsg */
export interface SpotPriceSDKType {
    quote_asset_denom: string;
    base_asset_denom: string;
}
export interface SpotPriceQueryMsg {
    /**
     * spot_price is the structure containing request field of the spot price
     * query message.
     */
    spotPrice?: SpotPrice;
}
export interface SpotPriceQueryMsgSDKType {
    spot_price?: SpotPriceSDKType;
}
export interface SpotPriceQueryMsgResponse {
    /** spot_price is the spot price returned. */
    spotPrice: string;
}
export interface SpotPriceQueryMsgResponseSDKType {
    spot_price: string;
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStruct {
}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStructSDKType {
}
export interface GetTotalPoolLiquidityQueryMsg {
    /**
     * get_total_pool_liquidity is the structure containing request field of the
     * total pool liquidity query message.
     */
    getTotalPoolLiquidity?: EmptyStruct;
}
export interface GetTotalPoolLiquidityQueryMsgSDKType {
    get_total_pool_liquidity?: EmptyStructSDKType;
}
export interface GetTotalPoolLiquidityQueryMsgResponse {
    /**
     * total_pool_liquidity is the total liquidity in the pool denominated in
     *  coins.
     */
    totalPoolLiquidity: Coin[];
}
export interface GetTotalPoolLiquidityQueryMsgResponseSDKType {
    total_pool_liquidity: CoinSDKType[];
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsg {
    /**
     * get_total_shares is the structure containing request field of the
     * total shares query message.
     */
    getTotalShares?: EmptyStruct;
}
/** ===================== GetTotalSharesQueryMsg */
export interface GetTotalSharesQueryMsgSDKType {
    get_total_shares?: EmptyStructSDKType;
}
export interface GetTotalSharesQueryMsgResponse {
    /** total_shares is the amount of shares returned. */
    totalShares: string;
}
export interface GetTotalSharesQueryMsgResponseSDKType {
    total_shares: string;
}
export declare const GetSwapFeeQueryMsg: {
    encode(message: GetSwapFeeQueryMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetSwapFeeQueryMsg;
    fromPartial(object: Partial<GetSwapFeeQueryMsg>): GetSwapFeeQueryMsg;
};
export declare const GetSwapFeeQueryMsgResponse: {
    encode(message: GetSwapFeeQueryMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetSwapFeeQueryMsgResponse;
    fromPartial(object: Partial<GetSwapFeeQueryMsgResponse>): GetSwapFeeQueryMsgResponse;
};
export declare const SpotPrice: {
    encode(message: SpotPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotPrice;
    fromPartial(object: Partial<SpotPrice>): SpotPrice;
};
export declare const SpotPriceQueryMsg: {
    encode(message: SpotPriceQueryMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotPriceQueryMsg;
    fromPartial(object: Partial<SpotPriceQueryMsg>): SpotPriceQueryMsg;
};
export declare const SpotPriceQueryMsgResponse: {
    encode(message: SpotPriceQueryMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SpotPriceQueryMsgResponse;
    fromPartial(object: Partial<SpotPriceQueryMsgResponse>): SpotPriceQueryMsgResponse;
};
export declare const EmptyStruct: {
    encode(_: EmptyStruct, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): EmptyStruct;
    fromPartial(_: Partial<EmptyStruct>): EmptyStruct;
};
export declare const GetTotalPoolLiquidityQueryMsg: {
    encode(message: GetTotalPoolLiquidityQueryMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetTotalPoolLiquidityQueryMsg;
    fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsg>): GetTotalPoolLiquidityQueryMsg;
};
export declare const GetTotalPoolLiquidityQueryMsgResponse: {
    encode(message: GetTotalPoolLiquidityQueryMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetTotalPoolLiquidityQueryMsgResponse;
    fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsgResponse>): GetTotalPoolLiquidityQueryMsgResponse;
};
export declare const GetTotalSharesQueryMsg: {
    encode(message: GetTotalSharesQueryMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetTotalSharesQueryMsg;
    fromPartial(object: Partial<GetTotalSharesQueryMsg>): GetTotalSharesQueryMsg;
};
export declare const GetTotalSharesQueryMsgResponse: {
    encode(message: GetTotalSharesQueryMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GetTotalSharesQueryMsgResponse;
    fromPartial(object: Partial<GetTotalSharesQueryMsgResponse>): GetTotalSharesQueryMsgResponse;
};
