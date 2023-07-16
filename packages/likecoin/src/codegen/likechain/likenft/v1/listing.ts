import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Listing {
  classId: string;
  nftId: string;
  seller: string;
  price: Long;
  expiration?: Timestamp;
  fullPayToRoyalty: boolean;
}
export interface ListingSDKType {
  class_id: string;
  nft_id: string;
  seller: string;
  price: Long;
  expiration?: TimestampSDKType;
  full_pay_to_royalty: boolean;
}
export interface ListingStoreRecord {
  classId: string;
  nftId: string;
  seller: Uint8Array;
  price: Long;
  expiration?: Timestamp;
  fullPayToRoyalty: boolean;
}
export interface ListingStoreRecordSDKType {
  class_id: string;
  nft_id: string;
  seller: Uint8Array;
  price: Long;
  expiration?: TimestampSDKType;
  full_pay_to_royalty: boolean;
}
function createBaseListing(): Listing {
  return {
    classId: "",
    nftId: "",
    seller: "",
    price: Long.UZERO,
    expiration: undefined,
    fullPayToRoyalty: false
  };
}
export const Listing = {
  encode(message: Listing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller !== "") {
      writer.uint32(26).string(message.seller);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<Listing>): Listing {
    const message = createBaseListing();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};
function createBaseListingStoreRecord(): ListingStoreRecord {
  return {
    classId: "",
    nftId: "",
    seller: new Uint8Array(),
    price: Long.UZERO,
    expiration: undefined,
    fullPayToRoyalty: false
  };
}
export const ListingStoreRecord = {
  encode(message: ListingStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.seller.length !== 0) {
      writer.uint32(26).bytes(message.seller);
    }
    if (!message.price.isZero()) {
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
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      fullPayToRoyalty: isSet(object.fullPayToRoyalty) ? Boolean(object.fullPayToRoyalty) : false
    };
  },
  fromPartial(object: Partial<ListingStoreRecord>): ListingStoreRecord {
    const message = createBaseListingStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.seller = object.seller ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.fullPayToRoyalty = object.fullPayToRoyalty ?? false;
    return message;
  }
};