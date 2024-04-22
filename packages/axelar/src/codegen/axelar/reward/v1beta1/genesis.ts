import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  pools: Pool[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  pools?: PoolAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/axelar.reward.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  pools: PoolSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    pools: []
  };
}
export const GenesisState = {
  typeUrl: "/axelar.reward.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
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
      typeUrl: "/axelar.reward.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};