import { Params as Params1 } from "../../bundles/v1beta1/params";
import { ParamsSDKType as Params1SDKType } from "../../bundles/v1beta1/params";
import { Params as Params2 } from "../../delegation/v1beta1/params";
import { ParamsSDKType as Params2SDKType } from "../../delegation/v1beta1/params";
import { Params as Params3 } from "../../global/v1beta1/global";
import { ParamsSDKType as Params3SDKType } from "../../global/v1beta1/global";
import { QueryParamsResponse as QueryParamsResponse1 } from "../../../cosmos/gov/v1/query";
import { QueryParamsResponseSDKType as QueryParamsResponse1SDKType } from "../../../cosmos/gov/v1/query";
import { Params as Params4 } from "../../stakers/v1beta1/params";
import { ParamsSDKType as Params4SDKType } from "../../stakers/v1beta1/params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest ... */
export interface QueryParamsRequest {}
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
  govParams?: QueryParamsResponse1;
  /** stakers_params ... */
  stakersParams?: Params4;
}
/** QueryParamsResponse ... */
export interface QueryParamsResponseSDKType {
  bundles_params?: Params1SDKType;
  delegation_params?: Params2SDKType;
  global_params?: Params3SDKType;
  gov_params?: QueryParamsResponse1SDKType;
  stakers_params?: Params4SDKType;
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
    bundlesParams: undefined,
    delegationParams: undefined,
    globalParams: undefined,
    govParams: undefined,
    stakersParams: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      bundlesParams: isSet(object.bundlesParams) ? Params1.fromJSON(object.bundlesParams) : undefined,
      delegationParams: isSet(object.delegationParams) ? Params2.fromJSON(object.delegationParams) : undefined,
      globalParams: isSet(object.globalParams) ? Params3.fromJSON(object.globalParams) : undefined,
      govParams: isSet(object.govParams) ? QueryParamsResponse1.fromJSON(object.govParams) : undefined,
      stakersParams: isSet(object.stakersParams) ? Params4.fromJSON(object.stakersParams) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.bundlesParams = object.bundlesParams !== undefined && object.bundlesParams !== null ? Params1.fromPartial(object.bundlesParams) : undefined;
    message.delegationParams = object.delegationParams !== undefined && object.delegationParams !== null ? Params2.fromPartial(object.delegationParams) : undefined;
    message.globalParams = object.globalParams !== undefined && object.globalParams !== null ? Params3.fromPartial(object.globalParams) : undefined;
    message.govParams = object.govParams !== undefined && object.govParams !== null ? QueryParamsResponse1.fromPartial(object.govParams) : undefined;
    message.stakersParams = object.stakersParams !== undefined && object.stakersParams !== null ? Params4.fromPartial(object.stakersParams) : undefined;
    return message;
  }
};