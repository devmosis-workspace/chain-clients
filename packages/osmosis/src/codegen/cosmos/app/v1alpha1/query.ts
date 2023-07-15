import { Config, ConfigSDKType } from "./config";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  fromPartial(_: Partial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  }
};