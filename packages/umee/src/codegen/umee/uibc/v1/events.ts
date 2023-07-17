import { IBCTransferStatus, iBCTransferStatusFromJSON } from "./quota";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseEventBadRevert(): EventBadRevert {
  return {
    failureType: "",
    packet: ""
  };
}
export const EventBadRevert = {
  encode(message: EventBadRevert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.failureType !== "") {
      writer.uint32(10).string(message.failureType);
    }
    if (message.packet !== "") {
      writer.uint32(18).string(message.packet);
    }
    return writer;
  },
  fromJSON(object: any): EventBadRevert {
    return {
      failureType: isSet(object.failureType) ? String(object.failureType) : "",
      packet: isSet(object.packet) ? String(object.packet) : ""
    };
  },
  fromPartial(object: Partial<EventBadRevert>): EventBadRevert {
    const message = createBaseEventBadRevert();
    message.failureType = object.failureType ?? "";
    message.packet = object.packet ?? "";
    return message;
  }
};
function createBaseEventIBCTransferStatus(): EventIBCTransferStatus {
  return {
    status: 0
  };
}
export const EventIBCTransferStatus = {
  encode(message: EventIBCTransferStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): EventIBCTransferStatus {
    return {
      status: isSet(object.status) ? iBCTransferStatusFromJSON(object.status) : 0
    };
  },
  fromPartial(object: Partial<EventIBCTransferStatus>): EventIBCTransferStatus {
    const message = createBaseEventIBCTransferStatus();
    message.status = object.status ?? 0;
    return message;
  }
};