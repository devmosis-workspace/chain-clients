import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
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
  enableHeight: bigint;
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
export interface ParamsProtoMsg {
  typeUrl: "/ethermint.feemarket.v1.Params";
  value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
  /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  no_base_fee: boolean;
  /**
   * base_fee_change_denominator bounds the amount the base fee can change
   * between blocks.
   */
  base_fee_change_denominator: number;
  /**
   * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticity_multiplier: number;
  /** enable_height defines at which block height the base fee calculation is enabled. */
  enable_height: string;
  /** base_fee for EIP-1559 blocks. */
  base_fee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  min_gas_price: string;
  /**
   * min_gas_multiplier bounds the minimum gas used to be charged
   * to senders based on gas limit
   */
  min_gas_multiplier: string;
}
export interface ParamsAminoMsg {
  type: "/ethermint.feemarket.v1.Params";
  value: ParamsAmino;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
  no_base_fee: boolean;
  base_fee_change_denominator: number;
  elasticity_multiplier: number;
  enable_height: bigint;
  base_fee: string;
  min_gas_price: string;
  min_gas_multiplier: string;
}
function createBaseParams(): Params {
  return {
    noBaseFee: false,
    baseFeeChangeDenominator: 0,
    elasticityMultiplier: 0,
    enableHeight: BigInt(0),
    baseFee: "",
    minGasPrice: "",
    minGasMultiplier: ""
  };
}
export const Params = {
  typeUrl: "/ethermint.feemarket.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noBaseFee === true) {
      writer.uint32(8).bool(message.noBaseFee);
    }
    if (message.baseFeeChangeDenominator !== 0) {
      writer.uint32(16).uint32(message.baseFeeChangeDenominator);
    }
    if (message.elasticityMultiplier !== 0) {
      writer.uint32(24).uint32(message.elasticityMultiplier);
    }
    if (message.enableHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.enableHeight);
    }
    if (message.baseFee !== "") {
      writer.uint32(50).string(message.baseFee);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.minGasPrice, 18).atomics);
    }
    if (message.minGasMultiplier !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.minGasMultiplier, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
      baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator) ? Number(object.baseFeeChangeDenominator) : 0,
      elasticityMultiplier: isSet(object.elasticityMultiplier) ? Number(object.elasticityMultiplier) : 0,
      enableHeight: isSet(object.enableHeight) ? BigInt(object.enableHeight.toString()) : BigInt(0),
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
    message.enableHeight = object.enableHeight !== undefined && object.enableHeight !== null ? BigInt(object.enableHeight.toString()) : BigInt(0);
    message.baseFee = object.baseFee ?? "";
    message.minGasPrice = object.minGasPrice ?? "";
    message.minGasMultiplier = object.minGasMultiplier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      noBaseFee: object.no_base_fee,
      baseFeeChangeDenominator: object.base_fee_change_denominator,
      elasticityMultiplier: object.elasticity_multiplier,
      enableHeight: BigInt(object.enable_height),
      baseFee: object.base_fee,
      minGasPrice: object.min_gas_price,
      minGasMultiplier: object.min_gas_multiplier
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.no_base_fee = message.noBaseFee;
    obj.base_fee_change_denominator = message.baseFeeChangeDenominator;
    obj.elasticity_multiplier = message.elasticityMultiplier;
    obj.enable_height = message.enableHeight ? message.enableHeight.toString() : undefined;
    obj.base_fee = message.baseFee;
    obj.min_gas_price = message.minGasPrice;
    obj.min_gas_multiplier = message.minGasMultiplier;
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
      typeUrl: "/ethermint.feemarket.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};