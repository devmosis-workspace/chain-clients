import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: bigint;
  delegateInterval: bigint;
  depositInterval: bigint;
  redemptionRateInterval: bigint;
  strideCommission: bigint;
  reinvestInterval: bigint;
  icaTimeoutNanos: bigint;
  bufferSize: bigint;
  ibcTimeoutBlocks: bigint;
  feeTransferTimeoutNanos: bigint;
  maxStakeIcaCallsPerEpoch: bigint;
  defaultMinRedemptionRateThreshold: bigint;
  defaultMaxRedemptionRateThreshold: bigint;
  ibcTransferTimeoutNanos: bigint;
  safetyNumValidators: bigint;
  safetyMaxSlashPercent: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/stride.stakeibc.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface ParamsAmino {
  /** define epoch lengths, in stride_epochs */
  rewards_interval: string;
  delegate_interval: string;
  deposit_interval: string;
  redemption_rate_interval: string;
  stride_commission: string;
  reinvest_interval: string;
  ica_timeout_nanos: string;
  buffer_size: string;
  ibc_timeout_blocks: string;
  fee_transfer_timeout_nanos: string;
  max_stake_ica_calls_per_epoch: string;
  default_min_redemption_rate_threshold: string;
  default_max_redemption_rate_threshold: string;
  ibc_transfer_timeout_nanos: string;
  safety_num_validators: string;
  safety_max_slash_percent: string;
}
export interface ParamsAminoMsg {
  type: "/stride.stakeibc.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface ParamsSDKType {
  rewards_interval: bigint;
  delegate_interval: bigint;
  deposit_interval: bigint;
  redemption_rate_interval: bigint;
  stride_commission: bigint;
  reinvest_interval: bigint;
  ica_timeout_nanos: bigint;
  buffer_size: bigint;
  ibc_timeout_blocks: bigint;
  fee_transfer_timeout_nanos: bigint;
  max_stake_ica_calls_per_epoch: bigint;
  default_min_redemption_rate_threshold: bigint;
  default_max_redemption_rate_threshold: bigint;
  ibc_transfer_timeout_nanos: bigint;
  safety_num_validators: bigint;
  safety_max_slash_percent: bigint;
}
function createBaseParams(): Params {
  return {
    rewardsInterval: BigInt(0),
    delegateInterval: BigInt(0),
    depositInterval: BigInt(0),
    redemptionRateInterval: BigInt(0),
    strideCommission: BigInt(0),
    reinvestInterval: BigInt(0),
    icaTimeoutNanos: BigInt(0),
    bufferSize: BigInt(0),
    ibcTimeoutBlocks: BigInt(0),
    feeTransferTimeoutNanos: BigInt(0),
    maxStakeIcaCallsPerEpoch: BigInt(0),
    defaultMinRedemptionRateThreshold: BigInt(0),
    defaultMaxRedemptionRateThreshold: BigInt(0),
    ibcTransferTimeoutNanos: BigInt(0),
    safetyNumValidators: BigInt(0),
    safetyMaxSlashPercent: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/stride.stakeibc.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsInterval !== BigInt(0)) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }
    if (message.delegateInterval !== BigInt(0)) {
      writer.uint32(48).uint64(message.delegateInterval);
    }
    if (message.depositInterval !== BigInt(0)) {
      writer.uint32(16).uint64(message.depositInterval);
    }
    if (message.redemptionRateInterval !== BigInt(0)) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }
    if (message.strideCommission !== BigInt(0)) {
      writer.uint32(32).uint64(message.strideCommission);
    }
    if (message.reinvestInterval !== BigInt(0)) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }
    if (message.icaTimeoutNanos !== BigInt(0)) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }
    if (message.bufferSize !== BigInt(0)) {
      writer.uint32(80).uint64(message.bufferSize);
    }
    if (message.ibcTimeoutBlocks !== BigInt(0)) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }
    if (message.feeTransferTimeoutNanos !== BigInt(0)) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }
    if (message.maxStakeIcaCallsPerEpoch !== BigInt(0)) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }
    if (message.defaultMinRedemptionRateThreshold !== BigInt(0)) {
      writer.uint32(112).uint64(message.defaultMinRedemptionRateThreshold);
    }
    if (message.defaultMaxRedemptionRateThreshold !== BigInt(0)) {
      writer.uint32(120).uint64(message.defaultMaxRedemptionRateThreshold);
    }
    if (message.ibcTransferTimeoutNanos !== BigInt(0)) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }
    if (message.safetyNumValidators !== BigInt(0)) {
      writer.uint32(136).uint64(message.safetyNumValidators);
    }
    if (message.safetyMaxSlashPercent !== BigInt(0)) {
      writer.uint32(144).uint64(message.safetyMaxSlashPercent);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      rewardsInterval: isSet(object.rewardsInterval) ? BigInt(object.rewardsInterval.toString()) : BigInt(0),
      delegateInterval: isSet(object.delegateInterval) ? BigInt(object.delegateInterval.toString()) : BigInt(0),
      depositInterval: isSet(object.depositInterval) ? BigInt(object.depositInterval.toString()) : BigInt(0),
      redemptionRateInterval: isSet(object.redemptionRateInterval) ? BigInt(object.redemptionRateInterval.toString()) : BigInt(0),
      strideCommission: isSet(object.strideCommission) ? BigInt(object.strideCommission.toString()) : BigInt(0),
      reinvestInterval: isSet(object.reinvestInterval) ? BigInt(object.reinvestInterval.toString()) : BigInt(0),
      icaTimeoutNanos: isSet(object.icaTimeoutNanos) ? BigInt(object.icaTimeoutNanos.toString()) : BigInt(0),
      bufferSize: isSet(object.bufferSize) ? BigInt(object.bufferSize.toString()) : BigInt(0),
      ibcTimeoutBlocks: isSet(object.ibcTimeoutBlocks) ? BigInt(object.ibcTimeoutBlocks.toString()) : BigInt(0),
      feeTransferTimeoutNanos: isSet(object.feeTransferTimeoutNanos) ? BigInt(object.feeTransferTimeoutNanos.toString()) : BigInt(0),
      maxStakeIcaCallsPerEpoch: isSet(object.maxStakeIcaCallsPerEpoch) ? BigInt(object.maxStakeIcaCallsPerEpoch.toString()) : BigInt(0),
      defaultMinRedemptionRateThreshold: isSet(object.defaultMinRedemptionRateThreshold) ? BigInt(object.defaultMinRedemptionRateThreshold.toString()) : BigInt(0),
      defaultMaxRedemptionRateThreshold: isSet(object.defaultMaxRedemptionRateThreshold) ? BigInt(object.defaultMaxRedemptionRateThreshold.toString()) : BigInt(0),
      ibcTransferTimeoutNanos: isSet(object.ibcTransferTimeoutNanos) ? BigInt(object.ibcTransferTimeoutNanos.toString()) : BigInt(0),
      safetyNumValidators: isSet(object.safetyNumValidators) ? BigInt(object.safetyNumValidators.toString()) : BigInt(0),
      safetyMaxSlashPercent: isSet(object.safetyMaxSlashPercent) ? BigInt(object.safetyMaxSlashPercent.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardsInterval = object.rewardsInterval !== undefined && object.rewardsInterval !== null ? BigInt(object.rewardsInterval.toString()) : BigInt(0);
    message.delegateInterval = object.delegateInterval !== undefined && object.delegateInterval !== null ? BigInt(object.delegateInterval.toString()) : BigInt(0);
    message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? BigInt(object.depositInterval.toString()) : BigInt(0);
    message.redemptionRateInterval = object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null ? BigInt(object.redemptionRateInterval.toString()) : BigInt(0);
    message.strideCommission = object.strideCommission !== undefined && object.strideCommission !== null ? BigInt(object.strideCommission.toString()) : BigInt(0);
    message.reinvestInterval = object.reinvestInterval !== undefined && object.reinvestInterval !== null ? BigInt(object.reinvestInterval.toString()) : BigInt(0);
    message.icaTimeoutNanos = object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null ? BigInt(object.icaTimeoutNanos.toString()) : BigInt(0);
    message.bufferSize = object.bufferSize !== undefined && object.bufferSize !== null ? BigInt(object.bufferSize.toString()) : BigInt(0);
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null ? BigInt(object.ibcTimeoutBlocks.toString()) : BigInt(0);
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null ? BigInt(object.feeTransferTimeoutNanos.toString()) : BigInt(0);
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null ? BigInt(object.maxStakeIcaCallsPerEpoch.toString()) : BigInt(0);
    message.defaultMinRedemptionRateThreshold = object.defaultMinRedemptionRateThreshold !== undefined && object.defaultMinRedemptionRateThreshold !== null ? BigInt(object.defaultMinRedemptionRateThreshold.toString()) : BigInt(0);
    message.defaultMaxRedemptionRateThreshold = object.defaultMaxRedemptionRateThreshold !== undefined && object.defaultMaxRedemptionRateThreshold !== null ? BigInt(object.defaultMaxRedemptionRateThreshold.toString()) : BigInt(0);
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null ? BigInt(object.ibcTransferTimeoutNanos.toString()) : BigInt(0);
    message.safetyNumValidators = object.safetyNumValidators !== undefined && object.safetyNumValidators !== null ? BigInt(object.safetyNumValidators.toString()) : BigInt(0);
    message.safetyMaxSlashPercent = object.safetyMaxSlashPercent !== undefined && object.safetyMaxSlashPercent !== null ? BigInt(object.safetyMaxSlashPercent.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      rewardsInterval: BigInt(object.rewards_interval),
      delegateInterval: BigInt(object.delegate_interval),
      depositInterval: BigInt(object.deposit_interval),
      redemptionRateInterval: BigInt(object.redemption_rate_interval),
      strideCommission: BigInt(object.stride_commission),
      reinvestInterval: BigInt(object.reinvest_interval),
      icaTimeoutNanos: BigInt(object.ica_timeout_nanos),
      bufferSize: BigInt(object.buffer_size),
      ibcTimeoutBlocks: BigInt(object.ibc_timeout_blocks),
      feeTransferTimeoutNanos: BigInt(object.fee_transfer_timeout_nanos),
      maxStakeIcaCallsPerEpoch: BigInt(object.max_stake_ica_calls_per_epoch),
      defaultMinRedemptionRateThreshold: BigInt(object.default_min_redemption_rate_threshold),
      defaultMaxRedemptionRateThreshold: BigInt(object.default_max_redemption_rate_threshold),
      ibcTransferTimeoutNanos: BigInt(object.ibc_transfer_timeout_nanos),
      safetyNumValidators: BigInt(object.safety_num_validators),
      safetyMaxSlashPercent: BigInt(object.safety_max_slash_percent)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.rewards_interval = message.rewardsInterval ? message.rewardsInterval.toString() : undefined;
    obj.delegate_interval = message.delegateInterval ? message.delegateInterval.toString() : undefined;
    obj.deposit_interval = message.depositInterval ? message.depositInterval.toString() : undefined;
    obj.redemption_rate_interval = message.redemptionRateInterval ? message.redemptionRateInterval.toString() : undefined;
    obj.stride_commission = message.strideCommission ? message.strideCommission.toString() : undefined;
    obj.reinvest_interval = message.reinvestInterval ? message.reinvestInterval.toString() : undefined;
    obj.ica_timeout_nanos = message.icaTimeoutNanos ? message.icaTimeoutNanos.toString() : undefined;
    obj.buffer_size = message.bufferSize ? message.bufferSize.toString() : undefined;
    obj.ibc_timeout_blocks = message.ibcTimeoutBlocks ? message.ibcTimeoutBlocks.toString() : undefined;
    obj.fee_transfer_timeout_nanos = message.feeTransferTimeoutNanos ? message.feeTransferTimeoutNanos.toString() : undefined;
    obj.max_stake_ica_calls_per_epoch = message.maxStakeIcaCallsPerEpoch ? message.maxStakeIcaCallsPerEpoch.toString() : undefined;
    obj.default_min_redemption_rate_threshold = message.defaultMinRedemptionRateThreshold ? message.defaultMinRedemptionRateThreshold.toString() : undefined;
    obj.default_max_redemption_rate_threshold = message.defaultMaxRedemptionRateThreshold ? message.defaultMaxRedemptionRateThreshold.toString() : undefined;
    obj.ibc_transfer_timeout_nanos = message.ibcTransferTimeoutNanos ? message.ibcTransferTimeoutNanos.toString() : undefined;
    obj.safety_num_validators = message.safetyNumValidators ? message.safetyNumValidators.toString() : undefined;
    obj.safety_max_slash_percent = message.safetyMaxSlashPercent ? message.safetyMaxSlashPercent.toString() : undefined;
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
      typeUrl: "/stride.stakeibc.Params",
      value: Params.encode(message).finish()
    };
  }
};