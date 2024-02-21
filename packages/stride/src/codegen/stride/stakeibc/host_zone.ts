import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface HostZone {
  chainId: string;
  bech32prefix: string;
  connectionId: string;
  transferChannelId: string;
  /** ibc denom on stride */
  ibcDenom: string;
  /** native denom on host zone */
  hostDenom: string;
  unbondingPeriod: bigint;
  validators: Validator[];
  depositAddress: string;
  withdrawalIcaAddress: string;
  feeIcaAddress: string;
  delegationIcaAddress: string;
  redemptionIcaAddress: string;
  communityPoolDepositIcaAddress: string;
  communityPoolReturnIcaAddress: string;
  communityPoolStakeHoldingAddress: string;
  communityPoolRedeemHoldingAddress: string;
  totalDelegations: string;
  lastRedemptionRate: string;
  redemptionRate: string;
  minRedemptionRate: string;
  maxRedemptionRate: string;
  minInnerRedemptionRate: string;
  maxInnerRedemptionRate: string;
  lsmLiquidStakeEnabled: boolean;
  halted: boolean;
}
export interface HostZoneProtoMsg {
  typeUrl: "/stride.stakeibc.HostZone";
  value: Uint8Array;
}
export interface HostZoneAmino {
  chain_id?: string;
  bech32prefix?: string;
  connection_id?: string;
  transfer_channel_id?: string;
  /** ibc denom on stride */
  ibc_denom?: string;
  /** native denom on host zone */
  host_denom?: string;
  unbonding_period?: string;
  validators?: ValidatorAmino[];
  deposit_address?: string;
  withdrawal_ica_address?: string;
  fee_ica_address?: string;
  delegation_ica_address?: string;
  redemption_ica_address?: string;
  community_pool_deposit_ica_address?: string;
  community_pool_return_ica_address?: string;
  community_pool_stake_holding_address?: string;
  community_pool_redeem_holding_address?: string;
  total_delegations?: string;
  last_redemption_rate?: string;
  redemption_rate?: string;
  min_redemption_rate?: string;
  max_redemption_rate?: string;
  min_inner_redemption_rate?: string;
  max_inner_redemption_rate?: string;
  lsm_liquid_stake_enabled?: boolean;
  halted?: boolean;
}
export interface HostZoneAminoMsg {
  type: "/stride.stakeibc.HostZone";
  value: HostZoneAmino;
}
export interface HostZoneSDKType {
  chain_id: string;
  bech32prefix: string;
  connection_id: string;
  transfer_channel_id: string;
  ibc_denom: string;
  host_denom: string;
  unbonding_period: bigint;
  validators: ValidatorSDKType[];
  deposit_address: string;
  withdrawal_ica_address: string;
  fee_ica_address: string;
  delegation_ica_address: string;
  redemption_ica_address: string;
  community_pool_deposit_ica_address: string;
  community_pool_return_ica_address: string;
  community_pool_stake_holding_address: string;
  community_pool_redeem_holding_address: string;
  total_delegations: string;
  last_redemption_rate: string;
  redemption_rate: string;
  min_redemption_rate: string;
  max_redemption_rate: string;
  min_inner_redemption_rate: string;
  max_inner_redemption_rate: string;
  lsm_liquid_stake_enabled: boolean;
  halted: boolean;
}
function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    bech32prefix: "",
    connectionId: "",
    transferChannelId: "",
    ibcDenom: "",
    hostDenom: "",
    unbondingPeriod: BigInt(0),
    validators: [],
    depositAddress: "",
    withdrawalIcaAddress: "",
    feeIcaAddress: "",
    delegationIcaAddress: "",
    redemptionIcaAddress: "",
    communityPoolDepositIcaAddress: "",
    communityPoolReturnIcaAddress: "",
    communityPoolStakeHoldingAddress: "",
    communityPoolRedeemHoldingAddress: "",
    totalDelegations: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    minRedemptionRate: "",
    maxRedemptionRate: "",
    minInnerRedemptionRate: "",
    maxInnerRedemptionRate: "",
    lsmLiquidStakeEnabled: false,
    halted: false
  };
}
export const HostZone = {
  typeUrl: "/stride.stakeibc.HostZone",
  encode(message: HostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }
    if (message.unbondingPeriod !== BigInt(0)) {
      writer.uint32(208).uint64(message.unbondingPeriod);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.depositAddress !== "") {
      writer.uint32(146).string(message.depositAddress);
    }
    if (message.withdrawalIcaAddress !== "") {
      writer.uint32(178).string(message.withdrawalIcaAddress);
    }
    if (message.feeIcaAddress !== "") {
      writer.uint32(186).string(message.feeIcaAddress);
    }
    if (message.delegationIcaAddress !== "") {
      writer.uint32(194).string(message.delegationIcaAddress);
    }
    if (message.redemptionIcaAddress !== "") {
      writer.uint32(202).string(message.redemptionIcaAddress);
    }
    if (message.communityPoolDepositIcaAddress !== "") {
      writer.uint32(242).string(message.communityPoolDepositIcaAddress);
    }
    if (message.communityPoolReturnIcaAddress !== "") {
      writer.uint32(250).string(message.communityPoolReturnIcaAddress);
    }
    if (message.communityPoolStakeHoldingAddress !== "") {
      writer.uint32(258).string(message.communityPoolStakeHoldingAddress);
    }
    if (message.communityPoolRedeemHoldingAddress !== "") {
      writer.uint32(266).string(message.communityPoolRedeemHoldingAddress);
    }
    if (message.totalDelegations !== "") {
      writer.uint32(106).string(message.totalDelegations);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.lastRedemptionRate, 18).atomics);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    if (message.minInnerRedemptionRate !== "") {
      writer.uint32(226).string(Decimal.fromUserInput(message.minInnerRedemptionRate, 18).atomics);
    }
    if (message.maxInnerRedemptionRate !== "") {
      writer.uint32(234).string(Decimal.fromUserInput(message.maxInnerRedemptionRate, 18).atomics);
    }
    if (message.lsmLiquidStakeEnabled === true) {
      writer.uint32(216).bool(message.lsmLiquidStakeEnabled);
    }
    if (message.halted === true) {
      writer.uint32(152).bool(message.halted);
    }
    return writer;
  },
  fromJSON(object: any): HostZone {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      unbondingPeriod: isSet(object.unbondingPeriod) ? BigInt(object.unbondingPeriod.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      withdrawalIcaAddress: isSet(object.withdrawalIcaAddress) ? String(object.withdrawalIcaAddress) : "",
      feeIcaAddress: isSet(object.feeIcaAddress) ? String(object.feeIcaAddress) : "",
      delegationIcaAddress: isSet(object.delegationIcaAddress) ? String(object.delegationIcaAddress) : "",
      redemptionIcaAddress: isSet(object.redemptionIcaAddress) ? String(object.redemptionIcaAddress) : "",
      communityPoolDepositIcaAddress: isSet(object.communityPoolDepositIcaAddress) ? String(object.communityPoolDepositIcaAddress) : "",
      communityPoolReturnIcaAddress: isSet(object.communityPoolReturnIcaAddress) ? String(object.communityPoolReturnIcaAddress) : "",
      communityPoolStakeHoldingAddress: isSet(object.communityPoolStakeHoldingAddress) ? String(object.communityPoolStakeHoldingAddress) : "",
      communityPoolRedeemHoldingAddress: isSet(object.communityPoolRedeemHoldingAddress) ? String(object.communityPoolRedeemHoldingAddress) : "",
      totalDelegations: isSet(object.totalDelegations) ? String(object.totalDelegations) : "",
      lastRedemptionRate: isSet(object.lastRedemptionRate) ? String(object.lastRedemptionRate) : "",
      redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
      minRedemptionRate: isSet(object.minRedemptionRate) ? String(object.minRedemptionRate) : "",
      maxRedemptionRate: isSet(object.maxRedemptionRate) ? String(object.maxRedemptionRate) : "",
      minInnerRedemptionRate: isSet(object.minInnerRedemptionRate) ? String(object.minInnerRedemptionRate) : "",
      maxInnerRedemptionRate: isSet(object.maxInnerRedemptionRate) ? String(object.maxInnerRedemptionRate) : "",
      lsmLiquidStakeEnabled: isSet(object.lsmLiquidStakeEnabled) ? Boolean(object.lsmLiquidStakeEnabled) : false,
      halted: isSet(object.halted) ? Boolean(object.halted) : false
    };
  },
  fromPartial(object: Partial<HostZone>): HostZone {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.connectionId = object.connectionId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? BigInt(object.unbondingPeriod.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.depositAddress = object.depositAddress ?? "";
    message.withdrawalIcaAddress = object.withdrawalIcaAddress ?? "";
    message.feeIcaAddress = object.feeIcaAddress ?? "";
    message.delegationIcaAddress = object.delegationIcaAddress ?? "";
    message.redemptionIcaAddress = object.redemptionIcaAddress ?? "";
    message.communityPoolDepositIcaAddress = object.communityPoolDepositIcaAddress ?? "";
    message.communityPoolReturnIcaAddress = object.communityPoolReturnIcaAddress ?? "";
    message.communityPoolStakeHoldingAddress = object.communityPoolStakeHoldingAddress ?? "";
    message.communityPoolRedeemHoldingAddress = object.communityPoolRedeemHoldingAddress ?? "";
    message.totalDelegations = object.totalDelegations ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    message.minInnerRedemptionRate = object.minInnerRedemptionRate ?? "";
    message.maxInnerRedemptionRate = object.maxInnerRedemptionRate ?? "";
    message.lsmLiquidStakeEnabled = object.lsmLiquidStakeEnabled ?? false;
    message.halted = object.halted ?? false;
    return message;
  },
  fromAmino(object: HostZoneAmino): HostZone {
    const message = createBaseHostZone();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.bech32prefix !== undefined && object.bech32prefix !== null) {
      message.bech32prefix = object.bech32prefix;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.transfer_channel_id !== undefined && object.transfer_channel_id !== null) {
      message.transferChannelId = object.transfer_channel_id;
    }
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.host_denom !== undefined && object.host_denom !== null) {
      message.hostDenom = object.host_denom;
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = BigInt(object.unbonding_period);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.deposit_address !== undefined && object.deposit_address !== null) {
      message.depositAddress = object.deposit_address;
    }
    if (object.withdrawal_ica_address !== undefined && object.withdrawal_ica_address !== null) {
      message.withdrawalIcaAddress = object.withdrawal_ica_address;
    }
    if (object.fee_ica_address !== undefined && object.fee_ica_address !== null) {
      message.feeIcaAddress = object.fee_ica_address;
    }
    if (object.delegation_ica_address !== undefined && object.delegation_ica_address !== null) {
      message.delegationIcaAddress = object.delegation_ica_address;
    }
    if (object.redemption_ica_address !== undefined && object.redemption_ica_address !== null) {
      message.redemptionIcaAddress = object.redemption_ica_address;
    }
    if (object.community_pool_deposit_ica_address !== undefined && object.community_pool_deposit_ica_address !== null) {
      message.communityPoolDepositIcaAddress = object.community_pool_deposit_ica_address;
    }
    if (object.community_pool_return_ica_address !== undefined && object.community_pool_return_ica_address !== null) {
      message.communityPoolReturnIcaAddress = object.community_pool_return_ica_address;
    }
    if (object.community_pool_stake_holding_address !== undefined && object.community_pool_stake_holding_address !== null) {
      message.communityPoolStakeHoldingAddress = object.community_pool_stake_holding_address;
    }
    if (object.community_pool_redeem_holding_address !== undefined && object.community_pool_redeem_holding_address !== null) {
      message.communityPoolRedeemHoldingAddress = object.community_pool_redeem_holding_address;
    }
    if (object.total_delegations !== undefined && object.total_delegations !== null) {
      message.totalDelegations = object.total_delegations;
    }
    if (object.last_redemption_rate !== undefined && object.last_redemption_rate !== null) {
      message.lastRedemptionRate = object.last_redemption_rate;
    }
    if (object.redemption_rate !== undefined && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.min_redemption_rate !== undefined && object.min_redemption_rate !== null) {
      message.minRedemptionRate = object.min_redemption_rate;
    }
    if (object.max_redemption_rate !== undefined && object.max_redemption_rate !== null) {
      message.maxRedemptionRate = object.max_redemption_rate;
    }
    if (object.min_inner_redemption_rate !== undefined && object.min_inner_redemption_rate !== null) {
      message.minInnerRedemptionRate = object.min_inner_redemption_rate;
    }
    if (object.max_inner_redemption_rate !== undefined && object.max_inner_redemption_rate !== null) {
      message.maxInnerRedemptionRate = object.max_inner_redemption_rate;
    }
    if (object.lsm_liquid_stake_enabled !== undefined && object.lsm_liquid_stake_enabled !== null) {
      message.lsmLiquidStakeEnabled = object.lsm_liquid_stake_enabled;
    }
    if (object.halted !== undefined && object.halted !== null) {
      message.halted = object.halted;
    }
    return message;
  },
  toAmino(message: HostZone): HostZoneAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.bech32prefix = message.bech32prefix;
    obj.connection_id = message.connectionId;
    obj.transfer_channel_id = message.transferChannelId;
    obj.ibc_denom = message.ibcDenom;
    obj.host_denom = message.hostDenom;
    obj.unbonding_period = message.unbondingPeriod ? message.unbondingPeriod.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.deposit_address = message.depositAddress;
    obj.withdrawal_ica_address = message.withdrawalIcaAddress;
    obj.fee_ica_address = message.feeIcaAddress;
    obj.delegation_ica_address = message.delegationIcaAddress;
    obj.redemption_ica_address = message.redemptionIcaAddress;
    obj.community_pool_deposit_ica_address = message.communityPoolDepositIcaAddress;
    obj.community_pool_return_ica_address = message.communityPoolReturnIcaAddress;
    obj.community_pool_stake_holding_address = message.communityPoolStakeHoldingAddress;
    obj.community_pool_redeem_holding_address = message.communityPoolRedeemHoldingAddress;
    obj.total_delegations = message.totalDelegations;
    obj.last_redemption_rate = message.lastRedemptionRate;
    obj.redemption_rate = message.redemptionRate;
    obj.min_redemption_rate = message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate;
    obj.min_inner_redemption_rate = message.minInnerRedemptionRate;
    obj.max_inner_redemption_rate = message.maxInnerRedemptionRate;
    obj.lsm_liquid_stake_enabled = message.lsmLiquidStakeEnabled;
    obj.halted = message.halted;
    return obj;
  },
  fromAminoMsg(object: HostZoneAminoMsg): HostZone {
    return HostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: HostZoneProtoMsg): HostZone {
    return HostZone.decode(message.value);
  },
  toProto(message: HostZone): Uint8Array {
    return HostZone.encode(message).finish();
  },
  toProtoMsg(message: HostZone): HostZoneProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.HostZone",
      value: HostZone.encode(message).finish()
    };
  }
};