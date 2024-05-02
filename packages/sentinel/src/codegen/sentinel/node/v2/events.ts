import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventRegister {
  address: string;
}
export interface EventRegisterProtoMsg {
  typeUrl: "/sentinel.node.v2.EventRegister";
  value: Uint8Array;
}
export interface EventRegisterAmino {
  address?: string;
}
export interface EventRegisterAminoMsg {
  type: "/sentinel.node.v2.EventRegister";
  value: EventRegisterAmino;
}
export interface EventRegisterSDKType {
  address: string;
}
export interface EventUpdateDetails {
  address: string;
}
export interface EventUpdateDetailsProtoMsg {
  typeUrl: "/sentinel.node.v2.EventUpdateDetails";
  value: Uint8Array;
}
export interface EventUpdateDetailsAmino {
  address?: string;
}
export interface EventUpdateDetailsAminoMsg {
  type: "/sentinel.node.v2.EventUpdateDetails";
  value: EventUpdateDetailsAmino;
}
export interface EventUpdateDetailsSDKType {
  address: string;
}
export interface EventUpdateStatus {
  status: Status;
  address: string;
}
export interface EventUpdateStatusProtoMsg {
  typeUrl: "/sentinel.node.v2.EventUpdateStatus";
  value: Uint8Array;
}
export interface EventUpdateStatusAmino {
  status?: Status;
  address?: string;
}
export interface EventUpdateStatusAminoMsg {
  type: "/sentinel.node.v2.EventUpdateStatus";
  value: EventUpdateStatusAmino;
}
export interface EventUpdateStatusSDKType {
  status: Status;
  address: string;
}
export interface EventCreateSubscription {
  address: string;
  nodeAddress: string;
  id: bigint;
}
export interface EventCreateSubscriptionProtoMsg {
  typeUrl: "/sentinel.node.v2.EventCreateSubscription";
  value: Uint8Array;
}
export interface EventCreateSubscriptionAmino {
  address?: string;
  node_address?: string;
  id?: string;
}
export interface EventCreateSubscriptionAminoMsg {
  type: "/sentinel.node.v2.EventCreateSubscription";
  value: EventCreateSubscriptionAmino;
}
export interface EventCreateSubscriptionSDKType {
  address: string;
  node_address: string;
  id: bigint;
}
function createBaseEventRegister(): EventRegister {
  return {
    address: ""
  };
}
export const EventRegister = {
  typeUrl: "/sentinel.node.v2.EventRegister",
  encode(message: EventRegister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventRegister {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventRegister>): EventRegister {
    const message = createBaseEventRegister();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventRegisterAmino): EventRegister {
    const message = createBaseEventRegister();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventRegister): EventRegisterAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventRegisterAminoMsg): EventRegister {
    return EventRegister.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRegisterProtoMsg): EventRegister {
    return EventRegister.decode(message.value);
  },
  toProto(message: EventRegister): Uint8Array {
    return EventRegister.encode(message).finish();
  },
  toProtoMsg(message: EventRegister): EventRegisterProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.EventRegister",
      value: EventRegister.encode(message).finish()
    };
  }
};
function createBaseEventUpdateDetails(): EventUpdateDetails {
  return {
    address: ""
  };
}
export const EventUpdateDetails = {
  typeUrl: "/sentinel.node.v2.EventUpdateDetails",
  encode(message: EventUpdateDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateDetails {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateDetails>): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateDetailsAmino): EventUpdateDetails {
    const message = createBaseEventUpdateDetails();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateDetails): EventUpdateDetailsAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateDetailsAminoMsg): EventUpdateDetails {
    return EventUpdateDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateDetailsProtoMsg): EventUpdateDetails {
    return EventUpdateDetails.decode(message.value);
  },
  toProto(message: EventUpdateDetails): Uint8Array {
    return EventUpdateDetails.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateDetails): EventUpdateDetailsProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.EventUpdateDetails",
      value: EventUpdateDetails.encode(message).finish()
    };
  }
};
function createBaseEventUpdateStatus(): EventUpdateStatus {
  return {
    status: 0,
    address: ""
  };
}
export const EventUpdateStatus = {
  typeUrl: "/sentinel.node.v2.EventUpdateStatus",
  encode(message: EventUpdateStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateStatus {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : -1,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateStatus>): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    message.status = object.status ?? 0;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateStatusAmino): EventUpdateStatus {
    const message = createBaseEventUpdateStatus();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateStatus): EventUpdateStatusAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateStatusAminoMsg): EventUpdateStatus {
    return EventUpdateStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateStatusProtoMsg): EventUpdateStatus {
    return EventUpdateStatus.decode(message.value);
  },
  toProto(message: EventUpdateStatus): Uint8Array {
    return EventUpdateStatus.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateStatus): EventUpdateStatusProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.EventUpdateStatus",
      value: EventUpdateStatus.encode(message).finish()
    };
  }
};
function createBaseEventCreateSubscription(): EventCreateSubscription {
  return {
    address: "",
    nodeAddress: "",
    id: BigInt(0)
  };
}
export const EventCreateSubscription = {
  typeUrl: "/sentinel.node.v2.EventCreateSubscription",
  encode(message: EventCreateSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.nodeAddress !== "") {
      writer.uint32(18).string(message.nodeAddress);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateSubscription {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      nodeAddress: isSet(object.nodeAddress) ? String(object.nodeAddress) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventCreateSubscription>): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    message.address = object.address ?? "";
    message.nodeAddress = object.nodeAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventCreateSubscriptionAmino): EventCreateSubscription {
    const message = createBaseEventCreateSubscription();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.node_address !== undefined && object.node_address !== null) {
      message.nodeAddress = object.node_address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: EventCreateSubscription): EventCreateSubscriptionAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.node_address = message.nodeAddress === "" ? undefined : message.nodeAddress;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateSubscriptionAminoMsg): EventCreateSubscription {
    return EventCreateSubscription.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateSubscriptionProtoMsg): EventCreateSubscription {
    return EventCreateSubscription.decode(message.value);
  },
  toProto(message: EventCreateSubscription): Uint8Array {
    return EventCreateSubscription.encode(message).finish();
  },
  toProtoMsg(message: EventCreateSubscription): EventCreateSubscriptionProtoMsg {
    return {
      typeUrl: "/sentinel.node.v2.EventCreateSubscription",
      value: EventCreateSubscription.encode(message).finish()
    };
  }
};