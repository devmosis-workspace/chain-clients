import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { Series } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Reward, RewardAmino, RewardSDKType } from "./rewards";
import { BinaryWriter } from "../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryTasksRequest {
    address: string;
}
export interface QueryTasksRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryTasksRequest";
    value: Uint8Array;
}
export interface QueryTasksRequestAmino {
    address?: string;
}
export interface QueryTasksRequestAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryTasksRequest";
    value: QueryTasksRequestAmino;
}
export interface QueryTasksRequestSDKType {
    address: string;
}
export interface QueryTasksResponse {
    tasks: Task[];
}
export interface QueryTasksResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryTasksResponse";
    value: Uint8Array;
}
export interface QueryTasksResponseAmino {
    tasks?: TaskAmino[];
}
export interface QueryTasksResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryTasksResponse";
    value: QueryTasksResponseAmino;
}
export interface QueryTasksResponseSDKType {
    tasks: TaskSDKType[];
}
export interface QueryGetRewardRequest {
    recipient: string;
}
export interface QueryGetRewardRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardRequest";
    value: Uint8Array;
}
export interface QueryGetRewardRequestAmino {
    recipient?: string;
}
export interface QueryGetRewardRequestAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryGetRewardRequest";
    value: QueryGetRewardRequestAmino;
}
export interface QueryGetRewardRequestSDKType {
    recipient: string;
}
export interface QueryGetRewardResponseReward {
    creator: string;
    series: Series;
    amount: Coin;
    claimedAmount: Coin;
    claimableAmount: Coin;
    remainingClaimableAmount: Coin;
}
export interface QueryGetRewardResponseRewardProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponseReward";
    value: Uint8Array;
}
export interface QueryGetRewardResponseRewardAmino {
    creator?: string;
    series?: Series;
    amount?: CoinAmino;
    claimed_amount?: CoinAmino;
    claimable_amount?: CoinAmino;
    remaining_claimable_amount?: CoinAmino;
}
export interface QueryGetRewardResponseRewardAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryGetRewardResponseReward";
    value: QueryGetRewardResponseRewardAmino;
}
export interface QueryGetRewardResponseRewardSDKType {
    creator: string;
    series: Series;
    amount: CoinSDKType;
    claimed_amount: CoinSDKType;
    claimable_amount: CoinSDKType;
    remaining_claimable_amount: CoinSDKType;
}
export interface QueryGetRewardResponse {
    recipient: string;
    rewards: QueryGetRewardResponseReward[];
}
export interface QueryGetRewardResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponse";
    value: Uint8Array;
}
export interface QueryGetRewardResponseAmino {
    recipient?: string;
    rewards?: QueryGetRewardResponseRewardAmino[];
}
export interface QueryGetRewardResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryGetRewardResponse";
    value: QueryGetRewardResponseAmino;
}
export interface QueryGetRewardResponseSDKType {
    recipient: string;
    rewards: QueryGetRewardResponseRewardSDKType[];
}
export interface QueryAllRewardsRequest {
    pagination?: PageRequest;
}
export interface QueryAllRewardsRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsRequest";
    value: Uint8Array;
}
export interface QueryAllRewardsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllRewardsRequestAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryAllRewardsRequest";
    value: QueryAllRewardsRequestAmino;
}
export interface QueryAllRewardsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllRewardsResponse {
    rewards: Reward[];
    pagination?: PageResponse;
}
export interface QueryAllRewardsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsResponse";
    value: Uint8Array;
}
export interface QueryAllRewardsResponseAmino {
    rewards?: RewardAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRewardsResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.QueryAllRewardsResponse";
    value: QueryAllRewardsResponseAmino;
}
export interface QueryAllRewardsResponseSDKType {
    rewards: RewardSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryTasksRequest: {
    typeUrl: string;
    encode(message: QueryTasksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTasksRequest;
    fromPartial(object: Partial<QueryTasksRequest>): QueryTasksRequest;
    fromAmino(object: QueryTasksRequestAmino): QueryTasksRequest;
    toAmino(message: QueryTasksRequest): QueryTasksRequestAmino;
    fromAminoMsg(object: QueryTasksRequestAminoMsg): QueryTasksRequest;
    fromProtoMsg(message: QueryTasksRequestProtoMsg): QueryTasksRequest;
    toProto(message: QueryTasksRequest): Uint8Array;
    toProtoMsg(message: QueryTasksRequest): QueryTasksRequestProtoMsg;
};
export declare const QueryTasksResponse: {
    typeUrl: string;
    encode(message: QueryTasksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTasksResponse;
    fromPartial(object: Partial<QueryTasksResponse>): QueryTasksResponse;
    fromAmino(object: QueryTasksResponseAmino): QueryTasksResponse;
    toAmino(message: QueryTasksResponse): QueryTasksResponseAmino;
    fromAminoMsg(object: QueryTasksResponseAminoMsg): QueryTasksResponse;
    fromProtoMsg(message: QueryTasksResponseProtoMsg): QueryTasksResponse;
    toProto(message: QueryTasksResponse): Uint8Array;
    toProtoMsg(message: QueryTasksResponse): QueryTasksResponseProtoMsg;
};
export declare const QueryGetRewardRequest: {
    typeUrl: string;
    encode(message: QueryGetRewardRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRewardRequest;
    fromPartial(object: Partial<QueryGetRewardRequest>): QueryGetRewardRequest;
    fromAmino(object: QueryGetRewardRequestAmino): QueryGetRewardRequest;
    toAmino(message: QueryGetRewardRequest): QueryGetRewardRequestAmino;
    fromAminoMsg(object: QueryGetRewardRequestAminoMsg): QueryGetRewardRequest;
    fromProtoMsg(message: QueryGetRewardRequestProtoMsg): QueryGetRewardRequest;
    toProto(message: QueryGetRewardRequest): Uint8Array;
    toProtoMsg(message: QueryGetRewardRequest): QueryGetRewardRequestProtoMsg;
};
export declare const QueryGetRewardResponseReward: {
    typeUrl: string;
    encode(message: QueryGetRewardResponseReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRewardResponseReward;
    fromPartial(object: Partial<QueryGetRewardResponseReward>): QueryGetRewardResponseReward;
    fromAmino(object: QueryGetRewardResponseRewardAmino): QueryGetRewardResponseReward;
    toAmino(message: QueryGetRewardResponseReward): QueryGetRewardResponseRewardAmino;
    fromAminoMsg(object: QueryGetRewardResponseRewardAminoMsg): QueryGetRewardResponseReward;
    fromProtoMsg(message: QueryGetRewardResponseRewardProtoMsg): QueryGetRewardResponseReward;
    toProto(message: QueryGetRewardResponseReward): Uint8Array;
    toProtoMsg(message: QueryGetRewardResponseReward): QueryGetRewardResponseRewardProtoMsg;
};
export declare const QueryGetRewardResponse: {
    typeUrl: string;
    encode(message: QueryGetRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRewardResponse;
    fromPartial(object: Partial<QueryGetRewardResponse>): QueryGetRewardResponse;
    fromAmino(object: QueryGetRewardResponseAmino): QueryGetRewardResponse;
    toAmino(message: QueryGetRewardResponse): QueryGetRewardResponseAmino;
    fromAminoMsg(object: QueryGetRewardResponseAminoMsg): QueryGetRewardResponse;
    fromProtoMsg(message: QueryGetRewardResponseProtoMsg): QueryGetRewardResponse;
    toProto(message: QueryGetRewardResponse): Uint8Array;
    toProtoMsg(message: QueryGetRewardResponse): QueryGetRewardResponseProtoMsg;
};
export declare const QueryAllRewardsRequest: {
    typeUrl: string;
    encode(message: QueryAllRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRewardsRequest;
    fromPartial(object: Partial<QueryAllRewardsRequest>): QueryAllRewardsRequest;
    fromAmino(object: QueryAllRewardsRequestAmino): QueryAllRewardsRequest;
    toAmino(message: QueryAllRewardsRequest): QueryAllRewardsRequestAmino;
    fromAminoMsg(object: QueryAllRewardsRequestAminoMsg): QueryAllRewardsRequest;
    fromProtoMsg(message: QueryAllRewardsRequestProtoMsg): QueryAllRewardsRequest;
    toProto(message: QueryAllRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryAllRewardsRequest): QueryAllRewardsRequestProtoMsg;
};
export declare const QueryAllRewardsResponse: {
    typeUrl: string;
    encode(message: QueryAllRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRewardsResponse;
    fromPartial(object: Partial<QueryAllRewardsResponse>): QueryAllRewardsResponse;
    fromAmino(object: QueryAllRewardsResponseAmino): QueryAllRewardsResponse;
    toAmino(message: QueryAllRewardsResponse): QueryAllRewardsResponseAmino;
    fromAminoMsg(object: QueryAllRewardsResponseAminoMsg): QueryAllRewardsResponse;
    fromProtoMsg(message: QueryAllRewardsResponseProtoMsg): QueryAllRewardsResponse;
    toProto(message: QueryAllRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryAllRewardsResponse): QueryAllRewardsResponseProtoMsg;
};
