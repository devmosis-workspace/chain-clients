import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** PoolType is an enumeration of all supported pool types. */
export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,
  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,
  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  /**
   * CosmWasm - CosmWasm is the pool model specific to CosmWasm. It is defined in
   * x/cosmwasmpool.
   */
  CosmWasm = 3,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case 2:
    case "Concentrated":
      return PoolType.Concentrated;
    case 3:
    case "CosmWasm":
      return PoolType.CosmWasm;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.Concentrated:
      return "Concentrated";
    case PoolType.CosmWasm:
      return "CosmWasm";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  poolType: PoolType;
  poolId: Long;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
  pool_type: PoolType;
  pool_id: Long;
}
function createBaseModuleRoute(): ModuleRoute {
  return {
    poolType: 0,
    poolId: undefined
  };
}
export const ModuleRoute = {
  encode(message: ModuleRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poolType !== 0) {
      writer.uint32(8).int32(message.poolType);
    }
    if (message.poolId !== undefined) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): ModuleRoute {
    return {
      poolType: isSet(object.poolType) ? poolTypeFromJSON(object.poolType) : 0,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : undefined
    };
  },
  fromPartial(object: Partial<ModuleRoute>): ModuleRoute {
    const message = createBaseModuleRoute();
    message.poolType = object.poolType ?? 0;
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : undefined;
    return message;
  }
};