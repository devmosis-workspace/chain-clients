import { ResponseCheckTx, ResponseCheckTxSDKType, ResponseDeliverTx, ResponseDeliverTxSDKType } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RequestPing {}
export interface RequestPingSDKType {}
export interface RequestBroadcastTx {
  tx: Uint8Array;
}
export interface RequestBroadcastTxSDKType {
  tx: Uint8Array;
}
export interface ResponsePing {}
export interface ResponsePingSDKType {}
export interface ResponseBroadcastTx {
  checkTx?: ResponseCheckTx;
  deliverTx?: ResponseDeliverTx;
}
export interface ResponseBroadcastTxSDKType {
  check_tx?: ResponseCheckTxSDKType;
  deliver_tx?: ResponseDeliverTxSDKType;
}
function createBaseRequestPing(): RequestPing {
  return {};
}
export const RequestPing = {
  encode(_: RequestPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RequestPing {
    return {};
  },
  fromPartial(_: Partial<RequestPing>): RequestPing {
    const message = createBaseRequestPing();
    return message;
  }
};
function createBaseRequestBroadcastTx(): RequestBroadcastTx {
  return {
    tx: new Uint8Array()
  };
}
export const RequestBroadcastTx = {
  encode(message: RequestBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },
  fromJSON(object: any): RequestBroadcastTx {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RequestBroadcastTx>): RequestBroadcastTx {
    const message = createBaseRequestBroadcastTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  }
};
function createBaseResponsePing(): ResponsePing {
  return {};
}
export const ResponsePing = {
  encode(_: ResponsePing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ResponsePing {
    return {};
  },
  fromPartial(_: Partial<ResponsePing>): ResponsePing {
    const message = createBaseResponsePing();
    return message;
  }
};
function createBaseResponseBroadcastTx(): ResponseBroadcastTx {
  return {
    checkTx: undefined,
    deliverTx: undefined
  };
}
export const ResponseBroadcastTx = {
  encode(message: ResponseBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliverTx !== undefined) {
      ResponseDeliverTx.encode(message.deliverTx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ResponseBroadcastTx {
    return {
      checkTx: isSet(object.checkTx) ? ResponseCheckTx.fromJSON(object.checkTx) : undefined,
      deliverTx: isSet(object.deliverTx) ? ResponseDeliverTx.fromJSON(object.deliverTx) : undefined
    };
  },
  fromPartial(object: Partial<ResponseBroadcastTx>): ResponseBroadcastTx {
    const message = createBaseResponseBroadcastTx();
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.deliverTx = object.deliverTx !== undefined && object.deliverTx !== null ? ResponseDeliverTx.fromPartial(object.deliverTx) : undefined;
    return message;
  }
};