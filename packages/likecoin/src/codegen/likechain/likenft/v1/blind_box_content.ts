import { NFTInput, NFTInputAmino, NFTInputSDKType } from "./nft_input";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface BlindBoxContent {
  classId: string;
  id: string;
  input: NFTInput;
}
export interface BlindBoxContentProtoMsg {
  typeUrl: "/likechain.likenft.v1.BlindBoxContent";
  value: Uint8Array;
}
export interface BlindBoxContentAmino {
  class_id: string;
  id: string;
  input?: NFTInputAmino;
}
export interface BlindBoxContentAminoMsg {
  type: "/likechain.likenft.v1.BlindBoxContent";
  value: BlindBoxContentAmino;
}
export interface BlindBoxContentSDKType {
  class_id: string;
  id: string;
  input: NFTInputSDKType;
}
function createBaseBlindBoxContent(): BlindBoxContent {
  return {
    classId: "",
    id: "",
    input: NFTInput.fromPartial({})
  };
}
export const BlindBoxContent = {
  typeUrl: "/likechain.likenft.v1.BlindBoxContent",
  encode(message: BlindBoxContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BlindBoxContentAmino): BlindBoxContent {
    return {
      classId: object.class_id,
      id: object.id,
      input: object?.input ? NFTInput.fromAmino(object.input) : undefined
    };
  },
  toAmino(message: BlindBoxContent): BlindBoxContentAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.input = message.input ? NFTInput.toAmino(message.input) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlindBoxContentAminoMsg): BlindBoxContent {
    return BlindBoxContent.fromAmino(object.value);
  },
  fromProtoMsg(message: BlindBoxContentProtoMsg): BlindBoxContent {
    return BlindBoxContent.decode(message.value);
  },
  toProto(message: BlindBoxContent): Uint8Array {
    return BlindBoxContent.encode(message).finish();
  },
  toProtoMsg(message: BlindBoxContent): BlindBoxContentProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.BlindBoxContent",
      value: BlindBoxContent.encode(message).finish()
    };
  }
};