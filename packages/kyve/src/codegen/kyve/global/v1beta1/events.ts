import { Params, ParamsAmino, ParamsSDKType } from "./global";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
  /** old_params is the module's old parameters. */
  oldParams: Params;
  /** new_params is the module's new parameters. */
  newParams: Params;
  /** payload is the parameter updates that were performed. */
  payload: string;
}
export interface EventUpdateParamsProtoMsg {
  typeUrl: "/kyve.global.v1beta1.EventUpdateParams";
  value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
  /** old_params is the module's old parameters. */
  old_params?: ParamsAmino;
  /** new_params is the module's new parameters. */
  new_params?: ParamsAmino;
  /** payload is the parameter updates that were performed. */
  payload?: string;
}
export interface EventUpdateParamsAminoMsg {
  type: "/kyve.global.v1beta1.EventUpdateParams";
  value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
  old_params: ParamsSDKType;
  new_params: ParamsSDKType;
  payload: string;
}
function createBaseEventUpdateParams(): EventUpdateParams {
  return {
    oldParams: Params.fromPartial({}),
    newParams: Params.fromPartial({}),
    payload: ""
  };
}
export const EventUpdateParams = {
  typeUrl: "/kyve.global.v1beta1.EventUpdateParams",
  encode(message: EventUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oldParams !== undefined) {
      Params.encode(message.oldParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateParams {
    return {
      oldParams: isSet(object.oldParams) ? Params.fromJSON(object.oldParams) : undefined,
      newParams: isSet(object.newParams) ? Params.fromJSON(object.newParams) : undefined,
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    message.oldParams = object.oldParams !== undefined && object.oldParams !== null ? Params.fromPartial(object.oldParams) : undefined;
    message.newParams = object.newParams !== undefined && object.newParams !== null ? Params.fromPartial(object.newParams) : undefined;
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: EventUpdateParamsAmino): EventUpdateParams {
    const message = createBaseEventUpdateParams();
    if (object.old_params !== undefined && object.old_params !== null) {
      message.oldParams = Params.fromAmino(object.old_params);
    }
    if (object.new_params !== undefined && object.new_params !== null) {
      message.newParams = Params.fromAmino(object.new_params);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = object.payload;
    }
    return message;
  },
  toAmino(message: EventUpdateParams): EventUpdateParamsAmino {
    const obj: any = {};
    obj.old_params = message.oldParams ? Params.toAmino(message.oldParams) : undefined;
    obj.new_params = message.newParams ? Params.toAmino(message.newParams) : undefined;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams {
    return EventUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams {
    return EventUpdateParams.decode(message.value);
  },
  toProto(message: EventUpdateParams): Uint8Array {
    return EventUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.global.v1beta1.EventUpdateParams",
      value: EventUpdateParams.encode(message).finish()
    };
  }
};