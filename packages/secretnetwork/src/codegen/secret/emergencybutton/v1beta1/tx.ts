import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitch {
  sender: string;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchSDKType {
  sender: string;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseSDKType {}
function createBaseMsgToggleIbcSwitch(): MsgToggleIbcSwitch {
  return {
    sender: ""
  };
}
export const MsgToggleIbcSwitch = {
  encode(message: MsgToggleIbcSwitch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgToggleIbcSwitchResponse(): MsgToggleIbcSwitchResponse {
  return {};
}
export const MsgToggleIbcSwitchResponse = {
  encode(_: MsgToggleIbcSwitchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgToggleIbcSwitchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse {
    const message = createBaseMsgToggleIbcSwitchResponse();
    return message;
  }
};