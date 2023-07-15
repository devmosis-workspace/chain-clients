import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the EVM module parameters */
export interface Params {
  /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  noBaseFee: boolean;
  /**
   * base_fee_change_denominator bounds the amount the base fee can change
   * between blocks.
   */
  baseFeeChangeDenominator: number;
  /**
   * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticityMultiplier: number;
  /** enable_height defines at which block height the base fee calculation is enabled. */
  enableHeight: Long;
  /** base_fee for EIP-1559 blocks. */
  baseFee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  minGasPrice: string;
  /**
   * min_gas_multiplier bounds the minimum gas used to be charged
   * to senders based on gas limit
   */
  minGasMultiplier: string;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
  no_base_fee: boolean;
  base_fee_change_denominator: number;
  elasticity_multiplier: number;
  enable_height: Long;
  base_fee: string;
  min_gas_price: string;
  min_gas_multiplier: string;
}
function createBaseParams(): Params {
  return {
    noBaseFee: false,
    baseFeeChangeDenominator: 0,
    elasticityMultiplier: 0,
    enableHeight: Long.ZERO,
    baseFee: "",
    minGasPrice: "",
    minGasMultiplier: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noBaseFee === true) {
      writer.uint32(8).bool(message.noBaseFee);
    }
    if (message.baseFeeChangeDenominator !== 0) {
      writer.uint32(16).uint32(message.baseFeeChangeDenominator);
    }
    if (message.elasticityMultiplier !== 0) {
      writer.uint32(24).uint32(message.elasticityMultiplier);
    }
    if (!message.enableHeight.isZero()) {
      writer.uint32(40).int64(message.enableHeight);
    }
    if (message.baseFee !== "") {
      writer.uint32(50).string(message.baseFee);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(58).string(message.minGasPrice);
    }
    if (message.minGasMultiplier !== "") {
      writer.uint32(66).string(message.minGasMultiplier);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
      baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator) ? Number(object.baseFeeChangeDenominator) : 0,
      elasticityMultiplier: isSet(object.elasticityMultiplier) ? Number(object.elasticityMultiplier) : 0,
      enableHeight: isSet(object.enableHeight) ? Long.fromValue(object.enableHeight) : Long.ZERO,
      baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : "",
      minGasMultiplier: isSet(object.minGasMultiplier) ? String(object.minGasMultiplier) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.noBaseFee = object.noBaseFee ?? false;
    message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
    message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
    message.enableHeight = object.enableHeight !== undefined && object.enableHeight !== null ? Long.fromValue(object.enableHeight) : Long.ZERO;
    message.baseFee = object.baseFee ?? "";
    message.minGasPrice = object.minGasPrice ?? "";
    message.minGasMultiplier = object.minGasMultiplier ?? "";
    return message;
  }
};