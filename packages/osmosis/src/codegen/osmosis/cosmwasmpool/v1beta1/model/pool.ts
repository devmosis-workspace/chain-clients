import { Long, isSet, bytesFromBase64 } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CosmWasmPool {
  contractAddress: string;
  poolId: Long;
  codeId: Long;
  instantiateMsg: Uint8Array;
}
export interface CosmWasmPoolSDKType {
  contract_address: string;
  pool_id: Long;
  code_id: Long;
  instantiate_msg: Uint8Array;
}
function createBaseCosmWasmPool(): CosmWasmPool {
  return {
    contractAddress: "",
    poolId: Long.UZERO,
    codeId: Long.UZERO,
    instantiateMsg: new Uint8Array()
  };
}
export const CosmWasmPool = {
  encode(message: CosmWasmPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.instantiateMsg.length !== 0) {
      writer.uint32(34).bytes(message.instantiateMsg);
    }
    return writer;
  },
  fromJSON(object: any): CosmWasmPool {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      instantiateMsg: isSet(object.instantiateMsg) ? bytesFromBase64(object.instantiateMsg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool {
    const message = createBaseCosmWasmPool();
    message.contractAddress = object.contractAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.instantiateMsg = object.instantiateMsg ?? new Uint8Array();
    return message;
  }
};