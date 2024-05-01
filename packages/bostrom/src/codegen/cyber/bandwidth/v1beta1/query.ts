import { DecProto, DecProtoAmino, DecProtoSDKType } from "../../../cosmos/base/v1beta1/coin";
import { NeuronBandwidth, NeuronBandwidthAmino, NeuronBandwidthSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryLoadRequest {}
export interface QueryLoadRequestProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadRequest";
  value: Uint8Array;
}
export interface QueryLoadRequestAmino {}
export interface QueryLoadRequestAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryLoadRequest";
  value: QueryLoadRequestAmino;
}
export interface QueryLoadRequestSDKType {}
export interface QueryLoadResponse {
  load: DecProto;
}
export interface QueryLoadResponseProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadResponse";
  value: Uint8Array;
}
export interface QueryLoadResponseAmino {
  load?: DecProtoAmino;
}
export interface QueryLoadResponseAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryLoadResponse";
  value: QueryLoadResponseAmino;
}
export interface QueryLoadResponseSDKType {
  load: DecProtoSDKType;
}
export interface QueryPriceRequest {}
export interface QueryPriceRequestProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceRequest";
  value: Uint8Array;
}
export interface QueryPriceRequestAmino {}
export interface QueryPriceRequestAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryPriceRequest";
  value: QueryPriceRequestAmino;
}
export interface QueryPriceRequestSDKType {}
export interface QueryPriceResponse {
  price: DecProto;
}
export interface QueryPriceResponseProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceResponse";
  value: Uint8Array;
}
export interface QueryPriceResponseAmino {
  price?: DecProtoAmino;
}
export interface QueryPriceResponseAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryPriceResponse";
  value: QueryPriceResponseAmino;
}
export interface QueryPriceResponseSDKType {
  price: DecProtoSDKType;
}
export interface QueryTotalBandwidthRequest {}
export interface QueryTotalBandwidthRequestProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest";
  value: Uint8Array;
}
export interface QueryTotalBandwidthRequestAmino {}
export interface QueryTotalBandwidthRequestAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest";
  value: QueryTotalBandwidthRequestAmino;
}
export interface QueryTotalBandwidthRequestSDKType {}
export interface QueryTotalBandwidthResponse {
  totalBandwidth: bigint;
}
export interface QueryTotalBandwidthResponseProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse";
  value: Uint8Array;
}
export interface QueryTotalBandwidthResponseAmino {
  total_bandwidth?: string;
}
export interface QueryTotalBandwidthResponseAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse";
  value: QueryTotalBandwidthResponseAmino;
}
export interface QueryTotalBandwidthResponseSDKType {
  total_bandwidth: bigint;
}
export interface QueryNeuronBandwidthRequest {
  neuron: string;
}
export interface QueryNeuronBandwidthRequestProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest";
  value: Uint8Array;
}
export interface QueryNeuronBandwidthRequestAmino {
  neuron?: string;
}
export interface QueryNeuronBandwidthRequestAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest";
  value: QueryNeuronBandwidthRequestAmino;
}
export interface QueryNeuronBandwidthRequestSDKType {
  neuron: string;
}
export interface QueryNeuronBandwidthResponse {
  neuronBandwidth: NeuronBandwidth;
}
export interface QueryNeuronBandwidthResponseProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse";
  value: Uint8Array;
}
export interface QueryNeuronBandwidthResponseAmino {
  neuron_bandwidth?: NeuronBandwidthAmino;
}
export interface QueryNeuronBandwidthResponseAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse";
  value: QueryNeuronBandwidthResponseAmino;
}
export interface QueryNeuronBandwidthResponseSDKType {
  neuron_bandwidth: NeuronBandwidthSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/cyber.bandwidth.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryLoadRequest(): QueryLoadRequest {
  return {};
}
export const QueryLoadRequest = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadRequest",
  encode(_: QueryLoadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLoadRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLoadRequest>): QueryLoadRequest {
    const message = createBaseQueryLoadRequest();
    return message;
  },
  fromAmino(_: QueryLoadRequestAmino): QueryLoadRequest {
    const message = createBaseQueryLoadRequest();
    return message;
  },
  toAmino(_: QueryLoadRequest): QueryLoadRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLoadRequestAminoMsg): QueryLoadRequest {
    return QueryLoadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLoadRequestProtoMsg): QueryLoadRequest {
    return QueryLoadRequest.decode(message.value);
  },
  toProto(message: QueryLoadRequest): Uint8Array {
    return QueryLoadRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLoadRequest): QueryLoadRequestProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadRequest",
      value: QueryLoadRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLoadResponse(): QueryLoadResponse {
  return {
    load: DecProto.fromPartial({})
  };
}
export const QueryLoadResponse = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadResponse",
  encode(message: QueryLoadResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.load !== undefined) {
      DecProto.encode(message.load, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLoadResponse {
    return {
      load: isSet(object.load) ? DecProto.fromJSON(object.load) : undefined
    };
  },
  fromPartial(object: Partial<QueryLoadResponse>): QueryLoadResponse {
    const message = createBaseQueryLoadResponse();
    message.load = object.load !== undefined && object.load !== null ? DecProto.fromPartial(object.load) : undefined;
    return message;
  },
  fromAmino(object: QueryLoadResponseAmino): QueryLoadResponse {
    const message = createBaseQueryLoadResponse();
    if (object.load !== undefined && object.load !== null) {
      message.load = DecProto.fromAmino(object.load);
    }
    return message;
  },
  toAmino(message: QueryLoadResponse): QueryLoadResponseAmino {
    const obj: any = {};
    obj.load = message.load ? DecProto.toAmino(message.load) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLoadResponseAminoMsg): QueryLoadResponse {
    return QueryLoadResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLoadResponseProtoMsg): QueryLoadResponse {
    return QueryLoadResponse.decode(message.value);
  },
  toProto(message: QueryLoadResponse): Uint8Array {
    return QueryLoadResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLoadResponse): QueryLoadResponseProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryLoadResponse",
      value: QueryLoadResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {};
}
export const QueryPriceRequest = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceRequest",
  encode(_: QueryPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPriceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    return message;
  },
  fromAmino(_: QueryPriceRequestAmino): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    return message;
  },
  toAmino(_: QueryPriceRequest): QueryPriceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPriceRequestAminoMsg): QueryPriceRequest {
    return QueryPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceRequestProtoMsg): QueryPriceRequest {
    return QueryPriceRequest.decode(message.value);
  },
  toProto(message: QueryPriceRequest): Uint8Array {
    return QueryPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceRequest): QueryPriceRequestProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceRequest",
      value: QueryPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: DecProto.fromPartial({})
  };
}
export const QueryPriceResponse = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceResponse",
  encode(message: QueryPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      DecProto.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPriceResponse {
    return {
      price: isSet(object.price) ? DecProto.fromJSON(object.price) : undefined
    };
  },
  fromPartial(object: Partial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? DecProto.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: QueryPriceResponseAmino): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = DecProto.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: QueryPriceResponse): QueryPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? DecProto.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPriceResponseAminoMsg): QueryPriceResponse {
    return QueryPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceResponseProtoMsg): QueryPriceResponse {
    return QueryPriceResponse.decode(message.value);
  },
  toProto(message: QueryPriceResponse): Uint8Array {
    return QueryPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceResponse): QueryPriceResponseProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryPriceResponse",
      value: QueryPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBandwidthRequest(): QueryTotalBandwidthRequest {
  return {};
}
export const QueryTotalBandwidthRequest = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest",
  encode(_: QueryTotalBandwidthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalBandwidthRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalBandwidthRequest>): QueryTotalBandwidthRequest {
    const message = createBaseQueryTotalBandwidthRequest();
    return message;
  },
  fromAmino(_: QueryTotalBandwidthRequestAmino): QueryTotalBandwidthRequest {
    const message = createBaseQueryTotalBandwidthRequest();
    return message;
  },
  toAmino(_: QueryTotalBandwidthRequest): QueryTotalBandwidthRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalBandwidthRequestAminoMsg): QueryTotalBandwidthRequest {
    return QueryTotalBandwidthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBandwidthRequestProtoMsg): QueryTotalBandwidthRequest {
    return QueryTotalBandwidthRequest.decode(message.value);
  },
  toProto(message: QueryTotalBandwidthRequest): Uint8Array {
    return QueryTotalBandwidthRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBandwidthRequest): QueryTotalBandwidthRequestProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthRequest",
      value: QueryTotalBandwidthRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalBandwidthResponse(): QueryTotalBandwidthResponse {
  return {
    totalBandwidth: BigInt(0)
  };
}
export const QueryTotalBandwidthResponse = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse",
  encode(message: QueryTotalBandwidthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBandwidth !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalBandwidth);
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalBandwidthResponse {
    return {
      totalBandwidth: isSet(object.totalBandwidth) ? BigInt(object.totalBandwidth.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryTotalBandwidthResponse>): QueryTotalBandwidthResponse {
    const message = createBaseQueryTotalBandwidthResponse();
    message.totalBandwidth = object.totalBandwidth !== undefined && object.totalBandwidth !== null ? BigInt(object.totalBandwidth.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTotalBandwidthResponseAmino): QueryTotalBandwidthResponse {
    const message = createBaseQueryTotalBandwidthResponse();
    if (object.total_bandwidth !== undefined && object.total_bandwidth !== null) {
      message.totalBandwidth = BigInt(object.total_bandwidth);
    }
    return message;
  },
  toAmino(message: QueryTotalBandwidthResponse): QueryTotalBandwidthResponseAmino {
    const obj: any = {};
    obj.total_bandwidth = message.totalBandwidth !== BigInt(0) ? message.totalBandwidth.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalBandwidthResponseAminoMsg): QueryTotalBandwidthResponse {
    return QueryTotalBandwidthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalBandwidthResponseProtoMsg): QueryTotalBandwidthResponse {
    return QueryTotalBandwidthResponse.decode(message.value);
  },
  toProto(message: QueryTotalBandwidthResponse): Uint8Array {
    return QueryTotalBandwidthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalBandwidthResponse): QueryTotalBandwidthResponseProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryTotalBandwidthResponse",
      value: QueryTotalBandwidthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNeuronBandwidthRequest(): QueryNeuronBandwidthRequest {
  return {
    neuron: ""
  };
}
export const QueryNeuronBandwidthRequest = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest",
  encode(message: QueryNeuronBandwidthRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }
    return writer;
  },
  fromJSON(object: any): QueryNeuronBandwidthRequest {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : ""
    };
  },
  fromPartial(object: Partial<QueryNeuronBandwidthRequest>): QueryNeuronBandwidthRequest {
    const message = createBaseQueryNeuronBandwidthRequest();
    message.neuron = object.neuron ?? "";
    return message;
  },
  fromAmino(object: QueryNeuronBandwidthRequestAmino): QueryNeuronBandwidthRequest {
    const message = createBaseQueryNeuronBandwidthRequest();
    if (object.neuron !== undefined && object.neuron !== null) {
      message.neuron = object.neuron;
    }
    return message;
  },
  toAmino(message: QueryNeuronBandwidthRequest): QueryNeuronBandwidthRequestAmino {
    const obj: any = {};
    obj.neuron = message.neuron === "" ? undefined : message.neuron;
    return obj;
  },
  fromAminoMsg(object: QueryNeuronBandwidthRequestAminoMsg): QueryNeuronBandwidthRequest {
    return QueryNeuronBandwidthRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNeuronBandwidthRequestProtoMsg): QueryNeuronBandwidthRequest {
    return QueryNeuronBandwidthRequest.decode(message.value);
  },
  toProto(message: QueryNeuronBandwidthRequest): Uint8Array {
    return QueryNeuronBandwidthRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNeuronBandwidthRequest): QueryNeuronBandwidthRequestProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthRequest",
      value: QueryNeuronBandwidthRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNeuronBandwidthResponse(): QueryNeuronBandwidthResponse {
  return {
    neuronBandwidth: NeuronBandwidth.fromPartial({})
  };
}
export const QueryNeuronBandwidthResponse = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse",
  encode(message: QueryNeuronBandwidthResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuronBandwidth !== undefined) {
      NeuronBandwidth.encode(message.neuronBandwidth, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryNeuronBandwidthResponse {
    return {
      neuronBandwidth: isSet(object.neuronBandwidth) ? NeuronBandwidth.fromJSON(object.neuronBandwidth) : undefined
    };
  },
  fromPartial(object: Partial<QueryNeuronBandwidthResponse>): QueryNeuronBandwidthResponse {
    const message = createBaseQueryNeuronBandwidthResponse();
    message.neuronBandwidth = object.neuronBandwidth !== undefined && object.neuronBandwidth !== null ? NeuronBandwidth.fromPartial(object.neuronBandwidth) : undefined;
    return message;
  },
  fromAmino(object: QueryNeuronBandwidthResponseAmino): QueryNeuronBandwidthResponse {
    const message = createBaseQueryNeuronBandwidthResponse();
    if (object.neuron_bandwidth !== undefined && object.neuron_bandwidth !== null) {
      message.neuronBandwidth = NeuronBandwidth.fromAmino(object.neuron_bandwidth);
    }
    return message;
  },
  toAmino(message: QueryNeuronBandwidthResponse): QueryNeuronBandwidthResponseAmino {
    const obj: any = {};
    obj.neuron_bandwidth = message.neuronBandwidth ? NeuronBandwidth.toAmino(message.neuronBandwidth) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNeuronBandwidthResponseAminoMsg): QueryNeuronBandwidthResponse {
    return QueryNeuronBandwidthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNeuronBandwidthResponseProtoMsg): QueryNeuronBandwidthResponse {
    return QueryNeuronBandwidthResponse.decode(message.value);
  },
  toProto(message: QueryNeuronBandwidthResponse): Uint8Array {
    return QueryNeuronBandwidthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNeuronBandwidthResponse): QueryNeuronBandwidthResponseProtoMsg {
    return {
      typeUrl: "/cyber.bandwidth.v1beta1.QueryNeuronBandwidthResponse",
      value: QueryNeuronBandwidthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsResponse",
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
      typeUrl: "/cyber.bandwidth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};