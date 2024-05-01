import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParams {
  /** max_supply is the maximum supply. Inflation will not increase the UMEE supply above this value. */
  maxSupply: Coin;
  /** inflation_cycle duration after which inflation rates are changed. */
  inflationCycle: Duration;
  /** inflation_reduction_rate for every inflation cycle in basis points. */
  inflationReductionRate: number;
}
export interface InflationParamsProtoMsg {
  typeUrl: "/umee.ugov.v1.InflationParams";
  value: Uint8Array;
}
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParamsAmino {
  /** max_supply is the maximum supply. Inflation will not increase the UMEE supply above this value. */
  max_supply?: CoinAmino;
  /** inflation_cycle duration after which inflation rates are changed. */
  inflation_cycle?: DurationAmino;
  /** inflation_reduction_rate for every inflation cycle in basis points. */
  inflation_reduction_rate?: number;
}
export interface InflationParamsAminoMsg {
  type: "/umee.ugov.v1.InflationParams";
  value: InflationParamsAmino;
}
/** InflationParams params for changing the inflation min rate and max rate of mint module params. */
export interface InflationParamsSDKType {
  max_supply: CoinSDKType;
  inflation_cycle: DurationSDKType;
  inflation_reduction_rate: number;
}
function createBaseInflationParams(): InflationParams {
  return {
    maxSupply: Coin.fromPartial({}),
    inflationCycle: Duration.fromPartial({}),
    inflationReductionRate: 0
  };
}
export const InflationParams = {
  typeUrl: "/umee.ugov.v1.InflationParams",
  encode(message: InflationParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(10).fork()).ldelim();
    }
    if (message.inflationCycle !== undefined) {
      Duration.encode(message.inflationCycle, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflationReductionRate !== 0) {
      writer.uint32(24).uint32(message.inflationReductionRate);
    }
    return writer;
  },
  fromJSON(object: any): InflationParams {
    return {
      maxSupply: isSet(object.maxSupply) ? Coin.fromJSON(object.maxSupply) : undefined,
      inflationCycle: isSet(object.inflationCycle) ? Duration.fromJSON(object.inflationCycle) : undefined,
      inflationReductionRate: isSet(object.inflationReductionRate) ? Number(object.inflationReductionRate) : 0
    };
  },
  fromPartial(object: Partial<InflationParams>): InflationParams {
    const message = createBaseInflationParams();
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
    message.inflationCycle = object.inflationCycle !== undefined && object.inflationCycle !== null ? Duration.fromPartial(object.inflationCycle) : undefined;
    message.inflationReductionRate = object.inflationReductionRate ?? 0;
    return message;
  },
  fromAmino(object: InflationParamsAmino): InflationParams {
    const message = createBaseInflationParams();
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = Coin.fromAmino(object.max_supply);
    }
    if (object.inflation_cycle !== undefined && object.inflation_cycle !== null) {
      message.inflationCycle = Duration.fromAmino(object.inflation_cycle);
    }
    if (object.inflation_reduction_rate !== undefined && object.inflation_reduction_rate !== null) {
      message.inflationReductionRate = object.inflation_reduction_rate;
    }
    return message;
  },
  toAmino(message: InflationParams): InflationParamsAmino {
    const obj: any = {};
    obj.max_supply = message.maxSupply ? Coin.toAmino(message.maxSupply) : undefined;
    obj.inflation_cycle = message.inflationCycle ? Duration.toAmino(message.inflationCycle) : undefined;
    obj.inflation_reduction_rate = message.inflationReductionRate === 0 ? undefined : message.inflationReductionRate;
    return obj;
  },
  fromAminoMsg(object: InflationParamsAminoMsg): InflationParams {
    return InflationParams.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationParamsProtoMsg): InflationParams {
    return InflationParams.decode(message.value);
  },
  toProto(message: InflationParams): Uint8Array {
    return InflationParams.encode(message).finish();
  },
  toProtoMsg(message: InflationParams): InflationParamsProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.InflationParams",
      value: InflationParams.encode(message).finish()
    };
  }
};