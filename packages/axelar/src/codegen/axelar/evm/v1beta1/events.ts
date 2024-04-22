import { PollParticipants, PollParticipantsAmino, PollParticipantsSDKType } from "../../vote/exported/v1beta1/types";
import { TokenDetails, TokenDetailsAmino, TokenDetailsSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface PollFailed {
  txId: Uint8Array;
  chain: string;
  pollId: bigint;
}
export interface PollFailedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PollFailed";
  value: Uint8Array;
}
export interface PollFailedAmino {
  tx_id?: string;
  chain?: string;
  poll_id?: string;
}
export interface PollFailedAminoMsg {
  type: "/axelar.evm.v1beta1.PollFailed";
  value: PollFailedAmino;
}
export interface PollFailedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: bigint;
}
export interface PollExpired {
  txId: Uint8Array;
  chain: string;
  pollId: bigint;
}
export interface PollExpiredProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PollExpired";
  value: Uint8Array;
}
export interface PollExpiredAmino {
  tx_id?: string;
  chain?: string;
  poll_id?: string;
}
export interface PollExpiredAminoMsg {
  type: "/axelar.evm.v1beta1.PollExpired";
  value: PollExpiredAmino;
}
export interface PollExpiredSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: bigint;
}
export interface PollCompleted {
  txId: Uint8Array;
  chain: string;
  pollId: bigint;
}
export interface PollCompletedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PollCompleted";
  value: Uint8Array;
}
export interface PollCompletedAmino {
  tx_id?: string;
  chain?: string;
  poll_id?: string;
}
export interface PollCompletedAminoMsg {
  type: "/axelar.evm.v1beta1.PollCompleted";
  value: PollCompletedAmino;
}
export interface PollCompletedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: bigint;
}
export interface NoEventsConfirmed {
  txId: Uint8Array;
  chain: string;
  pollId: bigint;
}
export interface NoEventsConfirmedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed";
  value: Uint8Array;
}
export interface NoEventsConfirmedAmino {
  tx_id?: string;
  chain?: string;
  poll_id?: string;
}
export interface NoEventsConfirmedAminoMsg {
  type: "/axelar.evm.v1beta1.NoEventsConfirmed";
  value: NoEventsConfirmedAmino;
}
export interface NoEventsConfirmedSDKType {
  tx_id: Uint8Array;
  chain: string;
  poll_id: bigint;
}
export interface ConfirmKeyTransferStarted {
  chain: string;
  txId: Uint8Array;
  gatewayAddress: Uint8Array;
  confirmationHeight: bigint;
  participants: PollParticipants;
}
export interface ConfirmKeyTransferStartedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted";
  value: Uint8Array;
}
export interface ConfirmKeyTransferStartedAmino {
  chain?: string;
  tx_id?: string;
  gateway_address?: string;
  confirmation_height?: string;
  participants?: PollParticipantsAmino;
}
export interface ConfirmKeyTransferStartedAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted";
  value: ConfirmKeyTransferStartedAmino;
}
export interface ConfirmKeyTransferStartedSDKType {
  chain: string;
  tx_id: Uint8Array;
  gateway_address: Uint8Array;
  confirmation_height: bigint;
  participants: PollParticipantsSDKType;
}
/** @deprecated */
export interface ConfirmGatewayTxStarted {
  txId: Uint8Array;
  chain: string;
  gatewayAddress: Uint8Array;
  confirmationHeight: bigint;
  participants: PollParticipants;
}
export interface ConfirmGatewayTxStartedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted";
  value: Uint8Array;
}
/** @deprecated */
export interface ConfirmGatewayTxStartedAmino {
  tx_id?: string;
  chain?: string;
  gateway_address?: string;
  confirmation_height?: string;
  participants?: PollParticipantsAmino;
}
export interface ConfirmGatewayTxStartedAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted";
  value: ConfirmGatewayTxStartedAmino;
}
/** @deprecated */
export interface ConfirmGatewayTxStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  gateway_address: Uint8Array;
  confirmation_height: bigint;
  participants: PollParticipantsSDKType;
}
export interface PollMapping {
  txId: Uint8Array;
  pollId: bigint;
}
export interface PollMappingProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.PollMapping";
  value: Uint8Array;
}
export interface PollMappingAmino {
  tx_id?: string;
  poll_id?: string;
}
export interface PollMappingAminoMsg {
  type: "/axelar.evm.v1beta1.PollMapping";
  value: PollMappingAmino;
}
export interface PollMappingSDKType {
  tx_id: Uint8Array;
  poll_id: bigint;
}
export interface ConfirmGatewayTxsStarted {
  pollMappings: PollMapping[];
  chain: string;
  gatewayAddress: Uint8Array;
  confirmationHeight: bigint;
  participants: Uint8Array[];
}
export interface ConfirmGatewayTxsStartedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted";
  value: Uint8Array;
}
export interface ConfirmGatewayTxsStartedAmino {
  poll_mappings?: PollMappingAmino[];
  chain?: string;
  gateway_address?: string;
  confirmation_height?: string;
  participants?: string[];
}
export interface ConfirmGatewayTxsStartedAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted";
  value: ConfirmGatewayTxsStartedAmino;
}
export interface ConfirmGatewayTxsStartedSDKType {
  poll_mappings: PollMappingSDKType[];
  chain: string;
  gateway_address: Uint8Array;
  confirmation_height: bigint;
  participants: Uint8Array[];
}
export interface ConfirmDepositStarted {
  txId: Uint8Array;
  chain: string;
  depositAddress: Uint8Array;
  tokenAddress: Uint8Array;
  confirmationHeight: bigint;
  participants: PollParticipants;
  asset: string;
}
export interface ConfirmDepositStartedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted";
  value: Uint8Array;
}
export interface ConfirmDepositStartedAmino {
  tx_id?: string;
  chain?: string;
  deposit_address?: string;
  token_address?: string;
  confirmation_height?: string;
  participants?: PollParticipantsAmino;
  asset?: string;
}
export interface ConfirmDepositStartedAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmDepositStarted";
  value: ConfirmDepositStartedAmino;
}
export interface ConfirmDepositStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  deposit_address: Uint8Array;
  token_address: Uint8Array;
  confirmation_height: bigint;
  participants: PollParticipantsSDKType;
  asset: string;
}
export interface ConfirmTokenStarted {
  txId: Uint8Array;
  chain: string;
  gatewayAddress: Uint8Array;
  tokenAddress: Uint8Array;
  tokenDetails: TokenDetails;
  confirmationHeight: bigint;
  participants: PollParticipants;
}
export interface ConfirmTokenStartedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted";
  value: Uint8Array;
}
export interface ConfirmTokenStartedAmino {
  tx_id?: string;
  chain?: string;
  gateway_address?: string;
  token_address?: string;
  token_details?: TokenDetailsAmino;
  confirmation_height?: string;
  participants?: PollParticipantsAmino;
}
export interface ConfirmTokenStartedAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmTokenStarted";
  value: ConfirmTokenStartedAmino;
}
export interface ConfirmTokenStartedSDKType {
  tx_id: Uint8Array;
  chain: string;
  gateway_address: Uint8Array;
  token_address: Uint8Array;
  token_details: TokenDetailsSDKType;
  confirmation_height: bigint;
  participants: PollParticipantsSDKType;
}
export interface ChainAdded {
  chain: string;
}
export interface ChainAddedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ChainAdded";
  value: Uint8Array;
}
export interface ChainAddedAmino {
  chain?: string;
}
export interface ChainAddedAminoMsg {
  type: "/axelar.evm.v1beta1.ChainAdded";
  value: ChainAddedAmino;
}
export interface ChainAddedSDKType {
  chain: string;
}
export interface CommandBatchSigned {
  chain: string;
  commandBatchId: Uint8Array;
}
export interface CommandBatchSignedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned";
  value: Uint8Array;
}
export interface CommandBatchSignedAmino {
  chain?: string;
  command_batch_id?: string;
}
export interface CommandBatchSignedAminoMsg {
  type: "/axelar.evm.v1beta1.CommandBatchSigned";
  value: CommandBatchSignedAmino;
}
export interface CommandBatchSignedSDKType {
  chain: string;
  command_batch_id: Uint8Array;
}
export interface CommandBatchAborted {
  chain: string;
  commandBatchId: Uint8Array;
}
export interface CommandBatchAbortedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted";
  value: Uint8Array;
}
export interface CommandBatchAbortedAmino {
  chain?: string;
  command_batch_id?: string;
}
export interface CommandBatchAbortedAminoMsg {
  type: "/axelar.evm.v1beta1.CommandBatchAborted";
  value: CommandBatchAbortedAmino;
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
export interface EVMEventConfirmedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed";
  value: Uint8Array;
}
export interface EVMEventConfirmedAmino {
  chain?: string;
  event_id?: string;
  type?: string;
}
export interface EVMEventConfirmedAminoMsg {
  type: "/axelar.evm.v1beta1.EVMEventConfirmed";
  value: EVMEventConfirmedAmino;
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
export interface EVMEventCompletedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted";
  value: Uint8Array;
}
export interface EVMEventCompletedAmino {
  chain?: string;
  event_id?: string;
  type?: string;
}
export interface EVMEventCompletedAminoMsg {
  type: "/axelar.evm.v1beta1.EVMEventCompleted";
  value: EVMEventCompletedAmino;
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
export interface EVMEventFailedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EVMEventFailed";
  value: Uint8Array;
}
export interface EVMEventFailedAmino {
  chain?: string;
  event_id?: string;
  type?: string;
}
export interface EVMEventFailedAminoMsg {
  type: "/axelar.evm.v1beta1.EVMEventFailed";
  value: EVMEventFailedAmino;
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
export interface EVMEventRetryFailedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed";
  value: Uint8Array;
}
export interface EVMEventRetryFailedAmino {
  chain?: string;
  event_id?: string;
  type?: string;
}
export interface EVMEventRetryFailedAminoMsg {
  type: "/axelar.evm.v1beta1.EVMEventRetryFailed";
  value: EVMEventRetryFailedAmino;
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
export interface ContractCallApprovedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ContractCallApproved";
  value: Uint8Array;
}
export interface ContractCallApprovedAmino {
  chain?: string;
  event_id?: string;
  command_id?: string;
  sender?: string;
  destination_chain?: string;
  contract_address?: string;
  payload_hash?: string;
}
export interface ContractCallApprovedAminoMsg {
  type: "/axelar.evm.v1beta1.ContractCallApproved";
  value: ContractCallApprovedAmino;
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
export interface ContractCallFailedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ContractCallFailed";
  value: Uint8Array;
}
export interface ContractCallFailedAmino {
  chain?: string;
  msg_id?: string;
}
export interface ContractCallFailedAminoMsg {
  type: "/axelar.evm.v1beta1.ContractCallFailed";
  value: ContractCallFailedAmino;
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
  asset: Coin;
}
export interface ContractCallWithMintApprovedProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved";
  value: Uint8Array;
}
export interface ContractCallWithMintApprovedAmino {
  chain?: string;
  event_id?: string;
  command_id?: string;
  sender?: string;
  destination_chain?: string;
  contract_address?: string;
  payload_hash?: string;
  asset?: CoinAmino;
}
export interface ContractCallWithMintApprovedAminoMsg {
  type: "/axelar.evm.v1beta1.ContractCallWithMintApproved";
  value: ContractCallWithMintApprovedAmino;
}
export interface ContractCallWithMintApprovedSDKType {
  chain: string;
  event_id: string;
  command_id: Uint8Array;
  sender: string;
  destination_chain: string;
  contract_address: string;
  payload_hash: Uint8Array;
  asset: CoinSDKType;
}
export interface TokenSent {
  chain: string;
  eventId: string;
  transferId: bigint;
  sender: string;
  destinationChain: string;
  destinationAddress: string;
  asset: Coin;
}
export interface TokenSentProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.TokenSent";
  value: Uint8Array;
}
export interface TokenSentAmino {
  chain?: string;
  event_id?: string;
  transfer_id?: string;
  sender?: string;
  destination_chain?: string;
  destination_address?: string;
  asset?: CoinAmino;
}
export interface TokenSentAminoMsg {
  type: "/axelar.evm.v1beta1.TokenSent";
  value: TokenSentAmino;
}
export interface TokenSentSDKType {
  chain: string;
  event_id: string;
  transfer_id: bigint;
  sender: string;
  destination_chain: string;
  destination_address: string;
  asset: CoinSDKType;
}
export interface MintCommand {
  chain: string;
  transferId: bigint;
  commandId: Uint8Array;
  destinationChain: string;
  destinationAddress: string;
  asset: Coin;
}
export interface MintCommandProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.MintCommand";
  value: Uint8Array;
}
export interface MintCommandAmino {
  chain?: string;
  transfer_id?: string;
  command_id?: string;
  destination_chain?: string;
  destination_address?: string;
  asset?: CoinAmino;
}
export interface MintCommandAminoMsg {
  type: "/axelar.evm.v1beta1.MintCommand";
  value: MintCommandAmino;
}
export interface MintCommandSDKType {
  chain: string;
  transfer_id: bigint;
  command_id: Uint8Array;
  destination_chain: string;
  destination_address: string;
  asset: CoinSDKType;
}
export interface BurnCommand {
  chain: string;
  commandId: Uint8Array;
  destinationChain: string;
  depositAddress: string;
  asset: string;
}
export interface BurnCommandProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.BurnCommand";
  value: Uint8Array;
}
export interface BurnCommandAmino {
  chain?: string;
  command_id?: string;
  destination_chain?: string;
  deposit_address?: string;
  asset?: string;
}
export interface BurnCommandAminoMsg {
  type: "/axelar.evm.v1beta1.BurnCommand";
  value: BurnCommandAmino;
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
    pollId: BigInt(0)
  };
}
export const PollFailed = {
  typeUrl: "/axelar.evm.v1beta1.PollFailed",
  encode(message: PollFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollFailed {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PollFailed>): PollFailed {
    const message = createBasePollFailed();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollFailedAmino): PollFailed {
    const message = createBasePollFailed();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    return message;
  },
  toAmino(message: PollFailed): PollFailedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollFailedAminoMsg): PollFailed {
    return PollFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: PollFailedProtoMsg): PollFailed {
    return PollFailed.decode(message.value);
  },
  toProto(message: PollFailed): Uint8Array {
    return PollFailed.encode(message).finish();
  },
  toProtoMsg(message: PollFailed): PollFailedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PollFailed",
      value: PollFailed.encode(message).finish()
    };
  }
};
function createBasePollExpired(): PollExpired {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: BigInt(0)
  };
}
export const PollExpired = {
  typeUrl: "/axelar.evm.v1beta1.PollExpired",
  encode(message: PollExpired, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollExpired {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PollExpired>): PollExpired {
    const message = createBasePollExpired();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollExpiredAmino): PollExpired {
    const message = createBasePollExpired();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    return message;
  },
  toAmino(message: PollExpired): PollExpiredAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollExpiredAminoMsg): PollExpired {
    return PollExpired.fromAmino(object.value);
  },
  fromProtoMsg(message: PollExpiredProtoMsg): PollExpired {
    return PollExpired.decode(message.value);
  },
  toProto(message: PollExpired): Uint8Array {
    return PollExpired.encode(message).finish();
  },
  toProtoMsg(message: PollExpired): PollExpiredProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PollExpired",
      value: PollExpired.encode(message).finish()
    };
  }
};
function createBasePollCompleted(): PollCompleted {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: BigInt(0)
  };
}
export const PollCompleted = {
  typeUrl: "/axelar.evm.v1beta1.PollCompleted",
  encode(message: PollCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollCompleted {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PollCompleted>): PollCompleted {
    const message = createBasePollCompleted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollCompletedAmino): PollCompleted {
    const message = createBasePollCompleted();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    return message;
  },
  toAmino(message: PollCompleted): PollCompletedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollCompletedAminoMsg): PollCompleted {
    return PollCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: PollCompletedProtoMsg): PollCompleted {
    return PollCompleted.decode(message.value);
  },
  toProto(message: PollCompleted): Uint8Array {
    return PollCompleted.encode(message).finish();
  },
  toProtoMsg(message: PollCompleted): PollCompletedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PollCompleted",
      value: PollCompleted.encode(message).finish()
    };
  }
};
function createBaseNoEventsConfirmed(): NoEventsConfirmed {
  return {
    txId: new Uint8Array(),
    chain: "",
    pollId: BigInt(0)
  };
}
export const NoEventsConfirmed = {
  typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed",
  encode(message: NoEventsConfirmed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(24).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): NoEventsConfirmed {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<NoEventsConfirmed>): NoEventsConfirmed {
    const message = createBaseNoEventsConfirmed();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NoEventsConfirmedAmino): NoEventsConfirmed {
    const message = createBaseNoEventsConfirmed();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    return message;
  },
  toAmino(message: NoEventsConfirmed): NoEventsConfirmedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NoEventsConfirmedAminoMsg): NoEventsConfirmed {
    return NoEventsConfirmed.fromAmino(object.value);
  },
  fromProtoMsg(message: NoEventsConfirmedProtoMsg): NoEventsConfirmed {
    return NoEventsConfirmed.decode(message.value);
  },
  toProto(message: NoEventsConfirmed): Uint8Array {
    return NoEventsConfirmed.encode(message).finish();
  },
  toProtoMsg(message: NoEventsConfirmed): NoEventsConfirmedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed",
      value: NoEventsConfirmed.encode(message).finish()
    };
  }
};
function createBaseConfirmKeyTransferStarted(): ConfirmKeyTransferStarted {
  return {
    chain: "",
    txId: new Uint8Array(),
    gatewayAddress: new Uint8Array(),
    confirmationHeight: BigInt(0),
    participants: PollParticipants.fromPartial({})
  };
}
export const ConfirmKeyTransferStarted = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted",
  encode(message: ConfirmKeyTransferStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(18).bytes(message.txId);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (message.confirmationHeight !== BigInt(0)) {
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
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted {
    const message = createBaseConfirmKeyTransferStarted();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  },
  fromAmino(object: ConfirmKeyTransferStartedAmino): ConfirmKeyTransferStarted {
    const message = createBaseConfirmKeyTransferStarted();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = bytesFromBase64(object.gateway_address);
    }
    if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
      message.confirmationHeight = BigInt(object.confirmation_height);
    }
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = PollParticipants.fromAmino(object.participants);
    }
    return message;
  },
  toAmino(message: ConfirmKeyTransferStarted): ConfirmKeyTransferStartedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmKeyTransferStartedAminoMsg): ConfirmKeyTransferStarted {
    return ConfirmKeyTransferStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmKeyTransferStartedProtoMsg): ConfirmKeyTransferStarted {
    return ConfirmKeyTransferStarted.decode(message.value);
  },
  toProto(message: ConfirmKeyTransferStarted): Uint8Array {
    return ConfirmKeyTransferStarted.encode(message).finish();
  },
  toProtoMsg(message: ConfirmKeyTransferStarted): ConfirmKeyTransferStartedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted",
      value: ConfirmKeyTransferStarted.encode(message).finish()
    };
  }
};
function createBaseConfirmGatewayTxStarted(): ConfirmGatewayTxStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    gatewayAddress: new Uint8Array(),
    confirmationHeight: BigInt(0),
    participants: PollParticipants.fromPartial({})
  };
}
export const ConfirmGatewayTxStarted = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted",
  encode(message: ConfirmGatewayTxStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (message.confirmationHeight !== BigInt(0)) {
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
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
      participants: isSet(object.participants) ? PollParticipants.fromJSON(object.participants) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted {
    const message = createBaseConfirmGatewayTxStarted();
    message.txId = object.txId ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  },
  fromAmino(object: ConfirmGatewayTxStartedAmino): ConfirmGatewayTxStarted {
    const message = createBaseConfirmGatewayTxStarted();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = bytesFromBase64(object.gateway_address);
    }
    if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
      message.confirmationHeight = BigInt(object.confirmation_height);
    }
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = PollParticipants.fromAmino(object.participants);
    }
    return message;
  },
  toAmino(message: ConfirmGatewayTxStarted): ConfirmGatewayTxStartedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxStartedAminoMsg): ConfirmGatewayTxStarted {
    return ConfirmGatewayTxStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxStartedProtoMsg): ConfirmGatewayTxStarted {
    return ConfirmGatewayTxStarted.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxStarted): Uint8Array {
    return ConfirmGatewayTxStarted.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxStarted): ConfirmGatewayTxStartedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted",
      value: ConfirmGatewayTxStarted.encode(message).finish()
    };
  }
};
function createBasePollMapping(): PollMapping {
  return {
    txId: new Uint8Array(),
    pollId: BigInt(0)
  };
}
export const PollMapping = {
  typeUrl: "/axelar.evm.v1beta1.PollMapping",
  encode(message: PollMapping, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId.length !== 0) {
      writer.uint32(10).bytes(message.txId);
    }
    if (message.pollId !== BigInt(0)) {
      writer.uint32(16).uint64(message.pollId);
    }
    return writer;
  },
  fromJSON(object: any): PollMapping {
    return {
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      pollId: isSet(object.pollId) ? BigInt(object.pollId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PollMapping>): PollMapping {
    const message = createBasePollMapping();
    message.txId = object.txId ?? new Uint8Array();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? BigInt(object.pollId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PollMappingAmino): PollMapping {
    const message = createBasePollMapping();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.poll_id !== undefined && object.poll_id !== null) {
      message.pollId = BigInt(object.poll_id);
    }
    return message;
  },
  toAmino(message: PollMapping): PollMappingAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.poll_id = message.pollId ? message.pollId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PollMappingAminoMsg): PollMapping {
    return PollMapping.fromAmino(object.value);
  },
  fromProtoMsg(message: PollMappingProtoMsg): PollMapping {
    return PollMapping.decode(message.value);
  },
  toProto(message: PollMapping): Uint8Array {
    return PollMapping.encode(message).finish();
  },
  toProtoMsg(message: PollMapping): PollMappingProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.PollMapping",
      value: PollMapping.encode(message).finish()
    };
  }
};
function createBaseConfirmGatewayTxsStarted(): ConfirmGatewayTxsStarted {
  return {
    pollMappings: [],
    chain: "",
    gatewayAddress: new Uint8Array(),
    confirmationHeight: BigInt(0),
    participants: []
  };
}
export const ConfirmGatewayTxsStarted = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted",
  encode(message: ConfirmGatewayTxsStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pollMappings) {
      PollMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.gatewayAddress.length !== 0) {
      writer.uint32(26).bytes(message.gatewayAddress);
    }
    if (message.confirmationHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.confirmationHeight);
    }
    for (const v of message.participants) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmGatewayTxsStarted {
    return {
      pollMappings: Array.isArray(object?.pollMappings) ? object.pollMappings.map((e: any) => PollMapping.fromJSON(e)) : [],
      chain: isSet(object.chain) ? String(object.chain) : "",
      gatewayAddress: isSet(object.gatewayAddress) ? bytesFromBase64(object.gatewayAddress) : new Uint8Array(),
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
      participants: Array.isArray(object?.participants) ? object.participants.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<ConfirmGatewayTxsStarted>): ConfirmGatewayTxsStarted {
    const message = createBaseConfirmGatewayTxsStarted();
    message.pollMappings = object.pollMappings?.map(e => PollMapping.fromPartial(e)) || [];
    message.chain = object.chain ?? "";
    message.gatewayAddress = object.gatewayAddress ?? new Uint8Array();
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.participants = object.participants?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ConfirmGatewayTxsStartedAmino): ConfirmGatewayTxsStarted {
    const message = createBaseConfirmGatewayTxsStarted();
    message.pollMappings = object.poll_mappings?.map(e => PollMapping.fromAmino(e)) || [];
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = bytesFromBase64(object.gateway_address);
    }
    if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
      message.confirmationHeight = BigInt(object.confirmation_height);
    }
    message.participants = object.participants?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: ConfirmGatewayTxsStarted): ConfirmGatewayTxsStartedAmino {
    const obj: any = {};
    if (message.pollMappings) {
      obj.poll_mappings = message.pollMappings.map(e => e ? PollMapping.toAmino(e) : undefined);
    } else {
      obj.poll_mappings = [];
    }
    obj.chain = message.chain;
    obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    if (message.participants) {
      obj.participants = message.participants.map(e => base64FromBytes(e));
    } else {
      obj.participants = [];
    }
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxsStartedAminoMsg): ConfirmGatewayTxsStarted {
    return ConfirmGatewayTxsStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxsStartedProtoMsg): ConfirmGatewayTxsStarted {
    return ConfirmGatewayTxsStarted.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxsStarted): Uint8Array {
    return ConfirmGatewayTxsStarted.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxsStarted): ConfirmGatewayTxsStartedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted",
      value: ConfirmGatewayTxsStarted.encode(message).finish()
    };
  }
};
function createBaseConfirmDepositStarted(): ConfirmDepositStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    depositAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    confirmationHeight: BigInt(0),
    participants: PollParticipants.fromPartial({}),
    asset: ""
  };
}
export const ConfirmDepositStarted = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted",
  encode(message: ConfirmDepositStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.confirmationHeight !== BigInt(0)) {
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
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
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
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    message.asset = object.asset ?? "";
    return message;
  },
  fromAmino(object: ConfirmDepositStartedAmino): ConfirmDepositStarted {
    const message = createBaseConfirmDepositStarted();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.deposit_address !== undefined && object.deposit_address !== null) {
      message.depositAddress = bytesFromBase64(object.deposit_address);
    }
    if (object.token_address !== undefined && object.token_address !== null) {
      message.tokenAddress = bytesFromBase64(object.token_address);
    }
    if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
      message.confirmationHeight = BigInt(object.confirmation_height);
    }
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = PollParticipants.fromAmino(object.participants);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: ConfirmDepositStarted): ConfirmDepositStartedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.deposit_address = message.depositAddress ? base64FromBytes(message.depositAddress) : undefined;
    obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: ConfirmDepositStartedAminoMsg): ConfirmDepositStarted {
    return ConfirmDepositStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmDepositStartedProtoMsg): ConfirmDepositStarted {
    return ConfirmDepositStarted.decode(message.value);
  },
  toProto(message: ConfirmDepositStarted): Uint8Array {
    return ConfirmDepositStarted.encode(message).finish();
  },
  toProtoMsg(message: ConfirmDepositStarted): ConfirmDepositStartedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted",
      value: ConfirmDepositStarted.encode(message).finish()
    };
  }
};
function createBaseConfirmTokenStarted(): ConfirmTokenStarted {
  return {
    txId: new Uint8Array(),
    chain: "",
    gatewayAddress: new Uint8Array(),
    tokenAddress: new Uint8Array(),
    tokenDetails: TokenDetails.fromPartial({}),
    confirmationHeight: BigInt(0),
    participants: PollParticipants.fromPartial({})
  };
}
export const ConfirmTokenStarted = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted",
  encode(message: ConfirmTokenStarted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.confirmationHeight !== BigInt(0)) {
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
      confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
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
    message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
    message.participants = object.participants !== undefined && object.participants !== null ? PollParticipants.fromPartial(object.participants) : undefined;
    return message;
  },
  fromAmino(object: ConfirmTokenStartedAmino): ConfirmTokenStarted {
    const message = createBaseConfirmTokenStarted();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = bytesFromBase64(object.tx_id);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.gateway_address !== undefined && object.gateway_address !== null) {
      message.gatewayAddress = bytesFromBase64(object.gateway_address);
    }
    if (object.token_address !== undefined && object.token_address !== null) {
      message.tokenAddress = bytesFromBase64(object.token_address);
    }
    if (object.token_details !== undefined && object.token_details !== null) {
      message.tokenDetails = TokenDetails.fromAmino(object.token_details);
    }
    if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
      message.confirmationHeight = BigInt(object.confirmation_height);
    }
    if (object.participants !== undefined && object.participants !== null) {
      message.participants = PollParticipants.fromAmino(object.participants);
    }
    return message;
  },
  toAmino(message: ConfirmTokenStarted): ConfirmTokenStartedAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
    obj.chain = message.chain;
    obj.gateway_address = message.gatewayAddress ? base64FromBytes(message.gatewayAddress) : undefined;
    obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
    obj.token_details = message.tokenDetails ? TokenDetails.toAmino(message.tokenDetails) : undefined;
    obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
    obj.participants = message.participants ? PollParticipants.toAmino(message.participants) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmTokenStartedAminoMsg): ConfirmTokenStarted {
    return ConfirmTokenStarted.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmTokenStartedProtoMsg): ConfirmTokenStarted {
    return ConfirmTokenStarted.decode(message.value);
  },
  toProto(message: ConfirmTokenStarted): Uint8Array {
    return ConfirmTokenStarted.encode(message).finish();
  },
  toProtoMsg(message: ConfirmTokenStarted): ConfirmTokenStartedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted",
      value: ConfirmTokenStarted.encode(message).finish()
    };
  }
};
function createBaseChainAdded(): ChainAdded {
  return {
    chain: ""
  };
}
export const ChainAdded = {
  typeUrl: "/axelar.evm.v1beta1.ChainAdded",
  encode(message: ChainAdded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ChainAddedAmino): ChainAdded {
    const message = createBaseChainAdded();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    return message;
  },
  toAmino(message: ChainAdded): ChainAddedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: ChainAddedAminoMsg): ChainAdded {
    return ChainAdded.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainAddedProtoMsg): ChainAdded {
    return ChainAdded.decode(message.value);
  },
  toProto(message: ChainAdded): Uint8Array {
    return ChainAdded.encode(message).finish();
  },
  toProtoMsg(message: ChainAdded): ChainAddedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ChainAdded",
      value: ChainAdded.encode(message).finish()
    };
  }
};
function createBaseCommandBatchSigned(): CommandBatchSigned {
  return {
    chain: "",
    commandBatchId: new Uint8Array()
  };
}
export const CommandBatchSigned = {
  typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned",
  encode(message: CommandBatchSigned, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CommandBatchSignedAmino): CommandBatchSigned {
    const message = createBaseCommandBatchSigned();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
      message.commandBatchId = bytesFromBase64(object.command_batch_id);
    }
    return message;
  },
  toAmino(message: CommandBatchSigned): CommandBatchSignedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommandBatchSignedAminoMsg): CommandBatchSigned {
    return CommandBatchSigned.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandBatchSignedProtoMsg): CommandBatchSigned {
    return CommandBatchSigned.decode(message.value);
  },
  toProto(message: CommandBatchSigned): Uint8Array {
    return CommandBatchSigned.encode(message).finish();
  },
  toProtoMsg(message: CommandBatchSigned): CommandBatchSignedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned",
      value: CommandBatchSigned.encode(message).finish()
    };
  }
};
function createBaseCommandBatchAborted(): CommandBatchAborted {
  return {
    chain: "",
    commandBatchId: new Uint8Array()
  };
}
export const CommandBatchAborted = {
  typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted",
  encode(message: CommandBatchAborted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CommandBatchAbortedAmino): CommandBatchAborted {
    const message = createBaseCommandBatchAborted();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
      message.commandBatchId = bytesFromBase64(object.command_batch_id);
    }
    return message;
  },
  toAmino(message: CommandBatchAborted): CommandBatchAbortedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommandBatchAbortedAminoMsg): CommandBatchAborted {
    return CommandBatchAborted.fromAmino(object.value);
  },
  fromProtoMsg(message: CommandBatchAbortedProtoMsg): CommandBatchAborted {
    return CommandBatchAborted.decode(message.value);
  },
  toProto(message: CommandBatchAborted): Uint8Array {
    return CommandBatchAborted.encode(message).finish();
  },
  toProtoMsg(message: CommandBatchAborted): CommandBatchAbortedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted",
      value: CommandBatchAborted.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed",
  encode(message: EVMEventConfirmed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EVMEventConfirmedAmino): EVMEventConfirmed {
    const message = createBaseEVMEventConfirmed();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: EVMEventConfirmed): EVMEventConfirmedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: EVMEventConfirmedAminoMsg): EVMEventConfirmed {
    return EVMEventConfirmed.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMEventConfirmedProtoMsg): EVMEventConfirmed {
    return EVMEventConfirmed.decode(message.value);
  },
  toProto(message: EVMEventConfirmed): Uint8Array {
    return EVMEventConfirmed.encode(message).finish();
  },
  toProtoMsg(message: EVMEventConfirmed): EVMEventConfirmedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed",
      value: EVMEventConfirmed.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted",
  encode(message: EVMEventCompleted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EVMEventCompletedAmino): EVMEventCompleted {
    const message = createBaseEVMEventCompleted();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: EVMEventCompleted): EVMEventCompletedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: EVMEventCompletedAminoMsg): EVMEventCompleted {
    return EVMEventCompleted.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMEventCompletedProtoMsg): EVMEventCompleted {
    return EVMEventCompleted.decode(message.value);
  },
  toProto(message: EVMEventCompleted): Uint8Array {
    return EVMEventCompleted.encode(message).finish();
  },
  toProtoMsg(message: EVMEventCompleted): EVMEventCompletedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted",
      value: EVMEventCompleted.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.EVMEventFailed",
  encode(message: EVMEventFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EVMEventFailedAmino): EVMEventFailed {
    const message = createBaseEVMEventFailed();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: EVMEventFailed): EVMEventFailedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: EVMEventFailedAminoMsg): EVMEventFailed {
    return EVMEventFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMEventFailedProtoMsg): EVMEventFailed {
    return EVMEventFailed.decode(message.value);
  },
  toProto(message: EVMEventFailed): Uint8Array {
    return EVMEventFailed.encode(message).finish();
  },
  toProtoMsg(message: EVMEventFailed): EVMEventFailedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EVMEventFailed",
      value: EVMEventFailed.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed",
  encode(message: EVMEventRetryFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EVMEventRetryFailedAmino): EVMEventRetryFailed {
    const message = createBaseEVMEventRetryFailed();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: EVMEventRetryFailed): EVMEventRetryFailedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.type = message.type;
    return obj;
  },
  fromAminoMsg(object: EVMEventRetryFailedAminoMsg): EVMEventRetryFailed {
    return EVMEventRetryFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: EVMEventRetryFailedProtoMsg): EVMEventRetryFailed {
    return EVMEventRetryFailed.decode(message.value);
  },
  toProto(message: EVMEventRetryFailed): Uint8Array {
    return EVMEventRetryFailed.encode(message).finish();
  },
  toProtoMsg(message: EVMEventRetryFailed): EVMEventRetryFailedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed",
      value: EVMEventRetryFailed.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.ContractCallApproved",
  encode(message: ContractCallApproved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ContractCallApprovedAmino): ContractCallApproved {
    const message = createBaseContractCallApproved();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.command_id !== undefined && object.command_id !== null) {
      message.commandId = bytesFromBase64(object.command_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    return message;
  },
  toAmino(message: ContractCallApproved): ContractCallApprovedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
    obj.sender = message.sender;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractCallApprovedAminoMsg): ContractCallApproved {
    return ContractCallApproved.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallApprovedProtoMsg): ContractCallApproved {
    return ContractCallApproved.decode(message.value);
  },
  toProto(message: ContractCallApproved): Uint8Array {
    return ContractCallApproved.encode(message).finish();
  },
  toProtoMsg(message: ContractCallApproved): ContractCallApprovedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ContractCallApproved",
      value: ContractCallApproved.encode(message).finish()
    };
  }
};
function createBaseContractCallFailed(): ContractCallFailed {
  return {
    chain: "",
    msgId: ""
  };
}
export const ContractCallFailed = {
  typeUrl: "/axelar.evm.v1beta1.ContractCallFailed",
  encode(message: ContractCallFailed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ContractCallFailedAmino): ContractCallFailed {
    const message = createBaseContractCallFailed();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.msg_id !== undefined && object.msg_id !== null) {
      message.msgId = object.msg_id;
    }
    return message;
  },
  toAmino(message: ContractCallFailed): ContractCallFailedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.msg_id = message.msgId;
    return obj;
  },
  fromAminoMsg(object: ContractCallFailedAminoMsg): ContractCallFailed {
    return ContractCallFailed.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallFailedProtoMsg): ContractCallFailed {
    return ContractCallFailed.decode(message.value);
  },
  toProto(message: ContractCallFailed): Uint8Array {
    return ContractCallFailed.encode(message).finish();
  },
  toProtoMsg(message: ContractCallFailed): ContractCallFailedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ContractCallFailed",
      value: ContractCallFailed.encode(message).finish()
    };
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
    asset: Coin.fromPartial({})
  };
}
export const ContractCallWithMintApproved = {
  typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved",
  encode(message: ContractCallWithMintApproved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ContractCallWithMintApprovedAmino): ContractCallWithMintApproved {
    const message = createBaseContractCallWithMintApproved();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.command_id !== undefined && object.command_id !== null) {
      message.commandId = bytesFromBase64(object.command_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.payload_hash !== undefined && object.payload_hash !== null) {
      message.payloadHash = bytesFromBase64(object.payload_hash);
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: ContractCallWithMintApproved): ContractCallWithMintApprovedAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
    obj.sender = message.sender;
    obj.destination_chain = message.destinationChain;
    obj.contract_address = message.contractAddress;
    obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractCallWithMintApprovedAminoMsg): ContractCallWithMintApproved {
    return ContractCallWithMintApproved.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractCallWithMintApprovedProtoMsg): ContractCallWithMintApproved {
    return ContractCallWithMintApproved.decode(message.value);
  },
  toProto(message: ContractCallWithMintApproved): Uint8Array {
    return ContractCallWithMintApproved.encode(message).finish();
  },
  toProtoMsg(message: ContractCallWithMintApproved): ContractCallWithMintApprovedProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved",
      value: ContractCallWithMintApproved.encode(message).finish()
    };
  }
};
function createBaseTokenSent(): TokenSent {
  return {
    chain: "",
    eventId: "",
    transferId: BigInt(0),
    sender: "",
    destinationChain: "",
    destinationAddress: "",
    asset: Coin.fromPartial({})
  };
}
export const TokenSent = {
  typeUrl: "/axelar.evm.v1beta1.TokenSent",
  encode(message: TokenSent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.transferId !== BigInt(0)) {
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
      transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
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
    message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
    message.sender = object.sender ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: TokenSentAmino): TokenSent {
    const message = createBaseTokenSent();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.event_id !== undefined && object.event_id !== null) {
      message.eventId = object.event_id;
    }
    if (object.transfer_id !== undefined && object.transfer_id !== null) {
      message.transferId = BigInt(object.transfer_id);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: TokenSent): TokenSentAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
    obj.sender = message.sender;
    obj.destination_chain = message.destinationChain;
    obj.destination_address = message.destinationAddress;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: TokenSentAminoMsg): TokenSent {
    return TokenSent.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenSentProtoMsg): TokenSent {
    return TokenSent.decode(message.value);
  },
  toProto(message: TokenSent): Uint8Array {
    return TokenSent.encode(message).finish();
  },
  toProtoMsg(message: TokenSent): TokenSentProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.TokenSent",
      value: TokenSent.encode(message).finish()
    };
  }
};
function createBaseMintCommand(): MintCommand {
  return {
    chain: "",
    transferId: BigInt(0),
    commandId: new Uint8Array(),
    destinationChain: "",
    destinationAddress: "",
    asset: Coin.fromPartial({})
  };
}
export const MintCommand = {
  typeUrl: "/axelar.evm.v1beta1.MintCommand",
  encode(message: MintCommand, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.transferId !== BigInt(0)) {
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
      transferId: isSet(object.transferId) ? BigInt(object.transferId.toString()) : BigInt(0),
      commandId: isSet(object.commandId) ? bytesFromBase64(object.commandId) : new Uint8Array(),
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<MintCommand>): MintCommand {
    const message = createBaseMintCommand();
    message.chain = object.chain ?? "";
    message.transferId = object.transferId !== undefined && object.transferId !== null ? BigInt(object.transferId.toString()) : BigInt(0);
    message.commandId = object.commandId ?? new Uint8Array();
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAddress = object.destinationAddress ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Coin.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MintCommandAmino): MintCommand {
    const message = createBaseMintCommand();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.transfer_id !== undefined && object.transfer_id !== null) {
      message.transferId = BigInt(object.transfer_id);
    }
    if (object.command_id !== undefined && object.command_id !== null) {
      message.commandId = bytesFromBase64(object.command_id);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.destination_address !== undefined && object.destination_address !== null) {
      message.destinationAddress = object.destination_address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Coin.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: MintCommand): MintCommandAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.transfer_id = message.transferId ? message.transferId.toString() : undefined;
    obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.destination_address = message.destinationAddress;
    obj.asset = message.asset ? Coin.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: MintCommandAminoMsg): MintCommand {
    return MintCommand.fromAmino(object.value);
  },
  fromProtoMsg(message: MintCommandProtoMsg): MintCommand {
    return MintCommand.decode(message.value);
  },
  toProto(message: MintCommand): Uint8Array {
    return MintCommand.encode(message).finish();
  },
  toProtoMsg(message: MintCommand): MintCommandProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.MintCommand",
      value: MintCommand.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.BurnCommand",
  encode(message: BurnCommand, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: BurnCommandAmino): BurnCommand {
    const message = createBaseBurnCommand();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    }
    if (object.command_id !== undefined && object.command_id !== null) {
      message.commandId = bytesFromBase64(object.command_id);
    }
    if (object.destination_chain !== undefined && object.destination_chain !== null) {
      message.destinationChain = object.destination_chain;
    }
    if (object.deposit_address !== undefined && object.deposit_address !== null) {
      message.depositAddress = object.deposit_address;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    return message;
  },
  toAmino(message: BurnCommand): BurnCommandAmino {
    const obj: any = {};
    obj.chain = message.chain;
    obj.command_id = message.commandId ? base64FromBytes(message.commandId) : undefined;
    obj.destination_chain = message.destinationChain;
    obj.deposit_address = message.depositAddress;
    obj.asset = message.asset;
    return obj;
  },
  fromAminoMsg(object: BurnCommandAminoMsg): BurnCommand {
    return BurnCommand.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnCommandProtoMsg): BurnCommand {
    return BurnCommand.decode(message.value);
  },
  toProto(message: BurnCommand): Uint8Array {
    return BurnCommand.encode(message).finish();
  },
  toProtoMsg(message: BurnCommand): BurnCommandProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.BurnCommand",
      value: BurnCommand.encode(message).finish()
    };
  }
};