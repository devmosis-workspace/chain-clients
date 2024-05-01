import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryParams";
  value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.incentive.v1.QueryParams";
  value: QueryParamsAmino;
}
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
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryPendingRewards defines the request structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewards {
  address: string;
}
export interface QueryPendingRewardsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryPendingRewards";
  value: Uint8Array;
}
/** QueryPendingRewards defines the request structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsAmino {
  address?: string;
}
export interface QueryPendingRewardsAminoMsg {
  type: "/umee.incentive.v1.QueryPendingRewards";
  value: QueryPendingRewardsAmino;
}
/** QueryPendingRewards defines the request structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsSDKType {
  address: string;
}
/** QueryPendingRewardsResponse defines the response structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsResponse {
  rewards: Coin[];
}
export interface QueryPendingRewardsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryPendingRewardsResponse";
  value: Uint8Array;
}
/** QueryPendingRewardsResponse defines the response structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsResponseAmino {
  rewards?: CoinAmino[];
}
export interface QueryPendingRewardsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryPendingRewardsResponse";
  value: QueryPendingRewardsResponseAmino;
}
/** QueryPendingRewardsResponse defines the response structure for the PendingRewards gRPC service handler. */
export interface QueryPendingRewardsResponseSDKType {
  rewards: CoinSDKType[];
}
/** QueryAccountBonds defines the request structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBonds {
  address: string;
}
export interface QueryAccountBondsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryAccountBonds";
  value: Uint8Array;
}
/** QueryAccountBonds defines the request structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBondsAmino {
  address?: string;
}
export interface QueryAccountBondsAminoMsg {
  type: "/umee.incentive.v1.QueryAccountBonds";
  value: QueryAccountBondsAmino;
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
export interface QueryAccountBondsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryAccountBondsResponse";
  value: Uint8Array;
}
/** QueryAccountBondsResponse defines the response structure for the AccountBonds gRPC service handler. */
export interface QueryAccountBondsResponseAmino {
  bonded?: CoinAmino[];
  unbonding?: CoinAmino[];
  unbondings?: UnbondingAmino[];
}
export interface QueryAccountBondsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryAccountBondsResponse";
  value: QueryAccountBondsResponseAmino;
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
export interface QueryTotalBondedProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryTotalBonded";
  value: Uint8Array;
}
/** QueryTotalBonded defines the request structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedAmino {
  /** denom is an optional field which causes the query to return the totals of only one uToken */
  denom?: string;
}
export interface QueryTotalBondedAminoMsg {
  type: "/umee.incentive.v1.QueryTotalBonded";
  value: QueryTotalBondedAmino;
}
/** QueryTotalBonded defines the request structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedSDKType {
  denom: string;
}
/** QueryTotalBondedResponse defines the response structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedResponse {
  bonded: Coin[];
}
export interface QueryTotalBondedResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryTotalBondedResponse";
  value: Uint8Array;
}
/** QueryTotalBondedResponse defines the response structure for the TotalBonded gRPC service handler. */
export interface QueryTotalBondedResponseAmino {
  bonded?: CoinAmino[];
}
export interface QueryTotalBondedResponseAminoMsg {
  type: "/umee.incentive.v1.QueryTotalBondedResponse";
  value: QueryTotalBondedResponseAmino;
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
export interface QueryTotalUnbondingProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryTotalUnbonding";
  value: Uint8Array;
}
/** QueryTotalUnbonding defines the request structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingAmino {
  /** denom is an optional field which causes the query to return the totals of only one uToken */
  denom?: string;
}
export interface QueryTotalUnbondingAminoMsg {
  type: "/umee.incentive.v1.QueryTotalUnbonding";
  value: QueryTotalUnbondingAmino;
}
/** QueryTotalUnbonding defines the request structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingSDKType {
  denom: string;
}
/** QueryTotalUnbondingResponse defines the response structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingResponse {
  unbonding: Coin[];
}
export interface QueryTotalUnbondingResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryTotalUnbondingResponse";
  value: Uint8Array;
}
/** QueryTotalUnbondingResponse defines the response structure for the TotalUnbonding gRPC service handler. */
export interface QueryTotalUnbondingResponseAmino {
  unbonding?: CoinAmino[];
}
export interface QueryTotalUnbondingResponseAminoMsg {
  type: "/umee.incentive.v1.QueryTotalUnbondingResponse";
  value: QueryTotalUnbondingResponseAmino;
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
export interface QueryUpcomingIncentiveProgramsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryUpcomingIncentivePrograms";
  value: Uint8Array;
}
/**
 * QueryUpcomingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsAmino {}
export interface QueryUpcomingIncentiveProgramsAminoMsg {
  type: "/umee.incentive.v1.QueryUpcomingIncentivePrograms";
  value: QueryUpcomingIncentiveProgramsAmino;
}
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
export interface QueryUpcomingIncentiveProgramsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryUpcomingIncentiveProgramsResponse";
  value: Uint8Array;
}
/**
 * QueryUpcomingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsResponseAmino {
  programs?: IncentiveProgramAmino[];
}
export interface QueryUpcomingIncentiveProgramsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryUpcomingIncentiveProgramsResponse";
  value: QueryUpcomingIncentiveProgramsResponseAmino;
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
export interface QueryOngoingIncentiveProgramsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryOngoingIncentivePrograms";
  value: Uint8Array;
}
/**
 * QueryOngoingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsAmino {}
export interface QueryOngoingIncentiveProgramsAminoMsg {
  type: "/umee.incentive.v1.QueryOngoingIncentivePrograms";
  value: QueryOngoingIncentiveProgramsAmino;
}
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
export interface QueryOngoingIncentiveProgramsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryOngoingIncentiveProgramsResponse";
  value: Uint8Array;
}
/**
 * QueryOngoingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsResponseAmino {
  programs?: IncentiveProgramAmino[];
}
export interface QueryOngoingIncentiveProgramsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryOngoingIncentiveProgramsResponse";
  value: QueryOngoingIncentiveProgramsResponseAmino;
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
export interface QueryCompletedIncentiveProgramsProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryCompletedIncentivePrograms";
  value: Uint8Array;
}
/**
 * QueryCompletedIncentivePrograms defines the request structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsAmino {}
export interface QueryCompletedIncentiveProgramsAminoMsg {
  type: "/umee.incentive.v1.QueryCompletedIncentivePrograms";
  value: QueryCompletedIncentiveProgramsAmino;
}
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
export interface QueryCompletedIncentiveProgramsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryCompletedIncentiveProgramsResponse";
  value: Uint8Array;
}
/**
 * QueryCompletedIncentiveProgramsResponse defines the response structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsResponseAmino {
  programs?: IncentiveProgramAmino[];
}
export interface QueryCompletedIncentiveProgramsResponseAminoMsg {
  type: "/umee.incentive.v1.QueryCompletedIncentiveProgramsResponse";
  value: QueryCompletedIncentiveProgramsResponseAmino;
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
export interface QueryIncentiveProgramProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryIncentiveProgram";
  value: Uint8Array;
}
/**
 * QueryIncentiveProgram defines the request structure for the IncentiveProgram
 * gRPC service handler.
 */
export interface QueryIncentiveProgramAmino {
  /** ID specifies which program to query for */
  id?: number;
}
export interface QueryIncentiveProgramAminoMsg {
  type: "/umee.incentive.v1.QueryIncentiveProgram";
  value: QueryIncentiveProgramAmino;
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
  program: IncentiveProgram;
}
export interface QueryIncentiveProgramResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryIncentiveProgramResponse";
  value: Uint8Array;
}
/**
 * QueryIncentivePrograResponse defines the response structure for the
 * IncentiveProgram gRPC service handler.
 */
export interface QueryIncentiveProgramResponseAmino {
  program?: IncentiveProgramAmino;
}
export interface QueryIncentiveProgramResponseAminoMsg {
  type: "/umee.incentive.v1.QueryIncentiveProgramResponse";
  value: QueryIncentiveProgramResponseAmino;
}
/**
 * QueryIncentivePrograResponse defines the response structure for the
 * IncentiveProgram gRPC service handler.
 */
export interface QueryIncentiveProgramResponseSDKType {
  program: IncentiveProgramSDKType;
}
/** QueryCurrentRates defines the request structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRates {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken: string;
}
export interface QueryCurrentRatesProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryCurrentRates";
  value: Uint8Array;
}
/** QueryCurrentRates defines the request structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesAmino {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken?: string;
}
export interface QueryCurrentRatesAminoMsg {
  type: "/umee.incentive.v1.QueryCurrentRates";
  value: QueryCurrentRatesAmino;
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
  referenceBond: Coin;
  /**
   * Rewards are the amount of base token rewards that the reference amount of bonded uTokens would earn
   * if current rates continued for a full year.
   */
  rewards: Coin[];
}
export interface QueryCurrentRatesResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryCurrentRatesResponse";
  value: Uint8Array;
}
/** QueryCurrentRatesResponse defines the response structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesResponseAmino {
  /**
   * Reference Bond is an amount of bonded uTokens (usually 10^exponent) whose current rewards are being
   * calculated. This amount can be used to compute an individual user's rewards: for example, if a user has
   * 2.5x the reference amount currently bonded, then they would receive 2.5x the rewards below annually
   * at current rates.
   */
  reference_bond?: CoinAmino;
  /**
   * Rewards are the amount of base token rewards that the reference amount of bonded uTokens would earn
   * if current rates continued for a full year.
   */
  rewards?: CoinAmino[];
}
export interface QueryCurrentRatesResponseAminoMsg {
  type: "/umee.incentive.v1.QueryCurrentRatesResponse";
  value: QueryCurrentRatesResponseAmino;
}
/** QueryCurrentRatesResponse defines the response structure for the CurrentRates gRPC service handler. */
export interface QueryCurrentRatesResponseSDKType {
  reference_bond: CoinSDKType;
  rewards: CoinSDKType[];
}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTime {}
export interface QueryLastRewardTimeProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryLastRewardTime";
  value: Uint8Array;
}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTimeAmino {}
export interface QueryLastRewardTimeAminoMsg {
  type: "/umee.incentive.v1.QueryLastRewardTime";
  value: QueryLastRewardTimeAmino;
}
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
  time: bigint;
}
export interface QueryLastRewardTimeResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryLastRewardTimeResponse";
  value: Uint8Array;
}
/**
 * QueryLastRewardTimeResponse defines the response structure for the LastRewardTime gRPC
 * service handler.
 */
export interface QueryLastRewardTimeResponseAmino {
  time?: string;
}
export interface QueryLastRewardTimeResponseAminoMsg {
  type: "/umee.incentive.v1.QueryLastRewardTimeResponse";
  value: QueryLastRewardTimeResponseAmino;
}
/**
 * QueryLastRewardTimeResponse defines the response structure for the LastRewardTime gRPC
 * service handler.
 */
export interface QueryLastRewardTimeResponseSDKType {
  time: bigint;
}
/** QueryActualRates defines the request structure for the ActualRates gRPC service handler. */
export interface QueryActualRates {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken: string;
}
export interface QueryActualRatesProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryActualRates";
  value: Uint8Array;
}
/** QueryActualRates defines the request structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesAmino {
  /** uToken is the uToken denomination whose current annual rate of rewards is being queried */
  uToken?: string;
}
export interface QueryActualRatesAminoMsg {
  type: "/umee.incentive.v1.QueryActualRates";
  value: QueryActualRatesAmino;
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
export interface QueryActualRatesResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.QueryActualRatesResponse";
  value: Uint8Array;
}
/** QueryActualRatesResponse defines the response structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesResponseAmino {
  /** APY is the oracle price-adjusted APY of the bonded uToken. */
  APY?: string;
}
export interface QueryActualRatesResponseAminoMsg {
  type: "/umee.incentive.v1.QueryActualRatesResponse";
  value: QueryActualRatesResponseAmino;
}
/** QueryActualRatesResponse defines the response structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesResponseSDKType {
  APY: string;
}
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.incentive.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParams {
    return {};
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.incentive.v1.QueryParamsResponse",
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
      typeUrl: "/umee.incentive.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRewards(): QueryPendingRewards {
  return {
    address: ""
  };
}
export const QueryPendingRewards = {
  typeUrl: "/umee.incentive.v1.QueryPendingRewards",
  encode(message: QueryPendingRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPendingRewardsAmino): QueryPendingRewards {
    const message = createBaseQueryPendingRewards();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryPendingRewards): QueryPendingRewardsAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryPendingRewardsAminoMsg): QueryPendingRewards {
    return QueryPendingRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRewardsProtoMsg): QueryPendingRewards {
    return QueryPendingRewards.decode(message.value);
  },
  toProto(message: QueryPendingRewards): Uint8Array {
    return QueryPendingRewards.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRewards): QueryPendingRewardsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryPendingRewards",
      value: QueryPendingRewards.encode(message).finish()
    };
  }
};
function createBaseQueryPendingRewardsResponse(): QueryPendingRewardsResponse {
  return {
    rewards: []
  };
}
export const QueryPendingRewardsResponse = {
  typeUrl: "/umee.incentive.v1.QueryPendingRewardsResponse",
  encode(message: QueryPendingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryPendingRewardsResponseAmino): QueryPendingRewardsResponse {
    const message = createBaseQueryPendingRewardsResponse();
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingRewardsResponse): QueryPendingRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingRewardsResponseAminoMsg): QueryPendingRewardsResponse {
    return QueryPendingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingRewardsResponseProtoMsg): QueryPendingRewardsResponse {
    return QueryPendingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryPendingRewardsResponse): Uint8Array {
    return QueryPendingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingRewardsResponse): QueryPendingRewardsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryPendingRewardsResponse",
      value: QueryPendingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBonds(): QueryAccountBonds {
  return {
    address: ""
  };
}
export const QueryAccountBonds = {
  typeUrl: "/umee.incentive.v1.QueryAccountBonds",
  encode(message: QueryAccountBonds, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountBondsAmino): QueryAccountBonds {
    const message = createBaseQueryAccountBonds();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountBonds): QueryAccountBondsAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountBondsAminoMsg): QueryAccountBonds {
    return QueryAccountBonds.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBondsProtoMsg): QueryAccountBonds {
    return QueryAccountBonds.decode(message.value);
  },
  toProto(message: QueryAccountBonds): Uint8Array {
    return QueryAccountBonds.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBonds): QueryAccountBondsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryAccountBonds",
      value: QueryAccountBonds.encode(message).finish()
    };
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
  typeUrl: "/umee.incentive.v1.QueryAccountBondsResponse",
  encode(message: QueryAccountBondsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryAccountBondsResponseAmino): QueryAccountBondsResponse {
    const message = createBaseQueryAccountBondsResponse();
    message.bonded = object.bonded?.map(e => Coin.fromAmino(e)) || [];
    message.unbonding = object.unbonding?.map(e => Coin.fromAmino(e)) || [];
    message.unbondings = object.unbondings?.map(e => Unbonding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountBondsResponse): QueryAccountBondsResponseAmino {
    const obj: any = {};
    if (message.bonded) {
      obj.bonded = message.bonded.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bonded = message.bonded;
    }
    if (message.unbonding) {
      obj.unbonding = message.unbonding.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.unbonding = message.unbonding;
    }
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? Unbonding.toAmino(e) : undefined);
    } else {
      obj.unbondings = message.unbondings;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountBondsResponseAminoMsg): QueryAccountBondsResponse {
    return QueryAccountBondsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBondsResponseProtoMsg): QueryAccountBondsResponse {
    return QueryAccountBondsResponse.decode(message.value);
  },
  toProto(message: QueryAccountBondsResponse): Uint8Array {
    return QueryAccountBondsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBondsResponse): QueryAccountBondsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryAccountBondsResponse",
      value: QueryAccountBondsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBonded(): QueryTotalBonded {
  return {
    denom: ""
  };
}
export const QueryTotalBonded = {
  typeUrl: "/umee.incentive.v1.QueryTotalBonded",
  encode(message: QueryTotalBonded, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalBondedAmino): QueryTotalBonded {
    const message = createBaseQueryTotalBonded();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalBonded): QueryTotalBondedAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTotalBondedAminoMsg): QueryTotalBonded {
    return QueryTotalBonded.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBondedProtoMsg): QueryTotalBonded {
    return QueryTotalBonded.decode(message.value);
  },
  toProto(message: QueryTotalBonded): Uint8Array {
    return QueryTotalBonded.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBonded): QueryTotalBondedProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryTotalBonded",
      value: QueryTotalBonded.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBondedResponse(): QueryTotalBondedResponse {
  return {
    bonded: []
  };
}
export const QueryTotalBondedResponse = {
  typeUrl: "/umee.incentive.v1.QueryTotalBondedResponse",
  encode(message: QueryTotalBondedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalBondedResponseAmino): QueryTotalBondedResponse {
    const message = createBaseQueryTotalBondedResponse();
    message.bonded = object.bonded?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalBondedResponse): QueryTotalBondedResponseAmino {
    const obj: any = {};
    if (message.bonded) {
      obj.bonded = message.bonded.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bonded = message.bonded;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalBondedResponseAminoMsg): QueryTotalBondedResponse {
    return QueryTotalBondedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBondedResponseProtoMsg): QueryTotalBondedResponse {
    return QueryTotalBondedResponse.decode(message.value);
  },
  toProto(message: QueryTotalBondedResponse): Uint8Array {
    return QueryTotalBondedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBondedResponse): QueryTotalBondedResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryTotalBondedResponse",
      value: QueryTotalBondedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalUnbonding(): QueryTotalUnbonding {
  return {
    denom: ""
  };
}
export const QueryTotalUnbonding = {
  typeUrl: "/umee.incentive.v1.QueryTotalUnbonding",
  encode(message: QueryTotalUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalUnbondingAmino): QueryTotalUnbonding {
    const message = createBaseQueryTotalUnbonding();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalUnbonding): QueryTotalUnbondingAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnbondingAminoMsg): QueryTotalUnbonding {
    return QueryTotalUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnbondingProtoMsg): QueryTotalUnbonding {
    return QueryTotalUnbonding.decode(message.value);
  },
  toProto(message: QueryTotalUnbonding): Uint8Array {
    return QueryTotalUnbonding.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnbonding): QueryTotalUnbondingProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryTotalUnbonding",
      value: QueryTotalUnbonding.encode(message).finish()
    };
  }
};
function createBaseQueryTotalUnbondingResponse(): QueryTotalUnbondingResponse {
  return {
    unbonding: []
  };
}
export const QueryTotalUnbondingResponse = {
  typeUrl: "/umee.incentive.v1.QueryTotalUnbondingResponse",
  encode(message: QueryTotalUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalUnbondingResponseAmino): QueryTotalUnbondingResponse {
    const message = createBaseQueryTotalUnbondingResponse();
    message.unbonding = object.unbonding?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalUnbondingResponse): QueryTotalUnbondingResponseAmino {
    const obj: any = {};
    if (message.unbonding) {
      obj.unbonding = message.unbonding.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.unbonding = message.unbonding;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalUnbondingResponseAminoMsg): QueryTotalUnbondingResponse {
    return QueryTotalUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalUnbondingResponseProtoMsg): QueryTotalUnbondingResponse {
    return QueryTotalUnbondingResponse.decode(message.value);
  },
  toProto(message: QueryTotalUnbondingResponse): Uint8Array {
    return QueryTotalUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalUnbondingResponse): QueryTotalUnbondingResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryTotalUnbondingResponse",
      value: QueryTotalUnbondingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpcomingIncentivePrograms(): QueryUpcomingIncentivePrograms {
  return {};
}
export const QueryUpcomingIncentivePrograms = {
  typeUrl: "/umee.incentive.v1.QueryUpcomingIncentivePrograms",
  encode(_: QueryUpcomingIncentivePrograms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryUpcomingIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryUpcomingIncentivePrograms>): QueryUpcomingIncentivePrograms {
    const message = createBaseQueryUpcomingIncentivePrograms();
    return message;
  },
  fromAmino(_: QueryUpcomingIncentiveProgramsAmino): QueryUpcomingIncentivePrograms {
    const message = createBaseQueryUpcomingIncentivePrograms();
    return message;
  },
  toAmino(_: QueryUpcomingIncentivePrograms): QueryUpcomingIncentiveProgramsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpcomingIncentiveProgramsAminoMsg): QueryUpcomingIncentivePrograms {
    return QueryUpcomingIncentivePrograms.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUpcomingIncentiveProgramsProtoMsg): QueryUpcomingIncentivePrograms {
    return QueryUpcomingIncentivePrograms.decode(message.value);
  },
  toProto(message: QueryUpcomingIncentivePrograms): Uint8Array {
    return QueryUpcomingIncentivePrograms.encode(message).finish();
  },
  toProtoMsg(message: QueryUpcomingIncentivePrograms): QueryUpcomingIncentiveProgramsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryUpcomingIncentivePrograms",
      value: QueryUpcomingIncentivePrograms.encode(message).finish()
    };
  }
};
function createBaseQueryUpcomingIncentiveProgramsResponse(): QueryUpcomingIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryUpcomingIncentiveProgramsResponse = {
  typeUrl: "/umee.incentive.v1.QueryUpcomingIncentiveProgramsResponse",
  encode(message: QueryUpcomingIncentiveProgramsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryUpcomingIncentiveProgramsResponseAmino): QueryUpcomingIncentiveProgramsResponse {
    const message = createBaseQueryUpcomingIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryUpcomingIncentiveProgramsResponse): QueryUpcomingIncentiveProgramsResponseAmino {
    const obj: any = {};
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.programs = message.programs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUpcomingIncentiveProgramsResponseAminoMsg): QueryUpcomingIncentiveProgramsResponse {
    return QueryUpcomingIncentiveProgramsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUpcomingIncentiveProgramsResponseProtoMsg): QueryUpcomingIncentiveProgramsResponse {
    return QueryUpcomingIncentiveProgramsResponse.decode(message.value);
  },
  toProto(message: QueryUpcomingIncentiveProgramsResponse): Uint8Array {
    return QueryUpcomingIncentiveProgramsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpcomingIncentiveProgramsResponse): QueryUpcomingIncentiveProgramsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryUpcomingIncentiveProgramsResponse",
      value: QueryUpcomingIncentiveProgramsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOngoingIncentivePrograms(): QueryOngoingIncentivePrograms {
  return {};
}
export const QueryOngoingIncentivePrograms = {
  typeUrl: "/umee.incentive.v1.QueryOngoingIncentivePrograms",
  encode(_: QueryOngoingIncentivePrograms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryOngoingIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryOngoingIncentivePrograms>): QueryOngoingIncentivePrograms {
    const message = createBaseQueryOngoingIncentivePrograms();
    return message;
  },
  fromAmino(_: QueryOngoingIncentiveProgramsAmino): QueryOngoingIncentivePrograms {
    const message = createBaseQueryOngoingIncentivePrograms();
    return message;
  },
  toAmino(_: QueryOngoingIncentivePrograms): QueryOngoingIncentiveProgramsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOngoingIncentiveProgramsAminoMsg): QueryOngoingIncentivePrograms {
    return QueryOngoingIncentivePrograms.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingIncentiveProgramsProtoMsg): QueryOngoingIncentivePrograms {
    return QueryOngoingIncentivePrograms.decode(message.value);
  },
  toProto(message: QueryOngoingIncentivePrograms): Uint8Array {
    return QueryOngoingIncentivePrograms.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingIncentivePrograms): QueryOngoingIncentiveProgramsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryOngoingIncentivePrograms",
      value: QueryOngoingIncentivePrograms.encode(message).finish()
    };
  }
};
function createBaseQueryOngoingIncentiveProgramsResponse(): QueryOngoingIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryOngoingIncentiveProgramsResponse = {
  typeUrl: "/umee.incentive.v1.QueryOngoingIncentiveProgramsResponse",
  encode(message: QueryOngoingIncentiveProgramsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryOngoingIncentiveProgramsResponseAmino): QueryOngoingIncentiveProgramsResponse {
    const message = createBaseQueryOngoingIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOngoingIncentiveProgramsResponse): QueryOngoingIncentiveProgramsResponseAmino {
    const obj: any = {};
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.programs = message.programs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOngoingIncentiveProgramsResponseAminoMsg): QueryOngoingIncentiveProgramsResponse {
    return QueryOngoingIncentiveProgramsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingIncentiveProgramsResponseProtoMsg): QueryOngoingIncentiveProgramsResponse {
    return QueryOngoingIncentiveProgramsResponse.decode(message.value);
  },
  toProto(message: QueryOngoingIncentiveProgramsResponse): Uint8Array {
    return QueryOngoingIncentiveProgramsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingIncentiveProgramsResponse): QueryOngoingIncentiveProgramsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryOngoingIncentiveProgramsResponse",
      value: QueryOngoingIncentiveProgramsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCompletedIncentivePrograms(): QueryCompletedIncentivePrograms {
  return {};
}
export const QueryCompletedIncentivePrograms = {
  typeUrl: "/umee.incentive.v1.QueryCompletedIncentivePrograms",
  encode(_: QueryCompletedIncentivePrograms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCompletedIncentivePrograms {
    return {};
  },
  fromPartial(_: Partial<QueryCompletedIncentivePrograms>): QueryCompletedIncentivePrograms {
    const message = createBaseQueryCompletedIncentivePrograms();
    return message;
  },
  fromAmino(_: QueryCompletedIncentiveProgramsAmino): QueryCompletedIncentivePrograms {
    const message = createBaseQueryCompletedIncentivePrograms();
    return message;
  },
  toAmino(_: QueryCompletedIncentivePrograms): QueryCompletedIncentiveProgramsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCompletedIncentiveProgramsAminoMsg): QueryCompletedIncentivePrograms {
    return QueryCompletedIncentivePrograms.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCompletedIncentiveProgramsProtoMsg): QueryCompletedIncentivePrograms {
    return QueryCompletedIncentivePrograms.decode(message.value);
  },
  toProto(message: QueryCompletedIncentivePrograms): Uint8Array {
    return QueryCompletedIncentivePrograms.encode(message).finish();
  },
  toProtoMsg(message: QueryCompletedIncentivePrograms): QueryCompletedIncentiveProgramsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryCompletedIncentivePrograms",
      value: QueryCompletedIncentivePrograms.encode(message).finish()
    };
  }
};
function createBaseQueryCompletedIncentiveProgramsResponse(): QueryCompletedIncentiveProgramsResponse {
  return {
    programs: []
  };
}
export const QueryCompletedIncentiveProgramsResponse = {
  typeUrl: "/umee.incentive.v1.QueryCompletedIncentiveProgramsResponse",
  encode(message: QueryCompletedIncentiveProgramsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryCompletedIncentiveProgramsResponseAmino): QueryCompletedIncentiveProgramsResponse {
    const message = createBaseQueryCompletedIncentiveProgramsResponse();
    message.programs = object.programs?.map(e => IncentiveProgram.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCompletedIncentiveProgramsResponse): QueryCompletedIncentiveProgramsResponseAmino {
    const obj: any = {};
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.programs = message.programs;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCompletedIncentiveProgramsResponseAminoMsg): QueryCompletedIncentiveProgramsResponse {
    return QueryCompletedIncentiveProgramsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCompletedIncentiveProgramsResponseProtoMsg): QueryCompletedIncentiveProgramsResponse {
    return QueryCompletedIncentiveProgramsResponse.decode(message.value);
  },
  toProto(message: QueryCompletedIncentiveProgramsResponse): Uint8Array {
    return QueryCompletedIncentiveProgramsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCompletedIncentiveProgramsResponse): QueryCompletedIncentiveProgramsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryCompletedIncentiveProgramsResponse",
      value: QueryCompletedIncentiveProgramsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentiveProgram(): QueryIncentiveProgram {
  return {
    id: 0
  };
}
export const QueryIncentiveProgram = {
  typeUrl: "/umee.incentive.v1.QueryIncentiveProgram",
  encode(message: QueryIncentiveProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryIncentiveProgramAmino): QueryIncentiveProgram {
    const message = createBaseQueryIncentiveProgram();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryIncentiveProgram): QueryIncentiveProgramAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryIncentiveProgramAminoMsg): QueryIncentiveProgram {
    return QueryIncentiveProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncentiveProgramProtoMsg): QueryIncentiveProgram {
    return QueryIncentiveProgram.decode(message.value);
  },
  toProto(message: QueryIncentiveProgram): Uint8Array {
    return QueryIncentiveProgram.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentiveProgram): QueryIncentiveProgramProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryIncentiveProgram",
      value: QueryIncentiveProgram.encode(message).finish()
    };
  }
};
function createBaseQueryIncentiveProgramResponse(): QueryIncentiveProgramResponse {
  return {
    program: IncentiveProgram.fromPartial({})
  };
}
export const QueryIncentiveProgramResponse = {
  typeUrl: "/umee.incentive.v1.QueryIncentiveProgramResponse",
  encode(message: QueryIncentiveProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryIncentiveProgramResponseAmino): QueryIncentiveProgramResponse {
    const message = createBaseQueryIncentiveProgramResponse();
    if (object.program !== undefined && object.program !== null) {
      message.program = IncentiveProgram.fromAmino(object.program);
    }
    return message;
  },
  toAmino(message: QueryIncentiveProgramResponse): QueryIncentiveProgramResponseAmino {
    const obj: any = {};
    obj.program = message.program ? IncentiveProgram.toAmino(message.program) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentiveProgramResponseAminoMsg): QueryIncentiveProgramResponse {
    return QueryIncentiveProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncentiveProgramResponseProtoMsg): QueryIncentiveProgramResponse {
    return QueryIncentiveProgramResponse.decode(message.value);
  },
  toProto(message: QueryIncentiveProgramResponse): Uint8Array {
    return QueryIncentiveProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentiveProgramResponse): QueryIncentiveProgramResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryIncentiveProgramResponse",
      value: QueryIncentiveProgramResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentRates(): QueryCurrentRates {
  return {
    uToken: ""
  };
}
export const QueryCurrentRates = {
  typeUrl: "/umee.incentive.v1.QueryCurrentRates",
  encode(message: QueryCurrentRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryCurrentRatesAmino): QueryCurrentRates {
    const message = createBaseQueryCurrentRates();
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = object.uToken;
    }
    return message;
  },
  toAmino(message: QueryCurrentRates): QueryCurrentRatesAmino {
    const obj: any = {};
    obj.uToken = message.uToken === "" ? undefined : message.uToken;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentRatesAminoMsg): QueryCurrentRates {
    return QueryCurrentRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentRatesProtoMsg): QueryCurrentRates {
    return QueryCurrentRates.decode(message.value);
  },
  toProto(message: QueryCurrentRates): Uint8Array {
    return QueryCurrentRates.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentRates): QueryCurrentRatesProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryCurrentRates",
      value: QueryCurrentRates.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentRatesResponse(): QueryCurrentRatesResponse {
  return {
    referenceBond: Coin.fromPartial({}),
    rewards: []
  };
}
export const QueryCurrentRatesResponse = {
  typeUrl: "/umee.incentive.v1.QueryCurrentRatesResponse",
  encode(message: QueryCurrentRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryCurrentRatesResponseAmino): QueryCurrentRatesResponse {
    const message = createBaseQueryCurrentRatesResponse();
    if (object.reference_bond !== undefined && object.reference_bond !== null) {
      message.referenceBond = Coin.fromAmino(object.reference_bond);
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCurrentRatesResponse): QueryCurrentRatesResponseAmino {
    const obj: any = {};
    obj.reference_bond = message.referenceBond ? Coin.toAmino(message.referenceBond) : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCurrentRatesResponseAminoMsg): QueryCurrentRatesResponse {
    return QueryCurrentRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentRatesResponseProtoMsg): QueryCurrentRatesResponse {
    return QueryCurrentRatesResponse.decode(message.value);
  },
  toProto(message: QueryCurrentRatesResponse): Uint8Array {
    return QueryCurrentRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentRatesResponse): QueryCurrentRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryCurrentRatesResponse",
      value: QueryCurrentRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastRewardTime(): QueryLastRewardTime {
  return {};
}
export const QueryLastRewardTime = {
  typeUrl: "/umee.incentive.v1.QueryLastRewardTime",
  encode(_: QueryLastRewardTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLastRewardTime {
    return {};
  },
  fromPartial(_: Partial<QueryLastRewardTime>): QueryLastRewardTime {
    const message = createBaseQueryLastRewardTime();
    return message;
  },
  fromAmino(_: QueryLastRewardTimeAmino): QueryLastRewardTime {
    const message = createBaseQueryLastRewardTime();
    return message;
  },
  toAmino(_: QueryLastRewardTime): QueryLastRewardTimeAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastRewardTimeAminoMsg): QueryLastRewardTime {
    return QueryLastRewardTime.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRewardTimeProtoMsg): QueryLastRewardTime {
    return QueryLastRewardTime.decode(message.value);
  },
  toProto(message: QueryLastRewardTime): Uint8Array {
    return QueryLastRewardTime.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRewardTime): QueryLastRewardTimeProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryLastRewardTime",
      value: QueryLastRewardTime.encode(message).finish()
    };
  }
};
function createBaseQueryLastRewardTimeResponse(): QueryLastRewardTimeResponse {
  return {
    time: BigInt(0)
  };
}
export const QueryLastRewardTimeResponse = {
  typeUrl: "/umee.incentive.v1.QueryLastRewardTimeResponse",
  encode(message: QueryLastRewardTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== BigInt(0)) {
      writer.uint32(8).int64(message.time);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastRewardTimeResponse {
    return {
      time: isSet(object.time) ? BigInt(object.time.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLastRewardTimeResponse>): QueryLastRewardTimeResponse {
    const message = createBaseQueryLastRewardTimeResponse();
    message.time = object.time !== undefined && object.time !== null ? BigInt(object.time.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLastRewardTimeResponseAmino): QueryLastRewardTimeResponse {
    const message = createBaseQueryLastRewardTimeResponse();
    if (object.time !== undefined && object.time !== null) {
      message.time = BigInt(object.time);
    }
    return message;
  },
  toAmino(message: QueryLastRewardTimeResponse): QueryLastRewardTimeResponseAmino {
    const obj: any = {};
    obj.time = message.time !== BigInt(0) ? message.time.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastRewardTimeResponseAminoMsg): QueryLastRewardTimeResponse {
    return QueryLastRewardTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastRewardTimeResponseProtoMsg): QueryLastRewardTimeResponse {
    return QueryLastRewardTimeResponse.decode(message.value);
  },
  toProto(message: QueryLastRewardTimeResponse): Uint8Array {
    return QueryLastRewardTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastRewardTimeResponse): QueryLastRewardTimeResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryLastRewardTimeResponse",
      value: QueryLastRewardTimeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActualRates(): QueryActualRates {
  return {
    uToken: ""
  };
}
export const QueryActualRates = {
  typeUrl: "/umee.incentive.v1.QueryActualRates",
  encode(message: QueryActualRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryActualRatesAmino): QueryActualRates {
    const message = createBaseQueryActualRates();
    if (object.uToken !== undefined && object.uToken !== null) {
      message.uToken = object.uToken;
    }
    return message;
  },
  toAmino(message: QueryActualRates): QueryActualRatesAmino {
    const obj: any = {};
    obj.uToken = message.uToken === "" ? undefined : message.uToken;
    return obj;
  },
  fromAminoMsg(object: QueryActualRatesAminoMsg): QueryActualRates {
    return QueryActualRates.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActualRatesProtoMsg): QueryActualRates {
    return QueryActualRates.decode(message.value);
  },
  toProto(message: QueryActualRates): Uint8Array {
    return QueryActualRates.encode(message).finish();
  },
  toProtoMsg(message: QueryActualRates): QueryActualRatesProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryActualRates",
      value: QueryActualRates.encode(message).finish()
    };
  }
};
function createBaseQueryActualRatesResponse(): QueryActualRatesResponse {
  return {
    APY: ""
  };
}
export const QueryActualRatesResponse = {
  typeUrl: "/umee.incentive.v1.QueryActualRatesResponse",
  encode(message: QueryActualRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.APY !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.APY, 18).atomics);
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
  },
  fromAmino(object: QueryActualRatesResponseAmino): QueryActualRatesResponse {
    const message = createBaseQueryActualRatesResponse();
    if (object.APY !== undefined && object.APY !== null) {
      message.APY = object.APY;
    }
    return message;
  },
  toAmino(message: QueryActualRatesResponse): QueryActualRatesResponseAmino {
    const obj: any = {};
    obj.APY = message.APY === "" ? undefined : message.APY;
    return obj;
  },
  fromAminoMsg(object: QueryActualRatesResponseAminoMsg): QueryActualRatesResponse {
    return QueryActualRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActualRatesResponseProtoMsg): QueryActualRatesResponse {
    return QueryActualRatesResponse.decode(message.value);
  },
  toProto(message: QueryActualRatesResponse): Uint8Array {
    return QueryActualRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActualRatesResponse): QueryActualRatesResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.QueryActualRatesResponse",
      value: QueryActualRatesResponse.encode(message).finish()
    };
  }
};