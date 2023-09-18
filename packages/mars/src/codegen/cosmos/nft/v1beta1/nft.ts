import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Class defines the class of the nft type. */
export interface Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol: string;
  /** description is a brief description of nft classification. Optional */
  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uriHash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data: Any;
}
export interface ClassProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.Class";
  value: Uint8Array;
}
/** Class defines the class of the nft type. */
export interface ClassAmino {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol: string;
  /** description is a brief description of nft classification. Optional */
  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uri_hash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data?: AnyAmino;
}
export interface ClassAminoMsg {
  type: "cosmos-sdk/Class";
  value: ClassAmino;
}
/** Class defines the class of the nft type. */
export interface ClassSDKType {
  id: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data: AnySDKType;
}
/** NFT defines the NFT. */
export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uriHash: string;
  /** data is an app specific data of the NFT. Optional */
  data: Any;
}
export interface NFTProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.NFT";
  value: Uint8Array;
}
/** NFT defines the NFT. */
export interface NFTAmino {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uri_hash: string;
  /** data is an app specific data of the NFT. Optional */
  data?: AnyAmino;
}
export interface NFTAminoMsg {
  type: "cosmos-sdk/NFT";
  value: NFTAmino;
}
/** NFT defines the NFT. */
export interface NFTSDKType {
  class_id: string;
  id: string;
  uri: string;
  uri_hash: string;
  data: AnySDKType;
}
function createBaseClass(): Class {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: Any.fromPartial({})
  };
}
export const Class = {
  typeUrl: "/cosmos.nft.v1beta1.Class",
  encode(message: Class, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Class {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined
    };
  },
  fromPartial(object: Partial<Class>): Class {
    const message = createBaseClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: ClassAmino): Class {
    return {
      id: object.id,
      name: object.name,
      symbol: object.symbol,
      description: object.description,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object?.data ? Any.fromAmino(object.data) : undefined
    };
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  toAminoMsg(message: Class): ClassAminoMsg {
    return {
      type: "cosmos-sdk/Class",
      value: Class.toAmino(message)
    };
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Class",
      value: Class.encode(message).finish()
    };
  }
};
function createBaseNFT(): NFT {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: Any.fromPartial({})
  };
}
export const NFT = {
  typeUrl: "/cosmos.nft.v1beta1.NFT",
  encode(message: NFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): NFT {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined
    };
  },
  fromPartial(object: Partial<NFT>): NFT {
    const message = createBaseNFT();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: NFTAmino): NFT {
    return {
      classId: object.class_id,
      id: object.id,
      uri: object.uri,
      uriHash: object.uri_hash,
      data: object?.data ? Any.fromAmino(object.data) : undefined
    };
  },
  toAmino(message: NFT): NFTAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: NFTAminoMsg): NFT {
    return NFT.fromAmino(object.value);
  },
  toAminoMsg(message: NFT): NFTAminoMsg {
    return {
      type: "cosmos-sdk/NFT",
      value: NFT.toAmino(message)
    };
  },
  fromProtoMsg(message: NFTProtoMsg): NFT {
    return NFT.decode(message.value);
  },
  toProto(message: NFT): Uint8Array {
    return NFT.encode(message).finish();
  },
  toProtoMsg(message: NFT): NFTProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.NFT",
      value: NFT.encode(message).finish()
    };
  }
};