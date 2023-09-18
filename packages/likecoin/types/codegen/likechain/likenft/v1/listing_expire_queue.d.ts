import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface ListingExpireQueueEntry {
    expireTime: Timestamp;
    listingKey: Uint8Array;
}
export interface ListingExpireQueueEntryProtoMsg {
    typeUrl: "/likechain.likenft.v1.ListingExpireQueueEntry";
    value: Uint8Array;
}
export interface ListingExpireQueueEntryAmino {
    expire_time?: TimestampAmino;
    listing_key: Uint8Array;
}
export interface ListingExpireQueueEntryAminoMsg {
    type: "/likechain.likenft.v1.ListingExpireQueueEntry";
    value: ListingExpireQueueEntryAmino;
}
export interface ListingExpireQueueEntrySDKType {
    expire_time: TimestampSDKType;
    listing_key: Uint8Array;
}
export declare const ListingExpireQueueEntry: {
    typeUrl: string;
    encode(message: ListingExpireQueueEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListingExpireQueueEntry;
    fromPartial(object: Partial<ListingExpireQueueEntry>): ListingExpireQueueEntry;
    fromAmino(object: ListingExpireQueueEntryAmino): ListingExpireQueueEntry;
    toAmino(message: ListingExpireQueueEntry): ListingExpireQueueEntryAmino;
    fromAminoMsg(object: ListingExpireQueueEntryAminoMsg): ListingExpireQueueEntry;
    fromProtoMsg(message: ListingExpireQueueEntryProtoMsg): ListingExpireQueueEntry;
    toProto(message: ListingExpireQueueEntry): Uint8Array;
    toProtoMsg(message: ListingExpireQueueEntry): ListingExpireQueueEntryProtoMsg;
};
