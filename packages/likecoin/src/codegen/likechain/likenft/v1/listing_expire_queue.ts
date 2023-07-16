import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
export interface ListingExpireQueueEntry {
  expireTime?: Timestamp;
  listingKey: Uint8Array;
}
export interface ListingExpireQueueEntrySDKType {
  expire_time?: TimestampSDKType;
  listing_key: Uint8Array;
}
function createBaseListingExpireQueueEntry(): ListingExpireQueueEntry {
  return {
    expireTime: undefined,
    listingKey: new Uint8Array()
  };
}
export const ListingExpireQueueEntry = {
  encode(message: ListingExpireQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};