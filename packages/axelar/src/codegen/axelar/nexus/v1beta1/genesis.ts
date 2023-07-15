import { Params, ParamsSDKType } from "./params";
import { Chain, ChainSDKType, CrossChainTransfer, CrossChainTransferSDKType, TransferFee, TransferFeeSDKType, FeeInfo, FeeInfoSDKType, GeneralMessage, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { ChainState, ChainStateSDKType, LinkedAddresses, LinkedAddressesSDKType, RateLimit, RateLimitSDKType, TransferEpoch, TransferEpochSDKType } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState represents the genesis state */
export interface GenesisState {
  params?: Params;
  nonce: Long;
  chains: Chain[];
  chainStates: ChainState[];
  linkedAddresses: LinkedAddresses[];
  transfers: CrossChainTransfer[];
  fee?: TransferFee;
  feeInfos: FeeInfo[];
  rateLimits: RateLimit[];
  transferEpochs: TransferEpoch[];
  messages: GeneralMessage[];
  messageNonce: Long;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  nonce: Long;
  chains: ChainSDKType[];
  chain_states: ChainStateSDKType[];
  linked_addresses: LinkedAddressesSDKType[];
  transfers: CrossChainTransferSDKType[];
  fee?: TransferFeeSDKType;
  fee_infos: FeeInfoSDKType[];
  rate_limits: RateLimitSDKType[];
  transfer_epochs: TransferEpochSDKType[];
  messages: GeneralMessageSDKType[];
  message_nonce: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nonce: Long.UZERO,
    chains: [],
    chainStates: [],
    linkedAddresses: [],
    transfers: [],
    fee: undefined,
    feeInfos: [],
    rateLimits: [],
    transferEpochs: [],
    messages: [],
    messageNonce: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.nonce.isZero()) {
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
    if (!message.messageNonce.isZero()) {
      writer.uint32(96).uint64(message.messageNonce);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => Chain.fromJSON(e)) : [],
      chainStates: Array.isArray(object?.chainStates) ? object.chainStates.map((e: any) => ChainState.fromJSON(e)) : [],
      linkedAddresses: Array.isArray(object?.linkedAddresses) ? object.linkedAddresses.map((e: any) => LinkedAddresses.fromJSON(e)) : [],
      transfers: Array.isArray(object?.transfers) ? object.transfers.map((e: any) => CrossChainTransfer.fromJSON(e)) : [],
      fee: isSet(object.fee) ? TransferFee.fromJSON(object.fee) : undefined,
      feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e: any) => FeeInfo.fromJSON(e)) : [],
      rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e: any) => RateLimit.fromJSON(e)) : [],
      transferEpochs: Array.isArray(object?.transferEpochs) ? object.transferEpochs.map((e: any) => TransferEpoch.fromJSON(e)) : [],
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => GeneralMessage.fromJSON(e)) : [],
      messageNonce: isSet(object.messageNonce) ? Long.fromValue(object.messageNonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.chains = object.chains?.map(e => Chain.fromPartial(e)) || [];
    message.chainStates = object.chainStates?.map(e => ChainState.fromPartial(e)) || [];
    message.linkedAddresses = object.linkedAddresses?.map(e => LinkedAddresses.fromPartial(e)) || [];
    message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
    message.fee = object.fee !== undefined && object.fee !== null ? TransferFee.fromPartial(object.fee) : undefined;
    message.feeInfos = object.feeInfos?.map(e => FeeInfo.fromPartial(e)) || [];
    message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
    message.transferEpochs = object.transferEpochs?.map(e => TransferEpoch.fromPartial(e)) || [];
    message.messages = object.messages?.map(e => GeneralMessage.fromPartial(e)) || [];
    message.messageNonce = object.messageNonce !== undefined && object.messageNonce !== null ? Long.fromValue(object.messageNonce) : Long.UZERO;
    return message;
  }
};