import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
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
function createBaseParams(): Params {
  return {
    linkDenom: "",
    payoutBlockInterval: BigInt(0),
    moduleAdmin: ""
  };
}
export const Params = {
  typeUrl: "/injective.ocr.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.linkDenom !== "") {
      writer.uint32(10).string(message.linkDenom);
    }
    if (message.payoutBlockInterval !== BigInt(0)) {
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
      payoutBlockInterval: isSet(object.payoutBlockInterval) ? BigInt(object.payoutBlockInterval.toString()) : BigInt(0),
      moduleAdmin: isSet(object.moduleAdmin) ? String(object.moduleAdmin) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.linkDenom = object.linkDenom ?? "";
    message.payoutBlockInterval = object.payoutBlockInterval !== undefined && object.payoutBlockInterval !== null ? BigInt(object.payoutBlockInterval.toString()) : BigInt(0);
    message.moduleAdmin = object.moduleAdmin ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      linkDenom: object.link_denom,
      payoutBlockInterval: BigInt(object.payout_block_interval),
      moduleAdmin: object.module_admin
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.link_denom = message.linkDenom;
    obj.payout_block_interval = message.payoutBlockInterval ? message.payoutBlockInterval.toString() : undefined;
    obj.module_admin = message.moduleAdmin;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseFeedConfig(): FeedConfig {
  return {
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: BigInt(0),
    offchainConfig: new Uint8Array(),
    moduleParams: ModuleParams.fromPartial({})
  };
}
export const FeedConfig = {
  typeUrl: "/injective.ocr.v1beta1.FeedConfig",
  encode(message: FeedConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.offchainConfigVersion !== BigInt(0)) {
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
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0),
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
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0);
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.moduleParams = object.moduleParams !== undefined && object.moduleParams !== null ? ModuleParams.fromPartial(object.moduleParams) : undefined;
    return message;
  },
  fromAmino(object: FeedConfigAmino): FeedConfig {
    return {
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => e) : [],
      f: object.f,
      onchainConfig: object.onchain_config,
      offchainConfigVersion: BigInt(object.offchain_config_version),
      offchainConfig: object.offchain_config,
      moduleParams: object?.module_params ? ModuleParams.fromAmino(object.module_params) : undefined
    };
  },
  toAmino(message: FeedConfig): FeedConfigAmino {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = [];
    }
    obj.f = message.f;
    obj.onchain_config = message.onchainConfig;
    obj.offchain_config_version = message.offchainConfigVersion ? message.offchainConfigVersion.toString() : undefined;
    obj.offchain_config = message.offchainConfig;
    obj.module_params = message.moduleParams ? ModuleParams.toAmino(message.moduleParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedConfigAminoMsg): FeedConfig {
    return FeedConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedConfigProtoMsg): FeedConfig {
    return FeedConfig.decode(message.value);
  },
  toProto(message: FeedConfig): Uint8Array {
    return FeedConfig.encode(message).finish();
  },
  toProtoMsg(message: FeedConfig): FeedConfigProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedConfig",
      value: FeedConfig.encode(message).finish()
    };
  }
};
function createBaseFeedConfigInfo(): FeedConfigInfo {
  return {
    latestConfigDigest: new Uint8Array(),
    f: 0,
    n: 0,
    configCount: BigInt(0),
    latestConfigBlockNumber: BigInt(0)
  };
}
export const FeedConfigInfo = {
  typeUrl: "/injective.ocr.v1beta1.FeedConfigInfo",
  encode(message: FeedConfigInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestConfigDigest.length !== 0) {
      writer.uint32(10).bytes(message.latestConfigDigest);
    }
    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }
    if (message.n !== 0) {
      writer.uint32(24).uint32(message.n);
    }
    if (message.configCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.configCount);
    }
    if (message.latestConfigBlockNumber !== BigInt(0)) {
      writer.uint32(40).int64(message.latestConfigBlockNumber);
    }
    return writer;
  },
  fromJSON(object: any): FeedConfigInfo {
    return {
      latestConfigDigest: isSet(object.latestConfigDigest) ? bytesFromBase64(object.latestConfigDigest) : new Uint8Array(),
      f: isSet(object.f) ? Number(object.f) : 0,
      n: isSet(object.n) ? Number(object.n) : 0,
      configCount: isSet(object.configCount) ? BigInt(object.configCount.toString()) : BigInt(0),
      latestConfigBlockNumber: isSet(object.latestConfigBlockNumber) ? BigInt(object.latestConfigBlockNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<FeedConfigInfo>): FeedConfigInfo {
    const message = createBaseFeedConfigInfo();
    message.latestConfigDigest = object.latestConfigDigest ?? new Uint8Array();
    message.f = object.f ?? 0;
    message.n = object.n ?? 0;
    message.configCount = object.configCount !== undefined && object.configCount !== null ? BigInt(object.configCount.toString()) : BigInt(0);
    message.latestConfigBlockNumber = object.latestConfigBlockNumber !== undefined && object.latestConfigBlockNumber !== null ? BigInt(object.latestConfigBlockNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FeedConfigInfoAmino): FeedConfigInfo {
    return {
      latestConfigDigest: object.latest_config_digest,
      f: object.f,
      n: object.n,
      configCount: BigInt(object.config_count),
      latestConfigBlockNumber: BigInt(object.latest_config_block_number)
    };
  },
  toAmino(message: FeedConfigInfo): FeedConfigInfoAmino {
    const obj: any = {};
    obj.latest_config_digest = message.latestConfigDigest;
    obj.f = message.f;
    obj.n = message.n;
    obj.config_count = message.configCount ? message.configCount.toString() : undefined;
    obj.latest_config_block_number = message.latestConfigBlockNumber ? message.latestConfigBlockNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedConfigInfoAminoMsg): FeedConfigInfo {
    return FeedConfigInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedConfigInfoProtoMsg): FeedConfigInfo {
    return FeedConfigInfo.decode(message.value);
  },
  toProto(message: FeedConfigInfo): Uint8Array {
    return FeedConfigInfo.encode(message).finish();
  },
  toProtoMsg(message: FeedConfigInfo): FeedConfigInfoProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedConfigInfo",
      value: FeedConfigInfo.encode(message).finish()
    };
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
  typeUrl: "/injective.ocr.v1beta1.ModuleParams",
  encode(message: ModuleParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.minAnswer !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.minAnswer, 18).atomics);
    }
    if (message.maxAnswer !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxAnswer, 18).atomics);
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
  },
  fromAmino(object: ModuleParamsAmino): ModuleParams {
    return {
      feedId: object.feed_id,
      minAnswer: object.min_answer,
      maxAnswer: object.max_answer,
      linkPerObservation: object.link_per_observation,
      linkPerTransmission: object.link_per_transmission,
      linkDenom: object.link_denom,
      uniqueReports: object.unique_reports,
      description: object.description,
      feedAdmin: object.feed_admin,
      billingAdmin: object.billing_admin
    };
  },
  toAmino(message: ModuleParams): ModuleParamsAmino {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.min_answer = message.minAnswer;
    obj.max_answer = message.maxAnswer;
    obj.link_per_observation = message.linkPerObservation;
    obj.link_per_transmission = message.linkPerTransmission;
    obj.link_denom = message.linkDenom;
    obj.unique_reports = message.uniqueReports;
    obj.description = message.description;
    obj.feed_admin = message.feedAdmin;
    obj.billing_admin = message.billingAdmin;
    return obj;
  },
  fromAminoMsg(object: ModuleParamsAminoMsg): ModuleParams {
    return ModuleParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ModuleParamsProtoMsg): ModuleParams {
    return ModuleParams.decode(message.value);
  },
  toProto(message: ModuleParams): Uint8Array {
    return ModuleParams.encode(message).finish();
  },
  toProtoMsg(message: ModuleParams): ModuleParamsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.ModuleParams",
      value: ModuleParams.encode(message).finish()
    };
  }
};
function createBaseContractConfig(): ContractConfig {
  return {
    configCount: BigInt(0),
    signers: [],
    transmitters: [],
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: BigInt(0),
    offchainConfig: new Uint8Array()
  };
}
export const ContractConfig = {
  typeUrl: "/injective.ocr.v1beta1.ContractConfig",
  encode(message: ContractConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configCount !== BigInt(0)) {
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
    if (message.offchainConfigVersion !== BigInt(0)) {
      writer.uint32(48).uint64(message.offchainConfigVersion);
    }
    if (message.offchainConfig.length !== 0) {
      writer.uint32(58).bytes(message.offchainConfig);
    }
    return writer;
  },
  fromJSON(object: any): ContractConfig {
    return {
      configCount: isSet(object.configCount) ? BigInt(object.configCount.toString()) : BigInt(0),
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => String(e)) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => String(e)) : [],
      f: isSet(object.f) ? Number(object.f) : 0,
      onchainConfig: isSet(object.onchainConfig) ? bytesFromBase64(object.onchainConfig) : new Uint8Array(),
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0),
      offchainConfig: isSet(object.offchainConfig) ? bytesFromBase64(object.offchainConfig) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ContractConfig>): ContractConfig {
    const message = createBaseContractConfig();
    message.configCount = object.configCount !== undefined && object.configCount !== null ? BigInt(object.configCount.toString()) : BigInt(0);
    message.signers = object.signers?.map(e => e) || [];
    message.transmitters = object.transmitters?.map(e => e) || [];
    message.f = object.f ?? 0;
    message.onchainConfig = object.onchainConfig ?? new Uint8Array();
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0);
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ContractConfigAmino): ContractConfig {
    return {
      configCount: BigInt(object.config_count),
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => e) : [],
      f: object.f,
      onchainConfig: object.onchain_config,
      offchainConfigVersion: BigInt(object.offchain_config_version),
      offchainConfig: object.offchain_config
    };
  },
  toAmino(message: ContractConfig): ContractConfigAmino {
    const obj: any = {};
    obj.config_count = message.configCount ? message.configCount.toString() : undefined;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = [];
    }
    obj.f = message.f;
    obj.onchain_config = message.onchainConfig;
    obj.offchain_config_version = message.offchainConfigVersion ? message.offchainConfigVersion.toString() : undefined;
    obj.offchain_config = message.offchainConfig;
    return obj;
  },
  fromAminoMsg(object: ContractConfigAminoMsg): ContractConfig {
    return ContractConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractConfigProtoMsg): ContractConfig {
    return ContractConfig.decode(message.value);
  },
  toProto(message: ContractConfig): Uint8Array {
    return ContractConfig.encode(message).finish();
  },
  toProtoMsg(message: ContractConfig): ContractConfigProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.ContractConfig",
      value: ContractConfig.encode(message).finish()
    };
  }
};
function createBaseSetConfigProposal(): SetConfigProposal {
  return {
    $typeUrl: "/injective.ocr.v1beta1.SetConfigProposal",
    title: "",
    description: "",
    config: FeedConfig.fromPartial({})
  };
}
export const SetConfigProposal = {
  typeUrl: "/injective.ocr.v1beta1.SetConfigProposal",
  encode(message: SetConfigProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetConfigProposalAmino): SetConfigProposal {
    return {
      title: object.title,
      description: object.description,
      config: object?.config ? FeedConfig.fromAmino(object.config) : undefined
    };
  },
  toAmino(message: SetConfigProposal): SetConfigProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.config = message.config ? FeedConfig.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetConfigProposalAminoMsg): SetConfigProposal {
    return SetConfigProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetConfigProposalProtoMsg): SetConfigProposal {
    return SetConfigProposal.decode(message.value);
  },
  toProto(message: SetConfigProposal): Uint8Array {
    return SetConfigProposal.encode(message).finish();
  },
  toProtoMsg(message: SetConfigProposal): SetConfigProposalProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.SetConfigProposal",
      value: SetConfigProposal.encode(message).finish()
    };
  }
};
function createBaseFeedProperties(): FeedProperties {
  return {
    feedId: "",
    f: 0,
    onchainConfig: new Uint8Array(),
    offchainConfigVersion: BigInt(0),
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
  typeUrl: "/injective.ocr.v1beta1.FeedProperties",
  encode(message: FeedProperties, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.f !== 0) {
      writer.uint32(16).uint32(message.f);
    }
    if (message.onchainConfig.length !== 0) {
      writer.uint32(26).bytes(message.onchainConfig);
    }
    if (message.offchainConfigVersion !== BigInt(0)) {
      writer.uint32(32).uint64(message.offchainConfigVersion);
    }
    if (message.offchainConfig.length !== 0) {
      writer.uint32(42).bytes(message.offchainConfig);
    }
    if (message.minAnswer !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.minAnswer, 18).atomics);
    }
    if (message.maxAnswer !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxAnswer, 18).atomics);
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
      offchainConfigVersion: isSet(object.offchainConfigVersion) ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0),
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
    message.offchainConfigVersion = object.offchainConfigVersion !== undefined && object.offchainConfigVersion !== null ? BigInt(object.offchainConfigVersion.toString()) : BigInt(0);
    message.offchainConfig = object.offchainConfig ?? new Uint8Array();
    message.minAnswer = object.minAnswer ?? "";
    message.maxAnswer = object.maxAnswer ?? "";
    message.linkPerObservation = object.linkPerObservation ?? "";
    message.linkPerTransmission = object.linkPerTransmission ?? "";
    message.uniqueReports = object.uniqueReports ?? false;
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: FeedPropertiesAmino): FeedProperties {
    return {
      feedId: object.feed_id,
      f: object.f,
      onchainConfig: object.onchain_config,
      offchainConfigVersion: BigInt(object.offchain_config_version),
      offchainConfig: object.offchain_config,
      minAnswer: object.min_answer,
      maxAnswer: object.max_answer,
      linkPerObservation: object.link_per_observation,
      linkPerTransmission: object.link_per_transmission,
      uniqueReports: object.unique_reports,
      description: object.description
    };
  },
  toAmino(message: FeedProperties): FeedPropertiesAmino {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.f = message.f;
    obj.onchain_config = message.onchainConfig;
    obj.offchain_config_version = message.offchainConfigVersion ? message.offchainConfigVersion.toString() : undefined;
    obj.offchain_config = message.offchainConfig;
    obj.min_answer = message.minAnswer;
    obj.max_answer = message.maxAnswer;
    obj.link_per_observation = message.linkPerObservation;
    obj.link_per_transmission = message.linkPerTransmission;
    obj.unique_reports = message.uniqueReports;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: FeedPropertiesAminoMsg): FeedProperties {
    return FeedProperties.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedPropertiesProtoMsg): FeedProperties {
    return FeedProperties.decode(message.value);
  },
  toProto(message: FeedProperties): Uint8Array {
    return FeedProperties.encode(message).finish();
  },
  toProtoMsg(message: FeedProperties): FeedPropertiesProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.FeedProperties",
      value: FeedProperties.encode(message).finish()
    };
  }
};
function createBaseSetBatchConfigProposal(): SetBatchConfigProposal {
  return {
    $typeUrl: "/injective.ocr.v1beta1.SetBatchConfigProposal",
    title: "",
    description: "",
    signers: [],
    transmitters: [],
    linkDenom: "",
    feedProperties: []
  };
}
export const SetBatchConfigProposal = {
  typeUrl: "/injective.ocr.v1beta1.SetBatchConfigProposal",
  encode(message: SetBatchConfigProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetBatchConfigProposalAmino): SetBatchConfigProposal {
    return {
      title: object.title,
      description: object.description,
      signers: Array.isArray(object?.signers) ? object.signers.map((e: any) => e) : [],
      transmitters: Array.isArray(object?.transmitters) ? object.transmitters.map((e: any) => e) : [],
      linkDenom: object.link_denom,
      feedProperties: Array.isArray(object?.feed_properties) ? object.feed_properties.map((e: any) => FeedProperties.fromAmino(e)) : []
    };
  },
  toAmino(message: SetBatchConfigProposal): SetBatchConfigProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    if (message.transmitters) {
      obj.transmitters = message.transmitters.map(e => e);
    } else {
      obj.transmitters = [];
    }
    obj.link_denom = message.linkDenom;
    if (message.feedProperties) {
      obj.feed_properties = message.feedProperties.map(e => e ? FeedProperties.toAmino(e) : undefined);
    } else {
      obj.feed_properties = [];
    }
    return obj;
  },
  fromAminoMsg(object: SetBatchConfigProposalAminoMsg): SetBatchConfigProposal {
    return SetBatchConfigProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetBatchConfigProposalProtoMsg): SetBatchConfigProposal {
    return SetBatchConfigProposal.decode(message.value);
  },
  toProto(message: SetBatchConfigProposal): Uint8Array {
    return SetBatchConfigProposal.encode(message).finish();
  },
  toProtoMsg(message: SetBatchConfigProposal): SetBatchConfigProposalProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.SetBatchConfigProposal",
      value: SetBatchConfigProposal.encode(message).finish()
    };
  }
};
function createBaseOracleObservationsCounts(): OracleObservationsCounts {
  return {
    counts: []
  };
}
export const OracleObservationsCounts = {
  typeUrl: "/injective.ocr.v1beta1.OracleObservationsCounts",
  encode(message: OracleObservationsCounts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: OracleObservationsCountsAmino): OracleObservationsCounts {
    return {
      counts: Array.isArray(object?.counts) ? object.counts.map((e: any) => e) : []
    };
  },
  toAmino(message: OracleObservationsCounts): OracleObservationsCountsAmino {
    const obj: any = {};
    if (message.counts) {
      obj.counts = message.counts.map(e => e);
    } else {
      obj.counts = [];
    }
    return obj;
  },
  fromAminoMsg(object: OracleObservationsCountsAminoMsg): OracleObservationsCounts {
    return OracleObservationsCounts.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleObservationsCountsProtoMsg): OracleObservationsCounts {
    return OracleObservationsCounts.decode(message.value);
  },
  toProto(message: OracleObservationsCounts): Uint8Array {
    return OracleObservationsCounts.encode(message).finish();
  },
  toProtoMsg(message: OracleObservationsCounts): OracleObservationsCountsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.OracleObservationsCounts",
      value: OracleObservationsCounts.encode(message).finish()
    };
  }
};
function createBaseGasReimbursements(): GasReimbursements {
  return {
    reimbursements: []
  };
}
export const GasReimbursements = {
  typeUrl: "/injective.ocr.v1beta1.GasReimbursements",
  encode(message: GasReimbursements, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GasReimbursementsAmino): GasReimbursements {
    return {
      reimbursements: Array.isArray(object?.reimbursements) ? object.reimbursements.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: GasReimbursements): GasReimbursementsAmino {
    const obj: any = {};
    if (message.reimbursements) {
      obj.reimbursements = message.reimbursements.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reimbursements = [];
    }
    return obj;
  },
  fromAminoMsg(object: GasReimbursementsAminoMsg): GasReimbursements {
    return GasReimbursements.fromAmino(object.value);
  },
  fromProtoMsg(message: GasReimbursementsProtoMsg): GasReimbursements {
    return GasReimbursements.decode(message.value);
  },
  toProto(message: GasReimbursements): Uint8Array {
    return GasReimbursements.encode(message).finish();
  },
  toProtoMsg(message: GasReimbursements): GasReimbursementsProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.GasReimbursements",
      value: GasReimbursements.encode(message).finish()
    };
  }
};
function createBasePayee(): Payee {
  return {
    transmitterAddr: "",
    paymentAddr: ""
  };
}
export const Payee = {
  typeUrl: "/injective.ocr.v1beta1.Payee",
  encode(message: Payee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: PayeeAmino): Payee {
    return {
      transmitterAddr: object.transmitter_addr,
      paymentAddr: object.payment_addr
    };
  },
  toAmino(message: Payee): PayeeAmino {
    const obj: any = {};
    obj.transmitter_addr = message.transmitterAddr;
    obj.payment_addr = message.paymentAddr;
    return obj;
  },
  fromAminoMsg(object: PayeeAminoMsg): Payee {
    return Payee.fromAmino(object.value);
  },
  fromProtoMsg(message: PayeeProtoMsg): Payee {
    return Payee.decode(message.value);
  },
  toProto(message: Payee): Uint8Array {
    return Payee.encode(message).finish();
  },
  toProtoMsg(message: Payee): PayeeProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Payee",
      value: Payee.encode(message).finish()
    };
  }
};
function createBaseTransmission(): Transmission {
  return {
    answer: "",
    observationsTimestamp: BigInt(0),
    transmissionTimestamp: BigInt(0)
  };
}
export const Transmission = {
  typeUrl: "/injective.ocr.v1beta1.Transmission",
  encode(message: Transmission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.answer !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.answer, 18).atomics);
    }
    if (message.observationsTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.observationsTimestamp);
    }
    if (message.transmissionTimestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.transmissionTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): Transmission {
    return {
      answer: isSet(object.answer) ? String(object.answer) : "",
      observationsTimestamp: isSet(object.observationsTimestamp) ? BigInt(object.observationsTimestamp.toString()) : BigInt(0),
      transmissionTimestamp: isSet(object.transmissionTimestamp) ? BigInt(object.transmissionTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Transmission>): Transmission {
    const message = createBaseTransmission();
    message.answer = object.answer ?? "";
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? BigInt(object.observationsTimestamp.toString()) : BigInt(0);
    message.transmissionTimestamp = object.transmissionTimestamp !== undefined && object.transmissionTimestamp !== null ? BigInt(object.transmissionTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TransmissionAmino): Transmission {
    return {
      answer: object.answer,
      observationsTimestamp: BigInt(object.observations_timestamp),
      transmissionTimestamp: BigInt(object.transmission_timestamp)
    };
  },
  toAmino(message: Transmission): TransmissionAmino {
    const obj: any = {};
    obj.answer = message.answer;
    obj.observations_timestamp = message.observationsTimestamp ? message.observationsTimestamp.toString() : undefined;
    obj.transmission_timestamp = message.transmissionTimestamp ? message.transmissionTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TransmissionAminoMsg): Transmission {
    return Transmission.fromAmino(object.value);
  },
  fromProtoMsg(message: TransmissionProtoMsg): Transmission {
    return Transmission.decode(message.value);
  },
  toProto(message: Transmission): Uint8Array {
    return Transmission.encode(message).finish();
  },
  toProtoMsg(message: Transmission): TransmissionProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Transmission",
      value: Transmission.encode(message).finish()
    };
  }
};
function createBaseEpochAndRound(): EpochAndRound {
  return {
    epoch: BigInt(0),
    round: BigInt(0)
  };
}
export const EpochAndRound = {
  typeUrl: "/injective.ocr.v1beta1.EpochAndRound",
  encode(message: EpochAndRound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch !== BigInt(0)) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(16).uint64(message.round);
    }
    return writer;
  },
  fromJSON(object: any): EpochAndRound {
    return {
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EpochAndRound>): EpochAndRound {
    const message = createBaseEpochAndRound();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EpochAndRoundAmino): EpochAndRound {
    return {
      epoch: BigInt(object.epoch),
      round: BigInt(object.round)
    };
  },
  toAmino(message: EpochAndRound): EpochAndRoundAmino {
    const obj: any = {};
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochAndRoundAminoMsg): EpochAndRound {
    return EpochAndRound.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochAndRoundProtoMsg): EpochAndRound {
    return EpochAndRound.decode(message.value);
  },
  toProto(message: EpochAndRound): Uint8Array {
    return EpochAndRound.encode(message).finish();
  },
  toProtoMsg(message: EpochAndRound): EpochAndRoundProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EpochAndRound",
      value: EpochAndRound.encode(message).finish()
    };
  }
};
function createBaseReport(): Report {
  return {
    observationsTimestamp: BigInt(0),
    observers: new Uint8Array(),
    observations: []
  };
}
export const Report = {
  typeUrl: "/injective.ocr.v1beta1.Report",
  encode(message: Report, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.observationsTimestamp !== BigInt(0)) {
      writer.uint32(8).int64(message.observationsTimestamp);
    }
    if (message.observers.length !== 0) {
      writer.uint32(18).bytes(message.observers);
    }
    for (const v of message.observations) {
      writer.uint32(26).string(Decimal.fromUserInput(v!, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Report {
    return {
      observationsTimestamp: isSet(object.observationsTimestamp) ? BigInt(object.observationsTimestamp.toString()) : BigInt(0),
      observers: isSet(object.observers) ? bytesFromBase64(object.observers) : new Uint8Array(),
      observations: Array.isArray(object?.observations) ? object.observations.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Report>): Report {
    const message = createBaseReport();
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? BigInt(object.observationsTimestamp.toString()) : BigInt(0);
    message.observers = object.observers ?? new Uint8Array();
    message.observations = object.observations?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ReportAmino): Report {
    return {
      observationsTimestamp: BigInt(object.observations_timestamp),
      observers: object.observers,
      observations: Array.isArray(object?.observations) ? object.observations.map((e: any) => e) : []
    };
  },
  toAmino(message: Report): ReportAmino {
    const obj: any = {};
    obj.observations_timestamp = message.observationsTimestamp ? message.observationsTimestamp.toString() : undefined;
    obj.observers = message.observers;
    if (message.observations) {
      obj.observations = message.observations.map(e => e);
    } else {
      obj.observations = [];
    }
    return obj;
  },
  fromAminoMsg(object: ReportAminoMsg): Report {
    return Report.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportProtoMsg): Report {
    return Report.decode(message.value);
  },
  toProto(message: Report): Uint8Array {
    return Report.encode(message).finish();
  },
  toProtoMsg(message: Report): ReportProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.Report",
      value: Report.encode(message).finish()
    };
  }
};
function createBaseReportToSign(): ReportToSign {
  return {
    configDigest: new Uint8Array(),
    epoch: BigInt(0),
    round: BigInt(0),
    extraHash: new Uint8Array(),
    report: new Uint8Array()
  };
}
export const ReportToSign = {
  typeUrl: "/injective.ocr.v1beta1.ReportToSign",
  encode(message: ReportToSign, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    if (message.round !== BigInt(0)) {
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
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0),
      round: isSet(object.round) ? BigInt(object.round.toString()) : BigInt(0),
      extraHash: isSet(object.extraHash) ? bytesFromBase64(object.extraHash) : new Uint8Array(),
      report: isSet(object.report) ? bytesFromBase64(object.report) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ReportToSign>): ReportToSign {
    const message = createBaseReportToSign();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.extraHash = object.extraHash ?? new Uint8Array();
    message.report = object.report ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ReportToSignAmino): ReportToSign {
    return {
      configDigest: object.config_digest,
      epoch: BigInt(object.epoch),
      round: BigInt(object.round),
      extraHash: object.extra_hash,
      report: object.report
    };
  },
  toAmino(message: ReportToSign): ReportToSignAmino {
    const obj: any = {};
    obj.config_digest = message.configDigest;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.extra_hash = message.extraHash;
    obj.report = message.report;
    return obj;
  },
  fromAminoMsg(object: ReportToSignAminoMsg): ReportToSign {
    return ReportToSign.fromAmino(object.value);
  },
  fromProtoMsg(message: ReportToSignProtoMsg): ReportToSign {
    return ReportToSign.decode(message.value);
  },
  toProto(message: ReportToSign): Uint8Array {
    return ReportToSign.encode(message).finish();
  },
  toProtoMsg(message: ReportToSign): ReportToSignProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.ReportToSign",
      value: ReportToSign.encode(message).finish()
    };
  }
};
function createBaseEventOraclePaid(): EventOraclePaid {
  return {
    transmitterAddr: "",
    payeeAddr: "",
    amount: Coin.fromPartial({})
  };
}
export const EventOraclePaid = {
  typeUrl: "/injective.ocr.v1beta1.EventOraclePaid",
  encode(message: EventOraclePaid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventOraclePaidAmino): EventOraclePaid {
    return {
      transmitterAddr: object.transmitter_addr,
      payeeAddr: object.payee_addr,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: EventOraclePaid): EventOraclePaidAmino {
    const obj: any = {};
    obj.transmitter_addr = message.transmitterAddr;
    obj.payee_addr = message.payeeAddr;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventOraclePaidAminoMsg): EventOraclePaid {
    return EventOraclePaid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventOraclePaidProtoMsg): EventOraclePaid {
    return EventOraclePaid.decode(message.value);
  },
  toProto(message: EventOraclePaid): Uint8Array {
    return EventOraclePaid.encode(message).finish();
  },
  toProtoMsg(message: EventOraclePaid): EventOraclePaidProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventOraclePaid",
      value: EventOraclePaid.encode(message).finish()
    };
  }
};
function createBaseEventAnswerUpdated(): EventAnswerUpdated {
  return {
    current: "",
    roundId: "",
    updatedAt: Timestamp.fromPartial({})
  };
}
export const EventAnswerUpdated = {
  typeUrl: "/injective.ocr.v1beta1.EventAnswerUpdated",
  encode(message: EventAnswerUpdated, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventAnswerUpdatedAmino): EventAnswerUpdated {
    return {
      current: object.current,
      roundId: object.round_id,
      updatedAt: object.updated_at
    };
  },
  toAmino(message: EventAnswerUpdated): EventAnswerUpdatedAmino {
    const obj: any = {};
    obj.current = message.current;
    obj.round_id = message.roundId;
    obj.updated_at = message.updatedAt;
    return obj;
  },
  fromAminoMsg(object: EventAnswerUpdatedAminoMsg): EventAnswerUpdated {
    return EventAnswerUpdated.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAnswerUpdatedProtoMsg): EventAnswerUpdated {
    return EventAnswerUpdated.decode(message.value);
  },
  toProto(message: EventAnswerUpdated): Uint8Array {
    return EventAnswerUpdated.encode(message).finish();
  },
  toProtoMsg(message: EventAnswerUpdated): EventAnswerUpdatedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventAnswerUpdated",
      value: EventAnswerUpdated.encode(message).finish()
    };
  }
};
function createBaseEventNewRound(): EventNewRound {
  return {
    roundId: "",
    startedBy: "",
    startedAt: Timestamp.fromPartial({})
  };
}
export const EventNewRound = {
  typeUrl: "/injective.ocr.v1beta1.EventNewRound",
  encode(message: EventNewRound, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventNewRoundAmino): EventNewRound {
    return {
      roundId: object.round_id,
      startedBy: object.started_by,
      startedAt: object.started_at
    };
  },
  toAmino(message: EventNewRound): EventNewRoundAmino {
    const obj: any = {};
    obj.round_id = message.roundId;
    obj.started_by = message.startedBy;
    obj.started_at = message.startedAt;
    return obj;
  },
  fromAminoMsg(object: EventNewRoundAminoMsg): EventNewRound {
    return EventNewRound.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewRoundProtoMsg): EventNewRound {
    return EventNewRound.decode(message.value);
  },
  toProto(message: EventNewRound): Uint8Array {
    return EventNewRound.encode(message).finish();
  },
  toProtoMsg(message: EventNewRound): EventNewRoundProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventNewRound",
      value: EventNewRound.encode(message).finish()
    };
  }
};
function createBaseEventTransmitted(): EventTransmitted {
  return {
    configDigest: new Uint8Array(),
    epoch: BigInt(0)
  };
}
export const EventTransmitted = {
  typeUrl: "/injective.ocr.v1beta1.EventTransmitted",
  encode(message: EventTransmitted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (message.epoch !== BigInt(0)) {
      writer.uint32(16).uint64(message.epoch);
    }
    return writer;
  },
  fromJSON(object: any): EventTransmitted {
    return {
      configDigest: isSet(object.configDigest) ? bytesFromBase64(object.configDigest) : new Uint8Array(),
      epoch: isSet(object.epoch) ? BigInt(object.epoch.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<EventTransmitted>): EventTransmitted {
    const message = createBaseEventTransmitted();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? BigInt(object.epoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventTransmittedAmino): EventTransmitted {
    return {
      configDigest: object.config_digest,
      epoch: BigInt(object.epoch)
    };
  },
  toAmino(message: EventTransmitted): EventTransmittedAmino {
    const obj: any = {};
    obj.config_digest = message.configDigest;
    obj.epoch = message.epoch ? message.epoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventTransmittedAminoMsg): EventTransmitted {
    return EventTransmitted.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTransmittedProtoMsg): EventTransmitted {
    return EventTransmitted.decode(message.value);
  },
  toProto(message: EventTransmitted): Uint8Array {
    return EventTransmitted.encode(message).finish();
  },
  toProtoMsg(message: EventTransmitted): EventTransmittedProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventTransmitted",
      value: EventTransmitted.encode(message).finish()
    };
  }
};
function createBaseEventNewTransmission(): EventNewTransmission {
  return {
    feedId: "",
    aggregatorRoundId: 0,
    answer: "",
    transmitter: "",
    observationsTimestamp: BigInt(0),
    observations: [],
    observers: new Uint8Array(),
    configDigest: new Uint8Array(),
    epochAndRound: EpochAndRound.fromPartial({})
  };
}
export const EventNewTransmission = {
  typeUrl: "/injective.ocr.v1beta1.EventNewTransmission",
  encode(message: EventNewTransmission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.aggregatorRoundId !== 0) {
      writer.uint32(16).uint32(message.aggregatorRoundId);
    }
    if (message.answer !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.answer, 18).atomics);
    }
    if (message.transmitter !== "") {
      writer.uint32(34).string(message.transmitter);
    }
    if (message.observationsTimestamp !== BigInt(0)) {
      writer.uint32(40).int64(message.observationsTimestamp);
    }
    for (const v of message.observations) {
      writer.uint32(50).string(Decimal.fromUserInput(v!, 18).atomics);
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
      observationsTimestamp: isSet(object.observationsTimestamp) ? BigInt(object.observationsTimestamp.toString()) : BigInt(0),
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
    message.observationsTimestamp = object.observationsTimestamp !== undefined && object.observationsTimestamp !== null ? BigInt(object.observationsTimestamp.toString()) : BigInt(0);
    message.observations = object.observations?.map(e => e) || [];
    message.observers = object.observers ?? new Uint8Array();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  },
  fromAmino(object: EventNewTransmissionAmino): EventNewTransmission {
    return {
      feedId: object.feed_id,
      aggregatorRoundId: object.aggregator_round_id,
      answer: object.answer,
      transmitter: object.transmitter,
      observationsTimestamp: BigInt(object.observations_timestamp),
      observations: Array.isArray(object?.observations) ? object.observations.map((e: any) => e) : [],
      observers: object.observers,
      configDigest: object.config_digest,
      epochAndRound: object?.epoch_and_round ? EpochAndRound.fromAmino(object.epoch_and_round) : undefined
    };
  },
  toAmino(message: EventNewTransmission): EventNewTransmissionAmino {
    const obj: any = {};
    obj.feed_id = message.feedId;
    obj.aggregator_round_id = message.aggregatorRoundId;
    obj.answer = message.answer;
    obj.transmitter = message.transmitter;
    obj.observations_timestamp = message.observationsTimestamp ? message.observationsTimestamp.toString() : undefined;
    if (message.observations) {
      obj.observations = message.observations.map(e => e);
    } else {
      obj.observations = [];
    }
    obj.observers = message.observers;
    obj.config_digest = message.configDigest;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventNewTransmissionAminoMsg): EventNewTransmission {
    return EventNewTransmission.fromAmino(object.value);
  },
  fromProtoMsg(message: EventNewTransmissionProtoMsg): EventNewTransmission {
    return EventNewTransmission.decode(message.value);
  },
  toProto(message: EventNewTransmission): Uint8Array {
    return EventNewTransmission.encode(message).finish();
  },
  toProtoMsg(message: EventNewTransmission): EventNewTransmissionProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventNewTransmission",
      value: EventNewTransmission.encode(message).finish()
    };
  }
};
function createBaseEventConfigSet(): EventConfigSet {
  return {
    configDigest: new Uint8Array(),
    previousConfigBlockNumber: BigInt(0),
    config: FeedConfig.fromPartial({}),
    configInfo: FeedConfigInfo.fromPartial({})
  };
}
export const EventConfigSet = {
  typeUrl: "/injective.ocr.v1beta1.EventConfigSet",
  encode(message: EventConfigSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (message.previousConfigBlockNumber !== BigInt(0)) {
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
      previousConfigBlockNumber: isSet(object.previousConfigBlockNumber) ? BigInt(object.previousConfigBlockNumber.toString()) : BigInt(0),
      config: isSet(object.config) ? FeedConfig.fromJSON(object.config) : undefined,
      configInfo: isSet(object.configInfo) ? FeedConfigInfo.fromJSON(object.configInfo) : undefined
    };
  },
  fromPartial(object: Partial<EventConfigSet>): EventConfigSet {
    const message = createBaseEventConfigSet();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.previousConfigBlockNumber = object.previousConfigBlockNumber !== undefined && object.previousConfigBlockNumber !== null ? BigInt(object.previousConfigBlockNumber.toString()) : BigInt(0);
    message.config = object.config !== undefined && object.config !== null ? FeedConfig.fromPartial(object.config) : undefined;
    message.configInfo = object.configInfo !== undefined && object.configInfo !== null ? FeedConfigInfo.fromPartial(object.configInfo) : undefined;
    return message;
  },
  fromAmino(object: EventConfigSetAmino): EventConfigSet {
    return {
      configDigest: object.config_digest,
      previousConfigBlockNumber: BigInt(object.previous_config_block_number),
      config: object?.config ? FeedConfig.fromAmino(object.config) : undefined,
      configInfo: object?.config_info ? FeedConfigInfo.fromAmino(object.config_info) : undefined
    };
  },
  toAmino(message: EventConfigSet): EventConfigSetAmino {
    const obj: any = {};
    obj.config_digest = message.configDigest;
    obj.previous_config_block_number = message.previousConfigBlockNumber ? message.previousConfigBlockNumber.toString() : undefined;
    obj.config = message.config ? FeedConfig.toAmino(message.config) : undefined;
    obj.config_info = message.configInfo ? FeedConfigInfo.toAmino(message.configInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventConfigSetAminoMsg): EventConfigSet {
    return EventConfigSet.fromAmino(object.value);
  },
  fromProtoMsg(message: EventConfigSetProtoMsg): EventConfigSet {
    return EventConfigSet.decode(message.value);
  },
  toProto(message: EventConfigSet): Uint8Array {
    return EventConfigSet.encode(message).finish();
  },
  toProtoMsg(message: EventConfigSet): EventConfigSetProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.EventConfigSet",
      value: EventConfigSet.encode(message).finish()
    };
  }
};