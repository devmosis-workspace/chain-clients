import { Params as Params1 } from "../../bundles/v1beta1/params";
import { ParamsAmino as Params1Amino } from "../../bundles/v1beta1/params";
import { ParamsSDKType as Params1SDKType } from "../../bundles/v1beta1/params";
import { Params as Params2 } from "../../delegation/v1beta1/params";
import { ParamsAmino as Params2Amino } from "../../delegation/v1beta1/params";
import { ParamsSDKType as Params2SDKType } from "../../delegation/v1beta1/params";
import { Params as Params3 } from "../../global/v1beta1/global";
import { ParamsAmino as Params3Amino } from "../../global/v1beta1/global";
import { ParamsSDKType as Params3SDKType } from "../../global/v1beta1/global";
import { QueryParamsResponse as QueryParamsResponse1 } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseAmino as QueryParamsResponse1Amino } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseSDKType as QueryParamsResponse1SDKType } from "../../../cosmos/gov/v1/query";
import { Params as Params4 } from "../../stakers/v1beta1/params";
import { ParamsAmino as Params4Amino } from "../../stakers/v1beta1/params";
import { ParamsSDKType as Params4SDKType } from "../../stakers/v1beta1/params";
import { Params as Params5 } from "../../pool/v1beta1/params";
import { ParamsAmino as Params5Amino } from "../../pool/v1beta1/params";
import { ParamsSDKType as Params5SDKType } from "../../pool/v1beta1/params";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest ... */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kyve.query.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest ... */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse ... */
export interface QueryParamsResponse {
  /** bundles_params ... */
  bundlesParams: Params1;
  /** delegation_params ... */
  delegationParams: Params2;
  /** global_params ... */
  globalParams: Params3;
  /** gov_params ... */
  govParams: QueryParamsResponse1;
  /** stakers_params ... */
  stakersParams: Params4;
  /** pool_params ... */
  poolParams: Params5;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kyve.query.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseAmino {
  /** bundles_params ... */
  bundles_params?: Params1Amino;
  /** delegation_params ... */
  delegation_params?: Params2Amino;
  /** global_params ... */
  global_params?: Params3Amino;
  /** gov_params ... */
  gov_params?: QueryParamsResponse1Amino;
  /** stakers_params ... */
  stakers_params?: Params4Amino;
  /** pool_params ... */
  pool_params?: Params5Amino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseSDKType {
  bundles_params: Params1SDKType;
  delegation_params: Params2SDKType;
  global_params: Params3SDKType;
  gov_params: QueryParamsResponse1SDKType;
  stakers_params: Params4SDKType;
  pool_params: Params5SDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kyve.query.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kyve.query.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    bundlesParams: Params1.fromPartial({}),
    delegationParams: Params2.fromPartial({}),
    globalParams: Params3.fromPartial({}),
    govParams: QueryParamsResponse1.fromPartial({}),
    stakersParams: Params4.fromPartial({}),
    poolParams: Params5.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/kyve.query.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bundlesParams !== undefined) {
      Params1.encode(message.bundlesParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.delegationParams !== undefined) {
      Params2.encode(message.delegationParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.globalParams !== undefined) {
      Params3.encode(message.globalParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.govParams !== undefined) {
      QueryParamsResponse1.encode(message.govParams, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakersParams !== undefined) {
      Params4.encode(message.stakersParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolParams !== undefined) {
      Params5.encode(message.poolParams, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      bundlesParams: isSet(object.bundlesParams) ? Params1.fromJSON(object.bundlesParams) : undefined,
      delegationParams: isSet(object.delegationParams) ? Params2.fromJSON(object.delegationParams) : undefined,
      globalParams: isSet(object.globalParams) ? Params3.fromJSON(object.globalParams) : undefined,
      govParams: isSet(object.govParams) ? QueryParamsResponse1.fromJSON(object.govParams) : undefined,
      stakersParams: isSet(object.stakersParams) ? Params4.fromJSON(object.stakersParams) : undefined,
      poolParams: isSet(object.poolParams) ? Params5.fromJSON(object.poolParams) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.bundlesParams = object.bundlesParams !== undefined && object.bundlesParams !== null ? Params1.fromPartial(object.bundlesParams) : undefined;
    message.delegationParams = object.delegationParams !== undefined && object.delegationParams !== null ? Params2.fromPartial(object.delegationParams) : undefined;
    message.globalParams = object.globalParams !== undefined && object.globalParams !== null ? Params3.fromPartial(object.globalParams) : undefined;
    message.govParams = object.govParams !== undefined && object.govParams !== null ? QueryParamsResponse1.fromPartial(object.govParams) : undefined;
    message.stakersParams = object.stakersParams !== undefined && object.stakersParams !== null ? Params4.fromPartial(object.stakersParams) : undefined;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? Params5.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      bundlesParams: object?.bundles_params ? Params1.fromAmino(object.bundles_params) : undefined,
      delegationParams: object?.delegation_params ? Params2.fromAmino(object.delegation_params) : undefined,
      globalParams: object?.global_params ? Params3.fromAmino(object.global_params) : undefined,
      govParams: object?.gov_params ? QueryParamsResponse1.fromAmino(object.gov_params) : undefined,
      stakersParams: object?.stakers_params ? Params4.fromAmino(object.stakers_params) : undefined,
      poolParams: object?.pool_params ? Params5.fromAmino(object.pool_params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.bundles_params = message.bundlesParams ? Params1.toAmino(message.bundlesParams) : undefined;
    obj.delegation_params = message.delegationParams ? Params2.toAmino(message.delegationParams) : undefined;
    obj.global_params = message.globalParams ? Params3.toAmino(message.globalParams) : undefined;
    obj.gov_params = message.govParams ? QueryParamsResponse1.toAmino(message.govParams) : undefined;
    obj.stakers_params = message.stakersParams ? Params4.toAmino(message.stakersParams) : undefined;
    obj.pool_params = message.poolParams ? Params5.toAmino(message.poolParams) : undefined;
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
      typeUrl: "/kyve.query.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};