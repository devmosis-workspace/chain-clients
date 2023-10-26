import { DowntimeParams, DowntimeParamsAmino, DowntimeParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the blocktime module's genesis state. */
export interface GenesisState {
  params: DowntimeParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the blocktime module's genesis state. */
export interface GenesisStateAmino {
  params?: DowntimeParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/dydxprotocol.blocktime.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the blocktime module's genesis state. */
export interface GenesisStateSDKType {
  params: DowntimeParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: DowntimeParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/dydxprotocol.blocktime.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      DowntimeParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? DowntimeParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? DowntimeParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? DowntimeParams.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? DowntimeParams.toAmino(message.params) : undefined;
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
      typeUrl: "/dydxprotocol.blocktime.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};