import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface Offer {
  classId: string;
  nftId: string;
  buyer: string;
  price: bigint;
  expiration: Timestamp;
}
export interface OfferProtoMsg {
  typeUrl: "/likechain.likenft.v1.Offer";
  value: Uint8Array;
}
export interface OfferAmino {
  class_id?: string;
  nft_id?: string;
  buyer?: string;
  price?: string;
  expiration?: string;
}
export interface OfferAminoMsg {
  type: "/likechain.likenft.v1.Offer";
  value: OfferAmino;
}
export interface OfferSDKType {
  class_id: string;
  nft_id: string;
  buyer: string;
  price: bigint;
  expiration: TimestampSDKType;
}
export interface OfferStoreRecord {
  classId: string;
  nftId: string;
  buyer: Uint8Array;
  price: bigint;
  expiration: Timestamp;
}
export interface OfferStoreRecordProtoMsg {
  typeUrl: "/likechain.likenft.v1.OfferStoreRecord";
  value: Uint8Array;
}
export interface OfferStoreRecordAmino {
  class_id?: string;
  nft_id?: string;
  buyer?: string;
  price?: string;
  expiration?: string;
}
export interface OfferStoreRecordAminoMsg {
  type: "/likechain.likenft.v1.OfferStoreRecord";
  value: OfferStoreRecordAmino;
}
export interface OfferStoreRecordSDKType {
  class_id: string;
  nft_id: string;
  buyer: Uint8Array;
  price: bigint;
  expiration: TimestampSDKType;
}
function createBaseOffer(): Offer {
  return {
    classId: "",
    nftId: "",
    buyer: "",
    price: BigInt(0),
    expiration: Timestamp.fromPartial({})
  };
}
export const Offer = {
  typeUrl: "/likechain.likenft.v1.Offer",
  encode(message: Offer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    if (message.price !== BigInt(0)) {
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
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<Offer>): Offer {
    const message = createBaseOffer();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? "";
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  },
  fromAmino(object: OfferAmino): Offer {
    const message = createBaseOffer();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromAmino(object.expiration);
    }
    return message;
  },
  toAmino(message: Offer): OfferAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    return obj;
  },
  fromAminoMsg(object: OfferAminoMsg): Offer {
    return Offer.fromAmino(object.value);
  },
  fromProtoMsg(message: OfferProtoMsg): Offer {
    return Offer.decode(message.value);
  },
  toProto(message: Offer): Uint8Array {
    return Offer.encode(message).finish();
  },
  toProtoMsg(message: Offer): OfferProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.Offer",
      value: Offer.encode(message).finish()
    };
  }
};
function createBaseOfferStoreRecord(): OfferStoreRecord {
  return {
    classId: "",
    nftId: "",
    buyer: new Uint8Array(),
    price: BigInt(0),
    expiration: Timestamp.fromPartial({})
  };
}
export const OfferStoreRecord = {
  typeUrl: "/likechain.likenft.v1.OfferStoreRecord",
  encode(message: OfferStoreRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.nftId !== "") {
      writer.uint32(18).string(message.nftId);
    }
    if (message.buyer.length !== 0) {
      writer.uint32(26).bytes(message.buyer);
    }
    if (message.price !== BigInt(0)) {
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
      price: isSet(object.price) ? BigInt(object.price.toString()) : BigInt(0),
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  fromPartial(object: Partial<OfferStoreRecord>): OfferStoreRecord {
    const message = createBaseOfferStoreRecord();
    message.classId = object.classId ?? "";
    message.nftId = object.nftId ?? "";
    message.buyer = object.buyer ?? new Uint8Array();
    message.price = object.price !== undefined && object.price !== null ? BigInt(object.price.toString()) : BigInt(0);
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  },
  fromAmino(object: OfferStoreRecordAmino): OfferStoreRecord {
    const message = createBaseOfferStoreRecord();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.nft_id !== undefined && object.nft_id !== null) {
      message.nftId = object.nft_id;
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = bytesFromBase64(object.buyer);
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = BigInt(object.price);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromAmino(object.expiration);
    }
    return message;
  },
  toAmino(message: OfferStoreRecord): OfferStoreRecordAmino {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.nft_id = message.nftId;
    obj.buyer = message.buyer ? base64FromBytes(message.buyer) : undefined;
    obj.price = message.price ? message.price.toString() : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    return obj;
  },
  fromAminoMsg(object: OfferStoreRecordAminoMsg): OfferStoreRecord {
    return OfferStoreRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: OfferStoreRecordProtoMsg): OfferStoreRecord {
    return OfferStoreRecord.decode(message.value);
  },
  toProto(message: OfferStoreRecord): Uint8Array {
    return OfferStoreRecord.encode(message).finish();
  },
  toProtoMsg(message: OfferStoreRecord): OfferStoreRecordProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.OfferStoreRecord",
      value: OfferStoreRecord.encode(message).finish()
    };
  }
};