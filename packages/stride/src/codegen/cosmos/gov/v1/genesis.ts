import { Deposit, DepositSDKType, Vote, VoteSDKType, Proposal, ProposalSDKType, DepositParams, DepositParamsSDKType, VotingParams, VotingParamsSDKType, TallyParams, TallyParamsSDKType, Params, ParamsSDKType } from "./gov";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  startingProposalId: Long;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */
  /** @deprecated */
  depositParams?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */
  /** @deprecated */
  votingParams?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */
  /** @deprecated */
  tallyParams?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: Params;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
  starting_proposal_id: Long;
  deposits: DepositSDKType[];
  votes: VoteSDKType[];
  proposals: ProposalSDKType[];
  /** @deprecated */
  deposit_params?: DepositParamsSDKType;
  /** @deprecated */
  voting_params?: VotingParamsSDKType;
  /** @deprecated */
  tally_params?: TallyParamsSDKType;
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: Long.UZERO,
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: undefined,
    votingParams: undefined,
    tallyParams: undefined,
    params: undefined
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startingProposalId.isZero()) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      startingProposalId: isSet(object.startingProposalId) ? Long.fromValue(object.startingProposalId) : Long.UZERO,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? Long.fromValue(object.startingProposalId) : Long.UZERO;
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};