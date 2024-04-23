import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Sequencer, SequencerAmino, SequencerSDKType } from "./sequencer";
import { SequencersByRollapp, SequencersByRollappAmino, SequencersByRollappSDKType } from "./sequencers_by_rollapp";
import { Scheduler, SchedulerAmino, SchedulerSDKType } from "./scheduler";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisState {
    params: Params;
    sequencerList: Sequencer[];
    sequencersByRollappList: SequencersByRollapp[];
    schedulerList: Scheduler[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    sequencerList?: SequencerAmino[];
    sequencersByRollappList?: SequencersByRollappAmino[];
    schedulerList?: SchedulerAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the sequencer module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    sequencerList: SequencerSDKType[];
    sequencersByRollappList: SequencersByRollappSDKType[];
    schedulerList: SchedulerSDKType[];
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
