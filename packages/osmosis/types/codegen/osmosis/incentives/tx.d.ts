import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryWriter } from "../../binary";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    isPerpetual: boolean;
    /** owner is the address of gauge creator */
    owner: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distributeTo: QueryCondition;
    /** coins are coin(s) to be distributed by the gauge */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime: Timestamp;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    numEpochsPaidOver: bigint;
    /**
     * pool_id is the ID of the pool that the gauge is meant to be associated
     * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
     * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
     * unset, including "QueryCondition.Denom". However, note that, internally,
     * the empty string in "QueryCondition.Denom" ends up being overwritten with
     * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
     * associated with a pool can be queried by this prefix if needed.
     */
    poolId: bigint;
}
export interface MsgCreateGaugeProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGauge";
    value: Uint8Array;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
    /**
     * is_perpetual shows if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled
     */
    is_perpetual?: boolean;
    /** owner is the address of gauge creator */
    owner?: string;
    /**
     * distribute_to show which lock the gauge should distribute to by time
     * duration or by timestamp
     */
    distribute_to?: QueryConditionAmino;
    /** coins are coin(s) to be distributed by the gauge */
    coins?: CoinAmino[];
    /** start_time is the distribution start time */
    start_time?: string;
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * over
     */
    num_epochs_paid_over?: string;
    /**
     * pool_id is the ID of the pool that the gauge is meant to be associated
     * with. if pool_id is set, then the "QueryCondition.LockQueryType" must be
     * "NoLock" with all other fields of the "QueryCondition.LockQueryType" struct
     * unset, including "QueryCondition.Denom". However, note that, internally,
     * the empty string in "QueryCondition.Denom" ends up being overwritten with
     * incentivestypes.NoLockExternalGaugeDenom(<pool-id>) so that the gauges
     * associated with a pool can be queried by this prefix if needed.
     */
    pool_id?: string;
}
export interface MsgCreateGaugeAminoMsg {
    type: "osmosis/incentives/create-gauge";
    value: MsgCreateGaugeAmino;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
    is_perpetual: boolean;
    owner: string;
    distribute_to: QueryConditionSDKType;
    coins: CoinSDKType[];
    start_time: TimestampSDKType;
    num_epochs_paid_over: bigint;
    pool_id: bigint;
}
export interface MsgCreateGaugeResponse {
}
export interface MsgCreateGaugeResponseProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse";
    value: Uint8Array;
}
export interface MsgCreateGaugeResponseAmino {
}
export interface MsgCreateGaugeResponseAminoMsg {
    type: "osmosis/incentives/create-gauge-response";
    value: MsgCreateGaugeResponseAmino;
}
export interface MsgCreateGaugeResponseSDKType {
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
    /** owner is the gauge owner's address */
    owner: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gaugeId: bigint;
    /** rewards are the coin(s) to add to gauge */
    rewards: Coin[];
}
export interface MsgAddToGaugeProtoMsg {
    typeUrl: "/osmosis.incentives.MsgAddToGauge";
    value: Uint8Array;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
    /** owner is the gauge owner's address */
    owner?: string;
    /** gauge_id is the ID of gauge that rewards are getting added to */
    gauge_id?: string;
    /** rewards are the coin(s) to add to gauge */
    rewards?: CoinAmino[];
}
export interface MsgAddToGaugeAminoMsg {
    type: "osmosis/incentives/add-to-gauge";
    value: MsgAddToGaugeAmino;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
    owner: string;
    gauge_id: bigint;
    rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {
}
export interface MsgAddToGaugeResponseProtoMsg {
    typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse";
    value: Uint8Array;
}
export interface MsgAddToGaugeResponseAmino {
}
export interface MsgAddToGaugeResponseAminoMsg {
    type: "osmosis/incentives/add-to-gauge-response";
    value: MsgAddToGaugeResponseAmino;
}
export interface MsgAddToGaugeResponseSDKType {
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroup {
    /** coins are the provided coins that the group will distribute */
    coins: Coin[];
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * in. 0 means it's perpetual
     */
    numEpochsPaidOver: bigint;
    /** owner is the group owner's address */
    owner: string;
    /** pool_ids are the IDs of pools that the group is comprised of */
    poolIds: bigint[];
}
export interface MsgCreateGroupProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGroup";
    value: Uint8Array;
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroupAmino {
    /** coins are the provided coins that the group will distribute */
    coins?: CoinAmino[];
    /**
     * num_epochs_paid_over is the number of epochs distribution will be completed
     * in. 0 means it's perpetual
     */
    num_epochs_paid_over?: string;
    /** owner is the group owner's address */
    owner?: string;
    /** pool_ids are the IDs of pools that the group is comprised of */
    pool_ids?: string[];
}
export interface MsgCreateGroupAminoMsg {
    type: "osmosis/incentives/create-group";
    value: MsgCreateGroupAmino;
}
/** MsgCreateGroup creates a group to distribute rewards to a group of pools */
export interface MsgCreateGroupSDKType {
    coins: CoinSDKType[];
    num_epochs_paid_over: bigint;
    owner: string;
    pool_ids: bigint[];
}
export interface MsgCreateGroupResponse {
    /** group_id is the ID of the group that is created from this msg */
    groupId: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
    typeUrl: "/osmosis.incentives.MsgCreateGroupResponse";
    value: Uint8Array;
}
export interface MsgCreateGroupResponseAmino {
    /** group_id is the ID of the group that is created from this msg */
    group_id?: string;
}
export interface MsgCreateGroupResponseAminoMsg {
    type: "osmosis/incentives/create-group-response";
    value: MsgCreateGroupResponseAmino;
}
export interface MsgCreateGroupResponseSDKType {
    group_id: bigint;
}
export declare const MsgCreateGauge: {
    typeUrl: string;
    encode(message: MsgCreateGauge, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGauge;
    fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge;
    fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge;
    toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino;
    fromAminoMsg(object: MsgCreateGaugeAminoMsg): MsgCreateGauge;
    toAminoMsg(message: MsgCreateGauge): MsgCreateGaugeAminoMsg;
    fromProtoMsg(message: MsgCreateGaugeProtoMsg): MsgCreateGauge;
    toProto(message: MsgCreateGauge): Uint8Array;
    toProtoMsg(message: MsgCreateGauge): MsgCreateGaugeProtoMsg;
};
export declare const MsgCreateGaugeResponse: {
    typeUrl: string;
    encode(_: MsgCreateGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateGaugeResponse;
    fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse;
    fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse;
    toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino;
    fromAminoMsg(object: MsgCreateGaugeResponseAminoMsg): MsgCreateGaugeResponse;
    toAminoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGaugeResponseProtoMsg): MsgCreateGaugeResponse;
    toProto(message: MsgCreateGaugeResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseProtoMsg;
};
export declare const MsgAddToGauge: {
    typeUrl: string;
    encode(message: MsgAddToGauge, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddToGauge;
    fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge;
    fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge;
    toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino;
    fromAminoMsg(object: MsgAddToGaugeAminoMsg): MsgAddToGauge;
    toAminoMsg(message: MsgAddToGauge): MsgAddToGaugeAminoMsg;
    fromProtoMsg(message: MsgAddToGaugeProtoMsg): MsgAddToGauge;
    toProto(message: MsgAddToGauge): Uint8Array;
    toProtoMsg(message: MsgAddToGauge): MsgAddToGaugeProtoMsg;
};
export declare const MsgAddToGaugeResponse: {
    typeUrl: string;
    encode(_: MsgAddToGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddToGaugeResponse;
    fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse;
    fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse;
    toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino;
    fromAminoMsg(object: MsgAddToGaugeResponseAminoMsg): MsgAddToGaugeResponse;
    toAminoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseAminoMsg;
    fromProtoMsg(message: MsgAddToGaugeResponseProtoMsg): MsgAddToGaugeResponse;
    toProto(message: MsgAddToGaugeResponse): Uint8Array;
    toProtoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseProtoMsg;
};
export declare const MsgCreateGroup: {
    typeUrl: string;
    encode(message: MsgCreateGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroup;
    fromPartial(object: Partial<MsgCreateGroup>): MsgCreateGroup;
    fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup;
    toAmino(message: MsgCreateGroup): MsgCreateGroupAmino;
    fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup;
    toAminoMsg(message: MsgCreateGroup): MsgCreateGroupAminoMsg;
    fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup;
    toProto(message: MsgCreateGroup): Uint8Array;
    toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg;
};
export declare const MsgCreateGroupResponse: {
    typeUrl: string;
    encode(message: MsgCreateGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateGroupResponse;
    fromPartial(object: Partial<MsgCreateGroupResponse>): MsgCreateGroupResponse;
    fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse;
    toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino;
    fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse;
    toAminoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseAminoMsg;
    fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse;
    toProto(message: MsgCreateGroupResponse): Uint8Array;
    toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg;
};
