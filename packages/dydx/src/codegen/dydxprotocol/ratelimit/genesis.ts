import { LimitParams, LimitParamsSDKType } from "./limit_params";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisState {
  /** limit_params_list defines the list of `LimitParams` at genesis. */
  limitParamsList: LimitParams[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ratelimit module's genesis state. */
export interface GenesisStateSDKType {
  limit_params_list: LimitParamsSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    limitParamsList: []
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.ratelimit.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.limitParamsList) {
      LimitParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      limitParamsList: Array.isArray(object?.limitParamsList) ? object.limitParamsList.map((e: any) => LimitParams.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.limitParamsList = object.limitParamsList?.map(e => LimitParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.limitParamsList = object.limit_params_list?.map(e => LimitParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.limitParamsList) {
      obj.limit_params_list = message.limitParamsList.map(e => e ? LimitParams.toAmino(e) : undefined);
    } else {
      obj.limit_params_list = [];
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
      typeUrl: "/dydxprotocol.ratelimit.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};