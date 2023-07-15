import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
  swapFee: string;
  /**
   * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
   * pools can maintain a non-zero fee. No new pool can be created with non-zero
   * fee anymore
   */
  exitFee: string;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
  swap_fee: string;
  exit_fee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
  address: string;
  id: Long;
  poolParams?: PoolParams;
  /**
   * This string specifies who will govern the pool in the future.
   * Valid forms of this are:
   * {token name},{duration}
   * {duration}
   * where {token name} if specified is the token which determines the
   * governor, and if not specified is the LP token for this pool.duration is
   * a time specified as 0w,1w,2w, etc. which specifies how long the token
   * would need to be locked up to count in governance. 0w means no lockup.
   */
  futurePoolGovernor: string;
  /** sum of all LP shares */
  totalShares?: Coin;
  /** assets in the pool */
  poolLiquidity: Coin[];
  /** for calculation amognst assets with different precisions */
  scalingFactors: Long[];
  /** scaling_factor_controller is the address can adjust pool scaling factors */
  scalingFactorController: string;
}
/** Pool is the stableswap Pool struct */
export interface PoolSDKType {
  address: string;
  id: Long;
  pool_params?: PoolParamsSDKType;
  future_pool_governor: string;
  total_shares?: CoinSDKType;
  pool_liquidity: CoinSDKType[];
  scaling_factors: Long[];
  scaling_factor_controller: string;
}
function createBasePoolParams(): PoolParams {
  return {
    swapFee: "",
    exitFee: ""
  };
}
export const PoolParams = {
  encode(message: PoolParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapFee !== "") {
      writer.uint32(10).string(message.swapFee);
    }
    if (message.exitFee !== "") {
      writer.uint32(18).string(message.exitFee);
    }
    return writer;
  },
  fromJSON(object: any): PoolParams {
    return {
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      exitFee: isSet(object.exitFee) ? String(object.exitFee) : ""
    };
  },
  fromPartial(object: Partial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.swapFee = object.swapFee ?? "";
    message.exitFee = object.exitFee ?? "";
    return message;
  }
};
function createBasePool(): Pool {
  return {
    address: "",
    id: Long.UZERO,
    poolParams: undefined,
    futurePoolGovernor: "",
    totalShares: undefined,
    poolLiquidity: [],
    scalingFactors: [],
    scalingFactorController: ""
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolLiquidity) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.scalingFactors) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.scalingFactorController !== "") {
      writer.uint32(66).string(message.scalingFactorController);
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : "",
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      poolLiquidity: Array.isArray(object?.poolLiquidity) ? object.poolLiquidity.map((e: any) => Coin.fromJSON(e)) : [],
      scalingFactors: Array.isArray(object?.scalingFactors) ? object.scalingFactors.map((e: any) => Long.fromValue(e)) : [],
      scalingFactorController: isSet(object.scalingFactorController) ? String(object.scalingFactorController) : ""
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolLiquidity = object.poolLiquidity?.map(e => Coin.fromPartial(e)) || [];
    message.scalingFactors = object.scalingFactors?.map(e => Long.fromValue(e)) || [];
    message.scalingFactorController = object.scalingFactorController ?? "";
    return message;
  }
};