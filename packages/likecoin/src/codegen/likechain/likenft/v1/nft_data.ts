import { ClassParent, ClassParentSDKType } from "./class_data";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface NFTData {
  metadata: Uint8Array;
  classParent?: ClassParent;
  toBeRevealed: boolean;
}
export interface NFTDataSDKType {
  metadata: Uint8Array;
  class_parent?: ClassParentSDKType;
  to_be_revealed: boolean;
}
function createBaseNFTData(): NFTData {
  return {
    metadata: new Uint8Array(),
    classParent: undefined,
    toBeRevealed: false
  };
}
export const NFTData = {
  encode(message: NFTData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata.length !== 0) {
      writer.uint32(10).bytes(message.metadata);
    }
    if (message.classParent !== undefined) {
      ClassParent.encode(message.classParent, writer.uint32(18).fork()).ldelim();
    }
    if (message.toBeRevealed === true) {
      writer.uint32(24).bool(message.toBeRevealed);
    }
    return writer;
  },
  fromJSON(object: any): NFTData {
    return {
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(),
      classParent: isSet(object.classParent) ? ClassParent.fromJSON(object.classParent) : undefined,
      toBeRevealed: isSet(object.toBeRevealed) ? Boolean(object.toBeRevealed) : false
    };
  },
  fromPartial(object: Partial<NFTData>): NFTData {
    const message = createBaseNFTData();
    message.metadata = object.metadata ?? new Uint8Array();
    message.classParent = object.classParent !== undefined && object.classParent !== null ? ClassParent.fromPartial(object.classParent) : undefined;
    message.toBeRevealed = object.toBeRevealed ?? false;
    return message;
  }
};