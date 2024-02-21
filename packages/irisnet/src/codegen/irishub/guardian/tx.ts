import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
  description: string;
  address: string;
  addedBy: string;
}
export interface MsgAddSuperProtoMsg {
  typeUrl: "/irishub.guardian.MsgAddSuper";
  value: Uint8Array;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperAmino {
  description?: string;
  address?: string;
  added_by?: string;
}
export interface MsgAddSuperAminoMsg {
  type: "/irishub.guardian.MsgAddSuper";
  value: MsgAddSuperAmino;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperSDKType {
  description: string;
  address: string;
  added_by: string;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {}
export interface MsgAddSuperResponseProtoMsg {
  typeUrl: "/irishub.guardian.MsgAddSuperResponse";
  value: Uint8Array;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseAmino {}
export interface MsgAddSuperResponseAminoMsg {
  type: "/irishub.guardian.MsgAddSuperResponse";
  value: MsgAddSuperResponseAmino;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseSDKType {}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
  address: string;
  deletedBy: string;
}
export interface MsgDeleteSuperProtoMsg {
  typeUrl: "/irishub.guardian.MsgDeleteSuper";
  value: Uint8Array;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperAmino {
  address?: string;
  deleted_by?: string;
}
export interface MsgDeleteSuperAminoMsg {
  type: "/irishub.guardian.MsgDeleteSuper";
  value: MsgDeleteSuperAmino;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperSDKType {
  address: string;
  deleted_by: string;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {}
export interface MsgDeleteSuperResponseProtoMsg {
  typeUrl: "/irishub.guardian.MsgDeleteSuperResponse";
  value: Uint8Array;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseAmino {}
export interface MsgDeleteSuperResponseAminoMsg {
  type: "/irishub.guardian.MsgDeleteSuperResponse";
  value: MsgDeleteSuperResponseAmino;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseSDKType {}
function createBaseMsgAddSuper(): MsgAddSuper {
  return {
    description: "",
    address: "",
    addedBy: ""
  };
}
export const MsgAddSuper = {
  typeUrl: "/irishub.guardian.MsgAddSuper",
  encode(message: MsgAddSuper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddSuper {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      address: isSet(object.address) ? String(object.address) : "",
      addedBy: isSet(object.addedBy) ? String(object.addedBy) : ""
    };
  },
  fromPartial(object: Partial<MsgAddSuper>): MsgAddSuper {
    const message = createBaseMsgAddSuper();
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    message.addedBy = object.addedBy ?? "";
    return message;
  },
  fromAmino(object: MsgAddSuperAmino): MsgAddSuper {
    const message = createBaseMsgAddSuper();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.added_by !== undefined && object.added_by !== null) {
      message.addedBy = object.added_by;
    }
    return message;
  },
  toAmino(message: MsgAddSuper): MsgAddSuperAmino {
    const obj: any = {};
    obj.description = message.description;
    obj.address = message.address;
    obj.added_by = message.addedBy;
    return obj;
  },
  fromAminoMsg(object: MsgAddSuperAminoMsg): MsgAddSuper {
    return MsgAddSuper.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSuperProtoMsg): MsgAddSuper {
    return MsgAddSuper.decode(message.value);
  },
  toProto(message: MsgAddSuper): Uint8Array {
    return MsgAddSuper.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSuper): MsgAddSuperProtoMsg {
    return {
      typeUrl: "/irishub.guardian.MsgAddSuper",
      value: MsgAddSuper.encode(message).finish()
    };
  }
};
function createBaseMsgAddSuperResponse(): MsgAddSuperResponse {
  return {};
}
export const MsgAddSuperResponse = {
  typeUrl: "/irishub.guardian.MsgAddSuperResponse",
  encode(_: MsgAddSuperResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddSuperResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddSuperResponse>): MsgAddSuperResponse {
    const message = createBaseMsgAddSuperResponse();
    return message;
  },
  fromAmino(_: MsgAddSuperResponseAmino): MsgAddSuperResponse {
    const message = createBaseMsgAddSuperResponse();
    return message;
  },
  toAmino(_: MsgAddSuperResponse): MsgAddSuperResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddSuperResponseAminoMsg): MsgAddSuperResponse {
    return MsgAddSuperResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddSuperResponseProtoMsg): MsgAddSuperResponse {
    return MsgAddSuperResponse.decode(message.value);
  },
  toProto(message: MsgAddSuperResponse): Uint8Array {
    return MsgAddSuperResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddSuperResponse): MsgAddSuperResponseProtoMsg {
    return {
      typeUrl: "/irishub.guardian.MsgAddSuperResponse",
      value: MsgAddSuperResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteSuper(): MsgDeleteSuper {
  return {
    address: "",
    deletedBy: ""
  };
}
export const MsgDeleteSuper = {
  typeUrl: "/irishub.guardian.MsgDeleteSuper",
  encode(message: MsgDeleteSuper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deletedBy !== "") {
      writer.uint32(26).string(message.deletedBy);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteSuper {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      deletedBy: isSet(object.deletedBy) ? String(object.deletedBy) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteSuper>): MsgDeleteSuper {
    const message = createBaseMsgDeleteSuper();
    message.address = object.address ?? "";
    message.deletedBy = object.deletedBy ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteSuperAmino): MsgDeleteSuper {
    const message = createBaseMsgDeleteSuper();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.deleted_by !== undefined && object.deleted_by !== null) {
      message.deletedBy = object.deleted_by;
    }
    return message;
  },
  toAmino(message: MsgDeleteSuper): MsgDeleteSuperAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.deleted_by = message.deletedBy;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSuperAminoMsg): MsgDeleteSuper {
    return MsgDeleteSuper.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSuperProtoMsg): MsgDeleteSuper {
    return MsgDeleteSuper.decode(message.value);
  },
  toProto(message: MsgDeleteSuper): Uint8Array {
    return MsgDeleteSuper.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSuper): MsgDeleteSuperProtoMsg {
    return {
      typeUrl: "/irishub.guardian.MsgDeleteSuper",
      value: MsgDeleteSuper.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteSuperResponse(): MsgDeleteSuperResponse {
  return {};
}
export const MsgDeleteSuperResponse = {
  typeUrl: "/irishub.guardian.MsgDeleteSuperResponse",
  encode(_: MsgDeleteSuperResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteSuperResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse {
    const message = createBaseMsgDeleteSuperResponse();
    return message;
  },
  fromAmino(_: MsgDeleteSuperResponseAmino): MsgDeleteSuperResponse {
    const message = createBaseMsgDeleteSuperResponse();
    return message;
  },
  toAmino(_: MsgDeleteSuperResponse): MsgDeleteSuperResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteSuperResponseAminoMsg): MsgDeleteSuperResponse {
    return MsgDeleteSuperResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteSuperResponseProtoMsg): MsgDeleteSuperResponse {
    return MsgDeleteSuperResponse.decode(message.value);
  },
  toProto(message: MsgDeleteSuperResponse): Uint8Array {
    return MsgDeleteSuperResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteSuperResponse): MsgDeleteSuperResponseProtoMsg {
    return {
      typeUrl: "/irishub.guardian.MsgDeleteSuperResponse",
      value: MsgDeleteSuperResponse.encode(message).finish()
    };
  }
};