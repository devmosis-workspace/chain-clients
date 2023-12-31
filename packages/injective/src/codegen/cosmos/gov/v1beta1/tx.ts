import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal, TextProposalProtoMsg, TextProposalSDKType, voteOptionFromJSON } from "./gov";
import { SpotMarketParamUpdateProposal, SpotMarketParamUpdateProposalProtoMsg, SpotMarketParamUpdateProposalSDKType, BatchExchangeModificationProposal, BatchExchangeModificationProposalProtoMsg, BatchExchangeModificationProposalSDKType, SpotMarketLaunchProposal, SpotMarketLaunchProposalProtoMsg, SpotMarketLaunchProposalSDKType, PerpetualMarketLaunchProposal, PerpetualMarketLaunchProposalProtoMsg, PerpetualMarketLaunchProposalSDKType, BinaryOptionsMarketLaunchProposal, BinaryOptionsMarketLaunchProposalProtoMsg, BinaryOptionsMarketLaunchProposalSDKType, ExpiryFuturesMarketLaunchProposal, ExpiryFuturesMarketLaunchProposalProtoMsg, ExpiryFuturesMarketLaunchProposalSDKType, DerivativeMarketParamUpdateProposal, DerivativeMarketParamUpdateProposalProtoMsg, DerivativeMarketParamUpdateProposalSDKType, MarketForcedSettlementProposal, MarketForcedSettlementProposalProtoMsg, MarketForcedSettlementProposalSDKType, UpdateDenomDecimalsProposal, UpdateDenomDecimalsProposalProtoMsg, UpdateDenomDecimalsProposalSDKType, BinaryOptionsMarketParamUpdateProposal, BinaryOptionsMarketParamUpdateProposalProtoMsg, BinaryOptionsMarketParamUpdateProposalSDKType, TradingRewardCampaignLaunchProposal, TradingRewardCampaignLaunchProposalProtoMsg, TradingRewardCampaignLaunchProposalSDKType, TradingRewardCampaignUpdateProposal, TradingRewardCampaignUpdateProposalProtoMsg, TradingRewardCampaignUpdateProposalSDKType, TradingRewardPendingPointsUpdateProposal, TradingRewardPendingPointsUpdateProposalProtoMsg, TradingRewardPendingPointsUpdateProposalSDKType, FeeDiscountProposal, FeeDiscountProposalProtoMsg, FeeDiscountProposalSDKType, BatchCommunityPoolSpendProposal, BatchCommunityPoolSpendProposalProtoMsg, BatchCommunityPoolSpendProposalSDKType, AtomicMarketOrderFeeMultiplierScheduleProposal, AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg, AtomicMarketOrderFeeMultiplierScheduleProposalSDKType } from "../../../injective/exchange/v1beta1/tx";
import { SetConfigProposal, SetConfigProposalProtoMsg, SetConfigProposalSDKType, SetBatchConfigProposal, SetBatchConfigProposalProtoMsg, SetBatchConfigProposalSDKType } from "../../../injective/ocr/v1beta1/ocr";
import { GrantBandOraclePrivilegeProposal, GrantBandOraclePrivilegeProposalProtoMsg, GrantBandOraclePrivilegeProposalSDKType, RevokeBandOraclePrivilegeProposal, RevokeBandOraclePrivilegeProposalProtoMsg, RevokeBandOraclePrivilegeProposalSDKType, GrantPriceFeederPrivilegeProposal, GrantPriceFeederPrivilegeProposalProtoMsg, GrantPriceFeederPrivilegeProposalSDKType, GrantProviderPrivilegeProposal, GrantProviderPrivilegeProposalProtoMsg, GrantProviderPrivilegeProposalSDKType, RevokeProviderPrivilegeProposal, RevokeProviderPrivilegeProposalProtoMsg, RevokeProviderPrivilegeProposalSDKType, RevokePriceFeederPrivilegeProposal, RevokePriceFeederPrivilegeProposalProtoMsg, RevokePriceFeederPrivilegeProposalSDKType, AuthorizeBandOracleRequestProposal, AuthorizeBandOracleRequestProposalProtoMsg, AuthorizeBandOracleRequestProposalSDKType, UpdateBandOracleRequestProposal, UpdateBandOracleRequestProposalProtoMsg, UpdateBandOracleRequestProposalSDKType, EnableBandIBCProposal, EnableBandIBCProposalProtoMsg, EnableBandIBCProposalSDKType } from "../../../injective/oracle/v1beta1/proposal";
import { BlacklistEthereumAddressesProposal, BlacklistEthereumAddressesProposalProtoMsg, BlacklistEthereumAddressesProposalSDKType, RevokeEthereumBlacklistProposal, RevokeEthereumBlacklistProposalProtoMsg, RevokeEthereumBlacklistProposalSDKType } from "../../../injective/peggy/v1/proposal";
import { ContractRegistrationRequestProposal, ContractRegistrationRequestProposalProtoMsg, ContractRegistrationRequestProposalSDKType, BatchContractRegistrationRequestProposal, BatchContractRegistrationRequestProposalProtoMsg, BatchContractRegistrationRequestProposalSDKType, BatchContractDeregistrationProposal, BatchContractDeregistrationProposalProtoMsg, BatchContractDeregistrationProposalSDKType, ContractRegistrationRequest, ContractRegistrationRequestProtoMsg, ContractRegistrationRequestSDKType, BatchStoreCodeProposal, BatchStoreCodeProposalProtoMsg, BatchStoreCodeProposalSDKType } from "../../../injective/wasmx/v1/proposal";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { ParameterChangeProposal, ParameterChangeProposalProtoMsg, ParameterChangeProposalSDKType } from "../../params/v1beta1/params";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal, StoreCodeProposalProtoMsg, StoreCodeProposalSDKType, InstantiateContractProposal, InstantiateContractProposalProtoMsg, InstantiateContractProposalSDKType, InstantiateContract2Proposal, InstantiateContract2ProposalProtoMsg, InstantiateContract2ProposalSDKType, MigrateContractProposal, MigrateContractProposalProtoMsg, MigrateContractProposalSDKType, SudoContractProposal, SudoContractProposalProtoMsg, SudoContractProposalSDKType, ExecuteContractProposal, ExecuteContractProposalProtoMsg, ExecuteContractProposalSDKType, UpdateAdminProposal, UpdateAdminProposalProtoMsg, UpdateAdminProposalSDKType, ClearAdminProposal, ClearAdminProposalProtoMsg, ClearAdminProposalSDKType, PinCodesProposal, PinCodesProposalProtoMsg, PinCodesProposalSDKType, UnpinCodesProposal, UnpinCodesProposalProtoMsg, UnpinCodesProposalSDKType, UpdateInstantiateConfigProposal, UpdateInstantiateConfigProposalProtoMsg, UpdateInstantiateConfigProposalSDKType, StoreAndInstantiateContractProposal, StoreAndInstantiateContractProposalProtoMsg, StoreAndInstantiateContractProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  /** content is the proposal's content. */
  content: (SpotMarketParamUpdateProposal & BatchExchangeModificationProposal & SpotMarketLaunchProposal & PerpetualMarketLaunchProposal & BinaryOptionsMarketLaunchProposal & ExpiryFuturesMarketLaunchProposal & DerivativeMarketParamUpdateProposal & MarketForcedSettlementProposal & UpdateDenomDecimalsProposal & BinaryOptionsMarketParamUpdateProposal & TradingRewardCampaignLaunchProposal & TradingRewardCampaignUpdateProposal & TradingRewardPendingPointsUpdateProposal & FeeDiscountProposal & BatchCommunityPoolSpendProposal & AtomicMarketOrderFeeMultiplierScheduleProposal & SetConfigProposal & SetBatchConfigProposal & GrantBandOraclePrivilegeProposal & RevokeBandOraclePrivilegeProposal & GrantPriceFeederPrivilegeProposal & GrantProviderPrivilegeProposal & RevokeProviderPrivilegeProposal & RevokePriceFeederPrivilegeProposal & AuthorizeBandOracleRequestProposal & UpdateBandOracleRequestProposal & EnableBandIBCProposal & BlacklistEthereumAddressesProposal & RevokeEthereumBlacklistProposal & ContractRegistrationRequestProposal & BatchContractRegistrationRequestProposal & BatchContractDeregistrationProposal & ContractRegistrationRequest & BatchStoreCodeProposal & CommunityPoolSpendProposal & CommunityPoolSpendProposalWithDeposit & TextProposal & ParameterChangeProposal & SoftwareUpgradeProposal & CancelSoftwareUpgradeProposal & StoreCodeProposal & InstantiateContractProposal & InstantiateContract2Proposal & MigrateContractProposal & SudoContractProposal & ExecuteContractProposal & UpdateAdminProposal & ClearAdminProposal & PinCodesProposal & UnpinCodesProposal & UpdateInstantiateConfigProposal & StoreAndInstantiateContractProposal & Any) | undefined;
  /** initial_deposit is the deposit value that must be paid at proposal submission. */
  initialDeposit: Coin[];
  /** proposer is the account address of the proposer. */
  proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
  /** content is the proposal's content. */content?: SpotMarketParamUpdateProposalProtoMsg | BatchExchangeModificationProposalProtoMsg | SpotMarketLaunchProposalProtoMsg | PerpetualMarketLaunchProposalProtoMsg | BinaryOptionsMarketLaunchProposalProtoMsg | ExpiryFuturesMarketLaunchProposalProtoMsg | DerivativeMarketParamUpdateProposalProtoMsg | MarketForcedSettlementProposalProtoMsg | UpdateDenomDecimalsProposalProtoMsg | BinaryOptionsMarketParamUpdateProposalProtoMsg | TradingRewardCampaignLaunchProposalProtoMsg | TradingRewardCampaignUpdateProposalProtoMsg | TradingRewardPendingPointsUpdateProposalProtoMsg | FeeDiscountProposalProtoMsg | BatchCommunityPoolSpendProposalProtoMsg | AtomicMarketOrderFeeMultiplierScheduleProposalProtoMsg | SetConfigProposalProtoMsg | SetBatchConfigProposalProtoMsg | GrantBandOraclePrivilegeProposalProtoMsg | RevokeBandOraclePrivilegeProposalProtoMsg | GrantPriceFeederPrivilegeProposalProtoMsg | GrantProviderPrivilegeProposalProtoMsg | RevokeProviderPrivilegeProposalProtoMsg | RevokePriceFeederPrivilegeProposalProtoMsg | AuthorizeBandOracleRequestProposalProtoMsg | UpdateBandOracleRequestProposalProtoMsg | EnableBandIBCProposalProtoMsg | BlacklistEthereumAddressesProposalProtoMsg | RevokeEthereumBlacklistProposalProtoMsg | ContractRegistrationRequestProposalProtoMsg | BatchContractRegistrationRequestProposalProtoMsg | BatchContractDeregistrationProposalProtoMsg | ContractRegistrationRequestProtoMsg | BatchStoreCodeProposalProtoMsg | CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | ParameterChangeProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | StoreCodeProposalProtoMsg | InstantiateContractProposalProtoMsg | InstantiateContract2ProposalProtoMsg | MigrateContractProposalProtoMsg | SudoContractProposalProtoMsg | ExecuteContractProposalProtoMsg | UpdateAdminProposalProtoMsg | ClearAdminProposalProtoMsg | PinCodesProposalProtoMsg | UnpinCodesProposalProtoMsg | UpdateInstantiateConfigProposalProtoMsg | StoreAndInstantiateContractProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
  /** content is the proposal's content. */
  content?: AnyAmino;
  /** initial_deposit is the deposit value that must be paid at proposal submission. */
  initial_deposit: CoinAmino[];
  /** proposer is the account address of the proposer. */
  proposer: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
  content: SpotMarketParamUpdateProposalSDKType | BatchExchangeModificationProposalSDKType | SpotMarketLaunchProposalSDKType | PerpetualMarketLaunchProposalSDKType | BinaryOptionsMarketLaunchProposalSDKType | ExpiryFuturesMarketLaunchProposalSDKType | DerivativeMarketParamUpdateProposalSDKType | MarketForcedSettlementProposalSDKType | UpdateDenomDecimalsProposalSDKType | BinaryOptionsMarketParamUpdateProposalSDKType | TradingRewardCampaignLaunchProposalSDKType | TradingRewardCampaignUpdateProposalSDKType | TradingRewardPendingPointsUpdateProposalSDKType | FeeDiscountProposalSDKType | BatchCommunityPoolSpendProposalSDKType | AtomicMarketOrderFeeMultiplierScheduleProposalSDKType | SetConfigProposalSDKType | SetBatchConfigProposalSDKType | GrantBandOraclePrivilegeProposalSDKType | RevokeBandOraclePrivilegeProposalSDKType | GrantPriceFeederPrivilegeProposalSDKType | GrantProviderPrivilegeProposalSDKType | RevokeProviderPrivilegeProposalSDKType | RevokePriceFeederPrivilegeProposalSDKType | AuthorizeBandOracleRequestProposalSDKType | UpdateBandOracleRequestProposalSDKType | EnableBandIBCProposalSDKType | BlacklistEthereumAddressesProposalSDKType | RevokeEthereumBlacklistProposalSDKType | ContractRegistrationRequestProposalSDKType | BatchContractRegistrationRequestProposalSDKType | BatchContractDeregistrationProposalSDKType | ContractRegistrationRequestSDKType | BatchStoreCodeProposalSDKType | CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | ParameterChangeProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | StoreCodeProposalSDKType | InstantiateContractProposalSDKType | InstantiateContract2ProposalSDKType | MigrateContractProposalSDKType | SudoContractProposalSDKType | ExecuteContractProposalSDKType | UpdateAdminProposalSDKType | ClearAdminProposalSDKType | PinCodesProposalSDKType | UnpinCodesProposalSDKType | UpdateInstantiateConfigProposalSDKType | StoreAndInstantiateContractProposalSDKType | AnySDKType | undefined;
  initial_deposit: CoinSDKType[];
  proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: bigint;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** option defines the vote option. */
  option: VoteOption;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** option defines the vote option. */
  option: VoteOption;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
  proposal_id: bigint;
  voter: string;
  option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
  value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
  proposal_id: bigint;
  voter: string;
  options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
  value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
  proposal_id: bigint;
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "cosmos-sdk/MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    content: Any.fromPartial({}),
    initialDeposit: [],
    proposer: ""
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      content: object?.content ? Cosmos_govv1beta1Content_FromAmino(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      proposer: object.proposer
    };
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.content = message.content ? Cosmos_govv1beta1Content_ToAmino((message.content as Any)) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }
    obj.proposer = message.proposer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
    };
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
    };
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: []
  };
}
export const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  encode(message: MsgVoteWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgVoteWeighted {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message: MsgVoteWeighted): Uint8Array {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
export const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgVoteWeightedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    return {};
  },
  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message: MsgVoteWeightedResponse): Uint8Array {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: []
  };
}
export const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromJSON(object: any): MsgDeposit {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      proposalId: BigInt(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
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
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    return {};
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
export const Cosmos_govv1beta1Content_InterfaceDecoder = (input: BinaryReader | Uint8Array): SpotMarketParamUpdateProposal | BatchExchangeModificationProposal | SpotMarketLaunchProposal | PerpetualMarketLaunchProposal | BinaryOptionsMarketLaunchProposal | ExpiryFuturesMarketLaunchProposal | DerivativeMarketParamUpdateProposal | MarketForcedSettlementProposal | UpdateDenomDecimalsProposal | BinaryOptionsMarketParamUpdateProposal | TradingRewardCampaignLaunchProposal | TradingRewardCampaignUpdateProposal | TradingRewardPendingPointsUpdateProposal | FeeDiscountProposal | BatchCommunityPoolSpendProposal | AtomicMarketOrderFeeMultiplierScheduleProposal | SetConfigProposal | SetBatchConfigProposal | GrantBandOraclePrivilegeProposal | RevokeBandOraclePrivilegeProposal | GrantPriceFeederPrivilegeProposal | GrantProviderPrivilegeProposal | RevokeProviderPrivilegeProposal | RevokePriceFeederPrivilegeProposal | AuthorizeBandOracleRequestProposal | UpdateBandOracleRequestProposal | EnableBandIBCProposal | BlacklistEthereumAddressesProposal | RevokeEthereumBlacklistProposal | ContractRegistrationRequestProposal | BatchContractRegistrationRequestProposal | BatchContractDeregistrationProposal | ContractRegistrationRequest | BatchStoreCodeProposal | CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | ParameterChangeProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | StoreCodeProposal | InstantiateContractProposal | InstantiateContract2Proposal | MigrateContractProposal | SudoContractProposal | ExecuteContractProposal | UpdateAdminProposal | ClearAdminProposal | PinCodesProposal | UnpinCodesProposal | UpdateInstantiateConfigProposal | StoreAndInstantiateContractProposal | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal":
      return SpotMarketParamUpdateProposal.decode(data.value);
    case "/injective.exchange.v1beta1.BatchExchangeModificationProposal":
      return BatchExchangeModificationProposal.decode(data.value);
    case "/injective.exchange.v1beta1.SpotMarketLaunchProposal":
      return SpotMarketLaunchProposal.decode(data.value);
    case "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal":
      return PerpetualMarketLaunchProposal.decode(data.value);
    case "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal":
      return BinaryOptionsMarketLaunchProposal.decode(data.value);
    case "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal":
      return ExpiryFuturesMarketLaunchProposal.decode(data.value);
    case "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal":
      return DerivativeMarketParamUpdateProposal.decode(data.value);
    case "/injective.exchange.v1beta1.MarketForcedSettlementProposal":
      return MarketForcedSettlementProposal.decode(data.value);
    case "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal":
      return UpdateDenomDecimalsProposal.decode(data.value);
    case "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal":
      return BinaryOptionsMarketParamUpdateProposal.decode(data.value);
    case "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal":
      return TradingRewardCampaignLaunchProposal.decode(data.value);
    case "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal":
      return TradingRewardCampaignUpdateProposal.decode(data.value);
    case "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal":
      return TradingRewardPendingPointsUpdateProposal.decode(data.value);
    case "/injective.exchange.v1beta1.FeeDiscountProposal":
      return FeeDiscountProposal.decode(data.value);
    case "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal":
      return BatchCommunityPoolSpendProposal.decode(data.value);
    case "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal":
      return AtomicMarketOrderFeeMultiplierScheduleProposal.decode(data.value);
    case "/injective.ocr.v1beta1.SetConfigProposal":
      return SetConfigProposal.decode(data.value);
    case "/injective.ocr.v1beta1.SetBatchConfigProposal":
      return SetBatchConfigProposal.decode(data.value);
    case "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal":
      return GrantBandOraclePrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal":
      return RevokeBandOraclePrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal":
      return GrantPriceFeederPrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal":
      return GrantProviderPrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal":
      return RevokeProviderPrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal":
      return RevokePriceFeederPrivilegeProposal.decode(data.value);
    case "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal":
      return AuthorizeBandOracleRequestProposal.decode(data.value);
    case "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal":
      return UpdateBandOracleRequestProposal.decode(data.value);
    case "/injective.oracle.v1beta1.EnableBandIBCProposal":
      return EnableBandIBCProposal.decode(data.value);
    case "/injective.peggy.v1.BlacklistEthereumAddressesProposal":
      return BlacklistEthereumAddressesProposal.decode(data.value);
    case "/injective.peggy.v1.RevokeEthereumBlacklistProposal":
      return RevokeEthereumBlacklistProposal.decode(data.value);
    case "/injective.wasmx.v1.ContractRegistrationRequestProposal":
      return ContractRegistrationRequestProposal.decode(data.value);
    case "/injective.wasmx.v1.BatchContractRegistrationRequestProposal":
      return BatchContractRegistrationRequestProposal.decode(data.value);
    case "/injective.wasmx.v1.BatchContractDeregistrationProposal":
      return BatchContractDeregistrationProposal.decode(data.value);
    case "/injective.wasmx.v1.ContractRegistrationRequest":
      return ContractRegistrationRequest.decode(data.value);
    case "/injective.wasmx.v1.BatchStoreCodeProposal":
      return BatchStoreCodeProposal.decode(data.value);
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
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return StoreCodeProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return InstantiateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return InstantiateContract2Proposal.decode(data.value);
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return MigrateContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return SudoContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return ExecuteContractProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return UpdateAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return ClearAdminProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return PinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return UnpinCodesProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return UpdateInstantiateConfigProposal.decode(data.value);
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return StoreAndInstantiateContractProposal.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_govv1beta1Content_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
        value: SpotMarketParamUpdateProposal.encode(SpotMarketParamUpdateProposal.fromPartial(SpotMarketParamUpdateProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchExchangeModificationProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
        value: BatchExchangeModificationProposal.encode(BatchExchangeModificationProposal.fromPartial(BatchExchangeModificationProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.SpotMarketLaunchProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
        value: SpotMarketLaunchProposal.encode(SpotMarketLaunchProposal.fromPartial(SpotMarketLaunchProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
        value: PerpetualMarketLaunchProposal.encode(PerpetualMarketLaunchProposal.fromPartial(PerpetualMarketLaunchProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
        value: BinaryOptionsMarketLaunchProposal.encode(BinaryOptionsMarketLaunchProposal.fromPartial(BinaryOptionsMarketLaunchProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
        value: ExpiryFuturesMarketLaunchProposal.encode(ExpiryFuturesMarketLaunchProposal.fromPartial(ExpiryFuturesMarketLaunchProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
        value: DerivativeMarketParamUpdateProposal.encode(DerivativeMarketParamUpdateProposal.fromPartial(DerivativeMarketParamUpdateProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.MarketForcedSettlementProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
        value: MarketForcedSettlementProposal.encode(MarketForcedSettlementProposal.fromPartial(MarketForcedSettlementProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
        value: UpdateDenomDecimalsProposal.encode(UpdateDenomDecimalsProposal.fromPartial(UpdateDenomDecimalsProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
        value: BinaryOptionsMarketParamUpdateProposal.encode(BinaryOptionsMarketParamUpdateProposal.fromPartial(BinaryOptionsMarketParamUpdateProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
        value: TradingRewardCampaignLaunchProposal.encode(TradingRewardCampaignLaunchProposal.fromPartial(TradingRewardCampaignLaunchProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
        value: TradingRewardCampaignUpdateProposal.encode(TradingRewardCampaignUpdateProposal.fromPartial(TradingRewardCampaignUpdateProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
        value: TradingRewardPendingPointsUpdateProposal.encode(TradingRewardPendingPointsUpdateProposal.fromPartial(TradingRewardPendingPointsUpdateProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.FeeDiscountProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.FeeDiscountProposal",
        value: FeeDiscountProposal.encode(FeeDiscountProposal.fromPartial(FeeDiscountProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
        value: BatchCommunityPoolSpendProposal.encode(BatchCommunityPoolSpendProposal.fromPartial(BatchCommunityPoolSpendProposal.fromAmino(content.value))).finish()
      });
    case "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal":
      return Any.fromPartial({
        typeUrl: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
        value: AtomicMarketOrderFeeMultiplierScheduleProposal.encode(AtomicMarketOrderFeeMultiplierScheduleProposal.fromPartial(AtomicMarketOrderFeeMultiplierScheduleProposal.fromAmino(content.value))).finish()
      });
    case "/injective.ocr.v1beta1.SetConfigProposal":
      return Any.fromPartial({
        typeUrl: "/injective.ocr.v1beta1.SetConfigProposal",
        value: SetConfigProposal.encode(SetConfigProposal.fromPartial(SetConfigProposal.fromAmino(content.value))).finish()
      });
    case "/injective.ocr.v1beta1.SetBatchConfigProposal":
      return Any.fromPartial({
        typeUrl: "/injective.ocr.v1beta1.SetBatchConfigProposal",
        value: SetBatchConfigProposal.encode(SetBatchConfigProposal.fromPartial(SetBatchConfigProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
        value: GrantBandOraclePrivilegeProposal.encode(GrantBandOraclePrivilegeProposal.fromPartial(GrantBandOraclePrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
        value: RevokeBandOraclePrivilegeProposal.encode(RevokeBandOraclePrivilegeProposal.fromPartial(RevokeBandOraclePrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
        value: GrantPriceFeederPrivilegeProposal.encode(GrantPriceFeederPrivilegeProposal.fromPartial(GrantPriceFeederPrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
        value: GrantProviderPrivilegeProposal.encode(GrantProviderPrivilegeProposal.fromPartial(GrantProviderPrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
        value: RevokeProviderPrivilegeProposal.encode(RevokeProviderPrivilegeProposal.fromPartial(RevokeProviderPrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
        value: RevokePriceFeederPrivilegeProposal.encode(RevokePriceFeederPrivilegeProposal.fromPartial(RevokePriceFeederPrivilegeProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
        value: AuthorizeBandOracleRequestProposal.encode(AuthorizeBandOracleRequestProposal.fromPartial(AuthorizeBandOracleRequestProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
        value: UpdateBandOracleRequestProposal.encode(UpdateBandOracleRequestProposal.fromPartial(UpdateBandOracleRequestProposal.fromAmino(content.value))).finish()
      });
    case "/injective.oracle.v1beta1.EnableBandIBCProposal":
      return Any.fromPartial({
        typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
        value: EnableBandIBCProposal.encode(EnableBandIBCProposal.fromPartial(EnableBandIBCProposal.fromAmino(content.value))).finish()
      });
    case "/injective.peggy.v1.BlacklistEthereumAddressesProposal":
      return Any.fromPartial({
        typeUrl: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
        value: BlacklistEthereumAddressesProposal.encode(BlacklistEthereumAddressesProposal.fromPartial(BlacklistEthereumAddressesProposal.fromAmino(content.value))).finish()
      });
    case "/injective.peggy.v1.RevokeEthereumBlacklistProposal":
      return Any.fromPartial({
        typeUrl: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
        value: RevokeEthereumBlacklistProposal.encode(RevokeEthereumBlacklistProposal.fromPartial(RevokeEthereumBlacklistProposal.fromAmino(content.value))).finish()
      });
    case "/injective.wasmx.v1.ContractRegistrationRequestProposal":
      return Any.fromPartial({
        typeUrl: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
        value: ContractRegistrationRequestProposal.encode(ContractRegistrationRequestProposal.fromPartial(ContractRegistrationRequestProposal.fromAmino(content.value))).finish()
      });
    case "/injective.wasmx.v1.BatchContractRegistrationRequestProposal":
      return Any.fromPartial({
        typeUrl: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
        value: BatchContractRegistrationRequestProposal.encode(BatchContractRegistrationRequestProposal.fromPartial(BatchContractRegistrationRequestProposal.fromAmino(content.value))).finish()
      });
    case "/injective.wasmx.v1.BatchContractDeregistrationProposal":
      return Any.fromPartial({
        typeUrl: "/injective.wasmx.v1.BatchContractDeregistrationProposal",
        value: BatchContractDeregistrationProposal.encode(BatchContractDeregistrationProposal.fromPartial(BatchContractDeregistrationProposal.fromAmino(content.value))).finish()
      });
    case "/injective.wasmx.v1.ContractRegistrationRequest":
      return Any.fromPartial({
        typeUrl: "/injective.wasmx.v1.ContractRegistrationRequest",
        value: ContractRegistrationRequest.encode(ContractRegistrationRequest.fromPartial(ContractRegistrationRequest.fromAmino(content.value))).finish()
      });
    case "/injective.wasmx.v1.BatchStoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/injective.wasmx.v1.BatchStoreCodeProposal",
        value: BatchStoreCodeProposal.encode(BatchStoreCodeProposal.fromPartial(BatchStoreCodeProposal.fromAmino(content.value))).finish()
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
    case "wasm/StoreCodeProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
        value: StoreCodeProposal.encode(StoreCodeProposal.fromPartial(StoreCodeProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
        value: InstantiateContractProposal.encode(InstantiateContractProposal.fromPartial(InstantiateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/InstantiateContract2Proposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
        value: InstantiateContract2Proposal.encode(InstantiateContract2Proposal.fromPartial(InstantiateContract2Proposal.fromAmino(content.value))).finish()
      });
    case "wasm/MigrateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
        value: MigrateContractProposal.encode(MigrateContractProposal.fromPartial(MigrateContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/SudoContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
        value: SudoContractProposal.encode(SudoContractProposal.fromPartial(SudoContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ExecuteContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
        value: ExecuteContractProposal.encode(ExecuteContractProposal.fromPartial(ExecuteContractProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
        value: UpdateAdminProposal.encode(UpdateAdminProposal.fromPartial(UpdateAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/ClearAdminProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
        value: ClearAdminProposal.encode(ClearAdminProposal.fromPartial(ClearAdminProposal.fromAmino(content.value))).finish()
      });
    case "wasm/PinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
        value: PinCodesProposal.encode(PinCodesProposal.fromPartial(PinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UnpinCodesProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
        value: UnpinCodesProposal.encode(UnpinCodesProposal.fromPartial(UnpinCodesProposal.fromAmino(content.value))).finish()
      });
    case "wasm/UpdateInstantiateConfigProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal.encode(UpdateInstantiateConfigProposal.fromPartial(UpdateInstantiateConfigProposal.fromAmino(content.value))).finish()
      });
    case "wasm/StoreAndInstantiateContractProposal":
      return Any.fromPartial({
        typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal.encode(StoreAndInstantiateContractProposal.fromPartial(StoreAndInstantiateContractProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_govv1beta1Content_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal":
      return {
        type: "/injective.exchange.v1beta1.SpotMarketParamUpdateProposal",
        value: SpotMarketParamUpdateProposal.toAmino(SpotMarketParamUpdateProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.BatchExchangeModificationProposal":
      return {
        type: "/injective.exchange.v1beta1.BatchExchangeModificationProposal",
        value: BatchExchangeModificationProposal.toAmino(BatchExchangeModificationProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.SpotMarketLaunchProposal":
      return {
        type: "/injective.exchange.v1beta1.SpotMarketLaunchProposal",
        value: SpotMarketLaunchProposal.toAmino(SpotMarketLaunchProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal":
      return {
        type: "/injective.exchange.v1beta1.PerpetualMarketLaunchProposal",
        value: PerpetualMarketLaunchProposal.toAmino(PerpetualMarketLaunchProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal":
      return {
        type: "/injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal",
        value: BinaryOptionsMarketLaunchProposal.toAmino(BinaryOptionsMarketLaunchProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal":
      return {
        type: "/injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal",
        value: ExpiryFuturesMarketLaunchProposal.toAmino(ExpiryFuturesMarketLaunchProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal":
      return {
        type: "/injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal",
        value: DerivativeMarketParamUpdateProposal.toAmino(DerivativeMarketParamUpdateProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.MarketForcedSettlementProposal":
      return {
        type: "/injective.exchange.v1beta1.MarketForcedSettlementProposal",
        value: MarketForcedSettlementProposal.toAmino(MarketForcedSettlementProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal":
      return {
        type: "/injective.exchange.v1beta1.UpdateDenomDecimalsProposal",
        value: UpdateDenomDecimalsProposal.toAmino(UpdateDenomDecimalsProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal":
      return {
        type: "/injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal",
        value: BinaryOptionsMarketParamUpdateProposal.toAmino(BinaryOptionsMarketParamUpdateProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal":
      return {
        type: "/injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal",
        value: TradingRewardCampaignLaunchProposal.toAmino(TradingRewardCampaignLaunchProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal":
      return {
        type: "/injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal",
        value: TradingRewardCampaignUpdateProposal.toAmino(TradingRewardCampaignUpdateProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal":
      return {
        type: "/injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal",
        value: TradingRewardPendingPointsUpdateProposal.toAmino(TradingRewardPendingPointsUpdateProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.FeeDiscountProposal":
      return {
        type: "/injective.exchange.v1beta1.FeeDiscountProposal",
        value: FeeDiscountProposal.toAmino(FeeDiscountProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal":
      return {
        type: "/injective.exchange.v1beta1.BatchCommunityPoolSpendProposal",
        value: BatchCommunityPoolSpendProposal.toAmino(BatchCommunityPoolSpendProposal.decode(content.value))
      };
    case "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal":
      return {
        type: "/injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal",
        value: AtomicMarketOrderFeeMultiplierScheduleProposal.toAmino(AtomicMarketOrderFeeMultiplierScheduleProposal.decode(content.value))
      };
    case "/injective.ocr.v1beta1.SetConfigProposal":
      return {
        type: "/injective.ocr.v1beta1.SetConfigProposal",
        value: SetConfigProposal.toAmino(SetConfigProposal.decode(content.value))
      };
    case "/injective.ocr.v1beta1.SetBatchConfigProposal":
      return {
        type: "/injective.ocr.v1beta1.SetBatchConfigProposal",
        value: SetBatchConfigProposal.toAmino(SetBatchConfigProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
        value: GrantBandOraclePrivilegeProposal.toAmino(GrantBandOraclePrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
        value: RevokeBandOraclePrivilegeProposal.toAmino(RevokeBandOraclePrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
        value: GrantPriceFeederPrivilegeProposal.toAmino(GrantPriceFeederPrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
        value: GrantProviderPrivilegeProposal.toAmino(GrantProviderPrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
        value: RevokeProviderPrivilegeProposal.toAmino(RevokeProviderPrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal":
      return {
        type: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
        value: RevokePriceFeederPrivilegeProposal.toAmino(RevokePriceFeederPrivilegeProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal":
      return {
        type: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
        value: AuthorizeBandOracleRequestProposal.toAmino(AuthorizeBandOracleRequestProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal":
      return {
        type: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
        value: UpdateBandOracleRequestProposal.toAmino(UpdateBandOracleRequestProposal.decode(content.value))
      };
    case "/injective.oracle.v1beta1.EnableBandIBCProposal":
      return {
        type: "/injective.oracle.v1beta1.EnableBandIBCProposal",
        value: EnableBandIBCProposal.toAmino(EnableBandIBCProposal.decode(content.value))
      };
    case "/injective.peggy.v1.BlacklistEthereumAddressesProposal":
      return {
        type: "/injective.peggy.v1.BlacklistEthereumAddressesProposal",
        value: BlacklistEthereumAddressesProposal.toAmino(BlacklistEthereumAddressesProposal.decode(content.value))
      };
    case "/injective.peggy.v1.RevokeEthereumBlacklistProposal":
      return {
        type: "/injective.peggy.v1.RevokeEthereumBlacklistProposal",
        value: RevokeEthereumBlacklistProposal.toAmino(RevokeEthereumBlacklistProposal.decode(content.value))
      };
    case "/injective.wasmx.v1.ContractRegistrationRequestProposal":
      return {
        type: "/injective.wasmx.v1.ContractRegistrationRequestProposal",
        value: ContractRegistrationRequestProposal.toAmino(ContractRegistrationRequestProposal.decode(content.value))
      };
    case "/injective.wasmx.v1.BatchContractRegistrationRequestProposal":
      return {
        type: "/injective.wasmx.v1.BatchContractRegistrationRequestProposal",
        value: BatchContractRegistrationRequestProposal.toAmino(BatchContractRegistrationRequestProposal.decode(content.value))
      };
    case "/injective.wasmx.v1.BatchContractDeregistrationProposal":
      return {
        type: "/injective.wasmx.v1.BatchContractDeregistrationProposal",
        value: BatchContractDeregistrationProposal.toAmino(BatchContractDeregistrationProposal.decode(content.value))
      };
    case "/injective.wasmx.v1.ContractRegistrationRequest":
      return {
        type: "/injective.wasmx.v1.ContractRegistrationRequest",
        value: ContractRegistrationRequest.toAmino(ContractRegistrationRequest.decode(content.value))
      };
    case "/injective.wasmx.v1.BatchStoreCodeProposal":
      return {
        type: "/injective.wasmx.v1.BatchStoreCodeProposal",
        value: BatchStoreCodeProposal.toAmino(BatchStoreCodeProposal.decode(content.value))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposal",
        value: CommunityPoolSpendProposal.toAmino(CommunityPoolSpendProposal.decode(content.value))
      };
    case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
      return {
        type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
        value: CommunityPoolSpendProposalWithDeposit.toAmino(CommunityPoolSpendProposalWithDeposit.decode(content.value))
      };
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value))
      };
    case "/cosmos.params.v1beta1.ParameterChangeProposal":
      return {
        type: "cosmos-sdk/ParameterChangeProposal",
        value: ParameterChangeProposal.toAmino(ParameterChangeProposal.decode(content.value))
      };
    case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/SoftwareUpgradeProposal",
        value: SoftwareUpgradeProposal.toAmino(SoftwareUpgradeProposal.decode(content.value))
      };
    case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
      return {
        type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
        value: CancelSoftwareUpgradeProposal.toAmino(CancelSoftwareUpgradeProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.StoreCodeProposal":
      return {
        type: "wasm/StoreCodeProposal",
        value: StoreCodeProposal.toAmino(StoreCodeProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.InstantiateContractProposal":
      return {
        type: "wasm/InstantiateContractProposal",
        value: InstantiateContractProposal.toAmino(InstantiateContractProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
      return {
        type: "wasm/InstantiateContract2Proposal",
        value: InstantiateContract2Proposal.toAmino(InstantiateContract2Proposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.MigrateContractProposal":
      return {
        type: "wasm/MigrateContractProposal",
        value: MigrateContractProposal.toAmino(MigrateContractProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.SudoContractProposal":
      return {
        type: "wasm/SudoContractProposal",
        value: SudoContractProposal.toAmino(SudoContractProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.ExecuteContractProposal":
      return {
        type: "wasm/ExecuteContractProposal",
        value: ExecuteContractProposal.toAmino(ExecuteContractProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.UpdateAdminProposal":
      return {
        type: "wasm/UpdateAdminProposal",
        value: UpdateAdminProposal.toAmino(UpdateAdminProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.ClearAdminProposal":
      return {
        type: "wasm/ClearAdminProposal",
        value: ClearAdminProposal.toAmino(ClearAdminProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.PinCodesProposal":
      return {
        type: "wasm/PinCodesProposal",
        value: PinCodesProposal.toAmino(PinCodesProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.UnpinCodesProposal":
      return {
        type: "wasm/UnpinCodesProposal",
        value: UnpinCodesProposal.toAmino(UnpinCodesProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
      return {
        type: "wasm/UpdateInstantiateConfigProposal",
        value: UpdateInstantiateConfigProposal.toAmino(UpdateInstantiateConfigProposal.decode(content.value))
      };
    case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
      return {
        type: "wasm/StoreAndInstantiateContractProposal",
        value: StoreAndInstantiateContractProposal.toAmino(StoreAndInstantiateContractProposal.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};