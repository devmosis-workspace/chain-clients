import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { ICAAccount, ICAAccountAmino, ICAAccountSDKType } from "./ica_account";
import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** next id: 22 */
export interface HostZone {
  chainId: string;
  connectionId: string;
  bech32prefix: string;
  transferChannelId: string;
  validators: Validator[];
  blacklistedValidators: Validator[];
  withdrawalAccount: ICAAccount;
  feeAccount: ICAAccount;
  delegationAccount: ICAAccount;
  redemptionAccount: ICAAccount;
  /** ibc denom on stride */
  ibcDenom: string;
  /** native denom on host zone */
  hostDenom: string;
  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption
   * rates then calculate a TWARR?
   */
  lastRedemptionRate: string;
  redemptionRate: string;
  /** stores how many days we should wait before issuing unbondings */
  unbondingFrequency: bigint;
  /** TODO(TEST-101) int to dec */
  stakedBal: string;
  address: string;
  halted: boolean;
  minRedemptionRate: string;
  maxRedemptionRate: string;
}
export interface HostZoneProtoMsg {
  typeUrl: "/stride.stakeibc.HostZone";
  value: Uint8Array;
}
/** next id: 22 */
export interface HostZoneAmino {
  chain_id: string;
  connection_id: string;
  bech32prefix: string;
  transfer_channel_id: string;
  validators: ValidatorAmino[];
  blacklisted_validators: ValidatorAmino[];
  withdrawal_account?: ICAAccountAmino;
  fee_account?: ICAAccountAmino;
  delegation_account?: ICAAccountAmino;
  redemption_account?: ICAAccountAmino;
  /** ibc denom on stride */
  ibc_denom: string;
  /** native denom on host zone */
  host_denom: string;
  /**
   * TODO(TEST-68): Should we make this an array and store the last n redemption
   * rates then calculate a TWARR?
   */
  last_redemption_rate: string;
  redemption_rate: string;
  /** stores how many days we should wait before issuing unbondings */
  unbonding_frequency: string;
  /** TODO(TEST-101) int to dec */
  staked_bal: string;
  address: string;
  halted: boolean;
  min_redemption_rate: string;
  max_redemption_rate: string;
}
export interface HostZoneAminoMsg {
  type: "/stride.stakeibc.HostZone";
  value: HostZoneAmino;
}
/** next id: 22 */
export interface HostZoneSDKType {
  chain_id: string;
  connection_id: string;
  bech32prefix: string;
  transfer_channel_id: string;
  validators: ValidatorSDKType[];
  blacklisted_validators: ValidatorSDKType[];
  withdrawal_account: ICAAccountSDKType;
  fee_account: ICAAccountSDKType;
  delegation_account: ICAAccountSDKType;
  redemption_account: ICAAccountSDKType;
  ibc_denom: string;
  host_denom: string;
  last_redemption_rate: string;
  redemption_rate: string;
  unbonding_frequency: bigint;
  staked_bal: string;
  address: string;
  halted: boolean;
  min_redemption_rate: string;
  max_redemption_rate: string;
}
function createBaseHostZone(): HostZone {
  return {
    chainId: "",
    connectionId: "",
    bech32prefix: "",
    transferChannelId: "",
    validators: [],
    blacklistedValidators: [],
    withdrawalAccount: ICAAccount.fromPartial({}),
    feeAccount: ICAAccount.fromPartial({}),
    delegationAccount: ICAAccount.fromPartial({}),
    redemptionAccount: ICAAccount.fromPartial({}),
    ibcDenom: "",
    hostDenom: "",
    lastRedemptionRate: "",
    redemptionRate: "",
    unbondingFrequency: BigInt(0),
    stakedBal: "",
    address: "",
    halted: false,
    minRedemptionRate: "",
    maxRedemptionRate: ""
  };
}
export const HostZone = {
  typeUrl: "/stride.stakeibc.HostZone",
  encode(message: HostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.bech32prefix !== "") {
      writer.uint32(138).string(message.bech32prefix);
    }
    if (message.transferChannelId !== "") {
      writer.uint32(98).string(message.transferChannelId);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.blacklistedValidators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.withdrawalAccount !== undefined) {
      ICAAccount.encode(message.withdrawalAccount, writer.uint32(42).fork()).ldelim();
    }
    if (message.feeAccount !== undefined) {
      ICAAccount.encode(message.feeAccount, writer.uint32(50).fork()).ldelim();
    }
    if (message.delegationAccount !== undefined) {
      ICAAccount.encode(message.delegationAccount, writer.uint32(58).fork()).ldelim();
    }
    if (message.redemptionAccount !== undefined) {
      ICAAccount.encode(message.redemptionAccount, writer.uint32(130).fork()).ldelim();
    }
    if (message.ibcDenom !== "") {
      writer.uint32(66).string(message.ibcDenom);
    }
    if (message.hostDenom !== "") {
      writer.uint32(74).string(message.hostDenom);
    }
    if (message.lastRedemptionRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.lastRedemptionRate, 18).atomics);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.unbondingFrequency !== BigInt(0)) {
      writer.uint32(112).uint64(message.unbondingFrequency);
    }
    if (message.stakedBal !== "") {
      writer.uint32(106).string(message.stakedBal);
    }
    if (message.address !== "") {
      writer.uint32(146).string(message.address);
    }
    if (message.halted === true) {
      writer.uint32(152).bool(message.halted);
    }
    if (message.minRedemptionRate !== "") {
      writer.uint32(162).string(Decimal.fromUserInput(message.minRedemptionRate, 18).atomics);
    }
    if (message.maxRedemptionRate !== "") {
      writer.uint32(170).string(Decimal.fromUserInput(message.maxRedemptionRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): HostZone {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      bech32prefix: isSet(object.bech32prefix) ? String(object.bech32prefix) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      blacklistedValidators: Array.isArray(object?.blacklistedValidators) ? object.blacklistedValidators.map((e: any) => Validator.fromJSON(e)) : [],
      withdrawalAccount: isSet(object.withdrawalAccount) ? ICAAccount.fromJSON(object.withdrawalAccount) : undefined,
      feeAccount: isSet(object.feeAccount) ? ICAAccount.fromJSON(object.feeAccount) : undefined,
      delegationAccount: isSet(object.delegationAccount) ? ICAAccount.fromJSON(object.delegationAccount) : undefined,
      redemptionAccount: isSet(object.redemptionAccount) ? ICAAccount.fromJSON(object.redemptionAccount) : undefined,
      ibcDenom: isSet(object.ibcDenom) ? String(object.ibcDenom) : "",
      hostDenom: isSet(object.hostDenom) ? String(object.hostDenom) : "",
      lastRedemptionRate: isSet(object.lastRedemptionRate) ? String(object.lastRedemptionRate) : "",
      redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
      unbondingFrequency: isSet(object.unbondingFrequency) ? BigInt(object.unbondingFrequency.toString()) : BigInt(0),
      stakedBal: isSet(object.stakedBal) ? String(object.stakedBal) : "",
      address: isSet(object.address) ? String(object.address) : "",
      halted: isSet(object.halted) ? Boolean(object.halted) : false,
      minRedemptionRate: isSet(object.minRedemptionRate) ? String(object.minRedemptionRate) : "",
      maxRedemptionRate: isSet(object.maxRedemptionRate) ? String(object.maxRedemptionRate) : ""
    };
  },
  fromPartial(object: Partial<HostZone>): HostZone {
    const message = createBaseHostZone();
    message.chainId = object.chainId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.bech32prefix = object.bech32prefix ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.blacklistedValidators = object.blacklistedValidators?.map(e => Validator.fromPartial(e)) || [];
    message.withdrawalAccount = object.withdrawalAccount !== undefined && object.withdrawalAccount !== null ? ICAAccount.fromPartial(object.withdrawalAccount) : undefined;
    message.feeAccount = object.feeAccount !== undefined && object.feeAccount !== null ? ICAAccount.fromPartial(object.feeAccount) : undefined;
    message.delegationAccount = object.delegationAccount !== undefined && object.delegationAccount !== null ? ICAAccount.fromPartial(object.delegationAccount) : undefined;
    message.redemptionAccount = object.redemptionAccount !== undefined && object.redemptionAccount !== null ? ICAAccount.fromPartial(object.redemptionAccount) : undefined;
    message.ibcDenom = object.ibcDenom ?? "";
    message.hostDenom = object.hostDenom ?? "";
    message.lastRedemptionRate = object.lastRedemptionRate ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.unbondingFrequency = object.unbondingFrequency !== undefined && object.unbondingFrequency !== null ? BigInt(object.unbondingFrequency.toString()) : BigInt(0);
    message.stakedBal = object.stakedBal ?? "";
    message.address = object.address ?? "";
    message.halted = object.halted ?? false;
    message.minRedemptionRate = object.minRedemptionRate ?? "";
    message.maxRedemptionRate = object.maxRedemptionRate ?? "";
    return message;
  },
  fromAmino(object: HostZoneAmino): HostZone {
    return {
      chainId: object.chain_id,
      connectionId: object.connection_id,
      bech32prefix: object.bech32prefix,
      transferChannelId: object.transfer_channel_id,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      blacklistedValidators: Array.isArray(object?.blacklisted_validators) ? object.blacklisted_validators.map((e: any) => Validator.fromAmino(e)) : [],
      withdrawalAccount: object?.withdrawal_account ? ICAAccount.fromAmino(object.withdrawal_account) : undefined,
      feeAccount: object?.fee_account ? ICAAccount.fromAmino(object.fee_account) : undefined,
      delegationAccount: object?.delegation_account ? ICAAccount.fromAmino(object.delegation_account) : undefined,
      redemptionAccount: object?.redemption_account ? ICAAccount.fromAmino(object.redemption_account) : undefined,
      ibcDenom: object.ibc_denom,
      hostDenom: object.host_denom,
      lastRedemptionRate: object.last_redemption_rate,
      redemptionRate: object.redemption_rate,
      unbondingFrequency: BigInt(object.unbonding_frequency),
      stakedBal: object.staked_bal,
      address: object.address,
      halted: object.halted,
      minRedemptionRate: object.min_redemption_rate,
      maxRedemptionRate: object.max_redemption_rate
    };
  },
  toAmino(message: HostZone): HostZoneAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.connection_id = message.connectionId;
    obj.bech32prefix = message.bech32prefix;
    obj.transfer_channel_id = message.transferChannelId;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.blacklistedValidators) {
      obj.blacklisted_validators = message.blacklistedValidators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.blacklisted_validators = [];
    }
    obj.withdrawal_account = message.withdrawalAccount ? ICAAccount.toAmino(message.withdrawalAccount) : undefined;
    obj.fee_account = message.feeAccount ? ICAAccount.toAmino(message.feeAccount) : undefined;
    obj.delegation_account = message.delegationAccount ? ICAAccount.toAmino(message.delegationAccount) : undefined;
    obj.redemption_account = message.redemptionAccount ? ICAAccount.toAmino(message.redemptionAccount) : undefined;
    obj.ibc_denom = message.ibcDenom;
    obj.host_denom = message.hostDenom;
    obj.last_redemption_rate = message.lastRedemptionRate;
    obj.redemption_rate = message.redemptionRate;
    obj.unbonding_frequency = message.unbondingFrequency ? message.unbondingFrequency.toString() : undefined;
    obj.staked_bal = message.stakedBal;
    obj.address = message.address;
    obj.halted = message.halted;
    obj.min_redemption_rate = message.minRedemptionRate;
    obj.max_redemption_rate = message.maxRedemptionRate;
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