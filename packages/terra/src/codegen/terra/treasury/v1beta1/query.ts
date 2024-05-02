import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./treasury";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {}
export interface QueryTaxRateRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxRateRequest";
  value: Uint8Array;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestAmino {}
export interface QueryTaxRateRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxRateRequest";
  value: QueryTaxRateRequestAmino;
}
/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequestSDKType {}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
  taxRate: string;
}
export interface QueryTaxRateResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxRateResponse";
  value: Uint8Array;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseAmino {
  tax_rate?: string;
}
export interface QueryTaxRateResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxRateResponse";
  value: QueryTaxRateResponseAmino;
}
/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponseSDKType {
  tax_rate: string;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryTaxCapRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapRequest";
  value: Uint8Array;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequestAmino {
  /** denom defines the denomination to query for. */
  denom?: string;
}
export interface QueryTaxCapRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxCapRequest";
  value: QueryTaxCapRequestAmino;
}
/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequestSDKType {
  denom: string;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponse {
  taxCap: string;
}
export interface QueryTaxCapResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapResponse";
  value: Uint8Array;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponseAmino {
  tax_cap?: string;
}
export interface QueryTaxCapResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxCapResponse";
  value: QueryTaxCapResponseAmino;
}
/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponseSDKType {
  tax_cap: string;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequest {}
export interface QueryTaxCapsRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsRequest";
  value: Uint8Array;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequestAmino {}
export interface QueryTaxCapsRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxCapsRequest";
  value: QueryTaxCapsRequestAmino;
}
/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequestSDKType {}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItem {
  denom: string;
  taxCap: string;
}
export interface QueryTaxCapsResponseItemProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem";
  value: Uint8Array;
}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItemAmino {
  denom?: string;
  tax_cap?: string;
}
export interface QueryTaxCapsResponseItemAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem";
  value: QueryTaxCapsResponseItemAmino;
}
/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItemSDKType {
  denom: string;
  tax_cap: string;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponse {
  taxCaps: QueryTaxCapsResponseItem[];
}
export interface QueryTaxCapsResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponse";
  value: Uint8Array;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseAmino {
  tax_caps?: QueryTaxCapsResponseItemAmino[];
}
export interface QueryTaxCapsResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxCapsResponse";
  value: QueryTaxCapsResponseAmino;
}
/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseSDKType {
  tax_caps: QueryTaxCapsResponseItemSDKType[];
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequest {}
export interface QueryRewardWeightRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightRequest";
  value: Uint8Array;
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequestAmino {}
export interface QueryRewardWeightRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryRewardWeightRequest";
  value: QueryRewardWeightRequestAmino;
}
/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequestSDKType {}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponse {
  rewardWeight: string;
}
export interface QueryRewardWeightResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightResponse";
  value: Uint8Array;
}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponseAmino {
  reward_weight?: string;
}
export interface QueryRewardWeightResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryRewardWeightResponse";
  value: QueryRewardWeightResponseAmino;
}
/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponseSDKType {
  reward_weight: string;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequest {}
export interface QueryTaxProceedsRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsRequest";
  value: Uint8Array;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequestAmino {}
export interface QueryTaxProceedsRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxProceedsRequest";
  value: QueryTaxProceedsRequestAmino;
}
/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequestSDKType {}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponse {
  taxProceeds: Coin[];
}
export interface QueryTaxProceedsResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsResponse";
  value: Uint8Array;
}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponseAmino {
  tax_proceeds?: CoinAmino[];
}
export interface QueryTaxProceedsResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryTaxProceedsResponse";
  value: QueryTaxProceedsResponseAmino;
}
/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponseSDKType {
  tax_proceeds: CoinSDKType[];
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequest {}
export interface QuerySeigniorageProceedsRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest";
  value: Uint8Array;
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequestAmino {}
export interface QuerySeigniorageProceedsRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest";
  value: QuerySeigniorageProceedsRequestAmino;
}
/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequestSDKType {}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponse {
  seigniorageProceeds: string;
}
export interface QuerySeigniorageProceedsResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse";
  value: Uint8Array;
}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponseAmino {
  seigniorage_proceeds?: string;
}
export interface QuerySeigniorageProceedsResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse";
  value: QuerySeigniorageProceedsResponseAmino;
}
/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponseSDKType {
  seigniorage_proceeds: string;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequest {}
export interface QueryIndicatorsRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsRequest";
  value: Uint8Array;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequestAmino {}
export interface QueryIndicatorsRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryIndicatorsRequest";
  value: QueryIndicatorsRequestAmino;
}
/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequestSDKType {}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponse {
  trlYear: string;
  trlMonth: string;
}
export interface QueryIndicatorsResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsResponse";
  value: Uint8Array;
}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponseAmino {
  trl_year?: string;
  trl_month?: string;
}
export interface QueryIndicatorsResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryIndicatorsResponse";
  value: QueryIndicatorsResponseAmino;
}
/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponseSDKType {
  trl_year: string;
  trl_month: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryParamsRequest";
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
  typeUrl: "/terra.treasury.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequest {
  pagination?: PageRequest;
}
export interface QueryBurnTaxExemptionListRequestProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest";
  value: Uint8Array;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryBurnTaxExemptionListRequestAminoMsg {
  type: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest";
  value: QueryBurnTaxExemptionListRequestAmino;
}
/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponse {
  addresses: string[];
  pagination?: PageResponse;
}
export interface QueryBurnTaxExemptionListResponseProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse";
  value: Uint8Array;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponseAmino {
  addresses?: string[];
  pagination?: PageResponseAmino;
}
export interface QueryBurnTaxExemptionListResponseAminoMsg {
  type: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse";
  value: QueryBurnTaxExemptionListResponseAmino;
}
/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponseSDKType {
  addresses: string[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryTaxRateRequest(): QueryTaxRateRequest {
  return {};
}
export const QueryTaxRateRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxRateRequest",
  encode(_: QueryTaxRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTaxRateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTaxRateRequest>): QueryTaxRateRequest {
    const message = createBaseQueryTaxRateRequest();
    return message;
  },
  fromAmino(_: QueryTaxRateRequestAmino): QueryTaxRateRequest {
    const message = createBaseQueryTaxRateRequest();
    return message;
  },
  toAmino(_: QueryTaxRateRequest): QueryTaxRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTaxRateRequestAminoMsg): QueryTaxRateRequest {
    return QueryTaxRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxRateRequestProtoMsg): QueryTaxRateRequest {
    return QueryTaxRateRequest.decode(message.value);
  },
  toProto(message: QueryTaxRateRequest): Uint8Array {
    return QueryTaxRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxRateRequest): QueryTaxRateRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxRateRequest",
      value: QueryTaxRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTaxRateResponse(): QueryTaxRateResponse {
  return {
    taxRate: ""
  };
}
export const QueryTaxRateResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxRateResponse",
  encode(message: QueryTaxRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taxRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.taxRate, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxRateResponse {
    return {
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : ""
    };
  },
  fromPartial(object: Partial<QueryTaxRateResponse>): QueryTaxRateResponse {
    const message = createBaseQueryTaxRateResponse();
    message.taxRate = object.taxRate ?? "";
    return message;
  },
  fromAmino(object: QueryTaxRateResponseAmino): QueryTaxRateResponse {
    const message = createBaseQueryTaxRateResponse();
    if (object.tax_rate !== undefined && object.tax_rate !== null) {
      message.taxRate = object.tax_rate;
    }
    return message;
  },
  toAmino(message: QueryTaxRateResponse): QueryTaxRateResponseAmino {
    const obj: any = {};
    obj.tax_rate = message.taxRate === "" ? undefined : message.taxRate;
    return obj;
  },
  fromAminoMsg(object: QueryTaxRateResponseAminoMsg): QueryTaxRateResponse {
    return QueryTaxRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxRateResponseProtoMsg): QueryTaxRateResponse {
    return QueryTaxRateResponse.decode(message.value);
  },
  toProto(message: QueryTaxRateResponse): Uint8Array {
    return QueryTaxRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxRateResponse): QueryTaxRateResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxRateResponse",
      value: QueryTaxRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTaxCapRequest(): QueryTaxCapRequest {
  return {
    denom: ""
  };
}
export const QueryTaxCapRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapRequest",
  encode(message: QueryTaxCapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxCapRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryTaxCapRequest>): QueryTaxCapRequest {
    const message = createBaseQueryTaxCapRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTaxCapRequestAmino): QueryTaxCapRequest {
    const message = createBaseQueryTaxCapRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTaxCapRequest): QueryTaxCapRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTaxCapRequestAminoMsg): QueryTaxCapRequest {
    return QueryTaxCapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxCapRequestProtoMsg): QueryTaxCapRequest {
    return QueryTaxCapRequest.decode(message.value);
  },
  toProto(message: QueryTaxCapRequest): Uint8Array {
    return QueryTaxCapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxCapRequest): QueryTaxCapRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxCapRequest",
      value: QueryTaxCapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTaxCapResponse(): QueryTaxCapResponse {
  return {
    taxCap: ""
  };
}
export const QueryTaxCapResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapResponse",
  encode(message: QueryTaxCapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taxCap !== "") {
      writer.uint32(10).string(message.taxCap);
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxCapResponse {
    return {
      taxCap: isSet(object.taxCap) ? String(object.taxCap) : ""
    };
  },
  fromPartial(object: Partial<QueryTaxCapResponse>): QueryTaxCapResponse {
    const message = createBaseQueryTaxCapResponse();
    message.taxCap = object.taxCap ?? "";
    return message;
  },
  fromAmino(object: QueryTaxCapResponseAmino): QueryTaxCapResponse {
    const message = createBaseQueryTaxCapResponse();
    if (object.tax_cap !== undefined && object.tax_cap !== null) {
      message.taxCap = object.tax_cap;
    }
    return message;
  },
  toAmino(message: QueryTaxCapResponse): QueryTaxCapResponseAmino {
    const obj: any = {};
    obj.tax_cap = message.taxCap === "" ? undefined : message.taxCap;
    return obj;
  },
  fromAminoMsg(object: QueryTaxCapResponseAminoMsg): QueryTaxCapResponse {
    return QueryTaxCapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxCapResponseProtoMsg): QueryTaxCapResponse {
    return QueryTaxCapResponse.decode(message.value);
  },
  toProto(message: QueryTaxCapResponse): Uint8Array {
    return QueryTaxCapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxCapResponse): QueryTaxCapResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxCapResponse",
      value: QueryTaxCapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTaxCapsRequest(): QueryTaxCapsRequest {
  return {};
}
export const QueryTaxCapsRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsRequest",
  encode(_: QueryTaxCapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTaxCapsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTaxCapsRequest>): QueryTaxCapsRequest {
    const message = createBaseQueryTaxCapsRequest();
    return message;
  },
  fromAmino(_: QueryTaxCapsRequestAmino): QueryTaxCapsRequest {
    const message = createBaseQueryTaxCapsRequest();
    return message;
  },
  toAmino(_: QueryTaxCapsRequest): QueryTaxCapsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTaxCapsRequestAminoMsg): QueryTaxCapsRequest {
    return QueryTaxCapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxCapsRequestProtoMsg): QueryTaxCapsRequest {
    return QueryTaxCapsRequest.decode(message.value);
  },
  toProto(message: QueryTaxCapsRequest): Uint8Array {
    return QueryTaxCapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxCapsRequest): QueryTaxCapsRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsRequest",
      value: QueryTaxCapsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTaxCapsResponseItem(): QueryTaxCapsResponseItem {
  return {
    denom: "",
    taxCap: ""
  };
}
export const QueryTaxCapsResponseItem = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem",
  encode(message: QueryTaxCapsResponseItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxCapsResponseItem {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      taxCap: isSet(object.taxCap) ? String(object.taxCap) : ""
    };
  },
  fromPartial(object: Partial<QueryTaxCapsResponseItem>): QueryTaxCapsResponseItem {
    const message = createBaseQueryTaxCapsResponseItem();
    message.denom = object.denom ?? "";
    message.taxCap = object.taxCap ?? "";
    return message;
  },
  fromAmino(object: QueryTaxCapsResponseItemAmino): QueryTaxCapsResponseItem {
    const message = createBaseQueryTaxCapsResponseItem();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.tax_cap !== undefined && object.tax_cap !== null) {
      message.taxCap = object.tax_cap;
    }
    return message;
  },
  toAmino(message: QueryTaxCapsResponseItem): QueryTaxCapsResponseItemAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.tax_cap = message.taxCap === "" ? undefined : message.taxCap;
    return obj;
  },
  fromAminoMsg(object: QueryTaxCapsResponseItemAminoMsg): QueryTaxCapsResponseItem {
    return QueryTaxCapsResponseItem.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxCapsResponseItemProtoMsg): QueryTaxCapsResponseItem {
    return QueryTaxCapsResponseItem.decode(message.value);
  },
  toProto(message: QueryTaxCapsResponseItem): Uint8Array {
    return QueryTaxCapsResponseItem.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxCapsResponseItem): QueryTaxCapsResponseItemProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponseItem",
      value: QueryTaxCapsResponseItem.encode(message).finish()
    };
  }
};
function createBaseQueryTaxCapsResponse(): QueryTaxCapsResponse {
  return {
    taxCaps: []
  };
}
export const QueryTaxCapsResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponse",
  encode(message: QueryTaxCapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.taxCaps) {
      QueryTaxCapsResponseItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxCapsResponse {
    return {
      taxCaps: Array.isArray(object?.taxCaps) ? object.taxCaps.map((e: any) => QueryTaxCapsResponseItem.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTaxCapsResponse>): QueryTaxCapsResponse {
    const message = createBaseQueryTaxCapsResponse();
    message.taxCaps = object.taxCaps?.map(e => QueryTaxCapsResponseItem.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTaxCapsResponseAmino): QueryTaxCapsResponse {
    const message = createBaseQueryTaxCapsResponse();
    message.taxCaps = object.tax_caps?.map(e => QueryTaxCapsResponseItem.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTaxCapsResponse): QueryTaxCapsResponseAmino {
    const obj: any = {};
    if (message.taxCaps) {
      obj.tax_caps = message.taxCaps.map(e => e ? QueryTaxCapsResponseItem.toAmino(e) : undefined);
    } else {
      obj.tax_caps = message.taxCaps;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTaxCapsResponseAminoMsg): QueryTaxCapsResponse {
    return QueryTaxCapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxCapsResponseProtoMsg): QueryTaxCapsResponse {
    return QueryTaxCapsResponse.decode(message.value);
  },
  toProto(message: QueryTaxCapsResponse): Uint8Array {
    return QueryTaxCapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxCapsResponse): QueryTaxCapsResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxCapsResponse",
      value: QueryTaxCapsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardWeightRequest(): QueryRewardWeightRequest {
  return {};
}
export const QueryRewardWeightRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightRequest",
  encode(_: QueryRewardWeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryRewardWeightRequest {
    return {};
  },
  fromPartial(_: Partial<QueryRewardWeightRequest>): QueryRewardWeightRequest {
    const message = createBaseQueryRewardWeightRequest();
    return message;
  },
  fromAmino(_: QueryRewardWeightRequestAmino): QueryRewardWeightRequest {
    const message = createBaseQueryRewardWeightRequest();
    return message;
  },
  toAmino(_: QueryRewardWeightRequest): QueryRewardWeightRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRewardWeightRequestAminoMsg): QueryRewardWeightRequest {
    return QueryRewardWeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardWeightRequestProtoMsg): QueryRewardWeightRequest {
    return QueryRewardWeightRequest.decode(message.value);
  },
  toProto(message: QueryRewardWeightRequest): Uint8Array {
    return QueryRewardWeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardWeightRequest): QueryRewardWeightRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightRequest",
      value: QueryRewardWeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardWeightResponse(): QueryRewardWeightResponse {
  return {
    rewardWeight: ""
  };
}
export const QueryRewardWeightResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightResponse",
  encode(message: QueryRewardWeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardWeight !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rewardWeight, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryRewardWeightResponse {
    return {
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : ""
    };
  },
  fromPartial(object: Partial<QueryRewardWeightResponse>): QueryRewardWeightResponse {
    const message = createBaseQueryRewardWeightResponse();
    message.rewardWeight = object.rewardWeight ?? "";
    return message;
  },
  fromAmino(object: QueryRewardWeightResponseAmino): QueryRewardWeightResponse {
    const message = createBaseQueryRewardWeightResponse();
    if (object.reward_weight !== undefined && object.reward_weight !== null) {
      message.rewardWeight = object.reward_weight;
    }
    return message;
  },
  toAmino(message: QueryRewardWeightResponse): QueryRewardWeightResponseAmino {
    const obj: any = {};
    obj.reward_weight = message.rewardWeight === "" ? undefined : message.rewardWeight;
    return obj;
  },
  fromAminoMsg(object: QueryRewardWeightResponseAminoMsg): QueryRewardWeightResponse {
    return QueryRewardWeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardWeightResponseProtoMsg): QueryRewardWeightResponse {
    return QueryRewardWeightResponse.decode(message.value);
  },
  toProto(message: QueryRewardWeightResponse): Uint8Array {
    return QueryRewardWeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardWeightResponse): QueryRewardWeightResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryRewardWeightResponse",
      value: QueryRewardWeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTaxProceedsRequest(): QueryTaxProceedsRequest {
  return {};
}
export const QueryTaxProceedsRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsRequest",
  encode(_: QueryTaxProceedsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTaxProceedsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTaxProceedsRequest>): QueryTaxProceedsRequest {
    const message = createBaseQueryTaxProceedsRequest();
    return message;
  },
  fromAmino(_: QueryTaxProceedsRequestAmino): QueryTaxProceedsRequest {
    const message = createBaseQueryTaxProceedsRequest();
    return message;
  },
  toAmino(_: QueryTaxProceedsRequest): QueryTaxProceedsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTaxProceedsRequestAminoMsg): QueryTaxProceedsRequest {
    return QueryTaxProceedsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxProceedsRequestProtoMsg): QueryTaxProceedsRequest {
    return QueryTaxProceedsRequest.decode(message.value);
  },
  toProto(message: QueryTaxProceedsRequest): Uint8Array {
    return QueryTaxProceedsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxProceedsRequest): QueryTaxProceedsRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsRequest",
      value: QueryTaxProceedsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTaxProceedsResponse(): QueryTaxProceedsResponse {
  return {
    taxProceeds: []
  };
}
export const QueryTaxProceedsResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsResponse",
  encode(message: QueryTaxProceedsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTaxProceedsResponse {
    return {
      taxProceeds: Array.isArray(object?.taxProceeds) ? object.taxProceeds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTaxProceedsResponse>): QueryTaxProceedsResponse {
    const message = createBaseQueryTaxProceedsResponse();
    message.taxProceeds = object.taxProceeds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTaxProceedsResponseAmino): QueryTaxProceedsResponse {
    const message = createBaseQueryTaxProceedsResponse();
    message.taxProceeds = object.tax_proceeds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTaxProceedsResponse): QueryTaxProceedsResponseAmino {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.tax_proceeds = message.taxProceeds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tax_proceeds = message.taxProceeds;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTaxProceedsResponseAminoMsg): QueryTaxProceedsResponse {
    return QueryTaxProceedsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaxProceedsResponseProtoMsg): QueryTaxProceedsResponse {
    return QueryTaxProceedsResponse.decode(message.value);
  },
  toProto(message: QueryTaxProceedsResponse): Uint8Array {
    return QueryTaxProceedsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaxProceedsResponse): QueryTaxProceedsResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryTaxProceedsResponse",
      value: QueryTaxProceedsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySeigniorageProceedsRequest(): QuerySeigniorageProceedsRequest {
  return {};
}
export const QuerySeigniorageProceedsRequest = {
  typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest",
  encode(_: QuerySeigniorageProceedsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySeigniorageProceedsRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySeigniorageProceedsRequest>): QuerySeigniorageProceedsRequest {
    const message = createBaseQuerySeigniorageProceedsRequest();
    return message;
  },
  fromAmino(_: QuerySeigniorageProceedsRequestAmino): QuerySeigniorageProceedsRequest {
    const message = createBaseQuerySeigniorageProceedsRequest();
    return message;
  },
  toAmino(_: QuerySeigniorageProceedsRequest): QuerySeigniorageProceedsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySeigniorageProceedsRequestAminoMsg): QuerySeigniorageProceedsRequest {
    return QuerySeigniorageProceedsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeigniorageProceedsRequestProtoMsg): QuerySeigniorageProceedsRequest {
    return QuerySeigniorageProceedsRequest.decode(message.value);
  },
  toProto(message: QuerySeigniorageProceedsRequest): Uint8Array {
    return QuerySeigniorageProceedsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySeigniorageProceedsRequest): QuerySeigniorageProceedsRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsRequest",
      value: QuerySeigniorageProceedsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySeigniorageProceedsResponse(): QuerySeigniorageProceedsResponse {
  return {
    seigniorageProceeds: ""
  };
}
export const QuerySeigniorageProceedsResponse = {
  typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse",
  encode(message: QuerySeigniorageProceedsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.seigniorageProceeds !== "") {
      writer.uint32(10).string(message.seigniorageProceeds);
    }
    return writer;
  },
  fromJSON(object: any): QuerySeigniorageProceedsResponse {
    return {
      seigniorageProceeds: isSet(object.seigniorageProceeds) ? String(object.seigniorageProceeds) : ""
    };
  },
  fromPartial(object: Partial<QuerySeigniorageProceedsResponse>): QuerySeigniorageProceedsResponse {
    const message = createBaseQuerySeigniorageProceedsResponse();
    message.seigniorageProceeds = object.seigniorageProceeds ?? "";
    return message;
  },
  fromAmino(object: QuerySeigniorageProceedsResponseAmino): QuerySeigniorageProceedsResponse {
    const message = createBaseQuerySeigniorageProceedsResponse();
    if (object.seigniorage_proceeds !== undefined && object.seigniorage_proceeds !== null) {
      message.seigniorageProceeds = object.seigniorage_proceeds;
    }
    return message;
  },
  toAmino(message: QuerySeigniorageProceedsResponse): QuerySeigniorageProceedsResponseAmino {
    const obj: any = {};
    obj.seigniorage_proceeds = message.seigniorageProceeds === "" ? undefined : message.seigniorageProceeds;
    return obj;
  },
  fromAminoMsg(object: QuerySeigniorageProceedsResponseAminoMsg): QuerySeigniorageProceedsResponse {
    return QuerySeigniorageProceedsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySeigniorageProceedsResponseProtoMsg): QuerySeigniorageProceedsResponse {
    return QuerySeigniorageProceedsResponse.decode(message.value);
  },
  toProto(message: QuerySeigniorageProceedsResponse): Uint8Array {
    return QuerySeigniorageProceedsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySeigniorageProceedsResponse): QuerySeigniorageProceedsResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QuerySeigniorageProceedsResponse",
      value: QuerySeigniorageProceedsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIndicatorsRequest(): QueryIndicatorsRequest {
  return {};
}
export const QueryIndicatorsRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsRequest",
  encode(_: QueryIndicatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryIndicatorsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryIndicatorsRequest>): QueryIndicatorsRequest {
    const message = createBaseQueryIndicatorsRequest();
    return message;
  },
  fromAmino(_: QueryIndicatorsRequestAmino): QueryIndicatorsRequest {
    const message = createBaseQueryIndicatorsRequest();
    return message;
  },
  toAmino(_: QueryIndicatorsRequest): QueryIndicatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryIndicatorsRequestAminoMsg): QueryIndicatorsRequest {
    return QueryIndicatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndicatorsRequestProtoMsg): QueryIndicatorsRequest {
    return QueryIndicatorsRequest.decode(message.value);
  },
  toProto(message: QueryIndicatorsRequest): Uint8Array {
    return QueryIndicatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIndicatorsRequest): QueryIndicatorsRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsRequest",
      value: QueryIndicatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIndicatorsResponse(): QueryIndicatorsResponse {
  return {
    trlYear: "",
    trlMonth: ""
  };
}
export const QueryIndicatorsResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsResponse",
  encode(message: QueryIndicatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trlYear !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.trlYear, 18).atomics);
    }
    if (message.trlMonth !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.trlMonth, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): QueryIndicatorsResponse {
    return {
      trlYear: isSet(object.trlYear) ? String(object.trlYear) : "",
      trlMonth: isSet(object.trlMonth) ? String(object.trlMonth) : ""
    };
  },
  fromPartial(object: Partial<QueryIndicatorsResponse>): QueryIndicatorsResponse {
    const message = createBaseQueryIndicatorsResponse();
    message.trlYear = object.trlYear ?? "";
    message.trlMonth = object.trlMonth ?? "";
    return message;
  },
  fromAmino(object: QueryIndicatorsResponseAmino): QueryIndicatorsResponse {
    const message = createBaseQueryIndicatorsResponse();
    if (object.trl_year !== undefined && object.trl_year !== null) {
      message.trlYear = object.trl_year;
    }
    if (object.trl_month !== undefined && object.trl_month !== null) {
      message.trlMonth = object.trl_month;
    }
    return message;
  },
  toAmino(message: QueryIndicatorsResponse): QueryIndicatorsResponseAmino {
    const obj: any = {};
    obj.trl_year = message.trlYear === "" ? undefined : message.trlYear;
    obj.trl_month = message.trlMonth === "" ? undefined : message.trlMonth;
    return obj;
  },
  fromAminoMsg(object: QueryIndicatorsResponseAminoMsg): QueryIndicatorsResponse {
    return QueryIndicatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIndicatorsResponseProtoMsg): QueryIndicatorsResponse {
    return QueryIndicatorsResponse.decode(message.value);
  },
  toProto(message: QueryIndicatorsResponse): Uint8Array {
    return QueryIndicatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIndicatorsResponse): QueryIndicatorsResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryIndicatorsResponse",
      value: QueryIndicatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryParamsRequest",
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
    const message = createBaseQueryParamsRequest();
    return message;
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
      typeUrl: "/terra.treasury.v1beta1.QueryParamsRequest",
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
  typeUrl: "/terra.treasury.v1beta1.QueryParamsResponse",
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
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
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
      typeUrl: "/terra.treasury.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBurnTaxExemptionListRequest(): QueryBurnTaxExemptionListRequest {
  return {
    pagination: undefined
  };
}
export const QueryBurnTaxExemptionListRequest = {
  typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest",
  encode(message: QueryBurnTaxExemptionListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBurnTaxExemptionListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBurnTaxExemptionListRequest>): QueryBurnTaxExemptionListRequest {
    const message = createBaseQueryBurnTaxExemptionListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBurnTaxExemptionListRequestAmino): QueryBurnTaxExemptionListRequest {
    const message = createBaseQueryBurnTaxExemptionListRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBurnTaxExemptionListRequest): QueryBurnTaxExemptionListRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBurnTaxExemptionListRequestAminoMsg): QueryBurnTaxExemptionListRequest {
    return QueryBurnTaxExemptionListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurnTaxExemptionListRequestProtoMsg): QueryBurnTaxExemptionListRequest {
    return QueryBurnTaxExemptionListRequest.decode(message.value);
  },
  toProto(message: QueryBurnTaxExemptionListRequest): Uint8Array {
    return QueryBurnTaxExemptionListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBurnTaxExemptionListRequest): QueryBurnTaxExemptionListRequestProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListRequest",
      value: QueryBurnTaxExemptionListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBurnTaxExemptionListResponse(): QueryBurnTaxExemptionListResponse {
  return {
    addresses: [],
    pagination: undefined
  };
}
export const QueryBurnTaxExemptionListResponse = {
  typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse",
  encode(message: QueryBurnTaxExemptionListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBurnTaxExemptionListResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryBurnTaxExemptionListResponse>): QueryBurnTaxExemptionListResponse {
    const message = createBaseQueryBurnTaxExemptionListResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBurnTaxExemptionListResponseAmino): QueryBurnTaxExemptionListResponse {
    const message = createBaseQueryBurnTaxExemptionListResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryBurnTaxExemptionListResponse): QueryBurnTaxExemptionListResponseAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBurnTaxExemptionListResponseAminoMsg): QueryBurnTaxExemptionListResponse {
    return QueryBurnTaxExemptionListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBurnTaxExemptionListResponseProtoMsg): QueryBurnTaxExemptionListResponse {
    return QueryBurnTaxExemptionListResponse.decode(message.value);
  },
  toProto(message: QueryBurnTaxExemptionListResponse): Uint8Array {
    return QueryBurnTaxExemptionListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBurnTaxExemptionListResponse): QueryBurnTaxExemptionListResponseProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.QueryBurnTaxExemptionListResponse",
      value: QueryBurnTaxExemptionListResponse.encode(message).finish()
    };
  }
};