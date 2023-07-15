import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountIn {
  sender: string;
  /** token_in is the token to be sent to the pool. */
  tokenIn?: Coin;
  /** token_out_denom is the token denom to be received from the pool. */
  tokenOutDenom: string;
  /**
   * token_out_min_amount is the minimum amount of token_out to be received from
   * the pool.
   */
  tokenOutMinAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
/** ===================== SwapExactAmountIn */
export interface SwapExactAmountInSDKType {
  sender: string;
  token_in?: CoinSDKType;
  token_out_denom: string;
  token_out_min_amount: string;
  swap_fee: string;
}
export interface SwapExactAmountInSudoMsg {
  /**
   * swap_exact_amount_in is the structure containing all the request
   * information for this message.
   */
  swapExactAmountIn?: SwapExactAmountIn;
}
export interface SwapExactAmountInSudoMsgSDKType {
  swap_exact_amount_in?: SwapExactAmountInSDKType;
}
export interface SwapExactAmountInSudoMsgResponse {
  /** token_out_amount is the token out computed from this swap estimate call. */
  tokenOutAmount: string;
}
export interface SwapExactAmountInSudoMsgResponseSDKType {
  token_out_amount: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOut {
  sender: string;
  /** token_out is the token to be sent out of the pool. */
  tokenOut?: Coin;
  /** token_in_denom is the token denom to be sent too the pool. */
  tokenInDenom: string;
  /**
   * token_in_max_amount is the maximum amount of token_in to be sent to the
   * pool.
   */
  tokenInMaxAmount: string;
  /** swap_fee is the swap fee for this swap estimate. */
  swapFee: string;
}
/** ===================== SwapExactAmountOut */
export interface SwapExactAmountOutSDKType {
  sender: string;
  token_out?: CoinSDKType;
  token_in_denom: string;
  token_in_max_amount: string;
  swap_fee: string;
}
export interface SwapExactAmountOutSudoMsg {
  /**
   * swap_exact_amount_out is the structure containing all the request
   * information for this message.
   */
  swapExactAmountOut?: SwapExactAmountOut;
}
export interface SwapExactAmountOutSudoMsgSDKType {
  swap_exact_amount_out?: SwapExactAmountOutSDKType;
}
export interface SwapExactAmountOutSudoMsgResponse {
  /** token_in_amount is the token in computed from this swap estimate call. */
  tokenInAmount: string;
}
export interface SwapExactAmountOutSudoMsgResponseSDKType {
  token_in_amount: string;
}
function createBaseSwapExactAmountIn(): SwapExactAmountIn {
  return {
    sender: "",
    tokenIn: undefined,
    tokenOutDenom: "",
    tokenOutMinAmount: "",
    swapFee: ""
  };
}
export const SwapExactAmountIn = {
  encode(message: SwapExactAmountIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    if (message.tokenOutMinAmount !== "") {
      writer.uint32(34).string(message.tokenOutMinAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(message.swapFee);
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : "",
      tokenOutMinAmount: isSet(object.tokenOutMinAmount) ? String(object.tokenOutMinAmount) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<SwapExactAmountIn>): SwapExactAmountIn {
    const message = createBaseSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseSwapExactAmountInSudoMsg(): SwapExactAmountInSudoMsg {
  return {
    swapExactAmountIn: undefined
  };
}
export const SwapExactAmountInSudoMsg = {
  encode(message: SwapExactAmountInSudoMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapExactAmountIn !== undefined) {
      SwapExactAmountIn.encode(message.swapExactAmountIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountInSudoMsg {
    return {
      swapExactAmountIn: isSet(object.swapExactAmountIn) ? SwapExactAmountIn.fromJSON(object.swapExactAmountIn) : undefined
    };
  },
  fromPartial(object: Partial<SwapExactAmountInSudoMsg>): SwapExactAmountInSudoMsg {
    const message = createBaseSwapExactAmountInSudoMsg();
    message.swapExactAmountIn = object.swapExactAmountIn !== undefined && object.swapExactAmountIn !== null ? SwapExactAmountIn.fromPartial(object.swapExactAmountIn) : undefined;
    return message;
  }
};
function createBaseSwapExactAmountInSudoMsgResponse(): SwapExactAmountInSudoMsgResponse {
  return {
    tokenOutAmount: ""
  };
}
export const SwapExactAmountInSudoMsgResponse = {
  encode(message: SwapExactAmountInSudoMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountInSudoMsgResponse {
    return {
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },
  fromPartial(object: Partial<SwapExactAmountInSudoMsgResponse>): SwapExactAmountInSudoMsgResponse {
    const message = createBaseSwapExactAmountInSudoMsgResponse();
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  }
};
function createBaseSwapExactAmountOut(): SwapExactAmountOut {
  return {
    sender: "",
    tokenOut: undefined,
    tokenInDenom: "",
    tokenInMaxAmount: "",
    swapFee: ""
  };
}
export const SwapExactAmountOut = {
  encode(message: SwapExactAmountOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(26).string(message.tokenInDenom);
    }
    if (message.tokenInMaxAmount !== "") {
      writer.uint32(34).string(message.tokenInMaxAmount);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(message.swapFee);
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenInMaxAmount: isSet(object.tokenInMaxAmount) ? String(object.tokenInMaxAmount) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : ""
    };
  },
  fromPartial(object: Partial<SwapExactAmountOut>): SwapExactAmountOut {
    const message = createBaseSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
    message.swapFee = object.swapFee ?? "";
    return message;
  }
};
function createBaseSwapExactAmountOutSudoMsg(): SwapExactAmountOutSudoMsg {
  return {
    swapExactAmountOut: undefined
  };
}
export const SwapExactAmountOutSudoMsg = {
  encode(message: SwapExactAmountOutSudoMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapExactAmountOut !== undefined) {
      SwapExactAmountOut.encode(message.swapExactAmountOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountOutSudoMsg {
    return {
      swapExactAmountOut: isSet(object.swapExactAmountOut) ? SwapExactAmountOut.fromJSON(object.swapExactAmountOut) : undefined
    };
  },
  fromPartial(object: Partial<SwapExactAmountOutSudoMsg>): SwapExactAmountOutSudoMsg {
    const message = createBaseSwapExactAmountOutSudoMsg();
    message.swapExactAmountOut = object.swapExactAmountOut !== undefined && object.swapExactAmountOut !== null ? SwapExactAmountOut.fromPartial(object.swapExactAmountOut) : undefined;
    return message;
  }
};
function createBaseSwapExactAmountOutSudoMsgResponse(): SwapExactAmountOutSudoMsgResponse {
  return {
    tokenInAmount: ""
  };
}
export const SwapExactAmountOutSudoMsgResponse = {
  encode(message: SwapExactAmountOutSudoMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  fromJSON(object: any): SwapExactAmountOutSudoMsgResponse {
    return {
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },
  fromPartial(object: Partial<SwapExactAmountOutSudoMsgResponse>): SwapExactAmountOutSudoMsgResponse {
    const message = createBaseSwapExactAmountOutSudoMsgResponse();
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  }
};