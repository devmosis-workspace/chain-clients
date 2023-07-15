import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SwapAmountInRoute {
  poolId: Long;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
  pool_id: Long;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  poolId: Long;
  tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: Long;
  token_in_denom: string;
}
export interface SwapAmountInSplitRoute {
  pools: SwapAmountInRoute[];
  tokenInAmount: string;
}
export interface SwapAmountInSplitRouteSDKType {
  pools: SwapAmountInRouteSDKType[];
  token_in_amount: string;
}
export interface SwapAmountOutSplitRoute {
  pools: SwapAmountOutRoute[];
  tokenOutAmount: string;
}
export interface SwapAmountOutSplitRouteSDKType {
  pools: SwapAmountOutRouteSDKType[];
  token_out_amount: string;
}
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: Long.UZERO,
    tokenOutDenom: ""
  };
}
export const SwapAmountInRoute = {
  encode(message: SwapAmountInRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  fromJSON(object: any): SwapAmountInRoute {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  }
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: Long.UZERO,
    tokenInDenom: ""
  };
}
export const SwapAmountOutRoute = {
  encode(message: SwapAmountOutRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : ""
    };
  },
  fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  }
};
function createBaseSwapAmountInSplitRoute(): SwapAmountInSplitRoute {
  return {
    pools: [],
    tokenInAmount: ""
  };
}
export const SwapAmountInSplitRoute = {
  encode(message: SwapAmountInSplitRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInAmount !== "") {
      writer.uint32(18).string(message.tokenInAmount);
    }
    return writer;
  },
  fromJSON(object: any): SwapAmountInSplitRoute {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      tokenInAmount: isSet(object.tokenInAmount) ? String(object.tokenInAmount) : ""
    };
  },
  fromPartial(object: Partial<SwapAmountInSplitRoute>): SwapAmountInSplitRoute {
    const message = createBaseSwapAmountInSplitRoute();
    message.pools = object.pools?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenInAmount = object.tokenInAmount ?? "";
    return message;
  }
};
function createBaseSwapAmountOutSplitRoute(): SwapAmountOutSplitRoute {
  return {
    pools: [],
    tokenOutAmount: ""
  };
}
export const SwapAmountOutSplitRoute = {
  encode(message: SwapAmountOutSplitRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOutAmount !== "") {
      writer.uint32(18).string(message.tokenOutAmount);
    }
    return writer;
  },
  fromJSON(object: any): SwapAmountOutSplitRoute {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenOutAmount: isSet(object.tokenOutAmount) ? String(object.tokenOutAmount) : ""
    };
  },
  fromPartial(object: Partial<SwapAmountOutSplitRoute>): SwapAmountOutSplitRoute {
    const message = createBaseSwapAmountOutSplitRoute();
    message.pools = object.pools?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOutAmount = object.tokenOutAmount ?? "";
    return message;
  }
};