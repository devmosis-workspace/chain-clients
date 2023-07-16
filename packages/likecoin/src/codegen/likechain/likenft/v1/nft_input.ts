import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface NFTInput {
  uri: string;
  uriHash: string;
  metadata: Uint8Array;
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
  encode(message: NFTInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};