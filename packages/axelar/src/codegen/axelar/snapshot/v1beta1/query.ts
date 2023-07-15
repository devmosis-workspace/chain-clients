import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryValidatorsResponse {
  validators: QueryValidatorsResponse_Validator[];
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
  tssIllegibilityInfo?: QueryValidatorsResponse_TssIllegibilityInfo;
}
export interface QueryValidatorsResponse_ValidatorSDKType {
  operator_address: string;
  moniker: string;
  tss_illegibility_info?: QueryValidatorsResponse_TssIllegibilityInfoSDKType;
}
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: []
  };
}
export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: QueryValidatorsResponse_TssIllegibilityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryValidatorsResponse_Validator(): QueryValidatorsResponse_Validator {
  return {
    operatorAddress: "",
    moniker: "",
    tssIllegibilityInfo: undefined
  };
}
export const QueryValidatorsResponse_Validator = {
  encode(message: QueryValidatorsResponse_Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};