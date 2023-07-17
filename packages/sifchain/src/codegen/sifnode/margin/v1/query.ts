import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { MTP, MTPSDKType, Params, ParamsSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MTPRequest {
  address: string;
  id: Long;
}
export interface MTPRequestSDKType {
  address: string;
  id: Long;
}
export interface MTPResponse {
  mtp?: MTP;
}
export interface MTPResponseSDKType {
  mtp?: MTPSDKType;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  asset: string;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestSDKType {
  asset: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ParamsRequest {}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface StatusRequest {}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openMtpCount: Long;
  lifetimeMtpCount: Long;
}
export interface StatusResponseSDKType {
  open_mtp_count: Long;
  lifetime_mtp_count: Long;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface GetSQParamsRequest {
  pool: string;
}
export interface GetSQParamsRequestSDKType {
  pool: string;
}
export interface GetSQParamsResponse {
  beginBlock: Long;
}
export interface GetSQParamsResponseSDKType {
  begin_block: Long;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
function createBaseMTPRequest(): MTPRequest {
  return {
    address: "",
    id: Long.UZERO
  };
}
export const MTPRequest = {
  encode(message: MTPRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MTPRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MTPRequest>): MTPRequest {
    const message = createBaseMTPRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMTPResponse(): MTPResponse {
  return {
    mtp: undefined
  };
}
export const MTPResponse = {
  encode(message: MTPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mtp !== undefined) {
      MTP.encode(message.mtp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MTPResponse {
    return {
      mtp: isSet(object.mtp) ? MTP.fromJSON(object.mtp) : undefined
    };
  },
  fromPartial(object: Partial<MTPResponse>): MTPResponse {
    const message = createBaseMTPResponse();
    message.mtp = object.mtp !== undefined && object.mtp !== null ? MTP.fromPartial(object.mtp) : undefined;
    return message;
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  encode(message: PositionsForAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsForAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsForAddressRequest>): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  encode(message: PositionsForAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsForAddressResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsForAddressResponse>): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    asset: "",
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  encode(message: PositionsByPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsByPoolRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsByPoolRequest>): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    message.asset = object.asset ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  encode(message: PositionsByPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsByPoolResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsByPoolResponse>): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  encode(message: PositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsRequest>): PositionsRequest {
    const message = createBasePositionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  encode(message: PositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mtps) {
      MTP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PositionsResponse {
    return {
      mtps: Array.isArray(object?.mtps) ? object.mtps.map((e: any) => MTP.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<PositionsResponse>): PositionsResponse {
    const message = createBasePositionsResponse();
    message.mtps = object.mtps?.map(e => MTP.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): StatusRequest {
    return {};
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openMtpCount: Long.UZERO,
    lifetimeMtpCount: Long.UZERO
  };
}
export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.openMtpCount.isZero()) {
      writer.uint32(8).uint64(message.openMtpCount);
    }
    if (!message.lifetimeMtpCount.isZero()) {
      writer.uint32(16).uint64(message.lifetimeMtpCount);
    }
    return writer;
  },
  fromJSON(object: any): StatusResponse {
    return {
      openMtpCount: isSet(object.openMtpCount) ? Long.fromValue(object.openMtpCount) : Long.UZERO,
      lifetimeMtpCount: isSet(object.lifetimeMtpCount) ? Long.fromValue(object.lifetimeMtpCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openMtpCount = object.openMtpCount !== undefined && object.openMtpCount !== null ? Long.fromValue(object.openMtpCount) : Long.UZERO;
    message.lifetimeMtpCount = object.lifetimeMtpCount !== undefined && object.lifetimeMtpCount !== null ? Long.fromValue(object.lifetimeMtpCount) : Long.UZERO;
    return message;
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  encode(message: WhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): WhitelistRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<WhitelistRequest>): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  encode(message: WhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelist) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): WhitelistResponse {
    return {
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<WhitelistResponse>): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetSQParamsRequest(): GetSQParamsRequest {
  return {
    pool: ""
  };
}
export const GetSQParamsRequest = {
  encode(message: GetSQParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== "") {
      writer.uint32(10).string(message.pool);
    }
    return writer;
  },
  fromJSON(object: any): GetSQParamsRequest {
    return {
      pool: isSet(object.pool) ? String(object.pool) : ""
    };
  },
  fromPartial(object: Partial<GetSQParamsRequest>): GetSQParamsRequest {
    const message = createBaseGetSQParamsRequest();
    message.pool = object.pool ?? "";
    return message;
  }
};
function createBaseGetSQParamsResponse(): GetSQParamsResponse {
  return {
    beginBlock: Long.ZERO
  };
}
export const GetSQParamsResponse = {
  encode(message: GetSQParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.beginBlock.isZero()) {
      writer.uint32(8).int64(message.beginBlock);
    }
    return writer;
  },
  fromJSON(object: any): GetSQParamsResponse {
    return {
      beginBlock: isSet(object.beginBlock) ? Long.fromValue(object.beginBlock) : Long.ZERO
    };
  },
  fromPartial(object: Partial<GetSQParamsResponse>): GetSQParamsResponse {
    const message = createBaseGetSQParamsResponse();
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? Long.fromValue(object.beginBlock) : Long.ZERO;
    return message;
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  encode(message: IsWhitelistedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): IsWhitelistedRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<IsWhitelistedRequest>): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  encode(message: IsWhitelistedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.isWhitelisted === true) {
      writer.uint32(16).bool(message.isWhitelisted);
    }
    return writer;
  },
  fromJSON(object: any): IsWhitelistedResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      isWhitelisted: isSet(object.isWhitelisted) ? Boolean(object.isWhitelisted) : false
    };
  },
  fromPartial(object: Partial<IsWhitelistedResponse>): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    message.address = object.address ?? "";
    message.isWhitelisted = object.isWhitelisted ?? false;
    return message;
  }
};