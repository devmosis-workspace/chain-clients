import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Offer {
  classId: string;
  nftId: string;
  buyer: string;
  price: Long;
  expiration?: Timestamp;
}
export interface OfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
  price: Long;
  expiration?: TimestampSDKType;
}
export interface OfferStoreRecord {
  classId: string;
  nftId: string;
  buyer: Uint8Array;
  price: Long;
  expiration?: Timestamp;
}
export interface OfferStoreRecordSDKType {
  class_id: string;
  nft_id: string;
  buyer: Uint8Array;
  price: Long;
  expiration?: TimestampSDKType;
}
function createBaseOffer(): Offer {
  return {
    classId: "",
    nftId: "",
    buyer: "",
    price: Long.UZERO,
    expiration: undefined
  };
}
export const Offer = {
  encode(message: Offer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Offer {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<Offer>): Offer {
    const message = createBaseOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};
function createBaseOfferStoreRecord(): OfferStoreRecord {
  return {
    classId: "",
    nftId: "",
    buyer: new Uint8Array(),
    price: Long.UZERO,
    expiration: undefined
  };
}
export const OfferStoreRecord = {
  encode(message: OfferStoreRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer.length !== 0) {
      writer.uint32(26).bytes(message.buyer);
    }
    if (!message.price.isZero()) {
      writer.uint32(32).uint64(message.price);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): OfferStoreRecord {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      buyer: isSet(object.buyer) ? bytesFromBase64(object.buyer) : new Uint8Array(),
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<OfferStoreRecord>): OfferStoreRecord {
    const message = createBaseOfferStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? Long.fromValue(object.price) : Long.UZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  }
};