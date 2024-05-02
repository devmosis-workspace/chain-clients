import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Pool, PoolAmino, PoolSDKType, Provider, ProviderAmino, ProviderSDKType, PurchaseList, PurchaseListAmino, PurchaseListSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, ShieldStaking, ShieldStakingAmino, ShieldStakingSDKType } from "./shield";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** GenesisState defines the shield genesis state. */
export interface GenesisState {
  shieldAdmin: string;
  nextPoolId: bigint;
  nextPurchaseId: bigint;
  poolParams: PoolParams;
  claimProposalParams: ClaimProposalParams;
  distributionParams: DistributionParams;
  totalCollateral: string;
  totalWithdrawing: string;
  totalShield: string;
  totalClaimed: string;
  serviceFees: DecCoin[];
  remainingServiceFees: DecCoin[];
  pools: Pool[];
  providers: Provider[];
  purchaseLists: PurchaseList[];
  withdraws: Withdraw[];
  lastUpdateTime: Timestamp;
  shieldStakingRate: string;
  globalStakingPool: string;
  stakeForShields: ShieldStaking[];
  originalStakings: OriginalStaking[];
  proposalIDReimbursementPairs: ProposalIDReimbursementPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the shield genesis state. */
export interface GenesisStateAmino {
  shield_admin?: string;
  next_pool_id?: string;
  next_purchase_id?: string;
  pool_params?: PoolParamsAmino;
  claim_proposal_params?: ClaimProposalParamsAmino;
  distribution_params?: DistributionParamsAmino;
  total_collateral?: string;
  total_withdrawing?: string;
  total_shield?: string;
  total_claimed?: string;
  service_fees?: DecCoinAmino[];
  remaining_service_fees?: DecCoinAmino[];
  pools?: PoolAmino[];
  providers?: ProviderAmino[];
  purchase_lists?: PurchaseListAmino[];
  withdraws?: WithdrawAmino[];
  last_update_time?: string;
  shield_staking_rate?: string;
  global_staking_pool?: string;
  stake_for_shields?: ShieldStakingAmino[];
  original_stakings?: OriginalStakingAmino[];
  proposalID_reimbursement_pairs?: ProposalIDReimbursementPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/shentu.shield.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the shield genesis state. */
export interface GenesisStateSDKType {
  shield_admin: string;
  next_pool_id: bigint;
  next_purchase_id: bigint;
  pool_params: PoolParamsSDKType;
  claim_proposal_params: ClaimProposalParamsSDKType;
  distribution_params: DistributionParamsSDKType;
  total_collateral: string;
  total_withdrawing: string;
  total_shield: string;
  total_claimed: string;
  service_fees: DecCoinSDKType[];
  remaining_service_fees: DecCoinSDKType[];
  pools: PoolSDKType[];
  providers: ProviderSDKType[];
  purchase_lists: PurchaseListSDKType[];
  withdraws: WithdrawSDKType[];
  last_update_time: TimestampSDKType;
  shield_staking_rate: string;
  global_staking_pool: string;
  stake_for_shields: ShieldStakingSDKType[];
  original_stakings: OriginalStakingSDKType[];
  proposalID_reimbursement_pairs: ProposalIDReimbursementPairSDKType[];
}
export interface OriginalStaking {
  purchaseId: bigint;
  amount: string;
}
export interface OriginalStakingProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.OriginalStaking";
  value: Uint8Array;
}
export interface OriginalStakingAmino {
  purchase_id?: string;
  amount?: string;
}
export interface OriginalStakingAminoMsg {
  type: "/shentu.shield.v1alpha1.OriginalStaking";
  value: OriginalStakingAmino;
}
export interface OriginalStakingSDKType {
  purchase_id: bigint;
  amount: string;
}
export interface ProposalIDReimbursementPair {
  proposalId: bigint;
  reimbursement: Reimbursement;
}
export interface ProposalIDReimbursementPairProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair";
  value: Uint8Array;
}
export interface ProposalIDReimbursementPairAmino {
  proposal_id?: string;
  reimbursement?: ReimbursementAmino;
}
export interface ProposalIDReimbursementPairAminoMsg {
  type: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair";
  value: ProposalIDReimbursementPairAmino;
}
export interface ProposalIDReimbursementPairSDKType {
  proposal_id: bigint;
  reimbursement: ReimbursementSDKType;
}
export interface Reimbursement {
  amount: Coin[];
  beneficiary: string;
  payoutTime: Timestamp;
}
export interface ReimbursementProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.Reimbursement";
  value: Uint8Array;
}
export interface ReimbursementAmino {
  amount?: CoinAmino[];
  beneficiary?: string;
  payout_time?: string;
}
export interface ReimbursementAminoMsg {
  type: "/shentu.shield.v1alpha1.Reimbursement";
  value: ReimbursementAmino;
}
export interface ReimbursementSDKType {
  amount: CoinSDKType[];
  beneficiary: string;
  payout_time: TimestampSDKType;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParams {
  protectionPeriod: Duration;
  shieldFeesRate: string;
  withdrawPeriod: Duration;
  poolShieldLimit: string;
  minShieldPurchase: Coin[];
}
export interface PoolParamsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.PoolParams";
  value: Uint8Array;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParamsAmino {
  protection_period?: DurationAmino;
  shield_fees_rate?: string;
  withdraw_period?: DurationAmino;
  pool_shield_limit?: string;
  min_shield_purchase?: CoinAmino[];
}
export interface PoolParamsAminoMsg {
  type: "/shentu.shield.v1alpha1.PoolParams";
  value: PoolParamsAmino;
}
/** PoolParams defines the parameters for the shield pool. */
export interface PoolParamsSDKType {
  protection_period: DurationSDKType;
  shield_fees_rate: string;
  withdraw_period: DurationSDKType;
  pool_shield_limit: string;
  min_shield_purchase: CoinSDKType[];
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParams {
  claimPeriod: Duration;
  payoutPeriod: Duration;
  minDeposit: Coin[];
  depositRate: string;
  feesRate: string;
}
export interface ClaimProposalParamsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.ClaimProposalParams";
  value: Uint8Array;
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParamsAmino {
  claim_period?: DurationAmino;
  payout_period?: DurationAmino;
  min_deposit?: CoinAmino[];
  deposit_rate?: string;
  fees_rate?: string;
}
export interface ClaimProposalParamsAminoMsg {
  type: "/shentu.shield.v1alpha1.ClaimProposalParams";
  value: ClaimProposalParamsAmino;
}
/** ClaimProposalParams defines the parameters for the shield claim proposals. */
export interface ClaimProposalParamsSDKType {
  claim_period: DurationSDKType;
  payout_period: DurationSDKType;
  min_deposit: CoinSDKType[];
  deposit_rate: string;
  fees_rate: string;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParams {
  modelParamA: string;
  modelParamB: string;
  maxLeverage: string;
}
export interface DistributionParamsProtoMsg {
  typeUrl: "/shentu.shield.v1alpha1.DistributionParams";
  value: Uint8Array;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParamsAmino {
  model_param_a?: string;
  model_param_b?: string;
  max_leverage?: string;
}
export interface DistributionParamsAminoMsg {
  type: "/shentu.shield.v1alpha1.DistributionParams";
  value: DistributionParamsAmino;
}
/** DistributionParams defines the parameters for shield block reward. */
export interface DistributionParamsSDKType {
  model_param_a: string;
  model_param_b: string;
  max_leverage: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    shieldAdmin: "",
    nextPoolId: BigInt(0),
    nextPurchaseId: BigInt(0),
    poolParams: PoolParams.fromPartial({}),
    claimProposalParams: ClaimProposalParams.fromPartial({}),
    distributionParams: DistributionParams.fromPartial({}),
    totalCollateral: "",
    totalWithdrawing: "",
    totalShield: "",
    totalClaimed: "",
    serviceFees: [],
    remainingServiceFees: [],
    pools: [],
    providers: [],
    purchaseLists: [],
    withdraws: [],
    lastUpdateTime: Timestamp.fromPartial({}),
    shieldStakingRate: "",
    globalStakingPool: "",
    stakeForShields: [],
    originalStakings: [],
    proposalIDReimbursementPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/shentu.shield.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shieldAdmin !== "") {
      writer.uint32(10).string(message.shieldAdmin);
    }
    if (message.nextPoolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextPoolId);
    }
    if (message.nextPurchaseId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextPurchaseId);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(34).fork()).ldelim();
    }
    if (message.claimProposalParams !== undefined) {
      ClaimProposalParams.encode(message.claimProposalParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.distributionParams !== undefined) {
      DistributionParams.encode(message.distributionParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalCollateral !== "") {
      writer.uint32(58).string(message.totalCollateral);
    }
    if (message.totalWithdrawing !== "") {
      writer.uint32(66).string(message.totalWithdrawing);
    }
    if (message.totalShield !== "") {
      writer.uint32(74).string(message.totalShield);
    }
    if (message.totalClaimed !== "") {
      writer.uint32(82).string(message.totalClaimed);
    }
    for (const v of message.serviceFees) {
      DecCoin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.remainingServiceFees) {
      DecCoin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.purchaseLists) {
      PurchaseList.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.withdraws) {
      Withdraw.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(138).fork()).ldelim();
    }
    if (message.shieldStakingRate !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.shieldStakingRate, 18).atomics);
    }
    if (message.globalStakingPool !== "") {
      writer.uint32(154).string(message.globalStakingPool);
    }
    for (const v of message.stakeForShields) {
      ShieldStaking.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.originalStakings) {
      OriginalStaking.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.proposalIDReimbursementPairs) {
      ProposalIDReimbursementPair.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      shieldAdmin: isSet(object.shieldAdmin) ? String(object.shieldAdmin) : "",
      nextPoolId: isSet(object.nextPoolId) ? BigInt(object.nextPoolId.toString()) : BigInt(0),
      nextPurchaseId: isSet(object.nextPurchaseId) ? BigInt(object.nextPurchaseId.toString()) : BigInt(0),
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      claimProposalParams: isSet(object.claimProposalParams) ? ClaimProposalParams.fromJSON(object.claimProposalParams) : undefined,
      distributionParams: isSet(object.distributionParams) ? DistributionParams.fromJSON(object.distributionParams) : undefined,
      totalCollateral: isSet(object.totalCollateral) ? String(object.totalCollateral) : "",
      totalWithdrawing: isSet(object.totalWithdrawing) ? String(object.totalWithdrawing) : "",
      totalShield: isSet(object.totalShield) ? String(object.totalShield) : "",
      totalClaimed: isSet(object.totalClaimed) ? String(object.totalClaimed) : "",
      serviceFees: Array.isArray(object?.serviceFees) ? object.serviceFees.map((e: any) => DecCoin.fromJSON(e)) : [],
      remainingServiceFees: Array.isArray(object?.remainingServiceFees) ? object.remainingServiceFees.map((e: any) => DecCoin.fromJSON(e)) : [],
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
      purchaseLists: Array.isArray(object?.purchaseLists) ? object.purchaseLists.map((e: any) => PurchaseList.fromJSON(e)) : [],
      withdraws: Array.isArray(object?.withdraws) ? object.withdraws.map((e: any) => Withdraw.fromJSON(e)) : [],
      lastUpdateTime: isSet(object.lastUpdateTime) ? fromJsonTimestamp(object.lastUpdateTime) : undefined,
      shieldStakingRate: isSet(object.shieldStakingRate) ? String(object.shieldStakingRate) : "",
      globalStakingPool: isSet(object.globalStakingPool) ? String(object.globalStakingPool) : "",
      stakeForShields: Array.isArray(object?.stakeForShields) ? object.stakeForShields.map((e: any) => ShieldStaking.fromJSON(e)) : [],
      originalStakings: Array.isArray(object?.originalStakings) ? object.originalStakings.map((e: any) => OriginalStaking.fromJSON(e)) : [],
      proposalIDReimbursementPairs: Array.isArray(object?.proposalIDReimbursementPairs) ? object.proposalIDReimbursementPairs.map((e: any) => ProposalIDReimbursementPair.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.shieldAdmin = object.shieldAdmin ?? "";
    message.nextPoolId = object.nextPoolId !== undefined && object.nextPoolId !== null ? BigInt(object.nextPoolId.toString()) : BigInt(0);
    message.nextPurchaseId = object.nextPurchaseId !== undefined && object.nextPurchaseId !== null ? BigInt(object.nextPurchaseId.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.claimProposalParams = object.claimProposalParams !== undefined && object.claimProposalParams !== null ? ClaimProposalParams.fromPartial(object.claimProposalParams) : undefined;
    message.distributionParams = object.distributionParams !== undefined && object.distributionParams !== null ? DistributionParams.fromPartial(object.distributionParams) : undefined;
    message.totalCollateral = object.totalCollateral ?? "";
    message.totalWithdrawing = object.totalWithdrawing ?? "";
    message.totalShield = object.totalShield ?? "";
    message.totalClaimed = object.totalClaimed ?? "";
    message.serviceFees = object.serviceFees?.map(e => DecCoin.fromPartial(e)) || [];
    message.remainingServiceFees = object.remainingServiceFees?.map(e => DecCoin.fromPartial(e)) || [];
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.purchaseLists = object.purchaseLists?.map(e => PurchaseList.fromPartial(e)) || [];
    message.withdraws = object.withdraws?.map(e => Withdraw.fromPartial(e)) || [];
    message.lastUpdateTime = object.lastUpdateTime !== undefined && object.lastUpdateTime !== null ? Timestamp.fromPartial(object.lastUpdateTime) : undefined;
    message.shieldStakingRate = object.shieldStakingRate ?? "";
    message.globalStakingPool = object.globalStakingPool ?? "";
    message.stakeForShields = object.stakeForShields?.map(e => ShieldStaking.fromPartial(e)) || [];
    message.originalStakings = object.originalStakings?.map(e => OriginalStaking.fromPartial(e)) || [];
    message.proposalIDReimbursementPairs = object.proposalIDReimbursementPairs?.map(e => ProposalIDReimbursementPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.shield_admin !== undefined && object.shield_admin !== null) {
      message.shieldAdmin = object.shield_admin;
    }
    if (object.next_pool_id !== undefined && object.next_pool_id !== null) {
      message.nextPoolId = BigInt(object.next_pool_id);
    }
    if (object.next_purchase_id !== undefined && object.next_purchase_id !== null) {
      message.nextPurchaseId = BigInt(object.next_purchase_id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    if (object.claim_proposal_params !== undefined && object.claim_proposal_params !== null) {
      message.claimProposalParams = ClaimProposalParams.fromAmino(object.claim_proposal_params);
    }
    if (object.distribution_params !== undefined && object.distribution_params !== null) {
      message.distributionParams = DistributionParams.fromAmino(object.distribution_params);
    }
    if (object.total_collateral !== undefined && object.total_collateral !== null) {
      message.totalCollateral = object.total_collateral;
    }
    if (object.total_withdrawing !== undefined && object.total_withdrawing !== null) {
      message.totalWithdrawing = object.total_withdrawing;
    }
    if (object.total_shield !== undefined && object.total_shield !== null) {
      message.totalShield = object.total_shield;
    }
    if (object.total_claimed !== undefined && object.total_claimed !== null) {
      message.totalClaimed = object.total_claimed;
    }
    message.serviceFees = object.service_fees?.map(e => DecCoin.fromAmino(e)) || [];
    message.remainingServiceFees = object.remaining_service_fees?.map(e => DecCoin.fromAmino(e)) || [];
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    message.purchaseLists = object.purchase_lists?.map(e => PurchaseList.fromAmino(e)) || [];
    message.withdraws = object.withdraws?.map(e => Withdraw.fromAmino(e)) || [];
    if (object.last_update_time !== undefined && object.last_update_time !== null) {
      message.lastUpdateTime = Timestamp.fromAmino(object.last_update_time);
    }
    if (object.shield_staking_rate !== undefined && object.shield_staking_rate !== null) {
      message.shieldStakingRate = object.shield_staking_rate;
    }
    if (object.global_staking_pool !== undefined && object.global_staking_pool !== null) {
      message.globalStakingPool = object.global_staking_pool;
    }
    message.stakeForShields = object.stake_for_shields?.map(e => ShieldStaking.fromAmino(e)) || [];
    message.originalStakings = object.original_stakings?.map(e => OriginalStaking.fromAmino(e)) || [];
    message.proposalIDReimbursementPairs = object.proposalID_reimbursement_pairs?.map(e => ProposalIDReimbursementPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.shield_admin = message.shieldAdmin === "" ? undefined : message.shieldAdmin;
    obj.next_pool_id = message.nextPoolId !== BigInt(0) ? message.nextPoolId.toString() : undefined;
    obj.next_purchase_id = message.nextPurchaseId !== BigInt(0) ? message.nextPurchaseId.toString() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    obj.claim_proposal_params = message.claimProposalParams ? ClaimProposalParams.toAmino(message.claimProposalParams) : undefined;
    obj.distribution_params = message.distributionParams ? DistributionParams.toAmino(message.distributionParams) : undefined;
    obj.total_collateral = message.totalCollateral === "" ? undefined : message.totalCollateral;
    obj.total_withdrawing = message.totalWithdrawing === "" ? undefined : message.totalWithdrawing;
    obj.total_shield = message.totalShield === "" ? undefined : message.totalShield;
    obj.total_claimed = message.totalClaimed === "" ? undefined : message.totalClaimed;
    if (message.serviceFees) {
      obj.service_fees = message.serviceFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.service_fees = message.serviceFees;
    }
    if (message.remainingServiceFees) {
      obj.remaining_service_fees = message.remainingServiceFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.remaining_service_fees = message.remainingServiceFees;
    }
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    if (message.purchaseLists) {
      obj.purchase_lists = message.purchaseLists.map(e => e ? PurchaseList.toAmino(e) : undefined);
    } else {
      obj.purchase_lists = message.purchaseLists;
    }
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? Withdraw.toAmino(e) : undefined);
    } else {
      obj.withdraws = message.withdraws;
    }
    obj.last_update_time = message.lastUpdateTime ? Timestamp.toAmino(message.lastUpdateTime) : undefined;
    obj.shield_staking_rate = message.shieldStakingRate === "" ? undefined : message.shieldStakingRate;
    obj.global_staking_pool = message.globalStakingPool === "" ? undefined : message.globalStakingPool;
    if (message.stakeForShields) {
      obj.stake_for_shields = message.stakeForShields.map(e => e ? ShieldStaking.toAmino(e) : undefined);
    } else {
      obj.stake_for_shields = message.stakeForShields;
    }
    if (message.originalStakings) {
      obj.original_stakings = message.originalStakings.map(e => e ? OriginalStaking.toAmino(e) : undefined);
    } else {
      obj.original_stakings = message.originalStakings;
    }
    if (message.proposalIDReimbursementPairs) {
      obj.proposalID_reimbursement_pairs = message.proposalIDReimbursementPairs.map(e => e ? ProposalIDReimbursementPair.toAmino(e) : undefined);
    } else {
      obj.proposalID_reimbursement_pairs = message.proposalIDReimbursementPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseOriginalStaking(): OriginalStaking {
  return {
    purchaseId: BigInt(0),
    amount: ""
  };
}
export const OriginalStaking = {
  typeUrl: "/shentu.shield.v1alpha1.OriginalStaking",
  encode(message: OriginalStaking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purchaseId !== BigInt(0)) {
      writer.uint32(8).uint64(message.purchaseId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): OriginalStaking {
    return {
      purchaseId: isSet(object.purchaseId) ? BigInt(object.purchaseId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<OriginalStaking>): OriginalStaking {
    const message = createBaseOriginalStaking();
    message.purchaseId = object.purchaseId !== undefined && object.purchaseId !== null ? BigInt(object.purchaseId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: OriginalStakingAmino): OriginalStaking {
    const message = createBaseOriginalStaking();
    if (object.purchase_id !== undefined && object.purchase_id !== null) {
      message.purchaseId = BigInt(object.purchase_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: OriginalStaking): OriginalStakingAmino {
    const obj: any = {};
    obj.purchase_id = message.purchaseId !== BigInt(0) ? message.purchaseId.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: OriginalStakingAminoMsg): OriginalStaking {
    return OriginalStaking.fromAmino(object.value);
  },
  fromProtoMsg(message: OriginalStakingProtoMsg): OriginalStaking {
    return OriginalStaking.decode(message.value);
  },
  toProto(message: OriginalStaking): Uint8Array {
    return OriginalStaking.encode(message).finish();
  },
  toProtoMsg(message: OriginalStaking): OriginalStakingProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.OriginalStaking",
      value: OriginalStaking.encode(message).finish()
    };
  }
};
function createBaseProposalIDReimbursementPair(): ProposalIDReimbursementPair {
  return {
    proposalId: BigInt(0),
    reimbursement: Reimbursement.fromPartial({})
  };
}
export const ProposalIDReimbursementPair = {
  typeUrl: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair",
  encode(message: ProposalIDReimbursementPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.reimbursement !== undefined) {
      Reimbursement.encode(message.reimbursement, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ProposalIDReimbursementPair {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      reimbursement: isSet(object.reimbursement) ? Reimbursement.fromJSON(object.reimbursement) : undefined
    };
  },
  fromPartial(object: Partial<ProposalIDReimbursementPair>): ProposalIDReimbursementPair {
    const message = createBaseProposalIDReimbursementPair();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.reimbursement = object.reimbursement !== undefined && object.reimbursement !== null ? Reimbursement.fromPartial(object.reimbursement) : undefined;
    return message;
  },
  fromAmino(object: ProposalIDReimbursementPairAmino): ProposalIDReimbursementPair {
    const message = createBaseProposalIDReimbursementPair();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.reimbursement !== undefined && object.reimbursement !== null) {
      message.reimbursement = Reimbursement.fromAmino(object.reimbursement);
    }
    return message;
  },
  toAmino(message: ProposalIDReimbursementPair): ProposalIDReimbursementPairAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.reimbursement = message.reimbursement ? Reimbursement.toAmino(message.reimbursement) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalIDReimbursementPairAminoMsg): ProposalIDReimbursementPair {
    return ProposalIDReimbursementPair.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalIDReimbursementPairProtoMsg): ProposalIDReimbursementPair {
    return ProposalIDReimbursementPair.decode(message.value);
  },
  toProto(message: ProposalIDReimbursementPair): Uint8Array {
    return ProposalIDReimbursementPair.encode(message).finish();
  },
  toProtoMsg(message: ProposalIDReimbursementPair): ProposalIDReimbursementPairProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.ProposalIDReimbursementPair",
      value: ProposalIDReimbursementPair.encode(message).finish()
    };
  }
};
function createBaseReimbursement(): Reimbursement {
  return {
    amount: [],
    beneficiary: "",
    payoutTime: Timestamp.fromPartial({})
  };
}
export const Reimbursement = {
  typeUrl: "/shentu.shield.v1alpha1.Reimbursement",
  encode(message: Reimbursement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.beneficiary !== "") {
      writer.uint32(18).string(message.beneficiary);
    }
    if (message.payoutTime !== undefined) {
      Timestamp.encode(message.payoutTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Reimbursement {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      beneficiary: isSet(object.beneficiary) ? String(object.beneficiary) : "",
      payoutTime: isSet(object.payoutTime) ? fromJsonTimestamp(object.payoutTime) : undefined
    };
  },
  fromPartial(object: Partial<Reimbursement>): Reimbursement {
    const message = createBaseReimbursement();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.beneficiary = object.beneficiary ?? "";
    message.payoutTime = object.payoutTime !== undefined && object.payoutTime !== null ? Timestamp.fromPartial(object.payoutTime) : undefined;
    return message;
  },
  fromAmino(object: ReimbursementAmino): Reimbursement {
    const message = createBaseReimbursement();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.beneficiary !== undefined && object.beneficiary !== null) {
      message.beneficiary = object.beneficiary;
    }
    if (object.payout_time !== undefined && object.payout_time !== null) {
      message.payoutTime = Timestamp.fromAmino(object.payout_time);
    }
    return message;
  },
  toAmino(message: Reimbursement): ReimbursementAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.beneficiary = message.beneficiary === "" ? undefined : message.beneficiary;
    obj.payout_time = message.payoutTime ? Timestamp.toAmino(message.payoutTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReimbursementAminoMsg): Reimbursement {
    return Reimbursement.fromAmino(object.value);
  },
  fromProtoMsg(message: ReimbursementProtoMsg): Reimbursement {
    return Reimbursement.decode(message.value);
  },
  toProto(message: Reimbursement): Uint8Array {
    return Reimbursement.encode(message).finish();
  },
  toProtoMsg(message: Reimbursement): ReimbursementProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.Reimbursement",
      value: Reimbursement.encode(message).finish()
    };
  }
};
function createBasePoolParams(): PoolParams {
  return {
    protectionPeriod: Duration.fromPartial({}),
    shieldFeesRate: "",
    withdrawPeriod: Duration.fromPartial({}),
    poolShieldLimit: "",
    minShieldPurchase: []
  };
}
export const PoolParams = {
  typeUrl: "/shentu.shield.v1alpha1.PoolParams",
  encode(message: PoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.protectionPeriod !== undefined) {
      Duration.encode(message.protectionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.shieldFeesRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.shieldFeesRate, 18).atomics);
    }
    if (message.withdrawPeriod !== undefined) {
      Duration.encode(message.withdrawPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolShieldLimit !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.poolShieldLimit, 18).atomics);
    }
    for (const v of message.minShieldPurchase) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PoolParams {
    return {
      protectionPeriod: isSet(object.protectionPeriod) ? Duration.fromJSON(object.protectionPeriod) : undefined,
      shieldFeesRate: isSet(object.shieldFeesRate) ? String(object.shieldFeesRate) : "",
      withdrawPeriod: isSet(object.withdrawPeriod) ? Duration.fromJSON(object.withdrawPeriod) : undefined,
      poolShieldLimit: isSet(object.poolShieldLimit) ? String(object.poolShieldLimit) : "",
      minShieldPurchase: Array.isArray(object?.minShieldPurchase) ? object.minShieldPurchase.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PoolParams>): PoolParams {
    const message = createBasePoolParams();
    message.protectionPeriod = object.protectionPeriod !== undefined && object.protectionPeriod !== null ? Duration.fromPartial(object.protectionPeriod) : undefined;
    message.shieldFeesRate = object.shieldFeesRate ?? "";
    message.withdrawPeriod = object.withdrawPeriod !== undefined && object.withdrawPeriod !== null ? Duration.fromPartial(object.withdrawPeriod) : undefined;
    message.poolShieldLimit = object.poolShieldLimit ?? "";
    message.minShieldPurchase = object.minShieldPurchase?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolParamsAmino): PoolParams {
    const message = createBasePoolParams();
    if (object.protection_period !== undefined && object.protection_period !== null) {
      message.protectionPeriod = Duration.fromAmino(object.protection_period);
    }
    if (object.shield_fees_rate !== undefined && object.shield_fees_rate !== null) {
      message.shieldFeesRate = object.shield_fees_rate;
    }
    if (object.withdraw_period !== undefined && object.withdraw_period !== null) {
      message.withdrawPeriod = Duration.fromAmino(object.withdraw_period);
    }
    if (object.pool_shield_limit !== undefined && object.pool_shield_limit !== null) {
      message.poolShieldLimit = object.pool_shield_limit;
    }
    message.minShieldPurchase = object.min_shield_purchase?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolParams): PoolParamsAmino {
    const obj: any = {};
    obj.protection_period = message.protectionPeriod ? Duration.toAmino(message.protectionPeriod) : undefined;
    obj.shield_fees_rate = message.shieldFeesRate === "" ? undefined : message.shieldFeesRate;
    obj.withdraw_period = message.withdrawPeriod ? Duration.toAmino(message.withdrawPeriod) : undefined;
    obj.pool_shield_limit = message.poolShieldLimit === "" ? undefined : message.poolShieldLimit;
    if (message.minShieldPurchase) {
      obj.min_shield_purchase = message.minShieldPurchase.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_shield_purchase = message.minShieldPurchase;
    }
    return obj;
  },
  fromAminoMsg(object: PoolParamsAminoMsg): PoolParams {
    return PoolParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolParamsProtoMsg): PoolParams {
    return PoolParams.decode(message.value);
  },
  toProto(message: PoolParams): Uint8Array {
    return PoolParams.encode(message).finish();
  },
  toProtoMsg(message: PoolParams): PoolParamsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.PoolParams",
      value: PoolParams.encode(message).finish()
    };
  }
};
function createBaseClaimProposalParams(): ClaimProposalParams {
  return {
    claimPeriod: Duration.fromPartial({}),
    payoutPeriod: Duration.fromPartial({}),
    minDeposit: [],
    depositRate: "",
    feesRate: ""
  };
}
export const ClaimProposalParams = {
  typeUrl: "/shentu.shield.v1alpha1.ClaimProposalParams",
  encode(message: ClaimProposalParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimPeriod !== undefined) {
      Duration.encode(message.claimPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.payoutPeriod !== undefined) {
      Duration.encode(message.payoutPeriod, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.depositRate, 18).atomics);
    }
    if (message.feesRate !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.feesRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ClaimProposalParams {
    return {
      claimPeriod: isSet(object.claimPeriod) ? Duration.fromJSON(object.claimPeriod) : undefined,
      payoutPeriod: isSet(object.payoutPeriod) ? Duration.fromJSON(object.payoutPeriod) : undefined,
      minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      depositRate: isSet(object.depositRate) ? String(object.depositRate) : "",
      feesRate: isSet(object.feesRate) ? String(object.feesRate) : ""
    };
  },
  fromPartial(object: Partial<ClaimProposalParams>): ClaimProposalParams {
    const message = createBaseClaimProposalParams();
    message.claimPeriod = object.claimPeriod !== undefined && object.claimPeriod !== null ? Duration.fromPartial(object.claimPeriod) : undefined;
    message.payoutPeriod = object.payoutPeriod !== undefined && object.payoutPeriod !== null ? Duration.fromPartial(object.payoutPeriod) : undefined;
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.depositRate = object.depositRate ?? "";
    message.feesRate = object.feesRate ?? "";
    return message;
  },
  fromAmino(object: ClaimProposalParamsAmino): ClaimProposalParams {
    const message = createBaseClaimProposalParams();
    if (object.claim_period !== undefined && object.claim_period !== null) {
      message.claimPeriod = Duration.fromAmino(object.claim_period);
    }
    if (object.payout_period !== undefined && object.payout_period !== null) {
      message.payoutPeriod = Duration.fromAmino(object.payout_period);
    }
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    if (object.deposit_rate !== undefined && object.deposit_rate !== null) {
      message.depositRate = object.deposit_rate;
    }
    if (object.fees_rate !== undefined && object.fees_rate !== null) {
      message.feesRate = object.fees_rate;
    }
    return message;
  },
  toAmino(message: ClaimProposalParams): ClaimProposalParamsAmino {
    const obj: any = {};
    obj.claim_period = message.claimPeriod ? Duration.toAmino(message.claimPeriod) : undefined;
    obj.payout_period = message.payoutPeriod ? Duration.toAmino(message.payoutPeriod) : undefined;
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.deposit_rate = message.depositRate === "" ? undefined : message.depositRate;
    obj.fees_rate = message.feesRate === "" ? undefined : message.feesRate;
    return obj;
  },
  fromAminoMsg(object: ClaimProposalParamsAminoMsg): ClaimProposalParams {
    return ClaimProposalParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimProposalParamsProtoMsg): ClaimProposalParams {
    return ClaimProposalParams.decode(message.value);
  },
  toProto(message: ClaimProposalParams): Uint8Array {
    return ClaimProposalParams.encode(message).finish();
  },
  toProtoMsg(message: ClaimProposalParams): ClaimProposalParamsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.ClaimProposalParams",
      value: ClaimProposalParams.encode(message).finish()
    };
  }
};
function createBaseDistributionParams(): DistributionParams {
  return {
    modelParamA: "",
    modelParamB: "",
    maxLeverage: ""
  };
}
export const DistributionParams = {
  typeUrl: "/shentu.shield.v1alpha1.DistributionParams",
  encode(message: DistributionParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.modelParamA !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.modelParamA, 18).atomics);
    }
    if (message.modelParamB !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.modelParamB, 18).atomics);
    }
    if (message.maxLeverage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxLeverage, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): DistributionParams {
    return {
      modelParamA: isSet(object.modelParamA) ? String(object.modelParamA) : "",
      modelParamB: isSet(object.modelParamB) ? String(object.modelParamB) : "",
      maxLeverage: isSet(object.maxLeverage) ? String(object.maxLeverage) : ""
    };
  },
  fromPartial(object: Partial<DistributionParams>): DistributionParams {
    const message = createBaseDistributionParams();
    message.modelParamA = object.modelParamA ?? "";
    message.modelParamB = object.modelParamB ?? "";
    message.maxLeverage = object.maxLeverage ?? "";
    return message;
  },
  fromAmino(object: DistributionParamsAmino): DistributionParams {
    const message = createBaseDistributionParams();
    if (object.model_param_a !== undefined && object.model_param_a !== null) {
      message.modelParamA = object.model_param_a;
    }
    if (object.model_param_b !== undefined && object.model_param_b !== null) {
      message.modelParamB = object.model_param_b;
    }
    if (object.max_leverage !== undefined && object.max_leverage !== null) {
      message.maxLeverage = object.max_leverage;
    }
    return message;
  },
  toAmino(message: DistributionParams): DistributionParamsAmino {
    const obj: any = {};
    obj.model_param_a = message.modelParamA === "" ? undefined : message.modelParamA;
    obj.model_param_b = message.modelParamB === "" ? undefined : message.modelParamB;
    obj.max_leverage = message.maxLeverage === "" ? undefined : message.maxLeverage;
    return obj;
  },
  fromAminoMsg(object: DistributionParamsAminoMsg): DistributionParams {
    return DistributionParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionParamsProtoMsg): DistributionParams {
    return DistributionParams.decode(message.value);
  },
  toProto(message: DistributionParams): Uint8Array {
    return DistributionParams.encode(message).finish();
  },
  toProtoMsg(message: DistributionParams): DistributionParamsProtoMsg {
    return {
      typeUrl: "/shentu.shield.v1alpha1.DistributionParams",
      value: DistributionParams.encode(message).finish()
    };
  }
};