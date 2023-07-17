import { AdminAccount, AdminAccountSDKType, Params, ParamsSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface ListAccountsRequest {}
export interface ListAccountsRequestSDKType {}
export interface ListAccountsResponse {
  keys: AdminAccount[];
}
export interface ListAccountsResponseSDKType {
  keys: AdminAccountSDKType[];
}
export interface GetParamsRequest {}
export interface GetParamsRequestSDKType {}
export interface GetParamsResponse {
  params?: Params;
}
export interface GetParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseListAccountsRequest(): ListAccountsRequest {
  return {};
}
export const ListAccountsRequest = {
  encode(_: ListAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ListAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<ListAccountsRequest>): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    return message;
  }
};
function createBaseListAccountsResponse(): ListAccountsResponse {
  return {
    keys: []
  };
}
export const ListAccountsResponse = {
  encode(message: ListAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      AdminAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListAccountsResponse {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => AdminAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ListAccountsResponse>): ListAccountsResponse {
    const message = createBaseListAccountsResponse();
    message.keys = object.keys?.map(e => AdminAccount.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGetParamsRequest(): GetParamsRequest {
  return {};
}
export const GetParamsRequest = {
  encode(_: GetParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): GetParamsRequest {
    return {};
  },
  fromPartial(_: Partial<GetParamsRequest>): GetParamsRequest {
    const message = createBaseGetParamsRequest();
    return message;
  }
};
function createBaseGetParamsResponse(): GetParamsResponse {
  return {
    params: undefined
  };
}
export const GetParamsResponse = {
  encode(message: GetParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GetParamsResponse>): GetParamsResponse {
    const message = createBaseGetParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};