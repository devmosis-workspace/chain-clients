import { Tx, TxAmino, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const ComputeTaxRequest: {
    typeUrl: string;
    encode(message: ComputeTaxRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ComputeTaxRequest;
    fromPartial(object: Partial<ComputeTaxRequest>): ComputeTaxRequest;
    fromAmino(object: ComputeTaxRequestAmino): ComputeTaxRequest;
    toAmino(message: ComputeTaxRequest): ComputeTaxRequestAmino;
    fromAminoMsg(object: ComputeTaxRequestAminoMsg): ComputeTaxRequest;
    fromProtoMsg(message: ComputeTaxRequestProtoMsg): ComputeTaxRequest;
    toProto(message: ComputeTaxRequest): Uint8Array;
    toProtoMsg(message: ComputeTaxRequest): ComputeTaxRequestProtoMsg;
};
export declare const ComputeTaxResponse: {
    typeUrl: string;
    encode(message: ComputeTaxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ComputeTaxResponse;
    fromPartial(object: Partial<ComputeTaxResponse>): ComputeTaxResponse;
    fromAmino(object: ComputeTaxResponseAmino): ComputeTaxResponse;
    toAmino(message: ComputeTaxResponse): ComputeTaxResponseAmino;
    fromAminoMsg(object: ComputeTaxResponseAminoMsg): ComputeTaxResponse;
    fromProtoMsg(message: ComputeTaxResponseProtoMsg): ComputeTaxResponse;
    toProto(message: ComputeTaxResponse): Uint8Array;
    toProtoMsg(message: ComputeTaxResponse): ComputeTaxResponseProtoMsg;
};
