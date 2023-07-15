import { InflationState, InflationStateSDKType } from "./inflation";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryInflationRequest {}
export interface QueryInflationRequestSDKType {}
export interface QueryInflationResponse {
  state?: InflationState;
}
export interface QueryInflationResponseSDKType {
  state?: InflationStateSDKType;
}
function createBaseQueryInflationRequest(): QueryInflationRequest {
  return {};
}
export const QueryInflationRequest = {
  encode(_: QueryInflationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryInflationRequest {
    return {};
  },
  fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest {
    const message = createBaseQueryInflationRequest();
    return message;
  }
};
function createBaseQueryInflationResponse(): QueryInflationResponse {
  return {
    state: undefined
  };
}
export const QueryInflationResponse = {
  encode(message: QueryInflationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      InflationState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryInflationResponse {
    return {
      state: isSet(object.state) ? InflationState.fromJSON(object.state) : undefined
    };
  },
  fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse {
    const message = createBaseQueryInflationResponse();
    message.state = object.state !== undefined && object.state !== null ? InflationState.fromPartial(object.state) : undefined;
    return message;
  }
};