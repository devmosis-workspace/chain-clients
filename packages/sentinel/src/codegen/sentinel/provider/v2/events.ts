import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventRegister {
  address: string;
}
export interface EventRegisterProtoMsg {
  typeUrl: "/sentinel.provider.v2.EventRegister";
  value: Uint8Array;
}
export interface EventRegisterAmino {
  address?: string;
}
export interface EventRegisterAminoMsg {
  type: "/sentinel.provider.v2.EventRegister";
  value: EventRegisterAmino;
}
export interface EventRegisterSDKType {
  address: string;
}
export interface EventUpdate {
  address: string;
}
export interface EventUpdateProtoMsg {
  typeUrl: "/sentinel.provider.v2.EventUpdate";
  value: Uint8Array;
}
export interface EventUpdateAmino {
  address?: string;
}
export interface EventUpdateAminoMsg {
  type: "/sentinel.provider.v2.EventUpdate";
  value: EventUpdateAmino;
}
export interface EventUpdateSDKType {
  address: string;
}
function createBaseEventRegister(): EventRegister {
  return {
    address: ""
  };
}
export const EventRegister = {
  typeUrl: "/sentinel.provider.v2.EventRegister",
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
      typeUrl: "/sentinel.provider.v2.EventRegister",
      value: EventRegister.encode(message).finish()
    };
  }
};
function createBaseEventUpdate(): EventUpdate {
  return {
    address: ""
  };
}
export const EventUpdate = {
  typeUrl: "/sentinel.provider.v2.EventUpdate",
  encode(message: EventUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdate {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<EventUpdate>): EventUpdate {
    const message = createBaseEventUpdate();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateAmino): EventUpdate {
    const message = createBaseEventUpdate();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdate): EventUpdateAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateAminoMsg): EventUpdate {
    return EventUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateProtoMsg): EventUpdate {
    return EventUpdate.decode(message.value);
  },
  toProto(message: EventUpdate): Uint8Array {
    return EventUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventUpdate): EventUpdateProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.EventUpdate",
      value: EventUpdate.encode(message).finish()
    };
  }
};