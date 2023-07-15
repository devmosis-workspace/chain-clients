import { Params, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
  params?: Params;
  portId: string;
  callbackDataList: CallbackData[];
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  port_id: string;
  callback_data_list: CallbackDataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    callbackDataList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};