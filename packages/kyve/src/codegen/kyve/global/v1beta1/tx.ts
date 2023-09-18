import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/global parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/kyve.global.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/global parameters to update. */
  payload: string;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/kyve.global.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  payload: string;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/kyve.global.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/kyve.global.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    payload: ""
  };
}
export const MsgUpdateParams = {
  typeUrl: "/kyve.global.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      payload: isSet(object.payload) ? String(object.payload) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      payload: object.payload
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.payload = message.payload;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/kyve.global.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/kyve.global.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/kyve.global.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};