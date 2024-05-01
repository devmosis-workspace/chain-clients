import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { Series, seriesFromJSON } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Reward, RewardAmino, RewardSDKType } from "./rewards";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.rewards.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/gitopia.gitopia.rewards.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/gitopia.gitopia.rewards.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/gitopia.gitopia.rewards.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTasksRequest(): QueryTasksRequest {
  return {
    address: ""
  };
}
export const QueryTasksRequest = {
  typeUrl: "/gitopia.gitopia.rewards.QueryTasksRequest",
  encode(message: QueryTasksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryTasksRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryTasksRequest>): QueryTasksRequest {
    const message = createBaseQueryTasksRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTasksRequestAmino): QueryTasksRequest {
    const message = createBaseQueryTasksRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryTasksRequest): QueryTasksRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTasksRequestAminoMsg): QueryTasksRequest {
    return QueryTasksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTasksRequestProtoMsg): QueryTasksRequest {
    return QueryTasksRequest.decode(message.value);
  },
  toProto(message: QueryTasksRequest): Uint8Array {
    return QueryTasksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTasksRequest): QueryTasksRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryTasksRequest",
      value: QueryTasksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTasksResponse(): QueryTasksResponse {
  return {
    tasks: []
  };
}
export const QueryTasksResponse = {
  typeUrl: "/gitopia.gitopia.rewards.QueryTasksResponse",
  encode(message: QueryTasksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTasksResponse {
    return {
      tasks: Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTasksResponse>): QueryTasksResponse {
    const message = createBaseQueryTasksResponse();
    message.tasks = object.tasks?.map(e => Task.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTasksResponseAmino): QueryTasksResponse {
    const message = createBaseQueryTasksResponse();
    message.tasks = object.tasks?.map(e => Task.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTasksResponse): QueryTasksResponseAmino {
    const obj: any = {};
    if (message.tasks) {
      obj.tasks = message.tasks.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.tasks = message.tasks;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTasksResponseAminoMsg): QueryTasksResponse {
    return QueryTasksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTasksResponseProtoMsg): QueryTasksResponse {
    return QueryTasksResponse.decode(message.value);
  },
  toProto(message: QueryTasksResponse): Uint8Array {
    return QueryTasksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTasksResponse): QueryTasksResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryTasksResponse",
      value: QueryTasksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRewardRequest(): QueryGetRewardRequest {
  return {
    recipient: ""
  };
}
export const QueryGetRewardRequest = {
  typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardRequest",
  encode(message: QueryGetRewardRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRewardRequest {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRewardRequest>): QueryGetRewardRequest {
    const message = createBaseQueryGetRewardRequest();
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: QueryGetRewardRequestAmino): QueryGetRewardRequest {
    const message = createBaseQueryGetRewardRequest();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: QueryGetRewardRequest): QueryGetRewardRequestAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: QueryGetRewardRequestAminoMsg): QueryGetRewardRequest {
    return QueryGetRewardRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRewardRequestProtoMsg): QueryGetRewardRequest {
    return QueryGetRewardRequest.decode(message.value);
  },
  toProto(message: QueryGetRewardRequest): Uint8Array {
    return QueryGetRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRewardRequest): QueryGetRewardRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardRequest",
      value: QueryGetRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRewardResponseReward(): QueryGetRewardResponseReward {
  return {
    creator: "",
    series: 0,
    amount: Coin.fromPartial({}),
    claimedAmount: Coin.fromPartial({}),
    claimableAmount: Coin.fromPartial({}),
    remainingClaimableAmount: Coin.fromPartial({})
  };
}
export const QueryGetRewardResponseReward = {
  typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponseReward",
  encode(message: QueryGetRewardResponseReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.series !== 0) {
      writer.uint32(16).int32(message.series);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimedAmount !== undefined) {
      Coin.encode(message.claimedAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimableAmount !== undefined) {
      Coin.encode(message.claimableAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.remainingClaimableAmount !== undefined) {
      Coin.encode(message.remainingClaimableAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRewardResponseReward {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      series: isSet(object.series) ? seriesFromJSON(object.series) : -1,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      claimedAmount: isSet(object.claimedAmount) ? Coin.fromJSON(object.claimedAmount) : undefined,
      claimableAmount: isSet(object.claimableAmount) ? Coin.fromJSON(object.claimableAmount) : undefined,
      remainingClaimableAmount: isSet(object.remainingClaimableAmount) ? Coin.fromJSON(object.remainingClaimableAmount) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRewardResponseReward>): QueryGetRewardResponseReward {
    const message = createBaseQueryGetRewardResponseReward();
    message.creator = object.creator ?? "";
    message.series = object.series ?? 0;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
    message.claimableAmount = object.claimableAmount !== undefined && object.claimableAmount !== null ? Coin.fromPartial(object.claimableAmount) : undefined;
    message.remainingClaimableAmount = object.remainingClaimableAmount !== undefined && object.remainingClaimableAmount !== null ? Coin.fromPartial(object.remainingClaimableAmount) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRewardResponseRewardAmino): QueryGetRewardResponseReward {
    const message = createBaseQueryGetRewardResponseReward();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.series !== undefined && object.series !== null) {
      message.series = object.series;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = Coin.fromAmino(object.claimed_amount);
    }
    if (object.claimable_amount !== undefined && object.claimable_amount !== null) {
      message.claimableAmount = Coin.fromAmino(object.claimable_amount);
    }
    if (object.remaining_claimable_amount !== undefined && object.remaining_claimable_amount !== null) {
      message.remainingClaimableAmount = Coin.fromAmino(object.remaining_claimable_amount);
    }
    return message;
  },
  toAmino(message: QueryGetRewardResponseReward): QueryGetRewardResponseRewardAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.series = message.series === 0 ? undefined : message.series;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.claimed_amount = message.claimedAmount ? Coin.toAmino(message.claimedAmount) : undefined;
    obj.claimable_amount = message.claimableAmount ? Coin.toAmino(message.claimableAmount) : undefined;
    obj.remaining_claimable_amount = message.remainingClaimableAmount ? Coin.toAmino(message.remainingClaimableAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRewardResponseRewardAminoMsg): QueryGetRewardResponseReward {
    return QueryGetRewardResponseReward.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRewardResponseRewardProtoMsg): QueryGetRewardResponseReward {
    return QueryGetRewardResponseReward.decode(message.value);
  },
  toProto(message: QueryGetRewardResponseReward): Uint8Array {
    return QueryGetRewardResponseReward.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRewardResponseReward): QueryGetRewardResponseRewardProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponseReward",
      value: QueryGetRewardResponseReward.encode(message).finish()
    };
  }
};
function createBaseQueryGetRewardResponse(): QueryGetRewardResponse {
  return {
    recipient: "",
    rewards: []
  };
}
export const QueryGetRewardResponse = {
  typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponse",
  encode(message: QueryGetRewardResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    for (const v of message.rewards) {
      QueryGetRewardResponseReward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRewardResponse {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => QueryGetRewardResponseReward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryGetRewardResponse>): QueryGetRewardResponse {
    const message = createBaseQueryGetRewardResponse();
    message.recipient = object.recipient ?? "";
    message.rewards = object.rewards?.map(e => QueryGetRewardResponseReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetRewardResponseAmino): QueryGetRewardResponse {
    const message = createBaseQueryGetRewardResponse();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.rewards = object.rewards?.map(e => QueryGetRewardResponseReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetRewardResponse): QueryGetRewardResponseAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? QueryGetRewardResponseReward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetRewardResponseAminoMsg): QueryGetRewardResponse {
    return QueryGetRewardResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRewardResponseProtoMsg): QueryGetRewardResponse {
    return QueryGetRewardResponse.decode(message.value);
  },
  toProto(message: QueryGetRewardResponse): Uint8Array {
    return QueryGetRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRewardResponse): QueryGetRewardResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryGetRewardResponse",
      value: QueryGetRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRewardsRequest(): QueryAllRewardsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllRewardsRequest = {
  typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsRequest",
  encode(message: QueryAllRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRewardsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRewardsRequest>): QueryAllRewardsRequest {
    const message = createBaseQueryAllRewardsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRewardsRequestAmino): QueryAllRewardsRequest {
    const message = createBaseQueryAllRewardsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRewardsRequest): QueryAllRewardsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRewardsRequestAminoMsg): QueryAllRewardsRequest {
    return QueryAllRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRewardsRequestProtoMsg): QueryAllRewardsRequest {
    return QueryAllRewardsRequest.decode(message.value);
  },
  toProto(message: QueryAllRewardsRequest): Uint8Array {
    return QueryAllRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRewardsRequest): QueryAllRewardsRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsRequest",
      value: QueryAllRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRewardsResponse(): QueryAllRewardsResponse {
  return {
    rewards: [],
    pagination: undefined
  };
}
export const QueryAllRewardsResponse = {
  typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsResponse",
  encode(message: QueryAllRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      Reward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Reward.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRewardsResponse>): QueryAllRewardsResponse {
    const message = createBaseQueryAllRewardsResponse();
    message.rewards = object.rewards?.map(e => Reward.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRewardsResponseAmino): QueryAllRewardsResponse {
    const message = createBaseQueryAllRewardsResponse();
    message.rewards = object.rewards?.map(e => Reward.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRewardsResponse): QueryAllRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Reward.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRewardsResponseAminoMsg): QueryAllRewardsResponse {
    return QueryAllRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRewardsResponseProtoMsg): QueryAllRewardsResponse {
    return QueryAllRewardsResponse.decode(message.value);
  },
  toProto(message: QueryAllRewardsResponse): Uint8Array {
    return QueryAllRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRewardsResponse): QueryAllRewardsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.rewards.QueryAllRewardsResponse",
      value: QueryAllRewardsResponse.encode(message).finish()
    };
  }
};