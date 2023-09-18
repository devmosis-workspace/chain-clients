import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgMintTokens {
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgMintTokensProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.MsgMintTokens";
  value: Uint8Array;
}
export interface MsgMintTokensAmino {
  liquidity_provider: string;
  amount: CoinAmino[];
}
export interface MsgMintTokensAminoMsg {
  type: "/em.liquidityprovider.v1.MsgMintTokens";
  value: MsgMintTokensAmino;
}
export interface MsgMintTokensSDKType {
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgMintTokensResponse {}
export interface MsgMintTokensResponseProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.MsgMintTokensResponse";
  value: Uint8Array;
}
export interface MsgMintTokensResponseAmino {}
export interface MsgMintTokensResponseAminoMsg {
  type: "/em.liquidityprovider.v1.MsgMintTokensResponse";
  value: MsgMintTokensResponseAmino;
}
export interface MsgMintTokensResponseSDKType {}
export interface MsgBurnTokens {
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgBurnTokensProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens";
  value: Uint8Array;
}
export interface MsgBurnTokensAmino {
  liquidity_provider: string;
  amount: CoinAmino[];
}
export interface MsgBurnTokensAminoMsg {
  type: "/em.liquidityprovider.v1.MsgBurnTokens";
  value: MsgBurnTokensAmino;
}
export interface MsgBurnTokensSDKType {
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgBurnTokensResponse {}
export interface MsgBurnTokensResponseProtoMsg {
  typeUrl: "/em.liquidityprovider.v1.MsgBurnTokensResponse";
  value: Uint8Array;
}
export interface MsgBurnTokensResponseAmino {}
export interface MsgBurnTokensResponseAminoMsg {
  type: "/em.liquidityprovider.v1.MsgBurnTokensResponse";
  value: MsgBurnTokensResponseAmino;
}
export interface MsgBurnTokensResponseSDKType {}
function createBaseMsgMintTokens(): MsgMintTokens {
  return {
    liquidityProvider: "",
    amount: []
  };
}
export const MsgMintTokens = {
  typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
  encode(message: MsgMintTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityProvider !== "") {
      writer.uint32(10).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMintTokens {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? String(object.liquidityProvider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgMintTokens>): MsgMintTokens {
    const message = createBaseMsgMintTokens();
    message.liquidityProvider = object.liquidityProvider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMintTokensAmino): MsgMintTokens {
    return {
      liquidityProvider: object.liquidity_provider,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgMintTokens): MsgMintTokensAmino {
    const obj: any = {};
    obj.liquidity_provider = message.liquidityProvider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgMintTokensAminoMsg): MsgMintTokens {
    return MsgMintTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintTokensProtoMsg): MsgMintTokens {
    return MsgMintTokens.decode(message.value);
  },
  toProto(message: MsgMintTokens): Uint8Array {
    return MsgMintTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgMintTokens): MsgMintTokensProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
      value: MsgMintTokens.encode(message).finish()
    };
  }
};
function createBaseMsgMintTokensResponse(): MsgMintTokensResponse {
  return {};
}
export const MsgMintTokensResponse = {
  typeUrl: "/em.liquidityprovider.v1.MsgMintTokensResponse",
  encode(_: MsgMintTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMintTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintTokensResponse>): MsgMintTokensResponse {
    const message = createBaseMsgMintTokensResponse();
    return message;
  },
  fromAmino(_: MsgMintTokensResponseAmino): MsgMintTokensResponse {
    return {};
  },
  toAmino(_: MsgMintTokensResponse): MsgMintTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintTokensResponseAminoMsg): MsgMintTokensResponse {
    return MsgMintTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintTokensResponseProtoMsg): MsgMintTokensResponse {
    return MsgMintTokensResponse.decode(message.value);
  },
  toProto(message: MsgMintTokensResponse): Uint8Array {
    return MsgMintTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintTokensResponse): MsgMintTokensResponseProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.MsgMintTokensResponse",
      value: MsgMintTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnTokens(): MsgBurnTokens {
  return {
    liquidityProvider: "",
    amount: []
  };
}
export const MsgBurnTokens = {
  typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
  encode(message: MsgBurnTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityProvider !== "") {
      writer.uint32(10).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBurnTokens {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? String(object.liquidityProvider) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgBurnTokens>): MsgBurnTokens {
    const message = createBaseMsgBurnTokens();
    message.liquidityProvider = object.liquidityProvider ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBurnTokensAmino): MsgBurnTokens {
    return {
      liquidityProvider: object.liquidity_provider,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBurnTokens): MsgBurnTokensAmino {
    const obj: any = {};
    obj.liquidity_provider = message.liquidityProvider;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBurnTokensAminoMsg): MsgBurnTokens {
    return MsgBurnTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnTokensProtoMsg): MsgBurnTokens {
    return MsgBurnTokens.decode(message.value);
  },
  toProto(message: MsgBurnTokens): Uint8Array {
    return MsgBurnTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnTokens): MsgBurnTokensProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
      value: MsgBurnTokens.encode(message).finish()
    };
  }
};
function createBaseMsgBurnTokensResponse(): MsgBurnTokensResponse {
  return {};
}
export const MsgBurnTokensResponse = {
  typeUrl: "/em.liquidityprovider.v1.MsgBurnTokensResponse",
  encode(_: MsgBurnTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBurnTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnTokensResponse>): MsgBurnTokensResponse {
    const message = createBaseMsgBurnTokensResponse();
    return message;
  },
  fromAmino(_: MsgBurnTokensResponseAmino): MsgBurnTokensResponse {
    return {};
  },
  toAmino(_: MsgBurnTokensResponse): MsgBurnTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnTokensResponseAminoMsg): MsgBurnTokensResponse {
    return MsgBurnTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnTokensResponseProtoMsg): MsgBurnTokensResponse {
    return MsgBurnTokensResponse.decode(message.value);
  },
  toProto(message: MsgBurnTokensResponse): Uint8Array {
    return MsgBurnTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnTokensResponse): MsgBurnTokensResponseProtoMsg {
    return {
      typeUrl: "/em.liquidityprovider.v1.MsgBurnTokensResponse",
      value: MsgBurnTokensResponse.encode(message).finish()
    };
  }
};