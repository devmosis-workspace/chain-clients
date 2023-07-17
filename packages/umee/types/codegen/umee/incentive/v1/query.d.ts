import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Unbonding, UnbondingSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
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
export interface QueryUpcomingIncentivePrograms {
}
/**
 * QueryUpcomingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsSDKType {
}
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
export interface QueryOngoingIncentivePrograms {
}
/**
 * QueryOngoingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsSDKType {
}
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
export interface QueryCompletedIncentivePrograms {
}
/**
 * QueryCompletedIncentivePrograms defines the request structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsSDKType {
}
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
export interface QueryLastRewardTime {
}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTimeSDKType {
}
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
export declare const QueryParams: {
    encode(_: QueryParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryPendingRewards: {
    encode(message: QueryPendingRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingRewards;
    fromPartial(object: Partial<QueryPendingRewards>): QueryPendingRewards;
};
export declare const QueryPendingRewardsResponse: {
    encode(message: QueryPendingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingRewardsResponse;
    fromPartial(object: Partial<QueryPendingRewardsResponse>): QueryPendingRewardsResponse;
};
export declare const QueryAccountBonds: {
    encode(message: QueryAccountBonds, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountBonds;
    fromPartial(object: Partial<QueryAccountBonds>): QueryAccountBonds;
};
export declare const QueryAccountBondsResponse: {
    encode(message: QueryAccountBondsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAccountBondsResponse;
    fromPartial(object: Partial<QueryAccountBondsResponse>): QueryAccountBondsResponse;
};
export declare const QueryTotalBonded: {
    encode(message: QueryTotalBonded, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBonded;
    fromPartial(object: Partial<QueryTotalBonded>): QueryTotalBonded;
};
export declare const QueryTotalBondedResponse: {
    encode(message: QueryTotalBondedResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalBondedResponse;
    fromPartial(object: Partial<QueryTotalBondedResponse>): QueryTotalBondedResponse;
};
export declare const QueryTotalUnbonding: {
    encode(message: QueryTotalUnbonding, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalUnbonding;
    fromPartial(object: Partial<QueryTotalUnbonding>): QueryTotalUnbonding;
};
export declare const QueryTotalUnbondingResponse: {
    encode(message: QueryTotalUnbondingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTotalUnbondingResponse;
    fromPartial(object: Partial<QueryTotalUnbondingResponse>): QueryTotalUnbondingResponse;
};
export declare const QueryUpcomingIncentivePrograms: {
    encode(_: QueryUpcomingIncentivePrograms, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryUpcomingIncentivePrograms;
    fromPartial(_: Partial<QueryUpcomingIncentivePrograms>): QueryUpcomingIncentivePrograms;
};
export declare const QueryUpcomingIncentiveProgramsResponse: {
    encode(message: QueryUpcomingIncentiveProgramsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUpcomingIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryUpcomingIncentiveProgramsResponse>): QueryUpcomingIncentiveProgramsResponse;
};
export declare const QueryOngoingIncentivePrograms: {
    encode(_: QueryOngoingIncentivePrograms, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryOngoingIncentivePrograms;
    fromPartial(_: Partial<QueryOngoingIncentivePrograms>): QueryOngoingIncentivePrograms;
};
export declare const QueryOngoingIncentiveProgramsResponse: {
    encode(message: QueryOngoingIncentiveProgramsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOngoingIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryOngoingIncentiveProgramsResponse>): QueryOngoingIncentiveProgramsResponse;
};
export declare const QueryCompletedIncentivePrograms: {
    encode(_: QueryCompletedIncentivePrograms, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCompletedIncentivePrograms;
    fromPartial(_: Partial<QueryCompletedIncentivePrograms>): QueryCompletedIncentivePrograms;
};
export declare const QueryCompletedIncentiveProgramsResponse: {
    encode(message: QueryCompletedIncentiveProgramsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCompletedIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryCompletedIncentiveProgramsResponse>): QueryCompletedIncentiveProgramsResponse;
};
export declare const QueryIncentiveProgram: {
    encode(message: QueryIncentiveProgram, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentiveProgram;
    fromPartial(object: Partial<QueryIncentiveProgram>): QueryIncentiveProgram;
};
export declare const QueryIncentiveProgramResponse: {
    encode(message: QueryIncentiveProgramResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryIncentiveProgramResponse;
    fromPartial(object: Partial<QueryIncentiveProgramResponse>): QueryIncentiveProgramResponse;
};
export declare const QueryCurrentRates: {
    encode(message: QueryCurrentRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentRates;
    fromPartial(object: Partial<QueryCurrentRates>): QueryCurrentRates;
};
export declare const QueryCurrentRatesResponse: {
    encode(message: QueryCurrentRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentRatesResponse;
    fromPartial(object: Partial<QueryCurrentRatesResponse>): QueryCurrentRatesResponse;
};
export declare const QueryLastRewardTime: {
    encode(_: QueryLastRewardTime, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryLastRewardTime;
    fromPartial(_: Partial<QueryLastRewardTime>): QueryLastRewardTime;
};
export declare const QueryLastRewardTimeResponse: {
    encode(message: QueryLastRewardTimeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastRewardTimeResponse;
    fromPartial(object: Partial<QueryLastRewardTimeResponse>): QueryLastRewardTimeResponse;
};
export declare const QueryActualRates: {
    encode(message: QueryActualRates, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryActualRates;
    fromPartial(object: Partial<QueryActualRates>): QueryActualRates;
};
export declare const QueryActualRatesResponse: {
    encode(message: QueryActualRatesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryActualRatesResponse;
    fromPartial(object: Partial<QueryActualRatesResponse>): QueryActualRatesResponse;
};
