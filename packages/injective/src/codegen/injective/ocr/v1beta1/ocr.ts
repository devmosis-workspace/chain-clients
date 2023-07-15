import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
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
function createBaseParams(): Params {
  return {
    linkDenom: "",
    payoutBlockInterval: Long.UZERO,
    moduleAdmin: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linkDenom !== "") {
      writer.uint32(10).string(message.linkDenom);
    }
    if (!message.payoutBlockInterval.isZero()) {
      writer.uint32(16).uint64(message.payoutBlockInterval);
    }
    if (message.moduleAdmin !== "") {
      writer.uint32(26).string(message.moduleAdmin);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
      payoutBlockInterval: isSet(object.payoutBlockInterval) ? Long.fromValue(object.payoutBlockInterval) : Long.UZERO,
      moduleAdmin: isSet(object.moduleAdmin) ? String(object.moduleAdmin) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.linkDenom = object.linkDenom ?? "";
    message.payoutBlockInterval = object.payoutBlockInterval !== undefined && object.payoutBlockInterval !== null ? Long.fromValue(object.payoutBlockInterval) : Long.UZERO;
    message.moduleAdmin = object.moduleAdmin ?? "";
    return message;
  }
};
function createBaseFeedConfig(): FeedConfig {
  return {
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array(),
    moduleParams: undefined
  };
}
export const FeedConfig = {
  encode(message: FeedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.transmitters) {
      writer.uint32(18).string(v!);
    }
    if (message.f !== 0) {
      writer.uint32(24).uint32(message.f);
    }
    if (message.onchainConfig.length !== 0) {
      writer.uint32(34).bytes(message.onchainConfig);
    }
    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(40).uint64(message.offchainConfigVersion);
    }
    if (message.offchainConfig.length !== 0) {
      writer.uint32(50).bytes(message.offchainConfig);
    }
    if (message.moduleParams !== undefined) {
      ModuleParams.encode(message.moduleParams, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): FeedConfig {
    return {
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      f: isSet(object.f) ? Number(object.f) : 0,
      onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO,
      offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array(),
      moduleParams: isSet(object.moduleParams) ? ModuleParams.fromJSON(object.moduleParams) : undefined
    };
  },
  fromPartial(object: Partial<FeedConfig>): FeedConfig {
    const message = createBaseFeedConfig();
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    return message;
  }
};
function createBaseFeedConfigInfo(): FeedConfigInfo {
  return {
    latestConfigDigest: new Uint8Array(),
    f: 0,
    n: 0,
    configCount: Long.UZERO,
    latestConfigBlockNumber: Long.ZERO
  };
}
export const FeedConfigInfo = {
  encode(message: FeedConfigInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestConfigDigest.length !== 0) {
      writer.uint32(10).bytes(message.latestConfigDigest);
    }
    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }
    if (message.n !== 0) {
      writer.uint32(24).uint32(message.n);
    }
    if (!message.configCount.isZero()) {
      writer.uint32(32).uint64(message.configCount);
    }
    if (!message.latestConfigBlockNumber.isZero()) {
      writer.uint32(40).int64(message.latestConfigBlockNumber);
    }
    return writer;
  },
  fromJSON(object: any): FeedConfigInfo {
    return {
      latestConfigDigest: isSet(object.latestConfigDigest) ? bytesFromBase64(object.latestConfigDigest) : new Uint8Array(),
      f: isSet(object.f) ? Number(object.f) : 0,
      n: isSet(object.n) ? Number(object.n) : 0,
      configCount: isSet(object.configCount) ? Long.fromValue(object.configCount) : Long.UZERO,
      latestConfigBlockNumber: isSet(object.latestConfigBlockNumber) ? Long.fromValue(object.latestConfigBlockNumber) : Long.ZERO
    };
  },
  fromPartial(object: Partial<FeedConfigInfo>): FeedConfigInfo {
    const message = createBaseFeedConfigInfo();
    message.latestConfigDigest = object.latestConfigDigest ?? new Uint8Array();
    message.f = object.f ?? 0;
    message.n = object.n ?? 0;
    message.configCount = object.configCount !== undefined && object.configCount !== null ? Long.fromValue(object.configCount) : Long.UZERO;
    message.latestConfigBlockNumber = object.latestConfigBlockNumber !== undefined && object.latestConfigBlockNumber !== null ? Long.fromValue(object.latestConfigBlockNumber) : Long.ZERO;
    return message;
  }
};
function createBaseModuleParams(): ModuleParams {
  return {
    feedId: "",
    minAnswer: "",
    maxAnswer: "",
    linkPerObservation: "",
    linkPerTransmission: "",
    linkDenom: "",
    uniqueReports: false,
    description: "",
    feedAdmin: "",
    billingAdmin: ""
  };
}
export const ModuleParams = {
  encode(message: ModuleParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.minAnswer !== "") {
      writer.uint32(18).string(message.minAnswer);
    }
    if (message.maxAnswer !== "") {
      writer.uint32(26).string(message.maxAnswer);
    }
    if (message.linkPerObservation !== "") {
      writer.uint32(34).string(message.linkPerObservation);
    }
    if (message.linkPerTransmission !== "") {
      writer.uint32(42).string(message.linkPerTransmission);
    }
    if (message.linkDenom !== "") {
      writer.uint32(50).string(message.linkDenom);
    }
    if (message.uniqueReports === true) {
      writer.uint32(56).bool(message.uniqueReports);
    }
    if (message.description !== "") {
      writer.uint32(66).string(message.description);
    }
    if (message.feedAdmin !== "") {
      writer.uint32(74).string(message.feedAdmin);
    }
    if (message.billingAdmin !== "") {
      writer.uint32(82).string(message.billingAdmin);
    }
    return writer;
  },
  fromJSON(object: any): ModuleParams {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      minAnswer: isSet(object.minAnswer) ? String(object.minAnswer) : "",
      maxAnswer: isSet(object.maxAnswer) ? String(object.maxAnswer) : "",
      linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : "",
      linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : "",
      linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
      uniqueReports: isSet(object.uniqueReports) ? Boolean(object.uniqueReports) : false,
      description: isSet(object.description) ? String(object.description) : "",
      feedAdmin: isSet(object.feedAdmin) ? String(object.feedAdmin) : "",
      billingAdmin: isSet(object.billingAdmin) ? String(object.billingAdmin) : ""
    };
  },
  fromPartial(object: Partial<ModuleParams>): ModuleParams {
    const message = createBaseModuleParams();
    message.feedId = object.feedId ?? "";
    message.minAnswer = object.minAnswer ?? "";
    message.maxAnswer = object.maxAnswer ?? "";
    message.linkPerObservation = object.linkPerObservation ?? "";
    message.linkPerTransmission = object.linkPerTransmission ?? "";
    message.linkDenom = object.linkDenom ?? "";
    message.uniqueReports = object.uniqueReports ?? false;
    message.description = object.description ?? "";
    message.feedAdmin = object.feedAdmin ?? "";
    message.billingAdmin = object.billingAdmin ?? "";
    return message;
  }
};
function createBaseContractConfig(): ContractConfig {
  return {
    configCount: Long.UZERO,
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array()
  };
}
export const ContractConfig = {
  encode(message: ContractConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.configCount.isZero()) {
      writer.uint32(8).uint64(message.configCount);
    }
    for (const v of message.signers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.transmitters) {
      writer.uint32(26).string(v!);
    }
    if (message.f !== 0) {
      writer.uint32(32).uint32(message.f);
    }
    if (message.onchainConfig.length !== 0) {
      writer.uint32(42).bytes(message.onchainConfig);
    }
    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(48).uint64(message.offchainConfigVersion);
    }
    if (message.offchainConfig.length !== 0) {
      writer.uint32(58).bytes(message.offchainConfig);
    }
    return writer;
  },
  fromJSON(object: any): ContractConfig {
    return {
      configCount: isSet(object.configCount) ? Long.fromValue(object.configCount) : Long.UZERO,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      f: isSet(object.f) ? Number(object.f) : 0,
      onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO,
      offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractConfig>): ContractConfig {
    const message = createBaseContractConfig();
    message.configCount = object.configCount !== undefined && object.configCount !== null ? Long.fromValue(object.configCount) : Long.UZERO;
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    return message;
  }
};
function createBaseSetConfigProposal(): SetConfigProposal {
  return {
    title: "",
    description: "",
    config: undefined
  };
}
export const SetConfigProposal = {
  encode(message: SetConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined
    };
  },
  fromPartial(object: Partial<SetConfigProposal>): SetConfigProposal {
    const message = createBaseSetConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    return message;
  }
};
function createBaseFeedProperties(): FeedProperties {
  return {
    feedId: "",
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: Long.UZERO,
    offchainConfig: new Uint8Array(),
    minAnswer: "",
    maxAnswer: "",
    linkPerObservation: "",
    linkPerTransmission: "",
    uniqueReports: false,
    description: ""
  };
}
export const FeedProperties = {
  encode(message: FeedProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }
    if (message.onchainConfig.length !== 0) {
      writer.uint32(26).bytes(message.onchainConfig);
    }
    if (!message.offchainConfigVersion.isZero()) {
      writer.uint32(32).uint64(message.offchainConfigVersion);
    }
    if (message.offchainConfig.length !== 0) {
      writer.uint32(42).bytes(message.offchainConfig);
    }
    if (message.minAnswer !== "") {
      writer.uint32(50).string(message.minAnswer);
    }
    if (message.maxAnswer !== "") {
      writer.uint32(58).string(message.maxAnswer);
    }
    if (message.linkPerObservation !== "") {
      writer.uint32(66).string(message.linkPerObservation);
    }
    if (message.linkPerTransmission !== "") {
      writer.uint32(74).string(message.linkPerTransmission);
    }
    if (message.uniqueReports === true) {
      writer.uint32(80).bool(message.uniqueReports);
    }
    if (message.description !== "") {
      writer.uint32(90).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): FeedProperties {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      f: isSet(object.f) ? Number(object.f) : 0,
      onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO,
      offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array(),
      minAnswer: isSet(object.minAnswer) ? String(object.minAnswer) : "",
      maxAnswer: isSet(object.maxAnswer) ? String(object.maxAnswer) : "",
      linkPerObservation: isSet(object.linkPerObservation) ? String(object.linkPerObservation) : "",
      linkPerTransmission: isSet(object.linkPerTransmission) ? String(object.linkPerTransmission) : "",
      uniqueReports: isSet(object.uniqueReports) ? Boolean(object.uniqueReports) : false,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<FeedProperties>): FeedProperties {
    const message = createBaseFeedProperties();
    message.feedId = object.feedId ?? "";
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? Long.fromValue(object.offchainConfigVersion) : Long.UZERO;
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.minAnswer = object.minAnswer ?? "";
    message.maxAnswer = object.maxAnswer ?? "";
    message.linkPerObservation = object.linkPerObservation ?? "";
    message.linkPerTransmission = object.linkPerTransmission ?? "";
    message.uniqueReports = object.uniqueReports ?? false;
    message.description = object.description ?? "";
    return message;
  }
};
function createBaseSetBatchConfigProposal(): SetBatchConfigProposal {
  return {
    title: "",
    description: "",
    signers: [],
    transmitters: [],
    linkDenom: "",
    feedProperties: []
  };
}
export const SetBatchConfigProposal = {
  encode(message: SetBatchConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.signers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.transmitters) {
      writer.uint32(34).string(v!);
    }
    if (message.linkDenom !== "") {
      writer.uint32(42).string(message.linkDenom);
    }
    for (const v of message.feedProperties) {
      FeedProperties.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SetBatchConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      linkDenom: isSet(object.linkDenom) ? String(object.linkDenom) : "",
      feedProperties: Array.isArray(object?.feedProperties) ? object.feedProperties.map((e: any) => FeedProperties.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SetBatchConfigProposal>): SetBatchConfigProposal {
    const message = createBaseSetBatchConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.linkDenom = object.linkDenom ?? "";
    message.feedProperties = object.feedProperties?.map(e => FeedProperties.fromPartial(e)) || [];
    return message;
  }
};
function createBaseOracleObservationsCounts(): OracleObservationsCounts {
  return {
    counts: []
  };
}
export const OracleObservationsCounts = {
  encode(message: OracleObservationsCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.counts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): OracleObservationsCounts {
    return {
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => Number(e)) : []
    };
  },
  fromPartial(object: Partial<OracleObservationsCounts>): OracleObservationsCounts {
    const message = createBaseOracleObservationsCounts();
    message.counts = object.counts?.map(e => e) || [];
    return message;
  }
};
function createBaseGasReimbursements(): GasReimbursements {
  return {
    reimbursements: []
  };
}
export const GasReimbursements = {
  encode(message: GasReimbursements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reimbursements) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GasReimbursements {
    return {
      reimbursements: Array.isArray(object?.reimbursements) ? object.reimbursements.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GasReimbursements>): GasReimbursements {
    const message = createBaseGasReimbursements();
    message.reimbursements = object.reimbursements?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBasePayee(): Payee {
  return {
    transmitterAddr: "",
    paymentAddr: ""
  };
}
export const Payee = {
  encode(message: Payee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitterAddr !== "") {
      writer.uint32(10).string(message.transmitterAddr);
    }
    if (message.paymentAddr !== "") {
      writer.uint32(18).string(message.paymentAddr);
    }
    return writer;
  },
  fromJSON(object: any): Payee {
    return {
      transmitterAddr: isSet(object.transmitterAddr) ? String(object.transmitterAddr) : "",
      paymentAddr: isSet(object.paymentAddr) ? String(object.paymentAddr) : ""
    };
  },
  fromPartial(object: Partial<Payee>): Payee {
    const message = createBasePayee();
    message.transmitterAddr = object.transmitterAddr ?? "";
    message.paymentAddr = object.paymentAddr ?? "";
    return message;
  }
};
function createBaseTransmission(): Transmission {
  return {
    answer: "",
    observationsTimestamp: Long.ZERO,
    transmissionTimestamp: Long.ZERO
  };
}
export const Transmission = {
  encode(message: Transmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.answer !== "") {
      writer.uint32(10).string(message.answer);
    }
    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(16).int64(message.observationsTimestamp);
    }
    if (!message.transmissionTimestamp.isZero()) {
      writer.uint32(24).int64(message.transmissionTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): Transmission {
    return {
      answer: isSet(object.answer) ? String(object.answer) : "",
      observationsTimestamp: isSet(object.observationsTimestamp) ? Long.fromValue(object.observationsTimestamp) : Long.ZERO,
      transmissionTimestamp: isSet(object.transmissionTimestamp) ? Long.fromValue(object.transmissionTimestamp) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Transmission>): Transmission {
    const message = createBaseTransmission();
    message.answer = object.answer ?? "";
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.transmissionTimestamp = object.transmissionTimestamp !== undefined && object.transmissionTimestamp !== null ? Long.fromValue(object.transmissionTimestamp) : Long.ZERO;
    return message;
  }
};
function createBaseEpochAndRound(): EpochAndRound {
  return {
    epoch: Long.UZERO,
    round: Long.UZERO
  };
}
export const EpochAndRound = {
  encode(message: EpochAndRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (!message.round.isZero()) {
      writer.uint32(16).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EpochAndRound {
    return {
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EpochAndRound>): EpochAndRound {
    const message = createBaseEpochAndRound();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    return message;
  }
};
function createBaseReport(): Report {
  return {
    observationsTimestamp: Long.ZERO,
    observers: new Uint8Array(),
    observations: []
  };
}
export const Report = {
  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(8).int64(message.observationsTimestamp);
    }
    if (message.observers.length !== 0) {
      writer.uint32(18).bytes(message.observers);
    }
    for (const v of message.observations) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Report {
    return {
      observationsTimestamp: isSet(object.observationsTimestamp) ? Long.fromValue(object.observationsTimestamp) : Long.ZERO,
      observers: isSet(object.observers) ? bytesFromBase64(object.observers) : new Uint8Array(),
      observations: Array.isArray(object?.observations) ? object.observations.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Report>): Report {
    const message = createBaseReport();
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.observers = object.observers ?? new Uint8Array();
    message.observations = object.observations?.map(e => e) || [];
    return message;
  }
};
function createBaseReportToSign(): ReportToSign {
  return {
    configDigest: new Uint8Array(),
    epoch: Long.UZERO,
    round: Long.UZERO,
    extraHash: new Uint8Array(),
    report: new Uint8Array()
  };
}
export const ReportToSign = {
  encode(message: ReportToSign, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (!message.round.isZero()) {
      writer.uint32(24).uint64(message.round);
    }
    if (message.extraHash.length !== 0) {
      writer.uint32(34).bytes(message.extraHash);
    }
    if (message.report.length !== 0) {
      writer.uint32(42).bytes(message.report);
    }
    return writer;
  },
  fromJSON(object: any): ReportToSign {
    return {
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.UZERO,
      extraHash: isSet(object.extraHash) ? bytesFromBase64(object.extraHash) : new Uint8Array(),
      report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ReportToSign>): ReportToSign {
    const message = createBaseReportToSign();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.UZERO;
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report ?? new Uint8Array();
    return message;
  }
};
function createBaseEventOraclePaid(): EventOraclePaid {
  return {
    transmitterAddr: "",
    payeeAddr: "",
    amount: undefined
  };
}
export const EventOraclePaid = {
  encode(message: EventOraclePaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transmitterAddr !== "") {
      writer.uint32(10).string(message.transmitterAddr);
    }
    if (message.payeeAddr !== "") {
      writer.uint32(18).string(message.payeeAddr);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventOraclePaid {
    return {
      transmitterAddr: isSet(object.transmitterAddr) ? String(object.transmitterAddr) : "",
      payeeAddr: isSet(object.payeeAddr) ? String(object.payeeAddr) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<EventOraclePaid>): EventOraclePaid {
    const message = createBaseEventOraclePaid();
    message.transmitterAddr = object.transmitterAddr ?? "";
    message.payeeAddr = object.payeeAddr ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }
};
function createBaseEventAnswerUpdated(): EventAnswerUpdated {
  return {
    current: "",
    roundId: "",
    updatedAt: undefined
  };
}
export const EventAnswerUpdated = {
  encode(message: EventAnswerUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.current !== "") {
      writer.uint32(10).string(message.current);
    }
    if (message.roundId !== "") {
      writer.uint32(18).string(message.roundId);
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventAnswerUpdated {
    return {
      current: isSet(object.current) ? String(object.current) : "",
      roundId: isSet(object.roundId) ? String(object.roundId) : "",
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined
    };
  },
  fromPartial(object: Partial<EventAnswerUpdated>): EventAnswerUpdated {
    const message = createBaseEventAnswerUpdated();
    message.current = object.current ?? "";
    message.roundId = object.roundId ?? "";
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Timestamp.fromPartial(object.updatedAt) : undefined;
    return message;
  }
};
function createBaseEventNewRound(): EventNewRound {
  return {
    roundId: "",
    startedBy: "",
    startedAt: undefined
  };
}
export const EventNewRound = {
  encode(message: EventNewRound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roundId !== "") {
      writer.uint32(10).string(message.roundId);
    }
    if (message.startedBy !== "") {
      writer.uint32(18).string(message.startedBy);
    }
    if (message.startedAt !== undefined) {
      Timestamp.encode(message.startedAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventNewRound {
    return {
      roundId: isSet(object.roundId) ? String(object.roundId) : "",
      startedBy: isSet(object.startedBy) ? String(object.startedBy) : "",
      startedAt: isSet(object.startedAt) ? fromJsonTimestamp(object.startedAt) : undefined
    };
  },
  fromPartial(object: Partial<EventNewRound>): EventNewRound {
    const message = createBaseEventNewRound();
    message.roundId = object.roundId ?? "";
    message.startedBy = object.startedBy ?? "";
    message.startedAt = object.startedAt !== undefined && object.startedAt !== null ? Timestamp.fromPartial(object.startedAt) : undefined;
    return message;
  }
};
function createBaseEventTransmitted(): EventTransmitted {
  return {
    configDigest: new Uint8Array(),
    epoch: Long.UZERO
  };
}
export const EventTransmitted = {
  encode(message: EventTransmitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (!message.epoch.isZero()) {
      writer.uint32(16).uint64(message.epoch);
    }
    return writer;
  },
  fromJSON(object: any): EventTransmitted {
    return {
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO
    };
  },
  fromPartial(object: Partial<EventTransmitted>): EventTransmitted {
    const message = createBaseEventTransmitted();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    return message;
  }
};
function createBaseEventNewTransmission(): EventNewTransmission {
  return {
    feedId: "",
    aggregatorRoundId: 0,
    answer: "",
    transmitter: "",
    observationsTimestamp: Long.ZERO,
    observations: [],
    observers: new Uint8Array(),
    configDigest: new Uint8Array(),
    epochAndRound: undefined
  };
}
export const EventNewTransmission = {
  encode(message: EventNewTransmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.aggregatorRoundId !== 0) {
      writer.uint32(16).uint32(message.aggregatorRoundId);
    }
    if (message.answer !== "") {
      writer.uint32(26).string(message.answer);
    }
    if (message.transmitter !== "") {
      writer.uint32(34).string(message.transmitter);
    }
    if (!message.observationsTimestamp.isZero()) {
      writer.uint32(40).int64(message.observationsTimestamp);
    }
    for (const v of message.observations) {
      writer.uint32(50).string(v!);
    }
    if (message.observers.length !== 0) {
      writer.uint32(58).bytes(message.observers);
    }
    if (message.configDigest.length !== 0) {
      writer.uint32(66).bytes(message.configDigest);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventNewTransmission {
    return {
      feedId: isSet(object.feedId) ? String(object.feedId) : "",
      aggregatorRoundId: isSet(object.aggregatorRoundId) ? Number(object.aggregatorRoundId) : 0,
      answer: isSet(object.answer) ? String(object.answer) : "",
      transmitter: isSet(object.transmitter) ? String(object.transmitter) : "",
      observationsTimestamp: isSet(object.observationsTimestamp) ? Long.fromValue(object.observationsTimestamp) : Long.ZERO,
      observations: Array.isArray(object?.observations) ? object.observations.map((e: any) => String(e)) : [],
      observers: isSet(object.observers) ? bytesFromBase64(object.observers) : new Uint8Array(),
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      epochAndRound: isSet(object.epochAndRound) ? EpochAndRound.fromJSON(object.epochAndRound) : undefined
    };
  },
  fromPartial(object: Partial<EventNewTransmission>): EventNewTransmission {
    const message = createBaseEventNewTransmission();
    message.feedId = object.feedId ?? "";
    message.aggregatorRoundId = object.aggregatorRoundId ?? 0;
    message.answer = object.answer ?? "";
    message.transmitter = object.transmitter ?? "";
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? Long.fromValue(object.observationsTimestamp) : Long.ZERO;
    message.observations = object.observations?.map(e => e) || [];
    message.observers = object.observers ?? new Uint8Array();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  }
};
function createBaseEventConfigSet(): EventConfigSet {
  return {
    configDigest: new Uint8Array(),
    previousConfigBlockNumber: Long.ZERO,
    config: undefined,
    configInfo: undefined
  };
}
export const EventConfigSet = {
  encode(message: EventConfigSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (!message.previousConfigBlockNumber.isZero()) {
      writer.uint32(16).int64(message.previousConfigBlockNumber);
    }
    if (message.config !== undefined) {
      FeedConfig.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    if (message.configInfo !== undefined) {
      FeedConfigInfo.encode(message.configInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventConfigSet {
    return {
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      previousConfigBlockNumber: isSet(object.previousConfigBlockNumber) ? Long.fromValue(object.previousConfigBlockNumber) : Long.ZERO,
      config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined,
      configInfo: isSet(object.configInfo) ? FeedConfigInfo.fromJSON(object.configInfo) : undefined
    };
  },
  fromPartial(object: Partial<EventConfigSet>): EventConfigSet {
    const message = createBaseEventConfigSet();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.previousConfigBlockNumber = object.previousConfigBlockNumber !== undefined && object.previousConfigBlockNumber !== null ? Long.fromValue(object.previousConfigBlockNumber) : Long.ZERO;
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    message.configInfo = object.configInfo !== undefined && object.configInfo !== null ? FeedConfigInfo.fromPartial(object.configInfo) : undefined;
    return message;
  }
};