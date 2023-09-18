import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Valset, ValsetAmino, ValsetSDKType, ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesAmino, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState struct */
export interface GenesisState {
  params: Params;
  lastObservedNonce: bigint;
  valsets: Valset[];
  valsetConfirms: MsgValsetConfirm[];
  batches: OutgoingTxBatch[];
  batchConfirms: MsgConfirmBatch[];
  attestations: Attestation[];
  orchestratorAddresses: MsgSetOrchestratorAddresses[];
  erc20ToDenoms: ERC20ToDenom[];
  unbatchedTransfers: OutgoingTransferTx[];
  lastObservedEthereumHeight: bigint;
  lastOutgoingBatchId: bigint;
  lastOutgoingPoolId: bigint;
  lastObservedValset: Valset;
  ethereumBlacklist: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.peggy.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState struct */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  last_observed_nonce: string;
  valsets: ValsetAmino[];
  valset_confirms: MsgValsetConfirmAmino[];
  batches: OutgoingTxBatchAmino[];
  batch_confirms: MsgConfirmBatchAmino[];
  attestations: AttestationAmino[];
  orchestrator_addresses: MsgSetOrchestratorAddressesAmino[];
  erc20_to_denoms: ERC20ToDenomAmino[];
  unbatched_transfers: OutgoingTransferTxAmino[];
  last_observed_ethereum_height: string;
  last_outgoing_batch_id: string;
  last_outgoing_pool_id: string;
  last_observed_valset?: ValsetAmino;
  ethereum_blacklist: string[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.peggy.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState struct */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  last_observed_nonce: bigint;
  valsets: ValsetSDKType[];
  valset_confirms: MsgValsetConfirmSDKType[];
  batches: OutgoingTxBatchSDKType[];
  batch_confirms: MsgConfirmBatchSDKType[];
  attestations: AttestationSDKType[];
  orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
  erc20_to_denoms: ERC20ToDenomSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
  last_observed_ethereum_height: bigint;
  last_outgoing_batch_id: bigint;
  last_outgoing_pool_id: bigint;
  last_observed_valset: ValsetSDKType;
  ethereum_blacklist: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastObservedNonce: BigInt(0),
    valsets: [],
    valsetConfirms: [],
    batches: [],
    batchConfirms: [],
    attestations: [],
    orchestratorAddresses: [],
    erc20ToDenoms: [],
    unbatchedTransfers: [],
    lastObservedEthereumHeight: BigInt(0),
    lastOutgoingBatchId: BigInt(0),
    lastOutgoingPoolId: BigInt(0),
    lastObservedValset: Valset.fromPartial({}),
    ethereumBlacklist: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.peggy.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastObservedNonce !== BigInt(0)) {
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
    if (message.lastObservedEthereumHeight !== BigInt(0)) {
      writer.uint32(88).uint64(message.lastObservedEthereumHeight);
    }
    if (message.lastOutgoingBatchId !== BigInt(0)) {
      writer.uint32(96).uint64(message.lastOutgoingBatchId);
    }
    if (message.lastOutgoingPoolId !== BigInt(0)) {
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
      lastObservedNonce: isSet(object.lastObservedNonce) ? BigInt(object.lastObservedNonce.toString()) : BigInt(0),
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [],
      valsetConfirms: Array.isArray(object?.valsetConfirms) ? object.valsetConfirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [],
      batchConfirms: Array.isArray(object?.batchConfirms) ? object.batchConfirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : [],
      orchestratorAddresses: Array.isArray(object?.orchestratorAddresses) ? object.orchestratorAddresses.map((e: any) => MsgSetOrchestratorAddresses.fromJSON(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20ToDenoms) ? object.erc20ToDenoms.map((e: any) => ERC20ToDenom.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      lastObservedEthereumHeight: isSet(object.lastObservedEthereumHeight) ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0),
      lastOutgoingBatchId: isSet(object.lastOutgoingBatchId) ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0),
      lastOutgoingPoolId: isSet(object.lastOutgoingPoolId) ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0),
      lastObservedValset: isSet(object.lastObservedValset) ? Valset.fromJSON(object.lastObservedValset) : undefined,
      ethereumBlacklist: Array.isArray(object?.ethereumBlacklist) ? object.ethereumBlacklist.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? BigInt(object.lastObservedNonce.toString()) : BigInt(0);
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    message.orchestratorAddresses = object.orchestratorAddresses?.map(e => MsgSetOrchestratorAddresses.fromPartial(e)) || [];
    message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.lastObservedEthereumHeight = object.lastObservedEthereumHeight !== undefined && object.lastObservedEthereumHeight !== null ? BigInt(object.lastObservedEthereumHeight.toString()) : BigInt(0);
    message.lastOutgoingBatchId = object.lastOutgoingBatchId !== undefined && object.lastOutgoingBatchId !== null ? BigInt(object.lastOutgoingBatchId.toString()) : BigInt(0);
    message.lastOutgoingPoolId = object.lastOutgoingPoolId !== undefined && object.lastOutgoingPoolId !== null ? BigInt(object.lastOutgoingPoolId.toString()) : BigInt(0);
    message.lastObservedValset = object.lastObservedValset !== undefined && object.lastObservedValset !== null ? Valset.fromPartial(object.lastObservedValset) : undefined;
    message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      lastObservedNonce: BigInt(object.last_observed_nonce),
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromAmino(e)) : [],
      valsetConfirms: Array.isArray(object?.valset_confirms) ? object.valset_confirms.map((e: any) => MsgValsetConfirm.fromAmino(e)) : [],
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromAmino(e)) : [],
      batchConfirms: Array.isArray(object?.batch_confirms) ? object.batch_confirms.map((e: any) => MsgConfirmBatch.fromAmino(e)) : [],
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromAmino(e)) : [],
      orchestratorAddresses: Array.isArray(object?.orchestrator_addresses) ? object.orchestrator_addresses.map((e: any) => MsgSetOrchestratorAddresses.fromAmino(e)) : [],
      erc20ToDenoms: Array.isArray(object?.erc20_to_denoms) ? object.erc20_to_denoms.map((e: any) => ERC20ToDenom.fromAmino(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e: any) => OutgoingTransferTx.fromAmino(e)) : [],
      lastObservedEthereumHeight: BigInt(object.last_observed_ethereum_height),
      lastOutgoingBatchId: BigInt(object.last_outgoing_batch_id),
      lastOutgoingPoolId: BigInt(object.last_outgoing_pool_id),
      lastObservedValset: object?.last_observed_valset ? Valset.fromAmino(object.last_observed_valset) : undefined,
      ethereumBlacklist: Array.isArray(object?.ethereum_blacklist) ? object.ethereum_blacklist.map((e: any) => e) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.last_observed_nonce = message.lastObservedNonce ? message.lastObservedNonce.toString() : undefined;
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    if (message.valsetConfirms) {
      obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.valset_confirms = [];
    }
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }
    if (message.batchConfirms) {
      obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.batch_confirms = [];
    }
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }
    if (message.orchestratorAddresses) {
      obj.orchestrator_addresses = message.orchestratorAddresses.map(e => e ? MsgSetOrchestratorAddresses.toAmino(e) : undefined);
    } else {
      obj.orchestrator_addresses = [];
    }
    if (message.erc20ToDenoms) {
      obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toAmino(e) : undefined);
    } else {
      obj.erc20_to_denoms = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = [];
    }
    obj.last_observed_ethereum_height = message.lastObservedEthereumHeight ? message.lastObservedEthereumHeight.toString() : undefined;
    obj.last_outgoing_batch_id = message.lastOutgoingBatchId ? message.lastOutgoingBatchId.toString() : undefined;
    obj.last_outgoing_pool_id = message.lastOutgoingPoolId ? message.lastOutgoingPoolId.toString() : undefined;
    obj.last_observed_valset = message.lastObservedValset ? Valset.toAmino(message.lastObservedValset) : undefined;
    if (message.ethereumBlacklist) {
      obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
    } else {
      obj.ethereum_blacklist = [];
    }
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
      typeUrl: "/injective.peggy.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};