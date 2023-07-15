import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** The block number interval at which payouts are made */
    payoutBlockInterval: Long;
    /** The admin for the OCR module */
    moduleAdmin: string;
}
export interface ParamsSDKType {
    link_denom: string;
    payout_block_interval: Long;
    module_admin: string;
}
export interface FeedConfig {
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     */
    transmitters: string[];
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchainConfigVersion: Long;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchainConfig: Uint8Array;
    /** feed-specific params for the Cosmos module. */
    moduleParams?: ModuleParams;
}
export interface FeedConfigSDKType {
    signers: string[];
    transmitters: string[];
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: Long;
    offchain_config: Uint8Array;
    module_params?: ModuleParamsSDKType;
}
export interface FeedConfigInfo {
    latestConfigDigest: Uint8Array;
    f: number;
    n: number;
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     */
    configCount: Long;
    latestConfigBlockNumber: Long;
}
export interface FeedConfigInfoSDKType {
    latest_config_digest: Uint8Array;
    f: number;
    n: number;
    config_count: Long;
    latest_config_block_number: Long;
}
export interface ModuleParams {
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /** lowest answer the median of a report is allowed to be */
    minAnswer: string;
    /** highest answer the median of a report is allowed to be */
    maxAnswer: string;
    /** Fixed LINK reward for each observer */
    linkPerObservation: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission: string;
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** Enables unique reports */
    uniqueReports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     */
    description: string;
    /** feed administrator */
    feedAdmin: string;
    /** feed billing administrator */
    billingAdmin: string;
}
export interface ModuleParamsSDKType {
    feed_id: string;
    min_answer: string;
    max_answer: string;
    link_per_observation: string;
    link_per_transmission: string;
    link_denom: string;
    unique_reports: boolean;
    description: string;
    feed_admin: string;
    billing_admin: string;
}
export interface ContractConfig {
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     */
    configCount: Long;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     */
    transmitters: string[];
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchainConfigVersion: Long;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchainConfig: Uint8Array;
}
export interface ContractConfigSDKType {
    config_count: Long;
    signers: string[];
    transmitters: string[];
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: Long;
    offchain_config: Uint8Array;
}
export interface SetConfigProposal {
    title: string;
    description: string;
    config?: FeedConfig;
}
export interface SetConfigProposalSDKType {
    title: string;
    description: string;
    config?: FeedConfigSDKType;
}
export interface FeedProperties {
    /** feed_id is an unique ID for the target of this config */
    feedId: string;
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchainConfig: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchainConfigVersion: Long;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchainConfig: Uint8Array;
    /** lowest answer the median of a report is allowed to be */
    minAnswer: string;
    /** highest answer the median of a report is allowed to be */
    maxAnswer: string;
    /** Fixed LINK reward for each observer */
    linkPerObservation: string;
    /** Fixed LINK reward for transmitter */
    linkPerTransmission: string;
    /** Enables unique reports */
    uniqueReports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     */
    description: string;
}
export interface FeedPropertiesSDKType {
    feed_id: string;
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: Long;
    offchain_config: Uint8Array;
    min_answer: string;
    max_answer: string;
    link_per_observation: string;
    link_per_transmission: string;
    unique_reports: boolean;
    description: string;
}
export interface SetBatchConfigProposal {
    title: string;
    description: string;
    /** signers ith element is address ith oracle uses to sign a report */
    signers: string[];
    /**
     * transmitters ith element is address ith oracle uses to transmit a report
     * via the transmit method
     */
    transmitters: string[];
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** feed properties */
    feedProperties: FeedProperties[];
}
export interface SetBatchConfigProposalSDKType {
    title: string;
    description: string;
    signers: string[];
    transmitters: string[];
    link_denom: string;
    feed_properties: FeedPropertiesSDKType[];
}
export interface OracleObservationsCounts {
    counts: number[];
}
export interface OracleObservationsCountsSDKType {
    counts: number[];
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursements {
    reimbursements: Coin[];
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursementsSDKType {
    reimbursements: CoinSDKType[];
}
export interface Payee {
    transmitterAddr: string;
    paymentAddr: string;
}
export interface PayeeSDKType {
    transmitter_addr: string;
    payment_addr: string;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface Transmission {
    answer: string;
    /** when were observations made offchain */
    observationsTimestamp: Long;
    /** when was report received onchain */
    transmissionTimestamp: Long;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface TransmissionSDKType {
    answer: string;
    observations_timestamp: Long;
    transmission_timestamp: Long;
}
export interface EpochAndRound {
    epoch: Long;
    round: Long;
}
export interface EpochAndRoundSDKType {
    epoch: Long;
    round: Long;
}
export interface Report {
    observationsTimestamp: Long;
    /** ith element is the index of the ith observer */
    observers: Uint8Array;
    observations: string[];
}
export interface ReportSDKType {
    observations_timestamp: Long;
    observers: Uint8Array;
    observations: string[];
}
export interface ReportToSign {
    configDigest: Uint8Array;
    epoch: Long;
    round: Long;
    extraHash: Uint8Array;
    /** Opaque report */
    report: Uint8Array;
}
export interface ReportToSignSDKType {
    config_digest: Uint8Array;
    epoch: Long;
    round: Long;
    extra_hash: Uint8Array;
    report: Uint8Array;
}
export interface EventOraclePaid {
    transmitterAddr: string;
    payeeAddr: string;
    amount?: Coin;
}
export interface EventOraclePaidSDKType {
    transmitter_addr: string;
    payee_addr: string;
    amount?: CoinSDKType;
}
export interface EventAnswerUpdated {
    current: string;
    roundId: string;
    updatedAt?: Timestamp;
}
export interface EventAnswerUpdatedSDKType {
    current: string;
    round_id: string;
    updated_at?: TimestampSDKType;
}
export interface EventNewRound {
    roundId: string;
    /** address of starter */
    startedBy: string;
    startedAt?: Timestamp;
}
export interface EventNewRoundSDKType {
    round_id: string;
    started_by: string;
    started_at?: TimestampSDKType;
}
export interface EventTransmitted {
    configDigest: Uint8Array;
    epoch: Long;
}
export interface EventTransmittedSDKType {
    config_digest: Uint8Array;
    epoch: Long;
}
export interface EventNewTransmission {
    feedId: string;
    aggregatorRoundId: number;
    answer: string;
    transmitter: string;
    observationsTimestamp: Long;
    observations: string[];
    observers: Uint8Array;
    configDigest: Uint8Array;
    epochAndRound?: EpochAndRound;
}
export interface EventNewTransmissionSDKType {
    feed_id: string;
    aggregator_round_id: number;
    answer: string;
    transmitter: string;
    observations_timestamp: Long;
    observations: string[];
    observers: Uint8Array;
    config_digest: Uint8Array;
    epoch_and_round?: EpochAndRoundSDKType;
}
export interface EventConfigSet {
    /** hash of the config */
    configDigest: Uint8Array;
    /**
     * previous_config_block_number block in which the previous config was set, to
     * simplify historic analysis
     */
    previousConfigBlockNumber: Long;
    config?: FeedConfig;
    configInfo?: FeedConfigInfo;
}
export interface EventConfigSetSDKType {
    config_digest: Uint8Array;
    previous_config_block_number: Long;
    config?: FeedConfigSDKType;
    config_info?: FeedConfigInfoSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const FeedConfig: {
    encode(message: FeedConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeedConfig;
    fromPartial(object: Partial<FeedConfig>): FeedConfig;
};
export declare const FeedConfigInfo: {
    encode(message: FeedConfigInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeedConfigInfo;
    fromPartial(object: Partial<FeedConfigInfo>): FeedConfigInfo;
};
export declare const ModuleParams: {
    encode(message: ModuleParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ModuleParams;
    fromPartial(object: Partial<ModuleParams>): ModuleParams;
};
export declare const ContractConfig: {
    encode(message: ContractConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractConfig;
    fromPartial(object: Partial<ContractConfig>): ContractConfig;
};
export declare const SetConfigProposal: {
    encode(message: SetConfigProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetConfigProposal;
    fromPartial(object: Partial<SetConfigProposal>): SetConfigProposal;
};
export declare const FeedProperties: {
    encode(message: FeedProperties, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeedProperties;
    fromPartial(object: Partial<FeedProperties>): FeedProperties;
};
export declare const SetBatchConfigProposal: {
    encode(message: SetBatchConfigProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetBatchConfigProposal;
    fromPartial(object: Partial<SetBatchConfigProposal>): SetBatchConfigProposal;
};
export declare const OracleObservationsCounts: {
    encode(message: OracleObservationsCounts, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OracleObservationsCounts;
    fromPartial(object: Partial<OracleObservationsCounts>): OracleObservationsCounts;
};
export declare const GasReimbursements: {
    encode(message: GasReimbursements, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GasReimbursements;
    fromPartial(object: Partial<GasReimbursements>): GasReimbursements;
};
export declare const Payee: {
    encode(message: Payee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Payee;
    fromPartial(object: Partial<Payee>): Payee;
};
export declare const Transmission: {
    encode(message: Transmission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Transmission;
    fromPartial(object: Partial<Transmission>): Transmission;
};
export declare const EpochAndRound: {
    encode(message: EpochAndRound, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EpochAndRound;
    fromPartial(object: Partial<EpochAndRound>): EpochAndRound;
};
export declare const Report: {
    encode(message: Report, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Report;
    fromPartial(object: Partial<Report>): Report;
};
export declare const ReportToSign: {
    encode(message: ReportToSign, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ReportToSign;
    fromPartial(object: Partial<ReportToSign>): ReportToSign;
};
export declare const EventOraclePaid: {
    encode(message: EventOraclePaid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventOraclePaid;
    fromPartial(object: Partial<EventOraclePaid>): EventOraclePaid;
};
export declare const EventAnswerUpdated: {
    encode(message: EventAnswerUpdated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventAnswerUpdated;
    fromPartial(object: Partial<EventAnswerUpdated>): EventAnswerUpdated;
};
export declare const EventNewRound: {
    encode(message: EventNewRound, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewRound;
    fromPartial(object: Partial<EventNewRound>): EventNewRound;
};
export declare const EventTransmitted: {
    encode(message: EventTransmitted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventTransmitted;
    fromPartial(object: Partial<EventTransmitted>): EventTransmitted;
};
export declare const EventNewTransmission: {
    encode(message: EventNewTransmission, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventNewTransmission;
    fromPartial(object: Partial<EventNewTransmission>): EventNewTransmission;
};
export declare const EventConfigSet: {
    encode(message: EventConfigSet, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventConfigSet;
    fromPartial(object: Partial<EventConfigSet>): EventConfigSet;
};
