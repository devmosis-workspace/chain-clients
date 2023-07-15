import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: Long;
  delegateInterval: Long;
  depositInterval: Long;
  redemptionRateInterval: Long;
  strideCommission: Long;
  reinvestInterval: Long;
  icaTimeoutNanos: Long;
  bufferSize: Long;
  ibcTimeoutBlocks: Long;
  feeTransferTimeoutNanos: Long;
  maxStakeIcaCallsPerEpoch: Long;
  defaultMinRedemptionRateThreshold: Long;
  defaultMaxRedemptionRateThreshold: Long;
  ibcTransferTimeoutNanos: Long;
  safetyNumValidators: Long;
  safetyMaxSlashPercent: Long;
}
/**
 * Params defines the parameters for the module.
 * next id: 18
 */
export interface ParamsSDKType {
  rewards_interval: Long;
  delegate_interval: Long;
  deposit_interval: Long;
  redemption_rate_interval: Long;
  stride_commission: Long;
  reinvest_interval: Long;
  ica_timeout_nanos: Long;
  buffer_size: Long;
  ibc_timeout_blocks: Long;
  fee_transfer_timeout_nanos: Long;
  max_stake_ica_calls_per_epoch: Long;
  default_min_redemption_rate_threshold: Long;
  default_max_redemption_rate_threshold: Long;
  ibc_transfer_timeout_nanos: Long;
  safety_num_validators: Long;
  safety_max_slash_percent: Long;
}
function createBaseParams(): Params {
  return {
    rewardsInterval: Long.UZERO,
    delegateInterval: Long.UZERO,
    depositInterval: Long.UZERO,
    redemptionRateInterval: Long.UZERO,
    strideCommission: Long.UZERO,
    reinvestInterval: Long.UZERO,
    icaTimeoutNanos: Long.UZERO,
    bufferSize: Long.UZERO,
    ibcTimeoutBlocks: Long.UZERO,
    feeTransferTimeoutNanos: Long.UZERO,
    maxStakeIcaCallsPerEpoch: Long.UZERO,
    defaultMinRedemptionRateThreshold: Long.UZERO,
    defaultMaxRedemptionRateThreshold: Long.UZERO,
    ibcTransferTimeoutNanos: Long.UZERO,
    safetyNumValidators: Long.UZERO,
    safetyMaxSlashPercent: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rewardsInterval.isZero()) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }
    if (!message.delegateInterval.isZero()) {
      writer.uint32(48).uint64(message.delegateInterval);
    }
    if (!message.depositInterval.isZero()) {
      writer.uint32(16).uint64(message.depositInterval);
    }
    if (!message.redemptionRateInterval.isZero()) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }
    if (!message.strideCommission.isZero()) {
      writer.uint32(32).uint64(message.strideCommission);
    }
    if (!message.reinvestInterval.isZero()) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }
    if (!message.icaTimeoutNanos.isZero()) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }
    if (!message.bufferSize.isZero()) {
      writer.uint32(80).uint64(message.bufferSize);
    }
    if (!message.ibcTimeoutBlocks.isZero()) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }
    if (!message.feeTransferTimeoutNanos.isZero()) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }
    if (!message.maxStakeIcaCallsPerEpoch.isZero()) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }
    if (!message.defaultMinRedemptionRateThreshold.isZero()) {
      writer.uint32(112).uint64(message.defaultMinRedemptionRateThreshold);
    }
    if (!message.defaultMaxRedemptionRateThreshold.isZero()) {
      writer.uint32(120).uint64(message.defaultMaxRedemptionRateThreshold);
    }
    if (!message.ibcTransferTimeoutNanos.isZero()) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }
    if (!message.safetyNumValidators.isZero()) {
      writer.uint32(136).uint64(message.safetyNumValidators);
    }
    if (!message.safetyMaxSlashPercent.isZero()) {
      writer.uint32(144).uint64(message.safetyMaxSlashPercent);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      rewardsInterval: isSet(object.rewardsInterval) ? Long.fromValue(object.rewardsInterval) : Long.UZERO,
      delegateInterval: isSet(object.delegateInterval) ? Long.fromValue(object.delegateInterval) : Long.UZERO,
      depositInterval: isSet(object.depositInterval) ? Long.fromValue(object.depositInterval) : Long.UZERO,
      redemptionRateInterval: isSet(object.redemptionRateInterval) ? Long.fromValue(object.redemptionRateInterval) : Long.UZERO,
      strideCommission: isSet(object.strideCommission) ? Long.fromValue(object.strideCommission) : Long.UZERO,
      reinvestInterval: isSet(object.reinvestInterval) ? Long.fromValue(object.reinvestInterval) : Long.UZERO,
      icaTimeoutNanos: isSet(object.icaTimeoutNanos) ? Long.fromValue(object.icaTimeoutNanos) : Long.UZERO,
      bufferSize: isSet(object.bufferSize) ? Long.fromValue(object.bufferSize) : Long.UZERO,
      ibcTimeoutBlocks: isSet(object.ibcTimeoutBlocks) ? Long.fromValue(object.ibcTimeoutBlocks) : Long.UZERO,
      feeTransferTimeoutNanos: isSet(object.feeTransferTimeoutNanos) ? Long.fromValue(object.feeTransferTimeoutNanos) : Long.UZERO,
      maxStakeIcaCallsPerEpoch: isSet(object.maxStakeIcaCallsPerEpoch) ? Long.fromValue(object.maxStakeIcaCallsPerEpoch) : Long.UZERO,
      defaultMinRedemptionRateThreshold: isSet(object.defaultMinRedemptionRateThreshold) ? Long.fromValue(object.defaultMinRedemptionRateThreshold) : Long.UZERO,
      defaultMaxRedemptionRateThreshold: isSet(object.defaultMaxRedemptionRateThreshold) ? Long.fromValue(object.defaultMaxRedemptionRateThreshold) : Long.UZERO,
      ibcTransferTimeoutNanos: isSet(object.ibcTransferTimeoutNanos) ? Long.fromValue(object.ibcTransferTimeoutNanos) : Long.UZERO,
      safetyNumValidators: isSet(object.safetyNumValidators) ? Long.fromValue(object.safetyNumValidators) : Long.UZERO,
      safetyMaxSlashPercent: isSet(object.safetyMaxSlashPercent) ? Long.fromValue(object.safetyMaxSlashPercent) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.rewardsInterval = object.rewardsInterval !== undefined && object.rewardsInterval !== null ? Long.fromValue(object.rewardsInterval) : Long.UZERO;
    message.delegateInterval = object.delegateInterval !== undefined && object.delegateInterval !== null ? Long.fromValue(object.delegateInterval) : Long.UZERO;
    message.depositInterval = object.depositInterval !== undefined && object.depositInterval !== null ? Long.fromValue(object.depositInterval) : Long.UZERO;
    message.redemptionRateInterval = object.redemptionRateInterval !== undefined && object.redemptionRateInterval !== null ? Long.fromValue(object.redemptionRateInterval) : Long.UZERO;
    message.strideCommission = object.strideCommission !== undefined && object.strideCommission !== null ? Long.fromValue(object.strideCommission) : Long.UZERO;
    message.reinvestInterval = object.reinvestInterval !== undefined && object.reinvestInterval !== null ? Long.fromValue(object.reinvestInterval) : Long.UZERO;
    message.icaTimeoutNanos = object.icaTimeoutNanos !== undefined && object.icaTimeoutNanos !== null ? Long.fromValue(object.icaTimeoutNanos) : Long.UZERO;
    message.bufferSize = object.bufferSize !== undefined && object.bufferSize !== null ? Long.fromValue(object.bufferSize) : Long.UZERO;
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks !== undefined && object.ibcTimeoutBlocks !== null ? Long.fromValue(object.ibcTimeoutBlocks) : Long.UZERO;
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos !== undefined && object.feeTransferTimeoutNanos !== null ? Long.fromValue(object.feeTransferTimeoutNanos) : Long.UZERO;
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch !== undefined && object.maxStakeIcaCallsPerEpoch !== null ? Long.fromValue(object.maxStakeIcaCallsPerEpoch) : Long.UZERO;
    message.defaultMinRedemptionRateThreshold = object.defaultMinRedemptionRateThreshold !== undefined && object.defaultMinRedemptionRateThreshold !== null ? Long.fromValue(object.defaultMinRedemptionRateThreshold) : Long.UZERO;
    message.defaultMaxRedemptionRateThreshold = object.defaultMaxRedemptionRateThreshold !== undefined && object.defaultMaxRedemptionRateThreshold !== null ? Long.fromValue(object.defaultMaxRedemptionRateThreshold) : Long.UZERO;
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos !== undefined && object.ibcTransferTimeoutNanos !== null ? Long.fromValue(object.ibcTransferTimeoutNanos) : Long.UZERO;
    message.safetyNumValidators = object.safetyNumValidators !== undefined && object.safetyNumValidators !== null ? Long.fromValue(object.safetyNumValidators) : Long.UZERO;
    message.safetyMaxSlashPercent = object.safetyMaxSlashPercent !== undefined && object.safetyMaxSlashPercent !== null ? Long.fromValue(object.safetyMaxSlashPercent) : Long.UZERO;
    return message;
  }
};