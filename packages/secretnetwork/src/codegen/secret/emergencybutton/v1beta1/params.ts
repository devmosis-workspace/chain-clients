import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  switchStatus: string;
  pauserAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/secret.emergencybutton.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
  switch_status: string;
  pauser_address: string;
}
export interface ParamsAminoMsg {
  type: "/secret.emergencybutton.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
  switch_status: string;
  pauser_address: string;
}
function createBaseParams(): Params {
  return {
    switchStatus: "",
    pauserAddress: ""
  };
}
export const Params = {
  typeUrl: "/secret.emergencybutton.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.switchStatus !== "") {
      writer.uint32(10).string(message.switchStatus);
    }
    if (message.pauserAddress !== "") {
      writer.uint32(18).string(message.pauserAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      switchStatus: isSet(object.switchStatus) ? String(object.switchStatus) : "",
      pauserAddress: isSet(object.pauserAddress) ? String(object.pauserAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.switchStatus = object.switchStatus ?? "";
    message.pauserAddress = object.pauserAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      switchStatus: object.switch_status,
      pauserAddress: object.pauser_address
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.switch_status = message.switchStatus;
    obj.pauser_address = message.pauserAddress;
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
      typeUrl: "/secret.emergencybutton.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};