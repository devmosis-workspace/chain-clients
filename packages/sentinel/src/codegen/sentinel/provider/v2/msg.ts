import { Status, statusFromJSON } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}
export interface MsgRegisterRequestProtoMsg {
  typeUrl: "/sentinel.provider.v2.MsgRegisterRequest";
  value: Uint8Array;
}
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequestAmino {
  from?: string;
  name?: string;
  identity?: string;
  website?: string;
  description?: string;
}
export interface MsgRegisterRequestAminoMsg {
  type: "/sentinel.provider.v2.MsgRegisterRequest";
  value: MsgRegisterRequestAmino;
}
/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequestSDKType {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
  status: Status;
}
export interface MsgUpdateRequestProtoMsg {
  typeUrl: "/sentinel.provider.v2.MsgUpdateRequest";
  value: Uint8Array;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequestAmino {
  from?: string;
  name?: string;
  identity?: string;
  website?: string;
  description?: string;
  status?: Status;
}
export interface MsgUpdateRequestAminoMsg {
  type: "/sentinel.provider.v2.MsgUpdateRequest";
  value: MsgUpdateRequestAmino;
}
/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequestSDKType {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
  status: Status;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {}
export interface MsgRegisterResponseProtoMsg {
  typeUrl: "/sentinel.provider.v2.MsgRegisterResponse";
  value: Uint8Array;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseAmino {}
export interface MsgRegisterResponseAminoMsg {
  type: "/sentinel.provider.v2.MsgRegisterResponse";
  value: MsgRegisterResponseAmino;
}
/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponseSDKType {}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {}
export interface MsgUpdateResponseProtoMsg {
  typeUrl: "/sentinel.provider.v2.MsgUpdateResponse";
  value: Uint8Array;
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponseAmino {}
export interface MsgUpdateResponseAminoMsg {
  type: "/sentinel.provider.v2.MsgUpdateResponse";
  value: MsgUpdateResponseAmino;
}
/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponseSDKType {}
function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return {
    from: "",
    name: "",
    identity: "",
    website: "",
    description: ""
  };
}
export const MsgRegisterRequest = {
  typeUrl: "/sentinel.provider.v2.MsgRegisterRequest",
  encode(message: MsgRegisterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      name: isSet(object.name) ? String(object.name) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterRequestAmino): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgRegisterRequest): MsgRegisterRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.name = message.name === "" ? undefined : message.name;
    obj.identity = message.identity === "" ? undefined : message.identity;
    obj.website = message.website === "" ? undefined : message.website;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterRequestAminoMsg): MsgRegisterRequest {
    return MsgRegisterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterRequestProtoMsg): MsgRegisterRequest {
    return MsgRegisterRequest.decode(message.value);
  },
  toProto(message: MsgRegisterRequest): Uint8Array {
    return MsgRegisterRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterRequest): MsgRegisterRequestProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.MsgRegisterRequest",
      value: MsgRegisterRequest.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return {
    from: "",
    name: "",
    identity: "",
    website: "",
    description: "",
    status: 0
  };
}
export const MsgUpdateRequest = {
  typeUrl: "/sentinel.provider.v2.MsgUpdateRequest",
  encode(message: MsgUpdateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      name: isSet(object.name) ? String(object.name) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      description: isSet(object.description) ? String(object.description) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateRequestAmino): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgUpdateRequest): MsgUpdateRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.name = message.name === "" ? undefined : message.name;
    obj.identity = message.identity === "" ? undefined : message.identity;
    obj.website = message.website === "" ? undefined : message.website;
    obj.description = message.description === "" ? undefined : message.description;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRequestAminoMsg): MsgUpdateRequest {
    return MsgUpdateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRequestProtoMsg): MsgUpdateRequest {
    return MsgUpdateRequest.decode(message.value);
  },
  toProto(message: MsgUpdateRequest): Uint8Array {
    return MsgUpdateRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRequest): MsgUpdateRequestProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.MsgUpdateRequest",
      value: MsgUpdateRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}
export const MsgRegisterResponse = {
  typeUrl: "/sentinel.provider.v2.MsgRegisterResponse",
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
      typeUrl: "/sentinel.provider.v2.MsgRegisterResponse",
      value: MsgRegisterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return {};
}
export const MsgUpdateResponse = {
  typeUrl: "/sentinel.provider.v2.MsgUpdateResponse",
  encode(_: MsgUpdateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateResponse>): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    return message;
  },
  fromAmino(_: MsgUpdateResponseAmino): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    return message;
  },
  toAmino(_: MsgUpdateResponse): MsgUpdateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateResponseAminoMsg): MsgUpdateResponse {
    return MsgUpdateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateResponseProtoMsg): MsgUpdateResponse {
    return MsgUpdateResponse.decode(message.value);
  },
  toProto(message: MsgUpdateResponse): Uint8Array {
    return MsgUpdateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateResponse): MsgUpdateResponseProtoMsg {
    return {
      typeUrl: "/sentinel.provider.v2.MsgUpdateResponse",
      value: MsgUpdateResponse.encode(message).finish()
    };
  }
};