import { BinaryWriter } from "../binary";
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
export interface ParamsProtoMsg {
  typeUrl: "/neutron.feeburner.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * Defines Neutron denom, which will be burned during fee processing, any
   * other denom will be sent to Treasury
   */
  neutron_denom: string;
  /** Deprecated in v0.4.4. Is not used anymore */
  reserve_address: string;
  /** Defines treasury address */
  treasury_address: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.feeburner.Params";
  value: ParamsAmino;
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
  typeUrl: "/neutron.feeburner.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      neutronDenom: object.neutron_denom,
      reserveAddress: object.reserve_address,
      treasuryAddress: object.treasury_address
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.neutron_denom = message.neutronDenom;
    obj.reserve_address = message.reserveAddress;
    obj.treasury_address = message.treasuryAddress;
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
      typeUrl: "/neutron.feeburner.Params",
      value: Params.encode(message).finish()
    };
  }
};