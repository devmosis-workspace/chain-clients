import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { BinaryWriter } from "../../binary";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params;
    /**
     * gauges are all gauges (not including group gauges) that should exist at
     * genesis
     */
    gauges: Gauge[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to receive incentives
     */
    lockableDurations: Duration[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    lastGaugeId: bigint;
    /** gauges are all group gauges that should exist at genesis */
    groupGauges: Gauge[];
    /** groups are all the groups that should exist at genesis */
    groups: Group[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.incentives.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
    /** params are all the parameters of the module */
    params?: ParamsAmino;
    /**
     * gauges are all gauges (not including group gauges) that should exist at
     * genesis
     */
    gauges?: GaugeAmino[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to receive incentives
     */
    lockable_durations?: DurationAmino[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    last_gauge_id?: string;
    /** gauges are all group gauges that should exist at genesis */
    group_gauges?: GaugeAmino[];
    /** groups are all the groups that should exist at genesis */
    groups?: GroupAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/incentives/genesis-state";
    value: GenesisStateAmino;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    gauges: GaugeSDKType[];
    lockable_durations: DurationSDKType[];
    last_gauge_id: bigint;
    group_gauges: GaugeSDKType[];
    groups: GroupSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
