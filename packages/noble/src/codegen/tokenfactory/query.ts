import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Blacklisted, BlacklistedAmino, BlacklistedSDKType } from "./blacklisted";
import { Paused, PausedAmino, PausedSDKType } from "./paused";
import { MasterMinter, MasterMinterAmino, MasterMinterSDKType } from "./master_minter";
import { Minters, MintersAmino, MintersSDKType } from "./minters";
import { Pauser, PauserAmino, PauserSDKType } from "./pauser";
import { Blacklister, BlacklisterAmino, BlacklisterSDKType } from "./blacklister";
import { Owner, OwnerAmino, OwnerSDKType } from "./owner";
import { MinterController, MinterControllerAmino, MinterControllerSDKType } from "./minter_controller";
import { MintingDenom, MintingDenomAmino, MintingDenomSDKType } from "./minting_denom";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/noble.tokenfactory.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/noble.tokenfactory.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetBlacklistedRequest {
  address: string;
}
export interface QueryGetBlacklistedRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklistedRequest";
  value: Uint8Array;
}
export interface QueryGetBlacklistedRequestAmino {
  address: string;
}
export interface QueryGetBlacklistedRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetBlacklistedRequest";
  value: QueryGetBlacklistedRequestAmino;
}
export interface QueryGetBlacklistedRequestSDKType {
  address: string;
}
export interface QueryGetBlacklistedResponse {
  blacklisted: Blacklisted;
}
export interface QueryGetBlacklistedResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklistedResponse";
  value: Uint8Array;
}
export interface QueryGetBlacklistedResponseAmino {
  blacklisted?: BlacklistedAmino;
}
export interface QueryGetBlacklistedResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetBlacklistedResponse";
  value: QueryGetBlacklistedResponseAmino;
}
export interface QueryGetBlacklistedResponseSDKType {
  blacklisted: BlacklistedSDKType;
}
export interface QueryAllBlacklistedRequest {
  pagination: PageRequest;
}
export interface QueryAllBlacklistedRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllBlacklistedRequest";
  value: Uint8Array;
}
export interface QueryAllBlacklistedRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllBlacklistedRequestAminoMsg {
  type: "/noble.tokenfactory.QueryAllBlacklistedRequest";
  value: QueryAllBlacklistedRequestAmino;
}
export interface QueryAllBlacklistedRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllBlacklistedResponse {
  blacklisted: Blacklisted[];
  pagination: PageResponse;
}
export interface QueryAllBlacklistedResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllBlacklistedResponse";
  value: Uint8Array;
}
export interface QueryAllBlacklistedResponseAmino {
  blacklisted: BlacklistedAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllBlacklistedResponseAminoMsg {
  type: "/noble.tokenfactory.QueryAllBlacklistedResponse";
  value: QueryAllBlacklistedResponseAmino;
}
export interface QueryAllBlacklistedResponseSDKType {
  blacklisted: BlacklistedSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetPausedRequest {}
export interface QueryGetPausedRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetPausedRequest";
  value: Uint8Array;
}
export interface QueryGetPausedRequestAmino {}
export interface QueryGetPausedRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetPausedRequest";
  value: QueryGetPausedRequestAmino;
}
export interface QueryGetPausedRequestSDKType {}
export interface QueryGetPausedResponse {
  paused: Paused;
}
export interface QueryGetPausedResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetPausedResponse";
  value: Uint8Array;
}
export interface QueryGetPausedResponseAmino {
  paused?: PausedAmino;
}
export interface QueryGetPausedResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetPausedResponse";
  value: QueryGetPausedResponseAmino;
}
export interface QueryGetPausedResponseSDKType {
  paused: PausedSDKType;
}
export interface QueryGetMasterMinterRequest {}
export interface QueryGetMasterMinterRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMasterMinterRequest";
  value: Uint8Array;
}
export interface QueryGetMasterMinterRequestAmino {}
export interface QueryGetMasterMinterRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetMasterMinterRequest";
  value: QueryGetMasterMinterRequestAmino;
}
export interface QueryGetMasterMinterRequestSDKType {}
export interface QueryGetMasterMinterResponse {
  masterMinter: MasterMinter;
}
export interface QueryGetMasterMinterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMasterMinterResponse";
  value: Uint8Array;
}
export interface QueryGetMasterMinterResponseAmino {
  masterMinter?: MasterMinterAmino;
}
export interface QueryGetMasterMinterResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetMasterMinterResponse";
  value: QueryGetMasterMinterResponseAmino;
}
export interface QueryGetMasterMinterResponseSDKType {
  masterMinter: MasterMinterSDKType;
}
export interface QueryGetMintersRequest {
  address: string;
}
export interface QueryGetMintersRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMintersRequest";
  value: Uint8Array;
}
export interface QueryGetMintersRequestAmino {
  address: string;
}
export interface QueryGetMintersRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetMintersRequest";
  value: QueryGetMintersRequestAmino;
}
export interface QueryGetMintersRequestSDKType {
  address: string;
}
export interface QueryGetMintersResponse {
  minters: Minters;
}
export interface QueryGetMintersResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMintersResponse";
  value: Uint8Array;
}
export interface QueryGetMintersResponseAmino {
  minters?: MintersAmino;
}
export interface QueryGetMintersResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetMintersResponse";
  value: QueryGetMintersResponseAmino;
}
export interface QueryGetMintersResponseSDKType {
  minters: MintersSDKType;
}
export interface QueryAllMintersRequest {
  pagination: PageRequest;
}
export interface QueryAllMintersRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllMintersRequest";
  value: Uint8Array;
}
export interface QueryAllMintersRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMintersRequestAminoMsg {
  type: "/noble.tokenfactory.QueryAllMintersRequest";
  value: QueryAllMintersRequestAmino;
}
export interface QueryAllMintersRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllMintersResponse {
  minters: Minters[];
  pagination: PageResponse;
}
export interface QueryAllMintersResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllMintersResponse";
  value: Uint8Array;
}
export interface QueryAllMintersResponseAmino {
  minters: MintersAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMintersResponseAminoMsg {
  type: "/noble.tokenfactory.QueryAllMintersResponse";
  value: QueryAllMintersResponseAmino;
}
export interface QueryAllMintersResponseSDKType {
  minters: MintersSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetPauserRequest {}
export interface QueryGetPauserRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetPauserRequest";
  value: Uint8Array;
}
export interface QueryGetPauserRequestAmino {}
export interface QueryGetPauserRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetPauserRequest";
  value: QueryGetPauserRequestAmino;
}
export interface QueryGetPauserRequestSDKType {}
export interface QueryGetPauserResponse {
  pauser: Pauser;
}
export interface QueryGetPauserResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetPauserResponse";
  value: Uint8Array;
}
export interface QueryGetPauserResponseAmino {
  pauser?: PauserAmino;
}
export interface QueryGetPauserResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetPauserResponse";
  value: QueryGetPauserResponseAmino;
}
export interface QueryGetPauserResponseSDKType {
  pauser: PauserSDKType;
}
export interface QueryGetBlacklisterRequest {}
export interface QueryGetBlacklisterRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklisterRequest";
  value: Uint8Array;
}
export interface QueryGetBlacklisterRequestAmino {}
export interface QueryGetBlacklisterRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetBlacklisterRequest";
  value: QueryGetBlacklisterRequestAmino;
}
export interface QueryGetBlacklisterRequestSDKType {}
export interface QueryGetBlacklisterResponse {
  blacklister: Blacklister;
}
export interface QueryGetBlacklisterResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklisterResponse";
  value: Uint8Array;
}
export interface QueryGetBlacklisterResponseAmino {
  blacklister?: BlacklisterAmino;
}
export interface QueryGetBlacklisterResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetBlacklisterResponse";
  value: QueryGetBlacklisterResponseAmino;
}
export interface QueryGetBlacklisterResponseSDKType {
  blacklister: BlacklisterSDKType;
}
export interface QueryGetOwnerRequest {}
export interface QueryGetOwnerRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetOwnerRequest";
  value: Uint8Array;
}
export interface QueryGetOwnerRequestAmino {}
export interface QueryGetOwnerRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetOwnerRequest";
  value: QueryGetOwnerRequestAmino;
}
export interface QueryGetOwnerRequestSDKType {}
export interface QueryGetOwnerResponse {
  owner: Owner;
}
export interface QueryGetOwnerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetOwnerResponse";
  value: Uint8Array;
}
export interface QueryGetOwnerResponseAmino {
  owner?: OwnerAmino;
}
export interface QueryGetOwnerResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetOwnerResponse";
  value: QueryGetOwnerResponseAmino;
}
export interface QueryGetOwnerResponseSDKType {
  owner: OwnerSDKType;
}
export interface QueryGetMinterControllerRequest {
  controllerAddress: string;
}
export interface QueryGetMinterControllerRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMinterControllerRequest";
  value: Uint8Array;
}
export interface QueryGetMinterControllerRequestAmino {
  controllerAddress: string;
}
export interface QueryGetMinterControllerRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetMinterControllerRequest";
  value: QueryGetMinterControllerRequestAmino;
}
export interface QueryGetMinterControllerRequestSDKType {
  controllerAddress: string;
}
export interface QueryGetMinterControllerResponse {
  minterController: MinterController;
}
export interface QueryGetMinterControllerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMinterControllerResponse";
  value: Uint8Array;
}
export interface QueryGetMinterControllerResponseAmino {
  minterController?: MinterControllerAmino;
}
export interface QueryGetMinterControllerResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetMinterControllerResponse";
  value: QueryGetMinterControllerResponseAmino;
}
export interface QueryGetMinterControllerResponseSDKType {
  minterController: MinterControllerSDKType;
}
export interface QueryAllMinterControllerRequest {
  pagination: PageRequest;
}
export interface QueryAllMinterControllerRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllMinterControllerRequest";
  value: Uint8Array;
}
export interface QueryAllMinterControllerRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllMinterControllerRequestAminoMsg {
  type: "/noble.tokenfactory.QueryAllMinterControllerRequest";
  value: QueryAllMinterControllerRequestAmino;
}
export interface QueryAllMinterControllerRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryAllMinterControllerResponse {
  minterController: MinterController[];
  pagination: PageResponse;
}
export interface QueryAllMinterControllerResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryAllMinterControllerResponse";
  value: Uint8Array;
}
export interface QueryAllMinterControllerResponseAmino {
  minterController: MinterControllerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllMinterControllerResponseAminoMsg {
  type: "/noble.tokenfactory.QueryAllMinterControllerResponse";
  value: QueryAllMinterControllerResponseAmino;
}
export interface QueryAllMinterControllerResponseSDKType {
  minterController: MinterControllerSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryGetMintingDenomRequest {}
export interface QueryGetMintingDenomRequestProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMintingDenomRequest";
  value: Uint8Array;
}
export interface QueryGetMintingDenomRequestAmino {}
export interface QueryGetMintingDenomRequestAminoMsg {
  type: "/noble.tokenfactory.QueryGetMintingDenomRequest";
  value: QueryGetMintingDenomRequestAmino;
}
export interface QueryGetMintingDenomRequestSDKType {}
export interface QueryGetMintingDenomResponse {
  mintingDenom: MintingDenom;
}
export interface QueryGetMintingDenomResponseProtoMsg {
  typeUrl: "/noble.tokenfactory.QueryGetMintingDenomResponse";
  value: Uint8Array;
}
export interface QueryGetMintingDenomResponseAmino {
  mintingDenom?: MintingDenomAmino;
}
export interface QueryGetMintingDenomResponseAminoMsg {
  type: "/noble.tokenfactory.QueryGetMintingDenomResponse";
  value: QueryGetMintingDenomResponseAmino;
}
export interface QueryGetMintingDenomResponseSDKType {
  mintingDenom: MintingDenomSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/noble.tokenfactory.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/noble.tokenfactory.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBlacklistedRequest(): QueryGetBlacklistedRequest {
  return {
    address: ""
  };
}
export const QueryGetBlacklistedRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklistedRequest",
  encode(message: QueryGetBlacklistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklistedRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryGetBlacklistedRequest>): QueryGetBlacklistedRequest {
    const message = createBaseQueryGetBlacklistedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetBlacklistedRequestAmino): QueryGetBlacklistedRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGetBlacklistedRequest): QueryGetBlacklistedRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetBlacklistedRequestAminoMsg): QueryGetBlacklistedRequest {
    return QueryGetBlacklistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBlacklistedRequestProtoMsg): QueryGetBlacklistedRequest {
    return QueryGetBlacklistedRequest.decode(message.value);
  },
  toProto(message: QueryGetBlacklistedRequest): Uint8Array {
    return QueryGetBlacklistedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBlacklistedRequest): QueryGetBlacklistedRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetBlacklistedRequest",
      value: QueryGetBlacklistedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBlacklistedResponse(): QueryGetBlacklistedResponse {
  return {
    blacklisted: Blacklisted.fromPartial({})
  };
}
export const QueryGetBlacklistedResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklistedResponse",
  encode(message: QueryGetBlacklistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blacklisted !== undefined) {
      Blacklisted.encode(message.blacklisted, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklistedResponse {
    return {
      blacklisted: isSet(object.blacklisted) ? Blacklisted.fromJSON(object.blacklisted) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetBlacklistedResponse>): QueryGetBlacklistedResponse {
    const message = createBaseQueryGetBlacklistedResponse();
    message.blacklisted = object.blacklisted !== undefined && object.blacklisted !== null ? Blacklisted.fromPartial(object.blacklisted) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBlacklistedResponseAmino): QueryGetBlacklistedResponse {
    return {
      blacklisted: object?.blacklisted ? Blacklisted.fromAmino(object.blacklisted) : undefined
    };
  },
  toAmino(message: QueryGetBlacklistedResponse): QueryGetBlacklistedResponseAmino {
    const obj: any = {};
    obj.blacklisted = message.blacklisted ? Blacklisted.toAmino(message.blacklisted) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBlacklistedResponseAminoMsg): QueryGetBlacklistedResponse {
    return QueryGetBlacklistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBlacklistedResponseProtoMsg): QueryGetBlacklistedResponse {
    return QueryGetBlacklistedResponse.decode(message.value);
  },
  toProto(message: QueryGetBlacklistedResponse): Uint8Array {
    return QueryGetBlacklistedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBlacklistedResponse): QueryGetBlacklistedResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetBlacklistedResponse",
      value: QueryGetBlacklistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedRequest(): QueryAllBlacklistedRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllBlacklistedRequest = {
  typeUrl: "/noble.tokenfactory.QueryAllBlacklistedRequest",
  encode(message: QueryAllBlacklistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBlacklistedRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBlacklistedRequest>): QueryAllBlacklistedRequest {
    const message = createBaseQueryAllBlacklistedRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBlacklistedRequestAmino): QueryAllBlacklistedRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllBlacklistedRequest): QueryAllBlacklistedRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedRequestAminoMsg): QueryAllBlacklistedRequest {
    return QueryAllBlacklistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedRequestProtoMsg): QueryAllBlacklistedRequest {
    return QueryAllBlacklistedRequest.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedRequest): Uint8Array {
    return QueryAllBlacklistedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedRequest): QueryAllBlacklistedRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllBlacklistedRequest",
      value: QueryAllBlacklistedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBlacklistedResponse(): QueryAllBlacklistedResponse {
  return {
    blacklisted: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllBlacklistedResponse = {
  typeUrl: "/noble.tokenfactory.QueryAllBlacklistedResponse",
  encode(message: QueryAllBlacklistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.blacklisted) {
      Blacklisted.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBlacklistedResponse {
    return {
      blacklisted: Array.isArray(object?.blacklisted) ? object.blacklisted.map((e: any) => Blacklisted.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBlacklistedResponse>): QueryAllBlacklistedResponse {
    const message = createBaseQueryAllBlacklistedResponse();
    message.blacklisted = object.blacklisted?.map(e => Blacklisted.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBlacklistedResponseAmino): QueryAllBlacklistedResponse {
    return {
      blacklisted: Array.isArray(object?.blacklisted) ? object.blacklisted.map((e: any) => Blacklisted.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllBlacklistedResponse): QueryAllBlacklistedResponseAmino {
    const obj: any = {};
    if (message.blacklisted) {
      obj.blacklisted = message.blacklisted.map(e => e ? Blacklisted.toAmino(e) : undefined);
    } else {
      obj.blacklisted = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBlacklistedResponseAminoMsg): QueryAllBlacklistedResponse {
    return QueryAllBlacklistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBlacklistedResponseProtoMsg): QueryAllBlacklistedResponse {
    return QueryAllBlacklistedResponse.decode(message.value);
  },
  toProto(message: QueryAllBlacklistedResponse): Uint8Array {
    return QueryAllBlacklistedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBlacklistedResponse): QueryAllBlacklistedResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllBlacklistedResponse",
      value: QueryAllBlacklistedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPausedRequest(): QueryGetPausedRequest {
  return {};
}
export const QueryGetPausedRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetPausedRequest",
  encode(_: QueryGetPausedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetPausedRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetPausedRequest>): QueryGetPausedRequest {
    const message = createBaseQueryGetPausedRequest();
    return message;
  },
  fromAmino(_: QueryGetPausedRequestAmino): QueryGetPausedRequest {
    return {};
  },
  toAmino(_: QueryGetPausedRequest): QueryGetPausedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetPausedRequestAminoMsg): QueryGetPausedRequest {
    return QueryGetPausedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPausedRequestProtoMsg): QueryGetPausedRequest {
    return QueryGetPausedRequest.decode(message.value);
  },
  toProto(message: QueryGetPausedRequest): Uint8Array {
    return QueryGetPausedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPausedRequest): QueryGetPausedRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetPausedRequest",
      value: QueryGetPausedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPausedResponse(): QueryGetPausedResponse {
  return {
    paused: Paused.fromPartial({})
  };
}
export const QueryGetPausedResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetPausedResponse",
  encode(message: QueryGetPausedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paused !== undefined) {
      Paused.encode(message.paused, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPausedResponse {
    return {
      paused: isSet(object.paused) ? Paused.fromJSON(object.paused) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPausedResponse>): QueryGetPausedResponse {
    const message = createBaseQueryGetPausedResponse();
    message.paused = object.paused !== undefined && object.paused !== null ? Paused.fromPartial(object.paused) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPausedResponseAmino): QueryGetPausedResponse {
    return {
      paused: object?.paused ? Paused.fromAmino(object.paused) : undefined
    };
  },
  toAmino(message: QueryGetPausedResponse): QueryGetPausedResponseAmino {
    const obj: any = {};
    obj.paused = message.paused ? Paused.toAmino(message.paused) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPausedResponseAminoMsg): QueryGetPausedResponse {
    return QueryGetPausedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPausedResponseProtoMsg): QueryGetPausedResponse {
    return QueryGetPausedResponse.decode(message.value);
  },
  toProto(message: QueryGetPausedResponse): Uint8Array {
    return QueryGetPausedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPausedResponse): QueryGetPausedResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetPausedResponse",
      value: QueryGetPausedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMasterMinterRequest(): QueryGetMasterMinterRequest {
  return {};
}
export const QueryGetMasterMinterRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetMasterMinterRequest",
  encode(_: QueryGetMasterMinterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetMasterMinterRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetMasterMinterRequest>): QueryGetMasterMinterRequest {
    const message = createBaseQueryGetMasterMinterRequest();
    return message;
  },
  fromAmino(_: QueryGetMasterMinterRequestAmino): QueryGetMasterMinterRequest {
    return {};
  },
  toAmino(_: QueryGetMasterMinterRequest): QueryGetMasterMinterRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetMasterMinterRequestAminoMsg): QueryGetMasterMinterRequest {
    return QueryGetMasterMinterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMasterMinterRequestProtoMsg): QueryGetMasterMinterRequest {
    return QueryGetMasterMinterRequest.decode(message.value);
  },
  toProto(message: QueryGetMasterMinterRequest): Uint8Array {
    return QueryGetMasterMinterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMasterMinterRequest): QueryGetMasterMinterRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMasterMinterRequest",
      value: QueryGetMasterMinterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMasterMinterResponse(): QueryGetMasterMinterResponse {
  return {
    masterMinter: MasterMinter.fromPartial({})
  };
}
export const QueryGetMasterMinterResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetMasterMinterResponse",
  encode(message: QueryGetMasterMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.masterMinter !== undefined) {
      MasterMinter.encode(message.masterMinter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMasterMinterResponse {
    return {
      masterMinter: isSet(object.masterMinter) ? MasterMinter.fromJSON(object.masterMinter) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMasterMinterResponse>): QueryGetMasterMinterResponse {
    const message = createBaseQueryGetMasterMinterResponse();
    message.masterMinter = object.masterMinter !== undefined && object.masterMinter !== null ? MasterMinter.fromPartial(object.masterMinter) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMasterMinterResponseAmino): QueryGetMasterMinterResponse {
    return {
      masterMinter: object?.masterMinter ? MasterMinter.fromAmino(object.masterMinter) : undefined
    };
  },
  toAmino(message: QueryGetMasterMinterResponse): QueryGetMasterMinterResponseAmino {
    const obj: any = {};
    obj.masterMinter = message.masterMinter ? MasterMinter.toAmino(message.masterMinter) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMasterMinterResponseAminoMsg): QueryGetMasterMinterResponse {
    return QueryGetMasterMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMasterMinterResponseProtoMsg): QueryGetMasterMinterResponse {
    return QueryGetMasterMinterResponse.decode(message.value);
  },
  toProto(message: QueryGetMasterMinterResponse): Uint8Array {
    return QueryGetMasterMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMasterMinterResponse): QueryGetMasterMinterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMasterMinterResponse",
      value: QueryGetMasterMinterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintersRequest(): QueryGetMintersRequest {
  return {
    address: ""
  };
}
export const QueryGetMintersRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetMintersRequest",
  encode(message: QueryGetMintersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintersRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryGetMintersRequest>): QueryGetMintersRequest {
    const message = createBaseQueryGetMintersRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGetMintersRequestAmino): QueryGetMintersRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGetMintersRequest): QueryGetMintersRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintersRequestAminoMsg): QueryGetMintersRequest {
    return QueryGetMintersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintersRequestProtoMsg): QueryGetMintersRequest {
    return QueryGetMintersRequest.decode(message.value);
  },
  toProto(message: QueryGetMintersRequest): Uint8Array {
    return QueryGetMintersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintersRequest): QueryGetMintersRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMintersRequest",
      value: QueryGetMintersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintersResponse(): QueryGetMintersResponse {
  return {
    minters: Minters.fromPartial({})
  };
}
export const QueryGetMintersResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetMintersResponse",
  encode(message: QueryGetMintersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minters !== undefined) {
      Minters.encode(message.minters, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintersResponse {
    return {
      minters: isSet(object.minters) ? Minters.fromJSON(object.minters) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMintersResponse>): QueryGetMintersResponse {
    const message = createBaseQueryGetMintersResponse();
    message.minters = object.minters !== undefined && object.minters !== null ? Minters.fromPartial(object.minters) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintersResponseAmino): QueryGetMintersResponse {
    return {
      minters: object?.minters ? Minters.fromAmino(object.minters) : undefined
    };
  },
  toAmino(message: QueryGetMintersResponse): QueryGetMintersResponseAmino {
    const obj: any = {};
    obj.minters = message.minters ? Minters.toAmino(message.minters) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintersResponseAminoMsg): QueryGetMintersResponse {
    return QueryGetMintersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintersResponseProtoMsg): QueryGetMintersResponse {
    return QueryGetMintersResponse.decode(message.value);
  },
  toProto(message: QueryGetMintersResponse): Uint8Array {
    return QueryGetMintersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintersResponse): QueryGetMintersResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMintersResponse",
      value: QueryGetMintersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintersRequest(): QueryAllMintersRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllMintersRequest = {
  typeUrl: "/noble.tokenfactory.QueryAllMintersRequest",
  encode(message: QueryAllMintersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMintersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMintersRequest>): QueryAllMintersRequest {
    const message = createBaseQueryAllMintersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintersRequestAmino): QueryAllMintersRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMintersRequest): QueryAllMintersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintersRequestAminoMsg): QueryAllMintersRequest {
    return QueryAllMintersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintersRequestProtoMsg): QueryAllMintersRequest {
    return QueryAllMintersRequest.decode(message.value);
  },
  toProto(message: QueryAllMintersRequest): Uint8Array {
    return QueryAllMintersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintersRequest): QueryAllMintersRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllMintersRequest",
      value: QueryAllMintersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMintersResponse(): QueryAllMintersResponse {
  return {
    minters: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllMintersResponse = {
  typeUrl: "/noble.tokenfactory.QueryAllMintersResponse",
  encode(message: QueryAllMintersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minters) {
      Minters.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMintersResponse {
    return {
      minters: Array.isArray(object?.minters) ? object.minters.map((e: any) => Minters.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMintersResponse>): QueryAllMintersResponse {
    const message = createBaseQueryAllMintersResponse();
    message.minters = object.minters?.map(e => Minters.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMintersResponseAmino): QueryAllMintersResponse {
    return {
      minters: Array.isArray(object?.minters) ? object.minters.map((e: any) => Minters.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMintersResponse): QueryAllMintersResponseAmino {
    const obj: any = {};
    if (message.minters) {
      obj.minters = message.minters.map(e => e ? Minters.toAmino(e) : undefined);
    } else {
      obj.minters = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMintersResponseAminoMsg): QueryAllMintersResponse {
    return QueryAllMintersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMintersResponseProtoMsg): QueryAllMintersResponse {
    return QueryAllMintersResponse.decode(message.value);
  },
  toProto(message: QueryAllMintersResponse): Uint8Array {
    return QueryAllMintersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMintersResponse): QueryAllMintersResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllMintersResponse",
      value: QueryAllMintersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPauserRequest(): QueryGetPauserRequest {
  return {};
}
export const QueryGetPauserRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetPauserRequest",
  encode(_: QueryGetPauserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetPauserRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetPauserRequest>): QueryGetPauserRequest {
    const message = createBaseQueryGetPauserRequest();
    return message;
  },
  fromAmino(_: QueryGetPauserRequestAmino): QueryGetPauserRequest {
    return {};
  },
  toAmino(_: QueryGetPauserRequest): QueryGetPauserRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetPauserRequestAminoMsg): QueryGetPauserRequest {
    return QueryGetPauserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPauserRequestProtoMsg): QueryGetPauserRequest {
    return QueryGetPauserRequest.decode(message.value);
  },
  toProto(message: QueryGetPauserRequest): Uint8Array {
    return QueryGetPauserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPauserRequest): QueryGetPauserRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetPauserRequest",
      value: QueryGetPauserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPauserResponse(): QueryGetPauserResponse {
  return {
    pauser: Pauser.fromPartial({})
  };
}
export const QueryGetPauserResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetPauserResponse",
  encode(message: QueryGetPauserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pauser !== undefined) {
      Pauser.encode(message.pauser, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPauserResponse {
    return {
      pauser: isSet(object.pauser) ? Pauser.fromJSON(object.pauser) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPauserResponse>): QueryGetPauserResponse {
    const message = createBaseQueryGetPauserResponse();
    message.pauser = object.pauser !== undefined && object.pauser !== null ? Pauser.fromPartial(object.pauser) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPauserResponseAmino): QueryGetPauserResponse {
    return {
      pauser: object?.pauser ? Pauser.fromAmino(object.pauser) : undefined
    };
  },
  toAmino(message: QueryGetPauserResponse): QueryGetPauserResponseAmino {
    const obj: any = {};
    obj.pauser = message.pauser ? Pauser.toAmino(message.pauser) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPauserResponseAminoMsg): QueryGetPauserResponse {
    return QueryGetPauserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPauserResponseProtoMsg): QueryGetPauserResponse {
    return QueryGetPauserResponse.decode(message.value);
  },
  toProto(message: QueryGetPauserResponse): Uint8Array {
    return QueryGetPauserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPauserResponse): QueryGetPauserResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetPauserResponse",
      value: QueryGetPauserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBlacklisterRequest(): QueryGetBlacklisterRequest {
  return {};
}
export const QueryGetBlacklisterRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklisterRequest",
  encode(_: QueryGetBlacklisterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetBlacklisterRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetBlacklisterRequest>): QueryGetBlacklisterRequest {
    const message = createBaseQueryGetBlacklisterRequest();
    return message;
  },
  fromAmino(_: QueryGetBlacklisterRequestAmino): QueryGetBlacklisterRequest {
    return {};
  },
  toAmino(_: QueryGetBlacklisterRequest): QueryGetBlacklisterRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetBlacklisterRequestAminoMsg): QueryGetBlacklisterRequest {
    return QueryGetBlacklisterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBlacklisterRequestProtoMsg): QueryGetBlacklisterRequest {
    return QueryGetBlacklisterRequest.decode(message.value);
  },
  toProto(message: QueryGetBlacklisterRequest): Uint8Array {
    return QueryGetBlacklisterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBlacklisterRequest): QueryGetBlacklisterRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetBlacklisterRequest",
      value: QueryGetBlacklisterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBlacklisterResponse(): QueryGetBlacklisterResponse {
  return {
    blacklister: Blacklister.fromPartial({})
  };
}
export const QueryGetBlacklisterResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetBlacklisterResponse",
  encode(message: QueryGetBlacklisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blacklister !== undefined) {
      Blacklister.encode(message.blacklister, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBlacklisterResponse {
    return {
      blacklister: isSet(object.blacklister) ? Blacklister.fromJSON(object.blacklister) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetBlacklisterResponse>): QueryGetBlacklisterResponse {
    const message = createBaseQueryGetBlacklisterResponse();
    message.blacklister = object.blacklister !== undefined && object.blacklister !== null ? Blacklister.fromPartial(object.blacklister) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBlacklisterResponseAmino): QueryGetBlacklisterResponse {
    return {
      blacklister: object?.blacklister ? Blacklister.fromAmino(object.blacklister) : undefined
    };
  },
  toAmino(message: QueryGetBlacklisterResponse): QueryGetBlacklisterResponseAmino {
    const obj: any = {};
    obj.blacklister = message.blacklister ? Blacklister.toAmino(message.blacklister) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBlacklisterResponseAminoMsg): QueryGetBlacklisterResponse {
    return QueryGetBlacklisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBlacklisterResponseProtoMsg): QueryGetBlacklisterResponse {
    return QueryGetBlacklisterResponse.decode(message.value);
  },
  toProto(message: QueryGetBlacklisterResponse): Uint8Array {
    return QueryGetBlacklisterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBlacklisterResponse): QueryGetBlacklisterResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetBlacklisterResponse",
      value: QueryGetBlacklisterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOwnerRequest(): QueryGetOwnerRequest {
  return {};
}
export const QueryGetOwnerRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetOwnerRequest",
  encode(_: QueryGetOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetOwnerRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetOwnerRequest>): QueryGetOwnerRequest {
    const message = createBaseQueryGetOwnerRequest();
    return message;
  },
  fromAmino(_: QueryGetOwnerRequestAmino): QueryGetOwnerRequest {
    return {};
  },
  toAmino(_: QueryGetOwnerRequest): QueryGetOwnerRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetOwnerRequestAminoMsg): QueryGetOwnerRequest {
    return QueryGetOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOwnerRequestProtoMsg): QueryGetOwnerRequest {
    return QueryGetOwnerRequest.decode(message.value);
  },
  toProto(message: QueryGetOwnerRequest): Uint8Array {
    return QueryGetOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOwnerRequest): QueryGetOwnerRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetOwnerRequest",
      value: QueryGetOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOwnerResponse(): QueryGetOwnerResponse {
  return {
    owner: Owner.fromPartial({})
  };
}
export const QueryGetOwnerResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetOwnerResponse",
  encode(message: QueryGetOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetOwnerResponse {
    return {
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetOwnerResponse>): QueryGetOwnerResponse {
    const message = createBaseQueryGetOwnerResponse();
    message.owner = object.owner !== undefined && object.owner !== null ? Owner.fromPartial(object.owner) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOwnerResponseAmino): QueryGetOwnerResponse {
    return {
      owner: object?.owner ? Owner.fromAmino(object.owner) : undefined
    };
  },
  toAmino(message: QueryGetOwnerResponse): QueryGetOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner ? Owner.toAmino(message.owner) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOwnerResponseAminoMsg): QueryGetOwnerResponse {
    return QueryGetOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOwnerResponseProtoMsg): QueryGetOwnerResponse {
    return QueryGetOwnerResponse.decode(message.value);
  },
  toProto(message: QueryGetOwnerResponse): Uint8Array {
    return QueryGetOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOwnerResponse): QueryGetOwnerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetOwnerResponse",
      value: QueryGetOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMinterControllerRequest(): QueryGetMinterControllerRequest {
  return {
    controllerAddress: ""
  };
}
export const QueryGetMinterControllerRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetMinterControllerRequest",
  encode(message: QueryGetMinterControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controllerAddress !== "") {
      writer.uint32(10).string(message.controllerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMinterControllerRequest {
    return {
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryGetMinterControllerRequest>): QueryGetMinterControllerRequest {
    const message = createBaseQueryGetMinterControllerRequest();
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetMinterControllerRequestAmino): QueryGetMinterControllerRequest {
    return {
      controllerAddress: object.controllerAddress
    };
  },
  toAmino(message: QueryGetMinterControllerRequest): QueryGetMinterControllerRequestAmino {
    const obj: any = {};
    obj.controllerAddress = message.controllerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetMinterControllerRequestAminoMsg): QueryGetMinterControllerRequest {
    return QueryGetMinterControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMinterControllerRequestProtoMsg): QueryGetMinterControllerRequest {
    return QueryGetMinterControllerRequest.decode(message.value);
  },
  toProto(message: QueryGetMinterControllerRequest): Uint8Array {
    return QueryGetMinterControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMinterControllerRequest): QueryGetMinterControllerRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMinterControllerRequest",
      value: QueryGetMinterControllerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMinterControllerResponse(): QueryGetMinterControllerResponse {
  return {
    minterController: MinterController.fromPartial({})
  };
}
export const QueryGetMinterControllerResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetMinterControllerResponse",
  encode(message: QueryGetMinterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minterController !== undefined) {
      MinterController.encode(message.minterController, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMinterControllerResponse {
    return {
      minterController: isSet(object.minterController) ? MinterController.fromJSON(object.minterController) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMinterControllerResponse>): QueryGetMinterControllerResponse {
    const message = createBaseQueryGetMinterControllerResponse();
    message.minterController = object.minterController !== undefined && object.minterController !== null ? MinterController.fromPartial(object.minterController) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMinterControllerResponseAmino): QueryGetMinterControllerResponse {
    return {
      minterController: object?.minterController ? MinterController.fromAmino(object.minterController) : undefined
    };
  },
  toAmino(message: QueryGetMinterControllerResponse): QueryGetMinterControllerResponseAmino {
    const obj: any = {};
    obj.minterController = message.minterController ? MinterController.toAmino(message.minterController) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMinterControllerResponseAminoMsg): QueryGetMinterControllerResponse {
    return QueryGetMinterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMinterControllerResponseProtoMsg): QueryGetMinterControllerResponse {
    return QueryGetMinterControllerResponse.decode(message.value);
  },
  toProto(message: QueryGetMinterControllerResponse): Uint8Array {
    return QueryGetMinterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMinterControllerResponse): QueryGetMinterControllerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMinterControllerResponse",
      value: QueryGetMinterControllerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMinterControllerRequest(): QueryAllMinterControllerRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllMinterControllerRequest = {
  typeUrl: "/noble.tokenfactory.QueryAllMinterControllerRequest",
  encode(message: QueryAllMinterControllerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMinterControllerRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMinterControllerRequest>): QueryAllMinterControllerRequest {
    const message = createBaseQueryAllMinterControllerRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMinterControllerRequestAmino): QueryAllMinterControllerRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMinterControllerRequest): QueryAllMinterControllerRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMinterControllerRequestAminoMsg): QueryAllMinterControllerRequest {
    return QueryAllMinterControllerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMinterControllerRequestProtoMsg): QueryAllMinterControllerRequest {
    return QueryAllMinterControllerRequest.decode(message.value);
  },
  toProto(message: QueryAllMinterControllerRequest): Uint8Array {
    return QueryAllMinterControllerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMinterControllerRequest): QueryAllMinterControllerRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllMinterControllerRequest",
      value: QueryAllMinterControllerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMinterControllerResponse(): QueryAllMinterControllerResponse {
  return {
    minterController: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllMinterControllerResponse = {
  typeUrl: "/noble.tokenfactory.QueryAllMinterControllerResponse",
  encode(message: QueryAllMinterControllerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minterController) {
      MinterController.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMinterControllerResponse {
    return {
      minterController: Array.isArray(object?.minterController) ? object.minterController.map((e: any) => MinterController.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMinterControllerResponse>): QueryAllMinterControllerResponse {
    const message = createBaseQueryAllMinterControllerResponse();
    message.minterController = object.minterController?.map(e => MinterController.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMinterControllerResponseAmino): QueryAllMinterControllerResponse {
    return {
      minterController: Array.isArray(object?.minterController) ? object.minterController.map((e: any) => MinterController.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMinterControllerResponse): QueryAllMinterControllerResponseAmino {
    const obj: any = {};
    if (message.minterController) {
      obj.minterController = message.minterController.map(e => e ? MinterController.toAmino(e) : undefined);
    } else {
      obj.minterController = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMinterControllerResponseAminoMsg): QueryAllMinterControllerResponse {
    return QueryAllMinterControllerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMinterControllerResponseProtoMsg): QueryAllMinterControllerResponse {
    return QueryAllMinterControllerResponse.decode(message.value);
  },
  toProto(message: QueryAllMinterControllerResponse): Uint8Array {
    return QueryAllMinterControllerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMinterControllerResponse): QueryAllMinterControllerResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryAllMinterControllerResponse",
      value: QueryAllMinterControllerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintingDenomRequest(): QueryGetMintingDenomRequest {
  return {};
}
export const QueryGetMintingDenomRequest = {
  typeUrl: "/noble.tokenfactory.QueryGetMintingDenomRequest",
  encode(_: QueryGetMintingDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGetMintingDenomRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGetMintingDenomRequest>): QueryGetMintingDenomRequest {
    const message = createBaseQueryGetMintingDenomRequest();
    return message;
  },
  fromAmino(_: QueryGetMintingDenomRequestAmino): QueryGetMintingDenomRequest {
    return {};
  },
  toAmino(_: QueryGetMintingDenomRequest): QueryGetMintingDenomRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetMintingDenomRequestAminoMsg): QueryGetMintingDenomRequest {
    return QueryGetMintingDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintingDenomRequestProtoMsg): QueryGetMintingDenomRequest {
    return QueryGetMintingDenomRequest.decode(message.value);
  },
  toProto(message: QueryGetMintingDenomRequest): Uint8Array {
    return QueryGetMintingDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintingDenomRequest): QueryGetMintingDenomRequestProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMintingDenomRequest",
      value: QueryGetMintingDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMintingDenomResponse(): QueryGetMintingDenomResponse {
  return {
    mintingDenom: MintingDenom.fromPartial({})
  };
}
export const QueryGetMintingDenomResponse = {
  typeUrl: "/noble.tokenfactory.QueryGetMintingDenomResponse",
  encode(message: QueryGetMintingDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintingDenom !== undefined) {
      MintingDenom.encode(message.mintingDenom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetMintingDenomResponse {
    return {
      mintingDenom: isSet(object.mintingDenom) ? MintingDenom.fromJSON(object.mintingDenom) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetMintingDenomResponse>): QueryGetMintingDenomResponse {
    const message = createBaseQueryGetMintingDenomResponse();
    message.mintingDenom = object.mintingDenom !== undefined && object.mintingDenom !== null ? MintingDenom.fromPartial(object.mintingDenom) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMintingDenomResponseAmino): QueryGetMintingDenomResponse {
    return {
      mintingDenom: object?.mintingDenom ? MintingDenom.fromAmino(object.mintingDenom) : undefined
    };
  },
  toAmino(message: QueryGetMintingDenomResponse): QueryGetMintingDenomResponseAmino {
    const obj: any = {};
    obj.mintingDenom = message.mintingDenom ? MintingDenom.toAmino(message.mintingDenom) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMintingDenomResponseAminoMsg): QueryGetMintingDenomResponse {
    return QueryGetMintingDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMintingDenomResponseProtoMsg): QueryGetMintingDenomResponse {
    return QueryGetMintingDenomResponse.decode(message.value);
  },
  toProto(message: QueryGetMintingDenomResponse): Uint8Array {
    return QueryGetMintingDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMintingDenomResponse): QueryGetMintingDenomResponseProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.QueryGetMintingDenomResponse",
      value: QueryGetMintingDenomResponse.encode(message).finish()
    };
  }
};