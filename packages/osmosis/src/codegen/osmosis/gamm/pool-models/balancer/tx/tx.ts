import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPool {
  sender: string;
  poolParams: PoolParams;
  poolAssets: PoolAsset[];
  futurePoolGovernor: string;
}
export interface MsgCreateBalancerPoolProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
  value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolAmino {
  sender: string;
  pool_params?: PoolParamsAmino;
  pool_assets: PoolAssetAmino[];
  future_pool_governor: string;
}
export interface MsgCreateBalancerPoolAminoMsg {
  type: "osmosis/gamm/create-balancer-pool";
  value: MsgCreateBalancerPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateBalancerPoolSDKType {
  sender: string;
  pool_params: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
  future_pool_governor: string;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponse {
  poolId: bigint;
}
export interface MsgCreateBalancerPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
  value: Uint8Array;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseAmino {
  pool_id: string;
}
export interface MsgCreateBalancerPoolResponseAminoMsg {
  type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response";
  value: MsgCreateBalancerPoolResponseAmino;
}
/** Returns the poolID */
export interface MsgCreateBalancerPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateBalancerPool(): MsgCreateBalancerPool {
  return {
    sender: "",
    poolParams: PoolParams.fromPartial({}),
    poolAssets: [],
    futurePoolGovernor: ""
  };
}
export const MsgCreateBalancerPool = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
  encode(message: MsgCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.futurePoolGovernor !== "") {
      writer.uint32(34).string(message.futurePoolGovernor);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBalancerPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      futurePoolGovernor: isSet(object.futurePoolGovernor) ? String(object.futurePoolGovernor) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateBalancerPool>): MsgCreateBalancerPool {
    const message = createBaseMsgCreateBalancerPool();
    message.sender = object.sender ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.futurePoolGovernor = object.futurePoolGovernor ?? "";
    return message;
  },
  fromAmino(object: MsgCreateBalancerPoolAmino): MsgCreateBalancerPool {
    return {
      sender: object.sender,
      poolParams: object?.pool_params ? PoolParams.fromAmino(object.pool_params) : undefined,
      poolAssets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e: any) => PoolAsset.fromAmino(e)) : [],
      futurePoolGovernor: object.future_pool_governor
    };
  },
  toAmino(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = [];
    }
    obj.future_pool_governor = message.futurePoolGovernor;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBalancerPoolAminoMsg): MsgCreateBalancerPool {
    return MsgCreateBalancerPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolAminoMsg {
    return {
      type: "osmosis/gamm/create-balancer-pool",
      value: MsgCreateBalancerPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBalancerPoolProtoMsg): MsgCreateBalancerPool {
    return MsgCreateBalancerPool.decode(message.value);
  },
  toProto(message: MsgCreateBalancerPool): Uint8Array {
    return MsgCreateBalancerPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPool): MsgCreateBalancerPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
      value: MsgCreateBalancerPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBalancerPoolResponse(): MsgCreateBalancerPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateBalancerPoolResponse = {
  typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
  encode(message: MsgCreateBalancerPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBalancerPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateBalancerPoolResponse>): MsgCreateBalancerPoolResponse {
    const message = createBaseMsgCreateBalancerPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateBalancerPoolResponseAmino): MsgCreateBalancerPoolResponse {
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBalancerPoolResponseAminoMsg): MsgCreateBalancerPoolResponse {
    return MsgCreateBalancerPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
      value: MsgCreateBalancerPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBalancerPoolResponseProtoMsg): MsgCreateBalancerPoolResponse {
    return MsgCreateBalancerPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateBalancerPoolResponse): Uint8Array {
    return MsgCreateBalancerPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBalancerPoolResponse): MsgCreateBalancerPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
      value: MsgCreateBalancerPoolResponse.encode(message).finish()
    };
  }
};