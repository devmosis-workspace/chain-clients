import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface IscnIdPrefix {
  registryName: string;
  contentId: string;
}
export interface IscnIdPrefixProtoMsg {
  typeUrl: "/likechain.iscn.IscnIdPrefix";
  value: Uint8Array;
}
export interface IscnIdPrefixAmino {
  registry_name?: string;
  content_id?: string;
}
export interface IscnIdPrefixAminoMsg {
  type: "/likechain.iscn.IscnIdPrefix";
  value: IscnIdPrefixAmino;
}
export interface IscnIdPrefixSDKType {
  registry_name: string;
  content_id: string;
}
export interface IscnId {
  prefix: IscnIdPrefix;
  version: bigint;
}
export interface IscnIdProtoMsg {
  typeUrl: "/likechain.iscn.IscnId";
  value: Uint8Array;
}
export interface IscnIdAmino {
  prefix?: IscnIdPrefixAmino;
  version?: string;
}
export interface IscnIdAminoMsg {
  type: "/likechain.iscn.IscnId";
  value: IscnIdAmino;
}
export interface IscnIdSDKType {
  prefix: IscnIdPrefixSDKType;
  version: bigint;
}
function createBaseIscnIdPrefix(): IscnIdPrefix {
  return {
    registryName: "",
    contentId: ""
  };
}
export const IscnIdPrefix = {
  typeUrl: "/likechain.iscn.IscnIdPrefix",
  encode(message: IscnIdPrefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registryName !== "") {
      writer.uint32(10).string(message.registryName);
    }
    if (message.contentId !== "") {
      writer.uint32(18).string(message.contentId);
    }
    return writer;
  },
  fromJSON(object: any): IscnIdPrefix {
    return {
      registryName: isSet(object.registryName) ? String(object.registryName) : "",
      contentId: isSet(object.contentId) ? String(object.contentId) : ""
    };
  },
  fromPartial(object: Partial<IscnIdPrefix>): IscnIdPrefix {
    const message = createBaseIscnIdPrefix();
    message.registryName = object.registryName ?? "";
    message.contentId = object.contentId ?? "";
    return message;
  },
  fromAmino(object: IscnIdPrefixAmino): IscnIdPrefix {
    const message = createBaseIscnIdPrefix();
    if (object.registry_name !== undefined && object.registry_name !== null) {
      message.registryName = object.registry_name;
    }
    if (object.content_id !== undefined && object.content_id !== null) {
      message.contentId = object.content_id;
    }
    return message;
  },
  toAmino(message: IscnIdPrefix): IscnIdPrefixAmino {
    const obj: any = {};
    obj.registry_name = message.registryName;
    obj.content_id = message.contentId;
    return obj;
  },
  fromAminoMsg(object: IscnIdPrefixAminoMsg): IscnIdPrefix {
    return IscnIdPrefix.fromAmino(object.value);
  },
  fromProtoMsg(message: IscnIdPrefixProtoMsg): IscnIdPrefix {
    return IscnIdPrefix.decode(message.value);
  },
  toProto(message: IscnIdPrefix): Uint8Array {
    return IscnIdPrefix.encode(message).finish();
  },
  toProtoMsg(message: IscnIdPrefix): IscnIdPrefixProtoMsg {
    return {
      typeUrl: "/likechain.iscn.IscnIdPrefix",
      value: IscnIdPrefix.encode(message).finish()
    };
  }
};
function createBaseIscnId(): IscnId {
  return {
    prefix: IscnIdPrefix.fromPartial({}),
    version: BigInt(0)
  };
}
export const IscnId = {
  typeUrl: "/likechain.iscn.IscnId",
  encode(message: IscnId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.prefix !== undefined) {
      IscnIdPrefix.encode(message.prefix, writer.uint32(10).fork()).ldelim();
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  fromJSON(object: any): IscnId {
    return {
      prefix: isSet(object.prefix) ? IscnIdPrefix.fromJSON(object.prefix) : undefined,
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<IscnId>): IscnId {
    const message = createBaseIscnId();
    message.prefix = object.prefix !== undefined && object.prefix !== null ? IscnIdPrefix.fromPartial(object.prefix) : undefined;
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IscnIdAmino): IscnId {
    const message = createBaseIscnId();
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = IscnIdPrefix.fromAmino(object.prefix);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    return message;
  },
  toAmino(message: IscnId): IscnIdAmino {
    const obj: any = {};
    obj.prefix = message.prefix ? IscnIdPrefix.toAmino(message.prefix) : undefined;
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IscnIdAminoMsg): IscnId {
    return IscnId.fromAmino(object.value);
  },
  fromProtoMsg(message: IscnIdProtoMsg): IscnId {
    return IscnId.decode(message.value);
  },
  toProto(message: IscnId): Uint8Array {
    return IscnId.encode(message).finish();
  },
  toProtoMsg(message: IscnId): IscnIdProtoMsg {
    return {
      typeUrl: "/likechain.iscn.IscnId",
      value: IscnId.encode(message).finish()
    };
  }
};