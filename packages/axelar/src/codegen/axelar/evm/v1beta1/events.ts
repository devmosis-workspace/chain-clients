import { PollParticipants, PollParticipantsSDKType } from "../../vote/exported/v1beta1/types";
import { TokenDetails, TokenDetailsSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PollFailed {
  txId: Uint8Array;
  chain: string;
  pollId: Long;
}
export interface PollFailedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: Long;
}
export interface PollExpired {
  txId: Uint8Array;
  chain: string;
  pollId: Long;
}
export interface PollExpiredSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: Long;
}
export interface PollCompleted {
  txId: Uint8Array;
  chain: string;
  pollId: Long;
}
export interface PollCompletedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: Long;
}
export interface NoEventsConfirmed {
  txId: Uint8Array;
  chain: string;
  pollId: Long;
}
export interface NoEventsConfirmedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: Long;
}
export interface ConfirmKeyTransferStarted {
  chain: string;
  txId: Uint8Array;
  gatewayAddress: Uint8Array;
  confirmationHeight: Long;
  participants?: PollParticipants;
}
export interface ConfirmKeyTransferStartedSDKType {
  chain: string;
  tx_id: Uint8Array;
  gateway_address: Uint8Array;
  confirmation_height: Long;
  participants?: PollParticipantsSDKType;
}
export interface ConfirmGatewayTxStarted {
  txId: Uint8Array;
  chain: string;
  gatewayAddress: Uint8Array;
  confirmationHeight: Long;
  participants?: PollParticipants;
}
export interface ConfirmGatewayTxStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  gateway_address: Uint8Array;
  confirmation_height: Long;
  participants?: PollParticipantsSDKType;
}
export interface ConfirmDepositStarted {
  txId: Uint8Array;
  chain: string;
  depositAddress: Uint8Array;
  tokenAddress: Uint8Array;
  confirmationHeight: Long;
  participants?: PollParticipants;
  asset: string;
}
export interface ConfirmDepositStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  deposit_address: Uint8Array;
  token_address: Uint8Array;
  confirmation_height: Long;
  participants?: PollParticipantsSDKType;
  asset: string;
}
export interface ConfirmTokenStarted {
  txId: Uint8Array;
  chain: string;
  gatewayAddress: Uint8Array;
  tokenAddress: Uint8Array;
  tokenDetails?: TokenDetails;
  confirmationHeight: Long;
  participants?: PollParticipants;
}
export interface ConfirmTokenStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  gateway_address: Uint8Array;
  token_address: Uint8Array;
  token_details?: TokenDetailsSDKType;
  confirmation_height: Long;
  participants?: PollParticipantsSDKType;
}
export interface ChainAdded {
  chain: string;
}
export interface ChainAddedSDKType {
  chain: string;
}
export interface CommandBatchSigned {
  chain: string;
  commandBatchId: Uint8Array;
}
export interface CommandBatchSignedSDKType {
  chain: string;
  command_batch_id: Uint8Array;
}
export interface CommandBatchAborted {
  chain: string;
  commandBatchId: Uint8Array;
}
export interface CommandBatchAbortedSDKType {
  chain: string;
  command_batch_id: Uint8Array;
}
export interface EVMEventConfirmed {
  chain: string;
  eventId: string;
  type: string;
}
export interface EVMEventConfirmedSDKType {
  chain: string;
  event_id: string;
  type: string;
}
export interface EVMEventCompleted {
  chain: string;
  eventId: string;
  type: string;
}
export interface EVMEventCompletedSDKType {
  chain: string;
  event_id: string;
  type: string;
}
export interface EVMEventFailed {
  chain: string;
  eventId: string;
  type: string;
}
export interface EVMEventFailedSDKType {
  chain: string;
  event_id: string;
  type: string;
}
export interface EVMEventRetryFailed {
  chain: string;
  eventId: string;
  type: string;
}
export interface EVMEventRetryFailedSDKType {
  chain: string;
  event_id: string;
  type: string;
}
export interface ContractCallApproved {
  chain: string;
  eventId: string;
  commandId: Uint8Array;
  sender: string;
  destinationChain: string;
  contractAddress: string;
  payloadHash: Uint8Array;
}
export interface ContractCallApprovedSDKType {
  chain: string;
  event_id: string;
  command_id: Uint8Array;
  sender: string;
  destination_chain: string;
  contract_address: string;
  payload_hash: Uint8Array;
}
export interface ContractCallFailed {
  chain: string;
  msgId: string;
}
export interface ContractCallFailedSDKType {
  chain: string;
  msg_id: string;
}
export interface ContractCallWithMintApproved {
  chain: string;
  eventId: string;
  commandId: Uint8Array;
  sender: string;
  destinationChain: string;
  contractAddress: string;
  payloadHash: Uint8Array;
  asset?: Coin;
}
export interface ContractCallWithMintApprovedSDKType {
  chain: string;
  event_id: string;
  command_id: Uint8Array;
  sender: string;
  destination_chain: string;
  contract_address: string;
  payload_hash: Uint8Array;
  asset?: CoinSDKType;
}
export interface TokenSent {
  chain: string;
  eventId: string;
  transferId: Long;
  sender: string;
  destinationChain: string;
  destinationAddress: string;
  asset?: Coin;
}
export interface TokenSentSDKType {
  chain: string;
  event_id: string;
  transfer_id: Long;
  sender: string;
  destination_chain: string;
  destination_address: string;
  asset?: CoinSDKType;
}
export interface MintCommand {
  chain: string;
  transferId: Long;
  commandId: Uint8Array;
  destinationChain: string;
  destinationAddress: string;
  asset?: Coin;
}
export interface MintCommandSDKType {
  chain: string;
  transfer_id: Long;
  command_id: Uint8Array;
  destination_chain: string;
  destination_address: string;
  asset?: CoinSDKType;
}
export interface BurnCommand {
  chain: string;
  commandId: Uint8Array;
  destinationChain: string;
  depositAddress: string;
  asset: string;
}
export interface BurnCommandSDKType {
  chain: string;
  command_id: Uint8Array;
  destination_chain: string;
  deposit_address: string;
  asset: string;
}
function createBasePollFailed(): PollFailed {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: Long.UZERO
  };
}
export const PollFailed = {
  encode(message: PollFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollFailed {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PollFailed>): PollFailed {
    const message = createBasePollFailed();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    return message;
  }
};
function createBasePollExpired(): PollExpired {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: Long.UZERO
  };
}
export const PollExpired = {
  encode(message: PollExpired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollExpired {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PollExpired>): PollExpired {
    const message = createBasePollExpired();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    return message;
  }
};
function createBasePollCompleted(): PollCompleted {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: Long.UZERO
  };
}
export const PollCompleted = {
  encode(message: PollCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollCompleted {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<PollCompleted>): PollCompleted {
    const message = createBasePollCompleted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    return message;
  }
};
function createBaseNoEventsConfirmed(): NoEventsConfirmed {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: Long.UZERO
  };
}
export const NoEventsConfirmed = {
  encode(message: NoEventsConfirmed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): NoEventsConfirmed {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<NoEventsConfirmed>): NoEventsConfirmed {
    const message = createBaseNoEventsConfirmed();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    return message;
  }
};
function createBaseConfirmKeyTransferStarted(): ConfirmKeyTransferStarted {
  return {
    chain: "",
    txId: new Uint8Array(),
    gatewayAddress: new Uint8Array(),
    confirmationHeight: Long.UZERO,
    participants: undefined
  };
}
export const ConfirmKeyTransferStarted = {
  encode(message: ConfirmKeyTransferStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (!message.confirmationHeight.isZero()) {
      writer.uint32(32).uint64(message.confirmationHeight);
    }
    if (message.participants !== undefined) {
      PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConfirmKeyTransferStarted {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
      confirmationHeight: isSet(object.confirmationHeight) ? Long.fromValue(object.confirmationHeight) : Long.UZERO,
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted {
    const message = createBaseConfirmKeyTransferStarted();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? Long.fromValue(object.confirmationHeight) : Long.UZERO;
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  }
};
function createBaseConfirmGatewayTxStarted(): ConfirmGatewayTxStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    gatewayAddress: new Uint8Array(),
    confirmationHeight: Long.UZERO,
    participants: undefined
  };
}
export const ConfirmGatewayTxStarted = {
  encode(message: ConfirmGatewayTxStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (!message.confirmationHeight.isZero()) {
      writer.uint32(32).uint64(message.confirmationHeight);
    }
    if (message.participants !== undefined) {
      PollParticipants.encode(message.participants, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConfirmGatewayTxStarted {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
      confirmationHeight: isSet(object.confirmationHeight) ? Long.fromValue(object.confirmationHeight) : Long.UZERO,
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted {
    const message = createBaseConfirmGatewayTxStarted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? Long.fromValue(object.confirmationHeight) : Long.UZERO;
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  }
};
function createBaseConfirmDepositStarted(): ConfirmDepositStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    depositAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    confirmationHeight: Long.UZERO,
    participants: undefined,
    asset: ""
  };
}
export const ConfirmDepositStarted = {
  encode(message: ConfirmDepositStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.depositAddress.length !== 0) {
      writer.uint32(26).bytes(message.depositAddress);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(34).bytes(message.tokenAddress);
    }
    if (!message.confirmationHeight.isZero()) {
      writer.uint32(40).uint64(message.confirmationHeight);
    }
    if (message.participants !== undefined) {
      PollParticipants.encode(message.participants, writer.uint32(50).fork()).ldelim();
    }
    if (message.asset !== "") {
      writer.uint32(58).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmDepositStarted {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      depositAddress: isSet(object.depositAddress) ? bytesFromBase64(object.depositAddress) : new Uint8Array(),
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
      confirmationHeight: isSet(object.confirmationHeight) ? Long.fromValue(object.confirmationHeight) : Long.UZERO,
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined,
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<ConfirmDepositStarted>): ConfirmDepositStarted {
    const message = createBaseConfirmDepositStarted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.depositAddress = object.depositAddress ?? new Uint8Array();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? Long.fromValue(object.confirmationHeight) : Long.UZERO;
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    message.asset = object.asset ?? "";
    return message;
  }
};
function createBaseConfirmTokenStarted(): ConfirmTokenStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    gatewayAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    tokenDetails: undefined,
    confirmationHeight: Long.UZERO,
    participants: undefined
  };
}
export const ConfirmTokenStarted = {
  encode(message: ConfirmTokenStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (message.tokenAddress.length !== 0) {
      writer.uint32(34).bytes(message.tokenAddress);
    }
    if (message.tokenDetails !== undefined) {
      TokenDetails.encode(message.tokenDetails, writer.uint32(42).fork()).ldelim();
    }
    if (!message.confirmationHeight.isZero()) {
      writer.uint32(48).uint64(message.confirmationHeight);
    }
    if (message.participants !== undefined) {
      PollParticipants.encode(message.participants, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConfirmTokenStarted {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
      tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
      tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
      confirmationHeight: isSet(object.confirmationHeight) ? Long.fromValue(object.confirmationHeight) : Long.UZERO,
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmTokenStarted>): ConfirmTokenStarted {
    const message = createBaseConfirmTokenStarted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.tokenDetails = object.tokenDetails !== undefined && object.tokenDetails !== null ? TokenDetails.fromPartial(object.tokenDetails) : undefined;
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? Long.fromValue(object.confirmationHeight) : Long.UZERO;
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  }
};
function createBaseChainAdded(): ChainAdded {
  return {
    chain: ""
  };
}
export const ChainAdded = {
  encode(message: ChainAdded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): ChainAdded {
    return {
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<ChainAdded>): ChainAdded {
    const message = createBaseChainAdded();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseCommandBatchSigned(): CommandBatchSigned {
  return {
    chain: "",
    commandBatchId: new Uint8Array()
  };
}
export const CommandBatchSigned = {
  encode(message: CommandBatchSigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.commandBatchId.length !== 0) {
      writer.uint32(26).bytes(message.commandBatchId);
    }
    return writer;
  },
  fromJSON(object: any): CommandBatchSigned {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CommandBatchSigned>): CommandBatchSigned {
    const message = createBaseCommandBatchSigned();
    message.chain = object.chain ?? "";
    message.commandBatchId = object.commandBatchId ?? new Uint8Array();
    return message;
  }
};
function createBaseCommandBatchAborted(): CommandBatchAborted {
  return {
    chain: "",
    commandBatchId: new Uint8Array()
  };
}
export const CommandBatchAborted = {
  encode(message: CommandBatchAborted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.commandBatchId.length !== 0) {
      writer.uint32(26).bytes(message.commandBatchId);
    }
    return writer;
  },
  fromJSON(object: any): CommandBatchAborted {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CommandBatchAborted>): CommandBatchAborted {
    const message = createBaseCommandBatchAborted();
    message.chain = object.chain ?? "";
    message.commandBatchId = object.commandBatchId ?? new Uint8Array();
    return message;
  }
};
function createBaseEVMEventConfirmed(): EVMEventConfirmed {
  return {
    chain: "",
    eventId: "",
    type: ""
  };
}
export const EVMEventConfirmed = {
  encode(message: EVMEventConfirmed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },
  fromJSON(object: any): EVMEventConfirmed {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<EVMEventConfirmed>): EVMEventConfirmed {
    const message = createBaseEVMEventConfirmed();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.type = object.type ?? "";
    return message;
  }
};
function createBaseEVMEventCompleted(): EVMEventCompleted {
  return {
    chain: "",
    eventId: "",
    type: ""
  };
}
export const EVMEventCompleted = {
  encode(message: EVMEventCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },
  fromJSON(object: any): EVMEventCompleted {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<EVMEventCompleted>): EVMEventCompleted {
    const message = createBaseEVMEventCompleted();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.type = object.type ?? "";
    return message;
  }
};
function createBaseEVMEventFailed(): EVMEventFailed {
  return {
    chain: "",
    eventId: "",
    type: ""
  };
}
export const EVMEventFailed = {
  encode(message: EVMEventFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },
  fromJSON(object: any): EVMEventFailed {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<EVMEventFailed>): EVMEventFailed {
    const message = createBaseEVMEventFailed();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.type = object.type ?? "";
    return message;
  }
};
function createBaseEVMEventRetryFailed(): EVMEventRetryFailed {
  return {
    chain: "",
    eventId: "",
    type: ""
  };
}
export const EVMEventRetryFailed = {
  encode(message: EVMEventRetryFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },
  fromJSON(object: any): EVMEventRetryFailed {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      type: isSet(object.type) ? String(object.type) : ""
    };
  },
  fromPartial(object: Partial<EVMEventRetryFailed>): EVMEventRetryFailed {
    const message = createBaseEVMEventRetryFailed();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.type = object.type ?? "";
    return message;
  }
};
function createBaseContractCallApproved(): ContractCallApproved {
  return {
    chain: "",
    eventId: "",
    commandId: new Uint8Array(),
    sender: "",
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array()
  };
}
export const ContractCallApproved = {
  encode(message: ContractCallApproved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.commandId.length !== 0) {
      writer.uint32(26).bytes(message.commandId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(42).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(50).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    return writer;
  },
  fromJSON(object: any): ContractCallApproved {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractCallApproved>): ContractCallApproved {
    const message = createBaseContractCallApproved();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.commandId = object.commandId ?? new Uint8Array();
    message.sender = object.sender ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    return message;
  }
};
function createBaseContractCallFailed(): ContractCallFailed {
  return {
    chain: "",
    msgId: ""
  };
}
export const ContractCallFailed = {
  encode(message: ContractCallFailed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.msgId !== "") {
      writer.uint32(18).string(message.msgId);
    }
    return writer;
  },
  fromJSON(object: any): ContractCallFailed {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      msgId: isSet(object.msgId) ? String(object.msgId) : ""
    };
  },
  fromPartial(object: Partial<ContractCallFailed>): ContractCallFailed {
    const message = createBaseContractCallFailed();
    message.chain = object.chain ?? "";
    message.msgId = object.msgId ?? "";
    return message;
  }
};
function createBaseContractCallWithMintApproved(): ContractCallWithMintApproved {
  return {
    chain: "",
    eventId: "",
    commandId: new Uint8Array(),
    sender: "",
    destinationChain: "",
    contractAddress: "",
    payloadHash: new Uint8Array(),
    asset: undefined
  };
}
export const ContractCallWithMintApproved = {
  encode(message: ContractCallWithMintApproved, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.commandId.length !== 0) {
      writer.uint32(26).bytes(message.commandId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(42).string(message.destinationChain);
    }
    if (message.contractAddress !== "") {
      writer.uint32(50).string(message.contractAddress);
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(58).bytes(message.payloadHash);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractCallWithMintApproved {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<ContractCallWithMintApproved>): ContractCallWithMintApproved {
    const message = createBaseContractCallWithMintApproved();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.commandId = object.commandId ?? new Uint8Array();
    message.sender = object.sender ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseTokenSent(): TokenSent {
  return {
    chain: "",
    eventId: "",
    transferId: Long.UZERO,
    sender: "",
    destinationChain: "",
    destinationAddress: "",
    asset: undefined
  };
}
export const TokenSent = {
  encode(message: TokenSent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (!message.transferId.isZero()) {
      writer.uint32(24).uint64(message.transferId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.destinationChain !== "") {
      writer.uint32(42).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(50).string(message.destinationAddress);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TokenSent {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<TokenSent>): TokenSent {
    const message = createBaseTokenSent();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseMintCommand(): MintCommand {
  return {
    chain: "",
    transferId: Long.UZERO,
    commandId: new Uint8Array(),
    destinationChain: "",
    destinationAddress: "",
    asset: undefined
  };
}
export const MintCommand = {
  encode(message: MintCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (!message.transferId.isZero()) {
      writer.uint32(16).uint64(message.transferId);
    }
    if (message.commandId.length !== 0) {
      writer.uint32(26).bytes(message.commandId);
    }
    if (message.destinationChain !== "") {
      writer.uint32(34).string(message.destinationChain);
    }
    if (message.destinationAddress !== "") {
      writer.uint32(42).string(message.destinationAddress);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MintCommand {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      transferId: isSet(object.transferId) ? Long.fromValue(object.transferId) : Long.UZERO,
      commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MintCommand>): MintCommand {
    const message = createBaseMintCommand();
    message.chain = object.chain ?? "";
    message.transferId = object.transferId !== undefined && object.transferId !== null ? Long.fromValue(object.transferId) : Long.UZERO;
    message.commandId = object.commandId ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseBurnCommand(): BurnCommand {
  return {
    chain: "",
    commandId: new Uint8Array(),
    destinationChain: "",
    depositAddress: "",
    asset: ""
  };
}
export const BurnCommand = {
  encode(message: BurnCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.commandId.length !== 0) {
      writer.uint32(18).bytes(message.commandId);
    }
    if (message.destinationChain !== "") {
      writer.uint32(26).string(message.destinationChain);
    }
    if (message.depositAddress !== "") {
      writer.uint32(34).string(message.depositAddress);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    return writer;
  },
  fromJSON(object: any): BurnCommand {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      asset: isSet(object.asset) ? String(object.asset) : ""
    };
  },
  fromPartial(object: Partial<BurnCommand>): BurnCommand {
    const message = createBaseBurnCommand();
    message.chain = object.chain ?? "";
    message.commandId = object.commandId ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.depositAddress = object.depositAddress ?? "";
    message.asset = object.asset ?? "";
    return message;
  }
};