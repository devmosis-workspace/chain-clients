import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines Neutron denom, which will be burned during fee processing, any
   * other denom will be sent to Treasury
   */
  neutronDenom: string;
  /** Deprecated in v0.4.4. Is not used anymore */
  reserveAddress: string;
  /** Defines treasury address */
  treasuryAddress: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  neutron_denom: string;
  reserve_address: string;
  treasury_address: string;
}
function createBaseParams(): Params {
  return {
    neutronDenom: "",
    reserveAddress: "",
    treasuryAddress: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neutronDenom !== "") {
      writer.uint32(10).string(message.neutronDenom);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(26).string(message.treasuryAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      neutronDenom: isSet(object.neutronDenom) ? String(object.neutronDenom) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      treasuryAddress: isSet(object.treasuryAddress) ? String(object.treasuryAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.neutronDenom = object.neutronDenom ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.treasuryAddress = object.treasuryAddress ?? "";
    return message;
  }
};