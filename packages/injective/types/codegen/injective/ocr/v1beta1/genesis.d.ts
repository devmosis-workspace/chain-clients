import { Params, ParamsAmino, ParamsSDKType, FeedConfig, FeedConfigAmino, FeedConfigSDKType, Transmission, TransmissionAmino, TransmissionSDKType, EpochAndRound, EpochAndRoundAmino, EpochAndRoundSDKType } from "./ocr";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to OCR. */
    params: Params;
    /** feed_configs stores all of the supported OCR feeds */
    feedConfigs: FeedConfig[];
    /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
    latestEpochAndRounds: FeedEpochAndRound[];
    /** feed_transmissions stores the last transmission for each feed */
    feedTransmissions: FeedTransmission[];
    /**
     * latest_aggregator_round_ids stores the latest aggregator round ID for each
     * feedId
     */
    latestAggregatorRoundIds: FeedLatestAggregatorRoundIDs[];
    /** reward_pools stores the reward pools */
    rewardPools: RewardPool[];
    /** feed_observation_counts stores the feed observation counts */
    feedObservationCounts: FeedCounts[];
    /** feed_transmission_counts stores the feed transmission counts */
    feedTransmissionCounts: FeedCounts[];
    /** pending_payeeships stores the pending payeeships */
    pendingPayeeships: PendingPayeeship[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to OCR. */
    params?: ParamsAmino;
    /** feed_configs stores all of the supported OCR feeds */
    feed_configs: FeedConfigAmino[];
    /** latest_epoch_and_rounds stores the latest epoch and round for each feedId */
    latest_epoch_and_rounds: FeedEpochAndRoundAmino[];
    /** feed_transmissions stores the last transmission for each feed */
    feed_transmissions: FeedTransmissionAmino[];
    /**
     * latest_aggregator_round_ids stores the latest aggregator round ID for each
     * feedId
     */
    latest_aggregator_round_ids: FeedLatestAggregatorRoundIDsAmino[];
    /** reward_pools stores the reward pools */
    reward_pools: RewardPoolAmino[];
    /** feed_observation_counts stores the feed observation counts */
    feed_observation_counts: FeedCountsAmino[];
    /** feed_transmission_counts stores the feed transmission counts */
    feed_transmission_counts: FeedCountsAmino[];
    /** pending_payeeships stores the pending payeeships */
    pending_payeeships: PendingPayeeshipAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.ocr.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feed_configs: FeedConfigSDKType[];
    latest_epoch_and_rounds: FeedEpochAndRoundSDKType[];
    feed_transmissions: FeedTransmissionSDKType[];
    latest_aggregator_round_ids: FeedLatestAggregatorRoundIDsSDKType[];
    reward_pools: RewardPoolSDKType[];
    feed_observation_counts: FeedCountsSDKType[];
    feed_transmission_counts: FeedCountsSDKType[];
    pending_payeeships: PendingPayeeshipSDKType[];
}
export interface FeedTransmission {
    feedId: string;
    transmission: Transmission;
}
export interface FeedTransmissionProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedTransmission";
    value: Uint8Array;
}
export interface FeedTransmissionAmino {
    feed_id: string;
    transmission?: TransmissionAmino;
}
export interface FeedTransmissionAminoMsg {
    type: "/injective.ocr.v1beta1.FeedTransmission";
    value: FeedTransmissionAmino;
}
export interface FeedTransmissionSDKType {
    feed_id: string;
    transmission: TransmissionSDKType;
}
export interface FeedEpochAndRound {
    feedId: string;
    epochAndRound: EpochAndRound;
}
export interface FeedEpochAndRoundProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedEpochAndRound";
    value: Uint8Array;
}
export interface FeedEpochAndRoundAmino {
    feed_id: string;
    epoch_and_round?: EpochAndRoundAmino;
}
export interface FeedEpochAndRoundAminoMsg {
    type: "/injective.ocr.v1beta1.FeedEpochAndRound";
    value: FeedEpochAndRoundAmino;
}
export interface FeedEpochAndRoundSDKType {
    feed_id: string;
    epoch_and_round: EpochAndRoundSDKType;
}
export interface FeedLatestAggregatorRoundIDs {
    feedId: string;
    aggregatorRoundId: bigint;
}
export interface FeedLatestAggregatorRoundIDsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
    value: Uint8Array;
}
export interface FeedLatestAggregatorRoundIDsAmino {
    feed_id: string;
    aggregator_round_id: string;
}
export interface FeedLatestAggregatorRoundIDsAminoMsg {
    type: "/injective.ocr.v1beta1.FeedLatestAggregatorRoundIDs";
    value: FeedLatestAggregatorRoundIDsAmino;
}
export interface FeedLatestAggregatorRoundIDsSDKType {
    feed_id: string;
    aggregator_round_id: bigint;
}
export interface RewardPool {
    feedId: string;
    amount: Coin;
}
export interface RewardPoolProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.RewardPool";
    value: Uint8Array;
}
export interface RewardPoolAmino {
    feed_id: string;
    amount?: CoinAmino;
}
export interface RewardPoolAminoMsg {
    type: "/injective.ocr.v1beta1.RewardPool";
    value: RewardPoolAmino;
}
export interface RewardPoolSDKType {
    feed_id: string;
    amount: CoinSDKType;
}
export interface FeedCounts {
    feedId: string;
    counts: Count[];
}
export interface FeedCountsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedCounts";
    value: Uint8Array;
}
export interface FeedCountsAmino {
    feed_id: string;
    counts: CountAmino[];
}
export interface FeedCountsAminoMsg {
    type: "/injective.ocr.v1beta1.FeedCounts";
    value: FeedCountsAmino;
}
export interface FeedCountsSDKType {
    feed_id: string;
    counts: CountSDKType[];
}
export interface Count {
    address: string;
    count: bigint;
}
export interface CountProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.Count";
    value: Uint8Array;
}
export interface CountAmino {
    address: string;
    count: string;
}
export interface CountAminoMsg {
    type: "/injective.ocr.v1beta1.Count";
    value: CountAmino;
}
export interface CountSDKType {
    address: string;
    count: bigint;
}
export interface PendingPayeeship {
    feedId: string;
    transmitter: string;
    proposedPayee: string;
}
export interface PendingPayeeshipProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.PendingPayeeship";
    value: Uint8Array;
}
export interface PendingPayeeshipAmino {
    feed_id: string;
    transmitter: string;
    proposed_payee: string;
}
export interface PendingPayeeshipAminoMsg {
    type: "/injective.ocr.v1beta1.PendingPayeeship";
    value: PendingPayeeshipAmino;
}
export interface PendingPayeeshipSDKType {
    feed_id: string;
    transmitter: string;
    proposed_payee: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const FeedTransmission: {
    typeUrl: string;
    encode(message: FeedTransmission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedTransmission;
    fromPartial(object: Partial<FeedTransmission>): FeedTransmission;
    fromAmino(object: FeedTransmissionAmino): FeedTransmission;
    toAmino(message: FeedTransmission): FeedTransmissionAmino;
    fromAminoMsg(object: FeedTransmissionAminoMsg): FeedTransmission;
    fromProtoMsg(message: FeedTransmissionProtoMsg): FeedTransmission;
    toProto(message: FeedTransmission): Uint8Array;
    toProtoMsg(message: FeedTransmission): FeedTransmissionProtoMsg;
};
export declare const FeedEpochAndRound: {
    typeUrl: string;
    encode(message: FeedEpochAndRound, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedEpochAndRound;
    fromPartial(object: Partial<FeedEpochAndRound>): FeedEpochAndRound;
    fromAmino(object: FeedEpochAndRoundAmino): FeedEpochAndRound;
    toAmino(message: FeedEpochAndRound): FeedEpochAndRoundAmino;
    fromAminoMsg(object: FeedEpochAndRoundAminoMsg): FeedEpochAndRound;
    fromProtoMsg(message: FeedEpochAndRoundProtoMsg): FeedEpochAndRound;
    toProto(message: FeedEpochAndRound): Uint8Array;
    toProtoMsg(message: FeedEpochAndRound): FeedEpochAndRoundProtoMsg;
};
export declare const FeedLatestAggregatorRoundIDs: {
    typeUrl: string;
    encode(message: FeedLatestAggregatorRoundIDs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedLatestAggregatorRoundIDs;
    fromPartial(object: Partial<FeedLatestAggregatorRoundIDs>): FeedLatestAggregatorRoundIDs;
    fromAmino(object: FeedLatestAggregatorRoundIDsAmino): FeedLatestAggregatorRoundIDs;
    toAmino(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsAmino;
    fromAminoMsg(object: FeedLatestAggregatorRoundIDsAminoMsg): FeedLatestAggregatorRoundIDs;
    fromProtoMsg(message: FeedLatestAggregatorRoundIDsProtoMsg): FeedLatestAggregatorRoundIDs;
    toProto(message: FeedLatestAggregatorRoundIDs): Uint8Array;
    toProtoMsg(message: FeedLatestAggregatorRoundIDs): FeedLatestAggregatorRoundIDsProtoMsg;
};
export declare const RewardPool: {
    typeUrl: string;
    encode(message: RewardPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardPool;
    fromPartial(object: Partial<RewardPool>): RewardPool;
    fromAmino(object: RewardPoolAmino): RewardPool;
    toAmino(message: RewardPool): RewardPoolAmino;
    fromAminoMsg(object: RewardPoolAminoMsg): RewardPool;
    fromProtoMsg(message: RewardPoolProtoMsg): RewardPool;
    toProto(message: RewardPool): Uint8Array;
    toProtoMsg(message: RewardPool): RewardPoolProtoMsg;
};
export declare const FeedCounts: {
    typeUrl: string;
    encode(message: FeedCounts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedCounts;
    fromPartial(object: Partial<FeedCounts>): FeedCounts;
    fromAmino(object: FeedCountsAmino): FeedCounts;
    toAmino(message: FeedCounts): FeedCountsAmino;
    fromAminoMsg(object: FeedCountsAminoMsg): FeedCounts;
    fromProtoMsg(message: FeedCountsProtoMsg): FeedCounts;
    toProto(message: FeedCounts): Uint8Array;
    toProtoMsg(message: FeedCounts): FeedCountsProtoMsg;
};
export declare const Count: {
    typeUrl: string;
    encode(message: Count, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Count;
    fromPartial(object: Partial<Count>): Count;
    fromAmino(object: CountAmino): Count;
    toAmino(message: Count): CountAmino;
    fromAminoMsg(object: CountAminoMsg): Count;
    fromProtoMsg(message: CountProtoMsg): Count;
    toProto(message: Count): Uint8Array;
    toProtoMsg(message: Count): CountProtoMsg;
};
export declare const PendingPayeeship: {
    typeUrl: string;
    encode(message: PendingPayeeship, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingPayeeship;
    fromPartial(object: Partial<PendingPayeeship>): PendingPayeeship;
    fromAmino(object: PendingPayeeshipAmino): PendingPayeeship;
    toAmino(message: PendingPayeeship): PendingPayeeshipAmino;
    fromAminoMsg(object: PendingPayeeshipAminoMsg): PendingPayeeship;
    fromProtoMsg(message: PendingPayeeshipProtoMsg): PendingPayeeship;
    toProto(message: PendingPayeeship): Uint8Array;
    toProtoMsg(message: PendingPayeeship): PendingPayeeshipProtoMsg;
};
