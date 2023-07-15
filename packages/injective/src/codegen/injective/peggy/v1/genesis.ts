import { Params, ParamsSDKType } from "./params";
import { Valset, ValsetSDKType, ERC20ToDenom, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState struct */
export interface GenesisState {
  params?: Params;
  lastObservedNonce: Long;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
  orchestratorAddresses: MsgSetOrchestratorAddresses[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  lastObservedEthereumHeight: Long;
  lastOutgoingBatchId: Long;
  lastOutgoingPoolId: Long;
  lastObservedValset?: Valset;
  ethereumBlacklist: string[];
}
/** GenesisState struct */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  last_observed_nonce: Long;
  valsets: ValsetSDKType[];
  valset_confirms: MsgValsetConfirmSDKType[];
  batches: OutgoingTxBatchSDKType[];
  batch_confirms: MsgConfirmBatchSDKType[];
  attestations: AttestationSDKType[];
  orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
  erc20_to_denoms: ERC20ToDenomSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
  last_observed_ethereum_height: Long;
  last_outgoing_batch_id: Long;
  last_outgoing_pool_id: Long;
  last_observed_valset?: ValsetSDKType;
  ethereum_blacklist: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lastObservedNonce: Long.UZERO,
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    attestations: [],
    orchestratorAddresses: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    lastObservedEthereumHeight: Long.UZERO,
    lastOutgoingBatchId: Long.UZERO,
    lastOutgoingPoolId: Long.UZERO,
    lastObservedValset: undefined,
    ethereumBlacklist: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastObservedNonce.isZero()) {
      writer.uint32(16).uint64(message.lastObservedNonce);
    }
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.valsetConfirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.batchConfirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.orchestratorAddresses) {
      MsgSetOrchestratorAddresses.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.erc20ToDenoms) {
      ERC20ToDenom.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.lastObservedEthereumHeight.isZero()) {
      writer.uint32(88).uint64(message.lastObservedEthereumHeight);
    }
    if (!message.lastOutgoingBatchId.isZero()) {
      writer.uint32(96).uint64(message.lastOutgoingBatchId);
    }
    if (!message.lastOutgoingPoolId.isZero()) {
      writer.uint32(104).uint64(message.lastOutgoingPoolId);
    }
    if (message.lastObservedValset !== undefined) {
      Valset.encode(message.lastObservedValset, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.ethereumBlacklist) {
      writer.uint32(122).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastObservedNonce: isSet(object.lastObservedNonce) ? Long.fromValue(object.lastObservedNonce) : Long.UZERO,
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms) ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [],
      batchConfirms: Array.isArray(object?.batchConfirms) ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : [],
      orchestratorAddresses: Array.isArray(object?.orchestratorAddresses) ? object.orchestratorAddresses.map((e: any) => MsgSetOrchestratorAddresses.fromJSON(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms) ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      lastObservedEthereumHeight: isSet(object.lastObservedEthereumHeight) ? Long.fromValue(object.lastObservedEthereumHeight) : Long.UZERO,
      lastOutgoingBatchId: isSet(object.lastOutgoingBatchId) ? Long.fromValue(object.lastOutgoingBatchId) : Long.UZERO,
      lastOutgoingPoolId: isSet(object.lastOutgoingPoolId) ? Long.fromValue(object.lastOutgoingPoolId) : Long.UZERO,
      lastObservedValset: isSet(object.lastObservedValset) ? Valset.fromJSON(object.lastObservedValset) : undefined,
      ethereumBlacklist: Array.isArray(object?.ethereumBlacklist) ? object.ethereumBlacklist.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? Long.fromValue(object.lastObservedNonce) : Long.UZERO;
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.orchestratorAddresses = object.orchestratorAddresses?.map(e => MsgSetOrchestratorAddresses.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? Long.fromValue(object.lastObservedEthereumHeight) : Long.UZERO;
    message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? Long.fromValue(object.lastOutgoingBatchId) : Long.UZERO;
    message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? Long.fromValue(object.lastOutgoingPoolId) : Long.UZERO;
    message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? Valset.fromPartial(object.lastObservedValset) : undefined;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    return message;
  }
};