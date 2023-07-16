import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface ListingExpireQueueEntry {
    expireTime?: Timestamp;
    listingKey: Uint8Array;
}
export interface ListingExpireQueueEntrySDKType {
    expire_time?: TimestampSDKType;
    listing_key: Uint8Array;
}
export declare const ListingExpireQueueEntry: {
    encode(message: ListingExpireQueueEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListingExpireQueueEntry;
    fromPartial(object: Partial<ListingExpireQueueEntry>): ListingExpireQueueEntry;
};
