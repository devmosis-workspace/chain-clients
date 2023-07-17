import { RegistryEntry, RegistryEntrySDKType, Registry, RegistrySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgRegister {
  from: string;
  entry?: RegistryEntry;
}
export interface MsgRegisterSDKType {
  from: string;
  entry?: RegistryEntrySDKType;
}
export interface MsgRegisterResponse {}
export interface MsgRegisterResponseSDKType {}
export interface MsgSetRegistry {
  from: string;
  registry?: Registry;
}
export interface MsgSetRegistrySDKType {
  from: string;
  registry?: RegistrySDKType;
}
export interface MsgSetRegistryResponse {}
export interface MsgSetRegistryResponseSDKType {}
export interface MsgDeregister {
  from: string;
  denom: string;
}
export interface MsgDeregisterSDKType {
  from: string;
  denom: string;
}
export interface MsgDeregisterResponse {}
export interface MsgDeregisterResponseSDKType {}
function createBaseMsgRegister(): MsgRegister {
  return {
    from: "",
    entry: undefined
  };
}
export const MsgRegister = {
  encode(message: MsgRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.entry !== undefined) {
      RegistryEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRegister {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      entry: isSet(object.entry) ? RegistryEntry.fromJSON(object.entry) : undefined
    };
  },
  fromPartial(object: Partial<MsgRegister>): MsgRegister {
    const message = createBaseMsgRegister();
    message.from = object.from ?? "";
    message.entry = object.entry !== undefined && object.entry !== null ? RegistryEntry.fromPartial(object.entry) : undefined;
    return message;
  }
};
function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}
export const MsgRegisterResponse = {
  encode(_: MsgRegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  }
};
function createBaseMsgSetRegistry(): MsgSetRegistry {
  return {
    from: "",
    registry: undefined
  };
}
export const MsgSetRegistry = {
  encode(message: MsgSetRegistry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.registry !== undefined) {
      Registry.encode(message.registry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetRegistry {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      registry: isSet(object.registry) ? Registry.fromJSON(object.registry) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetRegistry>): MsgSetRegistry {
    const message = createBaseMsgSetRegistry();
    message.from = object.from ?? "";
    message.registry = object.registry !== undefined && object.registry !== null ? Registry.fromPartial(object.registry) : undefined;
    return message;
  }
};
function createBaseMsgSetRegistryResponse(): MsgSetRegistryResponse {
  return {};
}
export const MsgSetRegistryResponse = {
  encode(_: MsgSetRegistryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetRegistryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetRegistryResponse>): MsgSetRegistryResponse {
    const message = createBaseMsgSetRegistryResponse();
    return message;
  }
};
function createBaseMsgDeregister(): MsgDeregister {
  return {
    from: "",
    denom: ""
  };
}
export const MsgDeregister = {
  encode(message: MsgDeregister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeregister {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MsgDeregister>): MsgDeregister {
    const message = createBaseMsgDeregister();
    message.from = object.from ?? "";
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseMsgDeregisterResponse(): MsgDeregisterResponse {
  return {};
}
export const MsgDeregisterResponse = {
  encode(_: MsgDeregisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDeregisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeregisterResponse>): MsgDeregisterResponse {
    const message = createBaseMsgDeregisterResponse();
    return message;
  }
};