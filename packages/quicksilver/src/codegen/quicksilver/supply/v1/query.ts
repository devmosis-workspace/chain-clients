import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QuerySupplyRequest {}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest";
  value: Uint8Array;
}
export interface QuerySupplyRequestAmino {}
export interface QuerySupplyRequestAminoMsg {
  type: "/quicksilver.supply.v1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {}
export interface QuerySupplyResponse {
  supply: bigint;
  circulatingSupply: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse";
  value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
  supply?: string;
  circulating_supply?: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/quicksilver.supply.v1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
  supply: bigint;
  circulating_supply: bigint;
}
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {};
}
export const QuerySupplyRequest = {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
  encode(_: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySupplyRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    return message;
  },
  fromAmino(_: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    return message;
  },
  toAmino(_: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    supply: BigInt(0),
    circulatingSupply: BigInt(0)
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supply !== BigInt(0)) {
      writer.uint32(8).uint64(message.supply);
    }
    if (message.circulatingSupply !== BigInt(0)) {
      writer.uint32(16).uint64(message.circulatingSupply);
    }
    return writer;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      supply: isSet(object.supply) ? BigInt(object.supply.toString()) : BigInt(0),
      circulatingSupply: isSet(object.circulatingSupply) ? BigInt(object.circulatingSupply.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.supply = object.supply !== undefined && object.supply !== null ? BigInt(object.supply.toString()) : BigInt(0);
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? BigInt(object.circulatingSupply.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = BigInt(object.supply);
    }
    if (object.circulating_supply !== undefined && object.circulating_supply !== null) {
      message.circulatingSupply = BigInt(object.circulating_supply);
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.supply = message.supply ? message.supply.toString() : undefined;
    obj.circulating_supply = message.circulatingSupply ? message.circulatingSupply.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};