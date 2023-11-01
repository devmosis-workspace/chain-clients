import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryValidatorsResponse {
  validators: QueryValidatorsResponse_Validator[];
}
export interface QueryValidatorsResponseProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse";
  value: Uint8Array;
}
export interface QueryValidatorsResponseAmino {
  validators: QueryValidatorsResponse_ValidatorAmino[];
}
export interface QueryValidatorsResponseAminoMsg {
  type: "/axelar.snapshot.v1beta1.QueryValidatorsResponse";
  value: QueryValidatorsResponseAmino;
}
export interface QueryValidatorsResponseSDKType {
  validators: QueryValidatorsResponse_ValidatorSDKType[];
}
export interface QueryValidatorsResponse_TssIllegibilityInfo {
  tombstoned: boolean;
  jailed: boolean;
  missedTooManyBlocks: boolean;
  noProxyRegistered: boolean;
  tssSuspended: boolean;
  proxyInsuficientFunds: boolean;
  staleTssHeartbeat: boolean;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo";
  value: Uint8Array;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoAmino {
  tombstoned: boolean;
  jailed: boolean;
  missed_too_many_blocks: boolean;
  no_proxy_registered: boolean;
  tss_suspended: boolean;
  proxy_insuficient_funds: boolean;
  stale_tss_heartbeat: boolean;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoAminoMsg {
  type: "/axelar.snapshot.v1beta1.TssIllegibilityInfo";
  value: QueryValidatorsResponse_TssIllegibilityInfoAmino;
}
export interface QueryValidatorsResponse_TssIllegibilityInfoSDKType {
  tombstoned: boolean;
  jailed: boolean;
  missed_too_many_blocks: boolean;
  no_proxy_registered: boolean;
  tss_suspended: boolean;
  proxy_insuficient_funds: boolean;
  stale_tss_heartbeat: boolean;
}
export interface QueryValidatorsResponse_Validator {
  operatorAddress: string;
  moniker: string;
  tssIllegibilityInfo: QueryValidatorsResponse_TssIllegibilityInfo;
}
export interface QueryValidatorsResponse_ValidatorProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.Validator";
  value: Uint8Array;
}
export interface QueryValidatorsResponse_ValidatorAmino {
  operator_address: string;
  moniker: string;
  tss_illegibility_info?: QueryValidatorsResponse_TssIllegibilityInfoAmino;
}
export interface QueryValidatorsResponse_ValidatorAminoMsg {
  type: "/axelar.snapshot.v1beta1.Validator";
  value: QueryValidatorsResponse_ValidatorAmino;
}
export interface QueryValidatorsResponse_ValidatorSDKType {
  operator_address: string;
  moniker: string;
  tss_illegibility_info: QueryValidatorsResponse_TssIllegibilityInfoSDKType;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.ParamsRequest";
  value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "/axelar.snapshot.v1beta1.ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "/axelar.snapshot.v1beta1.ParamsResponse";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse",
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      QueryValidatorsResponse_Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => QueryValidatorsResponse_Validator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => QueryValidatorsResponse_Validator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => QueryValidatorsResponse_Validator.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? QueryValidatorsResponse_Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse_TssIllegibilityInfo(): QueryValidatorsResponse_TssIllegibilityInfo {
  return {
    tombstoned: false,
    jailed: false,
    missedTooManyBlocks: false,
    noProxyRegistered: false,
    tssSuspended: false,
    proxyInsuficientFunds: false,
    staleTssHeartbeat: false
  };
}
export const QueryValidatorsResponse_TssIllegibilityInfo = {
  typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo",
  encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tombstoned === true) {
      writer.uint32(8).bool(message.tombstoned);
    }
    if (message.jailed === true) {
      writer.uint32(16).bool(message.jailed);
    }
    if (message.missedTooManyBlocks === true) {
      writer.uint32(24).bool(message.missedTooManyBlocks);
    }
    if (message.noProxyRegistered === true) {
      writer.uint32(32).bool(message.noProxyRegistered);
    }
    if (message.tssSuspended === true) {
      writer.uint32(40).bool(message.tssSuspended);
    }
    if (message.proxyInsuficientFunds === true) {
      writer.uint32(48).bool(message.proxyInsuficientFunds);
    }
    if (message.staleTssHeartbeat === true) {
      writer.uint32(56).bool(message.staleTssHeartbeat);
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorsResponse_TssIllegibilityInfo {
    return {
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      missedTooManyBlocks: isSet(object.missedTooManyBlocks) ? Boolean(object.missedTooManyBlocks) : false,
      noProxyRegistered: isSet(object.noProxyRegistered) ? Boolean(object.noProxyRegistered) : false,
      tssSuspended: isSet(object.tssSuspended) ? Boolean(object.tssSuspended) : false,
      proxyInsuficientFunds: isSet(object.proxyInsuficientFunds) ? Boolean(object.proxyInsuficientFunds) : false,
      staleTssHeartbeat: isSet(object.staleTssHeartbeat) ? Boolean(object.staleTssHeartbeat) : false
    };
  },
  fromPartial(object: Partial<QueryValidatorsResponse_TssIllegibilityInfo>): QueryValidatorsResponse_TssIllegibilityInfo {
    const message = createBaseQueryValidatorsResponse_TssIllegibilityInfo();
    message.tombstoned = object.tombstoned ?? false;
    message.jailed = object.jailed ?? false;
    message.missedTooManyBlocks = object.missedTooManyBlocks ?? false;
    message.noProxyRegistered = object.noProxyRegistered ?? false;
    message.tssSuspended = object.tssSuspended ?? false;
    message.proxyInsuficientFunds = object.proxyInsuficientFunds ?? false;
    message.staleTssHeartbeat = object.staleTssHeartbeat ?? false;
    return message;
  },
  fromAmino(object: QueryValidatorsResponse_TssIllegibilityInfoAmino): QueryValidatorsResponse_TssIllegibilityInfo {
    return {
      tombstoned: object.tombstoned,
      jailed: object.jailed,
      missedTooManyBlocks: object.missed_too_many_blocks,
      noProxyRegistered: object.no_proxy_registered,
      tssSuspended: object.tss_suspended,
      proxyInsuficientFunds: object.proxy_insuficient_funds,
      staleTssHeartbeat: object.stale_tss_heartbeat
    };
  },
  toAmino(message: QueryValidatorsResponse_TssIllegibilityInfo): QueryValidatorsResponse_TssIllegibilityInfoAmino {
    const obj: any = {};
    obj.tombstoned = message.tombstoned;
    obj.jailed = message.jailed;
    obj.missed_too_many_blocks = message.missedTooManyBlocks;
    obj.no_proxy_registered = message.noProxyRegistered;
    obj.tss_suspended = message.tssSuspended;
    obj.proxy_insuficient_funds = message.proxyInsuficientFunds;
    obj.stale_tss_heartbeat = message.staleTssHeartbeat;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponse_TssIllegibilityInfoAminoMsg): QueryValidatorsResponse_TssIllegibilityInfo {
    return QueryValidatorsResponse_TssIllegibilityInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsResponse_TssIllegibilityInfoProtoMsg): QueryValidatorsResponse_TssIllegibilityInfo {
    return QueryValidatorsResponse_TssIllegibilityInfo.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse_TssIllegibilityInfo): Uint8Array {
    return QueryValidatorsResponse_TssIllegibilityInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse_TssIllegibilityInfo): QueryValidatorsResponse_TssIllegibilityInfoProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.TssIllegibilityInfo",
      value: QueryValidatorsResponse_TssIllegibilityInfo.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse_Validator(): QueryValidatorsResponse_Validator {
  return {
    operatorAddress: "",
    moniker: "",
    tssIllegibilityInfo: QueryValidatorsResponse_TssIllegibilityInfo.fromPartial({})
  };
}
export const QueryValidatorsResponse_Validator = {
  typeUrl: "/axelar.snapshot.v1beta1.Validator",
  encode(message: QueryValidatorsResponse_Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.tssIllegibilityInfo !== undefined) {
      QueryValidatorsResponse_TssIllegibilityInfo.encode(message.tssIllegibilityInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorsResponse_Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      tssIllegibilityInfo: isSet(object.tssIllegibilityInfo) ? QueryValidatorsResponse_TssIllegibilityInfo.fromJSON(object.tssIllegibilityInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorsResponse_Validator>): QueryValidatorsResponse_Validator {
    const message = createBaseQueryValidatorsResponse_Validator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.moniker = object.moniker ?? "";
    message.tssIllegibilityInfo = object.tssIllegibilityInfo !== undefined && object.tssIllegibilityInfo !== null ? QueryValidatorsResponse_TssIllegibilityInfo.fromPartial(object.tssIllegibilityInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponse_ValidatorAmino): QueryValidatorsResponse_Validator {
    return {
      operatorAddress: object.operator_address,
      moniker: object.moniker,
      tssIllegibilityInfo: object?.tss_illegibility_info ? QueryValidatorsResponse_TssIllegibilityInfo.fromAmino(object.tss_illegibility_info) : undefined
    };
  },
  toAmino(message: QueryValidatorsResponse_Validator): QueryValidatorsResponse_ValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.moniker = message.moniker;
    obj.tss_illegibility_info = message.tssIllegibilityInfo ? QueryValidatorsResponse_TssIllegibilityInfo.toAmino(message.tssIllegibilityInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponse_ValidatorAminoMsg): QueryValidatorsResponse_Validator {
    return QueryValidatorsResponse_Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorsResponse_ValidatorProtoMsg): QueryValidatorsResponse_Validator {
    return QueryValidatorsResponse_Validator.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse_Validator): Uint8Array {
    return QueryValidatorsResponse_Validator.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse_Validator): QueryValidatorsResponse_ValidatorProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.Validator",
      value: QueryValidatorsResponse_Validator.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/axelar.snapshot.v1beta1.ParamsRequest",
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
    return {};
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
      typeUrl: "/axelar.snapshot.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/axelar.snapshot.v1beta1.ParamsResponse",
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
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
      typeUrl: "/axelar.snapshot.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};