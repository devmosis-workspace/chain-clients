import { Action, ClaimRecord, ClaimRecordSDKType, actionFromJSON } from "./claim";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Period, PeriodSDKType } from "../vesting/vesting";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../../helpers";
export interface ClaimStatus {
  airdropIdentifier: string;
  claimed: boolean;
}
export interface ClaimStatusSDKType {
  airdrop_identifier: string;
  claimed: boolean;
}
export interface QueryClaimStatusRequest {
  address: string;
}
export interface QueryClaimStatusRequestSDKType {
  address: string;
}
export interface QueryClaimStatusResponse {
  claimStatus: ClaimStatus[];
}
export interface QueryClaimStatusResponseSDKType {
  claim_status: ClaimStatusSDKType[];
}
export interface ClaimMetadata {
  airdropIdentifier: string;
  currentRound: string;
  currentRoundStart?: Timestamp;
  currentRoundEnd?: Timestamp;
}
export interface ClaimMetadataSDKType {
  airdrop_identifier: string;
  current_round: string;
  current_round_start?: TimestampSDKType;
  current_round_end?: TimestampSDKType;
}
export interface QueryClaimMetadataRequest {}
export interface QueryClaimMetadataRequestSDKType {}
export interface QueryClaimMetadataResponse {
  claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseSDKType {
  claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
  airdropIdentifier: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequestSDKType {
  airdrop_identifier: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponse {
  /** params defines the parameters of the module. */
  distributorAccountBalance: Coin[];
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseSDKType {
  distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
  airdropIdentifier: string;
  address: string;
}
export interface QueryClaimRecordRequestSDKType {
  airdrop_identifier: string;
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord?: ClaimRecord;
}
export interface QueryClaimRecordResponseSDKType {
  claim_record?: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
  airdropIdentifier: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestSDKType {
  airdrop_identifier: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
  airdropIdentifier: string;
  address: string;
  includeClaimed: boolean;
}
export interface QueryTotalClaimableRequestSDKType {
  airdrop_identifier: string;
  address: string;
  include_claimed: boolean;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
  address: string;
}
export interface QueryUserVestingsRequestSDKType {
  address: string;
}
export interface QueryUserVestingsResponse {
  spendableCoins: Coin[];
  periods: Period[];
}
export interface QueryUserVestingsResponseSDKType {
  spendable_coins: CoinSDKType[];
  periods: PeriodSDKType[];
}
function createBaseClaimStatus(): ClaimStatus {
  return {
    airdropIdentifier: "",
    claimed: false
  };
}
export const ClaimStatus = {
  encode(message: ClaimStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    return writer;
  },
  fromJSON(object: any): ClaimStatus {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false
    };
  },
  fromPartial(object: Partial<ClaimStatus>): ClaimStatus {
    const message = createBaseClaimStatus();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  }
};
function createBaseQueryClaimStatusRequest(): QueryClaimStatusRequest {
  return {
    address: ""
  };
}
export const QueryClaimStatusRequest = {
  encode(message: QueryClaimStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimStatusRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryClaimStatusRequest>): QueryClaimStatusRequest {
    const message = createBaseQueryClaimStatusRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryClaimStatusResponse(): QueryClaimStatusResponse {
  return {
    claimStatus: []
  };
}
export const QueryClaimStatusResponse = {
  encode(message: QueryClaimStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimStatus) {
      ClaimStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimStatusResponse {
    return {
      claimStatus: Array.isArray(object?.claimStatus) ? object.claimStatus.map((e: any) => ClaimStatus.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryClaimStatusResponse>): QueryClaimStatusResponse {
    const message = createBaseQueryClaimStatusResponse();
    message.claimStatus = object.claimStatus?.map(e => ClaimStatus.fromPartial(e)) || [];
    return message;
  }
};
function createBaseClaimMetadata(): ClaimMetadata {
  return {
    airdropIdentifier: "",
    currentRound: "",
    currentRoundStart: undefined,
    currentRoundEnd: undefined
  };
}
export const ClaimMetadata = {
  encode(message: ClaimMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.currentRound !== "") {
      writer.uint32(18).string(message.currentRound);
    }
    if (message.currentRoundStart !== undefined) {
      Timestamp.encode(message.currentRoundStart, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentRoundEnd !== undefined) {
      Timestamp.encode(message.currentRoundEnd, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClaimMetadata {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      currentRound: isSet(object.currentRound) ? String(object.currentRound) : "",
      currentRoundStart: isSet(object.currentRoundStart) ? fromJsonTimestamp(object.currentRoundStart) : undefined,
      currentRoundEnd: isSet(object.currentRoundEnd) ? fromJsonTimestamp(object.currentRoundEnd) : undefined
    };
  },
  fromPartial(object: Partial<ClaimMetadata>): ClaimMetadata {
    const message = createBaseClaimMetadata();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.currentRound = object.currentRound ?? "";
    message.currentRoundStart = object.currentRoundStart !== undefined && object.currentRoundStart !== null ? Timestamp.fromPartial(object.currentRoundStart) : undefined;
    message.currentRoundEnd = object.currentRoundEnd !== undefined && object.currentRoundEnd !== null ? Timestamp.fromPartial(object.currentRoundEnd) : undefined;
    return message;
  }
};
function createBaseQueryClaimMetadataRequest(): QueryClaimMetadataRequest {
  return {};
}
export const QueryClaimMetadataRequest = {
  encode(_: QueryClaimMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryClaimMetadataRequest {
    return {};
  },
  fromPartial(_: Partial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest {
    const message = createBaseQueryClaimMetadataRequest();
    return message;
  }
};
function createBaseQueryClaimMetadataResponse(): QueryClaimMetadataResponse {
  return {
    claimMetadata: []
  };
}
export const QueryClaimMetadataResponse = {
  encode(message: QueryClaimMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claimMetadata) {
      ClaimMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimMetadataResponse {
    return {
      claimMetadata: Array.isArray(object?.claimMetadata) ? object.claimMetadata.map((e: any) => ClaimMetadata.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryClaimMetadataResponse>): QueryClaimMetadataResponse {
    const message = createBaseQueryClaimMetadataResponse();
    message.claimMetadata = object.claimMetadata?.map(e => ClaimMetadata.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDistributorAccountBalanceRequest(): QueryDistributorAccountBalanceRequest {
  return {
    airdropIdentifier: ""
  };
}
export const QueryDistributorAccountBalanceRequest = {
  encode(message: QueryDistributorAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    return writer;
  },
  fromJSON(object: any): QueryDistributorAccountBalanceRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : ""
    };
  },
  fromPartial(object: Partial<QueryDistributorAccountBalanceRequest>): QueryDistributorAccountBalanceRequest {
    const message = createBaseQueryDistributorAccountBalanceRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    return message;
  }
};
function createBaseQueryDistributorAccountBalanceResponse(): QueryDistributorAccountBalanceResponse {
  return {
    distributorAccountBalance: []
  };
}
export const QueryDistributorAccountBalanceResponse = {
  encode(message: QueryDistributorAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.distributorAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDistributorAccountBalanceResponse {
    return {
      distributorAccountBalance: Array.isArray(object?.distributorAccountBalance) ? object.distributorAccountBalance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDistributorAccountBalanceResponse>): QueryDistributorAccountBalanceResponse {
    const message = createBaseQueryDistributorAccountBalanceResponse();
    message.distributorAccountBalance = object.distributorAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    airdropIdentifier: "",
    address: ""
  };
}
export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: undefined
  };
}
export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimRecordResponse {
    return {
      claimRecord: isSet(object.claimRecord) ? ClaimRecord.fromJSON(object.claimRecord) : undefined
    };
  },
  fromPartial(object: Partial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  }
};
function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    airdropIdentifier: "",
    address: "",
    action: 0
  };
}
export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimableForActionRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
      action: isSet(object.action) ? actionFromJSON(object.action) : 0
    };
  },
  fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  }
};
function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}
export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClaimableForActionResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    airdropIdentifier: "",
    address: "",
    includeClaimed: false
  };
}
export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropIdentifier !== "") {
      writer.uint32(10).string(message.airdropIdentifier);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.includeClaimed === true) {
      writer.uint32(24).bool(message.includeClaimed);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalClaimableRequest {
    return {
      airdropIdentifier: isSet(object.airdropIdentifier) ? String(object.airdropIdentifier) : "",
      address: isSet(object.address) ? String(object.address) : "",
      includeClaimed: isSet(object.includeClaimed) ? Boolean(object.includeClaimed) : false
    };
  },
  fromPartial(object: Partial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.includeClaimed = object.includeClaimed ?? false;
    return message;
  }
};
function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}
export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalClaimableResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryUserVestingsRequest(): QueryUserVestingsRequest {
  return {
    address: ""
  };
}
export const QueryUserVestingsRequest = {
  encode(message: QueryUserVestingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryUserVestingsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryUserVestingsRequest>): QueryUserVestingsRequest {
    const message = createBaseQueryUserVestingsRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryUserVestingsResponse(): QueryUserVestingsResponse {
  return {
    spendableCoins: [],
    periods: []
  };
}
export const QueryUserVestingsResponse = {
  encode(message: QueryUserVestingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendableCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periods) {
      Period.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUserVestingsResponse {
    return {
      spendableCoins: Array.isArray(object?.spendableCoins) ? object.spendableCoins.map((e: any) => Coin.fromJSON(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryUserVestingsResponse>): QueryUserVestingsResponse {
    const message = createBaseQueryUserVestingsResponse();
    message.spendableCoins = object.spendableCoins?.map(e => Coin.fromPartial(e)) || [];
    message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }
};