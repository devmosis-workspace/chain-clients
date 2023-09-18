import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Unbonding, UnbondingAmino, UnbondingSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryParams";
    value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.incentive.v1.QueryParams";
    value: QueryParamsAmino;
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
    address: string;
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
    rewards: CoinAmino[];
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
    address: string;
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
    bonded: CoinAmino[];
    unbonding: CoinAmino[];
    unbondings: UnbondingAmino[];
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
    denom: string;
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
    bonded: CoinAmino[];
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
    denom: string;
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
    unbonding: CoinAmino[];
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
export interface QueryUpcomingIncentivePrograms {
}
export interface QueryUpcomingIncentiveProgramsProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryUpcomingIncentivePrograms";
    value: Uint8Array;
}
/**
 * QueryUpcomingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsAmino {
}
export interface QueryUpcomingIncentiveProgramsAminoMsg {
    type: "/umee.incentive.v1.QueryUpcomingIncentivePrograms";
    value: QueryUpcomingIncentiveProgramsAmino;
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
export interface QueryUpcomingIncentiveProgramsResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryUpcomingIncentiveProgramsResponse";
    value: Uint8Array;
}
/**
 * QueryUpcomingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryUpcomingIncentiveProgramsResponseAmino {
    programs: IncentiveProgramAmino[];
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
export interface QueryOngoingIncentivePrograms {
}
export interface QueryOngoingIncentiveProgramsProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryOngoingIncentivePrograms";
    value: Uint8Array;
}
/**
 * QueryOngoingIncentivePrograms defines the request structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsAmino {
}
export interface QueryOngoingIncentiveProgramsAminoMsg {
    type: "/umee.incentive.v1.QueryOngoingIncentivePrograms";
    value: QueryOngoingIncentiveProgramsAmino;
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
export interface QueryOngoingIncentiveProgramsResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryOngoingIncentiveProgramsResponse";
    value: Uint8Array;
}
/**
 * QueryOngoingIncentiveProgramsResponse defines the response structure for the
 * OngoingIncentivePrograms and UpcomingIncentivePrograms gRPC service handlers.
 */
export interface QueryOngoingIncentiveProgramsResponseAmino {
    programs: IncentiveProgramAmino[];
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
export interface QueryCompletedIncentivePrograms {
}
export interface QueryCompletedIncentiveProgramsProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryCompletedIncentivePrograms";
    value: Uint8Array;
}
/**
 * QueryCompletedIncentivePrograms defines the request structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsAmino {
}
export interface QueryCompletedIncentiveProgramsAminoMsg {
    type: "/umee.incentive.v1.QueryCompletedIncentivePrograms";
    value: QueryCompletedIncentiveProgramsAmino;
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
export interface QueryCompletedIncentiveProgramsResponseProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryCompletedIncentiveProgramsResponse";
    value: Uint8Array;
}
/**
 * QueryCompletedIncentiveProgramsResponse defines the response structure for the
 * CompletedIncentivePrograms gRPC service handler.
 */
export interface QueryCompletedIncentiveProgramsResponseAmino {
    programs: IncentiveProgramAmino[];
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
    id: number;
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
    uToken: string;
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
    rewards: CoinAmino[];
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
export interface QueryLastRewardTime {
}
export interface QueryLastRewardTimeProtoMsg {
    typeUrl: "/umee.incentive.v1.QueryLastRewardTime";
    value: Uint8Array;
}
/**
 * QueryLastRewardTime defines the request structure for the LastRewardTime gRPC service
 * handler.
 */
export interface QueryLastRewardTimeAmino {
}
export interface QueryLastRewardTimeAminoMsg {
    type: "/umee.incentive.v1.QueryLastRewardTime";
    value: QueryLastRewardTimeAmino;
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
    time: string;
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
    uToken: string;
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
    APY: string;
}
export interface QueryActualRatesResponseAminoMsg {
    type: "/umee.incentive.v1.QueryActualRatesResponse";
    value: QueryActualRatesResponseAmino;
}
/** QueryActualRatesResponse defines the response structure for the ActualRates gRPC service handler. */
export interface QueryActualRatesResponseSDKType {
    APY: string;
}
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
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
export declare const QueryPendingRewards: {
    typeUrl: string;
    encode(message: QueryPendingRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingRewards;
    fromPartial(object: Partial<QueryPendingRewards>): QueryPendingRewards;
    fromAmino(object: QueryPendingRewardsAmino): QueryPendingRewards;
    toAmino(message: QueryPendingRewards): QueryPendingRewardsAmino;
    fromAminoMsg(object: QueryPendingRewardsAminoMsg): QueryPendingRewards;
    fromProtoMsg(message: QueryPendingRewardsProtoMsg): QueryPendingRewards;
    toProto(message: QueryPendingRewards): Uint8Array;
    toProtoMsg(message: QueryPendingRewards): QueryPendingRewardsProtoMsg;
};
export declare const QueryPendingRewardsResponse: {
    typeUrl: string;
    encode(message: QueryPendingRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingRewardsResponse;
    fromPartial(object: Partial<QueryPendingRewardsResponse>): QueryPendingRewardsResponse;
    fromAmino(object: QueryPendingRewardsResponseAmino): QueryPendingRewardsResponse;
    toAmino(message: QueryPendingRewardsResponse): QueryPendingRewardsResponseAmino;
    fromAminoMsg(object: QueryPendingRewardsResponseAminoMsg): QueryPendingRewardsResponse;
    fromProtoMsg(message: QueryPendingRewardsResponseProtoMsg): QueryPendingRewardsResponse;
    toProto(message: QueryPendingRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryPendingRewardsResponse): QueryPendingRewardsResponseProtoMsg;
};
export declare const QueryAccountBonds: {
    typeUrl: string;
    encode(message: QueryAccountBonds, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBonds;
    fromPartial(object: Partial<QueryAccountBonds>): QueryAccountBonds;
    fromAmino(object: QueryAccountBondsAmino): QueryAccountBonds;
    toAmino(message: QueryAccountBonds): QueryAccountBondsAmino;
    fromAminoMsg(object: QueryAccountBondsAminoMsg): QueryAccountBonds;
    fromProtoMsg(message: QueryAccountBondsProtoMsg): QueryAccountBonds;
    toProto(message: QueryAccountBonds): Uint8Array;
    toProtoMsg(message: QueryAccountBonds): QueryAccountBondsProtoMsg;
};
export declare const QueryAccountBondsResponse: {
    typeUrl: string;
    encode(message: QueryAccountBondsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAccountBondsResponse;
    fromPartial(object: Partial<QueryAccountBondsResponse>): QueryAccountBondsResponse;
    fromAmino(object: QueryAccountBondsResponseAmino): QueryAccountBondsResponse;
    toAmino(message: QueryAccountBondsResponse): QueryAccountBondsResponseAmino;
    fromAminoMsg(object: QueryAccountBondsResponseAminoMsg): QueryAccountBondsResponse;
    fromProtoMsg(message: QueryAccountBondsResponseProtoMsg): QueryAccountBondsResponse;
    toProto(message: QueryAccountBondsResponse): Uint8Array;
    toProtoMsg(message: QueryAccountBondsResponse): QueryAccountBondsResponseProtoMsg;
};
export declare const QueryTotalBonded: {
    typeUrl: string;
    encode(message: QueryTotalBonded, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBonded;
    fromPartial(object: Partial<QueryTotalBonded>): QueryTotalBonded;
    fromAmino(object: QueryTotalBondedAmino): QueryTotalBonded;
    toAmino(message: QueryTotalBonded): QueryTotalBondedAmino;
    fromAminoMsg(object: QueryTotalBondedAminoMsg): QueryTotalBonded;
    fromProtoMsg(message: QueryTotalBondedProtoMsg): QueryTotalBonded;
    toProto(message: QueryTotalBonded): Uint8Array;
    toProtoMsg(message: QueryTotalBonded): QueryTotalBondedProtoMsg;
};
export declare const QueryTotalBondedResponse: {
    typeUrl: string;
    encode(message: QueryTotalBondedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalBondedResponse;
    fromPartial(object: Partial<QueryTotalBondedResponse>): QueryTotalBondedResponse;
    fromAmino(object: QueryTotalBondedResponseAmino): QueryTotalBondedResponse;
    toAmino(message: QueryTotalBondedResponse): QueryTotalBondedResponseAmino;
    fromAminoMsg(object: QueryTotalBondedResponseAminoMsg): QueryTotalBondedResponse;
    fromProtoMsg(message: QueryTotalBondedResponseProtoMsg): QueryTotalBondedResponse;
    toProto(message: QueryTotalBondedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalBondedResponse): QueryTotalBondedResponseProtoMsg;
};
export declare const QueryTotalUnbonding: {
    typeUrl: string;
    encode(message: QueryTotalUnbonding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalUnbonding;
    fromPartial(object: Partial<QueryTotalUnbonding>): QueryTotalUnbonding;
    fromAmino(object: QueryTotalUnbondingAmino): QueryTotalUnbonding;
    toAmino(message: QueryTotalUnbonding): QueryTotalUnbondingAmino;
    fromAminoMsg(object: QueryTotalUnbondingAminoMsg): QueryTotalUnbonding;
    fromProtoMsg(message: QueryTotalUnbondingProtoMsg): QueryTotalUnbonding;
    toProto(message: QueryTotalUnbonding): Uint8Array;
    toProtoMsg(message: QueryTotalUnbonding): QueryTotalUnbondingProtoMsg;
};
export declare const QueryTotalUnbondingResponse: {
    typeUrl: string;
    encode(message: QueryTotalUnbondingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTotalUnbondingResponse;
    fromPartial(object: Partial<QueryTotalUnbondingResponse>): QueryTotalUnbondingResponse;
    fromAmino(object: QueryTotalUnbondingResponseAmino): QueryTotalUnbondingResponse;
    toAmino(message: QueryTotalUnbondingResponse): QueryTotalUnbondingResponseAmino;
    fromAminoMsg(object: QueryTotalUnbondingResponseAminoMsg): QueryTotalUnbondingResponse;
    fromProtoMsg(message: QueryTotalUnbondingResponseProtoMsg): QueryTotalUnbondingResponse;
    toProto(message: QueryTotalUnbondingResponse): Uint8Array;
    toProtoMsg(message: QueryTotalUnbondingResponse): QueryTotalUnbondingResponseProtoMsg;
};
export declare const QueryUpcomingIncentivePrograms: {
    typeUrl: string;
    encode(_: QueryUpcomingIncentivePrograms, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryUpcomingIncentivePrograms;
    fromPartial(_: Partial<QueryUpcomingIncentivePrograms>): QueryUpcomingIncentivePrograms;
    fromAmino(_: QueryUpcomingIncentiveProgramsAmino): QueryUpcomingIncentivePrograms;
    toAmino(_: QueryUpcomingIncentivePrograms): QueryUpcomingIncentiveProgramsAmino;
    fromAminoMsg(object: QueryUpcomingIncentiveProgramsAminoMsg): QueryUpcomingIncentivePrograms;
    fromProtoMsg(message: QueryUpcomingIncentiveProgramsProtoMsg): QueryUpcomingIncentivePrograms;
    toProto(message: QueryUpcomingIncentivePrograms): Uint8Array;
    toProtoMsg(message: QueryUpcomingIncentivePrograms): QueryUpcomingIncentiveProgramsProtoMsg;
};
export declare const QueryUpcomingIncentiveProgramsResponse: {
    typeUrl: string;
    encode(message: QueryUpcomingIncentiveProgramsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryUpcomingIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryUpcomingIncentiveProgramsResponse>): QueryUpcomingIncentiveProgramsResponse;
    fromAmino(object: QueryUpcomingIncentiveProgramsResponseAmino): QueryUpcomingIncentiveProgramsResponse;
    toAmino(message: QueryUpcomingIncentiveProgramsResponse): QueryUpcomingIncentiveProgramsResponseAmino;
    fromAminoMsg(object: QueryUpcomingIncentiveProgramsResponseAminoMsg): QueryUpcomingIncentiveProgramsResponse;
    fromProtoMsg(message: QueryUpcomingIncentiveProgramsResponseProtoMsg): QueryUpcomingIncentiveProgramsResponse;
    toProto(message: QueryUpcomingIncentiveProgramsResponse): Uint8Array;
    toProtoMsg(message: QueryUpcomingIncentiveProgramsResponse): QueryUpcomingIncentiveProgramsResponseProtoMsg;
};
export declare const QueryOngoingIncentivePrograms: {
    typeUrl: string;
    encode(_: QueryOngoingIncentivePrograms, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOngoingIncentivePrograms;
    fromPartial(_: Partial<QueryOngoingIncentivePrograms>): QueryOngoingIncentivePrograms;
    fromAmino(_: QueryOngoingIncentiveProgramsAmino): QueryOngoingIncentivePrograms;
    toAmino(_: QueryOngoingIncentivePrograms): QueryOngoingIncentiveProgramsAmino;
    fromAminoMsg(object: QueryOngoingIncentiveProgramsAminoMsg): QueryOngoingIncentivePrograms;
    fromProtoMsg(message: QueryOngoingIncentiveProgramsProtoMsg): QueryOngoingIncentivePrograms;
    toProto(message: QueryOngoingIncentivePrograms): Uint8Array;
    toProtoMsg(message: QueryOngoingIncentivePrograms): QueryOngoingIncentiveProgramsProtoMsg;
};
export declare const QueryOngoingIncentiveProgramsResponse: {
    typeUrl: string;
    encode(message: QueryOngoingIncentiveProgramsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOngoingIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryOngoingIncentiveProgramsResponse>): QueryOngoingIncentiveProgramsResponse;
    fromAmino(object: QueryOngoingIncentiveProgramsResponseAmino): QueryOngoingIncentiveProgramsResponse;
    toAmino(message: QueryOngoingIncentiveProgramsResponse): QueryOngoingIncentiveProgramsResponseAmino;
    fromAminoMsg(object: QueryOngoingIncentiveProgramsResponseAminoMsg): QueryOngoingIncentiveProgramsResponse;
    fromProtoMsg(message: QueryOngoingIncentiveProgramsResponseProtoMsg): QueryOngoingIncentiveProgramsResponse;
    toProto(message: QueryOngoingIncentiveProgramsResponse): Uint8Array;
    toProtoMsg(message: QueryOngoingIncentiveProgramsResponse): QueryOngoingIncentiveProgramsResponseProtoMsg;
};
export declare const QueryCompletedIncentivePrograms: {
    typeUrl: string;
    encode(_: QueryCompletedIncentivePrograms, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCompletedIncentivePrograms;
    fromPartial(_: Partial<QueryCompletedIncentivePrograms>): QueryCompletedIncentivePrograms;
    fromAmino(_: QueryCompletedIncentiveProgramsAmino): QueryCompletedIncentivePrograms;
    toAmino(_: QueryCompletedIncentivePrograms): QueryCompletedIncentiveProgramsAmino;
    fromAminoMsg(object: QueryCompletedIncentiveProgramsAminoMsg): QueryCompletedIncentivePrograms;
    fromProtoMsg(message: QueryCompletedIncentiveProgramsProtoMsg): QueryCompletedIncentivePrograms;
    toProto(message: QueryCompletedIncentivePrograms): Uint8Array;
    toProtoMsg(message: QueryCompletedIncentivePrograms): QueryCompletedIncentiveProgramsProtoMsg;
};
export declare const QueryCompletedIncentiveProgramsResponse: {
    typeUrl: string;
    encode(message: QueryCompletedIncentiveProgramsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCompletedIncentiveProgramsResponse;
    fromPartial(object: Partial<QueryCompletedIncentiveProgramsResponse>): QueryCompletedIncentiveProgramsResponse;
    fromAmino(object: QueryCompletedIncentiveProgramsResponseAmino): QueryCompletedIncentiveProgramsResponse;
    toAmino(message: QueryCompletedIncentiveProgramsResponse): QueryCompletedIncentiveProgramsResponseAmino;
    fromAminoMsg(object: QueryCompletedIncentiveProgramsResponseAminoMsg): QueryCompletedIncentiveProgramsResponse;
    fromProtoMsg(message: QueryCompletedIncentiveProgramsResponseProtoMsg): QueryCompletedIncentiveProgramsResponse;
    toProto(message: QueryCompletedIncentiveProgramsResponse): Uint8Array;
    toProtoMsg(message: QueryCompletedIncentiveProgramsResponse): QueryCompletedIncentiveProgramsResponseProtoMsg;
};
export declare const QueryIncentiveProgram: {
    typeUrl: string;
    encode(message: QueryIncentiveProgram, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentiveProgram;
    fromPartial(object: Partial<QueryIncentiveProgram>): QueryIncentiveProgram;
    fromAmino(object: QueryIncentiveProgramAmino): QueryIncentiveProgram;
    toAmino(message: QueryIncentiveProgram): QueryIncentiveProgramAmino;
    fromAminoMsg(object: QueryIncentiveProgramAminoMsg): QueryIncentiveProgram;
    fromProtoMsg(message: QueryIncentiveProgramProtoMsg): QueryIncentiveProgram;
    toProto(message: QueryIncentiveProgram): Uint8Array;
    toProtoMsg(message: QueryIncentiveProgram): QueryIncentiveProgramProtoMsg;
};
export declare const QueryIncentiveProgramResponse: {
    typeUrl: string;
    encode(message: QueryIncentiveProgramResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentiveProgramResponse;
    fromPartial(object: Partial<QueryIncentiveProgramResponse>): QueryIncentiveProgramResponse;
    fromAmino(object: QueryIncentiveProgramResponseAmino): QueryIncentiveProgramResponse;
    toAmino(message: QueryIncentiveProgramResponse): QueryIncentiveProgramResponseAmino;
    fromAminoMsg(object: QueryIncentiveProgramResponseAminoMsg): QueryIncentiveProgramResponse;
    fromProtoMsg(message: QueryIncentiveProgramResponseProtoMsg): QueryIncentiveProgramResponse;
    toProto(message: QueryIncentiveProgramResponse): Uint8Array;
    toProtoMsg(message: QueryIncentiveProgramResponse): QueryIncentiveProgramResponseProtoMsg;
};
export declare const QueryCurrentRates: {
    typeUrl: string;
    encode(message: QueryCurrentRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentRates;
    fromPartial(object: Partial<QueryCurrentRates>): QueryCurrentRates;
    fromAmino(object: QueryCurrentRatesAmino): QueryCurrentRates;
    toAmino(message: QueryCurrentRates): QueryCurrentRatesAmino;
    fromAminoMsg(object: QueryCurrentRatesAminoMsg): QueryCurrentRates;
    fromProtoMsg(message: QueryCurrentRatesProtoMsg): QueryCurrentRates;
    toProto(message: QueryCurrentRates): Uint8Array;
    toProtoMsg(message: QueryCurrentRates): QueryCurrentRatesProtoMsg;
};
export declare const QueryCurrentRatesResponse: {
    typeUrl: string;
    encode(message: QueryCurrentRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentRatesResponse;
    fromPartial(object: Partial<QueryCurrentRatesResponse>): QueryCurrentRatesResponse;
    fromAmino(object: QueryCurrentRatesResponseAmino): QueryCurrentRatesResponse;
    toAmino(message: QueryCurrentRatesResponse): QueryCurrentRatesResponseAmino;
    fromAminoMsg(object: QueryCurrentRatesResponseAminoMsg): QueryCurrentRatesResponse;
    fromProtoMsg(message: QueryCurrentRatesResponseProtoMsg): QueryCurrentRatesResponse;
    toProto(message: QueryCurrentRatesResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentRatesResponse): QueryCurrentRatesResponseProtoMsg;
};
export declare const QueryLastRewardTime: {
    typeUrl: string;
    encode(_: QueryLastRewardTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLastRewardTime;
    fromPartial(_: Partial<QueryLastRewardTime>): QueryLastRewardTime;
    fromAmino(_: QueryLastRewardTimeAmino): QueryLastRewardTime;
    toAmino(_: QueryLastRewardTime): QueryLastRewardTimeAmino;
    fromAminoMsg(object: QueryLastRewardTimeAminoMsg): QueryLastRewardTime;
    fromProtoMsg(message: QueryLastRewardTimeProtoMsg): QueryLastRewardTime;
    toProto(message: QueryLastRewardTime): Uint8Array;
    toProtoMsg(message: QueryLastRewardTime): QueryLastRewardTimeProtoMsg;
};
export declare const QueryLastRewardTimeResponse: {
    typeUrl: string;
    encode(message: QueryLastRewardTimeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastRewardTimeResponse;
    fromPartial(object: Partial<QueryLastRewardTimeResponse>): QueryLastRewardTimeResponse;
    fromAmino(object: QueryLastRewardTimeResponseAmino): QueryLastRewardTimeResponse;
    toAmino(message: QueryLastRewardTimeResponse): QueryLastRewardTimeResponseAmino;
    fromAminoMsg(object: QueryLastRewardTimeResponseAminoMsg): QueryLastRewardTimeResponse;
    fromProtoMsg(message: QueryLastRewardTimeResponseProtoMsg): QueryLastRewardTimeResponse;
    toProto(message: QueryLastRewardTimeResponse): Uint8Array;
    toProtoMsg(message: QueryLastRewardTimeResponse): QueryLastRewardTimeResponseProtoMsg;
};
export declare const QueryActualRates: {
    typeUrl: string;
    encode(message: QueryActualRates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActualRates;
    fromPartial(object: Partial<QueryActualRates>): QueryActualRates;
    fromAmino(object: QueryActualRatesAmino): QueryActualRates;
    toAmino(message: QueryActualRates): QueryActualRatesAmino;
    fromAminoMsg(object: QueryActualRatesAminoMsg): QueryActualRates;
    fromProtoMsg(message: QueryActualRatesProtoMsg): QueryActualRates;
    toProto(message: QueryActualRates): Uint8Array;
    toProtoMsg(message: QueryActualRates): QueryActualRatesProtoMsg;
};
export declare const QueryActualRatesResponse: {
    typeUrl: string;
    encode(message: QueryActualRatesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryActualRatesResponse;
    fromPartial(object: Partial<QueryActualRatesResponse>): QueryActualRatesResponse;
    fromAmino(object: QueryActualRatesResponseAmino): QueryActualRatesResponse;
    toAmino(message: QueryActualRatesResponse): QueryActualRatesResponseAmino;
    fromAminoMsg(object: QueryActualRatesResponseAminoMsg): QueryActualRatesResponse;
    fromProtoMsg(message: QueryActualRatesResponseProtoMsg): QueryActualRatesResponse;
    toProto(message: QueryActualRatesResponse): Uint8Array;
    toProtoMsg(message: QueryActualRatesResponse): QueryActualRatesResponseProtoMsg;
};
