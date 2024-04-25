import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface Apy {
  collateralType: string;
  apy: string;
}
export interface ApyProtoMsg {
  typeUrl: "/kava.incentive.v1beta1.Apy";
  value: Uint8Array;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApyAmino {
  collateral_type?: string;
  apy?: string;
}
export interface ApyAminoMsg {
  type: "/kava.incentive.v1beta1.Apy";
  value: ApyAmino;
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
  typeUrl: "/kava.incentive.v1beta1.Apy",
  encode(message: Apy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.apy !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.apy, 18).atomics);
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
  },
  fromAmino(object: ApyAmino): Apy {
    const message = createBaseApy();
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.apy !== undefined && object.apy !== null) {
      message.apy = object.apy;
    }
    return message;
  },
  toAmino(message: Apy): ApyAmino {
    const obj: any = {};
    obj.collateral_type = message.collateralType;
    obj.apy = message.apy;
    return obj;
  },
  fromAminoMsg(object: ApyAminoMsg): Apy {
    return Apy.fromAmino(object.value);
  },
  fromProtoMsg(message: ApyProtoMsg): Apy {
    return Apy.decode(message.value);
  },
  toProto(message: Apy): Uint8Array {
    return Apy.encode(message).finish();
  },
  toProtoMsg(message: Apy): ApyProtoMsg {
    return {
      typeUrl: "/kava.incentive.v1beta1.Apy",
      value: Apy.encode(message).finish()
    };
  }
};