import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketData {
  /** the class_id of tokens to be transferred */
  classId: string;
  /** the class_uri of tokens to be transferred */
  classUri: string;
  /** the non fungible tokens to be transferred (count should be equal to token_uris) */
  tokenIds: string[];
  /** the non fungible tokens's uri to be transferred (count should be equal to token ids) */
  tokenUris: string[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketDataSDKType {
  class_id: string;
  class_uri: string;
  token_ids: string[];
  token_uris: string[];
  sender: string;
  receiver: string;
}
function createBaseNonFungibleTokenPacketData(): NonFungibleTokenPacketData {
  return {
    classId: "",
    classUri: "",
    tokenIds: [],
    tokenUris: [],
    sender: "",
    receiver: ""
  };
}
export const NonFungibleTokenPacketData = {
  encode(message: NonFungibleTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.classUri !== "") {
      writer.uint32(18).string(message.classUri);
    }
    for (const v of message.tokenIds) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.tokenUris) {
      writer.uint32(34).string(v!);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): NonFungibleTokenPacketData {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      classUri: isSet(object.classUri) ? String(object.classUri) : "",
      tokenIds: Array.isArray(object?.tokenIds) ? object.tokenIds.map((e: any) => String(e)) : [],
      tokenUris: Array.isArray(object?.tokenUris) ? object.tokenUris.map((e: any) => String(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<NonFungibleTokenPacketData>): NonFungibleTokenPacketData {
    const message = createBaseNonFungibleTokenPacketData();
    message.classId = object.classId ?? "";
    message.classUri = object.classUri ?? "";
    message.tokenIds = object.tokenIds?.map(e => e) || [];
    message.tokenUris = object.tokenUris?.map(e => e) || [];
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }
};