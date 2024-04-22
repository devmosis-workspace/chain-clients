import { AxelarCork, AxelarCorkAmino, AxelarCorkSDKType } from "./axelarcork";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequest {
  /** the scheduled cork */
  cork?: AxelarCork;
  /** the chain id */
  chainId: bigint;
  /** the block height that must be reached */
  blockHeight: bigint;
  /** signer account address */
  signer: string;
}
export interface MsgScheduleAxelarCorkRequestProtoMsg {
  typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest";
  value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequestAmino {
  /** the scheduled cork */
  cork?: AxelarCorkAmino;
  /** the chain id */
  chain_id?: string;
  /** the block height that must be reached */
  block_height?: string;
  /** signer account address */
  signer?: string;
}
export interface MsgScheduleAxelarCorkRequestAminoMsg {
  type: "/axelarcork.v1.MsgScheduleAxelarCorkRequest";
  value: MsgScheduleAxelarCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleAxelarCorkRequestSDKType {
  cork?: AxelarCorkSDKType;
  chain_id: bigint;
  block_height: bigint;
  signer: string;
}
export interface MsgScheduleAxelarCorkResponse {
  /** cork ID */
  id: string;
}
export interface MsgScheduleAxelarCorkResponseProtoMsg {
  typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkResponse";
  value: Uint8Array;
}
export interface MsgScheduleAxelarCorkResponseAmino {
  /** cork ID */
  id?: string;
}
export interface MsgScheduleAxelarCorkResponseAminoMsg {
  type: "/axelarcork.v1.MsgScheduleAxelarCorkResponse";
  value: MsgScheduleAxelarCorkResponseAmino;
}
export interface MsgScheduleAxelarCorkResponseSDKType {
  id: string;
}
export interface MsgRelayAxelarCorkRequest {
  signer: string;
  token: Coin;
  fee: bigint;
  chainId: bigint;
  targetContractAddress: string;
}
export interface MsgRelayAxelarCorkRequestProtoMsg {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest";
  value: Uint8Array;
}
export interface MsgRelayAxelarCorkRequestAmino {
  signer?: string;
  token?: CoinAmino;
  fee?: string;
  chain_id?: string;
  target_contract_address?: string;
}
export interface MsgRelayAxelarCorkRequestAminoMsg {
  type: "/axelarcork.v1.MsgRelayAxelarCorkRequest";
  value: MsgRelayAxelarCorkRequestAmino;
}
export interface MsgRelayAxelarCorkRequestSDKType {
  signer: string;
  token: CoinSDKType;
  fee: bigint;
  chain_id: bigint;
  target_contract_address: string;
}
export interface MsgRelayAxelarCorkResponse {}
export interface MsgRelayAxelarCorkResponseProtoMsg {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkResponse";
  value: Uint8Array;
}
export interface MsgRelayAxelarCorkResponseAmino {}
export interface MsgRelayAxelarCorkResponseAminoMsg {
  type: "/axelarcork.v1.MsgRelayAxelarCorkResponse";
  value: MsgRelayAxelarCorkResponseAmino;
}
export interface MsgRelayAxelarCorkResponseSDKType {}
export interface MsgRelayAxelarProxyUpgradeRequest {
  signer: string;
  token: Coin;
  fee: bigint;
  chainId: bigint;
}
export interface MsgRelayAxelarProxyUpgradeRequestProtoMsg {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest";
  value: Uint8Array;
}
export interface MsgRelayAxelarProxyUpgradeRequestAmino {
  signer?: string;
  token?: CoinAmino;
  fee?: string;
  chain_id?: string;
}
export interface MsgRelayAxelarProxyUpgradeRequestAminoMsg {
  type: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest";
  value: MsgRelayAxelarProxyUpgradeRequestAmino;
}
export interface MsgRelayAxelarProxyUpgradeRequestSDKType {
  signer: string;
  token: CoinSDKType;
  fee: bigint;
  chain_id: bigint;
}
export interface MsgRelayAxelarProxyUpgradeResponse {}
export interface MsgRelayAxelarProxyUpgradeResponseProtoMsg {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse";
  value: Uint8Array;
}
export interface MsgRelayAxelarProxyUpgradeResponseAmino {}
export interface MsgRelayAxelarProxyUpgradeResponseAminoMsg {
  type: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse";
  value: MsgRelayAxelarProxyUpgradeResponseAmino;
}
export interface MsgRelayAxelarProxyUpgradeResponseSDKType {}
export interface MsgBumpAxelarCorkGasRequest {
  signer: string;
  token: Coin;
  messageId: string;
}
export interface MsgBumpAxelarCorkGasRequestProtoMsg {
  typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest";
  value: Uint8Array;
}
export interface MsgBumpAxelarCorkGasRequestAmino {
  signer?: string;
  token?: CoinAmino;
  message_id?: string;
}
export interface MsgBumpAxelarCorkGasRequestAminoMsg {
  type: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest";
  value: MsgBumpAxelarCorkGasRequestAmino;
}
export interface MsgBumpAxelarCorkGasRequestSDKType {
  signer: string;
  token: CoinSDKType;
  message_id: string;
}
export interface MsgBumpAxelarCorkGasResponse {}
export interface MsgBumpAxelarCorkGasResponseProtoMsg {
  typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse";
  value: Uint8Array;
}
export interface MsgBumpAxelarCorkGasResponseAmino {}
export interface MsgBumpAxelarCorkGasResponseAminoMsg {
  type: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse";
  value: MsgBumpAxelarCorkGasResponseAmino;
}
export interface MsgBumpAxelarCorkGasResponseSDKType {}
export interface MsgCancelAxelarCorkRequest {
  signer: string;
  chainId: bigint;
  targetContractAddress: string;
}
export interface MsgCancelAxelarCorkRequestProtoMsg {
  typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest";
  value: Uint8Array;
}
export interface MsgCancelAxelarCorkRequestAmino {
  signer?: string;
  chain_id?: string;
  target_contract_address?: string;
}
export interface MsgCancelAxelarCorkRequestAminoMsg {
  type: "/axelarcork.v1.MsgCancelAxelarCorkRequest";
  value: MsgCancelAxelarCorkRequestAmino;
}
export interface MsgCancelAxelarCorkRequestSDKType {
  signer: string;
  chain_id: bigint;
  target_contract_address: string;
}
export interface MsgCancelAxelarCorkResponse {}
export interface MsgCancelAxelarCorkResponseProtoMsg {
  typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkResponse";
  value: Uint8Array;
}
export interface MsgCancelAxelarCorkResponseAmino {}
export interface MsgCancelAxelarCorkResponseAminoMsg {
  type: "/axelarcork.v1.MsgCancelAxelarCorkResponse";
  value: MsgCancelAxelarCorkResponseAmino;
}
export interface MsgCancelAxelarCorkResponseSDKType {}
function createBaseMsgScheduleAxelarCorkRequest(): MsgScheduleAxelarCorkRequest {
  return {
    cork: undefined,
    chainId: BigInt(0),
    blockHeight: BigInt(0),
    signer: ""
  };
}
export const MsgScheduleAxelarCorkRequest = {
  typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
  encode(message: MsgScheduleAxelarCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      AxelarCork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleAxelarCorkRequest {
    return {
      cork: isSet(object.cork) ? AxelarCork.fromJSON(object.cork) : undefined,
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleAxelarCorkRequest>): MsgScheduleAxelarCorkRequest {
    const message = createBaseMsgScheduleAxelarCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? AxelarCork.fromPartial(object.cork) : undefined;
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgScheduleAxelarCorkRequestAmino): MsgScheduleAxelarCorkRequest {
    const message = createBaseMsgScheduleAxelarCorkRequest();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = AxelarCork.fromAmino(object.cork);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgScheduleAxelarCorkRequest): MsgScheduleAxelarCorkRequestAmino {
    const obj: any = {};
    obj.cork = message.cork ? AxelarCork.toAmino(message.cork) : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleAxelarCorkRequestAminoMsg): MsgScheduleAxelarCorkRequest {
    return MsgScheduleAxelarCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleAxelarCorkRequestProtoMsg): MsgScheduleAxelarCorkRequest {
    return MsgScheduleAxelarCorkRequest.decode(message.value);
  },
  toProto(message: MsgScheduleAxelarCorkRequest): Uint8Array {
    return MsgScheduleAxelarCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleAxelarCorkRequest): MsgScheduleAxelarCorkRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkRequest",
      value: MsgScheduleAxelarCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleAxelarCorkResponse(): MsgScheduleAxelarCorkResponse {
  return {
    id: ""
  };
}
export const MsgScheduleAxelarCorkResponse = {
  typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkResponse",
  encode(message: MsgScheduleAxelarCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleAxelarCorkResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgScheduleAxelarCorkResponse>): MsgScheduleAxelarCorkResponse {
    const message = createBaseMsgScheduleAxelarCorkResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgScheduleAxelarCorkResponseAmino): MsgScheduleAxelarCorkResponse {
    const message = createBaseMsgScheduleAxelarCorkResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgScheduleAxelarCorkResponse): MsgScheduleAxelarCorkResponseAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleAxelarCorkResponseAminoMsg): MsgScheduleAxelarCorkResponse {
    return MsgScheduleAxelarCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleAxelarCorkResponseProtoMsg): MsgScheduleAxelarCorkResponse {
    return MsgScheduleAxelarCorkResponse.decode(message.value);
  },
  toProto(message: MsgScheduleAxelarCorkResponse): Uint8Array {
    return MsgScheduleAxelarCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleAxelarCorkResponse): MsgScheduleAxelarCorkResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgScheduleAxelarCorkResponse",
      value: MsgScheduleAxelarCorkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayAxelarCorkRequest(): MsgRelayAxelarCorkRequest {
  return {
    signer: "",
    token: Coin.fromPartial({}),
    fee: BigInt(0),
    chainId: BigInt(0),
    targetContractAddress: ""
  };
}
export const MsgRelayAxelarCorkRequest = {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
  encode(message: MsgRelayAxelarCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(42).string(message.targetContractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayAxelarCorkRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgRelayAxelarCorkRequest>): MsgRelayAxelarCorkRequest {
    const message = createBaseMsgRelayAxelarCorkRequest();
    message.signer = object.signer ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRelayAxelarCorkRequestAmino): MsgRelayAxelarCorkRequest {
    const message = createBaseMsgRelayAxelarCorkRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    return message;
  },
  toAmino(message: MsgRelayAxelarCorkRequest): MsgRelayAxelarCorkRequestAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRelayAxelarCorkRequestAminoMsg): MsgRelayAxelarCorkRequest {
    return MsgRelayAxelarCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayAxelarCorkRequestProtoMsg): MsgRelayAxelarCorkRequest {
    return MsgRelayAxelarCorkRequest.decode(message.value);
  },
  toProto(message: MsgRelayAxelarCorkRequest): Uint8Array {
    return MsgRelayAxelarCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayAxelarCorkRequest): MsgRelayAxelarCorkRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkRequest",
      value: MsgRelayAxelarCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRelayAxelarCorkResponse(): MsgRelayAxelarCorkResponse {
  return {};
}
export const MsgRelayAxelarCorkResponse = {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkResponse",
  encode(_: MsgRelayAxelarCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRelayAxelarCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayAxelarCorkResponse>): MsgRelayAxelarCorkResponse {
    const message = createBaseMsgRelayAxelarCorkResponse();
    return message;
  },
  fromAmino(_: MsgRelayAxelarCorkResponseAmino): MsgRelayAxelarCorkResponse {
    const message = createBaseMsgRelayAxelarCorkResponse();
    return message;
  },
  toAmino(_: MsgRelayAxelarCorkResponse): MsgRelayAxelarCorkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayAxelarCorkResponseAminoMsg): MsgRelayAxelarCorkResponse {
    return MsgRelayAxelarCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayAxelarCorkResponseProtoMsg): MsgRelayAxelarCorkResponse {
    return MsgRelayAxelarCorkResponse.decode(message.value);
  },
  toProto(message: MsgRelayAxelarCorkResponse): Uint8Array {
    return MsgRelayAxelarCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayAxelarCorkResponse): MsgRelayAxelarCorkResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgRelayAxelarCorkResponse",
      value: MsgRelayAxelarCorkResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRelayAxelarProxyUpgradeRequest(): MsgRelayAxelarProxyUpgradeRequest {
  return {
    signer: "",
    token: Coin.fromPartial({}),
    fee: BigInt(0),
    chainId: BigInt(0)
  };
}
export const MsgRelayAxelarProxyUpgradeRequest = {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest",
  encode(message: MsgRelayAxelarProxyUpgradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(32).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRelayAxelarProxyUpgradeRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      fee: isSet(object.fee) ? BigInt(object.fee.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgRelayAxelarProxyUpgradeRequest>): MsgRelayAxelarProxyUpgradeRequest {
    const message = createBaseMsgRelayAxelarProxyUpgradeRequest();
    message.signer = object.signer ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? BigInt(object.fee.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRelayAxelarProxyUpgradeRequestAmino): MsgRelayAxelarProxyUpgradeRequest {
    const message = createBaseMsgRelayAxelarProxyUpgradeRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: MsgRelayAxelarProxyUpgradeRequest): MsgRelayAxelarProxyUpgradeRequestAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.fee = message.fee ? message.fee.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRelayAxelarProxyUpgradeRequestAminoMsg): MsgRelayAxelarProxyUpgradeRequest {
    return MsgRelayAxelarProxyUpgradeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayAxelarProxyUpgradeRequestProtoMsg): MsgRelayAxelarProxyUpgradeRequest {
    return MsgRelayAxelarProxyUpgradeRequest.decode(message.value);
  },
  toProto(message: MsgRelayAxelarProxyUpgradeRequest): Uint8Array {
    return MsgRelayAxelarProxyUpgradeRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayAxelarProxyUpgradeRequest): MsgRelayAxelarProxyUpgradeRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeRequest",
      value: MsgRelayAxelarProxyUpgradeRequest.encode(message).finish()
    };
  }
};
function createBaseMsgRelayAxelarProxyUpgradeResponse(): MsgRelayAxelarProxyUpgradeResponse {
  return {};
}
export const MsgRelayAxelarProxyUpgradeResponse = {
  typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse",
  encode(_: MsgRelayAxelarProxyUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRelayAxelarProxyUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRelayAxelarProxyUpgradeResponse>): MsgRelayAxelarProxyUpgradeResponse {
    const message = createBaseMsgRelayAxelarProxyUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgRelayAxelarProxyUpgradeResponseAmino): MsgRelayAxelarProxyUpgradeResponse {
    const message = createBaseMsgRelayAxelarProxyUpgradeResponse();
    return message;
  },
  toAmino(_: MsgRelayAxelarProxyUpgradeResponse): MsgRelayAxelarProxyUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayAxelarProxyUpgradeResponseAminoMsg): MsgRelayAxelarProxyUpgradeResponse {
    return MsgRelayAxelarProxyUpgradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayAxelarProxyUpgradeResponseProtoMsg): MsgRelayAxelarProxyUpgradeResponse {
    return MsgRelayAxelarProxyUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgRelayAxelarProxyUpgradeResponse): Uint8Array {
    return MsgRelayAxelarProxyUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayAxelarProxyUpgradeResponse): MsgRelayAxelarProxyUpgradeResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgRelayAxelarProxyUpgradeResponse",
      value: MsgRelayAxelarProxyUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBumpAxelarCorkGasRequest(): MsgBumpAxelarCorkGasRequest {
  return {
    signer: "",
    token: Coin.fromPartial({}),
    messageId: ""
  };
}
export const MsgBumpAxelarCorkGasRequest = {
  typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
  encode(message: MsgBumpAxelarCorkGasRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.messageId !== "") {
      writer.uint32(26).string(message.messageId);
    }
    return writer;
  },
  fromJSON(object: any): MsgBumpAxelarCorkGasRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      messageId: isSet(object.messageId) ? String(object.messageId) : ""
    };
  },
  fromPartial(object: Partial<MsgBumpAxelarCorkGasRequest>): MsgBumpAxelarCorkGasRequest {
    const message = createBaseMsgBumpAxelarCorkGasRequest();
    message.signer = object.signer ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.messageId = object.messageId ?? "";
    return message;
  },
  fromAmino(object: MsgBumpAxelarCorkGasRequestAmino): MsgBumpAxelarCorkGasRequest {
    const message = createBaseMsgBumpAxelarCorkGasRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    return message;
  },
  toAmino(message: MsgBumpAxelarCorkGasRequest): MsgBumpAxelarCorkGasRequestAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.message_id = message.messageId;
    return obj;
  },
  fromAminoMsg(object: MsgBumpAxelarCorkGasRequestAminoMsg): MsgBumpAxelarCorkGasRequest {
    return MsgBumpAxelarCorkGasRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBumpAxelarCorkGasRequestProtoMsg): MsgBumpAxelarCorkGasRequest {
    return MsgBumpAxelarCorkGasRequest.decode(message.value);
  },
  toProto(message: MsgBumpAxelarCorkGasRequest): Uint8Array {
    return MsgBumpAxelarCorkGasRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgBumpAxelarCorkGasRequest): MsgBumpAxelarCorkGasRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasRequest",
      value: MsgBumpAxelarCorkGasRequest.encode(message).finish()
    };
  }
};
function createBaseMsgBumpAxelarCorkGasResponse(): MsgBumpAxelarCorkGasResponse {
  return {};
}
export const MsgBumpAxelarCorkGasResponse = {
  typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse",
  encode(_: MsgBumpAxelarCorkGasResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBumpAxelarCorkGasResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBumpAxelarCorkGasResponse>): MsgBumpAxelarCorkGasResponse {
    const message = createBaseMsgBumpAxelarCorkGasResponse();
    return message;
  },
  fromAmino(_: MsgBumpAxelarCorkGasResponseAmino): MsgBumpAxelarCorkGasResponse {
    const message = createBaseMsgBumpAxelarCorkGasResponse();
    return message;
  },
  toAmino(_: MsgBumpAxelarCorkGasResponse): MsgBumpAxelarCorkGasResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBumpAxelarCorkGasResponseAminoMsg): MsgBumpAxelarCorkGasResponse {
    return MsgBumpAxelarCorkGasResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBumpAxelarCorkGasResponseProtoMsg): MsgBumpAxelarCorkGasResponse {
    return MsgBumpAxelarCorkGasResponse.decode(message.value);
  },
  toProto(message: MsgBumpAxelarCorkGasResponse): Uint8Array {
    return MsgBumpAxelarCorkGasResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBumpAxelarCorkGasResponse): MsgBumpAxelarCorkGasResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgBumpAxelarCorkGasResponse",
      value: MsgBumpAxelarCorkGasResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAxelarCorkRequest(): MsgCancelAxelarCorkRequest {
  return {
    signer: "",
    chainId: BigInt(0),
    targetContractAddress: ""
  };
}
export const MsgCancelAxelarCorkRequest = {
  typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
  encode(message: MsgCancelAxelarCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    if (message.targetContractAddress !== "") {
      writer.uint32(26).string(message.targetContractAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgCancelAxelarCorkRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      targetContractAddress: isSet(object.targetContractAddress) ? String(object.targetContractAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgCancelAxelarCorkRequest>): MsgCancelAxelarCorkRequest {
    const message = createBaseMsgCancelAxelarCorkRequest();
    message.signer = object.signer ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.targetContractAddress = object.targetContractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCancelAxelarCorkRequestAmino): MsgCancelAxelarCorkRequest {
    const message = createBaseMsgCancelAxelarCorkRequest();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.target_contract_address !== undefined && object.target_contract_address !== null) {
      message.targetContractAddress = object.target_contract_address;
    }
    return message;
  },
  toAmino(message: MsgCancelAxelarCorkRequest): MsgCancelAxelarCorkRequestAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.target_contract_address = message.targetContractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelAxelarCorkRequestAminoMsg): MsgCancelAxelarCorkRequest {
    return MsgCancelAxelarCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelAxelarCorkRequestProtoMsg): MsgCancelAxelarCorkRequest {
    return MsgCancelAxelarCorkRequest.decode(message.value);
  },
  toProto(message: MsgCancelAxelarCorkRequest): Uint8Array {
    return MsgCancelAxelarCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAxelarCorkRequest): MsgCancelAxelarCorkRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkRequest",
      value: MsgCancelAxelarCorkRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCancelAxelarCorkResponse(): MsgCancelAxelarCorkResponse {
  return {};
}
export const MsgCancelAxelarCorkResponse = {
  typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkResponse",
  encode(_: MsgCancelAxelarCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCancelAxelarCorkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCancelAxelarCorkResponse>): MsgCancelAxelarCorkResponse {
    const message = createBaseMsgCancelAxelarCorkResponse();
    return message;
  },
  fromAmino(_: MsgCancelAxelarCorkResponseAmino): MsgCancelAxelarCorkResponse {
    const message = createBaseMsgCancelAxelarCorkResponse();
    return message;
  },
  toAmino(_: MsgCancelAxelarCorkResponse): MsgCancelAxelarCorkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelAxelarCorkResponseAminoMsg): MsgCancelAxelarCorkResponse {
    return MsgCancelAxelarCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelAxelarCorkResponseProtoMsg): MsgCancelAxelarCorkResponse {
    return MsgCancelAxelarCorkResponse.decode(message.value);
  },
  toProto(message: MsgCancelAxelarCorkResponse): Uint8Array {
    return MsgCancelAxelarCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelAxelarCorkResponse): MsgCancelAxelarCorkResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.MsgCancelAxelarCorkResponse",
      value: MsgCancelAxelarCorkResponse.encode(message).finish()
    };
  }
};