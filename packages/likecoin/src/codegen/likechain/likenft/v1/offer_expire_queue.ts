import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp, bytesFromBase64 } from "../../../helpers";
export interface OfferExpireQueueEntry {
  expireTime?: Timestamp;
  offerKey: Uint8Array;
}
export interface OfferExpireQueueEntrySDKType {
  expire_time?: TimestampSDKType;
  offer_key: Uint8Array;
}
function createBaseOfferExpireQueueEntry(): OfferExpireQueueEntry {
  return {
    expireTime: undefined,
    offerKey: new Uint8Array()
  };
}
export const OfferExpireQueueEntry = {
  encode(message: OfferExpireQueueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expireTime !== undefined) {
      Timestamp.encode(message.expireTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.offerKey.length !== 0) {
      writer.uint32(18).bytes(message.offerKey);
    }
    return writer;
  },
  fromJSON(object: any): OfferExpireQueueEntry {
    return {
      expireTime: isSet(object.expireTime) ? fromJsonTimestamp(object.expireTime) : undefined,
      offerKey: isSet(object.offerKey) ? bytesFromBase64(object.offerKey) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<OfferExpireQueueEntry>): OfferExpireQueueEntry {
    const message = createBaseOfferExpireQueueEntry();
    message.expireTime = object.expireTime !== undefined && object.expireTime !== null ? Timestamp.fromPartial(object.expireTime) : undefined;
    message.offerKey = object.offerKey ?? new Uint8Array();
    return message;
  }
};