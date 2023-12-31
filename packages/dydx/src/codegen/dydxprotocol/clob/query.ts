import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { SubaccountId, SubaccountIdAmino, SubaccountIdSDKType } from "../subaccounts/subaccount";
import { ValidatorMevMatches, ValidatorMevMatchesAmino, ValidatorMevMatchesSDKType, MevNodeToNodeMetrics, MevNodeToNodeMetricsAmino, MevNodeToNodeMetricsSDKType } from "./mev";
import { ClobPair, ClobPairAmino, ClobPairSDKType } from "./clob_pair";
import { EquityTierLimitConfiguration, EquityTierLimitConfigurationAmino, EquityTierLimitConfigurationSDKType } from "./equity_tier_limit_config";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryGetClobPairRequest is request type for the ClobPair method. */
export interface QueryGetClobPairRequest {
  /** QueryGetClobPairRequest is request type for the ClobPair method. */
  id: number;
}
export interface QueryGetClobPairRequestProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryGetClobPairRequest";
  value: Uint8Array;
}
/** QueryGetClobPairRequest is request type for the ClobPair method. */
export interface QueryGetClobPairRequestAmino {
  /** QueryGetClobPairRequest is request type for the ClobPair method. */
  id: number;
}
export interface QueryGetClobPairRequestAminoMsg {
  type: "/dydxprotocol.clob.QueryGetClobPairRequest";
  value: QueryGetClobPairRequestAmino;
}
/** QueryGetClobPairRequest is request type for the ClobPair method. */
export interface QueryGetClobPairRequestSDKType {
  id: number;
}
/** QueryClobPairResponse is response type for the ClobPair method. */
export interface QueryClobPairResponse {
  clobPair: ClobPair;
}
export interface QueryClobPairResponseProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryClobPairResponse";
  value: Uint8Array;
}
/** QueryClobPairResponse is response type for the ClobPair method. */
export interface QueryClobPairResponseAmino {
  clob_pair?: ClobPairAmino;
}
export interface QueryClobPairResponseAminoMsg {
  type: "/dydxprotocol.clob.QueryClobPairResponse";
  value: QueryClobPairResponseAmino;
}
/** QueryClobPairResponse is response type for the ClobPair method. */
export interface QueryClobPairResponseSDKType {
  clob_pair: ClobPairSDKType;
}
/** QueryAllClobPairRequest is request type for the ClobPairAll method. */
export interface QueryAllClobPairRequest {
  pagination: PageRequest;
}
export interface QueryAllClobPairRequestProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryAllClobPairRequest";
  value: Uint8Array;
}
/** QueryAllClobPairRequest is request type for the ClobPairAll method. */
export interface QueryAllClobPairRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllClobPairRequestAminoMsg {
  type: "/dydxprotocol.clob.QueryAllClobPairRequest";
  value: QueryAllClobPairRequestAmino;
}
/** QueryAllClobPairRequest is request type for the ClobPairAll method. */
export interface QueryAllClobPairRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QueryClobPairAllResponse is response type for the ClobPairAll method. */
export interface QueryClobPairAllResponse {
  clobPair: ClobPair[];
  pagination: PageResponse;
}
export interface QueryClobPairAllResponseProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryClobPairAllResponse";
  value: Uint8Array;
}
/** QueryClobPairAllResponse is response type for the ClobPairAll method. */
export interface QueryClobPairAllResponseAmino {
  clob_pair: ClobPairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClobPairAllResponseAminoMsg {
  type: "/dydxprotocol.clob.QueryClobPairAllResponse";
  value: QueryClobPairAllResponseAmino;
}
/** QueryClobPairAllResponse is response type for the ClobPairAll method. */
export interface QueryClobPairAllResponseSDKType {
  clob_pair: ClobPairSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * AreSubaccountsLiquidatableRequest is a request message used to check whether
 * the given subaccounts are liquidatable.
 * The subaccount ids should not contain duplicates.
 */
export interface AreSubaccountsLiquidatableRequest {
  subaccountIds: SubaccountId[];
}
export interface AreSubaccountsLiquidatableRequestProtoMsg {
  typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableRequest";
  value: Uint8Array;
}
/**
 * AreSubaccountsLiquidatableRequest is a request message used to check whether
 * the given subaccounts are liquidatable.
 * The subaccount ids should not contain duplicates.
 */
export interface AreSubaccountsLiquidatableRequestAmino {
  subaccount_ids: SubaccountIdAmino[];
}
export interface AreSubaccountsLiquidatableRequestAminoMsg {
  type: "/dydxprotocol.clob.AreSubaccountsLiquidatableRequest";
  value: AreSubaccountsLiquidatableRequestAmino;
}
/**
 * AreSubaccountsLiquidatableRequest is a request message used to check whether
 * the given subaccounts are liquidatable.
 * The subaccount ids should not contain duplicates.
 */
export interface AreSubaccountsLiquidatableRequestSDKType {
  subaccount_ids: SubaccountIdSDKType[];
}
/**
 * AreSubaccountsLiquidatableResponse is a response message that contains the
 * liquidation status for each subaccount.
 */
export interface AreSubaccountsLiquidatableResponse {
  results: AreSubaccountsLiquidatableResponse_Result[];
}
export interface AreSubaccountsLiquidatableResponseProtoMsg {
  typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableResponse";
  value: Uint8Array;
}
/**
 * AreSubaccountsLiquidatableResponse is a response message that contains the
 * liquidation status for each subaccount.
 */
export interface AreSubaccountsLiquidatableResponseAmino {
  results: AreSubaccountsLiquidatableResponse_ResultAmino[];
}
export interface AreSubaccountsLiquidatableResponseAminoMsg {
  type: "/dydxprotocol.clob.AreSubaccountsLiquidatableResponse";
  value: AreSubaccountsLiquidatableResponseAmino;
}
/**
 * AreSubaccountsLiquidatableResponse is a response message that contains the
 * liquidation status for each subaccount.
 */
export interface AreSubaccountsLiquidatableResponseSDKType {
  results: AreSubaccountsLiquidatableResponse_ResultSDKType[];
}
/** Result returns whether a subaccount should be liquidated. */
export interface AreSubaccountsLiquidatableResponse_Result {
  subaccountId: SubaccountId;
  isLiquidatable: boolean;
}
export interface AreSubaccountsLiquidatableResponse_ResultProtoMsg {
  typeUrl: "/dydxprotocol.clob.Result";
  value: Uint8Array;
}
/** Result returns whether a subaccount should be liquidated. */
export interface AreSubaccountsLiquidatableResponse_ResultAmino {
  subaccount_id?: SubaccountIdAmino;
  is_liquidatable: boolean;
}
export interface AreSubaccountsLiquidatableResponse_ResultAminoMsg {
  type: "/dydxprotocol.clob.Result";
  value: AreSubaccountsLiquidatableResponse_ResultAmino;
}
/** Result returns whether a subaccount should be liquidated. */
export interface AreSubaccountsLiquidatableResponse_ResultSDKType {
  subaccount_id: SubaccountIdSDKType;
  is_liquidatable: boolean;
}
/**
 * MevNodeToNodeCalculationRequest is a request message used to run the
 * MEV node <> node calculation.
 */
export interface MevNodeToNodeCalculationRequest {
  /**
   * Represents the matches on the "block proposer". Note that this field
   * does not need to be the actual block proposer's matches for a block, since
   * the MEV calculation logic is run with this nodes matches as the "block
   * proposer" matches.
   */
  blockProposerMatches: ValidatorMevMatches;
  /** Represents the matches and mid-prices on the validator. */
  validatorMevMetrics: MevNodeToNodeMetrics;
}
export interface MevNodeToNodeCalculationRequestProtoMsg {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationRequest";
  value: Uint8Array;
}
/**
 * MevNodeToNodeCalculationRequest is a request message used to run the
 * MEV node <> node calculation.
 */
export interface MevNodeToNodeCalculationRequestAmino {
  /**
   * Represents the matches on the "block proposer". Note that this field
   * does not need to be the actual block proposer's matches for a block, since
   * the MEV calculation logic is run with this nodes matches as the "block
   * proposer" matches.
   */
  block_proposer_matches?: ValidatorMevMatchesAmino;
  /** Represents the matches and mid-prices on the validator. */
  validator_mev_metrics?: MevNodeToNodeMetricsAmino;
}
export interface MevNodeToNodeCalculationRequestAminoMsg {
  type: "/dydxprotocol.clob.MevNodeToNodeCalculationRequest";
  value: MevNodeToNodeCalculationRequestAmino;
}
/**
 * MevNodeToNodeCalculationRequest is a request message used to run the
 * MEV node <> node calculation.
 */
export interface MevNodeToNodeCalculationRequestSDKType {
  block_proposer_matches: ValidatorMevMatchesSDKType;
  validator_mev_metrics: MevNodeToNodeMetricsSDKType;
}
/**
 * MevNodeToNodeCalculationResponse is a response message that contains the
 * MEV node <> node calculation result.
 */
export interface MevNodeToNodeCalculationResponse {
  results: MevNodeToNodeCalculationResponse_MevAndVolumePerClob[];
}
export interface MevNodeToNodeCalculationResponseProtoMsg {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationResponse";
  value: Uint8Array;
}
/**
 * MevNodeToNodeCalculationResponse is a response message that contains the
 * MEV node <> node calculation result.
 */
export interface MevNodeToNodeCalculationResponseAmino {
  results: MevNodeToNodeCalculationResponse_MevAndVolumePerClobAmino[];
}
export interface MevNodeToNodeCalculationResponseAminoMsg {
  type: "/dydxprotocol.clob.MevNodeToNodeCalculationResponse";
  value: MevNodeToNodeCalculationResponseAmino;
}
/**
 * MevNodeToNodeCalculationResponse is a response message that contains the
 * MEV node <> node calculation result.
 */
export interface MevNodeToNodeCalculationResponseSDKType {
  results: MevNodeToNodeCalculationResponse_MevAndVolumePerClobSDKType[];
}
/** MevAndVolumePerClob contains information about the MEV and volume per CLOB. */
export interface MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
  clobPairId: number;
  mev: number;
  volume: bigint;
}
export interface MevNodeToNodeCalculationResponse_MevAndVolumePerClobProtoMsg {
  typeUrl: "/dydxprotocol.clob.MevAndVolumePerClob";
  value: Uint8Array;
}
/** MevAndVolumePerClob contains information about the MEV and volume per CLOB. */
export interface MevNodeToNodeCalculationResponse_MevAndVolumePerClobAmino {
  clob_pair_id: number;
  mev: number;
  volume: string;
}
export interface MevNodeToNodeCalculationResponse_MevAndVolumePerClobAminoMsg {
  type: "/dydxprotocol.clob.MevAndVolumePerClob";
  value: MevNodeToNodeCalculationResponse_MevAndVolumePerClobAmino;
}
/** MevAndVolumePerClob contains information about the MEV and volume per CLOB. */
export interface MevNodeToNodeCalculationResponse_MevAndVolumePerClobSDKType {
  clob_pair_id: number;
  mev: number;
  volume: bigint;
}
/**
 * QueryEquityTierLimitConfigurationRequest is a request message for
 * EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationRequest {}
export interface QueryEquityTierLimitConfigurationRequestProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationRequest";
  value: Uint8Array;
}
/**
 * QueryEquityTierLimitConfigurationRequest is a request message for
 * EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationRequestAmino {}
export interface QueryEquityTierLimitConfigurationRequestAminoMsg {
  type: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationRequest";
  value: QueryEquityTierLimitConfigurationRequestAmino;
}
/**
 * QueryEquityTierLimitConfigurationRequest is a request message for
 * EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationRequestSDKType {}
/**
 * QueryEquityTierLimitConfigurationResponse is a response message that contains
 * the EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationResponse {
  equityTierLimitConfig: EquityTierLimitConfiguration;
}
export interface QueryEquityTierLimitConfigurationResponseProtoMsg {
  typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationResponse";
  value: Uint8Array;
}
/**
 * QueryEquityTierLimitConfigurationResponse is a response message that contains
 * the EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationResponseAmino {
  equity_tier_limit_config?: EquityTierLimitConfigurationAmino;
}
export interface QueryEquityTierLimitConfigurationResponseAminoMsg {
  type: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationResponse";
  value: QueryEquityTierLimitConfigurationResponseAmino;
}
/**
 * QueryEquityTierLimitConfigurationResponse is a response message that contains
 * the EquityTierLimitConfiguration.
 */
export interface QueryEquityTierLimitConfigurationResponseSDKType {
  equity_tier_limit_config: EquityTierLimitConfigurationSDKType;
}
function createBaseQueryGetClobPairRequest(): QueryGetClobPairRequest {
  return {
    id: 0
  };
}
export const QueryGetClobPairRequest = {
  typeUrl: "/dydxprotocol.clob.QueryGetClobPairRequest",
  encode(message: QueryGetClobPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetClobPairRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },
  fromPartial(object: Partial<QueryGetClobPairRequest>): QueryGetClobPairRequest {
    const message = createBaseQueryGetClobPairRequest();
    message.id = object.id ?? 0;
    return message;
  },
  fromAmino(object: QueryGetClobPairRequestAmino): QueryGetClobPairRequest {
    return {
      id: object.id
    };
  },
  toAmino(message: QueryGetClobPairRequest): QueryGetClobPairRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetClobPairRequestAminoMsg): QueryGetClobPairRequest {
    return QueryGetClobPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetClobPairRequestProtoMsg): QueryGetClobPairRequest {
    return QueryGetClobPairRequest.decode(message.value);
  },
  toProto(message: QueryGetClobPairRequest): Uint8Array {
    return QueryGetClobPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetClobPairRequest): QueryGetClobPairRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryGetClobPairRequest",
      value: QueryGetClobPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClobPairResponse(): QueryClobPairResponse {
  return {
    clobPair: ClobPair.fromPartial({})
  };
}
export const QueryClobPairResponse = {
  typeUrl: "/dydxprotocol.clob.QueryClobPairResponse",
  encode(message: QueryClobPairResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clobPair !== undefined) {
      ClobPair.encode(message.clobPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClobPairResponse {
    return {
      clobPair: isSet(object.clobPair) ? ClobPair.fromJSON(object.clobPair) : undefined
    };
  },
  fromPartial(object: Partial<QueryClobPairResponse>): QueryClobPairResponse {
    const message = createBaseQueryClobPairResponse();
    message.clobPair = object.clobPair !== undefined && object.clobPair !== null ? ClobPair.fromPartial(object.clobPair) : undefined;
    return message;
  },
  fromAmino(object: QueryClobPairResponseAmino): QueryClobPairResponse {
    return {
      clobPair: object?.clob_pair ? ClobPair.fromAmino(object.clob_pair) : undefined
    };
  },
  toAmino(message: QueryClobPairResponse): QueryClobPairResponseAmino {
    const obj: any = {};
    obj.clob_pair = message.clobPair ? ClobPair.toAmino(message.clobPair) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClobPairResponseAminoMsg): QueryClobPairResponse {
    return QueryClobPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClobPairResponseProtoMsg): QueryClobPairResponse {
    return QueryClobPairResponse.decode(message.value);
  },
  toProto(message: QueryClobPairResponse): Uint8Array {
    return QueryClobPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClobPairResponse): QueryClobPairResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryClobPairResponse",
      value: QueryClobPairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllClobPairRequest(): QueryAllClobPairRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllClobPairRequest = {
  typeUrl: "/dydxprotocol.clob.QueryAllClobPairRequest",
  encode(message: QueryAllClobPairRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllClobPairRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllClobPairRequest>): QueryAllClobPairRequest {
    const message = createBaseQueryAllClobPairRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllClobPairRequestAmino): QueryAllClobPairRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllClobPairRequest): QueryAllClobPairRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllClobPairRequestAminoMsg): QueryAllClobPairRequest {
    return QueryAllClobPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllClobPairRequestProtoMsg): QueryAllClobPairRequest {
    return QueryAllClobPairRequest.decode(message.value);
  },
  toProto(message: QueryAllClobPairRequest): Uint8Array {
    return QueryAllClobPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllClobPairRequest): QueryAllClobPairRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryAllClobPairRequest",
      value: QueryAllClobPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClobPairAllResponse(): QueryClobPairAllResponse {
  return {
    clobPair: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryClobPairAllResponse = {
  typeUrl: "/dydxprotocol.clob.QueryClobPairAllResponse",
  encode(message: QueryClobPairAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clobPair) {
      ClobPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryClobPairAllResponse {
    return {
      clobPair: Array.isArray(object?.clobPair) ? object.clobPair.map((e: any) => ClobPair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryClobPairAllResponse>): QueryClobPairAllResponse {
    const message = createBaseQueryClobPairAllResponse();
    message.clobPair = object.clobPair?.map(e => ClobPair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClobPairAllResponseAmino): QueryClobPairAllResponse {
    return {
      clobPair: Array.isArray(object?.clob_pair) ? object.clob_pair.map((e: any) => ClobPair.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClobPairAllResponse): QueryClobPairAllResponseAmino {
    const obj: any = {};
    if (message.clobPair) {
      obj.clob_pair = message.clobPair.map(e => e ? ClobPair.toAmino(e) : undefined);
    } else {
      obj.clob_pair = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClobPairAllResponseAminoMsg): QueryClobPairAllResponse {
    return QueryClobPairAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClobPairAllResponseProtoMsg): QueryClobPairAllResponse {
    return QueryClobPairAllResponse.decode(message.value);
  },
  toProto(message: QueryClobPairAllResponse): Uint8Array {
    return QueryClobPairAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClobPairAllResponse): QueryClobPairAllResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryClobPairAllResponse",
      value: QueryClobPairAllResponse.encode(message).finish()
    };
  }
};
function createBaseAreSubaccountsLiquidatableRequest(): AreSubaccountsLiquidatableRequest {
  return {
    subaccountIds: []
  };
}
export const AreSubaccountsLiquidatableRequest = {
  typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableRequest",
  encode(message: AreSubaccountsLiquidatableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subaccountIds) {
      SubaccountId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AreSubaccountsLiquidatableRequest {
    return {
      subaccountIds: Array.isArray(object?.subaccountIds) ? object.subaccountIds.map((e: any) => SubaccountId.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AreSubaccountsLiquidatableRequest>): AreSubaccountsLiquidatableRequest {
    const message = createBaseAreSubaccountsLiquidatableRequest();
    message.subaccountIds = object.subaccountIds?.map(e => SubaccountId.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AreSubaccountsLiquidatableRequestAmino): AreSubaccountsLiquidatableRequest {
    return {
      subaccountIds: Array.isArray(object?.subaccount_ids) ? object.subaccount_ids.map((e: any) => SubaccountId.fromAmino(e)) : []
    };
  },
  toAmino(message: AreSubaccountsLiquidatableRequest): AreSubaccountsLiquidatableRequestAmino {
    const obj: any = {};
    if (message.subaccountIds) {
      obj.subaccount_ids = message.subaccountIds.map(e => e ? SubaccountId.toAmino(e) : undefined);
    } else {
      obj.subaccount_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: AreSubaccountsLiquidatableRequestAminoMsg): AreSubaccountsLiquidatableRequest {
    return AreSubaccountsLiquidatableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AreSubaccountsLiquidatableRequestProtoMsg): AreSubaccountsLiquidatableRequest {
    return AreSubaccountsLiquidatableRequest.decode(message.value);
  },
  toProto(message: AreSubaccountsLiquidatableRequest): Uint8Array {
    return AreSubaccountsLiquidatableRequest.encode(message).finish();
  },
  toProtoMsg(message: AreSubaccountsLiquidatableRequest): AreSubaccountsLiquidatableRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableRequest",
      value: AreSubaccountsLiquidatableRequest.encode(message).finish()
    };
  }
};
function createBaseAreSubaccountsLiquidatableResponse(): AreSubaccountsLiquidatableResponse {
  return {
    results: []
  };
}
export const AreSubaccountsLiquidatableResponse = {
  typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableResponse",
  encode(message: AreSubaccountsLiquidatableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      AreSubaccountsLiquidatableResponse_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AreSubaccountsLiquidatableResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => AreSubaccountsLiquidatableResponse_Result.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<AreSubaccountsLiquidatableResponse>): AreSubaccountsLiquidatableResponse {
    const message = createBaseAreSubaccountsLiquidatableResponse();
    message.results = object.results?.map(e => AreSubaccountsLiquidatableResponse_Result.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AreSubaccountsLiquidatableResponseAmino): AreSubaccountsLiquidatableResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => AreSubaccountsLiquidatableResponse_Result.fromAmino(e)) : []
    };
  },
  toAmino(message: AreSubaccountsLiquidatableResponse): AreSubaccountsLiquidatableResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? AreSubaccountsLiquidatableResponse_Result.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: AreSubaccountsLiquidatableResponseAminoMsg): AreSubaccountsLiquidatableResponse {
    return AreSubaccountsLiquidatableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AreSubaccountsLiquidatableResponseProtoMsg): AreSubaccountsLiquidatableResponse {
    return AreSubaccountsLiquidatableResponse.decode(message.value);
  },
  toProto(message: AreSubaccountsLiquidatableResponse): Uint8Array {
    return AreSubaccountsLiquidatableResponse.encode(message).finish();
  },
  toProtoMsg(message: AreSubaccountsLiquidatableResponse): AreSubaccountsLiquidatableResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.AreSubaccountsLiquidatableResponse",
      value: AreSubaccountsLiquidatableResponse.encode(message).finish()
    };
  }
};
function createBaseAreSubaccountsLiquidatableResponse_Result(): AreSubaccountsLiquidatableResponse_Result {
  return {
    subaccountId: SubaccountId.fromPartial({}),
    isLiquidatable: false
  };
}
export const AreSubaccountsLiquidatableResponse_Result = {
  typeUrl: "/dydxprotocol.clob.Result",
  encode(message: AreSubaccountsLiquidatableResponse_Result, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== undefined) {
      SubaccountId.encode(message.subaccountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.isLiquidatable === true) {
      writer.uint32(16).bool(message.isLiquidatable);
    }
    return writer;
  },
  fromJSON(object: any): AreSubaccountsLiquidatableResponse_Result {
    return {
      subaccountId: isSet(object.subaccountId) ? SubaccountId.fromJSON(object.subaccountId) : undefined,
      isLiquidatable: isSet(object.isLiquidatable) ? Boolean(object.isLiquidatable) : false
    };
  },
  fromPartial(object: Partial<AreSubaccountsLiquidatableResponse_Result>): AreSubaccountsLiquidatableResponse_Result {
    const message = createBaseAreSubaccountsLiquidatableResponse_Result();
    message.subaccountId = object.subaccountId !== undefined && object.subaccountId !== null ? SubaccountId.fromPartial(object.subaccountId) : undefined;
    message.isLiquidatable = object.isLiquidatable ?? false;
    return message;
  },
  fromAmino(object: AreSubaccountsLiquidatableResponse_ResultAmino): AreSubaccountsLiquidatableResponse_Result {
    return {
      subaccountId: object?.subaccount_id ? SubaccountId.fromAmino(object.subaccount_id) : undefined,
      isLiquidatable: object.is_liquidatable
    };
  },
  toAmino(message: AreSubaccountsLiquidatableResponse_Result): AreSubaccountsLiquidatableResponse_ResultAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId ? SubaccountId.toAmino(message.subaccountId) : undefined;
    obj.is_liquidatable = message.isLiquidatable;
    return obj;
  },
  fromAminoMsg(object: AreSubaccountsLiquidatableResponse_ResultAminoMsg): AreSubaccountsLiquidatableResponse_Result {
    return AreSubaccountsLiquidatableResponse_Result.fromAmino(object.value);
  },
  fromProtoMsg(message: AreSubaccountsLiquidatableResponse_ResultProtoMsg): AreSubaccountsLiquidatableResponse_Result {
    return AreSubaccountsLiquidatableResponse_Result.decode(message.value);
  },
  toProto(message: AreSubaccountsLiquidatableResponse_Result): Uint8Array {
    return AreSubaccountsLiquidatableResponse_Result.encode(message).finish();
  },
  toProtoMsg(message: AreSubaccountsLiquidatableResponse_Result): AreSubaccountsLiquidatableResponse_ResultProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.Result",
      value: AreSubaccountsLiquidatableResponse_Result.encode(message).finish()
    };
  }
};
function createBaseMevNodeToNodeCalculationRequest(): MevNodeToNodeCalculationRequest {
  return {
    blockProposerMatches: ValidatorMevMatches.fromPartial({}),
    validatorMevMetrics: MevNodeToNodeMetrics.fromPartial({})
  };
}
export const MevNodeToNodeCalculationRequest = {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationRequest",
  encode(message: MevNodeToNodeCalculationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockProposerMatches !== undefined) {
      ValidatorMevMatches.encode(message.blockProposerMatches, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorMevMetrics !== undefined) {
      MevNodeToNodeMetrics.encode(message.validatorMevMetrics, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MevNodeToNodeCalculationRequest {
    return {
      blockProposerMatches: isSet(object.blockProposerMatches) ? ValidatorMevMatches.fromJSON(object.blockProposerMatches) : undefined,
      validatorMevMetrics: isSet(object.validatorMevMetrics) ? MevNodeToNodeMetrics.fromJSON(object.validatorMevMetrics) : undefined
    };
  },
  fromPartial(object: Partial<MevNodeToNodeCalculationRequest>): MevNodeToNodeCalculationRequest {
    const message = createBaseMevNodeToNodeCalculationRequest();
    message.blockProposerMatches = object.blockProposerMatches !== undefined && object.blockProposerMatches !== null ? ValidatorMevMatches.fromPartial(object.blockProposerMatches) : undefined;
    message.validatorMevMetrics = object.validatorMevMetrics !== undefined && object.validatorMevMetrics !== null ? MevNodeToNodeMetrics.fromPartial(object.validatorMevMetrics) : undefined;
    return message;
  },
  fromAmino(object: MevNodeToNodeCalculationRequestAmino): MevNodeToNodeCalculationRequest {
    return {
      blockProposerMatches: object?.block_proposer_matches ? ValidatorMevMatches.fromAmino(object.block_proposer_matches) : undefined,
      validatorMevMetrics: object?.validator_mev_metrics ? MevNodeToNodeMetrics.fromAmino(object.validator_mev_metrics) : undefined
    };
  },
  toAmino(message: MevNodeToNodeCalculationRequest): MevNodeToNodeCalculationRequestAmino {
    const obj: any = {};
    obj.block_proposer_matches = message.blockProposerMatches ? ValidatorMevMatches.toAmino(message.blockProposerMatches) : undefined;
    obj.validator_mev_metrics = message.validatorMevMetrics ? MevNodeToNodeMetrics.toAmino(message.validatorMevMetrics) : undefined;
    return obj;
  },
  fromAminoMsg(object: MevNodeToNodeCalculationRequestAminoMsg): MevNodeToNodeCalculationRequest {
    return MevNodeToNodeCalculationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MevNodeToNodeCalculationRequestProtoMsg): MevNodeToNodeCalculationRequest {
    return MevNodeToNodeCalculationRequest.decode(message.value);
  },
  toProto(message: MevNodeToNodeCalculationRequest): Uint8Array {
    return MevNodeToNodeCalculationRequest.encode(message).finish();
  },
  toProtoMsg(message: MevNodeToNodeCalculationRequest): MevNodeToNodeCalculationRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationRequest",
      value: MevNodeToNodeCalculationRequest.encode(message).finish()
    };
  }
};
function createBaseMevNodeToNodeCalculationResponse(): MevNodeToNodeCalculationResponse {
  return {
    results: []
  };
}
export const MevNodeToNodeCalculationResponse = {
  typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationResponse",
  encode(message: MevNodeToNodeCalculationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MevNodeToNodeCalculationResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MevNodeToNodeCalculationResponse>): MevNodeToNodeCalculationResponse {
    const message = createBaseMevNodeToNodeCalculationResponse();
    message.results = object.results?.map(e => MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MevNodeToNodeCalculationResponseAmino): MevNodeToNodeCalculationResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromAmino(e)) : []
    };
  },
  toAmino(message: MevNodeToNodeCalculationResponse): MevNodeToNodeCalculationResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => e ? MevNodeToNodeCalculationResponse_MevAndVolumePerClob.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromAminoMsg(object: MevNodeToNodeCalculationResponseAminoMsg): MevNodeToNodeCalculationResponse {
    return MevNodeToNodeCalculationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MevNodeToNodeCalculationResponseProtoMsg): MevNodeToNodeCalculationResponse {
    return MevNodeToNodeCalculationResponse.decode(message.value);
  },
  toProto(message: MevNodeToNodeCalculationResponse): Uint8Array {
    return MevNodeToNodeCalculationResponse.encode(message).finish();
  },
  toProtoMsg(message: MevNodeToNodeCalculationResponse): MevNodeToNodeCalculationResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MevNodeToNodeCalculationResponse",
      value: MevNodeToNodeCalculationResponse.encode(message).finish()
    };
  }
};
function createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob(): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
  return {
    clobPairId: 0,
    mev: 0,
    volume: BigInt(0)
  };
}
export const MevNodeToNodeCalculationResponse_MevAndVolumePerClob = {
  typeUrl: "/dydxprotocol.clob.MevAndVolumePerClob",
  encode(message: MevNodeToNodeCalculationResponse_MevAndVolumePerClob, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clobPairId !== 0) {
      writer.uint32(8).uint32(message.clobPairId);
    }
    if (message.mev !== 0) {
      writer.uint32(21).float(message.mev);
    }
    if (message.volume !== BigInt(0)) {
      writer.uint32(24).uint64(message.volume);
    }
    return writer;
  },
  fromJSON(object: any): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
    return {
      clobPairId: isSet(object.clobPairId) ? Number(object.clobPairId) : 0,
      mev: isSet(object.mev) ? Number(object.mev) : 0,
      volume: isSet(object.volume) ? BigInt(object.volume.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MevNodeToNodeCalculationResponse_MevAndVolumePerClob>): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
    const message = createBaseMevNodeToNodeCalculationResponse_MevAndVolumePerClob();
    message.clobPairId = object.clobPairId ?? 0;
    message.mev = object.mev ?? 0;
    message.volume = object.volume !== undefined && object.volume !== null ? BigInt(object.volume.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MevNodeToNodeCalculationResponse_MevAndVolumePerClobAmino): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
    return {
      clobPairId: object.clob_pair_id,
      mev: object.mev,
      volume: BigInt(object.volume)
    };
  },
  toAmino(message: MevNodeToNodeCalculationResponse_MevAndVolumePerClob): MevNodeToNodeCalculationResponse_MevAndVolumePerClobAmino {
    const obj: any = {};
    obj.clob_pair_id = message.clobPairId;
    obj.mev = message.mev;
    obj.volume = message.volume ? message.volume.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MevNodeToNodeCalculationResponse_MevAndVolumePerClobAminoMsg): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
    return MevNodeToNodeCalculationResponse_MevAndVolumePerClob.fromAmino(object.value);
  },
  fromProtoMsg(message: MevNodeToNodeCalculationResponse_MevAndVolumePerClobProtoMsg): MevNodeToNodeCalculationResponse_MevAndVolumePerClob {
    return MevNodeToNodeCalculationResponse_MevAndVolumePerClob.decode(message.value);
  },
  toProto(message: MevNodeToNodeCalculationResponse_MevAndVolumePerClob): Uint8Array {
    return MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(message).finish();
  },
  toProtoMsg(message: MevNodeToNodeCalculationResponse_MevAndVolumePerClob): MevNodeToNodeCalculationResponse_MevAndVolumePerClobProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.MevAndVolumePerClob",
      value: MevNodeToNodeCalculationResponse_MevAndVolumePerClob.encode(message).finish()
    };
  }
};
function createBaseQueryEquityTierLimitConfigurationRequest(): QueryEquityTierLimitConfigurationRequest {
  return {};
}
export const QueryEquityTierLimitConfigurationRequest = {
  typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationRequest",
  encode(_: QueryEquityTierLimitConfigurationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryEquityTierLimitConfigurationRequest {
    return {};
  },
  fromPartial(_: Partial<QueryEquityTierLimitConfigurationRequest>): QueryEquityTierLimitConfigurationRequest {
    const message = createBaseQueryEquityTierLimitConfigurationRequest();
    return message;
  },
  fromAmino(_: QueryEquityTierLimitConfigurationRequestAmino): QueryEquityTierLimitConfigurationRequest {
    return {};
  },
  toAmino(_: QueryEquityTierLimitConfigurationRequest): QueryEquityTierLimitConfigurationRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEquityTierLimitConfigurationRequestAminoMsg): QueryEquityTierLimitConfigurationRequest {
    return QueryEquityTierLimitConfigurationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEquityTierLimitConfigurationRequestProtoMsg): QueryEquityTierLimitConfigurationRequest {
    return QueryEquityTierLimitConfigurationRequest.decode(message.value);
  },
  toProto(message: QueryEquityTierLimitConfigurationRequest): Uint8Array {
    return QueryEquityTierLimitConfigurationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEquityTierLimitConfigurationRequest): QueryEquityTierLimitConfigurationRequestProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationRequest",
      value: QueryEquityTierLimitConfigurationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEquityTierLimitConfigurationResponse(): QueryEquityTierLimitConfigurationResponse {
  return {
    equityTierLimitConfig: EquityTierLimitConfiguration.fromPartial({})
  };
}
export const QueryEquityTierLimitConfigurationResponse = {
  typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationResponse",
  encode(message: QueryEquityTierLimitConfigurationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.equityTierLimitConfig !== undefined) {
      EquityTierLimitConfiguration.encode(message.equityTierLimitConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryEquityTierLimitConfigurationResponse {
    return {
      equityTierLimitConfig: isSet(object.equityTierLimitConfig) ? EquityTierLimitConfiguration.fromJSON(object.equityTierLimitConfig) : undefined
    };
  },
  fromPartial(object: Partial<QueryEquityTierLimitConfigurationResponse>): QueryEquityTierLimitConfigurationResponse {
    const message = createBaseQueryEquityTierLimitConfigurationResponse();
    message.equityTierLimitConfig = object.equityTierLimitConfig !== undefined && object.equityTierLimitConfig !== null ? EquityTierLimitConfiguration.fromPartial(object.equityTierLimitConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryEquityTierLimitConfigurationResponseAmino): QueryEquityTierLimitConfigurationResponse {
    return {
      equityTierLimitConfig: object?.equity_tier_limit_config ? EquityTierLimitConfiguration.fromAmino(object.equity_tier_limit_config) : undefined
    };
  },
  toAmino(message: QueryEquityTierLimitConfigurationResponse): QueryEquityTierLimitConfigurationResponseAmino {
    const obj: any = {};
    obj.equity_tier_limit_config = message.equityTierLimitConfig ? EquityTierLimitConfiguration.toAmino(message.equityTierLimitConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEquityTierLimitConfigurationResponseAminoMsg): QueryEquityTierLimitConfigurationResponse {
    return QueryEquityTierLimitConfigurationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEquityTierLimitConfigurationResponseProtoMsg): QueryEquityTierLimitConfigurationResponse {
    return QueryEquityTierLimitConfigurationResponse.decode(message.value);
  },
  toProto(message: QueryEquityTierLimitConfigurationResponse): Uint8Array {
    return QueryEquityTierLimitConfigurationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEquityTierLimitConfigurationResponse): QueryEquityTierLimitConfigurationResponseProtoMsg {
    return {
      typeUrl: "/dydxprotocol.clob.QueryEquityTierLimitConfigurationResponse",
      value: QueryEquityTierLimitConfigurationResponse.encode(message).finish()
    };
  }
};