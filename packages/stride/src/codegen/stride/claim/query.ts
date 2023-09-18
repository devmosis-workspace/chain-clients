import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType, actionFromJSON } from "./claim";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Period, PeriodAmino, PeriodSDKType } from "../vesting/vesting";
import { BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp } from "../../helpers";
export interface ClaimStatus {
  airdropIdentifier: string;
  claimed: boolean;
}
export interface ClaimStatusProtoMsg {
  typeUrl: "/stride.claim.ClaimStatus";
  value: Uint8Array;
}
export interface ClaimStatusAmino {
  airdrop_identifier: string;
  claimed: boolean;
}
export interface ClaimStatusAminoMsg {
  type: "/stride.claim.ClaimStatus";
  value: ClaimStatusAmino;
}
export interface ClaimStatusSDKType {
  airdrop_identifier: string;
  claimed: boolean;
}
export interface QueryClaimStatusRequest {
  address: string;
}
export interface QueryClaimStatusRequestProtoMsg {
  typeUrl: "/stride.claim.QueryClaimStatusRequest";
  value: Uint8Array;
}
export interface QueryClaimStatusRequestAmino {
  address: string;
}
export interface QueryClaimStatusRequestAminoMsg {
  type: "/stride.claim.QueryClaimStatusRequest";
  value: QueryClaimStatusRequestAmino;
}
export interface QueryClaimStatusRequestSDKType {
  address: string;
}
export interface QueryClaimStatusResponse {
  claimStatus: ClaimStatus[];
}
export interface QueryClaimStatusResponseProtoMsg {
  typeUrl: "/stride.claim.QueryClaimStatusResponse";
  value: Uint8Array;
}
export interface QueryClaimStatusResponseAmino {
  claim_status: ClaimStatusAmino[];
}
export interface QueryClaimStatusResponseAminoMsg {
  type: "/stride.claim.QueryClaimStatusResponse";
  value: QueryClaimStatusResponseAmino;
}
export interface QueryClaimStatusResponseSDKType {
  claim_status: ClaimStatusSDKType[];
}
export interface ClaimMetadata {
  airdropIdentifier: string;
  currentRound: string;
  currentRoundStart: Timestamp;
  currentRoundEnd: Timestamp;
}
export interface ClaimMetadataProtoMsg {
  typeUrl: "/stride.claim.ClaimMetadata";
  value: Uint8Array;
}
export interface ClaimMetadataAmino {
  airdrop_identifier: string;
  current_round: string;
  current_round_start?: TimestampAmino;
  current_round_end?: TimestampAmino;
}
export interface ClaimMetadataAminoMsg {
  type: "/stride.claim.ClaimMetadata";
  value: ClaimMetadataAmino;
}
export interface ClaimMetadataSDKType {
  airdrop_identifier: string;
  current_round: string;
  current_round_start: TimestampSDKType;
  current_round_end: TimestampSDKType;
}
export interface QueryClaimMetadataRequest {}
export interface QueryClaimMetadataRequestProtoMsg {
  typeUrl: "/stride.claim.QueryClaimMetadataRequest";
  value: Uint8Array;
}
export interface QueryClaimMetadataRequestAmino {}
export interface QueryClaimMetadataRequestAminoMsg {
  type: "/stride.claim.QueryClaimMetadataRequest";
  value: QueryClaimMetadataRequestAmino;
}
export interface QueryClaimMetadataRequestSDKType {}
export interface QueryClaimMetadataResponse {
  claimMetadata: ClaimMetadata[];
}
export interface QueryClaimMetadataResponseProtoMsg {
  typeUrl: "/stride.claim.QueryClaimMetadataResponse";
  value: Uint8Array;
}
export interface QueryClaimMetadataResponseAmino {
  claim_metadata: ClaimMetadataAmino[];
}
export interface QueryClaimMetadataResponseAminoMsg {
  type: "/stride.claim.QueryClaimMetadataResponse";
  value: QueryClaimMetadataResponseAmino;
}
export interface QueryClaimMetadataResponseSDKType {
  claim_metadata: ClaimMetadataSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequest {
  airdropIdentifier: string;
}
export interface QueryDistributorAccountBalanceRequestProtoMsg {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceRequestAmino {
  airdrop_identifier: string;
}
export interface QueryDistributorAccountBalanceRequestAminoMsg {
  type: "/stride.claim.QueryDistributorAccountBalanceRequest";
  value: QueryDistributorAccountBalanceRequestAmino;
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
export interface QueryDistributorAccountBalanceResponseProtoMsg {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseAmino {
  /** params defines the parameters of the module. */
  distributor_account_balance: CoinAmino[];
}
export interface QueryDistributorAccountBalanceResponseAminoMsg {
  type: "/stride.claim.QueryDistributorAccountBalanceResponse";
  value: QueryDistributorAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryDistributorAccountBalanceResponseSDKType {
  distributor_account_balance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/stride.claim.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/stride.claim.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/stride.claim.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/stride.claim.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
  airdropIdentifier: string;
  address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
  typeUrl: "/stride.claim.QueryClaimRecordRequest";
  value: Uint8Array;
}
export interface QueryClaimRecordRequestAmino {
  airdrop_identifier: string;
  address: string;
}
export interface QueryClaimRecordRequestAminoMsg {
  type: "/stride.claim.QueryClaimRecordRequest";
  value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
  airdrop_identifier: string;
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
  typeUrl: "/stride.claim.QueryClaimRecordResponse";
  value: Uint8Array;
}
export interface QueryClaimRecordResponseAmino {
  claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
  type: "/stride.claim.QueryClaimRecordResponse";
  value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
  claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
  airdropIdentifier: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
  typeUrl: "/stride.claim.QueryClaimableForActionRequest";
  value: Uint8Array;
}
export interface QueryClaimableForActionRequestAmino {
  airdrop_identifier: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
  type: "/stride.claim.QueryClaimableForActionRequest";
  value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
  airdrop_identifier: string;
  address: string;
  action: Action;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
  typeUrl: "/stride.claim.QueryClaimableForActionResponse";
  value: Uint8Array;
}
export interface QueryClaimableForActionResponseAmino {
  coins: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
  type: "/stride.claim.QueryClaimableForActionResponse";
  value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
  airdropIdentifier: string;
  address: string;
  includeClaimed: boolean;
}
export interface QueryTotalClaimableRequestProtoMsg {
  typeUrl: "/stride.claim.QueryTotalClaimableRequest";
  value: Uint8Array;
}
export interface QueryTotalClaimableRequestAmino {
  airdrop_identifier: string;
  address: string;
  include_claimed: boolean;
}
export interface QueryTotalClaimableRequestAminoMsg {
  type: "/stride.claim.QueryTotalClaimableRequest";
  value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
  airdrop_identifier: string;
  address: string;
  include_claimed: boolean;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
  typeUrl: "/stride.claim.QueryTotalClaimableResponse";
  value: Uint8Array;
}
export interface QueryTotalClaimableResponseAmino {
  coins: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
  type: "/stride.claim.QueryTotalClaimableResponse";
  value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryUserVestingsRequest {
  address: string;
}
export interface QueryUserVestingsRequestProtoMsg {
  typeUrl: "/stride.claim.QueryUserVestingsRequest";
  value: Uint8Array;
}
export interface QueryUserVestingsRequestAmino {
  address: string;
}
export interface QueryUserVestingsRequestAminoMsg {
  type: "/stride.claim.QueryUserVestingsRequest";
  value: QueryUserVestingsRequestAmino;
}
export interface QueryUserVestingsRequestSDKType {
  address: string;
}
export interface QueryUserVestingsResponse {
  spendableCoins: Coin[];
  periods: Period[];
}
export interface QueryUserVestingsResponseProtoMsg {
  typeUrl: "/stride.claim.QueryUserVestingsResponse";
  value: Uint8Array;
}
export interface QueryUserVestingsResponseAmino {
  spendable_coins: CoinAmino[];
  periods: PeriodAmino[];
}
export interface QueryUserVestingsResponseAminoMsg {
  type: "/stride.claim.QueryUserVestingsResponse";
  value: QueryUserVestingsResponseAmino;
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
  typeUrl: "/stride.claim.ClaimStatus",
  encode(message: ClaimStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClaimStatusAmino): ClaimStatus {
    return {
      airdropIdentifier: object.airdrop_identifier,
      claimed: object.claimed
    };
  },
  toAmino(message: ClaimStatus): ClaimStatusAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.claimed = message.claimed;
    return obj;
  },
  fromAminoMsg(object: ClaimStatusAminoMsg): ClaimStatus {
    return ClaimStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimStatusProtoMsg): ClaimStatus {
    return ClaimStatus.decode(message.value);
  },
  toProto(message: ClaimStatus): Uint8Array {
    return ClaimStatus.encode(message).finish();
  },
  toProtoMsg(message: ClaimStatus): ClaimStatusProtoMsg {
    return {
      typeUrl: "/stride.claim.ClaimStatus",
      value: ClaimStatus.encode(message).finish()
    };
  }
};
function createBaseQueryClaimStatusRequest(): QueryClaimStatusRequest {
  return {
    address: ""
  };
}
export const QueryClaimStatusRequest = {
  typeUrl: "/stride.claim.QueryClaimStatusRequest",
  encode(message: QueryClaimStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimStatusRequestAmino): QueryClaimStatusRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryClaimStatusRequest): QueryClaimStatusRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimStatusRequestAminoMsg): QueryClaimStatusRequest {
    return QueryClaimStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimStatusRequestProtoMsg): QueryClaimStatusRequest {
    return QueryClaimStatusRequest.decode(message.value);
  },
  toProto(message: QueryClaimStatusRequest): Uint8Array {
    return QueryClaimStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimStatusRequest): QueryClaimStatusRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimStatusRequest",
      value: QueryClaimStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimStatusResponse(): QueryClaimStatusResponse {
  return {
    claimStatus: []
  };
}
export const QueryClaimStatusResponse = {
  typeUrl: "/stride.claim.QueryClaimStatusResponse",
  encode(message: QueryClaimStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimStatusResponseAmino): QueryClaimStatusResponse {
    return {
      claimStatus: Array.isArray(object?.claim_status) ? object.claim_status.map((e: any) => ClaimStatus.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimStatusResponse): QueryClaimStatusResponseAmino {
    const obj: any = {};
    if (message.claimStatus) {
      obj.claim_status = message.claimStatus.map(e => e ? ClaimStatus.toAmino(e) : undefined);
    } else {
      obj.claim_status = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimStatusResponseAminoMsg): QueryClaimStatusResponse {
    return QueryClaimStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimStatusResponseProtoMsg): QueryClaimStatusResponse {
    return QueryClaimStatusResponse.decode(message.value);
  },
  toProto(message: QueryClaimStatusResponse): Uint8Array {
    return QueryClaimStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimStatusResponse): QueryClaimStatusResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimStatusResponse",
      value: QueryClaimStatusResponse.encode(message).finish()
    };
  }
};
function createBaseClaimMetadata(): ClaimMetadata {
  return {
    airdropIdentifier: "",
    currentRound: "",
    currentRoundStart: Timestamp.fromPartial({}),
    currentRoundEnd: Timestamp.fromPartial({})
  };
}
export const ClaimMetadata = {
  typeUrl: "/stride.claim.ClaimMetadata",
  encode(message: ClaimMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ClaimMetadataAmino): ClaimMetadata {
    return {
      airdropIdentifier: object.airdrop_identifier,
      currentRound: object.current_round,
      currentRoundStart: object.current_round_start,
      currentRoundEnd: object.current_round_end
    };
  },
  toAmino(message: ClaimMetadata): ClaimMetadataAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.current_round = message.currentRound;
    obj.current_round_start = message.currentRoundStart;
    obj.current_round_end = message.currentRoundEnd;
    return obj;
  },
  fromAminoMsg(object: ClaimMetadataAminoMsg): ClaimMetadata {
    return ClaimMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimMetadataProtoMsg): ClaimMetadata {
    return ClaimMetadata.decode(message.value);
  },
  toProto(message: ClaimMetadata): Uint8Array {
    return ClaimMetadata.encode(message).finish();
  },
  toProtoMsg(message: ClaimMetadata): ClaimMetadataProtoMsg {
    return {
      typeUrl: "/stride.claim.ClaimMetadata",
      value: ClaimMetadata.encode(message).finish()
    };
  }
};
function createBaseQueryClaimMetadataRequest(): QueryClaimMetadataRequest {
  return {};
}
export const QueryClaimMetadataRequest = {
  typeUrl: "/stride.claim.QueryClaimMetadataRequest",
  encode(_: QueryClaimMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryClaimMetadataRequest {
    return {};
  },
  fromPartial(_: Partial<QueryClaimMetadataRequest>): QueryClaimMetadataRequest {
    const message = createBaseQueryClaimMetadataRequest();
    return message;
  },
  fromAmino(_: QueryClaimMetadataRequestAmino): QueryClaimMetadataRequest {
    return {};
  },
  toAmino(_: QueryClaimMetadataRequest): QueryClaimMetadataRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClaimMetadataRequestAminoMsg): QueryClaimMetadataRequest {
    return QueryClaimMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimMetadataRequestProtoMsg): QueryClaimMetadataRequest {
    return QueryClaimMetadataRequest.decode(message.value);
  },
  toProto(message: QueryClaimMetadataRequest): Uint8Array {
    return QueryClaimMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimMetadataRequest): QueryClaimMetadataRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimMetadataRequest",
      value: QueryClaimMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimMetadataResponse(): QueryClaimMetadataResponse {
  return {
    claimMetadata: []
  };
}
export const QueryClaimMetadataResponse = {
  typeUrl: "/stride.claim.QueryClaimMetadataResponse",
  encode(message: QueryClaimMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimMetadataResponseAmino): QueryClaimMetadataResponse {
    return {
      claimMetadata: Array.isArray(object?.claim_metadata) ? object.claim_metadata.map((e: any) => ClaimMetadata.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimMetadataResponse): QueryClaimMetadataResponseAmino {
    const obj: any = {};
    if (message.claimMetadata) {
      obj.claim_metadata = message.claimMetadata.map(e => e ? ClaimMetadata.toAmino(e) : undefined);
    } else {
      obj.claim_metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimMetadataResponseAminoMsg): QueryClaimMetadataResponse {
    return QueryClaimMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimMetadataResponseProtoMsg): QueryClaimMetadataResponse {
    return QueryClaimMetadataResponse.decode(message.value);
  },
  toProto(message: QueryClaimMetadataResponse): Uint8Array {
    return QueryClaimMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimMetadataResponse): QueryClaimMetadataResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimMetadataResponse",
      value: QueryClaimMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDistributorAccountBalanceRequest(): QueryDistributorAccountBalanceRequest {
  return {
    airdropIdentifier: ""
  };
}
export const QueryDistributorAccountBalanceRequest = {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest",
  encode(message: QueryDistributorAccountBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDistributorAccountBalanceRequestAmino): QueryDistributorAccountBalanceRequest {
    return {
      airdropIdentifier: object.airdrop_identifier
    };
  },
  toAmino(message: QueryDistributorAccountBalanceRequest): QueryDistributorAccountBalanceRequestAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    return obj;
  },
  fromAminoMsg(object: QueryDistributorAccountBalanceRequestAminoMsg): QueryDistributorAccountBalanceRequest {
    return QueryDistributorAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDistributorAccountBalanceRequestProtoMsg): QueryDistributorAccountBalanceRequest {
    return QueryDistributorAccountBalanceRequest.decode(message.value);
  },
  toProto(message: QueryDistributorAccountBalanceRequest): Uint8Array {
    return QueryDistributorAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDistributorAccountBalanceRequest): QueryDistributorAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryDistributorAccountBalanceRequest",
      value: QueryDistributorAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDistributorAccountBalanceResponse(): QueryDistributorAccountBalanceResponse {
  return {
    distributorAccountBalance: []
  };
}
export const QueryDistributorAccountBalanceResponse = {
  typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse",
  encode(message: QueryDistributorAccountBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryDistributorAccountBalanceResponseAmino): QueryDistributorAccountBalanceResponse {
    return {
      distributorAccountBalance: Array.isArray(object?.distributor_account_balance) ? object.distributor_account_balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDistributorAccountBalanceResponse): QueryDistributorAccountBalanceResponseAmino {
    const obj: any = {};
    if (message.distributorAccountBalance) {
      obj.distributor_account_balance = message.distributorAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.distributor_account_balance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDistributorAccountBalanceResponseAminoMsg): QueryDistributorAccountBalanceResponse {
    return QueryDistributorAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDistributorAccountBalanceResponseProtoMsg): QueryDistributorAccountBalanceResponse {
    return QueryDistributorAccountBalanceResponse.decode(message.value);
  },
  toProto(message: QueryDistributorAccountBalanceResponse): Uint8Array {
    return QueryDistributorAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDistributorAccountBalanceResponse): QueryDistributorAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryDistributorAccountBalanceResponse",
      value: QueryDistributorAccountBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/stride.claim.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/stride.claim.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    airdropIdentifier: "",
    address: ""
  };
}
export const QueryClaimRecordRequest = {
  typeUrl: "/stride.claim.QueryClaimRecordRequest",
  encode(message: QueryClaimRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest {
    return {
      airdropIdentifier: object.airdrop_identifier,
      address: object.address
    };
  },
  toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimRecordRequest): Uint8Array {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: ClaimRecord.fromPartial({})
  };
}
export const QueryClaimRecordResponse = {
  typeUrl: "/stride.claim.QueryClaimRecordResponse",
  encode(message: QueryClaimRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse {
    return {
      claimRecord: object?.claim_record ? ClaimRecord.fromAmino(object.claim_record) : undefined
    };
  },
  toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino {
    const obj: any = {};
    obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimRecordResponse): Uint8Array {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.claim.QueryClaimableForActionRequest",
  encode(message: QueryClaimableForActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  fromPartial(object: Partial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.airdropIdentifier = object.airdropIdentifier ?? "";
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest {
    return {
      airdropIdentifier: object.airdrop_identifier,
      address: object.address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.address = message.address;
    obj.action = message.action;
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.decode(message.value);
  },
  toProto(message: QueryClaimableForActionRequest): Uint8Array {
    return QueryClaimableForActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimableForActionRequest",
      value: QueryClaimableForActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}
export const QueryClaimableForActionResponse = {
  typeUrl: "/stride.claim.QueryClaimableForActionResponse",
  encode(message: QueryClaimableForActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.decode(message.value);
  },
  toProto(message: QueryClaimableForActionResponse): Uint8Array {
    return QueryClaimableForActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryClaimableForActionResponse",
      value: QueryClaimableForActionResponse.encode(message).finish()
    };
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
  typeUrl: "/stride.claim.QueryTotalClaimableRequest",
  encode(message: QueryTotalClaimableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest {
    return {
      airdropIdentifier: object.airdrop_identifier,
      address: object.address,
      includeClaimed: object.include_claimed
    };
  },
  toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino {
    const obj: any = {};
    obj.airdrop_identifier = message.airdropIdentifier;
    obj.address = message.address;
    obj.include_claimed = message.includeClaimed;
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.decode(message.value);
  },
  toProto(message: QueryTotalClaimableRequest): Uint8Array {
    return QueryTotalClaimableRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryTotalClaimableRequest",
      value: QueryTotalClaimableRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}
export const QueryTotalClaimableResponse = {
  typeUrl: "/stride.claim.QueryTotalClaimableResponse",
  encode(message: QueryTotalClaimableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.decode(message.value);
  },
  toProto(message: QueryTotalClaimableResponse): Uint8Array {
    return QueryTotalClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryTotalClaimableResponse",
      value: QueryTotalClaimableResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserVestingsRequest(): QueryUserVestingsRequest {
  return {
    address: ""
  };
}
export const QueryUserVestingsRequest = {
  typeUrl: "/stride.claim.QueryUserVestingsRequest",
  encode(message: QueryUserVestingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryUserVestingsRequestAmino): QueryUserVestingsRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryUserVestingsRequest): QueryUserVestingsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryUserVestingsRequestAminoMsg): QueryUserVestingsRequest {
    return QueryUserVestingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserVestingsRequestProtoMsg): QueryUserVestingsRequest {
    return QueryUserVestingsRequest.decode(message.value);
  },
  toProto(message: QueryUserVestingsRequest): Uint8Array {
    return QueryUserVestingsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserVestingsRequest): QueryUserVestingsRequestProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryUserVestingsRequest",
      value: QueryUserVestingsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUserVestingsResponse(): QueryUserVestingsResponse {
  return {
    spendableCoins: [],
    periods: []
  };
}
export const QueryUserVestingsResponse = {
  typeUrl: "/stride.claim.QueryUserVestingsResponse",
  encode(message: QueryUserVestingsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: QueryUserVestingsResponseAmino): QueryUserVestingsResponse {
    return {
      spendableCoins: Array.isArray(object?.spendable_coins) ? object.spendable_coins.map((e: any) => Coin.fromAmino(e)) : [],
      periods: Array.isArray(object?.periods) ? object.periods.map((e: any) => Period.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryUserVestingsResponse): QueryUserVestingsResponseAmino {
    const obj: any = {};
    if (message.spendableCoins) {
      obj.spendable_coins = message.spendableCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spendable_coins = [];
    }
    if (message.periods) {
      obj.periods = message.periods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryUserVestingsResponseAminoMsg): QueryUserVestingsResponse {
    return QueryUserVestingsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserVestingsResponseProtoMsg): QueryUserVestingsResponse {
    return QueryUserVestingsResponse.decode(message.value);
  },
  toProto(message: QueryUserVestingsResponse): Uint8Array {
    return QueryUserVestingsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserVestingsResponse): QueryUserVestingsResponseProtoMsg {
    return {
      typeUrl: "/stride.claim.QueryUserVestingsResponse",
      value: QueryUserVestingsResponse.encode(message).finish()
    };
  }
};