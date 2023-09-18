import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataAmino, CallbackDataSDKType } from "./callback_data";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
  params: Params;
  portId: string;
  callbackDataList: CallbackData[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/stride.icacallbacks.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  port_id: string;
  callback_data_list: CallbackDataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/stride.icacallbacks.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  port_id: string;
  callback_data_list: CallbackDataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    portId: "",
    callbackDataList: []
  };
}
export const GenesisState = {
  typeUrl: "/stride.icacallbacks.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.callbackDataList) {
      CallbackData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      callbackDataList: Array.isArray(object?.callbackDataList) ? object.callbackDataList.map((e: any) => CallbackData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.portId = object.portId ?? "";
    message.callbackDataList = object.callbackDataList?.map(e => CallbackData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      portId: object.port_id,
      callbackDataList: Array.isArray(object?.callback_data_list) ? object.callback_data_list.map((e: any) => CallbackData.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.port_id = message.portId;
    if (message.callbackDataList) {
      obj.callback_data_list = message.callbackDataList.map(e => e ? CallbackData.toAmino(e) : undefined);
    } else {
      obj.callback_data_list = [];
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
      typeUrl: "/stride.icacallbacks.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};