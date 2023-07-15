import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}
/** BaseNFT defines a non-fungible token */
export interface BaseNFTSDKType {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}
/** Denom defines a type of NFT */
export interface Denom {
  id: string;
  name: string;
  schema: string;
  creator: string;
  /**
   * This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is
   * needed for nft transfers
   */
  uri: string;
}
/** Denom defines a type of NFT */
export interface DenomSDKType {
  id: string;
  name: string;
  schema: string;
  creator: string;
  uri: string;
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollection {
  denomId: string;
  tokenIds: string[];
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollectionSDKType {
  denom_id: string;
  token_ids: string[];
}
/** Owner defines a type of owner */
export interface Owner {
  address: string;
  idCollections: IDCollection[];
}
/** Owner defines a type of owner */
export interface OwnerSDKType {
  address: string;
  id_collections: IDCollectionSDKType[];
}
/** Collection defines a type of collection */
export interface Collection {
  denom?: Denom;
  nfts: BaseNFT[];
}
/** Collection defines a type of collection */
export interface CollectionSDKType {
  denom?: DenomSDKType;
  nfts: BaseNFTSDKType[];
}
function createBaseBaseNFT(): BaseNFT {
  return {
    id: "",
    name: "",
    uri: "",
    data: "",
    owner: ""
  };
}
export const BaseNFT = {
  encode(message: BaseNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): BaseNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<BaseNFT>): BaseNFT {
    const message = createBaseBaseNFT();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.uri = object.uri ?? "";
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    return message;
  }
};
function createBaseDenom(): Denom {
  return {
    id: "",
    name: "",
    schema: "",
    creator: "",
    uri: ""
  };
}
export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    return writer;
  },
  fromJSON(object: any): Denom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      uri: isSet(object.uri) ? String(object.uri) : ""
    };
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.creator = object.creator ?? "";
    message.uri = object.uri ?? "";
    return message;
  }
};
function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    tokenIds: []
  };
}
export const IDCollection = {
  encode(message: IDCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.tokenIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): IDCollection {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      tokenIds: Array.isArray(object?.tokenIds) ? object.tokenIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<IDCollection>): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.tokenIds = object.tokenIds?.map(e => e) || [];
    return message;
  }
};
function createBaseOwner(): Owner {
  return {
    address: "",
    idCollections: []
  };
}
export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      idCollections: Array.isArray(object?.idCollections) ? object.idCollections.map((e: any) => IDCollection.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Owner>): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map(e => IDCollection.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCollection(): Collection {
  return {
    denom: undefined,
    nfts: []
  };
}
export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      BaseNFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => BaseNFT.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Collection>): Collection {
    const message = createBaseCollection();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.nfts = object.nfts?.map(e => BaseNFT.fromPartial(e)) || [];
    return message;
  }
};