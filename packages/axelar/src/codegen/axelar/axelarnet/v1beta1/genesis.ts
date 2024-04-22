import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CosmosChain, CosmosChainAmino, CosmosChainSDKType, IBCTransfer, IBCTransferAmino, IBCTransferSDKType } from "./types";
import { QueueState, QueueStateAmino, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, isObject, base64FromBytes } from "../../../helpers";
export interface GenesisState_SeqIdMappingEntry {
  key: string;
  value: bigint;
}
export interface GenesisState_SeqIdMappingEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface GenesisState_SeqIdMappingEntryAmino {
  key?: string;
  value?: string;
}
export interface GenesisState_SeqIdMappingEntryAminoMsg {
  type: string;
  value: GenesisState_SeqIdMappingEntryAmino;
}
export interface GenesisState_SeqIdMappingEntrySDKType {
  key: string;
  value: bigint;
}
export interface GenesisState {
  params: Params;
  collectorAddress: Uint8Array;
  chains: CosmosChain[];
  transferQueue: QueueState;
  ibcTransfers: IBCTransfer[];
  seqIdMapping: {
    [key: string]: bigint;
  };
}
export interface GenesisStateProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  params?: ParamsAmino;
  collector_address?: string;
  chains?: CosmosChainAmino[];
  transfer_queue?: QueueStateAmino;
  ibc_transfers?: IBCTransferAmino[];
  seq_id_mapping?: {
    [key: string]: string;
  };
}
export interface GenesisStateAminoMsg {
  type: "/axelar.axelarnet.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  collector_address: Uint8Array;
  chains: CosmosChainSDKType[];
  transfer_queue: QueueStateSDKType;
  ibc_transfers: IBCTransferSDKType[];
  seq_id_mapping: {
    [key: string]: bigint;
  };
}
function createBaseGenesisState_SeqIdMappingEntry(): GenesisState_SeqIdMappingEntry {
  return {
    key: "",
    value: BigInt(0)
  };
}
export const GenesisState_SeqIdMappingEntry = {
  encode(message: GenesisState_SeqIdMappingEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState_SeqIdMappingEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState_SeqIdMappingEntry>): GenesisState_SeqIdMappingEntry {
    const message = createBaseGenesisState_SeqIdMappingEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisState_SeqIdMappingEntryAmino): GenesisState_SeqIdMappingEntry {
    const message = createBaseGenesisState_SeqIdMappingEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_SeqIdMappingEntry): GenesisState_SeqIdMappingEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_SeqIdMappingEntryAminoMsg): GenesisState_SeqIdMappingEntry {
    return GenesisState_SeqIdMappingEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_SeqIdMappingEntryProtoMsg): GenesisState_SeqIdMappingEntry {
    return GenesisState_SeqIdMappingEntry.decode(message.value);
  },
  toProto(message: GenesisState_SeqIdMappingEntry): Uint8Array {
    return GenesisState_SeqIdMappingEntry.encode(message).finish();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    collectorAddress: new Uint8Array(),
    chains: [],
    transferQueue: QueueState.fromPartial({}),
    ibcTransfers: [],
    seqIdMapping: {}
  };
}
export const GenesisState = {
  typeUrl: "/axelar.axelarnet.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
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
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.collector_address !== undefined && object.collector_address !== null) {
      message.collectorAddress = bytesFromBase64(object.collector_address);
    }
    message.chains = object.chains?.map(e => CosmosChain.fromAmino(e)) || [];
    if (object.transfer_queue !== undefined && object.transfer_queue !== null) {
      message.transferQueue = QueueState.fromAmino(object.transfer_queue);
    }
    message.ibcTransfers = object.ibc_transfers?.map(e => IBCTransfer.fromAmino(e)) || [];
    message.seqIdMapping = Object.entries(object.seq_id_mapping ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.collector_address = message.collectorAddress ? base64FromBytes(message.collectorAddress) : undefined;
    if (message.chains) {
      obj.chains = message.chains.map(e => e ? CosmosChain.toAmino(e) : undefined);
    } else {
      obj.chains = [];
    }
    obj.transfer_queue = message.transferQueue ? QueueState.toAmino(message.transferQueue) : undefined;
    if (message.ibcTransfers) {
      obj.ibc_transfers = message.ibcTransfers.map(e => e ? IBCTransfer.toAmino(e) : undefined);
    } else {
      obj.ibc_transfers = [];
    }
    obj.seq_id_mapping = {};
    if (message.seqIdMapping) {
      Object.entries(message.seqIdMapping).forEach(([k, v]) => {
        obj.seq_id_mapping[k] = v.toString();
      });
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
      typeUrl: "/axelar.axelarnet.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};