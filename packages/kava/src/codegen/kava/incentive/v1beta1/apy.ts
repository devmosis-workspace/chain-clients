import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface Apy {
  collateralType: string;
  apy: string;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApySDKType {
  collateral_type: string;
  apy: string;
}
function createBaseApy(): Apy {
  return {
    collateralType: "",
    apy: ""
  };
}
export const Apy = {
  encode(message: Apy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.apy !== "") {
      writer.uint32(18).string(message.apy);
    }
    return writer;
  },
  fromJSON(object: any): Apy {
    return {
      collateralType: isSet(object.collateralType) ? String(object.collateralType) : "",
      apy: isSet(object.apy) ? String(object.apy) : ""
    };
  },
  fromPartial(object: Partial<Apy>): Apy {
    const message = createBaseApy();
    message.collateralType = object.collateralType ?? "";
    message.apy = object.apy ?? "";
    return message;
  }
};