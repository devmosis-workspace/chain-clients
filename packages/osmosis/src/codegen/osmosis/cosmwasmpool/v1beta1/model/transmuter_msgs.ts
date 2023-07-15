import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestSDKType {}
export interface JoinPoolExecuteMsgRequest {
  /**
   * join_pool is the structure containing all request fields of the join pool
   * execute message.
   */
  joinPool?: EmptyRequest;
}
export interface JoinPoolExecuteMsgRequestSDKType {
  join_pool?: EmptyRequestSDKType;
}
export interface JoinPoolExecuteMsgResponse {}
export interface JoinPoolExecuteMsgResponseSDKType {}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
  /**
   * exit_pool is the structure containing all request fields of the exit pool
   * execute message.
   */
  exitPool?: EmptyRequest;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestSDKType {
  exit_pool?: EmptyRequestSDKType;
}
export interface ExitPoolExecuteMsgResponse {}
export interface ExitPoolExecuteMsgResponseSDKType {}
function createBaseEmptyRequest(): EmptyRequest {
  return {};
}
export const EmptyRequest = {
  encode(_: EmptyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): EmptyRequest {
    return {};
  },
  fromPartial(_: Partial<EmptyRequest>): EmptyRequest {
    const message = createBaseEmptyRequest();
    return message;
  }
};
function createBaseJoinPoolExecuteMsgRequest(): JoinPoolExecuteMsgRequest {
  return {
    joinPool: undefined
  };
}
export const JoinPoolExecuteMsgRequest = {
  encode(message: JoinPoolExecuteMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.joinPool !== undefined) {
      EmptyRequest.encode(message.joinPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): JoinPoolExecuteMsgRequest {
    return {
      joinPool: isSet(object.joinPool) ? EmptyRequest.fromJSON(object.joinPool) : undefined
    };
  },
  fromPartial(object: Partial<JoinPoolExecuteMsgRequest>): JoinPoolExecuteMsgRequest {
    const message = createBaseJoinPoolExecuteMsgRequest();
    message.joinPool = object.joinPool !== undefined && object.joinPool !== null ? EmptyRequest.fromPartial(object.joinPool) : undefined;
    return message;
  }
};
function createBaseJoinPoolExecuteMsgResponse(): JoinPoolExecuteMsgResponse {
  return {};
}
export const JoinPoolExecuteMsgResponse = {
  encode(_: JoinPoolExecuteMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): JoinPoolExecuteMsgResponse {
    return {};
  },
  fromPartial(_: Partial<JoinPoolExecuteMsgResponse>): JoinPoolExecuteMsgResponse {
    const message = createBaseJoinPoolExecuteMsgResponse();
    return message;
  }
};
function createBaseExitPoolExecuteMsgRequest(): ExitPoolExecuteMsgRequest {
  return {
    exitPool: undefined
  };
}
export const ExitPoolExecuteMsgRequest = {
  encode(message: ExitPoolExecuteMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exitPool !== undefined) {
      EmptyRequest.encode(message.exitPool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExitPoolExecuteMsgRequest {
    return {
      exitPool: isSet(object.exitPool) ? EmptyRequest.fromJSON(object.exitPool) : undefined
    };
  },
  fromPartial(object: Partial<ExitPoolExecuteMsgRequest>): ExitPoolExecuteMsgRequest {
    const message = createBaseExitPoolExecuteMsgRequest();
    message.exitPool = object.exitPool !== undefined && object.exitPool !== null ? EmptyRequest.fromPartial(object.exitPool) : undefined;
    return message;
  }
};
function createBaseExitPoolExecuteMsgResponse(): ExitPoolExecuteMsgResponse {
  return {};
}
export const ExitPoolExecuteMsgResponse = {
  encode(_: ExitPoolExecuteMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ExitPoolExecuteMsgResponse {
    return {};
  },
  fromPartial(_: Partial<ExitPoolExecuteMsgResponse>): ExitPoolExecuteMsgResponse {
    const message = createBaseExitPoolExecuteMsgResponse();
    return message;
  }
};