import { Tx, TxAmino, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ComputeTaxRequest is the request type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  /** @deprecated */
  tx?: Tx;
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
}
export interface ComputeTaxRequestProtoMsg {
  typeUrl: "/terra.tx.v1beta1.ComputeTaxRequest";
  value: Uint8Array;
}
/**
 * ComputeTaxRequest is the request type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxRequestAmino {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  /** @deprecated */
  tx?: TxAmino;
  /** tx_bytes is the raw transaction. */
  tx_bytes?: string;
}
export interface ComputeTaxRequestAminoMsg {
  type: "/terra.tx.v1beta1.ComputeTaxRequest";
  value: ComputeTaxRequestAmino;
}
/**
 * ComputeTaxRequest is the request type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxRequestSDKType {
  /** @deprecated */
  tx?: TxSDKType;
  tx_bytes: Uint8Array;
}
/**
 * ComputeTaxResponse is the response type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxResponse {
  /** amount is the amount of coins to be paid as a fee */
  taxAmount: Coin[];
}
export interface ComputeTaxResponseProtoMsg {
  typeUrl: "/terra.tx.v1beta1.ComputeTaxResponse";
  value: Uint8Array;
}
/**
 * ComputeTaxResponse is the response type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxResponseAmino {
  /** amount is the amount of coins to be paid as a fee */
  tax_amount?: CoinAmino[];
}
export interface ComputeTaxResponseAminoMsg {
  type: "/terra.tx.v1beta1.ComputeTaxResponse";
  value: ComputeTaxResponseAmino;
}
/**
 * ComputeTaxResponse is the response type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxResponseSDKType {
  tax_amount: CoinSDKType[];
}
function createBaseComputeTaxRequest(): ComputeTaxRequest {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
export const ComputeTaxRequest = {
  typeUrl: "/terra.tx.v1beta1.ComputeTaxRequest",
  encode(message: ComputeTaxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  fromJSON(object: any): ComputeTaxRequest {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ComputeTaxRequest>): ComputeTaxRequest {
    const message = createBaseComputeTaxRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ComputeTaxRequestAmino): ComputeTaxRequest {
    const message = createBaseComputeTaxRequest();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message: ComputeTaxRequest): ComputeTaxRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: ComputeTaxRequestAminoMsg): ComputeTaxRequest {
    return ComputeTaxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ComputeTaxRequestProtoMsg): ComputeTaxRequest {
    return ComputeTaxRequest.decode(message.value);
  },
  toProto(message: ComputeTaxRequest): Uint8Array {
    return ComputeTaxRequest.encode(message).finish();
  },
  toProtoMsg(message: ComputeTaxRequest): ComputeTaxRequestProtoMsg {
    return {
      typeUrl: "/terra.tx.v1beta1.ComputeTaxRequest",
      value: ComputeTaxRequest.encode(message).finish()
    };
  }
};
function createBaseComputeTaxResponse(): ComputeTaxResponse {
  return {
    taxAmount: []
  };
}
export const ComputeTaxResponse = {
  typeUrl: "/terra.tx.v1beta1.ComputeTaxResponse",
  encode(message: ComputeTaxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.taxAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ComputeTaxResponse {
    return {
      taxAmount: Array.isArray(object?.taxAmount) ? object.taxAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ComputeTaxResponse>): ComputeTaxResponse {
    const message = createBaseComputeTaxResponse();
    message.taxAmount = object.taxAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ComputeTaxResponseAmino): ComputeTaxResponse {
    const message = createBaseComputeTaxResponse();
    message.taxAmount = object.tax_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ComputeTaxResponse): ComputeTaxResponseAmino {
    const obj: any = {};
    if (message.taxAmount) {
      obj.tax_amount = message.taxAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tax_amount = message.taxAmount;
    }
    return obj;
  },
  fromAminoMsg(object: ComputeTaxResponseAminoMsg): ComputeTaxResponse {
    return ComputeTaxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ComputeTaxResponseProtoMsg): ComputeTaxResponse {
    return ComputeTaxResponse.decode(message.value);
  },
  toProto(message: ComputeTaxResponse): Uint8Array {
    return ComputeTaxResponse.encode(message).finish();
  },
  toProtoMsg(message: ComputeTaxResponse): ComputeTaxResponseProtoMsg {
    return {
      typeUrl: "/terra.tx.v1beta1.ComputeTaxResponse",
      value: ComputeTaxResponse.encode(message).finish()
    };
  }
};