import { Params, ParamsSDKType } from "./genesis";
import { Valset, ValsetSDKType, PendingIbcAutoForward, PendingIbcAutoForwardSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallSDKType } from "./msgs";
import { BatchFees, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import { Long, isSet, bytesFromBase64 } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {}
export interface QueryCurrentValsetRequestSDKType {}
export interface QueryCurrentValsetResponse {
  valset?: Valset;
}
export interface QueryCurrentValsetResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
  nonce: Long;
}
export interface QueryValsetRequestRequestSDKType {
  nonce: Long;
}
export interface QueryValsetRequestResponse {
  valset?: Valset;
}
export interface QueryValsetRequestResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
  nonce: Long;
  address: string;
}
export interface QueryValsetConfirmRequestSDKType {
  nonce: Long;
  address: string;
}
export interface QueryValsetConfirmResponse {
  confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseSDKType {
  confirm?: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
  nonce: Long;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
  nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
  confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {}
export interface QueryLastValsetRequestsRequestSDKType {}
export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {}
export interface QueryBatchFeeRequestSDKType {}
export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseSDKType {
  batch_fees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
  batch: OutgoingTxBatch[];
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
  batch: OutgoingTxBatchSDKType[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
  address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
  call: OutgoingLogicCall[];
}
export interface QueryLastPendingLogicCallByAddrResponseSDKType {
  call: OutgoingLogicCallSDKType[];
}
export interface QueryOutgoingTxBatchesRequest {}
export interface QueryOutgoingTxBatchesRequestSDKType {}
export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseSDKType {
  batches: OutgoingTxBatchSDKType[];
}
export interface QueryOutgoingLogicCallsRequest {}
export interface QueryOutgoingLogicCallsRequestSDKType {}
export interface QueryOutgoingLogicCallsResponse {
  calls: OutgoingLogicCall[];
}
export interface QueryOutgoingLogicCallsResponseSDKType {
  calls: OutgoingLogicCallSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
  nonce: Long;
  contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestSDKType {
  nonce: Long;
  contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseSDKType {
  batch?: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
  nonce: Long;
  contractAddress: string;
}
export interface QueryBatchConfirmsRequestSDKType {
  nonce: Long;
  contract_address: string;
}
export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseSDKType {
  confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLogicConfirmsRequest {
  invalidationId: Uint8Array;
  invalidationNonce: Long;
}
export interface QueryLogicConfirmsRequestSDKType {
  invalidation_id: Uint8Array;
  invalidation_nonce: Long;
}
export interface QueryLogicConfirmsResponse {
  confirms: MsgConfirmLogicCall[];
}
export interface QueryLogicConfirmsResponseSDKType {
  confirms: MsgConfirmLogicCallSDKType[];
}
export interface QueryLastEventNonceByAddrRequest {
  address: string;
}
export interface QueryLastEventNonceByAddrRequestSDKType {
  address: string;
}
export interface QueryLastEventNonceByAddrResponse {
  eventNonce: Long;
}
export interface QueryLastEventNonceByAddrResponseSDKType {
  event_nonce: Long;
}
export interface QueryERC20ToDenomRequest {
  erc20: string;
}
export interface QueryERC20ToDenomRequestSDKType {
  erc20: string;
}
export interface QueryERC20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseSDKType {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
  denom: string;
}
export interface QueryDenomToERC20RequestSDKType {
  denom: string;
}
export interface QueryDenomToERC20Response {
  erc20: string;
  cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseSDKType {
  erc20: string;
  cosmos_originated: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequest {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequestSDKType {
  use_v1_key: boolean;
}
export interface QueryLastObservedEthBlockResponse {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  block: Long;
}
export interface QueryLastObservedEthBlockResponseSDKType {
  block: Long;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequest {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequestSDKType {
  use_v1_key: boolean;
}
export interface QueryLastObservedEthNonceResponse {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  nonce: Long;
}
export interface QueryLastObservedEthNonceResponseSDKType {
  nonce: Long;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
  /** limit defines how many attestations to limit in the response. */
  limit: Long;
  /**
   * order_by provides ordering of atteststions by nonce in the response. Either
   * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
   * 'asc'.
   */
  orderBy: string;
  /** claim_type allows filtering attestations by Ethereum claim type. */
  claimType: string;
  /** nonce allows filtering attestations by Ethereum claim nonce. */
  nonce: Long;
  /** height allows filtering attestations by Ethereum claim height. */
  height: Long;
  /**
   * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequestSDKType {
  limit: Long;
  order_by: string;
  claim_type: string;
  nonce: Long;
  height: Long;
  use_v1_key: boolean;
}
export interface QueryAttestationsResponse {
  attestations: Attestation[];
}
export interface QueryAttestationsResponseSDKType {
  attestations: AttestationSDKType[];
}
export interface QueryDelegateKeysByValidatorAddress {
  validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
  ethAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
  ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressSDKType {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress: string;
  ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
  validator_address: string;
  eth_address: string;
}
export interface QueryPendingSendToEth {
  senderAddress: string;
}
export interface QueryPendingSendToEthSDKType {
  sender_address: string;
}
export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseSDKType {
  transfers_in_batches: OutgoingTransferTxSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
}
export interface QueryPendingIbcAutoForwards {
  /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
  limit: Long;
}
export interface QueryPendingIbcAutoForwardsSDKType {
  limit: Long;
}
export interface QueryPendingIbcAutoForwardsResponse {
  pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export interface QueryPendingIbcAutoForwardsResponseSDKType {
  pending_ibc_auto_forwards: PendingIbcAutoForwardSDKType[];
}
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
function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return {};
}
export const QueryCurrentValsetRequest = {
  encode(_: QueryCurrentValsetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryCurrentValsetRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  }
};
function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return {
    valset: undefined
  };
}
export const QueryCurrentValsetResponse = {
  encode(message: QueryCurrentValsetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCurrentValsetResponse {
    return {
      valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
    };
  },
  fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  }
};
function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return {
    nonce: Long.UZERO
  };
}
export const QueryValsetRequestRequest = {
  encode(message: QueryValsetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetRequestRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return {
    valset: undefined
  };
}
export const QueryValsetRequestResponse = {
  encode(message: QueryValsetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetRequestResponse {
    return {
      valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
    };
  },
  fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  }
};
function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return {
    nonce: Long.UZERO,
    address: ""
  };
}
export const QueryValsetConfirmRequest = {
  encode(message: QueryValsetConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetConfirmRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return {
    confirm: undefined
  };
}
export const QueryValsetConfirmResponse = {
  encode(message: QueryValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetConfirmResponse {
    return {
      confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined
    };
  },
  fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
    return message;
  }
};
function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return {
    nonce: Long.UZERO
  };
}
export const QueryValsetConfirmsByNonceRequest = {
  encode(message: QueryValsetConfirmsByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetConfirmsByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return {
    confirms: []
  };
}
export const QueryValsetConfirmsByNonceResponse = {
  encode(message: QueryValsetConfirmsByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return {};
}
export const QueryLastValsetRequestsRequest = {
  encode(_: QueryLastValsetRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryLastValsetRequestsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  }
};
function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return {
    valsets: []
  };
}
export const QueryLastValsetRequestsResponse = {
  encode(message: QueryLastValsetRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLastValsetRequestsResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
  encode(message: QueryLastPendingValsetRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return {
    valsets: []
  };
}
export const QueryLastPendingValsetRequestByAddrResponse = {
  encode(message: QueryLastPendingValsetRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return {};
}
export const QueryBatchFeeRequest = {
  encode(_: QueryBatchFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryBatchFeeRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    return message;
  }
};
function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return {
    batchFees: []
  };
}
export const QueryBatchFeeResponse = {
  encode(message: QueryBatchFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batchFees) ? object.batchFees.map((e: any) => BatchFees.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(message: QueryLastPendingBatchRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return {
    batch: []
  };
}
export const QueryLastPendingBatchRequestByAddrResponse = {
  encode(message: QueryLastPendingBatchRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batch) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse {
    return {
      batch: Array.isArray(object?.batch) ? object.batch.map((e: any) => OutgoingTxBatch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch = object.batch?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastPendingLogicCallByAddrRequest(): QueryLastPendingLogicCallByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingLogicCallByAddrRequest = {
  encode(message: QueryLastPendingLogicCallByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest {
    const message = createBaseQueryLastPendingLogicCallByAddrRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryLastPendingLogicCallByAddrResponse(): QueryLastPendingLogicCallByAddrResponse {
  return {
    call: []
  };
}
export const QueryLastPendingLogicCallByAddrResponse = {
  encode(message: QueryLastPendingLogicCallByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.call) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse {
    return {
      call: Array.isArray(object?.call) ? object.call.map((e: any) => OutgoingLogicCall.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse {
    const message = createBaseQueryLastPendingLogicCallByAddrResponse();
    message.call = object.call?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return {};
}
export const QueryOutgoingTxBatchesRequest = {
  encode(_: QueryOutgoingTxBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryOutgoingTxBatchesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    return message;
  }
};
function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return {
    batches: []
  };
}
export const QueryOutgoingTxBatchesResponse = {
  encode(message: QueryOutgoingTxBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryOutgoingLogicCallsRequest(): QueryOutgoingLogicCallsRequest {
  return {};
}
export const QueryOutgoingLogicCallsRequest = {
  encode(_: QueryOutgoingLogicCallsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryOutgoingLogicCallsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest {
    const message = createBaseQueryOutgoingLogicCallsRequest();
    return message;
  }
};
function createBaseQueryOutgoingLogicCallsResponse(): QueryOutgoingLogicCallsResponse {
  return {
    calls: []
  };
}
export const QueryOutgoingLogicCallsResponse = {
  encode(message: QueryOutgoingLogicCallsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOutgoingLogicCallsResponse {
    return {
      calls: Array.isArray(object?.calls) ? object.calls.map((e: any) => OutgoingLogicCall.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse {
    const message = createBaseQueryOutgoingLogicCallsResponse();
    message.calls = object.calls?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return {
    nonce: Long.UZERO,
    contractAddress: ""
  };
}
export const QueryBatchRequestByNonceRequest = {
  encode(message: QueryBatchRequestByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryBatchRequestByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return {
    batch: undefined
  };
}
export const QueryBatchRequestByNonceResponse = {
  encode(message: QueryBatchRequestByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBatchRequestByNonceResponse {
    return {
      batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined
    };
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  }
};
function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return {
    nonce: Long.UZERO,
    contractAddress: ""
  };
}
export const QueryBatchConfirmsRequest = {
  encode(message: QueryBatchConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryBatchConfirmsRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return {
    confirms: []
  };
}
export const QueryBatchConfirmsResponse = {
  encode(message: QueryBatchConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLogicConfirmsRequest(): QueryLogicConfirmsRequest {
  return {
    invalidationId: new Uint8Array(),
    invalidationNonce: Long.UZERO
  };
}
export const QueryLogicConfirmsRequest = {
  encode(message: QueryLogicConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invalidationId.length !== 0) {
      writer.uint32(10).bytes(message.invalidationId);
    }
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryLogicConfirmsRequest {
    return {
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromValue(object.invalidationNonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest {
    const message = createBaseQueryLogicConfirmsRequest();
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryLogicConfirmsResponse(): QueryLogicConfirmsResponse {
  return {
    confirms: []
  };
}
export const QueryLogicConfirmsResponse = {
  encode(message: QueryLogicConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLogicConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmLogicCall.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse {
    const message = createBaseQueryLogicConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmLogicCall.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryLastEventNonceByAddrRequest(): QueryLastEventNonceByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastEventNonceByAddrRequest = {
  encode(message: QueryLastEventNonceByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastEventNonceByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest {
    const message = createBaseQueryLastEventNonceByAddrRequest();
    message.address = object.address ?? "";
    return message;
  }
};
function createBaseQueryLastEventNonceByAddrResponse(): QueryLastEventNonceByAddrResponse {
  return {
    eventNonce: Long.UZERO
  };
}
export const QueryLastEventNonceByAddrResponse = {
  encode(message: QueryLastEventNonceByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastEventNonceByAddrResponse {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse {
    const message = createBaseQueryLastEventNonceByAddrResponse();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return {
    erc20: ""
  };
}
export const QueryERC20ToDenomRequest = {
  encode(message: QueryERC20ToDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },
  fromJSON(object: any): QueryERC20ToDenomRequest {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : ""
    };
  },
  fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    return message;
  }
};
function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return {
    denom: "",
    cosmosOriginated: false
  };
}
export const QueryERC20ToDenomResponse = {
  encode(message: QueryERC20ToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  fromJSON(object: any): QueryERC20ToDenomResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
    };
  },
  fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  }
};
function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return {
    denom: ""
  };
}
export const QueryDenomToERC20Request = {
  encode(message: QueryDenomToERC20Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomToERC20Request {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return {
    erc20: "",
    cosmosOriginated: false
  };
}
export const QueryDenomToERC20Response = {
  encode(message: QueryDenomToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  fromJSON(object: any): QueryDenomToERC20Response {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
    };
  },
  fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  }
};
function createBaseQueryLastObservedEthBlockRequest(): QueryLastObservedEthBlockRequest {
  return {
    useV1Key: false
  };
}
export const QueryLastObservedEthBlockRequest = {
  encode(message: QueryLastObservedEthBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useV1Key === true) {
      writer.uint32(8).bool(message.useV1Key);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastObservedEthBlockRequest {
    return {
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  fromPartial(object: Partial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest {
    const message = createBaseQueryLastObservedEthBlockRequest();
    message.useV1Key = object.useV1Key ?? false;
    return message;
  }
};
function createBaseQueryLastObservedEthBlockResponse(): QueryLastObservedEthBlockResponse {
  return {
    block: Long.UZERO
  };
}
export const QueryLastObservedEthBlockResponse = {
  encode(message: QueryLastObservedEthBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastObservedEthBlockResponse {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse {
    const message = createBaseQueryLastObservedEthBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseQueryLastObservedEthNonceRequest(): QueryLastObservedEthNonceRequest {
  return {
    useV1Key: false
  };
}
export const QueryLastObservedEthNonceRequest = {
  encode(message: QueryLastObservedEthNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useV1Key === true) {
      writer.uint32(8).bool(message.useV1Key);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastObservedEthNonceRequest {
    return {
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  fromPartial(object: Partial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest {
    const message = createBaseQueryLastObservedEthNonceRequest();
    message.useV1Key = object.useV1Key ?? false;
    return message;
  }
};
function createBaseQueryLastObservedEthNonceResponse(): QueryLastObservedEthNonceResponse {
  return {
    nonce: Long.UZERO
  };
}
export const QueryLastObservedEthNonceResponse = {
  encode(message: QueryLastObservedEthNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryLastObservedEthNonceResponse {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse {
    const message = createBaseQueryLastObservedEthNonceResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  }
};
function createBaseQueryAttestationsRequest(): QueryAttestationsRequest {
  return {
    limit: Long.UZERO,
    orderBy: "",
    claimType: "",
    nonce: Long.UZERO,
    height: Long.UZERO,
    useV1Key: false
  };
}
export const QueryAttestationsRequest = {
  encode(message: QueryAttestationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.claimType !== "") {
      writer.uint32(26).string(message.claimType);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).uint64(message.height);
    }
    if (message.useV1Key === true) {
      writer.uint32(48).bool(message.useV1Key);
    }
    return writer;
  },
  fromJSON(object: any): QueryAttestationsRequest {
    return {
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
      claimType: isSet(object.claimType) ? String(object.claimType) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  fromPartial(object: Partial<QueryAttestationsRequest>): QueryAttestationsRequest {
    const message = createBaseQueryAttestationsRequest();
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.orderBy = object.orderBy ?? "";
    message.claimType = object.claimType ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.useV1Key = object.useV1Key ?? false;
    return message;
  }
};
function createBaseQueryAttestationsResponse(): QueryAttestationsResponse {
  return {
    attestations: []
  };
}
export const QueryAttestationsResponse = {
  encode(message: QueryAttestationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAttestationsResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAttestationsResponse>): QueryAttestationsResponse {
    const message = createBaseQueryAttestationsResponse();
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDelegateKeysByValidatorAddress(): QueryDelegateKeysByValidatorAddress {
  return {
    validatorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddress = {
  encode(message: QueryDelegateKeysByValidatorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByValidatorAddress {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress {
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse(): QueryDelegateKeysByValidatorAddressResponse {
  return {
    ethAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddressResponse = {
  encode(message: QueryDelegateKeysByValidatorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse {
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    message.ethAddress = object.ethAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegateKeysByEthAddress(): QueryDelegateKeysByEthAddress {
  return {
    ethAddress: ""
  };
}
export const QueryDelegateKeysByEthAddress = {
  encode(message: QueryDelegateKeysByEthAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByEthAddress {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress {
    const message = createBaseQueryDelegateKeysByEthAddress();
    message.ethAddress = object.ethAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegateKeysByEthAddressResponse(): QueryDelegateKeysByEthAddressResponse {
  return {
    validatorAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByEthAddressResponse = {
  encode(message: QueryDelegateKeysByEthAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByEthAddressResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse {
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddress(): QueryDelegateKeysByOrchestratorAddress {
  return {
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddress = {
  encode(message: QueryDelegateKeysByOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress {
    return {
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress {
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse(): QueryDelegateKeysByOrchestratorAddressResponse {
  return {
    validatorAddress: "",
    ethAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddressResponse = {
  encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  }
};
function createBaseQueryPendingSendToEth(): QueryPendingSendToEth {
  return {
    senderAddress: ""
  };
}
export const QueryPendingSendToEth = {
  encode(message: QueryPendingSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingSendToEth {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }
};
function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return {
    transfersInBatches: [],
    unbatchedTransfers: []
  };
}
export const QueryPendingSendToEthResponse = {
  encode(message: QueryPendingSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfersInBatches) ? object.transfersInBatches.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryPendingIbcAutoForwards(): QueryPendingIbcAutoForwards {
  return {
    limit: Long.UZERO
  };
}
export const QueryPendingIbcAutoForwards = {
  encode(message: QueryPendingIbcAutoForwards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingIbcAutoForwards {
    return {
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards {
    const message = createBaseQueryPendingIbcAutoForwards();
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }
};
function createBaseQueryPendingIbcAutoForwardsResponse(): QueryPendingIbcAutoForwardsResponse {
  return {
    pendingIbcAutoForwards: []
  };
}
export const QueryPendingIbcAutoForwardsResponse = {
  encode(message: QueryPendingIbcAutoForwardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingIbcAutoForwards) {
      PendingIbcAutoForward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPendingIbcAutoForwardsResponse {
    return {
      pendingIbcAutoForwards: Array.isArray(object?.pendingIbcAutoForwards) ? object.pendingIbcAutoForwards.map((e: any) => PendingIbcAutoForward.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse {
    const message = createBaseQueryPendingIbcAutoForwardsResponse();
    message.pendingIbcAutoForwards = object.pendingIbcAutoForwards?.map(e => PendingIbcAutoForward.fromPartial(e)) || [];
    return message;
  }
};