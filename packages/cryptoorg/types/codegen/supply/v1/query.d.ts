import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequest {
}
export interface SupplyRequestProtoMsg {
    typeUrl: "/chainmain.supply.v1.SupplyRequest";
    value: Uint8Array;
}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestAmino {
}
export interface SupplyRequestAminoMsg {
    type: "/chainmain.supply.v1.SupplyRequest";
    value: SupplyRequestAmino;
}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestSDKType {
}
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
export declare const SupplyRequest: {
    typeUrl: string;
    encode(_: SupplyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SupplyRequest;
    fromPartial(_: Partial<SupplyRequest>): SupplyRequest;
    fromAmino(_: SupplyRequestAmino): SupplyRequest;
    toAmino(_: SupplyRequest): SupplyRequestAmino;
    fromAminoMsg(object: SupplyRequestAminoMsg): SupplyRequest;
    fromProtoMsg(message: SupplyRequestProtoMsg): SupplyRequest;
    toProto(message: SupplyRequest): Uint8Array;
    toProtoMsg(message: SupplyRequest): SupplyRequestProtoMsg;
};
export declare const SupplyResponse: {
    typeUrl: string;
    encode(message: SupplyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SupplyResponse;
    fromPartial(object: Partial<SupplyResponse>): SupplyResponse;
    fromAmino(object: SupplyResponseAmino): SupplyResponse;
    toAmino(message: SupplyResponse): SupplyResponseAmino;
    fromAminoMsg(object: SupplyResponseAminoMsg): SupplyResponse;
    fromProtoMsg(message: SupplyResponseProtoMsg): SupplyResponse;
    toProto(message: SupplyResponse): Uint8Array;
    toProtoMsg(message: SupplyResponse): SupplyResponseProtoMsg;
};
