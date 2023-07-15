import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  /** InflationDecayFactor is the number of years it takes inflation to halve. */
  inflationDecayFactor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initialInflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  inflation_decay_factor: string;
  initial_inflation: string;
  variance: string;
}
function createBaseParams(): Params {
  return {
    inflationDecayFactor: "",
    initialInflation: "",
    variance: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationDecayFactor !== "") {
      writer.uint32(10).string(message.inflationDecayFactor);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(message.initialInflation);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(message.variance);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      inflationDecayFactor: isSet(object.inflationDecayFactor) ? String(object.inflationDecayFactor) : "",
      initialInflation: isSet(object.initialInflation) ? String(object.initialInflation) : "",
      variance: isSet(object.variance) ? String(object.variance) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.inflationDecayFactor = object.inflationDecayFactor ?? "";
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  }
};