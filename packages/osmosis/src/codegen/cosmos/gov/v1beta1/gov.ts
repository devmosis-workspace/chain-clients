import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { ReplaceMigrationRecordsProposal, ReplaceMigrationRecordsProposalProtoMsg, ReplaceMigrationRecordsProposalSDKType, UpdateMigrationRecordsProposal, UpdateMigrationRecordsProposalProtoMsg, UpdateMigrationRecordsProposalSDKType, CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg, CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType, SetScalingFactorControllerProposal, SetScalingFactorControllerProposalProtoMsg, SetScalingFactorControllerProposalSDKType } from "../../../osmosis/gamm/v1beta1/gov";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalProtoMsg, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalProtoMsg, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/poolincentives/v1beta1/gov";
import { SetProtoRevEnabledProposal, SetProtoRevEnabledProposalProtoMsg, SetProtoRevEnabledProposalSDKType, SetProtoRevAdminAccountProposal, SetProtoRevAdminAccountProposalProtoMsg, SetProtoRevAdminAccountProposalSDKType } from "../../../osmosis/protorev/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalProtoMsg, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalProtoMsg, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalProtoMsg, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalProtoMsg, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOption {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption";
  value: Uint8Array;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionAmino {
  /** option defines the valid vote options, it must not contain duplicate vote options. */
  option?: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight?: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "cosmos-sdk/WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionSDKType {
  option: VoteOption;
  weight: string;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposal {
  $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
  /** title of the proposal. */
  title: string;
  /** description associated with the proposal. */
  description: string;
}
export interface TextProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal";
  value: Uint8Array;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalAmino {
  /** title of the proposal. */
  title?: string;
  /** description associated with the proposal. */
  description?: string;
}
export interface TextProposalAminoMsg {
  type: "cosmos-sdk/TextProposal";
  value: TextProposalAmino;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalSDKType {
  $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
  title: string;
  description: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor?: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "cosmos-sdk/Deposit";
  value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** content is the proposal's content. */
  content?: (TextProposal & ReplaceMigrationRecordsProposal & UpdateMigrationRecordsProposal & CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal & SetScalingFactorControllerProposal & ReplacePoolIncentivesProposal & UpdatePoolIncentivesProposal & SetProtoRevEnabledProposal & SetProtoRevAdminAccountProposal & SetSuperfluidAssetsProposal & RemoveSuperfluidAssetsProposal & UpdateUnpoolWhiteListProposal & UpdateFeeTokenProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & Any) | undefined;
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult: TallyResult;
  /** submit_time is the time of proposal submission. */
  submitTime: Timestamp;
  /** deposit_end_time is the end time for deposition. */
  depositEndTime: Timestamp;
  /** total_deposit is the total deposit on the proposal. */
  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  votingStartTime: Timestamp;
  /** voting_end_time is the end time of voting on a proposal. */
  votingEndTime: Timestamp;
}
export interface ProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Proposal";
  value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "content"> & {
  /** content is the proposal's content. */content?: TextProposalProtoMsg | ReplaceMigrationRecordsProposalProtoMsg | UpdateMigrationRecordsProposalProtoMsg | CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalProtoMsg | SetScalingFactorControllerProposalProtoMsg | ReplacePoolIncentivesProposalProtoMsg | UpdatePoolIncentivesProposalProtoMsg | SetProtoRevEnabledProposalProtoMsg | SetProtoRevAdminAccountProposalProtoMsg | SetSuperfluidAssetsProposalProtoMsg | RemoveSuperfluidAssetsProposalProtoMsg | UpdateUnpoolWhiteListProposalProtoMsg | UpdateFeeTokenProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | AnyProtoMsg | undefined;
};
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id?: string;
  /** content is the proposal's content. */
  content?: AnyAmino;
  /** status defines the proposal status. */
  status?: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result: TallyResultAmino;
  /** submit_time is the time of proposal submission. */
  submit_time: string;
  /** deposit_end_time is the end time for deposition. */
  deposit_end_time: string;
  /** total_deposit is the total deposit on the proposal. */
  total_deposit: CoinAmino[];
  /** voting_start_time is the starting time to vote on a proposal. */
  voting_start_time: string;
  /** voting_end_time is the end time of voting on a proposal. */
  voting_end_time: string;
}
export interface ProposalAminoMsg {
  type: "cosmos-sdk/Proposal";
  value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
  proposal_id: bigint;
  content?: TextProposalSDKType | ReplaceMigrationRecordsProposalSDKType | UpdateMigrationRecordsProposalSDKType | CreateConcentratedLiquidityPoolsAndLinktoCFMMProposalSDKType | SetScalingFactorControllerProposalSDKType | ReplacePoolIncentivesProposalSDKType | UpdatePoolIncentivesProposalSDKType | SetProtoRevEnabledProposalSDKType | SetProtoRevAdminAccountProposalSDKType | SetSuperfluidAssetsProposalSDKType | RemoveSuperfluidAssetsProposalSDKType | UpdateUnpoolWhiteListProposalSDKType | UpdateFeeTokenProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | AnySDKType | undefined;
  status: ProposalStatus;
  final_tally_result: TallyResultSDKType;
  submit_time: TimestampSDKType;
  deposit_end_time: TimestampSDKType;
  total_deposit: CoinSDKType[];
  voting_start_time: TimestampSDKType;
  voting_end_time: TimestampSDKType;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes is the number of yes votes on a proposal. */
  yes: string;
  /** abstain is the number of abstain votes on a proposal. */
  abstain: string;
  /** no is the number of no votes on a proposal. */
  no: string;
  /** no_with_veto is the number of no with veto votes on a proposal. */
  noWithVeto: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TallyResult";
  value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
  /** yes is the number of yes votes on a proposal. */
  yes?: string;
  /** abstain is the number of abstain votes on a proposal. */
  abstain?: string;
  /** no is the number of no votes on a proposal. */
  no?: string;
  /** no_with_veto is the number of no with veto votes on a proposal. */
  no_with_veto?: string;
}
export interface TallyResultAminoMsg {
  type: "cosmos-sdk/TallyResult";
  value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address of the proposal. */
  voter: string;
  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  /** @deprecated */
  option: VoteOption;
  /**
   * options is the weighted vote options.
   * 
   * Since: cosmos-sdk 0.43
   */
  options: WeightedVoteOption[];
}
export interface VoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address of the proposal. */
  voter?: string;
  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  /** @deprecated */
  option?: VoteOption;
  /**
   * options is the weighted vote options.
   * 
   * Since: cosmos-sdk 0.43
   */
  options: WeightedVoteOptionAmino[];
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/Vote";
  value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
  proposal_id: bigint;
  voter: string;
  /** @deprecated */
  option: VoteOption;
  options: WeightedVoteOptionSDKType[];
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod: Duration;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsAmino {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit?: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino;
}
export interface DepositParamsAminoMsg {
  type: "cosmos-sdk/DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
  min_deposit: CoinSDKType[];
  max_deposit_period: DurationSDKType;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Duration of the voting period. */
  votingPeriod: Duration;
}
export interface VotingParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams";
  value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsAmino {
  /** Duration of the voting period. */
  voting_period?: DurationAmino;
}
export interface VotingParamsAminoMsg {
  type: "cosmos-sdk/VotingParams";
  value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
  voting_period: DurationSDKType;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum: Uint8Array;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold: Uint8Array;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  vetoThreshold: Uint8Array;
}
export interface TallyParamsProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams";
  value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  quorum?: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
  threshold?: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   * vetoed. Default value: 1/3.
   */
  veto_threshold?: string;
}
export interface TallyParamsAminoMsg {
  type: "cosmos-sdk/TallyParams";
  value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
  quorum: Uint8Array;
  threshold: Uint8Array;
  veto_threshold: Uint8Array;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: ""
  };
}
export const WeightedVoteOption = {
  typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg {
    return {
      type: "cosmos-sdk/WeightedVoteOption",
      value: WeightedVoteOption.toAmino(message)
    };
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish()
    };
  }
};
function createBaseTextProposal(): TextProposal {
  return {
    $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    title: "",
    description: ""
  };
}
export const TextProposal = {
  typeUrl: "/cosmos.gov.v1beta1.TextProposal",
  encode(message: TextProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): TextProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<TextProposal>): TextProposal {
    const message = createBaseTextProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: TextProposalAmino): TextProposal {
    const message = createBaseTextProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: TextProposal): TextProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: TextProposalAminoMsg): TextProposal {
    return TextProposal.fromAmino(object.value);
  },
  toAminoMsg(message: TextProposal): TextProposalAminoMsg {
    return {
      type: "cosmos-sdk/TextProposal",
      value: TextProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: TextProposalProtoMsg): TextProposal {
    return TextProposal.decode(message.value);
  },
  toProto(message: TextProposal): Uint8Array {
    return TextProposal.encode(message).finish();
  },
  toProtoMsg(message: TextProposal): TextProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
      value: TextProposal.encode(message).finish()
    };
  }
};
function createBaseDeposit(): Deposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const Deposit = {
  typeUrl: "/cosmos.gov.v1beta1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Deposit {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  toAminoMsg(message: Deposit): DepositAminoMsg {
    return {
      type: "cosmos-sdk/Deposit",
      value: Deposit.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Deposit",
      value: Deposit.encode(message).finish()
    };
  }
};
function createBaseProposal(): Proposal {
  return {
    proposalId: BigInt(0),
    content: undefined,
    status: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    submitTime: Timestamp.fromPartial({}),
    depositEndTime: Timestamp.fromPartial({}),
    totalDeposit: [],
    votingStartTime: Timestamp.fromPartial({}),
    votingEndTime: Timestamp.fromPartial({})
  };
}
export const Proposal = {
  typeUrl: "/cosmos.gov.v1beta1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(message.depositEndTime, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(message.votingStartTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(message.votingEndTime, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Proposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : undefined,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : undefined,
      totalDeposit: Array.isArray(object?.totalDeposit) ? object.totalDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : undefined,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : undefined
    };
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? Timestamp.fromPartial(object.submitTime) : undefined;
    message.depositEndTime = object.depositEndTime !== undefined && object.depositEndTime !== null ? Timestamp.fromPartial(object.depositEndTime) : undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime !== undefined && object.votingStartTime !== null ? Timestamp.fromPartial(object.votingStartTime) : undefined;
    message.votingEndTime = object.votingEndTime !== undefined && object.votingEndTime !== null ? Timestamp.fromPartial(object.votingEndTime) : undefined;
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = Cosmos_govv1beta1Content_FromAmino(object.content);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = proposalStatusFromJSON(object.status);
    }
    if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = Timestamp.fromAmino(object.submit_time);
    }
    if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
      message.depositEndTime = Timestamp.fromAmino(object.deposit_end_time);
    }
    message.totalDeposit = object.total_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
      message.votingStartTime = Timestamp.fromAmino(object.voting_start_time);
    }
    if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
      message.votingEndTime = Timestamp.fromAmino(object.voting_end_time);
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino((message.content as Any)) : undefined;
    obj.status = message.status;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : TallyResult.fromPartial({});
    obj.submit_time = message.submitTime ? Timestamp.toAmino(message.submitTime) : Timestamp.fromPartial({});
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(message.depositEndTime) : Timestamp.fromPartial({});
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_deposit = [];
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(message.votingStartTime) : Timestamp.fromPartial({});
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(message.votingEndTime) : Timestamp.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
function createBaseTallyResult(): TallyResult {
  return {
    yes: "",
    abstain: "",
    no: "",
    noWithVeto: ""
  };
}
export const TallyResult = {
  typeUrl: "/cosmos.gov.v1beta1.TallyResult",
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yes !== "") {
      writer.uint32(10).string(message.yes);
    }
    if (message.abstain !== "") {
      writer.uint32(18).string(message.abstain);
    }
    if (message.no !== "") {
      writer.uint32(26).string(message.no);
    }
    if (message.noWithVeto !== "") {
      writer.uint32(34).string(message.noWithVeto);
    }
    return writer;
  },
  fromJSON(object: any): TallyResult {
    return {
      yes: isSet(object.yes) ? String(object.yes) : "",
      abstain: isSet(object.abstain) ? String(object.abstain) : "",
      no: isSet(object.no) ? String(object.no) : "",
      noWithVeto: isSet(object.noWithVeto) ? String(object.noWithVeto) : ""
    };
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yes = object.yes ?? "";
    message.abstain = object.abstain ?? "";
    message.no = object.no ?? "";
    message.noWithVeto = object.noWithVeto ?? "";
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes !== undefined && object.yes !== null) {
      message.yes = object.yes;
    }
    if (object.abstain !== undefined && object.abstain !== null) {
      message.abstain = object.abstain;
    }
    if (object.no !== undefined && object.no !== null) {
      message.no = object.no;
    }
    if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
      message.noWithVeto = object.no_with_veto;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes = message.yes;
    obj.abstain = message.abstain;
    obj.no = message.no;
    obj.no_with_veto = message.noWithVeto;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message: TallyResult): TallyResultAminoMsg {
    return {
      type: "cosmos-sdk/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    options: []
  };
}
export const Vote = {
  typeUrl: "/cosmos.gov.v1beta1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    }
    message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : "0";
    obj.voter = message.voter;
    obj.option = message.option;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: Duration.fromPartial({})
  };
}
export const DepositParams = {
  typeUrl: "/cosmos.gov.v1beta1.DepositParams",
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositParams {
    return {
      minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      maxDepositPeriod: isSet(object.maxDepositPeriod) ? Duration.fromJSON(object.maxDepositPeriod) : undefined
    };
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? Duration.fromPartial(object.maxDepositPeriod) : undefined;
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = [];
    }
    obj.max_deposit_period = message.maxDepositPeriod ? Duration.toAmino(message.maxDepositPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  toAminoMsg(message: DepositParams): DepositParamsAminoMsg {
    return {
      type: "cosmos-sdk/DepositParams",
      value: DepositParams.toAmino(message)
    };
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: Duration.fromPartial({})
  };
}
export const VotingParams = {
  typeUrl: "/cosmos.gov.v1beta1.VotingParams",
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VotingParams {
    return {
      votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : undefined
    };
  },
  fromPartial(object: Partial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Duration.fromPartial(object.votingPeriod) : undefined;
    return message;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    const message = createBaseVotingParams();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  toAminoMsg(message: VotingParams): VotingParamsAminoMsg {
    return {
      type: "cosmos-sdk/VotingParams",
      value: VotingParams.toAmino(message)
    };
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.VotingParams",
      value: VotingParams.encode(message).finish()
    };
  }
};
function createBaseTallyParams(): TallyParams {
  return {
    quorum: new Uint8Array(),
    threshold: new Uint8Array(),
    vetoThreshold: new Uint8Array()
  };
}
export const TallyParams = {
  typeUrl: "/cosmos.gov.v1beta1.TallyParams",
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum.length !== 0) {
      writer.uint32(10).bytes(message.quorum);
    }
    if (message.threshold.length !== 0) {
      writer.uint32(18).bytes(message.threshold);
    }
    if (message.vetoThreshold.length !== 0) {
      writer.uint32(26).bytes(message.vetoThreshold);
    }
    return writer;
  },
  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? bytesFromBase64(object.quorum) : new Uint8Array(),
      threshold: isSet(object.threshold) ? bytesFromBase64(object.threshold) : new Uint8Array(),
      vetoThreshold: isSet(object.vetoThreshold) ? bytesFromBase64(object.vetoThreshold) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? new Uint8Array();
    message.threshold = object.threshold ?? new Uint8Array();
    message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    const message = createBaseTallyParams();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = bytesFromBase64(object.quorum);
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = bytesFromBase64(object.threshold);
    }
    if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
      message.vetoThreshold = bytesFromBase64(object.veto_threshold);
    }
    return message;
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum ? base64FromBytes(message.quorum) : undefined;
    obj.threshold = message.threshold ? base64FromBytes(message.threshold) : undefined;
    obj.veto_threshold = message.vetoThreshold ? base64FromBytes(message.vetoThreshold) : undefined;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  toAminoMsg(message: TallyParams): TallyParamsAminoMsg {
    return {
      type: "cosmos-sdk/TallyParams",
      value: TallyParams.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.TallyParams",
      value: TallyParams.encode(message).finish()
    };
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): ReplaceMigrationRecordsProposal | UpdateMigrationRecordsProposal | CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal | SetScalingFactorControllerProposal | ReplacePoolIncentivesProposal | UpdatePoolIncentivesProposal | SetProtoRevEnabledProposal | SetProtoRevAdminAccountProposal | SetSuperfluidAssetsProposal | RemoveSuperfluidAssetsProposal | UpdateUnpoolWhiteListProposal | UpdateFeeTokenProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal":
      return ReplaceMigrationRecordsProposal.decode(data.value);
    case "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal":
      return UpdateMigrationRecordsProposal.decode(data.value);
    case "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal":
      return CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.decode(data.value);
    case "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal":
      return SetScalingFactorControllerProposal.decode(data.value);
    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return ReplacePoolIncentivesProposal.decode(data.value);
    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return UpdatePoolIncentivesProposal.decode(data.value);
    case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
      return SetProtoRevEnabledProposal.decode(data.value);
    case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
      return SetProtoRevAdminAccountProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return SetSuperfluidAssetsProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return RemoveSuperfluidAssetsProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return UpdateUnpoolWhiteListProposal.decode(data.value);
    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return UpdateFeeTokenProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return CommunityPoolSpendProposal.decode(data.value);
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return CommunityPoolSpendProposalWithDeposit.decode(data.value);
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return ParameterChangeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return SoftwareUpgradeProposal.decode(data.value);
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return CancelSoftwareUpgradeProposal.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "osmosis/ReplaceMigrationRecordsProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
        value: ReplaceMigrationRecordsProposal.encode(ReplaceMigrationRecordsProposal.fromPartial(ReplaceMigrationRecordsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/UpdateMigrationRecordsProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
        value: UpdateMigrationRecordsProposal.encode(UpdateMigrationRecordsProposal.fromPartial(UpdateMigrationRecordsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
        value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.encode(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.fromPartial(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/SetScalingFactorControllerProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal",
        value: SetScalingFactorControllerProposal.encode(SetScalingFactorControllerProposal.fromPartial(SetScalingFactorControllerProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/ReplacePoolIncentivesProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
        value: ReplacePoolIncentivesProposal.encode(ReplacePoolIncentivesProposal.fromPartial(ReplacePoolIncentivesProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/UpdatePoolIncentivesProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
        value: UpdatePoolIncentivesProposal.encode(UpdatePoolIncentivesProposal.fromPartial(UpdatePoolIncentivesProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/SetProtoRevEnabledProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
        value: SetProtoRevEnabledProposal.encode(SetProtoRevEnabledProposal.fromPartial(SetProtoRevEnabledProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/SetProtoRevAdminAccountProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
        value: SetProtoRevAdminAccountProposal.encode(SetProtoRevAdminAccountProposal.fromPartial(SetProtoRevAdminAccountProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/set-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        value: SetSuperfluidAssetsProposal.encode(SetSuperfluidAssetsProposal.fromPartial(SetSuperfluidAssetsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/del-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        value: RemoveSuperfluidAssetsProposal.encode(RemoveSuperfluidAssetsProposal.fromPartial(RemoveSuperfluidAssetsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/update-unpool-whitelist":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        value: UpdateUnpoolWhiteListProposal.encode(UpdateUnpoolWhiteListProposal.fromPartial(UpdateUnpoolWhiteListProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/UpdateFeeTokenProposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
        value: UpdateFeeTokenProposal.encode(UpdateFeeTokenProposal.fromPartial(UpdateFeeTokenProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(CommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
      return Any.fromPartial({
        typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.encode(CommunityPoolSpendProposalWithDeposit.fromPartial(CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ParameterChangeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(ParameterChangeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/SoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(SoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/CancelSoftwareUpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal":
      return {
        type: "osmosis/ReplaceMigrationRecordsProposal",
        value: ReplaceMigrationRecordsProposal.toAmino(ReplaceMigrationRecordsProposal.decode(content.value, undefined))
      };
    case "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal":
      return {
        type: "osmosis/UpdateMigrationRecordsProposal",
        value: UpdateMigrationRecordsProposal.toAmino(UpdateMigrationRecordsProposal.decode(content.value, undefined))
      };
    case "/osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal":
      return {
        type: "osmosis/CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal",
        value: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.toAmino(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.decode(content.value, undefined))
      };
    case "/osmosis.gamm.v1beta1.SetScalingFactorControllerProposal":
      return {
        type: "osmosis/SetScalingFactorControllerProposal",
        value: SetScalingFactorControllerProposal.toAmino(SetScalingFactorControllerProposal.decode(content.value, undefined))
      };
    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return {
        type: "osmosis/ReplacePoolIncentivesProposal",
        value: ReplacePoolIncentivesProposal.toAmino(ReplacePoolIncentivesProposal.decode(content.value, undefined))
      };
    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return {
        type: "osmosis/UpdatePoolIncentivesProposal",
        value: UpdatePoolIncentivesProposal.toAmino(UpdatePoolIncentivesProposal.decode(content.value, undefined))
      };
    case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
      return {
        type: "osmosis/SetProtoRevEnabledProposal",
        value: SetProtoRevEnabledProposal.toAmino(SetProtoRevEnabledProposal.decode(content.value, undefined))
      };
    case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
      return {
        type: "osmosis/SetProtoRevAdminAccountProposal",
        value: SetProtoRevAdminAccountProposal.toAmino(SetProtoRevAdminAccountProposal.decode(content.value, undefined))
      };
    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return {
        type: "osmosis/set-superfluid-assets-proposal",
        value: SetSuperfluidAssetsProposal.toAmino(SetSuperfluidAssetsProposal.decode(content.value, undefined))
      };
    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return {
        type: "osmosis/del-superfluid-assets-proposal",
        value: RemoveSuperfluidAssetsProposal.toAmino(RemoveSuperfluidAssetsProposal.decode(content.value, undefined))
      };
    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return {
        type: "osmosis/update-unpool-whitelist",
        value: UpdateUnpoolWhiteListProposal.toAmino(UpdateUnpoolWhiteListProposal.decode(content.value, undefined))
      };
    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return {
        type: "osmosis/UpdateFeeTokenProposal",
        value: UpdateFeeTokenProposal.toAmino(UpdateFeeTokenProposal.decode(content.value, undefined))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value, undefined))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value, undefined))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value, undefined))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};