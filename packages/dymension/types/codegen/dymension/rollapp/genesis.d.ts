import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Rollapp, RollappAmino, RollappSDKType } from "./rollapp";
import { StateInfo, StateInfoAmino, StateInfoSDKType, StateInfoIndex, StateInfoIndexAmino, StateInfoIndexSDKType, BlockHeightToFinalizationQueue, BlockHeightToFinalizationQueueAmino, BlockHeightToFinalizationQueueSDKType } from "./state_info";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisState {
    params: Params;
    rollappList: Rollapp[];
    stateInfoList: StateInfo[];
    latestStateInfoIndexList: StateInfoIndex[];
    latestFinalizedStateIndexList: StateInfoIndex[];
    blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueue[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    rollappList?: RollappAmino[];
    stateInfoList?: StateInfoAmino[];
    latestStateInfoIndexList?: StateInfoIndexAmino[];
    latestFinalizedStateIndexList?: StateInfoIndexAmino[];
    blockHeightToFinalizationQueueList?: BlockHeightToFinalizationQueueAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the rollapp module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    rollappList: RollappSDKType[];
    stateInfoList: StateInfoSDKType[];
    latestStateInfoIndexList: StateInfoIndexSDKType[];
    latestFinalizedStateIndexList: StateInfoIndexSDKType[];
    blockHeightToFinalizationQueueList: BlockHeightToFinalizationQueueSDKType[];
}
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
