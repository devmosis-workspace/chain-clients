import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgMintTokens {
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgMintTokensSDKType {
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgMintTokensResponse {}
export interface MsgMintTokensResponseSDKType {}
export interface MsgBurnTokens {
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgBurnTokensSDKType {
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgBurnTokensResponse {}
export interface MsgBurnTokensResponseSDKType {}
function createBaseMsgMintTokens(): MsgMintTokens {
  return {
    liquidityProvider: "",
    amount: []
  };
}
export const MsgMintTokens = {
  encode(message: MsgMintTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgMintTokensResponse(): MsgMintTokensResponse {
  return {};
}
export const MsgMintTokensResponse = {
  encode(_: MsgMintTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgMintTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMintTokensResponse>): MsgMintTokensResponse {
    const message = createBaseMsgMintTokensResponse();
    return message;
  }
};
function createBaseMsgBurnTokens(): MsgBurnTokens {
  return {
    liquidityProvider: "",
    amount: []
  };
}
export const MsgBurnTokens = {
  encode(message: MsgBurnTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgBurnTokensResponse(): MsgBurnTokensResponse {
  return {};
}
export const MsgBurnTokensResponse = {
  encode(_: MsgBurnTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBurnTokensResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBurnTokensResponse>): MsgBurnTokensResponse {
    const message = createBaseMsgBurnTokensResponse();
    return message;
  }
};