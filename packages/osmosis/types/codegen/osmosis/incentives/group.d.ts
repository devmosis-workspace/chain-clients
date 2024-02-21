import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { BinaryWriter } from "../../binary";
/** SplittingPolicy determines the way we want to split incentives in groupGauges */
export declare enum SplittingPolicy {
    ByVolume = 0,
    UNRECOGNIZED = -1
}
export declare const SplittingPolicySDKType: typeof SplittingPolicy;
export declare const SplittingPolicyAmino: typeof SplittingPolicy;
export declare function splittingPolicyFromJSON(object: any): SplittingPolicy;
export declare function splittingPolicyToJSON(object: SplittingPolicy): string;
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfo {
    totalWeight: string;
    gaugeRecords: InternalGaugeRecord[];
}
export interface InternalGaugeInfoProtoMsg {
    typeUrl: "/osmosis.incentives.InternalGaugeInfo";
    value: Uint8Array;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoAmino {
    total_weight?: string;
    gauge_records?: InternalGaugeRecordAmino[];
}
export interface InternalGaugeInfoAminoMsg {
    type: "osmosis/incentives/internal-gauge-info";
    value: InternalGaugeInfoAmino;
}
/**
 * Note that while both InternalGaugeInfo and InternalGaugeRecord could
 * technically be replaced by DistrInfo and DistrRecord from the pool-incentives
 * module, we create separate types here to keep our abstractions clean and
 * readable (pool-incentives distribution abstractions are used in a very
 * specific way that does not directly relate to gauge logic). This also helps
 * us sidestep a refactor to avoid an import cycle.
 */
export interface InternalGaugeInfoSDKType {
    total_weight: string;
    gauge_records: InternalGaugeRecordSDKType[];
}
export interface InternalGaugeRecord {
    gaugeId: bigint;
    /**
     * CurrentWeight is the current weight of this gauge being distributed to for
     * this epoch. For instance, for volume splitting policy, this stores the
     * volume generated in the last epoch of the linked pool.
     */
    currentWeight: string;
    /**
     * CumulativeWeight serves as a snapshot of the accumulator being tracked
     * based on splitting policy. For instance, for volume splitting policy, this
     * stores the cumulative volume for the linked pool at time of last update.
     */
    cumulativeWeight: string;
}
export interface InternalGaugeRecordProtoMsg {
    typeUrl: "/osmosis.incentives.InternalGaugeRecord";
    value: Uint8Array;
}
export interface InternalGaugeRecordAmino {
    gauge_id?: string;
    /**
     * CurrentWeight is the current weight of this gauge being distributed to for
     * this epoch. For instance, for volume splitting policy, this stores the
     * volume generated in the last epoch of the linked pool.
     */
    current_weight?: string;
    /**
     * CumulativeWeight serves as a snapshot of the accumulator being tracked
     * based on splitting policy. For instance, for volume splitting policy, this
     * stores the cumulative volume for the linked pool at time of last update.
     */
    cumulative_weight?: string;
}
export interface InternalGaugeRecordAminoMsg {
    type: "osmosis/incentives/internal-gauge-record";
    value: InternalGaugeRecordAmino;
}
export interface InternalGaugeRecordSDKType {
    gauge_id: bigint;
    current_weight: string;
    cumulative_weight: string;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface Group {
    groupGaugeId: bigint;
    internalGaugeInfo: InternalGaugeInfo;
    splittingPolicy: SplittingPolicy;
}
export interface GroupProtoMsg {
    typeUrl: "/osmosis.incentives.Group";
    value: Uint8Array;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupAmino {
    group_gauge_id?: string;
    internal_gauge_info?: InternalGaugeInfoAmino;
    splitting_policy?: SplittingPolicy;
}
export interface GroupAminoMsg {
    type: "osmosis/incentives/group";
    value: GroupAmino;
}
/**
 * Group is an object that stores a 1:1 mapped gauge ID, a list of pool gauge
 * info, and a splitting policy. These are grouped into a single abstraction to
 * allow for distribution of group incentives to internal gauges according to
 * the specified splitting policy.
 */
export interface GroupSDKType {
    group_gauge_id: bigint;
    internal_gauge_info: InternalGaugeInfoSDKType;
    splitting_policy: SplittingPolicy;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroup {
    /**
     * CreateGroup is called via governance to create a new group.
     * It takes an array of pool IDs to split the incentives across.
     */
    poolIds: bigint[];
}
export interface CreateGroupProtoMsg {
    typeUrl: "/osmosis.incentives.CreateGroup";
    value: Uint8Array;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupAmino {
    /**
     * CreateGroup is called via governance to create a new group.
     * It takes an array of pool IDs to split the incentives across.
     */
    pool_ids?: string[];
}
export interface CreateGroupAminoMsg {
    type: "osmosis/incentives/create-group";
    value: CreateGroupAmino;
}
/**
 * CreateGroup is called via governance to create a new group.
 * It takes an array of pool IDs to split the incentives across.
 */
export interface CreateGroupSDKType {
    pool_ids: bigint[];
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGauge {
    group: Group;
    gauge: Gauge;
}
export interface GroupsWithGaugeProtoMsg {
    typeUrl: "/osmosis.incentives.GroupsWithGauge";
    value: Uint8Array;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeAmino {
    group?: GroupAmino;
    gauge?: GaugeAmino;
}
export interface GroupsWithGaugeAminoMsg {
    type: "osmosis/incentives/groups-with-gauge";
    value: GroupsWithGaugeAmino;
}
/**
 * GroupsWithGauge is a helper struct that stores a group and its
 * associated gauge.
 */
export interface GroupsWithGaugeSDKType {
    group: GroupSDKType;
    gauge: GaugeSDKType;
}
export declare const InternalGaugeInfo: {
    typeUrl: string;
    encode(message: InternalGaugeInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InternalGaugeInfo;
    fromPartial(object: Partial<InternalGaugeInfo>): InternalGaugeInfo;
    fromAmino(object: InternalGaugeInfoAmino): InternalGaugeInfo;
    toAmino(message: InternalGaugeInfo): InternalGaugeInfoAmino;
    fromAminoMsg(object: InternalGaugeInfoAminoMsg): InternalGaugeInfo;
    toAminoMsg(message: InternalGaugeInfo): InternalGaugeInfoAminoMsg;
    fromProtoMsg(message: InternalGaugeInfoProtoMsg): InternalGaugeInfo;
    toProto(message: InternalGaugeInfo): Uint8Array;
    toProtoMsg(message: InternalGaugeInfo): InternalGaugeInfoProtoMsg;
};
export declare const InternalGaugeRecord: {
    typeUrl: string;
    encode(message: InternalGaugeRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InternalGaugeRecord;
    fromPartial(object: Partial<InternalGaugeRecord>): InternalGaugeRecord;
    fromAmino(object: InternalGaugeRecordAmino): InternalGaugeRecord;
    toAmino(message: InternalGaugeRecord): InternalGaugeRecordAmino;
    fromAminoMsg(object: InternalGaugeRecordAminoMsg): InternalGaugeRecord;
    toAminoMsg(message: InternalGaugeRecord): InternalGaugeRecordAminoMsg;
    fromProtoMsg(message: InternalGaugeRecordProtoMsg): InternalGaugeRecord;
    toProto(message: InternalGaugeRecord): Uint8Array;
    toProtoMsg(message: InternalGaugeRecord): InternalGaugeRecordProtoMsg;
};
export declare const Group: {
    typeUrl: string;
    encode(message: Group, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Group;
    fromPartial(object: Partial<Group>): Group;
    fromAmino(object: GroupAmino): Group;
    toAmino(message: Group): GroupAmino;
    fromAminoMsg(object: GroupAminoMsg): Group;
    toAminoMsg(message: Group): GroupAminoMsg;
    fromProtoMsg(message: GroupProtoMsg): Group;
    toProto(message: Group): Uint8Array;
    toProtoMsg(message: Group): GroupProtoMsg;
};
export declare const CreateGroup: {
    typeUrl: string;
    encode(message: CreateGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateGroup;
    fromPartial(object: Partial<CreateGroup>): CreateGroup;
    fromAmino(object: CreateGroupAmino): CreateGroup;
    toAmino(message: CreateGroup): CreateGroupAmino;
    fromAminoMsg(object: CreateGroupAminoMsg): CreateGroup;
    toAminoMsg(message: CreateGroup): CreateGroupAminoMsg;
    fromProtoMsg(message: CreateGroupProtoMsg): CreateGroup;
    toProto(message: CreateGroup): Uint8Array;
    toProtoMsg(message: CreateGroup): CreateGroupProtoMsg;
};
export declare const GroupsWithGauge: {
    typeUrl: string;
    encode(message: GroupsWithGauge, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupsWithGauge;
    fromPartial(object: Partial<GroupsWithGauge>): GroupsWithGauge;
    fromAmino(object: GroupsWithGaugeAmino): GroupsWithGauge;
    toAmino(message: GroupsWithGauge): GroupsWithGaugeAmino;
    fromAminoMsg(object: GroupsWithGaugeAminoMsg): GroupsWithGauge;
    toAminoMsg(message: GroupsWithGauge): GroupsWithGaugeAminoMsg;
    fromProtoMsg(message: GroupsWithGaugeProtoMsg): GroupsWithGauge;
    toProto(message: GroupsWithGauge): Uint8Array;
    toProtoMsg(message: GroupsWithGauge): GroupsWithGaugeProtoMsg;
};
