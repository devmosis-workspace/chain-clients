import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequest {}
export interface SupplyRequestProtoMsg {
  typeUrl: "/chainmain.supply.v1.SupplyRequest";
  value: Uint8Array;
}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestAmino {}
export interface SupplyRequestAminoMsg {
  type: "/chainmain.supply.v1.SupplyRequest";
  value: SupplyRequestAmino;
}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestSDKType {}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
}
export interface SupplyResponseProtoMsg {
  typeUrl: "/chainmain.supply.v1.SupplyResponse";
  value: Uint8Array;
}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponseAmino {
  /** supply is the supply of the coins */
  supply: CoinAmino[];
}
export interface SupplyResponseAminoMsg {
  type: "/chainmain.supply.v1.SupplyResponse";
  value: SupplyResponseAmino;
}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponseSDKType {
  supply: CoinSDKType[];
}
function createBaseSupplyRequest(): SupplyRequest {
  return {};
}
export const SupplyRequest = {
  typeUrl: "/chainmain.supply.v1.SupplyRequest",
  encode(_: SupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SupplyRequest {
    return {};
  },
  fromPartial(_: Partial<SupplyRequest>): SupplyRequest {
    const message = createBaseSupplyRequest();
    return message;
  },
  fromAmino(_: SupplyRequestAmino): SupplyRequest {
    return {};
  },
  toAmino(_: SupplyRequest): SupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SupplyRequestAminoMsg): SupplyRequest {
    return SupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyRequestProtoMsg): SupplyRequest {
    return SupplyRequest.decode(message.value);
  },
  toProto(message: SupplyRequest): Uint8Array {
    return SupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: SupplyRequest): SupplyRequestProtoMsg {
    return {
      typeUrl: "/chainmain.supply.v1.SupplyRequest",
      value: SupplyRequest.encode(message).finish()
    };
  }
};
function createBaseSupplyResponse(): SupplyResponse {
  return {
    supply: []
  };
}
export const SupplyResponse = {
  typeUrl: "/chainmain.supply.v1.SupplyResponse",
  encode(message: SupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SupplyResponse {
    return {
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<SupplyResponse>): SupplyResponse {
    const message = createBaseSupplyResponse();
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SupplyResponseAmino): SupplyResponse {
    return {
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: SupplyResponse): SupplyResponseAmino {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supply = [];
    }
    return obj;
  },
  fromAminoMsg(object: SupplyResponseAminoMsg): SupplyResponse {
    return SupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplyResponseProtoMsg): SupplyResponse {
    return SupplyResponse.decode(message.value);
  },
  toProto(message: SupplyResponse): Uint8Array {
    return SupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: SupplyResponse): SupplyResponseProtoMsg {
    return {
      typeUrl: "/chainmain.supply.v1.SupplyResponse",
      value: SupplyResponse.encode(message).finish()
    };
  }
};