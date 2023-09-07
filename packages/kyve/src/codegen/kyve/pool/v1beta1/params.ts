import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Params defines the pool module parameters. */
export interface Params {
  /** protocol_inflation_share ... */
  protocolInflationShare: string;
  /** pool_inflation_payout_rate ... */
  poolInflationPayoutRate: string;
}
/** Params defines the pool module parameters. */
export interface ParamsSDKType {
  protocol_inflation_share: string;
  pool_inflation_payout_rate: string;
}
function createBaseParams(): Params {
  return {
    protocolInflationShare: "",
    poolInflationPayoutRate: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolInflationShare !== "") {
      writer.uint32(10).string(message.protocolInflationShare);
    }
    if (message.poolInflationPayoutRate !== "") {
      writer.uint32(18).string(message.poolInflationPayoutRate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      protocolInflationShare: isSet(object.protocolInflationShare) ? String(object.protocolInflationShare) : "",
      poolInflationPayoutRate: isSet(object.poolInflationPayoutRate) ? String(object.poolInflationPayoutRate) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.protocolInflationShare = object.protocolInflationShare ?? "";
    message.poolInflationPayoutRate = object.poolInflationPayoutRate ?? "";
    return message;
  }
};