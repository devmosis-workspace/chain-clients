import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** Collection */
export interface Collection {
  denom: Denom;
  onfts: ONFT[];
}
export interface CollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Collection";
  value: Uint8Array;
}
/** Collection */
export interface CollectionAmino {
  denom?: DenomAmino;
  onfts?: ONFTAmino[];
}
export interface CollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Collection";
  value: CollectionAmino;
}
/** Collection */
export interface CollectionSDKType {
  denom: DenomSDKType;
  onfts: ONFTSDKType[];
}
export interface IDCollection {
  denomId: string;
  onftIds: string[];
}
export interface IDCollectionProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.IDCollection";
  value: Uint8Array;
}
export interface IDCollectionAmino {
  denom_id?: string;
  onft_ids?: string[];
}
export interface IDCollectionAminoMsg {
  type: "/OmniFlix.onft.v1beta1.IDCollection";
  value: IDCollectionAmino;
}
export interface IDCollectionSDKType {
  denom_id: string;
  onft_ids: string[];
}
export interface Denom {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  previewUri: string;
  uri: string;
  uriHash: string;
  data: string;
  royaltyReceivers: WeightedAddress[];
}
export interface DenomProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Denom";
  value: Uint8Array;
}
export interface DenomAmino {
  id?: string;
  symbol?: string;
  name?: string;
  schema?: string;
  creator?: string;
  description?: string;
  preview_uri?: string;
  uri?: string;
  uri_hash?: string;
  data?: string;
  royalty_receivers?: WeightedAddressAmino[];
}
export interface DenomAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Denom";
  value: DenomAmino;
}
export interface DenomSDKType {
  id: string;
  symbol: string;
  name: string;
  schema: string;
  creator: string;
  description: string;
  preview_uri: string;
  uri: string;
  uri_hash: string;
  data: string;
  royalty_receivers: WeightedAddressSDKType[];
}
export interface DenomMetadata {
  creator: string;
  schema: string;
  description: string;
  previewUri: string;
  data: string;
  uriHash: string;
  royaltyReceivers: WeightedAddress[];
}
export interface DenomMetadataProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata";
  value: Uint8Array;
}
export interface DenomMetadataAmino {
  creator?: string;
  schema?: string;
  description?: string;
  preview_uri?: string;
  data?: string;
  uri_hash?: string;
  royalty_receivers?: WeightedAddressAmino[];
}
export interface DenomMetadataAminoMsg {
  type: "/OmniFlix.onft.v1beta1.DenomMetadata";
  value: DenomMetadataAmino;
}
export interface DenomMetadataSDKType {
  creator: string;
  schema: string;
  description: string;
  preview_uri: string;
  data: string;
  uri_hash: string;
  royalty_receivers: WeightedAddressSDKType[];
}
/** ASSET or ONFT */
export interface ONFT {
  id: string;
  metadata: Metadata;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  createdAt: Timestamp;
  nsfw: boolean;
  royaltyShare: string;
}
export interface ONFTProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFT";
  value: Uint8Array;
}
/** ASSET or ONFT */
export interface ONFTAmino {
  id?: string;
  metadata?: MetadataAmino;
  data?: string;
  owner?: string;
  transferable?: boolean;
  extensible?: boolean;
  created_at?: string;
  nsfw?: boolean;
  royalty_share?: string;
}
export interface ONFTAminoMsg {
  type: "/OmniFlix.onft.v1beta1.ONFT";
  value: ONFTAmino;
}
/** ASSET or ONFT */
export interface ONFTSDKType {
  id: string;
  metadata: MetadataSDKType;
  data: string;
  owner: string;
  transferable: boolean;
  extensible: boolean;
  created_at: TimestampSDKType;
  nsfw: boolean;
  royalty_share: string;
}
export interface Metadata {
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
  uriHash: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Metadata";
  value: Uint8Array;
}
export interface MetadataAmino {
  name?: string;
  description?: string;
  media_uri?: string;
  preview_uri?: string;
  uri_hash?: string;
}
export interface MetadataAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Metadata";
  value: MetadataAmino;
}
export interface MetadataSDKType {
  name: string;
  description: string;
  media_uri: string;
  preview_uri: string;
  uri_hash: string;
}
export interface ONFTMetadata {
  name: string;
  description: string;
  previewUri: string;
  data: string;
  transferable: boolean;
  extensible: boolean;
  createdAt: Timestamp;
  nsfw: boolean;
  royaltyShare: string;
  uriHash: string;
}
export interface ONFTMetadataProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata";
  value: Uint8Array;
}
export interface ONFTMetadataAmino {
  name?: string;
  description?: string;
  preview_uri?: string;
  data?: string;
  transferable?: boolean;
  extensible?: boolean;
  created_at?: string;
  nsfw?: boolean;
  royalty_share?: string;
  uri_hash?: string;
}
export interface ONFTMetadataAminoMsg {
  type: "/OmniFlix.onft.v1beta1.ONFTMetadata";
  value: ONFTMetadataAmino;
}
export interface ONFTMetadataSDKType {
  name: string;
  description: string;
  preview_uri: string;
  data: string;
  transferable: boolean;
  extensible: boolean;
  created_at: TimestampSDKType;
  nsfw: boolean;
  royalty_share: string;
  uri_hash: string;
}
export interface Owner {
  address: string;
  idCollections: IDCollection[];
}
export interface OwnerProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.Owner";
  value: Uint8Array;
}
export interface OwnerAmino {
  address?: string;
  id_collections?: IDCollectionAmino[];
}
export interface OwnerAminoMsg {
  type: "/OmniFlix.onft.v1beta1.Owner";
  value: OwnerAmino;
}
export interface OwnerSDKType {
  address: string;
  id_collections: IDCollectionSDKType[];
}
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress";
  value: Uint8Array;
}
export interface WeightedAddressAmino {
  address?: string;
  weight?: string;
}
export interface WeightedAddressAminoMsg {
  type: "/OmniFlix.onft.v1beta1.WeightedAddress";
  value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
function createBaseCollection(): Collection {
  return {
    denom: Denom.fromPartial({}),
    onfts: []
  };
}
export const Collection = {
  typeUrl: "/OmniFlix.onft.v1beta1.Collection",
  encode(message: Collection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.onfts) {
      ONFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      onfts: Array.isArray(object?.onfts) ? object.onfts.map((e: any) => ONFT.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Collection>): Collection {
    const message = createBaseCollection();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.onfts = object.onfts?.map(e => ONFT.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CollectionAmino): Collection {
    const message = createBaseCollection();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromAmino(object.denom);
    }
    message.onfts = object.onfts?.map(e => ONFT.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Collection): CollectionAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    if (message.onfts) {
      obj.onfts = message.onfts.map(e => e ? ONFT.toAmino(e) : undefined);
    } else {
      obj.onfts = [];
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
      typeUrl: "/OmniFlix.onft.v1beta1.Collection",
      value: Collection.encode(message).finish()
    };
  }
};
function createBaseIDCollection(): IDCollection {
  return {
    denomId: "",
    onftIds: []
  };
}
export const IDCollection = {
  typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
  encode(message: IDCollection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.onftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): IDCollection {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      onftIds: Array.isArray(object?.onftIds) ? object.onftIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<IDCollection>): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.onftIds = object.onftIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: IDCollectionAmino): IDCollection {
    const message = createBaseIDCollection();
    if (object.denom_id !== undefined && object.denom_id !== null) {
      message.denomId = object.denom_id;
    }
    message.onftIds = object.onft_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: IDCollection): IDCollectionAmino {
    const obj: any = {};
    obj.denom_id = message.denomId;
    if (message.onftIds) {
      obj.onft_ids = message.onftIds.map(e => e);
    } else {
      obj.onft_ids = [];
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
      typeUrl: "/OmniFlix.onft.v1beta1.IDCollection",
      value: IDCollection.encode(message).finish()
    };
  }
};
function createBaseDenom(): Denom {
  return {
    id: "",
    symbol: "",
    name: "",
    schema: "",
    creator: "",
    description: "",
    previewUri: "",
    uri: "",
    uriHash: "",
    data: "",
    royaltyReceivers: []
  };
}
export const Denom = {
  typeUrl: "/OmniFlix.onft.v1beta1.Denom",
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.schema !== "") {
      writer.uint32(34).string(message.schema);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(58).string(message.previewUri);
    }
    if (message.uri !== "") {
      writer.uint32(66).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(74).string(message.uriHash);
    }
    if (message.data !== "") {
      writer.uint32(82).string(message.data);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Denom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      name: isSet(object.name) ? String(object.name) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      data: isSet(object.data) ? String(object.data) : "",
      royaltyReceivers: Array.isArray(object?.royaltyReceivers) ? object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Denom>): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.schema = object.schema ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    message.data = object.data ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.symbol = message.symbol;
    obj.name = message.name;
    obj.schema = message.schema;
    obj.creator = message.creator;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    obj.data = message.data;
    if (message.royaltyReceivers) {
      obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.royalty_receivers = [];
    }
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
      typeUrl: "/OmniFlix.onft.v1beta1.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
function createBaseDenomMetadata(): DenomMetadata {
  return {
    creator: "",
    schema: "",
    description: "",
    previewUri: "",
    data: "",
    uriHash: "",
    royaltyReceivers: []
  };
}
export const DenomMetadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata",
  encode(message: DenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.data !== "") {
      writer.uint32(42).string(message.data);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    for (const v of message.royaltyReceivers) {
      WeightedAddress.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DenomMetadata {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : "",
      royaltyReceivers: Array.isArray(object?.royaltyReceivers) ? object.royaltyReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DenomMetadata>): DenomMetadata {
    const message = createBaseDenomMetadata();
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.data = object.data ?? "";
    message.uriHash = object.uriHash ?? "";
    message.royaltyReceivers = object.royaltyReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DenomMetadataAmino): DenomMetadata {
    const message = createBaseDenomMetadata();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    message.royaltyReceivers = object.royalty_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DenomMetadata): DenomMetadataAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.schema = message.schema;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    obj.data = message.data;
    obj.uri_hash = message.uriHash;
    if (message.royaltyReceivers) {
      obj.royalty_receivers = message.royaltyReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.royalty_receivers = [];
    }
    return obj;
  },
  fromAminoMsg(object: DenomMetadataAminoMsg): DenomMetadata {
    return DenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomMetadataProtoMsg): DenomMetadata {
    return DenomMetadata.decode(message.value);
  },
  toProto(message: DenomMetadata): Uint8Array {
    return DenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: DenomMetadata): DenomMetadataProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata",
      value: DenomMetadata.encode(message).finish()
    };
  }
};
function createBaseONFT(): ONFT {
  return {
    id: "",
    metadata: Metadata.fromPartial({}),
    data: "",
    owner: "",
    transferable: false,
    extensible: false,
    createdAt: Timestamp.fromPartial({}),
    nsfw: false,
    royaltyShare: ""
  };
}
export const ONFT = {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
  encode(message: ONFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.nsfw === true) {
      writer.uint32(64).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ONFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      data: isSet(object.data) ? String(object.data) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      transferable: isSet(object.transferable) ? Boolean(object.transferable) : false,
      extensible: isSet(object.extensible) ? Boolean(object.extensible) : false,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      nsfw: isSet(object.nsfw) ? Boolean(object.nsfw) : false,
      royaltyShare: isSet(object.royaltyShare) ? String(object.royaltyShare) : ""
    };
  },
  fromPartial(object: Partial<ONFT>): ONFT {
    const message = createBaseONFT();
    message.id = object.id ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.data = object.data ?? "";
    message.owner = object.owner ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    return message;
  },
  fromAmino(object: ONFTAmino): ONFT {
    const message = createBaseONFT();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.extensible !== undefined && object.extensible !== null) {
      message.extensible = object.extensible;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = Timestamp.fromAmino(object.created_at);
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.royalty_share !== undefined && object.royalty_share !== null) {
      message.royaltyShare = object.royalty_share;
    }
    return message;
  },
  toAmino(message: ONFT): ONFTAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.data = message.data;
    obj.owner = message.owner;
    obj.transferable = message.transferable;
    obj.extensible = message.extensible;
    obj.created_at = message.createdAt ? Timestamp.toAmino(message.createdAt) : undefined;
    obj.nsfw = message.nsfw;
    obj.royalty_share = message.royaltyShare;
    return obj;
  },
  fromAminoMsg(object: ONFTAminoMsg): ONFT {
    return ONFT.fromAmino(object.value);
  },
  fromProtoMsg(message: ONFTProtoMsg): ONFT {
    return ONFT.decode(message.value);
  },
  toProto(message: ONFT): Uint8Array {
    return ONFT.encode(message).finish();
  },
  toProtoMsg(message: ONFT): ONFTProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.ONFT",
      value: ONFT.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    name: "",
    description: "",
    mediaUri: "",
    previewUri: "",
    uriHash: ""
  };
}
export const Metadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(26).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.uriHash !== "") {
      writer.uint32(42).string(message.uriHash);
    }
    return writer;
  },
  fromJSON(object: any): Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      mediaUri: isSet(object.mediaUri) ? String(object.mediaUri) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : ""
    };
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.media_uri !== undefined && object.media_uri !== null) {
      message.mediaUri = object.media_uri;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.media_uri = message.mediaUri;
    obj.preview_uri = message.previewUri;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseONFTMetadata(): ONFTMetadata {
  return {
    name: "",
    description: "",
    previewUri: "",
    data: "",
    transferable: false,
    extensible: false,
    createdAt: Timestamp.fromPartial({}),
    nsfw: false,
    royaltyShare: "",
    uriHash: ""
  };
}
export const ONFTMetadata = {
  typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata",
  encode(message: ONFTMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(26).string(message.previewUri);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.extensible === true) {
      writer.uint32(48).bool(message.extensible);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.nsfw === true) {
      writer.uint32(64).bool(message.nsfw);
    }
    if (message.royaltyShare !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.royaltyShare, 18).atomics);
    }
    if (message.uriHash !== "") {
      writer.uint32(82).string(message.uriHash);
    }
    return writer;
  },
  fromJSON(object: any): ONFTMetadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      data: isSet(object.data) ? String(object.data) : "",
      transferable: isSet(object.transferable) ? Boolean(object.transferable) : false,
      extensible: isSet(object.extensible) ? Boolean(object.extensible) : false,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      nsfw: isSet(object.nsfw) ? Boolean(object.nsfw) : false,
      royaltyShare: isSet(object.royaltyShare) ? String(object.royaltyShare) : "",
      uriHash: isSet(object.uriHash) ? String(object.uriHash) : ""
    };
  },
  fromPartial(object: Partial<ONFTMetadata>): ONFTMetadata {
    const message = createBaseONFTMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.extensible = object.extensible ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Timestamp.fromPartial(object.createdAt) : undefined;
    message.nsfw = object.nsfw ?? false;
    message.royaltyShare = object.royaltyShare ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: ONFTMetadataAmino): ONFTMetadata {
    const message = createBaseONFTMetadata();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.preview_uri !== undefined && object.preview_uri !== null) {
      message.previewUri = object.preview_uri;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    }
    if (object.extensible !== undefined && object.extensible !== null) {
      message.extensible = object.extensible;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = Timestamp.fromAmino(object.created_at);
    }
    if (object.nsfw !== undefined && object.nsfw !== null) {
      message.nsfw = object.nsfw;
    }
    if (object.royalty_share !== undefined && object.royalty_share !== null) {
      message.royaltyShare = object.royalty_share;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: ONFTMetadata): ONFTMetadataAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.description = message.description;
    obj.preview_uri = message.previewUri;
    obj.data = message.data;
    obj.transferable = message.transferable;
    obj.extensible = message.extensible;
    obj.created_at = message.createdAt ? Timestamp.toAmino(message.createdAt) : undefined;
    obj.nsfw = message.nsfw;
    obj.royalty_share = message.royaltyShare;
    obj.uri_hash = message.uriHash;
    return obj;
  },
  fromAminoMsg(object: ONFTMetadataAminoMsg): ONFTMetadata {
    return ONFTMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ONFTMetadataProtoMsg): ONFTMetadata {
    return ONFTMetadata.decode(message.value);
  },
  toProto(message: ONFTMetadata): Uint8Array {
    return ONFTMetadata.encode(message).finish();
  },
  toProtoMsg(message: ONFTMetadata): ONFTMetadataProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata",
      value: ONFTMetadata.encode(message).finish()
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
  typeUrl: "/OmniFlix.onft.v1beta1.Owner",
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
    const message = createBaseOwner();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.idCollections = object.id_collections?.map(e => IDCollection.fromAmino(e)) || [];
    return message;
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
      typeUrl: "/OmniFlix.onft.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    const message = createBaseWeightedAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
  }
};