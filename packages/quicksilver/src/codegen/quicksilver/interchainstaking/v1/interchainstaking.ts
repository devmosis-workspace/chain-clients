import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp } from "../../../helpers";
export interface Zone {
  connectionId: string;
  chainId: string;
  depositAddress?: ICAAccount;
  withdrawalAddress?: ICAAccount;
  performanceAddress?: ICAAccount;
  delegationAddress?: ICAAccount;
  accountPrefix: string;
  localDenom: string;
  baseDenom: string;
  redemptionRate: string;
  lastRedemptionRate: string;
  validators: Validator[];
  aggregateIntent: ValidatorIntent[];
  /** deprecated */
  multiSend: boolean;
  liquidityModule: boolean;
  withdrawalWaitgroup: number;
  ibcNextValidatorsHash: Uint8Array;
  validatorSelectionAllocation: bigint;
  holdingsAllocation: bigint;
  /** deprecated */
  lastEpochHeight: bigint;
  tvl: string;
  unbondingPeriod: bigint;
  messagesPerTx: bigint;
  decimals: bigint;
  unbondingEnabled: boolean;
  depositsEnabled: boolean;
  returnToSender: boolean;
  is118: boolean;
  subzoneInfo?: SubzoneInfo;
  dustThreshold: string;
}
export interface ZoneProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Zone";
  value: Uint8Array;
}
export interface ZoneAmino {
  connection_id?: string;
  chain_id?: string;
  deposit_address?: ICAAccountAmino;
  withdrawal_address?: ICAAccountAmino;
  performance_address?: ICAAccountAmino;
  delegation_address?: ICAAccountAmino;
  account_prefix?: string;
  local_denom?: string;
  base_denom?: string;
  redemption_rate?: string;
  last_redemption_rate?: string;
  validators?: ValidatorAmino[];
  aggregate_intent?: ValidatorIntentAmino[];
  /** deprecated */
  multi_send?: boolean;
  liquidity_module?: boolean;
  withdrawal_waitgroup?: number;
  ibc_next_validators_hash?: string;
  validator_selection_allocation?: string;
  holdings_allocation?: string;
  /** deprecated */
  last_epoch_height?: string;
  tvl?: string;
  unbonding_period?: string;
  messages_per_tx?: string;
  decimals?: string;
  unbonding_enabled?: boolean;
  deposits_enabled?: boolean;
  return_to_sender?: boolean;
  is_118?: boolean;
  subzoneInfo?: SubzoneInfoAmino;
  dust_threshold?: string;
}
export interface ZoneAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Zone";
  value: ZoneAmino;
}
export interface ZoneSDKType {
  connection_id: string;
  chain_id: string;
  deposit_address?: ICAAccountSDKType;
  withdrawal_address?: ICAAccountSDKType;
  performance_address?: ICAAccountSDKType;
  delegation_address?: ICAAccountSDKType;
  account_prefix: string;
  local_denom: string;
  base_denom: string;
  redemption_rate: string;
  last_redemption_rate: string;
  validators: ValidatorSDKType[];
  aggregate_intent: ValidatorIntentSDKType[];
  multi_send: boolean;
  liquidity_module: boolean;
  withdrawal_waitgroup: number;
  ibc_next_validators_hash: Uint8Array;
  validator_selection_allocation: bigint;
  holdings_allocation: bigint;
  last_epoch_height: bigint;
  tvl: string;
  unbonding_period: bigint;
  messages_per_tx: bigint;
  decimals: bigint;
  unbonding_enabled: boolean;
  deposits_enabled: boolean;
  return_to_sender: boolean;
  is_118: boolean;
  subzoneInfo?: SubzoneInfoSDKType;
  dust_threshold: string;
}
export interface SubzoneInfo {
  authority: string;
  baseChainID: string;
}
export interface SubzoneInfoProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo";
  value: Uint8Array;
}
export interface SubzoneInfoAmino {
  authority?: string;
  base_chainID?: string;
}
export interface SubzoneInfoAminoMsg {
  type: "/quicksilver.interchainstaking.v1.SubzoneInfo";
  value: SubzoneInfoAmino;
}
export interface SubzoneInfoSDKType {
  authority: string;
  base_chainID: string;
}
export interface LsmCaps {
  validatorCap: string;
  validatorBondCap: string;
  globalCap: string;
}
export interface LsmCapsProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps";
  value: Uint8Array;
}
export interface LsmCapsAmino {
  validator_cap?: string;
  validator_bond_cap?: string;
  global_cap?: string;
}
export interface LsmCapsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.LsmCaps";
  value: LsmCapsAmino;
}
export interface LsmCapsSDKType {
  validator_cap: string;
  validator_bond_cap: string;
  global_cap: string;
}
export interface ICAAccount {
  address: string;
  /** balance defines the different coins this balance holds. */
  balance: Coin[];
  portName: string;
  withdrawalAddress: string;
  balanceWaitgroup: number;
}
export interface ICAAccountProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount";
  value: Uint8Array;
}
export interface ICAAccountAmino {
  address?: string;
  /** balance defines the different coins this balance holds. */
  balance?: CoinAmino[];
  port_name?: string;
  withdrawal_address?: string;
  balance_waitgroup?: number;
}
export interface ICAAccountAminoMsg {
  type: "/quicksilver.interchainstaking.v1.ICAAccount";
  value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
  address: string;
  balance: CoinSDKType[];
  port_name: string;
  withdrawal_address: string;
  balance_waitgroup: number;
}
export interface Distribution {
  valoper: string;
  /** @deprecated */
  _amount: bigint;
  amount: string;
}
export interface DistributionProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Distribution";
  value: Uint8Array;
}
export interface DistributionAmino {
  valoper?: string;
  /** @deprecated */
  _amount?: string;
  amount?: string;
}
export interface DistributionAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Distribution";
  value: DistributionAmino;
}
export interface DistributionSDKType {
  valoper: string;
  /** @deprecated */
  _amount: bigint;
  amount: string;
}
export interface WithdrawalRecord {
  chainId: string;
  delegator: string;
  distribution: Distribution[];
  recipient: string;
  amount: Coin[];
  burnAmount: Coin;
  txhash: string;
  status: number;
  completionTime: Timestamp;
  requeued: boolean;
  acknowledged: boolean;
  epochNumber: bigint;
}
export interface WithdrawalRecordProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
  value: Uint8Array;
}
export interface WithdrawalRecordAmino {
  chain_id?: string;
  delegator?: string;
  distribution?: DistributionAmino[];
  recipient?: string;
  amount?: CoinAmino[];
  burn_amount?: CoinAmino;
  txhash?: string;
  status?: number;
  completion_time?: string;
  requeued?: boolean;
  acknowledged?: boolean;
  epoch_number?: string;
}
export interface WithdrawalRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.WithdrawalRecord";
  value: WithdrawalRecordAmino;
}
export interface WithdrawalRecordSDKType {
  chain_id: string;
  delegator: string;
  distribution: DistributionSDKType[];
  recipient: string;
  amount: CoinSDKType[];
  burn_amount: CoinSDKType;
  txhash: string;
  status: number;
  completion_time: TimestampSDKType;
  requeued: boolean;
  acknowledged: boolean;
  epoch_number: bigint;
}
export interface UnbondingRecord {
  chainId: string;
  epochNumber: bigint;
  validator: string;
  relatedTxhash: string[];
  amount: Coin;
}
export interface UnbondingRecordProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord";
  value: Uint8Array;
}
export interface UnbondingRecordAmino {
  chain_id?: string;
  epoch_number?: string;
  validator?: string;
  related_txhash?: string[];
  amount?: CoinAmino;
}
export interface UnbondingRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.UnbondingRecord";
  value: UnbondingRecordAmino;
}
export interface UnbondingRecordSDKType {
  chain_id: string;
  epoch_number: bigint;
  validator: string;
  related_txhash: string[];
  amount: CoinSDKType;
}
export interface RedelegationRecord {
  chainId: string;
  epochNumber: bigint;
  source: string;
  destination: string;
  /** @deprecated */
  _amount: bigint;
  completionTime: Timestamp;
  amount: string;
}
export interface RedelegationRecordProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord";
  value: Uint8Array;
}
export interface RedelegationRecordAmino {
  chain_id?: string;
  epoch_number?: string;
  source?: string;
  destination?: string;
  /** @deprecated */
  _amount?: string;
  completion_time?: string;
  amount?: string;
}
export interface RedelegationRecordAminoMsg {
  type: "/quicksilver.interchainstaking.v1.RedelegationRecord";
  value: RedelegationRecordAmino;
}
export interface RedelegationRecordSDKType {
  chain_id: string;
  epoch_number: bigint;
  source: string;
  destination: string;
  /** @deprecated */
  _amount: bigint;
  completion_time: TimestampSDKType;
  amount: string;
}
export interface Validator {
  valoperAddress: string;
  commissionRate: string;
  delegatorShares: string;
  votingPower: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailedSince: Timestamp;
  /** Number of shares self bonded from the validator */
  validatorBondShares: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquidShares: string;
}
export interface ValidatorProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  valoper_address?: string;
  commission_rate?: string;
  delegator_shares?: string;
  voting_power?: string;
  score?: string;
  status?: string;
  jailed?: boolean;
  tombstoned?: boolean;
  jailed_since?: string;
  /** Number of shares self bonded from the validator */
  validator_bond_shares?: string;
  /** Number of shares either tokenized or owned by a liquid staking provider */
  liquid_shares?: string;
}
export interface ValidatorAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  valoper_address: string;
  commission_rate: string;
  delegator_shares: string;
  voting_power: string;
  score: string;
  status: string;
  jailed: boolean;
  tombstoned: boolean;
  jailed_since: TimestampSDKType;
  validator_bond_shares: string;
  liquid_shares: string;
}
export interface DelegatorIntent {
  delegator: string;
  intents: ValidatorIntent[];
}
export interface DelegatorIntentProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent";
  value: Uint8Array;
}
export interface DelegatorIntentAmino {
  delegator?: string;
  intents?: ValidatorIntentAmino[];
}
export interface DelegatorIntentAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegatorIntent";
  value: DelegatorIntentAmino;
}
export interface DelegatorIntentSDKType {
  delegator: string;
  intents: ValidatorIntentSDKType[];
}
export interface ValidatorIntent {
  valoperAddress: string;
  weight: string;
}
export interface ValidatorIntentProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent";
  value: Uint8Array;
}
export interface ValidatorIntentAmino {
  valoper_address?: string;
  weight?: string;
}
export interface ValidatorIntentAminoMsg {
  type: "/quicksilver.interchainstaking.v1.ValidatorIntent";
  value: ValidatorIntentAmino;
}
export interface ValidatorIntentSDKType {
  valoper_address: string;
  weight: string;
}
export interface Delegation {
  delegationAddress: string;
  validatorAddress: string;
  amount: Coin;
  height: bigint;
  redelegationEnd: bigint;
}
export interface DelegationProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Delegation";
  value: Uint8Array;
}
export interface DelegationAmino {
  delegation_address?: string;
  validator_address?: string;
  amount?: CoinAmino;
  height?: string;
  redelegation_end?: string;
}
export interface DelegationAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Delegation";
  value: DelegationAmino;
}
export interface DelegationSDKType {
  delegation_address: string;
  validator_address: string;
  amount: CoinSDKType;
  height: bigint;
  redelegation_end: bigint;
}
export interface PortConnectionTuple {
  connectionId: string;
  portId: string;
}
export interface PortConnectionTupleProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
  value: Uint8Array;
}
export interface PortConnectionTupleAmino {
  connection_id?: string;
  port_id?: string;
}
export interface PortConnectionTupleAminoMsg {
  type: "/quicksilver.interchainstaking.v1.PortConnectionTuple";
  value: PortConnectionTupleAmino;
}
export interface PortConnectionTupleSDKType {
  connection_id: string;
  port_id: string;
}
export interface Receipt {
  chainId: string;
  sender: string;
  txhash: string;
  amount: Coin[];
  firstSeen?: Timestamp;
  completed?: Timestamp;
}
export interface ReceiptProtoMsg {
  typeUrl: "/quicksilver.interchainstaking.v1.Receipt";
  value: Uint8Array;
}
export interface ReceiptAmino {
  chain_id?: string;
  sender?: string;
  txhash?: string;
  amount?: CoinAmino[];
  first_seen?: string;
  completed?: string;
}
export interface ReceiptAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Receipt";
  value: ReceiptAmino;
}
export interface ReceiptSDKType {
  chain_id: string;
  sender: string;
  txhash: string;
  amount: CoinSDKType[];
  first_seen?: TimestampSDKType;
  completed?: TimestampSDKType;
}
function createBaseZone(): Zone {
  return {
    connectionId: "",
    chainId: "",
    depositAddress: undefined,
    withdrawalAddress: undefined,
    performanceAddress: undefined,
    delegationAddress: undefined,
    accountPrefix: "",
    localDenom: "",
    baseDenom: "",
    redemptionRate: "",
    lastRedemptionRate: "",
    validators: [],
    aggregateIntent: [],
    multiSend: false,
    liquidityModule: false,
    withdrawalWaitgroup: 0,
    ibcNextValidatorsHash: new Uint8Array(),
    validatorSelectionAllocation: BigInt(0),
    holdingsAllocation: BigInt(0),
    lastEpochHeight: BigInt(0),
    tvl: "",
    unbondingPeriod: BigInt(0),
    messagesPerTx: BigInt(0),
    decimals: BigInt(0),
    unbondingEnabled: false,
    depositsEnabled: false,
    returnToSender: false,
    is118: false,
    subzoneInfo: undefined,
    dustThreshold: ""
  };
}
export const Zone = {
  typeUrl: "/quicksilver.interchainstaking.v1.Zone",
  encode(message: Zone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.depositAddress !== undefined) {
      ICAAccount.encode(message.depositAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.withdrawalAddress !== undefined) {
      ICAAccount.encode(message.withdrawalAddress, writer.uint32(34).fork()).ldelim();
    }
    if (message.performanceAddress !== undefined) {
      ICAAccount.encode(message.performanceAddress, writer.uint32(42).fork()).ldelim();
    }
    if (message.delegationAddress !== undefined) {
      ICAAccount.encode(message.delegationAddress, writer.uint32(50).fork()).ldelim();
    }
    if (message.accountPrefix !== "") {
      writer.uint32(58).string(message.accountPrefix);
    }
    if (message.localDenom !== "") {
      writer.uint32(66).string(message.localDenom);
    }
    if (message.baseDenom !== "") {
      writer.uint32(74).string(message.baseDenom);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.lastRedemptionRate, 18).atomics);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.aggregateIntent) {
      ValidatorIntent.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.multiSend === true) {
      writer.uint32(112).bool(message.multiSend);
    }
    if (message.liquidityModule === true) {
      writer.uint32(120).bool(message.liquidityModule);
    }
    if (message.withdrawalWaitgroup !== 0) {
      writer.uint32(128).uint32(message.withdrawalWaitgroup);
    }
    if (message.ibcNextValidatorsHash.length !== 0) {
      writer.uint32(138).bytes(message.ibcNextValidatorsHash);
    }
    if (message.validatorSelectionAllocation !== BigInt(0)) {
      writer.uint32(144).uint64(message.validatorSelectionAllocation);
    }
    if (message.holdingsAllocation !== BigInt(0)) {
      writer.uint32(152).uint64(message.holdingsAllocation);
    }
    if (message.lastEpochHeight !== BigInt(0)) {
      writer.uint32(160).int64(message.lastEpochHeight);
    }
    if (message.tvl !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.tvl, 18).atomics);
    }
    if (message.unbondingPeriod !== BigInt(0)) {
      writer.uint32(176).int64(message.unbondingPeriod);
    }
    if (message.messagesPerTx !== BigInt(0)) {
      writer.uint32(184).int64(message.messagesPerTx);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(192).int64(message.decimals);
    }
    if (message.unbondingEnabled === true) {
      writer.uint32(200).bool(message.unbondingEnabled);
    }
    if (message.depositsEnabled === true) {
      writer.uint32(208).bool(message.depositsEnabled);
    }
    if (message.returnToSender === true) {
      writer.uint32(216).bool(message.returnToSender);
    }
    if (message.is118 === true) {
      writer.uint32(224).bool(message.is118);
    }
    if (message.subzoneInfo !== undefined) {
      SubzoneInfo.encode(message.subzoneInfo, writer.uint32(234).fork()).ldelim();
    }
    if (message.dustThreshold !== "") {
      writer.uint32(242).string(message.dustThreshold);
    }
    return writer;
  },
  fromJSON(object: any): Zone {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      depositAddress: isSet(object.depositAddress) ? ICAAccount.fromJSON(object.depositAddress) : undefined,
      withdrawalAddress: isSet(object.withdrawalAddress) ? ICAAccount.fromJSON(object.withdrawalAddress) : undefined,
      performanceAddress: isSet(object.performanceAddress) ? ICAAccount.fromJSON(object.performanceAddress) : undefined,
      delegationAddress: isSet(object.delegationAddress) ? ICAAccount.fromJSON(object.delegationAddress) : undefined,
      accountPrefix: isSet(object.accountPrefix) ? String(object.accountPrefix) : "",
      localDenom: isSet(object.localDenom) ? String(object.localDenom) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
      lastRedemptionRate: isSet(object.lastRedemptionRate) ? String(object.lastRedemptionRate) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      aggregateIntent: Array.isArray(object?.aggregateIntent) ? object.aggregateIntent.map((e: any) => ValidatorIntent.fromJSON(e)) : [],
      multiSend: isSet(object.multiSend) ? Boolean(object.multiSend) : false,
      liquidityModule: isSet(object.liquidityModule) ? Boolean(object.liquidityModule) : false,
      withdrawalWaitgroup: isSet(object.withdrawalWaitgroup) ? Number(object.withdrawalWaitgroup) : 0,
      ibcNextValidatorsHash: isSet(object.ibcNextValidatorsHash) ? bytesFromBase64(object.ibcNextValidatorsHash) : new Uint8Array(),
      validatorSelectionAllocation: isSet(object.validatorSelectionAllocation) ? BigInt(object.validatorSelectionAllocation.toString()) : BigInt(0),
      holdingsAllocation: isSet(object.holdingsAllocation) ? BigInt(object.holdingsAllocation.toString()) : BigInt(0),
      lastEpochHeight: isSet(object.lastEpochHeight) ? BigInt(object.lastEpochHeight.toString()) : BigInt(0),
      tvl: isSet(object.tvl) ? String(object.tvl) : "",
      unbondingPeriod: isSet(object.unbondingPeriod) ? BigInt(object.unbondingPeriod.toString()) : BigInt(0),
      messagesPerTx: isSet(object.messagesPerTx) ? BigInt(object.messagesPerTx.toString()) : BigInt(0),
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      unbondingEnabled: isSet(object.unbondingEnabled) ? Boolean(object.unbondingEnabled) : false,
      depositsEnabled: isSet(object.depositsEnabled) ? Boolean(object.depositsEnabled) : false,
      returnToSender: isSet(object.returnToSender) ? Boolean(object.returnToSender) : false,
      is118: isSet(object.is118) ? Boolean(object.is118) : false,
      subzoneInfo: isSet(object.subzoneInfo) ? SubzoneInfo.fromJSON(object.subzoneInfo) : undefined,
      dustThreshold: isSet(object.dustThreshold) ? String(object.dustThreshold) : ""
    };
  },
  fromPartial(object: Partial<Zone>): Zone {
    const message = createBaseZone();
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.depositAddress = object.depositAddress !== undefined && object.depositAddress !== null ? ICAAccount.fromPartial(object.depositAddress) : undefined;
    message.withdrawalAddress = object.withdrawalAddress !== undefined && object.withdrawalAddress !== null ? ICAAccount.fromPartial(object.withdrawalAddress) : undefined;
    message.performanceAddress = object.performanceAddress !== undefined && object.performanceAddress !== null ? ICAAccount.fromPartial(object.performanceAddress) : undefined;
    message.delegationAddress = object.delegationAddress !== undefined && object.delegationAddress !== null ? ICAAccount.fromPartial(object.delegationAddress) : undefined;
    message.accountPrefix = object.accountPrefix ?? "";
    message.localDenom = object.localDenom ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.aggregateIntent = object.aggregateIntent?.map(e => ValidatorIntent.fromPartial(e)) || [];
    message.multiSend = object.multiSend ?? false;
    message.liquidityModule = object.liquidityModule ?? false;
    message.withdrawalWaitgroup = object.withdrawalWaitgroup ?? 0;
    message.ibcNextValidatorsHash = object.ibcNextValidatorsHash ?? new Uint8Array();
    message.validatorSelectionAllocation = object.validatorSelectionAllocation !== undefined && object.validatorSelectionAllocation !== null ? BigInt(object.validatorSelectionAllocation.toString()) : BigInt(0);
    message.holdingsAllocation = object.holdingsAllocation !== undefined && object.holdingsAllocation !== null ? BigInt(object.holdingsAllocation.toString()) : BigInt(0);
    message.lastEpochHeight = object.lastEpochHeight !== undefined && object.lastEpochHeight !== null ? BigInt(object.lastEpochHeight.toString()) : BigInt(0);
    message.tvl = object.tvl ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? BigInt(object.unbondingPeriod.toString()) : BigInt(0);
    message.messagesPerTx = object.messagesPerTx !== undefined && object.messagesPerTx !== null ? BigInt(object.messagesPerTx.toString()) : BigInt(0);
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.unbondingEnabled = object.unbondingEnabled ?? false;
    message.depositsEnabled = object.depositsEnabled ?? false;
    message.returnToSender = object.returnToSender ?? false;
    message.is118 = object.is118 ?? false;
    message.subzoneInfo = object.subzoneInfo !== undefined && object.subzoneInfo !== null ? SubzoneInfo.fromPartial(object.subzoneInfo) : undefined;
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
  fromAmino(object: ZoneAmino): Zone {
    const message = createBaseZone();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.deposit_address !== undefined && object.deposit_address !== null) {
      message.depositAddress = ICAAccount.fromAmino(object.deposit_address);
    }
    if (object.withdrawal_address !== undefined && object.withdrawal_address !== null) {
      message.withdrawalAddress = ICAAccount.fromAmino(object.withdrawal_address);
    }
    if (object.performance_address !== undefined && object.performance_address !== null) {
      message.performanceAddress = ICAAccount.fromAmino(object.performance_address);
    }
    if (object.delegation_address !== undefined && object.delegation_address !== null) {
      message.delegationAddress = ICAAccount.fromAmino(object.delegation_address);
    }
    if (object.account_prefix !== undefined && object.account_prefix !== null) {
      message.accountPrefix = object.account_prefix;
    }
    if (object.local_denom !== undefined && object.local_denom !== null) {
      message.localDenom = object.local_denom;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.redemption_rate !== undefined && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.last_redemption_rate !== undefined && object.last_redemption_rate !== null) {
      message.lastRedemptionRate = object.last_redemption_rate;
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    message.aggregateIntent = object.aggregate_intent?.map(e => ValidatorIntent.fromAmino(e)) || [];
    if (object.multi_send !== undefined && object.multi_send !== null) {
      message.multiSend = object.multi_send;
    }
    if (object.liquidity_module !== undefined && object.liquidity_module !== null) {
      message.liquidityModule = object.liquidity_module;
    }
    if (object.withdrawal_waitgroup !== undefined && object.withdrawal_waitgroup !== null) {
      message.withdrawalWaitgroup = object.withdrawal_waitgroup;
    }
    if (object.ibc_next_validators_hash !== undefined && object.ibc_next_validators_hash !== null) {
      message.ibcNextValidatorsHash = bytesFromBase64(object.ibc_next_validators_hash);
    }
    if (object.validator_selection_allocation !== undefined && object.validator_selection_allocation !== null) {
      message.validatorSelectionAllocation = BigInt(object.validator_selection_allocation);
    }
    if (object.holdings_allocation !== undefined && object.holdings_allocation !== null) {
      message.holdingsAllocation = BigInt(object.holdings_allocation);
    }
    if (object.last_epoch_height !== undefined && object.last_epoch_height !== null) {
      message.lastEpochHeight = BigInt(object.last_epoch_height);
    }
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = object.tvl;
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = BigInt(object.unbonding_period);
    }
    if (object.messages_per_tx !== undefined && object.messages_per_tx !== null) {
      message.messagesPerTx = BigInt(object.messages_per_tx);
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.unbonding_enabled !== undefined && object.unbonding_enabled !== null) {
      message.unbondingEnabled = object.unbonding_enabled;
    }
    if (object.deposits_enabled !== undefined && object.deposits_enabled !== null) {
      message.depositsEnabled = object.deposits_enabled;
    }
    if (object.return_to_sender !== undefined && object.return_to_sender !== null) {
      message.returnToSender = object.return_to_sender;
    }
    if (object.is_118 !== undefined && object.is_118 !== null) {
      message.is118 = object.is_118;
    }
    if (object.subzoneInfo !== undefined && object.subzoneInfo !== null) {
      message.subzoneInfo = SubzoneInfo.fromAmino(object.subzoneInfo);
    }
    if (object.dust_threshold !== undefined && object.dust_threshold !== null) {
      message.dustThreshold = object.dust_threshold;
    }
    return message;
  },
  toAmino(message: Zone): ZoneAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.chain_id = message.chainId;
    obj.deposit_address = message.depositAddress ? ICAAccount.toAmino(message.depositAddress) : undefined;
    obj.withdrawal_address = message.withdrawalAddress ? ICAAccount.toAmino(message.withdrawalAddress) : undefined;
    obj.performance_address = message.performanceAddress ? ICAAccount.toAmino(message.performanceAddress) : undefined;
    obj.delegation_address = message.delegationAddress ? ICAAccount.toAmino(message.delegationAddress) : undefined;
    obj.account_prefix = message.accountPrefix;
    obj.local_denom = message.localDenom;
    obj.base_denom = message.baseDenom;
    obj.redemption_rate = message.redemptionRate;
    obj.last_redemption_rate = message.lastRedemptionRate;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.aggregateIntent) {
      obj.aggregate_intent = message.aggregateIntent.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
    } else {
      obj.aggregate_intent = [];
    }
    obj.multi_send = message.multiSend;
    obj.liquidity_module = message.liquidityModule;
    obj.withdrawal_waitgroup = message.withdrawalWaitgroup;
    obj.ibc_next_validators_hash = message.ibcNextValidatorsHash ? base64FromBytes(message.ibcNextValidatorsHash) : undefined;
    obj.validator_selection_allocation = message.validatorSelectionAllocation ? message.validatorSelectionAllocation.toString() : undefined;
    obj.holdings_allocation = message.holdingsAllocation ? message.holdingsAllocation.toString() : undefined;
    obj.last_epoch_height = message.lastEpochHeight ? message.lastEpochHeight.toString() : undefined;
    obj.tvl = message.tvl;
    obj.unbonding_period = message.unbondingPeriod ? message.unbondingPeriod.toString() : undefined;
    obj.messages_per_tx = message.messagesPerTx ? message.messagesPerTx.toString() : undefined;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    obj.unbonding_enabled = message.unbondingEnabled;
    obj.deposits_enabled = message.depositsEnabled;
    obj.return_to_sender = message.returnToSender;
    obj.is_118 = message.is118;
    obj.subzoneInfo = message.subzoneInfo ? SubzoneInfo.toAmino(message.subzoneInfo) : undefined;
    obj.dust_threshold = message.dustThreshold;
    return obj;
  },
  fromAminoMsg(object: ZoneAminoMsg): Zone {
    return Zone.fromAmino(object.value);
  },
  fromProtoMsg(message: ZoneProtoMsg): Zone {
    return Zone.decode(message.value);
  },
  toProto(message: Zone): Uint8Array {
    return Zone.encode(message).finish();
  },
  toProtoMsg(message: Zone): ZoneProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Zone",
      value: Zone.encode(message).finish()
    };
  }
};
function createBaseSubzoneInfo(): SubzoneInfo {
  return {
    authority: "",
    baseChainID: ""
  };
}
export const SubzoneInfo = {
  typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
  encode(message: SubzoneInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseChainID !== "") {
      writer.uint32(18).string(message.baseChainID);
    }
    return writer;
  },
  fromJSON(object: any): SubzoneInfo {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      baseChainID: isSet(object.baseChainID) ? String(object.baseChainID) : ""
    };
  },
  fromPartial(object: Partial<SubzoneInfo>): SubzoneInfo {
    const message = createBaseSubzoneInfo();
    message.authority = object.authority ?? "";
    message.baseChainID = object.baseChainID ?? "";
    return message;
  },
  fromAmino(object: SubzoneInfoAmino): SubzoneInfo {
    const message = createBaseSubzoneInfo();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.base_chainID !== undefined && object.base_chainID !== null) {
      message.baseChainID = object.base_chainID;
    }
    return message;
  },
  toAmino(message: SubzoneInfo): SubzoneInfoAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base_chainID = message.baseChainID;
    return obj;
  },
  fromAminoMsg(object: SubzoneInfoAminoMsg): SubzoneInfo {
    return SubzoneInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SubzoneInfoProtoMsg): SubzoneInfo {
    return SubzoneInfo.decode(message.value);
  },
  toProto(message: SubzoneInfo): Uint8Array {
    return SubzoneInfo.encode(message).finish();
  },
  toProtoMsg(message: SubzoneInfo): SubzoneInfoProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.SubzoneInfo",
      value: SubzoneInfo.encode(message).finish()
    };
  }
};
function createBaseLsmCaps(): LsmCaps {
  return {
    validatorCap: "",
    validatorBondCap: "",
    globalCap: ""
  };
}
export const LsmCaps = {
  typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
  encode(message: LsmCaps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorCap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.validatorCap, 18).atomics);
    }
    if (message.validatorBondCap !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.validatorBondCap, 18).atomics);
    }
    if (message.globalCap !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.globalCap, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): LsmCaps {
    return {
      validatorCap: isSet(object.validatorCap) ? String(object.validatorCap) : "",
      validatorBondCap: isSet(object.validatorBondCap) ? String(object.validatorBondCap) : "",
      globalCap: isSet(object.globalCap) ? String(object.globalCap) : ""
    };
  },
  fromPartial(object: Partial<LsmCaps>): LsmCaps {
    const message = createBaseLsmCaps();
    message.validatorCap = object.validatorCap ?? "";
    message.validatorBondCap = object.validatorBondCap ?? "";
    message.globalCap = object.globalCap ?? "";
    return message;
  },
  fromAmino(object: LsmCapsAmino): LsmCaps {
    const message = createBaseLsmCaps();
    if (object.validator_cap !== undefined && object.validator_cap !== null) {
      message.validatorCap = object.validator_cap;
    }
    if (object.validator_bond_cap !== undefined && object.validator_bond_cap !== null) {
      message.validatorBondCap = object.validator_bond_cap;
    }
    if (object.global_cap !== undefined && object.global_cap !== null) {
      message.globalCap = object.global_cap;
    }
    return message;
  },
  toAmino(message: LsmCaps): LsmCapsAmino {
    const obj: any = {};
    obj.validator_cap = message.validatorCap;
    obj.validator_bond_cap = message.validatorBondCap;
    obj.global_cap = message.globalCap;
    return obj;
  },
  fromAminoMsg(object: LsmCapsAminoMsg): LsmCaps {
    return LsmCaps.fromAmino(object.value);
  },
  fromProtoMsg(message: LsmCapsProtoMsg): LsmCaps {
    return LsmCaps.decode(message.value);
  },
  toProto(message: LsmCaps): Uint8Array {
    return LsmCaps.encode(message).finish();
  },
  toProtoMsg(message: LsmCaps): LsmCapsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.LsmCaps",
      value: LsmCaps.encode(message).finish()
    };
  }
};
function createBaseICAAccount(): ICAAccount {
  return {
    address: "",
    balance: [],
    portName: "",
    withdrawalAddress: "",
    balanceWaitgroup: 0
  };
}
export const ICAAccount = {
  typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
  encode(message: ICAAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portName !== "") {
      writer.uint32(26).string(message.portName);
    }
    if (message.withdrawalAddress !== "") {
      writer.uint32(34).string(message.withdrawalAddress);
    }
    if (message.balanceWaitgroup !== 0) {
      writer.uint32(40).uint32(message.balanceWaitgroup);
    }
    return writer;
  },
  fromJSON(object: any): ICAAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : [],
      portName: isSet(object.portName) ? String(object.portName) : "",
      withdrawalAddress: isSet(object.withdrawalAddress) ? String(object.withdrawalAddress) : "",
      balanceWaitgroup: isSet(object.balanceWaitgroup) ? Number(object.balanceWaitgroup) : 0
    };
  },
  fromPartial(object: Partial<ICAAccount>): ICAAccount {
    const message = createBaseICAAccount();
    message.address = object.address ?? "";
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.portName = object.portName ?? "";
    message.withdrawalAddress = object.withdrawalAddress ?? "";
    message.balanceWaitgroup = object.balanceWaitgroup ?? 0;
    return message;
  },
  fromAmino(object: ICAAccountAmino): ICAAccount {
    const message = createBaseICAAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    if (object.port_name !== undefined && object.port_name !== null) {
      message.portName = object.port_name;
    }
    if (object.withdrawal_address !== undefined && object.withdrawal_address !== null) {
      message.withdrawalAddress = object.withdrawal_address;
    }
    if (object.balance_waitgroup !== undefined && object.balance_waitgroup !== null) {
      message.balanceWaitgroup = object.balance_waitgroup;
    }
    return message;
  },
  toAmino(message: ICAAccount): ICAAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = [];
    }
    obj.port_name = message.portName;
    obj.withdrawal_address = message.withdrawalAddress;
    obj.balance_waitgroup = message.balanceWaitgroup;
    return obj;
  },
  fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount {
    return ICAAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount {
    return ICAAccount.decode(message.value);
  },
  toProto(message: ICAAccount): Uint8Array {
    return ICAAccount.encode(message).finish();
  },
  toProtoMsg(message: ICAAccount): ICAAccountProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.ICAAccount",
      value: ICAAccount.encode(message).finish()
    };
  }
};
function createBaseDistribution(): Distribution {
  return {
    valoper: "",
    _amount: BigInt(0),
    amount: ""
  };
}
export const Distribution = {
  typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valoper !== "") {
      writer.uint32(10).string(message.valoper);
    }
    if (message._amount !== BigInt(0)) {
      writer.uint32(16).uint64(message._amount);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): Distribution {
    return {
      valoper: isSet(object.valoper) ? String(object.valoper) : "",
      _amount: isSet(object._amount) ? BigInt(object._amount.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.valoper = object.valoper ?? "";
    message._amount = object._amount !== undefined && object._amount !== null ? BigInt(object._amount.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.valoper !== undefined && object.valoper !== null) {
      message.valoper = object.valoper;
    }
    if (object._amount !== undefined && object._amount !== null) {
      message._amount = BigInt(object._amount);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.valoper = message.valoper;
    obj._amount = message._amount ? message._amount.toString() : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};
function createBaseWithdrawalRecord(): WithdrawalRecord {
  return {
    chainId: "",
    delegator: "",
    distribution: [],
    recipient: "",
    amount: [],
    burnAmount: Coin.fromPartial({}),
    txhash: "",
    status: 0,
    completionTime: Timestamp.fromPartial({}),
    requeued: false,
    acknowledged: false,
    epochNumber: BigInt(0)
  };
}
export const WithdrawalRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
  encode(message: WithdrawalRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    for (const v of message.distribution) {
      Distribution.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.burnAmount !== undefined) {
      Coin.encode(message.burnAmount, writer.uint32(50).fork()).ldelim();
    }
    if (message.txhash !== "") {
      writer.uint32(58).string(message.txhash);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.requeued === true) {
      writer.uint32(80).bool(message.requeued);
    }
    if (message.acknowledged === true) {
      writer.uint32(88).bool(message.acknowledged);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(96).int64(message.epochNumber);
    }
    return writer;
  },
  fromJSON(object: any): WithdrawalRecord {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      distribution: Array.isArray(object?.distribution) ? object.distribution.map((e: any) => Distribution.fromJSON(e)) : [],
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      burnAmount: isSet(object.burnAmount) ? Coin.fromJSON(object.burnAmount) : undefined,
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      status: isSet(object.status) ? Number(object.status) : 0,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      requeued: isSet(object.requeued) ? Boolean(object.requeued) : false,
      acknowledged: isSet(object.acknowledged) ? Boolean(object.acknowledged) : false,
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<WithdrawalRecord>): WithdrawalRecord {
    const message = createBaseWithdrawalRecord();
    message.chainId = object.chainId ?? "";
    message.delegator = object.delegator ?? "";
    message.distribution = object.distribution?.map(e => Distribution.fromPartial(e)) || [];
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.burnAmount = object.burnAmount !== undefined && object.burnAmount !== null ? Coin.fromPartial(object.burnAmount) : undefined;
    message.txhash = object.txhash ?? "";
    message.status = object.status ?? 0;
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.requeued = object.requeued ?? false;
    message.acknowledged = object.acknowledged ?? false;
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WithdrawalRecordAmino): WithdrawalRecord {
    const message = createBaseWithdrawalRecord();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.distribution = object.distribution?.map(e => Distribution.fromAmino(e)) || [];
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.burn_amount !== undefined && object.burn_amount !== null) {
      message.burnAmount = Coin.fromAmino(object.burn_amount);
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.requeued !== undefined && object.requeued !== null) {
      message.requeued = object.requeued;
    }
    if (object.acknowledged !== undefined && object.acknowledged !== null) {
      message.acknowledged = object.acknowledged;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    return message;
  },
  toAmino(message: WithdrawalRecord): WithdrawalRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.delegator = message.delegator;
    if (message.distribution) {
      obj.distribution = message.distribution.map(e => e ? Distribution.toAmino(e) : undefined);
    } else {
      obj.distribution = [];
    }
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.burn_amount = message.burnAmount ? Coin.toAmino(message.burnAmount) : undefined;
    obj.txhash = message.txhash;
    obj.status = message.status;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
    obj.requeued = message.requeued;
    obj.acknowledged = message.acknowledged;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawalRecordAminoMsg): WithdrawalRecord {
    return WithdrawalRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawalRecordProtoMsg): WithdrawalRecord {
    return WithdrawalRecord.decode(message.value);
  },
  toProto(message: WithdrawalRecord): Uint8Array {
    return WithdrawalRecord.encode(message).finish();
  },
  toProtoMsg(message: WithdrawalRecord): WithdrawalRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.WithdrawalRecord",
      value: WithdrawalRecord.encode(message).finish()
    };
  }
};
function createBaseUnbondingRecord(): UnbondingRecord {
  return {
    chainId: "",
    epochNumber: BigInt(0),
    validator: "",
    relatedTxhash: [],
    amount: Coin.fromPartial({})
  };
}
export const UnbondingRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
  encode(message: UnbondingRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    for (const v of message.relatedTxhash) {
      writer.uint32(34).string(v!);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UnbondingRecord {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      validator: isSet(object.validator) ? String(object.validator) : "",
      relatedTxhash: Array.isArray(object?.relatedTxhash) ? object.relatedTxhash.map((e: any) => String(e)) : [],
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<UnbondingRecord>): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.validator = object.validator ?? "";
    message.relatedTxhash = object.relatedTxhash?.map(e => e) || [];
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: UnbondingRecordAmino): UnbondingRecord {
    const message = createBaseUnbondingRecord();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    message.relatedTxhash = object.related_txhash?.map(e => e) || [];
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: UnbondingRecord): UnbondingRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.validator = message.validator;
    if (message.relatedTxhash) {
      obj.related_txhash = message.relatedTxhash.map(e => e);
    } else {
      obj.related_txhash = [];
    }
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: UnbondingRecordAminoMsg): UnbondingRecord {
    return UnbondingRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: UnbondingRecordProtoMsg): UnbondingRecord {
    return UnbondingRecord.decode(message.value);
  },
  toProto(message: UnbondingRecord): Uint8Array {
    return UnbondingRecord.encode(message).finish();
  },
  toProtoMsg(message: UnbondingRecord): UnbondingRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.UnbondingRecord",
      value: UnbondingRecord.encode(message).finish()
    };
  }
};
function createBaseRedelegationRecord(): RedelegationRecord {
  return {
    chainId: "",
    epochNumber: BigInt(0),
    source: "",
    destination: "",
    _amount: BigInt(0),
    completionTime: Timestamp.fromPartial({}),
    amount: ""
  };
}
export const RedelegationRecord = {
  typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
  encode(message: RedelegationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.epochNumber !== BigInt(0)) {
      writer.uint32(16).int64(message.epochNumber);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(34).string(message.destination);
    }
    if (message._amount !== BigInt(0)) {
      writer.uint32(40).int64(message._amount);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(message.completionTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): RedelegationRecord {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      epochNumber: isSet(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
      source: isSet(object.source) ? String(object.source) : "",
      destination: isSet(object.destination) ? String(object.destination) : "",
      _amount: isSet(object._amount) ? BigInt(object._amount.toString()) : BigInt(0),
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<RedelegationRecord>): RedelegationRecord {
    const message = createBaseRedelegationRecord();
    message.chainId = object.chainId ?? "";
    message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
    message.source = object.source ?? "";
    message.destination = object.destination ?? "";
    message._amount = object._amount !== undefined && object._amount !== null ? BigInt(object._amount.toString()) : BigInt(0);
    message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: RedelegationRecordAmino): RedelegationRecord {
    const message = createBaseRedelegationRecord();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.epoch_number !== undefined && object.epoch_number !== null) {
      message.epochNumber = BigInt(object.epoch_number);
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object._amount !== undefined && object._amount !== null) {
      message._amount = BigInt(object._amount);
    }
    if (object.completion_time !== undefined && object.completion_time !== null) {
      message.completionTime = Timestamp.fromAmino(object.completion_time);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: RedelegationRecord): RedelegationRecordAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
    obj.source = message.source;
    obj.destination = message.destination;
    obj._amount = message._amount ? message._amount.toString() : undefined;
    obj.completion_time = message.completionTime ? Timestamp.toAmino(message.completionTime) : undefined;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: RedelegationRecordAminoMsg): RedelegationRecord {
    return RedelegationRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: RedelegationRecordProtoMsg): RedelegationRecord {
    return RedelegationRecord.decode(message.value);
  },
  toProto(message: RedelegationRecord): Uint8Array {
    return RedelegationRecord.encode(message).finish();
  },
  toProtoMsg(message: RedelegationRecord): RedelegationRecordProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.RedelegationRecord",
      value: RedelegationRecord.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    valoperAddress: "",
    commissionRate: "",
    delegatorShares: "",
    votingPower: "",
    score: "",
    status: "",
    jailed: false,
    tombstoned: false,
    jailedSince: Timestamp.fromPartial({}),
    validatorBondShares: "",
    liquidShares: ""
  };
}
export const Validator = {
  typeUrl: "/quicksilver.interchainstaking.v1.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.commissionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.commissionRate, 18).atomics);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.votingPower !== "") {
      writer.uint32(34).string(message.votingPower);
    }
    if (message.score !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.score, 18).atomics);
    }
    if (message.status !== "") {
      writer.uint32(50).string(message.status);
    }
    if (message.jailed === true) {
      writer.uint32(56).bool(message.jailed);
    }
    if (message.tombstoned === true) {
      writer.uint32(64).bool(message.tombstoned);
    }
    if (message.jailedSince !== undefined) {
      Timestamp.encode(message.jailedSince, writer.uint32(74).fork()).ldelim();
    }
    if (message.validatorBondShares !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.validatorBondShares, 18).atomics);
    }
    if (message.liquidShares !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.liquidShares, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      valoperAddress: isSet(object.valoperAddress) ? String(object.valoperAddress) : "",
      commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      votingPower: isSet(object.votingPower) ? String(object.votingPower) : "",
      score: isSet(object.score) ? String(object.score) : "",
      status: isSet(object.status) ? String(object.status) : "",
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
      jailedSince: isSet(object.jailedSince) ? fromJsonTimestamp(object.jailedSince) : undefined,
      validatorBondShares: isSet(object.validatorBondShares) ? String(object.validatorBondShares) : "",
      liquidShares: isSet(object.liquidShares) ? String(object.liquidShares) : ""
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.valoperAddress = object.valoperAddress ?? "";
    message.commissionRate = object.commissionRate ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.votingPower = object.votingPower ?? "";
    message.score = object.score ?? "";
    message.status = object.status ?? "";
    message.jailed = object.jailed ?? false;
    message.tombstoned = object.tombstoned ?? false;
    message.jailedSince = object.jailedSince !== undefined && object.jailedSince !== null ? Timestamp.fromPartial(object.jailedSince) : undefined;
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.valoper_address !== undefined && object.valoper_address !== null) {
      message.valoperAddress = object.valoper_address;
    }
    if (object.commission_rate !== undefined && object.commission_rate !== null) {
      message.commissionRate = object.commission_rate;
    }
    if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
      message.delegatorShares = object.delegator_shares;
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = object.voting_power;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.tombstoned !== undefined && object.tombstoned !== null) {
      message.tombstoned = object.tombstoned;
    }
    if (object.jailed_since !== undefined && object.jailed_since !== null) {
      message.jailedSince = Timestamp.fromAmino(object.jailed_since);
    }
    if (object.validator_bond_shares !== undefined && object.validator_bond_shares !== null) {
      message.validatorBondShares = object.validator_bond_shares;
    }
    if (object.liquid_shares !== undefined && object.liquid_shares !== null) {
      message.liquidShares = object.liquid_shares;
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.valoper_address = message.valoperAddress;
    obj.commission_rate = message.commissionRate;
    obj.delegator_shares = message.delegatorShares;
    obj.voting_power = message.votingPower;
    obj.score = message.score;
    obj.status = message.status;
    obj.jailed = message.jailed;
    obj.tombstoned = message.tombstoned;
    obj.jailed_since = message.jailedSince ? Timestamp.toAmino(message.jailedSince) : undefined;
    obj.validator_bond_shares = message.validatorBondShares;
    obj.liquid_shares = message.liquidShares;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseDelegatorIntent(): DelegatorIntent {
  return {
    delegator: "",
    intents: []
  };
}
export const DelegatorIntent = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
  encode(message: DelegatorIntent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.intents) {
      ValidatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DelegatorIntent {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => ValidatorIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DelegatorIntent>): DelegatorIntent {
    const message = createBaseDelegatorIntent();
    message.delegator = object.delegator ?? "";
    message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DelegatorIntentAmino): DelegatorIntent {
    const message = createBaseDelegatorIntent();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.intents = object.intents?.map(e => ValidatorIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DelegatorIntent): DelegatorIntentAmino {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? ValidatorIntent.toAmino(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegatorIntentAminoMsg): DelegatorIntent {
    return DelegatorIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorIntentProtoMsg): DelegatorIntent {
    return DelegatorIntent.decode(message.value);
  },
  toProto(message: DelegatorIntent): Uint8Array {
    return DelegatorIntent.encode(message).finish();
  },
  toProtoMsg(message: DelegatorIntent): DelegatorIntentProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntent",
      value: DelegatorIntent.encode(message).finish()
    };
  }
};
function createBaseValidatorIntent(): ValidatorIntent {
  return {
    valoperAddress: "",
    weight: ""
  };
}
export const ValidatorIntent = {
  typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
  encode(message: ValidatorIntent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valoperAddress !== "") {
      writer.uint32(10).string(message.valoperAddress);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): ValidatorIntent {
    return {
      valoperAddress: isSet(object.valoper_address) ? String(object.valoper_address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  fromPartial(object: Partial<ValidatorIntent>): ValidatorIntent {
    const message = createBaseValidatorIntent();
    message.valoperAddress = object.valoperAddress ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: ValidatorIntentAmino): ValidatorIntent {
    const message = createBaseValidatorIntent();
    if (object.valoper_address !== undefined && object.valoper_address !== null) {
      message.valoperAddress = object.valoper_address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: ValidatorIntent): ValidatorIntentAmino {
    const obj: any = {};
    obj.valoper_address = message.valoperAddress;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: ValidatorIntentAminoMsg): ValidatorIntent {
    return ValidatorIntent.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorIntentProtoMsg): ValidatorIntent {
    return ValidatorIntent.decode(message.value);
  },
  toProto(message: ValidatorIntent): Uint8Array {
    return ValidatorIntent.encode(message).finish();
  },
  toProtoMsg(message: ValidatorIntent): ValidatorIntentProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.ValidatorIntent",
      value: ValidatorIntent.encode(message).finish()
    };
  }
};
function createBaseDelegation(): Delegation {
  return {
    delegationAddress: "",
    validatorAddress: "",
    amount: Coin.fromPartial({}),
    height: BigInt(0),
    redelegationEnd: BigInt(0)
  };
}
export const Delegation = {
  typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
  encode(message: Delegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegationAddress !== "") {
      writer.uint32(10).string(message.delegationAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.redelegationEnd !== BigInt(0)) {
      writer.uint32(40).int64(message.redelegationEnd);
    }
    return writer;
  },
  fromJSON(object: any): Delegation {
    return {
      delegationAddress: isSet(object.delegationAddress) ? String(object.delegationAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      redelegationEnd: isSet(object.redelegationEnd) ? BigInt(object.redelegationEnd.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegationAddress = object.delegationAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.redelegationEnd = object.redelegationEnd !== undefined && object.redelegationEnd !== null ? BigInt(object.redelegationEnd.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: DelegationAmino): Delegation {
    const message = createBaseDelegation();
    if (object.delegation_address !== undefined && object.delegation_address !== null) {
      message.delegationAddress = object.delegation_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.redelegation_end !== undefined && object.redelegation_end !== null) {
      message.redelegationEnd = BigInt(object.redelegation_end);
    }
    return message;
  },
  toAmino(message: Delegation): DelegationAmino {
    const obj: any = {};
    obj.delegation_address = message.delegationAddress;
    obj.validator_address = message.validatorAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.redelegation_end = message.redelegationEnd ? message.redelegationEnd.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegationAminoMsg): Delegation {
    return Delegation.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegationProtoMsg): Delegation {
    return Delegation.decode(message.value);
  },
  toProto(message: Delegation): Uint8Array {
    return Delegation.encode(message).finish();
  },
  toProtoMsg(message: Delegation): DelegationProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Delegation",
      value: Delegation.encode(message).finish()
    };
  }
};
function createBasePortConnectionTuple(): PortConnectionTuple {
  return {
    connectionId: "",
    portId: ""
  };
}
export const PortConnectionTuple = {
  typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
  encode(message: PortConnectionTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  fromJSON(object: any): PortConnectionTuple {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      portId: isSet(object.portId) ? String(object.portId) : ""
    };
  },
  fromPartial(object: Partial<PortConnectionTuple>): PortConnectionTuple {
    const message = createBasePortConnectionTuple();
    message.connectionId = object.connectionId ?? "";
    message.portId = object.portId ?? "";
    return message;
  },
  fromAmino(object: PortConnectionTupleAmino): PortConnectionTuple {
    const message = createBasePortConnectionTuple();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    return message;
  },
  toAmino(message: PortConnectionTuple): PortConnectionTupleAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.port_id = message.portId;
    return obj;
  },
  fromAminoMsg(object: PortConnectionTupleAminoMsg): PortConnectionTuple {
    return PortConnectionTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: PortConnectionTupleProtoMsg): PortConnectionTuple {
    return PortConnectionTuple.decode(message.value);
  },
  toProto(message: PortConnectionTuple): Uint8Array {
    return PortConnectionTuple.encode(message).finish();
  },
  toProtoMsg(message: PortConnectionTuple): PortConnectionTupleProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.PortConnectionTuple",
      value: PortConnectionTuple.encode(message).finish()
    };
  }
};
function createBaseReceipt(): Receipt {
  return {
    chainId: "",
    sender: "",
    txhash: "",
    amount: [],
    firstSeen: undefined,
    completed: undefined
  };
}
export const Receipt = {
  typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
  encode(message: Receipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txhash !== "") {
      writer.uint32(26).string(message.txhash);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.firstSeen !== undefined) {
      Timestamp.encode(message.firstSeen, writer.uint32(42).fork()).ldelim();
    }
    if (message.completed !== undefined) {
      Timestamp.encode(message.completed, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Receipt {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      txhash: isSet(object.txhash) ? String(object.txhash) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      firstSeen: isSet(object.firstSeen) ? fromJsonTimestamp(object.firstSeen) : undefined,
      completed: isSet(object.completed) ? fromJsonTimestamp(object.completed) : undefined
    };
  },
  fromPartial(object: Partial<Receipt>): Receipt {
    const message = createBaseReceipt();
    message.chainId = object.chainId ?? "";
    message.sender = object.sender ?? "";
    message.txhash = object.txhash ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.firstSeen = object.firstSeen !== undefined && object.firstSeen !== null ? Timestamp.fromPartial(object.firstSeen) : undefined;
    message.completed = object.completed !== undefined && object.completed !== null ? Timestamp.fromPartial(object.completed) : undefined;
    return message;
  },
  fromAmino(object: ReceiptAmino): Receipt {
    const message = createBaseReceipt();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.txhash !== undefined && object.txhash !== null) {
      message.txhash = object.txhash;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.first_seen !== undefined && object.first_seen !== null) {
      message.firstSeen = Timestamp.fromAmino(object.first_seen);
    }
    if (object.completed !== undefined && object.completed !== null) {
      message.completed = Timestamp.fromAmino(object.completed);
    }
    return message;
  },
  toAmino(message: Receipt): ReceiptAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.sender = message.sender;
    obj.txhash = message.txhash;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.first_seen = message.firstSeen ? Timestamp.toAmino(message.firstSeen) : undefined;
    obj.completed = message.completed ? Timestamp.toAmino(message.completed) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReceiptAminoMsg): Receipt {
    return Receipt.fromAmino(object.value);
  },
  fromProtoMsg(message: ReceiptProtoMsg): Receipt {
    return Receipt.decode(message.value);
  },
  toProto(message: Receipt): Uint8Array {
    return Receipt.encode(message).finish();
  },
  toProtoMsg(message: Receipt): ReceiptProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Receipt",
      value: Receipt.encode(message).finish()
    };
  }
};