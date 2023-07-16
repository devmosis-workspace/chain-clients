import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IscnIdPrefix {
  registryName: string;
  contentId: string;
}
export interface IscnIdPrefixSDKType {
  registry_name: string;
  content_id: string;
}
export interface IscnId {
  prefix?: IscnIdPrefix;
  version: Long;
}
export interface IscnIdSDKType {
  prefix?: IscnIdPrefixSDKType;
  version: Long;
}
function createBaseIscnIdPrefix(): IscnIdPrefix {
  return {
    registryName: "",
    contentId: ""
  };
}
export const IscnIdPrefix = {
  encode(message: IscnIdPrefix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseIscnId(): IscnId {
  return {
    prefix: undefined,
    version: Long.UZERO
  };
}
export const IscnId = {
  encode(message: IscnId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== undefined) {
      IscnIdPrefix.encode(message.prefix, writer.uint32(10).fork()).ldelim();
    }
    if (!message.version.isZero()) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  fromJSON(object: any): IscnId {
    return {
      prefix: isSet(object.prefix) ? IscnIdPrefix.fromJSON(object.prefix) : undefined,
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO
    };
  },
  fromPartial(object: Partial<IscnId>): IscnId {
    const message = createBaseIscnId();
    message.prefix = object.prefix !== undefined && object.prefix !== null ? IscnIdPrefix.fromPartial(object.prefix) : undefined;
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.UZERO;
    return message;
  }
};