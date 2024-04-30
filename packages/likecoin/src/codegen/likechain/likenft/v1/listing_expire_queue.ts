import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface ListingExpireQueueEntry {
  expireTime: Timestamp;
  listingKey: Uint8Array;
}
export interface ListingExpireQueueEntryProtoMsg {
  typeUrl: "/likechain.likenft.v1.ListingExpireQueueEntry";
  value: Uint8Array;
}
export interface ListingExpireQueueEntryAmino {
  expire_time?: string;
  listing_key?: string;
}
export interface ListingExpireQueueEntryAminoMsg {
  type: "/likechain.likenft.v1.ListingExpireQueueEntry";
  value: ListingExpireQueueEntryAmino;
}
export interface ListingExpireQueueEntrySDKType {
  expire_time: TimestampSDKType;
  listing_key: Uint8Array;
}
function createBaseListingExpireQueueEntry(): ListingExpireQueueEntry {
  return {
    expireTime: Timestamp.fromPartial({}),
    listingKey: new Uint8Array()
  };
}
export const ListingExpireQueueEntry = {
  typeUrl: "/likechain.likenft.v1.ListingExpireQueueEntry",
  encode(message: ListingExpireQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expireTime !== undefined) {
      Timestamp.encode(message.expireTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.listingKey.length !== 0) {
      writer.uint32(18).bytes(message.listingKey);
    }
    return writer;
  },
  fromJSON(object: any): ListingExpireQueueEntry {
    return {
      expireTime: isSet(object.expireTime) ? fromJsonTimestamp(object.expireTime) : undefined,
      listingKey: isSet(object.listingKey) ? bytesFromBase64(object.listingKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ListingExpireQueueEntry>): ListingExpireQueueEntry {
    const message = createBaseListingExpireQueueEntry();
    message.expireTime = object.expireTime !== undefined && object.expireTime !== null ? Timestamp.fromPartial(object.expireTime) : undefined;
    message.listingKey = object.listingKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ListingExpireQueueEntryAmino): ListingExpireQueueEntry {
    const message = createBaseListingExpireQueueEntry();
    if (object.expire_time !== undefined && object.expire_time !== null) {
      message.expireTime = Timestamp.fromAmino(object.expire_time);
    }
    if (object.listing_key !== undefined && object.listing_key !== null) {
      message.listingKey = bytesFromBase64(object.listing_key);
    }
    return message;
  },
  toAmino(message: ListingExpireQueueEntry): ListingExpireQueueEntryAmino {
    const obj: any = {};
    obj.expire_time = message.expireTime ? Timestamp.toAmino(message.expireTime) : undefined;
    obj.listing_key = message.listingKey ? base64FromBytes(message.listingKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListingExpireQueueEntryAminoMsg): ListingExpireQueueEntry {
    return ListingExpireQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ListingExpireQueueEntryProtoMsg): ListingExpireQueueEntry {
    return ListingExpireQueueEntry.decode(message.value);
  },
  toProto(message: ListingExpireQueueEntry): Uint8Array {
    return ListingExpireQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: ListingExpireQueueEntry): ListingExpireQueueEntryProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.ListingExpireQueueEntry",
      value: ListingExpireQueueEntry.encode(message).finish()
    };
  }
};