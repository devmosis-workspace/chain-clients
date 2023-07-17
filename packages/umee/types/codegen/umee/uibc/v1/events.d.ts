import { IBCTransferStatus } from "./quota";
import * as _m0 from "protobufjs/minimal";
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevert {
    /** failure event type */
    failureType: string;
    /** ibc packet data */
    packet: string;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertSDKType {
    failure_type: string;
    packet: string;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatus {
    status: IBCTransferStatus;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusSDKType {
    status: IBCTransferStatus;
}
export declare const EventBadRevert: {
    encode(message: EventBadRevert, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBadRevert;
    fromPartial(object: Partial<EventBadRevert>): EventBadRevert;
};
export declare const EventIBCTransferStatus: {
    encode(message: EventIBCTransferStatus, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventIBCTransferStatus;
    fromPartial(object: Partial<EventIBCTransferStatus>): EventIBCTransferStatus;
};
