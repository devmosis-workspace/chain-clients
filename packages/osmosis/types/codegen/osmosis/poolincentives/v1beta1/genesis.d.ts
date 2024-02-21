import { Params, ParamsAmino, ParamsSDKType, DistrInfo, DistrInfoAmino, DistrInfoSDKType, AnyPoolToInternalGauges, AnyPoolToInternalGaugesAmino, AnyPoolToInternalGaugesSDKType, ConcentratedPoolToNoLockGauges, ConcentratedPoolToNoLockGaugesAmino, ConcentratedPoolToNoLockGaugesSDKType } from "./incentives";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    lockableDurations: Duration[];
    distrInfo?: DistrInfo;
    /**
     * any_pool_to_internal_gauges defines the gauges for any pool to internal
     * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
     * link
     */
    anyPoolToInternalGauges?: AnyPoolToInternalGauges;
    /**
     * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
     * concentrated pool. This only exists between concentrated pool and no lock
     * gauges. Both external and internal gauges are included.
     */
    concentratedPoolToNoLockGauges?: ConcentratedPoolToNoLockGauges;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params?: ParamsAmino;
    lockable_durations?: DurationAmino[];
    distr_info?: DistrInfoAmino;
    /**
     * any_pool_to_internal_gauges defines the gauges for any pool to internal
     * pool. For every pool type (e.g. LP, Concentrated, etc), there is one such
     * link
     */
    any_pool_to_internal_gauges?: AnyPoolToInternalGaugesAmino;
    /**
     * concentrated_pool_to_no_lock_gauges defines the no lock gauges for
     * concentrated pool. This only exists between concentrated pool and no lock
     * gauges. Both external and internal gauges are included.
     */
    concentrated_pool_to_no_lock_gauges?: ConcentratedPoolToNoLockGaugesAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/poolincentives/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    lockable_durations: DurationSDKType[];
    distr_info?: DistrInfoSDKType;
    any_pool_to_internal_gauges?: AnyPoolToInternalGaugesSDKType;
    concentrated_pool_to_no_lock_gauges?: ConcentratedPoolToNoLockGaugesSDKType;
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
