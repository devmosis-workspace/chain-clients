import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
export interface MsgIncreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgIncreaseMintableProtoMsg {
  typeUrl: "/em.issuer.v1.MsgIncreaseMintable";
  value: Uint8Array;
}
export interface MsgIncreaseMintableAmino {
  issuer: string;
  liquidity_provider: string;
  amount: CoinAmino[];
}
export interface MsgIncreaseMintableAminoMsg {
  type: "/em.issuer.v1.MsgIncreaseMintable";
  value: MsgIncreaseMintableAmino;
}
export interface MsgIncreaseMintableSDKType {
  issuer: string;
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgIncreaseMintableResponse {}
export interface MsgIncreaseMintableResponseProtoMsg {
  typeUrl: "/em.issuer.v1.MsgIncreaseMintableResponse";
  value: Uint8Array;
}
export interface MsgIncreaseMintableResponseAmino {}
export interface MsgIncreaseMintableResponseAminoMsg {
  type: "/em.issuer.v1.MsgIncreaseMintableResponse";
  value: MsgIncreaseMintableResponseAmino;
}
export interface MsgIncreaseMintableResponseSDKType {}
export interface MsgDecreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgDecreaseMintableProtoMsg {
  typeUrl: "/em.issuer.v1.MsgDecreaseMintable";
  value: Uint8Array;
}
export interface MsgDecreaseMintableAmino {
  issuer: string;
  liquidity_provider: string;
  amount: CoinAmino[];
}
export interface MsgDecreaseMintableAminoMsg {
  type: "/em.issuer.v1.MsgDecreaseMintable";
  value: MsgDecreaseMintableAmino;
}
export interface MsgDecreaseMintableSDKType {
  issuer: string;
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgDecreaseMintableResponse {}
export interface MsgDecreaseMintableResponseProtoMsg {
  typeUrl: "/em.issuer.v1.MsgDecreaseMintableResponse";
  value: Uint8Array;
}
export interface MsgDecreaseMintableResponseAmino {}
export interface MsgDecreaseMintableResponseAminoMsg {
  type: "/em.issuer.v1.MsgDecreaseMintableResponse";
  value: MsgDecreaseMintableResponseAmino;
}
export interface MsgDecreaseMintableResponseSDKType {}
export interface MsgRevokeLiquidityProvider {
  issuer: string;
  liquidityProvider: string;
}
export interface MsgRevokeLiquidityProviderProtoMsg {
  typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider";
  value: Uint8Array;
}
export interface MsgRevokeLiquidityProviderAmino {
  issuer: string;
  liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderAminoMsg {
  type: "/em.issuer.v1.MsgRevokeLiquidityProvider";
  value: MsgRevokeLiquidityProviderAmino;
}
export interface MsgRevokeLiquidityProviderSDKType {
  issuer: string;
  liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderResponse {}
export interface MsgRevokeLiquidityProviderResponseProtoMsg {
  typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse";
  value: Uint8Array;
}
export interface MsgRevokeLiquidityProviderResponseAmino {}
export interface MsgRevokeLiquidityProviderResponseAminoMsg {
  type: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse";
  value: MsgRevokeLiquidityProviderResponseAmino;
}
export interface MsgRevokeLiquidityProviderResponseSDKType {}
export interface MsgSetInflation {
  issuer: string;
  denom: string;
  inflationRate: string;
}
export interface MsgSetInflationProtoMsg {
  typeUrl: "/em.issuer.v1.MsgSetInflation";
  value: Uint8Array;
}
export interface MsgSetInflationAmino {
  issuer: string;
  denom: string;
  inflation_rate: string;
}
export interface MsgSetInflationAminoMsg {
  type: "/em.issuer.v1.MsgSetInflation";
  value: MsgSetInflationAmino;
}
export interface MsgSetInflationSDKType {
  issuer: string;
  denom: string;
  inflation_rate: string;
}
export interface MsgSetInflationResponse {}
export interface MsgSetInflationResponseProtoMsg {
  typeUrl: "/em.issuer.v1.MsgSetInflationResponse";
  value: Uint8Array;
}
export interface MsgSetInflationResponseAmino {}
export interface MsgSetInflationResponseAminoMsg {
  type: "/em.issuer.v1.MsgSetInflationResponse";
  value: MsgSetInflationResponseAmino;
}
export interface MsgSetInflationResponseSDKType {}
function createBaseMsgIncreaseMintable(): MsgIncreaseMintable {
  return {
    issuer: "",
    liquidityProvider: "",
    amount: []
  };
}
export const MsgIncreaseMintable = {
  typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
  encode(message: MsgIncreaseMintable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgIncreaseMintable {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      liquidityProvider: isSet(object.liquidityProvider) ? String(object.liquidityProvider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgIncreaseMintable>): MsgIncreaseMintable {
    const message = createBaseMsgIncreaseMintable();
    message.issuer = object.issuer ?? "";
    message.liquidityProvider = object.liquidityProvider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgIncreaseMintableAmino): MsgIncreaseMintable {
    return {
      issuer: object.issuer,
      liquidityProvider: object.liquidity_provider,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgIncreaseMintable): MsgIncreaseMintableAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.liquidity_provider = message.liquidityProvider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseMintableAminoMsg): MsgIncreaseMintable {
    return MsgIncreaseMintable.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreaseMintableProtoMsg): MsgIncreaseMintable {
    return MsgIncreaseMintable.decode(message.value);
  },
  toProto(message: MsgIncreaseMintable): Uint8Array {
    return MsgIncreaseMintable.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseMintable): MsgIncreaseMintableProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
      value: MsgIncreaseMintable.encode(message).finish()
    };
  }
};
function createBaseMsgIncreaseMintableResponse(): MsgIncreaseMintableResponse {
  return {};
}
export const MsgIncreaseMintableResponse = {
  typeUrl: "/em.issuer.v1.MsgIncreaseMintableResponse",
  encode(_: MsgIncreaseMintableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIncreaseMintableResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIncreaseMintableResponse>): MsgIncreaseMintableResponse {
    const message = createBaseMsgIncreaseMintableResponse();
    return message;
  },
  fromAmino(_: MsgIncreaseMintableResponseAmino): MsgIncreaseMintableResponse {
    return {};
  },
  toAmino(_: MsgIncreaseMintableResponse): MsgIncreaseMintableResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncreaseMintableResponseAminoMsg): MsgIncreaseMintableResponse {
    return MsgIncreaseMintableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncreaseMintableResponseProtoMsg): MsgIncreaseMintableResponse {
    return MsgIncreaseMintableResponse.decode(message.value);
  },
  toProto(message: MsgIncreaseMintableResponse): Uint8Array {
    return MsgIncreaseMintableResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncreaseMintableResponse): MsgIncreaseMintableResponseProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgIncreaseMintableResponse",
      value: MsgIncreaseMintableResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDecreaseMintable(): MsgDecreaseMintable {
  return {
    issuer: "",
    liquidityProvider: "",
    amount: []
  };
}
export const MsgDecreaseMintable = {
  typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
  encode(message: MsgDecreaseMintable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDecreaseMintable {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      liquidityProvider: isSet(object.liquidityProvider) ? String(object.liquidityProvider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDecreaseMintable>): MsgDecreaseMintable {
    const message = createBaseMsgDecreaseMintable();
    message.issuer = object.issuer ?? "";
    message.liquidityProvider = object.liquidityProvider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDecreaseMintableAmino): MsgDecreaseMintable {
    return {
      issuer: object.issuer,
      liquidityProvider: object.liquidity_provider,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgDecreaseMintable): MsgDecreaseMintableAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.liquidity_provider = message.liquidityProvider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgDecreaseMintableAminoMsg): MsgDecreaseMintable {
    return MsgDecreaseMintable.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecreaseMintableProtoMsg): MsgDecreaseMintable {
    return MsgDecreaseMintable.decode(message.value);
  },
  toProto(message: MsgDecreaseMintable): Uint8Array {
    return MsgDecreaseMintable.encode(message).finish();
  },
  toProtoMsg(message: MsgDecreaseMintable): MsgDecreaseMintableProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
      value: MsgDecreaseMintable.encode(message).finish()
    };
  }
};
function createBaseMsgDecreaseMintableResponse(): MsgDecreaseMintableResponse {
  return {};
}
export const MsgDecreaseMintableResponse = {
  typeUrl: "/em.issuer.v1.MsgDecreaseMintableResponse",
  encode(_: MsgDecreaseMintableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDecreaseMintableResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecreaseMintableResponse>): MsgDecreaseMintableResponse {
    const message = createBaseMsgDecreaseMintableResponse();
    return message;
  },
  fromAmino(_: MsgDecreaseMintableResponseAmino): MsgDecreaseMintableResponse {
    return {};
  },
  toAmino(_: MsgDecreaseMintableResponse): MsgDecreaseMintableResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDecreaseMintableResponseAminoMsg): MsgDecreaseMintableResponse {
    return MsgDecreaseMintableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDecreaseMintableResponseProtoMsg): MsgDecreaseMintableResponse {
    return MsgDecreaseMintableResponse.decode(message.value);
  },
  toProto(message: MsgDecreaseMintableResponse): Uint8Array {
    return MsgDecreaseMintableResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDecreaseMintableResponse): MsgDecreaseMintableResponseProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgDecreaseMintableResponse",
      value: MsgDecreaseMintableResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeLiquidityProvider(): MsgRevokeLiquidityProvider {
  return {
    issuer: "",
    liquidityProvider: ""
  };
}
export const MsgRevokeLiquidityProvider = {
  typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
  encode(message: MsgRevokeLiquidityProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    return writer;
  },
  fromJSON(object: any): MsgRevokeLiquidityProvider {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      liquidityProvider: isSet(object.liquidityProvider) ? String(object.liquidityProvider) : ""
    };
  },
  fromPartial(object: Partial<MsgRevokeLiquidityProvider>): MsgRevokeLiquidityProvider {
    const message = createBaseMsgRevokeLiquidityProvider();
    message.issuer = object.issuer ?? "";
    message.liquidityProvider = object.liquidityProvider ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeLiquidityProviderAmino): MsgRevokeLiquidityProvider {
    return {
      issuer: object.issuer,
      liquidityProvider: object.liquidity_provider
    };
  },
  toAmino(message: MsgRevokeLiquidityProvider): MsgRevokeLiquidityProviderAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.liquidity_provider = message.liquidityProvider;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeLiquidityProviderAminoMsg): MsgRevokeLiquidityProvider {
    return MsgRevokeLiquidityProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeLiquidityProviderProtoMsg): MsgRevokeLiquidityProvider {
    return MsgRevokeLiquidityProvider.decode(message.value);
  },
  toProto(message: MsgRevokeLiquidityProvider): Uint8Array {
    return MsgRevokeLiquidityProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeLiquidityProvider): MsgRevokeLiquidityProviderProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
      value: MsgRevokeLiquidityProvider.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeLiquidityProviderResponse(): MsgRevokeLiquidityProviderResponse {
  return {};
}
export const MsgRevokeLiquidityProviderResponse = {
  typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse",
  encode(_: MsgRevokeLiquidityProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRevokeLiquidityProviderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRevokeLiquidityProviderResponse>): MsgRevokeLiquidityProviderResponse {
    const message = createBaseMsgRevokeLiquidityProviderResponse();
    return message;
  },
  fromAmino(_: MsgRevokeLiquidityProviderResponseAmino): MsgRevokeLiquidityProviderResponse {
    return {};
  },
  toAmino(_: MsgRevokeLiquidityProviderResponse): MsgRevokeLiquidityProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeLiquidityProviderResponseAminoMsg): MsgRevokeLiquidityProviderResponse {
    return MsgRevokeLiquidityProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeLiquidityProviderResponseProtoMsg): MsgRevokeLiquidityProviderResponse {
    return MsgRevokeLiquidityProviderResponse.decode(message.value);
  },
  toProto(message: MsgRevokeLiquidityProviderResponse): Uint8Array {
    return MsgRevokeLiquidityProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeLiquidityProviderResponse): MsgRevokeLiquidityProviderResponseProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProviderResponse",
      value: MsgRevokeLiquidityProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetInflation(): MsgSetInflation {
  return {
    issuer: "",
    denom: "",
    inflationRate: ""
  };
}
export const MsgSetInflation = {
  typeUrl: "/em.issuer.v1.MsgSetInflation",
  encode(message: MsgSetInflation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.inflationRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetInflation {
    return {
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : ""
    };
  },
  fromPartial(object: Partial<MsgSetInflation>): MsgSetInflation {
    const message = createBaseMsgSetInflation();
    message.issuer = object.issuer ?? "";
    message.denom = object.denom ?? "";
    message.inflationRate = object.inflationRate ?? "";
    return message;
  },
  fromAmino(object: MsgSetInflationAmino): MsgSetInflation {
    return {
      issuer: object.issuer,
      denom: object.denom,
      inflationRate: object.inflation_rate
    };
  },
  toAmino(message: MsgSetInflation): MsgSetInflationAmino {
    const obj: any = {};
    obj.issuer = message.issuer;
    obj.denom = message.denom;
    obj.inflation_rate = message.inflationRate;
    return obj;
  },
  fromAminoMsg(object: MsgSetInflationAminoMsg): MsgSetInflation {
    return MsgSetInflation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetInflationProtoMsg): MsgSetInflation {
    return MsgSetInflation.decode(message.value);
  },
  toProto(message: MsgSetInflation): Uint8Array {
    return MsgSetInflation.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInflation): MsgSetInflationProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgSetInflation",
      value: MsgSetInflation.encode(message).finish()
    };
  }
};
function createBaseMsgSetInflationResponse(): MsgSetInflationResponse {
  return {};
}
export const MsgSetInflationResponse = {
  typeUrl: "/em.issuer.v1.MsgSetInflationResponse",
  encode(_: MsgSetInflationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetInflationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetInflationResponse>): MsgSetInflationResponse {
    const message = createBaseMsgSetInflationResponse();
    return message;
  },
  fromAmino(_: MsgSetInflationResponseAmino): MsgSetInflationResponse {
    return {};
  },
  toAmino(_: MsgSetInflationResponse): MsgSetInflationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetInflationResponseAminoMsg): MsgSetInflationResponse {
    return MsgSetInflationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetInflationResponseProtoMsg): MsgSetInflationResponse {
    return MsgSetInflationResponse.decode(message.value);
  },
  toProto(message: MsgSetInflationResponse): Uint8Array {
    return MsgSetInflationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetInflationResponse): MsgSetInflationResponseProtoMsg {
    return {
      typeUrl: "/em.issuer.v1.MsgSetInflationResponse",
      value: MsgSetInflationResponse.encode(message).finish()
    };
  }
};