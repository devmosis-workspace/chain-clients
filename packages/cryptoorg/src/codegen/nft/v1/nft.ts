import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}
export interface BaseNFTProtoMsg {
  typeUrl: "/chainmain.nft.v1.BaseNFT";
  value: Uint8Array;
}
/** BaseNFT defines a non-fungible token */
export interface BaseNFTAmino {
  id: string;
  name: string;
  uri: string;
  data: string;
  owner: string;
}
export interface BaseNFTAminoMsg {
  type: "/chainmain.nft.v1.BaseNFT";
  value: BaseNFTAmino;
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
export interface DenomProtoMsg {
  typeUrl: "/chainmain.nft.v1.Denom";
  value: Uint8Array;
}
/** Denom defines a type of NFT */
export interface DenomAmino {
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
export interface DenomAminoMsg {
  type: "/chainmain.nft.v1.Denom";
  value: DenomAmino;
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
export interface IDCollectionProtoMsg {
  typeUrl: "/chainmain.nft.v1.IDCollection";
  value: Uint8Array;
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollectionAmino {
  denom_id: string;
  token_ids: string[];
}
export interface IDCollectionAminoMsg {
  type: "/chainmain.nft.v1.IDCollection";
  value: IDCollectionAmino;
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
export interface OwnerProtoMsg {
  typeUrl: "/chainmain.nft.v1.Owner";
  value: Uint8Array;
}
/** Owner defines a type of owner */
export interface OwnerAmino {
  address: string;
  id_collections: IDCollectionAmino[];
}
export interface OwnerAminoMsg {
  type: "/chainmain.nft.v1.Owner";
  value: OwnerAmino;
}
/** Owner defines a type of owner */
export interface OwnerSDKType {
  address: string;
  id_collections: IDCollectionSDKType[];
}
/** Collection defines a type of collection */
export interface Collection {
  denom: Denom;
  nfts: BaseNFT[];
}
export interface CollectionProtoMsg {
  typeUrl: "/chainmain.nft.v1.Collection";
  value: Uint8Array;
}
/** Collection defines a type of collection */
export interface CollectionAmino {
  denom?: DenomAmino;
  nfts: BaseNFTAmino[];
}
export interface CollectionAminoMsg {
  type: "/chainmain.nft.v1.Collection";
  value: CollectionAmino;
}
/** Collection defines a type of collection */
export interface CollectionSDKType {
  denom: DenomSDKType;
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
  typeUrl: "/chainmain.nft.v1.BaseNFT",
  encode(message: BaseNFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BaseNFTAmino): BaseNFT {
    return {
      id: object.id,
      name: object.name,
      uri: object.uri,
      data: object.data,
      owner: object.owner
    };
  },
  toAmino(message: BaseNFT): BaseNFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.uri = message.uri;
    obj.data = message.data;
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: BaseNFTAminoMsg): BaseNFT {
    return BaseNFT.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseNFTProtoMsg): BaseNFT {
    return BaseNFT.decode(message.value);
  },
  toProto(message: BaseNFT): Uint8Array {
    return BaseNFT.encode(message).finish();
  },
  toProtoMsg(message: BaseNFT): BaseNFTProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.BaseNFT",
      value: BaseNFT.encode(message).finish()
    };
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
  typeUrl: "/chainmain.nft.v1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: DenomAmino): Denom {
    return {
      id: object.id,
      name: object.name,
      schema: object.schema,
      creator: object.creator,
      uri: object.uri
    };
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.schema = message.schema;
    obj.creator = message.creator;
    obj.uri = message.uri;
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    tokenIds: []
  };
}
export const IDCollection = {
  typeUrl: "/chainmain.nft.v1.IDCollection",
  encode(message: IDCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: IDCollectionAmino): IDCollection {
    return {
      denomId: object.denom_id,
      tokenIds: Array.isArray(object?.token_ids) ? object.token_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: IDCollection): IDCollectionAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e);
    } else {
      obj.token_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: IDCollectionAminoMsg): IDCollection {
    return IDCollection.fromAmino(object.value);
  },
  fromProtoMsg(message: IDCollectionProtoMsg): IDCollection {
    return IDCollection.decode(message.value);
  },
  toProto(message: IDCollection): Uint8Array {
    return IDCollection.encode(message).finish();
  },
  toProtoMsg(message: IDCollection): IDCollectionProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.IDCollection",
      value: IDCollection.encode(message).finish()
    };
  }
};
function createBaseOwner(): Owner {
  return {
    address: "",
    idCollections: []
  };
}
export const Owner = {
  typeUrl: "/chainmain.nft.v1.Owner",
  encode(message: Owner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: OwnerAmino): Owner {
    return {
      address: object.address,
      idCollections: Array.isArray(object?.id_collections) ? object.id_collections.map((e: any) => IDCollection.fromAmino(e)) : []
    };
  },
  toAmino(message: Owner): OwnerAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.idCollections) {
      obj.id_collections = message.idCollections.map(e => e ? IDCollection.toAmino(e) : undefined);
    } else {
      obj.id_collections = [];
    }
    return obj;
  },
  fromAminoMsg(object: OwnerAminoMsg): Owner {
    return Owner.fromAmino(object.value);
  },
  fromProtoMsg(message: OwnerProtoMsg): Owner {
    return Owner.decode(message.value);
  },
  toProto(message: Owner): Uint8Array {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message: Owner): OwnerProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseCollection(): Collection {
  return {
    denom: Denom.fromPartial({}),
    nfts: []
  };
}
export const Collection = {
  typeUrl: "/chainmain.nft.v1.Collection",
  encode(message: Collection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CollectionAmino): Collection {
    return {
      denom: object?.denom ? Denom.fromAmino(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => BaseNFT.fromAmino(e)) : []
    };
  },
  toAmino(message: Collection): CollectionAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? BaseNFT.toAmino(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: CollectionAminoMsg): Collection {
    return Collection.fromAmino(object.value);
  },
  fromProtoMsg(message: CollectionProtoMsg): Collection {
    return Collection.decode(message.value);
  },
  toProto(message: Collection): Uint8Array {
    return Collection.encode(message).finish();
  },
  toProtoMsg(message: Collection): CollectionProtoMsg {
    return {
      typeUrl: "/chainmain.nft.v1.Collection",
      value: Collection.encode(message).finish()
    };
  }
};