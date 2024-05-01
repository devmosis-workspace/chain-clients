import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { InflationParams, InflationParamsAmino, InflationParamsSDKType } from "./ugov";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPrice {
  /** authority must be the address of the governance account. */
  authority: string;
  minGasPrice: DecCoin;
}
export interface MsgGovUpdateMinGasPriceProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
  value: Uint8Array;
}
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPriceAmino {
  /** authority must be the address of the governance account. */
  authority?: string;
  min_gas_price?: DecCoinAmino;
}
export interface MsgGovUpdateMinGasPriceAminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
  value: MsgGovUpdateMinGasPriceAmino;
}
/** MsgGovUpdateMinGasPrice request type. */
export interface MsgGovUpdateMinGasPriceSDKType {
  authority: string;
  min_gas_price: DecCoinSDKType;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponse {}
export interface MsgGovUpdateMinGasPriceResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
  value: Uint8Array;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponseAmino {}
export interface MsgGovUpdateMinGasPriceResponseAminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse";
  value: MsgGovUpdateMinGasPriceResponseAmino;
}
/** MsgGovUpdateMinGasPriceResponse response type. */
export interface MsgGovUpdateMinGasPriceResponseSDKType {}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroup {
  /** authority must be the address of the governance account. */
  authority: string;
  emergencyGroup: string;
}
export interface MsgGovSetEmergencyGroupProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup";
  value: Uint8Array;
}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroupAmino {
  /** authority must be the address of the governance account. */
  authority?: string;
  emergency_group?: string;
}
export interface MsgGovSetEmergencyGroupAminoMsg {
  type: "/umee.ugov.v1.MsgGovSetEmergencyGroup";
  value: MsgGovSetEmergencyGroupAmino;
}
/** MsgGovSetEmergencyGroup request type. */
export interface MsgGovSetEmergencyGroupSDKType {
  authority: string;
  emergency_group: string;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponse {}
export interface MsgGovSetEmergencyGroupResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse";
  value: Uint8Array;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponseAmino {}
export interface MsgGovSetEmergencyGroupResponseAminoMsg {
  type: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse";
  value: MsgGovSetEmergencyGroupResponseAmino;
}
/** MsgGovSetEmergencyGroupResponse response type. */
export interface MsgGovSetEmergencyGroupResponseSDKType {}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParams {
  /** authority must be the address of the governance account. */
  authority: string;
  params: InflationParams;
}
export interface MsgGovUpdateInflationParamsProtoMsg {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams";
  value: Uint8Array;
}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParamsAmino {
  /** authority must be the address of the governance account. */
  authority?: string;
  params?: InflationParamsAmino;
}
export interface MsgGovUpdateInflationParamsAminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateInflationParams";
  value: MsgGovUpdateInflationParamsAmino;
}
/** MsgGovUpdateInflationParams request type. */
export interface MsgGovUpdateInflationParamsSDKType {
  authority: string;
  params: InflationParamsSDKType;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponse {}
export interface GovUpdateInflationParamsResponseProtoMsg {
  typeUrl: "/umee.ugov.v1.GovUpdateInflationParamsResponse";
  value: Uint8Array;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponseAmino {}
export interface GovUpdateInflationParamsResponseAminoMsg {
  type: "/umee.ugov.v1.GovUpdateInflationParamsResponse";
  value: GovUpdateInflationParamsResponseAmino;
}
/** GovUpdateInflationParamsResponse response type. */
export interface GovUpdateInflationParamsResponseSDKType {}
function createBaseMsgGovUpdateMinGasPrice(): MsgGovUpdateMinGasPrice {
  return {
    authority: "",
    minGasPrice: DecCoin.fromPartial({})
  };
}
export const MsgGovUpdateMinGasPrice = {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
  encode(message: MsgGovUpdateMinGasPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateMinGasPrice {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovUpdateMinGasPrice>): MsgGovUpdateMinGasPrice {
    const message = createBaseMsgGovUpdateMinGasPrice();
    message.authority = object.authority ?? "";
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  },
  fromAmino(object: MsgGovUpdateMinGasPriceAmino): MsgGovUpdateMinGasPrice {
    const message = createBaseMsgGovUpdateMinGasPrice();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.minGasPrice = DecCoin.fromAmino(object.min_gas_price);
    }
    return message;
  },
  toAmino(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.min_gas_price = message.minGasPrice ? DecCoin.toAmino(message.minGasPrice) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateMinGasPriceAminoMsg): MsgGovUpdateMinGasPrice {
    return MsgGovUpdateMinGasPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateMinGasPriceProtoMsg): MsgGovUpdateMinGasPrice {
    return MsgGovUpdateMinGasPrice.decode(message.value);
  },
  toProto(message: MsgGovUpdateMinGasPrice): Uint8Array {
    return MsgGovUpdateMinGasPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
      value: MsgGovUpdateMinGasPrice.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateMinGasPriceResponse(): MsgGovUpdateMinGasPriceResponse {
  return {};
}
export const MsgGovUpdateMinGasPriceResponse = {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse",
  encode(_: MsgGovUpdateMinGasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovUpdateMinGasPriceResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovUpdateMinGasPriceResponse>): MsgGovUpdateMinGasPriceResponse {
    const message = createBaseMsgGovUpdateMinGasPriceResponse();
    return message;
  },
  fromAmino(_: MsgGovUpdateMinGasPriceResponseAmino): MsgGovUpdateMinGasPriceResponse {
    const message = createBaseMsgGovUpdateMinGasPriceResponse();
    return message;
  },
  toAmino(_: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateMinGasPriceResponseAminoMsg): MsgGovUpdateMinGasPriceResponse {
    return MsgGovUpdateMinGasPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateMinGasPriceResponseProtoMsg): MsgGovUpdateMinGasPriceResponse {
    return MsgGovUpdateMinGasPriceResponse.decode(message.value);
  },
  toProto(message: MsgGovUpdateMinGasPriceResponse): Uint8Array {
    return MsgGovUpdateMinGasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateMinGasPriceResponse): MsgGovUpdateMinGasPriceResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPriceResponse",
      value: MsgGovUpdateMinGasPriceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetEmergencyGroup(): MsgGovSetEmergencyGroup {
  return {
    authority: "",
    emergencyGroup: ""
  };
}
export const MsgGovSetEmergencyGroup = {
  typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
  encode(message: MsgGovSetEmergencyGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.emergencyGroup !== "") {
      writer.uint32(18).string(message.emergencyGroup);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetEmergencyGroup {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      emergencyGroup: isSet(object.emergencyGroup) ? String(object.emergencyGroup) : ""
    };
  },
  fromPartial(object: Partial<MsgGovSetEmergencyGroup>): MsgGovSetEmergencyGroup {
    const message = createBaseMsgGovSetEmergencyGroup();
    message.authority = object.authority ?? "";
    message.emergencyGroup = object.emergencyGroup ?? "";
    return message;
  },
  fromAmino(object: MsgGovSetEmergencyGroupAmino): MsgGovSetEmergencyGroup {
    const message = createBaseMsgGovSetEmergencyGroup();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.emergency_group !== undefined && object.emergency_group !== null) {
      message.emergencyGroup = object.emergency_group;
    }
    return message;
  },
  toAmino(message: MsgGovSetEmergencyGroup): MsgGovSetEmergencyGroupAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.emergency_group = message.emergencyGroup === "" ? undefined : message.emergencyGroup;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetEmergencyGroupAminoMsg): MsgGovSetEmergencyGroup {
    return MsgGovSetEmergencyGroup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetEmergencyGroupProtoMsg): MsgGovSetEmergencyGroup {
    return MsgGovSetEmergencyGroup.decode(message.value);
  },
  toProto(message: MsgGovSetEmergencyGroup): Uint8Array {
    return MsgGovSetEmergencyGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetEmergencyGroup): MsgGovSetEmergencyGroupProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
      value: MsgGovSetEmergencyGroup.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetEmergencyGroupResponse(): MsgGovSetEmergencyGroupResponse {
  return {};
}
export const MsgGovSetEmergencyGroupResponse = {
  typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse",
  encode(_: MsgGovSetEmergencyGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetEmergencyGroupResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetEmergencyGroupResponse>): MsgGovSetEmergencyGroupResponse {
    const message = createBaseMsgGovSetEmergencyGroupResponse();
    return message;
  },
  fromAmino(_: MsgGovSetEmergencyGroupResponseAmino): MsgGovSetEmergencyGroupResponse {
    const message = createBaseMsgGovSetEmergencyGroupResponse();
    return message;
  },
  toAmino(_: MsgGovSetEmergencyGroupResponse): MsgGovSetEmergencyGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetEmergencyGroupResponseAminoMsg): MsgGovSetEmergencyGroupResponse {
    return MsgGovSetEmergencyGroupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetEmergencyGroupResponseProtoMsg): MsgGovSetEmergencyGroupResponse {
    return MsgGovSetEmergencyGroupResponse.decode(message.value);
  },
  toProto(message: MsgGovSetEmergencyGroupResponse): Uint8Array {
    return MsgGovSetEmergencyGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetEmergencyGroupResponse): MsgGovSetEmergencyGroupResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroupResponse",
      value: MsgGovSetEmergencyGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovUpdateInflationParams(): MsgGovUpdateInflationParams {
  return {
    authority: "",
    params: InflationParams.fromPartial({})
  };
}
export const MsgGovUpdateInflationParams = {
  typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
  encode(message: MsgGovUpdateInflationParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      InflationParams.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovUpdateInflationParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? InflationParams.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovUpdateInflationParams>): MsgGovUpdateInflationParams {
    const message = createBaseMsgGovUpdateInflationParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? InflationParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgGovUpdateInflationParamsAmino): MsgGovUpdateInflationParams {
    const message = createBaseMsgGovUpdateInflationParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = InflationParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgGovUpdateInflationParams): MsgGovUpdateInflationParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? InflationParams.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovUpdateInflationParamsAminoMsg): MsgGovUpdateInflationParams {
    return MsgGovUpdateInflationParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovUpdateInflationParamsProtoMsg): MsgGovUpdateInflationParams {
    return MsgGovUpdateInflationParams.decode(message.value);
  },
  toProto(message: MsgGovUpdateInflationParams): Uint8Array {
    return MsgGovUpdateInflationParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGovUpdateInflationParams): MsgGovUpdateInflationParamsProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
      value: MsgGovUpdateInflationParams.encode(message).finish()
    };
  }
};
function createBaseGovUpdateInflationParamsResponse(): GovUpdateInflationParamsResponse {
  return {};
}
export const GovUpdateInflationParamsResponse = {
  typeUrl: "/umee.ugov.v1.GovUpdateInflationParamsResponse",
  encode(_: GovUpdateInflationParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): GovUpdateInflationParamsResponse {
    return {};
  },
  fromPartial(_: Partial<GovUpdateInflationParamsResponse>): GovUpdateInflationParamsResponse {
    const message = createBaseGovUpdateInflationParamsResponse();
    return message;
  },
  fromAmino(_: GovUpdateInflationParamsResponseAmino): GovUpdateInflationParamsResponse {
    const message = createBaseGovUpdateInflationParamsResponse();
    return message;
  },
  toAmino(_: GovUpdateInflationParamsResponse): GovUpdateInflationParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GovUpdateInflationParamsResponseAminoMsg): GovUpdateInflationParamsResponse {
    return GovUpdateInflationParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GovUpdateInflationParamsResponseProtoMsg): GovUpdateInflationParamsResponse {
    return GovUpdateInflationParamsResponse.decode(message.value);
  },
  toProto(message: GovUpdateInflationParamsResponse): Uint8Array {
    return GovUpdateInflationParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: GovUpdateInflationParamsResponse): GovUpdateInflationParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.GovUpdateInflationParamsResponse",
      value: GovUpdateInflationParamsResponse.encode(message).finish()
    };
  }
};