import { ModuleOptions, ModuleOptionsSDKType } from "./options";
import * as _m0 from "protobufjs/minimal";
import { isSet, isObject } from "../../../helpers";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {}
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequestSDKType {}
export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value?: ModuleOptions;
}
export interface AppOptionsResponse_ModuleOptionsEntrySDKType {
  key: string;
  value?: ModuleOptionsSDKType;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  moduleOptions?: {
    [key: string]: ModuleOptions;
  };
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponseSDKType {
  module_options?: {
    [key: string]: ModuleOptionsSDKType;
  };
}
function createBaseAppOptionsRequest(): AppOptionsRequest {
  return {};
}
export const AppOptionsRequest = {
  encode(_: AppOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): AppOptionsRequest {
    return {};
  },
  fromPartial(_: Partial<AppOptionsRequest>): AppOptionsRequest {
    const message = createBaseAppOptionsRequest();
    return message;
  }
};
function createBaseAppOptionsResponse_ModuleOptionsEntry(): AppOptionsResponse_ModuleOptionsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(message: AppOptionsResponse_ModuleOptionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ModuleOptions.fromJSON(object.value) : undefined
    };
  },
  fromPartial(object: Partial<AppOptionsResponse_ModuleOptionsEntry>): AppOptionsResponse_ModuleOptionsEntry {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? ModuleOptions.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseAppOptionsResponse(): AppOptionsResponse {
  return {
    moduleOptions: {}
  };
}
export const AppOptionsResponse = {
  encode(message: AppOptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): AppOptionsResponse {
    return {
      moduleOptions: isObject(object.moduleOptions) ? Object.entries(object.moduleOptions).reduce<{
        [key: string]: ModuleOptions;
      }>((acc, [key, value]) => {
        acc[key] = ModuleOptions.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<AppOptionsResponse>): AppOptionsResponse {
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce<{
      [key: string]: ModuleOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};