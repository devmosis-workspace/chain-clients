import { PoolReserves, PoolReservesAmino, PoolReservesSDKType } from "./pool_reserves";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface Pool {
  id: bigint;
  lowerTick0?: PoolReserves;
  upperTick1?: PoolReserves;
}
export interface PoolProtoMsg {
  typeUrl: "/neutron.dex.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  id?: string;
  lower_tick0?: PoolReservesAmino;
  upper_tick1?: PoolReservesAmino;
}
export interface PoolAminoMsg {
  type: "/neutron.dex.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  id: bigint;
  lower_tick0?: PoolReservesSDKType;
  upper_tick1?: PoolReservesSDKType;
}
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    lowerTick0: undefined,
    upperTick1: undefined
  };
}
export const Pool = {
  typeUrl: "/neutron.dex.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.lowerTick0 !== undefined) {
      PoolReserves.encode(message.lowerTick0, writer.uint32(18).fork()).ldelim();
    }
    if (message.upperTick1 !== undefined) {
      PoolReserves.encode(message.upperTick1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      lowerTick0: isSet(object.lowerTick0) ? PoolReserves.fromJSON(object.lowerTick0) : undefined,
      upperTick1: isSet(object.upperTick1) ? PoolReserves.fromJSON(object.upperTick1) : undefined
    };
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.lowerTick0 = object.lowerTick0 !== undefined && object.lowerTick0 !== null ? PoolReserves.fromPartial(object.lowerTick0) : undefined;
    message.upperTick1 = object.upperTick1 !== undefined && object.upperTick1 !== null ? PoolReserves.fromPartial(object.upperTick1) : undefined;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.lower_tick0 !== undefined && object.lower_tick0 !== null) {
      message.lowerTick0 = PoolReserves.fromAmino(object.lower_tick0);
    }
    if (object.upper_tick1 !== undefined && object.upper_tick1 !== null) {
      message.upperTick1 = PoolReserves.fromAmino(object.upper_tick1);
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.lower_tick0 = message.lowerTick0 ? PoolReserves.toAmino(message.lowerTick0) : undefined;
    obj.upper_tick1 = message.upperTick1 ? PoolReserves.toAmino(message.upperTick1) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/neutron.dex.Pool",
      value: Pool.encode(message).finish()
    };
  }
};