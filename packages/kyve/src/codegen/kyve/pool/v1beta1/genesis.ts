import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
  /** params ... */
  params: Params;
  /** pool_list ... */
  poolList: Pool[];
  /** pool_count ... */
  poolCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/kyve.pool.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateAmino {
  /** params ... */
  params?: ParamsAmino;
  /** pool_list ... */
  pool_list: PoolAmino[];
  /** pool_count ... */
  pool_count: string;
}
export interface GenesisStateAminoMsg {
  type: "/kyve.pool.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pool_list: PoolSDKType[];
  pool_count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    poolCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/kyve.pool.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      poolCount: isSet(object.poolCount) ? BigInt(object.poolCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? BigInt(object.poolCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolList: Array.isArray(object?.pool_list) ? object.pool_list.map((e: any) => Pool.fromAmino(e)) : [],
      poolCount: BigInt(object.pool_count)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.pool_list = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool_list = [];
    }
    obj.pool_count = message.poolCount ? message.poolCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/kyve.pool.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};