import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
export interface Listing {
  classId: string;
  nftId: string;
  seller: string;
  price: bigint;
  expiration: Timestamp;
  fullPayToRoyalty: boolean;
}
export interface ListingProtoMsg {
  typeUrl: "/likechain.likenft.v1.Listing";
  value: Uint8Array;
}
export interface ListingAmino {
  class_id: string;
  nft_id: string;
  seller: string;
  price: string;
  expiration?: TimestampAmino;
  full_pay_to_royalty: boolean;
}
export interface ListingAminoMsg {
  type: "/likechain.likenft.v1.Listing";
  value: ListingAmino;
}
export interface ListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  price: bigint;
  expiration: TimestampSDKType;
  full_pay_to_royalty: boolean;
}
export interface ListingStoreRecord {
  classId: string;
  nftId: string;
  seller: Uint8Array;
  price: bigint;
  expiration: Timestamp;
  fullPayToRoyalty: boolean;
}
export interface ListingStoreRecordProtoMsg {
  typeUrl: "/likechain.likenft.v1.ListingStoreRecord";
  value: Uint8Array;
}
export interface ListingStoreRecordAmino {
  class_id: string;
  nft_id: string;
  seller: Uint8Array;
  price: string;
  expiration?: TimestampAmino;
  full_pay_to_royalty: boolean;
}
export interface ListingStoreRecordAminoMsg {
  type: "/likechain.likenft.v1.ListingStoreRecord";
  value: ListingStoreRecordAmino;
}
export interface ListingStoreRecordSDKType {
  class_id: string;
  nft_id: string;
  seller: Uint8Array;
  price: bigint;
  expiration: TimestampSDKType;
  full_pay_to_royalty: boolean;
}
function createBaseListing(): Listing {
  return {
    classId: "",
    nftId: "",
    seller: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({}),
    fullPayToRoyalty: false
  };
}
export const Listing = {
  typeUrl: "/likechain.likenft.v1.Listing",
  encode(message: Listing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },
  fromJSON(object: any): Listing {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<Listing>): Listing {
    const message = createBaseListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: ListingAmino): Listing {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      price: BigInt(object.price),
      expiration: object.expiration,
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: Listing): ListingAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: ListingAminoMsg): Listing {
    return Listing.fromAmino(object.value);
  },
  fromProtoMsg(message: ListingProtoMsg): Listing {
    return Listing.decode(message.value);
  },
  toProto(message: Listing): Uint8Array {
    return Listing.encode(message).finish();
  },
  toProtoMsg(message: Listing): ListingProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.Listing",
      value: Listing.encode(message).finish()
    };
  }
};
function createBaseListingStoreRecord(): ListingStoreRecord {
  return {
    classId: "",
    nftId: "",
    seller: new Uint8Array(),
    price: BigInt(0),
    expiration: Timestamp.fromPartial({}),
    fullPayToRoyalty: false
  };
}
export const ListingStoreRecord = {
  typeUrl: "/likechain.likenft.v1.ListingStoreRecord",
  encode(message: ListingStoreRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller.length !== 0) {
      writer.uint32(26).bytes(message.seller);
    }
    if (message.price !== BigInt(0)) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullPayToRoyalty === true) {
      writer.uint32(48).bool(message.fullPayToRoyalty);
    }
    return writer;
  },
  fromJSON(object: any): ListingStoreRecord {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      seller: isSet(object.seller) ? bytesFromBase64(object.seller) : new Uint8Array(),
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<ListingStoreRecord>): ListingStoreRecord {
    const message = createBaseListingStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  },
  fromAmino(object: ListingStoreRecordAmino): ListingStoreRecord {
    return {
      classId: object.class_id,
      nftId: object.nft_id,
      seller: object.seller,
      price: BigInt(object.price),
      expiration: object.expiration,
      fullPayToRoyalty: object.full_pay_to_royalty
    };
  },
  toAmino(message: ListingStoreRecord): ListingStoreRecordAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.seller = message.seller;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration;
    obj.full_pay_to_royalty = message.fullPayToRoyalty;
    return obj;
  },
  fromAminoMsg(object: ListingStoreRecordAminoMsg): ListingStoreRecord {
    return ListingStoreRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ListingStoreRecordProtoMsg): ListingStoreRecord {
    return ListingStoreRecord.decode(message.value);
  },
  toProto(message: ListingStoreRecord): Uint8Array {
    return ListingStoreRecord.encode(message).finish();
  },
  toProtoMsg(message: ListingStoreRecord): ListingStoreRecordProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ListingStoreRecord",
      value: ListingStoreRecord.encode(message).finish()
    };
  }
};