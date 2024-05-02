import { EthBridgeClaim, EthBridgeClaimAmino, EthBridgeClaimSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgPause {
  signer: string;
  isPaused: boolean;
}
export interface MsgPauseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgPause";
  value: Uint8Array;
}
export interface MsgPauseAmino {
  signer?: string;
  is_paused?: boolean;
}
export interface MsgPauseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgPause";
  value: MsgPauseAmino;
}
export interface MsgPauseSDKType {
  signer: string;
  is_paused: boolean;
}
export interface MsgPauseResponse {}
export interface MsgPauseResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgPauseResponse";
  value: Uint8Array;
}
export interface MsgPauseResponseAmino {}
export interface MsgPauseResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgPauseResponse";
  value: MsgPauseResponseAmino;
}
export interface MsgPauseResponseSDKType {}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLock {
  cosmosSender: string;
  amount: string;
  symbol: string;
  ethereumChainId: bigint;
  ethereumReceiver: string;
  cethAmount: string;
}
export interface MsgLockProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgLock";
  value: Uint8Array;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockAmino {
  cosmos_sender?: string;
  amount?: string;
  symbol?: string;
  ethereum_chain_id?: string;
  ethereum_receiver?: string;
  ceth_amount?: string;
}
export interface MsgLockAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgLock";
  value: MsgLockAmino;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockSDKType {
  cosmos_sender: string;
  amount: string;
  symbol: string;
  ethereum_chain_id: bigint;
  ethereum_receiver: string;
  ceth_amount: string;
}
export interface MsgLockResponse {}
export interface MsgLockResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgLockResponse";
  value: Uint8Array;
}
export interface MsgLockResponseAmino {}
export interface MsgLockResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgLockResponse";
  value: MsgLockResponseAmino;
}
export interface MsgLockResponseSDKType {}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurn {
  cosmosSender: string;
  amount: string;
  symbol: string;
  ethereumChainId: bigint;
  ethereumReceiver: string;
  cethAmount: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgBurn";
  value: Uint8Array;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnAmino {
  cosmos_sender?: string;
  amount?: string;
  symbol?: string;
  ethereum_chain_id?: string;
  ethereum_receiver?: string;
  ceth_amount?: string;
}
export interface MsgBurnAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgBurn";
  value: MsgBurnAmino;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnSDKType {
  cosmos_sender: string;
  amount: string;
  symbol: string;
  ethereum_chain_id: bigint;
  ethereum_receiver: string;
  ceth_amount: string;
}
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgBurnResponse";
  value: Uint8Array;
}
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {}
export interface MsgCreateEthBridgeClaim {
  ethBridgeClaim?: EthBridgeClaim;
}
export interface MsgCreateEthBridgeClaimProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
  value: Uint8Array;
}
export interface MsgCreateEthBridgeClaimAmino {
  eth_bridge_claim?: EthBridgeClaimAmino;
}
export interface MsgCreateEthBridgeClaimAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
  value: MsgCreateEthBridgeClaimAmino;
}
export interface MsgCreateEthBridgeClaimSDKType {
  eth_bridge_claim?: EthBridgeClaimSDKType;
}
export interface MsgCreateEthBridgeClaimResponse {}
export interface MsgCreateEthBridgeClaimResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse";
  value: Uint8Array;
}
export interface MsgCreateEthBridgeClaimResponseAmino {}
export interface MsgCreateEthBridgeClaimResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse";
  value: MsgCreateEthBridgeClaimResponseAmino;
}
export interface MsgCreateEthBridgeClaimResponseSDKType {}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidator {
  cosmosSender: string;
  validator: string;
  operationType: string;
}
export interface MsgUpdateWhiteListValidatorProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
  value: Uint8Array;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorAmino {
  cosmos_sender?: string;
  validator?: string;
  operation_type?: string;
}
export interface MsgUpdateWhiteListValidatorAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
  value: MsgUpdateWhiteListValidatorAmino;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorSDKType {
  cosmos_sender: string;
  validator: string;
  operation_type: string;
}
export interface MsgUpdateWhiteListValidatorResponse {}
export interface MsgUpdateWhiteListValidatorResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse";
  value: Uint8Array;
}
export interface MsgUpdateWhiteListValidatorResponseAmino {}
export interface MsgUpdateWhiteListValidatorResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse";
  value: MsgUpdateWhiteListValidatorResponseAmino;
}
export interface MsgUpdateWhiteListValidatorResponseSDKType {}
export interface MsgUpdateCethReceiverAccount {
  cosmosSender: string;
  cethReceiverAccount: string;
}
export interface MsgUpdateCethReceiverAccountProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
  value: Uint8Array;
}
export interface MsgUpdateCethReceiverAccountAmino {
  cosmos_sender?: string;
  ceth_receiver_account?: string;
}
export interface MsgUpdateCethReceiverAccountAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
  value: MsgUpdateCethReceiverAccountAmino;
}
export interface MsgUpdateCethReceiverAccountSDKType {
  cosmos_sender: string;
  ceth_receiver_account: string;
}
export interface MsgUpdateCethReceiverAccountResponse {}
export interface MsgUpdateCethReceiverAccountResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse";
  value: Uint8Array;
}
export interface MsgUpdateCethReceiverAccountResponseAmino {}
export interface MsgUpdateCethReceiverAccountResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse";
  value: MsgUpdateCethReceiverAccountResponseAmino;
}
export interface MsgUpdateCethReceiverAccountResponseSDKType {}
export interface MsgRescueCeth {
  cosmosSender: string;
  cosmosReceiver: string;
  cethAmount: string;
}
export interface MsgRescueCethProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth";
  value: Uint8Array;
}
export interface MsgRescueCethAmino {
  cosmos_sender?: string;
  cosmos_receiver?: string;
  ceth_amount?: string;
}
export interface MsgRescueCethAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgRescueCeth";
  value: MsgRescueCethAmino;
}
export interface MsgRescueCethSDKType {
  cosmos_sender: string;
  cosmos_receiver: string;
  ceth_amount: string;
}
export interface MsgRescueCethResponse {}
export interface MsgRescueCethResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgRescueCethResponse";
  value: Uint8Array;
}
export interface MsgRescueCethResponseAmino {}
export interface MsgRescueCethResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgRescueCethResponse";
  value: MsgRescueCethResponseAmino;
}
export interface MsgRescueCethResponseSDKType {}
export interface MsgSetBlacklist {
  from: string;
  addresses: string[];
}
export interface MsgSetBlacklistProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist";
  value: Uint8Array;
}
export interface MsgSetBlacklistAmino {
  from?: string;
  addresses?: string[];
}
export interface MsgSetBlacklistAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgSetBlacklist";
  value: MsgSetBlacklistAmino;
}
export interface MsgSetBlacklistSDKType {
  from: string;
  addresses: string[];
}
export interface MsgSetBlacklistResponse {}
export interface MsgSetBlacklistResponseProtoMsg {
  typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse";
  value: Uint8Array;
}
export interface MsgSetBlacklistResponseAmino {}
export interface MsgSetBlacklistResponseAminoMsg {
  type: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse";
  value: MsgSetBlacklistResponseAmino;
}
export interface MsgSetBlacklistResponseSDKType {}
function createBaseMsgPause(): MsgPause {
  return {
    signer: "",
    isPaused: false
  };
}
export const MsgPause = {
  typeUrl: "/sifnode.ethbridge.v1.MsgPause",
  encode(message: MsgPause, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.isPaused === true) {
      writer.uint32(16).bool(message.isPaused);
    }
    return writer;
  },
  fromJSON(object: any): MsgPause {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      isPaused: isSet(object.isPaused) ? Boolean(object.isPaused) : false
    };
  },
  fromPartial(object: Partial<MsgPause>): MsgPause {
    const message = createBaseMsgPause();
    message.signer = object.signer ?? "";
    message.isPaused = object.isPaused ?? false;
    return message;
  },
  fromAmino(object: MsgPauseAmino): MsgPause {
    const message = createBaseMsgPause();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.is_paused !== undefined && object.is_paused !== null) {
      message.isPaused = object.is_paused;
    }
    return message;
  },
  toAmino(message: MsgPause): MsgPauseAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.is_paused = message.isPaused === false ? undefined : message.isPaused;
    return obj;
  },
  fromAminoMsg(object: MsgPauseAminoMsg): MsgPause {
    return MsgPause.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseProtoMsg): MsgPause {
    return MsgPause.decode(message.value);
  },
  toProto(message: MsgPause): Uint8Array {
    return MsgPause.encode(message).finish();
  },
  toProtoMsg(message: MsgPause): MsgPauseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgPause",
      value: MsgPause.encode(message).finish()
    };
  }
};
function createBaseMsgPauseResponse(): MsgPauseResponse {
  return {};
}
export const MsgPauseResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgPauseResponse",
  encode(_: MsgPauseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgPauseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse {
    const message = createBaseMsgPauseResponse();
    return message;
  },
  fromAmino(_: MsgPauseResponseAmino): MsgPauseResponse {
    const message = createBaseMsgPauseResponse();
    return message;
  },
  toAmino(_: MsgPauseResponse): MsgPauseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPauseResponseAminoMsg): MsgPauseResponse {
    return MsgPauseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPauseResponseProtoMsg): MsgPauseResponse {
    return MsgPauseResponse.decode(message.value);
  },
  toProto(message: MsgPauseResponse): Uint8Array {
    return MsgPauseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPauseResponse): MsgPauseResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgPauseResponse",
      value: MsgPauseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLock(): MsgLock {
  return {
    cosmosSender: "",
    amount: "",
    symbol: "",
    ethereumChainId: BigInt(0),
    ethereumReceiver: "",
    cethAmount: ""
  };
}
export const MsgLock = {
  typeUrl: "/sifnode.ethbridge.v1.MsgLock",
  encode(message: MsgLock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.ethereumChainId !== BigInt(0)) {
      writer.uint32(32).int64(message.ethereumChainId);
    }
    if (message.ethereumReceiver !== "") {
      writer.uint32(42).string(message.ethereumReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(50).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgLock {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      ethereumChainId: isSet(object.ethereumChainId) ? BigInt(object.ethereumChainId.toString()) : BigInt(0),
      ethereumReceiver: isSet(object.ethereumReceiver) ? String(object.ethereumReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgLock>): MsgLock {
    const message = createBaseMsgLock();
    message.cosmosSender = object.cosmosSender ?? "";
    message.amount = object.amount ?? "";
    message.symbol = object.symbol ?? "";
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? BigInt(object.ethereumChainId.toString()) : BigInt(0);
    message.ethereumReceiver = object.ethereumReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  },
  fromAmino(object: MsgLockAmino): MsgLock {
    const message = createBaseMsgLock();
    if (object.cosmos_sender !== undefined && object.cosmos_sender !== null) {
      message.cosmosSender = object.cosmos_sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.ethereum_chain_id !== undefined && object.ethereum_chain_id !== null) {
      message.ethereumChainId = BigInt(object.ethereum_chain_id);
    }
    if (object.ethereum_receiver !== undefined && object.ethereum_receiver !== null) {
      message.ethereumReceiver = object.ethereum_receiver;
    }
    if (object.ceth_amount !== undefined && object.ceth_amount !== null) {
      message.cethAmount = object.ceth_amount;
    }
    return message;
  },
  toAmino(message: MsgLock): MsgLockAmino {
    const obj: any = {};
    obj.cosmos_sender = message.cosmosSender === "" ? undefined : message.cosmosSender;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.ethereum_chain_id = message.ethereumChainId !== BigInt(0) ? message.ethereumChainId.toString() : undefined;
    obj.ethereum_receiver = message.ethereumReceiver === "" ? undefined : message.ethereumReceiver;
    obj.ceth_amount = message.cethAmount === "" ? undefined : message.cethAmount;
    return obj;
  },
  fromAminoMsg(object: MsgLockAminoMsg): MsgLock {
    return MsgLock.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockProtoMsg): MsgLock {
    return MsgLock.decode(message.value);
  },
  toProto(message: MsgLock): Uint8Array {
    return MsgLock.encode(message).finish();
  },
  toProtoMsg(message: MsgLock): MsgLockProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgLock",
      value: MsgLock.encode(message).finish()
    };
  }
};
function createBaseMsgLockResponse(): MsgLockResponse {
  return {};
}
export const MsgLockResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgLockResponse",
  encode(_: MsgLockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLockResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLockResponse>): MsgLockResponse {
    const message = createBaseMsgLockResponse();
    return message;
  },
  fromAmino(_: MsgLockResponseAmino): MsgLockResponse {
    const message = createBaseMsgLockResponse();
    return message;
  },
  toAmino(_: MsgLockResponse): MsgLockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLockResponseAminoMsg): MsgLockResponse {
    return MsgLockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLockResponseProtoMsg): MsgLockResponse {
    return MsgLockResponse.decode(message.value);
  },
  toProto(message: MsgLockResponse): Uint8Array {
    return MsgLockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockResponse): MsgLockResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgLockResponse",
      value: MsgLockResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    cosmosSender: "",
    amount: "",
    symbol: "",
    ethereumChainId: BigInt(0),
    ethereumReceiver: "",
    cethAmount: ""
  };
}
export const MsgBurn = {
  typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.ethereumChainId !== BigInt(0)) {
      writer.uint32(32).int64(message.ethereumChainId);
    }
    if (message.ethereumReceiver !== "") {
      writer.uint32(42).string(message.ethereumReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(50).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgBurn {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      ethereumChainId: isSet(object.ethereumChainId) ? BigInt(object.ethereumChainId.toString()) : BigInt(0),
      ethereumReceiver: isSet(object.ethereumReceiver) ? String(object.ethereumReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.cosmosSender = object.cosmosSender ?? "";
    message.amount = object.amount ?? "";
    message.symbol = object.symbol ?? "";
    message.ethereumChainId = object.ethereumChainId !== undefined && object.ethereumChainId !== null ? BigInt(object.ethereumChainId.toString()) : BigInt(0);
    message.ethereumReceiver = object.ethereumReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.cosmos_sender !== undefined && object.cosmos_sender !== null) {
      message.cosmosSender = object.cosmos_sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.ethereum_chain_id !== undefined && object.ethereum_chain_id !== null) {
      message.ethereumChainId = BigInt(object.ethereum_chain_id);
    }
    if (object.ethereum_receiver !== undefined && object.ethereum_receiver !== null) {
      message.ethereumReceiver = object.ethereum_receiver;
    }
    if (object.ceth_amount !== undefined && object.ceth_amount !== null) {
      message.cethAmount = object.ceth_amount;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.cosmos_sender = message.cosmosSender === "" ? undefined : message.cosmosSender;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.ethereum_chain_id = message.ethereumChainId !== BigInt(0) ? message.ethereumChainId.toString() : undefined;
    obj.ethereum_receiver = message.ethereumReceiver === "" ? undefined : message.ethereumReceiver;
    obj.ceth_amount = message.cethAmount === "" ? undefined : message.cethAmount;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
export const MsgBurnResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgBurnResponse",
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBurnResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEthBridgeClaim(): MsgCreateEthBridgeClaim {
  return {
    ethBridgeClaim: undefined
  };
}
export const MsgCreateEthBridgeClaim = {
  typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
  encode(message: MsgCreateEthBridgeClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ethBridgeClaim !== undefined) {
      EthBridgeClaim.encode(message.ethBridgeClaim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateEthBridgeClaim {
    return {
      ethBridgeClaim: isSet(object.ethBridgeClaim) ? EthBridgeClaim.fromJSON(object.ethBridgeClaim) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateEthBridgeClaim>): MsgCreateEthBridgeClaim {
    const message = createBaseMsgCreateEthBridgeClaim();
    message.ethBridgeClaim = object.ethBridgeClaim !== undefined && object.ethBridgeClaim !== null ? EthBridgeClaim.fromPartial(object.ethBridgeClaim) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateEthBridgeClaimAmino): MsgCreateEthBridgeClaim {
    const message = createBaseMsgCreateEthBridgeClaim();
    if (object.eth_bridge_claim !== undefined && object.eth_bridge_claim !== null) {
      message.ethBridgeClaim = EthBridgeClaim.fromAmino(object.eth_bridge_claim);
    }
    return message;
  },
  toAmino(message: MsgCreateEthBridgeClaim): MsgCreateEthBridgeClaimAmino {
    const obj: any = {};
    obj.eth_bridge_claim = message.ethBridgeClaim ? EthBridgeClaim.toAmino(message.ethBridgeClaim) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateEthBridgeClaimAminoMsg): MsgCreateEthBridgeClaim {
    return MsgCreateEthBridgeClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEthBridgeClaimProtoMsg): MsgCreateEthBridgeClaim {
    return MsgCreateEthBridgeClaim.decode(message.value);
  },
  toProto(message: MsgCreateEthBridgeClaim): Uint8Array {
    return MsgCreateEthBridgeClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEthBridgeClaim): MsgCreateEthBridgeClaimProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
      value: MsgCreateEthBridgeClaim.encode(message).finish()
    };
  }
};
function createBaseMsgCreateEthBridgeClaimResponse(): MsgCreateEthBridgeClaimResponse {
  return {};
}
export const MsgCreateEthBridgeClaimResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse",
  encode(_: MsgCreateEthBridgeClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateEthBridgeClaimResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateEthBridgeClaimResponse>): MsgCreateEthBridgeClaimResponse {
    const message = createBaseMsgCreateEthBridgeClaimResponse();
    return message;
  },
  fromAmino(_: MsgCreateEthBridgeClaimResponseAmino): MsgCreateEthBridgeClaimResponse {
    const message = createBaseMsgCreateEthBridgeClaimResponse();
    return message;
  },
  toAmino(_: MsgCreateEthBridgeClaimResponse): MsgCreateEthBridgeClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateEthBridgeClaimResponseAminoMsg): MsgCreateEthBridgeClaimResponse {
    return MsgCreateEthBridgeClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateEthBridgeClaimResponseProtoMsg): MsgCreateEthBridgeClaimResponse {
    return MsgCreateEthBridgeClaimResponse.decode(message.value);
  },
  toProto(message: MsgCreateEthBridgeClaimResponse): Uint8Array {
    return MsgCreateEthBridgeClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateEthBridgeClaimResponse): MsgCreateEthBridgeClaimResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse",
      value: MsgCreateEthBridgeClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWhiteListValidator(): MsgUpdateWhiteListValidator {
  return {
    cosmosSender: "",
    validator: "",
    operationType: ""
  };
}
export const MsgUpdateWhiteListValidator = {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
  encode(message: MsgUpdateWhiteListValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.operationType !== "") {
      writer.uint32(26).string(message.operationType);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateWhiteListValidator {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      operationType: isSet(object.operationType) ? String(object.operationType) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateWhiteListValidator>): MsgUpdateWhiteListValidator {
    const message = createBaseMsgUpdateWhiteListValidator();
    message.cosmosSender = object.cosmosSender ?? "";
    message.validator = object.validator ?? "";
    message.operationType = object.operationType ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateWhiteListValidatorAmino): MsgUpdateWhiteListValidator {
    const message = createBaseMsgUpdateWhiteListValidator();
    if (object.cosmos_sender !== undefined && object.cosmos_sender !== null) {
      message.cosmosSender = object.cosmos_sender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    return message;
  },
  toAmino(message: MsgUpdateWhiteListValidator): MsgUpdateWhiteListValidatorAmino {
    const obj: any = {};
    obj.cosmos_sender = message.cosmosSender === "" ? undefined : message.cosmosSender;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.operation_type = message.operationType === "" ? undefined : message.operationType;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWhiteListValidatorAminoMsg): MsgUpdateWhiteListValidator {
    return MsgUpdateWhiteListValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateWhiteListValidatorProtoMsg): MsgUpdateWhiteListValidator {
    return MsgUpdateWhiteListValidator.decode(message.value);
  },
  toProto(message: MsgUpdateWhiteListValidator): Uint8Array {
    return MsgUpdateWhiteListValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWhiteListValidator): MsgUpdateWhiteListValidatorProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
      value: MsgUpdateWhiteListValidator.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWhiteListValidatorResponse(): MsgUpdateWhiteListValidatorResponse {
  return {};
}
export const MsgUpdateWhiteListValidatorResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse",
  encode(_: MsgUpdateWhiteListValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateWhiteListValidatorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateWhiteListValidatorResponse>): MsgUpdateWhiteListValidatorResponse {
    const message = createBaseMsgUpdateWhiteListValidatorResponse();
    return message;
  },
  fromAmino(_: MsgUpdateWhiteListValidatorResponseAmino): MsgUpdateWhiteListValidatorResponse {
    const message = createBaseMsgUpdateWhiteListValidatorResponse();
    return message;
  },
  toAmino(_: MsgUpdateWhiteListValidatorResponse): MsgUpdateWhiteListValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWhiteListValidatorResponseAminoMsg): MsgUpdateWhiteListValidatorResponse {
    return MsgUpdateWhiteListValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateWhiteListValidatorResponseProtoMsg): MsgUpdateWhiteListValidatorResponse {
    return MsgUpdateWhiteListValidatorResponse.decode(message.value);
  },
  toProto(message: MsgUpdateWhiteListValidatorResponse): Uint8Array {
    return MsgUpdateWhiteListValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWhiteListValidatorResponse): MsgUpdateWhiteListValidatorResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse",
      value: MsgUpdateWhiteListValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCethReceiverAccount(): MsgUpdateCethReceiverAccount {
  return {
    cosmosSender: "",
    cethReceiverAccount: ""
  };
}
export const MsgUpdateCethReceiverAccount = {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
  encode(message: MsgUpdateCethReceiverAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.cethReceiverAccount !== "") {
      writer.uint32(18).string(message.cethReceiverAccount);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateCethReceiverAccount {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      cethReceiverAccount: isSet(object.cethReceiverAccount) ? String(object.cethReceiverAccount) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateCethReceiverAccount>): MsgUpdateCethReceiverAccount {
    const message = createBaseMsgUpdateCethReceiverAccount();
    message.cosmosSender = object.cosmosSender ?? "";
    message.cethReceiverAccount = object.cethReceiverAccount ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateCethReceiverAccountAmino): MsgUpdateCethReceiverAccount {
    const message = createBaseMsgUpdateCethReceiverAccount();
    if (object.cosmos_sender !== undefined && object.cosmos_sender !== null) {
      message.cosmosSender = object.cosmos_sender;
    }
    if (object.ceth_receiver_account !== undefined && object.ceth_receiver_account !== null) {
      message.cethReceiverAccount = object.ceth_receiver_account;
    }
    return message;
  },
  toAmino(message: MsgUpdateCethReceiverAccount): MsgUpdateCethReceiverAccountAmino {
    const obj: any = {};
    obj.cosmos_sender = message.cosmosSender === "" ? undefined : message.cosmosSender;
    obj.ceth_receiver_account = message.cethReceiverAccount === "" ? undefined : message.cethReceiverAccount;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCethReceiverAccountAminoMsg): MsgUpdateCethReceiverAccount {
    return MsgUpdateCethReceiverAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCethReceiverAccountProtoMsg): MsgUpdateCethReceiverAccount {
    return MsgUpdateCethReceiverAccount.decode(message.value);
  },
  toProto(message: MsgUpdateCethReceiverAccount): Uint8Array {
    return MsgUpdateCethReceiverAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCethReceiverAccount): MsgUpdateCethReceiverAccountProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
      value: MsgUpdateCethReceiverAccount.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCethReceiverAccountResponse(): MsgUpdateCethReceiverAccountResponse {
  return {};
}
export const MsgUpdateCethReceiverAccountResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse",
  encode(_: MsgUpdateCethReceiverAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateCethReceiverAccountResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateCethReceiverAccountResponse>): MsgUpdateCethReceiverAccountResponse {
    const message = createBaseMsgUpdateCethReceiverAccountResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCethReceiverAccountResponseAmino): MsgUpdateCethReceiverAccountResponse {
    const message = createBaseMsgUpdateCethReceiverAccountResponse();
    return message;
  },
  toAmino(_: MsgUpdateCethReceiverAccountResponse): MsgUpdateCethReceiverAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCethReceiverAccountResponseAminoMsg): MsgUpdateCethReceiverAccountResponse {
    return MsgUpdateCethReceiverAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCethReceiverAccountResponseProtoMsg): MsgUpdateCethReceiverAccountResponse {
    return MsgUpdateCethReceiverAccountResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCethReceiverAccountResponse): Uint8Array {
    return MsgUpdateCethReceiverAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCethReceiverAccountResponse): MsgUpdateCethReceiverAccountResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse",
      value: MsgUpdateCethReceiverAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRescueCeth(): MsgRescueCeth {
  return {
    cosmosSender: "",
    cosmosReceiver: "",
    cethAmount: ""
  };
}
export const MsgRescueCeth = {
  typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
  encode(message: MsgRescueCeth, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cosmosSender !== "") {
      writer.uint32(10).string(message.cosmosSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(18).string(message.cosmosReceiver);
    }
    if (message.cethAmount !== "") {
      writer.uint32(26).string(message.cethAmount);
    }
    return writer;
  },
  fromJSON(object: any): MsgRescueCeth {
    return {
      cosmosSender: isSet(object.cosmosSender) ? String(object.cosmosSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      cethAmount: isSet(object.cethAmount) ? String(object.cethAmount) : ""
    };
  },
  fromPartial(object: Partial<MsgRescueCeth>): MsgRescueCeth {
    const message = createBaseMsgRescueCeth();
    message.cosmosSender = object.cosmosSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.cethAmount = object.cethAmount ?? "";
    return message;
  },
  fromAmino(object: MsgRescueCethAmino): MsgRescueCeth {
    const message = createBaseMsgRescueCeth();
    if (object.cosmos_sender !== undefined && object.cosmos_sender !== null) {
      message.cosmosSender = object.cosmos_sender;
    }
    if (object.cosmos_receiver !== undefined && object.cosmos_receiver !== null) {
      message.cosmosReceiver = object.cosmos_receiver;
    }
    if (object.ceth_amount !== undefined && object.ceth_amount !== null) {
      message.cethAmount = object.ceth_amount;
    }
    return message;
  },
  toAmino(message: MsgRescueCeth): MsgRescueCethAmino {
    const obj: any = {};
    obj.cosmos_sender = message.cosmosSender === "" ? undefined : message.cosmosSender;
    obj.cosmos_receiver = message.cosmosReceiver === "" ? undefined : message.cosmosReceiver;
    obj.ceth_amount = message.cethAmount === "" ? undefined : message.cethAmount;
    return obj;
  },
  fromAminoMsg(object: MsgRescueCethAminoMsg): MsgRescueCeth {
    return MsgRescueCeth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRescueCethProtoMsg): MsgRescueCeth {
    return MsgRescueCeth.decode(message.value);
  },
  toProto(message: MsgRescueCeth): Uint8Array {
    return MsgRescueCeth.encode(message).finish();
  },
  toProtoMsg(message: MsgRescueCeth): MsgRescueCethProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth",
      value: MsgRescueCeth.encode(message).finish()
    };
  }
};
function createBaseMsgRescueCethResponse(): MsgRescueCethResponse {
  return {};
}
export const MsgRescueCethResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgRescueCethResponse",
  encode(_: MsgRescueCethResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRescueCethResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRescueCethResponse>): MsgRescueCethResponse {
    const message = createBaseMsgRescueCethResponse();
    return message;
  },
  fromAmino(_: MsgRescueCethResponseAmino): MsgRescueCethResponse {
    const message = createBaseMsgRescueCethResponse();
    return message;
  },
  toAmino(_: MsgRescueCethResponse): MsgRescueCethResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRescueCethResponseAminoMsg): MsgRescueCethResponse {
    return MsgRescueCethResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRescueCethResponseProtoMsg): MsgRescueCethResponse {
    return MsgRescueCethResponse.decode(message.value);
  },
  toProto(message: MsgRescueCethResponse): Uint8Array {
    return MsgRescueCethResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRescueCethResponse): MsgRescueCethResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgRescueCethResponse",
      value: MsgRescueCethResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetBlacklist(): MsgSetBlacklist {
  return {
    from: "",
    addresses: []
  };
}
export const MsgSetBlacklist = {
  typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
  encode(message: MsgSetBlacklist, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetBlacklist {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetBlacklist>): MsgSetBlacklist {
    const message = createBaseMsgSetBlacklist();
    message.from = object.from ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgSetBlacklistAmino): MsgSetBlacklist {
    const message = createBaseMsgSetBlacklist();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgSetBlacklist): MsgSetBlacklistAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetBlacklistAminoMsg): MsgSetBlacklist {
    return MsgSetBlacklist.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBlacklistProtoMsg): MsgSetBlacklist {
    return MsgSetBlacklist.decode(message.value);
  },
  toProto(message: MsgSetBlacklist): Uint8Array {
    return MsgSetBlacklist.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBlacklist): MsgSetBlacklistProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist",
      value: MsgSetBlacklist.encode(message).finish()
    };
  }
};
function createBaseMsgSetBlacklistResponse(): MsgSetBlacklistResponse {
  return {};
}
export const MsgSetBlacklistResponse = {
  typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse",
  encode(_: MsgSetBlacklistResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetBlacklistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetBlacklistResponse>): MsgSetBlacklistResponse {
    const message = createBaseMsgSetBlacklistResponse();
    return message;
  },
  fromAmino(_: MsgSetBlacklistResponseAmino): MsgSetBlacklistResponse {
    const message = createBaseMsgSetBlacklistResponse();
    return message;
  },
  toAmino(_: MsgSetBlacklistResponse): MsgSetBlacklistResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetBlacklistResponseAminoMsg): MsgSetBlacklistResponse {
    return MsgSetBlacklistResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBlacklistResponseProtoMsg): MsgSetBlacklistResponse {
    return MsgSetBlacklistResponse.decode(message.value);
  },
  toProto(message: MsgSetBlacklistResponse): Uint8Array {
    return MsgSetBlacklistResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBlacklistResponse): MsgSetBlacklistResponseProtoMsg {
    return {
      typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse",
      value: MsgSetBlacklistResponse.encode(message).finish()
    };
  }
};