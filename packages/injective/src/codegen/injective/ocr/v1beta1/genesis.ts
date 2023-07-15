import { Params, ParamsSDKType, FeedConfig, FeedConfigSDKType, Transmission, TransmissionSDKType, EpochAndRound, EpochAndRoundSDKType } from "./ocr";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to OCR. */
  params?: Params;
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
/** GenesisState defines the OCR module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
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
  transmission?: Transmission;
}
export interface FeedTransmissionSDKType {
  feed_id: string;
  transmission?: TransmissionSDKType;
}
export interface FeedEpochAndRound {
  feedId: string;
  epochAndRound?: EpochAndRound;
}
export interface FeedEpochAndRoundSDKType {
  feed_id: string;
  epoch_and_round?: EpochAndRoundSDKType;
}
export interface FeedLatestAggregatorRoundIDs {
  feedId: string;
  aggregatorRoundId: Long;
}
export interface FeedLatestAggregatorRoundIDsSDKType {
  feed_id: string;
  aggregator_round_id: Long;
}
export interface RewardPool {
  feedId: string;
  amount?: Coin;
}
export interface RewardPoolSDKType {
  feed_id: string;
  amount?: CoinSDKType;
}
export interface FeedCounts {
  feedId: string;
  counts: Count[];
}
export interface FeedCountsSDKType {
  feed_id: string;
  counts: CountSDKType[];
}
export interface Count {
  address: string;
  count: Long;
}
export interface CountSDKType {
  address: string;
  count: Long;
}
export interface PendingPayeeship {
  feedId: string;
  transmitter: string;
  proposedPayee: string;
}
export interface PendingPayeeshipSDKType {
  feed_id: string;
  transmitter: string;
  proposed_payee: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feedConfigs: [],
    latestEpochAndRounds: [],
    feedTransmissions: [],
    latestAggregatorRoundIds: [],
    rewardPools: [],
    feedObservationCounts: [],
    feedTransmissionCounts: [],
    pendingPayeeships: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feedConfigs) {
      FeedConfig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.latestEpochAndRounds) {
      FeedEpochAndRound.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feedTransmissions) {
      FeedTransmission.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.latestAggregatorRoundIds) {
      FeedLatestAggregatorRoundIDs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.rewardPools) {
      RewardPool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.feedObservationCounts) {
      FeedCounts.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.feedTransmissionCounts) {
      FeedCounts.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.pendingPayeeships) {
      PendingPayeeship.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feedConfigs: Array.isArray(object?.feedConfigs) ? object.feedConfigs.map((e: any) => FeedConfig.fromJSON(e)) : [],
      latestEpochAndRounds: Array.isArray(object?.latestEpochAndRounds) ? object.latestEpochAndRounds.map((e: any) => FeedEpochAndRound.fromJSON(e)) : [],
      feedTransmissions: Array.isArray(object?.feedTransmissions) ? object.feedTransmissions.map((e: any) => FeedTransmission.fromJSON(e)) : [],
      latestAggregatorRoundIds: Array.isArray(object?.latestAggregatorRoundIds) ? object.latestAggregatorRoundIds.map((e: any) => FeedLatestAggregatorRoundIDs.fromJSON(e)) : [],
      rewardPools: Array.isArray(object?.rewardPools) ? object.rewardPools.map((e: any) => RewardPool.fromJSON(e)) : [],
      feedObservationCounts: Array.isArray(object?.feedObservationCounts) ? object.feedObservationCounts.map((e: any) => FeedCounts.fromJSON(e)) : [],
      feedTransmissionCounts: Array.isArray(object?.feedTransmissionCounts) ? object.feedTransmissionCounts.map((e: any) => FeedCounts.fromJSON(e)) : [],
      pendingPayeeships: Array.isArray(object?.pendingPayeeships) ? object.pendingPayeeships.map((e: any) => PendingPayeeship.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feedConfigs = object.feedConfigs?.map(e => FeedConfig.fromPartial(e)) || [];
    message.latestEpochAndRounds = object.latestEpochAndRounds?.map(e => FeedEpochAndRound.fromPartial(e)) || [];
    message.feedTransmissions = object.feedTransmissions?.map(e => FeedTransmission.fromPartial(e)) || [];
    message.latestAggregatorRoundIds = object.latestAggregatorRoundIds?.map(e => FeedLatestAggregatorRoundIDs.fromPartial(e)) || [];
    message.rewardPools = object.rewardPools?.map(e => RewardPool.fromPartial(e)) || [];
    message.feedObservationCounts = object.feedObservationCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.feedTransmissionCounts = object.feedTransmissionCounts?.map(e => FeedCounts.fromPartial(e)) || [];
    message.pendingPayeeships = object.pendingPayeeships?.map(e => PendingPayeeship.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeedTransmission(): FeedTransmission {
  return {
    feedId: "",
    transmission: undefined
  };
}
export const FeedTransmission = {
  encode(message: FeedTransmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmission !== undefined) {
      Transmission.encode(message.transmission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeedTransmission {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      transmission: isSet(object.transmission) ? Transmission.fromJSON(object.transmission) : undefined
    };
  },
  fromPartial(object: Partial<FeedTransmission>): FeedTransmission {
    const message = createBaseFeedTransmission();
    message.feedId = object.feedId ?? "";
    message.transmission = object.transmission !== undefined && object.transmission !== null ? Transmission.fromPartial(object.transmission) : undefined;
    return message;
  }
};
function createBaseFeedEpochAndRound(): FeedEpochAndRound {
  return {
    feedId: "",
    epochAndRound: undefined
  };
}
export const FeedEpochAndRound = {
  encode(message: FeedEpochAndRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeedEpochAndRound {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined
    };
  },
  fromPartial(object: Partial<FeedEpochAndRound>): FeedEpochAndRound {
    const message = createBaseFeedEpochAndRound();
    message.feedId = object.feedId ?? "";
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  }
};
function createBaseFeedLatestAggregatorRoundIDs(): FeedLatestAggregatorRoundIDs {
  return {
    feedId: "",
    aggregatorRoundId: Long.UZERO
  };
}
export const FeedLatestAggregatorRoundIDs = {
  encode(message: FeedLatestAggregatorRoundIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (!message.aggregatorRoundId.isZero()) {
      writer.uint32(16).uint64(message.aggregatorRoundId);
    }
    return writer;
  },
  fromJSON(object: any): FeedLatestAggregatorRoundIDs {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      aggregatorRoundId: isSet(object.aggregatorRoundId) ? Long.fromValue(object.aggregatorRoundId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<FeedLatestAggregatorRoundIDs>): FeedLatestAggregatorRoundIDs {
    const message = createBaseFeedLatestAggregatorRoundIDs();
    message.feedId = object.feedId ?? "";
    message.aggregatorRoundId = object.aggregatorRoundId !== undefined && object.aggregatorRoundId !== null ? Long.fromValue(object.aggregatorRoundId) : Long.UZERO;
    return message;
  }
};
function createBaseRewardPool(): RewardPool {
  return {
    feedId: "",
    amount: undefined
  };
}
export const RewardPool = {
  encode(message: RewardPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RewardPool {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<RewardPool>): RewardPool {
    const message = createBaseRewardPool();
    message.feedId = object.feedId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseFeedCounts(): FeedCounts {
  return {
    feedId: "",
    counts: []
  };
}
export const FeedCounts = {
  encode(message: FeedCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    for (const v of message.counts) {
      Count.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeedCounts {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => Count.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<FeedCounts>): FeedCounts {
    const message = createBaseFeedCounts();
    message.feedId = object.feedId ?? "";
    message.counts = object.counts?.map(e => Count.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCount(): Count {
  return {
    address: "",
    count: Long.UZERO
  };
}
export const Count = {
  encode(message: Count, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (!message.count.isZero()) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },
  fromJSON(object: any): Count {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Count>): Count {
    const message = createBaseCount();
    message.address = object.address ?? "";
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.UZERO;
    return message;
  }
};
function createBasePendingPayeeship(): PendingPayeeship {
  return {
    feedId: "",
    transmitter: "",
    proposedPayee: ""
  };
}
export const PendingPayeeship = {
  encode(message: PendingPayeeship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.transmitter !== "") {
      writer.uint32(18).string(message.transmitter);
    }
    if (message.proposedPayee !== "") {
      writer.uint32(26).string(message.proposedPayee);
    }
    return writer;
  },
  fromJSON(object: any): PendingPayeeship {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      proposedPayee: isSet(object.proposedPayee) ? String(object.proposedPayee) : ""
    };
  },
  fromPartial(object: Partial<PendingPayeeship>): PendingPayeeship {
    const message = createBasePendingPayeeship();
    message.feedId = object.feedId ?? "";
    message.transmitter = object.transmitter ?? "";
    message.proposedPayee = object.proposedPayee ?? "";
    return message;
  }
};