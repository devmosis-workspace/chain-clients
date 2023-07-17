import { Cork, CorkSDKType } from "./cork";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
  /** the cork to send across the bridge */
  cork?: Cork;
  /** signer account address */
  signer: string;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestSDKType {
  cork?: CorkSDKType;
  signer: string;
}
export interface MsgSubmitCorkResponse {}
export interface MsgSubmitCorkResponseSDKType {}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
  /** the scheduled cork */
  cork?: Cork;
  /** the block height that must be reached */
  blockHeight: Long;
  /** signer account address */
  signer: string;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
  cork?: CorkSDKType;
  block_height: Long;
  signer: string;
}
export interface MsgScheduleCorkResponse {}
export interface MsgScheduleCorkResponseSDKType {}
function createBaseMsgSubmitCorkRequest(): MsgSubmitCorkRequest {
  return {
    cork: undefined,
    signer: ""
  };
}
export const MsgSubmitCorkRequest = {
  encode(message: MsgSubmitCorkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest {
    const message = createBaseMsgSubmitCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgSubmitCorkResponse(): MsgSubmitCorkResponse {
  return {};
}
export const MsgSubmitCorkResponse = {
  encode(_: MsgSubmitCorkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSubmitCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse {
    const message = createBaseMsgSubmitCorkResponse();
    return message;
  }
};
function createBaseMsgScheduleCorkRequest(): MsgScheduleCorkRequest {
  return {
    cork: undefined,
    blockHeight: Long.UZERO,
    signer: ""
  };
}
export const MsgScheduleCorkRequest = {
  encode(message: MsgScheduleCorkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest {
    const message = createBaseMsgScheduleCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgScheduleCorkResponse(): MsgScheduleCorkResponse {
  return {};
}
export const MsgScheduleCorkResponse = {
  encode(_: MsgScheduleCorkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgScheduleCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse {
    const message = createBaseMsgScheduleCorkResponse();
    return message;
  }
};