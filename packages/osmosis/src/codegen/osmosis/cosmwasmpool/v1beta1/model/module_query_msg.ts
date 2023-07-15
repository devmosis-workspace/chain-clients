import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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
function createBaseCalcOutAmtGivenIn(): CalcOutAmtGivenIn {
  return {
    tokenIn: undefined,
    tokenOutDenom: "",
    swapFee: ""
  };
}
export const CalcOutAmtGivenIn = {
  encode(message: CalcOutAmtGivenIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  fromJSON(object: any): CalcOutAmtGivenIn {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<CalcOutAmtGivenIn>): CalcOutAmtGivenIn {
    const message = createBaseCalcOutAmtGivenIn();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseCalcOutAmtGivenInRequest(): CalcOutAmtGivenInRequest {
  return {
    calcOutAmtGivenIn: undefined
  };
}
export const CalcOutAmtGivenInRequest = {
  encode(message: CalcOutAmtGivenInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.calcOutAmtGivenIn !== undefined) {
      CalcOutAmtGivenIn.encode(message.calcOutAmtGivenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CalcOutAmtGivenInRequest {
    return {
      calcOutAmtGivenIn: isSet(object.calcOutAmtGivenIn) ? CalcOutAmtGivenIn.fromJSON(object.calcOutAmtGivenIn) : undefined
    };
  },
  fromPartial(object: Partial<CalcOutAmtGivenInRequest>): CalcOutAmtGivenInRequest {
    const message = createBaseCalcOutAmtGivenInRequest();
    message.calcOutAmtGivenIn = object.calcOutAmtGivenIn !== undefined && object.calcOutAmtGivenIn !== null ? CalcOutAmtGivenIn.fromPartial(object.calcOutAmtGivenIn) : undefined;
    return message;
  }
};
function createBaseCalcOutAmtGivenInResponse(): CalcOutAmtGivenInResponse {
  return {
    tokenOut: undefined
  };
}
export const CalcOutAmtGivenInResponse = {
  encode(message: CalcOutAmtGivenInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CalcOutAmtGivenInResponse {
    return {
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined
    };
  },
  fromPartial(object: Partial<CalcOutAmtGivenInResponse>): CalcOutAmtGivenInResponse {
    const message = createBaseCalcOutAmtGivenInResponse();
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    return message;
  }
};
function createBaseCalcInAmtGivenOut(): CalcInAmtGivenOut {
  return {
    tokenOut: undefined,
    tokenInDenom: "",
    swapFee: ""
  };
}
export const CalcInAmtGivenOut = {
  encode(message: CalcInAmtGivenOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(message.swapFee);
    }
    return writer;
  },
  fromJSON(object: any): CalcInAmtGivenOut {
    return {
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<CalcInAmtGivenOut>): CalcInAmtGivenOut {
    const message = createBaseCalcInAmtGivenOut();
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseCalcInAmtGivenOutRequest(): CalcInAmtGivenOutRequest {
  return {
    calcInAmtGivenOut: undefined
  };
}
export const CalcInAmtGivenOutRequest = {
  encode(message: CalcInAmtGivenOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.calcInAmtGivenOut !== undefined) {
      CalcInAmtGivenOut.encode(message.calcInAmtGivenOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CalcInAmtGivenOutRequest {
    return {
      calcInAmtGivenOut: isSet(object.calcInAmtGivenOut) ? CalcInAmtGivenOut.fromJSON(object.calcInAmtGivenOut) : undefined
    };
  },
  fromPartial(object: Partial<CalcInAmtGivenOutRequest>): CalcInAmtGivenOutRequest {
    const message = createBaseCalcInAmtGivenOutRequest();
    message.calcInAmtGivenOut = object.calcInAmtGivenOut !== undefined && object.calcInAmtGivenOut !== null ? CalcInAmtGivenOut.fromPartial(object.calcInAmtGivenOut) : undefined;
    return message;
  }
};
function createBaseCalcInAmtGivenOutResponse(): CalcInAmtGivenOutResponse {
  return {
    tokenIn: undefined
  };
}
export const CalcInAmtGivenOutResponse = {
  encode(message: CalcInAmtGivenOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CalcInAmtGivenOutResponse {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined
    };
  },
  fromPartial(object: Partial<CalcInAmtGivenOutResponse>): CalcInAmtGivenOutResponse {
    const message = createBaseCalcInAmtGivenOutResponse();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    return message;
  }
};