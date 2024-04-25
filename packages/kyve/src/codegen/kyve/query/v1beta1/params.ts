import { Params as Params1 } from "../../bundles/v1beta1/params";
import { ParamsAmino as Params1Amino } from "../../bundles/v1beta1/params";
import { ParamsSDKType as Params1SDKType } from "../../bundles/v1beta1/params";
import { Params as Params2 } from "../../delegation/v1beta1/params";
import { ParamsAmino as Params2Amino } from "../../delegation/v1beta1/params";
import { ParamsSDKType as Params2SDKType } from "../../delegation/v1beta1/params";
import { Params as Params3 } from "../../global/v1beta1/global";
import { ParamsAmino as Params3Amino } from "../../global/v1beta1/global";
import { ParamsSDKType as Params3SDKType } from "../../global/v1beta1/global";
import { Params as Params4 } from "../../../cosmos/gov/v1/gov";
import { ParamsAmino as Params4Amino } from "../../../cosmos/gov/v1/gov";
import { ParamsSDKType as Params4SDKType } from "../../../cosmos/gov/v1/gov";
import { Params as Params5 } from "../../stakers/v1beta1/params";
import { ParamsAmino as Params5Amino } from "../../stakers/v1beta1/params";
import { ParamsSDKType as Params5SDKType } from "../../stakers/v1beta1/params";
import { Params as Params6 } from "../../pool/v1beta1/params";
import { ParamsAmino as Params6Amino } from "../../pool/v1beta1/params";
import { ParamsSDKType as Params6SDKType } from "../../pool/v1beta1/params";
import { Params as Params7 } from "../../funders/v1beta1/params";
import { ParamsAmino as Params7Amino } from "../../funders/v1beta1/params";
import { ParamsSDKType as Params7SDKType } from "../../funders/v1beta1/params";
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
  bundlesParams?: Params1;
  /** delegation_params ... */
  delegationParams?: Params2;
  /** global_params ... */
  globalParams?: Params3;
  /** gov_params ... */
  govParams?: Params4;
  /** stakers_params ... */
  stakersParams?: Params5;
  /** pool_params ... */
  poolParams?: Params6;
  /** funders_params ... */
  fundersParams?: Params7;
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
  gov_params?: Params4Amino;
  /** stakers_params ... */
  stakers_params?: Params5Amino;
  /** pool_params ... */
  pool_params?: Params6Amino;
  /** funders_params ... */
  funders_params?: Params7Amino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kyve.query.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseSDKType {
  bundles_params?: Params1SDKType;
  delegation_params?: Params2SDKType;
  global_params?: Params3SDKType;
  gov_params?: Params4SDKType;
  stakers_params?: Params5SDKType;
  pool_params?: Params6SDKType;
  funders_params?: Params7SDKType;
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
      typeUrl: "/kyve.query.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    bundlesParams: undefined,
    delegationParams: undefined,
    globalParams: undefined,
    govParams: undefined,
    stakersParams: undefined,
    poolParams: undefined,
    fundersParams: undefined
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
      Params4.encode(message.govParams, writer.uint32(34).fork()).ldelim();
    }
    if (message.stakersParams !== undefined) {
      Params5.encode(message.stakersParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolParams !== undefined) {
      Params6.encode(message.poolParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.fundersParams !== undefined) {
      Params7.encode(message.fundersParams, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      bundlesParams: isSet(object.bundlesParams) ? Params1.fromJSON(object.bundlesParams) : undefined,
      delegationParams: isSet(object.delegationParams) ? Params2.fromJSON(object.delegationParams) : undefined,
      globalParams: isSet(object.globalParams) ? Params3.fromJSON(object.globalParams) : undefined,
      govParams: isSet(object.govParams) ? Params4.fromJSON(object.govParams) : undefined,
      stakersParams: isSet(object.stakersParams) ? Params5.fromJSON(object.stakersParams) : undefined,
      poolParams: isSet(object.poolParams) ? Params6.fromJSON(object.poolParams) : undefined,
      fundersParams: isSet(object.fundersParams) ? Params7.fromJSON(object.fundersParams) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.bundlesParams = object.bundlesParams !== undefined && object.bundlesParams !== null ? Params1.fromPartial(object.bundlesParams) : undefined;
    message.delegationParams = object.delegationParams !== undefined && object.delegationParams !== null ? Params2.fromPartial(object.delegationParams) : undefined;
    message.globalParams = object.globalParams !== undefined && object.globalParams !== null ? Params3.fromPartial(object.globalParams) : undefined;
    message.govParams = object.govParams !== undefined && object.govParams !== null ? Params4.fromPartial(object.govParams) : undefined;
    message.stakersParams = object.stakersParams !== undefined && object.stakersParams !== null ? Params5.fromPartial(object.stakersParams) : undefined;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? Params6.fromPartial(object.poolParams) : undefined;
    message.fundersParams = object.fundersParams !== undefined && object.fundersParams !== null ? Params7.fromPartial(object.fundersParams) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.bundles_params !== undefined && object.bundles_params !== null) {
      message.bundlesParams = Params1.fromAmino(object.bundles_params);
    }
    if (object.delegation_params !== undefined && object.delegation_params !== null) {
      message.delegationParams = Params2.fromAmino(object.delegation_params);
    }
    if (object.global_params !== undefined && object.global_params !== null) {
      message.globalParams = Params3.fromAmino(object.global_params);
    }
    if (object.gov_params !== undefined && object.gov_params !== null) {
      message.govParams = Params4.fromAmino(object.gov_params);
    }
    if (object.stakers_params !== undefined && object.stakers_params !== null) {
      message.stakersParams = Params5.fromAmino(object.stakers_params);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = Params6.fromAmino(object.pool_params);
    }
    if (object.funders_params !== undefined && object.funders_params !== null) {
      message.fundersParams = Params7.fromAmino(object.funders_params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.bundles_params = message.bundlesParams ? Params1.toAmino(message.bundlesParams) : undefined;
    obj.delegation_params = message.delegationParams ? Params2.toAmino(message.delegationParams) : undefined;
    obj.global_params = message.globalParams ? Params3.toAmino(message.globalParams) : undefined;
    obj.gov_params = message.govParams ? Params4.toAmino(message.govParams) : undefined;
    obj.stakers_params = message.stakersParams ? Params5.toAmino(message.stakersParams) : undefined;
    obj.pool_params = message.poolParams ? Params6.toAmino(message.poolParams) : undefined;
    obj.funders_params = message.fundersParams ? Params7.toAmino(message.fundersParams) : undefined;
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