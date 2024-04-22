import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRate {
  denom: string;
  rate: number;
}
export interface DenomTakeRateProtoMsg {
  typeUrl: "/akash.take.v1beta3.DenomTakeRate";
  value: Uint8Array;
}
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRateAmino {
  denom?: string;
  rate?: number;
}
export interface DenomTakeRateAminoMsg {
  type: "/akash.take.v1beta3.DenomTakeRate";
  value: DenomTakeRateAmino;
}
/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRateSDKType {
  denom: string;
  rate: number;
}
/** Params defines the parameters for the x/take package */
export interface Params {
  /** denom -> % take rate */
  denomTakeRates: DenomTakeRate[];
  defaultTakeRate: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.take.v1beta3.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/take package */
export interface ParamsAmino {
  /** denom -> % take rate */
  denom_take_rates?: DenomTakeRateAmino[];
  default_take_rate?: number;
}
export interface ParamsAminoMsg {
  type: "/akash.take.v1beta3.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/take package */
export interface ParamsSDKType {
  denom_take_rates: DenomTakeRateSDKType[];
  default_take_rate: number;
}
function createBaseDenomTakeRate(): DenomTakeRate {
  return {
    denom: "",
    rate: 0
  };
}
export const DenomTakeRate = {
  typeUrl: "/akash.take.v1beta3.DenomTakeRate",
  encode(message: DenomTakeRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== 0) {
      writer.uint32(16).uint32(message.rate);
    }
    return writer;
  },
  fromJSON(object: any): DenomTakeRate {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      rate: isSet(object.rate) ? Number(object.rate) : 0
    };
  },
  fromPartial(object: Partial<DenomTakeRate>): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? 0;
    return message;
  },
  fromAmino(object: DenomTakeRateAmino): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: DenomTakeRate): DenomTakeRateAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.rate = message.rate;
    return obj;
  },
  fromAminoMsg(object: DenomTakeRateAminoMsg): DenomTakeRate {
    return DenomTakeRate.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomTakeRateProtoMsg): DenomTakeRate {
    return DenomTakeRate.decode(message.value);
  },
  toProto(message: DenomTakeRate): Uint8Array {
    return DenomTakeRate.encode(message).finish();
  },
  toProtoMsg(message: DenomTakeRate): DenomTakeRateProtoMsg {
    return {
      typeUrl: "/akash.take.v1beta3.DenomTakeRate",
      value: DenomTakeRate.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    denomTakeRates: [],
    defaultTakeRate: 0
  };
}
export const Params = {
  typeUrl: "/akash.take.v1beta3.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomTakeRates) {
      DenomTakeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultTakeRate !== 0) {
      writer.uint32(16).uint32(message.defaultTakeRate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      denomTakeRates: Array.isArray(object?.denomTakeRates) ? object.denomTakeRates.map((e: any) => DenomTakeRate.fromJSON(e)) : [],
      defaultTakeRate: isSet(object.defaultTakeRate) ? Number(object.defaultTakeRate) : 0
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.denomTakeRates = object.denomTakeRates?.map(e => DenomTakeRate.fromPartial(e)) || [];
    message.defaultTakeRate = object.defaultTakeRate ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.denomTakeRates = object.denom_take_rates?.map(e => DenomTakeRate.fromAmino(e)) || [];
    if (object.default_take_rate !== undefined && object.default_take_rate !== null) {
      message.defaultTakeRate = object.default_take_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.denomTakeRates) {
      obj.denom_take_rates = message.denomTakeRates.map(e => e ? DenomTakeRate.toAmino(e) : undefined);
    } else {
      obj.denom_take_rates = [];
    }
    obj.default_take_rate = message.defaultTakeRate;
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
      typeUrl: "/akash.take.v1beta3.Params",
      value: Params.encode(message).finish()
    };
  }
};