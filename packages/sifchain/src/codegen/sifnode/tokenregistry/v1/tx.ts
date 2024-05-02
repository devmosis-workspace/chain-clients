import { RegistryEntry, RegistryEntryAmino, RegistryEntrySDKType, SifnodeTokenRegistry, SifnodeTokenRegistryAmino, SifnodeTokenRegistrySDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgRegister {
  from: string;
  entry?: RegistryEntry;
}
export interface MsgRegisterProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgRegister";
  value: Uint8Array;
}
export interface MsgRegisterAmino {
  from?: string;
  entry?: RegistryEntryAmino;
}
export interface MsgRegisterAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgRegister";
  value: MsgRegisterAmino;
}
export interface MsgRegisterSDKType {
  from: string;
  entry?: RegistryEntrySDKType;
}
export interface MsgRegisterResponse {}
export interface MsgRegisterResponseProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgRegisterResponse";
  value: Uint8Array;
}
export interface MsgRegisterResponseAmino {}
export interface MsgRegisterResponseAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgRegisterResponse";
  value: MsgRegisterResponseAmino;
}
export interface MsgRegisterResponseSDKType {}
export interface MsgSetRegistry {
  from: string;
  registry?: SifnodeTokenRegistry;
}
export interface MsgSetRegistryProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry";
  value: Uint8Array;
}
export interface MsgSetRegistryAmino {
  from?: string;
  registry?: SifnodeTokenRegistryAmino;
}
export interface MsgSetRegistryAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgSetRegistry";
  value: MsgSetRegistryAmino;
}
export interface MsgSetRegistrySDKType {
  from: string;
  registry?: SifnodeTokenRegistrySDKType;
}
export interface MsgSetRegistryResponse {}
export interface MsgSetRegistryResponseProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse";
  value: Uint8Array;
}
export interface MsgSetRegistryResponseAmino {}
export interface MsgSetRegistryResponseAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse";
  value: MsgSetRegistryResponseAmino;
}
export interface MsgSetRegistryResponseSDKType {}
export interface MsgDeregister {
  from: string;
  denom: string;
}
export interface MsgDeregisterProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister";
  value: Uint8Array;
}
export interface MsgDeregisterAmino {
  from?: string;
  denom?: string;
}
export interface MsgDeregisterAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgDeregister";
  value: MsgDeregisterAmino;
}
export interface MsgDeregisterSDKType {
  from: string;
  denom: string;
}
export interface MsgDeregisterResponse {}
export interface MsgDeregisterResponseProtoMsg {
  typeUrl: "/sifnode.tokenregistry.v1.MsgDeregisterResponse";
  value: Uint8Array;
}
export interface MsgDeregisterResponseAmino {}
export interface MsgDeregisterResponseAminoMsg {
  type: "/sifnode.tokenregistry.v1.MsgDeregisterResponse";
  value: MsgDeregisterResponseAmino;
}
export interface MsgDeregisterResponseSDKType {}
function createBaseMsgRegister(): MsgRegister {
  return {
    from: "",
    entry: undefined
  };
}
export const MsgRegister = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
  encode(message: MsgRegister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgRegisterAmino): MsgRegister {
    const message = createBaseMsgRegister();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.entry !== undefined && object.entry !== null) {
      message.entry = RegistryEntry.fromAmino(object.entry);
    }
    return message;
  },
  toAmino(message: MsgRegister): MsgRegisterAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.entry = message.entry ? RegistryEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAminoMsg): MsgRegister {
    return MsgRegister.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterProtoMsg): MsgRegister {
    return MsgRegister.decode(message.value);
  },
  toProto(message: MsgRegister): Uint8Array {
    return MsgRegister.encode(message).finish();
  },
  toProtoMsg(message: MsgRegister): MsgRegisterProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgRegister",
      value: MsgRegister.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}
export const MsgRegisterResponse = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgRegisterResponse",
  encode(_: MsgRegisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
  fromAmino(_: MsgRegisterResponseAmino): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
  toAmino(_: MsgRegisterResponse): MsgRegisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterResponseAminoMsg): MsgRegisterResponse {
    return MsgRegisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterResponseProtoMsg): MsgRegisterResponse {
    return MsgRegisterResponse.decode(message.value);
  },
  toProto(message: MsgRegisterResponse): Uint8Array {
    return MsgRegisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterResponse): MsgRegisterResponseProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgRegisterResponse",
      value: MsgRegisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetRegistry(): MsgSetRegistry {
  return {
    from: "",
    registry: undefined
  };
}
export const MsgSetRegistry = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
  encode(message: MsgSetRegistry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.registry !== undefined) {
      SifnodeTokenRegistry.encode(message.registry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetRegistry {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      registry: isSet(object.registry) ? SifnodeTokenRegistry.fromJSON(object.registry) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetRegistry>): MsgSetRegistry {
    const message = createBaseMsgSetRegistry();
    message.from = object.from ?? "";
    message.registry = object.registry !== undefined && object.registry !== null ? SifnodeTokenRegistry.fromPartial(object.registry) : undefined;
    return message;
  },
  fromAmino(object: MsgSetRegistryAmino): MsgSetRegistry {
    const message = createBaseMsgSetRegistry();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.registry !== undefined && object.registry !== null) {
      message.registry = SifnodeTokenRegistry.fromAmino(object.registry);
    }
    return message;
  },
  toAmino(message: MsgSetRegistry): MsgSetRegistryAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.registry = message.registry ? SifnodeTokenRegistry.toAmino(message.registry) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetRegistryAminoMsg): MsgSetRegistry {
    return MsgSetRegistry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRegistryProtoMsg): MsgSetRegistry {
    return MsgSetRegistry.decode(message.value);
  },
  toProto(message: MsgSetRegistry): Uint8Array {
    return MsgSetRegistry.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegistry): MsgSetRegistryProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistry",
      value: MsgSetRegistry.encode(message).finish()
    };
  }
};
function createBaseMsgSetRegistryResponse(): MsgSetRegistryResponse {
  return {};
}
export const MsgSetRegistryResponse = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse",
  encode(_: MsgSetRegistryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetRegistryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetRegistryResponse>): MsgSetRegistryResponse {
    const message = createBaseMsgSetRegistryResponse();
    return message;
  },
  fromAmino(_: MsgSetRegistryResponseAmino): MsgSetRegistryResponse {
    const message = createBaseMsgSetRegistryResponse();
    return message;
  },
  toAmino(_: MsgSetRegistryResponse): MsgSetRegistryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRegistryResponseAminoMsg): MsgSetRegistryResponse {
    return MsgSetRegistryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRegistryResponseProtoMsg): MsgSetRegistryResponse {
    return MsgSetRegistryResponse.decode(message.value);
  },
  toProto(message: MsgSetRegistryResponse): Uint8Array {
    return MsgSetRegistryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegistryResponse): MsgSetRegistryResponseProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgSetRegistryResponse",
      value: MsgSetRegistryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeregister(): MsgDeregister {
  return {
    from: "",
    denom: ""
  };
}
export const MsgDeregister = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
  encode(message: MsgDeregister, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgDeregisterAmino): MsgDeregister {
    const message = createBaseMsgDeregister();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDeregister): MsgDeregisterAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterAminoMsg): MsgDeregister {
    return MsgDeregister.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeregisterProtoMsg): MsgDeregister {
    return MsgDeregister.decode(message.value);
  },
  toProto(message: MsgDeregister): Uint8Array {
    return MsgDeregister.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregister): MsgDeregisterProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgDeregister",
      value: MsgDeregister.encode(message).finish()
    };
  }
};
function createBaseMsgDeregisterResponse(): MsgDeregisterResponse {
  return {};
}
export const MsgDeregisterResponse = {
  typeUrl: "/sifnode.tokenregistry.v1.MsgDeregisterResponse",
  encode(_: MsgDeregisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeregisterResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeregisterResponse>): MsgDeregisterResponse {
    const message = createBaseMsgDeregisterResponse();
    return message;
  },
  fromAmino(_: MsgDeregisterResponseAmino): MsgDeregisterResponse {
    const message = createBaseMsgDeregisterResponse();
    return message;
  },
  toAmino(_: MsgDeregisterResponse): MsgDeregisterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeregisterResponseAminoMsg): MsgDeregisterResponse {
    return MsgDeregisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeregisterResponseProtoMsg): MsgDeregisterResponse {
    return MsgDeregisterResponse.decode(message.value);
  },
  toProto(message: MsgDeregisterResponse): Uint8Array {
    return MsgDeregisterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeregisterResponse): MsgDeregisterResponseProtoMsg {
    return {
      typeUrl: "/sifnode.tokenregistry.v1.MsgDeregisterResponse",
      value: MsgDeregisterResponse.encode(message).finish()
    };
  }
};