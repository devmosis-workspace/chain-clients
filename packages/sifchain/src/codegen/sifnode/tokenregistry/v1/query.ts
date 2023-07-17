import { Registry, RegistrySDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryEntriesResponse {
  registry?: Registry;
}
export interface QueryEntriesResponseSDKType {
  registry?: RegistrySDKType;
}
export interface QueryEntriesRequest {}
export interface QueryEntriesRequestSDKType {}
function createBaseQueryEntriesResponse(): QueryEntriesResponse {
  return {
    registry: undefined
  };
}
export const QueryEntriesResponse = {
  encode(message: QueryEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registry !== undefined) {
      Registry.encode(message.registry, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEntriesResponse {
    return {
      registry: isSet(object.registry) ? Registry.fromJSON(object.registry) : undefined
    };
  },
  fromPartial(object: Partial<QueryEntriesResponse>): QueryEntriesResponse {
    const message = createBaseQueryEntriesResponse();
    message.registry = object.registry !== undefined && object.registry !== null ? Registry.fromPartial(object.registry) : undefined;
    return message;
  }
};
function createBaseQueryEntriesRequest(): QueryEntriesRequest {
  return {};
}
export const QueryEntriesRequest = {
  encode(_: QueryEntriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryEntriesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryEntriesRequest>): QueryEntriesRequest {
    const message = createBaseQueryEntriesRequest();
    return message;
  }
};