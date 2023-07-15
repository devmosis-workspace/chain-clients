import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryCirculatingRequest {}
export interface QueryCirculatingRequestSDKType {}
export interface QueryCirculatingResponse {
  total: Coin[];
}
export interface QueryCirculatingResponseSDKType {
  total: CoinSDKType[];
}
export interface QuerySpendableRequest {
  address: string;
}
export interface QuerySpendableRequestSDKType {
  address: string;
}
export interface QuerySpendableResponse {
  balance: Coin[];
}
export interface QuerySpendableResponseSDKType {
  balance: CoinSDKType[];
}
export interface QueryMissedBlocksRequest {
  /** cons_address is the address to query the missed blocks signing info */
  consAddress: string;
}
export interface QueryMissedBlocksRequestSDKType {
  cons_address: string;
}
export interface QueryMissedBlocksResponse {
  /** val_signing_info is the signing info of requested val cons address */
  missedBlocksInfo?: MissedBlocksInfo;
}
export interface QueryMissedBlocksResponseSDKType {
  missed_blocks_info?: MissedBlocksInfoSDKType;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfo {
  consAddress: string;
  /** missed blocks counter (to avoid scanning the array every time) */
  missedBlocksCounter: Long;
  totalBlocksCounter: Long;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoSDKType {
  cons_address: string;
  missed_blocks_counter: Long;
  total_blocks_counter: Long;
}
function createBaseQueryCirculatingRequest(): QueryCirculatingRequest {
  return {};
}
export const QueryCirculatingRequest = {
  encode(_: QueryCirculatingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCirculatingRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCirculatingRequest>): QueryCirculatingRequest {
    const message = createBaseQueryCirculatingRequest();
    return message;
  }
};
function createBaseQueryCirculatingResponse(): QueryCirculatingResponse {
  return {
    total: []
  };
}
export const QueryCirculatingResponse = {
  encode(message: QueryCirculatingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCirculatingResponse {
    return {
      total: Array.isArray(object?.total) ? object.total.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCirculatingResponse>): QueryCirculatingResponse {
    const message = createBaseQueryCirculatingResponse();
    message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuerySpendableRequest(): QuerySpendableRequest {
  return {
    address: ""
  };
}
export const QuerySpendableRequest = {
  encode(message: QuerySpendableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QuerySpendableRequest>): QuerySpendableRequest {
    const message = createBaseQuerySpendableRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQuerySpendableResponse(): QuerySpendableResponse {
  return {
    balance: []
  };
}
export const QuerySpendableResponse = {
  encode(message: QuerySpendableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpendableResponse>): QuerySpendableResponse {
    const message = createBaseQuerySpendableResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryMissedBlocksRequest(): QueryMissedBlocksRequest {
  return {
    consAddress: ""
  };
}
export const QueryMissedBlocksRequest = {
  encode(message: QueryMissedBlocksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissedBlocksRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryMissedBlocksRequest>): QueryMissedBlocksRequest {
    const message = createBaseQueryMissedBlocksRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  }
};
function createBaseQueryMissedBlocksResponse(): QueryMissedBlocksResponse {
  return {
    missedBlocksInfo: undefined
  };
}
export const QueryMissedBlocksResponse = {
  encode(message: QueryMissedBlocksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.missedBlocksInfo !== undefined) {
      MissedBlocksInfo.encode(message.missedBlocksInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMissedBlocksResponse {
    return {
      missedBlocksInfo: isSet(object.missedBlocksInfo) ? MissedBlocksInfo.fromJSON(object.missedBlocksInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryMissedBlocksResponse>): QueryMissedBlocksResponse {
    const message = createBaseQueryMissedBlocksResponse();
    message.missedBlocksInfo = object.missedBlocksInfo !== undefined && object.missedBlocksInfo !== null ? MissedBlocksInfo.fromPartial(object.missedBlocksInfo) : undefined;
    return message;
  }
};
function createBaseMissedBlocksInfo(): MissedBlocksInfo {
  return {
    consAddress: "",
    missedBlocksCounter: Long.ZERO,
    totalBlocksCounter: Long.ZERO
  };
}
export const MissedBlocksInfo = {
  encode(message: MissedBlocksInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    if (!message.missedBlocksCounter.isZero()) {
      writer.uint32(16).int64(message.missedBlocksCounter);
    }
    if (!message.totalBlocksCounter.isZero()) {
      writer.uint32(24).int64(message.totalBlocksCounter);
    }
    return writer;
  },
  fromJSON(object: any): MissedBlocksInfo {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : "",
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO,
      totalBlocksCounter: isSet(object.totalBlocksCounter) ? Long.fromValue(object.totalBlocksCounter) : Long.ZERO
    };
  },
  fromPartial(object: Partial<MissedBlocksInfo>): MissedBlocksInfo {
    const message = createBaseMissedBlocksInfo();
    message.consAddress = object.consAddress ?? "";
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO;
    message.totalBlocksCounter = object.totalBlocksCounter !== undefined && object.totalBlocksCounter !== null ? Long.fromValue(object.totalBlocksCounter) : Long.ZERO;
    return message;
  }
};