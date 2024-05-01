import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitch {
  sender: string;
}
export interface MsgToggleIbcSwitchProtoMsg {
  typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
  value: Uint8Array;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchAmino {
  sender?: string;
}
export interface MsgToggleIbcSwitchAminoMsg {
  type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
  value: MsgToggleIbcSwitchAmino;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchSDKType {
  sender: string;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {}
export interface MsgToggleIbcSwitchResponseProtoMsg {
  typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse";
  value: Uint8Array;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseAmino {}
export interface MsgToggleIbcSwitchResponseAminoMsg {
  type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse";
  value: MsgToggleIbcSwitchResponseAmino;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseSDKType {}
function createBaseMsgToggleIbcSwitch(): MsgToggleIbcSwitch {
  return {
    sender: ""
  };
}
export const MsgToggleIbcSwitch = {
  typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch",
  encode(message: MsgToggleIbcSwitch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleIbcSwitch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch {
    const message = createBaseMsgToggleIbcSwitch();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgToggleIbcSwitchAmino): MsgToggleIbcSwitch {
    const message = createBaseMsgToggleIbcSwitch();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgToggleIbcSwitch): MsgToggleIbcSwitchAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgToggleIbcSwitchAminoMsg): MsgToggleIbcSwitch {
    return MsgToggleIbcSwitch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleIbcSwitchProtoMsg): MsgToggleIbcSwitch {
    return MsgToggleIbcSwitch.decode(message.value);
  },
  toProto(message: MsgToggleIbcSwitch): Uint8Array {
    return MsgToggleIbcSwitch.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleIbcSwitch): MsgToggleIbcSwitchProtoMsg {
    return {
      typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch",
      value: MsgToggleIbcSwitch.encode(message).finish()
    };
  }
};
function createBaseMsgToggleIbcSwitchResponse(): MsgToggleIbcSwitchResponse {
  return {};
}
export const MsgToggleIbcSwitchResponse = {
  typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse",
  encode(_: MsgToggleIbcSwitchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgToggleIbcSwitchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    const message = createBaseMsgToggleIbcSwitchResponse();
    return message;
  },
  fromAmino(_: MsgToggleIbcSwitchResponseAmino): MsgToggleIbcSwitchResponse {
    const message = createBaseMsgToggleIbcSwitchResponse();
    return message;
  },
  toAmino(_: MsgToggleIbcSwitchResponse): MsgToggleIbcSwitchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleIbcSwitchResponseAminoMsg): MsgToggleIbcSwitchResponse {
    return MsgToggleIbcSwitchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleIbcSwitchResponseProtoMsg): MsgToggleIbcSwitchResponse {
    return MsgToggleIbcSwitchResponse.decode(message.value);
  },
  toProto(message: MsgToggleIbcSwitchResponse): Uint8Array {
    return MsgToggleIbcSwitchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleIbcSwitchResponse): MsgToggleIbcSwitchResponseProtoMsg {
    return {
      typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse",
      value: MsgToggleIbcSwitchResponse.encode(message).finish()
    };
  }
};