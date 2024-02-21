import { LimitParams, LimitParamsSDKType } from "./limit_params";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgSetLimitParams is the Msg/SetLimitParams request type. */
export interface MsgSetLimitParams {
  authority: string;
  /** Defines the parameters to set. All parameters must be supplied. */
  limitParams?: LimitParams;
}
export interface MsgSetLimitParamsProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams";
  value: Uint8Array;
}
/** MsgSetLimitParams is the Msg/SetLimitParams request type. */
export interface MsgSetLimitParamsSDKType {
  authority: string;
  limit_params?: LimitParamsSDKType;
}
/** MsgSetLimitParamsResponse is the Msg/SetLimitParams response type. */
export interface MsgSetLimitParamsResponse {}
export interface MsgSetLimitParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParamsResponse";
  value: Uint8Array;
}
/** MsgSetLimitParamsResponse is the Msg/SetLimitParams response type. */
export interface MsgSetLimitParamsResponseSDKType {}
/** MsgDeleteLimitParams is the Msg/SetLimitParams request type. */
export interface MsgDeleteLimitParams {
  authority: string;
  /** The denom for which the `LimitParams` should be deleted. */
  denom: string;
}
export interface MsgDeleteLimitParamsProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams";
  value: Uint8Array;
}
/** MsgDeleteLimitParams is the Msg/SetLimitParams request type. */
export interface MsgDeleteLimitParamsSDKType {
  authority: string;
  denom: string;
}
/** MsgDeleteLimitParamsResponse is the Msg/DeleteLimitParams response type. */
export interface MsgDeleteLimitParamsResponse {}
export interface MsgDeleteLimitParamsResponseProtoMsg {
  typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParamsResponse";
  value: Uint8Array;
}
/** MsgDeleteLimitParamsResponse is the Msg/DeleteLimitParams response type. */
export interface MsgDeleteLimitParamsResponseSDKType {}
function createBaseMsgSetLimitParams(): MsgSetLimitParams {
  return {
    authority: "",
    limitParams: undefined
  };
}
export const MsgSetLimitParams = {
  typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
  encode(message: MsgSetLimitParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.limitParams !== undefined) {
      LimitParams.encode(message.limitParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetLimitParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      limitParams: isSet(object.limitParams) ? LimitParams.fromJSON(object.limitParams) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetLimitParams>): MsgSetLimitParams {
    const message = createBaseMsgSetLimitParams();
    message.authority = object.authority ?? "";
    message.limitParams = object.limitParams !== undefined && object.limitParams !== null ? LimitParams.fromPartial(object.limitParams) : undefined;
    return message;
  },
  fromAmino(object: MsgSetLimitParamsAmino): MsgSetLimitParams {
    const message = createBaseMsgSetLimitParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.limit_params !== undefined && object.limit_params !== null) {
      message.limitParams = LimitParams.fromAmino(object.limit_params);
    }
    return message;
  },
  toAmino(message: MsgSetLimitParams): MsgSetLimitParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.limit_params = message.limitParams ? LimitParams.toAmino(message.limitParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetLimitParamsAminoMsg): MsgSetLimitParams {
    return MsgSetLimitParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetLimitParamsProtoMsg): MsgSetLimitParams {
    return MsgSetLimitParams.decode(message.value);
  },
  toProto(message: MsgSetLimitParams): Uint8Array {
    return MsgSetLimitParams.encode(message).finish();
  },
  toProtoMsg(message: MsgSetLimitParams): MsgSetLimitParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
      value: MsgSetLimitParams.encode(message).finish()
    };
  }
};
function createBaseMsgSetLimitParamsResponse(): MsgSetLimitParamsResponse {
  return {};
}
export const MsgSetLimitParamsResponse = {
  typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParamsResponse",
  encode(_: MsgSetLimitParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetLimitParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetLimitParamsResponse>): MsgSetLimitParamsResponse {
    const message = createBaseMsgSetLimitParamsResponse();
    return message;
  },
  fromAmino(_: MsgSetLimitParamsResponseAmino): MsgSetLimitParamsResponse {
    const message = createBaseMsgSetLimitParamsResponse();
    return message;
  },
  toAmino(_: MsgSetLimitParamsResponse): MsgSetLimitParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetLimitParamsResponseAminoMsg): MsgSetLimitParamsResponse {
    return MsgSetLimitParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetLimitParamsResponseProtoMsg): MsgSetLimitParamsResponse {
    return MsgSetLimitParamsResponse.decode(message.value);
  },
  toProto(message: MsgSetLimitParamsResponse): Uint8Array {
    return MsgSetLimitParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetLimitParamsResponse): MsgSetLimitParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParamsResponse",
      value: MsgSetLimitParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteLimitParams(): MsgDeleteLimitParams {
  return {
    authority: "",
    denom: ""
  };
}
export const MsgDeleteLimitParams = {
  typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
  encode(message: MsgDeleteLimitParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteLimitParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteLimitParams>): MsgDeleteLimitParams {
    const message = createBaseMsgDeleteLimitParams();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteLimitParamsAmino): MsgDeleteLimitParams {
    const message = createBaseMsgDeleteLimitParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteLimitParams): MsgDeleteLimitParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteLimitParamsAminoMsg): MsgDeleteLimitParams {
    return MsgDeleteLimitParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteLimitParamsProtoMsg): MsgDeleteLimitParams {
    return MsgDeleteLimitParams.decode(message.value);
  },
  toProto(message: MsgDeleteLimitParams): Uint8Array {
    return MsgDeleteLimitParams.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteLimitParams): MsgDeleteLimitParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
      value: MsgDeleteLimitParams.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteLimitParamsResponse(): MsgDeleteLimitParamsResponse {
  return {};
}
export const MsgDeleteLimitParamsResponse = {
  typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParamsResponse",
  encode(_: MsgDeleteLimitParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteLimitParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteLimitParamsResponse>): MsgDeleteLimitParamsResponse {
    const message = createBaseMsgDeleteLimitParamsResponse();
    return message;
  },
  fromAmino(_: MsgDeleteLimitParamsResponseAmino): MsgDeleteLimitParamsResponse {
    const message = createBaseMsgDeleteLimitParamsResponse();
    return message;
  },
  toAmino(_: MsgDeleteLimitParamsResponse): MsgDeleteLimitParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteLimitParamsResponseAminoMsg): MsgDeleteLimitParamsResponse {
    return MsgDeleteLimitParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteLimitParamsResponseProtoMsg): MsgDeleteLimitParamsResponse {
    return MsgDeleteLimitParamsResponse.decode(message.value);
  },
  toProto(message: MsgDeleteLimitParamsResponse): Uint8Array {
    return MsgDeleteLimitParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteLimitParamsResponse): MsgDeleteLimitParamsResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParamsResponse",
      value: MsgDeleteLimitParamsResponse.encode(message).finish()
    };
  }
};