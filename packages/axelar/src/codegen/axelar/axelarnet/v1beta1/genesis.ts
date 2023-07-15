import { Params, ParamsSDKType } from "./params";
import { CosmosChain, CosmosChainSDKType, IBCTransfer, IBCTransferSDKType } from "./types";
import { QueueState, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { Long, isSet, bytesFromBase64, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GenesisState_SeqIdMappingEntry {
  key: string;
  value: Long;
}
export interface GenesisState_SeqIdMappingEntrySDKType {
  key: string;
  value: Long;
}
export interface GenesisState {
  params?: Params;
  collectorAddress: Uint8Array;
  chains: CosmosChain[];
  transferQueue?: QueueState;
  ibcTransfers: IBCTransfer[];
  seqIdMapping: {
    [key: string]: Long;
  };
}
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  collector_address: Uint8Array;
  chains: CosmosChainSDKType[];
  transfer_queue?: QueueStateSDKType;
  ibc_transfers: IBCTransferSDKType[];
  seq_id_mapping: {
    [key: string]: Long;
  };
}
function createBaseGenesisState_SeqIdMappingEntry(): GenesisState_SeqIdMappingEntry {
  return {
    key: "",
    value: Long.UZERO
  };
}
export const GenesisState_SeqIdMappingEntry = {
  encode(message: GenesisState_SeqIdMappingEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_SeqIdMappingEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },
  fromPartial(object: Partial<GenesisState_SeqIdMappingEntry>): GenesisState_SeqIdMappingEntry {
    const message = createBaseGenesisState_SeqIdMappingEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    collectorAddress: new Uint8Array(),
    chains: [],
    transferQueue: undefined,
    ibcTransfers: [],
    seqIdMapping: {}
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.collectorAddress.length !== 0) {
      writer.uint32(18).bytes(message.collectorAddress);
    }
    for (const v of message.chains) {
      CosmosChain.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.transferQueue !== undefined) {
      QueueState.encode(message.transferQueue, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.ibcTransfers) {
      IBCTransfer.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.seqIdMapping).forEach(([key, value]) => {
      GenesisState_SeqIdMappingEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(64).fork()).ldelim();
    });
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      collectorAddress: isSet(object.collectorAddress) ? bytesFromBase64(object.collectorAddress) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => CosmosChain.fromJSON(e)) : [],
      transferQueue: isSet(object.transferQueue) ? QueueState.fromJSON(object.transferQueue) : undefined,
      ibcTransfers: Array.isArray(object?.ibcTransfers) ? object.ibcTransfers.map((e: any) => IBCTransfer.fromJSON(e)) : [],
      seqIdMapping: isObject(object.seqIdMapping) ? Object.entries(object.seqIdMapping).reduce<{
        [key: string]: Long;
      }>((acc, [key, value]) => {
        acc[key] = Long.fromValue((value as Long | string));
        return acc;
      }, {}) : {}
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.collectorAddress = object.collectorAddress ?? new Uint8Array();
    message.chains = object.chains?.map(e => CosmosChain.fromPartial(e)) || [];
    message.transferQueue = object.transferQueue !== undefined && object.transferQueue !== null ? QueueState.fromPartial(object.transferQueue) : undefined;
    message.ibcTransfers = object.ibcTransfers?.map(e => IBCTransfer.fromPartial(e)) || [];
    message.seqIdMapping = Object.entries(object.seqIdMapping ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  }
};