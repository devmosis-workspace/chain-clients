import { IBCTransferStatus, iBCTransferStatusFromJSON } from "./quota";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevert {
  /** failure event type */
  failureType: string;
  /** ibc packet data */
  packet: string;
}
export interface EventBadRevertProtoMsg {
  typeUrl: "/umee.uibc.v1.EventBadRevert";
  value: Uint8Array;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertAmino {
  /** failure event type */
  failure_type?: string;
  /** ibc packet data */
  packet?: string;
}
export interface EventBadRevertAminoMsg {
  type: "/umee.uibc.v1.EventBadRevert";
  value: EventBadRevertAmino;
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
export interface EventIBCTransferStatusProtoMsg {
  typeUrl: "/umee.uibc.v1.EventIBCTransferStatus";
  value: Uint8Array;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusAmino {
  status?: IBCTransferStatus;
}
export interface EventIBCTransferStatusAminoMsg {
  type: "/umee.uibc.v1.EventIBCTransferStatus";
  value: EventIBCTransferStatusAmino;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusSDKType {
  status: IBCTransferStatus;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20Hooks {
  enabled: boolean;
}
export interface EventICS20HooksProtoMsg {
  typeUrl: "/umee.uibc.v1.EventICS20Hooks";
  value: Uint8Array;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20HooksAmino {
  enabled?: boolean;
}
export interface EventICS20HooksAminoMsg {
  type: "/umee.uibc.v1.EventICS20Hooks";
  value: EventICS20HooksAmino;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20HooksSDKType {
  enabled: boolean;
}
function createBaseEventBadRevert(): EventBadRevert {
  return {
    failureType: "",
    packet: ""
  };
}
export const EventBadRevert = {
  typeUrl: "/umee.uibc.v1.EventBadRevert",
  encode(message: EventBadRevert, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventBadRevertAmino): EventBadRevert {
    const message = createBaseEventBadRevert();
    if (object.failure_type !== undefined && object.failure_type !== null) {
      message.failureType = object.failure_type;
    }
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = object.packet;
    }
    return message;
  },
  toAmino(message: EventBadRevert): EventBadRevertAmino {
    const obj: any = {};
    obj.failure_type = message.failureType === "" ? undefined : message.failureType;
    obj.packet = message.packet === "" ? undefined : message.packet;
    return obj;
  },
  fromAminoMsg(object: EventBadRevertAminoMsg): EventBadRevert {
    return EventBadRevert.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBadRevertProtoMsg): EventBadRevert {
    return EventBadRevert.decode(message.value);
  },
  toProto(message: EventBadRevert): Uint8Array {
    return EventBadRevert.encode(message).finish();
  },
  toProtoMsg(message: EventBadRevert): EventBadRevertProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.EventBadRevert",
      value: EventBadRevert.encode(message).finish()
    };
  }
};
function createBaseEventIBCTransferStatus(): EventIBCTransferStatus {
  return {
    status: 0
  };
}
export const EventIBCTransferStatus = {
  typeUrl: "/umee.uibc.v1.EventIBCTransferStatus",
  encode(message: EventIBCTransferStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): EventIBCTransferStatus {
    return {
      status: isSet(object.status) ? iBCTransferStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<EventIBCTransferStatus>): EventIBCTransferStatus {
    const message = createBaseEventIBCTransferStatus();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: EventIBCTransferStatusAmino): EventIBCTransferStatus {
    const message = createBaseEventIBCTransferStatus();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: EventIBCTransferStatus): EventIBCTransferStatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: EventIBCTransferStatusAminoMsg): EventIBCTransferStatus {
    return EventIBCTransferStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: EventIBCTransferStatusProtoMsg): EventIBCTransferStatus {
    return EventIBCTransferStatus.decode(message.value);
  },
  toProto(message: EventIBCTransferStatus): Uint8Array {
    return EventIBCTransferStatus.encode(message).finish();
  },
  toProtoMsg(message: EventIBCTransferStatus): EventIBCTransferStatusProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.EventIBCTransferStatus",
      value: EventIBCTransferStatus.encode(message).finish()
    };
  }
};
function createBaseEventICS20Hooks(): EventICS20Hooks {
  return {
    enabled: false
  };
}
export const EventICS20Hooks = {
  typeUrl: "/umee.uibc.v1.EventICS20Hooks",
  encode(message: EventICS20Hooks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  fromJSON(object: any): EventICS20Hooks {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  fromPartial(object: Partial<EventICS20Hooks>): EventICS20Hooks {
    const message = createBaseEventICS20Hooks();
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: EventICS20HooksAmino): EventICS20Hooks {
    const message = createBaseEventICS20Hooks();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: EventICS20Hooks): EventICS20HooksAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: EventICS20HooksAminoMsg): EventICS20Hooks {
    return EventICS20Hooks.fromAmino(object.value);
  },
  fromProtoMsg(message: EventICS20HooksProtoMsg): EventICS20Hooks {
    return EventICS20Hooks.decode(message.value);
  },
  toProto(message: EventICS20Hooks): Uint8Array {
    return EventICS20Hooks.encode(message).finish();
  },
  toProtoMsg(message: EventICS20Hooks): EventICS20HooksProtoMsg {
    return {
      typeUrl: "/umee.uibc.v1.EventICS20Hooks",
      value: EventICS20Hooks.encode(message).finish()
    };
  }
};