import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    mintedDenom: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    minted_denom?: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/poolincentives/params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    minted_denom: string;
}
export interface LockableDurationsInfo {
    lockableDurations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
    value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
    lockable_durations?: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
    type: "osmosis/poolincentives/lockable-durations-info";
    value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
    totalWeight: string;
    records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo";
    value: Uint8Array;
}
export interface DistrInfoAmino {
    total_weight?: string;
    records?: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
    type: "osmosis/poolincentives/distr-info";
    value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
    total_weight: string;
    records: DistrRecordSDKType[];
}
export interface DistrRecord {
    gaugeId: bigint;
    weight: string;
}
export interface DistrRecordProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord";
    value: Uint8Array;
}
export interface DistrRecordAmino {
    gauge_id?: string;
    weight?: string;
}
export interface DistrRecordAminoMsg {
    type: "osmosis/poolincentives/distr-record";
    value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
    gauge_id: bigint;
    weight: string;
}
export interface PoolToGauge {
    poolId: bigint;
    gaugeId: bigint;
    duration: Duration;
}
export interface PoolToGaugeProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge";
    value: Uint8Array;
}
export interface PoolToGaugeAmino {
    pool_id?: string;
    gauge_id?: string;
    duration?: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
    type: "osmosis/poolincentives/pool-to-gauge";
    value: PoolToGaugeAmino;
}
export interface PoolToGaugeSDKType {
    pool_id: bigint;
    gauge_id: bigint;
    duration: DurationSDKType;
}
export interface AnyPoolToInternalGauges {
    poolToGauge: PoolToGauge[];
}
export interface AnyPoolToInternalGaugesProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.AnyPoolToInternalGauges";
    value: Uint8Array;
}
export interface AnyPoolToInternalGaugesAmino {
    pool_to_gauge?: PoolToGaugeAmino[];
}
export interface AnyPoolToInternalGaugesAminoMsg {
    type: "osmosis/poolincentives/any-pool-to-internal-gauges";
    value: AnyPoolToInternalGaugesAmino;
}
export interface AnyPoolToInternalGaugesSDKType {
    pool_to_gauge: PoolToGaugeSDKType[];
}
export interface ConcentratedPoolToNoLockGauges {
    poolToGauge: PoolToGauge[];
}
export interface ConcentratedPoolToNoLockGaugesProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.ConcentratedPoolToNoLockGauges";
    value: Uint8Array;
}
export interface ConcentratedPoolToNoLockGaugesAmino {
    pool_to_gauge?: PoolToGaugeAmino[];
}
export interface ConcentratedPoolToNoLockGaugesAminoMsg {
    type: "osmosis/poolincentives/concentrated-pool-to-no-lock-gauges";
    value: ConcentratedPoolToNoLockGaugesAmino;
}
export interface ConcentratedPoolToNoLockGaugesSDKType {
    pool_to_gauge: PoolToGaugeSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const LockableDurationsInfo: {
    typeUrl: string;
    encode(message: LockableDurationsInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockableDurationsInfo;
    fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo;
    fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo;
    toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino;
    fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo;
    toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg;
    fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo;
    toProto(message: LockableDurationsInfo): Uint8Array;
    toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg;
};
export declare const DistrInfo: {
    typeUrl: string;
    encode(message: DistrInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistrInfo;
    fromPartial(object: Partial<DistrInfo>): DistrInfo;
    fromAmino(object: DistrInfoAmino): DistrInfo;
    toAmino(message: DistrInfo): DistrInfoAmino;
    fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo;
    toAminoMsg(message: DistrInfo): DistrInfoAminoMsg;
    fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo;
    toProto(message: DistrInfo): Uint8Array;
    toProtoMsg(message: DistrInfo): DistrInfoProtoMsg;
};
export declare const DistrRecord: {
    typeUrl: string;
    encode(message: DistrRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistrRecord;
    fromPartial(object: Partial<DistrRecord>): DistrRecord;
    fromAmino(object: DistrRecordAmino): DistrRecord;
    toAmino(message: DistrRecord): DistrRecordAmino;
    fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord;
    toAminoMsg(message: DistrRecord): DistrRecordAminoMsg;
    fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord;
    toProto(message: DistrRecord): Uint8Array;
    toProtoMsg(message: DistrRecord): DistrRecordProtoMsg;
};
export declare const PoolToGauge: {
    typeUrl: string;
    encode(message: PoolToGauge, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolToGauge;
    fromPartial(object: Partial<PoolToGauge>): PoolToGauge;
    fromAmino(object: PoolToGaugeAmino): PoolToGauge;
    toAmino(message: PoolToGauge): PoolToGaugeAmino;
    fromAminoMsg(object: PoolToGaugeAminoMsg): PoolToGauge;
    toAminoMsg(message: PoolToGauge): PoolToGaugeAminoMsg;
    fromProtoMsg(message: PoolToGaugeProtoMsg): PoolToGauge;
    toProto(message: PoolToGauge): Uint8Array;
    toProtoMsg(message: PoolToGauge): PoolToGaugeProtoMsg;
};
export declare const AnyPoolToInternalGauges: {
    typeUrl: string;
    encode(message: AnyPoolToInternalGauges, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AnyPoolToInternalGauges;
    fromPartial(object: Partial<AnyPoolToInternalGauges>): AnyPoolToInternalGauges;
    fromAmino(object: AnyPoolToInternalGaugesAmino): AnyPoolToInternalGauges;
    toAmino(message: AnyPoolToInternalGauges): AnyPoolToInternalGaugesAmino;
    fromAminoMsg(object: AnyPoolToInternalGaugesAminoMsg): AnyPoolToInternalGauges;
    toAminoMsg(message: AnyPoolToInternalGauges): AnyPoolToInternalGaugesAminoMsg;
    fromProtoMsg(message: AnyPoolToInternalGaugesProtoMsg): AnyPoolToInternalGauges;
    toProto(message: AnyPoolToInternalGauges): Uint8Array;
    toProtoMsg(message: AnyPoolToInternalGauges): AnyPoolToInternalGaugesProtoMsg;
};
export declare const ConcentratedPoolToNoLockGauges: {
    typeUrl: string;
    encode(message: ConcentratedPoolToNoLockGauges, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConcentratedPoolToNoLockGauges;
    fromPartial(object: Partial<ConcentratedPoolToNoLockGauges>): ConcentratedPoolToNoLockGauges;
    fromAmino(object: ConcentratedPoolToNoLockGaugesAmino): ConcentratedPoolToNoLockGauges;
    toAmino(message: ConcentratedPoolToNoLockGauges): ConcentratedPoolToNoLockGaugesAmino;
    fromAminoMsg(object: ConcentratedPoolToNoLockGaugesAminoMsg): ConcentratedPoolToNoLockGauges;
    toAminoMsg(message: ConcentratedPoolToNoLockGauges): ConcentratedPoolToNoLockGaugesAminoMsg;
    fromProtoMsg(message: ConcentratedPoolToNoLockGaugesProtoMsg): ConcentratedPoolToNoLockGauges;
    toProto(message: ConcentratedPoolToNoLockGauges): Uint8Array;
    toProtoMsg(message: ConcentratedPoolToNoLockGauges): ConcentratedPoolToNoLockGaugesProtoMsg;
};
