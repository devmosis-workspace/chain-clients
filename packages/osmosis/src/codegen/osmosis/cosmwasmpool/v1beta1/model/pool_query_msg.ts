import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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
export interface EmptyStruct {}
/** ===================== GetTotalPoolLiquidityQueryMsg */
export interface EmptyStructSDKType {}
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
function createBaseGetSwapFeeQueryMsg(): GetSwapFeeQueryMsg {
  return {
    getSwapFee: undefined
  };
}
export const GetSwapFeeQueryMsg = {
  encode(message: GetSwapFeeQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getSwapFee !== undefined) {
      EmptyStruct.encode(message.getSwapFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetSwapFeeQueryMsg {
    return {
      getSwapFee: isSet(object.getSwapFee) ? EmptyStruct.fromJSON(object.getSwapFee) : undefined
    };
  },
  fromPartial(object: Partial<GetSwapFeeQueryMsg>): GetSwapFeeQueryMsg {
    const message = createBaseGetSwapFeeQueryMsg();
    message.getSwapFee = object.getSwapFee !== undefined && object.getSwapFee !== null ? EmptyStruct.fromPartial(object.getSwapFee) : undefined;
    return message;
  }
};
function createBaseGetSwapFeeQueryMsgResponse(): GetSwapFeeQueryMsgResponse {
  return {
    swapFee: ""
  };
}
export const GetSwapFeeQueryMsgResponse = {
  encode(message: GetSwapFeeQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  fromJSON(object: any): GetSwapFeeQueryMsgResponse {
    return {
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<GetSwapFeeQueryMsgResponse>): GetSwapFeeQueryMsgResponse {
    const message = createBaseGetSwapFeeQueryMsgResponse();
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseSpotPrice(): SpotPrice {
  return {
    quoteAssetDenom: "",
    baseAssetDenom: ""
  };
}
export const SpotPrice = {
  encode(message: SpotPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quoteAssetDenom !== "") {
      writer.uint32(10).string(message.quoteAssetDenom);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    return writer;
  },
  fromJSON(object: any): SpotPrice {
    return {
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : "",
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : ""
    };
  },
  fromPartial(object: Partial<SpotPrice>): SpotPrice {
    const message = createBaseSpotPrice();
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    return message;
  }
};
function createBaseSpotPriceQueryMsg(): SpotPriceQueryMsg {
  return {
    spotPrice: undefined
  };
}
export const SpotPriceQueryMsg = {
  encode(message: SpotPriceQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== undefined) {
      SpotPrice.encode(message.spotPrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SpotPriceQueryMsg {
    return {
      spotPrice: isSet(object.spotPrice) ? SpotPrice.fromJSON(object.spotPrice) : undefined
    };
  },
  fromPartial(object: Partial<SpotPriceQueryMsg>): SpotPriceQueryMsg {
    const message = createBaseSpotPriceQueryMsg();
    message.spotPrice = object.spotPrice !== undefined && object.spotPrice !== null ? SpotPrice.fromPartial(object.spotPrice) : undefined;
    return message;
  }
};
function createBaseSpotPriceQueryMsgResponse(): SpotPriceQueryMsgResponse {
  return {
    spotPrice: ""
  };
}
export const SpotPriceQueryMsgResponse = {
  encode(message: SpotPriceQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  fromJSON(object: any): SpotPriceQueryMsgResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  fromPartial(object: Partial<SpotPriceQueryMsgResponse>): SpotPriceQueryMsgResponse {
    const message = createBaseSpotPriceQueryMsgResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  }
};
function createBaseEmptyStruct(): EmptyStruct {
  return {};
}
export const EmptyStruct = {
  encode(_: EmptyStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): EmptyStruct {
    return {};
  },
  fromPartial(_: Partial<EmptyStruct>): EmptyStruct {
    const message = createBaseEmptyStruct();
    return message;
  }
};
function createBaseGetTotalPoolLiquidityQueryMsg(): GetTotalPoolLiquidityQueryMsg {
  return {
    getTotalPoolLiquidity: undefined
  };
}
export const GetTotalPoolLiquidityQueryMsg = {
  encode(message: GetTotalPoolLiquidityQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getTotalPoolLiquidity !== undefined) {
      EmptyStruct.encode(message.getTotalPoolLiquidity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTotalPoolLiquidityQueryMsg {
    return {
      getTotalPoolLiquidity: isSet(object.getTotalPoolLiquidity) ? EmptyStruct.fromJSON(object.getTotalPoolLiquidity) : undefined
    };
  },
  fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsg>): GetTotalPoolLiquidityQueryMsg {
    const message = createBaseGetTotalPoolLiquidityQueryMsg();
    message.getTotalPoolLiquidity = object.getTotalPoolLiquidity !== undefined && object.getTotalPoolLiquidity !== null ? EmptyStruct.fromPartial(object.getTotalPoolLiquidity) : undefined;
    return message;
  }
};
function createBaseGetTotalPoolLiquidityQueryMsgResponse(): GetTotalPoolLiquidityQueryMsgResponse {
  return {
    totalPoolLiquidity: []
  };
}
export const GetTotalPoolLiquidityQueryMsgResponse = {
  encode(message: GetTotalPoolLiquidityQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalPoolLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTotalPoolLiquidityQueryMsgResponse {
    return {
      totalPoolLiquidity: Array.isArray(object?.totalPoolLiquidity) ? object.totalPoolLiquidity.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GetTotalPoolLiquidityQueryMsgResponse>): GetTotalPoolLiquidityQueryMsgResponse {
    const message = createBaseGetTotalPoolLiquidityQueryMsgResponse();
    message.totalPoolLiquidity = object.totalPoolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetTotalSharesQueryMsg(): GetTotalSharesQueryMsg {
  return {
    getTotalShares: undefined
  };
}
export const GetTotalSharesQueryMsg = {
  encode(message: GetTotalSharesQueryMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getTotalShares !== undefined) {
      EmptyStruct.encode(message.getTotalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTotalSharesQueryMsg {
    return {
      getTotalShares: isSet(object.getTotalShares) ? EmptyStruct.fromJSON(object.getTotalShares) : undefined
    };
  },
  fromPartial(object: Partial<GetTotalSharesQueryMsg>): GetTotalSharesQueryMsg {
    const message = createBaseGetTotalSharesQueryMsg();
    message.getTotalShares = object.getTotalShares !== undefined && object.getTotalShares !== null ? EmptyStruct.fromPartial(object.getTotalShares) : undefined;
    return message;
  }
};
function createBaseGetTotalSharesQueryMsgResponse(): GetTotalSharesQueryMsgResponse {
  return {
    totalShares: ""
  };
}
export const GetTotalSharesQueryMsgResponse = {
  encode(message: GetTotalSharesQueryMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalShares !== "") {
      writer.uint32(10).string(message.totalShares);
    }
    return writer;
  },
  fromJSON(object: any): GetTotalSharesQueryMsgResponse {
    return {
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : ""
    };
  },
  fromPartial(object: Partial<GetTotalSharesQueryMsgResponse>): GetTotalSharesQueryMsgResponse {
    const message = createBaseGetTotalSharesQueryMsgResponse();
    message.totalShares = object.totalShares ?? "";
    return message;
  }
};