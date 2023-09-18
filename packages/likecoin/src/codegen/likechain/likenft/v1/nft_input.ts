import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface NFTInput {
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
}
export interface NFTInputProtoMsg {
  typeUrl: "/likechain.likenft.v1.NFTInput";
  value: Uint8Array;
}
export interface NFTInputAmino {
  uri: string;
  uri_hash: string;
  metadata: Uint8Array;
}
export interface NFTInputAminoMsg {
  type: "/likechain.likenft.v1.NFTInput";
  value: NFTInputAmino;
}
export interface NFTInputSDKType {
  uri: string;
  uri_hash: string;
  metadata: Uint8Array;
}
function createBaseNFTInput(): NFTInput {
  return {
    uri: "",
    uriHash: "",
    metadata: new Uint8Array()
  };
}
export const NFTInput = {
  typeUrl: "/likechain.likenft.v1.NFTInput",
  encode(message: NFTInput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(18).string(message.uriHash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },
  fromJSON(object: any): NFTInput {
    return {
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<NFTInput>): NFTInput {
    const message = createBaseNFTInput();
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: NFTInputAmino): NFTInput {
    return {
      uri: object.uri,
      uriHash: object.uri_hash,
      metadata: object.metadata
    };
  },
  toAmino(message: NFTInput): NFTInputAmino {
    const obj: any = {};
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: NFTInputAminoMsg): NFTInput {
    return NFTInput.fromAmino(object.value);
  },
  fromProtoMsg(message: NFTInputProtoMsg): NFTInput {
    return NFTInput.decode(message.value);
  },
  toProto(message: NFTInput): Uint8Array {
    return NFTInput.encode(message).finish();
  },
  toProtoMsg(message: NFTInput): NFTInputProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.NFTInput",
      value: NFTInput.encode(message).finish()
    };
  }
};