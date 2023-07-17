import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Unbonding, UnbondingSDKType } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
  params?: Params;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryPendingRewards defines the request structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewards {
  address: string;
}
/** QueryPendingRewards defines the request structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsSDKType {
  address: string;
}
/** QueryPendingRewardsResponse defines the response structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsResponse {
  rewards: Coin[];
}
/** QueryPendingRewardsResponse defines the response structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsResponseSDKType {
  rewards: CoinSDKType[];
}
/** QueryAccountBonds defines the request structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBonds {
  address: string;
}
/** QueryAccountBonds defines the request structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBondsSDKType {
  address: string;
}
/** QueryAccountBondsResponse defines the response structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBondsResponse {
  bonded: Coin[];
  unbonding: Coin[];
  unbondings: Unbonding[];
}
/** QueryAccountBondsResponse defines the response structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBondsResponseSDKType {
  bonded: CoinSDKType[];
  unbonding: CoinSDKType[];
  unbondings: UnbondingSDKType[];
}
/** QueryTotalBonded defines the request structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBonded {
  /** denom is an optional field which causes the query to return the totals of only one uToken */
  denom: string;
}
/** QueryTotalBonded defines the request structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedSDKType {
  denom: string;
}
/** QueryTotalBondedResponse defines the response structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedResponse {
  bonded: Coin[];
}
/** QueryTotalBondedResponse defines the response structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedResponseSDKType {
  bonded: CoinSDKType[];
}
/** QueryTotalUnbonding defines the request structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbonding {
  /** denom is an optional field which causes the query to return the totals of only one uToken */
  denom: string;
}
/** QueryTotalUnbonding defines the request structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingSDKType {
  denom: string;
}
/** QueryTotalUnbondingResponse defines the response structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingResponse {
  unbonding: Coin[];
}
/** QueryTotalUnbondingResponse defines the response structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingResponseSDKType {
  unbonding: CoinSDKType[];
}
/**
 * QueryUpcomingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentivePrograms {}
/**
 * QueryUpcomingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsSDKType {}
/**
 * QueryUpcomingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsResponse {
  programs: IncentiveProgram[];
}
/**
 * QueryUpcomingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsResponseSDKType {
  programs: IncentiveProgramSDKType[];
}
/**
 * QueryOngoingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentivePrograms {}
/**
 * QueryOngoingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsSDKType {}
/**
 * QueryOngoingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsResponse {
  programs: IncentiveProgram[];
}
/**
 * QueryOngoingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsResponseSDKType {
  programs: IncentiveProgramSDKType[];
}
/**
 * QueryCompletedIncentivePrograms defines the request structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentivePrograms {}
/**
 * QueryCompletedIncentivePrograms defines the request structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsSDKType {}
/**
 * QueryCompletedIncentiveProgramsResponse defines the response structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsResponse {
  programs: IncentiveProgram[];
}
/**
 * QueryCompletedIncentiveProgramsResponse defines the response structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsResponseSDKType {
  programs: IncentiveProgramSDKType[];
}
/**
 * QueryIncentiveProgram defines the request structure for the IncentiveProgram
 * gRPC service handler.
 */
export interface QueryIncentiveProgram {
  /** ID specifies which program to query for */
  id: number;
}
/**
 * QueryIncentiveProgram defines the request structure for the IncentiveProgram
 * gRPC service handler.
 */
export interface QueryIncentiveProgramSDKType {
  id: number;
}
/**
 * QueryIncentivePrograResponse defines the response structure for the
 * IncentiveProgram gRPC service handler.
 */
export interface QueryIncentiveProgramResponse {
  program?: IncentiveProgram;
}
/**
 * QueryIncentivePrograResponse defines the response structure for the
 * IncentiveProgram gRPC service handler.
 */
export interface QueryIncentiveProgramResponseSDKType {
  program?: IncentiveProgramSDKType;
}
/** QueryCurrentRates defines the request structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRates {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken: string;
}
/** QueryCurrentRates defines the request structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesSDKType {
  uToken: string;
}
/** QueryCurrentRatesResponse defines the response structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesResponse {
  /**
   * Reference Bond is an amount of bonded uTokens (usually 10^exponent) whose current rewards are being
   * calculated. This amount can be used to compute an individual user's rewards: for example, if a user has
   * 2.5x the reference amount currently bonded, then they would receive 2.5x the rewards below annually
   * at current rates.
   */
  referenceBond?: Coin;
  /**
   * Rewards are the amount of base token rewards that the reference amount of bonded uTokens would earn
   * if current rates continued for a full year.
   */
  rewards: Coin[];
}
/** QueryCurrentRatesResponse defines the response structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesResponseSDKType {
  reference_bond?: CoinSDKType;
  rewards: CoinSDKType[];
}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTime {}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTimeSDKType {}
/**
 * QueryLastRewardTimeResponse defines the response structure for the LastRewardTime gRPC
 * service handler.
 */
export interface QueryLastRewardTimeResponse {
  time: Long;
}
/**
 * QueryLastRewardTimeResponse defines the response structure for the LastRewardTime gRPC
 * service handler.
 */
export interface QueryLastRewardTimeResponseSDKType {
  time: Long;
}
/** QueryActualRates defines the request structure for the ActualRates gRPC service handler. */
export interface QueryActualRates {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken: string;
}
/** QueryActualRates defines the request structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesSDKType {
  uToken: string;
}
/** QueryActualRatesResponse defines the response structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesResponse {
  /** APY is the oracle price-adjusted APY of the bonded uToken. */
  APY: string;
}
/** QueryActualRatesResponse defines the response structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesResponseSDKType {
  APY: string;
}
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  encode(_: QueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryPendingRewards(): QueryPendingRewards {
  return {
    address: ""
  };
}
export const QueryPendingRewards = {
  encode(message: QueryPendingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingRewards {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryPendingRewards>): QueryPendingRewards {
    const message = createBaseQueryPendingRewards();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryPendingRewardsResponse(): QueryPendingRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryPendingRewardsResponse = {
  encode(message: QueryPendingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPendingRewardsResponse>): QueryPendingRewardsResponse {
    const message = createBaseQueryPendingRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAccountBonds(): QueryAccountBonds {
  return {
    address: ""
  };
}
export const QueryAccountBonds = {
  encode(message: QueryAccountBonds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBonds {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryAccountBonds>): QueryAccountBonds {
    const message = createBaseQueryAccountBonds();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryAccountBondsResponse(): QueryAccountBondsResponse {
  return {
    bonded: [],
    unbonding: [],
    unbondings: []
  };
}
export const QueryAccountBondsResponse = {
  encode(message: QueryAccountBondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bonded) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbonding) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unbondings) {
      Unbonding.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountBondsResponse {
    return {
      bonded: Array.isArray(object?.bonded) ? object.bonded.map((e: any) => Coin.fromJSON(e)) : [],
      unbonding: Array.isArray(object?.unbonding) ? object.unbonding.map((e: any) => Coin.fromJSON(e)) : [],
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => Unbonding.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAccountBondsResponse>): QueryAccountBondsResponse {
    const message = createBaseQueryAccountBondsResponse();
    message.bonded = object.bonded?.map(e => Coin.fromPartial(e)) || [];
    message.unbonding = object.unbonding?.map(e => Coin.fromPartial(e)) || [];
    message.unbondings = object.unbondings?.map(e => Unbonding.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTotalBonded(): QueryTotalBonded {
  return {
    denom: ""
  };
}
export const QueryTotalBonded = {
  encode(message: QueryTotalBonded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBonded {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalBonded>): QueryTotalBonded {
    const message = createBaseQueryTotalBonded();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryTotalBondedResponse(): QueryTotalBondedResponse {
  return {
    bonded: []
  };
}
export const QueryTotalBondedResponse = {
  encode(message: QueryTotalBondedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bonded) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBondedResponse {
    return {
      bonded: Array.isArray(object?.bonded) ? object.bonded.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalBondedResponse>): QueryTotalBondedResponse {
    const message = createBaseQueryTotalBondedResponse();
    message.bonded = object.bonded?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTotalUnbonding(): QueryTotalUnbonding {
  return {
    denom: ""
  };
}
export const QueryTotalUnbonding = {
  encode(message: QueryTotalUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalUnbonding {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTotalUnbonding>): QueryTotalUnbonding {
    const message = createBaseQueryTotalUnbonding();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryTotalUnbondingResponse(): QueryTotalUnbondingResponse {
  return {
    unbonding: []
  };
}
export const QueryTotalUnbondingResponse = {
  encode(message: QueryTotalUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbonding) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalUnbondingResponse {
    return {
      unbonding: Array.isArray(object?.unbonding) ? object.unbonding.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalUnbondingResponse>): QueryTotalUnbondingResponse {
    const message = createBaseQueryTotalUnbondingResponse();
    message.unbonding = object.unbonding?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryUpcomingIncentivePrograms(): QueryUpcomingIncentivePrograms {
  return {};
}
export const QueryUpcomingIncentivePrograms = {
  encode(_: QueryUpcomingIncentivePrograms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryUpcomingIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryUpcomingIncentivePrograms>): QueryUpcomingIncentivePrograms {
    const message = createBaseQueryUpcomingIncentivePrograms();
    return message;
  }
};
function createBaseQueryUpcomingIncentiveProgramsResponse(): QueryUpcomingIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryUpcomingIncentiveProgramsResponse = {
  encode(message: QueryUpcomingIncentiveProgramsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.programs) {
      IncentiveProgram.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUpcomingIncentiveProgramsResponse {
    return {
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => IncentiveProgram.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryUpcomingIncentiveProgramsResponse>): QueryUpcomingIncentiveProgramsResponse {
    const message = createBaseQueryUpcomingIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOngoingIncentivePrograms(): QueryOngoingIncentivePrograms {
  return {};
}
export const QueryOngoingIncentivePrograms = {
  encode(_: QueryOngoingIncentivePrograms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryOngoingIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryOngoingIncentivePrograms>): QueryOngoingIncentivePrograms {
    const message = createBaseQueryOngoingIncentivePrograms();
    return message;
  }
};
function createBaseQueryOngoingIncentiveProgramsResponse(): QueryOngoingIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryOngoingIncentiveProgramsResponse = {
  encode(message: QueryOngoingIncentiveProgramsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.programs) {
      IncentiveProgram.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOngoingIncentiveProgramsResponse {
    return {
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => IncentiveProgram.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOngoingIncentiveProgramsResponse>): QueryOngoingIncentiveProgramsResponse {
    const message = createBaseQueryOngoingIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryCompletedIncentivePrograms(): QueryCompletedIncentivePrograms {
  return {};
}
export const QueryCompletedIncentivePrograms = {
  encode(_: QueryCompletedIncentivePrograms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCompletedIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryCompletedIncentivePrograms>): QueryCompletedIncentivePrograms {
    const message = createBaseQueryCompletedIncentivePrograms();
    return message;
  }
};
function createBaseQueryCompletedIncentiveProgramsResponse(): QueryCompletedIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryCompletedIncentiveProgramsResponse = {
  encode(message: QueryCompletedIncentiveProgramsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.programs) {
      IncentiveProgram.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCompletedIncentiveProgramsResponse {
    return {
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => IncentiveProgram.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCompletedIncentiveProgramsResponse>): QueryCompletedIncentiveProgramsResponse {
    const message = createBaseQueryCompletedIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryIncentiveProgram(): QueryIncentiveProgram {
  return {
    id: 0
  };
}
export const QueryIncentiveProgram = {
  encode(message: QueryIncentiveProgram, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryIncentiveProgram {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  fromPartial(object: Partial<QueryIncentiveProgram>): QueryIncentiveProgram {
    const message = createBaseQueryIncentiveProgram();
    message.id = object.id ?? 0;
    return message;
  }
};
function createBaseQueryIncentiveProgramResponse(): QueryIncentiveProgramResponse {
  return {
    program: undefined
  };
}
export const QueryIncentiveProgramResponse = {
  encode(message: QueryIncentiveProgramResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.program !== undefined) {
      IncentiveProgram.encode(message.program, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIncentiveProgramResponse {
    return {
      program: isSet(object.program) ? IncentiveProgram.fromJSON(object.program) : undefined
    };
  },
  fromPartial(object: Partial<QueryIncentiveProgramResponse>): QueryIncentiveProgramResponse {
    const message = createBaseQueryIncentiveProgramResponse();
    message.program = object.program !== undefined && object.program !== null ? IncentiveProgram.fromPartial(object.program) : undefined;
    return message;
  }
};
function createBaseQueryCurrentRates(): QueryCurrentRates {
  return {
    uToken: ""
  };
}
export const QueryCurrentRates = {
  encode(message: QueryCurrentRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uToken !== "") {
      writer.uint32(10).string(message.uToken);
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentRates {
    return {
      uToken: isSet(object.uToken) ? String(object.uToken) : ""
    };
  },
  fromPartial(object: Partial<QueryCurrentRates>): QueryCurrentRates {
    const message = createBaseQueryCurrentRates();
    message.uToken = object.uToken ?? "";
    return message;
  }
};
function createBaseQueryCurrentRatesResponse(): QueryCurrentRatesResponse {
  return {
    referenceBond: undefined,
    rewards: []
  };
}
export const QueryCurrentRatesResponse = {
  encode(message: QueryCurrentRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.referenceBond !== undefined) {
      Coin.encode(message.referenceBond, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentRatesResponse {
    return {
      referenceBond: isSet(object.referenceBond) ? Coin.fromJSON(object.referenceBond) : undefined,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCurrentRatesResponse>): QueryCurrentRatesResponse {
    const message = createBaseQueryCurrentRatesResponse();
    message.referenceBond = object.referenceBond !== undefined && object.referenceBond !== null ? Coin.fromPartial(object.referenceBond) : undefined;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastRewardTime(): QueryLastRewardTime {
  return {};
}
export const QueryLastRewardTime = {
  encode(_: QueryLastRewardTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryLastRewardTime {
    return {};
  },
  fromPartial(_: Partial<QueryLastRewardTime>): QueryLastRewardTime {
    const message = createBaseQueryLastRewardTime();
    return message;
  }
};
function createBaseQueryLastRewardTimeResponse(): QueryLastRewardTimeResponse {
  return {
    time: Long.ZERO
  };
}
export const QueryLastRewardTimeResponse = {
  encode(message: QueryLastRewardTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRewardTimeResponse {
    return {
      time: isSet(object.time) ? Long.fromValue(object.time) : Long.ZERO
    };
  },
  fromPartial(object: Partial<QueryLastRewardTimeResponse>): QueryLastRewardTimeResponse {
    const message = createBaseQueryLastRewardTimeResponse();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    return message;
  }
};
function createBaseQueryActualRates(): QueryActualRates {
  return {
    uToken: ""
  };
}
export const QueryActualRates = {
  encode(message: QueryActualRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uToken !== "") {
      writer.uint32(10).string(message.uToken);
    }
    return writer;
  },
  fromJSON(object: any): QueryActualRates {
    return {
      uToken: isSet(object.uToken) ? String(object.uToken) : ""
    };
  },
  fromPartial(object: Partial<QueryActualRates>): QueryActualRates {
    const message = createBaseQueryActualRates();
    message.uToken = object.uToken ?? "";
    return message;
  }
};
function createBaseQueryActualRatesResponse(): QueryActualRatesResponse {
  return {
    APY: ""
  };
}
export const QueryActualRatesResponse = {
  encode(message: QueryActualRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.APY !== "") {
      writer.uint32(10).string(message.APY);
    }
    return writer;
  },
  fromJSON(object: any): QueryActualRatesResponse {
    return {
      APY: isSet(object.APY) ? String(object.APY) : ""
    };
  },
  fromPartial(object: Partial<QueryActualRatesResponse>): QueryActualRatesResponse {
    const message = createBaseQueryActualRatesResponse();
    message.APY = object.APY ?? "";
    return message;
  }
};