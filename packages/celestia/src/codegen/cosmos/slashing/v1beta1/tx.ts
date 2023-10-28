import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  validatorAddr: string;
}
export interface MsgUnjailProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
  value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
  validator_addr: string;
}
export interface MsgUnjailAminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}
export interface MsgUnjailResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
  value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {}
export interface MsgUnjailResponseAminoMsg {
  type: "cosmos-sdk/MsgUnjailResponse";
  value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {}
function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: ""
  };
}
export const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  encode(message: MsgUnjail, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnjail {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : ""
    };
  },
  fromPartial(object: Partial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailAmino): MsgUnjail {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: MsgUnjail): MsgUnjailAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail {
    return MsgUnjail.decode(message.value);
  },
  toProto(message: MsgUnjail): Uint8Array {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}
export const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  encode(_: MsgUnjailResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnjailResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse {
    return {};
  },
  toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto(message: MsgUnjailResponse): Uint8Array {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};