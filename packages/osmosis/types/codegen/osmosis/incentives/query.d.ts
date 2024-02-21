import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Group, GroupAmino, GroupSDKType, GroupsWithGauge, GroupsWithGaugeAmino, GroupsWithGaugeSDKType } from "./group";
import { BinaryWriter } from "../../binary";
export interface ModuleToDistributeCoinsRequest {
}
export interface ModuleToDistributeCoinsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsRequest";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsRequestAmino {
}
export interface ModuleToDistributeCoinsRequestAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-request";
    value: ModuleToDistributeCoinsRequestAmino;
}
export interface ModuleToDistributeCoinsRequestSDKType {
}
export interface ModuleToDistributeCoinsResponse {
    /** Coins that have yet to be distributed */
    coins: Coin[];
}
export interface ModuleToDistributeCoinsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ModuleToDistributeCoinsResponse";
    value: Uint8Array;
}
export interface ModuleToDistributeCoinsResponseAmino {
    /** Coins that have yet to be distributed */
    coins?: CoinAmino[];
}
export interface ModuleToDistributeCoinsResponseAminoMsg {
    type: "osmosis/incentives/module-to-distribute-coins-response";
    value: ModuleToDistributeCoinsResponseAmino;
}
export interface ModuleToDistributeCoinsResponseSDKType {
    coins: CoinSDKType[];
}
export interface GaugeByIDRequest {
    /** Gague ID being queried */
    id: bigint;
}
export interface GaugeByIDRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDRequest";
    value: Uint8Array;
}
export interface GaugeByIDRequestAmino {
    /** Gague ID being queried */
    id?: string;
}
export interface GaugeByIDRequestAminoMsg {
    type: "osmosis/incentives/gauge-by-id-request";
    value: GaugeByIDRequestAmino;
}
export interface GaugeByIDRequestSDKType {
    id: bigint;
}
export interface GaugeByIDResponse {
    /** Gauge that corresponds to provided gague ID */
    gauge?: Gauge;
}
export interface GaugeByIDResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeByIDResponse";
    value: Uint8Array;
}
export interface GaugeByIDResponseAmino {
    /** Gauge that corresponds to provided gague ID */
    gauge?: GaugeAmino;
}
export interface GaugeByIDResponseAminoMsg {
    type: "osmosis/incentives/gauge-by-id-response";
    value: GaugeByIDResponseAmino;
}
export interface GaugeByIDResponseSDKType {
    gauge?: GaugeSDKType;
}
export interface GaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface GaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesRequest";
    value: Uint8Array;
}
export interface GaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface GaugesRequestAminoMsg {
    type: "osmosis/incentives/gauges-request";
    value: GaugesRequestAmino;
}
export interface GaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface GaugesResponse {
    /** Upcoming and active gauges */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface GaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.GaugesResponse";
    value: Uint8Array;
}
export interface GaugesResponseAmino {
    /** Upcoming and active gauges */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface GaugesResponseAminoMsg {
    type: "osmosis/incentives/gauges-response";
    value: GaugesResponseAmino;
}
export interface GaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesRequest";
    value: Uint8Array;
}
export interface ActiveGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-request";
    value: ActiveGaugesRequestAmino;
}
export interface ActiveGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesResponse {
    /** Active gagues only */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesResponse";
    value: Uint8Array;
}
export interface ActiveGaugesResponseAmino {
    /** Active gagues only */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-response";
    value: ActiveGaugesResponseAmino;
}
export interface ActiveGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface ActiveGaugesPerDenomRequest {
    /** Desired denom when querying active gagues */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface ActiveGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomRequestAmino {
    /** Desired denom when querying active gagues */
    denom?: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface ActiveGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-request";
    value: ActiveGaugesPerDenomRequestAmino;
}
export interface ActiveGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface ActiveGaugesPerDenomResponse {
    /** Active gagues that match denom in query */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface ActiveGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.ActiveGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface ActiveGaugesPerDenomResponseAmino {
    /** Active gagues that match denom in query */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface ActiveGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/active-gauges-per-denom-response";
    value: ActiveGaugesPerDenomResponseAmino;
}
export interface ActiveGaugesPerDenomResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesRequest {
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesRequestAmino {
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-request";
    value: UpcomingGaugesRequestAmino;
}
export interface UpcomingGaugesRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesResponse {
    /** Gauges whose distribution is upcoming */
    data: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesResponseAmino {
    /** Gauges whose distribution is upcoming */
    data?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-response";
    value: UpcomingGaugesResponseAmino;
}
export interface UpcomingGaugesResponseSDKType {
    data: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface UpcomingGaugesPerDenomRequest {
    /** Filter for upcoming gagues that match specific denom */
    denom: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequest;
}
export interface UpcomingGaugesPerDenomRequestProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomRequest";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomRequestAmino {
    /** Filter for upcoming gagues that match specific denom */
    denom?: string;
    /** Pagination defines pagination for the request */
    pagination?: PageRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-request";
    value: UpcomingGaugesPerDenomRequestAmino;
}
export interface UpcomingGaugesPerDenomRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
export interface UpcomingGaugesPerDenomResponse {
    /** Upcoming gagues that match denom in query */
    upcomingGauges: Gauge[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponse;
}
export interface UpcomingGaugesPerDenomResponseProtoMsg {
    typeUrl: "/osmosis.incentives.UpcomingGaugesPerDenomResponse";
    value: Uint8Array;
}
export interface UpcomingGaugesPerDenomResponseAmino {
    /** Upcoming gagues that match denom in query */
    upcoming_gauges?: GaugeAmino[];
    /** Pagination defines pagination for the response */
    pagination?: PageResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseAminoMsg {
    type: "osmosis/incentives/upcoming-gauges-per-denom-response";
    value: UpcomingGaugesPerDenomResponseAmino;
}
export interface UpcomingGaugesPerDenomResponseSDKType {
    upcoming_gauges: GaugeSDKType[];
    pagination?: PageResponseSDKType;
}
export interface RewardsEstRequest {
    /** Address that is being queried for future estimated rewards */
    owner: string;
    /** Lock IDs included in future reward estimation */
    lockIds: bigint[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    endEpoch: bigint;
}
export interface RewardsEstRequestProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstRequest";
    value: Uint8Array;
}
export interface RewardsEstRequestAmino {
    /** Address that is being queried for future estimated rewards */
    owner?: string;
    /** Lock IDs included in future reward estimation */
    lock_ids?: string[];
    /**
     * Upper time limit of reward estimation
     * Lower limit is current epoch
     */
    end_epoch?: string;
}
export interface RewardsEstRequestAminoMsg {
    type: "osmosis/incentives/rewards-est-request";
    value: RewardsEstRequestAmino;
}
export interface RewardsEstRequestSDKType {
    owner: string;
    lock_ids: bigint[];
    end_epoch: bigint;
}
export interface RewardsEstResponse {
    /**
     * Estimated coin rewards that will be received at provided address
     * from specified locks between current time and end epoch
     */
    coins: Coin[];
}
export interface RewardsEstResponseProtoMsg {
    typeUrl: "/osmosis.incentives.RewardsEstResponse";
    value: Uint8Array;
}
export interface RewardsEstResponseAmino {
    /**
     * Estimated coin rewards that will be received at provided address
     * from specified locks between current time and end epoch
     */
    coins?: CoinAmino[];
}
export interface RewardsEstResponseAminoMsg {
    type: "osmosis/incentives/rewards-est-response";
    value: RewardsEstResponseAmino;
}
export interface RewardsEstResponseSDKType {
    coins: CoinSDKType[];
}
export interface QueryLockableDurationsRequest {
}
export interface QueryLockableDurationsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsRequest";
    value: Uint8Array;
}
export interface QueryLockableDurationsRequestAmino {
}
export interface QueryLockableDurationsRequestAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-request";
    value: QueryLockableDurationsRequestAmino;
}
export interface QueryLockableDurationsRequestSDKType {
}
export interface QueryLockableDurationsResponse {
    /** Time durations that users can lock coins for in order to receive rewards */
    lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryLockableDurationsResponse";
    value: Uint8Array;
}
export interface QueryLockableDurationsResponseAmino {
    /** Time durations that users can lock coins for in order to receive rewards */
    lockable_durations?: DurationAmino[];
}
export interface QueryLockableDurationsResponseAminoMsg {
    type: "osmosis/incentives/query-lockable-durations-response";
    value: QueryLockableDurationsResponseAmino;
}
export interface QueryLockableDurationsResponseSDKType {
    lockable_durations: DurationSDKType[];
}
export interface QueryAllGroupsRequest {
}
export interface QueryAllGroupsRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsRequest";
    value: Uint8Array;
}
export interface QueryAllGroupsRequestAmino {
}
export interface QueryAllGroupsRequestAminoMsg {
    type: "osmosis/incentives/query-all-groups-request";
    value: QueryAllGroupsRequestAmino;
}
export interface QueryAllGroupsRequestSDKType {
}
export interface QueryAllGroupsResponse {
    groups: Group[];
}
export interface QueryAllGroupsResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsResponse";
    value: Uint8Array;
}
export interface QueryAllGroupsResponseAmino {
    groups?: GroupAmino[];
}
export interface QueryAllGroupsResponseAminoMsg {
    type: "osmosis/incentives/query-all-groups-response";
    value: QueryAllGroupsResponseAmino;
}
export interface QueryAllGroupsResponseSDKType {
    groups: GroupSDKType[];
}
export interface QueryAllGroupsGaugesRequest {
}
export interface QueryAllGroupsGaugesRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesRequest";
    value: Uint8Array;
}
export interface QueryAllGroupsGaugesRequestAmino {
}
export interface QueryAllGroupsGaugesRequestAminoMsg {
    type: "osmosis/incentives/query-all-groups-gauges-request";
    value: QueryAllGroupsGaugesRequestAmino;
}
export interface QueryAllGroupsGaugesRequestSDKType {
}
export interface QueryAllGroupsGaugesResponse {
    gauges: Gauge[];
}
export interface QueryAllGroupsGaugesResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsGaugesResponse";
    value: Uint8Array;
}
export interface QueryAllGroupsGaugesResponseAmino {
    gauges?: GaugeAmino[];
}
export interface QueryAllGroupsGaugesResponseAminoMsg {
    type: "osmosis/incentives/query-all-groups-gauges-response";
    value: QueryAllGroupsGaugesResponseAmino;
}
export interface QueryAllGroupsGaugesResponseSDKType {
    gauges: GaugeSDKType[];
}
export interface QueryAllGroupsWithGaugeRequest {
}
export interface QueryAllGroupsWithGaugeRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeRequest";
    value: Uint8Array;
}
export interface QueryAllGroupsWithGaugeRequestAmino {
}
export interface QueryAllGroupsWithGaugeRequestAminoMsg {
    type: "osmosis/incentives/query-all-groups-with-gauge-request";
    value: QueryAllGroupsWithGaugeRequestAmino;
}
export interface QueryAllGroupsWithGaugeRequestSDKType {
}
export interface QueryAllGroupsWithGaugeResponse {
    groupsWithGauge: GroupsWithGauge[];
}
export interface QueryAllGroupsWithGaugeResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryAllGroupsWithGaugeResponse";
    value: Uint8Array;
}
export interface QueryAllGroupsWithGaugeResponseAmino {
    groups_with_gauge?: GroupsWithGaugeAmino[];
}
export interface QueryAllGroupsWithGaugeResponseAminoMsg {
    type: "osmosis/incentives/query-all-groups-with-gauge-response";
    value: QueryAllGroupsWithGaugeResponseAmino;
}
export interface QueryAllGroupsWithGaugeResponseSDKType {
    groups_with_gauge: GroupsWithGaugeSDKType[];
}
export interface QueryGroupByGroupGaugeIDRequest {
    id: bigint;
}
export interface QueryGroupByGroupGaugeIDRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDRequest";
    value: Uint8Array;
}
export interface QueryGroupByGroupGaugeIDRequestAmino {
    id?: string;
}
export interface QueryGroupByGroupGaugeIDRequestAminoMsg {
    type: "osmosis/incentives/query-group-by-group-gauge-id-request";
    value: QueryGroupByGroupGaugeIDRequestAmino;
}
export interface QueryGroupByGroupGaugeIDRequestSDKType {
    id: bigint;
}
export interface QueryGroupByGroupGaugeIDResponse {
    group: Group;
}
export interface QueryGroupByGroupGaugeIDResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryGroupByGroupGaugeIDResponse";
    value: Uint8Array;
}
export interface QueryGroupByGroupGaugeIDResponseAmino {
    group?: GroupAmino;
}
export interface QueryGroupByGroupGaugeIDResponseAminoMsg {
    type: "osmosis/incentives/query-group-by-group-gauge-id-response";
    value: QueryGroupByGroupGaugeIDResponseAmino;
}
export interface QueryGroupByGroupGaugeIDResponseSDKType {
    group: GroupSDKType;
}
export interface QueryCurrentWeightByGroupGaugeIDRequest {
    groupGaugeId: bigint;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestProtoMsg {
    typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDRequest";
    value: Uint8Array;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestAmino {
    group_gauge_id?: string;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestAminoMsg {
    type: "osmosis/incentives/query-current-weight-by-group-gauge-id-request";
    value: QueryCurrentWeightByGroupGaugeIDRequestAmino;
}
export interface QueryCurrentWeightByGroupGaugeIDRequestSDKType {
    group_gauge_id: bigint;
}
export interface QueryCurrentWeightByGroupGaugeIDResponse {
    gaugeWeight: GaugeWeight[];
}
export interface QueryCurrentWeightByGroupGaugeIDResponseProtoMsg {
    typeUrl: "/osmosis.incentives.QueryCurrentWeightByGroupGaugeIDResponse";
    value: Uint8Array;
}
export interface QueryCurrentWeightByGroupGaugeIDResponseAmino {
    gauge_weight?: GaugeWeightAmino[];
}
export interface QueryCurrentWeightByGroupGaugeIDResponseAminoMsg {
    type: "osmosis/incentives/query-current-weight-by-group-gauge-id-response";
    value: QueryCurrentWeightByGroupGaugeIDResponseAmino;
}
export interface QueryCurrentWeightByGroupGaugeIDResponseSDKType {
    gauge_weight: GaugeWeightSDKType[];
}
export interface GaugeWeight {
    gaugeId: bigint;
    weightRatio: string;
}
export interface GaugeWeightProtoMsg {
    typeUrl: "/osmosis.incentives.GaugeWeight";
    value: Uint8Array;
}
export interface GaugeWeightAmino {
    gauge_id?: string;
    weight_ratio?: string;
}
export interface GaugeWeightAminoMsg {
    type: "osmosis/incentives/gauge-weight";
    value: GaugeWeightAmino;
}
export interface GaugeWeightSDKType {
    gauge_id: bigint;
    weight_ratio: string;
}
export declare const ModuleToDistributeCoinsRequest: {
    typeUrl: string;
    encode(_: ModuleToDistributeCoinsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ModuleToDistributeCoinsRequest;
    fromPartial(_: Partial<ModuleToDistributeCoinsRequest>): ModuleToDistributeCoinsRequest;
    fromAmino(_: ModuleToDistributeCoinsRequestAmino): ModuleToDistributeCoinsRequest;
    toAmino(_: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsRequestAminoMsg): ModuleToDistributeCoinsRequest;
    toAminoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsRequestProtoMsg): ModuleToDistributeCoinsRequest;
    toProto(message: ModuleToDistributeCoinsRequest): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsRequest): ModuleToDistributeCoinsRequestProtoMsg;
};
export declare const ModuleToDistributeCoinsResponse: {
    typeUrl: string;
    encode(message: ModuleToDistributeCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ModuleToDistributeCoinsResponse;
    fromPartial(object: Partial<ModuleToDistributeCoinsResponse>): ModuleToDistributeCoinsResponse;
    fromAmino(object: ModuleToDistributeCoinsResponseAmino): ModuleToDistributeCoinsResponse;
    toAmino(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAmino;
    fromAminoMsg(object: ModuleToDistributeCoinsResponseAminoMsg): ModuleToDistributeCoinsResponse;
    toAminoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseAminoMsg;
    fromProtoMsg(message: ModuleToDistributeCoinsResponseProtoMsg): ModuleToDistributeCoinsResponse;
    toProto(message: ModuleToDistributeCoinsResponse): Uint8Array;
    toProtoMsg(message: ModuleToDistributeCoinsResponse): ModuleToDistributeCoinsResponseProtoMsg;
};
export declare const GaugeByIDRequest: {
    typeUrl: string;
    encode(message: GaugeByIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GaugeByIDRequest;
    fromPartial(object: Partial<GaugeByIDRequest>): GaugeByIDRequest;
    fromAmino(object: GaugeByIDRequestAmino): GaugeByIDRequest;
    toAmino(message: GaugeByIDRequest): GaugeByIDRequestAmino;
    fromAminoMsg(object: GaugeByIDRequestAminoMsg): GaugeByIDRequest;
    toAminoMsg(message: GaugeByIDRequest): GaugeByIDRequestAminoMsg;
    fromProtoMsg(message: GaugeByIDRequestProtoMsg): GaugeByIDRequest;
    toProto(message: GaugeByIDRequest): Uint8Array;
    toProtoMsg(message: GaugeByIDRequest): GaugeByIDRequestProtoMsg;
};
export declare const GaugeByIDResponse: {
    typeUrl: string;
    encode(message: GaugeByIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GaugeByIDResponse;
    fromPartial(object: Partial<GaugeByIDResponse>): GaugeByIDResponse;
    fromAmino(object: GaugeByIDResponseAmino): GaugeByIDResponse;
    toAmino(message: GaugeByIDResponse): GaugeByIDResponseAmino;
    fromAminoMsg(object: GaugeByIDResponseAminoMsg): GaugeByIDResponse;
    toAminoMsg(message: GaugeByIDResponse): GaugeByIDResponseAminoMsg;
    fromProtoMsg(message: GaugeByIDResponseProtoMsg): GaugeByIDResponse;
    toProto(message: GaugeByIDResponse): Uint8Array;
    toProtoMsg(message: GaugeByIDResponse): GaugeByIDResponseProtoMsg;
};
export declare const GaugesRequest: {
    typeUrl: string;
    encode(message: GaugesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GaugesRequest;
    fromPartial(object: Partial<GaugesRequest>): GaugesRequest;
    fromAmino(object: GaugesRequestAmino): GaugesRequest;
    toAmino(message: GaugesRequest): GaugesRequestAmino;
    fromAminoMsg(object: GaugesRequestAminoMsg): GaugesRequest;
    toAminoMsg(message: GaugesRequest): GaugesRequestAminoMsg;
    fromProtoMsg(message: GaugesRequestProtoMsg): GaugesRequest;
    toProto(message: GaugesRequest): Uint8Array;
    toProtoMsg(message: GaugesRequest): GaugesRequestProtoMsg;
};
export declare const GaugesResponse: {
    typeUrl: string;
    encode(message: GaugesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GaugesResponse;
    fromPartial(object: Partial<GaugesResponse>): GaugesResponse;
    fromAmino(object: GaugesResponseAmino): GaugesResponse;
    toAmino(message: GaugesResponse): GaugesResponseAmino;
    fromAminoMsg(object: GaugesResponseAminoMsg): GaugesResponse;
    toAminoMsg(message: GaugesResponse): GaugesResponseAminoMsg;
    fromProtoMsg(message: GaugesResponseProtoMsg): GaugesResponse;
    toProto(message: GaugesResponse): Uint8Array;
    toProtoMsg(message: GaugesResponse): GaugesResponseProtoMsg;
};
export declare const ActiveGaugesRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveGaugesRequest;
    fromPartial(object: Partial<ActiveGaugesRequest>): ActiveGaugesRequest;
    fromAmino(object: ActiveGaugesRequestAmino): ActiveGaugesRequest;
    toAmino(message: ActiveGaugesRequest): ActiveGaugesRequestAmino;
    fromAminoMsg(object: ActiveGaugesRequestAminoMsg): ActiveGaugesRequest;
    toAminoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesRequestProtoMsg): ActiveGaugesRequest;
    toProto(message: ActiveGaugesRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesRequest): ActiveGaugesRequestProtoMsg;
};
export declare const ActiveGaugesResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveGaugesResponse;
    fromPartial(object: Partial<ActiveGaugesResponse>): ActiveGaugesResponse;
    fromAmino(object: ActiveGaugesResponseAmino): ActiveGaugesResponse;
    toAmino(message: ActiveGaugesResponse): ActiveGaugesResponseAmino;
    fromAminoMsg(object: ActiveGaugesResponseAminoMsg): ActiveGaugesResponse;
    toAminoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesResponseProtoMsg): ActiveGaugesResponse;
    toProto(message: ActiveGaugesResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesResponse): ActiveGaugesResponseProtoMsg;
};
export declare const ActiveGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveGaugesPerDenomRequest;
    fromPartial(object: Partial<ActiveGaugesPerDenomRequest>): ActiveGaugesPerDenomRequest;
    fromAmino(object: ActiveGaugesPerDenomRequestAmino): ActiveGaugesPerDenomRequest;
    toAmino(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomRequestAminoMsg): ActiveGaugesPerDenomRequest;
    toAminoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomRequestProtoMsg): ActiveGaugesPerDenomRequest;
    toProto(message: ActiveGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomRequest): ActiveGaugesPerDenomRequestProtoMsg;
};
export declare const ActiveGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: ActiveGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActiveGaugesPerDenomResponse;
    fromPartial(object: Partial<ActiveGaugesPerDenomResponse>): ActiveGaugesPerDenomResponse;
    fromAmino(object: ActiveGaugesPerDenomResponseAmino): ActiveGaugesPerDenomResponse;
    toAmino(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAmino;
    fromAminoMsg(object: ActiveGaugesPerDenomResponseAminoMsg): ActiveGaugesPerDenomResponse;
    toAminoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: ActiveGaugesPerDenomResponseProtoMsg): ActiveGaugesPerDenomResponse;
    toProto(message: ActiveGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: ActiveGaugesPerDenomResponse): ActiveGaugesPerDenomResponseProtoMsg;
};
export declare const UpcomingGaugesRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingGaugesRequest;
    fromPartial(object: Partial<UpcomingGaugesRequest>): UpcomingGaugesRequest;
    fromAmino(object: UpcomingGaugesRequestAmino): UpcomingGaugesRequest;
    toAmino(message: UpcomingGaugesRequest): UpcomingGaugesRequestAmino;
    fromAminoMsg(object: UpcomingGaugesRequestAminoMsg): UpcomingGaugesRequest;
    toAminoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesRequestProtoMsg): UpcomingGaugesRequest;
    toProto(message: UpcomingGaugesRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesRequest): UpcomingGaugesRequestProtoMsg;
};
export declare const UpcomingGaugesResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingGaugesResponse;
    fromPartial(object: Partial<UpcomingGaugesResponse>): UpcomingGaugesResponse;
    fromAmino(object: UpcomingGaugesResponseAmino): UpcomingGaugesResponse;
    toAmino(message: UpcomingGaugesResponse): UpcomingGaugesResponseAmino;
    fromAminoMsg(object: UpcomingGaugesResponseAminoMsg): UpcomingGaugesResponse;
    toAminoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesResponseProtoMsg): UpcomingGaugesResponse;
    toProto(message: UpcomingGaugesResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesResponse): UpcomingGaugesResponseProtoMsg;
};
export declare const UpcomingGaugesPerDenomRequest: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingGaugesPerDenomRequest;
    fromPartial(object: Partial<UpcomingGaugesPerDenomRequest>): UpcomingGaugesPerDenomRequest;
    fromAmino(object: UpcomingGaugesPerDenomRequestAmino): UpcomingGaugesPerDenomRequest;
    toAmino(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomRequestAminoMsg): UpcomingGaugesPerDenomRequest;
    toAminoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomRequestProtoMsg): UpcomingGaugesPerDenomRequest;
    toProto(message: UpcomingGaugesPerDenomRequest): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomRequest): UpcomingGaugesPerDenomRequestProtoMsg;
};
export declare const UpcomingGaugesPerDenomResponse: {
    typeUrl: string;
    encode(message: UpcomingGaugesPerDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpcomingGaugesPerDenomResponse;
    fromPartial(object: Partial<UpcomingGaugesPerDenomResponse>): UpcomingGaugesPerDenomResponse;
    fromAmino(object: UpcomingGaugesPerDenomResponseAmino): UpcomingGaugesPerDenomResponse;
    toAmino(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAmino;
    fromAminoMsg(object: UpcomingGaugesPerDenomResponseAminoMsg): UpcomingGaugesPerDenomResponse;
    toAminoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseAminoMsg;
    fromProtoMsg(message: UpcomingGaugesPerDenomResponseProtoMsg): UpcomingGaugesPerDenomResponse;
    toProto(message: UpcomingGaugesPerDenomResponse): Uint8Array;
    toProtoMsg(message: UpcomingGaugesPerDenomResponse): UpcomingGaugesPerDenomResponseProtoMsg;
};
export declare const RewardsEstRequest: {
    typeUrl: string;
    encode(message: RewardsEstRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardsEstRequest;
    fromPartial(object: Partial<RewardsEstRequest>): RewardsEstRequest;
    fromAmino(object: RewardsEstRequestAmino): RewardsEstRequest;
    toAmino(message: RewardsEstRequest): RewardsEstRequestAmino;
    fromAminoMsg(object: RewardsEstRequestAminoMsg): RewardsEstRequest;
    toAminoMsg(message: RewardsEstRequest): RewardsEstRequestAminoMsg;
    fromProtoMsg(message: RewardsEstRequestProtoMsg): RewardsEstRequest;
    toProto(message: RewardsEstRequest): Uint8Array;
    toProtoMsg(message: RewardsEstRequest): RewardsEstRequestProtoMsg;
};
export declare const RewardsEstResponse: {
    typeUrl: string;
    encode(message: RewardsEstResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardsEstResponse;
    fromPartial(object: Partial<RewardsEstResponse>): RewardsEstResponse;
    fromAmino(object: RewardsEstResponseAmino): RewardsEstResponse;
    toAmino(message: RewardsEstResponse): RewardsEstResponseAmino;
    fromAminoMsg(object: RewardsEstResponseAminoMsg): RewardsEstResponse;
    toAminoMsg(message: RewardsEstResponse): RewardsEstResponseAminoMsg;
    fromProtoMsg(message: RewardsEstResponseProtoMsg): RewardsEstResponse;
    toProto(message: RewardsEstResponse): Uint8Array;
    toProtoMsg(message: RewardsEstResponse): RewardsEstResponseProtoMsg;
};
export declare const QueryLockableDurationsRequest: {
    typeUrl: string;
    encode(_: QueryLockableDurationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLockableDurationsRequest;
    fromPartial(_: Partial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest;
    fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest;
    toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino;
    fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest;
    toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest;
    toProto(message: QueryLockableDurationsRequest): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg;
};
export declare const QueryLockableDurationsResponse: {
    typeUrl: string;
    encode(message: QueryLockableDurationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLockableDurationsResponse;
    fromPartial(object: Partial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse;
    fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse;
    toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino;
    fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse;
    toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg;
    fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse;
    toProto(message: QueryLockableDurationsResponse): Uint8Array;
    toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg;
};
export declare const QueryAllGroupsRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllGroupsRequest;
    fromPartial(_: Partial<QueryAllGroupsRequest>): QueryAllGroupsRequest;
    fromAmino(_: QueryAllGroupsRequestAmino): QueryAllGroupsRequest;
    toAmino(_: QueryAllGroupsRequest): QueryAllGroupsRequestAmino;
    fromAminoMsg(object: QueryAllGroupsRequestAminoMsg): QueryAllGroupsRequest;
    toAminoMsg(message: QueryAllGroupsRequest): QueryAllGroupsRequestAminoMsg;
    fromProtoMsg(message: QueryAllGroupsRequestProtoMsg): QueryAllGroupsRequest;
    toProto(message: QueryAllGroupsRequest): Uint8Array;
    toProtoMsg(message: QueryAllGroupsRequest): QueryAllGroupsRequestProtoMsg;
};
export declare const QueryAllGroupsResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllGroupsResponse;
    fromPartial(object: Partial<QueryAllGroupsResponse>): QueryAllGroupsResponse;
    fromAmino(object: QueryAllGroupsResponseAmino): QueryAllGroupsResponse;
    toAmino(message: QueryAllGroupsResponse): QueryAllGroupsResponseAmino;
    fromAminoMsg(object: QueryAllGroupsResponseAminoMsg): QueryAllGroupsResponse;
    toAminoMsg(message: QueryAllGroupsResponse): QueryAllGroupsResponseAminoMsg;
    fromProtoMsg(message: QueryAllGroupsResponseProtoMsg): QueryAllGroupsResponse;
    toProto(message: QueryAllGroupsResponse): Uint8Array;
    toProtoMsg(message: QueryAllGroupsResponse): QueryAllGroupsResponseProtoMsg;
};
export declare const QueryAllGroupsGaugesRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsGaugesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllGroupsGaugesRequest;
    fromPartial(_: Partial<QueryAllGroupsGaugesRequest>): QueryAllGroupsGaugesRequest;
    fromAmino(_: QueryAllGroupsGaugesRequestAmino): QueryAllGroupsGaugesRequest;
    toAmino(_: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestAmino;
    fromAminoMsg(object: QueryAllGroupsGaugesRequestAminoMsg): QueryAllGroupsGaugesRequest;
    toAminoMsg(message: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestAminoMsg;
    fromProtoMsg(message: QueryAllGroupsGaugesRequestProtoMsg): QueryAllGroupsGaugesRequest;
    toProto(message: QueryAllGroupsGaugesRequest): Uint8Array;
    toProtoMsg(message: QueryAllGroupsGaugesRequest): QueryAllGroupsGaugesRequestProtoMsg;
};
export declare const QueryAllGroupsGaugesResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsGaugesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllGroupsGaugesResponse;
    fromPartial(object: Partial<QueryAllGroupsGaugesResponse>): QueryAllGroupsGaugesResponse;
    fromAmino(object: QueryAllGroupsGaugesResponseAmino): QueryAllGroupsGaugesResponse;
    toAmino(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseAmino;
    fromAminoMsg(object: QueryAllGroupsGaugesResponseAminoMsg): QueryAllGroupsGaugesResponse;
    toAminoMsg(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseAminoMsg;
    fromProtoMsg(message: QueryAllGroupsGaugesResponseProtoMsg): QueryAllGroupsGaugesResponse;
    toProto(message: QueryAllGroupsGaugesResponse): Uint8Array;
    toProtoMsg(message: QueryAllGroupsGaugesResponse): QueryAllGroupsGaugesResponseProtoMsg;
};
export declare const QueryAllGroupsWithGaugeRequest: {
    typeUrl: string;
    encode(_: QueryAllGroupsWithGaugeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAllGroupsWithGaugeRequest;
    fromPartial(_: Partial<QueryAllGroupsWithGaugeRequest>): QueryAllGroupsWithGaugeRequest;
    fromAmino(_: QueryAllGroupsWithGaugeRequestAmino): QueryAllGroupsWithGaugeRequest;
    toAmino(_: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestAmino;
    fromAminoMsg(object: QueryAllGroupsWithGaugeRequestAminoMsg): QueryAllGroupsWithGaugeRequest;
    toAminoMsg(message: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestAminoMsg;
    fromProtoMsg(message: QueryAllGroupsWithGaugeRequestProtoMsg): QueryAllGroupsWithGaugeRequest;
    toProto(message: QueryAllGroupsWithGaugeRequest): Uint8Array;
    toProtoMsg(message: QueryAllGroupsWithGaugeRequest): QueryAllGroupsWithGaugeRequestProtoMsg;
};
export declare const QueryAllGroupsWithGaugeResponse: {
    typeUrl: string;
    encode(message: QueryAllGroupsWithGaugeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllGroupsWithGaugeResponse;
    fromPartial(object: Partial<QueryAllGroupsWithGaugeResponse>): QueryAllGroupsWithGaugeResponse;
    fromAmino(object: QueryAllGroupsWithGaugeResponseAmino): QueryAllGroupsWithGaugeResponse;
    toAmino(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseAmino;
    fromAminoMsg(object: QueryAllGroupsWithGaugeResponseAminoMsg): QueryAllGroupsWithGaugeResponse;
    toAminoMsg(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseAminoMsg;
    fromProtoMsg(message: QueryAllGroupsWithGaugeResponseProtoMsg): QueryAllGroupsWithGaugeResponse;
    toProto(message: QueryAllGroupsWithGaugeResponse): Uint8Array;
    toProtoMsg(message: QueryAllGroupsWithGaugeResponse): QueryAllGroupsWithGaugeResponseProtoMsg;
};
export declare const QueryGroupByGroupGaugeIDRequest: {
    typeUrl: string;
    encode(message: QueryGroupByGroupGaugeIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupByGroupGaugeIDRequest;
    fromPartial(object: Partial<QueryGroupByGroupGaugeIDRequest>): QueryGroupByGroupGaugeIDRequest;
    fromAmino(object: QueryGroupByGroupGaugeIDRequestAmino): QueryGroupByGroupGaugeIDRequest;
    toAmino(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestAmino;
    fromAminoMsg(object: QueryGroupByGroupGaugeIDRequestAminoMsg): QueryGroupByGroupGaugeIDRequest;
    toAminoMsg(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestAminoMsg;
    fromProtoMsg(message: QueryGroupByGroupGaugeIDRequestProtoMsg): QueryGroupByGroupGaugeIDRequest;
    toProto(message: QueryGroupByGroupGaugeIDRequest): Uint8Array;
    toProtoMsg(message: QueryGroupByGroupGaugeIDRequest): QueryGroupByGroupGaugeIDRequestProtoMsg;
};
export declare const QueryGroupByGroupGaugeIDResponse: {
    typeUrl: string;
    encode(message: QueryGroupByGroupGaugeIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGroupByGroupGaugeIDResponse;
    fromPartial(object: Partial<QueryGroupByGroupGaugeIDResponse>): QueryGroupByGroupGaugeIDResponse;
    fromAmino(object: QueryGroupByGroupGaugeIDResponseAmino): QueryGroupByGroupGaugeIDResponse;
    toAmino(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseAmino;
    fromAminoMsg(object: QueryGroupByGroupGaugeIDResponseAminoMsg): QueryGroupByGroupGaugeIDResponse;
    toAminoMsg(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseAminoMsg;
    fromProtoMsg(message: QueryGroupByGroupGaugeIDResponseProtoMsg): QueryGroupByGroupGaugeIDResponse;
    toProto(message: QueryGroupByGroupGaugeIDResponse): Uint8Array;
    toProtoMsg(message: QueryGroupByGroupGaugeIDResponse): QueryGroupByGroupGaugeIDResponseProtoMsg;
};
export declare const QueryCurrentWeightByGroupGaugeIDRequest: {
    typeUrl: string;
    encode(message: QueryCurrentWeightByGroupGaugeIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentWeightByGroupGaugeIDRequest;
    fromPartial(object: Partial<QueryCurrentWeightByGroupGaugeIDRequest>): QueryCurrentWeightByGroupGaugeIDRequest;
    fromAmino(object: QueryCurrentWeightByGroupGaugeIDRequestAmino): QueryCurrentWeightByGroupGaugeIDRequest;
    toAmino(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestAmino;
    fromAminoMsg(object: QueryCurrentWeightByGroupGaugeIDRequestAminoMsg): QueryCurrentWeightByGroupGaugeIDRequest;
    toAminoMsg(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestAminoMsg;
    fromProtoMsg(message: QueryCurrentWeightByGroupGaugeIDRequestProtoMsg): QueryCurrentWeightByGroupGaugeIDRequest;
    toProto(message: QueryCurrentWeightByGroupGaugeIDRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentWeightByGroupGaugeIDRequest): QueryCurrentWeightByGroupGaugeIDRequestProtoMsg;
};
export declare const QueryCurrentWeightByGroupGaugeIDResponse: {
    typeUrl: string;
    encode(message: QueryCurrentWeightByGroupGaugeIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentWeightByGroupGaugeIDResponse;
    fromPartial(object: Partial<QueryCurrentWeightByGroupGaugeIDResponse>): QueryCurrentWeightByGroupGaugeIDResponse;
    fromAmino(object: QueryCurrentWeightByGroupGaugeIDResponseAmino): QueryCurrentWeightByGroupGaugeIDResponse;
    toAmino(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseAmino;
    fromAminoMsg(object: QueryCurrentWeightByGroupGaugeIDResponseAminoMsg): QueryCurrentWeightByGroupGaugeIDResponse;
    toAminoMsg(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseAminoMsg;
    fromProtoMsg(message: QueryCurrentWeightByGroupGaugeIDResponseProtoMsg): QueryCurrentWeightByGroupGaugeIDResponse;
    toProto(message: QueryCurrentWeightByGroupGaugeIDResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentWeightByGroupGaugeIDResponse): QueryCurrentWeightByGroupGaugeIDResponseProtoMsg;
};
export declare const GaugeWeight: {
    typeUrl: string;
    encode(message: GaugeWeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GaugeWeight;
    fromPartial(object: Partial<GaugeWeight>): GaugeWeight;
    fromAmino(object: GaugeWeightAmino): GaugeWeight;
    toAmino(message: GaugeWeight): GaugeWeightAmino;
    fromAminoMsg(object: GaugeWeightAminoMsg): GaugeWeight;
    toAminoMsg(message: GaugeWeight): GaugeWeightAminoMsg;
    fromProtoMsg(message: GaugeWeightProtoMsg): GaugeWeight;
    toProto(message: GaugeWeight): Uint8Array;
    toProtoMsg(message: GaugeWeight): GaugeWeightProtoMsg;
};
