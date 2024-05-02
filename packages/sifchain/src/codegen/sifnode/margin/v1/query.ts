import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { MTP, MTPAmino, MTPSDKType } from "./types";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MTPRequest {
  address: string;
  id: bigint;
}
export interface MTPRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.MTPRequest";
  value: Uint8Array;
}
export interface MTPRequestAmino {
  address?: string;
  id?: string;
}
export interface MTPRequestAminoMsg {
  type: "/sifnode.margin.v1.MTPRequest";
  value: MTPRequestAmino;
}
export interface MTPRequestSDKType {
  address: string;
  id: bigint;
}
export interface MTPResponse {
  mtp?: MTP;
}
export interface MTPResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.MTPResponse";
  value: Uint8Array;
}
export interface MTPResponseAmino {
  mtp?: MTPAmino;
}
export interface MTPResponseAminoMsg {
  type: "/sifnode.margin.v1.MTPResponse";
  value: MTPResponseAmino;
}
export interface MTPResponseSDKType {
  mtp?: MTPSDKType;
}
export interface PositionsForAddressRequest {
  address: string;
  pagination?: PageRequest;
}
export interface PositionsForAddressRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsForAddressRequest";
  value: Uint8Array;
}
export interface PositionsForAddressRequestAmino {
  address?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsForAddressRequestAminoMsg {
  type: "/sifnode.margin.v1.PositionsForAddressRequest";
  value: PositionsForAddressRequestAmino;
}
export interface PositionsForAddressRequestSDKType {
  address: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsForAddressResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsForAddressResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsForAddressResponse";
  value: Uint8Array;
}
export interface PositionsForAddressResponseAmino {
  mtps?: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsForAddressResponseAminoMsg {
  type: "/sifnode.margin.v1.PositionsForAddressResponse";
  value: PositionsForAddressResponseAmino;
}
export interface PositionsForAddressResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsByPoolRequest {
  asset: string;
  pagination?: PageRequest;
}
export interface PositionsByPoolRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsByPoolRequest";
  value: Uint8Array;
}
export interface PositionsByPoolRequestAmino {
  asset?: string;
  pagination?: PageRequestAmino;
}
export interface PositionsByPoolRequestAminoMsg {
  type: "/sifnode.margin.v1.PositionsByPoolRequest";
  value: PositionsByPoolRequestAmino;
}
export interface PositionsByPoolRequestSDKType {
  asset: string;
  pagination?: PageRequestSDKType;
}
export interface PositionsByPoolResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsByPoolResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsByPoolResponse";
  value: Uint8Array;
}
export interface PositionsByPoolResponseAmino {
  mtps?: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsByPoolResponseAminoMsg {
  type: "/sifnode.margin.v1.PositionsByPoolResponse";
  value: PositionsByPoolResponseAmino;
}
export interface PositionsByPoolResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface PositionsRequest {
  pagination?: PageRequest;
}
export interface PositionsRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsRequest";
  value: Uint8Array;
}
export interface PositionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface PositionsRequestAminoMsg {
  type: "/sifnode.margin.v1.PositionsRequest";
  value: PositionsRequestAmino;
}
export interface PositionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface PositionsResponse {
  mtps: MTP[];
  pagination?: PageResponse;
}
export interface PositionsResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.PositionsResponse";
  value: Uint8Array;
}
export interface PositionsResponseAmino {
  mtps?: MTPAmino[];
  pagination?: PageResponseAmino;
}
export interface PositionsResponseAminoMsg {
  type: "/sifnode.margin.v1.PositionsResponse";
  value: PositionsResponseAmino;
}
export interface PositionsResponseSDKType {
  mtps: MTPSDKType[];
  pagination?: PageResponseSDKType;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/sifnode.margin.v1.ParamsRequest";
  value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/sifnode.margin.v1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.StatusRequest";
  value: Uint8Array;
}
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/sifnode.margin.v1.StatusRequest";
  value: StatusRequestAmino;
}
export interface StatusRequestSDKType {}
export interface StatusResponse {
  openMtpCount: bigint;
  lifetimeMtpCount: bigint;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.StatusResponse";
  value: Uint8Array;
}
export interface StatusResponseAmino {
  open_mtp_count?: string;
  lifetime_mtp_count?: string;
}
export interface StatusResponseAminoMsg {
  type: "/sifnode.margin.v1.StatusResponse";
  value: StatusResponseAmino;
}
export interface StatusResponseSDKType {
  open_mtp_count: bigint;
  lifetime_mtp_count: bigint;
}
export interface WhitelistRequest {
  pagination?: PageRequest;
}
export interface WhitelistRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.WhitelistRequest";
  value: Uint8Array;
}
export interface WhitelistRequestAmino {
  pagination?: PageRequestAmino;
}
export interface WhitelistRequestAminoMsg {
  type: "/sifnode.margin.v1.WhitelistRequest";
  value: WhitelistRequestAmino;
}
export interface WhitelistRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface WhitelistResponse {
  whitelist: string[];
  pagination?: PageResponse;
}
export interface WhitelistResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.WhitelistResponse";
  value: Uint8Array;
}
export interface WhitelistResponseAmino {
  whitelist?: string[];
  pagination?: PageResponseAmino;
}
export interface WhitelistResponseAminoMsg {
  type: "/sifnode.margin.v1.WhitelistResponse";
  value: WhitelistResponseAmino;
}
export interface WhitelistResponseSDKType {
  whitelist: string[];
  pagination?: PageResponseSDKType;
}
export interface GetSQParamsRequest {
  pool: string;
}
export interface GetSQParamsRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.GetSQParamsRequest";
  value: Uint8Array;
}
export interface GetSQParamsRequestAmino {
  pool?: string;
}
export interface GetSQParamsRequestAminoMsg {
  type: "/sifnode.margin.v1.GetSQParamsRequest";
  value: GetSQParamsRequestAmino;
}
export interface GetSQParamsRequestSDKType {
  pool: string;
}
export interface GetSQParamsResponse {
  beginBlock: bigint;
}
export interface GetSQParamsResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.GetSQParamsResponse";
  value: Uint8Array;
}
export interface GetSQParamsResponseAmino {
  begin_block?: string;
}
export interface GetSQParamsResponseAminoMsg {
  type: "/sifnode.margin.v1.GetSQParamsResponse";
  value: GetSQParamsResponseAmino;
}
export interface GetSQParamsResponseSDKType {
  begin_block: bigint;
}
export interface IsWhitelistedRequest {
  address: string;
}
export interface IsWhitelistedRequestProtoMsg {
  typeUrl: "/sifnode.margin.v1.IsWhitelistedRequest";
  value: Uint8Array;
}
export interface IsWhitelistedRequestAmino {
  address?: string;
}
export interface IsWhitelistedRequestAminoMsg {
  type: "/sifnode.margin.v1.IsWhitelistedRequest";
  value: IsWhitelistedRequestAmino;
}
export interface IsWhitelistedRequestSDKType {
  address: string;
}
export interface IsWhitelistedResponse {
  address: string;
  isWhitelisted: boolean;
}
export interface IsWhitelistedResponseProtoMsg {
  typeUrl: "/sifnode.margin.v1.IsWhitelistedResponse";
  value: Uint8Array;
}
export interface IsWhitelistedResponseAmino {
  address?: string;
  is_whitelisted?: boolean;
}
export interface IsWhitelistedResponseAminoMsg {
  type: "/sifnode.margin.v1.IsWhitelistedResponse";
  value: IsWhitelistedResponseAmino;
}
export interface IsWhitelistedResponseSDKType {
  address: string;
  is_whitelisted: boolean;
}
function createBaseMTPRequest(): MTPRequest {
  return {
    address: "",
    id: BigInt(0)
  };
}
export const MTPRequest = {
  typeUrl: "/sifnode.margin.v1.MTPRequest",
  encode(message: MTPRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MTPRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MTPRequest>): MTPRequest {
    const message = createBaseMTPRequest();
    message.address = object.address ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MTPRequestAmino): MTPRequest {
    const message = createBaseMTPRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MTPRequest): MTPRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPRequestAminoMsg): MTPRequest {
    return MTPRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPRequestProtoMsg): MTPRequest {
    return MTPRequest.decode(message.value);
  },
  toProto(message: MTPRequest): Uint8Array {
    return MTPRequest.encode(message).finish();
  },
  toProtoMsg(message: MTPRequest): MTPRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MTPRequest",
      value: MTPRequest.encode(message).finish()
    };
  }
};
function createBaseMTPResponse(): MTPResponse {
  return {
    mtp: undefined
  };
}
export const MTPResponse = {
  typeUrl: "/sifnode.margin.v1.MTPResponse",
  encode(message: MTPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MTPResponseAmino): MTPResponse {
    const message = createBaseMTPResponse();
    if (object.mtp !== undefined && object.mtp !== null) {
      message.mtp = MTP.fromAmino(object.mtp);
    }
    return message;
  },
  toAmino(message: MTPResponse): MTPResponseAmino {
    const obj: any = {};
    obj.mtp = message.mtp ? MTP.toAmino(message.mtp) : undefined;
    return obj;
  },
  fromAminoMsg(object: MTPResponseAminoMsg): MTPResponse {
    return MTPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MTPResponseProtoMsg): MTPResponse {
    return MTPResponse.decode(message.value);
  },
  toProto(message: MTPResponse): Uint8Array {
    return MTPResponse.encode(message).finish();
  },
  toProtoMsg(message: MTPResponse): MTPResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.MTPResponse",
      value: MTPResponse.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressRequest(): PositionsForAddressRequest {
  return {
    address: "",
    pagination: undefined
  };
}
export const PositionsForAddressRequest = {
  typeUrl: "/sifnode.margin.v1.PositionsForAddressRequest",
  encode(message: PositionsForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsForAddressRequestAmino): PositionsForAddressRequest {
    const message = createBasePositionsForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressRequest): PositionsForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressRequestAminoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressRequestProtoMsg): PositionsForAddressRequest {
    return PositionsForAddressRequest.decode(message.value);
  },
  toProto(message: PositionsForAddressRequest): Uint8Array {
    return PositionsForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressRequest): PositionsForAddressRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsForAddressRequest",
      value: PositionsForAddressRequest.encode(message).finish()
    };
  }
};
function createBasePositionsForAddressResponse(): PositionsForAddressResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsForAddressResponse = {
  typeUrl: "/sifnode.margin.v1.PositionsForAddressResponse",
  encode(message: PositionsForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsForAddressResponseAmino): PositionsForAddressResponse {
    const message = createBasePositionsForAddressResponse();
    message.mtps = object.mtps?.map(e => MTP.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsForAddressResponse): PositionsForAddressResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsForAddressResponseAminoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsForAddressResponseProtoMsg): PositionsForAddressResponse {
    return PositionsForAddressResponse.decode(message.value);
  },
  toProto(message: PositionsForAddressResponse): Uint8Array {
    return PositionsForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsForAddressResponse): PositionsForAddressResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsForAddressResponse",
      value: PositionsForAddressResponse.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolRequest(): PositionsByPoolRequest {
  return {
    asset: "",
    pagination: undefined
  };
}
export const PositionsByPoolRequest = {
  typeUrl: "/sifnode.margin.v1.PositionsByPoolRequest",
  encode(message: PositionsByPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsByPoolRequestAmino): PositionsByPoolRequest {
    const message = createBasePositionsByPoolRequest();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolRequest): PositionsByPoolRequestAmino {
    const obj: any = {};
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolRequestAminoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolRequestProtoMsg): PositionsByPoolRequest {
    return PositionsByPoolRequest.decode(message.value);
  },
  toProto(message: PositionsByPoolRequest): Uint8Array {
    return PositionsByPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolRequest): PositionsByPoolRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsByPoolRequest",
      value: PositionsByPoolRequest.encode(message).finish()
    };
  }
};
function createBasePositionsByPoolResponse(): PositionsByPoolResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsByPoolResponse = {
  typeUrl: "/sifnode.margin.v1.PositionsByPoolResponse",
  encode(message: PositionsByPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsByPoolResponseAmino): PositionsByPoolResponse {
    const message = createBasePositionsByPoolResponse();
    message.mtps = object.mtps?.map(e => MTP.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsByPoolResponse): PositionsByPoolResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsByPoolResponseAminoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsByPoolResponseProtoMsg): PositionsByPoolResponse {
    return PositionsByPoolResponse.decode(message.value);
  },
  toProto(message: PositionsByPoolResponse): Uint8Array {
    return PositionsByPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsByPoolResponse): PositionsByPoolResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsByPoolResponse",
      value: PositionsByPoolResponse.encode(message).finish()
    };
  }
};
function createBasePositionsRequest(): PositionsRequest {
  return {
    pagination: undefined
  };
}
export const PositionsRequest = {
  typeUrl: "/sifnode.margin.v1.PositionsRequest",
  encode(message: PositionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsRequestAmino): PositionsRequest {
    const message = createBasePositionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsRequest): PositionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsRequestAminoMsg): PositionsRequest {
    return PositionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsRequestProtoMsg): PositionsRequest {
    return PositionsRequest.decode(message.value);
  },
  toProto(message: PositionsRequest): Uint8Array {
    return PositionsRequest.encode(message).finish();
  },
  toProtoMsg(message: PositionsRequest): PositionsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsRequest",
      value: PositionsRequest.encode(message).finish()
    };
  }
};
function createBasePositionsResponse(): PositionsResponse {
  return {
    mtps: [],
    pagination: undefined
  };
}
export const PositionsResponse = {
  typeUrl: "/sifnode.margin.v1.PositionsResponse",
  encode(message: PositionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PositionsResponseAmino): PositionsResponse {
    const message = createBasePositionsResponse();
    message.mtps = object.mtps?.map(e => MTP.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: PositionsResponse): PositionsResponseAmino {
    const obj: any = {};
    if (message.mtps) {
      obj.mtps = message.mtps.map(e => e ? MTP.toAmino(e) : undefined);
    } else {
      obj.mtps = message.mtps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: PositionsResponseAminoMsg): PositionsResponse {
    return PositionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: PositionsResponseProtoMsg): PositionsResponse {
    return PositionsResponse.decode(message.value);
  },
  toProto(message: PositionsResponse): Uint8Array {
    return PositionsResponse.encode(message).finish();
  },
  toProtoMsg(message: PositionsResponse): PositionsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.PositionsResponse",
      value: PositionsResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/sifnode.margin.v1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  typeUrl: "/sifnode.margin.v1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/sifnode.margin.v1.StatusRequest",
  encode(_: StatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): StatusRequest {
    return {};
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    openMtpCount: BigInt(0),
    lifetimeMtpCount: BigInt(0)
  };
}
export const StatusResponse = {
  typeUrl: "/sifnode.margin.v1.StatusResponse",
  encode(message: StatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.openMtpCount !== BigInt(0)) {
      writer.uint32(8).uint64(message.openMtpCount);
    }
    if (message.lifetimeMtpCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.lifetimeMtpCount);
    }
    return writer;
  },
  fromJSON(object: any): StatusResponse {
    return {
      openMtpCount: isSet(object.openMtpCount) ? BigInt(object.openMtpCount.toString()) : BigInt(0),
      lifetimeMtpCount: isSet(object.lifetimeMtpCount) ? BigInt(object.lifetimeMtpCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.openMtpCount = object.openMtpCount !== undefined && object.openMtpCount !== null ? BigInt(object.openMtpCount.toString()) : BigInt(0);
    message.lifetimeMtpCount = object.lifetimeMtpCount !== undefined && object.lifetimeMtpCount !== null ? BigInt(object.lifetimeMtpCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.open_mtp_count !== undefined && object.open_mtp_count !== null) {
      message.openMtpCount = BigInt(object.open_mtp_count);
    }
    if (object.lifetime_mtp_count !== undefined && object.lifetime_mtp_count !== null) {
      message.lifetimeMtpCount = BigInt(object.lifetime_mtp_count);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.open_mtp_count = message.openMtpCount !== BigInt(0) ? message.openMtpCount.toString() : undefined;
    obj.lifetime_mtp_count = message.lifetimeMtpCount !== BigInt(0) ? message.lifetimeMtpCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBaseWhitelistRequest(): WhitelistRequest {
  return {
    pagination: undefined
  };
}
export const WhitelistRequest = {
  typeUrl: "/sifnode.margin.v1.WhitelistRequest",
  encode(message: WhitelistRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: WhitelistRequestAmino): WhitelistRequest {
    const message = createBaseWhitelistRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistRequest): WhitelistRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistRequestAminoMsg): WhitelistRequest {
    return WhitelistRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistRequestProtoMsg): WhitelistRequest {
    return WhitelistRequest.decode(message.value);
  },
  toProto(message: WhitelistRequest): Uint8Array {
    return WhitelistRequest.encode(message).finish();
  },
  toProtoMsg(message: WhitelistRequest): WhitelistRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.WhitelistRequest",
      value: WhitelistRequest.encode(message).finish()
    };
  }
};
function createBaseWhitelistResponse(): WhitelistResponse {
  return {
    whitelist: [],
    pagination: undefined
  };
}
export const WhitelistResponse = {
  typeUrl: "/sifnode.margin.v1.WhitelistResponse",
  encode(message: WhitelistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: WhitelistResponseAmino): WhitelistResponse {
    const message = createBaseWhitelistResponse();
    message.whitelist = object.whitelist?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: WhitelistResponse): WhitelistResponseAmino {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map(e => e);
    } else {
      obj.whitelist = message.whitelist;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: WhitelistResponseAminoMsg): WhitelistResponse {
    return WhitelistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WhitelistResponseProtoMsg): WhitelistResponse {
    return WhitelistResponse.decode(message.value);
  },
  toProto(message: WhitelistResponse): Uint8Array {
    return WhitelistResponse.encode(message).finish();
  },
  toProtoMsg(message: WhitelistResponse): WhitelistResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.WhitelistResponse",
      value: WhitelistResponse.encode(message).finish()
    };
  }
};
function createBaseGetSQParamsRequest(): GetSQParamsRequest {
  return {
    pool: ""
  };
}
export const GetSQParamsRequest = {
  typeUrl: "/sifnode.margin.v1.GetSQParamsRequest",
  encode(message: GetSQParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GetSQParamsRequestAmino): GetSQParamsRequest {
    const message = createBaseGetSQParamsRequest();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool;
    }
    return message;
  },
  toAmino(message: GetSQParamsRequest): GetSQParamsRequestAmino {
    const obj: any = {};
    obj.pool = message.pool === "" ? undefined : message.pool;
    return obj;
  },
  fromAminoMsg(object: GetSQParamsRequestAminoMsg): GetSQParamsRequest {
    return GetSQParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetSQParamsRequestProtoMsg): GetSQParamsRequest {
    return GetSQParamsRequest.decode(message.value);
  },
  toProto(message: GetSQParamsRequest): Uint8Array {
    return GetSQParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSQParamsRequest): GetSQParamsRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.GetSQParamsRequest",
      value: GetSQParamsRequest.encode(message).finish()
    };
  }
};
function createBaseGetSQParamsResponse(): GetSQParamsResponse {
  return {
    beginBlock: BigInt(0)
  };
}
export const GetSQParamsResponse = {
  typeUrl: "/sifnode.margin.v1.GetSQParamsResponse",
  encode(message: GetSQParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.beginBlock !== BigInt(0)) {
      writer.uint32(8).int64(message.beginBlock);
    }
    return writer;
  },
  fromJSON(object: any): GetSQParamsResponse {
    return {
      beginBlock: isSet(object.beginBlock) ? BigInt(object.beginBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GetSQParamsResponse>): GetSQParamsResponse {
    const message = createBaseGetSQParamsResponse();
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? BigInt(object.beginBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetSQParamsResponseAmino): GetSQParamsResponse {
    const message = createBaseGetSQParamsResponse();
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = BigInt(object.begin_block);
    }
    return message;
  },
  toAmino(message: GetSQParamsResponse): GetSQParamsResponseAmino {
    const obj: any = {};
    obj.begin_block = message.beginBlock !== BigInt(0) ? message.beginBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetSQParamsResponseAminoMsg): GetSQParamsResponse {
    return GetSQParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetSQParamsResponseProtoMsg): GetSQParamsResponse {
    return GetSQParamsResponse.decode(message.value);
  },
  toProto(message: GetSQParamsResponse): Uint8Array {
    return GetSQParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetSQParamsResponse): GetSQParamsResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.GetSQParamsResponse",
      value: GetSQParamsResponse.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedRequest(): IsWhitelistedRequest {
  return {
    address: ""
  };
}
export const IsWhitelistedRequest = {
  typeUrl: "/sifnode.margin.v1.IsWhitelistedRequest",
  encode(message: IsWhitelistedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: IsWhitelistedRequestAmino): IsWhitelistedRequest {
    const message = createBaseIsWhitelistedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: IsWhitelistedRequest): IsWhitelistedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedRequestAminoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedRequestProtoMsg): IsWhitelistedRequest {
    return IsWhitelistedRequest.decode(message.value);
  },
  toProto(message: IsWhitelistedRequest): Uint8Array {
    return IsWhitelistedRequest.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedRequest): IsWhitelistedRequestProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.IsWhitelistedRequest",
      value: IsWhitelistedRequest.encode(message).finish()
    };
  }
};
function createBaseIsWhitelistedResponse(): IsWhitelistedResponse {
  return {
    address: "",
    isWhitelisted: false
  };
}
export const IsWhitelistedResponse = {
  typeUrl: "/sifnode.margin.v1.IsWhitelistedResponse",
  encode(message: IsWhitelistedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: IsWhitelistedResponseAmino): IsWhitelistedResponse {
    const message = createBaseIsWhitelistedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.is_whitelisted !== undefined && object.is_whitelisted !== null) {
      message.isWhitelisted = object.is_whitelisted;
    }
    return message;
  },
  toAmino(message: IsWhitelistedResponse): IsWhitelistedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.is_whitelisted = message.isWhitelisted === false ? undefined : message.isWhitelisted;
    return obj;
  },
  fromAminoMsg(object: IsWhitelistedResponseAminoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsWhitelistedResponseProtoMsg): IsWhitelistedResponse {
    return IsWhitelistedResponse.decode(message.value);
  },
  toProto(message: IsWhitelistedResponse): Uint8Array {
    return IsWhitelistedResponse.encode(message).finish();
  },
  toProtoMsg(message: IsWhitelistedResponse): IsWhitelistedResponseProtoMsg {
    return {
      typeUrl: "/sifnode.margin.v1.IsWhitelistedResponse",
      value: IsWhitelistedResponse.encode(message).finish()
    };
  }
};