import { Params, ParamsSDKType } from "./params";
import { CosmosChain, CosmosChainSDKType, IBCTransfer, IBCTransferSDKType } from "./types";
import { QueueState, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { Long } from "../../../helpers";
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
export declare const GenesisState_SeqIdMappingEntry: {
    encode(message: GenesisState_SeqIdMappingEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState_SeqIdMappingEntry;
    fromPartial(object: Partial<GenesisState_SeqIdMappingEntry>): GenesisState_SeqIdMappingEntry;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
