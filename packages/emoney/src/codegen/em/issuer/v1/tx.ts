import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgIncreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgIncreaseMintableSDKType {
  issuer: string;
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgIncreaseMintableResponse {}
export interface MsgIncreaseMintableResponseSDKType {}
export interface MsgDecreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}
export interface MsgDecreaseMintableSDKType {
  issuer: string;
  liquidity_provider: string;
  amount: CoinSDKType[];
}
export interface MsgDecreaseMintableResponse {}
export interface MsgDecreaseMintableResponseSDKType {}
export interface MsgRevokeLiquidityProvider {
  issuer: string;
  liquidityProvider: string;
}
export interface MsgRevokeLiquidityProviderSDKType {
  issuer: string;
  liquidity_provider: string;
}
export interface MsgRevokeLiquidityProviderResponse {}
export interface MsgRevokeLiquidityProviderResponseSDKType {}
export interface MsgSetInflation {
  issuer: string;
  denom: string;
  inflationRate: string;
}
export interface MsgSetInflationSDKType {
  issuer: string;
  denom: string;
  inflation_rate: string;
}
export interface MsgSetInflationResponse {}
export interface MsgSetInflationResponseSDKType {}
function createBaseMsgIncreaseMintable(): MsgIncreaseMintable {
  return {
    issuer: "",
    liquidityProvider: "",
    amount: []
  };
}
export const MsgIncreaseMintable = {
  encode(message: MsgIncreaseMintable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgIncreaseMintableResponse(): MsgIncreaseMintableResponse {
  return {};
}
export const MsgIncreaseMintableResponse = {
  encode(_: MsgIncreaseMintableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgIncreaseMintableResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIncreaseMintableResponse>): MsgIncreaseMintableResponse {
    const message = createBaseMsgIncreaseMintableResponse();
    return message;
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
  encode(message: MsgDecreaseMintable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgDecreaseMintableResponse(): MsgDecreaseMintableResponse {
  return {};
}
export const MsgDecreaseMintableResponse = {
  encode(_: MsgDecreaseMintableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDecreaseMintableResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDecreaseMintableResponse>): MsgDecreaseMintableResponse {
    const message = createBaseMsgDecreaseMintableResponse();
    return message;
  }
};
function createBaseMsgRevokeLiquidityProvider(): MsgRevokeLiquidityProvider {
  return {
    issuer: "",
    liquidityProvider: ""
  };
}
export const MsgRevokeLiquidityProvider = {
  encode(message: MsgRevokeLiquidityProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMsgRevokeLiquidityProviderResponse(): MsgRevokeLiquidityProviderResponse {
  return {};
}
export const MsgRevokeLiquidityProviderResponse = {
  encode(_: MsgRevokeLiquidityProviderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgRevokeLiquidityProviderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRevokeLiquidityProviderResponse>): MsgRevokeLiquidityProviderResponse {
    const message = createBaseMsgRevokeLiquidityProviderResponse();
    return message;
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
  encode(message: MsgSetInflation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.inflationRate !== "") {
      writer.uint32(26).string(message.inflationRate);
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
  }
};
function createBaseMsgSetInflationResponse(): MsgSetInflationResponse {
  return {};
}
export const MsgSetInflationResponse = {
  encode(_: MsgSetInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetInflationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetInflationResponse>): MsgSetInflationResponse {
    const message = createBaseMsgSetInflationResponse();
    return message;
  }
};