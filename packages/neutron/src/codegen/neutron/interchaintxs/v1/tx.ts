import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Fee, FeeAmino, FeeSDKType } from "../../feerefunder/fee";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
  fromAddress: string;
  connectionId: string;
  interchainAccountId: string;
  registerFee: Coin[];
}
export interface MsgRegisterInterchainAccountProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount";
  value: Uint8Array;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountAmino {
  from_address?: string;
  connection_id?: string;
  interchain_account_id?: string;
  register_fee?: CoinAmino[];
}
export interface MsgRegisterInterchainAccountAminoMsg {
  type: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount";
  value: MsgRegisterInterchainAccountAmino;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountSDKType {
  from_address: string;
  connection_id: string;
  interchain_account_id: string;
  register_fee: CoinSDKType[];
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponseAmino {}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
  type: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse";
  value: MsgRegisterInterchainAccountResponseAmino;
}
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
  timeout: bigint;
  fee: Fee;
}
export interface MsgSubmitTxProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx";
  value: Uint8Array;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxAmino {
  from_address?: string;
  /**
   * interchain_account_id is supposed to be the unique identifier, e.g.,
   * lido/kava. This allows contracts to have more than one interchain accounts
   * on remote zone This identifier will be a part of the portID that we'll
   * claim our capability for.
   */
  interchain_account_id?: string;
  connection_id?: string;
  msgs?: AnyAmino[];
  memo?: string;
  /** timeout in seconds after which the packet times out */
  timeout?: string;
  fee?: FeeAmino;
}
export interface MsgSubmitTxAminoMsg {
  type: "/neutron.interchaintxs.v1.MsgSubmitTx";
  value: MsgSubmitTxAmino;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
  from_address: string;
  interchain_account_id: string;
  connection_id: string;
  msgs: AnySDKType[];
  memo: string;
  timeout: bigint;
  fee: FeeSDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: bigint;
  /** channel src channel on neutron side transaction was submitted from */
  channel: string;
}
export interface MsgSubmitTxResponseProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseAmino {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequence_id?: string;
  /** channel src channel on neutron side transaction was submitted from */
  channel?: string;
}
export interface MsgSubmitTxResponseAminoMsg {
  type: "/neutron.interchaintxs.v1.MsgSubmitTxResponse";
  value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseSDKType {
  sequence_id: bigint;
  channel: string;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/interchaintxs parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParamsAmino {
  /** Authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/interchaintxs parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "interchaintxs/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    fromAddress: "",
    connectionId: "",
    interchainAccountId: "",
    registerFee: []
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
  encode(message: MsgRegisterInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(26).string(message.interchainAccountId);
    }
    for (const v of message.registerFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      interchainAccountId: isSet(object.interchainAccountId) ? String(object.interchainAccountId) : "",
      registerFee: Array.isArray(object?.registerFee) ? object.registerFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.registerFee = object.registerFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.interchain_account_id !== undefined && object.interchain_account_id !== null) {
      message.interchainAccountId = object.interchain_account_id;
    }
    message.registerFee = object.register_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.connection_id = message.connectionId;
    obj.interchain_account_id = message.interchainAccountId;
    if (message.registerFee) {
      obj.register_fee = message.registerFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.register_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccount): Uint8Array {
    return MsgRegisterInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse",
  encode(_: MsgRegisterInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  toAmino(_: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array {
    return MsgRegisterInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    fromAddress: "",
    interchainAccountId: "",
    connectionId: "",
    msgs: [],
    memo: "",
    timeout: BigInt(0),
    fee: Fee.fromPartial({})
  };
}
export const MsgSubmitTx = {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
  encode(message: MsgSubmitTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.timeout !== BigInt(0)) {
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
      timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0),
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
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.interchain_account_id !== undefined && object.interchain_account_id !== null) {
      message.interchainAccountId = object.interchain_account_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgSubmitTx): MsgSubmitTxAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress;
    obj.interchain_account_id = message.interchainAccountId;
    obj.connection_id = message.connectionId;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.memo = message.memo;
    obj.timeout = message.timeout ? message.timeout.toString() : undefined;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx {
    return MsgSubmitTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx {
    return MsgSubmitTx.decode(message.value);
  },
  toProto(message: MsgSubmitTx): Uint8Array {
    return MsgSubmitTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
      value: MsgSubmitTx.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {
    sequenceId: BigInt(0),
    channel: ""
  };
}
export const MsgSubmitTxResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse",
  encode(message: MsgSubmitTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitTxResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? BigInt(object.sequenceId.toString()) : BigInt(0),
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    message.sequenceId = object.sequenceId !== undefined && object.sequenceId !== null ? BigInt(object.sequenceId.toString()) : BigInt(0);
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitTxResponseAmino): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    if (object.sequence_id !== undefined && object.sequence_id !== null) {
      message.sequenceId = BigInt(object.sequence_id);
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: MsgSubmitTxResponse): MsgSubmitTxResponseAmino {
    const obj: any = {};
    obj.sequence_id = message.sequenceId ? message.sequenceId.toString() : undefined;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.decode(message.value);
  },
  toProto(message: MsgSubmitTxResponse): Uint8Array {
    return MsgSubmitTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse",
      value: MsgSubmitTxResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "interchaintxs/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};