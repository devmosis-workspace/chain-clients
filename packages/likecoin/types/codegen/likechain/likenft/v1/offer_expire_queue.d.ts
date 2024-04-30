import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
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
export declare const OfferExpireQueueEntry: {
    typeUrl: string;
    encode(message: OfferExpireQueueEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OfferExpireQueueEntry;
    fromPartial(object: Partial<OfferExpireQueueEntry>): OfferExpireQueueEntry;
    fromAmino(object: OfferExpireQueueEntryAmino): OfferExpireQueueEntry;
    toAmino(message: OfferExpireQueueEntry): OfferExpireQueueEntryAmino;
    fromAminoMsg(object: OfferExpireQueueEntryAminoMsg): OfferExpireQueueEntry;
    fromProtoMsg(message: OfferExpireQueueEntryProtoMsg): OfferExpireQueueEntry;
    toProto(message: OfferExpireQueueEntry): Uint8Array;
    toProtoMsg(message: OfferExpireQueueEntry): OfferExpireQueueEntryProtoMsg;
};
