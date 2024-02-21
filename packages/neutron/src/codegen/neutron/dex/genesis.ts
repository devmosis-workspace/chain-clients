import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TickLiquidity, TickLiquidityAmino, TickLiquiditySDKType } from "./tick_liquidity";
import { LimitOrderTranche, LimitOrderTrancheAmino, LimitOrderTrancheSDKType } from "./limit_order_tranche";
import { LimitOrderTrancheUser, LimitOrderTrancheUserAmino, LimitOrderTrancheUserSDKType } from "./limit_order_tranche_user";
import { PoolMetadata, PoolMetadataAmino, PoolMetadataSDKType } from "./pool_metadata";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params;
  tickLiquidityList?: TickLiquidity[];
  inactiveLimitOrderTrancheList?: LimitOrderTranche[];
  limitOrderTrancheUserList?: LimitOrderTrancheUser[];
  poolMetadataList: PoolMetadata[];
  poolCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/neutron.dex.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  tick_liquidity_list?: TickLiquidityAmino[];
  inactive_limit_order_tranche_list?: LimitOrderTrancheAmino[];
  limit_order_tranche_user_list?: LimitOrderTrancheUserAmino[];
  pool_metadata_list?: PoolMetadataAmino[];
  pool_count?: string;
}
export interface GenesisStateAminoMsg {
  type: "/neutron.dex.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  tick_liquidity_list?: TickLiquiditySDKType[];
  inactive_limit_order_tranche_list?: LimitOrderTrancheSDKType[];
  limit_order_tranche_user_list?: LimitOrderTrancheUserSDKType[];
  pool_metadata_list: PoolMetadataSDKType[];
  pool_count: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tickLiquidityList: [],
    inactiveLimitOrderTrancheList: [],
    limitOrderTrancheUserList: [],
    poolMetadataList: [],
    poolCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/neutron.dex.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickLiquidityList) {
      TickLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inactiveLimitOrderTrancheList) {
      LimitOrderTranche.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitOrderTrancheUserList) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolMetadataList) {
      PoolMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.poolCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tickLiquidityList: Array.isArray(object?.tickLiquidityList) ? object.tickLiquidityList.map((e: any) => TickLiquidity.fromJSON(e)) : [],
      inactiveLimitOrderTrancheList: Array.isArray(object?.inactiveLimitOrderTrancheList) ? object.inactiveLimitOrderTrancheList.map((e: any) => LimitOrderTranche.fromJSON(e)) : [],
      limitOrderTrancheUserList: Array.isArray(object?.limitOrderTrancheUserList) ? object.limitOrderTrancheUserList.map((e: any) => LimitOrderTrancheUser.fromJSON(e)) : [],
      poolMetadataList: Array.isArray(object?.poolMetadataList) ? object.poolMetadataList.map((e: any) => PoolMetadata.fromJSON(e)) : [],
      poolCount: isSet(object.poolCount) ? BigInt(object.poolCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.tickLiquidityList = object.tickLiquidityList?.map(e => TickLiquidity.fromPartial(e)) || [];
    message.inactiveLimitOrderTrancheList = object.inactiveLimitOrderTrancheList?.map(e => LimitOrderTranche.fromPartial(e)) || [];
    message.limitOrderTrancheUserList = object.limitOrderTrancheUserList?.map(e => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.poolMetadataList = object.poolMetadataList?.map(e => PoolMetadata.fromPartial(e)) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? BigInt(object.poolCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tickLiquidityList = object.tick_liquidity_list?.map(e => TickLiquidity.fromAmino(e)) || [];
    message.inactiveLimitOrderTrancheList = object.inactive_limit_order_tranche_list?.map(e => LimitOrderTranche.fromAmino(e)) || [];
    message.limitOrderTrancheUserList = object.limit_order_tranche_user_list?.map(e => LimitOrderTrancheUser.fromAmino(e)) || [];
    message.poolMetadataList = object.pool_metadata_list?.map(e => PoolMetadata.fromAmino(e)) || [];
    if (object.pool_count !== undefined && object.pool_count !== null) {
      message.poolCount = BigInt(object.pool_count);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tickLiquidityList) {
      obj.tick_liquidity_list = message.tickLiquidityList.map(e => e ? TickLiquidity.toAmino(e) : undefined);
    } else {
      obj.tick_liquidity_list = [];
    }
    if (message.inactiveLimitOrderTrancheList) {
      obj.inactive_limit_order_tranche_list = message.inactiveLimitOrderTrancheList.map(e => e ? LimitOrderTranche.toAmino(e) : undefined);
    } else {
      obj.inactive_limit_order_tranche_list = [];
    }
    if (message.limitOrderTrancheUserList) {
      obj.limit_order_tranche_user_list = message.limitOrderTrancheUserList.map(e => e ? LimitOrderTrancheUser.toAmino(e) : undefined);
    } else {
      obj.limit_order_tranche_user_list = [];
    }
    if (message.poolMetadataList) {
      obj.pool_metadata_list = message.poolMetadataList.map(e => e ? PoolMetadata.toAmino(e) : undefined);
    } else {
      obj.pool_metadata_list = [];
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
      typeUrl: "/neutron.dex.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};