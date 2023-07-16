import { NFTInput, NFTInputSDKType } from "./nft_input";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface BlindBoxContent {
  classId: string;
  id: string;
  input?: NFTInput;
}
export interface BlindBoxContentSDKType {
  class_id: string;
  id: string;
  input?: NFTInputSDKType;
}
function createBaseBlindBoxContent(): BlindBoxContent {
  return {
    classId: "",
    id: "",
    input: undefined
  };
}
export const BlindBoxContent = {
  encode(message: BlindBoxContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.input !== undefined) {
      NFTInput.encode(message.input, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlindBoxContent {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      input: isSet(object.input) ? NFTInput.fromJSON(object.input) : undefined
    };
  },
  fromPartial(object: Partial<BlindBoxContent>): BlindBoxContent {
    const message = createBaseBlindBoxContent();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.input = object.input !== undefined && object.input !== null ? NFTInput.fromPartial(object.input) : undefined;
    return message;
  }
};