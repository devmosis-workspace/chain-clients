import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { CosmosChain, CosmosChainAmino, CosmosChainSDKType, IBCTransfer, IBCTransferAmino, IBCTransferSDKType } from "./types";
import { QueueState, QueueStateAmino, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { BinaryWriter } from "../../../binary";
export interface GenesisState_SeqIdMappingEntry {
    key: string;
    value: bigint;
}
export interface GenesisState_SeqIdMappingEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface GenesisState_SeqIdMappingEntryAmino {
    key: string;
    value: string;
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
    collector_address: Uint8Array;
    chains: CosmosChainAmino[];
    transfer_queue?: QueueStateAmino;
    ibc_transfers: IBCTransferAmino[];
    seq_id_mapping: {
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
export declare const GenesisState_SeqIdMappingEntry: {
    encode(message: GenesisState_SeqIdMappingEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_SeqIdMappingEntry;
    fromPartial(object: Partial<GenesisState_SeqIdMappingEntry>): GenesisState_SeqIdMappingEntry;
    fromAmino(object: GenesisState_SeqIdMappingEntryAmino): GenesisState_SeqIdMappingEntry;
    toAmino(message: GenesisState_SeqIdMappingEntry): GenesisState_SeqIdMappingEntryAmino;
    fromAminoMsg(object: GenesisState_SeqIdMappingEntryAminoMsg): GenesisState_SeqIdMappingEntry;
    fromProtoMsg(message: GenesisState_SeqIdMappingEntryProtoMsg): GenesisState_SeqIdMappingEntry;
    toProto(message: GenesisState_SeqIdMappingEntry): Uint8Array;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
