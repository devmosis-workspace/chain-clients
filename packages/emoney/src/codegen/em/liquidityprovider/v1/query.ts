import { LiquidityProviderAccount, LiquidityProviderAccountSDKType } from "./liquidityprovider";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryListRequest {}
export interface QueryListRequestSDKType {}
export interface QueryListResponse {
  liquidityProviders: LiquidityProviderAccount[];
}
export interface QueryListResponseSDKType {
  liquidity_providers: LiquidityProviderAccountSDKType[];
}
export interface QueryMintableRequest {
  /** address defines the liquidity provider address to query mintable. */
  address: string;
}
export interface QueryMintableRequestSDKType {
  address: string;
}
export interface QueryMintableResponse {
  mintable: Coin[];
}
export interface QueryMintableResponseSDKType {
  mintable: CoinSDKType[];
}
function createBaseQueryListRequest(): QueryListRequest {
  return {};
}
export const QueryListRequest = {
  encode(_: QueryListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryListRequest {
    return {};
  },
  fromPartial(_: Partial<QueryListRequest>): QueryListRequest {
    const message = createBaseQueryListRequest();
    return message;
  }
};
function createBaseQueryListResponse(): QueryListResponse {
  return {
    liquidityProviders: []
  };
}
export const QueryListResponse = {
  encode(message: QueryListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProviderAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryListResponse {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProviderAccount.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryListResponse>): QueryListResponse {
    const message = createBaseQueryListResponse();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProviderAccount.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryMintableRequest(): QueryMintableRequest {
  return {
    address: ""
  };
}
export const QueryMintableRequest = {
  encode(message: QueryMintableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryMintableRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryMintableRequest>): QueryMintableRequest {
    const message = createBaseQueryMintableRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryMintableResponse(): QueryMintableResponse {
  return {
    mintable: []
  };
}
export const QueryMintableResponse = {
  encode(message: QueryMintableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMintableResponse {
    return {
      mintable: Array.isArray(object?.mintable) ? object.mintable.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryMintableResponse>): QueryMintableResponse {
    const message = createBaseQueryMintableResponse();
    message.mintable = object.mintable?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};