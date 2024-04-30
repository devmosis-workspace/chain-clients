import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface OfferExpireQueueEntry {
  expireTime: Timestamp;
  offerKey: Uint8Array;
}
export interface OfferExpireQueueEntryProtoMsg {
  typeUrl: "/likechain.likenft.v1.OfferExpireQueueEntry";
  value: Uint8Array;
}
export interface OfferExpireQueueEntryAmino {
  expire_time?: string;
  offer_key?: string;
}
export interface OfferExpireQueueEntryAminoMsg {
  type: "/likechain.likenft.v1.OfferExpireQueueEntry";
  value: OfferExpireQueueEntryAmino;
}
export interface OfferExpireQueueEntrySDKType {
  expire_time: TimestampSDKType;
  offer_key: Uint8Array;
}
function createBaseOfferExpireQueueEntry(): OfferExpireQueueEntry {
  return {
    expireTime: Timestamp.fromPartial({}),
    offerKey: new Uint8Array()
  };
}
export const OfferExpireQueueEntry = {
  typeUrl: "/likechain.likenft.v1.OfferExpireQueueEntry",
  encode(message: OfferExpireQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: OfferExpireQueueEntryAmino): OfferExpireQueueEntry {
    const message = createBaseOfferExpireQueueEntry();
    if (object.expire_time !== undefined && object.expire_time !== null) {
      message.expireTime = Timestamp.fromAmino(object.expire_time);
    }
    if (object.offer_key !== undefined && object.offer_key !== null) {
      message.offerKey = bytesFromBase64(object.offer_key);
    }
    return message;
  },
  toAmino(message: OfferExpireQueueEntry): OfferExpireQueueEntryAmino {
    const obj: any = {};
    obj.expire_time = message.expireTime ? Timestamp.toAmino(message.expireTime) : undefined;
    obj.offer_key = message.offerKey ? base64FromBytes(message.offerKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: OfferExpireQueueEntryAminoMsg): OfferExpireQueueEntry {
    return OfferExpireQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: OfferExpireQueueEntryProtoMsg): OfferExpireQueueEntry {
    return OfferExpireQueueEntry.decode(message.value);
  },
  toProto(message: OfferExpireQueueEntry): Uint8Array {
    return OfferExpireQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: OfferExpireQueueEntry): OfferExpireQueueEntryProtoMsg {
    return {
      typeUrl: "/likechain.likenft.v1.OfferExpireQueueEntry",
      value: OfferExpireQueueEntry.encode(message).finish()
    };
  }
};