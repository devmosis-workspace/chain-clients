import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface SpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest";
  value: Uint8Array;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestAmino {
  pool_id?: string;
  base_asset_denom?: string;
  quote_asset_denom?: string;
}
export interface SpotPriceRequestAminoMsg {
  type: "osmosis/poolmanager/v2/spot-price-request";
  value: SpotPriceRequestAmino;
}
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface SpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponse {
  /** String of the BigDec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface SpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse";
  value: Uint8Array;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseAmino {
  /** String of the BigDec. Ex) 10.203uatom */
  spot_price?: string;
}
export interface SpotPriceResponseAminoMsg {
  type: "osmosis/poolmanager/v2/spot-price-response";
  value: SpotPriceResponseAmino;
}
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface SpotPriceResponseSDKType {
  spot_price: string;
}
function createBaseSpotPriceRequest(): SpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const SpotPriceRequest = {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest",
  encode(message: SpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  fromJSON(object: any): SpotPriceRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      baseAssetDenom: isSet(object.baseAssetDenom) ? String(object.baseAssetDenom) : "",
      quoteAssetDenom: isSet(object.quoteAssetDenom) ? String(object.quoteAssetDenom) : ""
    };
  },
  fromPartial(object: Partial<SpotPriceRequest>): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAssetDenom = object.baseAssetDenom ?? "";
    message.quoteAssetDenom = object.quoteAssetDenom ?? "";
    return message;
  },
  fromAmino(object: SpotPriceRequestAmino): SpotPriceRequest {
    const message = createBaseSpotPriceRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset_denom !== undefined && object.base_asset_denom !== null) {
      message.baseAssetDenom = object.base_asset_denom;
    }
    if (object.quote_asset_denom !== undefined && object.quote_asset_denom !== null) {
      message.quoteAssetDenom = object.quote_asset_denom;
    }
    return message;
  },
  toAmino(message: SpotPriceRequest): SpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset_denom = message.baseAssetDenom;
    obj.quote_asset_denom = message.quoteAssetDenom;
    return obj;
  },
  fromAminoMsg(object: SpotPriceRequestAminoMsg): SpotPriceRequest {
    return SpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceRequest): SpotPriceRequestAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/spot-price-request",
      value: SpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceRequestProtoMsg): SpotPriceRequest {
    return SpotPriceRequest.decode(message.value);
  },
  toProto(message: SpotPriceRequest): Uint8Array {
    return SpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceRequest): SpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.SpotPriceRequest",
      value: SpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseSpotPriceResponse(): SpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const SpotPriceResponse = {
  typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse",
  encode(message: SpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  fromJSON(object: any): SpotPriceResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : ""
    };
  },
  fromPartial(object: Partial<SpotPriceResponse>): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    message.spotPrice = object.spotPrice ?? "";
    return message;
  },
  fromAmino(object: SpotPriceResponseAmino): SpotPriceResponse {
    const message = createBaseSpotPriceResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    return message;
  },
  toAmino(message: SpotPriceResponse): SpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice;
    return obj;
  },
  fromAminoMsg(object: SpotPriceResponseAminoMsg): SpotPriceResponse {
    return SpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SpotPriceResponse): SpotPriceResponseAminoMsg {
    return {
      type: "osmosis/poolmanager/v2/spot-price-response",
      value: SpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SpotPriceResponseProtoMsg): SpotPriceResponse {
    return SpotPriceResponse.decode(message.value);
  },
  toProto(message: SpotPriceResponse): Uint8Array {
    return SpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: SpotPriceResponse): SpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v2.SpotPriceResponse",
      value: SpotPriceResponse.encode(message).finish()
    };
  }
};