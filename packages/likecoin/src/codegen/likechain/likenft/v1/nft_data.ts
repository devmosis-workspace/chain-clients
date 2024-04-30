import { ClassParent, ClassParentAmino, ClassParentSDKType } from "./class_data";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface NFTData {
  metadata: Uint8Array;
  classParent: ClassParent;
  toBeRevealed: boolean;
}
export interface NFTDataProtoMsg {
  typeUrl: "/likechain.likenft.v1.NFTData";
  value: Uint8Array;
}
export interface NFTDataAmino {
  metadata?: string;
  class_parent?: ClassParentAmino;
  to_be_revealed?: boolean;
}
export interface NFTDataAminoMsg {
  type: "/likechain.likenft.v1.NFTData";
  value: NFTDataAmino;
}
export interface NFTDataSDKType {
  metadata: Uint8Array;
  class_parent: ClassParentSDKType;
  to_be_revealed: boolean;
}
function createBaseNFTData(): NFTData {
  return {
    metadata: new Uint8Array(),
    classParent: ClassParent.fromPartial({}),
    toBeRevealed: false
  };
}
export const NFTData = {
  typeUrl: "/likechain.likenft.v1.NFTData",
  encode(message: NFTData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: NFTDataAmino): NFTData {
    const message = createBaseNFTData();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.class_parent !== undefined && object.class_parent !== null) {
      message.classParent = ClassParent.fromAmino(object.class_parent);
    }
    if (object.to_be_revealed !== undefined && object.to_be_revealed !== null) {
      message.toBeRevealed = object.to_be_revealed;
    }
    return message;
  },
  toAmino(message: NFTData): NFTDataAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.class_parent = message.classParent ? ClassParent.toAmino(message.classParent) : undefined;
    obj.to_be_revealed = message.toBeRevealed;
    return obj;
  },
  fromAminoMsg(object: NFTDataAminoMsg): NFTData {
    return NFTData.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTDataProtoMsg): NFTData {
    return NFTData.decode(message.value);
  },
  toProto(message: NFTData): Uint8Array {
    return NFTData.encode(message).finish();
  },
  toProtoMsg(message: NFTData): NFTDataProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.NFTData",
      value: NFTData.encode(message).finish()
    };
  }
};