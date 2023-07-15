import { Pool, PoolSDKType } from "./pool";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the pool module's genesis state. */
export interface GenesisState {
  /** pool_list ... */
  poolList: Pool[];
  /** pool_count ... */
  poolCount: Long;
}
/** GenesisState defines the pool module's genesis state. */
export interface GenesisStateSDKType {
  pool_list: PoolSDKType[];
  pool_count: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    poolList: [],
    poolCount: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.poolCount.isZero()) {
      writer.uint32(24).uint64(message.poolCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      poolCount: isSet(object.poolCount) ? Long.fromValue(object.poolCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.poolCount = object.poolCount !== undefined && object.poolCount !== null ? Long.fromValue(object.poolCount) : Long.UZERO;
    return message;
  }
};