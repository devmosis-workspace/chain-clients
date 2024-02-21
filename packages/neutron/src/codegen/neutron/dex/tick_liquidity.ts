import { PoolReserves, PoolReservesAmino, PoolReservesSDKType } from "./pool_reserves";
import { LimitOrderTranche, LimitOrderTrancheAmino, LimitOrderTrancheSDKType } from "./limit_order_tranche";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface TickLiquidity {
  poolReserves?: PoolReserves;
  limitOrderTranche?: LimitOrderTranche;
}
export interface TickLiquidityProtoMsg {
  typeUrl: "/neutron.dex.TickLiquidity";
  value: Uint8Array;
}
export interface TickLiquidityAmino {
  pool_reserves?: PoolReservesAmino;
  limit_order_tranche?: LimitOrderTrancheAmino;
}
export interface TickLiquidityAminoMsg {
  type: "/neutron.dex.TickLiquidity";
  value: TickLiquidityAmino;
}
export interface TickLiquiditySDKType {
  pool_reserves?: PoolReservesSDKType;
  limit_order_tranche?: LimitOrderTrancheSDKType;
}
function createBaseTickLiquidity(): TickLiquidity {
  return {
    poolReserves: undefined,
    limitOrderTranche: undefined
  };
}
export const TickLiquidity = {
  typeUrl: "/neutron.dex.TickLiquidity",
  encode(message: TickLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TickLiquidity {
    return {
      poolReserves: isSet(object.poolReserves) ? PoolReserves.fromJSON(object.poolReserves) : undefined,
      limitOrderTranche: isSet(object.limitOrderTranche) ? LimitOrderTranche.fromJSON(object.limitOrderTranche) : undefined
    };
  },
  fromPartial(object: Partial<TickLiquidity>): TickLiquidity {
    const message = createBaseTickLiquidity();
    message.poolReserves = object.poolReserves !== undefined && object.poolReserves !== null ? PoolReserves.fromPartial(object.poolReserves) : undefined;
    message.limitOrderTranche = object.limitOrderTranche !== undefined && object.limitOrderTranche !== null ? LimitOrderTranche.fromPartial(object.limitOrderTranche) : undefined;
    return message;
  },
  fromAmino(object: TickLiquidityAmino): TickLiquidity {
    const message = createBaseTickLiquidity();
    if (object.pool_reserves !== undefined && object.pool_reserves !== null) {
      message.poolReserves = PoolReserves.fromAmino(object.pool_reserves);
    }
    if (object.limit_order_tranche !== undefined && object.limit_order_tranche !== null) {
      message.limitOrderTranche = LimitOrderTranche.fromAmino(object.limit_order_tranche);
    }
    return message;
  },
  toAmino(message: TickLiquidity): TickLiquidityAmino {
    const obj: any = {};
    obj.pool_reserves = message.poolReserves ? PoolReserves.toAmino(message.poolReserves) : undefined;
    obj.limit_order_tranche = message.limitOrderTranche ? LimitOrderTranche.toAmino(message.limitOrderTranche) : undefined;
    return obj;
  },
  fromAminoMsg(object: TickLiquidityAminoMsg): TickLiquidity {
    return TickLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: TickLiquidityProtoMsg): TickLiquidity {
    return TickLiquidity.decode(message.value);
  },
  toProto(message: TickLiquidity): Uint8Array {
    return TickLiquidity.encode(message).finish();
  },
  toProtoMsg(message: TickLiquidity): TickLiquidityProtoMsg {
    return {
      typeUrl: "/neutron.dex.TickLiquidity",
      value: TickLiquidity.encode(message).finish()
    };
  }
};