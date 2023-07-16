import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface OfferExpireQueueEntry {
    expireTime?: Timestamp;
    offerKey: Uint8Array;
}
export interface OfferExpireQueueEntrySDKType {
    expire_time?: TimestampSDKType;
    offer_key: Uint8Array;
}
export declare const OfferExpireQueueEntry: {
    encode(message: OfferExpireQueueEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OfferExpireQueueEntry;
    fromPartial(object: Partial<OfferExpireQueueEntry>): OfferExpireQueueEntry;
};
