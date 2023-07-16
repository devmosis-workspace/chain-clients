import { Any, AnySDKType } from "../../google/protobuf/any";
import { Fee, FeeSDKType } from "../../feerefunder/fee";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
  fromAddress: string;
  connectionId: string;
  interchainAccountId: string;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountSDKType {
  from_address: string;
  connection_id: string;
  interchain_account_id: string;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponseSDKType {}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
  fromAddress: string;
  /**
   * interchain_account_id is supposed to be the unique identifier, e.g.,
   * lido/kava. This allows contracts to have more than one interchain accounts
   * on remote zone This identifier will be a part of the portID that we'll
   * claim our capability for.
   */
  interchainAccountId: string;
  connectionId: string;
  msgs: Any[];
  memo: string;
  /** timeout in seconds after which the packet times out */
  timeout: Long;
  fee?: Fee;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
  from_address: string;
  interchain_account_id: string;
  connection_id: string;
  msgs: AnySDKType[];
  memo: string;
  timeout: Long;
  fee?: FeeSDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: Long;
  /** channel src channel on neutron side trasaction was submitted from */
  channel: string;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseSDKType {
  sequence_id: Long;
  channel: string;
}
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    fromAddress: "",
    connectionId: "",
    interchainAccountId: ""
  };
}
export const MsgRegisterInterchainAccount = {
  encode(message: MsgRegisterInterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(26).string(message.interchainAccountId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : ""
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    return message;
  }
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  encode(_: MsgRegisterInterchainAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  }
};
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    fromAddress: "",
    interchainAccountId: "",
    connectionId: "",
    msgs: [],
    memo: "",
    timeout: Long.UZERO,
    fee: undefined
  };
}
export const MsgSubmitTx = {
  encode(message: MsgSubmitTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    if (!message.timeout.isZero()) {
      writer.uint32(48).uint64(message.timeout);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitTx {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout: isSet(object.timeout) ? Long.fromValue(object.timeout) : Long.UZERO,
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined
    };
  },
  fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.fromAddress = object.fromAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.UZERO;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {
    sequenceId: Long.UZERO,
    channel: ""
  };
}
export const MsgSubmitTxResponse = {
  encode(message: MsgSubmitTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequenceId.isZero()) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitTxResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? Long.fromValue(object.sequenceId) : Long.UZERO,
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    message.sequenceId = object.sequenceId !== undefined && object.sequenceId !== null ? Long.fromValue(object.sequenceId) : Long.UZERO;
    message.channel = object.channel ?? "";
    return message;
  }
};