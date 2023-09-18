import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanAmino, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "../../../cosmos/params/v1beta1/params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgCreateIssuer {
  authority: string;
  issuer: string;
  denominations: Denomination[];
}
export interface MsgCreateIssuerProtoMsg {
  typeUrl: "/em.authority.v1.MsgCreateIssuer";
  value: Uint8Array;
}
export interface MsgCreateIssuerAmino {
  authority: string;
  issuer: string;
  denominations: DenominationAmino[];
}
export interface MsgCreateIssuerAminoMsg {
  type: "/em.authority.v1.MsgCreateIssuer";
  value: MsgCreateIssuerAmino;
}
export interface MsgCreateIssuerSDKType {
  authority: string;
  issuer: string;
  denominations: DenominationSDKType[];
}
export interface Denomination {
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  description: string;
}
export interface DenominationProtoMsg {
  typeUrl: "/em.authority.v1.Denomination";
  value: Uint8Array;
}
export interface DenominationAmino {
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  description: string;
}
export interface DenominationAminoMsg {
  type: "/em.authority.v1.Denomination";
  value: DenominationAmino;
}
export interface DenominationSDKType {
  base: string;
  display: string;
  description: string;
}
export interface MsgCreateIssuerResponse {}
export interface MsgCreateIssuerResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgCreateIssuerResponse";
  value: Uint8Array;
}
export interface MsgCreateIssuerResponseAmino {}
export interface MsgCreateIssuerResponseAminoMsg {
  type: "/em.authority.v1.MsgCreateIssuerResponse";
  value: MsgCreateIssuerResponseAmino;
}
export interface MsgCreateIssuerResponseSDKType {}
export interface MsgDestroyIssuer {
  authority: string;
  issuer: string;
}
export interface MsgDestroyIssuerProtoMsg {
  typeUrl: "/em.authority.v1.MsgDestroyIssuer";
  value: Uint8Array;
}
export interface MsgDestroyIssuerAmino {
  authority: string;
  issuer: string;
}
export interface MsgDestroyIssuerAminoMsg {
  type: "/em.authority.v1.MsgDestroyIssuer";
  value: MsgDestroyIssuerAmino;
}
export interface MsgDestroyIssuerSDKType {
  authority: string;
  issuer: string;
}
export interface MsgDestroyIssuerResponse {}
export interface MsgDestroyIssuerResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgDestroyIssuerResponse";
  value: Uint8Array;
}
export interface MsgDestroyIssuerResponseAmino {}
export interface MsgDestroyIssuerResponseAminoMsg {
  type: "/em.authority.v1.MsgDestroyIssuerResponse";
  value: MsgDestroyIssuerResponseAmino;
}
export interface MsgDestroyIssuerResponseSDKType {}
export interface MsgSetGasPrices {
  authority: string;
  gasPrices: DecCoin[];
}
export interface MsgSetGasPricesProtoMsg {
  typeUrl: "/em.authority.v1.MsgSetGasPrices";
  value: Uint8Array;
}
export interface MsgSetGasPricesAmino {
  authority: string;
  gas_prices: DecCoinAmino[];
}
export interface MsgSetGasPricesAminoMsg {
  type: "/em.authority.v1.MsgSetGasPrices";
  value: MsgSetGasPricesAmino;
}
export interface MsgSetGasPricesSDKType {
  authority: string;
  gas_prices: DecCoinSDKType[];
}
export interface MsgSetGasPricesResponse {}
export interface MsgSetGasPricesResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgSetGasPricesResponse";
  value: Uint8Array;
}
export interface MsgSetGasPricesResponseAmino {}
export interface MsgSetGasPricesResponseAminoMsg {
  type: "/em.authority.v1.MsgSetGasPricesResponse";
  value: MsgSetGasPricesResponseAmino;
}
export interface MsgSetGasPricesResponseSDKType {}
export interface MsgReplaceAuthority {
  authority: string;
  newAuthority: string;
}
export interface MsgReplaceAuthorityProtoMsg {
  typeUrl: "/em.authority.v1.MsgReplaceAuthority";
  value: Uint8Array;
}
export interface MsgReplaceAuthorityAmino {
  authority: string;
  new_authority: string;
}
export interface MsgReplaceAuthorityAminoMsg {
  type: "/em.authority.v1.MsgReplaceAuthority";
  value: MsgReplaceAuthorityAmino;
}
export interface MsgReplaceAuthoritySDKType {
  authority: string;
  new_authority: string;
}
export interface MsgReplaceAuthorityResponse {
  newAuthorityAddress: string;
}
export interface MsgReplaceAuthorityResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgReplaceAuthorityResponse";
  value: Uint8Array;
}
export interface MsgReplaceAuthorityResponseAmino {
  new_authority_address: string;
}
export interface MsgReplaceAuthorityResponseAminoMsg {
  type: "/em.authority.v1.MsgReplaceAuthorityResponse";
  value: MsgReplaceAuthorityResponseAmino;
}
export interface MsgReplaceAuthorityResponseSDKType {
  new_authority_address: string;
}
export interface MsgScheduleUpgrade {
  authority: string;
  plan: Plan;
}
export interface MsgScheduleUpgradeProtoMsg {
  typeUrl: "/em.authority.v1.MsgScheduleUpgrade";
  value: Uint8Array;
}
export interface MsgScheduleUpgradeAmino {
  authority: string;
  plan?: PlanAmino;
}
export interface MsgScheduleUpgradeAminoMsg {
  type: "/em.authority.v1.MsgScheduleUpgrade";
  value: MsgScheduleUpgradeAmino;
}
export interface MsgScheduleUpgradeSDKType {
  authority: string;
  plan: PlanSDKType;
}
export interface MsgScheduleUpgradeResponse {}
export interface MsgScheduleUpgradeResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgScheduleUpgradeResponse";
  value: Uint8Array;
}
export interface MsgScheduleUpgradeResponseAmino {}
export interface MsgScheduleUpgradeResponseAminoMsg {
  type: "/em.authority.v1.MsgScheduleUpgradeResponse";
  value: MsgScheduleUpgradeResponseAmino;
}
export interface MsgScheduleUpgradeResponseSDKType {}
export interface MsgSetParameters {
  authority: string;
  changes: ParamChange[];
}
export interface MsgSetParametersProtoMsg {
  typeUrl: "/em.authority.v1.MsgSetParameters";
  value: Uint8Array;
}
export interface MsgSetParametersAmino {
  authority: string;
  changes: ParamChangeAmino[];
}
export interface MsgSetParametersAminoMsg {
  type: "/em.authority.v1.MsgSetParameters";
  value: MsgSetParametersAmino;
}
export interface MsgSetParametersSDKType {
  authority: string;
  changes: ParamChangeSDKType[];
}
export interface MsgSetParametersResponse {}
export interface MsgSetParametersResponseProtoMsg {
  typeUrl: "/em.authority.v1.MsgSetParametersResponse";
  value: Uint8Array;
}
export interface MsgSetParametersResponseAmino {}
export interface MsgSetParametersResponseAminoMsg {
  type: "/em.authority.v1.MsgSetParametersResponse";
  value: MsgSetParametersResponseAmino;
}
export interface MsgSetParametersResponseSDKType {}
function createBaseMsgCreateIssuer(): MsgCreateIssuer {
  return {
    authority: "",
    issuer: "",
    denominations: []
  };
}
export const MsgCreateIssuer = {
  typeUrl: "/em.authority.v1.MsgCreateIssuer",
  encode(message: MsgCreateIssuer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    for (const v of message.denominations) {
      Denomination.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIssuer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      denominations: Array.isArray(object?.denominations) ? object.denominations.map((e: any) => Denomination.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = createBaseMsgCreateIssuer();
    message.authority = object.authority ?? "";
    message.issuer = object.issuer ?? "";
    message.denominations = object.denominations?.map(e => Denomination.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateIssuerAmino): MsgCreateIssuer {
    return {
      authority: object.authority,
      issuer: object.issuer,
      denominations: Array.isArray(object?.denominations) ? object.denominations.map((e: any) => Denomination.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreateIssuer): MsgCreateIssuerAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.issuer = message.issuer;
    if (message.denominations) {
      obj.denominations = message.denominations.map(e => e ? Denomination.toAmino(e) : undefined);
    } else {
      obj.denominations = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateIssuerAminoMsg): MsgCreateIssuer {
    return MsgCreateIssuer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIssuerProtoMsg): MsgCreateIssuer {
    return MsgCreateIssuer.decode(message.value);
  },
  toProto(message: MsgCreateIssuer): Uint8Array {
    return MsgCreateIssuer.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIssuer): MsgCreateIssuerProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgCreateIssuer",
      value: MsgCreateIssuer.encode(message).finish()
    };
  }
};
function createBaseDenomination(): Denomination {
  return {
    base: "",
    display: "",
    description: ""
  };
}
export const Denomination = {
  typeUrl: "/em.authority.v1.Denomination",
  encode(message: Denomination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Denomination {
    return {
      base: isSet(object.base) ? String(object.base) : "",
      display: isSet(object.display) ? String(object.display) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Denomination>): Denomination {
    const message = createBaseDenomination();
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: DenominationAmino): Denomination {
    return {
      base: object.base,
      display: object.display,
      description: object.description
    };
  },
  toAmino(message: Denomination): DenominationAmino {
    const obj: any = {};
    obj.base = message.base;
    obj.display = message.display;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: DenominationAminoMsg): Denomination {
    return Denomination.fromAmino(object.value);
  },
  fromProtoMsg(message: DenominationProtoMsg): Denomination {
    return Denomination.decode(message.value);
  },
  toProto(message: Denomination): Uint8Array {
    return Denomination.encode(message).finish();
  },
  toProtoMsg(message: Denomination): DenominationProtoMsg {
    return {
      typeUrl: "/em.authority.v1.Denomination",
      value: Denomination.encode(message).finish()
    };
  }
};
function createBaseMsgCreateIssuerResponse(): MsgCreateIssuerResponse {
  return {};
}
export const MsgCreateIssuerResponse = {
  typeUrl: "/em.authority.v1.MsgCreateIssuerResponse",
  encode(_: MsgCreateIssuerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateIssuerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse {
    const message = createBaseMsgCreateIssuerResponse();
    return message;
  },
  fromAmino(_: MsgCreateIssuerResponseAmino): MsgCreateIssuerResponse {
    return {};
  },
  toAmino(_: MsgCreateIssuerResponse): MsgCreateIssuerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateIssuerResponseAminoMsg): MsgCreateIssuerResponse {
    return MsgCreateIssuerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIssuerResponseProtoMsg): MsgCreateIssuerResponse {
    return MsgCreateIssuerResponse.decode(message.value);
  },
  toProto(message: MsgCreateIssuerResponse): Uint8Array {
    return MsgCreateIssuerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIssuerResponse): MsgCreateIssuerResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgCreateIssuerResponse",
      value: MsgCreateIssuerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDestroyIssuer(): MsgDestroyIssuer {
  return {
    authority: "",
    issuer: ""
  };
}
export const MsgDestroyIssuer = {
  typeUrl: "/em.authority.v1.MsgDestroyIssuer",
  encode(message: MsgDestroyIssuer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },
  fromJSON(object: any): MsgDestroyIssuer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : ""
    };
  },
  fromPartial(object: Partial<MsgDestroyIssuer>): MsgDestroyIssuer {
    const message = createBaseMsgDestroyIssuer();
    message.authority = object.authority ?? "";
    message.issuer = object.issuer ?? "";
    return message;
  },
  fromAmino(object: MsgDestroyIssuerAmino): MsgDestroyIssuer {
    return {
      authority: object.authority,
      issuer: object.issuer
    };
  },
  toAmino(message: MsgDestroyIssuer): MsgDestroyIssuerAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.issuer = message.issuer;
    return obj;
  },
  fromAminoMsg(object: MsgDestroyIssuerAminoMsg): MsgDestroyIssuer {
    return MsgDestroyIssuer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDestroyIssuerProtoMsg): MsgDestroyIssuer {
    return MsgDestroyIssuer.decode(message.value);
  },
  toProto(message: MsgDestroyIssuer): Uint8Array {
    return MsgDestroyIssuer.encode(message).finish();
  },
  toProtoMsg(message: MsgDestroyIssuer): MsgDestroyIssuerProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgDestroyIssuer",
      value: MsgDestroyIssuer.encode(message).finish()
    };
  }
};
function createBaseMsgDestroyIssuerResponse(): MsgDestroyIssuerResponse {
  return {};
}
export const MsgDestroyIssuerResponse = {
  typeUrl: "/em.authority.v1.MsgDestroyIssuerResponse",
  encode(_: MsgDestroyIssuerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDestroyIssuerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDestroyIssuerResponse>): MsgDestroyIssuerResponse {
    const message = createBaseMsgDestroyIssuerResponse();
    return message;
  },
  fromAmino(_: MsgDestroyIssuerResponseAmino): MsgDestroyIssuerResponse {
    return {};
  },
  toAmino(_: MsgDestroyIssuerResponse): MsgDestroyIssuerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDestroyIssuerResponseAminoMsg): MsgDestroyIssuerResponse {
    return MsgDestroyIssuerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDestroyIssuerResponseProtoMsg): MsgDestroyIssuerResponse {
    return MsgDestroyIssuerResponse.decode(message.value);
  },
  toProto(message: MsgDestroyIssuerResponse): Uint8Array {
    return MsgDestroyIssuerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDestroyIssuerResponse): MsgDestroyIssuerResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgDestroyIssuerResponse",
      value: MsgDestroyIssuerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetGasPrices(): MsgSetGasPrices {
  return {
    authority: "",
    gasPrices: []
  };
}
export const MsgSetGasPrices = {
  typeUrl: "/em.authority.v1.MsgSetGasPrices",
  encode(message: MsgSetGasPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.gasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetGasPrices {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      gasPrices: Array.isArray(object?.gasPrices) ? object.gasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetGasPrices>): MsgSetGasPrices {
    const message = createBaseMsgSetGasPrices();
    message.authority = object.authority ?? "";
    message.gasPrices = object.gasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetGasPricesAmino): MsgSetGasPrices {
    return {
      authority: object.authority,
      gasPrices: Array.isArray(object?.gas_prices) ? object.gas_prices.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSetGasPrices): MsgSetGasPricesAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.gasPrices) {
      obj.gas_prices = message.gasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.gas_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetGasPricesAminoMsg): MsgSetGasPrices {
    return MsgSetGasPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetGasPricesProtoMsg): MsgSetGasPrices {
    return MsgSetGasPrices.decode(message.value);
  },
  toProto(message: MsgSetGasPrices): Uint8Array {
    return MsgSetGasPrices.encode(message).finish();
  },
  toProtoMsg(message: MsgSetGasPrices): MsgSetGasPricesProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgSetGasPrices",
      value: MsgSetGasPrices.encode(message).finish()
    };
  }
};
function createBaseMsgSetGasPricesResponse(): MsgSetGasPricesResponse {
  return {};
}
export const MsgSetGasPricesResponse = {
  typeUrl: "/em.authority.v1.MsgSetGasPricesResponse",
  encode(_: MsgSetGasPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetGasPricesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetGasPricesResponse>): MsgSetGasPricesResponse {
    const message = createBaseMsgSetGasPricesResponse();
    return message;
  },
  fromAmino(_: MsgSetGasPricesResponseAmino): MsgSetGasPricesResponse {
    return {};
  },
  toAmino(_: MsgSetGasPricesResponse): MsgSetGasPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetGasPricesResponseAminoMsg): MsgSetGasPricesResponse {
    return MsgSetGasPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetGasPricesResponseProtoMsg): MsgSetGasPricesResponse {
    return MsgSetGasPricesResponse.decode(message.value);
  },
  toProto(message: MsgSetGasPricesResponse): Uint8Array {
    return MsgSetGasPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetGasPricesResponse): MsgSetGasPricesResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgSetGasPricesResponse",
      value: MsgSetGasPricesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAuthority(): MsgReplaceAuthority {
  return {
    authority: "",
    newAuthority: ""
  };
}
export const MsgReplaceAuthority = {
  typeUrl: "/em.authority.v1.MsgReplaceAuthority",
  encode(message: MsgReplaceAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAuthority {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      newAuthority: isSet(object.newAuthority) ? String(object.newAuthority) : ""
    };
  },
  fromPartial(object: Partial<MsgReplaceAuthority>): MsgReplaceAuthority {
    const message = createBaseMsgReplaceAuthority();
    message.authority = object.authority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
  fromAmino(object: MsgReplaceAuthorityAmino): MsgReplaceAuthority {
    return {
      authority: object.authority,
      newAuthority: object.new_authority
    };
  },
  toAmino(message: MsgReplaceAuthority): MsgReplaceAuthorityAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.new_authority = message.newAuthority;
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAuthorityAminoMsg): MsgReplaceAuthority {
    return MsgReplaceAuthority.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAuthorityProtoMsg): MsgReplaceAuthority {
    return MsgReplaceAuthority.decode(message.value);
  },
  toProto(message: MsgReplaceAuthority): Uint8Array {
    return MsgReplaceAuthority.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAuthority): MsgReplaceAuthorityProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgReplaceAuthority",
      value: MsgReplaceAuthority.encode(message).finish()
    };
  }
};
function createBaseMsgReplaceAuthorityResponse(): MsgReplaceAuthorityResponse {
  return {
    newAuthorityAddress: ""
  };
}
export const MsgReplaceAuthorityResponse = {
  typeUrl: "/em.authority.v1.MsgReplaceAuthorityResponse",
  encode(message: MsgReplaceAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newAuthorityAddress !== "") {
      writer.uint32(10).string(message.newAuthorityAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAuthorityResponse {
    return {
      newAuthorityAddress: isSet(object.newAuthorityAddress) ? String(object.newAuthorityAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgReplaceAuthorityResponse>): MsgReplaceAuthorityResponse {
    const message = createBaseMsgReplaceAuthorityResponse();
    message.newAuthorityAddress = object.newAuthorityAddress ?? "";
    return message;
  },
  fromAmino(object: MsgReplaceAuthorityResponseAmino): MsgReplaceAuthorityResponse {
    return {
      newAuthorityAddress: object.new_authority_address
    };
  },
  toAmino(message: MsgReplaceAuthorityResponse): MsgReplaceAuthorityResponseAmino {
    const obj: any = {};
    obj.new_authority_address = message.newAuthorityAddress;
    return obj;
  },
  fromAminoMsg(object: MsgReplaceAuthorityResponseAminoMsg): MsgReplaceAuthorityResponse {
    return MsgReplaceAuthorityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgReplaceAuthorityResponseProtoMsg): MsgReplaceAuthorityResponse {
    return MsgReplaceAuthorityResponse.decode(message.value);
  },
  toProto(message: MsgReplaceAuthorityResponse): Uint8Array {
    return MsgReplaceAuthorityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgReplaceAuthorityResponse): MsgReplaceAuthorityResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgReplaceAuthorityResponse",
      value: MsgReplaceAuthorityResponse.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleUpgrade(): MsgScheduleUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({})
  };
}
export const MsgScheduleUpgrade = {
  typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
  encode(message: MsgScheduleUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  fromPartial(object: Partial<MsgScheduleUpgrade>): MsgScheduleUpgrade {
    const message = createBaseMsgScheduleUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: MsgScheduleUpgradeAmino): MsgScheduleUpgrade {
    return {
      authority: object.authority,
      plan: object?.plan ? Plan.fromAmino(object.plan) : undefined
    };
  },
  toAmino(message: MsgScheduleUpgrade): MsgScheduleUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgScheduleUpgradeAminoMsg): MsgScheduleUpgrade {
    return MsgScheduleUpgrade.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleUpgradeProtoMsg): MsgScheduleUpgrade {
    return MsgScheduleUpgrade.decode(message.value);
  },
  toProto(message: MsgScheduleUpgrade): Uint8Array {
    return MsgScheduleUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleUpgrade): MsgScheduleUpgradeProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
      value: MsgScheduleUpgrade.encode(message).finish()
    };
  }
};
function createBaseMsgScheduleUpgradeResponse(): MsgScheduleUpgradeResponse {
  return {};
}
export const MsgScheduleUpgradeResponse = {
  typeUrl: "/em.authority.v1.MsgScheduleUpgradeResponse",
  encode(_: MsgScheduleUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgScheduleUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleUpgradeResponse>): MsgScheduleUpgradeResponse {
    const message = createBaseMsgScheduleUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgScheduleUpgradeResponseAmino): MsgScheduleUpgradeResponse {
    return {};
  },
  toAmino(_: MsgScheduleUpgradeResponse): MsgScheduleUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgScheduleUpgradeResponseAminoMsg): MsgScheduleUpgradeResponse {
    return MsgScheduleUpgradeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgScheduleUpgradeResponseProtoMsg): MsgScheduleUpgradeResponse {
    return MsgScheduleUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgScheduleUpgradeResponse): Uint8Array {
    return MsgScheduleUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgScheduleUpgradeResponse): MsgScheduleUpgradeResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgScheduleUpgradeResponse",
      value: MsgScheduleUpgradeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetParameters(): MsgSetParameters {
  return {
    authority: "",
    changes: []
  };
}
export const MsgSetParameters = {
  typeUrl: "/em.authority.v1.MsgSetParameters",
  encode(message: MsgSetParameters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetParameters {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetParameters>): MsgSetParameters {
    const message = createBaseMsgSetParameters();
    message.authority = object.authority ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetParametersAmino): MsgSetParameters {
    return {
      authority: object.authority,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSetParameters): MsgSetParametersAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toAmino(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetParametersAminoMsg): MsgSetParameters {
    return MsgSetParameters.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetParametersProtoMsg): MsgSetParameters {
    return MsgSetParameters.decode(message.value);
  },
  toProto(message: MsgSetParameters): Uint8Array {
    return MsgSetParameters.encode(message).finish();
  },
  toProtoMsg(message: MsgSetParameters): MsgSetParametersProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgSetParameters",
      value: MsgSetParameters.encode(message).finish()
    };
  }
};
function createBaseMsgSetParametersResponse(): MsgSetParametersResponse {
  return {};
}
export const MsgSetParametersResponse = {
  typeUrl: "/em.authority.v1.MsgSetParametersResponse",
  encode(_: MsgSetParametersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetParametersResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetParametersResponse>): MsgSetParametersResponse {
    const message = createBaseMsgSetParametersResponse();
    return message;
  },
  fromAmino(_: MsgSetParametersResponseAmino): MsgSetParametersResponse {
    return {};
  },
  toAmino(_: MsgSetParametersResponse): MsgSetParametersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetParametersResponseAminoMsg): MsgSetParametersResponse {
    return MsgSetParametersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetParametersResponseProtoMsg): MsgSetParametersResponse {
    return MsgSetParametersResponse.decode(message.value);
  },
  toProto(message: MsgSetParametersResponse): Uint8Array {
    return MsgSetParametersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetParametersResponse): MsgSetParametersResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.MsgSetParametersResponse",
      value: MsgSetParametersResponse.encode(message).finish()
    };
  }
};