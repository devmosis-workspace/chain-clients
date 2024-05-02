import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface EventAdd {
  address: string;
  coins: string;
}
export interface EventAddProtoMsg {
  typeUrl: "/sentinel.deposit.v1.EventAdd";
  value: Uint8Array;
}
export interface EventAddAmino {
  address?: string;
  coins?: string;
}
export interface EventAddAminoMsg {
  type: "/sentinel.deposit.v1.EventAdd";
  value: EventAddAmino;
}
export interface EventAddSDKType {
  address: string;
  coins: string;
}
export interface EventSubtract {
  address: string;
  coins: string;
}
export interface EventSubtractProtoMsg {
  typeUrl: "/sentinel.deposit.v1.EventSubtract";
  value: Uint8Array;
}
export interface EventSubtractAmino {
  address?: string;
  coins?: string;
}
export interface EventSubtractAminoMsg {
  type: "/sentinel.deposit.v1.EventSubtract";
  value: EventSubtractAmino;
}
export interface EventSubtractSDKType {
  address: string;
  coins: string;
}
function createBaseEventAdd(): EventAdd {
  return {
    address: "",
    coins: ""
  };
}
export const EventAdd = {
  typeUrl: "/sentinel.deposit.v1.EventAdd",
  encode(message: EventAdd, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    return writer;
  },
  fromJSON(object: any): EventAdd {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: isSet(object.coins) ? String(object.coins) : ""
    };
  },
  fromPartial(object: Partial<EventAdd>): EventAdd {
    const message = createBaseEventAdd();
    message.address = object.address ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
  fromAmino(object: EventAddAmino): EventAdd {
    const message = createBaseEventAdd();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = object.coins;
    }
    return message;
  },
  toAmino(message: EventAdd): EventAddAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.coins = message.coins === "" ? undefined : message.coins;
    return obj;
  },
  fromAminoMsg(object: EventAddAminoMsg): EventAdd {
    return EventAdd.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAddProtoMsg): EventAdd {
    return EventAdd.decode(message.value);
  },
  toProto(message: EventAdd): Uint8Array {
    return EventAdd.encode(message).finish();
  },
  toProtoMsg(message: EventAdd): EventAddProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.EventAdd",
      value: EventAdd.encode(message).finish()
    };
  }
};
function createBaseEventSubtract(): EventSubtract {
  return {
    address: "",
    coins: ""
  };
}
export const EventSubtract = {
  typeUrl: "/sentinel.deposit.v1.EventSubtract",
  encode(message: EventSubtract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    return writer;
  },
  fromJSON(object: any): EventSubtract {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: isSet(object.coins) ? String(object.coins) : ""
    };
  },
  fromPartial(object: Partial<EventSubtract>): EventSubtract {
    const message = createBaseEventSubtract();
    message.address = object.address ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
  fromAmino(object: EventSubtractAmino): EventSubtract {
    const message = createBaseEventSubtract();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = object.coins;
    }
    return message;
  },
  toAmino(message: EventSubtract): EventSubtractAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.coins = message.coins === "" ? undefined : message.coins;
    return obj;
  },
  fromAminoMsg(object: EventSubtractAminoMsg): EventSubtract {
    return EventSubtract.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSubtractProtoMsg): EventSubtract {
    return EventSubtract.decode(message.value);
  },
  toProto(message: EventSubtract): Uint8Array {
    return EventSubtract.encode(message).finish();
  },
  toProtoMsg(message: EventSubtract): EventSubtractProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.EventSubtract",
      value: EventSubtract.encode(message).finish()
    };
  }
};