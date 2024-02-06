import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
  codeId: bigint;
  instantiateMsg: Uint8Array;
  sender: string;
}
export interface MsgCreateCosmWasmPoolProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool";
  value: Uint8Array;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolAmino {
  code_id?: string;
  instantiate_msg?: string;
  sender?: string;
}
export interface MsgCreateCosmWasmPoolAminoMsg {
  type: "osmosis/cosmwasmpool/create-cosm-wasm-pool";
  value: MsgCreateCosmWasmPoolAmino;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolSDKType {
  code_id: bigint;
  instantiate_msg: Uint8Array;
  sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
  poolId: bigint;
}
export interface MsgCreateCosmWasmPoolResponseProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse";
  value: Uint8Array;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseAmino {
  pool_id?: string;
}
export interface MsgCreateCosmWasmPoolResponseAminoMsg {
  type: "osmosis/cosmwasmpool/create-cosm-wasm-pool-response";
  value: MsgCreateCosmWasmPoolResponseAmino;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseSDKType {
  pool_id: bigint;
}
function createBaseMsgCreateCosmWasmPool(): MsgCreateCosmWasmPool {
  return {
    codeId: BigInt(0),
    instantiateMsg: new Uint8Array(),
    sender: ""
  };
}
export const MsgCreateCosmWasmPool = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool",
  encode(message: MsgCreateCosmWasmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiateMsg.length !== 0) {
      writer.uint32(18).bytes(message.instantiateMsg);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCosmWasmPool {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      instantiateMsg: isSet(object.instantiateMsg) ? bytesFromBase64(object.instantiateMsg) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateCosmWasmPool>): MsgCreateCosmWasmPool {
    const message = createBaseMsgCreateCosmWasmPool();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCreateCosmWasmPoolAmino): MsgCreateCosmWasmPool {
    const message = createBaseMsgCreateCosmWasmPool();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.instantiate_msg !== undefined && object.instantiate_msg !== null) {
      message.instantiateMsg = bytesFromBase64(object.instantiate_msg);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.instantiate_msg = message.instantiateMsg ? base64FromBytes(message.instantiateMsg) : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCosmWasmPoolAminoMsg): MsgCreateCosmWasmPool {
    return MsgCreateCosmWasmPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/create-cosm-wasm-pool",
      value: MsgCreateCosmWasmPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateCosmWasmPoolProtoMsg): MsgCreateCosmWasmPool {
    return MsgCreateCosmWasmPool.decode(message.value);
  },
  toProto(message: MsgCreateCosmWasmPool): Uint8Array {
    return MsgCreateCosmWasmPool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCosmWasmPool): MsgCreateCosmWasmPoolProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool",
      value: MsgCreateCosmWasmPool.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCosmWasmPoolResponse(): MsgCreateCosmWasmPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgCreateCosmWasmPoolResponse = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse",
  encode(message: MsgCreateCosmWasmPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCosmWasmPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateCosmWasmPoolResponse>): MsgCreateCosmWasmPoolResponse {
    const message = createBaseMsgCreateCosmWasmPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCosmWasmPoolResponseAmino): MsgCreateCosmWasmPoolResponse {
    const message = createBaseMsgCreateCosmWasmPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCosmWasmPoolResponseAminoMsg): MsgCreateCosmWasmPoolResponse {
    return MsgCreateCosmWasmPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/create-cosm-wasm-pool-response",
      value: MsgCreateCosmWasmPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateCosmWasmPoolResponseProtoMsg): MsgCreateCosmWasmPoolResponse {
    return MsgCreateCosmWasmPoolResponse.decode(message.value);
  },
  toProto(message: MsgCreateCosmWasmPoolResponse): Uint8Array {
    return MsgCreateCosmWasmPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCosmWasmPoolResponse): MsgCreateCosmWasmPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse",
      value: MsgCreateCosmWasmPoolResponse.encode(message).finish()
    };
  }
};