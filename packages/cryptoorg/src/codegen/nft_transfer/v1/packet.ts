import { BinaryWriter } from "../../binary";
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
export interface NonFungibleTokenPacketDataProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData";
  value: Uint8Array;
}
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketDataAmino {
  /** the class_id of tokens to be transferred */
  class_id: string;
  /** the class_uri of tokens to be transferred */
  class_uri: string;
  /** the non fungible tokens to be transferred (count should be equal to token_uris) */
  token_ids: string[];
  /** the non fungible tokens's uri to be transferred (count should be equal to token ids) */
  token_uris: string[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface NonFungibleTokenPacketDataAminoMsg {
  type: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData";
  value: NonFungibleTokenPacketDataAmino;
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
  typeUrl: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData",
  encode(message: NonFungibleTokenPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: NonFungibleTokenPacketDataAmino): NonFungibleTokenPacketData {
    return {
      classId: object.class_id,
      classUri: object.class_uri,
      tokenIds: Array.isArray(object?.token_ids) ? object.token_ids.map((e: any) => e) : [],
      tokenUris: Array.isArray(object?.token_uris) ? object.token_uris.map((e: any) => e) : [],
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino(message: NonFungibleTokenPacketData): NonFungibleTokenPacketDataAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.class_uri = message.classUri;
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e);
    } else {
      obj.token_ids = [];
    }
    if (message.tokenUris) {
      obj.token_uris = message.tokenUris.map(e => e);
    } else {
      obj.token_uris = [];
    }
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: NonFungibleTokenPacketDataAminoMsg): NonFungibleTokenPacketData {
    return NonFungibleTokenPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: NonFungibleTokenPacketDataProtoMsg): NonFungibleTokenPacketData {
    return NonFungibleTokenPacketData.decode(message.value);
  },
  toProto(message: NonFungibleTokenPacketData): Uint8Array {
    return NonFungibleTokenPacketData.encode(message).finish();
  },
  toProtoMsg(message: NonFungibleTokenPacketData): NonFungibleTokenPacketDataProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData",
      value: NonFungibleTokenPacketData.encode(message).finish()
    };
  }
};