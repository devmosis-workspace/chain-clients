import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Chain, ChainAmino, ChainSDKType, CrossChainTransfer, CrossChainTransferAmino, CrossChainTransferSDKType, TransferFee, TransferFeeAmino, TransferFeeSDKType, FeeInfo, FeeInfoAmino, FeeInfoSDKType, GeneralMessage, GeneralMessageAmino, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { ChainState, ChainStateAmino, ChainStateSDKType, LinkedAddresses, LinkedAddressesAmino, LinkedAddressesSDKType, RateLimit, RateLimitAmino, RateLimitSDKType, TransferEpoch, TransferEpochAmino, TransferEpochSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params: Params;
  nonce: bigint;
  chains: Chain[];
  chainStates: ChainState[];
  linkedAddresses: LinkedAddresses[];
  transfers: CrossChainTransfer[];
  fee: TransferFee;
  feeInfos: FeeInfo[];
  rateLimits: RateLimit[];
  transferEpochs: TransferEpoch[];
  messages: GeneralMessage[];
  messageNonce: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.nexus.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  nonce: string;
  chains: ChainAmino[];
  chain_states: ChainStateAmino[];
  linked_addresses: LinkedAddressesAmino[];
  transfers: CrossChainTransferAmino[];
  fee?: TransferFeeAmino;
  fee_infos: FeeInfoAmino[];
  rate_limits: RateLimitAmino[];
  transfer_epochs: TransferEpochAmino[];
  messages: GeneralMessageAmino[];
  message_nonce: string;
}
export interface GenesisStateAminoMsg {
  type: "/axelar.nexus.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  nonce: bigint;
  chains: ChainSDKType[];
  chain_states: ChainStateSDKType[];
  linked_addresses: LinkedAddressesSDKType[];
  transfers: CrossChainTransferSDKType[];
  fee: TransferFeeSDKType;
  fee_infos: FeeInfoSDKType[];
  rate_limits: RateLimitSDKType[];
  transfer_epochs: TransferEpochSDKType[];
  messages: GeneralMessageSDKType[];
  message_nonce: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nonce: BigInt(0),
    chains: [],
    chainStates: [],
    linkedAddresses: [],
    transfers: [],
    fee: TransferFee.fromPartial({}),
    feeInfos: [],
    rateLimits: [],
    transferEpochs: [],
    messages: [],
    messageNonce: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/axelar.nexus.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    for (const v of message.chains) {
      Chain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.chainStates) {
      ChainState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.linkedAddresses) {
      LinkedAddresses.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.transfers) {
      CrossChainTransfer.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      TransferFee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.rateLimits) {
      RateLimit.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.transferEpochs) {
      TransferEpoch.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.messages) {
      GeneralMessage.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.messageNonce !== BigInt(0)) {
      writer.uint32(96).uint64(message.messageNonce);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => Chain.fromJSON(e)) : [],
      chainStates: Array.isArray(object?.chainStates) ? object.chainStates.map((e: any) => ChainState.fromJSON(e)) : [],
      linkedAddresses: Array.isArray(object?.linkedAddresses) ? object.linkedAddresses.map((e: any) => LinkedAddresses.fromJSON(e)) : [],
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e)) : [],
      fee: isSet(object.fee) ? TransferFee.fromJSON(object.fee) : undefined,
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : [],
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : [],
      transferEpochs: Array.isArray(object?.transferEpochs) ? object.transferEpochs.map((e: any) => TransferEpoch.fromJSON(e)) : [],
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => GeneralMessage.fromJSON(e)) : [],
      messageNonce: isSet(object.messageNonce) ? BigInt(object.messageNonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    message.chains = object.chains?.map(e => Chain.fromPartial(e)) || [];
    message.chainStates = object.chainStates?.map(e => ChainState.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map(e => LinkedAddresses.fromPartial(e)) || [];
    message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? TransferFee.fromPartial(object.fee) : undefined;
    message.feeInfos = object.feeInfos?.map(e => FeeInfo.fromPartial(e)) || [];
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    message.transferEpochs = object.transferEpochs?.map(e => TransferEpoch.fromPartial(e)) || [];
    message.messages = object.messages?.map(e => GeneralMessage.fromPartial(e)) || [];
    message.messageNonce = object.messageNonce !== undefined && object.messageNonce !== null ? BigInt(object.messageNonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      nonce: BigInt(object.nonce),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => Chain.fromAmino(e)) : [],
      chainStates: Array.isArray(object?.chain_states) ? object.chain_states.map((e: any) => ChainState.fromAmino(e)) : [],
      linkedAddresses: Array.isArray(object?.linked_addresses) ? object.linked_addresses.map((e: any) => LinkedAddresses.fromAmino(e)) : [],
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromAmino(e)) : [],
      fee: object?.fee ? TransferFee.fromAmino(object.fee) : undefined,
      feeInfos: Array.isArray(object?.fee_infos) ? object.fee_infos.map((e: any) => FeeInfo.fromAmino(e)) : [],
      rateLimits: Array.isArray(object?.rate_limits) ? object.rate_limits.map((e: any) => RateLimit.fromAmino(e)) : [],
      transferEpochs: Array.isArray(object?.transfer_epochs) ? object.transfer_epochs.map((e: any) => TransferEpoch.fromAmino(e)) : [],
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => GeneralMessage.fromAmino(e)) : [],
      messageNonce: BigInt(object.message_nonce)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    if (message.chains) {
      obj.chains = message.chains.map(e => e ? Chain.toAmino(e) : undefined);
    } else {
      obj.chains = [];
    }
    if (message.chainStates) {
      obj.chain_states = message.chainStates.map(e => e ? ChainState.toAmino(e) : undefined);
    } else {
      obj.chain_states = [];
    }
    if (message.linkedAddresses) {
      obj.linked_addresses = message.linkedAddresses.map(e => e ? LinkedAddresses.toAmino(e) : undefined);
    } else {
      obj.linked_addresses = [];
    }
    if (message.transfers) {
      obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toAmino(e) : undefined);
    } else {
      obj.transfers = [];
    }
    obj.fee = message.fee ? TransferFee.toAmino(message.fee) : undefined;
    if (message.feeInfos) {
      obj.fee_infos = message.feeInfos.map(e => e ? FeeInfo.toAmino(e) : undefined);
    } else {
      obj.fee_infos = [];
    }
    if (message.rateLimits) {
      obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
    } else {
      obj.rate_limits = [];
    }
    if (message.transferEpochs) {
      obj.transfer_epochs = message.transferEpochs.map(e => e ? TransferEpoch.toAmino(e) : undefined);
    } else {
      obj.transfer_epochs = [];
    }
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? GeneralMessage.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.message_nonce = message.messageNonce ? message.messageNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/axelar.nexus.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};