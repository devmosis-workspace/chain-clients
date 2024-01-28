import { DowntimeParams, DowntimeParamsAmino, DowntimeParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParams {
  authority: string;
  /** Defines the parameters to update. All parameters must be supplied. */
  params: DowntimeParams;
}
export interface MsgUpdateDowntimeParamsProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams";
  value: Uint8Array;
}
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParamsAmino {
  authority?: string;
  /** Defines the parameters to update. All parameters must be supplied. */
  params?: DowntimeParamsAmino;
}
export interface MsgUpdateDowntimeParamsAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams";
  value: MsgUpdateDowntimeParamsAmino;
}
/** MsgUpdateDowntimeParams is the Msg/UpdateDowntimeParams request type. */
export interface MsgUpdateDowntimeParamsSDKType {
  authority: string;
  params: DowntimeParamsSDKType;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponse {}
export interface MsgUpdateDowntimeParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponseAmino {}
export interface MsgUpdateDowntimeParamsResponseAminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse";
  value: MsgUpdateDowntimeParamsResponseAmino;
}
/**
 * MsgUpdateDowntimeParamsResponse is the Msg/UpdateDowntimeParams response
 * type.
 */
export interface MsgUpdateDowntimeParamsResponseSDKType {}
function createBaseMsgUpdateDowntimeParams(): MsgUpdateDowntimeParams {
  return {
    authority: "",
    params: DowntimeParams.fromPartial({})
  };
}
export const MsgUpdateDowntimeParams = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
  encode(message: MsgUpdateDowntimeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      DowntimeParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDowntimeParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? DowntimeParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateDowntimeParams>): MsgUpdateDowntimeParams {
    const message = createBaseMsgUpdateDowntimeParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? DowntimeParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateDowntimeParamsAmino): MsgUpdateDowntimeParams {
    const message = createBaseMsgUpdateDowntimeParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = DowntimeParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateDowntimeParams): MsgUpdateDowntimeParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? DowntimeParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDowntimeParamsAminoMsg): MsgUpdateDowntimeParams {
    return MsgUpdateDowntimeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDowntimeParamsProtoMsg): MsgUpdateDowntimeParams {
    return MsgUpdateDowntimeParams.decode(message.value);
  },
  toProto(message: MsgUpdateDowntimeParams): Uint8Array {
    return MsgUpdateDowntimeParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDowntimeParams): MsgUpdateDowntimeParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
      value: MsgUpdateDowntimeParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDowntimeParamsResponse(): MsgUpdateDowntimeParamsResponse {
  return {};
}
export const MsgUpdateDowntimeParamsResponse = {
  typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse",
  encode(_: MsgUpdateDowntimeParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDowntimeParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDowntimeParamsResponse>): MsgUpdateDowntimeParamsResponse {
    const message = createBaseMsgUpdateDowntimeParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDowntimeParamsResponseAmino): MsgUpdateDowntimeParamsResponse {
    const message = createBaseMsgUpdateDowntimeParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateDowntimeParamsResponse): MsgUpdateDowntimeParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDowntimeParamsResponseAminoMsg): MsgUpdateDowntimeParamsResponse {
    return MsgUpdateDowntimeParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDowntimeParamsResponseProtoMsg): MsgUpdateDowntimeParamsResponse {
    return MsgUpdateDowntimeParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDowntimeParamsResponse): Uint8Array {
    return MsgUpdateDowntimeParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDowntimeParamsResponse): MsgUpdateDowntimeParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.blocktime.MsgUpdateDowntimeParamsResponse",
      value: MsgUpdateDowntimeParamsResponse.encode(message).finish()
    };
  }
};