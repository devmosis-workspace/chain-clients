import { AdminAccount, AdminAccountAmino, AdminAccountSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface ListAccountsRequest {}
export interface ListAccountsRequestProtoMsg {
  typeUrl: "/sifnode.admin.v1.ListAccountsRequest";
  value: Uint8Array;
}
export interface ListAccountsRequestAmino {}
export interface ListAccountsRequestAminoMsg {
  type: "/sifnode.admin.v1.ListAccountsRequest";
  value: ListAccountsRequestAmino;
}
export interface ListAccountsRequestSDKType {}
export interface ListAccountsResponse {
  keys: AdminAccount[];
}
export interface ListAccountsResponseProtoMsg {
  typeUrl: "/sifnode.admin.v1.ListAccountsResponse";
  value: Uint8Array;
}
export interface ListAccountsResponseAmino {
  keys?: AdminAccountAmino[];
}
export interface ListAccountsResponseAminoMsg {
  type: "/sifnode.admin.v1.ListAccountsResponse";
  value: ListAccountsResponseAmino;
}
export interface ListAccountsResponseSDKType {
  keys: AdminAccountSDKType[];
}
export interface GetParamsRequest {}
export interface GetParamsRequestProtoMsg {
  typeUrl: "/sifnode.admin.v1.GetParamsRequest";
  value: Uint8Array;
}
export interface GetParamsRequestAmino {}
export interface GetParamsRequestAminoMsg {
  type: "/sifnode.admin.v1.GetParamsRequest";
  value: GetParamsRequestAmino;
}
export interface GetParamsRequestSDKType {}
export interface GetParamsResponse {
  params?: Params;
}
export interface GetParamsResponseProtoMsg {
  typeUrl: "/sifnode.admin.v1.GetParamsResponse";
  value: Uint8Array;
}
export interface GetParamsResponseAmino {
  params?: ParamsAmino;
}
export interface GetParamsResponseAminoMsg {
  type: "/sifnode.admin.v1.GetParamsResponse";
  value: GetParamsResponseAmino;
}
export interface GetParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseListAccountsRequest(): ListAccountsRequest {
  return {};
}
export const ListAccountsRequest = {
  typeUrl: "/sifnode.admin.v1.ListAccountsRequest",
  encode(_: ListAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ListAccountsRequest {
    return {};
  },
  fromPartial(_: Partial<ListAccountsRequest>): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    return message;
  },
  fromAmino(_: ListAccountsRequestAmino): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    return message;
  },
  toAmino(_: ListAccountsRequest): ListAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListAccountsRequestAminoMsg): ListAccountsRequest {
    return ListAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListAccountsRequestProtoMsg): ListAccountsRequest {
    return ListAccountsRequest.decode(message.value);
  },
  toProto(message: ListAccountsRequest): Uint8Array {
    return ListAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListAccountsRequest): ListAccountsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.ListAccountsRequest",
      value: ListAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseListAccountsResponse(): ListAccountsResponse {
  return {
    keys: []
  };
}
export const ListAccountsResponse = {
  typeUrl: "/sifnode.admin.v1.ListAccountsResponse",
  encode(message: ListAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ListAccountsResponseAmino): ListAccountsResponse {
    const message = createBaseListAccountsResponse();
    message.keys = object.keys?.map(e => AdminAccount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListAccountsResponse): ListAccountsResponseAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? AdminAccount.toAmino(e) : undefined);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: ListAccountsResponseAminoMsg): ListAccountsResponse {
    return ListAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListAccountsResponseProtoMsg): ListAccountsResponse {
    return ListAccountsResponse.decode(message.value);
  },
  toProto(message: ListAccountsResponse): Uint8Array {
    return ListAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListAccountsResponse): ListAccountsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.ListAccountsResponse",
      value: ListAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseGetParamsRequest(): GetParamsRequest {
  return {};
}
export const GetParamsRequest = {
  typeUrl: "/sifnode.admin.v1.GetParamsRequest",
  encode(_: GetParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): GetParamsRequest {
    return {};
  },
  fromPartial(_: Partial<GetParamsRequest>): GetParamsRequest {
    const message = createBaseGetParamsRequest();
    return message;
  },
  fromAmino(_: GetParamsRequestAmino): GetParamsRequest {
    const message = createBaseGetParamsRequest();
    return message;
  },
  toAmino(_: GetParamsRequest): GetParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetParamsRequestAminoMsg): GetParamsRequest {
    return GetParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetParamsRequestProtoMsg): GetParamsRequest {
    return GetParamsRequest.decode(message.value);
  },
  toProto(message: GetParamsRequest): Uint8Array {
    return GetParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetParamsRequest): GetParamsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.GetParamsRequest",
      value: GetParamsRequest.encode(message).finish()
    };
  }
};
function createBaseGetParamsResponse(): GetParamsResponse {
  return {
    params: undefined
  };
}
export const GetParamsResponse = {
  typeUrl: "/sifnode.admin.v1.GetParamsResponse",
  encode(message: GetParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GetParamsResponseAmino): GetParamsResponse {
    const message = createBaseGetParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GetParamsResponse): GetParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetParamsResponseAminoMsg): GetParamsResponse {
    return GetParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetParamsResponseProtoMsg): GetParamsResponse {
    return GetParamsResponse.decode(message.value);
  },
  toProto(message: GetParamsResponse): Uint8Array {
    return GetParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetParamsResponse): GetParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.admin.v1.GetParamsResponse",
      value: GetParamsResponse.encode(message).finish()
    };
  }
};