import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Params {
    /** Native denom for LINK coin in the bank keeper */
    linkDenom: string;
    /** The block number interval at which payouts are made */
    payoutBlockInterval: bigint;
    /** The admin for the OCR module */
    moduleAdmin: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** The block number interval at which payouts are made */
    payout_block_interval: string;
    /** The admin for the OCR module */
    module_admin: string;
}
export interface ParamsAminoMsg {
    type: "/injective.ocr.v1beta1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    link_denom: string;
    payout_block_interval: bigint;
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
    offchainConfigVersion: bigint;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchainConfig: Uint8Array;
    /** feed-specific params for the Cosmos module. */
    moduleParams: ModuleParams;
}
export interface FeedConfigProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedConfig";
    value: Uint8Array;
}
export interface FeedConfigAmino {
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
    onchain_config: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchain_config_version: string;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchain_config: Uint8Array;
    /** feed-specific params for the Cosmos module. */
    module_params?: ModuleParamsAmino;
}
export interface FeedConfigAminoMsg {
    type: "/injective.ocr.v1beta1.FeedConfig";
    value: FeedConfigAmino;
}
export interface FeedConfigSDKType {
    signers: string[];
    transmitters: string[];
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: bigint;
    offchain_config: Uint8Array;
    module_params: ModuleParamsSDKType;
}
export interface FeedConfigInfo {
    latestConfigDigest: Uint8Array;
    f: number;
    n: number;
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     */
    configCount: bigint;
    latestConfigBlockNumber: bigint;
}
export interface FeedConfigInfoProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedConfigInfo";
    value: Uint8Array;
}
export interface FeedConfigInfoAmino {
    latest_config_digest: Uint8Array;
    f: number;
    n: number;
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     */
    config_count: string;
    latest_config_block_number: string;
}
export interface FeedConfigInfoAminoMsg {
    type: "/injective.ocr.v1beta1.FeedConfigInfo";
    value: FeedConfigInfoAmino;
}
export interface FeedConfigInfoSDKType {
    latest_config_digest: Uint8Array;
    f: number;
    n: number;
    config_count: bigint;
    latest_config_block_number: bigint;
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
export interface ModuleParamsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.ModuleParams";
    value: Uint8Array;
}
export interface ModuleParamsAmino {
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /** lowest answer the median of a report is allowed to be */
    min_answer: string;
    /** highest answer the median of a report is allowed to be */
    max_answer: string;
    /** Fixed LINK reward for each observer */
    link_per_observation: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission: string;
    /** Native denom for LINK coin in the bank keeper */
    link_denom: string;
    /** Enables unique reports */
    unique_reports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     */
    description: string;
    /** feed administrator */
    feed_admin: string;
    /** feed billing administrator */
    billing_admin: string;
}
export interface ModuleParamsAminoMsg {
    type: "/injective.ocr.v1beta1.ModuleParams";
    value: ModuleParamsAmino;
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
    configCount: bigint;
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
    offchainConfigVersion: bigint;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchainConfig: Uint8Array;
}
export interface ContractConfigProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.ContractConfig";
    value: Uint8Array;
}
export interface ContractConfigAmino {
    /**
     * config_count ordinal number of this config setting among all config
     * settings
     */
    config_count: string;
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
    onchain_config: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchain_config_version: string;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchain_config: Uint8Array;
}
export interface ContractConfigAminoMsg {
    type: "/injective.ocr.v1beta1.ContractConfig";
    value: ContractConfigAmino;
}
export interface ContractConfigSDKType {
    config_count: bigint;
    signers: string[];
    transmitters: string[];
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: bigint;
    offchain_config: Uint8Array;
}
export interface SetConfigProposal {
    $typeUrl?: string;
    title: string;
    description: string;
    config: FeedConfig;
}
export interface SetConfigProposalProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.SetConfigProposal";
    value: Uint8Array;
}
export interface SetConfigProposalAmino {
    title: string;
    description: string;
    config?: FeedConfigAmino;
}
export interface SetConfigProposalAminoMsg {
    type: "/injective.ocr.v1beta1.SetConfigProposal";
    value: SetConfigProposalAmino;
}
export interface SetConfigProposalSDKType {
    $typeUrl?: string;
    title: string;
    description: string;
    config: FeedConfigSDKType;
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
    offchainConfigVersion: bigint;
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
export interface FeedPropertiesProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.FeedProperties";
    value: Uint8Array;
}
export interface FeedPropertiesAmino {
    /** feed_id is an unique ID for the target of this config */
    feed_id: string;
    /**
     * f maximum number of faulty/dishonest oracles the protocol can tolerate
     * while still working correctly
     */
    f: number;
    /** onchain_config serialized data with reporting plugin params on chain. */
    onchain_config: Uint8Array;
    /**
     * offchain_config_version version of the serialization format used for
     * "offchain_config" parameter
     */
    offchain_config_version: string;
    /**
     * offchain_config serialized data used by oracles to configure their offchain
     * operation
     */
    offchain_config: Uint8Array;
    /** lowest answer the median of a report is allowed to be */
    min_answer: string;
    /** highest answer the median of a report is allowed to be */
    max_answer: string;
    /** Fixed LINK reward for each observer */
    link_per_observation: string;
    /** Fixed LINK reward for transmitter */
    link_per_transmission: string;
    /** Enables unique reports */
    unique_reports: boolean;
    /**
     * short human-readable description of observable this feed's answers pertain
     * to
     */
    description: string;
}
export interface FeedPropertiesAminoMsg {
    type: "/injective.ocr.v1beta1.FeedProperties";
    value: FeedPropertiesAmino;
}
export interface FeedPropertiesSDKType {
    feed_id: string;
    f: number;
    onchain_config: Uint8Array;
    offchain_config_version: bigint;
    offchain_config: Uint8Array;
    min_answer: string;
    max_answer: string;
    link_per_observation: string;
    link_per_transmission: string;
    unique_reports: boolean;
    description: string;
}
export interface SetBatchConfigProposal {
    $typeUrl?: string;
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
export interface SetBatchConfigProposalProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.SetBatchConfigProposal";
    value: Uint8Array;
}
export interface SetBatchConfigProposalAmino {
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
    link_denom: string;
    /** feed properties */
    feed_properties: FeedPropertiesAmino[];
}
export interface SetBatchConfigProposalAminoMsg {
    type: "/injective.ocr.v1beta1.SetBatchConfigProposal";
    value: SetBatchConfigProposalAmino;
}
export interface SetBatchConfigProposalSDKType {
    $typeUrl?: string;
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
export interface OracleObservationsCountsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.OracleObservationsCounts";
    value: Uint8Array;
}
export interface OracleObservationsCountsAmino {
    counts: number[];
}
export interface OracleObservationsCountsAminoMsg {
    type: "/injective.ocr.v1beta1.OracleObservationsCounts";
    value: OracleObservationsCountsAmino;
}
export interface OracleObservationsCountsSDKType {
    counts: number[];
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursements {
    reimbursements: Coin[];
}
export interface GasReimbursementsProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.GasReimbursements";
    value: Uint8Array;
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursementsAmino {
    reimbursements: CoinAmino[];
}
export interface GasReimbursementsAminoMsg {
    type: "/injective.ocr.v1beta1.GasReimbursements";
    value: GasReimbursementsAmino;
}
/** LINK-INJ-denominated reimbursements for gas used by transmitters. */
export interface GasReimbursementsSDKType {
    reimbursements: CoinSDKType[];
}
export interface Payee {
    transmitterAddr: string;
    paymentAddr: string;
}
export interface PayeeProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.Payee";
    value: Uint8Array;
}
export interface PayeeAmino {
    transmitter_addr: string;
    payment_addr: string;
}
export interface PayeeAminoMsg {
    type: "/injective.ocr.v1beta1.Payee";
    value: PayeeAmino;
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
    observationsTimestamp: bigint;
    /** when was report received onchain */
    transmissionTimestamp: bigint;
}
export interface TransmissionProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.Transmission";
    value: Uint8Array;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface TransmissionAmino {
    answer: string;
    /** when were observations made offchain */
    observations_timestamp: string;
    /** when was report received onchain */
    transmission_timestamp: string;
}
export interface TransmissionAminoMsg {
    type: "/injective.ocr.v1beta1.Transmission";
    value: TransmissionAmino;
}
/**
 * Transmission records the median answer from the transmit transaction at
 * time timestamp
 */
export interface TransmissionSDKType {
    answer: string;
    observations_timestamp: bigint;
    transmission_timestamp: bigint;
}
export interface EpochAndRound {
    epoch: bigint;
    round: bigint;
}
export interface EpochAndRoundProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EpochAndRound";
    value: Uint8Array;
}
export interface EpochAndRoundAmino {
    epoch: string;
    round: string;
}
export interface EpochAndRoundAminoMsg {
    type: "/injective.ocr.v1beta1.EpochAndRound";
    value: EpochAndRoundAmino;
}
export interface EpochAndRoundSDKType {
    epoch: bigint;
    round: bigint;
}
export interface Report {
    observationsTimestamp: bigint;
    /** ith element is the index of the ith observer */
    observers: Uint8Array;
    observations: string[];
}
export interface ReportProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.Report";
    value: Uint8Array;
}
export interface ReportAmino {
    observations_timestamp: string;
    /** ith element is the index of the ith observer */
    observers: Uint8Array;
    observations: string[];
}
export interface ReportAminoMsg {
    type: "/injective.ocr.v1beta1.Report";
    value: ReportAmino;
}
export interface ReportSDKType {
    observations_timestamp: bigint;
    observers: Uint8Array;
    observations: string[];
}
export interface ReportToSign {
    configDigest: Uint8Array;
    epoch: bigint;
    round: bigint;
    extraHash: Uint8Array;
    /** Opaque report */
    report: Uint8Array;
}
export interface ReportToSignProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.ReportToSign";
    value: Uint8Array;
}
export interface ReportToSignAmino {
    config_digest: Uint8Array;
    epoch: string;
    round: string;
    extra_hash: Uint8Array;
    /** Opaque report */
    report: Uint8Array;
}
export interface ReportToSignAminoMsg {
    type: "/injective.ocr.v1beta1.ReportToSign";
    value: ReportToSignAmino;
}
export interface ReportToSignSDKType {
    config_digest: Uint8Array;
    epoch: bigint;
    round: bigint;
    extra_hash: Uint8Array;
    report: Uint8Array;
}
export interface EventOraclePaid {
    transmitterAddr: string;
    payeeAddr: string;
    amount: Coin;
}
export interface EventOraclePaidProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventOraclePaid";
    value: Uint8Array;
}
export interface EventOraclePaidAmino {
    transmitter_addr: string;
    payee_addr: string;
    amount?: CoinAmino;
}
export interface EventOraclePaidAminoMsg {
    type: "/injective.ocr.v1beta1.EventOraclePaid";
    value: EventOraclePaidAmino;
}
export interface EventOraclePaidSDKType {
    transmitter_addr: string;
    payee_addr: string;
    amount: CoinSDKType;
}
export interface EventAnswerUpdated {
    current: string;
    roundId: string;
    updatedAt: Timestamp;
}
export interface EventAnswerUpdatedProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventAnswerUpdated";
    value: Uint8Array;
}
export interface EventAnswerUpdatedAmino {
    current: string;
    round_id: string;
    updated_at?: TimestampAmino;
}
export interface EventAnswerUpdatedAminoMsg {
    type: "/injective.ocr.v1beta1.EventAnswerUpdated";
    value: EventAnswerUpdatedAmino;
}
export interface EventAnswerUpdatedSDKType {
    current: string;
    round_id: string;
    updated_at: TimestampSDKType;
}
export interface EventNewRound {
    roundId: string;
    /** address of starter */
    startedBy: string;
    startedAt: Timestamp;
}
export interface EventNewRoundProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventNewRound";
    value: Uint8Array;
}
export interface EventNewRoundAmino {
    round_id: string;
    /** address of starter */
    started_by: string;
    started_at?: TimestampAmino;
}
export interface EventNewRoundAminoMsg {
    type: "/injective.ocr.v1beta1.EventNewRound";
    value: EventNewRoundAmino;
}
export interface EventNewRoundSDKType {
    round_id: string;
    started_by: string;
    started_at: TimestampSDKType;
}
export interface EventTransmitted {
    configDigest: Uint8Array;
    epoch: bigint;
}
export interface EventTransmittedProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventTransmitted";
    value: Uint8Array;
}
export interface EventTransmittedAmino {
    config_digest: Uint8Array;
    epoch: string;
}
export interface EventTransmittedAminoMsg {
    type: "/injective.ocr.v1beta1.EventTransmitted";
    value: EventTransmittedAmino;
}
export interface EventTransmittedSDKType {
    config_digest: Uint8Array;
    epoch: bigint;
}
export interface EventNewTransmission {
    feedId: string;
    aggregatorRoundId: number;
    answer: string;
    transmitter: string;
    observationsTimestamp: bigint;
    observations: string[];
    observers: Uint8Array;
    configDigest: Uint8Array;
    epochAndRound: EpochAndRound;
}
export interface EventNewTransmissionProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventNewTransmission";
    value: Uint8Array;
}
export interface EventNewTransmissionAmino {
    feed_id: string;
    aggregator_round_id: number;
    answer: string;
    transmitter: string;
    observations_timestamp: string;
    observations: string[];
    observers: Uint8Array;
    config_digest: Uint8Array;
    epoch_and_round?: EpochAndRoundAmino;
}
export interface EventNewTransmissionAminoMsg {
    type: "/injective.ocr.v1beta1.EventNewTransmission";
    value: EventNewTransmissionAmino;
}
export interface EventNewTransmissionSDKType {
    feed_id: string;
    aggregator_round_id: number;
    answer: string;
    transmitter: string;
    observations_timestamp: bigint;
    observations: string[];
    observers: Uint8Array;
    config_digest: Uint8Array;
    epoch_and_round: EpochAndRoundSDKType;
}
export interface EventConfigSet {
    /** hash of the config */
    configDigest: Uint8Array;
    /**
     * previous_config_block_number block in which the previous config was set, to
     * simplify historic analysis
     */
    previousConfigBlockNumber: bigint;
    config: FeedConfig;
    configInfo: FeedConfigInfo;
}
export interface EventConfigSetProtoMsg {
    typeUrl: "/injective.ocr.v1beta1.EventConfigSet";
    value: Uint8Array;
}
export interface EventConfigSetAmino {
    /** hash of the config */
    config_digest: Uint8Array;
    /**
     * previous_config_block_number block in which the previous config was set, to
     * simplify historic analysis
     */
    previous_config_block_number: string;
    config?: FeedConfigAmino;
    config_info?: FeedConfigInfoAmino;
}
export interface EventConfigSetAminoMsg {
    type: "/injective.ocr.v1beta1.EventConfigSet";
    value: EventConfigSetAmino;
}
export interface EventConfigSetSDKType {
    config_digest: Uint8Array;
    previous_config_block_number: bigint;
    config: FeedConfigSDKType;
    config_info: FeedConfigInfoSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const FeedConfig: {
    typeUrl: string;
    encode(message: FeedConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedConfig;
    fromPartial(object: Partial<FeedConfig>): FeedConfig;
    fromAmino(object: FeedConfigAmino): FeedConfig;
    toAmino(message: FeedConfig): FeedConfigAmino;
    fromAminoMsg(object: FeedConfigAminoMsg): FeedConfig;
    fromProtoMsg(message: FeedConfigProtoMsg): FeedConfig;
    toProto(message: FeedConfig): Uint8Array;
    toProtoMsg(message: FeedConfig): FeedConfigProtoMsg;
};
export declare const FeedConfigInfo: {
    typeUrl: string;
    encode(message: FeedConfigInfo, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedConfigInfo;
    fromPartial(object: Partial<FeedConfigInfo>): FeedConfigInfo;
    fromAmino(object: FeedConfigInfoAmino): FeedConfigInfo;
    toAmino(message: FeedConfigInfo): FeedConfigInfoAmino;
    fromAminoMsg(object: FeedConfigInfoAminoMsg): FeedConfigInfo;
    fromProtoMsg(message: FeedConfigInfoProtoMsg): FeedConfigInfo;
    toProto(message: FeedConfigInfo): Uint8Array;
    toProtoMsg(message: FeedConfigInfo): FeedConfigInfoProtoMsg;
};
export declare const ModuleParams: {
    typeUrl: string;
    encode(message: ModuleParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ModuleParams;
    fromPartial(object: Partial<ModuleParams>): ModuleParams;
    fromAmino(object: ModuleParamsAmino): ModuleParams;
    toAmino(message: ModuleParams): ModuleParamsAmino;
    fromAminoMsg(object: ModuleParamsAminoMsg): ModuleParams;
    fromProtoMsg(message: ModuleParamsProtoMsg): ModuleParams;
    toProto(message: ModuleParams): Uint8Array;
    toProtoMsg(message: ModuleParams): ModuleParamsProtoMsg;
};
export declare const ContractConfig: {
    typeUrl: string;
    encode(message: ContractConfig, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractConfig;
    fromPartial(object: Partial<ContractConfig>): ContractConfig;
    fromAmino(object: ContractConfigAmino): ContractConfig;
    toAmino(message: ContractConfig): ContractConfigAmino;
    fromAminoMsg(object: ContractConfigAminoMsg): ContractConfig;
    fromProtoMsg(message: ContractConfigProtoMsg): ContractConfig;
    toProto(message: ContractConfig): Uint8Array;
    toProtoMsg(message: ContractConfig): ContractConfigProtoMsg;
};
export declare const SetConfigProposal: {
    typeUrl: string;
    encode(message: SetConfigProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetConfigProposal;
    fromPartial(object: Partial<SetConfigProposal>): SetConfigProposal;
    fromAmino(object: SetConfigProposalAmino): SetConfigProposal;
    toAmino(message: SetConfigProposal): SetConfigProposalAmino;
    fromAminoMsg(object: SetConfigProposalAminoMsg): SetConfigProposal;
    fromProtoMsg(message: SetConfigProposalProtoMsg): SetConfigProposal;
    toProto(message: SetConfigProposal): Uint8Array;
    toProtoMsg(message: SetConfigProposal): SetConfigProposalProtoMsg;
};
export declare const FeedProperties: {
    typeUrl: string;
    encode(message: FeedProperties, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeedProperties;
    fromPartial(object: Partial<FeedProperties>): FeedProperties;
    fromAmino(object: FeedPropertiesAmino): FeedProperties;
    toAmino(message: FeedProperties): FeedPropertiesAmino;
    fromAminoMsg(object: FeedPropertiesAminoMsg): FeedProperties;
    fromProtoMsg(message: FeedPropertiesProtoMsg): FeedProperties;
    toProto(message: FeedProperties): Uint8Array;
    toProtoMsg(message: FeedProperties): FeedPropertiesProtoMsg;
};
export declare const SetBatchConfigProposal: {
    typeUrl: string;
    encode(message: SetBatchConfigProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetBatchConfigProposal;
    fromPartial(object: Partial<SetBatchConfigProposal>): SetBatchConfigProposal;
    fromAmino(object: SetBatchConfigProposalAmino): SetBatchConfigProposal;
    toAmino(message: SetBatchConfigProposal): SetBatchConfigProposalAmino;
    fromAminoMsg(object: SetBatchConfigProposalAminoMsg): SetBatchConfigProposal;
    fromProtoMsg(message: SetBatchConfigProposalProtoMsg): SetBatchConfigProposal;
    toProto(message: SetBatchConfigProposal): Uint8Array;
    toProtoMsg(message: SetBatchConfigProposal): SetBatchConfigProposalProtoMsg;
};
export declare const OracleObservationsCounts: {
    typeUrl: string;
    encode(message: OracleObservationsCounts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OracleObservationsCounts;
    fromPartial(object: Partial<OracleObservationsCounts>): OracleObservationsCounts;
    fromAmino(object: OracleObservationsCountsAmino): OracleObservationsCounts;
    toAmino(message: OracleObservationsCounts): OracleObservationsCountsAmino;
    fromAminoMsg(object: OracleObservationsCountsAminoMsg): OracleObservationsCounts;
    fromProtoMsg(message: OracleObservationsCountsProtoMsg): OracleObservationsCounts;
    toProto(message: OracleObservationsCounts): Uint8Array;
    toProtoMsg(message: OracleObservationsCounts): OracleObservationsCountsProtoMsg;
};
export declare const GasReimbursements: {
    typeUrl: string;
    encode(message: GasReimbursements, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GasReimbursements;
    fromPartial(object: Partial<GasReimbursements>): GasReimbursements;
    fromAmino(object: GasReimbursementsAmino): GasReimbursements;
    toAmino(message: GasReimbursements): GasReimbursementsAmino;
    fromAminoMsg(object: GasReimbursementsAminoMsg): GasReimbursements;
    fromProtoMsg(message: GasReimbursementsProtoMsg): GasReimbursements;
    toProto(message: GasReimbursements): Uint8Array;
    toProtoMsg(message: GasReimbursements): GasReimbursementsProtoMsg;
};
export declare const Payee: {
    typeUrl: string;
    encode(message: Payee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Payee;
    fromPartial(object: Partial<Payee>): Payee;
    fromAmino(object: PayeeAmino): Payee;
    toAmino(message: Payee): PayeeAmino;
    fromAminoMsg(object: PayeeAminoMsg): Payee;
    fromProtoMsg(message: PayeeProtoMsg): Payee;
    toProto(message: Payee): Uint8Array;
    toProtoMsg(message: Payee): PayeeProtoMsg;
};
export declare const Transmission: {
    typeUrl: string;
    encode(message: Transmission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Transmission;
    fromPartial(object: Partial<Transmission>): Transmission;
    fromAmino(object: TransmissionAmino): Transmission;
    toAmino(message: Transmission): TransmissionAmino;
    fromAminoMsg(object: TransmissionAminoMsg): Transmission;
    fromProtoMsg(message: TransmissionProtoMsg): Transmission;
    toProto(message: Transmission): Uint8Array;
    toProtoMsg(message: Transmission): TransmissionProtoMsg;
};
export declare const EpochAndRound: {
    typeUrl: string;
    encode(message: EpochAndRound, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EpochAndRound;
    fromPartial(object: Partial<EpochAndRound>): EpochAndRound;
    fromAmino(object: EpochAndRoundAmino): EpochAndRound;
    toAmino(message: EpochAndRound): EpochAndRoundAmino;
    fromAminoMsg(object: EpochAndRoundAminoMsg): EpochAndRound;
    fromProtoMsg(message: EpochAndRoundProtoMsg): EpochAndRound;
    toProto(message: EpochAndRound): Uint8Array;
    toProtoMsg(message: EpochAndRound): EpochAndRoundProtoMsg;
};
export declare const Report: {
    typeUrl: string;
    encode(message: Report, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Report;
    fromPartial(object: Partial<Report>): Report;
    fromAmino(object: ReportAmino): Report;
    toAmino(message: Report): ReportAmino;
    fromAminoMsg(object: ReportAminoMsg): Report;
    fromProtoMsg(message: ReportProtoMsg): Report;
    toProto(message: Report): Uint8Array;
    toProtoMsg(message: Report): ReportProtoMsg;
};
export declare const ReportToSign: {
    typeUrl: string;
    encode(message: ReportToSign, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ReportToSign;
    fromPartial(object: Partial<ReportToSign>): ReportToSign;
    fromAmino(object: ReportToSignAmino): ReportToSign;
    toAmino(message: ReportToSign): ReportToSignAmino;
    fromAminoMsg(object: ReportToSignAminoMsg): ReportToSign;
    fromProtoMsg(message: ReportToSignProtoMsg): ReportToSign;
    toProto(message: ReportToSign): Uint8Array;
    toProtoMsg(message: ReportToSign): ReportToSignProtoMsg;
};
export declare const EventOraclePaid: {
    typeUrl: string;
    encode(message: EventOraclePaid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOraclePaid;
    fromPartial(object: Partial<EventOraclePaid>): EventOraclePaid;
    fromAmino(object: EventOraclePaidAmino): EventOraclePaid;
    toAmino(message: EventOraclePaid): EventOraclePaidAmino;
    fromAminoMsg(object: EventOraclePaidAminoMsg): EventOraclePaid;
    fromProtoMsg(message: EventOraclePaidProtoMsg): EventOraclePaid;
    toProto(message: EventOraclePaid): Uint8Array;
    toProtoMsg(message: EventOraclePaid): EventOraclePaidProtoMsg;
};
export declare const EventAnswerUpdated: {
    typeUrl: string;
    encode(message: EventAnswerUpdated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAnswerUpdated;
    fromPartial(object: Partial<EventAnswerUpdated>): EventAnswerUpdated;
    fromAmino(object: EventAnswerUpdatedAmino): EventAnswerUpdated;
    toAmino(message: EventAnswerUpdated): EventAnswerUpdatedAmino;
    fromAminoMsg(object: EventAnswerUpdatedAminoMsg): EventAnswerUpdated;
    fromProtoMsg(message: EventAnswerUpdatedProtoMsg): EventAnswerUpdated;
    toProto(message: EventAnswerUpdated): Uint8Array;
    toProtoMsg(message: EventAnswerUpdated): EventAnswerUpdatedProtoMsg;
};
export declare const EventNewRound: {
    typeUrl: string;
    encode(message: EventNewRound, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewRound;
    fromPartial(object: Partial<EventNewRound>): EventNewRound;
    fromAmino(object: EventNewRoundAmino): EventNewRound;
    toAmino(message: EventNewRound): EventNewRoundAmino;
    fromAminoMsg(object: EventNewRoundAminoMsg): EventNewRound;
    fromProtoMsg(message: EventNewRoundProtoMsg): EventNewRound;
    toProto(message: EventNewRound): Uint8Array;
    toProtoMsg(message: EventNewRound): EventNewRoundProtoMsg;
};
export declare const EventTransmitted: {
    typeUrl: string;
    encode(message: EventTransmitted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventTransmitted;
    fromPartial(object: Partial<EventTransmitted>): EventTransmitted;
    fromAmino(object: EventTransmittedAmino): EventTransmitted;
    toAmino(message: EventTransmitted): EventTransmittedAmino;
    fromAminoMsg(object: EventTransmittedAminoMsg): EventTransmitted;
    fromProtoMsg(message: EventTransmittedProtoMsg): EventTransmitted;
    toProto(message: EventTransmitted): Uint8Array;
    toProtoMsg(message: EventTransmitted): EventTransmittedProtoMsg;
};
export declare const EventNewTransmission: {
    typeUrl: string;
    encode(message: EventNewTransmission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventNewTransmission;
    fromPartial(object: Partial<EventNewTransmission>): EventNewTransmission;
    fromAmino(object: EventNewTransmissionAmino): EventNewTransmission;
    toAmino(message: EventNewTransmission): EventNewTransmissionAmino;
    fromAminoMsg(object: EventNewTransmissionAminoMsg): EventNewTransmission;
    fromProtoMsg(message: EventNewTransmissionProtoMsg): EventNewTransmission;
    toProto(message: EventNewTransmission): Uint8Array;
    toProtoMsg(message: EventNewTransmission): EventNewTransmissionProtoMsg;
};
export declare const EventConfigSet: {
    typeUrl: string;
    encode(message: EventConfigSet, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventConfigSet;
    fromPartial(object: Partial<EventConfigSet>): EventConfigSet;
    fromAmino(object: EventConfigSetAmino): EventConfigSet;
    toAmino(message: EventConfigSet): EventConfigSetAmino;
    fromAminoMsg(object: EventConfigSetAminoMsg): EventConfigSet;
    fromProtoMsg(message: EventConfigSetProtoMsg): EventConfigSet;
    toProto(message: EventConfigSet): Uint8Array;
    toProtoMsg(message: EventConfigSet): EventConfigSetProtoMsg;
};
